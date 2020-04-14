"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createListingRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _uuid = require("uuid");

var _database = require("../database");

var createListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: function () {
    var _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, h) {
      var newListing, name, description, price, id, userId, _yield$db$query, results;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newListing = req.payload.newListing;
              name = newListing.name, description = newListing.description, price = newListing.price;
              id = (0, _uuid.v4)();
              userId = '99999'; // In real life, we'd get this value from the auth provider

              _context.prev = 4;
              _context.next = 7;
              return _database.db.query("\n                INSERT INTO listings (id, name, description, price, user_id)\n                VALUES ('".concat(id, "', '").concat(name, "', '").concat(description, "', ").concat(price, ", ").concat(userId, ")\n            "));

            case 7:
              _yield$db$query = _context.sent;
              results = _yield$db$query.results;
              return _context.abrupt("return", {
                id: id,
                name: name,
                description: description,
                price: price,
                user_id: userId
              });

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);
              return _context.abrupt("return", new Error(_context.t0));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
    }));

    function handler(_x, _x2) {
      return _handler.apply(this, arguments);
    }

    return handler;
  }()
};
exports.createListingRoute = createListingRoute;