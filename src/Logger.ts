import { writeFile } from 'fs';
import { Trace, StateVariable, StateVariableType } from './types';

export default class Logger {
  private logFile: string;
  public trace: Trace;
  private state: StateVariable<any>[];

  public constructor(logFile: string = 'log.json') {
    this.logFile = logFile;
    this.trace = { steps: [] };
    this.state = [];
  }

  public logIteration() {
    this.trace.steps.push({ state: this.state });
  }

  public write() {
    writeFile(this.logFile, JSON.stringify(this.trace, null, 2), (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  private createProxy(target: any): any {
    return new Proxy(target, {
      set(obj, key, value) {
        console.log('Setting', key, 'to', value);
        return Reflect.set(obj, key, value);
      },
      get(obj, key) {
        const value = Reflect.get(obj, key);
        console.log('Getting', key, 'with value', value);
        return value;
      }
    });
  }

  public recordState<T>(
    initialValue: T,
    type: StateVariableType = StateVariableType.STATIC,
    name?: string
  ): StateVariable<T> {
    const state: StateVariable<T> = { name, type, value: initialValue };

    const stateProxy = this.createProxy(state);
    this.state.push(stateProxy);
    return stateProxy;
  }
}
