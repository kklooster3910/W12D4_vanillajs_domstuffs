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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n    constructor (array) {\n       this.array = array \n    }\n\n    html (string) {\n        if (string) {\n            for(let i = 0; i < this.array.length; i++ ) {\n                this.array[i].innerHTML = string;\n            }\n            return this;\n        } else {\n            return this.array[0].innerHTML;\n        }\n    }\n\n    empty () {\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].innerHTML = \"\";\n            // this.array[i].outerHTML = \"<div></div>\"; just for testing purposed, wanted to see if it would remove the bullet from the li tag\n        }   \n    }\n\n    append (arg) {\n        // let that = this;\n        // debugger;\n        if (typeof arg === \"string\") {\n            for (let i = 0; i < this.array.length; i++) {\n                this.array[i].innerHTML += ( \" \" + arg)\n            }\n        } else if (arg instanceof HTMLElement){\n            for (let i = 0; i < this.array.length; i++) {\n                this.array[i].innerHTML += ( \" \" + arg.outerHTML)\n            }\n        } else {\n            for (let i = 0; i < this.array.length; i++) {\n                for (let j = 0; j < arg.array.length; j++) {\n                    this.array[i].innerHTML += (\" \" + arg.array[j].outerHTML)  \n                }\n            }\n        }\n    }\n\n    attr (getter, setter) {\n        \n        if (!setter) {\n            return this.array[0].attributes[getter]\n        }\n        for (let i = 0; i < this.array.length; i++) {\n            this.array[i].attributes[getter] = setter;\n        }\n    }\n\n\n}\n// Syntax\n// Return the value of an attribute:\n\n// $(selector).attr(width)\n// -> 300px\n// Set the attribute and value:\n// $(selector).attr(width, 500)\n// -> 500px\n\n        \n\n\n\n// this.array[i].innerHTML = arg.outerHTML\n\n// this.array[i].innerHTML = arg\n\nmodule.exports = DomNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// $(document).on(\"ready\", function () {});  \n\n// $(() => {\n    //     console.log('testing')\n    //     const $l = () => {};\n    //     window.$l = $l\n    // });\n    \n    // $(() => {\n        //     const window.$1 = function (arg);\n        //     const game = new Game();\n        //     const $board = $('.ttt');\n        //     new View(game, $board);\n        // });\n// document.addEventListener(\"DOMContentLoaded\", function() {});\n\nconst DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n// let array = $l()\n\n// window.domFunction = DomNodeCollection\n\nwindow.$l = function (arg) {\n    // console.log('testing')\n    // debugger;\n    if (typeof arg === \"string\") {\n        var selected = document.querySelectorAll(arg);\n        const selectArray =  Array.from(selected); \n        const nodeCollection = new DomNodeCollection(selectArray);\n        // return selectArray\n        return nodeCollection;\n    } else if (arg instanceof HTMLElement) {\n        // let newArg = Array.from(arg);\n        // var element = document.querySelectorAll(arg); this is what not to do! \n        const nodeCollection = new DomNodeCollection([arg]);\n        // debugger;\n        return nodeCollection;\n    }\n}\n// if string\n// $l(\".testing2\")\n// if HTMLElement\n// $l(\"<section>\")\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });