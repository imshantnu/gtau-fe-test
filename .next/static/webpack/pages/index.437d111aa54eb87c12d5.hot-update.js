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
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();


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
}); // Initial State and Actions

var initialState = {
  listings: [],
  // array of listing object,
  state: STATE.IDLE,
  // enum state of page/slice "idle" | "fetching" | "error",
  error: undefined // error message

}; // reducer that updates our state

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
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (endpoint) {
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
      lineNumber: 89,
      columnNumber: 5
    }
  }, children);
};

_s(ListingsProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = ListingsProvider;

var formatAsCurrency = function formatAsCurrency(_int) {
  if (!_int) {
    return;
  }

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(_int);
};

var Spinner = function Spinner() {
  return __jsx("div", {
    className: "spinner__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }));
};

_c2 = Spinner;

var Error = function Error(_ref2) {
  var error = _ref2.error;
  return __jsx("div", {
    className: "listings__error",
    role: "alert",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "listings__errorMessage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "An error occured, Server responded with ", error, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 118,
      columnNumber: 5
    }
  }, "Reload"));
};

_c3 = Error;

var Listing = function Listing(_ref3) {
  _s2();

  var listing = _ref3.listing,
      view = _ref3.view,
      reply = _ref3.reply;
  var formattedPrice = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    if (isNaN(listing.price)) {
      return listing.price;
    }

    return formatAsCurrency(listing.price);
  }, [listing]);
  return __jsx("li", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, listing.title), __jsx("div", {
    className: "listing__metadata",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "listing__price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, formattedPrice), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, listing.location)), listing.imgUrl && __jsx("img", {
    className: "listing__img",
    title: listing.title,
    src: listing.imgUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "listing__desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, listing.description), __jsx("div", {
    className: "listing__actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "listings__button",
    onClick: function onClick() {
      return view(listing.title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, "View"), __jsx("button", {
    className: "listings__button",
    onClick: function onClick() {
      return reply(listing.title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, "Reply")));
};

_s2(Listing, "OMTkiaY1d7t3ujuKg7fvpkbxhrM=");

_c4 = Listing;

var ListingsContainer = function ListingsContainer(_ref4) {
  _s3();

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
    fetch(dataEndpoint);
  }, [dataEndpoint]);

  if (state === STATE.FETCHING) {
    return __jsx(Spinner, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
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
        lineNumber: 178,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, "Search results"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, listings.length, " results"), " ", "for ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }, keyword), " in", " ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, location))), listings.length === 0 && __jsx("span", {
    className: "listings__noResults",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "No results found!"), listings.length > 0 && __jsx("ol", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, listings.map(function (listing, index) {
    return __jsx(Listing, {
      listing: listing,
      key: index,
      view: view,
      reply: reply,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    });
  })));
};

_s3(ListingsContainer, "6EnKbkWSF3c0tcPcCZkQW2TB/YQ=");

_c5 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 3
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  })));
};

_c6 = Listings;
/* harmony default export */ __webpack_exports__["default"] = (Listings);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ListingsProvider");
$RefreshReg$(_c2, "Spinner");
$RefreshReg$(_c3, "Error");
$RefreshReg$(_c4, "Listing");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1lc3NhZ2UiLCJ2aWV3IiwidGl0bGUiLCJjb25zb2xlIiwiaW5mbyIsInJlcGx5IiwiZm9ybWF0QXNDdXJyZW5jeSIsImludCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiU3Bpbm5lciIsIkVycm9yIiwibG9jYXRpb24iLCJyZWxvYWQiLCJMaXN0aW5nIiwibGlzdGluZyIsImZvcm1hdHRlZFByaWNlIiwidXNlTWVtbyIsImlzTmFOIiwicHJpY2UiLCJpbWdVcmwiLCJkZXNjcmlwdGlvbiIsIkxpc3RpbmdzQ29udGFpbmVyIiwiZGF0YUVuZHBvaW50Iiwia2V5d29yZCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIkxpc3RpbmdzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxNQUFNLENB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QSxDQUFqQjs7TUFBTUQsUTtBQU1TQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MzdkMTExYWE1NGViODdjMTJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU1RBVEUgPSBPYmplY3QuZnJlZXplKHtcbiAgSURMRTogXCJpZGxlXCIsXG4gIEZFVENISU5HOiBcImZldGNoaW5nXCIsXG4gIEVSUk9SOiBcImVycm9yXCIsXG59KTtcblxuY29uc3QgQUNUSU9OUyA9IE9iamVjdC5mcmVlemUoe1xuICBGRVRDSF9MSVNUSU5HUzogXCJGRVRDSF9MSVNUSU5HU1wiLFxuICBGRVRDSF9MSVNUSU5HU19TVUNDRVNTOiBcIkZFVENIX0xJU1RJTkdTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfTElTVElOR1NfRVJST1I6IFwiRkVUQ0hfTElTVElOR1NfRVJST1JcIixcbiAgVklFV19MSVNUSU5HOiBcIlZJRVdfTElTVElOR1wiLFxuICBSRVBMWTogXCJSRVBMWVwiLFxufSk7XG5cbi8vIEluaXRpYWwgU3RhdGUgYW5kIEFjdGlvbnNcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdGluZ3M6IFtdLCAvLyBhcnJheSBvZiBsaXN0aW5nIG9iamVjdCxcbiAgc3RhdGU6IFNUQVRFLklETEUsIC8vIGVudW0gc3RhdGUgb2YgcGFnZS9zbGljZSBcImlkbGVcIiB8IFwiZmV0Y2hpbmdcIiB8IFwiZXJyb3JcIixcbiAgZXJyb3I6IHVuZGVmaW5lZCwgLy8gZXJyb3IgbWVzc2FnZVxufTtcblxuLy8gcmVkdWNlciB0aGF0IHVwZGF0ZXMgb3VyIHN0YXRlXG5jb25zdCBsaXN0aW5nc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBQ1RJT05TLkZFVENIX0xJU1RJTkdTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5GRVRDSElORyxcbiAgICAgICAgbGlzdGluZ3M6IFtdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuSURMRSxcbiAgICAgICAgbGlzdGluZ3M6IFsuLi5hY3Rpb24ubGlzdGluZ3NdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLkVSUk9SLFxuICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuXG4gICAgY2FzZSBBQ1RJT05TLlZJRVdfTElTVElORzpcbiAgICBjYXNlIEFDVElPTlMuUkVQTFk6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgTGlzdGluZ3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBMaXN0aW5nc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIobGlzdGluZ3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGxpc3RpbmdzOiBzdGF0ZS5saXN0aW5ncyxcbiAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGZldGNoOiAoZW5kcG9pbnQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HUyB9KTtcbiAgICAgIGZldGNoKGVuZHBvaW50KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTLFxuICAgICAgICAgICAgbGlzdGluZ3M6IHJlc3BvbnNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUixcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXc6ICh0aXRsZSkgPT4ge1xuICAgICAgY29uc29sZS5pbmZvKGBWaWV3OiAke3RpdGxlfWApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlZJRVdfTElTVElORyB9KTtcbiAgICB9LFxuICAgIHJlcGx5OiAodGl0bGUpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgUmVwbHk6ICR7dGl0bGV9YCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuUkVQTFkgfSk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0aW5nc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xpc3RpbmdzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gIGlmICghaW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLUFVXCIsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBcIkFVRFwiLFxuICB9KS5mb3JtYXQoaW50KTtcbn07XG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lcl9fY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBFcnJvciA9ICh7IGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19lcnJvck1lc3NhZ2VcIj5cbiAgICAgIDxoMz5BbiBlcnJvciBvY2N1cmVkLCBTZXJ2ZXIgcmVzcG9uZGVkIHdpdGgge2Vycm9yfSE8L2gzPlxuICAgICAgPHA+UmVsb2FkIHRvIHRyeSBhZ2FpbiE8L3A+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCIgb25DbGljaz17KCkgPT4gbG9jYXRpb24ucmVsb2FkKCl9PlxuICAgICAgUmVsb2FkXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdGluZyA9ICh7IGxpc3RpbmcsIHZpZXcsIHJlcGx5IH0pID0+IHtcbiAgY29uc3QgZm9ybWF0dGVkUHJpY2UgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaXNOYU4obGlzdGluZy5wcmljZSkpIHtcbiAgICAgIHJldHVybiBsaXN0aW5nLnByaWNlO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0QXNDdXJyZW5jeShsaXN0aW5nLnByaWNlKTtcbiAgfSwgW2xpc3RpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0aW5nXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwibGlzdGluZ19fdGl0bGVcIj57bGlzdGluZy50aXRsZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nX19tZXRhZGF0YVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nX19wcmljZVwiPntmb3JtYXR0ZWRQcmljZX08L3NwYW4+XG4gICAgICAgIDxzcGFuPntsaXN0aW5nLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3RpbmcuaW1nVXJsICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RpbmdfX2ltZ1wiXG4gICAgICAgICAgdGl0bGU9e2xpc3RpbmcudGl0bGV9XG4gICAgICAgICAgc3JjPXtsaXN0aW5nLmltZ1VybH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8cCBjbGFzc05hbWU9XCJsaXN0aW5nX19kZXNjXCI+e2xpc3RpbmcuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nX19hY3Rpb25zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3KGxpc3RpbmcudGl0bGUpfVxuICAgICAgICA+XG4gICAgICAgICAgVmlld1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RpbmdzX19idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlcGx5KGxpc3RpbmcudGl0bGUpfVxuICAgICAgICA+XG4gICAgICAgICAgUmVwbHlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3NDb250YWluZXIgPSAoeyBkYXRhRW5kcG9pbnQsIGtleXdvcmQgPSBcIlwiLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGZldGNoLCBlcnJvciwgbGlzdGluZ3MsIHZpZXcsIHJlcGx5IH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoTGlzdGluZ3NDb250ZXh0KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGRhdGFFbmRwb2ludCk7XG4gIH0sIFtkYXRhRW5kcG9pbnRdKTtcblxuICBpZiAoc3RhdGUgPT09IFNUQVRFLkZFVENISU5HKSB7XG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSBTVEFURS5FUlJPUiAmJiBlcnJvcikge1xuICAgIHJldHVybiA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2hlYWRlclwiPlxuICAgICAgICA8aDE+U2VhcmNoIHJlc3VsdHM8L2gxPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj5cbiAgICAgICAgICAgIHtsaXN0aW5ncy5sZW5ndGh9IHJlc3VsdHNcbiAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgIGZvciA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fdGV4dC0taGlnbGlnaHRlZFwiPntrZXl3b3JkfTwvc3Bhbj4gaW57XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj57bG9jYXRpb259PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtsaXN0aW5ncy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fbm9SZXN1bHRzXCI+Tm8gcmVzdWx0cyBmb3VuZCE8L3NwYW4+XG4gICAgICApfVxuXG4gICAgICB7bGlzdGluZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0aW5nc19fZ3JpZFwiPlxuICAgICAgICAgIHtsaXN0aW5ncy5tYXAoKGxpc3RpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlzdGluZyBsaXN0aW5nPXtsaXN0aW5nfSBrZXk9e2luZGV4fSB2aWV3PXt2aWV3fSByZXBseT17cmVwbHl9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvb2w+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTGlzdGluZ3MgPSAocHJvcHMpID0+IChcbiAgPExpc3RpbmdzUHJvdmlkZXI+XG4gICAgPExpc3RpbmdzQ29udGFpbmVyIHsuLi5wcm9wc30gLz5cbiAgPC9MaXN0aW5nc1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9