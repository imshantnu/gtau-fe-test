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

var formatAsCurrency = function formatAsCurrency(_int) {
  if (!_int) {
    return;
  }

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(_int);
};

var Listing = function Listing(_ref2) {
  var listing = _ref2.listing,
      view = _ref2.view,
      reply = _ref2.reply;
  return __jsx("li", {
    className: "listing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 3
    }
  }, __jsx("h6", {
    className: "listing__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, listing.title), __jsx("div", {
    className: "listing__metadata",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "listing__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, formatAsCurrency(listing.price)), __jsx("span", {
    className: "listing__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, listing.location)), __jsx("img", {
    className: "listing__img",
    title: listing.title,
    src: listing.imgUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), __jsx("p", {
    className: "listing__desc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, listing.description), __jsx("div", {
    className: "listing__actions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: "listings__button",
    onClick: function onClick() {
      return view(listing.title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "View"), __jsx("button", {
    className: "listings__button",
    onClick: function onClick() {
      return reply(listing.title);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "Reply")));
};

_c2 = Listing;

var Spinner = function Spinner() {
  return __jsx("div", {
    className: "spinner__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 133,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "listings__errorMessage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "An error occured, Server responded with ", error, "!"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 138,
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
        lineNumber: 153,
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
        lineNumber: 157,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "listings__header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "Search results"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, listings.length, " results"), " ", "for ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, keyword), " in", " ", __jsx("span", {
    className: "listings__text--higlighted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, location))), listings.length === 0 && __jsx("span", {
    className: "listings__noResults",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "No results found!"), listings.length > 0 && __jsx("ol", {
    className: "listings__grid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
        lineNumber: 180,
        columnNumber: 13
      }
    });
  })));
};

_s2(ListingsContainer, "6EnKbkWSF3c0tcPcCZkQW2TB/YQ=");

_c5 = ListingsContainer;

var Listings = function Listings(props) {
  return __jsx(ListingsProvider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 3
    }
  }, __jsx(ListingsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyJdLCJuYW1lcyI6WyJTVEFURSIsIk9iamVjdCIsImZyZWV6ZSIsIklETEUiLCJGRVRDSElORyIsIkVSUk9SIiwiQUNUSU9OUyIsIkZFVENIX0xJU1RJTkdTIiwiRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyIsIkZFVENIX0xJU1RJTkdTX0VSUk9SIiwiVklFV19MSVNUSU5HIiwiUkVQTFkiLCJpbml0aWFsU3RhdGUiLCJsaXN0aW5ncyIsInN0YXRlIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJsaXN0aW5nc1JlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiTGlzdGluZ3NDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiTGlzdGluZ3NQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidmFsdWUiLCJmZXRjaCIsImVuZHBvaW50IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWVzc2FnZSIsInZpZXciLCJ0aXRsZSIsImNvbnNvbGUiLCJpbmZvIiwicmVwbHkiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJMaXN0aW5nIiwibGlzdGluZyIsInByaWNlIiwibG9jYXRpb24iLCJpbWdVcmwiLCJkZXNjcmlwdGlvbiIsIlNwaW5uZXIiLCJFcnJvciIsInJlbG9hZCIsIkxpc3RpbmdzQ29udGFpbmVyIiwiZGF0YUVuZHBvaW50Iiwia2V5d29yZCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIkxpc3RpbmdzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzFCQyxNQUFJLEVB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QUFBO0FBQUEsS0FBOENSLFFBQTlDLENBTEYsQ0FGRixDQURGLEVBWUdyQyxRQUFRLENBQUNnRCxNQUFULEtBQW9CLENBQXBCLElBQ0M7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYkosRUFnQkdoRCxRQUFRLENBQUNnRCxNQUFULEdBQWtCLENBQWxCLElBQ0M7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaEQsUUFBUSxDQUFDaUQsR0FBVCxDQUFhLFVBQUNkLE9BQUQsRUFBVWUsS0FBVjtBQUFBLFdBQ1osTUFBQyxPQUFEO0FBQVMsYUFBTyxFQUFFZixPQUFsQjtBQUEyQixTQUFHLEVBQUVlLEtBQWhDO0FBQXVDLFVBQUksRUFBRTVCLElBQTdDO0FBQW1ELFdBQUssRUFBRUksS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBYixDQURILENBakJKLENBREY7QUEwQkQsQ0ExQ0Q7O0lBQU1pQixpQjs7TUFBQUEsaUI7O0FBNENOLElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNmLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUJBQUQseUZBQXVCQSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FEZTtBQUFBLENBQWpCOztNQUFNRCxRO0FBTVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI3NTVjOGU3YTc5NjQwYWRhMmI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTVEFURSA9IE9iamVjdC5mcmVlemUoe1xuICBJRExFOiBcImlkbGVcIixcbiAgRkVUQ0hJTkc6IFwiZmV0Y2hpbmdcIixcbiAgRVJST1I6IFwiZXJyb3JcIixcbn0pO1xuY29uc3QgQUNUSU9OUyA9IE9iamVjdC5mcmVlemUoe1xuICBGRVRDSF9MSVNUSU5HUzogXCJGRVRDSF9MSVNUSU5HU1wiLFxuICBGRVRDSF9MSVNUSU5HU19TVUNDRVNTOiBcIkZFVENIX0xJU1RJTkdTX1NVQ0NFU1NcIixcbiAgRkVUQ0hfTElTVElOR1NfRVJST1I6IFwiRkVUQ0hfTElTVElOR1NfRVJST1JcIixcbiAgVklFV19MSVNUSU5HOiBcIlZJRVdfTElTVElOR1wiLFxuICBSRVBMWTogXCJSRVBMWVwiLFxufSk7XG5cbi8vSW5pdGlhbCBTdGF0ZSBhbmQgQWN0aW9uc1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0aW5nczogW10sIC8vIGFycmF5IG9mIGxpc3Rpbmcgb2JqZWN0LFxuICBzdGF0ZTogU1RBVEUuSURMRSwgLy8gZW51bSBzdGF0ZSBvZiBwYWdlL3NsaWNlIFwiaWRsZVwiIHwgXCJmZXRjaGluZ1wiIHwgXCJlcnJvclwiLFxuICBlcnJvcjogdW5kZWZpbmVkLCAvLyBlcnJvciBtZXNzYWdlXG59O1xuXG5jb25zdCBsaXN0aW5nc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBQ1RJT05TLkZFVENIX0xJU1RJTkdTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXRlOiBTVEFURS5GRVRDSElORyxcbiAgICAgICAgbGlzdGluZ3M6IFtdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0ZTogU1RBVEUuSURMRSxcbiAgICAgICAgbGlzdGluZ3M6IFsuLi5hY3Rpb24ubGlzdGluZ3NdLFxuICAgICAgfTtcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1NfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc3RhdGU6IFNUQVRFLkVSUk9SLFxuICAgICAgICBsaXN0aW5nczogW10sXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuXG4gICAgY2FzZSBBQ1RJT05TLlZJRVdfTElTVElORzpcbiAgICBjYXNlIEFDVElPTlMuUkVQTFk6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgTGlzdGluZ3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBMaXN0aW5nc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIobGlzdGluZ3NSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGxpc3RpbmdzOiBzdGF0ZS5saXN0aW5ncyxcbiAgICBzdGF0ZTogc3RhdGUuc3RhdGUsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGZldGNoOiAoZW5kcG9pbnQsIHF1ZXJ5KSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1MgfSk7XG4gICAgICBmZXRjaChlbmRwb2ludClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1NfU1VDQ0VTUyxcbiAgICAgICAgICAgIGxpc3RpbmdzOiByZXNwb25zZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1NfRVJST1IsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3OiAodGl0bGUpID0+IHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgVmlldzogJHt0aXRsZX1gKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5WSUVXX0xJU1RJTkcgfSk7XG4gICAgfSxcbiAgICByZXBseTogKHRpdGxlKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oYFJlcGx5OiAke3RpdGxlfWApO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT05TLlJFUExZIH0pO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdGluZ3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaXN0aW5nc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xuICBpZiAoIWludCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1BVVwiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJBVURcIixcbiAgfSkuZm9ybWF0KGludCk7XG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHsgbGlzdGluZywgdmlldywgcmVwbHkgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwibGlzdGluZ1wiPlxuICAgIDxoNiBjbGFzc05hbWU9XCJsaXN0aW5nX190aXRsZVwiPntsaXN0aW5nLnRpdGxlfTwvaDY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nX19tZXRhZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ19fdGV4dC0taGlnbGlnaHRlZFwiPlxuICAgICAgICB7Zm9ybWF0QXNDdXJyZW5jeShsaXN0aW5nLnByaWNlKX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdfX3RleHRcIj57bGlzdGluZy5sb2NhdGlvbn08L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGltZyBjbGFzc05hbWU9XCJsaXN0aW5nX19pbWdcIiB0aXRsZT17bGlzdGluZy50aXRsZX0gc3JjPXtsaXN0aW5nLmltZ1VybH0gLz5cbiAgICA8cCBjbGFzc05hbWU9XCJsaXN0aW5nX19kZXNjXCI+e2xpc3RpbmcuZGVzY3JpcHRpb259PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ19fYWN0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdmlldyhsaXN0aW5nLnRpdGxlKX0+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVwbHkobGlzdGluZy50aXRsZSl9PlxuICAgICAgICBSZXBseVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4pO1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJfX2NvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRXJyb3IgPSAoeyBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2Vycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZXJyb3JNZXNzYWdlXCI+XG4gICAgICA8aDM+QW4gZXJyb3Igb2NjdXJlZCwgU2VydmVyIHJlc3BvbmRlZCB3aXRoIHtlcnJvcn0hPC9oMz5cbiAgICAgIDxwPlJlbG9hZCB0byB0cnkgYWdhaW4hPC9wPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGlzdGluZ3NfX2J1dHRvblwiIG9uQ2xpY2s9eygpID0+IGxvY2F0aW9uLnJlbG9hZCgpfT5cbiAgICAgIFJlbG9hZFxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RpbmdzQ29udGFpbmVyID0gKHsgZGF0YUVuZHBvaW50LCBrZXl3b3JkID0gXCJcIiwgbG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBmZXRjaCwgZXJyb3IsIGxpc3RpbmdzLCB2aWV3LCByZXBseSB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KExpc3RpbmdzQ29udGV4dCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChkYXRhRW5kcG9pbnQsIGtleXdvcmQpO1xuICB9LCBbZGF0YUVuZHBvaW50LCBrZXl3b3JkXSk7XG5cbiAgaWYgKHN0YXRlID09PSBTVEFURS5GRVRDSElORykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuXG4gIGlmIChzdGF0ZSA9PT0gU1RBVEUuRVJST1IgJiYgZXJyb3IpIHtcbiAgICByZXR1cm4gPEVycm9yIGVycm9yPXtlcnJvcn0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19oZWFkZXJcIj5cbiAgICAgICAgPGgxPlNlYXJjaCByZXN1bHRzPC9oMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdzX190ZXh0LS1oaWdsaWdodGVkXCI+XG4gICAgICAgICAgICB7bGlzdGluZ3MubGVuZ3RofSByZXN1bHRzXG4gICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICBmb3IgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX3RleHQtLWhpZ2xpZ2h0ZWRcIj57a2V5d29yZH08L3NwYW4+IGlue1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdzX190ZXh0LS1oaWdsaWdodGVkXCI+e2xvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bGlzdGluZ3MubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdGluZ3NfX25vUmVzdWx0c1wiPk5vIHJlc3VsdHMgZm91bmQhPC9zcGFuPlxuICAgICAgKX1cblxuICAgICAge2xpc3RpbmdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2dyaWRcIj5cbiAgICAgICAgICB7bGlzdGluZ3MubWFwKChsaXN0aW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpc3RpbmcgbGlzdGluZz17bGlzdGluZ30ga2V5PXtpbmRleH0gdmlldz17dmlld30gcmVwbHk9e3JlcGx5fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L29sPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiAoXG4gIDxMaXN0aW5nc1Byb3ZpZGVyPlxuICAgIDxMaXN0aW5nc0NvbnRhaW5lciB7Li4ucHJvcHN9IC8+XG4gIDwvTGlzdGluZ3NQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==