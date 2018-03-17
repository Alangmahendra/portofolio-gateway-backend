const express = require('express')
const router = express.Router()
const image = require('../midleware/image')
const porto = require('../controllers/portofolio')

  router.get('/',porto.findAll)
  router.post('/',image.multer.single('image'),image.sendUploadToGCS,porto.create)
  router.delete('/:id',porto.remove)
  router.put('/:id',image.multer.single('image'),image.sendUploadToGCS,porto.update)
  router.get('/:id',porto.findone)

module.exports = router