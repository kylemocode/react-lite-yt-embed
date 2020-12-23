
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-lite-yt-embed.cjs.production.min.js')
} else {
  module.exports = require('./react-lite-yt-embed.cjs.development.js')
}
