import ArrayLogger from "./ArrayLogger";

export enum StateVariableType {
  STATIC,
  POINTER
}

export type StateVariable<T> = {
  name?: string;
  id: number;
  type: StateVariableType;
  value: T;
  log: ArrayLogger
};

export interface ITraceStep<T> {
  structure: T  //the state of the visualized structure
  type: string;
  state: Omit<StateVariable<any>,'log'>[] //TODO: do not include log
}

/*
data TraceStep = VariableStep | OperationStep
data B
data C
*/
//export type TraceStep;
export type OperationStep<T> =
  ITraceStep<T> & {
  variables: string/*StateVariable<any>*/[];  //'j' > 4?
  substeps: ITraceStep<T>[];
};

export type VariableStep<T> =
  ITraceStep<T> & {
  variableId: number; //TODO: change from number to 'id'-interface
  value: any;
};

export type Trace<T> = {
  steps: ITraceStep<T>[];
};
