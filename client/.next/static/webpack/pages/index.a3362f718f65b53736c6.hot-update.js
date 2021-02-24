webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/emmawv/practice/you-time/client/components/Products.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject3() {\n  var data = Object(_Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n\\n  img {\\n    height: 200px;\\n    width: 140px;\\n    object-fit: cover\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 60px;\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query ALL_PRODUCTS_QUERY {\\n    allProducts {\\n      id\\n      title\\n      author\\n      description\\n      price\\n      photo {\\n        id\\n        image {\\n          publicUrlTransformed\\n        }\\n        altText\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // QUERY:\n// gql imports graphql-tag that turns our string into a proper graphQL query.\n\nvar ALL_PRODUCTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar ProductsList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n_c = ProductsList;\nvar ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\n_c2 = ProductCard;\n\nvar Products = function Products() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(ALL_PRODUCTS_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // useQuery returns data, errors and if it is currently loading so we destructure it.\n\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 23\n  }, _this); // TODO: Change for loader.\n\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n    children: [\"Error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 21\n  }, _this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ProductsList, {\n      children: data.allProducts.map(function (elm) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ProductCard, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: elm.photo.image.publicUrlTransformed,\n            alt: elm.photo.altText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: elm.title\n          }, elm.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Products, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c3 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ProductsList\");\n$RefreshReg$(_c2, \"ProductCard\");\n$RefreshReg$(_c3, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcz83MTQwIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RzTGlzdCIsInN0eWxlZCIsImRpdiIsIlByb2R1Y3RDYXJkIiwiUHJvZHVjdHMiLCJ1c2VRdWVyeSIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJlbG0iLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJhbHRUZXh0IiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQW1CQSxJQUFNQyxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBQWxCO0tBQU1GLFk7QUFPTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1DLFc7O0FBV04sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNZQywrREFBUSxDQUFDUCxrQkFBRCxDQURwQjtBQUFBLE1BQ2JRLElBRGEsYUFDYkEsSUFEYTtBQUFBLE1BQ1BDLEtBRE8sYUFDUEEsS0FETztBQUFBLE1BQ0FDLE9BREEsYUFDQUEsT0FEQSxFQUMwQzs7O0FBQy9ELE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQLENBRlEsQ0FFa0I7O0FBQ3ZDLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0ksV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsR0FBRDtBQUFBLDRCQUNwQixxRUFBQyxXQUFEO0FBQUEsa0NBQ0U7QUFDRSxlQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxLQUFWLENBQWdCQyxvQkFEdkI7QUFFRSxlQUFHLEVBQUVILEdBQUcsQ0FBQ0MsS0FBSixDQUFVRztBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0U7QUFBQSxzQkFBaUJKLEdBQUcsQ0FBQ0s7QUFBckIsYUFBUUwsR0FBRyxDQUFDTSxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbkJEOztHQUFNZCxRO1VBQzZCQyx1RDs7O01BRDdCRCxRO0FBcUJTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIFFVRVJZOlxuLy8gZ3FsIGltcG9ydHMgZ3JhcGhxbC10YWcgdGhhdCB0dXJucyBvdXIgc3RyaW5nIGludG8gYSBwcm9wZXIgZ3JhcGhRTCBxdWVyeS5cbmNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcbiAgICBhbGxQcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIGF1dGhvclxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgICBwaG90byB7XG4gICAgICAgIGlkXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICAgIGFsdFRleHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFByb2R1Y3RzTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtZ2FwOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlclxuICB9XG5gO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZKTsgLy8gdXNlUXVlcnkgcmV0dXJucyBkYXRhLCBlcnJvcnMgYW5kIGlmIGl0IGlzIGN1cnJlbnRseSBsb2FkaW5nIHNvIHdlIGRlc3RydWN0dXJlIGl0LlxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+OyAvLyBUT0RPOiBDaGFuZ2UgZm9yIGxvYWRlci5cbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxQcm9kdWN0c0xpc3Q+XG4gICAgICAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgoZWxtKSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RDYXJkPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2VsbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cbiAgICAgICAgICAgICAgYWx0PXtlbG0ucGhvdG8uYWx0VGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBrZXk9e2VsbS5pZH0+e2VsbS50aXRsZX08L3A+XG4gICAgICAgICAgPC9Qcm9kdWN0Q2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2R1Y3RzTGlzdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ })

})