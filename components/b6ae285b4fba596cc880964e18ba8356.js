! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4da7d12a-c0eb-4a04-abf8-23f656ab2fec", e._sentryDebugIdIdentifier = "sentry-dbid-4da7d12a-c0eb-4a04-abf8-23f656ab2fec")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "e8d5757fcf21c8613f3e751c4f0ebef98e69c465",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "e8d5757fcf21c8613f3e751c4f0ebef98e69c465"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [324], {
    6116: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, n) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var o = r.y0,
          i = r.y1,
          a = r.x1,
          l = r.x0,
          u = "%" === i.unit && "%" === o.unit,
          s = o.value,
          c = i.value;
        if (u) {
          var f = t.height / 100;
          s = o.value * f, c = i.value * f
        }
        var p = "%" === a.unit && "%" === l.unit,
          d = l.value,
          y = a.value;
        if (p) {
          var h = t.width / 100;
          d = l.value * h, y = a.value * h
        }
        var b = Math.abs(s) + Math.abs(c);
        this.totalDistY = n.height + t.height + b;
        var v = n.height + t.height + (c > s ? -1 * b : b),
          O = Math.abs(d) + Math.abs(y);
        this.totalDistX = n.width + t.width + O;
        var m = n.width + t.width + (y > d ? -1 * O : O),
          g = t.originTotalDistY / v,
          w = t.originTotalDistX / m;
        this.top = t.top, this.bottom = t.bottom, s < 0 && (this.top = this.top + s * g), c > 0 && (this.bottom = this.bottom + c * g), this.left = t.left, this.right = t.right, d < 0 && (this.left = this.left + d * w), y > 0 && (this.right = this.right + y * w)
      }
    },
    3840: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Element = void 0;
      var n = r(7268),
        o = r(2996),
        i = r(7360),
        a = u(r(6116)),
        l = u(r(9919));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(r), !0).forEach((function(t) {
            f(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function f(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      var d = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.elInner = t.elInner, this.elOuter = t.elOuter, this.props = t.props, this.scrollAxis = t.scrollAxis, this.id = (0, n.createId)(), this.offsets = (0, o.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = t.scrollAxis === i.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var t, r;
        return t = e, (r = [{
          key: "updateProps",
          value: function(e) {
            return this.props = c(c({}, this.props), e), this.offsets = (0, o.getOffsets)(e), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(e, t) {
            return this.rect = new l.default(this.elOuter, e, t), this.bounds = new a.default(this.rect, this.offsets, e), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(e, t) {
            return this.isInView = (0, o.isElementInView)(this.bounds.left, this.bounds.right, e.width, t.x), this.isInView ? (this.percent = (0, o.percentMoved)(this.rect.left, this.rect.originTotalDistX, e.width, t.x), (0, o.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(e, t) {
            return this.isInView = (0, o.isElementInView)(this.bounds.top, this.bounds.bottom, e.height, t.y), this.isInView ? (this.percent = (0, o.percentMoved)(this.rect.top, this.rect.originTotalDistY, e.height, t.y), (0, o.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(t.prototype, r), e
      }();
      t.Element = d
    },
    9808: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = r(7268),
        o = r(2996),
        i = r(1160),
        a = r(896),
        l = r(3840),
        u = r(7360);

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach((function(t) {
            p(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function p(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function d(e) {
        var t = e.scrollAxis,
          r = void 0 === t ? u.VERTICAL : t,
          c = e.scrollContainer,
          p = [],
          d = !!c,
          y = c || window,
          h = d ? y.scrollLeft : window.pageXOffset,
          b = d ? y.scrollTop : window.pageYOffset,
          v = new a.Scroll(h, b),
          O = new i.View({
            width: 0,
            height: 0,
            scrollContainer: c
          }),
          m = !1,
          g = (0, n.testForPassiveScroll)();

        function w(e) {
          e.addEventListener("scroll", j, !!g && {
            passive: !0
          }), window.addEventListener("resize", _, !1)
        }

        function P(e) {
          e.removeEventListener("scroll", j, !!g && {
            passive: !0
          }), window.removeEventListener("resize", _, !1)
        }

        function j() {
          var e = d ? y.scrollLeft : window.pageXOffset,
            t = d ? y.scrollTop : window.pageYOffset;
          v.setScroll(e, t), !m && p.length > 0 && (m = !0, window.requestAnimationFrame(x))
        }

        function _() {
          M(), x({
            updateCache: !0
          })
        }

        function x() {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(t) {
            E(t), e && t.setCachedAttributes(O, v)
          })), m = !1
        }

        function E(e) {
          e.props.disabled || e.updatePosition(O, v)
        }

        function M() {
          if (d) {
            var e = y.offsetWidth,
              t = y.offsetHeight;
            return O.setSize(e, t)
          }
          var r = document.documentElement,
            n = window.innerWidth || r.clientWidth,
            o = window.innerHeight || r.clientHeight;
          return O.setSize(n, o)
        }
        w(y), M(), this.getElements = function() {
          return p
        }, this.createElement = function(e) {
          var t, n = new l.Element(f(f({}, e), {}, {
            scrollAxis: r
          }));
          return n.setCachedAttributes(O, v), p = p ? [].concat(function(e) {
            if (Array.isArray(e)) return s(e)
          }(t = p) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return s(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [n]) : [n], E(n), n
        }, this.removeElementById = function(e) {
          p && (p = p.filter((function(t) {
            return t.id !== e
          })))
        }, this.updateElementPropsById = function(e, t) {
          p && (p = p.map((function(r) {
            return r.id === e ? r.updateProps(t) : r
          }))), this.update()
        }, this.resetElementStyles = function(e) {
          (0, o.resetStyles)(e)
        }, this.update = function() {
          var e = d ? y.scrollLeft : window.pageXOffset,
            t = d ? y.scrollTop : window.pageYOffset;
          v.setScroll(e, t), M(), x({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(e) {
          P(y), y = e, d = !!e, O = new i.View({
            width: 0,
            height: 0,
            scrollContainer: e
          }), M(), w(y), x({
            updateCache: !0
          })
        }, this.destroy = function() {
          P(y), p && p.forEach((function(e) {
            return (0, o.resetStyles)(e)
          })), p = void 0
        }
      }
      d.init = function(e) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new d(e)
      };
      var y = d;
      t.default = y
    },
    9919: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, n) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var o = t.getBoundingClientRect();
        if (r.scrollContainer) {
          var i = r.scrollContainer.getBoundingClientRect();
          o = {
            top: o.top - i.top,
            right: o.right - i.left,
            bottom: o.bottom - i.top,
            left: o.left - i.left
          }
        }
        this.height = t.offsetHeight, this.width = t.offsetWidth, this.left = o.left + n.x, this.right = o.right + n.x, this.top = o.top + n.y, this.bottom = o.bottom + n.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    896: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Scroll = void 0;
      var n = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.setScroll.apply(this, arguments)
        }
        var t, n;
        return t = e, (n = [{
          key: "setScroll",
          value: function(e, t) {
            return this.x = e, this.y = t, this
          }
        }]) && r(t.prototype, n), e
      }();
      t.Scroll = n
    },
    1160: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.View = void 0;
      var n = function() {
        function e(t) {
          var r = t.width,
            n = t.height,
            o = t.scrollContainer;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.scrollContainer = o, this.setSize(r, n)
        }
        var t, n;
        return t = e, (n = [{
          key: "setSize",
          value: function(e, t) {
            return this.width = e, this.height = t, this
          }
        }]) && r(t.prototype, n), e
      }();
      t.View = n
    },
    2660: (e, t, r) => {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        i = u(r(6048)),
        a = u(r(9808)),
        l = u(r(1432));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return s = function() {
          return e
        }, e
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function f(e, t) {
        return f = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, f(e, t)
      }

      function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, d(e)
      }

      function y(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var h = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && f(e, t)
        }(s, e);
        var t, r, i, l, u = (i = s, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = d(i);
          if (l) {
            var r = d(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? p(e) : t
          }(this, e)
        });

        function s() {
          var e;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, s);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
          return y(p(e = u.call.apply(u, [this].concat(r))), "mapRefOuter", (function(t) {
            e._outer = t
          })), y(p(e), "mapRefInner", (function(t) {
            e._inner = t
          })), e
        }
        return t = s, (r = [{
          key: "componentDidMount",
          value: function() {
            var e = this.controller instanceof a.default;
            if (!this.controller && !e) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.disabled === e.disabled && this.props.x[0] === e.x[0] && this.props.x[1] === e.x[1] && this.props.y[0] === e.y[0] && this.props.y[1] === e.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== e.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller.removeElementById(this.element.id)
          }
        }, {
          key: "_getElementOptions",
          value: function() {
            return {
              elInner: this._inner,
              elOuter: this._outer,
              props: {
                disabled: this.props.disabled,
                x0: this.props.x[0],
                x1: this.props.x[1],
                y0: this.props.y[0],
                y1: this.props.y[1]
              }
            }
          }
        }, {
          key: "controller",
          get: function() {
            return this.props.parallaxController
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              n = e.tagOuter,
              i = e.tagInner,
              a = e.styleOuter,
              l = e.styleInner,
              u = "parallax-outer" + (r ? " ".concat(r) : "");
            return o.default.createElement(n, {
              className: u,
              ref: this.mapRefOuter,
              style: a
            }, o.default.createElement(i, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: l
            }, t))
          }
        }]) && c(t.prototype, r), s
      }(o.Component);
      y(h, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), y(h, "propTypes", {
        children: i.default.node,
        className: i.default.string,
        disabled: i.default.bool.isRequired,
        parallaxController: i.default.object,
        styleInner: i.default.object,
        styleOuter: i.default.object,
        tagInner: i.default.string.isRequired,
        tagOuter: i.default.string.isRequired,
        x: i.default.arrayOf(i.default.oneOfType([i.default.string, i.default.number])),
        y: i.default.arrayOf(i.default.oneOfType([i.default.string, i.default.number]))
      });
      var b = (0, l.default)(h);
      t.default = b
    },
    9920: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = a(r(8200)),
        o = a(r(6048)),
        i = a(r(2660));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return l = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, l.apply(this, arguments)
      }

      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            c(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function c(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var f = {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "50vh"
        },
        p = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        d = function(e) {
          var t = e.children,
            r = e.className,
            o = e.layers,
            a = e.style,
            u = e.disabled;
          return n.default.createElement("div", {
            style: s(s({}, f), a),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, o.map((function(e, t) {
            var r = e.amount,
              o = e.children,
              a = e.expanded,
              c = void 0 === a || a,
              f = e.image,
              d = e.props,
              y = void 0 === d ? {} : d,
              h = y.style || {},
              b = y.className || "";
            delete y.style, delete y.className;
            var v = "parallax-banner-layer-".concat(t).concat(b ? " ".concat(b) : ""),
              O = c ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              m = f ? {
                backgroundImage: "url(".concat(f, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return n.default.createElement(i.default, {
              key: "layer-".concat(t),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: u
            }, n.default.createElement("div", l({
              className: v,
              style: s(s(s(s({}, m), p), O), h)
            }, y), o))
          })), t)
        };
      d.defaultProps = {
        disabled: !1
      }, d.propTypes = {
        children: o.default.node,
        className: o.default.string,
        disabled: o.default.bool.isRequired,
        layers: o.default.arrayOf(o.default.shape({
          amount: o.default.number.isRequired,
          children: o.default.oneOfType([o.default.node, o.default.func]),
          expanded: o.default.bool,
          image: o.default.string,
          props: o.default.object
        })),
        style: o.default.object
      };
      var y = d;
      t.default = y
    },
    9436: (e, t, r) => {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = f();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        i = c(r(6048)),
        a = c(r(2488)),
        l = c(r(9808)),
        u = r(7360),
        s = c(r(3888));

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function f() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return f = function() {
          return e
        }, e
      }

      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function d(e, t) {
        return d = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, d(e, t)
      }

      function y(e) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, y(e)
      }

      function h(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var b = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && d(e, t)
        }(c, e);
        var t, r, i, u, s = (i = c, u = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = y(i);
          if (u) {
            var r = y(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e) : t
          }(this, e)
        });

        function c(e) {
          var t, r;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = s.call(this, e)).controller = (r = {
            scrollAxis: e.scrollAxis,
            scrollContainer: e.scrollContainer
          }, "undefined" == typeof window ? null : l.default.init(r)), t
        }
        return t = c, (r = [{
          key: "componentDidUpdate",
          value: function(e) {
            e.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props.children;
            return o.default.createElement(a.default.Provider, {
              value: this.controller
            }, e)
          }
        }]) && p(t.prototype, r), c
      }(o.Component);
      t.default = b, h(b, "defaultProps", {
        scrollAxis: u.VERTICAL
      }), h(b, "propTypes", {
        children: i.default.node.isRequired,
        scrollAxis: i.default.oneOf([u.VERTICAL, u.HORIZONTAL]),
        scrollContainer: s.default
      })
    },
    1752: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, o = r(8200),
        i = (n = r(2488)) && n.__esModule ? n : {
          default: n
        };
      t.default = function() {
        var e = (0, o.useContext)(i.default);
        if ("undefined" == typeof window) return null;
        if (!e) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: e
        }
      }
    },
    1432: (e, t, r) => {
      "use strict";

      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
              a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        i = l(r(6048)),
        a = l(r(2488));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return u = function() {
          return e
        }, e
      }

      function s() {
        return s = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, s.apply(this, arguments)
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function f(e, t) {
        return f = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, f(e, t)
      }

      function p(e) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, p(e)
      }
      t.default = function(e) {
        var t, r, l, u = function(t) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && f(e, t)
          }(y, t);
          var r, i, l, u, d = (l = y, u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, t = p(l);
            if (u) {
              var r = p(this).constructor;
              e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return function(e, t) {
              return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e) : t
            }(this, e)
          });

          function y() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, y), d.apply(this, arguments)
          }
          return r = y, (i = [{
            key: "render",
            value: function() {
              var t = this;
              return o.default.createElement(a.default.Consumer, null, (function(r) {
                return o.default.createElement(e, s({
                  parallaxController: r
                }, t.props))
              }))
            }
          }]) && c(r.prototype, i), y
        }(o.Component);
        return t = u, r = "propTypes", l = {
          parallaxController: i.default.object
        }, r in t ? Object.defineProperty(t, r, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = l, u
      }
    },
    7360: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HORIZONTAL = t.VERTICAL = void 0, t.VERTICAL = "vertical", t.HORIZONTAL = "horizontal"
    },
    2488: (e, t, r) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var o = ((n = r(8200)) && n.__esModule ? n : {
        default: n
      }).default.createContext(null);
      t.default = o
    },
    3224: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setParallaxStyles = function(e, t, r) {
        var o = (0, n.getParallaxOffsets)(t, r),
          i = o.x,
          a = i.value,
          l = i.unit,
          u = o.y,
          s = u.value,
          c = u.unit;
        e.style.transform = "translate3d(".concat(a).concat(l, ", ").concat(s).concat(c, ", 0)")
      }, t.resetStyles = function(e) {
        e.elInner.style.transform = ""
      };
      var n = r(8852)
    },
    260: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = e.y0,
          r = e.y1,
          o = e.x1,
          i = e.x0,
          a = (0, n.parseValueAndUnit)(t),
          l = (0, n.parseValueAndUnit)(r),
          u = (0, n.parseValueAndUnit)(i),
          s = (0, n.parseValueAndUnit)(o);
        if (u.unit !== s.unit || a.unit !== l.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: u.unit || "%",
          yUnit: a.unit || "%",
          y0: a,
          y1: l,
          x0: u,
          x1: s
        }
      };
      var n = r(7268)
    },
    8852: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getParallaxOffsets = function(e, t) {
        var r = e.y0,
          o = e.y1,
          i = e.x0,
          a = e.x1,
          l = o.unit,
          u = a.unit;
        return {
          x: {
            value: (0, n.scaleBetween)(t, i.value, a.value, 0, 100),
            unit: u
          },
          y: {
            value: (0, n.scaleBetween)(t, r.value, o.value, 0, 100),
            unit: l
          }
        }
      };
      var n = r(7268)
    },
    2996: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "percentMoved", {
        enumerable: !0,
        get: function() {
          return o.percentMoved
        }
      }), Object.defineProperty(t, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return i.setParallaxStyles
        }
      }), Object.defineProperty(t, "resetStyles", {
        enumerable: !0,
        get: function() {
          return i.resetStyles
        }
      }), Object.defineProperty(t, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return a.getParallaxOffsets
        }
      }), Object.defineProperty(t, "isElementInView", {
        enumerable: !0,
        get: function() {
          return l.isElementInView
        }
      }), Object.defineProperty(t, "getOffsets", {
        enumerable: !0,
        get: function() {
          return u.default
        }
      });
      var n = s(r(2488)),
        o = r(2376),
        i = r(3224),
        a = r(8852),
        l = r(204),
        u = s(r(260));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    204: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isElementInView = function(e, t, r, n) {
        var o = e - n,
          i = t - n;
        return o >= 0 && o <= r || i >= 0 && i <= r || o <= 0 && i >= r
      }
    },
    2376: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.percentMoved = function(e, t, r, n) {
        return (-1 * (e - n) + r) / t * 100
      }
    },
    5324: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "useController", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "withController", {
        enumerable: !0,
        get: function() {
          return o.default
        }
      }), Object.defineProperty(t, "Parallax", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "ParallaxProvider", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "ParallaxBanner", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      }), Object.defineProperty(t, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return u.default
        }
      });
      var n = s(r(1752)),
        o = s(r(1432)),
        i = s(r(2660)),
        a = s(r(9436)),
        l = s(r(9920)),
        u = s(r(2488));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    1120: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createId = function() {
        return ++r
      };
      var r = 0
    },
    7268: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return o.default
        }
      }), Object.defineProperty(t, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "createId", {
        enumerable: !0,
        get: function() {
          return a.createId
        }
      });
      var n = l(r(3508)),
        o = l(r(5688)),
        i = l(r(2752)),
        a = r(1120);

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    3508: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof e && "string" != typeof e) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (e = String(e), t.value = parseFloat(e, 10), t.unit = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(e) {
            return e === t.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return t
      }
    },
    5688: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t, r, n, o) {
        return (r - t) * (e - n) / (o - n) + t
      }
    },
    2752: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
      }
    },
    3888: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !e[t] || e[t] instanceof window.Element ? null : new Error('Prop name "'.concat(t, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    3336: (e, t, r) => {
      "use strict";
      var n = r(8900);

      function o() {}

      function i() {}
      i.resetWarningCache = o, e.exports = function() {
        function e(e, t, r, o, i, a) {
          if (a !== n) {
            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw l.name = "Invariant Violation", l
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: o
        };
        return r.PropTypes = r, r
      }
    },
    6048: (e, t, r) => {
      e.exports = r(3336)()
    },
    8900: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
  }
]);
//# sourceMappingURL=b6ae285b4fba596cc880964e18ba8356.js.map