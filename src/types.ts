export enum StateVariableType {
  STATIC,
  POINTER
}

export type StateVariable<T> = {
  name?: string;
  type: StateVariableType;
  value: T;
};

export type TraceStep = {
  state: StateVariable<any>[];
};

export type Trace = {
  steps: TraceStep[];
};
