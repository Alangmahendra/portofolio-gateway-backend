const express = require('express')
const router = express.Router()
const image = require('../midleware/image')
const sandbox = require('../controllers/sandbox')

  router.get('/',sandbox.findAll)
  router.post('/',image.multer.single('image'),image.sendUploadToGCS,sandbox.create)
  router.delete('/:id',sandbox.remove)
  router.put('/:id',image.multer.single('image'),image.sendUploadToGCS,sandbox.update)
  router.get('/:id',sandbox.findone)

module.exports = router