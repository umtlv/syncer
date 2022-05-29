"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_views_Admin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BFormGroup",
  props: {
    label: String,
    description: String,
    id: {
      type: String,
      "default": function _default() {
        return "id" + Math.random().toString();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BInput",
  props: {
    modelValue: {},
    id: String,
    type: {
      type: String,
      "default": function _default() {
        return "text";
      }
    },
    required: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    textareaRows: {
      type: Number,
      "default": function _default() {
        return 3;
      }
    },
    description: {
      type: String,
      "default": function _default() {
        return null;
      }
    },
    state: {
      type: Boolean,
      "default": function _default() {
        return null;
      }
    },
    placeholder: {
      type: String,
      "default": function _default() {
        return null;
      }
    },
    disabled: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  emits: ["update:modelValue", "focused"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var computedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
      get: function get() {
        return props.modelValue;
      },
      set: function set(v) {
        return emit("update:modelValue", v);
      }
    });

    function focused() {
      emit('focused');
    }

    return {
      computedValue: computedValue,
      focused: focused
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Bootstrap_BButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Bootstrap/BButton */ "./resources/js/vue/components/Bootstrap/BButton.vue");
/* harmony import */ var _components_Bootstrap_BModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Bootstrap/BModal */ "./resources/js/vue/components/Bootstrap/BModal.vue");
/* harmony import */ var _components_Bootstrap_BModalConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Bootstrap/BModalConfig */ "./resources/js/vue/components/Bootstrap/BModalConfig.js");
/* harmony import */ var _components_Bootstrap_BTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Bootstrap/BTable */ "./resources/js/vue/components/Bootstrap/BTable.vue");
/* harmony import */ var _components_Bootstrap_BFormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Bootstrap/BFormGroup */ "./resources/js/vue/components/Bootstrap/BFormGroup.vue");
/* harmony import */ var _components_Bootstrap_BInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Bootstrap/BInput */ "./resources/js/vue/components/Bootstrap/BInput.vue");
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Toast */ "./resources/js/vue/components/Toast.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Spinner */ "./resources/js/vue/components/Spinner.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Admin",
  components: {
    BInput: _components_Bootstrap_BInput__WEBPACK_IMPORTED_MODULE_7__["default"],
    BFormGroup: _components_Bootstrap_BFormGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
    BTable: _components_Bootstrap_BTable__WEBPACK_IMPORTED_MODULE_5__["default"],
    BModal: _components_Bootstrap_BModal__WEBPACK_IMPORTED_MODULE_3__["default"],
    BButton: _components_Bootstrap_BButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var data = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var path = '/api/data';
    var links = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);
    var totalDataCount = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(0);

    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var url,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = _args.length > 0 && _args[0] !== undefined ? _args[0] : path;
                _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].start();
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default().get(url).then(function (r) {
                  if (r.data.success) {
                    var _r$data$data$data, _r$data$data$links, _r$data$data$total;

                    data.value = (_r$data$data$data = r.data.data['data']) !== null && _r$data$data$data !== void 0 ? _r$data$data$data : [];
                    links.value = (_r$data$data$links = r.data.data['links']) !== null && _r$data$data$links !== void 0 ? _r$data$data$links : [];
                    totalDataCount.value = (_r$data$data$total = r.data.data['total']) !== null && _r$data$data$total !== void 0 ? _r$data$data$total : [];
                  }
                })["finally"](function () {
                  _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].finish();
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getData.apply(this, arguments);
    }

    var defaultItem = {
      id: null,
      title: null,
      file: null,
      text: null,
      sync: [],
      visible: false
    };
    var item = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)({});
    var file = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(getData);

    function setItem(id) {
      if (id) {
        var search = data.value.find(function (i) {
          return i['id'] === id;
        });
        item.value = _objectSpread({}, search);
      } else item.value = _objectSpread({}, defaultItem);
    }

    function openAddModal() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      setItem(id);
      (0,_components_Bootstrap_BModalConfig__WEBPACK_IMPORTED_MODULE_4__.open)('addModal');
    }

    var closeAddModal = function closeAddModal() {
      file.value = null;
      (0,_components_Bootstrap_BModalConfig__WEBPACK_IMPORTED_MODULE_4__.close)('addModal');
    };

    function deleteItem(_x) {
      return _deleteItem.apply(this, arguments);
    }

    function _deleteItem() {
      _deleteItem = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                confirm("Вы уверены, что хотите удалить эту запись?");
                _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].start();
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_9___default().post("".concat(path, "/delete"), {
                  id: id
                }).then(function (r) {
                  if (r.data.success) {
                    closeAddModal();
                    getData();
                  }
                })["catch"](function (e) {
                  return (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])(e.response.data.message);
                })["finally"](function () {
                  _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].start();
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _deleteItem.apply(this, arguments);
    }

    var fields = [{
      label: "ID",
      key: 'id'
    }, {
      label: "Название",
      key: 'title'
    }, {
      label: "Синхронизация",
      key: 'sync'
    }, {
      label: "Действия",
      key: 'actions'
    }];

    var createOrUpdate = function createOrUpdate() {
      if (item.value['id']) update();else create();
    };

    function update() {
      return _update.apply(this, arguments);
    }

    function _update() {
      _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!item.value['text'] || !item.value['title'])) {
                  _context3.next = 3;
                  break;
                }

                (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])('Заполните текст и название');
                return _context3.abrupt("return");

              case 3:
                _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].start();
                _context3.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_9___default().post("".concat(path, "/update"), {
                  'id': item.value['id'],
                  'text': item.value['text']
                }).then(function (r) {
                  if (r.data.success) {
                    closeAddModal();
                    getData();
                  }
                })["catch"](function (e) {
                  return (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])(e.response.data.message);
                })["finally"](function () {
                  _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].finish();
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
      return _update.apply(this, arguments);
    }

    function create() {
      return _create.apply(this, arguments);
    }

    function _create() {
      _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var form;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!item.value['text'] || !item.value['title'])) {
                  _context4.next = 3;
                  break;
                }

                (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])('Заполните текст и название');
                return _context4.abrupt("return");

              case 3:
                if (file.value) {
                  _context4.next = 6;
                  break;
                }

                (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])('Выберите файл');
                return _context4.abrupt("return");

              case 6:
                form = new FormData();
                form.append('text', item.value['text']);
                form.append('title', item.value['title']);
                form.append('audio', file.value, 'audio');
                _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].start();
                _context4.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_9___default().post("".concat(path, "/create"), form, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }).then(function (r) {
                  if (r.data.success) {
                    closeAddModal();
                    getData();
                  }
                })["catch"](function (e) {
                  return (0,_components_Toast__WEBPACK_IMPORTED_MODULE_8__["default"])(e.response.data.message);
                })["finally"](function () {
                  _components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"].finish();
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
      return _create.apply(this, arguments);
    }

    function change(_ref) {
      var target = _ref.target,
          dataTransfer = _ref.dataTransfer;
      var files = target.files || dataTransfer.files;
      if (!files.length) return false;
      file.value = files[0];
    }

    var openListenModal = function openListenModal(id) {
      setItem(id);
      (0,_components_Bootstrap_BModalConfig__WEBPACK_IMPORTED_MODULE_4__.open)('listenModal');
    };

    function getLabel(label) {
      if (label === 'pagination.previous') return '«';
      if (label === 'pagination.next') return '»';
      return label;
    }

    return {
      data: data,
      fields: fields,
      item: item,
      file: file,
      openAddModal: openAddModal,
      closeAddModal: closeAddModal,
      deleteItem: deleteItem,
      createOrUpdate: createOrUpdate,
      change: change,
      openListenModal: openListenModal,
      links: links,
      totalDataCount: totalDataCount,
      getLabel: getLabel,
      getData: getData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row mb-2"
};
var _hoisted_2 = ["for", "textContent"];
var _hoisted_3 = {
  "class": "col-sm-12 col-md-8 col-lg-8 col-xl-8"
};
var _hoisted_4 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": $props.id,
    "class": "form-label label-class col-sm-12 col-md-4 col-lg-4 col-xl-4",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label)
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {
    id: $props.id
  }), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "small text-muted",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.description)
  }, null, 8
  /* PROPS */
  , _hoisted_4)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["id", "rows", "required", "placeholder", "disabled"];
var _hoisted_2 = ["id", "type", "autocomplete", "inputmode", "required", "placeholder", "disabled"];
var _hoisted_3 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.type === 'textarea' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea", {
    key: 0,
    id: $props.id,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-valid': $props.state === true,
      'is-invalid': $props.state === false
    }]),
    rows: $props.textareaRows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.computedValue = $event;
    }),
    required: $props.required,
    onFocusout: _cache[1] || (_cache[1] = function () {
      return $setup.focused && $setup.focused.apply($setup, arguments);
    }),
    placeholder: $props.placeholder,
    disabled: $props.disabled
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_1)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.computedValue]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
    key: 1,
    id: $props.id,
    type: $props.type,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-valid': $props.state === true,
      'is-invalid': $props.state === false
    }]),
    autocomplete: $props.type === 'password' ? 'current-password' : 'off',
    inputmode: $props.type === 'number' ? 'numeric' : '',
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.computedValue = $event;
    }),
    required: $props.required,
    onFocusout: _cache[3] || (_cache[3] = function () {
      return $setup.focused && $setup.focused.apply($setup, arguments);
    }),
    placeholder: $props.placeholder,
    disabled: $props.disabled
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , _hoisted_2)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.computedValue]]), $props.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", {
    key: 2,
    "class": "text-muted",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.description)
  }, null, 8
  /* PROPS */
  , _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить");

var _hoisted_2 = {
  "class": "pagination"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  "class": "page-item disabled"
};
var _hoisted_5 = {
  href: "#",
  "class": "page-link"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Добавить");

var _hoisted_7 = ["id"];

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Закрыть ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Прослушать");

var _hoisted_10 = ["src"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");

  var _component_font_awesome_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("font-awesome-icon");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_b_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-table");

  var _component_b_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-input");

  var _component_b_form_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-form-group");

  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.openAddModal();
    }),
    "class": "mb-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        'disabled': link['url'] === null,
        'active': link['active']
      }]),
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page-link",
      href: "#",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.getData(link['url']);
      }, ["prevent"])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getLabel(link['label'])), 9
    /* TEXT, PROPS */
    , _hoisted_3)], 2
    /* CLASS */
    );
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_5, " Всего записей: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.totalDataCount), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_table, {
    options: $setup.data,
    fields: $setup.fields
  }, {
    sync: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var value = _ref.value;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value ? 'Да' : 'Нет'), 1
      /* TEXT */
      )];
    }),
    actions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
      var item = _ref2.item;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "/admin/sync/".concat(item.id),
        "class": "btn btn-info btn-sm m-1"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
            icon: ['fas', 'arrows-rotate']
          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        size: "sm",
        variant: "info",
        "class": "m-1",
        onClick: function onClick($event) {
          return $setup.openListenModal(item.id);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
            icon: ['fas', 'play']
          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        size: "sm",
        variant: "secondary",
        "class": "m-1",
        onClick: function onClick($event) {
          return $setup.openAddModal(item.id);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
            icon: ['fas', 'edit']
          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        size: "sm",
        variant: "danger",
        "class": "m-1",
        onClick: function onClick($event) {
          return $setup.deleteItem(item.id);
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_font_awesome_icon, {
            icon: ['fas', 'trash']
          })];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["options", "fields"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    id: "addModal",
    size: "xl"
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
        label: "Название"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
          var id = _ref3.id;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input, {
            modelValue: $setup.item.title,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.item.title = $event;
            }),
            id: id
          }, null, 8
          /* PROPS */
          , ["modelValue", "id"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_form_group, {
        label: "Текст"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref4) {
          var id = _ref4.id;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_input, {
            description: $setup.item.id ? 'При изменении текста, необходимо заново сделать синхронизацию' : '',
            modelValue: $setup.item.text,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $setup.item.text = $event;
            }),
            id: id,
            type: "textarea",
            "textarea-rows": 5
          }, null, 8
          /* PROPS */
          , ["description", "modelValue", "id"])];
        }),
        _: 1
        /* STABLE */

      }), !$setup.item.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_form_group, {
        key: 0,
        label: "Файл",
        id: "audioFile"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref5) {
          var id = _ref5.id;
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "file",
            id: id,
            "class": "form-control",
            onChange: _cache[3] || (_cache[3] = function () {
              return $setup.change && $setup.change.apply($setup, arguments);
            }),
            accept: "audio/mp3"
          }, null, 40
          /* PROPS, HYDRATE_EVENTS */
          , _hoisted_7)];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        variant: "secondary",
        onClick: $setup.closeAddModal
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_8];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.createOrUpdate, ["prevent"])
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.item.id ? 'Изменить' : 'Добавить'), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    id: "listenModal",
    size: "xl",
    closeable: "",
    "hide-footer": ""
  }, {
    header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$setup.item ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("audio", {
        src: "/api/data/audio/".concat($setup.item.file),
        controls: ""
      }, null, 8
      /* PROPS */
      , _hoisted_10), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.item.text), 1
      /* TEXT */
      )], 64
      /* STABLE_FRAGMENT */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./resources/js/vue/components/Toast.js":
/*!**********************************************!*\
  !*** ./resources/js/vue/components/Toast.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var toast = document.getElementById("toast");
var toastContainer = document.getElementById("toast-container");
var toastText = document.getElementById("toast-text");
var toastHeader = document.getElementById("toast-header");
var toastTitle = document.getElementById("toast-title");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(text) {
  var success = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (success) toastHeader.classList.add("bg-success", "text-white");else toastHeader.classList.add("bg-danger", "text-white");
  toastText.innerText = text;
  toastTitle.innerText = 'Уведомление';
  toast.classList.add("show");
  toastContainer.style.display = "block";
  setTimeout(function () {
    toast.classList.remove("show");
    if (success) toastHeader.classList.remove("bg-success", "text-white");else toastHeader.classList.remove("bg-warning", "text-white");
    toastContainer.style.display = "none";
  }, 2000);
}

/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BFormGroup.vue":
/*!**************************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BFormGroup.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BFormGroup_vue_vue_type_template_id_77cecf1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BFormGroup.vue?vue&type=template&id=77cecf1c */ "./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c");
/* harmony import */ var _BFormGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BFormGroup.vue?vue&type=script&lang=js */ "./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BFormGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BFormGroup_vue_vue_type_template_id_77cecf1c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/vue/components/Bootstrap/BFormGroup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BInput.vue":
/*!**********************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BInput.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BInput_vue_vue_type_template_id_5144bfcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BInput.vue?vue&type=template&id=5144bfcb */ "./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb");
/* harmony import */ var _BInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BInput.vue?vue&type=script&lang=js */ "./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BInput_vue_vue_type_template_id_5144bfcb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/vue/components/Bootstrap/BInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/vue/views/Admin.vue":
/*!******************************************!*\
  !*** ./resources/js/vue/views/Admin.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_67a03292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=67a03292 */ "./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js */ "./resources/js/vue/views/Admin.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Admin_vue_vue_type_template_id_67a03292__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/vue/views/Admin.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BFormGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BFormGroup_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BFormGroup.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/views/Admin.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/vue/views/Admin.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Admin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Admin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c":
/*!********************************************************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BFormGroup_vue_vue_type_template_id_77cecf1c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BFormGroup_vue_vue_type_template_id_77cecf1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BFormGroup.vue?vue&type=template&id=77cecf1c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BFormGroup.vue?vue&type=template&id=77cecf1c");


/***/ }),

/***/ "./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb":
/*!****************************************************************************************!*\
  !*** ./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BInput_vue_vue_type_template_id_5144bfcb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BInput_vue_vue_type_template_id_5144bfcb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BInput.vue?vue&type=template&id=5144bfcb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/components/Bootstrap/BInput.vue?vue&type=template&id=5144bfcb");


/***/ }),

/***/ "./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292":
/*!************************************************************************!*\
  !*** ./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Admin_vue_vue_type_template_id_67a03292__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Admin_vue_vue_type_template_id_67a03292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Admin.vue?vue&type=template&id=67a03292 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Admin.vue?vue&type=template&id=67a03292");


/***/ })

}]);