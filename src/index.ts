import './types/index.d.ts'
import { template, field } from './template.ts'
import { type AddBlock, getAddBlock } from './add-block.ts'

declare global {
  var updateCategory: UpdateCategory
  var template: TemplateFunc
  var field: FieldFunc
}

type FieldFunc = typeof field
type TemplateFunc = typeof template

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

if (!self.Entry?.block) await new Promise<void>(resolve => {
  new MutationObserver((_, observer) => {
    if (self.Entry?.block) {
      resolve()
      observer.disconnect()
    }
  }).observe(document, { subtree: true, childList: true })
})

self.updateCategory = updateCategory
self.template = template
self.field = field

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
