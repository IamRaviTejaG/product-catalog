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
   * Updates the pre-existing data by searching by ID.
   * @param  req
   * @param  res
   */
  updateValueById: function updateValueById(req, res) {
    ItemModel.updateOne({
      _id: req.params.id
    }, req.body).then(function (result) {
      if (!result.n) {
        res.status(200).json({
          message: 'No matching entry was found!'
        });
      } else {
        res.status(200).json({
          message: 'Updated successfully!'
        });
      }
    });
  },

  /**
   * Updates the pre-existing data by searching by name.
   * @param  req
   * @param  res
   */
  updateValueByName: function updateValueByName(req, res) {
    ItemModel.updateOne({
      name: req.params.name
    }, req.body).then(function (result) {
      if (!result.n) {
        res.status(200).json({
          message: 'No matching entry was found!'
        });
      } else {
        res.status(200).json({
          message: 'Updated successfully!'
        });
      }
    });
  }
};
exports["default"] = _default;