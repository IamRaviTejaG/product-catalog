"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  /**
   * Returns the base HTML page when the base route is hit.
   * @param  req
   * @param  res
   */
  basePage: function basePage(req, res) {
    res.status(200).sendFile(_path["default"].resolve(__dirname, '../static/base.html'));
  }
};
exports["default"] = _default;