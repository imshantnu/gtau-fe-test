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

var Listing = function Listing(props) {
  // TODO
  // This should be the component which renders an individual listing to the page
  return __jsx("div", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 10
    }
  });
};

_c2 = Listing;

var ListingsContainer = function ListingsContainer(_ref2) {
  _s2();

  var dataEndpoint = _ref2.dataEndpoint,
      _ref2$keyword = _ref2.keyword,
      keyword = _ref2$keyword === void 0 ? "" : _ref2$keyword,
      location = _ref2.location;
  var context = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(ListingsContext);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    context.fetch(dataEndpoint, keyword);
  }, [dataEndpoint, keyword]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, context.state, context.error, JSON.stringify(context.listings), __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }));
};

_s2(ListingsContainer, "wqnYpdjMkT3eDhbBjwDmfBO/TFg=");

_c3 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 3
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  })));
};

_c4 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ListingsProvider");
$RefreshReg$(_c2, "Listing");
$RefreshReg$(_c3, "ListingsContainer");
$RefreshReg$(_c4, "Listings");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInZpZXciLCJ0aXRsZSIsImNvbnNvbGUiLCJpbmZvIiwicmVwbHkiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiTGlzdGluZyIsInByb3BzIiwiTGlzdGluZ3NDb250YWluZXIiLCJkYXRhRW5kcG9pbnQiLCJrZXl3b3JkIiwibG9jYXRpb24iLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJMaXN0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDMUJDLE1BQUksRUFBRSxNQURvQjtBQUUxQkMsVUFBUSxFQUFFLFVBRmdCO0FBRzFCQyxPQUFLLEVBQUU7QUFIbUIsQ0FBZCxDQUFkO0FBS0EsSUFBTUMsT0FBTyxHQUFHTCxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUM1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QUEsS0FDR0UsT0FBTyxDQUFDbEMsS0FEWCxFQUVHa0MsT0FBTyxDQUFDakMsS0FGWCxFQUdHb0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE9BQU8sQ0FBQ25DLFFBQXZCLENBSEgsRUFJRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNELENBaEJEOztJQUFNK0IsaUI7O01BQUFBLGlCOztBQWtCTixJQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDVixLQUFEO0FBQUEsU0FDZixNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlCQUFELHlGQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBRGU7QUFBQSxDQUFqQjs7TUFBTVUsUTtBQU1TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMzA3MDk5NTA2YmRiMjQ4ZjkwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU1RBVEUgPSBPYmplY3QuZnJlZXplKHtcbiAgSURMRTogXCJpZGxlXCIsXG4gIEZFVENISU5HOiBcImZldGNoaW5nXCIsXG4gIEVSUk9SOiBcImVycm9yXCIsXG59KTtcbmNvbnN0IEFDVElPTlMgPSBPYmplY3QuZnJlZXplKHtcbiAgRkVUQ0hfTElTVElOR1M6IFwiRkVUQ0hfTElTVElOR1NcIixcbiAgRkVUQ0hfTElTVElOR1NfU1VDQ0VTUzogXCJGRVRDSF9MSVNUSU5HU19TVUNDRVNTXCIsXG4gIEZFVENIX0xJU1RJTkdTX0VSUk9SOiBcIkZFVENIX0xJU1RJTkdTX0VSUk9SXCIsXG4gIFZJRVdfTElTVElORzogXCJWSUVXX0xJU1RJTkdcIixcbiAgUkVQTFk6IFwiUkVQTFlcIixcbn0pO1xuXG4vL0luaXRpYWwgU3RhdGUgYW5kIEFjdGlvbnNcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdGluZ3M6IFtdLCAvLyBhcnJheSBvZiBsaXN0aW5nIG9iamVjdCxcbiAgc3RhdGU6IFNUQVRFLklETEUsIC8vIGVudW0gc3RhdGUgb2YgcGFnZS9zbGljZSBcImlkbGVcIiB8IFwiZmV0Y2hpbmdcIiB8IFwiZXJyb3JcIixcbiAgZXJyb3I6IHVuZGVmaW5lZCwgLy8gZXJyb3IgbWVzc2FnZVxufTtcblxuY29uc3QgbGlzdGluZ3NSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuRkVUQ0hJTkcsXG4gICAgICAgIGxpc3RpbmdzOiBbXSxcbiAgICAgIH07XG4gICAgY2FzZSBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLklETEUsXG4gICAgICAgIGxpc3RpbmdzOiBbLi4uYWN0aW9uLmxpc3RpbmdzXSxcbiAgICAgIH07XG4gICAgY2FzZSBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX0VSUk9SOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5FUlJPUixcbiAgICAgICAgbGlzdGluZ3M6IFtdLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcblxuICAgIGNhc2UgQUNUSU9OUy5WSUVXX0xJU1RJTkc6XG4gICAgY2FzZSBBQ1RJT05TLlJFUExZOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IExpc3RpbmdzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgTGlzdGluZ3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKGxpc3RpbmdzUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBsaXN0aW5nczogc3RhdGUubGlzdGluZ3MsXG4gICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxuICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgICBmZXRjaDogKGVuZHBvaW50LCBxdWVyeSkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLkZFVENIX0xJU1RJTkdTIH0pO1xuICAgICAgZmV0Y2goZW5kcG9pbnQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX1NVQ0NFU1MsXG4gICAgICAgICAgICBsaXN0aW5nczogcmVzcG9uc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX0VSUk9SLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgdmlldzogKHRpdGxlKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oYFZpZXc6ICR7dGl0bGV9YCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuVklFV19MSVNUSU5HIH0pO1xuICAgIH0sXG4gICAgcmVwbHk6ICh0aXRsZSkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKGBSZXBseTogJHt0aXRsZX1gKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5SRVBMWSB9KTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RpbmdzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGlzdGluZ3NDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgZm9ybWF0QXNDdXJyZW5jeSA9IChpbnQpID0+IHtcbiAgLy8gVE9ET1xufTtcblxuY29uc3QgTGlzdGluZyA9IChwcm9wcykgPT4ge1xuICAvLyBUT0RPXG4gIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nXCI+PC9kaXY+O1xufTtcblxuY29uc3QgTGlzdGluZ3NDb250YWluZXIgPSAoeyBkYXRhRW5kcG9pbnQsIGtleXdvcmQgPSBcIlwiLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KExpc3RpbmdzQ29udGV4dCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250ZXh0LmZldGNoKGRhdGFFbmRwb2ludCwga2V5d29yZCk7XG4gIH0sIFtkYXRhRW5kcG9pbnQsIGtleXdvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Y29udGV4dC5zdGF0ZX1cbiAgICAgIHtjb250ZXh0LmVycm9yfVxuICAgICAge0pTT04uc3RyaW5naWZ5KGNvbnRleHQubGlzdGluZ3MpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19faGVhZGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19ncmlkXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBMaXN0aW5ncyA9IChwcm9wcykgPT4gKFxuICA8TGlzdGluZ3NQcm92aWRlcj5cbiAgICA8TGlzdGluZ3NDb250YWluZXIgey4uLnByb3BzfSAvPlxuICA8L0xpc3RpbmdzUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=