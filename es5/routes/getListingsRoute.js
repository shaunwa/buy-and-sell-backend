"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListingsRoute = void 0;

var _fakeListings = require("./fake-listings");

var _database = require("../database");

var getListingsRoute = {
  method: 'GET',
  path: '/api/listings',
  handler: function handler(request, h) {
    try {
      // const { results } = await db.query('SELECT * FROM listings');
      return _fakeListings.listings;
    } catch (e) {
      console.log(e);
      return new Error(e);
    }
  }
};
exports.getListingsRoute = getListingsRoute;