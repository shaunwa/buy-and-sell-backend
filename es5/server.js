"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var _inert = _interopRequireDefault(require("@hapi/inert"));

var _routes = require("./routes");

var _database = require("./database");

var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            server = _hapi["default"].server({
              port: 3000,
              host: 'localhost'
            });
            _context.next = 3;
            return server.register(_inert["default"]);

          case 3:
            _routes.routes.forEach(function (route) {
              server.route(route);
            }); // db.connect();


            _context.next = 6;
            return server.start();

          case 6:
            console.log("Server is listening on ".concat(server.info.uri));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

process.on('unhandledRejection', function (err) {
  console.log(err); // db.end();

  process.exit(1);
});
start();