import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  /**
   * Searches for data by brand name.
   * @param  req
   * @param  res
   */
  searchByBrand: (req, res) => {
    ItemModel.find({ brandname: req.params.searchQuery }).then(result => {
      if (!result.length) {
        res.status(200).json({ message: 'No results found!' })
      } else {
        res.status(200).json({ result })
      }
    })
  },

  /**
   * Searches for data by item category.
   * @param  req
   * @param  res
   */
  searchByCategory: (req, res) => {
    ItemModel.find({ category: req.params.searchQuery }).then(result => {
      if (!result.length) {
        res.status(200).json({ message: 'No results found!' })
      } else {
        res.status(200).json({ result })
      }
    })
  },

  /**
   * Searches for data by item name.
   * @param  req
   * @param  res
   */
  searchByName: (req, res) => {
    ItemModel.find({ name: req.params.searchQuery }).then(result => {
      if (!result.length) {
        res.status(200).json({ message: 'No results found!' })
      } else {
        res.status(200).json({ result })
      }
    })
  }
}
