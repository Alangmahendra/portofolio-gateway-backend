const Model = require('../models/sandbox')

class Sandbox {

  static findAll(req, res) {
    Model.find({}).then(data => {
      res.status(200).json({ message: 'all data', data: data })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static create(req, res) {
    console.log('masuk')
    let obj = {
      url:req.body.url,
      image:req.cloudStoragePublicUrl,
      description:req.body.description
    }
    Model.create(obj).then(item => {
      res.status(200).json({ message: 'item has been created', data: item })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static remove(req, res) {
    Model.findByIdAndRemove(req.params.id).then(user => {
      res.status(200).json({ message: 'items has been deleted', data: user })
    }).catch(err => {
      es.status(500).json({ message: err })
    })
  }

  static update(req, res) {
    let obj = {
      url:req.body.url,
      image:req.cloudStoragePublicUrl,
      description:req.body.description
    }
    Model.findByIdAndUpdate(req.params.id, obj, { new: true }).then(item => {
      res.status(200).json({ message: 'item has been updated', data: item })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }

  static findone(req, res) {
    Model.findById(req.params.id).then(data => {
      res.status(200).json({ message: 'data finded', data: data })
    })
      .catch(err => {
        res.status(500).json({ message: err })
      })
  }
}

module.exports = Sandbox