interface VariableMetadata {
  variableType: 'stt' | 'answer' | 'list' | 'slide' | 'timer' | 'variable'
}

export class Variable {
  static create(variableMetadata: VariableMetadata): Variable

  getName(): string
  appendValue(value: unknown): void
  replaceValue(index: number, value: unknown): void
  deleteValue(index: number): void
  getArray(): { data: unknown }[]
  value_: unknown
}
