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
   * Handles the deletion of data.
   * @param  req
   * @param  res
   */
  removeValue: function removeValue(req, res) {
    ItemModel.deleteOne({
      name: req.params.name
    }).then(function (result) {
      if (!result.n) {
        res.status(200).json({
          message: 'No matching entry was found!'
        });
      } else {
        res.status(200).json({
          message: 'Deleted successfully!'
        });
      }
    });
  }
};
exports["default"] = _default;