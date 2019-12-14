"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemSchema = require('../schema/itemSchema');

var ItemModel = _database["default"].model('item', itemSchema);

var _default = {
  /**
   * Handles the insertion of new data.
   * @param  req
   * @param  res
   */
  insertValue: function insertValue(req, res) {
    // First check for an existing entry with the same name, as name is unique.
    // If results are found, throw error, else insert new values.
    ItemModel.find({
      name: req.body.name
    }).then(function (result) {
      if (!result.length) {
        var itemData = new ItemModel({
          name: req.body.name,
          category: req.body.category,
          brandname: req.body.brandname,
          images: req.body.images
        });
        itemData.save().then(function (result) {
          res.status(200).json({
            message: 'Data inserted successfully!',
            result: result
          });
        });
      } else {
        res.status(200).json({
          message: 'Name should be unique!'
        });
      }
    });
  }
};
exports["default"] = _default;