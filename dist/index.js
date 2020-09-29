/*!
 * vue-date-range-helper v0.0.3
 * (c) Julien Barach
 * Released under the MIT License.
 */
'use strict';

var moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

//
var script = {
  name: 'DateRangeHelper',
  props: {
    buttonsClasses: {
      type: String,
      required: false,
      "default": 'btn btn-sm btn-ghost-info'
    },
    endDate: {
      type: Date,
      required: false
    },
    fromLabel: {
      type: String,
      required: false,
      "default": 'From'
    },
    inputClasses: {
      type: String,
      required: false,
      "default": 'form-control'
    },
    startDate: {
      type: Date,
      required: false
    },
    toLabel: {
      type: String,
      required: false,
      "default": 'To'
    }
  },
  methods: {
    endChanged: function endChanged(ev) {
      this.$emit('end-date-changed', ev.target.value);
    },
    getCurrentMonth: function getCurrentMonth() {
      return moment__default['default']().locale(window.navigator.language).format('MMMM');
    },
    getCurrentYear: function getCurrentYear() {
      return moment__default['default']().year();
    },
    setCurrent: function setCurrent(type) {
      this.start = moment__default['default']().startOf(type).format(moment__default['default'].HTML5_FMT.DATE);
      this.$emit('start-date-changed', this.start);
      this.end = moment__default['default']().endOf(type).format(moment__default['default'].HTML5_FMT.DATE);
      this.$emit('end-date-changed', this.end);
    },
    setShift: function setShift(amount, type) {
      var referential = this.start ? moment__default['default'](this.start)[type]() : moment__default['default']()[type]();
      this.start = moment__default['default']()[type](referential + amount).startOf(type).format(moment__default['default'].HTML5_FMT.DATE);
      this.$emit('start-date-changed', this.start);
      this.end = moment__default['default'](this.start).endOf(type).format(moment__default['default'].HTML5_FMT.DATE);
      this.$emit('end-date-changed', this.end);
    },
    startChanged: function startChanged(ev) {
      this.$emit('start-date-changed', ev.target.value);
    }
  },
  mounted: function mounted() {
    this.end = this.endDate ? moment__default['default'](this.endDate).format(moment__default['default'].HTML5_FMT.DATE) : null;
    this.start = this.startDate ? moment__default['default'](this.startDate).format(moment__default['default'].HTML5_FMT.DATE) : null;
  },
  data: function data() {
    return {
      end: null,
      start: null
    };
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "startDate"
    }
  }, [_vm._v(_vm._s(_vm.fromLabel))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.start,
      expression: "start"
    }],
    "class": _vm.inputClasses,
    attrs: {
      "type": "date",
      "id": "startDate"
    },
    domProps: {
      "value": _vm.start
    },
    on: {
      "change": _vm.startChanged,
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.start = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "endDate"
    }
  }, [_vm._v(_vm._s(_vm.toLabel))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.end,
      expression: "end"
    }],
    "class": _vm.inputClasses,
    attrs: {
      "type": "date",
      "id": "endDate"
    },
    domProps: {
      "value": _vm.end
    },
    on: {
      "change": _vm.endChanged,
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.end = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setShift(-1, 'year');
      }
    }
  }, [_c('small', [_vm._v("-1")])]), _vm._v(" "), _c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setCurrent('year');
      }
    }
  }, [_c('small', [_vm._v("Année (" + _vm._s(_vm.getCurrentYear()) + ")")])]), _vm._v(" "), _c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setShift(1, 'year');
      }
    }
  }, [_c('small', [_vm._v("+1")])])]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setShift(-1, 'month');
      }
    }
  }, [_c('small', [_vm._v("-1")])]), _vm._v(" "), _c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setCurrent('month');
      }
    }
  }, [_c('small', [_vm._v("Mois (" + _vm._s(_vm.getCurrentMonth()) + ")")])]), _vm._v(" "), _c('button', {
    "class": _vm.buttonsClasses,
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setShift(1, 'month');
      }
    }
  }, [_c('small', [_vm._v("+1")])])])])])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = "data-v-d3358568";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component('v-date-range-helper', __vue_component__);
  }
};

module.exports = index;
