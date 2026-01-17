// @ts-check

/// <reference path='./types/index.d.ts' />

/** @import { EntityObject } from './types/class/entity' */
/** @import { Field, Scope, Skeleton } from './types/entry' */

/**
 * 엔트리 로딩 완료 시, 카테고리를 새로 추가하고 적용합니다.
 * @template {string[]} const Blocks
 * @param {string} category 새로 추가할 카테고리 내부 이름입니다.
 * @param {Blocks} blocks 새로 추가할 카테고리 블록 배열입니다.
 * @param {(addBlock: ReturnType<typeof getAddBlock<Blocks[number]>>) => void} callback 카테고리에 추가할 블록을 addBlock으로 추가하는 콜백입니다.
 * @param {Object} [options] 카테고리에 추가할 이름, 아이콘 등의 추가 설정입니다.
 * @param {string} [options.name] 카테고리의 표시 이름입니다.
 * @param {string} [options.background] 카테고리의 아이콘 url입니다.
 * @param {string} [options.backgroundOn] 카테고리가 선택되었을 때의 아이콘 url입니다.
 * @param {string} [options.backgroundSize] 카테고리의 아이콘 크기(px)입니다.
 * @param {string} [options.colorOn] 카테고리가 선택되었을 때의 표시 색깔입니다.
 * @param {string} [options.colorOnText] 카테고리가 선택되었을 때의 텍스트 색깔입니다.
 */
export function updateCategory(category, blocks, callback, options) {
  if (!window.Entry || !Entry.block) {
    new MutationObserver((_, observer) => {
      if (window.Entry && Entry.block) {
        updateCategory(category, blocks, callback, options)
        observer.disconnect()
      }
    }).observe(document, { subtree: true, childList: true })

    return
  }

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

  if (options?.background) {
    const style = document.head.appendChild(document.createElement('style'))
    style.textContent = `
      #entryCategory${category} {
        background-image: url(${options.background});
        background-repeat: no-repeat;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        margin-bottom: 1px;
        ${options.backgroundSize ? `
          background-size: ${options.backgroundSize}px;
        ` : ''}
      }

      .entrySelectedCategory#entryCategory${category} {
        background-image: url(${options.backgroundOn});
        ${options.colorOn ? `
          background-color: ${options.colorOn};
          border-color: ${options.colorOn};
        ` : ''}
        ${options.colorOnText ? `
          color: ${options.colorOnText};
        ` : ''}
      }
    `
  }
}

/**
 * @template {string} BlockName
 * @typedef {BlockName | (string & Record<never, never>)} LiteralUnion
 */

/**
 * @template {string} BlockName
 * @param {string} categoryName
 */
const getAddBlock = categoryName =>
  /**
   * Entry.block에 새로운 블록을 등록합니다.
   * @template {string} ParamsKey
   * @param {LiteralUnion<BlockName>} blockname 블록의 내부 이름입니다.
   * @param {string} template 블록의 텍스트 템플릿입니다.
   * @param {Object} color 블록의 색깔 정보입니다.
   * @param {string} color.color 블록의 색깔입니다.
   * @param {string} color.outerline 블록의 테두리 색깔입니다.
   * @param {Object} params 블록의 매개변수 정보입니다.
   * @param {(Field & Record<string, unknown>)[]} params.params 블록의 매개변수 배열입니다.
   * @param {object[]} params.def 블록의 매개변수 기본값입니다.
   * @param {Record<ParamsKey, number>} params.map 블록의 매개변수가 각각 몇 번째 인덱스에 대응하는지 나타내는 객체입니다.
   * @param {string} [_class] 블록을 구분할 그룹 이름입니다.
   * @param {(sprite: EntityObject, script: Scope<ParamsKey>) => unknown} [func] 블록이 실행될 때 호출되는 함수입니다.
   * @param {Skeleton} [skeleton] 블록의 모양입니다.
   */
  function addBlockFunc(blockname, template, { color, outerline }, { params, def, map }, _class, func, skeleton = 'basic') {
    Entry.moduleManager?.loadBlocks({
      categoryName,
      blockSchemas: [{
        blockName: blockname,
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
            type: blockname,
          },
          paramsKeyMap: map,
          class: _class || 'default',
          func,
          template,
        }
      }],
    })
  }
