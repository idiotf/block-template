import type { EntryBlock } from '../entry'

interface EntryHardwareBlockModule {
  setLanguage(): Record<string, Record<string, Record<string, unknown>>>
}

export class EntryModuleLoader {
  setLanguageTemplates(moduleObject: EntryHardwareBlockModule): void
  loadBlocks(blocks: {
    categoryName: string
    blockSchemas: EntryBlockRegisterSchema[]
  }): void
}

/**
 * @see https://github.com/entrylabs/entryjs/blob/5a191f4bb9ed9389f6de77311f5caae3d76dbc63/src/class/entryModuleLoader.ts#L5
 */
interface EntryBlockRegisterSchema {
  blockName: string
  block: EntryBlock
  isBlockShowBlockMenu?: boolean
}
