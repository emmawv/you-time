webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_ProductStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ProductStyles */ \"./components/styles/ProductStyles.js\");\n/* harmony import */ var _styles_DarkButtonStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/DarkButtonStyles */ \"./components/styles/DarkButtonStyles.js\");\n/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ \"./components/styles/PriceTag.js\");\n\n\nvar _jsxFileName = \"/Users/emmawv/practice/you-time/client/components/Product.js\",\n    _this = undefined;\n\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\n/* eslint-disable react/prop-types */\n\n\n\n\n\nvar Product = function Product(_ref) {\n  var _photo$image;\n\n  var product = _ref.product;\n  var photo = product.photo,\n      author = product.author,\n      title = product.title,\n      id = product.id,\n      price = product.price;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_ProductStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageStyle, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: photo === null || photo === void 0 ? void 0 : (_photo$image = photo.image) === null || _photo$image === void 0 ? void 0 : _photo$image.publicUrlTransformed,\n        alt: photo.altText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        color: 'grey',\n        margin: '7px'\n      },\n      children: author\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"buttonList\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_DarkButtonStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          href: \"/products/{id}\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"#\",\n            children: \"More info\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzPzlkMDYiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImF1dGhvciIsInRpdGxlIiwiaWQiLCJwcmljZSIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJhbHRUZXh0IiwiY29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsTUFDdkJDLEtBRHVCLEdBQ2FELE9BRGIsQ0FDdkJDLEtBRHVCO0FBQUEsTUFDaEJDLE1BRGdCLEdBQ2FGLE9BRGIsQ0FDaEJFLE1BRGdCO0FBQUEsTUFDUkMsS0FEUSxHQUNhSCxPQURiLENBQ1JHLEtBRFE7QUFBQSxNQUNEQyxFQURDLEdBQ2FKLE9BRGIsQ0FDREksRUFEQztBQUFBLE1BQ0dDLEtBREgsR0FDYUwsT0FEYixDQUNHSyxLQURIO0FBRS9CLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0UscUVBQUMsVUFBRDtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFSixLQUFGLGFBQUVBLEtBQUYsdUNBQUVBLEtBQUssQ0FBRUssS0FBVCxpREFBRSxhQUFjQyxvQkFBeEI7QUFBOEMsV0FBRyxFQUFFTixLQUFLLENBQUNPO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHdEQUFEO0FBQUEsa0JBQVdIO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBQSxnQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUFNRTtBQUNFLFdBQUssRUFBRTtBQUNMTSxhQUFLLEVBQUUsTUFERjtBQUVMQyxjQUFNLEVBQUU7QUFGSCxPQURUO0FBQUEsZ0JBTUdSO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBY0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFLHFFQUFDLGdFQUFEO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQSxpQ0FDRTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBMUJEOztLQUFNSCxPO0FBNEJTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb2R1Y3RTdHlsZXMgZnJvbSAnLi9zdHlsZXMvUHJvZHVjdFN0eWxlcyc7XG5pbXBvcnQgQnV0dG9uU3R5bGVzIGZyb20gJy4vc3R5bGVzL0RhcmtCdXR0b25TdHlsZXMnO1xuaW1wb3J0IFByaWNlVGFnIGZyb20gJy4vc3R5bGVzL1ByaWNlVGFnJztcblxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICBjb25zdCB7IHBob3RvLCBhdXRob3IsIHRpdGxlLCBpZCwgcHJpY2UgfSA9IHByb2R1Y3Q7XG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RTdHlsZXM+XG4gICAgICA8SW1hZ2VTdHlsZT5cbiAgICAgICAgPGltZyBzcmM9e3Bob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9IGFsdD17cGhvdG8uYWx0VGV4dH0gLz5cbiAgICAgICAgPFByaWNlVGFnPntwcmljZX08L1ByaWNlVGFnPlxuICAgICAgPC9JbWFnZVN0eWxlPlxuICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogJ2dyZXknLFxuICAgICAgICAgIG1hcmdpbjogJzdweCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHthdXRob3J9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkxpc3RcIj5cbiAgICAgICAgPEJ1dHRvblN0eWxlcz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzL3tpZH1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TW9yZSBpbmZvPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b25TdHlsZXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb2R1Y3RTdHlsZXM+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

})