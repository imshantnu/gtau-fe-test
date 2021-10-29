module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/listings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/listings.js":
/*!*******************************!*\
  !*** ./pages/api/listings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shuffle = __webpack_require__(/*! shuffle-array */ "shuffle-array");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const data = [{
  title: "2005 Ferrari F430 Convertible",
  description: "We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD",
  imgUrl: "/img/ferrari01.webp",
  price: 299999,
  location: "Sydney, NSW"
}, {
  title: "2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible",
  description: "Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.",
  imgUrl: "/img/ferrari02.webp",
  price: 249990,
  location: "Taralgon, VIC"
}, {
  title: "2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe",
  description: "This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine",
  imgUrl: "/img/ferrari03.webp",
  price: 148888,
  location: "Perth, WA"
}, {
  title: "1979 Ferrari 308 GTB Red 5 Speed Manual Coupe",
  description: "1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs",
  imgUrl: "/img/ferrari04.webp",
  price: 179990,
  location: "Hobart, TAS"
}, {
  title: "1997 Ferrari F355 GTS Manual Coupe",
  description: "For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.",
  imgUrl: "/img/ferrari05.webp",
  price: 200000,
  location: "Sydney, NSW"
}, {
  title: "Ferrari spare parts",
  description: "Wanted to buy: spare parts for my Ferrari. Will travel to inspect",
  price: "Wanted",
  location: "Adelaide, SA"
}];
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const artificialDelay = randomNumber(100, 3000);
  const requestWillArtificiallyFail = randomNumber(0, 11) === 10;
  return sleep(artificialDelay).then(() => {
    if (requestWillArtificiallyFail) {
      res.statusCode = 500;
      res.end();
    } else {
      const response = shuffle(data, {
        copy: true
      }).splice(0, randomNumber(0, 6));
      res.statusCode = 200;
      res.json(response);
    }
  });
});

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2xpc3RpbmdzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInNodWZmbGUtYXJyYXlcIiJdLCJuYW1lcyI6WyJzaHVmZmxlIiwicmVxdWlyZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJyIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJwcmljZSIsImxvY2F0aW9uIiwicmVxIiwicmVzIiwiYXJ0aWZpY2lhbERlbGF5IiwicmVxdWVzdFdpbGxBcnRpZmljaWFsbHlGYWlsIiwidGhlbiIsInN0YXR1c0NvZGUiLCJlbmQiLCJyZXNwb25zZSIsImNvcHkiLCJzcGxpY2UiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG9DQUFELENBQXJCOztBQUVBLFNBQVNDLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNqQixTQUFPLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFuQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksWUFBVCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLFFBQU1DLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF4QztBQUNBLFNBQU9HLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxDQUFYLENBQVA7QUFDRDs7QUFFRCxNQUFNSSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsK0JBRFQ7QUFFRUMsYUFBVyxFQUNULGtMQUhKO0FBSUVDLFFBQU0sRUFBRSxxQkFKVjtBQUtFQyxPQUFLLEVBQUUsTUFMVDtBQU1FQyxVQUFRLEVBQUU7QUFOWixDQURXLEVBU1g7QUFDRUosT0FBSyxFQUFFLGdFQURUO0FBRUVDLGFBQVcsRUFDVCxpVUFISjtBQUlFQyxRQUFNLEVBQUUscUJBSlY7QUFLRUMsT0FBSyxFQUFFLE1BTFQ7QUFNRUMsVUFBUSxFQUFFO0FBTlosQ0FUVyxFQWlCWDtBQUNFSixPQUFLLEVBQ0gsc0VBRko7QUFHRUMsYUFBVyxFQUNULHNQQUpKO0FBS0VDLFFBQU0sRUFBRSxxQkFMVjtBQU1FQyxPQUFLLEVBQUUsTUFOVDtBQU9FQyxVQUFRLEVBQUU7QUFQWixDQWpCVyxFQTBCWDtBQUNFSixPQUFLLEVBQUUsK0NBRFQ7QUFFRUMsYUFBVyxFQUNULDBNQUhKO0FBSUVDLFFBQU0sRUFBRSxxQkFKVjtBQUtFQyxPQUFLLEVBQUUsTUFMVDtBQU1FQyxVQUFRLEVBQUU7QUFOWixDQTFCVyxFQWtDWDtBQUNFSixPQUFLLEVBQUUsb0NBRFQ7QUFFRUMsYUFBVyxFQUNULHVOQUhKO0FBSUVDLFFBQU0sRUFBRSxxQkFKVjtBQUtFQyxPQUFLLEVBQUUsTUFMVDtBQU1FQyxVQUFRLEVBQUU7QUFOWixDQWxDVyxFQTBDWDtBQUNFSixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUNULG1FQUhKO0FBSUVFLE9BQUssRUFBRSxRQUpUO0FBS0VDLFVBQVEsRUFBRTtBQUxaLENBMUNXLENBQWI7QUFtRGUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLFFBQU1DLGVBQWUsR0FBR2YsWUFBWSxDQUFDLEdBQUQsRUFBTSxJQUFOLENBQXBDO0FBQ0EsUUFBTWdCLDJCQUEyQixHQUFHaEIsWUFBWSxDQUFDLENBQUQsRUFBSSxFQUFKLENBQVosS0FBd0IsRUFBNUQ7QUFFQSxTQUFPTCxLQUFLLENBQUNvQixlQUFELENBQUwsQ0FBdUJFLElBQXZCLENBQTRCLE1BQU07QUFDdkMsUUFBSUQsMkJBQUosRUFBaUM7QUFDL0JGLFNBQUcsQ0FBQ0ksVUFBSixHQUFpQixHQUFqQjtBQUNBSixTQUFHLENBQUNLLEdBQUo7QUFDRCxLQUhELE1BR087QUFDTCxZQUFNQyxRQUFRLEdBQUczQixPQUFPLENBQUNjLElBQUQsRUFBTztBQUFFYyxZQUFJLEVBQUU7QUFBUixPQUFQLENBQVAsQ0FBOEJDLE1BQTlCLENBQ2YsQ0FEZSxFQUVmdEIsWUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRkcsQ0FBakI7QUFJQWMsU0FBRyxDQUFDSSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FKLFNBQUcsQ0FBQ1MsSUFBSixDQUFTSCxRQUFUO0FBQ0Q7QUFDRixHQVpNLENBQVA7QUFhRCxDQWpCRCxFOzs7Ozs7Ozs7OztBQzlEQSwwQyIsImZpbGUiOiJwYWdlcy9hcGkvbGlzdGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9saXN0aW5ncy5qc1wiKTtcbiIsInZhciBzaHVmZmxlID0gcmVxdWlyZShcInNodWZmbGUtYXJyYXlcIik7XG5cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG5mdW5jdGlvbiByYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgcmV0dXJuIE1hdGguZmxvb3Iocik7XG59XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCIyMDA1IEZlcnJhcmkgRjQzMCBDb252ZXJ0aWJsZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXZSBhcmUgcHJvdWQgdG8gb2ZmZXIgb25lIG9mIHRoZSByYXJlc3QgbW9kZXJuLWRheSBGZXJyYXJpJ3MgaW4gZXhpc3RlbmNlIHRvZGF5LlRoZXJlIGFyZSBvbmx5IGFwcHJveGltYXRlbHkgMTMwIFJJR0hUIEhBTkQgRFJJVkUgNiBTUEVFRCBHQVRFRCBNQU5VQUwgRjQzMCBTUElERVJTIElOIFRIRSBXT1JMRFwiLFxuICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMS53ZWJwXCIsXG4gICAgcHJpY2U6IDI5OTk5OSxcbiAgICBsb2NhdGlvbjogXCJTeWRuZXksIE5TV1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiMjAwNiBGZXJyYXJpIEY0MzAgU3BpZGVyIEJsYWNrIDYgU3BlZWQgRm9ybXVsYSBPbmUgQ29udmVydGlibGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVHJhcmFsZ29uIENhciBDaXR5IGlzIGxvY2F0ZWQgaW4gVmljdG9yaWEsIDEuNSBocnMgZnJvbSBNZWxib3VybmUgZG93biB0aGUgU291dGggRWFzdGVybiBmcmVld2F5LiBXZSBhcmUgdGhlIGxhcmdlc3Qgbm9uLWZyYW5jaGlzZSBkZWFsZXJzaGlwIGluIHRoZSBHaXBwc2xhbmQgUmVnaW9uLCBsb2NhbGx5IG93bmVkIGFuZCBvcGVyYXRlZCBmb3Igb3ZlciAzMCB5ZWFycy4gT3VyIHRlYW0gaGF2ZSB0aGUga25vd2xlZGdlIGFuZCB0aGUgZXhwZXJ0aXNlIHRvIGhlbHAgeW91IGZpbmQgdGhlIHJpZ2h0IGNhciB0byBwZXJmZWN0bHkgc3VpdCB5b3VyIG5lZWRzLlwiLFxuICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMi53ZWJwXCIsXG4gICAgcHJpY2U6IDI0OTk5MCxcbiAgICBsb2NhdGlvbjogXCJUYXJhbGdvbiwgVklDXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTpcbiAgICAgIFwiMjAwMCBGZXJyYXJpIDM2MCBNb2RlbmEgRjEgQmx1ZSA2IFNwZWVkIFNlcSBNYW51YWwgQXV0by1DbHV0Y2ggQ291cGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBNYWduaWZpY2VudCBjYXIgaXMgb25lIGZvciB0aGUgY29sbGVjdG9yLCBiZWNvbWluZyBoYXJkZXIgdG8gZmluZCBpbiB0aGlzIGNvbmRpdGlvbiB0aGlzIGlzIGRlZmluaXRlbHkgYSByYXJlIGNhci4gSXQgaGFzIGFsd2F5cyBiZWVuIHNlcnZpY2VkIGFuZCBtYWludGFpbmVkIGJ5IEZlcnJhcmkgYnkgaXRzIHNpbmdsZSBvd25lciBhbmQgaGFzIHVuZG91YnRlZGx5IGJlZW4gbG92ZWQuIEl0IGhhcyBpdHMgZ2VudWluZVwiLFxuICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwMy53ZWJwXCIsXG4gICAgcHJpY2U6IDE0ODg4OCxcbiAgICBsb2NhdGlvbjogXCJQZXJ0aCwgV0FcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIjE5NzkgRmVycmFyaSAzMDggR1RCIFJlZCA1IFNwZWVkIE1hbnVhbCBDb3VwZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCIxOTc5IEF1c3RyYWxpYW4gRGVsaXZlcmVkIEZlcnJhcmkgMzA4IEdUQiBpbiB0aGUgV29ybGQgRmFtb3VzIFJvc3NvIENvcnNhIFJlZCB3aXRoIEJsYWNrIExlYXRoZXIgVHJpbSAtIE1hdGNoaW5nIE51bWJlcnMgMi45TCBWOCBFbmdpbmUgLSBDbGFzc2ljIDUgU3BlZWQgTWFudWFsIEdhdGVkIFRyYW5zbWlzc2lvbiAtIFZlcnkgbG93IDQwLDgxN0tNc1wiLFxuICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwNC53ZWJwXCIsXG4gICAgcHJpY2U6IDE3OTk5MCxcbiAgICBsb2NhdGlvbjogXCJIb2JhcnQsIFRBU1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiMTk5NyBGZXJyYXJpIEYzNTUgR1RTIE1hbnVhbCBDb3VwZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJGb3Igc2FsZXMgdGhpcyBiZWF1dGlmdWwgcmFyZSBGMzU1IEdUUyA2IHNwZWVkIG1hbnVhbCBnZWFyYm94IGlzIGluIG91dHN0YW5kaW5nIGFuZCBwZXJmZWN0IG9yaWdpbmFsIGNvbmRpdGlvbiwgZnVsbCBGZXJyYXJpIHNlcnZpY2UgaGlzdG9yeSwgb25seSAxMDAwa20sIGRvbmUgc2luY2UgbGFzdCBzZXJ2aWNlLCBmdWxseSBkb2N1bWVudGVkIHNlcnZpY2UgaGlzdG9yeS5cIixcbiAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDUud2VicFwiLFxuICAgIHByaWNlOiAyMDAwMDAsXG4gICAgbG9jYXRpb246IFwiU3lkbmV5LCBOU1dcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZlcnJhcmkgc3BhcmUgcGFydHNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2FudGVkIHRvIGJ1eTogc3BhcmUgcGFydHMgZm9yIG15IEZlcnJhcmkuIFdpbGwgdHJhdmVsIHRvIGluc3BlY3RcIixcbiAgICBwcmljZTogXCJXYW50ZWRcIixcbiAgICBsb2NhdGlvbjogXCJBZGVsYWlkZSwgU0FcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBhcnRpZmljaWFsRGVsYXkgPSByYW5kb21OdW1iZXIoMTAwLCAzMDAwKTtcbiAgY29uc3QgcmVxdWVzdFdpbGxBcnRpZmljaWFsbHlGYWlsID0gcmFuZG9tTnVtYmVyKDAsIDExKSA9PT0gMTA7XG5cbiAgcmV0dXJuIHNsZWVwKGFydGlmaWNpYWxEZWxheSkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJlcXVlc3RXaWxsQXJ0aWZpY2lhbGx5RmFpbCkge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICByZXMuZW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gc2h1ZmZsZShkYXRhLCB7IGNvcHk6IHRydWUgfSkuc3BsaWNlKFxuICAgICAgICAwLFxuICAgICAgICByYW5kb21OdW1iZXIoMCwgNilcbiAgICAgICk7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgIHJlcy5qc29uKHJlc3BvbnNlKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNodWZmbGUtYXJyYXlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==