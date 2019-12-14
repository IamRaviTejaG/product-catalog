"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
/**
 * Item Schema
 * @constant {Schema}
 */

var itemSchema = {
  name: {
    type: String,
    unique: true,
    select: true,
    trim: true
  },
  category: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  brandname: {
    type: String,
    unique: false,
    select: true,
    trim: true
  },
  images: {
    type: String,
    unique: false,
    select: false,
    trim: true
  }
};
module.exports = new Schema(itemSchema);