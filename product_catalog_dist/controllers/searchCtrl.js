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
   * Searches for data by brand name.
   * @param  req
   * @param  res
   */
  searchByBrand: function searchByBrand(req, res) {
    ItemModel.find({
      brandname: req.params.searchQuery
    }).then(function (result) {
      if (!result.length) {
        res.status(200).json({
          message: 'No results found!'
        });
      } else {
        res.status(200).json({
          result: result
        });
      }
    });
  },

  /**
   * Searches for data by item category.
   * @param  req
   * @param  res
   */
  searchByCategory: function searchByCategory(req, res) {
    ItemModel.find({
      category: req.params.searchQuery
    }).then(function (result) {
      if (!result.length) {
        res.status(200).json({
          message: 'No results found!'
        });
      } else {
        res.status(200).json({
          result: result
        });
      }
    });
  },

  /**
   * Searches for data by item name.
   * @param  req
   * @param  res
   */
  searchByName: function searchByName(req, res) {
    ItemModel.find({
      name: req.params.searchQuery
    }).then(function (result) {
      if (!result.length) {
        res.status(200).json({
          message: 'No results found!'
        });
      } else {
        res.status(200).json({
          result: result
        });
      }
    });
  }
};
exports["default"] = _default;