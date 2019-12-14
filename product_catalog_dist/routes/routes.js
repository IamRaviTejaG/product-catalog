"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _baseCtrl = _interopRequireDefault(require("../controllers/baseCtrl"));

var _insertionCtrl = _interopRequireDefault(require("../controllers/insertionCtrl"));

var _removeCtrl = _interopRequireDefault(require("../controllers/removeCtrl"));

var _searchCtrl = _interopRequireDefault(require("../controllers/searchCtrl"));

var _updateCtrl = _interopRequireDefault(require("../controllers/updateCtrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = function routes(router) {
  // Base route
  router.route('/').get(_baseCtrl["default"].basePage); // Insertion routes

  router.route('/insert').post(_insertionCtrl["default"].insertValue); // Deletion routes

  router.route('/delete/:name').get(_removeCtrl["default"].removeValue); // Search routes

  router.route('/search/brand/:searchQuery').get(_searchCtrl["default"].searchByBrand);
  router.route('/search/category/:searchQuery').get(_searchCtrl["default"].searchByCategory);
  router.route('/search/name/:searchQuery').get(_searchCtrl["default"].searchByName); // Updation routes

  router.route('/update/byId/:id').put(_updateCtrl["default"].updateValueById);
  router.route('/update/byName/:name').put(_updateCtrl["default"].updateValueByName);
};

var _default = routes;
exports["default"] = _default;