const mongoose = require('mongoose')
const Schema = mongoose.Schema

let sandboxSchema = new Schema({
  url: String,
  image: String,
  description: String,
}, { timestamps: {} })

let sandboxModel = mongoose.model('sandbox', sandboxSchema)

module.exports = sandboxModel