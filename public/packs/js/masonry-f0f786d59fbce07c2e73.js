/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/frontend/packs/masonry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/frontend/packs/masonry.js":
/*!***************************************!*\
  !*** ./app/frontend/packs/masonry.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/omromero/Projects/pinclone/app/frontend/packs/masonry.js: Support for the experimental syntax 'jsx' isn't currently enabled (1:1):\n\n> 1 | <script src=\"https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js\" integrity=\"sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D\" crossorigin=\"anonymous\" async></script>\n    | ^\n  2 |\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:476:17)\n    at Parser.raiseWithData (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:469:17)\n    at Parser.expectOnePlugin (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:3820:18)\n    at Parser.parseExprAtom (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:12577:18)\n    at Parser.parseExprSubscripts (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:12149:23)\n    at Parser.parseUpdate (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:12129:21)\n    at Parser.parseMaybeUnary (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:12104:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11901:61)\n    at Parser.parseExprOps (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11908:23)\n    at Parser.parseMaybeConditional (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11878:23)\n    at Parser.parseMaybeAssign (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11833:21)\n    at Parser.parseExpressionBase (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11769:23)\n    at /home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11763:39\n    at Parser.allowInAnd (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:13817:16)\n    at Parser.parseExpression (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:11763:17)\n    at Parser.parseStatementContent (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14256:23)\n    at Parser.parseStatement (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14113:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14739:25)\n    at Parser.parseBlockBody (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14730:10)\n    at Parser.parseProgram (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14032:10)\n    at Parser.parseTopLevel (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:14019:25)\n    at Parser.parse (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:15940:10)\n    at parse (/home/omromero/Projects/pinclone/node_modules/@babel/parser/lib/index.js:15992:38)\n    at parser (/home/omromero/Projects/pinclone/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/omromero/Projects/pinclone/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/omromero/Projects/pinclone/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/omromero/Projects/pinclone/node_modules/@babel/core/lib/transform.js:25:41)");

/***/ })

/******/ });
//# sourceMappingURL=masonry-f0f786d59fbce07c2e73.js.map