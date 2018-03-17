const mongoose = require('mongoose')
const Schema = mongoose.Schema

  let portoSchema = new Schema({
    url:String,
    image:String,
    description:String,
  },{timestamps : {}})

  let portoModel = mongoose.model('porto',portoSchema)

  module.exports = portoModel