export function getAllBlocks(): CategoryData[]
export const colorSet: {
  arrow: Record<keyof ColorSet, Record<string, string>>
  block: Record<keyof ColorSet, Record<string, string>>

  common: {
    TRANSPARENT: string
    TEXT: string
    GRAY: string
  }
}

interface CategoryData {
  category: string
  blocks: string[]
}

interface ColorSet {
  default: string
  darken: string
  lighten: string
  emphasize: string
}
