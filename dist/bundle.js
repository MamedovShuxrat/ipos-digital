/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.svg */ \"./src/images/logo.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Ipos digital</title>\\n</head>\\n\\n<body>\\n    <div class=\\\"container\\\">\\n        <header class=\\\"header\\\">\\n            <p>Тестовое задание</p>\\n            <a href=\\\"https://ipos.digital/\\\" target=\\\"_blank\\\">\\n                <img class=\\\"logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\">\\n            </a>\\n        </header>\\n        <main>\\n            <section class=\\\"select\\\">\\n                <div class=\\\"custom-dropdown select__dnd\\\">\\n                    <p class=\\\"select__title\\\">Выпадающий список_1</p>\\n                    <button class=\\\"dropdown__toggle \\\" id=\\\"firstDropdownToggle\\\">Выберите параметр <span\\n                            class=\\\"arrow\\\"></span></button>\\n                    <ul class=\\\"dropdown__menu hide\\\" id=\\\"firstDropdown\\\">\\n                        <li data-value=\\\"value1\\\">Параметр 1 </li>\\n                        <li data-value=\\\"value2\\\">Параметр 2</li>\\n                        <li data-value=\\\"value3\\\">Параметр 3</li>\\n                        <li data-value=\\\"value1\\\">Параметр 4</li>\\n                        <li data-value=\\\"value2\\\">Параметр 5</li>\\n                    </ul>\\n                </div>\\n\\n                <div class=\\\"custom-dropdown select__dnd\\\">\\n                    <p class=\\\"select__title\\\">Выпадающий список_2</p>\\n                    <button class=\\\"dropdown__toggle \\\" id=\\\"secondDropdownToggle\\\">Выберите параметр <span\\n                            class=\\\"arrow\\\"></span></button>\\n                    <ul class=\\\"dropdown__menu hide\\\" id=\\\"secondDropdown\\\">\\n                        <li data-value=\\\"value1\\\">Параметр 6 </li>\\n                        <li data-value=\\\"value2\\\">Параметр 7</li>\\n                        <li data-value=\\\"value3\\\">Параметр 8</li>\\n                        <li data-value=\\\"value1\\\">Параметр 9</li>\\n                        <li data-value=\\\"value2\\\">Параметр 10</li>\\n                    </ul>\\n                </div>\\n            </section>\\n\\n            <div class=\\\"content\\\">\\n                <h1 id=\\\"pageTitle\\\">Заголовок</h1>\\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem sapiente veniam accusamus modi\\n                    laboriosam voluptatibus voluptate velit iusto in! Explicabo mollitia veniam accusantium voluptas ut\\n                    vero\\n                    excepturi culpa non.</p>\\n\\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quidem sapiente veniam accusamus modi\\n                    laboriosam voluptatibus voluptate velit iusto in! Explicabo mollitia veniam accusantium voluptas ut\\n                    vero\\n                    excepturi culpa non.</p>\\n\\n            </div>\\n        </main>\\n        <footer class=\\\"footer\\\">\\n            <div class=\\\"copy-right__item\\\">\\n                <span class=\\\"copy-right__info\\\">Этот веб-ресурс создан в рамках тестового задания для потенциального\\n                    работодателя.\\n                    Фронтенд частью проекта занимался я, <span class=\\\"copy-right_accent\\\">Мамедов Шухрат</span> , с целью\\n                    продемонстрировать мои навыки\\n                    и знания в области веб-разработки. Сайт предназначен для ознакомления работодателя с моими\\n                    способностями\\n                    и подходом к созданию веб-приложений.</span>\\n            </div>\\n        </footer>\\n    </div>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://iposDigital/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://iposDigital/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://iposDigital/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://iposDigital/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n    const firstDropdownToggle = document.getElementById('firstDropdownToggle')\r\n    const secondDropdownToggle = document.getElementById('secondDropdownToggle')\r\n    const firstDropdown = document.getElementById('firstDropdown')\r\n    const secondDropdown = document.getElementById('secondDropdown')\r\n    const arrowRotate = document.querySelectorAll('.arrow')\r\n\r\n    const pageTitle = document.getElementById('pageTitle')\r\n\r\n    firstDropdownToggle.addEventListener('click', function () {\r\n        firstDropdown.classList.toggle('hide')\r\n        arrowRotate[0].style.transform = firstDropdown.classList.contains('hide') ? 'rotate(180deg)' : 'rotate(0deg)'\r\n    })\r\n\r\n    secondDropdownToggle.addEventListener('click', function () {\r\n        secondDropdown.classList.toggle('hide')\r\n        arrowRotate[1].style.transform = secondDropdown.classList.contains('hide') ? 'rotate(180deg)' : 'rotate(0deg)'\r\n    })\r\n\r\n    secondDropdown.addEventListener('click', function (event) {\r\n        if (event.target.tagName === 'LI') {\r\n            const selectedValue = event.target.textContent\r\n            alert(selectedValue)\r\n            secondDropdown.classList.add('hide')\r\n        }\r\n    })\r\n    firstDropdown.addEventListener('click', function (event) {\r\n        if (event.target.tagName === 'LI') {\r\n            pageTitle.textContent = `${pageTitle.textContent} - ${event.target.dataset.value}`\r\n            firstDropdown.classList.add('hide')\r\n        }\r\n    })\r\n\r\n    document.addEventListener('click', function (event) {\r\n        if (!firstDropdown.contains(event.target) && !firstDropdownToggle.contains(event.target)) {\r\n            firstDropdown.classList.add('hide')\r\n            arrowRotate[0].style.setProperty('transform', 'rotate(180deg)')\r\n        }\r\n\r\n        if (!secondDropdown.contains(event.target) && !secondDropdownToggle.contains(event.target)) {\r\n            secondDropdown.classList.add('hide')\r\n            arrowRotate[1].style.setProperty('transform', 'rotate(180deg)')\r\n        }\r\n    })\r\n\r\n}) \r\n\n\n//# sourceURL=webpack://iposDigital/./src/js/main.js?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images\\\\logo..svg\";\n\n//# sourceURL=webpack://iposDigital/./src/images/logo.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;