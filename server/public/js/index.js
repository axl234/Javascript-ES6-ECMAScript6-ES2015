/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    console.log('------------------');
	}
	{
	    console.log('------------------');
	}
	{
	    console.log('------------------');
	}
	{
	    console.log([1, 2,, 3, NaN].includes(NaN)); //true
	    console.log([1, 2, 34].includes(2)); //true
	    console.log('------------------');
	}
	{
	    console.log([1, 23, 45, 3, 5, 56, 23].findIndex(function (item) {
	        return item > 20;
	    })); //1
	    console.log('------------------');
	}
	{
	    console.log([1, 23, 45, 3, 5, 56, 23].find(function (item) {
	        return item > 20;
	    })); //23
	    console.log('------------------');
	}
	{
	    console.log([17, 26, 53, 44, 25, 6, 23, 84, 92].copyWithin(2, 3, 5)); //[17, 26, 44, 25, 25, 6, 23, 84, 92]
	    console.log('------------------');
	}
	{
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = [1, 23, 234, 4, 5, 34].entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _step$value = _slicedToArray(_step.value, 2),
	                index = _step$value[0],
	                value = _step$value[1];

	            console.log(index, value);
	            // 0 1
	            // 1 23
	            // 2 234
	            // 3 4
	            // 4 5
	            // 5 34
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = [1, 2, 3, 4, 5].keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var index = _step2.value;

	            console.log(index); // 0, 1, 2, 3, 4
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = [1, 2, 3, 4, 54, 45].values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var value = _step3.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    console.log('------------------');
	}
	{
	    console.log([1, 23, NaN].fill(8)); // [8, 8, 8]
	    console.log([1, 3, 23, 're', undefined, NaN].fill(7, 1, 3)); //[1, 7, 7, "re", undefined, NaN]
	    console.log('------------------');
	}
	{
	    var pArr = Array.from(document.getElementsByTagName('p'));
	    pArr.forEach(function (item) {
	        console.log(item.textContent);
	    });
	    console.log('------------------');
	}
	{
	    console.log(Array.of(1, 2, 3, 'sdf', [1, 2, 3])); // [1, 2, 3, 'sdf', [1, 2, 3]]
	    console.log('------------------');
	}

/***/ })
/******/ ]);