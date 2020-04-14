"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _getListingByIdRoute = require("./getListingByIdRoute");

var _getListingsRoute = require("./getListingsRoute");

var _getListingsForUserRoute = require("./getListingsForUserRoute");

var _createListingRoute = require("./createListingRoute");

var _filesRoute = require("./filesRoute");

var routes = [_getListingByIdRoute.getListingByIdRoute, _getListingsRoute.getListingsRoute, _getListingsForUserRoute.getListingsForUserRoute, _createListingRoute.createListingRoute, _filesRoute.filesRoute];
exports.routes = routes;