import './globals/entry.d.ts'
import './globals/lang.d.ts'
import './globals/entry-static.d.ts'

declare global {
  var user: {
    _id: string
    username: string
  } | null
}
