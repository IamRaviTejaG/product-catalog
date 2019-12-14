import dbConnection from '../config/database'
const itemSchema = require('../schema/itemSchema')
const ItemModel = dbConnection.model('item', itemSchema)

export default {
  /**
   * Handles the deletion of data.
   * @param  req
   * @param  res
   */
  removeValue: (req, res) => {
    ItemModel.deleteOne({ name: req.params.name }).then(result => {
      if (!result.n) {
        res.status(200).json({ message: 'No matching entry was found!' })
      } else {
        res.status(200).json({ message: 'Deleted successfully!' })
      }
    })
  }
}
