import { Cycle } from './reducer'

export enum CycleActionTypes {
  ADD = 'ADD',
  PAUSE = 'PAUSE',
  FINISH = 'FINISH',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CycleActionTypes.ADD,
    payload: {
      newCycle,
    },
  }
}

export function pauseCycleAction() {
  return {
    type: CycleActionTypes.PAUSE,
  }
}

export function finishCycleAction() {
  return {
    type: CycleActionTypes.FINISH,
  }
}
