import type { Field, FieldDropdownDynamic, FieldText } from './types/entry'

export interface Template {
  template: string
  params: (Field | Field & Record<string, unknown>)[]
}

export function template(strings: TemplateStringsArray, ...params: (Field | Field & Record<string, unknown>)[]) {
  return {
    template: strings.reduce((acc, str, i) => `${acc}%${i}${str}`),
    params,
  }
}

export const field = {
  text: (text: string, center?: boolean, color = EntryStatic.colorSet.common.TEXT): FieldText => ({
    type: 'Text',
    text,
    align: center ? 'center' : 'left',
    color,
  }),

  dropdownDynamic: (menuName: string, bgColor: string, arrowColor = EntryStatic.colorSet.common.WHITE, fontSize = 11): FieldDropdownDynamic => ({
    type: 'DropdownDynamic',
    value: null,
    menuName,
    fontSize,
    bgColor,
    arrowColor,
  })
}
