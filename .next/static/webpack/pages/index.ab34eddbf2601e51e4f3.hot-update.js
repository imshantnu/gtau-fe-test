webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





var _this = undefined,
    _jsxFileName = "/mnt/c/Users/m054777/Downloads/gtau-fe-test/components/Listings.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var STATE = Object.freeze({
  IDLE: "idle",
  FETCHING: "fetching",
  ERROR: "error"
});
var ACTIONS = Object.freeze({
  FETCH_LISTINGS: "FETCH_LISTINGS",
  FETCH_LISTINGS_SUCCESS: "FETCH_LISTINGS_SUCCESS",
  FETCH_LISTINGS_ERROR: "FETCH_LISTINGS_ERROR",
  VIEW_LISTING: "VIEW_LISTING",
  REPLY: "REPLY"
}); //Initial State and Actions

var initialState = {
  listings: [],
  // array of listing object,
  state: STATE.IDLE,
  // enum state of page/slice "idle" | "fetching" | "error",
  error: undefined // error message

};

var listingsReducer = function listingsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_LISTINGS:
      return _objectSpread(_objectSpread({}, state), {}, {
        state: STATE.FETCHING,
        listings: []
      });

    case ACTIONS.FETCH_LISTINGS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        state: STATE.IDLE,
        listings: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(action.listings)
      });

    case ACTIONS.FETCH_LISTINGS_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        state: STATE.ERROR,
        listings: [],
        error: action.error
      });

    case ACTIONS.VIEW_LISTING:
    case ACTIONS.REPLY:
    default:
      return state;
  }
};

var ListingsContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext();

var ListingsProvider = function ListingsProvider(_ref) {
  _s();

  var children = _ref.children;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useReducer(listingsReducer, initialState),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var value = {
    listings: state.listings,
    state: state.state,
    error: state.error,
    fetch: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (endpoint, query) {
      dispatch({
        type: ACTIONS.FETCH_LISTINGS
      });
      fetch(endpoint).then(function (response) {
        return response.json();
      }).then(function (response) {
        dispatch({
          type: ACTIONS.FETCH_LISTINGS_SUCCESS,
          listings: response
        });
      })["catch"](function (error) {
        dispatch({
          type: ACTIONS.FETCH_LISTINGS_ERROR,
          error: error.message
        });
      });
    }),
    view: function view(title) {
      console.info("View: ".concat(title));
      dispatch({
        type: ACTIONS.VIEW_LISTING
      });
    },
    reply: function reply(title) {
      console.info("Reply: ".concat(title));
      dispatch({
        type: ACTIONS.REPLY
      });
    }
  };
  return __jsx(ListingsContext.Provider, {
    value: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, children);
};

_s(ListingsProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = ListingsProvider;

var formatAsCurrency = function formatAsCurrency(_int) {// TODO
};

var Listing = function Listing(_ref2) {
  var listing = _ref2.listing,
      key = _ref2.key;
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    role: "listitem",
    key: key,
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, JSON.stringify(listing));
};

_c2 = Listing;

var Spinner = function Spinner() {
  return __jsx("div", {
    className: "spinner__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }));
};

_c3 = Spinner;

var Error = function Error(_ref3) {
  var error = _ref3.error;
  return __jsx("div", {
    className: "listings__error",
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "listings__errorMessage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "An error occured, Server responded with ", error, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Reload to try again!")), __jsx("button", {
    className: "listings__button",
    onClick: function onClick() {
      return location.reload();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, "Reload"));
};

_c4 = Error;

var ListingsContainer = function ListingsContainer(_ref4) {
  _s2();

  var dataEndpoint = _ref4.dataEndpoint,
      _ref4$keyword = _ref4.keyword,
      keyword = _ref4$keyword === void 0 ? "" : _ref4$keyword,
      location = _ref4.location;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(ListingsContext),
      state = _React$useContext.state,
      fetch = _React$useContext.fetch,
      error = _React$useContext.error,
      listings = _React$useContext.listings,
      view = _React$useContext.view,
      reply = _React$useContext.reply;

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    fetch(dataEndpoint, keyword);
  }, [dataEndpoint, keyword]);

  if (state === STATE.FETCHING) {
    return __jsx(Spinner, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 12
      }
    });
  }

  if (state === STATE.ERROR && error) {
    return __jsx(Error, {
      error: error,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, "Search results"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, listings.length, " results"), " ", "for ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, keyword), " in", " ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, location))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, listings.length === 0 && __jsx("span", {
    className: "listings__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, "No results found!"), listings.length > 0 && __jsx("section", {
    role: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, listings.map(function (listing, index) {
    return __jsx(Listing, {
      listing: listing,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    });
  }))));
};

_s2(ListingsContainer, "6EnKbkWSF3c0tcPcCZkQW2TB/YQ=");

_c5 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 3
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  })));
};

_c6 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ListingsProvider");
$RefreshReg$(_c2, "Listing");
$RefreshReg$(_c3, "Spinner");
$RefreshReg$(_c4, "Error");
$RefreshReg$(_c5, "ListingsContainer");
$RefreshReg$(_c6, "Listings");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInZpZXciLCJ0aXRsZSIsImNvbnNvbGUiLCJpbmZvIiwicmVwbHkiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiTGlzdGluZyIsImxpc3RpbmciLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwiU3Bpbm5lciIsIkVycm9yIiwibG9jYXRpb24iLCJyZWxvYWQiLCJMaXN0aW5nc0NvbnRhaW5lciIsImRhdGFFbmRwb2ludCIsImtleXdvcmQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJMaXN0aW5ncyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMxQkMsTUFBSSxFQUFFLE1BRG9CO0FBRTFCQyxVQUFRLEVBQUUsVUFGZ0I7QUFHMUJDLE9BQUssRUFBRTtBQUhtQixD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosRUFLRzNDLFFBQVEsQ0FBQzJDLE1BQVQsR0FBa0IsQ0FBbEIsSUFDQztBQUFTLFFBQUksRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzNDLFFBQVEsQ0FBQzRDLEdBQVQsQ0FBYSxVQUFDZCxPQUFELEVBQVVlLEtBQVY7QUFBQSxXQUNaLE1BQUMsT0FBRDtBQUFTLGFBQU8sRUFBRWYsT0FBbEI7QUFBMkIsU0FBRyxFQUFFZSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFk7QUFBQSxHQUFiLENBREgsQ0FOSixDQVpGLENBREY7QUE0QkQsQ0E1Q0Q7O0lBQU1QLGlCOztNQUFBQSxpQjs7QUE4Q04sSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2YsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpQkFBRCx5RkFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURlO0FBQUEsQ0FBakI7O01BQU1ELFE7QUFNU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIzNGVkZGJmMjYwMWU1MWU0ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNUQVRFID0gT2JqZWN0LmZyZWV6ZSh7XG4gIElETEU6IFwiaWRsZVwiLFxuICBGRVRDSElORzogXCJmZXRjaGluZ1wiLFxuICBFUlJPUjogXCJlcnJvclwiLFxufSk7XG5jb25zdCBBQ1RJT05TID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEZFVENIX0xJU1RJTkdTOiBcIkZFVENIX0xJU1RJTkdTXCIsXG4gIEZFVENIX0xJU1RJTkdTX1NVQ0NFU1M6IFwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTU1wiLFxuICBGRVRDSF9MSVNUSU5HU19FUlJPUjogXCJGRVRDSF9MSVNUSU5HU19FUlJPUlwiLFxuICBWSUVXX0xJU1RJTkc6IFwiVklFV19MSVNUSU5HXCIsXG4gIFJFUExZOiBcIlJFUExZXCIsXG59KTtcblxuLy9Jbml0aWFsIFN0YXRlIGFuZCBBY3Rpb25zXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxpc3RpbmdzOiBbXSwgLy8gYXJyYXkgb2YgbGlzdGluZyBvYmplY3QsXG4gIHN0YXRlOiBTVEFURS5JRExFLCAvLyBlbnVtIHN0YXRlIG9mIHBhZ2Uvc2xpY2UgXCJpZGxlXCIgfCBcImZldGNoaW5nXCIgfCBcImVycm9yXCIsXG4gIGVycm9yOiB1bmRlZmluZWQsIC8vIGVycm9yIG1lc3NhZ2Vcbn07XG5cbmNvbnN0IGxpc3RpbmdzUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLkZFVENISU5HLFxuICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5JRExFLFxuICAgICAgICBsaXN0aW5nczogWy4uLmFjdGlvbi5saXN0aW5nc10sXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuRVJST1IsXG4gICAgICAgIGxpc3RpbmdzOiBbXSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG5cbiAgICBjYXNlIEFDVElPTlMuVklFV19MSVNUSU5HOlxuICAgIGNhc2UgQUNUSU9OUy5SRVBMWTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBMaXN0aW5nc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IExpc3RpbmdzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihsaXN0aW5nc1JlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgbGlzdGluZ3M6IHN0YXRlLmxpc3RpbmdzLFxuICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgZmV0Y2g6IChlbmRwb2ludCwgcXVlcnkpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HUyB9KTtcbiAgICAgIGZldGNoKGVuZHBvaW50KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTLFxuICAgICAgICAgICAgbGlzdGluZ3M6IHJlc3BvbnNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUixcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXc6ICh0aXRsZSkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKGBWaWV3OiAke3RpdGxlfWApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlZJRVdfTElTVElORyB9KTtcbiAgICB9LFxuICAgIHJlcGx5OiAodGl0bGUpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUmVwbHk6ICR7dGl0bGV9YCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuUkVQTFkgfSk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0aW5nc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RpbmdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIFRPRE9cbn07XG5cbmNvbnN0IExpc3RpbmcgPSAoeyBsaXN0aW5nLCBrZXkgfSkgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcm9sZT1cImxpc3RpdGVtXCIga2V5PXtrZXl9IGNsYXNzTmFtZT1cImxpc3RpbmdcIj5cbiAgICAgIHtKU09OLnN0cmluZ2lmeShsaXN0aW5nKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lcl9fY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBFcnJvciA9ICh7IGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19lcnJvck1lc3NhZ2VcIj5cbiAgICAgIDxoMz5BbiBlcnJvciBvY2N1cmVkLCBTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge2Vycm9yfSE8L2gzPlxuICAgICAgPHA+UmVsb2FkIHRvIHRyeSBhZ2FpbiE8L3A+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCIgb25DbGljaz17KCkgPT4gbG9jYXRpb24ucmVsb2FkKCl9PlxuICAgICAgUmVsb2FkXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdGluZ3NDb250YWluZXIgPSAoeyBkYXRhRW5kcG9pbnQsIGtleXdvcmQgPSBcIlwiLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGZldGNoLCBlcnJvciwgbGlzdGluZ3MsIHZpZXcsIHJlcGx5IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoTGlzdGluZ3NDb250ZXh0KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGRhdGFFbmRwb2ludCwga2V5d29yZCk7XG4gIH0sIFtkYXRhRW5kcG9pbnQsIGtleXdvcmRdKTtcblxuICBpZiAoc3RhdGUgPT09IFNUQVRFLkZFVENISU5HKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSBTVEFURS5FUlJPUiAmJiBlcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2hlYWRlclwiPlxuICAgICAgICA8aDE+U2VhcmNoIHJlc3VsdHM8L2gxPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj5cbiAgICAgICAgICAgIHtsaXN0aW5ncy5sZW5ndGh9IHJlc3VsdHNcbiAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgIGZvciA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fdGV4dC0taGlnbGlnaHRlZFwiPntrZXl3b3JkfTwvc3Bhbj4gaW57XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj57bG9jYXRpb259PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2dyaWRcIj5cbiAgICAgICAge2xpc3RpbmdzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHRcIj5ObyByZXN1bHRzIGZvdW5kITwvc3Bhbj5cbiAgICAgICAgKX1cblxuICAgICAgICB7bGlzdGluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gcm9sZT1cImxpc3RcIj5cbiAgICAgICAgICAgIHtsaXN0aW5ncy5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0aW5nIGxpc3Rpbmc9e2xpc3Rpbmd9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiAoXG4gIDxMaXN0aW5nc1Byb3ZpZGVyPlxuICAgIDxMaXN0aW5nc0NvbnRhaW5lciB7Li4ucHJvcHN9IC8+XG4gIDwvTGlzdGluZ3NQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==