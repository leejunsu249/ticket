"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/users/signup', {\n                email,\n                password\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n        } catch (err) {\n            setErrors(err.response.data.errors);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n        onSubmit: onSubmit,\n        __source: {\n            fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: \"회원가입\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"form-group\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: \"E-mail\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                        ,\n                        className: \"form-control\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        },\n                        __self: undefined\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"form-group\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        },\n                        __self: undefined,\n                        children: \"비밀번호\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                        ,\n                        className: \"form-control\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        },\n                        __self: undefined\n                    })\n                ]\n            }),\n            errors.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"aler alert-danger\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 35,\n                    columnNumber: 32\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                    className: \"my-0\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: errors.map((err)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                                lineNumber: 37,\n                                columnNumber: 32\n                            },\n                            __self: undefined,\n                            children: \"err.message\"\n                        })\n                    )\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                className: \"btn btn-primary\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\75758\\\\OneDrive\\\\바탕 화면\\\\ticket\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: \"회원가입\"\n            })\n        ]\n    }));\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1A7QUFDTztBQUVoQyxpRUFBTSxJQUFnQixDQUFDO0lBQ25CLEtBQUssTUFBRUcsS0FBSyxNQUFFQyxRQUFRLE1BQUlKLCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLE1BQUVLLFFBQVEsTUFBRUMsV0FBVyxNQUFJTiwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFTyxNQUFNLE1BQUVDLFNBQVMsTUFBSVIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFHdkMsS0FBSyxDQUFDUyxRQUFRLFVBQVVDLENBQUMsR0FBSyxDQUFDO1FBQzNCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEIsR0FBRyxFQUFDO1lBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDWCxpREFBVSxDQUFDLENBQW1CLG9CQUFFLENBQUM7Z0JBQ3JERSxLQUFLO2dCQUFFRSxRQUFRO1lBQ25CLENBQUM7WUFDR0gsdURBQVcsQ0FBQyxDQUFHO1FBQ25CLENBQUMsQ0FBQyxLQUFLLEVBQUVhLEdBQUcsRUFBQyxDQUFDO1lBQ1ZQLFNBQVMsQ0FBQ08sR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUksQ0FBQ1QsTUFBTTtRQUN0QyxDQUFDO0lBRUwsQ0FBQztJQUVELE1BQU0sdUVBQ0xVLENBQUk7UUFBQ1IsUUFBUSxFQUFFQSxRQUFROzs7Ozs7OztpRkFDbkJTLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBSTs7a0ZBQ0NDLENBQUw7Z0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7Ozt5RkFDdEJDLENBQUs7Ozs7Ozs7a0NBQUMsQ0FBTTs7eUZBQ1pDLENBQUs7d0JBQUNDLEtBQUssRUFBRXBCLEtBQUs7d0JBQUVxQixRQUFRLEdBQUVkLENBQUMsR0FBSU4sUUFBUSxDQUFDTSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7d0JBQUdILFNBQVMsRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUV6RkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O3lGQUN0QkMsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFJOzt5RkFDRkMsQ0FBSDt3QkFBQ0ksSUFBSSxFQUFDLENBQVU7d0JBQUNILEtBQUssRUFBRWxCLFFBQVE7d0JBQUVtQixRQUFRLEdBQUVkLENBQUMsR0FBSUosV0FBVyxDQUFDSSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSzs7d0JBQUdILFNBQVMsRUFBQyxDQUFjOzs7Ozs7Ozs7O1lBRS9HYixNQUFNLENBQUNvQixNQUFNLEdBQUcsQ0FBQyx5RUFBTVIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW1COzs7Ozs7OytGQUN4RFEsQ0FBRTtvQkFBQ1IsU0FBUyxFQUFDLENBQU07Ozs7Ozs7OEJBQ2ZiLE1BQU0sQ0FBQ3NCLEdBQUcsRUFBQ2QsR0FBRyx3RUFBS2UsQ0FBRTs7Ozs7OztzQ0FBQyxDQUFXOzs7OztpRkFHckNDLENBQU07Z0JBQUNYLFNBQVMsRUFBQyxDQUFpQjs7Ozs7OzswQkFBQyxDQUFJOzs7O0FBR2hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ251cC5qcz81NmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICAoKSA9PiB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiBcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvc2lnbnVwJywge1xyXG4gICAgICAgICAgICBlbWFpbCwgcGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGgxPu2ajOybkOqwgOyehTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtlcnJvcnMubGVuZ3RoID4gMCAgJiYgPGRpdiBjbGFzc05hbWU9XCJhbGVyIGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJteS0wXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubWFwKGVyciA9PiA8bGk+ZXJyLm1lc3NhZ2U8L2xpPil9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJwdXNoIiwiZXJyIiwiZGF0YSIsImZvcm0iLCJoMSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsImxlbmd0aCIsInVsIiwibWFwIiwibGkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();