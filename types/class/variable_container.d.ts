import type { Variable } from './variable'

export class VariableContainer {
  getVariableByName(name: string): Variable | undefined
  getListByName(name: string): Variable | undefined
}
