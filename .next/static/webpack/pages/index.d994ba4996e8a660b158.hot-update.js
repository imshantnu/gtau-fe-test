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
    className: "spinner__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }));
};

_c3 = Spinner;

var Error = function Error(_ref2) {
  var error = _ref2.error;
  return __jsx("div", {
    className: "listings__error",
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "listings__errorMessage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "An error occured, Server responded with ", error, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 5
    }
  }, "Reload"));
};

_c4 = Error;

var ListingsContainer = function ListingsContainer(_ref3) {
  _s2();

  var dataEndpoint = _ref3.dataEndpoint,
      _ref3$keyword = _ref3.keyword,
      keyword = _ref3$keyword === void 0 ? "" : _ref3$keyword,
      location = _ref3.location;

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
        lineNumber: 131,
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
        lineNumber: 135,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Search results"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, listings.length, " results"), " ", "for ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, keyword), " in", " ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, location))), __jsx("div", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, listings.length === 0 && __jsx("span", {
    className: "listings__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, "No results found!"), listings.length > 0 && __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, listings.map(function (listing, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, JSON.stringify(listing));
  }))));
};

_s2(ListingsContainer, "6EnKbkWSF3c0tcPcCZkQW2TB/YQ=");

_c5 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 3
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInZpZXciLCJ0aXRsZSIsImNvbnNvbGUiLCJpbmZvIiwicmVwbHkiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiTGlzdGluZyIsInByb3BzIiwiU3Bpbm5lciIsIkVycm9yIiwibG9jYXRpb24iLCJyZWxvYWQiLCJMaXN0aW5nc0NvbnRhaW5lciIsImRhdGFFbmRwb2ludCIsImtleXdvcmQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibWFwIiwibGlzdGluZyIsImluZGV4IiwiSlNPTiIsInN0cmluZ2lmeSIsIkxpc3RpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMxQkMsTUFBSSxFQUFFLE1BRG9CO0FBRTFCQyxVQUFRLEVBQUUsVUFGZ0I7QUFHMUJDLE9BQUssRUFBRTtBQUhtQixDQUFkLENB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VCxDQUFhLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLFdBQ1o7QUFBSSxTQUFHLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVILE9BQWYsQ0FBakIsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQUxKLENBWEYsQ0FERjtBQTBCRCxDQTFDRDs7SUFBTVAsaUI7O01BQUFBLGlCOztBQTRDTixJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDaEIsS0FBRDtBQUFBLFNBQ2YsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpQkFBRCx5RkFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURlO0FBQUEsQ0FBakI7O01BQU1nQixRO0FBTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ5OTRiYTQ5OTZlOGE2NjBiMTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTVEFURSA9IE9iamVjdC5mcmVlemUoe1xuICBJRExFOiBcImlkbGVcIixcbiAgRkVUQ0hJTkc6IFwiZmV0Y2hpbmdcIixcbiAgRVJST1I6IFwiZXJyb3JcIixcbn0pO1xuY29uc3QgQUNUSU9OUyA9IE9iamVjdC5mcmVlemUoe1xuICBGRVRDSF9MSVNUSU5HUzogXCJGRVRDSF9MSVNUSU5HU1wiLFxuICBGRVRDSF9MSVNUSU5HU19TVUNDRVNTOiBcIkZFVENIX0xJU1RJTkdTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfTElTVElOR1NfRVJST1I6IFwiRkVUQ0hfTElTVElOR1NfRVJST1JcIixcbiAgVklFV19MSVNUSU5HOiBcIlZJRVdfTElTVElOR1wiLFxuICBSRVBMWTogXCJSRVBMWVwiLFxufSk7XG5cbi8vSW5pdGlhbCBTdGF0ZSBhbmQgQWN0aW9uc1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0aW5nczogW10sIC8vIGFycmF5IG9mIGxpc3Rpbmcgb2JqZWN0LFxuICBzdGF0ZTogU1RBVEUuSURMRSwgLy8gZW51bSBzdGF0ZSBvZiBwYWdlL3NsaWNlIFwiaWRsZVwiIHwgXCJmZXRjaGluZ1wiIHwgXCJlcnJvclwiLFxuICBlcnJvcjogdW5kZWZpbmVkLCAvLyBlcnJvciBtZXNzYWdlXG59O1xuXG5jb25zdCBsaXN0aW5nc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBQ1RJT05TLkZFVENIX0xJU1RJTkdTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5GRVRDSElORyxcbiAgICAgICAgbGlzdGluZ3M6IFtdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuSURMRSxcbiAgICAgICAgbGlzdGluZ3M6IFsuLi5hY3Rpb24ubGlzdGluZ3NdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLkVSUk9SLFxuICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuXG4gICAgY2FzZSBBQ1RJT05TLlZJRVdfTElTVElORzpcbiAgICBjYXNlIEFDVElPTlMuUkVQTFk6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgTGlzdGluZ3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBMaXN0aW5nc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIobGlzdGluZ3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGxpc3RpbmdzOiBzdGF0ZS5saXN0aW5ncyxcbiAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGZldGNoOiAoZW5kcG9pbnQsIHF1ZXJ5KSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1MgfSk7XG4gICAgICBmZXRjaChlbmRwb2ludClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyxcbiAgICAgICAgICAgIGxpc3RpbmdzOiByZXNwb25zZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1NfRVJST1IsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3OiAodGl0bGUpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgVmlldzogJHt0aXRsZX1gKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5WSUVXX0xJU1RJTkcgfSk7XG4gICAgfSxcbiAgICByZXBseTogKHRpdGxlKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oYFJlcGx5OiAke3RpdGxlfWApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlJFUExZIH0pO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdGluZ3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaXN0aW5nc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICAvLyBUT0RPXG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHByb3BzKSA9PiB7XG4gIC8vIFRPRE9cbiAgLy8gVGhpcyBzaG91bGQgYmUgdGhlIGNvbXBvbmVudCB3aGljaCByZW5kZXJzIGFuIGluZGl2aWR1YWwgbGlzdGluZyB0byB0aGUgcGFnZVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdcIj48L2Rpdj47XG59O1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJfX2NvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRXJyb3IgPSAoeyBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2Vycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZXJyb3JNZXNzYWdlXCI+XG4gICAgICA8aDM+QW4gZXJyb3Igb2NjdXJlZCwgU2VydmVyIHJlc3BvbmRlZCB3aXRoIHtlcnJvcn0hPC9oMz5cbiAgICAgIDxwPlJlbG9hZCB0byB0cnkgYWdhaW4hPC9wPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGlzdGluZ3NfX2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IGxvY2F0aW9uLnJlbG9hZCgpfT5cbiAgICAgIFJlbG9hZFxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RpbmdzQ29udGFpbmVyID0gKHsgZGF0YUVuZHBvaW50LCBrZXl3b3JkID0gXCJcIiwgbG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBmZXRjaCwgZXJyb3IsIGxpc3RpbmdzLCB2aWV3LCByZXBseSB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KExpc3RpbmdzQ29udGV4dCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChkYXRhRW5kcG9pbnQsIGtleXdvcmQpO1xuICB9LCBbZGF0YUVuZHBvaW50LCBrZXl3b3JkXSk7XG5cbiAgaWYgKHN0YXRlID09PSBTVEFURS5GRVRDSElORykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gU1RBVEUuRVJST1IgJiYgZXJyb3IpIHtcbiAgICByZXR1cm4gPEVycm9yIGVycm9yPXtlcnJvcn0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19oZWFkZXJcIj5cbiAgICAgICAgPGgxPlNlYXJjaCByZXN1bHRzPC9oMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdzX190ZXh0LS1oaWdsaWdodGVkXCI+XG4gICAgICAgICAgICB7bGlzdGluZ3MubGVuZ3RofSByZXN1bHRzXG4gICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICBmb3IgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj57a2V5d29yZH08L3NwYW4+IGlue1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdzX190ZXh0LS1oaWdsaWdodGVkXCI+e2xvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZ3JpZFwiPlxuICAgICAgICB7bGlzdGluZ3MubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fdGV4dFwiPk5vIHJlc3VsdHMgZm91bmQhPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7bGlzdGluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAge2xpc3RpbmdzLm1hcCgobGlzdGluZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntKU09OLnN0cmluZ2lmeShsaXN0aW5nKX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3MgPSAocHJvcHMpID0+IChcbiAgPExpc3RpbmdzUHJvdmlkZXI+XG4gICAgPExpc3RpbmdzQ29udGFpbmVyIHsuLi5wcm9wc30gLz5cbiAgPC9MaXN0aW5nc1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9