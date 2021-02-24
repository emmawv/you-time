webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/nprogress.css */ \"./components/styles/nprogress.css\");\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ \"./lib/withData.js\");\n\n\n\nvar _jsxFileName = \"/Users/emmawv/practice/you-time/client/pages/_app.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_emmawv_practice_you_time_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/prop-types */\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\n // import 'nprogress/nprogress.css'; Gives me automatic settings\n\n // My own settings as a CSS file.\n// eslint-disable-next-line import/order\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeStart', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start();\n}); // When the routing starts the loader bar at top of page starts.\n\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeComplete', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on('routeChangeError', function () {\n  return nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done();\n}); // If routing ends or there is an error it finishes.\n\nvar MyApp = function MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps,\n      apollo = _ref.apollo;\n  console.log(apollo);\n  return (\n    /*#__PURE__*/\n    // To take the withData function and create an instance of Apollo to inject into our application we wrap the app in a provider (a component in React that usually lives very high in your application and allows components that are several levels deep to access the data). Anywhere in my app I can access the data from apollo client.\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"ApolloProvider\"], {\n      client: apollo,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, _this)\n  );\n};\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_lib_withData__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(MyApp)); // withData function will send apollo props to MyApp.\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJjb25zb2xlIiwibG9nIiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBQzZDO0FBQzdDOztBQUNBO0FBQ0E7QUFFQUEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNDLEtBQVYsRUFBTjtBQUFBLENBQXJDLEUsQ0FBK0Q7O0FBQy9ESixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDLEUsQ0FBOEQ7O0FBRTlELElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNDO0FBQUEsTUFBbkNDLFNBQW1DLFFBQW5DQSxTQUFtQztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0E7QUFBQTtBQUNFO0FBQ0EseUVBQUMsNkRBQUQ7QUFBZ0IsWUFBTSxFQUFFQSxNQUF4QjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQUEsK0JBQ0UscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQVFELENBVkQ7O0tBQU1GLEs7QUFZUyxxRUFBQU0sNkRBQVEsQ0FBQ04sS0FBRCxDQUF2QixFLENBQWdDIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcblxuLy8gaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7IEdpdmVzIG1lIGF1dG9tYXRpYyBzZXR0aW5nc1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJzsgLy8gTXkgb3duIHNldHRpbmdzIGFzIGEgQ1NTIGZpbGUuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L29yZGVyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpOyAvLyBXaGVuIHRoZSByb3V0aW5nIHN0YXJ0cyB0aGUgbG9hZGVyIGJhciBhdCB0b3Agb2YgcGFnZSBzdGFydHMuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IC8vIElmIHJvdXRpbmcgZW5kcyBvciB0aGVyZSBpcyBhbiBlcnJvciBpdCBmaW5pc2hlcy5cblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pID0+IHtcbiAgY29uc29sZS5sb2coYXBvbGxvKTtcbiAgcmV0dXJuKFxuICAgIC8vIFRvIHRha2UgdGhlIHdpdGhEYXRhIGZ1bmN0aW9uIGFuZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXBvbGxvIHRvIGluamVjdCBpbnRvIG91ciBhcHBsaWNhdGlvbiB3ZSB3cmFwIHRoZSBhcHAgaW4gYSBwcm92aWRlciAoYSBjb21wb25lbnQgaW4gUmVhY3QgdGhhdCB1c3VhbGx5IGxpdmVzIHZlcnkgaGlnaCBpbiB5b3VyIGFwcGxpY2F0aW9uIGFuZCBhbGxvd3MgY29tcG9uZW50cyB0aGF0IGFyZSBzZXZlcmFsIGxldmVscyBkZWVwIHRvIGFjY2VzcyB0aGUgZGF0YSkuIEFueXdoZXJlIGluIG15IGFwcCBJIGNhbiBhY2Nlc3MgdGhlIGRhdGEgZnJvbSBhcG9sbG8gY2xpZW50LlxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XG4gICAgICA8UGFnZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QYWdlPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTsgLy8gd2l0aERhdGEgZnVuY3Rpb24gd2lsbCBzZW5kIGFwb2xsbyBwcm9wcyB0byBNeUFwcC5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})