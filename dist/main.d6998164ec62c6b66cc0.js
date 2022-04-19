/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btn\": () => (/* binding */ btn),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _youtube_list_youtube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-list/youtube */ \"./src/youtube-list/youtube.js\");\n/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkedList */ \"./src/linkedList.js\");\n\r\n\r\n\r\nconst wrapper = document.querySelector('.wrapper')\r\ndocument.getElementById('request').addEventListener('change', _youtube_list_youtube__WEBPACK_IMPORTED_MODULE_0__.searchYoutube)\r\nconst btn = document.querySelector('.sort')\r\nbtn.addEventListener('click', function () {\r\n    setTimeout((0,_youtube_list_youtube__WEBPACK_IMPORTED_MODULE_0__.makeVideoCards)((0,_linkedList__WEBPACK_IMPORTED_MODULE_1__.bubbleSort)(_youtube_list_youtube__WEBPACK_IMPORTED_MODULE_0__.list)), 1000)\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://youtube-search/./src/index.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Compare\": () => (/* binding */ Compare),\n/* harmony export */   \"bubbleSort\": () => (/* binding */ bubbleSort),\n/* harmony export */   \"default\": () => (/* binding */ LinkedList),\n/* harmony export */   \"defaultCompare\": () => (/* binding */ defaultCompare),\n/* harmony export */   \"swap\": () => (/* binding */ swap)\n/* harmony export */ });\nclass LinkedList {\r\n    constructor() {\r\n        this.head = null\r\n        let length = 0\r\n    }\r\n    size() {\r\n        return length\r\n    }\r\n\r\n    add(data) {\r\n        const node = { data, next: null }\r\n        if (this.head === null) {\r\n            this.head = node\r\n        } else {\r\n            let currentNode = this.head\r\n            while (currentNode.next) {\r\n                currentNode = currentNode.next\r\n            }\r\n            currentNode.next = node\r\n        }\r\n        length++\r\n    }\r\n    elementAt(index) {\r\n        let currentNode = this.head\r\n        let count = 0\r\n        while (count < index) {\r\n            count++\r\n            currentNode = currentNode.next\r\n        }\r\n        return currentNode\r\n    }\r\n    remove(element) {\r\n        let currentNode = this.head\r\n        let previousNode\r\n        if (currentNode.element !== element) {\r\n            this.head = currentNode.next\r\n        } else {\r\n            while (currentNode.element !== element) {\r\n                previousNode = currentNode\r\n                currentNode = currentNode.next\r\n            }\r\n            previousNode.next = currentNode.next\r\n        }\r\n        length--\r\n    }\r\n}\r\nfunction swap(list, a, b) {\r\n    let temp = list.elementAt(a).data;\r\n    list.elementAt(a).data = list.elementAt(b).data;\r\n    list.elementAt(b).data = temp\r\n}\r\n\r\nconst Compare = {\r\n    LESS_THAN: -1,\r\n    BIGGER_THAN: 1\r\n};\r\n\r\nfunction defaultCompare(a, b) {\r\n    if (a === b) {\r\n        return 0;\r\n    }\r\n    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;\r\n}\r\n\r\nfunction bubbleSort(list, compare = defaultCompare) {\r\n    for (let i = 0; i < list.size(); i++) {\r\n        for (let j = 0; j < list.size() - 1 - i; j++) {\r\n            if (compare(list.elementAt(j).data, list.elementAt(j + 1).data) === Compare.BIGGER_THAN) {\r\n                swap(list, j, j + 1);\r\n            }\r\n        }\r\n    }\r\n    console.log(list)\r\n    return list\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://youtube-search/./src/linkedList.js?");

/***/ }),

/***/ "./src/youtube-list/youtube.js":
/*!*************************************!*\
  !*** ./src/youtube-list/youtube.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"makeVideoCards\": () => (/* binding */ makeVideoCards),\n/* harmony export */   \"searchYoutube\": () => (/* binding */ searchYoutube)\n/* harmony export */ });\n/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../linkedList */ \"./src/linkedList.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nconst apiKey = \"AIzaSyDtkb7Y94QYrpoWiQ78KkqKv_Bsbcb0txs\"\r\nconst list = new _linkedList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nasync function searchYoutube(e) {\r\n    try {\r\n        let request = e.target.value\r\n        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${request}&title=snippet&order=rating&quotaUser=100&maxResults=100&type=video&key=${apiKey}`)\r\n        let results = await response.json()\r\n\r\n        results.items.map(item => {\r\n            list.add(item.id.videoId)\r\n        })\r\n        ___WEBPACK_IMPORTED_MODULE_1__.btn.classList.add('visible')\r\n        makeVideoCards(list)\r\n\r\n    } catch (error) {\r\n        console.log(error)\r\n    }\r\n}\r\nfunction makeVideoCards() {\r\n    if (___WEBPACK_IMPORTED_MODULE_1__.wrapper) {\r\n        ___WEBPACK_IMPORTED_MODULE_1__.wrapper.innerHTML = ''\r\n    }\r\n    for (let i = 1; i <= list.size(); i++) {\r\n        let videoWrapper = document.createElement('div')\r\n        videoWrapper.className = 'video-wrapper'\r\n        ___WEBPACK_IMPORTED_MODULE_1__.wrapper.appendChild(videoWrapper)\r\n        let videoIframe = document.createElement('iframe')\r\n        videoIframe.className = 'video'\r\n        videoWrapper.appendChild(videoIframe)\r\n        if (list.elementAt(i)) {\r\n            let videoId = list.elementAt(i).data\r\n            videoIframe.src = `http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=http://localhost:4200`\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://youtube-search/./src/youtube-list/youtube.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;