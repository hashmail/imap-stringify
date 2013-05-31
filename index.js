'use strict'

var Transform = require('stream').Transform || require('readable-stream').Transform

module.exports = IMAPLineStringifier

/**
 * Creates a reusable parser for parsing. It is a writable stream for piping
 * data directly in.
 *
 * @constructor
 */
function IMAPLineStringifier(){
  if (!(this instanceof IMAPLineStringifier)) return new IMAPLineStringifier()
  Transform.call(this, {objectMode: true})
}
IMAPLineStringifier.prototype = Object.create(Transform.prototype)
IMAPLineStringifier.prototype.constructor = IMAPLineStringifier

IMAPLineStringifier.prototype._transform = function (chunk, encoding, callback) {
  this.push(chunk.join(' ') + '\r\n')
  callback()
}
