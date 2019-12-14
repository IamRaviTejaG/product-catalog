import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  removeValueById: (req, res) => {
    ItemModel.deleteOne({ _id: req.params.id }).then(result => {
      if (!result.n) {
        res.status(200).json({ message: 'No matching entry was found!' })
      } else {
        res.status(200).json({ message: 'Removed successsfully!' })
      }
    }).catch(err => {
      res.status(500).json({ error: err })
    })
  },

  removeValueByName: (req, res) => {
    ItemModel.deleteOne({ name: req.params.name }).then(result => {
      if (!result.n) {
        res.status(200).json({ message: 'No matching entry was found!' })
      } else {
        res.status(200).json({ message: 'Deleted successsfully!' })
      }
    }).catch(err => {
      res.status(500).json({ error: err })
    })
  }
}
