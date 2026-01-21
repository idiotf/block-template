import type { Template } from './template'
import type { EntityObject } from './types/class/entity'
import type { Field, Scope, Skeleton } from './types/entry'

type LiteralUnion<BlockName extends string> = BlockName | (string & Record<never, never>)

export interface AddBlock<BlockName extends string> {
  /**
   * Entry.block에 새로운 블록을 등록합니다.
   * @param blockName 블록의 내부 이름입니다.
   * @param template 블록의 텍스트 템플릿입니다.
   * @param colors 블록의 색깔 정보입니다.
   * @param colors.color 블록의 색깔입니다.
   * @param colors.outerline 블록의 테두리 색깔입니다.
   * @param param 블록의 매개변수 정보입니다.
   * @param param.params 블록의 매개변수 배열입니다.
   * @param param.def 블록의 매개변수 기본값입니다.
   * @param param.map 블록의 매개변수가 각각 몇 번째 인덱스에 대응하는지 나타내는 객체입니다.
   * @param _class 블록을 구분할 그룹 이름입니다.
   * @param func 블록이 실행될 때 호출되는 함수입니다.
   * @param skeleton 블록의 모양입니다.
   */
  <ParamsKey extends string>(
    blockName: LiteralUnion<BlockName>,
    template: string | Template,
    colors: {
      color: string
      outerline?: string
    },
    param: {
      params?: (Field & Record<string, unknown>)[]
      def?: object[]
      map?: Record<ParamsKey, number>
    },
    _class?: string,
    func?: (sprite: EntityObject, script: Scope<ParamsKey>) => unknown,
    skeleton?: Skeleton,
  ): void
}

export const getAddBlock = <BlockName extends string>(categoryName: string) =>
  function addBlock<ParamsKey extends string>(
    blockName: LiteralUnion<BlockName>,
    template: string | Template,
    colors: {
      color: string
      outerline?: string
    },
    param: {
      params?: (Field & Record<string, unknown>)[]
      def?: object[]
      map?: Record<ParamsKey, number>
    },
    _class?: string,
    func?: (sprite: EntityObject, script: Scope<ParamsKey>) => unknown,
    skeleton: Skeleton = 'basic',
  ) {
    const { color, outerline } = colors
    const { params, def, map } = param

    Entry.moduleManager?.loadBlocks({
      categoryName,
      blockSchemas: [{
        blockName,
        isBlockShowBlockMenu: true,
        block: {
          color,
          outerLine: outerline,
          skeleton,
          statement: [],
          params: typeof template == 'object' ? template.params : params,
          events: {},
          def: {
            params: def,
            type: blockName,
          },
          paramsKeyMap: map,
          class: _class || 'default',
          func,
          template: typeof template == 'object' ? template.template : template,
        }
      }],
    })
  }
