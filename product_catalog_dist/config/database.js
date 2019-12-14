"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var dbURL = "mongodb+srv://heroku:".concat(process.env.MONGO_PASS, "@cluster0-l0l9c.mongodb.net/").concat(process.env.MONGO_DBNAME);
var dbOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

var dbConnection = _mongoose["default"].createConnection(dbURL, dbOptions);

var _default = dbConnection;
exports["default"] = _default;