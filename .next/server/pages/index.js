module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dagga\\OneDrive\\Desktop\\Shantnu\\gtau-fe-test\\components\\Listings.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const STATE = Object.freeze({
  IDLE: "idle",
  FETCHING: "fetching",
  ERROR: "error"
});
const ACTIONS = Object.freeze({
  FETCH_LISTINGS: "FETCH_LISTINGS",
  FETCH_LISTINGS_SUCCESS: "FETCH_LISTINGS_SUCCESS",
  FETCH_LISTINGS_ERROR: "FETCH_LISTINGS_ERROR",
  VIEW_LISTING: "VIEW_LISTING",
  REPLY: "REPLY"
}); // Initial State and Actions

const initialState = {
  listings: [],
  // array of listing object,
  state: STATE.IDLE,
  // enum state of page/slice "idle" | "fetching" | "error",
  error: undefined // error message

}; // reducer that updates our state

const listingsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_LISTINGS:
      return _objectSpread(_objectSpread({}, state), {}, {
        state: STATE.FETCHING,
        listings: []
      });

    case ACTIONS.FETCH_LISTINGS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        state: STATE.IDLE,
        listings: [...action.listings]
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

const ListingsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const ListingsProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(listingsReducer, initialState);
  const value = {
    listings: state.listings,
    state: state.state,
    error: state.error,
    fetch: endpoint => {
      dispatch({
        type: ACTIONS.FETCH_LISTINGS
      });
      fetch(endpoint).then(response => response.json()).then(response => {
        dispatch({
          type: ACTIONS.FETCH_LISTINGS_SUCCESS,
          listings: response
        });
      }).catch(error => {
        dispatch({
          type: ACTIONS.FETCH_LISTINGS_ERROR,
          error: error.message
        });
      });
    },
    view: title => {
      console.info(`View: ${title}`);
      dispatch({
        type: ACTIONS.VIEW_LISTING
      });
    },
    reply: title => {
      console.info(`Reply: ${title}`);
      dispatch({
        type: ACTIONS.REPLY
      });
    }
  };
  return __jsx(ListingsContext.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, children);
};

const formatAsCurrency = int => {
  if (!int) {
    return;
  }

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD"
  }).format(int);
};

const Spinner = () => __jsx("div", {
  className: "spinner__container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "spinner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }
}));

const Error = ({
  error
}) => __jsx("div", {
  className: "listings__error",
  role: "alert",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "listings__errorMessage",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 7
  }
}, "An error occured, Server responded with ", error, "!"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 7
  }
}, "Reload to try again!")), __jsx("button", {
  className: "listings__button",
  onClick: () => location.reload(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }
}, "Reload"));

const ListingsHeader = ({
  count,
  keyword,
  location
}) => __jsx("div", {
  className: "listings__header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 3
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }
}, "Search results"), __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "listings__text--higlighted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 7
  }
}, count, " results"), " for", " ", __jsx("span", {
  className: "listings__text--higlighted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 7
  }
}, keyword), " in", " ", __jsx("span", {
  className: "listings__text--higlighted",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 7
  }
}, location)));

const Listing = ({
  listing,
  view,
  reply
}) => {
  const formattedPrice = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    if (isNaN(listing.price)) {
      return listing.price;
    }

    return formatAsCurrency(listing.price);
  }, [listing]);
  return __jsx("li", {
    className: "listing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "listing__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, listing.title), __jsx("div", {
    className: "listing__metadata",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "listing__price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, formattedPrice), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, listing.location)), listing.imgUrl && __jsx("img", {
    className: "listing__img",
    title: listing.title,
    src: listing.imgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "listing__desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, listing.description), __jsx("div", {
    className: "listing__actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "listings__button",
    onClick: () => view(listing.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "View"), __jsx("button", {
    className: "listings__button",
    onClick: () => reply(listing.title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "Reply")));
};

const ListingsContainer = ({
  dataEndpoint,
  keyword = "",
  location
}) => {
  const {
    state,
    fetch,
    error,
    listings,
    view,
    reply
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(ListingsContext);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    fetch(dataEndpoint);
  }, [dataEndpoint]);

  if (state === STATE.FETCHING) {
    return __jsx(Spinner, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 12
      }
    });
  }

  if (state === STATE.ERROR && error) {
    return __jsx(Error, {
      error: error,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 12
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ListingsHeader, {
    count: listings.length,
    keyword: keyword,
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }), listings.length === 0 && __jsx("span", {
    className: "listings__noResults",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, "No results found!"), listings.length > 0 && __jsx("ol", {
    className: "listings__grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, listings.map((listing, index) => __jsx(Listing, {
    listing: listing,
    key: index,
    view: view,
    reply: reply,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }))));
};

const Listings = props => __jsx(ListingsProvider, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 3
  }
}, __jsx(ListingsContainer, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 5
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Listings);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Listings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Listings */ "./components/Listings.js");
var _jsxFileName = "C:\\Users\\dagga\\OneDrive\\Desktop\\Shantnu\\gtau-fe-test\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LISTINGS_ENDPOINT = "/api/listings";
function Home() {
  return __jsx("div", {
    className: "home__container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "GTAU Front-End Test"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/variables.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/globals.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/home.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/css/listings.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "home__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_components_Listings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataEndpoint: LISTINGS_ENDPOINT,
    keyword: "Ferrari",
    location: "Australia",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlNUQVRFIiwiT2JqZWN0IiwiZnJlZXplIiwiSURMRSIsIkZFVENISU5HIiwiRVJST1IiLCJBQ1RJT05TIiwiRkVUQ0hfTElTVElOR1MiLCJGRVRDSF9MSVNUSU5HU19TVUNDRVNTIiwiRkVUQ0hfTElTVElOR1NfRVJST1IiLCJWSUVXX0xJU1RJTkciLCJSRVBMWSIsImluaXRpYWxTdGF0ZSIsImxpc3RpbmdzIiwic3RhdGUiLCJlcnJvciIsInVuZGVmaW5lZCIsImxpc3RpbmdzUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJMaXN0aW5nc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMaXN0aW5nc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ2YWx1ZSIsImZldGNoIiwiZW5kcG9pbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY2F0Y2giLCJtZXNzYWdlIiwidmlldyIsInRpdGxlIiwiY29uc29sZSIsImluZm8iLCJyZXBseSIsImZvcm1hdEFzQ3VycmVuY3kiLCJpbnQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIlNwaW5uZXIiLCJFcnJvciIsImxvY2F0aW9uIiwicmVsb2FkIiwiTGlzdGluZ3NIZWFkZXIiLCJjb3VudCIsImtleXdvcmQiLCJMaXN0aW5nIiwibGlzdGluZyIsImZvcm1hdHRlZFByaWNlIiwidXNlTWVtbyIsImlzTmFOIiwicHJpY2UiLCJpbWdVcmwiLCJkZXNjcmlwdGlvbiIsIkxpc3RpbmdzQ29udGFpbmVyIiwiZGF0YUVuZHBvaW50IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwiTGlzdGluZ3MiLCJwcm9wcyIsIkxJU1RJTkdTX0VORFBPSU5UIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQSxNQUFNQSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzFCQyxNQUFJLEVBQUUsTUFEb0I7QUFFMUJDLFVBQVEsRUFBRSxVQUZnQjtBQUcxQkMsT0FBSyxFQUFFO0FBSG1CLENBQWQsQ0FBZDtBQU1BLE1BQU1DLE9BQU8sR0FBR0wsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDNUJLLGdCQUFjLEVBQUUsZ0JBRFk7QUFFNUJDLHdCQUFzQixFQUFFLHdCQUZJO0FBRzVCQyxzQkFBb0IsRUFBRSxzQkFI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QSxJQUxKLEVBTUk7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLEVBVUk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUNJLGdCQUFZLEVBQUVELGlCQURsQjtBQUVJLFdBQU8sRUFBQyxTQUZaO0FBR0ksWUFBUSxFQUFDLFdBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBVkosQ0FESjtBQW9CSCxDOzs7Ozs7Ozs7OztBQzFCRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJjb25zdCBTVEFURSA9IE9iamVjdC5mcmVlemUoe1xyXG4gIElETEU6IFwiaWRsZVwiLFxyXG4gIEZFVENISU5HOiBcImZldGNoaW5nXCIsXHJcbiAgRVJST1I6IFwiZXJyb3JcIixcclxufSk7XHJcblxyXG5jb25zdCBBQ1RJT05TID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgRkVUQ0hfTElTVElOR1M6IFwiRkVUQ0hfTElTVElOR1NcIixcclxuICBGRVRDSF9MSVNUSU5HU19TVUNDRVNTOiBcIkZFVENIX0xJU1RJTkdTX1NVQ0NFU1NcIixcclxuICBGRVRDSF9MSVNUSU5HU19FUlJPUjogXCJGRVRDSF9MSVNUSU5HU19FUlJPUlwiLFxyXG4gIFZJRVdfTElTVElORzogXCJWSUVXX0xJU1RJTkdcIixcclxuICBSRVBMWTogXCJSRVBMWVwiLFxyXG59KTtcclxuXHJcbi8vIEluaXRpYWwgU3RhdGUgYW5kIEFjdGlvbnNcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxpc3RpbmdzOiBbXSwgLy8gYXJyYXkgb2YgbGlzdGluZyBvYmplY3QsXHJcbiAgc3RhdGU6IFNUQVRFLklETEUsIC8vIGVudW0gc3RhdGUgb2YgcGFnZS9zbGljZSBcImlkbGVcIiB8IFwiZmV0Y2hpbmdcIiB8IFwiZXJyb3JcIixcclxuICBlcnJvcjogdW5kZWZpbmVkLCAvLyBlcnJvciBtZXNzYWdlXHJcbn07XHJcblxyXG4vLyByZWR1Y2VyIHRoYXQgdXBkYXRlcyBvdXIgc3RhdGVcclxuY29uc3QgbGlzdGluZ3NSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTlMuRkVUQ0hfTElTVElOR1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3RhdGU6IFNUQVRFLkZFVENISU5HLFxyXG4gICAgICAgIGxpc3RpbmdzOiBbXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0YXRlOiBTVEFURS5JRExFLFxyXG4gICAgICAgIGxpc3RpbmdzOiBbLi4uYWN0aW9uLmxpc3RpbmdzXSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUNUSU9OUy5GRVRDSF9MSVNUSU5HU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdGF0ZTogU1RBVEUuRVJST1IsXHJcbiAgICAgICAgbGlzdGluZ3M6IFtdLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBBQ1RJT05TLlZJRVdfTElTVElORzpcclxuICAgIGNhc2UgQUNUSU9OUy5SRVBMWTpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBMaXN0aW5nc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBMaXN0aW5nc1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihsaXN0aW5nc1JlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgbGlzdGluZ3M6IHN0YXRlLmxpc3RpbmdzLFxyXG4gICAgc3RhdGU6IHN0YXRlLnN0YXRlLFxyXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxyXG4gICAgZmV0Y2g6IChlbmRwb2ludCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuRkVUQ0hfTElTVElOR1MgfSk7XHJcbiAgICAgIGZldGNoKGVuZHBvaW50KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGxpc3RpbmdzOiByZXNwb25zZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZFVENIX0xJU1RJTkdTX0VSUk9SLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHZpZXc6ICh0aXRsZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmluZm8oYFZpZXc6ICR7dGl0bGV9YCk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OUy5WSUVXX0xJU1RJTkcgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVwbHk6ICh0aXRsZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmluZm8oYFJlcGx5OiAke3RpdGxlfWApO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTlMuUkVQTFkgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdGluZ3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGlzdGluZ3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXRBc0N1cnJlbmN5ID0gKGludCkgPT4ge1xyXG4gIGlmICghaW50KSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tQVVcIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIkFVRFwiLFxyXG4gIH0pLmZvcm1hdChpbnQpO1xyXG59O1xyXG5cclxuY29uc3QgU3Bpbm5lciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJfX2NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IEVycm9yID0gKHsgZXJyb3IgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2Vycm9yXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzX19lcnJvck1lc3NhZ2VcIj5cclxuICAgICAgPGgzPkFuIGVycm9yIG9jY3VyZWQsIFNlcnZlciByZXNwb25kZWQgd2l0aCB7ZXJyb3J9ITwvaDM+XHJcbiAgICAgIDxwPlJlbG9hZCB0byB0cnkgYWdhaW4hPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxpc3RpbmdzX19idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKX0+XHJcbiAgICAgIFJlbG9hZFxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBMaXN0aW5nc0hlYWRlciA9ICh7IGNvdW50LCBrZXl3b3JkLCBsb2NhdGlvbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19faGVhZGVyXCI+XHJcbiAgICA8aDE+U2VhcmNoIHJlc3VsdHM8L2gxPlxyXG4gICAgPGgyPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fdGV4dC0taGlnbGlnaHRlZFwiPntjb3VudH0gcmVzdWx0czwvc3Bhbj4gZm9ye1wiIFwifVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fdGV4dC0taGlnbGlnaHRlZFwiPntrZXl3b3JkfTwvc3Bhbj4gaW57XCIgXCJ9XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdzX190ZXh0LS1oaWdsaWdodGVkXCI+e2xvY2F0aW9ufTwvc3Bhbj5cclxuICAgIDwvaDI+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBMaXN0aW5nID0gKHsgbGlzdGluZywgdmlldywgcmVwbHkgfSkgPT4ge1xyXG4gIGNvbnN0IGZvcm1hdHRlZFByaWNlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoaXNOYU4obGlzdGluZy5wcmljZSkpIHtcclxuICAgICAgcmV0dXJuIGxpc3RpbmcucHJpY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0QXNDdXJyZW5jeShsaXN0aW5nLnByaWNlKTtcclxuICB9LCBbbGlzdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImxpc3RpbmdcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImxpc3RpbmdfX3RpdGxlXCI+e2xpc3RpbmcudGl0bGV9PC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nX19tZXRhZGF0YVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RpbmdfX3ByaWNlXCI+e2Zvcm1hdHRlZFByaWNlfTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57bGlzdGluZy5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bGlzdGluZy5pbWdVcmwgJiYgKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3RpbmdfX2ltZ1wiXHJcbiAgICAgICAgICB0aXRsZT17bGlzdGluZy50aXRsZX1cclxuICAgICAgICAgIHNyYz17bGlzdGluZy5pbWdVcmx9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdGluZ19fZGVzY1wiPntsaXN0aW5nLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nX19hY3Rpb25zXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGlzdGluZ3NfX2J1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3KGxpc3RpbmcudGl0bGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFZpZXdcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0aW5nc19fYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlcGx5KGxpc3RpbmcudGl0bGUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlcGx5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTGlzdGluZ3NDb250YWluZXIgPSAoeyBkYXRhRW5kcG9pbnQsIGtleXdvcmQgPSBcIlwiLCBsb2NhdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZmV0Y2gsIGVycm9yLCBsaXN0aW5ncywgdmlldywgcmVwbHkgfSA9XHJcbiAgICBSZWFjdC51c2VDb250ZXh0KExpc3RpbmdzQ29udGV4dCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChkYXRhRW5kcG9pbnQpO1xyXG4gIH0sIFtkYXRhRW5kcG9pbnRdKTtcclxuXHJcbiAgaWYgKHN0YXRlID09PSBTVEFURS5GRVRDSElORykge1xyXG4gICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlID09PSBTVEFURS5FUlJPUiAmJiBlcnJvcikge1xyXG4gICAgcmV0dXJuIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0aW5nc0hlYWRlclxyXG4gICAgICAgIGNvdW50PXtsaXN0aW5ncy5sZW5ndGh9XHJcbiAgICAgICAga2V5d29yZD17a2V5d29yZH1cclxuICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7bGlzdGluZ3MubGVuZ3RoID09PSAwICYmIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0aW5nc19fbm9SZXN1bHRzXCI+Tm8gcmVzdWx0cyBmb3VuZCE8L3NwYW4+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7bGlzdGluZ3MubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cImxpc3RpbmdzX19ncmlkXCI+XHJcbiAgICAgICAgICB7bGlzdGluZ3MubWFwKChsaXN0aW5nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdGluZyBsaXN0aW5nPXtsaXN0aW5nfSBrZXk9e2luZGV4fSB2aWV3PXt2aWV3fSByZXBseT17cmVwbHl9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L29sPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExpc3RpbmdzID0gKHByb3BzKSA9PiAoXHJcbiAgPExpc3RpbmdzUHJvdmlkZXI+XHJcbiAgICA8TGlzdGluZ3NDb250YWluZXIgey4uLnByb3BzfSAvPlxyXG4gIDwvTGlzdGluZ3NQcm92aWRlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaXN0aW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0aW5nc1wiO1xyXG5cclxuY29uc3QgTElTVElOR1NfRU5EUE9JTlQgPSBcIi9hcGkvbGlzdGluZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkdUQVUgRnJvbnQtRW5kIFRlc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL3ZhcmlhYmxlcy5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvY3NzL2dsb2JhbHMuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Nzcy9ob21lLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3MvbGlzdGluZ3MuY3NzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdGluZ3NcclxuICAgICAgICAgICAgICAgICAgICBkYXRhRW5kcG9pbnQ9e0xJU1RJTkdTX0VORFBPSU5UfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ9XCJGZXJyYXJpXCJcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj1cIkF1c3RyYWxpYVwiXHJcbiAgICAgICAgICAgICAgICA+PC9MaXN0aW5ncz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9