// @ts-check

/// <reference path='../dist/index.d.ts' />
// @ts-ignore
await import('https://raw.githack.com/idiotf/block-template/v0.1.2/dist/index.js');

const c2 = '#00a8f3';
const o2 = '#1f8bfd';

updateCategory('block_template', ['aqu3180_title', 'if_scene_is'], addBlock => {

addBlock('aqu3180_title', '%1', {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {
  params: [{
    type: 'Text',
    text: 'aqu3180',
    align: 'center',
    color: EntryStatic.colorSet.common.TEXT,
  }],
}, 'text', () => {}, 'basic_text')

addBlock('if_scene_is', '만약 현재 장면이 %1 이라면', {
  color: c2,
  outerline: o2,
}, {
  params: [
    {
      type: 'DropdownDynamic',
      value: null,
      menuName: 'scenes',
      fontSize: 11,
      bgColor: o2,
      arrowColor: EntryStatic.colorSet.common.WHITE,
    },
  ],
  def: [],
  map: {
    ID: 0,
  },
}, 'text', (_sprite, script) => {
  const id = script.getStringField('ID', script);
  return Entry.scene?.selectedScene?.id == id;
}, 'basic_boolean_field');

}, {
  name: 'aqu3180',
  background: 'https://playentry.org/uploads/core_ent.svg',
  backgroundOn: 'https://playentry.org/uploads/core_ent_on.svg',
  colorOn: c2,
  colorOnText: EntryStatic.colorSet.common.WHITE,
});
