import './types/index.d.ts'
import type { EntityObject } from './types/class/entity'
import type { Field, Scope, Skeleton } from './types/entry'

type UpdateCategory =
  /**
   * 엔트리 로딩 완료 시, 카테고리를 새로 추가하고 적용합니다.
   * @param category 새로 추가할 카테고리 내부 이름입니다.
   * @param blocks 새로 추가할 카테고리 블록 배열입니다.
   * @param callback 카테고리에 추가할 블록을 addBlock으로 추가하는 콜백입니다.
   * @param options 카테고리에 추가할 이름, 아이콘 등의 추가 설정입니다.
   * @param options.name 카테고리의 표시 이름입니다.
   * @param options.background 카테고리의 아이콘 url입니다.
   * @param options.backgroundOn 카테고리가 선택되었을 때의 아이콘 url입니다.
   * @param options.backgroundSize 카테고리의 아이콘 크기(px)입니다.
   * @param options.colorOn 카테고리가 선택되었을 때의 표시 색깔입니다.
   * @param options.colorOnText 카테고리가 선택되었을 때의 텍스트 색깔입니다.
   */
  <const Blocks extends string[]>(
    category: string,
    blocks: Blocks,
    callback: (addBlock: AddBlock<Blocks[number]>) => void,
    options: {
      name?: string
      background?: string
      backgroundOn?: string
      backgroundSize?: string
      colorOn?: string
      colorOnText?: string
    },
  ) => void

declare global {
  var updateCategory: UpdateCategory
}

if (!self.Entry?.block) await new Promise<void>(resolve => {
  new MutationObserver((_, observer) => {
    if (self.Entry?.block) {
      resolve()
      observer.disconnect()
    }
  }).observe(document, { subtree: true, childList: true })
})

self.updateCategory = updateCategory

function updateCategory<const Blocks extends string[]>(
  category: string,
  blocks: Blocks,
  callback: (addBlock: AddBlock<Blocks[number]>) => void,
  options: {
    name?: string
    background?: string
    backgroundOn?: string
    backgroundSize?: string
    colorOn?: string
    colorOnText?: string
  },
) {
  if (EntryStatic.getAllBlocks().some(block => category == block.category)) return
  if (options?.name) Lang.Blocks[category.toUpperCase()] = options.name

  EntryStatic.getAllBlocks = (getAllBlocks => () => [
    ...getAllBlocks(),
    {
      category,
      blocks,
    },
  ])(EntryStatic.getAllBlocks)

  Entry.playground?.blockMenu?._categoryData.push({
    category,
    blocks: [],
  })

  Entry.playground?.blockMenu?._generateCategoryView(Entry.playground.blockMenu._categoryData)
  Entry.playground?.blockMenu?._generateCategoryCode(category)

  callback(getAddBlock(category))
  Entry.playground?.blockMenu?.setMenu()

  if (!options) return

  const sheet = new CSSStyleSheet
  sheet.replaceSync(`#entryCategory${category}{background-repeat:no-repeat;${options.background ? `background-image:url(${options.background});` : ''}${options.backgroundSize ? `background-size:${options.backgroundSize}px` : ''}}.entrySelectedCategory#entryCategory${category}{${options.backgroundOn ? `background-image:url(${options.backgroundOn});` : ''}${options.colorOn ? `background-color:${options.colorOn};border-color:${options.colorOn};` : ''}${options.colorOnText ? `color:${options.colorOnText}` : ''}}`)
  document.adoptedStyleSheets.push(sheet)
}

type LiteralUnion<BlockName extends string> = BlockName | (string & Record<never, never>)
type AddBlock<BlockName extends string> =
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
    template: string,
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
  ) => void

const getAddBlock = <BlockName extends string>(categoryName: string) =>
  function addBlock<ParamsKey extends string>(
    blockName: LiteralUnion<BlockName>,
    template: string,
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
          params,
          events: {},
          def: {
            params: def,
            type: blockName,
          },
          paramsKeyMap: map,
          class: _class || 'default',
          func,
          template,
        }
      }],
    })
  }
