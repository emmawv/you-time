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

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/emmawv/practice/you-time/client/components/Products.js\";\n\n\n // QUERY:\n// gql imports graphql-tag that turns our string into a proper graphQL query.\n\nconst ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\n  query ALL_PRODUCTS_QUERY {\n    allProducts {\n      id\n      title\n      author\n      description\n      price\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n        altText\n      }\n    }\n  }\n`;\nconst ProductsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 60px;\n  text-align: center;\n`;\nconst ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`\n  display: flex;\n  flex-direction: column;\n\n  img {\n    height: 180px;\n    width: 110px;\n    object-fit: cover;\n    margin: 10px auto;\n  }\n\n  h4 {\n    text-transform: uppercase;\n  }\n`;\n\nconst Products = () => {\n  const {\n    data,\n    error,\n    loading\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(ALL_PRODUCTS_QUERY); // useQuery returns data, errors and if it is currently loading so we destructure it.\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 23\n  }, undefined); // TODO: Change for loader.\n\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 21\n  }, undefined);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductsList, {\n      children: data.allProducts.map(elm => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProductCard, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: elm.photo.image.publicUrlTransformed,\n          alt: elm.photo.altText\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: elm.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          style: {\n            color: 'var(--cream)',\n            margin: '7px',\n            fontSize: '0.8em'\n          },\n          children: elm.author\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n          style: {\n            backgroundColor: 'var(--cream)',\n            opacity: '0.4',\n            width: '30px',\n            margin: '0 auto',\n            height: '1px',\n            border: 'none'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }, undefined)]\n      }, elm.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzPzcxNDAiXSwibmFtZXMiOlsiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0Iiwic3R5bGVkIiwiZGl2IiwiUHJvZHVjdENhcmQiLCJQcm9kdWN0cyIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsIm1lc3NhZ2UiLCJhbGxQcm9kdWN0cyIsIm1hcCIsImVsbSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImFsdFRleHQiLCJ0aXRsZSIsImNvbG9yIiwibWFyZ2luIiwiZm9udFNpemUiLCJhdXRob3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5Iiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTs7QUFDQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTtBQW1CQSxNQUFNQyxZQUFZLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT0EsTUFBTUMsV0FBVyxHQUFHRix3REFBTSxDQUFDQyxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkQTs7QUFnQkEsTUFBTUUsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLFNBQVI7QUFBZUM7QUFBZixNQUEyQkMsK0RBQVEsQ0FBQ1Ysa0JBQUQsQ0FBekMsQ0FEcUIsQ0FDMEM7O0FBQy9ELE1BQUlTLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQLENBRlEsQ0FFa0I7O0FBQ3ZDLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNHLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUEsZ0JBQ0dKLElBQUksQ0FBQ0ssV0FBTCxDQUFpQkMsR0FBakIsQ0FBc0JDLEdBQUQsaUJBQ3BCLHFFQUFDLFdBQUQ7QUFBQSxnQ0FDRTtBQUNFLGFBQUcsRUFBRUEsR0FBRyxDQUFDQyxLQUFKLENBQVVDLEtBQVYsQ0FBZ0JDLG9CQUR2QjtBQUVFLGFBQUcsRUFBRUgsR0FBRyxDQUFDQyxLQUFKLENBQVVHO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBLG9CQUFLSixHQUFHLENBQUNLO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FO0FBQ0UsZUFBSyxFQUFFO0FBQ0xDLGlCQUFLLEVBQUUsY0FERjtBQUVMQyxrQkFBTSxFQUFFLEtBRkg7QUFHTEMsb0JBQVEsRUFBRTtBQUhMLFdBRFQ7QUFBQSxvQkFPR1IsR0FBRyxDQUFDUztBQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFlRTtBQUNFLGVBQUssRUFBRTtBQUNMQywyQkFBZSxFQUFFLGNBRFo7QUFFTEMsbUJBQU8sRUFBRSxLQUZKO0FBR0xDLGlCQUFLLEVBQUUsTUFIRjtBQUlMTCxrQkFBTSxFQUFFLFFBSkg7QUFLTE0sa0JBQU0sRUFBRSxLQUxIO0FBTUxDLGtCQUFNLEVBQUU7QUFOSDtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkY7QUFBQSxTQUFrQmQsR0FBRyxDQUFDZSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtDRCxDQXRDRDs7QUF3Q2V2Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIFFVRVJZOlxuLy8gZ3FsIGltcG9ydHMgZ3JhcGhxbC10YWcgdGhhdCB0dXJucyBvdXIgc3RyaW5nIGludG8gYSBwcm9wZXIgZ3JhcGhRTCBxdWVyeS5cbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcbiAgICBhbGxQcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGF1dGhvclxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgICBwaG90byB7XG4gICAgICAgIGlkXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICAgIGFsdFRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFByb2R1Y3RzTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuXG4gIGg0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5gO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZKTsgLy8gdXNlUXVlcnkgcmV0dXJucyBkYXRhLCBlcnJvcnMgYW5kIGlmIGl0IGlzIGN1cnJlbnRseSBsb2FkaW5nIHNvIHdlIGRlc3RydWN0dXJlIGl0LlxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+OyAvLyBUT0RPOiBDaGFuZ2UgZm9yIGxvYWRlci5cbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0xpc3Q+XG4gICAgICAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgoZWxtKSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17ZWxtLmlkfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtlbG0ucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgIGFsdD17ZWxtLnBob3RvLmFsdFRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGg0PntlbG0udGl0bGV9PC9oND5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd2YXIoLS1jcmVhbSknLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzdweCcsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtlbG0uYXV0aG9yfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGhyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tY3JlYW0pJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMC40JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMwcHgnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMXB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Qcm9kdWN0Q2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2R1Y3RzTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ \"./pages/products.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _products__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n // The home page is the same as the products page.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQXNDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9wcm9kdWN0cyc7IC8vIFRoZSBob21lIHBhZ2UgaXMgdGhlIHNhbWUgYXMgdGhlIHByb2R1Y3RzIHBhZ2UuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.js\");\n\nvar _jsxFileName = \"/Users/emmawv/practice/you-time/client/pages/products.js\";\n\n\nconst ProductsPage = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Products__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy5qcz82YWUwIl0sIm5hbWVzIjpbIlByb2R1Y3RzUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLG1CQUNuQjtBQUFBLHlCQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBTWVBLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0cyc7XG5cbmNvbnN0IFByb2R1Y3RzUGFnZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8UHJvZHVjdHMgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });