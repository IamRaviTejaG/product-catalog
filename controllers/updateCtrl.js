import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  updateValueById: (req, res) => {
    ItemModel.updateOne({ _id: req.params.id }, req.body).then(result => {
      if (!result.n) {
        res.status(200).json({ message: 'No matching entry was found!' })
      } else {
        res.status(200).json({ message: 'Updated successfully!' })
      }
    })
  },

  updateValueByName: (req, res) => {
    ItemModel.updateOne({ name: req.params.name }, req.body).then(result => {
      if (!result.n) {
        res.status(200).json({ message: 'No matching entry was found!' })
      } else {
        res.status(200).json({ message: 'Updated successfully!' })
      }
    })
  }
}
