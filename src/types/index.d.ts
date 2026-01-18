declare global {
  var Entry: typeof import('./entry')
  var Lang: typeof import('./lang')
  var EntryStatic: typeof import('./entry-static')
  var user: {
    _id: string
    username: string
  } | null
}

export { EntryBlockModule, EntryBlock } from './entry'
