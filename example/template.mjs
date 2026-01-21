// @ts-check

/// <reference path='../dist/index.d.ts' />
// @ts-ignore
await import('https://raw.githack.com/idiotf/block-template/v0.2.0/dist/index.js');

const c2 = '#00a8f3';
const o2 = '#1f8bfd';

updateCategory('block_template', ['aqu3180_title', 'if_scene_is'], addBlock => {

addBlock('aqu3180_title', template`${field.text('aqu3180', true)}`, {
  color: EntryStatic.colorSet.common.TRANSPARENT,
}, {}, 'text', () => {}, 'basic_text')

addBlock('if_scene_is', template`만약 현재 장면이 ${field.dropdownDynamic('scenes', o2)} 이라면`, {
  color: c2,
  outerline: o2,
}, {
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
