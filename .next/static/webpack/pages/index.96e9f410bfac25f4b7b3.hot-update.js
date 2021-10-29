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

var Spinner = function Spinner() {
  return __jsx("div", {
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  });
};

_c3 = Spinner;

var ListingsContainer = function ListingsContainer(_ref2) {
  _s2();

  var dataEndpoint = _ref2.dataEndpoint,
      _ref2$keyword = _ref2.keyword,
      keyword = _ref2$keyword === void 0 ? "" : _ref2$keyword,
      location = _ref2.location;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.useContext(ListingsContext),
      state = _React$useContext.state,
      fetch = _React$useContext.fetch;

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    fetch(dataEndpoint, keyword);
  }, [dataEndpoint, keyword]);

  if (state === STATE.FETCHING) {
    return __jsx(Spinner, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 12
      }
    });
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, context.state, context.error, JSON.stringify(context.listings), __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }));
};

_s2(ListingsContainer, "cLdtcsMeL08Stqz70sBiqNn7dBI=");

_c4 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "listings__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }))));
};

_c5 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ListingsProvider");
$RefreshReg$(_c2, "Listing");
$RefreshReg$(_c3, "Spinner");
$RefreshReg$(_c4, "ListingsContainer");
$RefreshReg$(_c5, "Listings");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInZpZXciLCJ0aXRsZSIsImNvbnNvbGUiLCJpbmZvIiwicmVwbHkiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiTGlzdGluZyIsInByb3BzIiwiU3Bpbm5lciIsIkxpc3RpbmdzQ29udGFpbmVyIiwiZGF0YUVuZHBvaW50Iiwia2V5d29yZCIsImxvY2F0aW9uIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImNvbnRleHQiLCJKU09OIiwic3RyaW5naWZ5IiwiTGlzdGluZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzFCQyxNQUFJLEVBQUUsTUFEb0I7QUFFMUJDLFVBQVEsRUFBRSxVQUZnQjtBQUcxQkMsT0FBSyxFQUFFO0FBSG1CLENBQWQsQ0FBZDtBQUtBLElBQU1DLE9BQU8sR0FBR0wsTUFBTSxDQUFDQyxNQUFQ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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNUQVRFID0gT2JqZWN0LmZyZWV6ZSh7XG4gIElETEU6IFwiaWRsZVwiLFxuICBGRVRDSElORzogXCJmZXRjaGluZ1wiLFxuICBFUlJPUjogXCJlcnJvclwiLFxufSk7XG5jb25zdCBBQ1RJT05TID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEZFVENIX0xJU1RJTkdTOiBcIkZFVENIX0xJU1RJTkdTXCIsXG4gIEZFVENIX0xJU1RJTkdTX1NVQ0NFU1M6IFwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTU1wiLFxuICBGRVRDSF9MSVNUSU5HU19FUlJPUjogXCJGRVRDSF9MSVNUSU5HU19FUlJPUlwiLFxuICBWSUVXX0xJU1RJTkc6IFwiVklFV19MSVNUSU5HXCIsXG4gIFJFUExZOiBcIlJFUExZXCIsXG59KTtcblxuLy9Jbml0aWFsIFN0YXRlIGFuZCBBY3Rpb25zXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxpc3RpbmdzOiBbXSwgLy8gYXJyYXkgb2YgbGlzdGluZyBvYmplY3QsXG4gIHN0YXRlOiBTVEFURS5JRExFLCAvLyBlbnVtIHN0YXRlIG9mIHBhZ2Uvc2xpY2UgXCJpZGxlXCIgfCBcImZldGNoaW5nXCIgfCBcImVycm9yXCIsXG4gIGVycm9yOiB1bmRlZmluZWQsIC8vIGVycm9yIG1lc3NhZ2Vcbn07XG5cbmNvbnN0IGxpc3RpbmdzUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLkZFVENISU5HLFxuICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5JRExFLFxuICAgICAgICBsaXN0aW5nczogWy4uLmFjdGlvbi5saXN0aW5nc10sXG4gICAgICB9O1xuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuRVJST1IsXG4gICAgICAgIGxpc3RpbmdzOiBbXSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG5cbiAgICBjYXNlIEFDVElPTlMuVklFV19MSVNUSU5HOlxuICAgIGNhc2UgQUNUSU9OUy5SRVBMWTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBMaXN0aW5nc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IExpc3RpbmdzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihsaXN0aW5nc1JlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgbGlzdGluZ3M6IHN0YXRlLmxpc3RpbmdzLFxuICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgZmV0Y2g6IChlbmRwb2ludCwgcXVlcnkpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HUyB9KTtcbiAgICAgIGZldGNoKGVuZHBvaW50KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTLFxuICAgICAgICAgICAgbGlzdGluZ3M6IHJlc3BvbnNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUixcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXc6ICh0aXRsZSkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKGBWaWV3OiAke3RpdGxlfWApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlZJRVdfTElTVElORyB9KTtcbiAgICB9LFxuICAgIHJlcGx5OiAodGl0bGUpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUmVwbHk6ICR7dGl0bGV9YCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuUkVQTFkgfSk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0aW5nc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RpbmdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIC8vIFRPRE9cbn07XG5cbmNvbnN0IExpc3RpbmcgPSAocHJvcHMpID0+IHtcbiAgLy8gVE9ET1xuICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYW4gaW5kaXZpZHVhbCBsaXN0aW5nIHRvIHRoZSBwYWdlXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1wiPjwvZGl2Pjtcbn07XG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIiAvPjtcblxuY29uc3QgTGlzdGluZ3NDb250YWluZXIgPSAoeyBkYXRhRW5kcG9pbnQsIGtleXdvcmQgPSBcIlwiLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGZldGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KExpc3RpbmdzQ29udGV4dCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChkYXRhRW5kcG9pbnQsIGtleXdvcmQpO1xuICB9LCBbZGF0YUVuZHBvaW50LCBrZXl3b3JkXSk7XG5cbiAgaWYgKHN0YXRlID09PSBTVEFURS5GRVRDSElORykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjb250ZXh0LnN0YXRlfVxuICAgICAge2NvbnRleHQuZXJyb3J9XG4gICAgICB7SlNPTi5zdHJpbmdpZnkoY29udGV4dC5saXN0aW5ncyl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19oZWFkZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2dyaWRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiAoXG4gIDxMaXN0aW5nc1Byb3ZpZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2NvbnRhaW5lclwiPlxuICAgICAgPExpc3RpbmdzQ29udGFpbmVyIHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgPC9MaXN0aW5nc1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9