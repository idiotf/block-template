export function getAllBlocks(): CategoryData[]
export const colorSet: {
  arrow: Record<keyof ColorSet, Record<string, string>>
  block: Record<keyof ColorSet, Record<string, string>>

  common: {
    ALERT: string
    BUTTON: string
    BUTTON_BACKGROUND: string
    BUTTON_BACKGROUND_DISABLED: string
    BUTTON_DISABLED: string
    DARK: string
    GRAY: string
    TEXT: string
    TRANSPARENT: string
    WHITE: string
  }
}

interface CategoryData {
  category: string
  blocks: string[]
}

export interface ColorSet {
  default: string
  darken: string
  lighten: string
  emphasize: string
}
