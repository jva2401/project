"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _indexx = _interopRequireDefault(require("./config/indexx.js"));
require("./config/database/mongo.js");
// console.log(caseEntorno)
_app["default"].listen(_app["default"].get("PORT"), _indexx["default"]);