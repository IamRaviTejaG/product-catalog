import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  insertValue: (req, res) => {
    // First check for an existing entry with the same name, as name is unique.
    // If results are found, throw error, else insert new values.
    ItemModel.find({ name: req.body.name }).then(result => {
      if (!result.length) {
        const itemData = new ItemModel({
          name: req.body.name,
          category: req.body.category,
          brandName: req.body.brandname,
          images: req.body.images
        })

        itemData.save().then(result => {
          res.status(200).json({ message: 'Data inserted successfully!', result })
        }).catch(err => {
          res.status(500).json({ error: err })
        })
      } else {
        res.status(403).json({ message: 'Name should be unique!' })
      }
    }).catch(err => {
      res.status(500).json({ error: err })
    })
  }
}
