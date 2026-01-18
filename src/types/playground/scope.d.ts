import type { STATIC } from '../util/static'
import type { EntityObject } from '../class/entity'

export class Scope<ParamsKey extends string> {
  block: unknown
  type: string | null //legacy
  executor: unknown
  entity?: EntityObject

  constructor(block: unknown, executor: unknown)

  callReturn(this: this): void
  getParam(this: this, index: number): unknown

  // 클래스 레벨에서 한 번만 생성
  static _reservedKeywords: Set<unknown>  

  filterReservedKeywords<T>(this: this, param: T): T | ''
  getParams(this: this): unknown

  _setBlockState(this: this, fieldBlock: unknown, valueState: unknown): void
  _setChildBlockState(this: this, fieldBlocks: unknown, currentBlockId: unknown): void

  getValue(this: this, key: ParamsKey, scope?: this): unknown
  getValues<const T extends ParamsKey[]>(this: this, keys: T, scope?: this): {
    [K in keyof T]: unknown
  }

  /**
   * 일반 getValue 값을 가져오기 전,
   * 현 Scope 상태에서의 executor.valueMap 을 세팅한다.
   * 이 로직은 Promise.all[] 과 유사하며, 모든 값이 준비될 때까지 Scope 를 멈춘다.
   * @param fieldBlocks getValue 에 의한 호출의 경우 1, getValues 의 경우 1 이상
   */
  _setExecutorValueMap(this: this, fieldBlocks: unknown[]): void

  getStringValue(this: this, key: ParamsKey, scope?: this): string
  getNumberValue(this: this, key: ParamsKey, scope?: this): number
  getBooleanValue(this: this, key: ParamsKey, scope?: this): boolean | number

  getField(this: this, key: ParamsKey, scope?: this): unknown
  getStringField(this: this, key: ParamsKey, scope?: this): string
  getNumberField(this: this, key: ParamsKey, scope?: this): number

  getStatement(this: this, key: ParamsKey, scope?: this): typeof STATIC.BREAK | typeof STATIC.CONTINUE

  _getParamIndex(this: this, key: ParamsKey, scope?: this): number
  _getStatementIndex(this: this, key: ParamsKey, scope?: this): number

  die(this: this): typeof STATIC.BREAK
  run(this: this, entity: unknown, isValue?: boolean): unknown
}
