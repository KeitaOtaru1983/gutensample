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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks.js":
/*!*******************!*\
  !*** ./blocks.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./title/block.js */ \"./title/block.js\");\n\n__webpack_require__(/*! ./txt-title-brown/block.js */ \"./txt-title-brown/block.js\");\n\n__webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n\n//# sourceURL=webpack:///./blocks.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./title/block.js":
/*!************************!*\
  !*** ./title/block.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* h2画像用ブロック */\nvar registerBlockType = wp.blocks.registerBlockType;\nvar MediaUpload = wp.editor.MediaUpload;\nvar Button = wp.components.Button;\nregisterBlockType('block-custom/title', {\n  title: '大見出し画像',\n  icon: 'index-card',\n  category: 'common',\n  attributes: {\n    mediaID: {\n      type: 'number'\n    },\n    mediaURL: {\n      type: 'string',\n      source: 'attribute',\n      selector: 'img',\n      attribute: 'src'\n    }\n  },\n  edit: function edit(props) {\n    var className = props.className,\n        _props$attributes = props.attributes,\n        mediaID = _props$attributes.mediaID,\n        mediaURL = _props$attributes.mediaURL,\n        setAttributes = props.setAttributes;\n\n    var onSelectImage = function onSelectImage(media) {\n      setAttributes({\n        mediaURL: media.url,\n        mediaID: media.id\n      });\n    };\n\n    return wp.element.createElement(\"div\", {\n      className: className\n    }, wp.element.createElement(\"div\", {\n      className: \"image\"\n    }, wp.element.createElement(MediaUpload, {\n      onSelect: onSelectImage,\n      type: \"image\",\n      value: mediaID,\n      render: function render(_ref) {\n        var open = _ref.open;\n        return wp.element.createElement(Button, {\n          className: mediaID ? 'image-button' : 'button button-large',\n          onClick: open\n        }, !mediaID ? '画像アップロード' : wp.element.createElement(\"img\", {\n          src: mediaURL\n        }));\n      }\n    })));\n  },\n  save: function save(props) {\n    var mediaURL = props.attributes.mediaURL;\n    return wp.element.createElement(\"h2\", null, mediaURL && wp.element.createElement(\"img\", {\n      className: \"upload-image\",\n      src: mediaURL,\n      alt: \"アップロードした画像\"\n    }));\n  }\n});\n\n//# sourceURL=webpack:///./title/block.js?");

/***/ }),

/***/ "./txt-title-brown/block.js":
/*!**********************************!*\
  !*** ./txt-title-brown/block.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* z-tree.jpの中見出し ブラウン */\nvar registerBlockType = wp.blocks.registerBlockType;\nvar RichText = wp.editor.RichText;\nregisterBlockType('block-custom/txt-title-brown', {\n  title: '茶色の中見出し',\n  icon: 'index-card',\n  category: 'common',\n  content: {\n    source: 'children',\n    selector: 'p'\n  },\n  edit: function edit(props) {\n    return wp.element.createElement(\"div\", {\n      \"class\": 'txt-title-brown'\n    }, wp.element.createElement(RichText, {\n      onChange: function onChange(content) {\n        return props.setAttributes({\n          content: content\n        });\n      },\n      value: props.attributes.content\n    }));\n  },\n  save: function save(props) {\n    return wp.element.createElement(\"div\", null, props.attributes.content);\n  }\n});\n\n//# sourceURL=webpack:///./txt-title-brown/block.js?");

/***/ })

/******/ });