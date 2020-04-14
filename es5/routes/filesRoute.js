"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesRoute = void 0;
var filesRoute = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'dist/buy-and-sell'
    }
  }
};
exports.filesRoute = filesRoute;