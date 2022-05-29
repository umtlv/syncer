"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_views_Sync_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./resources/js/vue/router/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Bootstrap_BButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Bootstrap/BButton */ "./resources/js/vue/components/Bootstrap/BButton.vue");
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Toast */ "./resources/js/vue/components/Toast.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Spinner */ "./resources/js/vue/components/Spinner.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Sync",
  components: {
    BButton: _components_Bootstrap_BButton__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  setup: function setup() {
    var id = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return _router__WEBPACK_IMPORTED_MODULE_1__["default"].currentRoute.value.params.id;
    });
    var path = '/api/data';
    var item = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    var success = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    var words = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)([]);
    var audio = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)();
    var audioDuration = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(0);

    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"].start();
                _context.next = 3;
                return axios.get("".concat(path, "/").concat(id.value)).then(function (r) {
                  if (r.data.success) {
                    item.value = r.data.data;
                    if (!Array.isArray(item.value.sync)) item.value.sync = [];
                    words.value = item.value.text.split(' ');
                    success.value = true;
                    audio.value = new Audio("/api/data/audio/".concat(item.value.file));

                    audio.value.onloadedmetadata = function () {
                      audioDuration.value = audio.value.duration;
                      audio.value.addEventListener("pause", onPause);
                    };
                  } else success.value = false;
                })["catch"](function () {
                  success.value = false;
                })["finally"](function () {
                  _components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"].finish();
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getData.apply(this, arguments);
    }

    function onPause() {
      item.value.sync.push(this.currentTime);
    }

    var paused = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(true);

    var play = function play() {
      if (words.value.length === item.value.sync.length) return;

      if (audio.value.paused) {
        audio.value.play();
        paused.value = false;
      } else {
        audio.value.pause();
        paused.value = true;
      }
    };

    var clear = function clear() {
      audio.value.pause();
      audio.value.currentTime = 0;
      item.value.sync = [];
    };

    var slower = function slower() {
      return audio.value.playbackRate = 0.5;
    };

    var normal = function normal() {
      return audio.value.playbackRate = 1;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      getData();
    });
    var computedWords = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(function () {
      return words.value.map(function (i, index) {
        return {
          word: i,
          color: index < item.value.sync.length
        };
      });
    });

    function save() {
      if (words.value.length !== item.value.sync.length) return;
      _components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"].start();
      axios.post("".concat(path, "/sync"), {
        id: item.value.id,
        sync: item.value.sync
      }).then(function (r) {
        if (r.data.success) {
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/admin');
        }
      })["catch"](function (e) {
        (0,_components_Toast__WEBPACK_IMPORTED_MODULE_4__["default"])(e.response.data.message);
      })["finally"](function () {
        _components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"].finish();
      });
    }

    return {
      id: id,
      success: success,
      item: item,
      computedWords: computedWords,
      play: play,
      clear: clear,
      slower: slower,
      normal: normal,
      save: save,
      paused: paused
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Поиск... ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Запись не найдена ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "alert alert-info"
}, " Необходимо нажать на кнопку Начать для того, чтобы начать запись и нажать на Остановить, чтобы зафиксировать время. По мере фиксирования, текст будет закрашиваться желтым цветом. ", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "mb-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "m-1 fw-bolder"
}, "Выберите скорость:", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Медленная");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Нормальная");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "m-1 fw-bolder"
}, "Выберите действие:", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Очистить и начать сначала");

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Сохранить");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
/* HOISTED */
);

var _hoisted_13 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");

  return $setup.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$setup.success === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [_hoisted_2], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : $setup.success === false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_3], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 2
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "info",
    onClick: $setup.slower,
    "class": "m-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "info",
    onClick: $setup.normal,
    "class": "m-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"])]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    onClick: $setup.play,
    "class": "m-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.paused ? 'Начать' : 'Остановить'), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "danger",
    onClick: $setup.clear,
    "class": "m-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    variant: "success",
    onClick: $setup.save,
    "class": "m-1"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]), _hoisted_12, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.computedWords, function (word, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: index,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(' ' + word.word),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'bg-warning': word.color
      })
    }, null, 10
    /* CLASS, PROPS */
    , _hoisted_13);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 64
  /* STABLE_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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

/***/ "./resources/js/vue/views/Sync.vue":
/*!*****************************************!*\
  !*** ./resources/js/vue/views/Sync.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sync_vue_vue_type_template_id_17ed4d63__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sync.vue?vue&type=template&id=17ed4d63 */ "./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63");
/* harmony import */ var _Sync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sync.vue?vue&type=script&lang=js */ "./resources/js/vue/views/Sync.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_numetaliev_PhpstormProjects_syncer_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Sync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Sync_vue_vue_type_template_id_17ed4d63__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/vue/views/Sync.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/vue/views/Sync.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/vue/views/Sync.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sync_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sync.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63":
/*!***********************************************************************!*\
  !*** ./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sync_vue_vue_type_template_id_17ed4d63__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Sync_vue_vue_type_template_id_17ed4d63__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Sync.vue?vue&type=template&id=17ed4d63 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/vue/views/Sync.vue?vue&type=template&id=17ed4d63");


/***/ })

}]);