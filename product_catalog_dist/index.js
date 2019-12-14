"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./config/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var server = _app["default"].listen(process.env.PORT, process.env.HOST, function () {
  console.log("Server live at http://".concat(process.env.HOST, ":").concat(process.env.PORT));
});

var _default = server;
exports["default"] = _default;