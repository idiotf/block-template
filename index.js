import { updateCategory } from './add-block.mjs'

updateCategory('block_template', ['aqu3180_alert', 'aqu3180_console_log'], addBlock => {

addBlock('aqu3180_alert', '%1 경고 창 띄우기', {
  color: '#00a8f3',
  outerline: '#1f8bfd',
}, {
  params: [{
    type: 'Block',
    accept: 'string',
  }],
  def: [],
  map: {
    MESSAGE: 0,
  },
}, 'output', (_sprite, script) => {
  const message = script.getStringValue('MESSAGE')
  alert(message)
})

}, {
  name: 'aqu3180',
  colorOn: '#1f8bfd',
  colorOnText: '#fff',
})
