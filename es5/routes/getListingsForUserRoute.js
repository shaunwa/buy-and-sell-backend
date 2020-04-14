"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListingsForUserRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getListingsForUserRoute = {
  method: 'GET',
  path: '/api/users/{userId}/listings',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var userId, _yield$db$query, listings;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userId = req.params.userId;
              _context.prev = 1;
              _context.next = 4;
              return _database.db.query("\n                SELECT * FROM listings WHERE user_id=".concat(userId, "\n            "));

            case 4:
              _yield$db$query = _context.sent;
              listings = _yield$db$query.results;
              return _context.abrupt("return", listings);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              return _context.abrupt("return", new Error(_context.t0));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
};
exports.getListingsForUserRoute = getListingsForUserRoute;