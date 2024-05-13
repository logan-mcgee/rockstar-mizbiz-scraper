! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "b190fb3b-0e96-4267-b082-bb441e5c3f15", t._sentryDebugIdIdentifier = "sentry-dbid-b190fb3b-0e96-4267-b082-bb441e5c3f15")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [196], {
    45164: (t, e, r) => {
      "use strict";
      var i = p(r(67032)),
        n = p(r(4616)),
        a = p(r(65908)),
        s = p(r(272)),
        o = p(r(66516)),
        l = p(r(92392)),
        h = p(r(51664)),
        c = p(r(71424)),
        u = p(r(86352));

      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var d = function(t) {
        function e() {
          var t, r, i, s;
          (0, a.default)(this, e);
          for (var l = arguments.length, h = Array(l), c = 0; c < l; c++) h[c] = arguments[c];
          return r = i = (0, o.default)(this, (t = e.__proto__ || (0, n.default)(e)).call.apply(t, [this].concat(h))), i.handleClickToPause = function() {
            i.anim.isPaused ? i.anim.play() : i.anim.pause()
          }, s = r, (0, o.default)(i, s)
        }
        return (0, l.default)(e, t), (0, s.default)(e, [{
          key: "componentDidMount",
          value: function() {
            var t = this.props,
              e = t.options,
              r = t.eventListeners,
              n = e.loop,
              a = e.autoplay,
              s = e.animationData,
              o = e.rendererSettings,
              l = e.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== n,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, i.default)({}, this.options, e), this.anim = u.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(t) {
            this.options.animationData !== t.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, i.default)({}, this.options, t.options), this.anim = u.default.loadAnimation(this.options), this.registerEvents(t.eventListeners))
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null
          }
        }, {
          key: "setSpeed",
          value: function() {
            this.anim.setSpeed(this.props.speed)
          }
        }, {
          key: "setDirection",
          value: function() {
            this.anim.setDirection(this.props.direction)
          }
        }, {
          key: "play",
          value: function() {
            this.anim.play()
          }
        }, {
          key: "playSegments",
          value: function() {
            this.anim.playSegments(this.props.segments)
          }
        }, {
          key: "stop",
          value: function() {
            this.anim.stop()
          }
        }, {
          key: "pause",
          value: function() {
            (this.props.isPaused && !this.anim.isPaused || !this.props.isPaused && this.anim.isPaused) && this.anim.pause()
          }
        }, {
          key: "destroy",
          value: function() {
            this.anim.destroy()
          }
        }, {
          key: "registerEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.addEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.removeEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.width,
              n = e.height,
              a = e.ariaRole,
              s = e.ariaLabel,
              o = e.isClickToPauseDisabled,
              l = e.title,
              c = function(t) {
                return "number" == typeof t ? t + "px" : t || "100%"
              },
              u = (0, i.default)({
                width: c(r),
                height: c(n),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return h.default.createElement("div", {
              ref: function(e) {
                t.el = e
              },
              style: u,
              onClick: p,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), e
      }(h.default.Component);
      e.c = d, d.propTypes = {
        eventListeners: c.default.arrayOf(c.default.object),
        options: c.default.object.isRequired,
        height: c.default.oneOfType([c.default.string, c.default.number]),
        width: c.default.oneOfType([c.default.string, c.default.number]),
        isStopped: c.default.bool,
        isPaused: c.default.bool,
        speed: c.default.number,
        segments: c.default.arrayOf(c.default.number),
        direction: c.default.number,
        ariaRole: c.default.string,
        ariaLabel: c.default.string,
        isClickToPauseDisabled: c.default.bool,
        title: c.default.string,
        style: c.default.string
      }, d.defaultProps = {
        eventListeners: [],
        isStopped: !1,
        isPaused: !1,
        speed: 1,
        ariaRole: "button",
        ariaLabel: "animation",
        isClickToPauseDisabled: !1,
        title: ""
      }
    },
    95364: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, i) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = r.y0,
          a = r.y1,
          s = r.x1,
          o = r.x0,
          l = "%" === a.unit && "%" === n.unit,
          h = n.value,
          c = a.value;
        if (l) {
          var u = e.height / 100;
          h = n.value * u, c = a.value * u
        }
        var p = "%" === s.unit && "%" === o.unit,
          d = o.value,
          f = s.value;
        if (p) {
          var m = e.width / 100;
          d = o.value * m, f = s.value * m
        }
        var v = Math.abs(h) + Math.abs(c);
        this.totalDistY = i.height + e.height + v;
        var g = i.height + e.height + (c > h ? -1 * v : v),
          y = Math.abs(d) + Math.abs(f);
        this.totalDistX = i.width + e.width + y;
        var b = i.width + e.width + (f > d ? -1 * y : y),
          x = e.originTotalDistY / g,
          S = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, h < 0 && (this.top = this.top + h * x), c > 0 && (this.bottom = this.bottom + c * x), this.left = e.left, this.right = e.right, d < 0 && (this.left = this.left + d * S), f > 0 && (this.right = this.right + f * S)
      }
    },
    9560: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Element = void 0;
      var i = r(89932),
        n = r(44964),
        a = r(57892),
        s = l(r(95364)),
        o = l(r(73100));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function h(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? h(Object(r), !0).forEach((function(e) {
            u(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function u(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      var d = function() {
        function t(e) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.elInner = e.elInner, this.elOuter = e.elOuter, this.props = e.props, this.scrollAxis = e.scrollAxis, this.id = (0, i.createId)(), this.offsets = (0, n.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = e.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var e, r;
        return e = t, (r = [{
          key: "updateProps",
          value: function(t) {
            return this.props = c(c({}, this.props), t), this.offsets = (0, n.getOffsets)(t), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(t, e) {
            return this.rect = new o.default(this.elOuter, t, e), this.bounds = new s.default(this.rect, this.offsets, t), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(t, e) {
            return this.isInView = (0, n.isElementInView)(this.bounds.left, this.bounds.right, t.width, e.x), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.left, this.rect.originTotalDistX, t.width, e.x), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(t, e) {
            return this.isInView = (0, n.isElementInView)(this.bounds.top, this.bounds.bottom, t.height, e.y), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.top, this.rect.originTotalDistY, t.height, e.y), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(e.prototype, r), t
      }();
      e.Element = d
    },
    48708: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = r(89932),
        n = r(44964),
        a = r(39820),
        s = r(34779),
        o = r(9560),
        l = r(57892);

      function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
        return i
      }

      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? c(Object(r), !0).forEach((function(e) {
            p(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function p(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }

      function d(t) {
        var e = t.scrollAxis,
          r = void 0 === e ? l.VERTICAL : e,
          c = t.scrollContainer,
          p = [],
          d = !!c,
          f = c || window,
          m = d ? f.scrollLeft : window.pageXOffset,
          v = d ? f.scrollTop : window.pageYOffset,
          g = new s.Scroll(m, v),
          y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: c
          }),
          b = !1,
          x = (0, i.testForPassiveScroll)();

        function S(t) {
          t.addEventListener("scroll", P, !!x && {
            passive: !0
          }), window.addEventListener("resize", w, !1)
        }

        function E(t) {
          t.removeEventListener("scroll", P, !!x && {
            passive: !0
          }), window.removeEventListener("resize", w, !1)
        }

        function P() {
          var t = d ? f.scrollLeft : window.pageXOffset,
            e = d ? f.scrollTop : window.pageYOffset;
          g.setScroll(t, e), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(T))
        }

        function w() {
          M(), T({
            updateCache: !0
          })
        }

        function T() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(e) {
            C(e), t && e.setCachedAttributes(y, g)
          })), b = !1
        }

        function C(t) {
          t.props.disabled || t.updatePosition(y, g)
        }

        function M() {
          if (d) {
            var t = f.offsetWidth,
              e = f.offsetHeight;
            return y.setSize(t, e)
          }
          var r = document.documentElement,
            i = window.innerWidth || r.clientWidth,
            n = window.innerHeight || r.clientHeight;
          return y.setSize(i, n)
        }
        S(f), M(), this.getElements = function() {
          return p
        }, this.createElement = function(t) {
          var e, i = new o.Element(u(u({}, t), {}, {
            scrollAxis: r
          }));
          return i.setCachedAttributes(y, g), p = p ? [].concat(function(t) {
            if (Array.isArray(t)) return h(t)
          }(e = p) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return h(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(t, e) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [i]) : [i], C(i), i
        }, this.removeElementById = function(t) {
          p && (p = p.filter((function(e) {
            return e.id !== t
          })))
        }, this.updateElementPropsById = function(t, e) {
          p && (p = p.map((function(r) {
            return r.id === t ? r.updateProps(e) : r
          }))), this.update()
        }, this.resetElementStyles = function(t) {
          (0, n.resetStyles)(t)
        }, this.update = function() {
          var t = d ? f.scrollLeft : window.pageXOffset,
            e = d ? f.scrollTop : window.pageYOffset;
          g.setScroll(t, e), M(), T({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          E(f), f = t, d = !!t, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), M(), S(f), T({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(f), p && p.forEach((function(t) {
            return (0, n.resetStyles)(t)
          })), p = void 0
        }
      }
      d.init = function(t) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new d(t)
      };
      var f = d;
      e.default = f
    },
    73100: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, r, i) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = e.getBoundingClientRect();
        if (r.scrollContainer) {
          var a = r.scrollContainer.getBoundingClientRect();
          n = {
            top: n.top - a.top,
            right: n.right - a.left,
            bottom: n.bottom - a.top,
            left: n.left - a.left
          }
        }
        this.height = e.offsetHeight, this.width = e.offsetWidth, this.left = n.left + i.x, this.right = n.right + i.x, this.top = n.top + i.y, this.bottom = n.bottom + i.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    34779: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Scroll = void 0;
      var i = function() {
        function t() {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.setScroll.apply(this, arguments)
        }
        var e, i;
        return e = t, (i = [{
          key: "setScroll",
          value: function(t, e) {
            return this.x = t, this.y = e, this
          }
        }]) && r(e.prototype, i), t
      }();
      e.Scroll = i
    },
    39820: (t, e) => {
      "use strict";

      function r(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.View = void 0;
      var i = function() {
        function t(e) {
          var r = e.width,
            i = e.height,
            n = e.scrollContainer;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.scrollContainer = n, this.setSize(r, i)
        }
        var e, i;
        return e = t, (i = [{
          key: "setSize",
          value: function(t, e) {
            return this.width = t, this.height = e, this
          }
        }]) && r(e.prototype, i), t
      }();
      e.View = i
    },
    91520: (t, e, r) => {
      "use strict";

      function i(t) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== i(t) && "function" != typeof t) return {
            default: t
          };
          var e = h();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(51664)),
        a = l(r(71424)),
        s = l(r(48708)),
        o = l(r(92320));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return h = function() {
          return t
        }, t
      }

      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }

      function u(t, e) {
        return u = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, u(t, e)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function d(t) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, d(t)
      }

      function f(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var m = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && u(t, e)
        }(h, t);
        var e, r, a, o, l = (a = h, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = d(a);
          if (o) {
            var r = d(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? p(t) : e
          }(this, t)
        });

        function h() {
          var t;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h);
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
          return f(p(t = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(e) {
            t._outer = e
          })), f(p(t), "mapRefInner", (function(e) {
            t._inner = e
          })), t
        }
        return e = h, (r = [{
          key: "componentDidMount",
          value: function() {
            var t = this.controller instanceof s.default;
            if (!this.controller && !t) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.props.disabled === t.disabled && this.props.x[0] === t.x[0] && this.props.x[1] === t.x[1] && this.props.y[0] === t.y[0] && this.props.y[1] === t.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== t.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
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
            var t = this.props,
              e = t.children,
              r = t.className,
              i = t.tagOuter,
              a = t.tagInner,
              s = t.styleOuter,
              o = t.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return n.default.createElement(i, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, n.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, e))
          }
        }]) && c(e.prototype, r), h
      }(n.Component);
      f(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), f(m, "propTypes", {
        children: a.default.node,
        className: a.default.string,
        disabled: a.default.bool.isRequired,
        parallaxController: a.default.object,
        styleInner: a.default.object,
        styleOuter: a.default.object,
        tagInner: a.default.string.isRequired,
        tagOuter: a.default.string.isRequired,
        x: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number])),
        y: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number]))
      });
      var v = (0, o.default)(m);
      e.default = v
    },
    13708: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = s(r(51664)),
        n = s(r(71424)),
        a = s(r(91520));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function o() {
        return o = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
          }
          return t
        }, o.apply(this, arguments)
      }

      function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(r), !0).forEach((function(e) {
            c(t, e, r[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }))
        }
        return t
      }

      function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var u = {
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
        d = function(t) {
          var e = t.children,
            r = t.className,
            n = t.layers,
            s = t.style,
            l = t.disabled;
          return i.default.createElement("div", {
            style: h(h({}, u), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, n.map((function(t, e) {
            var r = t.amount,
              n = t.children,
              s = t.expanded,
              c = void 0 === s || s,
              u = t.image,
              d = t.props,
              f = void 0 === d ? {} : d,
              m = f.style || {},
              v = f.className || "";
            delete f.style, delete f.className;
            var g = "parallax-banner-layer-".concat(e).concat(v ? " ".concat(v) : ""),
              y = c ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = u ? {
                backgroundImage: "url(".concat(u, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return i.default.createElement(a.default, {
              key: "layer-".concat(e),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: l
            }, i.default.createElement("div", o({
              className: g,
              style: h(h(h(h({}, b), p), y), m)
            }, f), n))
          })), e)
        };
      d.defaultProps = {
        disabled: !1
      }, d.propTypes = {
        children: n.default.node,
        className: n.default.string,
        disabled: n.default.bool.isRequired,
        layers: n.default.arrayOf(n.default.shape({
          amount: n.default.number.isRequired,
          children: n.default.oneOfType([n.default.node, n.default.func]),
          expanded: n.default.bool,
          image: n.default.string,
          props: n.default.object
        })),
        style: n.default.object
      };
      var f = d;
      e.default = f
    },
    40648: (t, e, r) => {
      "use strict";

      function i(t) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== i(t) && "function" != typeof t) return {
            default: t
          };
          var e = u();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(51664)),
        a = c(r(71424)),
        s = c(r(92752)),
        o = c(r(48708)),
        l = r(57892),
        h = c(r(86569));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return u = function() {
          return t
        }, t
      }

      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }

      function d(t, e) {
        return d = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, d(t, e)
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }

      function m(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = r, t
      }
      var v = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && d(t, e)
        }(c, t);
        var e, r, a, l, h = (a = c, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = f(a);
          if (l) {
            var r = f(this).constructor;
            t = Reflect.construct(e, arguments, r)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t) : e
          }(this, t)
        });

        function c(t) {
          var e, r;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (e = h.call(this, t)).controller = (r = {
            scrollAxis: t.scrollAxis,
            scrollContainer: t.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), e
        }
        return e = c, (r = [{
          key: "componentDidUpdate",
          value: function(t) {
            t.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props.children;
            return n.default.createElement(s.default.Provider, {
              value: this.controller
            }, t)
          }
        }]) && p(e.prototype, r), c
      }(n.Component);
      e.default = v, m(v, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(v, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: h.default
      })
    },
    98784: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i, n = r(51664),
        a = (i = r(92752)) && i.__esModule ? i : {
          default: i
        };
      e.default = function() {
        var t = (0, n.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!t) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: t
        }
      }
    },
    92320: (t, e, r) => {
      "use strict";

      function i(t) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, i(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== i(t) && "function" != typeof t) return {
            default: t
          };
          var e = l();
          if (e && e.has(t)) return e.get(t);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
            } return r.default = t, e && e.set(t, r), r
        }(r(51664)),
        a = o(r(71424)),
        s = o(r(92752));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return l = function() {
          return t
        }, t
      }

      function h() {
        return h = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
          }
          return t
        }, h.apply(this, arguments)
      }

      function c(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }

      function u(t, e) {
        return u = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, u(t, e)
      }

      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
      }
      e.default = function(t) {
        var e, r, o, l = function(e) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && u(t, e)
          }(f, e);
          var r, a, o, l, d = (o = f, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }(), function() {
            var t, e = p(o);
            if (l) {
              var r = p(this).constructor;
              t = Reflect.construct(e, arguments, r)
            } else t = e.apply(this, arguments);
            return function(t, e) {
              return !e || "object" !== i(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }(t) : e
            }(this, t)
          });

          function f() {
            return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), d.apply(this, arguments)
          }
          return r = f, (a = [{
            key: "render",
            value: function() {
              var e = this;
              return n.default.createElement(s.default.Consumer, null, (function(r) {
                return n.default.createElement(t, h({
                  parallaxController: r
                }, e.props))
              }))
            }
          }]) && c(r.prototype, a), f
        }(n.Component);
        return e = l, r = "propTypes", o = {
          parallaxController: a.default.object
        }, r in e ? Object.defineProperty(e, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[r] = o, l
      }
    },
    57892: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.HORIZONTAL = e.VERTICAL = void 0, e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal"
    },
    92752: (t, e, r) => {
      "use strict";
      var i;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = ((i = r(51664)) && i.__esModule ? i : {
        default: i
      }).default.createContext(null);
      e.default = n
    },
    29837: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.setParallaxStyles = function(t, e, r) {
        var n = (0, i.getParallaxOffsets)(e, r),
          a = n.x,
          s = a.value,
          o = a.unit,
          l = n.y,
          h = l.value,
          c = l.unit;
        t.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(h).concat(c, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var i = r(29864)
    },
    26516: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = t.y0,
          r = t.y1,
          n = t.x1,
          a = t.x0,
          s = (0, i.parseValueAndUnit)(e),
          o = (0, i.parseValueAndUnit)(r),
          l = (0, i.parseValueAndUnit)(a),
          h = (0, i.parseValueAndUnit)(n);
        if (l.unit !== h.unit || s.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: s.unit || "%",
          y0: s,
          y1: o,
          x0: l,
          x1: h
        }
      };
      var i = r(89932)
    },
    29864: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getParallaxOffsets = function(t, e) {
        var r = t.y0,
          n = t.y1,
          a = t.x0,
          s = t.x1,
          o = n.unit,
          l = s.unit;
        return {
          x: {
            value: (0, i.scaleBetween)(e, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, i.scaleBetween)(e, r.value, n.value, 0, 100),
            unit: o
          }
        }
      };
      var i = r(89932)
    },
    44964: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "percentMoved", {
        enumerable: !0,
        get: function() {
          return n.percentMoved
        }
      }), Object.defineProperty(e, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(e, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(e, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(e, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(e, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var i = h(r(92752)),
        n = r(31288),
        a = r(29837),
        s = r(29864),
        o = r(59352),
        l = h(r(26516));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    59352: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isElementInView = function(t, e, r, i) {
        var n = t - i,
          a = e - i;
        return n >= 0 && n <= r || a >= 0 && a <= r || n <= 0 && a >= r
      }
    },
    31288: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.percentMoved = function(t, e, r, i) {
        return (-1 * (t - i) + r) / e * 100
      }
    },
    77616: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "oZ", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "mw", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "qK", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "Sr", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      });
      var i = o(r(98784)),
        n = (o(r(92320)), o(r(91520))),
        a = o(r(40648)),
        s = o(r(13708));
      o(r(92752));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    98357: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.createId = function() {
        return ++r
      };
      var r = 0
    },
    89932: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(e, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var i = o(r(25536)),
        n = o(r(16512)),
        a = o(r(45560)),
        s = r(98357);

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    25536: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (t = String(t), e.value = parseFloat(t, 10), e.unit = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(t) {
            return t === e.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return e
      }
    },
    16512: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, r, i, n) {
        return (r - e) * (t - i) / (n - i) + e
      }
    },
    45560: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0
            }
          });
          window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
      }
    },
    86569: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !t[e] || t[e] instanceof window.Element ? null : new Error('Prop name "'.concat(e, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    16728: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
          }
          return t
        },
        n = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
          }
          return function(e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e
          }
        }(),
        a = d(r(51664)),
        s = d(r(71424)),
        o = d(r(35459)),
        l = d(r(34332)),
        h = d(r(17368)),
        c = d(r(31792)),
        u = d(r(54080)),
        p = r(57884);

      function d(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function f(t, e) {
        return t.scrollWidth - 1 <= e
      }

      function m(t, e) {
        return t.scrollHeight - 1 <= e
      }
      var v = function(t) {
        function e(t) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in t && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, t.throttle), r
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), n(e, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.state.ready && ((0, o.default)(this.props, t) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, u.default)()
          }
        }, {
          key: "process",
          value: function() {
            var t = this,
              e = this.props,
              r = e.min,
              i = e.max,
              n = e.mode,
              a = e.forceSingleModeWidth,
              s = e.onReady,
              o = this._parent,
              c = this._child,
              d = (0, p.innerWidth)(o),
              v = (0, p.innerHeight)(o);
            if (v <= 0 || isNaN(v)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (d <= 0 || isNaN(d)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, u.default)();
              this.pid = g;
              var y = function() {
                  return g !== t.pid
                },
                b = "multi" === n ? function() {
                  return m(c, v)
                } : function() {
                  return f(c, d)
                },
                x = "multi" === n ? function() {
                  return f(c, d)
                } : function() {
                  return m(c, v)
                },
                S = void 0,
                E = r,
                P = i;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, h.default)((function() {
                  return E <= P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((E + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return y() ? e(!0) : (b() ? E = S + 1 : P = S - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === n && a || x() ? e() : (E = r, P = S, (0, h.default)((function() {
                  return E < P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((E + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return g !== t.pid ? e(!0) : (x() ? E = S + 1 : P = S - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (S = Math.min(E, P), S = Math.max(S, r), S = Math.min(S, i), S = Math.max(S, 0), y()) return e(!0);
                t.setState({
                  fontSize: S
                }, e)
              }], (function(e) {
                e || y() || t.setState({
                  ready: !0
                }, (function() {
                  return s(S)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              r = e.children,
              n = e.text,
              s = e.style,
              o = (e.min, e.max, e.mode),
              l = (e.forceWidth, e.forceSingleModeWidth, e.throttle, e.autoResize, e.onReady, function(t, e) {
                var r = {};
                for (var i in t) e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
                return r
              }(e, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              h = this.state,
              c = h.fontSize,
              u = h.ready,
              p = i({}, s, {
                fontSize: c
              }),
              d = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (d.whiteSpace = "nowrap"), a.default.createElement("div", i({
              ref: function(e) {
                return t._parent = e
              },
              style: p
            }, l), a.default.createElement("div", {
              ref: function(e) {
                return t._child = e
              },
              style: d
            }, n && "function" == typeof r ? u ? r(n) : n : r))
          }
        }]), e
      }(a.default.Component);
      v.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, v.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, e.default = v
    },
    58936: (t, e, r) => {
      "use strict";
      e.cR = void 0;
      var i, n = (i = r(16728)) && i.__esModule ? i : {
        default: i
      };
      e.cR = n.default, n.default
    },
    57884: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.innerHeight = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientHeight - parseInt(e.getPropertyValue("padding-top"), 10) - parseInt(e.getPropertyValue("padding-bottom"), 10) : t.clientHeight
      }, e.innerWidth = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientWidth - parseInt(e.getPropertyValue("padding-left"), 10) - parseInt(e.getPropertyValue("padding-right"), 10) : t.clientWidth
      }
    },
    34332: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = [],
          i = 0,
          a = !0;

        function s(t) {
          function i() {
            e && e(t, r)
          }
          a ? n.default.nextTick(i) : i()
        }
        t.length > 0 ? t[0]((function e(n, a) {
          r.push(a), ++i >= t.length || n ? s(n) : t[i](e)
        })) : s(null), a = !1
      };
      var i, n = (i = r(44392)) && i.__esModule ? i : {
        default: i
      }
    },
    35459: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        if (t === e) return !0;
        var r = Object.keys(t),
          i = Object.keys(e);
        if (r.length !== i.length) return !1;
        for (var n = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!n.call(e, r[a]) || t[r[a]] !== e[r[a]]) return !1;
        return !0
      }
    },
    31792: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = void 0,
          i = void 0,
          n = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, n = t.apply(r, i), r = null, i = null
        }
        return function() {
          r = this, i = arguments;
          var t = new Date - s;
          return a || (t >= e ? o() : a = setTimeout(o, e - t)), n
        }
      }
    },
    54080: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        return r++
      };
      var r = 0
    },
    17368: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        t() ? e((function r(n) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          n ? i(n) : t.apply(this, s) ? e(r) : i(null)
        })) : i(null)
      };
      var r = function() {}
    },
    84296: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q: () => c
      });
      var i = r(51664),
        n = r(77100);
      let a = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
        s = t => t && !Array.isArray(t) && "object" == typeof t,
        o = [],
        l = {},
        h = n.cp;
      const c = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          r = l;
        s(t) ? (r = t, t = null, e = "dependencies" in r ? r.dependencies : o) : s(e) && (r = e, e = "dependencies" in r ? r.dependencies : o);
        let {
          scope: n,
          revertOnUpdate: c
        } = r, [u, p] = (0, i.useState)(!1);
        t && "function" != typeof t && console.warn("First parameter must be a function or config object");
        const d = h.context((() => {}), n),
          f = () => d.revert(),
          m = e && e.length && !c;
        return a((() => {
          if (t && d.add(t, n), !m || !u) return f
        }), e), m && a((() => (p(!0), f)), o), {
          context: d,
          contextSafe: t => d.add(null, t)
        }
      };
      c.register = t => {
        h = t
      }, c.headless = !0
    },
    62748: (t, e, r) => {
      "use strict";
      r.d(e, {
        U1: () => d
      });
      const i = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        n = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(t, e) {
          return function(r, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = t[e];
            if (!n(r)) return;
            if (!i(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const h = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const t = l[r].handlers;
              let e;
              for (e = t.length; e > 0 && !(o >= t[e - 1].priority); e--);
              e === t.length ? t[e] = h : t.splice(e, 0, h), l.__current.forEach((t => {
                t.name === r && t.currentIndex >= e && t.currentIndex++
              }))
            } else l[r] = {
              handlers: [h],
              runs: 0
            };
            "hookAdded" !== r && t.doAction("hookAdded", r, a, s, o)
          }
        },
        s = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = t[e];
            if (!n(a)) return;
            if (!r && !i(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (r) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const t = o[a].handlers;
              for (let e = t.length - 1; e >= 0; e--) t[e].namespace === s && (t.splice(e, 1), l++, o.__current.forEach((t => {
                t.name === a && t.currentIndex >= e && t.currentIndex--
              })))
            }
            return "hookRemoved" !== a && t.doAction("hookRemoved", a, s), l
          }
        },
        o = function(t, e) {
          return function(r, i) {
            const n = t[e];
            return void 0 !== i ? r in n && n[r].handlers.some((t => t.namespace === i)) : r in n
          }
        },
        l = function(t, e) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(i) {
            const n = t[e];
            n[i] || (n[i] = {
              handlers: [],
              runs: 0
            }), n[i].runs++;
            const a = n[i].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return r ? o[0] : void 0;
            const h = {
              name: i,
              currentIndex: 0
            };
            for (n.__current.push(h); h.currentIndex < a.length;) {
              const t = a[h.currentIndex].callback.apply(null, o);
              r && (o[0] = t), h.currentIndex++
            }
            return n.__current.pop(), r ? o[0] : void 0
          }
        },
        h = function(t, e) {
          return function() {
            var r;
            const i = t[e];
            return null !== (r = i.__current[i.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        c = function(t, e) {
          return function(r) {
            const i = t[e];
            return void 0 === r ? void 0 !== i.__current[0] : !!i.__current[0] && r === i.__current[0].name
          }
        },
        u = function(t, e) {
          return function(r) {
            const i = t[e];
            if (n(r)) return i[r] && i[r].runs ? i[r].runs : 0
          }
        };
      class p {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = h(this, "actions"), this.currentFilter = h(this, "filters"), this.doingAction = c(this, "actions"), this.doingFilter = c(this, "filters"), this.didAction = u(this, "actions"), this.didFilter = u(this, "filters")
        }
      }
      const d = function() {
          return new p
        },
        f = d(),
        {
          addAction: m,
          addFilter: v,
          removeAction: g,
          removeFilter: y,
          hasAction: b,
          hasFilter: x,
          removeAllActions: S,
          removeAllFilters: E,
          doAction: P,
          applyFilters: w,
          currentAction: T,
          currentFilter: C,
          doingAction: M,
          doingFilter: A,
          didAction: _,
          didFilter: k,
          actions: D,
          filters: I
        } = f
    },
    86016: (t, e, r) => {
      t.exports = {
        default: r(40684),
        __esModule: !0
      }
    },
    18276: (t, e, r) => {
      t.exports = {
        default: r(41248),
        __esModule: !0
      }
    },
    2016: (t, e, r) => {
      t.exports = {
        default: r(47952),
        __esModule: !0
      }
    },
    4616: (t, e, r) => {
      t.exports = {
        default: r(37488),
        __esModule: !0
      }
    },
    48844: (t, e, r) => {
      t.exports = {
        default: r(46760),
        __esModule: !0
      }
    },
    48011: (t, e, r) => {
      t.exports = {
        default: r(12400),
        __esModule: !0
      }
    },
    70224: (t, e, r) => {
      t.exports = {
        default: r(32784),
        __esModule: !0
      }
    },
    65908: (t, e) => {
      "use strict";
      e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
    },
    272: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var i, n = (i = r(2016)) && i.__esModule ? i : {
        default: i
      };
      e.default = function() {
        function t(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(t, i.key, i)
          }
        }
        return function(e, r, i) {
          return r && t(e.prototype, r), i && t(e, i), e
        }
      }()
    },
    67032: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var i, n = (i = r(86016)) && i.__esModule ? i : {
        default: i
      };
      e.default = n.default || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
      }
    },
    92392: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var i = s(r(48844)),
        n = s(r(18276)),
        a = s(r(83528));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, a.default)(e)));
        t.prototype = (0, n.default)(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e)
      }
    },
    66516: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var i, n = (i = r(83528)) && i.__esModule ? i : {
        default: i
      };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, n.default)(e)) && "function" != typeof e ? t : e
      }
    },
    83528: (t, e, r) => {
      "use strict";
      e.__esModule = !0;
      var i = s(r(70224)),
        n = s(r(48011)),
        a = "function" == typeof n.default && "symbol" == typeof i.default ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof n.default && t.constructor === n.default && t !== n.default.prototype ? "symbol" : typeof t
        };

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = "function" == typeof n.default && "symbol" === a(i.default) ? function(t) {
        return void 0 === t ? "undefined" : a(t)
      } : function(t) {
        return t && "function" == typeof n.default && t.constructor === n.default && t !== n.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
      }
    },
    8560: function(t) {
      t.exports = function() {
        "use strict";

        function t(e) {
          return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, t(e)
        }

        function e(t, r) {
          return e = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
          }, e(t, r)
        }

        function r(t, i, n) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }() ? Reflect.construct : function(t, r, i) {
            var n = [null];
            n.push.apply(n, r);
            var a = new(Function.bind.apply(t, n));
            return i && e(a, i.prototype), a
          }, r.apply(null, arguments)
        }

        function i(t) {
          return function(t) {
            if (Array.isArray(t)) return n(t)
          }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(t) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return n(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i
        }
        var a = Object.hasOwnProperty,
          s = Object.setPrototypeOf,
          o = Object.isFrozen,
          l = Object.getPrototypeOf,
          h = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          u = Object.seal,
          p = Object.create,
          d = "undefined" != typeof Reflect && Reflect,
          f = d.apply,
          m = d.construct;
        f || (f = function(t, e, r) {
          return t.apply(e, r)
        }), c || (c = function(t) {
          return t
        }), u || (u = function(t) {
          return t
        }), m || (m = function(t, e) {
          return r(t, i(e))
        });
        var v, g = A(Array.prototype.forEach),
          y = A(Array.prototype.pop),
          b = A(Array.prototype.push),
          x = A(String.prototype.toLowerCase),
          S = A(String.prototype.toString),
          E = A(String.prototype.match),
          P = A(String.prototype.replace),
          w = A(String.prototype.indexOf),
          T = A(String.prototype.trim),
          C = A(RegExp.prototype.test),
          M = (v = TypeError, function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return m(v, e)
          });

        function A(t) {
          return function(e) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
            return f(t, e, i)
          }
        }

        function _(t, e, r) {
          var i;
          r = null !== (i = r) && void 0 !== i ? i : x, s && s(t, null);
          for (var n = e.length; n--;) {
            var a = e[n];
            if ("string" == typeof a) {
              var l = r(a);
              l !== a && (o(e) || (e[n] = l), a = l)
            }
            t[a] = !0
          }
          return t
        }

        function k(t) {
          var e, r = p(null);
          for (e in t) !0 === f(a, t, [e]) && (r[e] = t[e]);
          return r
        }

        function D(t, e) {
          for (; null !== t;) {
            var r = h(t, e);
            if (r) {
              if (r.get) return A(r.get);
              if ("function" == typeof r.value) return A(r.value)
            }
            t = l(t)
          }
          return function(t) {
            return console.warn("fallback value for", t), null
          }
        }
        var I = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          F = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          O = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          L = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          V = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          R = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          B = c(["#text"]),
          N = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          z = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          G = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          H = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = u(/<%[\w\W]*|[\w\W]*%>/gm),
          q = u(/\${[\w\W]*}/gm),
          U = u(/^data-[\-\w.\u00B7-\uFFFF]/),
          $ = u(/^aria-[\-\w]+$/),
          Y = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          X = u(/^(?:\w+script|data):/i),
          K = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = u(/^html$/i),
          J = function() {
            return "undefined" == typeof window ? null : window
          };
        return function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
            n = function(t) {
              return e(t)
            };
          if (n.version = "2.4.7", n.removed = [], !r || !r.document || 9 !== r.document.nodeType) return n.isSupported = !1, n;
          var a = r.document,
            s = r.document,
            o = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            h = r.Node,
            u = r.Element,
            p = r.NodeFilter,
            d = r.NamedNodeMap,
            f = void 0 === d ? r.NamedNodeMap || r.MozNamedAttrMap : d,
            m = r.HTMLFormElement,
            v = r.DOMParser,
            A = r.trustedTypes,
            Q = u.prototype,
            tt = D(Q, "cloneNode"),
            et = D(Q, "nextSibling"),
            rt = D(Q, "childNodes"),
            it = D(Q, "parentNode");
          if ("function" == typeof l) {
            var nt = s.createElement("template");
            nt.content && nt.content.ownerDocument && (s = nt.content.ownerDocument)
          }
          var at = function(e, r) {
              if ("object" !== t(e) || "function" != typeof e.createPolicy) return null;
              var i = null,
                n = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(n) && (i = r.currentScript.getAttribute(n));
              var a = "dompurify" + (i ? "#" + i : "");
              try {
                return e.createPolicy(a, {
                  createHTML: function(t) {
                    return t
                  },
                  createScriptURL: function(t) {
                    return t
                  }
                })
              } catch (t) {
                return console.warn("TrustedTypes policy " + a + " could not be created."), null
              }
            }(A, a),
            st = at ? at.createHTML("") : "",
            ot = s,
            lt = ot.implementation,
            ht = ot.createNodeIterator,
            ct = ot.createDocumentFragment,
            ut = ot.getElementsByTagName,
            pt = a.importNode,
            dt = {};
          try {
            dt = k(s).documentMode ? s.documentMode : {}
          } catch (t) {}
          var ft = {};
          n.isSupported = "function" == typeof it && lt && void 0 !== lt.createHTMLDocument && 9 !== dt;
          var mt, vt, gt = H,
            yt = W,
            bt = q,
            xt = U,
            St = $,
            Et = X,
            Pt = K,
            wt = Y,
            Tt = null,
            Ct = _({}, [].concat(i(I), i(F), i(O), i(V), i(B))),
            Mt = null,
            At = _({}, [].concat(i(N), i(z), i(G), i(j))),
            _t = Object.seal(Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
              }
            })),
            kt = null,
            Dt = null,
            It = !0,
            Ft = !0,
            Ot = !1,
            Lt = !0,
            Vt = !1,
            Rt = !1,
            Bt = !1,
            Nt = !1,
            zt = !1,
            Gt = !1,
            jt = !1,
            Ht = !0,
            Wt = !1,
            qt = !0,
            Ut = !1,
            $t = {},
            Yt = null,
            Xt = _({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Kt = null,
            Zt = _({}, ["audio", "video", "img", "source", "image", "track"]),
            Jt = null,
            Qt = _({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            te = "http://www.w3.org/1998/Math/MathML",
            ee = "http://www.w3.org/2000/svg",
            re = "http://www.w3.org/1999/xhtml",
            ie = re,
            ne = !1,
            ae = null,
            se = _({}, [te, ee, re], S),
            oe = ["application/xhtml+xml", "text/html"],
            le = null,
            he = s.createElement("form"),
            ce = function(t) {
              return t instanceof RegExp || t instanceof Function
            },
            ue = function(e) {
              le && le === e || (e && "object" === t(e) || (e = {}), e = k(e), mt = mt = -1 === oe.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, vt = "application/xhtml+xml" === mt ? S : x, Tt = "ALLOWED_TAGS" in e ? _({}, e.ALLOWED_TAGS, vt) : Ct, Mt = "ALLOWED_ATTR" in e ? _({}, e.ALLOWED_ATTR, vt) : At, ae = "ALLOWED_NAMESPACES" in e ? _({}, e.ALLOWED_NAMESPACES, S) : se, Jt = "ADD_URI_SAFE_ATTR" in e ? _(k(Qt), e.ADD_URI_SAFE_ATTR, vt) : Qt, Kt = "ADD_DATA_URI_TAGS" in e ? _(k(Zt), e.ADD_DATA_URI_TAGS, vt) : Zt, Yt = "FORBID_CONTENTS" in e ? _({}, e.FORBID_CONTENTS, vt) : Xt, kt = "FORBID_TAGS" in e ? _({}, e.FORBID_TAGS, vt) : {}, Dt = "FORBID_ATTR" in e ? _({}, e.FORBID_ATTR, vt) : {}, $t = "USE_PROFILES" in e && e.USE_PROFILES, It = !1 !== e.ALLOW_ARIA_ATTR, Ft = !1 !== e.ALLOW_DATA_ATTR, Ot = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Lt = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Vt = e.SAFE_FOR_TEMPLATES || !1, Rt = e.WHOLE_DOCUMENT || !1, zt = e.RETURN_DOM || !1, Gt = e.RETURN_DOM_FRAGMENT || !1, jt = e.RETURN_TRUSTED_TYPE || !1, Nt = e.FORCE_BODY || !1, Ht = !1 !== e.SANITIZE_DOM, Wt = e.SANITIZE_NAMED_PROPS || !1, qt = !1 !== e.KEEP_CONTENT, Ut = e.IN_PLACE || !1, wt = e.ALLOWED_URI_REGEXP || wt, ie = e.NAMESPACE || re, _t = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && ce(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (_t.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && ce(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (_t.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (_t.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Vt && (Ft = !1), Gt && (zt = !0), $t && (Tt = _({}, i(B)), Mt = [], !0 === $t.html && (_(Tt, I), _(Mt, N)), !0 === $t.svg && (_(Tt, F), _(Mt, z), _(Mt, j)), !0 === $t.svgFilters && (_(Tt, O), _(Mt, z), _(Mt, j)), !0 === $t.mathMl && (_(Tt, V), _(Mt, G), _(Mt, j))), e.ADD_TAGS && (Tt === Ct && (Tt = k(Tt)), _(Tt, e.ADD_TAGS, vt)), e.ADD_ATTR && (Mt === At && (Mt = k(Mt)), _(Mt, e.ADD_ATTR, vt)), e.ADD_URI_SAFE_ATTR && _(Jt, e.ADD_URI_SAFE_ATTR, vt), e.FORBID_CONTENTS && (Yt === Xt && (Yt = k(Yt)), _(Yt, e.FORBID_CONTENTS, vt)), qt && (Tt["#text"] = !0), Rt && _(Tt, ["html", "head", "body"]), Tt.table && (_(Tt, ["tbody"]), delete kt.tbody), c && c(e), le = e)
            },
            pe = _({}, ["mi", "mo", "mn", "ms", "mtext"]),
            de = _({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            fe = _({}, ["title", "style", "font", "a", "script"]),
            me = _({}, F);
          _(me, O), _(me, L);
          var ve = _({}, V);
          _(ve, R);
          var ge = function(t) {
              b(n.removed, {
                element: t
              });
              try {
                t.parentNode.removeChild(t)
              } catch (e) {
                try {
                  t.outerHTML = st
                } catch (e) {
                  t.remove()
                }
              }
            },
            ye = function(t, e) {
              try {
                b(n.removed, {
                  attribute: e.getAttributeNode(t),
                  from: e
                })
              } catch (t) {
                b(n.removed, {
                  attribute: null,
                  from: e
                })
              }
              if (e.removeAttribute(t), "is" === t && !Mt[t])
                if (zt || Gt) try {
                  ge(e)
                } catch (t) {} else try {
                  e.setAttribute(t, "")
                } catch (t) {}
            },
            be = function(t) {
              var e, r;
              if (Nt) t = "<remove></remove>" + t;
              else {
                var i = E(t, /^[\r\n\t ]+/);
                r = i && i[0]
              }
              "application/xhtml+xml" === mt && ie === re && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
              var n = at ? at.createHTML(t) : t;
              if (ie === re) try {
                e = (new v).parseFromString(n, mt)
              } catch (t) {}
              if (!e || !e.documentElement) {
                e = lt.createDocument(ie, "template", null);
                try {
                  e.documentElement.innerHTML = ne ? st : n
                } catch (t) {}
              }
              var a = e.body || e.documentElement;
              return t && r && a.insertBefore(s.createTextNode(r), a.childNodes[0] || null), ie === re ? ut.call(e, Rt ? "html" : "body")[0] : Rt ? e.documentElement : a
            },
            xe = function(t) {
              return ht.call(t.ownerDocument || t, t, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT, null, !1)
            },
            Se = function(e) {
              return "object" === t(h) ? e instanceof h : e && "object" === t(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
            },
            Ee = function(t, e, r) {
              ft[t] && g(ft[t], (function(t) {
                t.call(n, e, r, le)
              }))
            },
            Pe = function(t) {
              var e, r;
              if (Ee("beforeSanitizeElements", t, null), (r = t) instanceof m && ("string" != typeof r.nodeName || "string" != typeof r.textContent || "function" != typeof r.removeChild || !(r.attributes instanceof f) || "function" != typeof r.removeAttribute || "function" != typeof r.setAttribute || "string" != typeof r.namespaceURI || "function" != typeof r.insertBefore || "function" != typeof r.hasChildNodes)) return ge(t), !0;
              if (C(/[\u0080-\uFFFF]/, t.nodeName)) return ge(t), !0;
              var i = vt(t.nodeName);
              if (Ee("uponSanitizeElement", t, {
                  tagName: i,
                  allowedTags: Tt
                }), t.hasChildNodes() && !Se(t.firstElementChild) && (!Se(t.content) || !Se(t.content.firstElementChild)) && C(/<[/\w]/g, t.innerHTML) && C(/<[/\w]/g, t.textContent)) return ge(t), !0;
              if ("select" === i && C(/<template/i, t.innerHTML)) return ge(t), !0;
              if (!Tt[i] || kt[i]) {
                if (!kt[i] && Te(i)) {
                  if (_t.tagNameCheck instanceof RegExp && C(_t.tagNameCheck, i)) return !1;
                  if (_t.tagNameCheck instanceof Function && _t.tagNameCheck(i)) return !1
                }
                if (qt && !Yt[i]) {
                  var a = it(t) || t.parentNode,
                    s = rt(t) || t.childNodes;
                  if (s && a)
                    for (var o = s.length - 1; o >= 0; --o) a.insertBefore(tt(s[o], !0), et(t))
                }
                return ge(t), !0
              }
              return t instanceof u && ! function(t) {
                var e = it(t);
                e && e.tagName || (e = {
                  namespaceURI: ie,
                  tagName: "template"
                });
                var r = x(t.tagName),
                  i = x(e.tagName);
                return !!ae[t.namespaceURI] && (t.namespaceURI === ee ? e.namespaceURI === re ? "svg" === r : e.namespaceURI === te ? "svg" === r && ("annotation-xml" === i || pe[i]) : Boolean(me[r]) : t.namespaceURI === te ? e.namespaceURI === re ? "math" === r : e.namespaceURI === ee ? "math" === r && de[i] : Boolean(ve[r]) : t.namespaceURI === re ? !(e.namespaceURI === ee && !de[i]) && !(e.namespaceURI === te && !pe[i]) && !ve[r] && (fe[r] || !me[r]) : !("application/xhtml+xml" !== mt || !ae[t.namespaceURI]))
              }(t) ? (ge(t), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !C(/<\/no(script|embed|frames)/i, t.innerHTML) ? (Vt && 3 === t.nodeType && (e = t.textContent, e = P(e, gt, " "), e = P(e, yt, " "), e = P(e, bt, " "), t.textContent !== e && (b(n.removed, {
                element: t.cloneNode()
              }), t.textContent = e)), Ee("afterSanitizeElements", t, null), !1) : (ge(t), !0)
            },
            we = function(t, e, r) {
              if (Ht && ("id" === e || "name" === e) && (r in s || r in he)) return !1;
              if (Ft && !Dt[e] && C(xt, e));
              else if (It && C(St, e));
              else if (!Mt[e] || Dt[e]) {
                if (!(Te(t) && (_t.tagNameCheck instanceof RegExp && C(_t.tagNameCheck, t) || _t.tagNameCheck instanceof Function && _t.tagNameCheck(t)) && (_t.attributeNameCheck instanceof RegExp && C(_t.attributeNameCheck, e) || _t.attributeNameCheck instanceof Function && _t.attributeNameCheck(e)) || "is" === e && _t.allowCustomizedBuiltInElements && (_t.tagNameCheck instanceof RegExp && C(_t.tagNameCheck, r) || _t.tagNameCheck instanceof Function && _t.tagNameCheck(r)))) return !1
              } else if (Jt[e]);
              else if (C(wt, P(r, Pt, "")));
              else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== w(r, "data:") || !Kt[t])
                if (Ot && !C(Et, P(r, Pt, "")));
                else if (r) return !1;
              return !0
            },
            Te = function(t) {
              return t.indexOf("-") > 0
            },
            Ce = function(e) {
              var r, i, a, s;
              Ee("beforeSanitizeAttributes", e, null);
              var o = e.attributes;
              if (o) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: Mt
                };
                for (s = o.length; s--;) {
                  var h = r = o[s],
                    c = h.name,
                    u = h.namespaceURI;
                  if (i = "value" === c ? r.value : T(r.value), a = vt(c), l.attrName = a, l.attrValue = i, l.keepAttr = !0, l.forceKeepAttr = void 0, Ee("uponSanitizeAttribute", e, l), i = l.attrValue, !l.forceKeepAttr && (ye(c, e), l.keepAttr))
                    if (Lt || !C(/\/>/i, i)) {
                      Vt && (i = P(i, gt, " "), i = P(i, yt, " "), i = P(i, bt, " "));
                      var p = vt(e.nodeName);
                      if (we(p, a, i)) {
                        if (!Wt || "id" !== a && "name" !== a || (ye(c, e), i = "user-content-" + i), at && "object" === t(A) && "function" == typeof A.getAttributeType)
                          if (u);
                          else switch (A.getAttributeType(p, a)) {
                            case "TrustedHTML":
                              i = at.createHTML(i);
                              break;
                            case "TrustedScriptURL":
                              i = at.createScriptURL(i)
                          }
                        try {
                          u ? e.setAttributeNS(u, c, i) : e.setAttribute(c, i), y(n.removed)
                        } catch (t) {}
                      }
                    } else ye(c, e)
                }
                Ee("afterSanitizeAttributes", e, null)
              }
            },
            Me = function t(e) {
              var r, i = xe(e);
              for (Ee("beforeSanitizeShadowDOM", e, null); r = i.nextNode();) Ee("uponSanitizeShadowNode", r, null), Pe(r) || (r.content instanceof o && t(r.content), Ce(r));
              Ee("afterSanitizeShadowDOM", e, null)
            };
          return n.sanitize = function(e) {
            var i, s, l, c, u, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((ne = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Se(e)) {
              if ("function" != typeof e.toString) throw M("toString is not a function");
              if ("string" != typeof(e = e.toString())) throw M("dirty is not a string, aborting")
            }
            if (!n.isSupported) {
              if ("object" === t(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof e) return r.toStaticHTML(e);
                if (Se(e)) return r.toStaticHTML(e.outerHTML)
              }
              return e
            }
            if (Bt || ue(p), n.removed = [], "string" == typeof e && (Ut = !1), Ut) {
              if (e.nodeName) {
                var d = vt(e.nodeName);
                if (!Tt[d] || kt[d]) throw M("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (e instanceof h) 1 === (s = (i = be("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s);
            else {
              if (!zt && !Vt && !Rt && -1 === e.indexOf("<")) return at && jt ? at.createHTML(e) : e;
              if (!(i = be(e))) return zt ? null : jt ? st : ""
            }
            i && Nt && ge(i.firstChild);
            for (var f = xe(Ut ? e : i); l = f.nextNode();) 3 === l.nodeType && l === c || Pe(l) || (l.content instanceof o && Me(l.content), Ce(l), c = l);
            if (c = null, Ut) return e;
            if (zt) {
              if (Gt)
                for (u = ct.call(i.ownerDocument); i.firstChild;) u.appendChild(i.firstChild);
              else u = i;
              return (Mt.shadowroot || Mt.shadowrootmod) && (u = pt.call(a, u, !0)), u
            }
            var m = Rt ? i.outerHTML : i.innerHTML;
            return Rt && Tt["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && C(Z, i.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + m), Vt && (m = P(m, gt, " "), m = P(m, yt, " "), m = P(m, bt, " ")), at && jt ? at.createHTML(m) : m
          }, n.setConfig = function(t) {
            ue(t), Bt = !0
          }, n.clearConfig = function() {
            le = null, Bt = !1
          }, n.isValidAttribute = function(t, e, r) {
            le || ue({});
            var i = vt(t),
              n = vt(e);
            return we(i, n, r)
          }, n.addHook = function(t, e) {
            "function" == typeof e && (ft[t] = ft[t] || [], b(ft[t], e))
          }, n.removeHook = function(t) {
            if (ft[t]) return y(ft[t])
          }, n.removeHooks = function(t) {
            ft[t] && (ft[t] = [])
          }, n.removeAllHooks = function() {
            ft = {}
          }, n
        }()
      }()
    },
    65772: (t, e, r) => {
      var i;
      ! function(n, a, s, o) {
        "use strict";
        var l, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = a.createElement("div"),
          u = "function",
          p = Math.round,
          d = Math.abs,
          f = Date.now;

        function m(t, e, r) {
          return setTimeout(E(t, r), e)
        }

        function v(t, e, r) {
          return !!Array.isArray(t) && (g(t, r[e], r), !0)
        }

        function g(t, e, r) {
          var i;
          if (t)
            if (t.forEach) t.forEach(e, r);
            else if (t.length !== o)
            for (i = 0; i < t.length;) e.call(r, t[i], i, t), i++;
          else
            for (i in t) t.hasOwnProperty(i) && e.call(r, t[i], i, t)
        }

        function y(t, e, r) {
          var i = "DEPRECATED METHOD: " + e + "\n" + r + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              r = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = n.console && (n.console.warn || n.console.log);
            return a && a.call(n.console, i, r), t.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(t) {
          if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (i !== o && null !== i)
              for (var n in i) i.hasOwnProperty(n) && (e[n] = i[n])
          }
          return e
        } : Object.assign;
        var b = y((function(t, e, r) {
            for (var i = Object.keys(e), n = 0; n < i.length;)(!r || r && t[i[n]] === o) && (t[i[n]] = e[i[n]]), n++;
            return t
          }), "extend", "Use `assign`."),
          x = y((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function S(t, e, r) {
          var i, n = e.prototype;
          (i = t.prototype = Object.create(n)).constructor = t, i._super = n, r && l(i, r)
        }

        function E(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function P(t, e) {
          return typeof t == u ? t.apply(e && e[0] || o, e) : t
        }

        function w(t, e) {
          return t === o ? e : t
        }

        function T(t, e, r) {
          g(_(e), (function(e) {
            t.addEventListener(e, r, !1)
          }))
        }

        function C(t, e, r) {
          g(_(e), (function(e) {
            t.removeEventListener(e, r, !1)
          }))
        }

        function M(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function A(t, e) {
          return t.indexOf(e) > -1
        }

        function _(t) {
          return t.trim().split(/\s+/g)
        }

        function k(t, e, r) {
          if (t.indexOf && !r) return t.indexOf(e);
          for (var i = 0; i < t.length;) {
            if (r && t[i][r] == e || !r && t[i] === e) return i;
            i++
          }
          return -1
        }

        function D(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function I(t, e, r) {
          for (var i = [], n = [], a = 0; a < t.length;) {
            var s = e ? t[a][e] : t[a];
            k(n, s) < 0 && i.push(t[a]), n[a] = s, a++
          }
          return r && (i = e ? i.sort((function(t, r) {
            return t[e] > r[e]
          })) : i.sort()), i
        }

        function F(t, e) {
          for (var r, i, n = e[0].toUpperCase() + e.slice(1), a = 0; a < h.length;) {
            if ((i = (r = h[a]) ? r + n : e) in t) return i;
            a++
          }
          return o
        }
        var O = 1;

        function L(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || n
        }
        var V = "ontouchstart" in n,
          R = F(n, "PointerEvent") !== o,
          B = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          z = "mouse",
          G = 25,
          j = 1,
          H = 4,
          W = 8,
          q = 1,
          U = 2,
          $ = 4,
          Y = 8,
          X = 16,
          K = U | $,
          Z = Y | X,
          J = K | Z,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var r = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            P(t.options.enable, [t]) && r.handler(e)
          }, this.init()
        }

        function rt(t, e, r) {
          var i = r.pointers.length,
            n = r.changedPointers.length,
            a = e & j && i - n == 0,
            s = e & (H | W) && i - n == 0;
          r.isFirst = !!a, r.isFinal = !!s, a && (t.session = {}), r.eventType = e,
            function(t, e) {
              var r = t.session,
                i = e.pointers,
                n = i.length;
              r.firstInput || (r.firstInput = it(e)), n > 1 && !r.firstMultiple ? r.firstMultiple = it(e) : 1 === n && (r.firstMultiple = !1);
              var a = r.firstInput,
                s = r.firstMultiple,
                l = s ? s.center : a.center,
                h = e.center = nt(i);
              e.timeStamp = f(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = lt(l, h), e.distance = ot(l, h),
                function(t, e) {
                  var r = e.center,
                    i = t.offsetDelta || {},
                    n = t.prevDelta || {},
                    a = t.prevInput || {};
                  e.eventType !== j && a.eventType !== H || (n = t.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, i = t.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), e.deltaX = n.x + (r.x - i.x), e.deltaY = n.y + (r.y - i.y)
                }(r, e), e.offsetDirection = st(e.deltaX, e.deltaY);
              var c, u, p = at(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = d(p.x) > d(p.y) ? p.x : p.y, e.scale = s ? (c = s.pointers, ot((u = i)[0], u[1], tt) / ot(c[0], c[1], tt)) : 1, e.rotation = s ? function(t, e) {
                  return lt(e[1], e[0], tt) + lt(t[1], t[0], tt)
                }(s.pointers, i) : 0, e.maxPointers = r.prevInput ? e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var r, i, n, a, s = t.lastInterval || e,
                    l = e.timeStamp - s.timeStamp;
                  if (e.eventType != W && (l > G || s.velocity === o)) {
                    var h = e.deltaX - s.deltaX,
                      c = e.deltaY - s.deltaY,
                      u = at(l, h, c);
                    i = u.x, n = u.y, r = d(u.x) > d(u.y) ? u.x : u.y, a = st(h, c), t.lastInterval = e
                  } else r = s.velocity, i = s.velocityX, n = s.velocityY, a = s.direction;
                  e.velocity = r, e.velocityX = i, e.velocityY = n, e.direction = a
                }(r, e);
              var m = t.element;
              M(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
            }(t, r), t.emit("hammer.input", r), t.recognize(r), t.session.prevInput = r
        }

        function it(t) {
          for (var e = [], r = 0; r < t.pointers.length;) e[r] = {
            clientX: p(t.pointers[r].clientX),
            clientY: p(t.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: f(),
            pointers: e,
            center: nt(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function nt(t) {
          var e = t.length;
          if (1 === e) return {
            x: p(t[0].clientX),
            y: p(t[0].clientY)
          };
          for (var r = 0, i = 0, n = 0; n < e;) r += t[n].clientX, i += t[n].clientY, n++;
          return {
            x: p(r / e),
            y: p(i / e)
          }
        }

        function at(t, e, r) {
          return {
            x: e / t || 0,
            y: r / t || 0
          }
        }

        function st(t, e) {
          return t === e ? q : d(t) >= d(e) ? t < 0 ? U : $ : e < 0 ? Y : X
        }

        function ot(t, e, r) {
          r || (r = Q);
          var i = e[r[0]] - t[r[0]],
            n = e[r[1]] - t[r[1]];
          return Math.sqrt(i * i + n * n)
        }

        function lt(t, e, r) {
          r || (r = Q);
          var i = e[r[0]] - t[r[0]],
            n = e[r[1]] - t[r[1]];
          return 180 * Math.atan2(n, i) / Math.PI
        }
        et.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(L(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(L(this.element), this.evWin, this.domHandler)
          }
        };
        var ht = {
            mousedown: j,
            mousemove: 2,
            mouseup: H
          },
          ct = "mousedown",
          ut = "mousemove mouseup";

        function pt() {
          this.evEl = ct, this.evWin = ut, this.pressed = !1, et.apply(this, arguments)
        }
        S(pt, et, {
          handler: function(t) {
            var e = ht[t.type];
            e & j && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: z,
              srcEvent: t
            }))
          }
        });
        var dt = {
            pointerdown: j,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          ft = {
            2: N,
            3: "pen",
            4: z,
            5: "kinect"
          },
          mt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function gt() {
          this.evEl = mt, this.evWin = vt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        n.MSPointerEvent && !n.PointerEvent && (mt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), S(gt, et, {
          handler: function(t) {
            var e = this.store,
              r = !1,
              i = t.type.toLowerCase().replace("ms", ""),
              n = dt[i],
              a = ft[t.pointerType] || t.pointerType,
              s = a == N,
              o = k(e, t.pointerId, "pointerId");
            n & j && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : n & (H | W) && (r = !0), o < 0 || (e[o] = t, this.callback(this.manager, n, {
              pointers: e,
              changedPointers: [t],
              pointerType: a,
              srcEvent: t
            }), r && e.splice(o, 1))
          }
        });
        var yt = {
          touchstart: j,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function bt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function xt(t, e) {
          var r = D(t.touches),
            i = D(t.changedTouches);
          return e & (H | W) && (r = I(r.concat(i), "identifier", !0)), [r, i]
        }
        S(bt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === j && (this.started = !0), this.started) {
              var r = xt.call(this, t, e);
              e & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: N,
                srcEvent: t
              })
            }
          }
        });
        var St = {
            touchstart: j,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Et = "touchstart touchmove touchend touchcancel";

        function Pt() {
          this.evTarget = Et, this.targetIds = {}, et.apply(this, arguments)
        }

        function wt(t, e) {
          var r = D(t.touches),
            i = this.targetIds;
          if (e & (2 | j) && 1 === r.length) return i[r[0].identifier] = !0, [r, r];
          var n, a, s = D(t.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(t) {
              return M(t.target, l)
            })), e === j)
            for (n = 0; n < a.length;) i[a[n].identifier] = !0, n++;
          for (n = 0; n < s.length;) i[s[n].identifier] && o.push(s[n]), e & (H | W) && delete i[s[n].identifier], n++;
          return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
        }
        S(Pt, et, {
          handler: function(t) {
            var e = St[t.type],
              r = wt.call(this, t, e);
            r && this.callback(this.manager, e, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: N,
              srcEvent: t
            })
          }
        });
        var Tt = 2500;

        function Ct() {
          et.apply(this, arguments);
          var t = E(this.handler, this);
          this.touch = new Pt(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Mt(t, e) {
          t & j ? (this.primaryTouch = e.changedPointers[0].identifier, At.call(this, e)) : t & (H | W) && At.call(this, e)
        }

        function At(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var r = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(r);
            var i = this.lastTouches;
            setTimeout((function() {
              var t = i.indexOf(r);
              t > -1 && i.splice(t, 1)
            }), Tt)
          }
        }

        function _t(t) {
          for (var e = t.srcEvent.clientX, r = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var n = this.lastTouches[i],
              a = Math.abs(e - n.x),
              s = Math.abs(r - n.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        S(Ct, et, {
          handler: function(t, e, r) {
            var i = r.pointerType == N,
              n = r.pointerType == z;
            if (!(n && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (i) Mt.call(this, e, r);
              else if (n && _t.call(this, r)) return;
              this.callback(t, e, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var kt = F(c.style, "touchAction"),
          Dt = kt !== o,
          It = "compute",
          Ft = "auto",
          Ot = "manipulation",
          Lt = "none",
          Vt = "pan-x",
          Rt = "pan-y",
          Bt = function() {
            if (!Dt) return !1;
            var t = {},
              e = n.CSS && n.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              t[r] = !e || n.CSS.supports("touch-action", r)
            })), t
          }();

        function Nt(t, e) {
          this.manager = t, this.set(e)
        }
        Nt.prototype = {
          set: function(t) {
            t == It && (t = this.compute()), Dt && this.manager.element.style && Bt[t] && (this.manager.element.style[kt] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                P(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (A(t, Lt)) return Lt;
                var e = A(t, Vt),
                  r = A(t, Rt);
                return e && r ? Lt : e || r ? e ? Vt : Rt : A(t, Ot) ? Ot : Ft
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              r = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var i = this.actions,
                n = A(i, Lt) && !Bt[Lt],
                a = A(i, Rt) && !Bt[Rt],
                s = A(i, Vt) && !Bt[Vt];
              if (n) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  h = t.deltaTime < 250;
                if (o && l && h) return
              }
              if (!s || !a) return n || a && r & K || s && r & Z ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var zt = 1,
          Gt = 32;

        function jt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = zt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Wt(t) {
          return t == X ? "down" : t == Y ? "up" : t == U ? "left" : t == $ ? "right" : ""
        }

        function qt(t, e) {
          var r = e.manager;
          return r ? r.get(t) : t
        }

        function Ut() {
          jt.apply(this, arguments)
        }

        function $t() {
          Ut.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Yt() {
          Ut.apply(this, arguments)
        }

        function Xt() {
          jt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Kt() {
          Ut.apply(this, arguments)
        }

        function Zt() {
          Ut.apply(this, arguments)
        }

        function Jt() {
          jt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = w(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = l({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (R ? gt : B ? Pt : V ? Ct : pt))(this, rt), this.touchAction = new Nt(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var r, i = t.element;
          i.style && (g(t.options.cssProps, (function(n, a) {
            r = F(i.style, a), e ? (t.oldCssProps[r] = i.style[r], i.style[r] = n) : i.style[r] = t.oldCssProps[r] || ""
          })), e || (t.oldCssProps = {}))
        }
        jt.prototype = {
          defaults: {},
          set: function(t) {
            return l(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (v(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = qt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return v(t, "dropRecognizeWith", this) || (t = qt(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (v(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === k(e, t = qt(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (v(t, "dropRequireFailure", this)) return this;
            t = qt(t, this);
            var e = k(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e = this,
              r = this.state;

            function i(r) {
              e.manager.emit(r, t)
            }
            r < 8 && i(e.options.event + Ht(r)), i(e.options.event), t.additionalEvent && i(t.additionalEvent), r >= 8 && i(e.options.event + Ht(r))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = Gt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (Gt | zt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = l({}, t);
            if (!P(this.options.enable, [this, e])) return this.reset(), void(this.state = Gt);
            56 & this.state && (this.state = zt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, S(Ut, jt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              r = t.eventType,
              i = 6 & e,
              n = this.attrTest(t);
            return i && (r & W || !n) ? 16 | e : i || n ? r & H ? 8 | e : 2 & e ? 4 | e : 2 : Gt
          }
        }), S($t, Ut, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & K && e.push(Rt), t & Z && e.push(Vt), e
          },
          directionTest: function(t) {
            var e = this.options,
              r = !0,
              i = t.distance,
              n = t.direction,
              a = t.deltaX,
              s = t.deltaY;
            return n & e.direction || (e.direction & K ? (n = 0 === a ? q : a < 0 ? U : $, r = a != this.pX, i = Math.abs(t.deltaX)) : (n = 0 === s ? q : s < 0 ? Y : X, r = s != this.pY, i = Math.abs(t.deltaY))), t.direction = n, r && i > e.threshold && n & e.direction
          },
          attrTest: function(t) {
            return Ut.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Wt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), S(Yt, Ut, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Lt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), S(Xt, jt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Ft]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              n = t.deltaTime > e.time;
            if (this._input = t, !i || !r || t.eventType & (H | W) && !n) this.reset();
            else if (t.eventType & j) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
          }
        }), S(Kt, Ut, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Lt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), S(Zt, Ut, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: K | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return $t.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, r = this.options.direction;
            return r & (K | Z) ? e = t.overallVelocity : r & K ? e = t.overallVelocityX : r & Z && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && r & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && d(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Wt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), S(Jt, jt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [Ot]
          },
          process: function(t) {
            var e = this.options,
              r = t.pointers.length === e.pointers,
              i = t.distance < e.threshold,
              n = t.deltaTime < e.time;
            if (this.reset(), t.eventType & j && 0 === this.count) return this.failTimeout();
            if (i && n && r) {
              if (t.eventType != H) return this.failTimeout();
              var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                s = !this.pCenter || ot(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return Gt
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Gt
            }), this.options.interval, this), Gt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qt.VERSION = "2.0.7", Qt.defaults = {
          domEvents: !1,
          touchAction: It,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Kt, {
              enable: !1
            }],
            [Yt, {
                enable: !1
              },
              ["rotate"]
            ],
            [Zt, {
              direction: K
            }],
            [$t, {
                direction: K
              },
              ["swipe"]
            ],
            [Jt],
            [Jt, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Xt]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, te.prototype = {
          set: function(t) {
            return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var r;
              this.touchAction.preventDefaults(t);
              var i = this.recognizers,
                n = e.curRecognizer;
              (!n || n && 8 & n.state) && (n = e.curRecognizer = null);
              for (var a = 0; a < i.length;) r = i[a], 2 === e.stopped || n && r != n && !r.canRecognizeWith(n) ? r.reset() : r.recognize(t), !n && 14 & r.state && (n = e.curRecognizer = r), a++
            }
          },
          get: function(t) {
            if (t instanceof jt) return t;
            for (var e = this.recognizers, r = 0; r < e.length; r++)
              if (e[r].options.event == t) return e[r];
            return null
          },
          add: function(t) {
            if (v(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (v(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                r = k(e, t); - 1 !== r && (e.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== o && e !== o) {
              var r = this.handlers;
              return g(_(t), (function(t) {
                r[t] = r[t] || [], r[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var r = this.handlers;
              return g(_(t), (function(t) {
                e ? r[t] && r[t].splice(k(r[t], e), 1) : delete r[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var r = a.createEvent("Event");
              r.initEvent(t, !0, !0), r.gesture = e, e.target.dispatchEvent(r)
            }(t, e);
            var r = this.handlers[t] && this.handlers[t].slice();
            if (r && r.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var i = 0; i < r.length;) r[i](e), i++
            }
          },
          destroy: function() {
            this.element && ee(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qt, {
          INPUT_START: j,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: zt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Gt,
          DIRECTION_NONE: q,
          DIRECTION_LEFT: U,
          DIRECTION_RIGHT: $,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: X,
          DIRECTION_HORIZONTAL: K,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: te,
          Input: et,
          TouchAction: Nt,
          TouchInput: Pt,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: Ct,
          SingleTouchInput: bt,
          Recognizer: jt,
          AttrRecognizer: Ut,
          Tap: Jt,
          Pan: $t,
          Swipe: Zt,
          Pinch: Yt,
          Rotate: Kt,
          Press: Xt,
          on: T,
          off: C,
          each: g,
          merge: x,
          extend: b,
          assign: l,
          inherit: S,
          bindFn: E,
          prefixed: F
        }), (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = Qt, (i = function() {
          return Qt
        }.call(e, r, e, t)) === o || (t.exports = i)
      }(window, document)
    },
    97064: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => n,
        s: () => i
      });
      var i = function() {},
        n = function() {}
    },
    31580: (t, e, r) => {
      var i = r(36056).Symbol;
      t.exports = i
    },
    95992: (t, e, r) => {
      var i = r(31580),
        n = r(78584),
        a = r(49176),
        s = i ? i.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? n(t) : a(t)
      }
    },
    96096: (t, e, r) => {
      var i = r(57520),
        n = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, i(t) + 1).replace(n, "") : t
      }
    },
    81044: (t, e, r) => {
      var i = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      t.exports = i
    },
    78584: (t, e, r) => {
      var i = r(31580),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i ? i.toStringTag : void 0;
      t.exports = function(t) {
        var e = a.call(t, o),
          r = t[o];
        try {
          t[o] = void 0;
          var i = !0
        } catch (t) {}
        var n = s.call(t);
        return i && (e ? t[o] = r : delete t[o]), n
      }
    },
    49176: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    36056: (t, e, r) => {
      var i = r(81044),
        n = "object" == typeof self && self && self.Object === Object && self,
        a = i || n || Function("return this")();
      t.exports = a
    },
    57520: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var r = t.length; r-- && e.test(t.charAt(r)););
        return r
      }
    },
    69760: (t, e, r) => {
      var i = r(89048),
        n = r(12721),
        a = r(80088),
        s = Math.max,
        o = Math.min;
      t.exports = function(t, e, r) {
        var l, h, c, u, p, d, f = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var r = l,
            i = h;
          return l = h = void 0, f = e, u = t.apply(i, r)
        }

        function b(t) {
          var r = t - d;
          return void 0 === d || r >= e || r < 0 || v && t - f >= c
        }

        function x() {
          var t = n();
          if (b(t)) return S(t);
          p = setTimeout(x, function(t) {
            var r = e - (t - d);
            return v ? o(r, c - (t - f)) : r
          }(t))
        }

        function S(t) {
          return p = void 0, g && l ? y(t) : (l = h = void 0, u)
        }

        function E() {
          var t = n(),
            r = b(t);
          if (l = arguments, h = this, d = t, r) {
            if (void 0 === p) return function(t) {
              return f = t, p = setTimeout(x, e), m ? y(t) : u
            }(d);
            if (v) return clearTimeout(p), p = setTimeout(x, e), y(d)
          }
          return void 0 === p && (p = setTimeout(x, e)), u
        }
        return e = a(e) || 0, i(r) && (m = !!r.leading, c = (v = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : c, g = "trailing" in r ? !!r.trailing : g), E.cancel = function() {
          void 0 !== p && clearTimeout(p), f = 0, l = d = h = p = void 0
        }, E.flush = function() {
          return void 0 === p ? u : S(n())
        }, E
      }
    },
    89048: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    72316: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    99464: (t, e, r) => {
      var i = r(95992),
        n = r(72316);
      t.exports = function(t) {
        return "symbol" == typeof t || n(t) && "[object Symbol]" == i(t)
      }
    },
    12721: (t, e, r) => {
      var i = r(36056);
      t.exports = function() {
        return i.Date.now()
      }
    },
    80088: (t, e, r) => {
      var i = r(96096),
        n = r(89048),
        a = r(99464),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        h = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (a(t)) return NaN;
        if (n(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = n(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = i(t);
        var r = o.test(t);
        return r || l.test(t) ? h(t.slice(2), r ? 2 : 8) : s.test(t) ? NaN : +t
      }
    },
    86352: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var r, i, n = t.length;
          for (r = 0; r < n; r += 1)
            for (var a in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var r, i = 0,
                n = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (i = 0; i < e; i += 1) n.push(r);
              return n
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
              return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, r = createSizedArray(t.length),
              i = t.length;
            for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
            return r
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, r, i) {
          this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, r, i) {
          this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, r) {
          this.type = t, this.firstFrame = e, this.totalFrames = r
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, r) {
          var i, n, a, s, o, l, h, c;
          switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), c = r * (1 - (1 - o) * e), s % 6) {
            case 0:
              i = r, n = c, a = l;
              break;
            case 1:
              i = h, n = r, a = l;
              break;
            case 2:
              i = l, n = r, a = c;
              break;
            case 3:
              i = l, n = h, a = r;
              break;
            case 4:
              i = c, n = l, a = r;
              break;
            case 5:
              i = r, n = l, a = h
          }
          return [i, n, a]
        }

        function RGBtoHSV(t, e, r) {
          var i, n = Math.max(t, e, r),
            a = Math.min(t, e, r),
            s = n - a,
            o = 0 === n ? 0 : s / n,
            l = n / 255;
          switch (n) {
            case a:
              i = 0;
              break;
            case t:
              i = e - r + s * (e < r ? 6 : 0), i /= 6 * s;
              break;
            case e:
              i = r - t + 2 * s, i /= 6 * s;
              break;
            case r:
              i = t - e + 4 * s, i /= 6 * s
          }
          return [i, o, l]
        }

        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var t, e, r = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, i) {
              return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, r = 1,
              i = [],
              n = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              a = {
                postMessage: function(t) {
                  n.onmessage({
                    data: t
                  })
                }
              };

            function s() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    i = URL.createObjectURL(r);
                  return new Worker(i)
                }
                return t = e, n
              }((function(t) {
                if (a.dataManager || (a.dataManager = function() {
                    function t(n, a) {
                      var s, o, l, h, c, u, p, d = n.length;
                      for (o = 0; o < d; o += 1)
                        if ("ks" in (s = n[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var f = s.masksProperties;
                            for (h = f.length, l = 0; l < h; l += 1)
                              if (f[l].pt.k.i) i(f[l].pt.k);
                              else
                                for (u = f[l].pt.k.length, c = 0; c < u; c += 1) f[l].pt.k[c].s && i(f[l].pt.k[c].s[0]), f[l].pt.k[c].e && i(f[l].pt.k[c].e[0])
                          }
                          0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && (0 === (p = s).t.a.length && p.t.p)
                        }
                    }

                    function e(t, e) {
                      var r = function(t, e) {
                        for (var r = 0, i = e.length; r < i;) {
                          if (e[r].id === t) return e[r];
                          r += 1
                        }
                        return null
                      }(t, e);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(t) {
                      var e, n, a;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) i(t[e].ks.k);
                          else
                            for (a = t[e].ks.k.length, n = 0; n < a; n += 1) t[e].ks.k[n].s && i(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && i(t[e].ks.k[n].e[0]);
                      else "gr" === t[e].ty && r(t[e].it)
                    }

                    function i(t) {
                      var e, r = t.i.length;
                      for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function n(t, e) {
                      var r = e ? e.split(".") : [100, 100, 100];
                      return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                    }
                    var a, s = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, r, i, n = t.length;
                          for (e = 0; e < n; e += 1) 5 === t[e].ty && (void 0, i = (r = t[e]).t.d, r.t.d = {
                            k: [{
                              s: i,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (n(t, r.v) && (e(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(t) {
                        if (t.chars && !n(a, t.v)) {
                          var e, i = t.chars.length;
                          for (e = 0; e < i; e += 1) {
                            var s = t.chars[e];
                            s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (s.data.shapes.push({
                              ty: "no"
                            }), s.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, r, i = t.length;
                          for (e = 0; e < i; e += 1) 5 === t[e].ty && (r = void 0, "number" == typeof(r = t[e].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (n(t, r.v) && (e(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && e(r.assets[i].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var r, i, n, a = t.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                              for (n = t[r].c.k.length, i = 0; i < n; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                        }

                        function r(t) {
                          var r, i = t.length;
                          for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                        }
                        return function(e) {
                          if (n(t, e.v) && (r(e.layers), e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }(),
                      c = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var r, i, n;
                          for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty)
                              if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                              else
                                for (n = t[r].ks.k.length, i = 0; i < n; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                          else "gr" === t[r].ty && e(t[r].it)
                        }

                        function r(t) {
                          var r, i, n, a, s, o, l = t.length;
                          for (i = 0; i < l; i += 1) {
                            if ((r = t[i]).hasMask) {
                              var h = r.masksProperties;
                              for (a = h.length, n = 0; n < a; n += 1)
                                if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                else
                                  for (o = h[n].pt.k.length, s = 0; s < o; s += 1) h[n].pt.k[s].s && (h[n].pt.k[s].s[0].c = h[n].cl), h[n].pt.k[s].e && (h[n].pt.k[s].e[0].c = h[n].cl)
                            }
                            4 === r.ty && e(r.shapes)
                          }
                        }
                        return function(e) {
                          if (n(t, e.v) && (r(e.layers), e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                          }
                        }
                      }();
                    var u = {
                      completeData: function(r) {
                        r.__complete || (h(r), s(r), o(r), l(r), c(r), t(r.layers, r.assets), function(r, i) {
                          if (r) {
                            var n = 0,
                              a = r.length;
                            for (n = 0; n < a; n += 1) 1 === r[n].t && (r[n].data.layers = e(r[n].data.refId, i), t(r[n].data.layers, i))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return u.checkColors = h, u.checkChars = o, u.checkPathProperties = l, u.checkShapes = c, u.completeLayers = t, u
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, r, i, n) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (t) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = t(s), i(a);
                            else try {
                              a = t(s), i(a)
                            } catch (t) {
                              n && n(t)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          s.open(["G", "E", "T"].join(""), r + "/" + e, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  r = e.id,
                  n = i[r];
                i[r] = null, "success" === e.status ? n.onComplete(e.payload) : n.onError && n.onError()
              })
            }

            function o(t, e) {
              var n = "processId_" + (r += 1);
              return i[n] = {
                onComplete: t,
                onError: e
              }, n
            }
            return {
              loadAnimation: function(t, r, i) {
                s();
                var n = o(r, i);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              loadData: function(t, r, i) {
                s();
                var n = o(r, i);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              completeAnimation: function(t, r, i) {
                s();
                var n = o(r, i);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: n
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i(t, e, r) {
              var i = "";
              if (t.e) i = t.p;
              else if (e) {
                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = e + n
              } else i = r, i += t.u ? t.u : "", i += t.p;
              return i
            }

            function n(t) {
              var e = 0,
                r = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                }.bind(this), 50)
            }

            function a(t) {
              var e = {
                  assetData: t
                },
                r = i(t, this.assetsPath, this.path);
              return dataManager.loadData(r, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function s() {
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(t, e) {
                var r;
                this.imagesLoadedCb = e;
                var i = t.length;
                for (r = 0; r < i; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, r = this.images.length; e < r;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var r = i(e, this.assetsPath, this.path),
                  n = createTag("img");
                n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), n.src = r;
                var a = {
                  img: n,
                  assetData: e
                };
                return a
              },
              createImageData: function(e) {
                var r = i(e, this.assetsPath, this.path),
                  n = createNS("image");
                isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                var a = {
                  img: n,
                  assetData: e
                };
                return a
              },
              imageLoaded: e,
              footageLoaded: r,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, r = t.split("\r\n"), i = {}, n = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (i[e[0]] = e[1].trim(), n += 1);
              if (0 === n) throw new Error;
              return i
            }
            return function(e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var n = e[i],
                  a = {
                    time: n.tm,
                    duration: n.dr
                  };
                try {
                  a.payload = JSON.parse(e[i].cm)
                } catch (r) {
                  try {
                    a.payload = t(e[i].cm)
                  } catch (t) {
                    a.payload = {
                      name: e[i].cm
                    }
                  }
                }
                r.push(a)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var t in renderers)
            if (renderers[t]) return t;
          return ""
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var r = getRenderer(e);
          this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var r = {
              wrapper: t,
              animationData: e
            },
            i = t.attributes;
          r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
          "false" === n ? r.loop = !1 : "true" === n ? r.loop = !0 : "" !== n && (r.loop = parseInt(n, 10));
          var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, r, i = this.animationData.layers,
            n = i.length,
            a = t.layers,
            s = a.length;
          for (r = 0; r < s; r += 1)
            for (e = 0; e < n;) {
              if (i[e].id === a[r].id) {
                i[e] = a[r];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var r = "number" == typeof t ? t : void 0,
            i = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, r = 0; r < this.markers.length; r += 1)
            if ((e = this.markers[r]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var n = this.getMarkerData(t);
              n && this.goToAndStop(n.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
          if (!r || this.name === r) {
            var i = Number(t);
            if (isNaN(i)) {
              var n = this.getMarkerData(t);
              n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
            } else this.goToAndStop(i, e, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              r = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) this.segments.push(t[r])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, r = this.assets.length; e < r;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, r)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              r = 0,
              i = 0,
              n = 0,
              a = !0,
              s = !1;

            function o(t) {
              for (var r = 0, n = t.target; r < i;) e[r].animation === n && (e.splice(r, 1), r -= 1, i -= 1, n.isPaused || c()), r += 1
            }

            function l(t, r) {
              if (!t) return null;
              for (var n = 0; n < i;) {
                if (e[n].elem === t && null !== e[n].elem) return e[n].animation;
                n += 1
              }
              var a = new AnimationItem;
              return u(a, t), a.setData(t, r), a
            }

            function h() {
              n += 1, f()
            }

            function c() {
              n -= 1
            }

            function u(t, r) {
              t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", c), e.push({
                elem: r,
                animation: t
              }), i += 1
            }

            function p(t) {
              var o, l = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
              r = t, n && !s ? window.requestAnimationFrame(p) : a = !0
            }

            function d(t) {
              r = t, window.requestAnimationFrame(p)
            }

            function f() {
              !s && n && a && (window.requestAnimationFrame(d), a = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return u(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, r) {
              var n;
              for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r)
            }, t.setDirection = function(t, r) {
              var n;
              for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r)
            }, t.play = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.play(t)
            }, t.pause = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.pause(t)
            }, t.stop = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.stop(t)
            }, t.togglePause = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, r) {
              var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = n.length;
              for (i = 0; i < a; i += 1) r && n[i].setAttribute("data-bm-type", r), l(n[i], t);
              if (e && 0 === a) {
                r || (r = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < i; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, r, n) {
              var a;
              for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, n)
            }, t.destroy = function(t) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
            }, t.freeze = function() {
              s = !0
            }, t.unfreeze = function() {
              s = !1, f()
            }, t.setVolume = function(t, r) {
              var n;
              for (n = 0; n < i; n += 1) e[n].animation.setVolume(t, r)
            }, t.mute = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.mute(t)
            }, t.unmute = function(t) {
              var r;
              for (r = 0; r < i; r += 1) e[r].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, r = e.length,
                i = [];
              for (t = 0; t < r; t += 1) i.push(e[t].animation);
              return i
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, r, i, n, a) {
                  var s = a || ("bez_" + t + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                  if (e[s]) return e[s];
                  var o = new c([t, r, i, n]);
                  return e[s] = o, o
                }
              },
              e = {},
              r = 11,
              i = 1 / (r - 1),
              n = "function" == typeof Float32Array;

            function a(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, r) {
              return ((a(e, r) * t + s(e, r)) * t + o(e)) * t
            }

            function h(t, e, r) {
              return 3 * a(e, r) * t * t + 2 * s(e, r) * t + o(e)
            }

            function c(t) {
              this._p = t, this._mSampleValues = n ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return c.prototype = {
              get: function(t) {
                var e = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  n = this._p[3];
                return this._precomputed || this._precompute(), e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, n)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                this._precomputed = !0, t === e && r === i || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], n = 0; n < r; ++n) this._mSampleValues[n] = l(n * i, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], n = this._p[2], a = this._mSampleValues, s = 0, o = 1, c = r - 1; o !== c && a[o] <= t; ++o) s += i;
                var u = s + (t - a[--o]) / (a[o + 1] - a[o]) * i,
                  p = h(u, e, n);
                return p >= .001 ? function(t, e, r, i) {
                  for (var n = 0; n < 4; ++n) {
                    var a = h(e, r, i);
                    if (0 === a) return e;
                    e -= (l(e, r, i) - t) / a
                  }
                  return e
                }(t, u, e, n) : 0 === p ? u : function(t, e, r, i, n) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = e + (r - e) / 2, i, n) - t) > 0 ? r = s : e = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(t, s, s + i, e, n)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, r) {
            var i = 0,
              n = t,
              a = createSizedArray(n);
            return {
              newElement: function() {
                return i ? a[i -= 1] : e()
              },
              release: function(t) {
                i === n && (a = pooling.double(a), n *= 2), r && r(t), a[i] = t, i += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, r, i, n, a) {
            var s = t * i + e * n + r * a - n * i - a * t - r * e;
            return s > -.001 && s < .001
          }
          var r = function(t, e, r, i) {
            var n, a, s, o, l, h, c = getDefaultCurveSegments(),
              u = 0,
              p = [],
              d = [],
              f = bezierLengthPool.newElement();
            for (s = r.length, n = 0; n < c; n += 1) {
              for (l = n / (c - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * i[a] + bmPow(l, 3) * e[a], p[a] = o, null !== d[a] && (h += bmPow(p[a] - d[a], 2)), d[a] = p[a];
              h && (u += h = bmSqrt(h)), f.percents[n] = l, f.lengths[n] = u
            }
            return f.addedLength = u, f
          };

          function i(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function n(t, e) {
            this.partialLength = t, this.point = e
          }
          var a, s = (a = {}, function(t, r, s, o) {
            var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var h, c, u, p, d, f, m, v = getDefaultCurveSegments(),
                g = 0,
                y = null;
              2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (v = 2);
              var b = new i(v);
              for (u = s.length, h = 0; h < v; h += 1) {
                for (m = createSizedArray(u), d = h / (v - 1), f = 0, c = 0; c < u; c += 1) p = bmPow(1 - d, 3) * t[c] + 3 * bmPow(1 - d, 2) * d * (t[c] + s[c]) + 3 * (1 - d) * bmPow(d, 2) * (r[c] + o[c]) + bmPow(d, 3) * r[c], m[c] = p, null !== y && (f += bmPow(m[c] - y[c], 2));
                g += f = bmSqrt(f), b.points[h] = new n(f, m), y = m
              }
              b.segmentLength = g, a[l] = b
            }
            return a[l]
          });

          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              n = r.length,
              a = bmFloor((n - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (a === n - 1 || 0 === a || s === i[a]) return r[a];
            for (var l = i[a] > s ? -1 : 1, h = !0; h;)
              if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), h = !1) : a += l, a < 0 || a >= n - 1) {
                if (a === n - 1) return r[a];
                h = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, i = segmentsLengthPool.newElement(),
                n = t.c,
                a = t.v,
                s = t.o,
                o = t.i,
                l = t._length,
                h = i.lengths,
                c = 0;
              for (e = 0; e < l - 1; e += 1) h[e] = r(a[e], a[e + 1], s[e], o[e + 1]), c += h[e].addedLength;
              return n && l && (h[e] = r(a[e], a[0], s[e], o[0]), c += h[e].addedLength), i.totalLength = c, i
            },
            getNewSegment: function(e, r, i, n, a, s, h) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var c, u = o(a, h),
                p = o(s = s > 1 ? 1 : s, h),
                d = e.length,
                f = 1 - u,
                m = 1 - p,
                v = f * f * f,
                g = u * f * f * 3,
                y = u * u * f * 3,
                b = u * u * u,
                x = f * f * m,
                S = u * f * m + f * u * m + f * f * p,
                E = u * u * m + f * u * p + u * f * p,
                P = u * u * p,
                w = f * m * m,
                T = u * m * m + f * p * m + f * m * p,
                C = u * p * m + f * p * p + u * m * p,
                M = u * p * p,
                A = m * m * m,
                _ = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                D = p * p * p;
              for (c = 0; c < d; c += 1) l[4 * c] = t.round(1e3 * (v * e[c] + g * i[c] + y * n[c] + b * r[c])) / 1e3, l[4 * c + 1] = t.round(1e3 * (x * e[c] + S * i[c] + E * n[c] + P * r[c])) / 1e3, l[4 * c + 2] = t.round(1e3 * (w * e[c] + T * i[c] + C * n[c] + M * r[c])) / 1e3, l[4 * c + 3] = t.round(1e3 * (A * e[c] + _ * i[c] + k * n[c] + D * r[c])) / 1e3;
              return l
            },
            getPointInSegment: function(e, r, i, n, a, s) {
              var l = o(a, s),
                h = 1 - l;
              return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * i[0] + (l * l * h + h * l * l + l * h * l) * n[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * i[1] + (l * l * h + h * l * l + l * h * l) * n[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function(r, i, n, a, s, o, l, h, c) {
              if (0 === n && 0 === o && 0 === c) return e(r, i, a, s, l, h);
              var u, p = t.sqrt(t.pow(a - r, 2) + t.pow(s - i, 2) + t.pow(o - n, 2)),
                d = t.sqrt(t.pow(l - r, 2) + t.pow(h - i, 2) + t.pow(c - n, 2)),
                f = t.sqrt(t.pow(l - a, 2) + t.pow(h - s, 2) + t.pow(c - o, 2));
              return (u = p > d ? p > f ? p - d - f : f - d - p : f > d ? f - d - p : d - p - f) > -1e-4 && u < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var n, a, s, o, l, h, c, u, p, d = e.lastIndex, f = d, m = this.keyframes.length - 1, v = !0; v;) {
            if (n = this.keyframes[f], a = this.keyframes[f + 1], f === m - 1 && t >= a.t - i) {
              n.h && (n = a), d = 0;
              break
            }
            if (a.t - i > t) {
              d = f;
              break
            }
            f < m - 1 ? f += 1 : (d = 0, v = !1)
          }
          s = this.keyframesMetadata[f] || {};
          var g, y = a.t - i,
            b = n.t - i;
          if (n.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
            var x = s.bezierData;
            if (t >= y || t < b) {
              var S = t >= y ? x.points.length - 1 : 0;
              for (l = x.points[S].point.length, o = 0; o < l; o += 1) r[o] = x.points[S].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, s.__fnct = p), h = p((t - b) / (y - b));
              var E, P = x.segmentLength * h,
                w = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastAddedLength : 0;
              for (u = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastPoint : 0, v = !0, c = x.points.length; v;) {
                if (w += x.points[u].partialLength, 0 === P || 0 === h || u === x.points.length - 1) {
                  for (l = x.points[u].point.length, o = 0; o < l; o += 1) r[o] = x.points[u].point[o];
                  break
                }
                if (P >= w && P < w + x.points[u + 1].partialLength) {
                  for (E = (P - w) / x.points[u + 1].partialLength, l = x.points[u].point.length, o = 0; o < l; o += 1) r[o] = x.points[u].point[o] + (x.points[u + 1].point[o] - x.points[u].point[o]) * E;
                  break
                }
                u < c - 1 ? u += 1 : v = !1
              }
              e._lastPoint = u, e._lastAddedLength = w - x.points[u].partialLength, e._lastKeyframeIndex = f
            }
          } else {
            var T, C, M, A, _;
            if (m = n.s.length, g = a.s || n.e, this.sh && 1 !== n.h) t >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : t <= b ? (r[0] = n.s[0], r[1] = n.s[1], r[2] = n.s[2]) : quaternionToEuler(r, slerp(createQuaternion(n.s), createQuaternion(g), (t - b) / (y - b)));
            else
              for (f = 0; f < m; f += 1) 1 !== n.h && (t >= y ? h = 1 : t < b ? h = 0 : (n.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? p = s.__fnct[f] : (T = void 0 === n.o.x[f] ? n.o.x[0] : n.o.x[f], C = void 0 === n.o.y[f] ? n.o.y[0] : n.o.y[f], M = void 0 === n.i.x[f] ? n.i.x[0] : n.i.x[f], A = void 0 === n.i.y[f] ? n.i.y[0] : n.i.y[f], p = BezierFactory.getBezierEasing(T, C, M, A).get, s.__fnct[f] = p)) : s.__fnct ? p = s.__fnct : (T = n.o.x, C = n.o.y, M = n.i.x, A = n.i.y, p = BezierFactory.getBezierEasing(T, C, M, A).get, n.keyframeMetadata = p), h = p((t - b) / (y - b)))), g = a.s || n.e, _ = 1 === n.h ? n.s[f] : n.s[f] + (g[f] - n.s[f]) * h, "multidimensional" === this.propType ? r[f] = _ : r = _
          }
          return e.lastIndex = d, r
        }

        function slerp(t, e, r) {
          var i, n, a, s, o, l = [],
            h = t[0],
            c = t[1],
            u = t[2],
            p = t[3],
            d = e[0],
            f = e[1],
            m = e[2],
            v = e[3];
          return (n = h * d + c * f + u * m + p * v) < 0 && (n = -n, d = -d, f = -f, m = -m, v = -v), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * h + o * d, l[1] = s * c + o * f, l[2] = s * u + o * m, l[3] = s * p + o * v, l
        }

        function quaternionToEuler(t, e) {
          var r = e[0],
            i = e[1],
            n = e[2],
            a = e[3],
            s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
            o = Math.asin(2 * r * i + 2 * n * a),
            l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
          t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            r = t[1] * degToRads,
            i = t[2] * degToRads,
            n = Math.cos(e / 2),
            a = Math.cos(r / 2),
            s = Math.cos(i / 2),
            o = Math.sin(e / 2),
            l = Math.sin(r / 2),
            h = Math.sin(i / 2);
          return [o * l * s + n * a * h, o * a * s + n * l * h, n * l * s - o * a * h, n * a * s - o * l * h]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var i = this.interpolateValue(t, this._caching);
            this.pv = i
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, r, i) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, r, i) {
          var n;
          this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = e.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), n = 0; n < a; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, r, i) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, r, i) {
          var n;
          this.propType = "multidimensional";
          var a, s, o, l, h = e.k.length;
          for (n = 0; n < h - 1; n += 1) e.k[n].to && e.k[n].s && e.k[n + 1] && e.k[n + 1].s && (a = e.k[n].s, s = e.k[n + 1].s, o = e.k[n].to, l = e.k[n].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (e.k[n].to = null, e.k[n].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (e.k[n].to = null, e.k[n].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var c = e.k[0].s.length;
          for (this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c), n = 0; n < c; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", c)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, r, i, n) {
            var a;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) a = new MultiDimensionalProperty(t, e, i, n);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(t, e, i, n);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(t, e, i, n)
              } else a = new ValueProperty(t, e, i, n);
            return a.effectsSequence.length && n.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, r, i, n) {
          var a;
          switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = []
          }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, r, i, n, a, s, o) {
          this.setXYAt(t, e, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            r = this.o,
            i = this.i,
            n = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = n; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, r = factory.newElement(),
              i = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, r = t._length;
              for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, r) {
              var i, n, a, s, o, l, h, c, u, p = r.lastIndex,
                d = this.keyframes;
              if (t < d[0].t - this.offsetTime) i = d[0].s[0], a = !0, p = 0;
              else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], a = !0;
              else {
                for (var f, m, v, g = p, y = d.length - 1, b = !0; b && (f = d[g], !((m = d[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : b = !1;
                if (v = this.keyframesMetadata[g] || {}, p = g, !(a = 1 === f.h)) {
                  if (t >= m.t - this.offsetTime) c = 1;
                  else if (t < f.t - this.offsetTime) c = 0;
                  else {
                    var x;
                    v.__fnct ? x = v.__fnct : (x = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, v.__fnct = x), c = x((t - (f.t - this.offsetTime)) / (m.t - this.offsetTime - (f.t - this.offsetTime)))
                  }
                  n = m.s ? m.s[0] : f.e[0]
                }
                i = f.s[0]
              }
              for (l = e._length, h = i.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < h; o += 1) u = a ? i.i[s][o] : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * c, e.i[s][o] = u, u = a ? i.o[s][o] : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * c, e.o[s][o] = u, u = a ? i.v[s][o] : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * c, e.v[s][o] = u
            }

            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                n = this._caching.lastFrame;
              return n !== t && (n < r && e < r || n > i && e > i) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function i() {
              this.paths = this.localShapeCollection
            }

            function n(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r, i = t._length;
                for (r = 0; r < i; r += 1)
                  if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(t, e, r) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var n = 3 === r ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, n, a) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? n.pt.k : n.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            s.prototype.interpolateShape = e, s.prototype.getValue = a, s.prototype.setVValue = n, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = o;
            var h = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      r = this.p.v[1],
                      i = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = e, s.v[0][1] = r - n, s.v[1][0] = a ? e + i : e - i, s.v[1][1] = r, s.v[2][0] = e, s.v[2][1] = r + n, s.v[3][0] = a ? e - i : e + i, s.v[3][1] = r, s.i[0][0] = a ? e - i * t : e + i * t, s.i[0][1] = r - n, s.i[1][0] = a ? e + i : e - i, s.i[1][1] = r - n * t, s.i[2][0] = a ? e + i * t : e - i * t, s.i[2][1] = r + n, s.i[3][0] = a ? e - i : e + i, s.i[3][1] = r + n * t, s.o[0][0] = a ? e + i * t : e - i * t, s.o[0][1] = r - n, s.o[1][0] = a ? e + i : e - i, s.o[1][1] = r + n * t, s.o[2][0] = a ? e - i * t : e + i * t, s.o[2][1] = r + n, s.o[3][0] = a ? e - i : e + i, s.o[3][1] = r - n * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              c = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, r, i, n = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / n,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      c = this.is.v,
                      u = 2 * Math.PI * o / (2 * n),
                      p = 2 * Math.PI * l / (2 * n),
                      d = -Math.PI / 2;
                    d += this.r.v;
                    var f = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < n; t += 1) {
                      r = s ? h : c, i = s ? u : p;
                      var m = (e = s ? o : l) * Math.cos(d),
                        v = e * Math.sin(d),
                        g = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                        y = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                      m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - g * i * r * f, v - y * i * r * f, m + g * i * r * f, v + y * i * r * f, t, !0), s = !s, d += a * f
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      r = 2 * Math.PI / e,
                      i = this.or.v,
                      n = this.os.v,
                      a = 2 * Math.PI * i / (4 * e),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = i * Math.cos(s),
                        h = i * Math.sin(s),
                        c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * a * n * o, h - u * a * n * o, l + c * a * n * o, h + u * a * n * o, t, !0), s += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              u = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      n = bmMin(r, i, this.r.v),
                      a = n * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - a, t + r, e + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + n, e + i, t - r + a, e + i, t - r + n, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + a, t - r, e - i + n, 5, !0), this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - n, e - i, t + r - a, e - i, t + r - n, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + a, t + r, e - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + n, e - i, t - r + a, e - i, t - r + n, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - a, t - r, e + i - n, 4, !0), this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - n, e + i, t + r - a, e + i, t + r - n, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: i
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, r) {
                var i;
                return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r) : 5 === r ? i = new u(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new c(t, e)), i.k && t.addDynamicProperty(i), i
              },
              getConstructorFunction: function() {
                return s
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;

            function n() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function c(t, e) {
              return this.shear(r(t), r(e))
            }

            function u(i, n) {
              var a = t(n),
                s = e(n);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(t, e, r) {
              return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function d(t, e, r, i, n, a, s, o, l, h, c, u, p, d, f, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = u, this.props[12] = p, this.props[13] = d, this.props[14] = f, this.props[15] = m, this
            }

            function f(t, e, r) {
              return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function m(t, e, r, i, n, a, s, o, l, h, c, u, p, d, f, m) {
              var v = this.props;
              if (1 === t && 0 === e && 0 === r && 0 === i && 0 === n && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === c && 0 === u) return v[12] = v[12] * t + v[15] * p, v[13] = v[13] * a + v[15] * d, v[14] = v[14] * c + v[15] * f, v[15] *= m, this._identityCalculated = !1, this;
              var g = v[0],
                y = v[1],
                b = v[2],
                x = v[3],
                S = v[4],
                E = v[5],
                P = v[6],
                w = v[7],
                T = v[8],
                C = v[9],
                M = v[10],
                A = v[11],
                _ = v[12],
                k = v[13],
                D = v[14],
                I = v[15];
              return v[0] = g * t + y * n + b * l + x * p, v[1] = g * e + y * a + b * h + x * d, v[2] = g * r + y * s + b * c + x * f, v[3] = g * i + y * o + b * u + x * m, v[4] = S * t + E * n + P * l + w * p, v[5] = S * e + E * a + P * h + w * d, v[6] = S * r + E * s + P * c + w * f, v[7] = S * i + E * o + P * u + w * m, v[8] = T * t + C * n + M * l + A * p, v[9] = T * e + C * a + M * h + A * d, v[10] = T * r + C * s + M * c + A * f, v[11] = T * i + C * o + M * u + A * m, v[12] = _ * t + k * n + D * l + I * p, v[13] = _ * e + k * a + D * h + I * d, v[14] = _ * r + k * s + D * c + I * f, v[15] = _ * i + k * o + D * u + I * m, this._identityCalculated = !1, this
            }

            function v(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function y(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function x(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function S(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function E(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function w(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function T() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                n = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = n, o.props[12] = a, o.props[13] = s, o
            }

            function C(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function M(t) {
              var e, r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = C(t[e]);
              return i
            }

            function A(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
              else {
                var n = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                i[0] = t[0] * n + t[1] * s + l, i[1] = t[0] * a + t[1] * o + h, i[2] = e[0] * n + e[1] * s + l, i[3] = e[0] * a + e[1] * o + h, i[4] = r[0] * n + r[1] * s + l, i[5] = r[0] * a + r[1] * o + h
              }
              return i
            }

            function _(t, e, r) {
              return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
              return r
            }

            function I(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
            }

            function F() {
              var t = this.props;
              return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
            }
            return function() {
              this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = u, this.shear = h, this.scale = p, this.setTransform = d, this.translate = f, this.transform = m, this.multiply = v, this.applyToPoint = S, this.applyToX = E, this.applyToY = P, this.applyToZ = w, this.applyToPointArray = _, this.applyToTriplePoints = A, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = F, this.clone = b, this.cloneFromProps = x, this.equals = y, this.inversePoints = M, this.inversePoint = C, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, r) {
            e[t] || (e[t] = r)
          }, t.getModifier = function(t, r, i) {
            return new e[t](r, i)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, n) {
          var a = [];
          e <= 1 ? a.push({
            s: t,
            e
          }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
          }) : (a.push({
            s: t,
            e: 1
          }), a.push({
            s: 0,
            e: e - 1
          }));
          var s, o, l = [],
            h = a.length;
          for (s = 0; s < h; s += 1) {
            var c, u;
            (o = a[s]).e * n < i || o.s * n > i + r || (c = o.s * n <= i ? 0 : (o.s * n - i) / r, u = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([c, u]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, r, i, n;
          if (this._mdf || t) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = e;
              e = r, r = s
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
          } else e = this.sValue, r = this.eValue;
          var o, l, h, c, u, p = this.shapes.length,
            d = 0;
          if (r === e)
            for (n = 0; n < p; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
          else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
              for (n = 0; n < p; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
          } else {
            var f, m, v = [];
            for (n = 0; n < p; n += 1)
              if ((f = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (i = f.shape.paths)._length, u = 0, !f.shape._mdf && f.pathsData.length) u = f.totalShapeLength;
                else {
                  for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(i.shapes[o]), h.push(c), u += c.totalLength;
                  f.totalShapeLength = u, f.pathsData = h
                }
                d += u, f.shape._mdf = !0
              } else f.shape.paths = f.localShapeCollection;
            var g, y = e,
              b = r,
              x = 0;
            for (n = p - 1; n >= 0; n -= 1)
              if ((f = this.shapes[n]).shape._mdf) {
                for ((m = f.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(e, r, f.totalShapeLength, x, d), x += f.totalShapeLength) : g = [
                    [y, b]
                  ], l = g.length, o = 0; o < l; o += 1) {
                  y = g[o][0], b = g[o][1], v.length = 0, b <= 1 ? v.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength * b
                  }) : y >= 1 ? v.push({
                    s: f.totalShapeLength * (y - 1),
                    e: f.totalShapeLength * (b - 1)
                  }) : (v.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength
                  }), v.push({
                    s: 0,
                    e: f.totalShapeLength * (b - 1)
                  }));
                  var S = this.addShapes(f, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                        var E = S.pop();
                        this.addPaths(S, m), S = this.addShapes(f, v[1], E)
                      } else this.addPaths(S, m), S = this.addShapes(f, v[1]);
                    this.addPaths(S, m)
                  }
                }
                f.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) e.addShape(t[r])
        }, TrimModifier.prototype.addSegment = function(t, e, r, i, n, a, s) {
          n.setXYAt(e[0], e[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(t[0], t[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
          e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, r) {
          var i, n, a, s, o, l, h, c, u = t.pathsData,
            p = t.shape.paths.shapes,
            d = t.shape.paths._length,
            f = 0,
            m = [],
            v = !0;
          for (r ? (o = r._length, c = r._length) : (r = shapePool.newElement(), o = 0, c = 0), m.push(r), i = 0; i < d; i += 1) {
            for (l = u[i].lengths, r.c = p[i].c, a = p[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
              if (f + (s = l[n - 1]).addedLength < e.s) f += s.addedLength, r.c = !1;
              else {
                if (f > e.e) {
                  r.c = !1;
                  break
                }
                e.s <= f && e.e >= f + s.addedLength ? (this.addSegment(p[i].v[n - 1], p[i].o[n - 1], p[i].i[n], p[i].v[n], r, o, v), v = !1) : (h = bez.getNewSegment(p[i].v[n - 1], p[i].v[n], p[i].o[n - 1], p[i].i[n], (e.s - f) / s.addedLength, (e.e - f) / s.addedLength, l[n - 1]), this.addSegmentFromArray(h, r, o, v), v = !1, r.c = !1), f += s.addedLength, o += 1
              } if (p[i].c && l.length) {
              if (s = l[n - 1], f <= e.e) {
                var g = l[n - 1].addedLength;
                e.s <= f && e.e >= f + g ? (this.addSegment(p[i].v[n - 1], p[i].o[n - 1], p[i].i[0], p[i].v[0], r, o, v), v = !1) : (h = bez.getNewSegment(p[i].v[n - 1], p[i].v[0], p[i].o[n - 1], p[i].i[0], (e.s - f) / g, (e.e - f) / g, l[n - 1]), this.addSegmentFromArray(h, r, o, v), v = !1, r.c = !1)
              } else r.c = !1;
              f += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > e.e) break;
            i < d - 1 && (r = shapePool.newElement(), v = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var r = e / 100,
            i = [0, 0],
            n = t._length,
            a = 0;
          for (a = 0; a < n; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
          i[0] /= n, i[1] /= n;
          var s, o, l, h, c, u, p = shapePool.newElement();
          for (p.c = t.c, a = 0; a < n; a += 1) s = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, l = t.o[a][0] + (i[0] - t.o[a][0]) * -r, h = t.o[a][1] + (i[1] - t.o[a][1]) * -r, c = t.i[a][0] + (i[0] - t.i[a][0]) * -r, u = t.i[a][1] + (i[1] - t.i[a][1]) * -r, p.setTripleAt(s, o, l, h, c, u, a);
          return p
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, r) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var i, n = e.or.k.length;
                for (i = 0; i < n; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var i, n;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      i = [], n = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), n[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, s.pv], n[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                    } else i = n = t;
                    this.v.rotate(-Math.atan2(i[1] - n[1], i[0] - n[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, r, i) {
              return new e(t, r, i)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, r) {
          return t * (1 - r) + e * r
        }

        function lerpPoint(t, e, r) {
          return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)]
        }

        function quadRoots(t, e, r) {
          if (0 === t) return [];
          var i = e * e - 4 * t * r;
          if (i < 0) return [];
          var n = -e / (2 * t);
          if (0 === i) return [n];
          var a = Math.sqrt(i) / (2 * t);
          return [n - a, n + a]
        }

        function polynomialCoefficients(t, e, r, i) {
          return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, r, i, n) {
          n && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), n && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], r[0], i[0]),
            s = polynomialCoefficients(t[1], e[1], r[1], i[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [t, e, r, i]
        }

        function extrema(t, e) {
          var r = t.points[0][e],
            i = t.points[t.points.length - 1][e];
          if (r > i) {
            var n = i;
            i = r, r = n
          }
          for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = t.point(a[s])[e];
              o < r ? r = o : o > i && (i = o)
            } return {
            min: r,
            max: i
          }
        }

        function intersectData(t, e, r) {
          var i = t.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: t,
            t: (e + r) / 2,
            t1: e,
            t2: r
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, r, i, n, a) {
          if (boxIntersect(t, e))
            if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) n.push([t.t, e.t]);
            else {
              var s = splitData(t),
                o = splitData(e);
              intersectsImpl(s[0], o[0], r + 1, i, n, a), intersectsImpl(s[0], o[1], r + 1, i, n, a), intersectsImpl(s[1], o[0], r + 1, i, n, a), intersectsImpl(s[1], o[1], r + 1, i, n, a)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, r, i) {
          var n = [t[0], t[1], 1],
            a = [e[0], e[1], 1],
            s = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            l = crossProduct(crossProduct(n, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, r) {
          return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, r, i, n, a, s) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            h = e[0] + Math.cos(r) * i * n,
            c = e[1] - Math.sin(r) * i * n;
          t.setTripleAt(h, c, h + Math.cos(o) * a, c - Math.sin(o) * a, h + Math.cos(l) * s, c - Math.sin(l) * s, t.length())
        }

        function getPerpendicularVector(t, e) {
          var r = [e[0] - t[0], e[1] - t[1]],
            i = .5 * -Math.PI;
          return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
        }

        function getProjectingAngle(t, e) {
          var r = 0 === e ? t.length() - 1 : e - 1,
            i = (e + 1) % t.length(),
            n = getPerpendicularVector(t.v[r], t.v[i]);
          return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(t, e, r, i, n, a, s) {
          var o = getProjectingAngle(e, r),
            l = e.v[r % e._length],
            h = e.v[0 === r ? e._length - 1 : r - 1],
            c = e.v[(r + 1) % e._length],
            u = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
          setPoint(t, e.v[r % e._length], o, s, i, p / (2 * (n + 1)), u / (2 * (n + 1)), a)
        }

        function zigZagSegment(t, e, r, i, n, a) {
          for (var s = 0; s < i; s += 1) {
            var o = (s + 1) / (i + 1),
              l = 2 === n ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              h = e.normalAngle(o);
            setPoint(t, e.point(o), h, a, r, l / (2 * (i + 1)), l / (2 * (i + 1)), n), a = -a
          }
          return a
        }

        function linearOffset(t, e, r) {
          var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, i, r), polarOffset(e, i, r)]
        }

        function offsetSegment(t, e) {
          var r, i, n, a, s, o, l;
          r = (l = linearOffset(t.points[0], t.points[1], e))[0], i = l[1], n = (l = linearOffset(t.points[1], t.points[2], e))[0], a = l[1], s = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var h = lineIntersection(r, i, n, a);
          null === h && (h = i);
          var c = lineIntersection(s, o, n, a);
          return null === c && (c = s), new PolynomialBezier(r, h, c, o)
        }

        function joinLines(t, e, r, i, n) {
          var a = e.points[3],
            s = r.points[0];
          if (3 === i) return a;
          if (pointEqual(a, s)) return a;
          if (2 === i) {
            var o = -e.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              c = h ? pointDistance(h, a) : pointDistance(a, s) / 2,
              u = polarOffset(a, o, 2 * c * roundCorner);
            return t.setXYAt(u[0], u[1], "o", t.length() - 1), u = polarOffset(s, l, 2 * c * roundCorner), t.setTripleAt(s[0], s[1], s[0], s[1], u[0], u[1], t.length()), s
          }
          var p = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
          return p && pointDistance(p, a) < n ? (t.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], t.length()), p) : a
        }

        function getIntersection(t, e) {
          var r = t.intersections(e);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var r = t.slice(),
            i = e.slice(),
            n = getIntersection(t[t.length - 1], e[0]);
          return n && (r[t.length - 1] = t[t.length - 1].split(n[0])[0], i[0] = e[0].split(n[1])[1]), t.length > 1 && e.length > 1 && (n = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(n[0])[0]],
            [e[e.length - 1].split(n[1])[1]]
          ] : [r, i]
        }

        function pruneIntersections(t) {
          for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var r, i, n, a, s = t.inflectionPoints();
          if (0 === s.length) return [offsetSegment(t, e)];
          if (1 === s.length || floatEqual(s[1], 1)) return r = (n = t.split(s[0]))[0], i = n[1], [offsetSegment(r, e), offsetSegment(i, e)];
          r = (n = t.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (n = n[1].split(o))[0], i = n[1], [offsetSegment(r, e), offsetSegment(a, e), offsetSegment(i, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", n = e.length, a = 0; a < n; a += 1) switch (e[a].toLowerCase()) {
            case "italic":
              i = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: i,
            weight: t.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, n, a) {
          var s = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
          t.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * n), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, r, i) {
          for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, r, i, n, a, s = !1;
          if (this._mdf || t) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var h = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                h.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
              }
              this.elem.reloadShapes(), s = !0
            }
            for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (o = a < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                var c = this.elemsData[i].it,
                  u = c[c.length - 1];
                0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var p = this.o.v,
              d = p % 1,
              f = p > 0 ? Math.floor(p) : Math.ceil(p),
              m = this.pMatrix.props,
              v = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, x = 0;
            if (p > 0) {
              for (; x < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), x += d)
            } else if (p < 0) {
              for (; x > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), x -= d)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              x += 1, a -= 1, i += n
            }
          } else
            for (a = this._currentCopies, i = 0, n = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += n;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var r, i = shapePool.newElement();
          i.c = t.c;
          var n, a, s, o, l, h, c, u, p, d, f, m, v = t._length,
            g = 0;
          for (r = 0; r < v; r += 1) n = t.v[r], s = t.o[r], a = t.i[r], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? 0 !== r && r !== v - 1 || t.c ? (o = 0 === r ? t.v[v - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = f = n[0] + (o[0] - n[0]) * h, u = m = n[1] - (n[1] - o[1]) * h, p = c - (c - n[0]) * roundCorner, d = u - (u - n[1]) * roundCorner, i.setTripleAt(c, u, p, d, f, m, g), g += 1, o = r === v - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, c = p = n[0] + (o[0] - n[0]) * h, u = d = n[1] + (o[1] - n[1]) * h, f = c - (c - n[0]) * roundCorner, m = u - (u - n[1]) * roundCorner, i.setTripleAt(c, u, p, d, f, m, g), g += 1) : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
          return i
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, r, i, n, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (r < 0) return [];
          var i = Math.sqrt(r);
          return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            r = lerpPoint(this.points[1], this.points[2], t),
            i = lerpPoint(this.points[2], this.points[3], t),
            n = lerpPoint(e, r, t),
            a = lerpPoint(r, i, t),
            s = lerpPoint(n, a, t);
          return [new PolynomialBezier(this.points[0], e, n, s, !0), new PolynomialBezier(s, a, i, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, r) {
          void 0 === e && (e = 2), void 0 === r && (r = 7);
          var i = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var r = (e + 1) % t.length();
          return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
          var n = t._length,
            a = shapePool.newElement();
          if (a.c = t.c, t.c || (n -= 1), 0 === n) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(a, t, 0, e, r, i, s);
          for (var l = 0; l < n; l += 1) s = zigZagSegment(a, o, e, r, i, -s), o = l !== n - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % n) : null, zigZagCorner(a, t, l + 1, e, r, i, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, r, i, n, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            c = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l, h, c));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
          var n = shapePool.newElement();
          n.c = t.c;
          var a, s, o, l = t.length();
          t.c || (l -= 1);
          var h = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(t, a), h.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), h.push(offsetSegmentSplit(o, e));
          h = pruneIntersections(h);
          var c = null,
            u = null;
          for (a = 0; a < h.length; a += 1) {
            var p = h[a];
            for (u && (c = joinLines(n, u, p[0], r, i)), u = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], c && pointEqual(o.points[0], c) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), c = o.points[3]
          }
          return h.length && joinLines(n, u, h[0][0], r, i), n
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            c = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l, c, h));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function n(t, e) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
            var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
            var n = i.offsetWidth;
            return i.style.fontFamily = function(t) {
              var e, r = t.split(","),
                i = r.length,
                n = [];
              for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && n.push(r[e]);
              return n.join(",")
            }(t) + ", " + e, {
              node: i,
              w: n,
              parent: r
            }
          }

          function a(t, e) {
            var r, i = document.body && e ? "svg" : "canvas",
              n = getFontProperties(t);
            if ("svg" === i) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", t.fFamily), a.setAttribute("font-style", n.style), a.setAttribute("font-weight", n.weight), a.textContent = "1", t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), r = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = n.style + " " + n.weight + " 100px " + t.fFamily, r = s
            }
            return {
              measureText: function(t) {
                return "svg" === i ? (r.textContent = t, r.getComputedTextLength()) : r.measureText(t).width
              }
            }
          }

          function s(t) {
            var e = 0,
              r = t.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var i = t.charCodeAt(1);
              i >= 56320 && i <= 57343 && (e = 1024 * (r - 55296) + i - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = s(t);
            return e >= 127462 && e <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(t, e) {
            var r = t.toString(16) + e.toString(16);
            return -1 !== i.indexOf(r)
          }, l.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, l.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, l.isRegionalFlag = function(t, e) {
            var i = s(t.substr(e, 2));
            if (i !== r) return !1;
            var n = 0;
            for (e += 2; n < 5;) {
              if ((i = s(t.substr(e, 2))) < 917601 || i > 917626) return !1;
              n += 1, e += 2
            }
            return 917631 === s(t.substr(e, 2))
          }, l.isVariationSelector = function(t) {
            return 65039 === t
          }, l.BLACK_FLAG_CODE_POINT = r;
          var h = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var r, i, n = t.length,
                  a = this.chars.length;
                for (e = 0; e < n; e += 1) {
                  for (r = 0, i = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                  i || (this.chars.push(t[e]), a += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = a(t), t.cache = {}
                })), void(this.fonts = t.list);
                var r, i = t.list,
                  s = i.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var l, h, c = !0;
                  if (i[r].loaded = !1, i[r].monoCase = n(i[r].fFamily, "monospace"), i[r].sansCase = n(i[r].fFamily, "sans-serif"), i[r].fPath) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (c = !1), c) {
                        var u = createTag("style");
                        u.setAttribute("f-forigin", i[r].fOrigin), u.setAttribute("f-origin", i[r].origin), u.setAttribute("f-family", i[r].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(u)
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(i[r].fPath) && (c = !1);
                      if (c) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", i[r].fOrigin), p.setAttribute("f-origin", i[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = i[r].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) i[r].fPath === l[h].src && (c = !1);
                      if (c) {
                        var d = createTag("link");
                        d.setAttribute("f-forigin", i[r].fOrigin), d.setAttribute("f-origin", i[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[r].fPath), e.appendChild(d)
                      }
                    }
                  } else i[r].loaded = !0, o -= 1;
                  i[r].helper = a(i[r], e), i[r].cache = {}, this.fonts.push(i[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, r, i) {
              for (var n = 0, a = this.chars.length; n < a;) {
                if (this.chars[n].ch === e && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                n += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, i)), t
            },
            getFontByName: function(t) {
              for (var e = 0, r = this.fonts.length; e < r;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, r) {
              var i = this.getFontByName(e),
                n = t;
              if (!i.cache[n]) {
                var a = i.helper;
                if (" " === t) {
                  var s = a.measureText("|" + t + "|"),
                    o = a.measureText("||");
                  i.cache[n] = (s - o) / 100
                } else i.cache[n] = a.measureText(t) / 100
              }
              return i.cache[n] * r
            },
            checkLoadedFonts: function() {
              var t, e, r, i = this.fonts.length,
                n = i;
              for (t = 0; t < i; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = h, l
        }();

        function SlotManager(t) {
          this.animationData = t
        }

        function slotFactory(t) {
          return new SlotManager(t)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
        }

        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var r, i = t.ef || [];
          this.effectElements = [];
          var n, a = i.length;
          for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], e), this.effectElements.push(n)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
        }

        function AudioElement(t, e, r) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
          var i = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var r;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var i, n = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < n; r += 1) {
            switch (i = null, a[r].ty) {
              case 0:
                i = new SliderEffect(a[r], e, this);
                break;
              case 1:
                i = new AngleEffect(a[r], e, this);
                break;
              case 2:
                i = new ColorEffect(a[r], e, this);
                break;
              case 3:
                i = new PointEffect(a[r], e, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(a[r], e, this);
                break;
              case 10:
                i = new LayerIndexEffect(a[r], e, this);
                break;
              case 11:
                i = new MaskIndexEffect(a[r], e, this);
                break;
              case 5:
                i = new EffectsManager(a[r], e, this);
                break;
              default:
                i = new NoValueEffect(a[r], e, this)
            }
            i && this.effectElements.push(i)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                r = t("effects"),
                i = t("shape"),
                n = t("text"),
                a = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, r, i = this.layers.length;
          for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var r, i = t.length,
            n = this.layers.length;
          for (e = 0; e < i; e += 1)
            for (r = 0; r < n;) {
              if (this.layers[r].id === t[e].id) {
                this.layers[r] = t[e];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
          for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== n[a].parent ? this.buildElementParenting(t, n[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e]);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, r = this.elements.length;
          for (e = 0; e < r; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, r = t.shift();
          if ("number" == typeof r) e = this.elements[r];
          else {
            var i, n = this.elements.length;
            for (i = 0; i < n; i += 1)
              if (this.elements[i].data.nm === r) {
                e = this.elements[i];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(t, e, r) {
          this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var i, n, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, h, c, u, p, d = this.masksProperties,
            f = 0,
            m = [],
            v = createElementID(),
            g = "clipPath",
            y = "clip-path";
          for (i = 0; i < s; i += 1)
            if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (g = "mask", y = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== f ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), n = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
              elem: n,
              lastPath: ""
            }, a.appendChild(n);
            else {
              var b;
              if (f += 1, n.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (g = "mask", y = "mask", p = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), c.appendChild(u), a.appendChild(c), n.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (u = null, p = null), this.storedData[i] = {
                  elem: n,
                  x: p,
                  expan: u,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === d[i].mode) {
                l = m.length;
                var x = createNS("g");
                for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                var S = createNS("mask");
                S.setAttribute("mask-type", "alpha"), S.setAttribute("id", v + "_" + f), S.appendChild(n), a.appendChild(S), x.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + f + ")"), m.length = 0, m.push(x)
              } else m.push(n);
              d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: n,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                invRect: h
              }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
            } for (this.maskElement = createNS(g), s = m.length, i = 0; i < s; i += 1) this.maskElement.appendChild(m[i]);
          f > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var t = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: t,
              localMat: t,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                r = 0,
                i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) e.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var t = 0,
                e = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), t = 1; t < e; t += 1) {
                  var i = this.localTransforms[t].matrix;
                  r.multiply(i)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var n = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) n *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = n
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  r = t.length;
                for (e = 0; e < r; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
            var a, s = e.length;
            for (r = 0; r < s; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
          for (e = 0; e < i; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var n = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, r) {
          var i, n, a = " M" + e.v[0][0] + "," + e.v[0][1];
          for (n = e._length, i = 1; i < n; i += 1) a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
          if (e.c && n > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
            var s = "";
            r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var r = createNS("filter");
              return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, r, i = "SourceGraphic",
            n = t.data.ef ? t.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], e = 0; e < n; e += 1) {
            r = null;
            var l = t.data.ef[e].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(s, t.effectsManager.effectElements[e], t, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, r) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            i = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
          return i
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                i = createNS("path");
              i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var n = createElementID();
              if (r.setAttribute("id", n), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, r, i, n, a = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== t || (s.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(i), s.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), r = filtersFactory.createFilter(e);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var c = createNS("feFuncA");
                c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), h.appendChild(c), this.globalData.defs.appendChild(r);
                var u = createNS("rect");
                u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(u), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), l.appendChild(u), n.appendChild(this.layerElement), l.appendChild(n)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = a
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
              if (e[r].elem === t) return e[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var r = this.processedElements, i = r.length; i;)
              if (r[i -= 1].elem === t) return void(r[i].pos = e);
            r.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, r) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
          for (var i = 0, n = t.length; i < n;) {
            if (t[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            i += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, r, i) {
          var n;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
          var a, s = e.length || 0;
          for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
            n: e[n].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(t, e, r) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
        }

        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, r) {
          this.transform = {
            mProps: t,
            op: e,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var r = 0, i = this.o.length / 2; r < i;) {
            if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, r, i, n = 4 * this.data.p;
            for (e = 0; e < n; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
            if (this.o.length)
              for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var r = createElementID(),
            i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
          var n, a, s, o = [];
          for (s = 4 * e.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, n, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var c = this.stops;
            for (i = 4 * t.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), c.push(r);
            s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = a, this.ost = c, this.maskId = l, e.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, r, i) {
            if (0 === e) return "";
            var n, a = t.o,
              s = t.i,
              o = t.v,
              l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (n = 1; n < e; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
            return r && e && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function r(t, e, r) {
              (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function i() {}

            function n(r, i, n) {
              var a, s, o, l, h, c, u, p, d, f, m = i.styles.length,
                v = i.lvl;
              for (c = 0; c < m; c += 1) {
                if (l = i.sh._mdf || n, i.styles[c].lvl < v) {
                  for (p = e.reset(), d = v - i.styles[c].lvl, f = i.transformers.length - 1; !l && d > 0;) l = i.transformers[f].mProps._mdf || l, d -= 1, f -= 1;
                  if (l)
                    for (d = v - i.styles[c].lvl, f = i.transformers.length - 1; d > 0;) p.multiply(i.transformers[f].mProps.v), d -= 1, f -= 1
                } else p = t;
                if (s = (u = i.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(h = u.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, p));
                  i.caches[c] = o
                } else o = i.caches[c];
                i.styles[c].d += !0 === r.hd ? "" : o, i.styles[c]._mdf = l || i.styles[c]._mdf
              }
            }

            function a(t, e, r) {
              var i = e.style;
              (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, r) {
              o(t, e, r), l(0, e, r)
            }

            function o(t, e, r) {
              var i, n, a, s, o, l = e.gf,
                h = e.g._hasOpacity,
                c = e.s.v,
                u = e.e.v;
              if (e.o._mdf || r) {
                var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(p, e.o.v)
              }
              if (e.s._mdf || r) {
                var d = 1 === t.t ? "x1" : "cx",
                  f = "x1" === d ? "y1" : "cy";
                l.setAttribute(d, c[0]), l.setAttribute(f, c[1]), h && !e.g._collapsable && (e.of.setAttribute(d, c[0]), e.of.setAttribute(f, c[1]))
              }
              if (e.g._cmdf || r) {
                i = e.cst;
                var m = e.g.c;
                for (a = i.length, n = 0; n < a; n += 1)(s = i[n]).setAttribute("offset", m[4 * n] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
              }
              if (h && (e.g._omdf || r)) {
                var v = e.g.o;
                for (a = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < a; n += 1) s = i[n], e.g._collapsable || s.setAttribute("offset", v[2 * n] + "%"), s.setAttribute("stop-opacity", v[2 * n + 1])
              }
              if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", u[0]), l.setAttribute("y2", u[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
              else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)));
                var g = Math.atan2(u[1] - c[1], u[0] - c[0]),
                  y = e.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  x = Math.cos(g + e.a.v) * b + c[0],
                  S = Math.sin(g + e.a.v) * b + c[1];
                l.setAttribute("fx", x), l.setAttribute("fy", S), h && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", S))
              }
            }

            function l(t, e, r) {
              var i = e.style,
                n = e.d;
              n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return s;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return n;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
        }

        function LetterProps(t, e, r, i, n, a) {
          this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, r, i, n = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r], o = !1, s.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), o = e._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var r, i = new SVGStyleData(t, e),
            n = i.pElem;
          return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" === t.ty || "gs" === t.ty ? (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === t.ty && (r = new SVGNoStyleData(this, t, i)), "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            i = new SVGTransformData(r, r.o, e);
          return this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
          var i = 4;
          "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
          var n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
          return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var r = 0, i = this.animatedContents.length; r < i;) {
            if (this.animatedContents[r].element === e) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, r = t.styles,
            i = this.stylesList.length;
          for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, n, a, s) {
          var o, l, h, c, u, p, d = [].concat(a),
            f = t.length - 1,
            m = [],
            v = [];
          for (o = f; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(t[o])) ? e[o] = r[p - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (p)
                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, d, s), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], i)), c = e[o].transform, d.push(c)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], d, n)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (u = e[o]).closed = !1 : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = u, this.shapeModifiers.push(u)), v.push(u)) : "rp" === t[o].ty && (p ? (u = e[o]).closed = !0 : (u = ShapeModifiers.getModifier(t[o].ty), e[o] = u, u.init(this, t, o, e), this.shapeModifiers.push(u), s = !1), v.push(u));
            this.addProcessedElement(t[o], o + 1)
          }
          for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
          for (f = v.length, o = 0; o < f; o += 1) v[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, r = this.animatedContents.length;
          for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, r, i, n, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var i;
              this.lock = !0, this._mdf = !1;
              var n = this.effectsSequence.length,
                a = t || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, r, i = [], n = 0, a = t.length, s = !1, o = !1, l = ""; n < a;) s = o, o = !1, e = t.charCodeAt(n), l = t.charAt(n), FontManager.isCombinedCharacter(e) ? s = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, n) ? l = t.substr(n, 14) : (r = t.charCodeAt(n + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(e, r) ? (l = t.substr(n, 2), s = !0) : l = FontManager.isFlagEmoji(t.substr(n, 4)) ? t.substr(n, 4) : t.substr(n, 2)) : e > 56319 ? (r = t.charCodeAt(n + 1), FontManager.isVariationSelector(e) && (s = !0)) : FontManager.isZeroWidthJoiner(e) && (s = !0, o = !0), s ? (i[i.length - 1] += l, s = !1) : i.push(l), n += l.length;
          return i
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
            h = this.data,
            c = [],
            u = 0,
            p = h.m.g,
            d = 0,
            f = 0,
            m = 0,
            v = [],
            g = 0,
            y = 0,
            b = l.getFontByName(t.f),
            x = 0,
            S = getFontProperties(b);
          t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
          var E, P = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var w, T, C = !0, M = t.sz[0], A = t.sz[1]; C;) {
              w = 0, g = 0, r = (T = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
              var _ = -1;
              for (e = 0; e < r; e += 1) E = T[e].charCodeAt(0), i = !1, " " === T[e] ? _ = e : 13 !== E && 3 !== E || (g = 0, i = !0, w += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(T[e], b.fStyle, b.fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = l.measureText(T[e], t.f, t.finalSize), g + x > M && " " !== T[e] ? (-1 === _ ? r += 1 : e = _, w += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, _ === e ? 1 : 0, "\r"), _ = -1, g = 0) : (g += x, g += P);
              w += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, r = t.finalText.length, C = !1)
            }
          g = -P, x = 0;
          var k, D = 0;
          for (e = 0; e < r; e += 1)
            if (i = !1, 13 === (E = (k = t.finalText[e]).charCodeAt(0)) || 3 === E ? (D = 0, v.push(g), y = g > y ? g : y, g = -2 * P, n = "", i = !0, m += 1) : n = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(t.f).fFamily), x = i ? 0 : o.w * t.finalSize / 100) : x = l.measureText(n, t.f, t.finalSize), " " === k ? D += x + P : (g += x + P + D, D = 0), c.push({
                l: x,
                an: x,
                add: d,
                n: i,
                anIndexes: [],
                val: n,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (d += x, "" === n || " " === n || e === r - 1) {
                for ("" !== n && " " !== n || (d -= x); f <= e;) c[f].an = d, c[f].ind = u, c[f].extra = x, f += 1;
                u += 1, d = 0
              }
            } else if (3 == p) {
            if (d += x, "" === n || e === r - 1) {
              for ("" === n && (d -= x); f <= e;) c[f].an = d, c[f].ind = u, c[f].extra = x, f += 1;
              d = 0, u += 1
            }
          } else c[u].ind = u, c[u].extra = 0, u += 1;
          if (t.l = c, y = g > y ? g : y, v.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = y, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = v;
          var I, F, O, L, V = h.a;
          s = V.length;
          var R = [];
          for (a = 0; a < s; a += 1) {
            for ((I = V[a]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), L = 0, O = I.s.b, e = 0; e < r; e += 1)(F = c[e]).anIndexes[a] = L, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == r - 1) || 4 == O && (F.n || e == r - 1)) && (1 === I.s.rn && R.push(L), L += 1);
            h.a[a].s.totalChars = L;
            var B, N = -1;
            if (1 === I.s.rn)
              for (e = 0; e < r; e += 1) N != (F = c[e]).anIndexes[a] && (N = F.anIndexes[a], B = R.splice(Math.floor(Math.random() * R.length), 1)[0]), F.anIndexes[a] = B
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var r = this.copyData({}, this.data.d.k[e].s);
          r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            r = Math.floor;

          function i(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return i.prototype = {
            getMult: function(i) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var n = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? n = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(n, a, s, o).get,
                h = 0,
                c = this.finalS,
                u = this.finalE,
                p = this.data.sh;
              if (2 === p) h = l(h = u === c ? i >= u ? 1 : 0 : t(0, e(.5 / (u - c) + (i - c) / (u - c), 1)));
              else if (3 === p) h = l(h = u === c ? i >= u ? 0 : 1 : 1 - t(0, e(.5 / (u - c) + (i - c) / (u - c), 1)));
              else if (4 === p) u === c ? h = 0 : (h = t(0, e(.5 / (u - c) + (i - c) / (u - c), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === p) {
                if (u === c) h = 0;
                else {
                  var d = u - c,
                    f = -d / 2 + (i = e(t(0, i + .5 - c), u - c)),
                    m = d / 2;
                  h = Math.sqrt(1 - f * f / (m * m))
                }
                h = l(h)
              } else 6 === p ? (u === c ? h = 0 : (i = e(t(0, i + .5 - c), u - c), h = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (u - c))) / 2), h = l(h)) : (i >= r(c) && (h = t(0, e(i - c < 0 ? e(u, 1) - (c - i) : u - i, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var v = .01 * this.sm.v;
                0 === v && (v = 1e-8);
                var g = .5 - .5 * v;
                h < g ? h = 0 : (h = (h - g) / v) > 1 && (h = 1)
              }
              return h * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / e,
                i = this.s.v / e + r,
                n = this.e.v / e + r;
              if (i > n) {
                var a = i;
                i = n, n = a
              }
              this.finalS = i, this.finalE = n
            }
          }, extendPrototype([DynamicPropertyContainer], i), {
            getTextSelectorProp: function(t, e, r) {
              return new i(t, e, r)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, r) {
          var i = {
              propType: !1
            },
            n = PropertyFactory.getProp,
            a = e.a;
          this.a = {
            r: a.r ? n(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? n(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? n(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? n(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? n(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? n(t, a.s, 1, .01, r) : i,
            a: a.a ? n(t, a.a, 1, 0, r) : i,
            o: a.o ? n(t, a.o, 0, .01, r) : i,
            p: a.p ? n(t, a.p, 1, 0, r) : i,
            sw: a.sw ? n(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? n(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? n(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? n(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? n(t, a.fs, 0, .01, r) : i,
            fb: a.fb ? n(t, a.fb, 0, .01, r) : i,
            t: a.t ? n(t, a.t, 0, 0, r) : i
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: i(this._elem, this._textData.p.a, 0, 0, this),
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: i(this._elem, this._textData.p.r, 0, 0, this),
            p: i(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, n, a, s, o, l, h, c, u, p, d, f, m, v, g, y, b, x, S = this._moreOptions.alignment.v,
              E = this._animatorsData,
              P = this._textData,
              w = this.mHelper,
              T = this._renderType,
              C = this.renderedLetters.length,
              M = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var A, _ = x.v;
                for (this._pathData.r.v && (_ = _.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = _._length - 1, g = 0, n = 0; n < a; n += 1) A = bez.buildBezierData(_.v[n], _.v[n + 1], [_.o[n][0] - _.v[n][0], _.o[n][1] - _.v[n][1]], [_.i[n + 1][0] - _.v[n + 1][0], _.i[n + 1][1] - _.v[n + 1][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength;
                n = a, x.v.c && (A = bez.buildBezierData(_.v[n], _.v[0], [_.o[n][0] - _.v[n][0], _.o[n][1] - _.v[n][1]], [_.i[0][0] - _.v[0][0], _.i[0][1] - _.v[0][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, u = 1, h = 0, c = !0, m = s.segments, o < 0 && x.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), u = (f = m[p = m.length - 1].points).length - 1; o < 0;) o += f[u].partialLength, (u -= 1) < 0 && (u = (f = m[p -= 1].points).length - 1);
              d = (f = m[p].points)[u - 1], v = (l = f[u]).partialLength
            }
            a = M.length, r = 0, i = 0;
            var k, D, I, F, O, L = 1.2 * t.finalSize * .714,
              V = !0;
            I = E.length;
            var R, B, N, z, G, j, H, W, q, U, $, Y, X = -1,
              K = o,
              Z = p,
              J = u,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var rt = 0,
                it = 0,
                nt = 2 === t.j ? -.5 : -1,
                at = 0,
                st = !0;
              for (n = 0; n < a; n += 1)
                if (M[n].n) {
                  for (rt && (rt += it); at < n;) M[at].animatorJustifyOffset = rt, at += 1;
                  rt = 0, st = !0
                } else {
                  for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (st && 2 === t.j && (it += k.t.v * nt), (O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars)).length ? rt += k.t.v * O[0] * nt : rt += k.t.v * O * nt);
                  st = !1
                } for (rt && (rt += it); at < n;) M[at].animatorJustifyOffset = rt, at += 1
            }
            for (n = 0; n < a; n += 1) {
              if (w.reset(), z = 1, M[n].n) r = 0, i += t.yOffset, i += V ? 1 : 0, o = K, V = !1, this._hasMaskedPath && (u = J, d = (f = m[p = Z].points)[u - 1], v = (l = f[u]).partialLength, h = 0), tt = "", $ = "", q = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== M[n].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[M[n].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[M[n].line]) / 2
                    }
                    Q = M[n].line
                  }
                  X !== M[n].ind && (M[X] && (o += M[X].extra), o += M[n].an / 2, X = M[n].ind), o += S[0] * M[n].an * .005;
                  var ot = 0;
                  for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && ((O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars)).length ? ot += k.p.v[0] * O[0] : ot += k.p.v[0] * O), k.a.propType && ((O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars)).length ? ot += k.a.v[0] * O[0] : ot += k.a.v[0] * O);
                  for (c = !0, this._pathData.a.v && (o = .5 * M[0].an + (g - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * X / (a - 1), o += this._pathData.f.v); c;) h + v >= o + ot || !f ? (y = (o + ot - h) / l.partialLength, B = d.point[0] + (l.point[0] - d.point[0]) * y, N = d.point[1] + (l.point[1] - d.point[1]) * y, w.translate(-S[0] * M[n].an * .005, -S[1] * L * .01), c = !1) : f && (h += l.partialLength, (u += 1) >= f.length && (u = 0, m[p += 1] ? f = m[p].points : x.v.c ? (u = 0, f = m[p = 0].points) : (h -= l.partialLength, f = null)), f && (d = l, v = (l = f[u]).partialLength));
                  R = M[n].an / 2 - M[n].add, w.translate(-R, 0, 0)
                } else R = M[n].an / 2 - M[n].add, w.translate(-R, 0, 0), w.translate(-S[0] * M[n].an * .005, -S[1] * L * .01, 0);
                for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)(k = E[D].a).a.propType && ((O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars)).length ? w.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : w.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (D = 0; D < I; D += 1)(k = E[D].a).s.propType && ((O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars)).length ? w.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : w.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (D = 0; D < I; D += 1) {
                  if (k = E[D].a, O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars), k.sk.propType && (O.length ? w.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : w.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? w.rotateZ(-k.r.v * O[2]) : w.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? w.rotateY(k.ry.v * O[1]) : w.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? w.rotateX(k.rx.v * O[0]) : w.rotateX(k.rx.v * O)), k.o.propType && (O.length ? z += (k.o.v * O[0] - z) * O[0] : z += (k.o.v * O - z) * O), t.strokeWidthAnim && k.sw.propType && (O.length ? j += k.sw.v * O[0] : j += k.sw.v * O), t.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? G[W] += (k.sc.v[W] - G[W]) * O[0] : G[W] += (k.sc.v[W] - G[W]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (k.fc.v[W] - H[W]) * O[0] : H[W] += (k.fc.v[W] - H[W]) * O;
                    k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                  }
                }
                for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && (O = E[D].s.getMult(M[n].anIndexes[D], P.a[D].s.totalChars), this._hasMaskedPath ? O.length ? w.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : w.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? w.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : w.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (t.strokeWidthAnim && (q = j < 0 ? 0 : j), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && ($ = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (w.translate(0, -t.ls), w.translate(0, S[1] * L * .01 + i, 0), this._pathData.p.v) {
                    b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < d.point[0] && (lt += 180), w.rotate(-lt * Math.PI / 180)
                  }
                  w.translate(B, N, 0), o -= S[0] * M[n].an * .005, M[n + 1] && X !== M[n + 1].ind && (o += M[n].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (w.translate(r, i, 0), t.ps && w.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      w.translate(M[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[n].line]), 0, 0);
                      break;
                    case 2:
                      w.translate(M[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[n].line]) / 2, 0, 0)
                  }
                  w.translate(0, -t.ls), w.translate(R, 0, 0), w.translate(S[0] * M[n].an * .005, S[1] * L * .01, 0), r += M[n].l + .001 * t.tr * t.finalSize
                }
                "html" === T ? tt = w.toCSS() : "svg" === T ? tt = w.to2dCSS() : et = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], Y = z
              }
              C <= n ? (F = new LetterProps(Y, q, U, $, tt, et), this.renderedLetters.push(F), C += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[n], this.lettersChangedFlag = F.update(Y, q, U, $, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var r, i, n = e.length,
            a = "";
          for (r = 0; r < n; r += 1) "sh" === e[r].ty && (i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t));
          return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, n) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
          }
          e.translate(i, n, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
        }

        function ISolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function NullElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (e && e.title) {
            var i = createNS("title"),
              n = createElementID();
            i.setAttribute("id", n), i.textContent = e.title, this.svgElement.appendChild(i), r += n
          }
          if (e && e.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + s
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, r = t.length, i = [], n = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(n), n = "") : n += t[e], e += 1;
          return i.push(n), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var r = t.shapes[0];
            if (r.it) {
              var i = r.it[r.it.length - 1];
              i.s && (i.s.k[0] = e, i.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var i = this.globalData.fontManager.getFontByName(r.f);
          if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
          else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var n = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var s, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var h = this.mHelper,
            c = this.data.singleShape,
            u = 0,
            p = 0,
            d = !0,
            f = .001 * r.tr * r.finalSize;
          if (!c || l || r.sz) {
            var m, v = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !c || 0 === t) {
                if (s = v > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), v <= t) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = s, l) {
                    var g = createNS("g");
                    s.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (h.reset(), c && (o[t].n && (u = -f, p += r.yOffset, p += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, h, o[t].line, u, p), u += o[t].l || 0, u += f), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else c && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            c && s && s.setAttribute("d", "")
          } else {
            var S = this.textContainer,
              E = "start";
            switch (r.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            S.setAttribute("text-anchor", E), S.setAttribute("letter-spacing", f);
            var P = this.buildTextContents(r.finalText);
            for (e = P.length, p = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t].span || createNS("tspan")).textContent = P[t], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", S.appendChild(s), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = s, p += r.finalLineHeight;
            this.layerElement.appendChild(S)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, i, n, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (e = s.length, t = 0; t < e; t += 1) s[t].n || (r = a[t], i = this.textSpans[t].span, (n = this.textSpans[t].glyph) && n.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var r = createNS("clipPath"),
            i = createNS("rect");
          i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
          var n = createElementID();
          r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            r = this.layers.length;
          for (e = 0; e < r; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
              var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === i) return;
              if (this.elements[i] && !0 !== this.elements[i]) {
                var n = e[i].getMatte(this.layers[t].tt);
                r.setMatte(n)
              } else this.buildItem(i), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, r = this.elements.length; e < r;) {
                if (this.elements[e] === t) {
                  var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    n = this.elements[i].getMatte(this.layers[e].tt);
                  t.setMatte(n);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            for (var i, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, r = t.length,
              i = "_";
            for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
            var n = this.sequences[i];
            return n || (n = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[i] = n, this.sequenceList.push(n)), n
          },
          processSequence: function(t, e) {
            for (var r = 0, i = t.transforms.length, n = e; r < i && !e;) {
              if (t.transforms[r].transform.mProps._mdf) {
                n = !0;
                break
              }
              r += 1
            }
            if (n)
              for (t.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) t.finalTransform.multiply(t.transforms[r].transform.mProps.v);
            t._mdf = n
          },
          processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            r = null,
            i = null;

          function n() {
            var n, a, s;
            e || (n = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", t), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), n.appendChild(a), n.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), i = n, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: n,
            get: function(i) {
              return e || n(), e.width = i.width, e.height = i.height, r.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var r = createTag("canvas");
          return r.width = t, r.height = e, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, r, i = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < i; e += 1) {
            r = null;
            var n = t.data.ef[e].ty;
            registeredEffects[n] && (r = new(0, registeredEffects[n].effect)(t.effectsManager.effectElements[e], t)), r && this.filters.push(r)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var r;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var i = this.masksProperties.length,
            n = !1;
          for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, r = this.filters.length;
          for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, r = this.filters.length,
            i = [];
          for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
          return i
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, r, i, n = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < s; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                var l = i._length;
                for (o = 1; o < l; o += 1) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), a.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, r, i) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var n, a = 4;
          "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
          var s, o = r.length;
          for (n = 0; n < o; n += 1) r[n].closed || (s = {
            transforms: i.addTransformSequence(r[n].transforms),
            trNodes: []
          }, this.styledShapes.push(s), r[n].elements.push(s))
        }

        function CVShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
        }

        function CVTextElement(t, e, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, r)
        }

        function CVImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
        }

        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var t;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
            var e = new CanvasContext;
            this.stack[t] = e
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, r) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(t, e, r) {
          this.initElement(t, e, r)
        }

        function HShapeElement(t, e, r) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
        }

        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var n, a = t.ks.or.k.length;
            for (n = 0; n < a; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
          }
          this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, r) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, r) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var r = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            i = {};
          if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
              var n = new DashProperty(this, t.d, "canvas", this);
              i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
            }
          } else r.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, r = t.length;
          for (e = 0; e < r; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, n) {
          var a, s, o, l, h, c, u = t.length - 1,
            p = [],
            d = [],
            f = [].concat(n);
          for (a = u; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], f), p.push(e[a].style);
            else if ("gr" === t[a].ty) {
              if (l)
                for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
              else e[a] = this.createGroupElement(t[a]);
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, f)
            } else "tr" === t[a].ty ? (l || (c = this.createTransformElement(t[a]), e[a] = c), f.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), d.push(h)) : "rp" === t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), e[a] = h, h.init(this, t, a, e), this.shapeModifiers.push(h), i = !1), d.push(h));
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), u = d.length, a = 0; a < u; a += 1) d[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, r, i, n, a, s, o, l, h = this.stylesList.length,
            c = this.globalData.renderer,
            u = this.globalData.canvasContext;
          for (t = 0; t < h; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (c.save(), a = l.elements, "st" === o || "gs" === o ? (c.ctxStrokeStyle("st" === o ? l.co : l.grd), c.ctxLineWidth(l.wi), c.ctxLineCap(l.lc), c.ctxLineJoin(l.lj), c.ctxMiterLimit(l.ml || 0)) : c.ctxFillStyle("fl" === o ? l.co : l.grd), c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && u.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                for ("st" !== o && "gs" !== o || (u.beginPath(), l.da && (u.setLineDash(l.da), u.lineDashOffset = l.do)), n = (s = a[e].trNodes).length, i = 0; i < n; i += 1) "m" === s[i].t ? u.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? u.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : u.closePath();
                "st" !== o && "gs" !== o || (c.ctxStroke(), l.da && u.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), c.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
          var n, a;
          for (a = t, n = e.length - 1; n >= 0; n -= 1) "tr" === e[n].ty ? (a = r[n].transform, this.renderShapeTransform(t, a)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], r[n]) : "fl" === e[n].ty ? this.renderFill(e[n], r[n], a) : "st" === e[n].ty ? this.renderStroke(e[n], r[n], a) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], r[n], a) : "gr" === e[n].ty ? this.renderShape(a, e[n].it, r[n].it) : e[n].ty;
          i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, i, n, a = t.trNodes,
              s = e.paths,
              o = s._length;
            a.length = 0;
            var l = t.transforms.finalTransform;
            for (n = 0; n < o; n += 1) {
              var h = s.shapes[n];
              if (h && h.v) {
                for (i = h._length, r = 1; r < i; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === i && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && i && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var r, i = e.styledShapes.length;
            for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, r) {
          var i = e.style;
          (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
          var i, n = e.style;
          if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                u = e.h.v;
              u >= 1 ? u = .99 : u <= -1 && (u = -.99);
              var p = h * u,
                d = Math.cos(c + e.a.v) * p + o[0],
                f = Math.sin(c + e.a.v) * p + o[1];
              i = s.createRadialGradient(d, f, 0, o[0], o[1], h)
            }
            var m = t.g.p,
              v = e.g.c,
              g = 1;
            for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), i.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + g + ")");
            n.grd = i
          }
          n.coOp = e.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
          var i = e.style,
            n = e.d;
          n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var r = !1;
          t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var i, n, a, s, o, l, h, c, u, p, d, f, m = this.globalData.fontManager.getFontByName(t.f),
            v = t.l,
            g = this.mHelper;
          this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
          var y = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            S = 0,
            E = !0,
            P = 0;
          for (i = 0; i < n; i += 1) {
            s = (a = this.globalData.fontManager.getCharData(t.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), y && v[i].n && (x = -b, S += t.yOffset, S += E ? 1 : 0, E = !1), u = (h = s.shapes ? s.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, g, v[i].line, x, S), d = createSizedArray(u - 1);
            var w = 0;
            for (c = 0; c < u; c += 1)
              if ("sh" === h[c].ty) {
                for (l = h[c].ks.k.i.length, p = h[c].ks.k, f = [], o = 1; o < l; o += 1) 1 === o && f.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                f.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d[w] = f, w += 1
              } y && (x += v[i].l, x += b), this.textSpans[P] ? this.textSpans[P].elem = d : this.textSpans[P] = {
              elem: d
            }, P += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, r, i, n, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var h, c, u = null,
            p = null,
            d = null,
            f = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((s = o[t]) && (f.save(), f.ctxTransform(s.p), f.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? u !== s.fc && (f.ctxFillStyle(s.fc), u = s.fc) : u !== this.values.fill && (u = this.values.fill, f.ctxFillStyle(this.values.fill)), i = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = h[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? d !== s.sw && (d = s.sw, f.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, f.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, f.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, f.ctxStrokeStyle(this.values.stroke)), i = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = h[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, i = t.getContext("2d"),
              n = this.img.width,
              a = this.img.height,
              s = n / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (r = a) * o : r = (e = n) / o, i.drawImage(this.img, (n - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
          this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
          this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
          this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
          this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
          this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
          this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function(t) {
          this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
          this.canvasContext.fillRect(t, e, r, i)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var r = "0px 0px 0px";
            e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var r, i, n, a;
          if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              h = l.substr(0, 4),
              c = l.substr(4);
            n = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === o || a < n && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var r;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            e[t] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(t) {
          this.cArrPos -= 1;
          var e, r = this.stack[this.cArrPos],
            i = r.transform,
            n = this.cTr.props;
          for (e = 0; e < 16; e += 1) n[e] = i[e];
          if (t) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (t || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, i = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) i.transform[r] = e[r];
          this.cArrPos += 1;
          var n = this.stack[this.cArrPos];
          n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit
        }, CVContextData.prototype.setOpacity = function(t) {
          this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function(t) {
          this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function(t) {
          this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function(t) {
          this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function(t) {
          this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function(t) {
          this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function(t) {
          this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function(t) {
          this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function(t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
          var r = e.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, r, i) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var r, i, n, a, s, o = t.sh.v,
            l = t.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, e);
            o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, r, i, n) {
          this.getBoundsOfCurve(t, e, r, i);
          var a = this.shapeBoundingBox;
          n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
          for (var n, a, s, o, l, h, c, u = [
              [t[0], i[0]],
              [t[1], i[1]]
            ], p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * r[p], n = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * i[p], s = 3 * e[p] - 3 * t[p], a |= 0, s |= 0, 0 == (n |= 0) && 0 === a || (0 === n ? (o = -s / a) > 0 && o < 1 && u[p].push(this.calculateF(o, t, e, r, i, p)) : (l = a * a - 4 * s * n) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * n)) > 0 && h < 1 && u[p].push(this.calculateF(h, t, e, r, i, p)), (c = (-a - bmSqrt(l)) / (2 * n)) > 0 && c < 1 && u[p].push(this.calculateF(c, t, e, r, i, p))));
          this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1])
        }, HShapeElement.prototype.calculateF = function(t, e, r, i, n, a) {
          return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * n[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var r, i = t.length;
          for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var r = 0;
          if (t.keyframes) {
            for (var i = 0; i < t.keyframes.length; i += 1) {
              var n = t.keyframes[i].s;
              n > r && (r = n)
            }
            r *= t.mult
          } else r = t.v * t.mult;
          e.x -= r, e.xMax += r, e.y -= r, e.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var r = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var i = this.shapeCont.style,
                n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              i.transform = n, i.webkitTransform = n
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var i, n, a = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              e.fontFamily = a.fFamily;
              var s = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = s
            } var l, h, c, u = t.l;
          n = u.length;
          var p, d = this.mHelper,
            f = "",
            m = 0;
          for (i = 0; i < n; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var v, g = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (v = g ? g.data : null, d.reset(), v && v.shapes && v.shapes.length && (p = v.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), f = this.createPathShape(d, p), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), v && v.shapes) {
                  document.body.appendChild(c);
                  var y = c.getBBox();
                  c.setAttribute("width", y.width + 2), c.setAttribute("height", y.height + 2), c.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = c.style,
                    x = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, u[i].yOffset = y.y - 1
                } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                h.appendChild(c)
              }
            } else if (l.textContent = u[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var S = l.style,
                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              S.transform = E, S.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, i, n, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (i = h.length, r = 0; r < i; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], n = l[o], o += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc), s.style.color = n.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var c = this.innerElem.getBBox();
              if (this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height)), this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = u, t.webkitTransform = u
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, r, i, n = this.comp.threeDElements.length;
          for (t = 0; t < n; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              r = e.perspectiveElem.style, i = e.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, r = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var i = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var n;
              n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                s = [n[0] / a, n[1] / a, n[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                h = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var c = !this._prevMat.equals(this.mat);
            if ((c || this.pe._mdf) && this.comp.threeDElements) {
              var u, p, d;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (u = this.comp.threeDElements[t]).type) {
                  if (c) {
                    var f = this.mat.toCSS();
                    (d = u.container.style).transform = f, d.webkitTransform = f
                  }
                  this.pe._mdf && ((p = u.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var r = t.getBaseElement();
          if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
              for (var n, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
              n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, r = this.threeDElements.length; e < r;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var r, i, n = createTag("div");
          styleDiv(n);
          var a = createTag("div");
          if (styleDiv(a), "3d" === e) {
            (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (i = a.style).transform = o, i.webkitTransform = o
          }
          n.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: n,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, r = this.layers.length,
            i = "";
          for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (e <= this.threeDElements[r].endPos) {
              for (var n, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
              n ? this.threeDElements[r].container.insertBefore(t, n) : this.threeDElements[r].container.appendChild(t);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            r = this.animationItem.wrapper,
            i = e.style;
          i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
          var n = createNS("svg");
          n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
          var a = createNS("defs");
          n.appendChild(a), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, r, i, n = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = n / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              i = this.threeDElements.length;
            for (t = 0; t < i; t += 1) {
              var n = this.threeDElements[t].perspectiveElem.style;
              n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, r = t.length,
            i = createTag("div");
          for (e = 0; e < r; e += 1)
            if (t[e].xt) {
              var n = this.createComp(t[e], i, this.globalData.comp, null);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
          r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var r = 0, i = t.layers.length; r < i;) {
              if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }

        function seedRandom(t, e) {
          var r, i = this,
            n = 256,
            a = "random",
            s = e.pow(n, 6),
            o = e.pow(2, 52),
            l = 2 * o,
            h = 255;

          function c(t) {
            var e, r = t.length,
              i = this,
              a = 0,
              s = i.i = i.j = 0,
              o = i.S = [];
            for (r || (t = [r++]); a < n;) o[a] = a++;
            for (a = 0; a < n; a++) o[a] = o[s = h & s + t[a % r] + (e = o[a])], o[s] = e;
            i.g = function(t) {
              for (var e, r = 0, a = i.i, s = i.j, o = i.S; t--;) e = o[a = h & a + 1], r = r * n + o[h & (o[a] = o[s = h & s + e]) + (o[s] = e)];
              return i.i = a, i.j = s, r
            }
          }

          function u(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function p(t, e) {
            var r, i = [],
              n = _typeof$2(t);
            if (e && "object" == n)
              for (r in t) try {
                i.push(p(t[r], e - 1))
              } catch (t) {}
            return i.length ? i : "string" == n ? t : t + "\0"
          }

          function d(t, e) {
            for (var r, i = t + "", n = 0; n < i.length;) e[h & n] = h & (r ^= 19 * e[h & n]) + i.charCodeAt(n++);
            return f(e)
          }

          function f(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + a] = function(h, m, v) {
            var g = [],
              y = d(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, f(t)] : null === h ? function() {
                try {
                  r;
                  var e = new Uint8Array(n);
                  return (i.crypto || i.msCrypto).getRandomValues(e), f(e)
                } catch (e) {
                  var a = i.navigator,
                    s = a && a.plugins;
                  return [+new Date, i, s, i.screen, f(t)]
                }
              }() : h, 3), g),
              b = new c(g),
              x = function() {
                for (var t = b.g(6), e = s, r = 0; t < o;) t = (t + r) * n, e *= n, r = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, r >>>= 1;
                return (t + r) / e
              };
            return x.int32 = function() {
              return 0 | b.g(4)
            }, x.quick = function() {
              return b.g(4) / 4294967296
            }, x.double = x, d(f(b.S), t), (m.pass || v || function(t, r, i, n) {
              return n && (n.S && u(n, b), t.state = function() {
                return u(b, {})
              }), i ? (e[a] = t, r) : t
            })(x, y, "global" in m ? m.global : this == e, m.state)
          }, d(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
              var e = _typeof$1(t);
              if ("number" === e || t instanceof Number || "boolean" === e) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r, i = t.length,
                  n = [];
                for (r = 0; r < i; r += 1) n[r] = -t[r];
                return n
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var r = _typeof$1(t),
                i = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(i, e) || "string" === r || "string" === i) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var n = 0, a = t.length, s = e.length, o = []; n < a || n < s;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var r = _typeof$1(t),
                i = _typeof$1(e);
              if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var n = 0, a = t.length, s = e.length, o = []; n < a || n < s;)("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var r, i, n, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] * e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t * e[i];
                return r
              }
              return 0
            }

            function div(t, e) {
              var r, i, n, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] / e;
                return r
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t / e[i];
                return r
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, r) {
              if (e > r) {
                var i = r;
                r = e, e = i
              }
              return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length),
                n = 0;
              for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(n)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, r, i = t[0],
                n = t[1],
                a = t[2],
                s = Math.max(i, n, a),
                o = Math.min(i, n, a),
                l = (s + o) / 2;
              if (s === o) e = 0, r = 0;
              else {
                var h = s - o;
                switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                  case i:
                    e = (n - a) / h + (n < a ? 6 : 0);
                    break;
                  case n:
                    e = (a - i) / h + 2;
                    break;
                  case a:
                    e = (i - n) / h + 4
                }
                e /= 6
              }
              return [e, r, l, t[3]]
            }

            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
              var e, r, i, n = t[0],
                a = t[1],
                s = t[2];
              if (0 === a) e = s, i = s, r = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                e = hue2rgb(l, o, n + 1 / 3), r = hue2rgb(l, o, n), i = hue2rgb(l, o, n - 1 / 3)
              }
              return [e, r, i, t[3]]
            }

            function linear(t, e, r, i, n) {
              if (void 0 !== i && void 0 !== n || (i = e, n = r, e = 0, r = 1), r < e) {
                var a = r;
                r = e, e = a
              }
              if (t <= e) return i;
              if (t >= r) return n;
              var s, o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (n - i) * o;
              var l = i.length,
                h = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) h[s] = i[s] + (n[s] - i[s]) * o;
              return h
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, i = e.length;
                t || (t = createTypedArray("float32", i));
                var n = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) n[r] = t[r] + a * (e[r] - t[r]);
                return n
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, i) {
              var n, a = t.length,
                s = shapePool.newElement();
              s.setPathData(!!i, a);
              var o, l, h = [0, 0];
              for (n = 0; n < a; n += 1) o = e && e[n] ? e[n] : h, l = r && r[n] ? r[n] : h, s.setTripleAt(t[n][0], t[n][1], l[0] + t[n][0], l[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var r, i, n = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", n),
                    s = Math.floor(5 * time);
                  for (r = 0, i = 0; r < s;) {
                    for (i = 0; i < n; i += 1) a[i] += -e + 2 * e * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", n);
                  if (n > 1) {
                    for (i = 0; i < n; i += 1) h[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * l;
                    return h
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
              }

              function easeOut(t, e, r, i, n) {
                return applyEase(easeOutBez, t, e, r, i, n)
              }

              function easeIn(t, e, r, i, n) {
                return applyEase(easeInBez, t, e, r, i, n)
              }

              function ease(t, e, r, i, n) {
                return applyEase(easeInOutBez, t, e, r, i, n)
              }

              function applyEase(t, e, r, i, n, a) {
                void 0 === n ? (n = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                var s = t(e);
                if ($bm_isInstanceOfArray(n)) {
                  var o, l = n.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (a[o] - n[o]) * s + n[o];
                  return h
                }
                return (a - n) * s + n
              }

              function nearestKey(t) {
                var e, r, i, n = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                  else {
                    for (e = 0; e < n - 1; e += 1) {
                      if (t === data.k[e].t) {
                        r = e + 1, i = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                        break
                      }
                    } - 1 === r && (r = e + 1, i = data.k[e].t)
                  }
                else r = 0, i = 0;
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
              }

              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (i = n.length, r = 0; r < i; r += 1) e[r] = n[r], e.value[r] = n[r];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = r.length;
                    for (t = 0; t < e; t += 1) r[t].release();
                    r.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === r.indexOf(t) && r.push(t)
                }
              }
            };
            return t.resetFrame = ExpressionManager.resetFrame, t
          }(),
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var r, i = createSizedArray(e.viewData.length),
                  n = e.viewData.length;
                for (r = 0; r < n; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                  for (r = 0; r < n;) {
                    if (e.masksProperties[r].nm === t) return i[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(t, e, r) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                if (!t.numKeys) return 0;
                var n;
                n = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                var a = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? n[0] : n, a
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function i() {
              return t
            }
            return function(n) {
              return n ? "unidimensional" === n.propType ? function(e) {
                e && "pv" in e || (e = t);
                var i = 1 / e.mult,
                  n = e.pv * i,
                  a = new Number(n);
                return a.value = n, r(a, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), n = e.v * i, a.value !== n && ((a = new Number(n)).value = n, r(a, e, "unidimensional")), a
                  }
              }(n) : function(t) {
                t && "pv" in t || (t = e);
                var i = 1 / t.mult,
                  n = t.data && t.data.l || t.pv.length,
                  a = createTypedArray("float32", n),
                  s = createTypedArray("float32", n);
                return a.value = s, r(a, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < n; e += 1) s[e] = t.v[e] * i, a[e] = s[e];
                    return a
                  }
              }(n) : i
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var r, i, n, a;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (n = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? a() : [r(), i(), n ? n() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
            }

            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t)
            }

            function i(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
            }

            function n(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(h) {
              var c;

              function u(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return u.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return c;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return u.effect;
                  case "ADBE Text Properties":
                    return u.textInterface;
                  default:
                    return null
                }
              }
              u.getMatrix = t, u.invertPoint = s, u.applyPoint = a, u.toWorld = r, u.toWorldVec = e, u.fromWorld = n, u.fromWorldVec = i, u.toComp = r, u.fromComp = o, u.sampleImage = l, u.sourceRectAtTime = h.sourceRectAtTime.bind(h), u._elem = h;
              var p = getDescriptor(c = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(u, {
                hasParent: {
                  get: function() {
                    return h.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return h.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(c, "rotation"),
                scale: getDescriptor(c, "scale"),
                position: getDescriptor(c, "position"),
                opacity: getDescriptor(c, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return c
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), u.startTime = h.data.st, u.index = h.data.ind, u.source = h.data.refId, u.height = 0 === h.data.ty ? h.data.h : 100, u.width = 0 === h.data.ty ? h.data.w : 100, u.inPoint = h.data.ip / h.comp.globalData.frameRate, u.outPoint = h.data.op / h.comp.globalData.frameRate, u._name = h.data.nm, u.registerMaskInterface = function(t) {
                u.mask = new MaskManagerInterface(t, h)
              }, u.registerEffectsInterface = function(t) {
                u.effect = t
              }, u
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var r = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(r, i, n, a) {
              function s(t) {
                for (var e = r.ef, i = 0, n = e.length; i < n;) {
                  if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? h[i] : h[i]();
                  i += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, n),
                h = [],
                c = r.ef.length;
              for (o = 0; o < c; o += 1) 5 === r.ef[o].ty ? h.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : h.push(e(i.effectElements[o], r.ef[o].ty, a, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return h[0]()
                }
              }), Object.defineProperties(s, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), s.enabled = 0 !== r.en, s.active = s.enabled, s
            }

            function e(t, e, r, i) {
              var n = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                function() {
                  return 10 === e ? r.comp.compInterface(t.p.v) : n()
                }
            }
            return {
              createEffectsInterface: function(e, r) {
                if (e.effectsManager) {
                  var i, n = [],
                    a = e.data.ef,
                    s = e.effectsManager.effectElements.length;
                  for (i = 0; i < s; i += 1) n.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (i = 0, s = o.length; i < s;) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return n[i];
                        i += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, r) {
            var i = e.sh;

            function n(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
            }
            var a = propertyGroupFactory(n, r);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              shape: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: r
              }
            }), n
          },
          ShapeExpressionInterface = function() {
            function t(t, s, p) {
              var d, f = [],
                m = t ? t.length : 0;
              for (d = 0; d < m; d += 1) "gr" === t[d].ty ? f.push(e(t[d], s[d], p)) : "fl" === t[d].ty ? f.push(r(t[d], s[d], p)) : "st" === t[d].ty ? f.push(n(t[d], s[d], p)) : "tm" === t[d].ty ? f.push(a(t[d], s[d], p)) : "tr" === t[d].ty || ("el" === t[d].ty ? f.push(o(t[d], s[d], p)) : "sr" === t[d].ty ? f.push(l(t[d], s[d], p)) : "sh" === t[d].ty ? f.push(ShapePathInterface(t[d], s[d], p)) : "rc" === t[d].ty ? f.push(h(t[d], s[d], p)) : "rd" === t[d].ty ? f.push(c(t[d], s[d], p)) : "rp" === t[d].ty ? f.push(u(t[d], s[d], p)) : "gf" === t[d].ty ? f.push(i(t[d], s[d], p)) : f.push((t[d], s[d], function() {
                return null
              })));
              return f
            }

            function e(e, r, i) {
              var n = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return n.content;
                  default:
                    return n.transform
                }
              };
              n.propertyGroup = propertyGroupFactory(n, i);
              var a = function(e, r, i) {
                  var n, a = function(t) {
                    for (var e = 0, r = n.length; e < r;) {
                      if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                      e += 1
                    }
                    return "number" == typeof t ? n[t - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, i), n = t(e.it, r.it, a.propertyGroup), a.numProperties = n.length;
                  var o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                }(e, r, n.propertyGroup),
                o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
              return n.content = a, n.transform = o, Object.defineProperty(n, "_name", {
                get: function() {
                  return e.nm
                }
              }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
            }

            function r(t, e, r) {
              function i(t) {
                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
              }
              return Object.defineProperties(i, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function i(t, e, r) {
              function i(t) {
                return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
              }
              return Object.defineProperties(i, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function n(t, e, r) {
              var i, n = propertyGroupFactory(h, r),
                a = propertyGroupFactory(l, n);

              function s(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (i = 0; i < o; i += 1) s(i), e.d.dataProps[i].p.setGroupProperty(a);

              function h(t) {
                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), h
            }

            function a(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
              }
              var n = propertyGroupFactory(i, r);
              return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", n)), e.e.setGroupProperty(PropertyInterface("End", n)), e.o.setGroupProperty(PropertyInterface("Offset", n)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function s(t, e, r) {
              function i(e) {
                return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
              }
              var n = propertyGroupFactory(i, r);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
            }

            function o(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
              }
              var n = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(i, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", n)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), a.pt.setGroupProperty(PropertyInterface("Points", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(a.r)
                },
                points: {
                  get: ExpressionPropertyInterface(a.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(a.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(a.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(a.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(a.is)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return i.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", n)), a.s.setGroupProperty(PropertyInterface("Size", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(a.r)
                },
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function c(t, e, r) {
              function i(e) {
                return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
              }
              var n = propertyGroupFactory(i, r),
                a = e;
              return i.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(i, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }

            function u(t, e, r) {
              function i(e) {
                return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
              }
              var n = propertyGroupFactory(i, r),
                a = e;
              return i.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", n)), a.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(i, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: t.nm
                }
              }), i.mn = t.mn, i
            }
            return function(e, r, i) {
              var n;

              function a(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : n[t - 1];
                for (var e = 0, r = n.length; e < r;) {
                  if (n[e]._name === t) return n[e];
                  e += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return i
              })), n = t(e, r, a.propertyGroup), a.numProperties = n.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function r(t) {
              return "ADBE Text Document" === t ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var r = t.textProperty.currentData.t;
                return e && r === e.value || ((e = new String(r)).value = r || new String(r), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), r
          };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                r = t.getFootageData();

              function i(t) {
                if (r[t]) return e = t, "object" === _typeof(r = r[t]) ? i : r;
                var n = t.indexOf(e);
                if (-1 !== n) {
                  var a = parseInt(t.substr(n + e.length), 10);
                  return "object" === _typeof(r = r[a]) ? i : r
                }
                return ""
              }
              return function() {
                return e = "", r = t.getFootageData(), i
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }
        var expressionHelpers = {
          searchExpressions: function(t, e, r) {
            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              r = this.getValueAtTime(t + -.01),
              i = 0;
            if (e.length) {
              var n;
              for (n = 0; n < e.length; n += 1) i += Math.pow(r[n] - e[n], 2);
              i = 100 * Math.sqrt(i)
            } else i = 0;
            return i
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, r, i = -.001,
              n = this.getValueAtTime(t),
              a = this.getValueAtTime(t + i);
            if (n.length)
              for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (a[r] - n[r]) / i;
            else e = (a - n) / i;
            return e
          },
          getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(t) {
            this.propertyGroup = t
          }
        };

        function addPropertyDecorator() {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[h.length - 1].t;
            if (l <= c) return this.pv;
            if (r ? n = c - (i = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = c - (n = h[h.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - n) / i) % 2 != 0) return this.getValueAtTime((i - (l - n) % i + n) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((l - n) / i);
                if (this.pv.length) {
                  for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - u[a]) * f + d[a];
                  return o
                }
                return (p - u) * f + d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - c) / .001 * (m - v)
              }
            }
            return this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[0].t;
            if (l >= c) return this.pv;
            if (r ? n = c + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (n = h[e].t) - c), "pingpong" === t) {
              if (Math.floor((c - l) / i) % 2 == 0) return this.getValueAtTime(((c - l) % i + c) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime((i - (c - l) % i + c) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((c - l) / i) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1) o[a] = d[a] - (p[a] - u[a]) * f;
                  return o
                }
                return d - (p - u) * f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * (c - l) / .001;
                  return o
                }
                return m + (m - v) * (c - l) / .001
              }
            }
            return this.getValueAtTime((i - ((c - l) % i + c)) / this.comp.globalData.frameRate, 0)
          }

          function r(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = n - t,
              s = e > 1 ? (n + t - a) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (i = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
              else r += i;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
            else r /= e;
            return r
          }

          function i(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(t);
              e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(t);
              e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var n = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-n * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(t);
              e.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                h = this.rx.getValueAtTime(t),
                c = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var u = this.px.getValueAtTime(t),
                p = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var d = this.pz.getValueAtTime(t);
                e.translate(u * this.px.mult, p * this.py.mult, -d * this.pz.mult)
              } else e.translate(u * this.px.mult, p * this.py.mult, 0)
            } else {
              var f = this.p.getValueAtTime(t);
              e.translate(f[0] * this.p.mult, f[1] * this.p.mult, -f[2] * this.p.mult)
            }
            return e
          }

          function n() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var s = a(t, e, r);
            return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = n.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(i, n, a, o, l) {
            var h = s(i, n, a, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === n.a ? n.k.length : 0, h.propertyIndex = n.ix;
            var c = 0;
            return 0 !== a && (c = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: c
            }, expressionHelpers.searchExpressions(i, n, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var r, i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var n = i._length,
                a = i[t],
                s = i.v,
                o = createSizedArray(n);
              for (r = 0; r < n; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var i, n = this._segmentsLength, a = n.lengths, s = n.totalLength * t, o = 0, l = a.length, h = 0; o < l;) {
                if (h + a[o].addedLength > s) {
                  var c = o,
                    u = r.c && o === l - 1 ? 0 : o + 1,
                    p = (s - h) / a[o].addedLength;
                  i = bez.getPointInSegment(r.v[c], r.v[u], r.o[c], r.i[u], p, a[o]);
                  break
                }
                h += a[o].addedLength, o += 1
              }
              return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(t, e, r) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var i = this.pointOnPath(t, e),
                n = this.pointOnPath(t + .001, e),
                a = n[0] - i[0],
                s = n[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var c = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, r, i, n) {
            var a = c(t, e, r, i, n);
            return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t !== r) {
              var i = {};
              return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var r, i, n = createNS("feMerge");
            for (n.setAttribute("result", t), i = 0; i < e.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", e[i]), n.appendChild(r), n.appendChild(r);
            return n
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, r, i, n) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(i, [n, i + "_tint_1", i + "_tint_2"]);
          t.appendChild(s)
        }

        function SVGFillFilter(t, e, r, i) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i), t.appendChild(n), this.matrixFilter = n
        }

        function SVGStrokeEffect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(t, e, r, i) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(n);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, t.appendChild(a)
        }

        function SVGProLevelsFilter(t, e, r, i) {
          this.filterManager = e;
          var n = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(t, e, r, i, n) {
          var a = e.container.globalData.renderConfig.filterSize,
            s = e.data.fs || a;
          t.setAttribute("x", s.x || a.x), t.setAttribute("y", s.y || a.y), t.setAttribute("width", s.width || a.width), t.setAttribute("height", s.height || a.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
          var c = createNS("feComposite");
          c.setAttribute("in", i + "_drop_shadow_3"), c.setAttribute("in2", i + "_drop_shadow_2"), c.setAttribute("operator", "in"), c.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(c);
          var u = this.createMergeNode(i, [i + "_drop_shadow_4", n]);
          t.appendChild(u)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); n[0];) o.appendChild(n[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var r, i, n = this.paths.length;
          for (e = 0; e < n; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = i.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var h, c = l * (o - s),
                  u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(c / u);
                for (h = 0; h < p; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              i.setAttribute("stroke-dasharray", a)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var d = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              n = i[0] + " " + r[0] + " " + e[0],
              a = i[1] + " " + r[1] + " " + e[1],
              s = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var r = createNS(t);
          return r.setAttribute("type", "table"), e.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, n) {
          for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, {
              length: 256
            }), u = 0, p = n - i, d = e - t; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? n : i : a >= h ? d < 0 ? i : n : i + p * Math.pow((a - t) / d, 1 / r), c[u] = s, u += 1, o += 256 / 255;
          return c.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                n = r * Math.cos(i),
                a = r * Math.sin(i);
              this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(t, e, r, i) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var n = createNS("feGaussianBlur");
          n.setAttribute("result", i), t.appendChild(n), this.feGaussianBlur = n
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var r = t.layerElement.parentNode;
          if (r) {
            for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== t.layerElement;) a += 1;
            a <= s - 2 && (i = n[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var r = createElementID(),
              i = createNS("mask");
            i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var n = t.globalData.defs;
            n.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), n.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + r), i.appendChild(s), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = 3 == r ? 0 : e,
              n = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              r = e[0].p.v,
              i = e[1].p.v,
              n = 1 === e[2].p.v,
              a = e[3].p.v,
              s = n ? a : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              h = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    44392: t => {
      var e, r, i = t.exports = {};

      function n() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === n || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (r) {
          try {
            return e.call(null, t, 0)
          } catch (r) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
          e = n
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
          r = a
        }
      }();
      var o, l = [],
        h = !1,
        c = -1;

      function u() {
        h && o && (h = !1, o.length ? l = o.concat(l) : c = -1, l.length && p())
      }

      function p() {
        if (!h) {
          var t = s(u);
          h = !0;
          for (var e = l.length; e;) {
            for (o = l, l = []; ++c < e;) o && o[c].run();
            c = -1, e = l.length
          }
          o = null, h = !1,
            function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
              try {
                return r(t)
              } catch (e) {
                try {
                  return r.call(null, t)
                } catch (e) {
                  return r.call(this, t)
                }
              }
            }(t)
        }
      }

      function d(t, e) {
        this.fun = t, this.array = e
      }

      function f() {}
      i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        l.push(new d(t, e)), 1 !== l.length || h || s(p)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(t) {
        return []
      }, i.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    54280: (t, e, r) => {
      "use strict";
      var i = r(75004);

      function n() {}

      function a() {}
      a.resetWarningCache = n, t.exports = function() {
        function t(t, e, r, n, a, s) {
          if (s !== i) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function e() {
          return t
        }
        t.isRequired = t;
        var r = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: a,
          resetWarningCache: n
        };
        return r.PropTypes = r, r
      }
    },
    71424: (t, e, r) => {
      t.exports = r(54280)()
    },
    75004: t => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    44236: function(t, e, r) {
      class i {
        constructor() {
          this.data = r(82396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          }))
        }
        getValue(t) {
          return this.labelMap[t.toLowerCase()]
        }
        getLabel(t) {
          return this.valueMap[t.toLowerCase()]
        }
        getLabels() {
          return this.data.map((t => t.label))
        }
        getValues() {
          return this.data.map((t => t.value))
        }
        getLabelList() {
          return this.labelMap
        }
        getValueList() {
          return this.valueMap
        }
        getData() {
          return this.data
        }
        setLabel(t, e) {
          return this.data.forEach((r => {
            r.value === t && (r.label = e, this.valueMap[r.value.toLowerCase()] = r.label)
          })), this
        }
        setEmpty(t) {
          return this.data.unshift({
            value: "",
            label: t
          }), this.valueMap[""] = t, this.labelMap[t] = "", this
        }
        native() {
          return this.nativeData = r(78048), this.nativeData.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          })), this
        }
      }
      t.exports = () => {
        if (!(this instanceof i)) return new i
      }
    },
    12231: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => l
      });
      const i = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let n;
      const a = new Uint8Array(16);

      function s() {
        if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(a)
      }
      const o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      const l = function(t, e, r) {
        if (i.randomUUID && !e && !t) return i.randomUUID();
        const n = (t = t || {}).random || (t.rng || s)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = n[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]
        }(n)
      }
    },
    40684: (t, e, r) => {
      r(19808), t.exports = r(37208).Object.assign
    },
    41248: (t, e, r) => {
      r(47779);
      var i = r(37208).Object;
      t.exports = function(t, e) {
        return i.create(t, e)
      }
    },
    47952: (t, e, r) => {
      r(19652);
      var i = r(37208).Object;
      t.exports = function(t, e, r) {
        return i.defineProperty(t, e, r)
      }
    },
    37488: (t, e, r) => {
      r(24048), t.exports = r(37208).Object.getPrototypeOf
    },
    46760: (t, e, r) => {
      r(16200), t.exports = r(37208).Object.setPrototypeOf
    },
    12400: (t, e, r) => {
      r(37104), r(14788), r(71284), r(93696), t.exports = r(37208).Symbol
    },
    32784: (t, e, r) => {
      r(41852), r(63624), t.exports = r(33728).f("iterator")
    },
    18416: t => {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
      }
    },
    62016: t => {
      t.exports = function() {}
    },
    83060: (t, e, r) => {
      var i = r(93536);
      t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
      }
    },
    43572: (t, e, r) => {
      var i = r(28828),
        n = r(49344),
        a = r(82752);
      t.exports = function(t) {
        return function(e, r, s) {
          var o, l = i(e),
            h = n(l.length),
            c = a(s, h);
          if (t && r != r) {
            for (; h > c;)
              if ((o = l[c++]) != o) return !0
          } else
            for (; h > c; c++)
              if ((t || c in l) && l[c] === r) return t || c || 0;
          return !t && -1
        }
      }
    },
    79683: t => {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    37208: t => {
      var e = t.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = e)
    },
    76040: (t, e, r) => {
      var i = r(18416);
      t.exports = function(t, e, r) {
        if (i(t), void 0 === e) return t;
        switch (r) {
          case 1:
            return function(r) {
              return t.call(e, r)
            };
          case 2:
            return function(r, i) {
              return t.call(e, r, i)
            };
          case 3:
            return function(r, i, n) {
              return t.call(e, r, i, n)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    69396: t => {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
      }
    },
    65168: (t, e, r) => {
      t.exports = !r(65032)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    76440: (t, e, r) => {
      var i = r(93536),
        n = r(56384).document,
        a = i(n) && i(n.createElement);
      t.exports = function(t) {
        return a ? n.createElement(t) : {}
      }
    },
    21608: t => {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    9684: (t, e, r) => {
      var i = r(37108),
        n = r(70716),
        a = r(9520);
      t.exports = function(t) {
        var e = i(t),
          r = n.f;
        if (r)
          for (var s, o = r(t), l = a.f, h = 0; o.length > h;) l.call(t, s = o[h++]) && e.push(s);
        return e
      }
    },
    96604: (t, e, r) => {
      var i = r(56384),
        n = r(37208),
        a = r(76040),
        s = r(11480),
        o = r(58868),
        l = "prototype",
        h = function(t, e, r) {
          var c, u, p, d = t & h.F,
            f = t & h.G,
            m = t & h.S,
            v = t & h.P,
            g = t & h.B,
            y = t & h.W,
            b = f ? n : n[e] || (n[e] = {}),
            x = b[l],
            S = f ? i : m ? i[e] : (i[e] || {})[l];
          for (c in f && (r = e), r)(u = !d && S && void 0 !== S[c]) && o(b, c) || (p = u ? S[c] : r[c], b[c] = f && "function" != typeof S[c] ? r[c] : g && u ? a(p, i) : y && S[c] == p ? function(t) {
            var e = function(e, r, i) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t;
                  case 1:
                    return new t(e);
                  case 2:
                    return new t(e, r)
                }
                return new t(e, r, i)
              }
              return t.apply(this, arguments)
            };
            return e[l] = t[l], e
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[c] = p, t & h.R && x && !x[c] && s(x, c, p)))
        };
      h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, t.exports = h
    },
    65032: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    56384: t => {
      var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e)
    },
    58868: t => {
      var e = {}.hasOwnProperty;
      t.exports = function(t, r) {
        return e.call(t, r)
      }
    },
    11480: (t, e, r) => {
      var i = r(56008),
        n = r(15196);
      t.exports = r(65168) ? function(t, e, r) {
        return i.f(t, e, n(1, r))
      } : function(t, e, r) {
        return t[e] = r, t
      }
    },
    82176: (t, e, r) => {
      var i = r(56384).document;
      t.exports = i && i.documentElement
    },
    50160: (t, e, r) => {
      t.exports = !r(65168) && !r(65032)((function() {
        return 7 != Object.defineProperty(r(76440)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    45760: (t, e, r) => {
      var i = r(79683);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
      }
    },
    44244: (t, e, r) => {
      var i = r(79683);
      t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
      }
    },
    93536: t => {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    27e3: (t, e, r) => {
      "use strict";
      var i = r(75069),
        n = r(15196),
        a = r(76572),
        s = {};
      r(11480)(s, r(42516)("iterator"), (function() {
        return this
      })), t.exports = function(t, e, r) {
        t.prototype = i(s, {
          next: n(1, r)
        }), a(t, e + " Iterator")
      }
    },
    65708: (t, e, r) => {
      "use strict";
      var i = r(41380),
        n = r(96604),
        a = r(50496),
        s = r(11480),
        o = r(71148),
        l = r(27e3),
        h = r(76572),
        c = r(88872),
        u = r(42516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = "keys",
        f = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, r, v, g, y, b) {
        l(r, e, v);
        var x, S, E, P = function(t) {
            if (!p && t in M) return M[t];
            switch (t) {
              case d:
              case f:
                return function() {
                  return new r(this, t)
                }
            }
            return function() {
              return new r(this, t)
            }
          },
          w = e + " Iterator",
          T = g == f,
          C = !1,
          M = t.prototype,
          A = M[u] || M["@@iterator"] || g && M[g],
          _ = A || P(g),
          k = g ? T ? P("entries") : _ : void 0,
          D = "Array" == e && M.entries || A;
        if (D && (E = c(D.call(new t))) !== Object.prototype && E.next && (h(E, w, !0), i || "function" == typeof E[u] || s(E, u, m)), T && A && A.name !== f && (C = !0, _ = function() {
            return A.call(this)
          }), i && !b || !p && !C && M[u] || s(M, u, _), o[e] = _, o[w] = m, g)
          if (x = {
              values: T ? _ : P(f),
              keys: y ? _ : P(d),
              entries: k
            }, b)
            for (S in x) S in M || a(M, S, x[S]);
          else n(n.P + n.F * (p || C), e, x);
        return x
      }
    },
    9980: t => {
      t.exports = function(t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    71148: t => {
      t.exports = {}
    },
    41380: t => {
      t.exports = !0
    },
    60528: (t, e, r) => {
      var i = r(63540)("meta"),
        n = r(93536),
        a = r(58868),
        s = r(56008).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        h = !r(65032)((function() {
          return l(Object.preventExtensions({}))
        })),
        c = function(t) {
          s(t, i, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        u = t.exports = {
          KEY: i,
          NEED: !1,
          fastKey: function(t, e) {
            if (!n(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, i)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              c(t)
            }
            return t[i].i
          },
          getWeak: function(t, e) {
            if (!a(t, i)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              c(t)
            }
            return t[i].w
          },
          onFreeze: function(t) {
            return h && u.NEED && l(t) && !a(t, i) && c(t), t
          }
        }
    },
    43492: (t, e, r) => {
      "use strict";
      var i = r(65168),
        n = r(37108),
        a = r(70716),
        s = r(9520),
        o = r(47380),
        l = r(45760),
        h = Object.assign;
      t.exports = !h || r(65032)((function() {
        var t = {},
          e = {},
          r = Symbol(),
          i = "abcdefghijklmnopqrst";
        return t[r] = 7, i.split("").forEach((function(t) {
          e[t] = t
        })), 7 != h({}, t)[r] || Object.keys(h({}, e)).join("") != i
      })) ? function(t, e) {
        for (var r = o(t), h = arguments.length, c = 1, u = a.f, p = s.f; h > c;)
          for (var d, f = l(arguments[c++]), m = u ? n(f).concat(u(f)) : n(f), v = m.length, g = 0; v > g;) d = m[g++], i && !p.call(f, d) || (r[d] = f[d]);
        return r
      } : h
    },
    75069: (t, e, r) => {
      var i = r(83060),
        n = r(23876),
        a = r(21608),
        s = r(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        h = function() {
          var t, e = r(76440)("iframe"),
            i = a.length;
          for (e.style.display = "none", r(82176).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), h = t.F; i--;) delete h[l][a[i]];
          return h()
        };
      t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (o[l] = i(t), r = new o, o[l] = null, r[s] = t) : r = h(), void 0 === e ? r : n(r, e)
      }
    },
    56008: (t, e, r) => {
      var i = r(83060),
        n = r(50160),
        a = r(94800),
        s = Object.defineProperty;
      e.f = r(65168) ? Object.defineProperty : function(t, e, r) {
        if (i(t), e = a(e, !0), i(r), n) try {
          return s(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
      }
    },
    23876: (t, e, r) => {
      var i = r(56008),
        n = r(83060),
        a = r(37108);
      t.exports = r(65168) ? Object.defineProperties : function(t, e) {
        n(t);
        for (var r, s = a(e), o = s.length, l = 0; o > l;) i.f(t, r = s[l++], e[r]);
        return t
      }
    },
    34096: (t, e, r) => {
      var i = r(9520),
        n = r(15196),
        a = r(28828),
        s = r(94800),
        o = r(58868),
        l = r(50160),
        h = Object.getOwnPropertyDescriptor;
      e.f = r(65168) ? h : function(t, e) {
        if (t = a(t), e = s(e, !0), l) try {
          return h(t, e)
        } catch (t) {}
        if (o(t, e)) return n(!i.f.call(t, e), t[e])
      }
    },
    49920: (t, e, r) => {
      var i = r(28828),
        n = r(79584).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return s && "[object Window]" == a.call(t) ? function(t) {
          try {
            return n(t)
          } catch (t) {
            return s.slice()
          }
        }(t) : n(i(t))
      }
    },
    79584: (t, e, r) => {
      var i = r(67988),
        n = r(21608).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return i(t, n)
      }
    },
    70716: (t, e) => {
      e.f = Object.getOwnPropertySymbols
    },
    88872: (t, e, r) => {
      var i = r(58868),
        n = r(47380),
        a = r(7448)("IE_PROTO"),
        s = Object.prototype;
      t.exports = Object.getPrototypeOf || function(t) {
        return t = n(t), i(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
    },
    67988: (t, e, r) => {
      var i = r(58868),
        n = r(28828),
        a = r(43572)(!1),
        s = r(7448)("IE_PROTO");
      t.exports = function(t, e) {
        var r, o = n(t),
          l = 0,
          h = [];
        for (r in o) r != s && i(o, r) && h.push(r);
        for (; e.length > l;) i(o, r = e[l++]) && (~a(h, r) || h.push(r));
        return h
      }
    },
    37108: (t, e, r) => {
      var i = r(67988),
        n = r(21608);
      t.exports = Object.keys || function(t) {
        return i(t, n)
      }
    },
    9520: (t, e) => {
      e.f = {}.propertyIsEnumerable
    },
    91040: (t, e, r) => {
      var i = r(96604),
        n = r(37208),
        a = r(65032);
      t.exports = function(t, e) {
        var r = (n.Object || {})[t] || Object[t],
          s = {};
        s[t] = e(r), i(i.S + i.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    15196: t => {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    50496: (t, e, r) => {
      t.exports = r(11480)
    },
    46935: (t, e, r) => {
      var i = r(93536),
        n = r(83060),
        a = function(t, e) {
          if (n(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
          try {
            (i = r(76040)(Function.call, r(34096).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
          } catch (t) {
            e = !0
          }
          return function(t, r) {
            return a(t, r), e ? t.__proto__ = r : i(t, r), t
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    76572: (t, e, r) => {
      var i = r(56008).f,
        n = r(58868),
        a = r(42516)("toStringTag");
      t.exports = function(t, e, r) {
        t && !n(t = r ? t : t.prototype, a) && i(t, a, {
          configurable: !0,
          value: e
        })
      }
    },
    7448: (t, e, r) => {
      var i = r(13332)("keys"),
        n = r(63540);
      t.exports = function(t) {
        return i[t] || (i[t] = n(t))
      }
    },
    13332: (t, e, r) => {
      var i = r(37208),
        n = r(56384),
        a = "__core-js_shared__",
        s = n[a] || (n[a] = {});
      (t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: i.version,
        mode: r(41380) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    66268: (t, e, r) => {
      var i = r(9592),
        n = r(69396);
      t.exports = function(t) {
        return function(e, r) {
          var a, s, o = String(n(e)),
            l = i(r),
            h = o.length;
          return l < 0 || l >= h ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    82752: (t, e, r) => {
      var i = r(9592),
        n = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        return (t = i(t)) < 0 ? n(t + e, 0) : a(t, e)
      }
    },
    9592: t => {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t)
      }
    },
    28828: (t, e, r) => {
      var i = r(45760),
        n = r(69396);
      t.exports = function(t) {
        return i(n(t))
      }
    },
    49344: (t, e, r) => {
      var i = r(9592),
        n = Math.min;
      t.exports = function(t) {
        return t > 0 ? n(i(t), 9007199254740991) : 0
      }
    },
    47380: (t, e, r) => {
      var i = r(69396);
      t.exports = function(t) {
        return Object(i(t))
      }
    },
    94800: (t, e, r) => {
      var i = r(93536);
      t.exports = function(t, e) {
        if (!i(t)) return t;
        var r, n;
        if (e && "function" == typeof(r = t.toString) && !i(n = r.call(t))) return n;
        if ("function" == typeof(r = t.valueOf) && !i(n = r.call(t))) return n;
        if (!e && "function" == typeof(r = t.toString) && !i(n = r.call(t))) return n;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    63540: t => {
      var e = 0,
        r = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36))
      }
    },
    66152: (t, e, r) => {
      var i = r(56384),
        n = r(37208),
        a = r(41380),
        s = r(33728),
        o = r(56008).f;
      t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = a ? {} : i.Symbol || {});
        "_" == t.charAt(0) || t in e || o(e, t, {
          value: s.f(t)
        })
      }
    },
    33728: (t, e, r) => {
      e.f = r(42516)
    },
    42516: (t, e, r) => {
      var i = r(13332)("wks"),
        n = r(63540),
        a = r(56384).Symbol,
        s = "function" == typeof a;
      (t.exports = function(t) {
        return i[t] || (i[t] = s && a[t] || (s ? a : n)("Symbol." + t))
      }).store = i
    },
    2084: (t, e, r) => {
      "use strict";
      var i = r(62016),
        n = r(9980),
        a = r(71148),
        s = r(28828);
      t.exports = r(65708)(Array, "Array", (function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
      }), (function() {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, n(1)) : n(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
      }), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
    },
    19808: (t, e, r) => {
      var i = r(96604);
      i(i.S + i.F, "Object", {
        assign: r(43492)
      })
    },
    47779: (t, e, r) => {
      var i = r(96604);
      i(i.S, "Object", {
        create: r(75069)
      })
    },
    19652: (t, e, r) => {
      var i = r(96604);
      i(i.S + i.F * !r(65168), "Object", {
        defineProperty: r(56008).f
      })
    },
    24048: (t, e, r) => {
      var i = r(47380),
        n = r(88872);
      r(91040)("getPrototypeOf", (function() {
        return function(t) {
          return n(i(t))
        }
      }))
    },
    16200: (t, e, r) => {
      var i = r(96604);
      i(i.S, "Object", {
        setPrototypeOf: r(46935).set
      })
    },
    14788: () => {},
    41852: (t, e, r) => {
      "use strict";
      var i = r(66268)(!0);
      r(65708)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
      }), (function() {
        var t, e = this._t,
          r = this._i;
        return r >= e.length ? {
          value: void 0,
          done: !0
        } : (t = i(e, r), this._i += t.length, {
          value: t,
          done: !1
        })
      }))
    },
    37104: (t, e, r) => {
      "use strict";
      var i = r(56384),
        n = r(58868),
        a = r(65168),
        s = r(96604),
        o = r(50496),
        l = r(60528).KEY,
        h = r(65032),
        c = r(13332),
        u = r(76572),
        p = r(63540),
        d = r(42516),
        f = r(33728),
        m = r(66152),
        v = r(9684),
        g = r(44244),
        y = r(83060),
        b = r(93536),
        x = r(47380),
        S = r(28828),
        E = r(94800),
        P = r(15196),
        w = r(75069),
        T = r(49920),
        C = r(34096),
        M = r(70716),
        A = r(56008),
        _ = r(37108),
        k = C.f,
        D = A.f,
        I = T.f,
        F = i.Symbol,
        O = i.JSON,
        L = O && O.stringify,
        V = "prototype",
        R = d("_hidden"),
        B = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        z = c("symbol-registry"),
        G = c("symbols"),
        j = c("op-symbols"),
        H = Object[V],
        W = "function" == typeof F && !!M.f,
        q = i.QObject,
        U = !q || !q[V] || !q[V].findChild,
        $ = a && h((function() {
          return 7 != w(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(t, e, r) {
          var i = k(H, e);
          i && delete H[e], D(t, e, r), i && t !== H && D(H, e, i)
        } : D,
        Y = function(t) {
          var e = G[t] = w(F[V]);
          return e._k = t, e
        },
        X = W && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        K = function(t, e, r) {
          return t === H && K(j, e, r), y(t), e = E(e, !0), y(r), n(G, e) ? (r.enumerable ? (n(t, R) && t[R][e] && (t[R][e] = !1), r = w(r, {
            enumerable: P(0, !1)
          })) : (n(t, R) || D(t, R, P(1, {})), t[R][e] = !0), $(t, e, r)) : D(t, e, r)
        },
        Z = function(t, e) {
          y(t);
          for (var r, i = v(e = S(e)), n = 0, a = i.length; a > n;) K(t, r = i[n++], e[r]);
          return t
        },
        J = function(t) {
          var e = N.call(this, t = E(t, !0));
          return !(this === H && n(G, t) && !n(j, t)) && (!(e || !n(this, t) || !n(G, t) || n(this, R) && this[R][t]) || e)
        },
        Q = function(t, e) {
          if (t = S(t), e = E(e, !0), t !== H || !n(G, e) || n(j, e)) {
            var r = k(t, e);
            return !r || !n(G, e) || n(t, R) && t[R][e] || (r.enumerable = !0), r
          }
        },
        tt = function(t) {
          for (var e, r = I(S(t)), i = [], a = 0; r.length > a;) n(G, e = r[a++]) || e == R || e == l || i.push(e);
          return i
        },
        et = function(t) {
          for (var e, r = t === H, i = I(r ? j : S(t)), a = [], s = 0; i.length > s;) !n(G, e = i[s++]) || r && !n(H, e) || a.push(G[e]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function(r) {
            this === H && e.call(j, r), n(this, R) && n(this[R], t) && (this[R][t] = !1), $(this, t, P(1, r))
          };
        return a && U && $(H, t, {
          configurable: !0,
          set: e
        }), Y(t)
      })[V], "toString", (function() {
        return this._k
      })), C.f = Q, A.f = K, r(79584).f = T.f = tt, r(9520).f = J, M.f = et, a && !r(41380) && o(H, "propertyIsEnumerable", J, !0), f.f = function(t) {
        return Y(d(t))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var rt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; rt.length > it;) d(rt[it++]);
      for (var nt = _(d.store), at = 0; nt.length > at;) m(nt[at++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(t) {
          return n(z, t += "") ? z[t] : z[t] = F(t)
        },
        keyFor: function(t) {
          if (!X(t)) throw TypeError(t + " is not a symbol!");
          for (var e in z)
            if (z[e] === t) return e
        },
        useSetter: function() {
          U = !0
        },
        useSimple: function() {
          U = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(t, e) {
          return void 0 === e ? w(t) : Z(w(t), e)
        },
        defineProperty: K,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var st = h((function() {
        M.f(1)
      }));
      s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function(t) {
          return M.f(x(t))
        }
      }), O && s(s.S + s.F * (!W || h((function() {
        var t = F();
        return "[null]" != L([t]) || "{}" != L({
          a: t
        }) || "{}" != L(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, r, i = [t], n = 1; arguments.length > n;) i.push(arguments[n++]);
          if (r = e = i[1], (b(e) || void 0 !== t) && !X(t)) return g(e) || (e = function(t, e) {
            if ("function" == typeof r && (e = r.call(this, t, e)), !X(e)) return e
          }), i[1] = e, L.apply(O, i)
        }
      }), F[V][B] || r(11480)(F[V], B, F[V].valueOf), u(F, "Symbol"), u(Math, "Math", !0), u(i.JSON, "JSON", !0)
    },
    71284: (t, e, r) => {
      r(66152)("asyncIterator")
    },
    93696: (t, e, r) => {
      r(66152)("observable")
    },
    63624: (t, e, r) => {
      r(2084);
      for (var i = r(56384), n = r(11480), a = r(71148), s = r(42516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var h = o[l],
          c = i[h],
          u = c && c.prototype;
        u && !u[s] && n(u, s, h), a[h] = a.Array
      }
    },
    93428: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => Pt
      });
      var i = r(97064),
        n = r(99880);
      var a = r(8600),
        s = r(39860),
        o = r(3904);
      const l = t => t * t,
        h = (0, o._)(l),
        c = (0, s.Y)(l);
      var u = r(69032),
        p = r(85584),
        d = r(6764);

      function f(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
      }
      var m = r(22396),
        v = r(70588),
        g = r(30440);
      const y = (t, e, r) => {
          const i = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - i) + i))
        },
        b = [m.c, v.M, g.u];

      function x(t) {
        const e = (r = t, b.find((t => t.test(r))));
        var r;
        (0, i.O)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let n = e.parse(t);
        return e === g.u && (n = function({
          hue: t,
          saturation: e,
          lightness: r,
          alpha: i
        }) {
          t /= 360, r /= 100;
          let n = 0,
            a = 0,
            s = 0;
          if (e /= 100) {
            const i = r < .5 ? r * (1 + e) : r + e - r * e,
              o = 2 * r - i;
            n = f(o, i, t + 1 / 3), a = f(o, i, t), s = f(o, i, t - 1 / 3)
          } else n = a = s = r;
          return {
            red: Math.round(255 * n),
            green: Math.round(255 * a),
            blue: Math.round(255 * s),
            alpha: i
          }
        }(n)), n
      }
      const S = (t, e) => {
        const r = x(t),
          i = x(e),
          n = {
            ...r
          };
        return t => (n.red = y(r.red, i.red, t), n.green = y(r.green, i.green, t), n.blue = y(r.blue, i.blue, t), n.alpha = (0, d.C)(r.alpha, i.alpha, t), v.M.transform(n))
      };
      var E = r(51672),
        P = r(67700);

      function w(t, e) {
        return "number" == typeof t ? r => (0, d.C)(t, e, r) : u.I.test(t) ? S(t, e) : M(t, e)
      }
      const T = (t, e) => {
          const r = [...t],
            i = r.length,
            n = t.map(((t, r) => w(t, e[r])));
          return t => {
            for (let e = 0; e < i; e++) r[e] = n[e](t);
            return r
          }
        },
        C = (t, e) => {
          const r = {
              ...t,
              ...e
            },
            i = {};
          for (const n in r) void 0 !== t[n] && void 0 !== e[n] && (i[n] = w(t[n], e[n]));
          return t => {
            for (const e in i) r[e] = i[e](t);
            return r
          }
        },
        M = (t, e) => {
          const r = P.c.createTransformer(e),
            n = (0, P.Y)(t),
            a = (0, P.Y)(e);
          return n.numColors === a.numColors && n.numNumbers >= a.numNumbers ? (0, E.W)(T(n.values, a.values), r) : ((0, i.s)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), r => `${r>0?e:t}`)
        };
      var A = r(67368);
      const _ = (t, e) => r => (0, d.C)(t, e, r);

      function k(t, e, {
        clamp: r = !0,
        ease: n,
        mixer: a
      } = {}) {
        const s = t.length;
        (0, i.O)(s === e.length, "Both input and output ranges must be the same length"), (0, i.O)(!n || !Array.isArray(n) || n.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const o = function(t, e, r) {
            const i = [],
              n = r || ("number" == typeof(a = t[0]) ? _ : "string" == typeof a ? u.I.test(a) ? S : M : Array.isArray(a) ? T : "object" == typeof a ? C : _);
            var a;
            const s = t.length - 1;
            for (let r = 0; r < s; r++) {
              let a = n(t[r], t[r + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[r] : e;
                a = (0, E.W)(t, a)
              }
              i.push(a)
            }
            return i
          }(e, n, a),
          l = o.length,
          h = e => {
            let r = 0;
            if (l > 1)
              for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            const i = (0, A.o)(t[r], t[r + 1], e);
            return o[r](i)
          };
        return r ? e => h((0, p.q)(t[0], t[s - 1], e)) : h
      }
      var D = r(97768);
      const I = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

      function F(t, e, r, i) {
        if (t === e && r === i) return D.K;
        return n => 0 === n || 1 === n ? n : I(function(t, e, r, i, n) {
          let a, s, o = 0;
          do {
            s = e + (r - e) / 2, a = I(s, i, n) - t, a > 0 ? r = s : e = s
          } while (Math.abs(a) > 1e-7 && ++o < 12);
          return s
        }(n, 0, 1, t, r), e, i)
      }
      var O = r(25632);
      const L = F(.33, 1.53, .69, .99),
        V = (0, o._)(L),
        R = (0, s.Y)(V),
        B = {
          linear: D.K,
          easeIn: l,
          easeInOut: c,
          easeOut: h,
          circIn: O.wJ,
          circInOut: O.i6,
          circOut: O.Q7,
          backIn: V,
          backInOut: R,
          backOut: L,
          anticipate: t => (t *= 2) < 1 ? .5 * V(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        N = t => {
          if (Array.isArray(t)) {
            (0, i.O)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, r, n, a] = t;
            return F(e, r, n, a)
          }
          return "string" == typeof t ? ((0, i.O)(void 0 !== B[t], `Invalid easing type '${t}'`), B[t]) : t
        };

      function z({
        keyframes: t,
        ease: e = c,
        times: r,
        duration: i = 300
      }) {
        t = [...t];
        const n = z[0],
          a = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(N) : N(e),
          s = {
            done: !1,
            value: n
          },
          o = function(t, e) {
            return t.map((t => t * e))
          }(r && r.length === z.length ? r : function(t) {
            const e = t.length;
            return t.map(((t, r) => 0 !== r ? r / (e - 1) : 0))
          }(t), i);

        function l() {
          return k(o, t, {
            ease: Array.isArray(a) ? a : (e = t, r = a, e.map((() => r || c)).splice(0, e.length - 1))
          });
          var e, r
        }
        let h = l();
        return {
          next: t => (s.value = h(t), s.done = t >= i, s),
          flipTarget: () => {
            t.reverse(), h = l()
          }
        }
      }
      const G = .001,
        j = .01,
        H = 10,
        W = .05,
        q = 1;
      const U = 12;

      function $(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var Y = r(49836);
      const X = ["duration", "bounce"],
        K = ["stiffness", "damping", "mass"];

      function Z(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function J({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: r = .01,
        ...n
      }) {
        let a = t[0],
          s = t[t.length - 1];
        const o = {
            done: !1,
            value: a
          },
          {
            stiffness: l,
            damping: h,
            mass: c,
            velocity: u,
            duration: d,
            isResolvedFromDuration: f
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!Z(t, K) && Z(t, X)) {
              const r = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: r = 0,
                mass: n = 1
              }) {
                let a, s;
                (0, i.s)(t <= 1e3 * H, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                o = (0, p.q)(W, q, o), t = (0, p.q)(j, H, t / 1e3), o < 1 ? (a = e => {
                  const i = e * o,
                    n = i * t,
                    a = i - r,
                    s = $(e, o),
                    l = Math.exp(-n);
                  return G - a / s * l
                }, s = e => {
                  const i = e * o * t,
                    n = i * r + r,
                    s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-i),
                    h = $(Math.pow(e, 2), o);
                  return (-a(e) + G > 0 ? -1 : 1) * ((n - s) * l) / h
                }) : (a = e => Math.exp(-e * t) * ((e - r) * t + 1) - G, s = e => Math.exp(-e * t) * (t * t * (r - e)));
                const l = function(t, e, r) {
                  let i = r;
                  for (let r = 1; r < U; r++) i -= t(i) / e(i);
                  return i
                }(a, s, 5 / t);
                if (t *= 1e3, isNaN(l)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(n);
        let m = Q,
          v = u ? -u / 1e3 : 0;
        const g = h / (2 * Math.sqrt(l * c));

        function y() {
          const t = s - a,
            e = Math.sqrt(l / c) / 1e3;
          if (void 0 === r && (r = Math.min(Math.abs(s - a) / 100, .4)), g < 1) {
            const r = $(e, g);
            m = i => {
              const n = Math.exp(-g * e * i);
              return s - n * ((v + g * e * t) / r * Math.sin(r * i) + t * Math.cos(r * i))
            }
          } else if (1 === g) m = r => s - Math.exp(-e * r) * (t + (v + e * t) * r);
          else {
            const r = e * Math.sqrt(g * g - 1);
            m = i => {
              const n = Math.exp(-g * e * i),
                a = Math.min(r * i, 300);
              return s - n * ((v + g * e * t) * Math.sinh(a) + r * t * Math.cosh(a)) / r
            }
          }
        }
        return y(), {
          next: t => {
            const i = m(t);
            if (f) o.done = t >= d;
            else {
              let n = v;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  n = (0, Y.G)(i - m(e), t - e)
                } else n = 0;
              const a = Math.abs(n) <= e,
                l = Math.abs(s - i) <= r;
              o.done = a && l
            }
            return o.value = o.done ? s : i, o
          },
          flipTarget: () => {
            v = -v, [a, s] = [s, a], y()
          }
        }
      }
      J.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Q = t => 0,
        tt = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: r = .8,
            timeConstant: i = 350,
            restDelta: n = .5,
            modifyTarget: a
          }) {
            const s = t[0],
              o = {
                done: !1,
                value: s
              };
            let l = r * e;
            const h = s + l,
              c = void 0 === a ? h : a(h);
            return c !== h && (l = c - s), {
              next: t => {
                const e = -l * Math.exp(-t / i);
                return o.done = !(e > n || e < -n), o.value = o.done ? c : c + e, o
              },
              flipTarget: () => {}
            }
          },
          keyframes: z,
          tween: z,
          spring: J
        };

      function et(t, e, r = 0) {
        return t - e - r
      }
      const rt = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => a.du.update(e, !0),
          stop: () => a.Qz.update(e)
        }
      };

      function it({
        duration: t,
        driver: e = rt,
        elapsed: r = 0,
        repeat: i = 0,
        repeatType: n = "loop",
        repeatDelay: a = 0,
        keyframes: s,
        autoplay: o = !0,
        onPlay: l,
        onStop: h,
        onComplete: c,
        onRepeat: u,
        onUpdate: p,
        type: d = "keyframes",
        ...f
      }) {
        var m, v;
        let g, y, b, x = 0,
          S = t,
          E = !1,
          P = !0;
        const w = tt[s.length > 2 ? "keyframes" : d],
          T = s[0],
          C = s[s.length - 1];
        (null === (v = (m = w).needsInterpolation) || void 0 === v ? void 0 : v.call(m, T, C)) && (b = k([0, 100], [T, C], {
          clamp: !1
        }), s = [0, 100]);
        const M = w({
          ...f,
          duration: t,
          keyframes: s
        });
        return o && (l && l(), g = e((function(t) {
          if (P || (t = -t), r += t, !E) {
            const t = M.next(Math.max(0, r));
            y = t.value, b && (y = b(y)), E = P ? t.done : r <= 0
          }
          p && p(y), E && (0 === x && (S = void 0 !== S ? S : r), x < i ? function(t, e, r, i) {
            return i ? t >= e + r : t <= -r
          }(r, S, a, P) && (x++, "reverse" === n ? (P = x % 2 == 0, r = function(t, e = 0, r = 0, i = !0) {
            return i ? et(e + -t, e, r) : e - (t - e) + r
          }(r, S, a, P)) : (r = et(r, S, a), "mirror" === n && M.flipTarget()), E = !1, u && u()) : (g.stop(), c && c()))
        })), g.start()), {
          stop: () => {
            h && h(), g.stop()
          },
          sample: t => M.next(Math.max(0, t))
        }
      }
      const nt = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
        at = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nt([0, .65, .55, 1]),
          circOut: nt([.55, 0, 1, .45]),
          backIn: nt([.31, .01, .66, -.59]),
          backOut: nt([.33, 1.53, .69, .99])
        };

      function st(t) {
        if (t) return Array.isArray(t) ? nt(t) : at[t]
      }
      var ot = r(512);

      function lt({
        keyframes: t,
        elapsed: e,
        onUpdate: r,
        onComplete: i
      }) {
        const n = () => (r && r(t[t.length - 1]), i && i(), () => {});
        return e ? (0, ot.o)(n, -e) : n()
      }
      var ht = r(50900);
      const ct = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        ut = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        pt = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        dt = {
          type: "keyframes",
          duration: .8
        },
        ft = {
          x: ct,
          y: ct,
          z: ct,
          rotate: ct,
          rotateX: ct,
          rotateY: ct,
          rotateZ: ct,
          scaleX: ut,
          scaleY: ut,
          scale: ut,
          opacity: pt,
          backgroundColor: pt,
          color: pt,
          default: ut
        },
        mt = (t, {
          keyframes: e
        }) => e.length > 2 ? dt : (ft[t] || ft.default)(e[1]),
        vt = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !P.c.test(e) || e.startsWith("url(")));
      var gt = r(41080),
        yt = r(60224);
      const bt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        xt = {},
        St = {};
      for (const t in bt) St[t] = () => (void 0 === xt[t] && (xt[t] = bt[t]()), xt[t]);
      const Et = new Set(["opacity"]),
        Pt = (t, e, r, s = {}) => o => {
          const l = (0, yt.qC)(s, t) || {},
            h = l.delay || s.delay || 0;
          let {
            elapsed: c = 0
          } = s;
          c -= (0, n.c)(h);
          const u = function(t, e, r, i) {
              const n = vt(e, r);
              let a = void 0 !== i.from ? i.from : t.get();
              return "none" === a && n && "string" == typeof r ? a = (0, gt.S)(e, r) : (0, yt.a4)(a) && "string" == typeof r ? a = (0, yt.sn)(r) : !Array.isArray(r) && (0, yt.a4)(r) && "string" == typeof a && (r = (0, yt.sn)(a)), Array.isArray(r) ? (null === r[0] && (r[0] = a), r) : [a, r]
            }(e, t, r, l),
            p = u[0],
            d = u[u.length - 1],
            f = vt(t, p),
            m = vt(t, d);
          (0, i.s)(f === m, `You are trying to animate ${t} from "${p}" to "${d}". ${p} is not an animatable value - to enable this animation set ${p} to a value animatable to ${d} via the \`style\` property.`);
          let v = {
            keyframes: u,
            velocity: e.getVelocity(),
            ...l,
            elapsed: c,
            onUpdate: t => {
              e.set(t), l.onUpdate && l.onUpdate(t)
            },
            onComplete: () => {
              o(), l.onComplete && l.onComplete()
            }
          };
          if (!f || !m || !1 === l.type) return lt(v);
          if ("inertia" === l.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: r,
              max: i,
              power: n = .8,
              timeConstant: a = 750,
              bounceStiffness: s = 500,
              bounceDamping: o = 10,
              restDelta: l = 1,
              modifyTarget: h,
              driver: c,
              onUpdate: u,
              onComplete: p,
              onStop: d
            }) {
              const f = t[0];
              let m;

              function v(t) {
                return void 0 !== r && t < r || void 0 !== i && t > i
              }

              function g(t) {
                return void 0 === r ? i : void 0 === i || Math.abs(r - t) < Math.abs(i - t) ? r : i
              }

              function y(t) {
                null == m || m.stop(), m = it({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: c,
                  onUpdate: e => {
                    var r;
                    null == u || u(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                  },
                  onComplete: p,
                  onStop: d
                })
              }

              function b(t) {
                y({
                  type: "spring",
                  stiffness: s,
                  damping: o,
                  restDelta: l,
                  ...t
                })
              }
              if (v(f)) b({
                velocity: e,
                keyframes: [f, g(f)]
              });
              else {
                let t = n * e + f;
                void 0 !== h && (t = h(t));
                const i = g(t),
                  s = i === r ? -1 : 1;
                let o, c;
                const u = t => {
                  o = c, c = t, e = (0, Y.G)(t - o, ht.frameData.delta), (1 === s && t > i || -1 === s && t < i) && b({
                    keyframes: [t, i],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: e,
                  timeConstant: a,
                  power: n,
                  restDelta: l,
                  modifyTarget: h,
                  onUpdate: v(t) ? u : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(v);
            return () => t.stop()
          }(0, yt.ii)(l) || (v = {
            ...v,
            ...mt(t, v)
          }), v.duration && (v.duration = (0, n.c)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, n.c)(v.repeatDelay));
          const g = e.owner,
            y = g && g.current;
          if (St.waapi() && Et.has(t) && !v.repeatDelay && "mirror" !== v.repeatType && 0 !== v.damping && g && y instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: r,
            onComplete: i,
            ...n
          }) {
            let {
              keyframes: s,
              duration: o = .3,
              elapsed: l = 0,
              ease: h
            } = n;
            if ("spring" === n.type || !(!(c = n.ease) || Array.isArray(c) || "string" == typeof c && at[c])) {
              const t = it(n);
              let e = {
                done: !1,
                value: s[0]
              };
              const r = [];
              let i = 0;
              for (; !e.done;) e = t.sample(i), r.push(e.value), i += 10;
              s = r, o = i - 10, h = "linear"
            }
            var c;
            const u = function(t, e, r, {
              delay: i = 0,
              duration: n,
              repeat: a = 0,
              repeatType: s = "loop",
              ease: o,
              times: l
            } = {}) {
              return t.animate({
                [e]: r,
                offset: l
              }, {
                delay: i,
                duration: n,
                easing: st(o),
                fill: "both",
                iterations: a + 1,
                direction: "reverse" === s ? "alternate" : "normal"
              })
            }(t.owner.current, e, s, {
              ...n,
              delay: -l,
              duration: o,
              ease: h
            });
            return u.onfinish = () => {
              t.set(s[s.length - 1]), i && i()
            }, () => {
              const {
                currentTime: e
              } = u;
              if (e) {
                const r = it(n);
                t.setWithVelocity(r.sample(e - 10).value, r.sample(e).value, 10)
              }
              a.du.update((() => u.cancel()))
            }
          }(e, t, v); {
            const t = it(v);
            return () => t.stop()
          }
        }
    },
    17216: (t, e, r) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      r.d(e, {
        M: () => i
      })
    },
    11408: (t, e, r) => {
      "use strict";
      r.d(e, {
        U: () => i
      });
      const i = t => Array.isArray(t)
    },
    60224: (t, e, r) => {
      "use strict";
      r.d(e, {
        a4: () => a,
        ii: () => n,
        qC: () => o,
        sn: () => s
      });
      var i = r(41080);

      function n({
        when: t,
        delay: e,
        delayChildren: r,
        staggerChildren: i,
        staggerDirection: n,
        repeat: a,
        repeatType: s,
        repeatDelay: o,
        from: l,
        ...h
      }) {
        return !!Object.keys(h).length
      }

      function a(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function s(t) {
        return "number" == typeof t ? 0 : (0, i.S)("", t)
      }

      function o(t, e) {
        return t[e] || t.default || t
      }
    },
    72012: (t, e, r) => {
      "use strict";
      r.d(e, {
        OK: () => a
      });
      var i = r(51664),
        n = r(92216);

      function a() {
        const t = (0, i.useContext)(n.i);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: r,
          register: a
        } = t, s = (0, i.useId)();
        return (0, i.useEffect)((() => a(s)), []), !e && r ? [!1, () => r && r(s)] : [!0]
      }
    },
    20688: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => s
      });
      var i = r(51664),
        n = r(6628),
        a = r(56612);

      function s({
        children: t,
        features: e,
        strict: r = !1
      }) {
        const [, s] = (0, i.useState)(!o(e)), l = (0, i.useRef)(void 0);
        if (!o(e)) {
          const {
            renderer: t,
            ...r
          } = e;
          l.current = t, (0, a.M)(r)
        }
        return (0, i.useEffect)((() => {
          o(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            (0, a.M)(e), l.current = t, s(!0)
          }))
        }), []), i.createElement(n.Y.Provider, {
          value: {
            renderer: l.current,
            strict: r
          }
        }, t)
      }

      function o(t) {
        return "function" == typeof t
      }
    },
    60300: (t, e, r) => {
      "use strict";
      r.d(e, {
        m: () => i
      });
      const i = (0, r(51664).createContext)({})
    },
    6628: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => i
      });
      const i = (0, r(51664).createContext)({
        strict: !1
      })
    },
    54528: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => i
      });
      const i = (0, r(51664).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    68312: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => a,
        i: () => n
      });
      var i = r(51664);
      const n = (0, i.createContext)({});

      function a() {
        return (0, i.useContext)(n).visualElement
      }
    },
    92216: (t, e, r) => {
      "use strict";
      r.d(e, {
        i: () => i
      });
      const i = (0, r(51664).createContext)(null)
    },
    64356: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => i
      });
      const i = (0, r(51664).createContext)({})
    },
    25632: (t, e, r) => {
      "use strict";
      r.d(e, {
        Q7: () => s,
        i6: () => o,
        wJ: () => a
      });
      var i = r(39860),
        n = r(3904);
      const a = t => 1 - Math.sin(Math.acos(t)),
        s = (0, n._)(a),
        o = (0, i.Y)(s)
    },
    39860: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => i
      });
      const i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    3904: (t, e, r) => {
      "use strict";
      r.d(e, {
        _: () => i
      });
      const i = t => e => 1 - t(1 - e)
    },
    97736: (t, e, r) => {
      "use strict";
      r.d(e, {
        M: () => l,
        u: () => o
      });
      var i = r(40756);
      const n = {
        pageX: 0,
        pageY: 0
      };

      function a(t, e = "page") {
        const r = t.touches[0] || t.changedTouches[0] || n;
        return {
          x: r[e + "X"],
          y: r[e + "Y"]
        }
      }

      function s(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function o(t, e = "page") {
        return {
          point: (0, i.e)(t) ? a(t, e) : s(t, e)
        }
      }
      const l = (t, e = !1) => {
        const r = e => t(e, o(e));
        return e ? (i = r, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && i(t)
        }) : r;
        var i
      }
    },
    3428: (t, e, r) => {
      "use strict";
      r.d(e, {
        s: () => a,
        y: () => n
      });
      var i = r(51664);

      function n(t, e, r, i = {
        passive: !0
      }) {
        return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
      }

      function a(t, e, r, a) {
        (0, i.useEffect)((() => {
          const i = t.current;
          if (r && i) return n(i, e, r, a)
        }), [t, e, r, a])
      }
    },
    38496: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => p,
        W: () => d
      });
      var i = r(3428),
        n = r(97736),
        a = r(70520);
      const s = () => a.u && null === window.onpointerdown,
        o = () => a.u && null === window.ontouchstart,
        l = () => a.u && null === window.onmousedown,
        h = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        c = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function u(t) {
        return s() ? t : o() ? c[t] : l() ? h[t] : t
      }

      function p(t, e, r, a) {
        return (0, i.y)(t, u(e), (0, n.M)(r, "pointerdown" === e), a)
      }

      function d(t, e, r, a) {
        return (0, i.s)(t, u(e), r && (0, n.M)(r, "pointerdown" === e), a)
      }
    },
    50900: (t, e, r) => {
      "use strict";
      r.d(e, {
        frameData: () => i
      });
      const i = {
        delta: 0,
        timestamp: 0
      }
    },
    8600: (t, e, r) => {
      "use strict";
      r.d(e, {
        Qz: () => d,
        Wi: () => f,
        du: () => p
      });
      const i = 1 / 60 * 1e3,
        n = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        a = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(n())), i);
      var s = r(50900);
      let o = !0,
        l = !1,
        h = !1;
      const c = ["read", "update", "preRender", "render", "postRender"],
        u = c.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            r = [],
            i = 0,
            n = !1,
            a = !1;
          const s = new WeakSet,
            o = {
              schedule: (t, a = !1, o = !1) => {
                const l = o && n,
                  h = l ? e : r;
                return a && s.add(t), -1 === h.indexOf(t) && (h.push(t), l && n && (i = e.length)), t
              },
              cancel: t => {
                const e = r.indexOf(t); - 1 !== e && r.splice(e, 1), s.delete(t)
              },
              process: l => {
                if (n) a = !0;
                else {
                  if (n = !0, [e, r] = [r, e], r.length = 0, i = e.length, i)
                    for (let r = 0; r < i; r++) {
                      const i = e[r];
                      i(l), s.has(i) && (o.schedule(i), t())
                    }
                  n = !1, a && (a = !1, o.process(l))
                }
              }
            };
          return o
        }((() => l = !0)), t)), {}),
        p = c.reduce(((t, e) => {
          const r = u[e];
          return t[e] = (t, e = !1, i = !1) => (l || g(), r.schedule(t, e, i)), t
        }), {}),
        d = c.reduce(((t, e) => (t[e] = u[e].cancel, t)), {}),
        f = c.reduce(((t, e) => (t[e] = () => u[e].process(s.frameData), t)), {}),
        m = t => u[t].process(s.frameData),
        v = t => {
          l = !1, s.frameData.delta = o ? i : Math.max(Math.min(t - s.frameData.timestamp, 40), 1), s.frameData.timestamp = t, h = !0, c.forEach(m), h = !1, l && (o = !1, a(v))
        },
        g = () => {
          l = !0, o = !0, h || a(v)
        }
    },
    74136: (t, e, r) => {
      "use strict";

      function i(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      r.d(e, {
        A1: () => s,
        E5: () => o
      });
      const n = i("dragHorizontal"),
        a = i("dragVertical");

      function s(t) {
        let e = !1;
        if ("y" === t) e = a();
        else if ("x" === t) e = n();
        else {
          const t = n(),
            r = a();
          t && r ? e = () => {
            t(), r()
          } : (t && t(), r && r())
        }
        return e
      }

      function o() {
        const t = s(!0);
        return !t || (t(), !1)
      }
    },
    40756: (t, e, r) => {
      "use strict";

      function i(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function n(t) {
        return !!t.touches
      }
      r.d(e, {
        N: () => i,
        e: () => n
      })
    },
    51376: (t, e, r) => {
      "use strict";
      r.d(e, {
        w: () => c
      });
      var i = r(51664),
        n = r(17216),
        a = r(72012),
        s = r(92216),
        o = r(91892),
        l = r(19856),
        h = r(48188);
      const c = {
        animation: (0, h.E)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, o.Kw)(t)), (0, n.M)(e) && (0, i.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, h.E)((t => {
          const {
            custom: e,
            visualElement: r
          } = t, [n, o] = (0, a.OK)(), h = (0, i.useContext)(s.i);
          (0, i.useEffect)((() => {
            r.isPresent = n;
            const t = r.animationState && r.animationState.setActive(l.w.Exit, !n, {
              custom: h && h.custom || e
            });
            t && !n && t.then(o)
          }), [n])
        }))
      }
    },
    32709: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => n
      });
      const i = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        n = {
          measureLayout: i(["layout", "layoutId", "drag"]),
          animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: i(["exit"]),
          drag: i(["drag", "dragControls"]),
          focus: i(["whileFocus"]),
          hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: i(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    94624: (t, e, r) => {
      "use strict";
      r.d(e, {
        g: () => P
      });
      var i = r(19856),
        n = r(3428),
        a = r(40756),
        s = r(38496),
        o = r(74136);

      function l(t, e, r) {
        return (n, s) => {
          (0, a.N)(n) && !(0, o.E5)() && (t.animationState && t.animationState.setActive(i.w.Hover, e), r && r(n, s))
        }
      }
      var h = r(51664);
      const c = (t, e) => !!e && (t === e || c(t, e.parentElement));
      var u = r(53964),
        p = r(51672),
        d = r(78243);
      const f = new Set,
        m = new WeakMap,
        v = new WeakMap,
        g = t => {
          const e = m.get(t.target);
          e && e(t)
        },
        y = t => {
          t.forEach(g)
        };
      const b = {
        some: 0,
        all: 1
      };

      function x(t, e, r, {
        root: n,
        margin: a,
        amount: s = "some",
        once: o
      }) {
        (0, h.useEffect)((() => {
          if (!t || !r.current) return;
          const l = {
            root: null == n ? void 0 : n.current,
            rootMargin: a,
            threshold: "number" == typeof s ? s : b[s]
          };
          return function(t, e, r) {
            const i = function({
              root: t,
              ...e
            }) {
              const r = t || document;
              v.has(r) || v.set(r, {});
              const i = v.get(r),
                n = JSON.stringify(e);
              return i[n] || (i[n] = new IntersectionObserver(y, {
                root: t,
                ...e
              })), i[n]
            }(e);
            return m.set(t, r), i.observe(t), () => {
              m.delete(t), i.unobserve(t)
            }
          }(r.current, l, (t => {
            const {
              isIntersecting: n
            } = t;
            if (e.isInView === n) return;
            if (e.isInView = n, o && !n && e.hasEnteredView) return;
            n && (e.hasEnteredView = !0), r.animationState && r.animationState.setActive(i.w.InView, n);
            const a = r.getProps(),
              s = n ? a.onViewportEnter : a.onViewportLeave;
            s && s(t)
          }))
        }), [t, n, a, s])
      }

      function S(t, e, r, {
        fallback: n = !0
      }) {
        (0, h.useEffect)((() => {
          var a;
          t && n && ("production" !== d._ && (a = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", f.has(a) || (console.warn(a), f.add(a))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = r.getProps();
            t && t(null), r.animationState && r.animationState.setActive(i.w.InView, !0)
          })))
        }), [t])
      }
      var E = r(48188);
      const P = {
        inView: (0, E.E)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: r,
          onViewportLeave: i,
          viewport: n = {}
        }) {
          const a = (0, h.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let s = Boolean(e || r || i);
          n.once && a.current.hasEnteredView && (s = !1), ("undefined" == typeof IntersectionObserver ? S : x)(s, a.current, t, n)
        })),
        tap: (0, E.E)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: r,
          whileTap: n,
          visualElement: a
        }) {
          const l = t || e || r || n,
            d = (0, h.useRef)(!1),
            f = (0, h.useRef)(null),
            m = {
              passive: !(e || t || r || x)
            };

          function v() {
            f.current && f.current(), f.current = null
          }

          function g() {
            return v(), d.current = !1, a.animationState && a.animationState.setActive(i.w.Tap, !1), !(0, o.E5)()
          }

          function y(e, i) {
            g() && (c(a.current, e.target) ? t && t(e, i) : r && r(e, i))
          }

          function b(t, e) {
            g() && r && r(t, e)
          }

          function x(t, r) {
            v(), d.current || (d.current = !0, f.current = (0, p.W)((0, s.S)(window, "pointerup", y, m), (0, s.S)(window, "pointercancel", b, m)), a.animationState && a.animationState.setActive(i.w.Tap, !0), e && e(t, r))
          }(0, s.W)(a, "pointerdown", l ? x : void 0, m), (0, u.u)(v)
        })),
        focus: (0, E.E)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: r
          } = e;
          (0, n.s)(e, "focus", t ? () => {
            r && r.setActive(i.w.Focus, !0)
          } : void 0), (0, n.s)(e, "blur", t ? () => {
            r && r.setActive(i.w.Focus, !1)
          } : void 0)
        })),
        hover: (0, E.E)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: r,
          visualElement: i
        }) {
          (0, s.W)(i, "pointerenter", t || r ? l(i, !0, t) : void 0, {
            passive: !t
          }), (0, s.W)(i, "pointerleave", e || r ? l(i, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    56612: (t, e, r) => {
      "use strict";
      r.d(e, {
        M: () => n
      });
      var i = r(32709);

      function n(t) {
        for (const e in t) "projectionNodeConstructor" === e ? i.S.projectionNodeConstructor = t[e] : i.S[e].Component = t[e]
      }
    },
    39960: (t, e, r) => {
      "use strict";
      r.d(e, {
        e: () => a
      });
      var i = r(72401),
        n = r(97096);

      function a(t, {
        layout: e,
        layoutId: r
      }) {
        return n._.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!i.K[t] || "opacity" === t)
      }
    },
    48188: (t, e, r) => {
      "use strict";
      r.d(e, {
        E: () => i
      });
      const i = t => e => (t(e), null)
    },
    23820: (t, e, r) => {
      "use strict";

      function i({
        top: t,
        left: e,
        right: r,
        bottom: i
      }) {
        return {
          x: {
            min: e,
            max: r
          },
          y: {
            min: t,
            max: i
          }
        }
      }

      function n({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function a(t, e) {
        if (!e) return t;
        const r = e({
            x: t.left,
            y: t.top
          }),
          i = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: r.y,
          left: r.x,
          bottom: i.y,
          right: i.x
        }
      }
      r.d(e, {
        aC: () => a,
        aM: () => i,
        wl: () => n
      })
    },
    4096: (t, e, r) => {
      "use strict";
      r.d(e, {
        CU: () => l,
        aA: () => m,
        cL: () => a,
        iI: () => h,
        yq: () => u
      });
      var i = r(6764),
        n = r(70272);

      function a(t, e, r) {
        return r + e * (t - r)
      }

      function s(t, e, r, i, n) {
        return void 0 !== n && (t = a(t, n, i)), a(t, r, i) + e
      }

      function o(t, e = 0, r = 1, i, n) {
        t.min = s(t.min, e, r, i, n), t.max = s(t.max, e, r, i, n)
      }

      function l(t, {
        x: e,
        y: r
      }) {
        o(t.x, e.translate, e.scale, e.originPoint), o(t.y, r.translate, r.scale, r.originPoint)
      }

      function h(t, e, r, i = !1) {
        var a, s;
        const o = r.length;
        if (!o) return;
        let h, u;
        e.x = e.y = 1;
        for (let c = 0; c < o; c++) h = r[c], u = h.projectionDelta, "contents" !== (null === (s = null === (a = h.instance) || void 0 === a ? void 0 : a.style) || void 0 === s ? void 0 : s.display) && (i && h.options.layoutScroll && h.scroll && h !== h.root && m(t, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), u && (e.x *= u.x.scale, e.y *= u.y.scale, l(t, u)), i && (0, n.Ml)(h.latestValues) && m(t, h.latestValues));
        e.x = c(e.x), e.y = c(e.y)
      }

      function c(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function u(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function p(t, e, [r, n, a]) {
        const s = void 0 !== e[a] ? e[a] : .5,
          l = (0, i.C)(t.min, t.max, s);
        o(t, e[r], e[n], l, e.scale)
      }
      const d = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];

      function m(t, e) {
        p(t.x, e, d), p(t.y, e, f)
      }
    },
    95944: (t, e, r) => {
      "use strict";
      r.d(e, {
        Ww: () => i,
        kZ: () => n
      });
      const i = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        n = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        })
    },
    44640: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => i
      });
      const i = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    72401: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => i,
        o: () => n
      });
      const i = {};

      function n(t) {
        Object.assign(i, t)
      }
    },
    70272: (t, e, r) => {
      "use strict";

      function i(t) {
        return void 0 === t || 1 === t
      }

      function n({
        scale: t,
        scaleX: e,
        scaleY: r
      }) {
        return !i(t) || !i(e) || !i(r)
      }

      function a(t) {
        return n(t) || s(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function s(t) {
        return o(t.x) || o(t.y)
      }

      function o(t) {
        return t && "0%" !== t
      }
      r.d(e, {
        Ki: () => s,
        Ml: () => a,
        cb: () => n
      })
    },
    88280: (t, e, r) => {
      "use strict";
      r.d(e, {
        G: () => a,
        q: () => s
      });
      var i = r(23820),
        n = r(4096);

      function a(t, e) {
        return (0, i.aM)((0, i.aC)(t.getBoundingClientRect(), e))
      }

      function s(t, e, r) {
        const i = a(t, r),
          {
            scroll: s
          } = e;
        return s && ((0, n.yq)(i.x, s.offset.x), (0, n.yq)(i.y, s.offset.y)), i
      }
    },
    29284: (t, e, r) => {
      "use strict";
      r.d(e, {
        U: () => ot
      });
      var i = r(26896),
        n = r(10192),
        a = r(97096),
        s = r(65324),
        o = r(20132),
        l = r(31992),
        h = r(88280),
        c = r(28480),
        u = r(72996),
        p = r(11408),
        d = r(97064),
        f = r(18308),
        m = r(70520),
        v = r(78976),
        g = r(45852);
      const y = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        b = t => y.has(t),
        x = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        S = t => t === v.CQ || t === g.px;
      var E;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(E || (E = {}));
      const P = (t, e) => parseFloat(t.split(", ")[e]),
        w = (t, e) => (r, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const n = i.match(/^matrix3d\((.+)\)$/);
          if (n) return P(n[1], e); {
            const e = i.match(/^matrix\((.+)\)$/);
            return e ? P(e[1], t) : 0
          }
        },
        T = new Set(["x", "y", "z"]),
        C = a.I.filter((t => !T.has(t))),
        M = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: r = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: r = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: w(4, 13),
          y: w(5, 14)
        };

      function A(t, e, r, i) {
        return (t => Object.keys(t).some(b))(e) ? ((t, e, r = {}, i = {}) => {
          e = {
            ...e
          }, i = {
            ...i
          };
          const n = Object.keys(e).filter(b);
          let a = [],
            s = !1;
          const o = [];
          if (n.forEach((n => {
              const l = t.getValue(n);
              if (!t.hasValue(n)) return;
              let h = r[n],
                c = (0, f.C)(h);
              const u = e[n];
              let m;
              if ((0, p.U)(u)) {
                const t = u.length,
                  e = null === u[0] ? 1 : 0;
                h = u[e], c = (0, f.C)(h);
                for (let r = e; r < t; r++) m ? (0, d.O)((0, f.C)(u[r]) === m, "All keyframes must be of the same type") : (m = (0, f.C)(u[r]), (0, d.O)(m === c || S(c) && S(m), "Keyframes must be of the same dimension as the current value"))
              } else m = (0, f.C)(u);
              if (c !== m)
                if (S(c) && S(m)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof u ? e[n] = parseFloat(u) : Array.isArray(u) && m === g.px && (e[n] = u.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == m ? void 0 : m.transform) && (0 === h || 0 === u) ? 0 === h ? l.set(m.transform(h)) : e[n] = c.transform(u) : (s || (a = function(t) {
                  const e = [];
                  return C.forEach((r => {
                    const i = t.getValue(r);
                    void 0 !== i && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), s = !0), o.push(n), i[n] = void 0 !== i[n] ? i[n] : e[n], x(l, u))
            })), o.length) {
            const r = o.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = ((t, e, r) => {
                const i = e.measureViewportBox(),
                  n = e.current,
                  a = getComputedStyle(n),
                  {
                    display: s
                  } = a,
                  o = {};
                "none" === s && e.setStaticValue("display", t.display || "block"), r.forEach((t => {
                  o[t] = M[t](i, a)
                })), e.render();
                const l = e.measureViewportBox();
                return r.forEach((r => {
                  const i = e.getValue(r);
                  x(i, o[r]), t[r] = M[r](l, a)
                })), t
              })(e, t, o);
            return a.length && a.forEach((([e, r]) => {
              t.getValue(e).set(r)
            })), t.render(), m.u && null !== r && window.scrollTo({
              top: r
            }), {
              target: n,
              transitionEnd: i
            }
          }
          return {
            target: e,
            transitionEnd: i
          }
        })(t, e, r, i) : {
          target: e,
          transitionEnd: i
        }
      }
      var _ = r(8600),
        k = r(51664),
        D = r(32709),
        I = r(95944),
        F = r(83840),
        O = r(78243);
      const L = {
          current: null
        },
        V = {
          current: !1
        };
      var R = r(14716),
        B = r(63016),
        N = r(85200),
        z = r(26364),
        G = r(91892),
        j = r(82912),
        H = r(29955),
        W = r(93456);
      const q = Object.keys(D.S),
        U = q.length,
        $ = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Y {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: r,
          visualState: i
        }, n = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => _.du.render(this.render, !1, !0);
          const {
            latestValues: a,
            renderState: s
          } = i;
          this.latestValues = a, this.baseTarget = {
            ...a
          }, this.initialValues = e.initial ? {
            ...a
          } : {}, this.renderState = s, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = n, this.isControllingVariants = (0, j.K)(e), this.isVariantNode = (0, j.U)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: o,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== a[t] && (0, z.Y)(e) && (e.set(a[t], !1), (0, N.u)(o) && o.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), V.current || function() {
            if (V.current = !0, m.u)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => L.current = t.matches;
                t.addListener(e), e()
              } else L.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || L.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, r;
          null === (t = this.projection) || void 0 === t || t.unmount(), _.Qz.update(this.notifyUpdate), _.Qz.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (r = this.parent) || void 0 === r || r.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const r = a._.has(t),
            i = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && _.du.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            })),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            i(), n()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, r, i, n, a) {
          const s = [];
          "production" !== O._ && r && e && (0, d.O)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < U; e++) {
            const r = q[e],
              {
                isEnabled: i,
                Component: n
              } = D.S[r];
            i(t) && n && s.push((0, k.createElement)(n, {
              key: r,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && n) {
            this.projection = new n(i, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: r,
              drag: s,
              dragConstraints: o,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: Boolean(s) || o && (0, F.U)(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: a,
              layoutScroll: l
            })
          }
          return s
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, I.kZ)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
          for (let e = 0; e < $.length; e++) {
            const r = $[e];
            this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
            const i = t["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i))
          }
          this.prevMotionValues = function(t, e, r) {
            const {
              willChange: i
            } = e;
            for (const n in e) {
              const a = e[n],
                s = r[n];
              if ((0, z.Y)(a)) t.addValue(n, a), (0, N.u)(i) && i.add(n);
              else if ((0, z.Y)(s)) t.addValue(n, (0, B.w)(a, {
                owner: t
              })), (0, N.u)(i) && i.remove(n);
              else if (s !== a)
                if (t.hasValue(n)) {
                  const e = t.getValue(n);
                  !e.hasAnimated && e.set(a)
                } else {
                  const e = t.getStaticValue(n);
                  t.addValue(n, (0, B.w)(void 0 !== e ? e : a))
                }
            }
            for (const i in r) void 0 === e[i] && t.removeValue(i);
            return e
          }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
          var e, r;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (r = this.parent) || void 0 === r ? void 0 : r.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const i = {};
          for (let t = 0; t < K; t++) {
            const e = X[t],
              r = this.props[e];
            ((0, H.o)(r) || !1 === r) && (i[e] = r)
          }
          return i
        }
        addVariantChild(t) {
          var e;
          const r = this.getClosestVariantNode();
          if (r) return null === (e = r.variantChildren) || void 0 === e || e.add(t), () => r.variantChildren.delete(t)
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
        }
        removeValue(t) {
          var e;
          this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let r = this.values.get(t);
          return void 0 === r && void 0 !== e && (r = (0, B.w)(e, {
            owner: this
          }), this.addValue(t, r)), r
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: r
          } = this.props, i = "string" == typeof r || "object" == typeof r ? null === (e = (0, W.Q)(this.props, r)) || void 0 === e ? void 0 : e[t] : void 0;
          if (r && void 0 !== i) return i;
          const n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, z.Y)(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new R._), this.events[t].add(e)
        }
        notify(t, ...e) {
          var r;
          null === (r = this.events[t]) || void 0 === r || r.notify(...e)
        }
      }
      const X = ["initial", ...G.qq],
        K = X.length;
      class Z extends Y {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var r;
          return null === (r = t.style) || void 0 === r ? void 0 : r[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: r
        }) {
          delete e[t], delete r[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...r
        }, {
          transformValues: i
        }, n) {
          let a = (0, c.iK)(r, t || {}, this);
          if (i && (e && (e = i(e)), r && (r = i(r)), a && (a = i(a))), n) {
            (0, c.AH)(this, r, a);
            const t = ((t, e, r, i) => {
              const n = (0, u.eE)(t, e, i);
              return A(t, e = n.target, r, i = n.transitionEnd)
            })(this, r, a, e);
            e = t.transitionEnd, r = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...r
          }
        }
      }
      class J extends Z {
        readValueFromInstance(t, e) {
          if (a._.has(e)) {
            const t = (0, l.k)(e);
            return t && t.default || 0
          } {
            const i = (r = t, window.getComputedStyle(r)),
              a = ((0, n.U)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof a ? a.trim() : a
          }
          var r
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, h.G)(t, e)
        }
        build(t, e, r, n) {
          (0, i.q)(t, e, r, n.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, s.s)(t)
        }
        renderInstance(t, e, r, i) {
          (0, o.K)(t, e, r, i)
        }
      }
      var Q = r(30720),
        tt = r(15384),
        et = r(59256),
        rt = r(45923),
        it = r(90388),
        nt = r(27336);
      class at extends Z {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var r;
          return a._.has(e) ? (null === (r = (0, l.k)(e)) || void 0 === r ? void 0 : r.default) || 0 : (e = rt.K.has(e) ? e : (0, et.k)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, I.kZ)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Q.s)(t)
        }
        build(t, e, r, i) {
          (0, tt.m)(t, e, r, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, e, r, i) {
          (0, it.H)(t, e, r, i)
        }
        mount(t) {
          this.isSVGTag = (0, nt.s)(t.tagName), super.mount(t)
        }
      }
      var st = r(29180);
      const ot = (t, e) => (0, st.C)(t) ? new at(e, {
        enableHardwareAcceleration: !1
      }) : new J(e, {
        enableHardwareAcceleration: !0
      })
    },
    48016: (t, e, r) => {
      "use strict";
      r.d(e, {
        i: () => a
      });
      var i = r(51376),
        n = r(94624);
      const a = {
        renderer: r(29284).U,
        ...i.w,
        ...n.g
      }
    },
    1267: (t, e, r) => {
      "use strict";
      r.d(e, {
        m: () => a
      });
      var i = r(84312),
        n = r(74848);
      const a = (0, i.y)(n.G)
    },
    84312: (t, e, r) => {
      "use strict";
      r.d(e, {
        y: () => T
      });
      var i = r(51664),
        n = r(54528),
        a = r(68312),
        s = r(92216),
        o = r(70520);
      const l = o.u ? i.useLayoutEffect : i.useEffect;
      var h = r(6628),
        c = r(83840),
        u = r(29955),
        p = r(82912);

      function d(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var f = r(32709),
        m = r(56612),
        v = r(28552),
        g = r(44640);
      let y = 1;
      var b = r(60300);
      class x extends i.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: t,
            props: e
          } = this.props;
          return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      var S = r(64356);
      const E = Symbol.for("motionComponentSymbol");

      function P({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: r,
        useRender: b,
        useVisualState: P,
        Component: T
      }) {
        t && (0, m.M)(t);
        const C = (0, i.forwardRef)((function(m, E) {
          const C = {
              ...(0, i.useContext)(n.K),
              ...m,
              layoutId: w(m)
            },
            {
              isStatic: M
            } = C;
          let A = null;
          const _ = function(t) {
              const {
                initial: e,
                animate: r
              } = function(t, e) {
                if ((0, p.K)(t)) {
                  const {
                    initial: e,
                    animate: r
                  } = t;
                  return {
                    initial: !1 === e || (0, u.o)(e) ? e : void 0,
                    animate: (0, u.o)(r) ? r : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, i.useContext)(a.i));
              return (0, i.useMemo)((() => ({
                initial: e,
                animate: r
              })), [d(e), d(r)])
            }(m),
            k = M ? void 0 : (0, v._)((() => {
              if (g.C.hasEverUpdated) return y++
            })),
            D = P(m, M);
          if (!M && o.u) {
            _.visualElement = function(t, e, r, o) {
              const c = (0, a.c)(),
                u = (0, i.useContext)(h.Y),
                p = (0, i.useContext)(s.i),
                d = (0, i.useContext)(n.K).reducedMotion,
                f = (0, i.useRef)();
              o = o || u.renderer, !f.current && o && (f.current = o(t, {
                visualState: e,
                parent: c,
                props: r,
                presenceId: p ? p.id : void 0,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: d
              }));
              const m = f.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(T, D, C, e);
            const o = (0, i.useContext)(h.Y).strict,
              c = (0, i.useContext)(S.O);
            _.visualElement && (A = _.visualElement.loadFeatures(C, o, t, k, r || f.S.projectionNodeConstructor, c))
          }
          return i.createElement(x, {
            visualElement: _.visualElement,
            props: C
          }, A, i.createElement(a.i.Provider, {
            value: _
          }, b(T, m, k, function(t, e, r) {
            return (0, i.useCallback)((i => {
              i && t.mount && t.mount(i), e && (i ? e.mount(i) : e.unmount()), r && ("function" == typeof r ? r(i) : (0, c.U)(r) && (r.current = i))
            }), [e])
          }(D, _.visualElement, E), D, M, _.visualElement)))
        }));
        return C[E] = T, C
      }

      function w({
        layoutId: t
      }) {
        const e = (0, i.useContext)(b.m).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function T(t) {
        function e(e, r = {}) {
          return P(t(e, r))
        }
        if ("undefined" == typeof Proxy) return e;
        const r = new Map;
        return new Proxy(e, {
          get: (t, i) => (r.has(i) || r.set(i, e(i)), r.get(i))
        })
      }
    },
    21388: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => Pe
      });
      var i = r(84312),
        n = r(74848),
        a = r(94624),
        s = r(51376),
        o = r(51664),
        l = r(97064),
        h = r(40756),
        c = r(97736),
        u = r(8600),
        p = r(99880),
        d = r(38496),
        f = r(51672);
      const m = (t, e) => Math.abs(t - e);
      var v = r(50900);
      class g {
        constructor(t, e, {
          transformPagePoint: r
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r = function(t, e) {
                  const r = m(t.x, e.x),
                    i = m(t.y, e.y);
                  return Math.sqrt(r ** 2 + i ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !r) return;
              const {
                point: i
              } = t, {
                timestamp: n
              } = v.frameData;
              this.history.push({
                ...i,
                timestamp: n
              });
              const {
                onStart: a,
                onMove: s
              } = this.handlers;
              e || (a && a(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = y(e, this.transformPagePoint), (0, h.N)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : u.du.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: r,
                onSessionEnd: i
              } = this.handlers, n = x(y(e, this.transformPagePoint), this.history);
              this.startEvent && r && r(t, n), i && i(t, n)
            }, (0, h.e)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = r;
          const i = y((0, c.u)(t), this.transformPagePoint),
            {
              point: n
            } = i,
            {
              timestamp: a
            } = v.frameData;
          this.history = [{
            ...n,
            timestamp: a
          }];
          const {
            onSessionStart: s
          } = e;
          s && s(t, x(i, this.history)), this.removeListeners = (0, f.W)((0, d.S)(window, "pointermove", this.handlePointerMove), (0, d.S)(window, "pointerup", this.handlePointerUp), (0, d.S)(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), u.Qz.update(this.updatePoint)
        }
      }

      function y(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function b(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function x({
        point: t
      }, e) {
        return {
          point: t,
          delta: b(t, E(e)),
          offset: b(t, S(e)),
          velocity: P(e, .1)
        }
      }

      function S(t) {
        return t[0]
      }

      function E(t) {
        return t[t.length - 1]
      }

      function P(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let r = t.length - 1,
          i = null;
        const n = E(t);
        for (; r >= 0 && (i = t[r], !(n.timestamp - i.timestamp > (0, p.c)(e)));) r--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const a = (n.timestamp - i.timestamp) / 1e3;
        if (0 === a) return {
          x: 0,
          y: 0
        };
        const s = {
          x: (n.x - i.x) / a,
          y: (n.y - i.y) / a
        };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
      }
      var w = r(74136),
        T = r(83840),
        C = r(67368),
        M = r(6764);

      function A(t) {
        return t.max - t.min
      }

      function _(t, e = 0, r = .01) {
        return Math.abs(t - e) <= r
      }

      function k(t, e, r, i = .5) {
        t.origin = i, t.originPoint = (0, M.C)(e.min, e.max, t.origin), t.scale = A(r) / A(e), (_(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, M.C)(r.min, r.max, t.origin) - t.originPoint, (_(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function D(t, e, r, i) {
        k(t.x, e.x, r.x, null == i ? void 0 : i.originX), k(t.y, e.y, r.y, null == i ? void 0 : i.originY)
      }

      function I(t, e, r) {
        t.min = r.min + e.min, t.max = t.min + A(e)
      }

      function F(t, e, r) {
        t.min = e.min - r.min, t.max = t.min + A(e)
      }

      function O(t, e, r) {
        F(t.x, e.x, r.x), F(t.y, e.y, r.y)
      }
      var L = r(85584);

      function V(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0
        }
      }

      function R(t, e) {
        let r = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
          min: r,
          max: i
        }
      }
      const B = .35;

      function N(t, e, r) {
        return {
          min: z(t, e),
          max: z(t, r)
        }
      }

      function z(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var G = r(19856),
        j = r(95944);

      function H(t) {
        return [t("x"), t("y")]
      }
      var W = r(88280),
        q = r(23820),
        U = r(3428),
        $ = r(45852),
        Y = r(93428);
      const X = new WeakMap;
      class K {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, j.kZ)(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new g(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor((0, c.u)(t, "page").point)
            },
            onStart: (t, e) => {
              var r;
              const {
                drag: i,
                dragPropagation: n,
                onDragStart: a
              } = this.getProps();
              (!i || n || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, w.A1)(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((t => {
                var e, r;
                let i = this.getAxisMotionValue(t).get() || 0;
                if ($.WI.test(i)) {
                  const n = null === (r = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.layoutBox[t];
                  n && (i = A(n) * (parseFloat(i) / 100))
                }
                this.originPoint[t] = i
              })), null == a || a(t, e), null === (r = this.visualElement.animationState) || void 0 === r || r.setActive(G.w.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: r,
                dragDirectionLock: i,
                onDirectionLock: n,
                onDrag: a
              } = this.getProps();
              if (!r && !this.openGlobalLock) return;
              const {
                offset: s
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let r = null;
                return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
              }(s), void(null !== this.currentDirection && (null == n || n(this.currentDirection)));
              this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == a || a(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const r = this.isDragging;
          if (this.cancel(), !r) return;
          const {
            velocity: i
          } = e;
          this.startAnimation(i);
          const {
            onDragEnd: n
          } = this.getProps();
          null == n || n(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: r
          } = this.getProps();
          !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(G.w.Drag, !1)
        }
        updateAxis(t, e, r) {
          const {
            drag: i
          } = this.getProps();
          if (!r || !Z(t, i, this.currentDirection)) return;
          const n = this.getAxisMotionValue(t);
          let a = this.originPoint[t] + r[t];
          this.constraints && this.constraints[t] && (a = function(t, {
            min: e,
            max: r
          }, i) {
            return void 0 !== e && t < e ? t = i ? (0, M.C)(e, t, i.min) : Math.max(t, e) : void 0 !== r && t > r && (t = i ? (0, M.C)(r, t, i.max) : Math.min(t, r)), t
          }(a, this.constraints[t], this.elastic[t])), n.set(a)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: r
          } = this.visualElement.projection || {}, i = this.constraints;
          t && (0, T.U)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(t, {
            top: e,
            left: r,
            bottom: i,
            right: n
          }) {
            return {
              x: V(t.x, r, n),
              y: V(t.y, e, i)
            }
          }(r.layoutBox, t), this.elastic = function(t = B) {
            return !1 === t ? t = 0 : !0 === t && (t = B), {
              x: N(t, "left", "right"),
              y: N(t, "top", "bottom")
            }
          }(e), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && H((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const r = {};
              return void 0 !== e.min && (r.min = e.min - t.min), void 0 !== e.max && (r.max = e.max - t.min), r
            }(r.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, T.U)(t)) return !1;
          const r = t.current;
          (0, l.O)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const n = (0, W.q)(r, i.root, this.visualElement.getTransformPagePoint());
          let a = function(t, e) {
            return {
              x: R(t.x, e.x),
              y: R(t.y, e.y)
            }
          }(i.layout.layoutBox, n);
          if (e) {
            const t = e((0, q.wl)(a));
            this.hasMutatedConstraints = !!t, t && (a = (0, q.aM)(t))
          }
          return a
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: n,
            dragSnapToOrigin: a,
            onDragTransitionEnd: s
          } = this.getProps(), o = this.constraints || {}, l = H((s => {
            if (!Z(s, e, this.currentDirection)) return;
            let l = (null == o ? void 0 : o[s]) || {};
            a && (l = {
              min: 0,
              max: 0
            });
            const h = i ? 200 : 1e6,
              c = i ? 40 : 1e7,
              u = {
                type: "inertia",
                velocity: r ? t[s] : 0,
                bounceStiffness: h,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l
              };
            return this.startAxisValueAnimation(s, u)
          }));
          return Promise.all(l).then(s)
        }
        startAxisValueAnimation(t, e) {
          const r = this.getAxisMotionValue(t);
          return r.start((0, Y.c)(t, r, 0, e))
        }
        stopAnimation() {
          H((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const r = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[r] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          H((e => {
            const {
              drag: r
            } = this.getProps();
            if (!Z(e, r, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, n = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: r,
                max: a
              } = i.layout.layoutBox[e];
              n.set(t[e] - (0, M.C)(r, a, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: r
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!(0, T.U)(r) || !i || !this.constraints) return;
          this.stopAnimation();
          const n = {
            x: 0,
            y: 0
          };
          H((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const r = e.get();
              n[t] = function(t, e) {
                let r = .5;
                const i = A(t),
                  n = A(e);
                return n > i ? r = (0, C.o)(e.min, e.max - i, t.min) : i > n && (r = (0, C.o)(t.min, t.max - n, e.min)), (0, L.q)(0, 1, r)
              }({
                min: r,
                max: r
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: a
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = a ? a({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), H((t => {
            if (!Z(t, e, null)) return;
            const r = this.getAxisMotionValue(t),
              {
                min: i,
                max: a
              } = this.constraints[t];
            r.set((0, M.C)(i, a, n[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          X.set(this.visualElement, this);
          const e = this.visualElement.current,
            r = (0, d.S)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: r = !0
              } = this.getProps();
              e && r && this.start(t)
            })),
            i = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, T.U)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: n
            } = this.visualElement,
            a = n.addEventListener("measure", i);
          n && !n.layout && (null === (t = n.root) || void 0 === t || t.updateScroll(), n.updateLayout()), i();
          const s = (0, U.y)(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = n.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (H((e => {
                const r = this.getAxisMotionValue(e);
                r && (this.originPoint[e] += t[e].translate, r.set(r.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            s(), r(), a(), null == o || o()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: n = !1,
              dragElastic: a = B,
              dragMomentum: s = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: n,
            dragElastic: a,
            dragMomentum: s
          }
        }
      }

      function Z(t, e, r) {
        return !(!0 !== e && e !== t || null !== r && r !== t)
      }
      var J = r(28552),
        Q = r(54528),
        tt = r(53964),
        et = r(48188);
      const rt = {
        pan: (0, et.E)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: r,
          onPanSessionStart: i,
          visualElement: n
        }) {
          const a = t || e || r || i,
            s = (0, o.useRef)(null),
            {
              transformPagePoint: l
            } = (0, o.useContext)(Q.K),
            h = {
              onSessionStart: i,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                s.current = null, r && r(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== s.current && s.current.updateHandlers(h)
          })), (0, d.W)(n, "pointerdown", a && function(t) {
            s.current = new g(t, h, {
              transformPagePoint: l
            })
          }), (0, tt.u)((() => s.current && s.current.end()))
        })),
        drag: (0, et.E)((function(t) {
          const {
            dragControls: e,
            visualElement: r
          } = t, i = (0, J._)((() => new K(r)));
          (0, o.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, o.useEffect)((() => i.addListeners()), [i])
        }))
      };
      var it = r(29284),
        nt = r(72012),
        at = r(60300),
        st = r(64356),
        ot = r(44640);

      function lt(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ht = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!$.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${lt(t,e.target.x)}% ${lt(t,e.target.y)}%`
        }
      };
      var ct = r(72996),
        ut = r(67700);
      const pt = "_$css",
        dt = {
          correct: (t, {
            treeScale: e,
            projectionDelta: r
          }) => {
            const i = t,
              n = t.includes("var("),
              a = [];
            n && (t = t.replace(ct.CO, (t => (a.push(t), pt))));
            const s = ut.c.parse(t);
            if (s.length > 5) return i;
            const o = ut.c.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              h = r.x.scale * e.x,
              c = r.y.scale * e.y;
            s[0 + l] /= h, s[1 + l] /= c;
            const u = (0, M.C)(h, c, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= u), "number" == typeof s[3 + l] && (s[3 + l] /= u);
            let p = o(s);
            if (n) {
              let t = 0;
              p = p.replace(pt, (() => {
                const e = a[t];
                return t++, e
              }))
            }
            return p
          }
        };
      var ft = r(72401);
      class mt extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: r,
            layoutId: i
          } = this.props, {
            projection: n
          } = t;
          (0, ft.o)(vt), n && (e.group && e.group.add(n), r && r.register && i && r.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), n.setOptions({
            ...n.options,
            onExitComplete: () => this.safeToRemove()
          })), ot.C.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: r,
            drag: i,
            isPresent: n
          } = this.props, a = r.projection;
          return a ? (a.isPresent = n, i || t.layoutDependency !== e || void 0 === e ? a.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? a.promote() : a.relegate() || u.du.postRender((() => {
            var t;
            (null === (t = a.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: r
          } = this.props, {
            projection: i
          } = t;
          i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == r ? void 0 : r.deregister) && r.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          null == t || t()
        }
        render() {
          return null
        }
      }
      const vt = {
          borderRadius: {
            ...ht,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ht,
          borderTopRightRadius: ht,
          borderBottomLeftRadius: ht,
          borderBottomRightRadius: ht,
          boxShadow: dt
        },
        gt = {
          measureLayout: function(t) {
            const [e, r] = (0, nt.OK)(), i = (0, o.useContext)(at.m);
            return o.createElement(mt, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, o.useContext)(st.O),
              isPresent: e,
              safeToRemove: r
            })
          }
        };
      var yt = r(63016),
        bt = r(26364),
        xt = r(14716),
        St = r(25632),
        Et = r(97768);
      const Pt = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wt = Pt.length,
        Tt = t => "string" == typeof t ? parseFloat(t) : t,
        Ct = t => "number" == typeof t || $.px.test(t);

      function Mt(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const At = kt(0, .5, St.Q7),
        _t = kt(.5, .95, Et.K);

      function kt(t, e, r) {
        return i => i < t ? 0 : i > e ? 1 : r((0, C.o)(t, e, i))
      }

      function Dt(t, e) {
        t.min = e.min, t.max = e.max
      }

      function It(t, e) {
        Dt(t.x, e.x), Dt(t.y, e.y)
      }
      var Ft = r(4096);

      function Ot(t, e, r, i, n) {
        return t -= e, t = (0, Ft.cL)(t, 1 / r, i), void 0 !== n && (t = (0, Ft.cL)(t, 1 / n, i)), t
      }

      function Lt(t, e, [r, i, n], a, s) {
        ! function(t, e = 0, r = 1, i = .5, n, a = t, s = t) {
          if ($.WI.test(e) && (e = parseFloat(e), e = (0, M.C)(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
          let o = (0, M.C)(a.min, a.max, i);
          t === a && (o -= e), t.min = Ot(t.min, e, r, o, n), t.max = Ot(t.max, e, r, o, n)
        }(t, e[r], e[i], e[n], e.scale, a, s)
      }
      const Vt = ["x", "scaleX", "originX"],
        Rt = ["y", "scaleY", "originY"];

      function Bt(t, e, r, i) {
        Lt(t.x, e, Vt, null == r ? void 0 : r.x, null == i ? void 0 : i.x), Lt(t.y, e, Rt, null == r ? void 0 : r.y, null == i ? void 0 : i.y)
      }
      var Nt = r(60224);

      function zt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Gt(t) {
        return zt(t.x) && zt(t.y)
      }

      function jt(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Ht(t) {
        return A(t.x) / A(t.y)
      }
      var Wt = r(14628);
      class qt {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, Wt.wV)(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if ((0, Wt.sd)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let r;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              r = e;
              break
            }
          }
          return !!r && (this.promote(r), !0)
        }
        promote(t, e) {
          var r;
          const i = this.lead;
          if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null === (r = t.root) || void 0 === r ? void 0 : r.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: n
            } = t.options;
            !1 === n && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, r, i, n, a;
            null === (r = (e = t.options).onExitComplete) || void 0 === r || r.call(e), null === (a = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (n = i.options).onExitComplete) || void 0 === a || a.call(n)
          }))
        }
        scheduleRender() {
          this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function Ut(t, e, r) {
        let i = "";
        const n = t.x.translate / e.x,
          a = t.y.translate / e.y;
        if ((n || a) && (i = `translate3d(${n}px, ${a}px, 0) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: n
          } = r;
          t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), n && (i += `rotateY(${n}deg) `)
        }
        const s = t.x.scale * e.x,
          o = t.y.scale * e.y;
        return 1 === s && 1 === o || (i += `scale(${s}, ${o})`), i || "none"
      }
      var $t = r(70272);
      const Yt = (t, e) => t.depth - e.depth;
      class Xt {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, Wt.wV)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, Wt.sd)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Yt), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var Kt = r(46e3),
        Zt = r(512);
      const Jt = ["", "X", "Y", "Z"];
      let Qt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: n
      }) {
        return class {
          constructor(t, r = {}, i = (null == e ? void 0 : e())) {
            this.id = Qt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(ie), this.nodes.forEach(le), this.nodes.forEach(he)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = r, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xt._), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const r = this.eventHandlers.get(t);
            null == r || r.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, r = !1) {
            var i;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: n,
              layout: a,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), r && (a || n) && (this.isLayoutDirty = !0), t) {
              let r;
              const i = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, r && r(), r = (0, Zt.o)(i, 250), ot.C.hasAnimatedSinceResize && (ot.C.hasAnimatedSinceResize = !1, this.nodes.forEach(oe))
              }))
            }
            n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || a) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: r,
              layout: i
            }) => {
              var n, a, o, l, h;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (a = null !== (n = this.options.transition) && void 0 !== n ? n : s.getDefaultTransition()) && void 0 !== a ? a : me,
                {
                  onLayoutAnimationStart: u,
                  onLayoutAnimationComplete: p
                } = s.getProps(),
                d = !this.targetLayout || !jt(this.targetLayout, i) || r,
                f = !e && r;
              if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || f || e && (d || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                const e = {
                  ...(0, Nt.qC)(c, "layout"),
                  onPlay: u,
                  onComplete: p
                };
                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || oe(this), this.isLead() && (null === (h = (l = this.options).onExitComplete) || void 0 === h || h.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, u.Qz.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ce), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, r, i;
            if (this.root.isUpdateBlocked()) return void(null === (r = (e = this.options).onExitComplete) || void 0 === r || r.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: n,
              layout: a
            } = this.options;
            if (void 0 === n && !a) return;
            const s = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ae);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ve), this.potentialNodes.clear()), this.nodes.forEach(se), this.nodes.forEach(ee), this.nodes.forEach(re), this.clearAllSnapshots(), u.Wi.update(), u.Wi.preRender(), u.Wi.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ne), this.sharedNodes.forEach(ue)
          }
          scheduleUpdateProjection() {
            u.du.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            u.du.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = (0, j.kZ)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: i(this.instance),
              offset: r(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!n) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              r = this.projectionDelta && !Gt(this.projectionDelta),
              i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              a = null == i ? void 0 : i(this.latestValues, ""),
              s = a !== this.prevTransformTemplateValue;
            e && (r || (0, $t.Ml)(this.latestValues) || s) && (n(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let r = this.removeElementScroll(e);
            var i;
            return t && (r = this.removeTransform(r)), ge((i = r).x), ge(i.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: r,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return (0, j.kZ)();
            const e = t.measureViewportBox(),
              {
                scroll: r
              } = this.root;
            return r && ((0, Ft.yq)(e.x, r.offset.x), (0, Ft.yq)(e.y, r.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, j.kZ)();
            It(e, t);
            for (let r = 0; r < this.path.length; r++) {
              const i = this.path[r],
                {
                  scroll: n,
                  options: a
                } = i;
              if (i !== this.root && n && a.layoutScroll) {
                if (n.isRoot) {
                  It(e, t);
                  const {
                    scroll: r
                  } = this.root;
                  r && ((0, Ft.yq)(e.x, -r.offset.x), (0, Ft.yq)(e.y, -r.offset.y))
                }(0, Ft.yq)(e.x, n.offset.x), (0, Ft.yq)(e.y, n.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const r = (0, j.kZ)();
            It(r, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, Ft.aA)(r, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), (0, $t.Ml)(i.latestValues) && (0, Ft.aA)(r, i.latestValues)
            }
            return (0, $t.Ml)(this.latestValues) && (0, Ft.aA)(r, this.latestValues), r
          }
          removeTransform(t) {
            var e;
            const r = (0, j.kZ)();
            It(r, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              if (!i.instance) continue;
              if (!(0, $t.Ml)(i.latestValues)) continue;
              (0, $t.cb)(i.latestValues) && i.updateSnapshot();
              const n = (0, j.kZ)();
              It(n, i.measurePageBox()), Bt(r, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, n)
            }
            return (0, $t.Ml)(this.latestValues) && Bt(r, this.latestValues), r
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var t;
            const e = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: r,
              layoutId: i
            } = this.options;
            if (this.layout && (r || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, j.kZ)(), this.relativeTargetOrigin = (0, j.kZ)(), O(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), It(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var n, a, s;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, j.kZ)(), this.targetWithTransforms = (0, j.kZ)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (n = this.target, a = this.relativeTarget, s = this.relativeParent.target, I(n.x, a.x, s.x), I(n.y, a.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : It(this.target, this.layout.layoutBox), (0, Ft.CU)(this.target, this.targetDelta)) : It(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, j.kZ)(), this.relativeTargetOrigin = (0, j.kZ)(), O(this.relativeTargetOrigin, this.target, t.target), It(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, $t.cb)(this.parent.latestValues) && !(0, $t.Ki)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: r
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              n = Boolean(this.resumingFrom) || this !== i;
            let a = !0;
            if (e && (a = !1), n && r && (a = !1), a) return;
            const {
              layout: s,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !o) return;
            It(this.layoutCorrected, this.layout.layoutBox), (0, Ft.iI)(this.layoutCorrected, this.treeScale, this.path, n);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = (0, j.Ww)(), this.projectionDeltaWithTransform = (0, j.Ww)());
            const h = this.treeScale.x,
              c = this.treeScale.y,
              u = this.projectionTransform;
            D(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = Ut(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === h && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, r, i;
            null === (r = (e = this.options).scheduleRender) || void 0 === r || r.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var r, i;
            const n = this.snapshot,
              a = (null == n ? void 0 : n.latestValues) || {},
              s = {
                ...this.latestValues
              },
              o = (0, j.Ww)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = (0, j.kZ)(),
              h = (null == n ? void 0 : n.source) !== (null === (r = this.layout) || void 0 === r ? void 0 : r.source),
              c = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              u = Boolean(h && !c && !0 === this.options.crossfade && !this.path.some(fe));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var r;
              const i = e / 1e3;
              var n, p, d, f;
              pe(o.x, t.x, i), pe(o.y, t.y, i), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (r = this.relativeParent) || void 0 === r ? void 0 : r.layout) && (O(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), n = this.relativeTarget, p = this.relativeTargetOrigin, d = l, f = i, de(n.x, p.x, d.x, f), de(n.y, p.y, d.y, f)), h && (this.animationValues = s, function(t, e, r, i, n, a) {
                n ? (t.opacity = (0, M.C)(0, void 0 !== r.opacity ? r.opacity : 1, At(i)), t.opacityExit = (0, M.C)(void 0 !== e.opacity ? e.opacity : 1, 0, _t(i))) : a && (t.opacity = (0, M.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== r.opacity ? r.opacity : 1, i));
                for (let n = 0; n < wt; n++) {
                  const a = `border${Pt[n]}Radius`;
                  let s = Mt(e, a),
                    o = Mt(r, a);
                  void 0 === s && void 0 === o || (s || (s = 0), o || (o = 0), 0 === s || 0 === o || Ct(s) === Ct(o) ? (t[a] = Math.max((0, M.C)(Tt(s), Tt(o), i), 0), ($.WI.test(o) || $.WI.test(s)) && (t[a] += "%")) : t[a] = o)
                }(e.rotate || r.rotate) && (t.rotate = (0, M.C)(e.rotate || 0, r.rotate || 0, i))
              }(s, a, this.latestValues, i, u, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, r;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (r = this.resumingFrom.currentAnimation) || void 0 === r || r.stop()), this.pendingAnimation && (u.Qz.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = u.du.update((() => {
              ot.C.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, r = {}) {
                const i = (0, bt.Y)(t) ? t : (0, yt.w)(t);
                return i.start((0, Y.c)("", i, e, r)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var r;
                  this.mixTargetDelta(e), null === (r = t.onUpdate) || void 0 === r || r.call(t, e)
                },
                onComplete: () => {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: r,
              layout: i,
              latestValues: n
            } = t;
            if (e && r && i) {
              if (this !== t && this.layout && i && ye(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                r = this.target || (0, j.kZ)();
                const e = A(this.layout.layoutBox.x);
                r.x.min = t.target.x.min, r.x.max = r.x.min + e;
                const i = A(this.layout.layoutBox.y);
                r.y.min = t.target.y.min, r.y.max = r.y.min + i
              }
              It(e, r), (0, Ft.aA)(e, n), D(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
            }
          }
          registerSharedNode(t, e) {
            var r, i, n;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new qt), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.transition,
              preserveFollowOpacity: null === (n = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === n ? void 0 : n.call(i, e)
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }
          getPrevLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, r), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: r
            } = t;
            if ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0), !e) return;
            const i = {};
            for (let e = 0; e < Jt.length; e++) {
              const n = "rotate" + Jt[e];
              r[n] && (i[n] = r[n], t.setStaticValue(n, 0))
            }
            null == t || t.render();
            for (const e in i) t.setStaticValue(e, i[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, r, i;
            const n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            n.visibility = "";
            const a = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = (0, Kt.I)(t.pointerEvents) || "", n.transform = a ? a(this.latestValues, "") : "none", n;
            const s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Kt.I)(t.pointerEvents) || ""), this.hasProjected && !(0, $t.Ml)(this.latestValues) && (e.transform = a ? a({}, "") : "none", this.hasProjected = !1), e
            }
            const o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), n.transform = Ut(this.projectionDeltaWithTransform, this.treeScale, o), a && (n.transform = a(o, n.transform));
            const {
              x: l,
              y: h
            } = this.projectionDelta;
            n.transformOrigin = `${100*l.origin}% ${100*h.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (r = o.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const t in ft.K) {
              if (void 0 === o[t]) continue;
              const {
                correct: e,
                applyTo: r
              } = ft.K[t], i = e(o[t], s);
              if (r) {
                const t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i
              } else n[t] = i
            }
            return this.options.layoutId && (n.pointerEvents = s === this ? (0, Kt.I)(t.pointerEvents) || "" : "none"), n
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(ae), this.root.sharedNodes.clear()
          }
        }
      }

      function ee(t) {
        t.updateLayout()
      }

      function re(t) {
        var e, r, i;
        const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: r
          } = t.layout, {
            animationType: i
          } = t.options, a = n.source !== t.layout.source;
          "size" === i ? H((t => {
            const r = a ? n.measuredBox[t] : n.layoutBox[t],
              i = A(r);
            r.min = e[t].min, r.max = r.min + i
          })) : ye(i, n.layoutBox, e) && H((t => {
            const r = a ? n.measuredBox[t] : n.layoutBox[t],
              i = A(e[t]);
            r.max = r.min + i
          }));
          const s = (0, j.Ww)();
          D(s, e, n.layoutBox);
          const o = (0, j.Ww)();
          a ? D(o, t.applyTransform(r, !0), n.measuredBox) : D(o, e, n.layoutBox);
          const l = !Gt(s);
          let h = !1;
          if (!t.resumeFrom) {
            const r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              const {
                snapshot: t,
                layout: i
              } = r;
              if (t && i) {
                const r = (0, j.kZ)();
                O(r, n.layoutBox, t.layoutBox);
                const a = (0, j.kZ)();
                O(a, e, i.layoutBox), jt(r, a) || (h = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: o,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h
          })
        } else t.isLead() && (null === (i = (r = t.options).onExitComplete) || void 0 === i || i.call(r));
        t.options.transition = void 0
      }

      function ie(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ne(t) {
        t.clearSnapshot()
      }

      function ae(t) {
        t.clearMeasurements()
      }

      function se(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function oe(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function le(t) {
        t.resolveTargetDelta()
      }

      function he(t) {
        t.calcProjection()
      }

      function ce(t) {
        t.resetRotation()
      }

      function ue(t) {
        t.removeLeadSnapshot()
      }

      function pe(t, e, r) {
        t.translate = (0, M.C)(e.translate, 0, r), t.scale = (0, M.C)(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function de(t, e, r, i) {
        t.min = (0, M.C)(e.min, r.min, i), t.max = (0, M.C)(e.max, r.max, i)
      }

      function fe(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const me = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ve(t, e) {
        let r = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            r = t.path[e];
            break
          } const i = (r && r !== t.root ? r.instance : document).querySelector(`[data-projection-id="${e}"]`);
        i && t.mount(i, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ye(t, e, r) {
        return "position" === t || "preserve-aspect" === t && !_(Ht(e), Ht(r), .2)
      }
      const be = te({
          attachResizeListener: (t, e) => (0, U.y)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        xe = {
          current: void 0
        },
        Se = te({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!xe.current) {
              const t = new be(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), xe.current = t
            }
            return xe.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ee = {
          ...s.w,
          ...a.g,
          ...rt,
          ...gt
        },
        Pe = (0, i.y)(((t, e) => (0, n.G)(t, e, Ee, it.U, Se)))
    },
    59256: (t, e, r) => {
      "use strict";
      r.d(e, {
        k: () => i
      });
      const i = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    74848: (t, e, r) => {
      "use strict";
      r.d(e, {
        G: () => F
      });
      var i = r(29180),
        n = r(51664),
        a = r(39960),
        s = r(26364),
        o = r(26896);
      const l = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function h(t, e, r) {
        for (const i in e)(0, s.Y)(e[i]) || (0, a.e)(i, r) || (t[i] = e[i])
      }

      function c(t, e, r) {
        const i = {},
          a = function(t, e, r) {
            const i = {};
            return h(i, t.style || {}, t), Object.assign(i, function({
              transformTemplate: t
            }, e, r) {
              return (0, n.useMemo)((() => {
                const i = l();
                return (0, o.q)(i, e, {
                  enableHardwareAcceleration: !r
                }, t), Object.assign({}, i.vars, i.style)
              }), [e])
            }(t, e, r)), t.transformValues ? t.transformValues(i) : i
          }(t, e, r);
        return t.drag && !1 !== t.dragListener && (i.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = a, i
      }
      const u = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function p(t) {
        return u.has(t)
      }
      let d = t => !p(t);
      try {
        (f = require("@emotion/is-prop-valid").default) && (d = t => t.startsWith("on") ? !p(t) : f(t))
      } catch (t) {}
      var f, m = r(15384);
      const v = () => ({
        ...l(),
        attrs: {}
      });
      var g = r(27336);

      function y(t, e, r, i) {
        const a = (0, n.useMemo)((() => {
          const r = v();
          return (0, m.m)(r, e, {
            enableHardwareAcceleration: !1
          }, (0, g.s)(i), t.transformTemplate), {
            ...r.attrs,
            style: {
              ...r.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          h(e, t.style, t), a.style = {
            ...e,
            ...a.style
          }
        }
        return a
      }

      function b(t = !1) {
        return (e, r, a, s, {
          latestValues: o
        }, l) => {
          const h = ((0, i.C)(e) ? y : c)(r, o, l, e),
            u = function(t, e, r) {
              const i = {};
              for (const n in t)(d(n) || !0 === r && p(n) || !e && !p(n) || t.draggable && n.startsWith("onDrag")) && (i[n] = t[n]);
              return i
            }(r, "string" == typeof e, t),
            f = {
              ...u,
              ...h,
              ref: s
            };
          return a && (f["data-projection-id"] = a), (0, n.createElement)(e, f)
        }
      }
      var x = r(90388),
        S = r(30720),
        E = r(17216),
        P = r(92216),
        w = r(93456),
        T = r(28552),
        C = r(46e3),
        M = r(68312),
        A = r(82912);
      const _ = t => (e, r) => {
        const i = (0, n.useContext)(M.i),
          a = (0, n.useContext)(P.i),
          s = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: r
          }, i, n, a) {
            const s = {
              latestValues: k(i, n, a, t),
              renderState: e()
            };
            return r && (s.mount = t => r(i, t, s)), s
          }(t, e, i, a);
        return r ? s() : (0, T._)(s)
      };

      function k(t, e, r, i) {
        const n = {},
          a = i(t);
        for (const t in a) n[t] = (0, C.I)(a[t]);
        let {
          initial: s,
          animate: o
        } = t;
        const l = (0, A.K)(t),
          h = (0, A.U)(t);
        e && h && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === o && (o = e.animate));
        let c = !!r && !1 === r.initial;
        c = c || !1 === s;
        const u = c ? o : s;
        return u && "boolean" != typeof u && !(0, E.M)(u) && (Array.isArray(u) ? u : [u]).forEach((e => {
          const r = (0, w.Q)(t, e);
          if (!r) return;
          const {
            transitionEnd: i,
            transition: a,
            ...s
          } = r;
          for (const t in s) {
            let e = s[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (n[t] = e)
          }
          for (const t in i) n[t] = i[t]
        })), n
      }
      const D = {
          useVisualState: _({
            scrapeMotionValuesFromProps: S.s,
            createRenderState: v,
            onMount: (t, e, {
              renderState: r,
              latestValues: i
            }) => {
              try {
                r.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                r.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, m.m)(r, i, {
                enableHardwareAcceleration: !1
              }, (0, g.s)(e.tagName), t.transformTemplate), (0, x.H)(e, r)
            }
          })
        },
        I = {
          useVisualState: _({
            scrapeMotionValuesFromProps: r(65324).s,
            createRenderState: l
          })
        };

      function F(t, {
        forwardMotionProps: e = !1
      }, r, n, a) {
        return {
          ...(0, i.C)(t) ? D : I,
          preloadedFeatures: r,
          useRender: b(e),
          createVisualElement: n,
          projectionNodeConstructor: a,
          Component: t
        }
      }
    },
    72996: (t, e, r) => {
      "use strict";
      r.d(e, {
        CO: () => a,
        eE: () => l
      });
      var i = r(97064);

      function n(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        s = 4;

      function o(t, e, r = 1) {
        (0, i.O)(r <= s, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [l, h] = function(t) {
          const e = a.exec(t);
          if (!e) return [, ];
          const [, r, i] = e;
          return [r, i]
        }(t);
        if (!l) return;
        const c = window.getComputedStyle(e).getPropertyValue(l);
        return c ? c.trim() : n(h) ? o(h, e, r + 1) : h
      }

      function l(t, {
        ...e
      }, r) {
        const i = t.current;
        if (!(i instanceof Element)) return {
          target: e,
          transitionEnd: r
        };
        r && (r = {
          ...r
        }), t.values.forEach((t => {
          const e = t.get();
          if (!n(e)) return;
          const r = o(e, i);
          r && t.set(r)
        }));
        for (const t in e) {
          const a = e[t];
          if (!n(a)) continue;
          const s = o(a, i);
          s && (e[t] = s, r && void 0 === r[t] && (r[t] = a))
        }
        return {
          target: e,
          transitionEnd: r
        }
      }
    },
    10192: (t, e, r) => {
      "use strict";

      function i(t) {
        return t.startsWith("--")
      }
      r.d(e, {
        U: () => i
      })
    },
    29180: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => n
      });
      const i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function n(t) {
        return "string" == typeof t && !t.includes("-") && !!(i.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    41080: (t, e, r) => {
      "use strict";
      r.d(e, {
        S: () => s
      });
      var i = r(67700),
        n = r(24488),
        a = r(31992);

      function s(t, e) {
        var r;
        let s = (0, a.k)(t);
        return s !== n.I && (s = i.c), null === (r = s.getAnimatableNone) || void 0 === r ? void 0 : r.call(s, e)
      }
    },
    31992: (t, e, r) => {
      "use strict";
      r.d(e, {
        k: () => s
      });
      var i = r(69032),
        n = r(24488);
      const a = {
          ...r(82904).i,
          color: i.I,
          backgroundColor: i.I,
          outlineColor: i.I,
          fill: i.I,
          stroke: i.I,
          borderColor: i.I,
          borderTopColor: i.I,
          borderRightColor: i.I,
          borderBottomColor: i.I,
          borderLeftColor: i.I,
          filter: n.I,
          WebkitFilter: n.I
        },
        s = t => a[t]
    },
    18308: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => s,
        C: () => o
      });
      var i = r(78976),
        n = r(45852),
        a = r(75520);
      const s = [i.CQ, n.px, n.WI, n.oh, n.vw, n.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        o = t => s.find((0, a.o)(t))
    },
    82904: (t, e, r) => {
      "use strict";
      r.d(e, {
        i: () => s
      });
      var i = r(78976),
        n = r(45852);
      const a = {
          ...i.CQ,
          transform: Math.round
        },
        s = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          size: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          rotate: n.oh,
          rotateX: n.oh,
          rotateY: n.oh,
          rotateZ: n.oh,
          scale: i.aU,
          scaleX: i.aU,
          scaleY: i.aU,
          scaleZ: i.aU,
          skew: n.oh,
          skewX: n.oh,
          skewY: n.oh,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: i.W4,
          originX: n._e,
          originY: n._e,
          originZ: n.px,
          zIndex: a,
          fillOpacity: i.W4,
          strokeOpacity: i.W4,
          numOctaves: a
        }
    },
    75520: (t, e, r) => {
      "use strict";
      r.d(e, {
        o: () => i
      });
      const i = t => e => e.test(t)
    },
    26896: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => h
      });
      var i = r(97096);
      const n = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        a = (t, e) => i.I.indexOf(t) - i.I.indexOf(e);
      var s = r(10192);
      const o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var l = r(82904);

      function h(t, e, r, h) {
        const {
          style: c,
          vars: u,
          transform: p,
          transformKeys: d,
          transformOrigin: f
        } = t;
        d.length = 0;
        let m = !1,
          v = !1,
          g = !0;
        for (const t in e) {
          const r = e[t];
          if ((0, s.U)(t)) {
            u[t] = r;
            continue
          }
          const n = l.i[t],
            a = o(r, n);
          if (i._.has(t)) {
            if (m = !0, p[t] = a, d.push(t), !g) continue;
            r !== (n.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (v = !0, f[t] = a) : c[t] = a
        }
        if (e.transform || (m || h ? c.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: r = !0,
            allowTransformNone: i = !0
          }, s, o) {
            let l = "";
            e.sort(a);
            for (const r of e) l += `${n[r]||r}(${t[r]}) `;
            return r && !t.z && (l += "translateZ(0)"), l = l.trim(), o ? l = o(t, s ? "" : l) : i && s && (l = "none"), l
          }(t, r, g, h) : c.transform && (c.transform = "none")), v) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: r = 0
          } = f;
          c.transformOrigin = `${t} ${e} ${r}`
        }
      }
    },
    20132: (t, e, r) => {
      "use strict";

      function i(t, {
        style: e,
        vars: r
      }, i, n) {
        Object.assign(t.style, e, n && n.getProjectionStyles(i));
        for (const e in r) t.style.setProperty(e, r[e])
      }
      r.d(e, {
        K: () => i
      })
    },
    65324: (t, e, r) => {
      "use strict";
      r.d(e, {
        s: () => a
      });
      var i = r(39960),
        n = r(26364);

      function a(t) {
        const {
          style: e
        } = t, r = {};
        for (const a in e)((0, n.Y)(e[a]) || (0, i.e)(a, t)) && (r[a] = e[a]);
        return r
      }
    },
    97096: (t, e, r) => {
      "use strict";
      r.d(e, {
        I: () => i,
        _: () => n
      });
      const i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        n = new Set(i)
    },
    15384: (t, e, r) => {
      "use strict";
      r.d(e, {
        m: () => l
      });
      var i = r(26896),
        n = r(45852);

      function a(t, e, r) {
        return "string" == typeof t ? t : n.px.transform(e + r * t)
      }
      const s = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function l(t, {
        attrX: e,
        attrY: r,
        originX: l,
        originY: h,
        pathLength: c,
        pathSpacing: u = 1,
        pathOffset: p = 0,
        ...d
      }, f, m, v) {
        if ((0, i.q)(t, d, f, v), m) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: y,
          dimensions: b
        } = t;
        g.transform && (b && (y.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== h || y.transform) && (y.transformOrigin = function(t, e, r) {
          return `${a(e,t.x,t.width)} ${a(r,t.y,t.height)}`
        }(b, void 0 !== l ? l : .5, void 0 !== h ? h : .5)), void 0 !== e && (g.x = e), void 0 !== r && (g.y = r), void 0 !== c && function(t, e, r = 1, i = 0, a = !0) {
          t.pathLength = 1;
          const l = a ? s : o;
          t[l.offset] = n.px.transform(-i);
          const h = n.px.transform(e),
            c = n.px.transform(r);
          t[l.array] = `${h} ${c}`
        }(g, c, u, p, !1)
      }
    },
    45923: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => i
      });
      const i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    27336: (t, e, r) => {
      "use strict";
      r.d(e, {
        s: () => i
      });
      const i = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    90388: (t, e, r) => {
      "use strict";
      r.d(e, {
        H: () => s
      });
      var i = r(59256),
        n = r(20132),
        a = r(45923);

      function s(t, e, r, s) {
        (0, n.K)(t, e, void 0, s);
        for (const r in e.attrs) t.setAttribute(a.K.has(r) ? r : (0, i.k)(r), e.attrs[r])
      }
    },
    30720: (t, e, r) => {
      "use strict";
      r.d(e, {
        s: () => a
      });
      var i = r(26364),
        n = r(65324);

      function a(t) {
        const e = (0, n.s)(t);
        for (const r in t)(0, i.Y)(t[r]) && (e["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = t[r]);
        return e
      }
    },
    91892: (t, e, r) => {
      "use strict";
      r.d(e, {
        Kw: () => w,
        qq: () => S
      });
      var i = r(17216),
        n = r(11408);

      function a(t, e) {
        if (!Array.isArray(e)) return !1;
        const r = e.length;
        if (r !== t.length) return !1;
        for (let i = 0; i < r; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      var s = r(28480),
        o = r(62436),
        l = r(97096),
        h = r(85200),
        c = r(8600);
      const u = (t, e) => `${t}: ${e}`;

      function p(t, e) {
        const {
          MotionAppearAnimations: r
        } = window, i = u(t, l._.has(e) ? "transform" : e), n = r && r.get(i);
        return n ? (c.du.render((() => {
          try {
            n.cancel(), r.delete(i)
          } catch (t) {}
        })), n.currentTime || 0) : 0
      }
      const d = "data-" + (0, r(59256).k)("framerAppearId");
      var f = r(93428);

      function m(t, e, r = {}) {
        var i;
        const n = (0, o.K)(t, e, r.custom);
        let {
          transition: a = t.getDefaultTransition() || {}
        } = n || {};
        r.transitionOverride && (a = r.transitionOverride);
        const s = n ? () => v(t, n, r) : () => Promise.resolve(),
          l = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: n = 0,
              staggerChildren: s,
              staggerDirection: o
            } = a;
            return function(t, e, r = 0, i = 0, n = 1, a) {
              const s = [],
                o = (t.variantChildren.size - 1) * i,
                l = 1 === n ? (t = 0) => t * i : (t = 0) => o - t * i;
              return Array.from(t.variantChildren).sort(g).forEach(((t, i) => {
                s.push(m(t, e, {
                  ...a,
                  delay: r + l(i)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(s)
            }(t, e, n + i, s, o, r)
          } : () => Promise.resolve(),
          {
            when: h
          } = a;
        if (h) {
          const [t, e] = "beforeChildren" === h ? [s, l] : [l, s];
          return t().then(e)
        }
        return Promise.all([s(), l(r.delay)])
      }

      function v(t, e, {
        delay: r = 0,
        transitionOverride: i,
        type: n
      } = {}) {
        var a;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: c,
          ...u
        } = t.makeTargetAnimatable(e);
        const m = t.getValue("willChange");
        i && (o = i);
        const v = [],
          g = n && (null === (a = t.animationState) || void 0 === a ? void 0 : a.getState()[n]);
        for (const e in u) {
          const i = t.getValue(e),
            n = u[e];
          if (!i || void 0 === n || g && y(g, e)) continue;
          let a = {
            delay: r,
            elapsed: 0,
            ...o
          };
          if (t.shouldReduceMotion && l._.has(e) && (a = {
              ...a,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const r = t.getProps()[d];
            r && (a.elapsed = p(r, e))
          }
          let s = i.start((0, f.c)(e, i, n, a));
          (0, h.u)(m) && (m.add(e), s = s.then((() => m.remove(e)))), v.push(s)
        }
        return Promise.all(v).then((() => {
          c && (0, s.OE)(t, c)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function y({
        protectedKeys: t,
        needsAnimating: e
      }, r) {
        const i = t.hasOwnProperty(r) && !0 !== e[r];
        return e[r] = !1, i
      }
      var b = r(29955),
        x = r(19856);
      const S = [x.w.Animate, x.w.InView, x.w.Focus, x.w.Hover, x.w.Tap, x.w.Drag, x.w.Exit],
        E = [...S].reverse(),
        P = S.length;

      function w(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: r
          }) => function(t, e, r = {}) {
            let i;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const n = e.map((e => m(t, e, r)));
              i = Promise.all(n)
            } else if ("string" == typeof e) i = m(t, e, r);
            else {
              const n = "function" == typeof e ? (0, o.K)(t, e, r.custom) : e;
              i = v(t, n, r)
            }
            return i.then((() => t.notify("AnimationComplete", e)))
          }(t, e, r))))
        }(t);
        const r = {
          [x.w.Animate]: T(!0),
          [x.w.InView]: T(),
          [x.w.Hover]: T(),
          [x.w.Tap]: T(),
          [x.w.Drag]: T(),
          [x.w.Focus]: T(),
          [x.w.Exit]: T()
        };
        let s = !0;
        const l = (e, r) => {
          const i = (0, o.K)(t, r);
          if (i) {
            const {
              transition: t,
              transitionEnd: r,
              ...n
            } = i;
            e = {
              ...e,
              ...n,
              ...r
            }
          }
          return e
        };

        function h(o, h) {
          const c = t.getProps(),
            u = t.getVariantContext(!0) || {},
            p = [],
            d = new Set;
          let f = {},
            m = 1 / 0;
          for (let e = 0; e < P; e++) {
            const y = E[e],
              x = r[y],
              S = void 0 !== c[y] ? c[y] : u[y],
              P = (0, b.o)(S),
              w = y === h ? x.isActive : null;
            !1 === w && (m = e);
            let T = S === u[y] && S !== c[y] && P;
            if (T && s && t.manuallyAnimateOnMount && (T = !1), x.protectedKeys = {
                ...f
              }, !x.isActive && null === w || !S && !x.prevProp || (0, i.M)(S) || "boolean" == typeof S) continue;
            const C = (v = x.prevProp, "string" == typeof(g = S) ? g !== v : !!Array.isArray(g) && !a(g, v));
            let M = C || y === h && x.isActive && !T && P || e > m && P;
            const A = Array.isArray(S) ? S : [S];
            let _ = A.reduce(l, {});
            !1 === w && (_ = {});
            const {
              prevResolvedValues: k = {}
            } = x, D = {
              ...k,
              ..._
            }, I = t => {
              M = !0, d.delete(t), x.needsAnimating[t] = !0
            };
            for (const t in D) {
              const e = _[t],
                r = k[t];
              f.hasOwnProperty(t) || (e !== r ? (0, n.U)(e) && (0, n.U)(r) ? !a(e, r) || C ? I(t) : x.protectedKeys[t] = !0 : void 0 !== e ? I(t) : d.add(t) : void 0 !== e && d.has(t) ? I(t) : x.protectedKeys[t] = !0)
            }
            x.prevProp = S, x.prevResolvedValues = _, x.isActive && (f = {
              ...f,
              ..._
            }), s && t.blockInitialAnimation && (M = !1), M && !T && p.push(...A.map((t => ({
              animation: t,
              options: {
                type: y,
                ...o
              }
            }))))
          }
          var v, g;
          if (d.size) {
            const e = {};
            d.forEach((r => {
              const i = t.getBaseTarget(r);
              void 0 !== i && (e[r] = i)
            })), p.push({
              animation: e
            })
          }
          let y = Boolean(p.length);
          return s && !1 === c.initial && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(p) : Promise.resolve()
        }
        return {
          animateChanges: h,
          setActive: function(e, i, n) {
            var a;
            if (r[e].isActive === i) return Promise.resolve();
            null === (a = t.variantChildren) || void 0 === a || a.forEach((t => {
              var r;
              return null === (r = t.animationState) || void 0 === r ? void 0 : r.setActive(e, i)
            })), r[e].isActive = i;
            const s = h(n, e);
            for (const t in r) r[t].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(r) {
            e = r(t)
          },
          getState: () => r
        }
      }

      function T(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    82912: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => s,
        U: () => o
      });
      var i = r(17216),
        n = r(29955);
      const a = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function s(t) {
        return (0, i.M)(t.animate) || a.some((e => (0, n.o)(t[e])))
      }

      function o(t) {
        return Boolean(s(t) || t.variants)
      }
    },
    29955: (t, e, r) => {
      "use strict";

      function i(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      r.d(e, {
        o: () => i
      })
    },
    62436: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => n
      });
      var i = r(93456);

      function n(t, e, r) {
        const n = t.getProps();
        return (0, i.Q)(n, e, void 0 !== r ? r : n.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, r) => e[r] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, r) => e[r] = t.getVelocity())), e
        }(t))
      }
    },
    93456: (t, e, r) => {
      "use strict";

      function i(t, e, r, i = {}, n = {}) {
        return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, n)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, n)), e
      }
      r.d(e, {
        Q: () => i
      })
    },
    28480: (t, e, r) => {
      "use strict";
      r.d(e, {
        AH: () => g,
        iK: () => b,
        OE: () => v
      });
      const i = t => /^\-?\d*\.?\d+$/.test(t),
        n = t => /^0[^.\s]+$/.test(t);
      var a = r(37240),
        s = r(63016),
        o = r(67700),
        l = r(41080),
        h = r(69032),
        c = r(18308),
        u = r(75520);
      const p = [...c.q, h.I, o.c],
        d = t => p.find((0, u.o)(t));
      var f = r(62436);

      function m(t, e, r) {
        t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, s.w)(r))
      }

      function v(t, e) {
        const r = (0, f.K)(t, e);
        let {
          transitionEnd: i = {},
          transition: n = {},
          ...s
        } = r ? t.makeTargetAnimatable(r, !1) : {};
        s = {
          ...s,
          ...i
        };
        for (const e in s) m(t, e, (0, a.y)(s[e]))
      }

      function g(t, e, r) {
        var a, h;
        const c = Object.keys(e).filter((e => !t.hasValue(e))),
          u = c.length;
        if (u)
          for (let p = 0; p < u; p++) {
            const u = c[p],
              f = e[u];
            let m = null;
            Array.isArray(f) && (m = f[0]), null === m && (m = null !== (h = null !== (a = r[u]) && void 0 !== a ? a : t.readValue(u)) && void 0 !== h ? h : e[u]), null != m && ("string" == typeof m && (i(m) || n(m)) ? m = parseFloat(m) : !d(m) && o.c.test(f) && (m = (0, l.S)(u, f)), t.addValue(u, (0, s.w)(m, {
              owner: t
            })), void 0 === r[u] && (r[u] = m), null !== m && t.setBaseTarget(u, m))
          }
      }

      function y(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function b(t, e, r) {
        var i;
        const n = {};
        for (const a in t) {
          const t = y(a, e);
          n[a] = void 0 !== t ? t : null === (i = r.getValue(a)) || void 0 === i ? void 0 : i.get()
        }
        return n
      }
    },
    19856: (t, e, r) => {
      "use strict";
      var i;
      r.d(e, {
          w: () => i
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(i || (i = {}))
    },
    14628: (t, e, r) => {
      "use strict";

      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function n(t, e) {
        const r = t.indexOf(e);
        r > -1 && t.splice(r, 1)
      }
      r.d(e, {
        sd: () => n,
        wV: () => i
      })
    },
    85584: (t, e, r) => {
      "use strict";
      r.d(e, {
        q: () => i
      });
      const i = (t, e, r) => Math.min(Math.max(r, t), e)
    },
    512: (t, e, r) => {
      "use strict";
      r.d(e, {
        o: () => n
      });
      var i = r(8600);

      function n(t, e) {
        const r = performance.now(),
          n = ({
            timestamp: a
          }) => {
            const s = a - r;
            s >= e && (i.Qz.read(n), t(s - e))
          };
        return i.du.read(n, !0), () => i.Qz.read(n)
      }
    },
    70520: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => i
      });
      const i = "undefined" != typeof document
    },
    83840: (t, e, r) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      r.d(e, {
        U: () => i
      })
    },
    6764: (t, e, r) => {
      "use strict";
      r.d(e, {
        C: () => i
      });
      const i = (t, e, r) => -r * t + r * e + t
    },
    97768: (t, e, r) => {
      "use strict";
      r.d(e, {
        K: () => i
      });
      const i = t => t
    },
    51672: (t, e, r) => {
      "use strict";
      r.d(e, {
        W: () => n
      });
      const i = (t, e) => r => e(t(r)),
        n = (...t) => t.reduce(i)
    },
    78243: (t, e, r) => {
      "use strict";
      r.d(e, {
        _: () => n
      });
      var i = r(44392);
      const n = (void 0 === i || i.env, "production")
    },
    67368: (t, e, r) => {
      "use strict";
      r.d(e, {
        o: () => i
      });
      const i = (t, e, r) => {
        const i = e - t;
        return 0 === i ? 1 : (r - t) / i
      }
    },
    37240: (t, e, r) => {
      "use strict";
      r.d(e, {
        O: () => n,
        y: () => a
      });
      var i = r(11408);
      const n = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        a = t => (0, i.U)(t) ? t[t.length - 1] || 0 : t
    },
    14716: (t, e, r) => {
      "use strict";
      r.d(e, {
        _: () => n
      });
      var i = r(14628);
      class n {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, i.wV)(this.subscriptions, t), () => (0, i.sd)(this.subscriptions, t)
        }
        notify(t, e, r) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, r);
            else
              for (let n = 0; n < i; n++) {
                const i = this.subscriptions[n];
                i && i(t, e, r)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    99880: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => i
      });
      const i = t => 1e3 * t
    },
    28552: (t, e, r) => {
      "use strict";
      r.d(e, {
        _: () => n
      });
      var i = r(51664);

      function n(t) {
        const e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    53964: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => n
      });
      var i = r(51664);

      function n(t) {
        return (0, i.useEffect)((() => () => t()), [])
      }
    },
    49836: (t, e, r) => {
      "use strict";

      function i(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      r.d(e, {
        G: () => i
      })
    },
    63016: (t, e, r) => {
      "use strict";
      r.d(e, {
        w: () => l
      });
      var i = r(50900),
        n = r(8600),
        a = r(14716),
        s = r(49836);
      class o {
        constructor(t, e = {}) {
          var r;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: r,
              timestamp: a
            } = i.frameData;
            this.lastUpdated !== a && (this.timeDelta = r, this.lastUpdated = a, n.du.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => n.du.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (r = this.current, !isNaN(parseFloat(r))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new a._), this.events[t].add(e)
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t) {
          this.passiveEffect = t
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, r) {
          this.set(e), this.prev = t, this.timeDelta = r
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, s.G)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function l(t, e) {
        return new o(t, e)
      }
    },
    22396: (t, e, r) => {
      "use strict";
      r.d(e, {
        c: () => n
      });
      var i = r(70588);
      const n = {
        test: (0, r(34160).W)("#"),
        parse: function(t) {
          let e = "",
            r = "",
            i = "",
            n = "";
          return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), n = t.substring(4, 5), e += e, r += r, i += i, n += n), {
            red: parseInt(e, 16),
            green: parseInt(r, 16),
            blue: parseInt(i, 16),
            alpha: n ? parseInt(n, 16) / 255 : 1
          }
        },
        transform: i.M.transform
      }
    },
    30440: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => o
      });
      var i = r(78976),
        n = r(45852),
        a = r(91120),
        s = r(34160);
      const o = {
        test: (0, s.W)("hsl", "hue"),
        parse: (0, s.G)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: r,
          alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + n.WI.transform((0, a.Ok)(e)) + ", " + n.WI.transform((0, a.Ok)(r)) + ", " + (0, a.Ok)(i.W4.transform(s)) + ")"
      }
    },
    69032: (t, e, r) => {
      "use strict";
      r.d(e, {
        I: () => o
      });
      var i = r(91120),
        n = r(22396),
        a = r(30440),
        s = r(70588);
      const o = {
        test: t => s.M.test(t) || n.c.test(t) || a.u.test(t),
        parse: t => s.M.test(t) ? s.M.parse(t) : a.u.test(t) ? a.u.parse(t) : n.c.parse(t),
        transform: t => (0, i.ct)(t) ? t : t.hasOwnProperty("red") ? s.M.transform(t) : a.u.transform(t)
      }
    },
    70588: (t, e, r) => {
      "use strict";
      r.d(e, {
        M: () => l
      });
      var i = r(85584),
        n = r(78976),
        a = r(91120),
        s = r(34160);
      const o = {
          ...n.CQ,
          transform: t => Math.round((t => (0, i.q)(0, 255, t))(t))
        },
        l = {
          test: (0, s.W)("rgb", "red"),
          parse: (0, s.G)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
          }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(r) + ", " + (0, a.Ok)(n.W4.transform(i)) + ")"
        }
    },
    34160: (t, e, r) => {
      "use strict";
      r.d(e, {
        G: () => a,
        W: () => n
      });
      var i = r(91120);
      const n = (t, e) => r => Boolean((0, i.ct)(r) && i.CC.test(r) && r.startsWith(t) || e && Object.prototype.hasOwnProperty.call(r, e)),
        a = (t, e, r) => n => {
          if (!(0, i.ct)(n)) return n;
          const [a, s, o, l] = n.match(i.au);
          return {
            [t]: parseFloat(a),
            [e]: parseFloat(s),
            [r]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    24488: (t, e, r) => {
      "use strict";
      r.d(e, {
        I: () => l
      });
      var i = r(67700),
        n = r(91120);
      const a = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function s(t) {
        const [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = r.match(n.au) || [];
        if (!i) return t;
        const s = r.replace(i, "");
        let o = a.has(e) ? 1 : 0;
        return i !== r && (o *= 100), e + "(" + o + s + ")"
      }
      const o = /([a-z-]*)\(.*?\)/g,
        l = {
          ...i.c,
          getAnimatableNone: t => {
            const e = t.match(o);
            return e ? e.map(s).join(" ") : t
          }
        }
    },
    67700: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => l,
        c: () => p
      });
      var i = r(69032),
        n = r(78976),
        a = r(91120);
      const s = "${c}",
        o = "${n}";

      function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let r = 0,
          l = 0;
        const h = t.match(a.iO);
        h && (r = h.length, t = t.replace(a.iO, s), e.push(...h.map(i.I.parse)));
        const c = t.match(a.au);
        return c && (l = c.length, t = t.replace(a.au, o), e.push(...c.map(n.CQ.parse))), {
          values: e,
          numColors: r,
          numNumbers: l,
          tokenised: t
        }
      }

      function h(t) {
        return l(t).values
      }

      function c(t) {
        const {
          values: e,
          numColors: r,
          tokenised: n
        } = l(t), h = e.length;
        return t => {
          let e = n;
          for (let n = 0; n < h; n++) e = e.replace(n < r ? s : o, n < r ? i.I.transform(t[n]) : (0, a.Ok)(t[n]));
          return e
        }
      }
      const u = t => "number" == typeof t ? 0 : t,
        p = {
          test: function(t) {
            var e, r;
            return isNaN(t) && (0, a.ct)(t) && ((null === (e = t.match(a.au)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (r = t.match(a.iO)) || void 0 === r ? void 0 : r.length) || 0) > 0
          },
          parse: h,
          createTransformer: c,
          getAnimatableNone: function(t) {
            const e = h(t);
            return c(t)(e.map(u))
          }
        }
    },
    78976: (t, e, r) => {
      "use strict";
      r.d(e, {
        CQ: () => n,
        W4: () => a,
        aU: () => s
      });
      var i = r(85584);
      const n = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        a = {
          ...n,
          transform: t => (0, i.q)(0, 1, t)
        },
        s = {
          ...n,
          default: 1
        }
    },
    45852: (t, e, r) => {
      "use strict";
      r.d(e, {
        WI: () => s,
        _e: () => c,
        oh: () => a,
        px: () => o,
        vh: () => l,
        vw: () => h
      });
      var i = r(91120);
      const n = t => ({
          test: e => (0, i.ct)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        a = n("deg"),
        s = n("%"),
        o = n("px"),
        l = n("vh"),
        h = n("vw"),
        c = {
          ...s,
          parse: t => s.parse(t) / 100,
          transform: t => s.transform(100 * t)
        }
    },
    91120: (t, e, r) => {
      "use strict";
      r.d(e, {
        CC: () => s,
        Ok: () => i,
        au: () => n,
        ct: () => o,
        iO: () => a
      });
      const i = t => Math.round(1e5 * t) / 1e5,
        n = /(-)?([\d]*\.?[\d])+/g,
        a = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        s = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function o(t) {
        return "string" == typeof t
      }
    },
    85200: (t, e, r) => {
      "use strict";
      r.d(e, {
        u: () => n
      });
      var i = r(26364);

      function n(t) {
        return Boolean((0, i.Y)(t) && t.add)
      }
    },
    26364: (t, e, r) => {
      "use strict";
      r.d(e, {
        Y: () => i
      });
      const i = t => !!(null == t ? void 0 : t.getVelocity)
    },
    46e3: (t, e, r) => {
      "use strict";
      r.d(e, {
        I: () => a
      });
      var i = r(37240),
        n = r(26364);

      function a(t) {
        const e = (0, n.Y)(t) ? t.get() : t;
        return (0, i.O)(e) ? e.toValue() : e
      }
    },
    41512: (t, e, r) => {
      "use strict";
      r.d(e, {
        cD: () => h
      });
      var i = r(51664),
        n = (Object.defineProperty, new Map),
        a = new WeakMap,
        s = 0,
        o = void 0;

      function l(t, e, r = {}, i = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const n = t.getBoundingClientRect();
          return e(i, {
            isIntersecting: i,
            target: t,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: n,
            intersectionRect: n,
            rootBounds: n
          }), () => {}
        }
        const {
          id: l,
          observer: h,
          elements: c
        } = function(t) {
          let e = function(t) {
              return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
                return `${e}_${"root"===e?(r=t.root,r?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0"):t[e]}`;
                var r
              })).toString()
            }(t),
            r = n.get(e);
          if (!r) {
            const i = new Map;
            let a;
            const s = new IntersectionObserver((e => {
              e.forEach((e => {
                var r;
                const n = e.isIntersecting && a.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = n), null == (r = i.get(e.target)) || r.forEach((t => {
                  t(n, e)
                }))
              }))
            }), t);
            a = s.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), r = {
              id: e,
              observer: s,
              elements: i
            }, n.set(e, r)
          }
          return r
        }(r);
        let u = c.get(t) || [];
        return c.has(t) || c.set(t, u), u.push(e), h.observe(t),
          function() {
            u.splice(u.indexOf(e), 1), 0 === u.length && (c.delete(t), h.unobserve(t)), 0 === c.size && (h.disconnect(), n.delete(l))
          }
      }

      function h({
        threshold: t,
        delay: e,
        trackVisibility: r,
        rootMargin: n,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: h,
        fallbackInView: c,
        onChange: u
      } = {}) {
        var p;
        const [d, f] = i.useState(null), m = i.useRef(), [v, g] = i.useState({
          inView: !!h,
          entry: void 0
        });
        m.current = u, i.useEffect((() => {
          if (o || !d) return;
          let i;
          return i = l(d, ((t, e) => {
            g({
              inView: t,
              entry: e
            }), m.current && m.current(t, e), e.isIntersecting && s && i && (i(), i = void 0)
          }), {
            root: a,
            rootMargin: n,
            threshold: t,
            trackVisibility: r,
            delay: e
          }, c), () => {
            i && i()
          }
        }), [Array.isArray(t) ? t.toString() : t, d, a, n, s, o, r, c, e]);
        const y = null == (p = v.entry) ? void 0 : p.target,
          b = i.useRef();
        d || !y || s || o || b.current === y || (b.current = y, g({
          inView: !!h,
          entry: void 0
        }));
        const x = [f, v.inView, v.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
      }
      i.Component
    },
    31403: (t, e, r) => {
      "use strict";
      r.d(e, {
        O4: () => c,
        _2: () => s,
        eM: () => l,
        Hj: () => h
      });
      var i = r(1068),
        n = r(75848);

      function a(t, e, r, i) {
        return t.params.createElements && Object.keys(i).forEach((a => {
          if (!r[a] && !0 === r.auto) {
            let s = (0, n.e)(t.el, `.${i[a]}`)[0];
            s || (s = (0, n.c)("div", i[a]), s.className = i[a], t.el.append(s)), r[a] = s, e[a] = s
          }
        })), r
      }

      function s(t) {
        let {
          swiper: e,
          extendParams: r,
          on: i,
          emit: s
        } = t;

        function o(t) {
          let r;
          return t && "string" == typeof t && e.isElement && (r = e.el.querySelector(t), r) ? r : (t && ("string" == typeof t && (r = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && r.length > 1 && 1 === e.el.querySelectorAll(t).length && (r = e.el.querySelector(t))), t && !r ? t : r)
        }

        function l(t, r) {
          const i = e.params.navigation;
          (t = (0, n.m)(t)).forEach((t => {
            t && (t.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = r), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](i.lockClass))
          }))
        }

        function h() {
          const {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          if (e.params.loop) return l(r, !1), void l(t, !1);
          l(r, e.isBeginning && !e.params.rewind), l(t, e.isEnd && !e.params.rewind)
        }

        function c(t) {
          t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
        }

        function u(t) {
          t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
        }

        function p() {
          const t = e.params.navigation;
          if (e.params.navigation = a(e, e.originalParams.navigation, e.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl) return;
          let r = o(t.nextEl),
            i = o(t.prevEl);
          Object.assign(e.navigation, {
            nextEl: r,
            prevEl: i
          }), r = (0, n.m)(r), i = (0, n.m)(i);
          const s = (r, i) => {
            r && r.addEventListener("click", "next" === i ? u : c), !e.enabled && r && r.classList.add(...t.lockClass.split(" "))
          };
          r.forEach((t => s(t, "next"))), i.forEach((t => s(t, "prev")))
        }

        function d() {
          let {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          t = (0, n.m)(t), r = (0, n.m)(r);
          const i = (t, r) => {
            t.removeEventListener("click", "next" === r ? u : c), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
          };
          t.forEach((t => i(t, "next"))), r.forEach((t => i(t, "prev")))
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), e.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", (() => {
          !1 === e.params.navigation.enabled ? f() : (p(), h())
        })), i("toEdge fromEdge lock unlock", (() => {
          h()
        })), i("destroy", (() => {
          d()
        })), i("enable disable", (() => {
          let {
            nextEl: t,
            prevEl: r
          } = e.navigation;
          t = (0, n.m)(t), r = (0, n.m)(r), e.enabled ? h() : [...t, ...r].filter((t => !!t)).forEach((t => t.classList.add(e.params.navigation.lockClass)))
        })), i("click", ((t, r) => {
          let {
            nextEl: i,
            prevEl: a
          } = e.navigation;
          i = (0, n.m)(i), a = (0, n.m)(a);
          const o = r.target;
          if (e.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
            let t;
            i.length ? t = i[0].classList.contains(e.params.navigation.hiddenClass) : a.length && (t = a[0].classList.contains(e.params.navigation.hiddenClass)), s(!0 === t ? "navigationShow" : "navigationHide"), [...i, ...a].filter((t => !!t)).forEach((t => t.classList.toggle(e.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), d()
        };
        Object.assign(e.navigation, {
          enable: () => {
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), p(), h()
          },
          disable: f,
          update: h,
          init: p,
          destroy: d
        })
      }

      function o(t) {
        return void 0 === t && (t = ""), `.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function l(t) {
        let {
          swiper: e,
          extendParams: r,
          on: i,
          emit: s
        } = t;
        const l = "swiper-pagination";
        let h;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: t => t,
            formatFractionTotal: t => t,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`
          }
        }), e.pagination = {
          el: null,
          bullets: []
        };
        let c = 0;

        function u() {
          return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }

        function p(t, r) {
          const {
            bulletActiveClass: i
          } = e.params.pagination;
          t && (t = t[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (t.classList.add(`${i}-${r}`), (t = t[("prev" === r ? "previous" : "next") + "ElementSibling"]) && t.classList.add(`${i}-${r}-${r}`))
        }

        function d(t) {
          const r = t.target.closest(o(e.params.pagination.bulletClass));
          if (!r) return;
          t.preventDefault();
          const i = (0, n.g)(r) * e.params.slidesPerGroup;
          if (e.params.loop) {
            if (e.realIndex === i) return;
            e.slideToLoop(i)
          } else e.slideTo(i)
        }

        function f() {
          const t = e.rtl,
            r = e.params.pagination;
          if (u()) return;
          let i, a, l = e.pagination.el;
          l = (0, n.m)(l);
          const d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            f = e.params.loop ? Math.ceil(d / e.params.slidesPerGroup) : e.snapGrid.length;
          if (e.params.loop ? (a = e.previousRealIndex || 0, i = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (i = e.snapIndex, a = e.previousSnapIndex) : (a = e.previousIndex || 0, i = e.activeIndex || 0), "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const s = e.pagination.bullets;
            let o, u, d;
            if (r.dynamicBullets && (h = (0, n.f)(s[0], e.isHorizontal() ? "width" : "height", !0), l.forEach((t => {
                t.style[e.isHorizontal() ? "width" : "height"] = h * (r.dynamicMainBullets + 4) + "px"
              })), r.dynamicMainBullets > 1 && void 0 !== a && (c += i - (a || 0), c > r.dynamicMainBullets - 1 ? c = r.dynamicMainBullets - 1 : c < 0 && (c = 0)), o = Math.max(i - c, 0), u = o + (Math.min(s.length, r.dynamicMainBullets) - 1), d = (u + o) / 2), s.forEach((t => {
                const e = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t => `${r.bulletActiveClass}${t}`))].map((t => "string" == typeof t && t.includes(" ") ? t.split(" ") : t)).flat();
                t.classList.remove(...e)
              })), l.length > 1) s.forEach((t => {
              const a = (0, n.g)(t);
              a === i ? t.classList.add(...r.bulletActiveClass.split(" ")) : e.isElement && t.setAttribute("part", "bullet"), r.dynamicBullets && (a >= o && a <= u && t.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), a === o && p(t, "prev"), a === u && p(t, "next"))
            }));
            else {
              const t = s[i];
              if (t && t.classList.add(...r.bulletActiveClass.split(" ")), e.isElement && s.forEach(((t, e) => {
                  t.setAttribute("part", e === i ? "bullet-active" : "bullet")
                })), r.dynamicBullets) {
                const t = s[o],
                  e = s[u];
                for (let t = o; t <= u; t += 1) s[t] && s[t].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                p(t, "prev"), p(e, "next")
              }
            }
            if (r.dynamicBullets) {
              const i = Math.min(s.length, r.dynamicMainBullets + 4),
                n = (h * i - h) / 2 - d * h,
                a = t ? "right" : "left";
              s.forEach((t => {
                t.style[e.isHorizontal() ? a : "top"] = `${n}px`
              }))
            }
          }
          l.forEach(((t, n) => {
            if ("fraction" === r.type && (t.querySelectorAll(o(r.currentClass)).forEach((t => {
                t.textContent = r.formatFractionCurrent(i + 1)
              })), t.querySelectorAll(o(r.totalClass)).forEach((t => {
                t.textContent = r.formatFractionTotal(f)
              }))), "progressbar" === r.type) {
              let n;
              n = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
              const a = (i + 1) / f;
              let s = 1,
                l = 1;
              "horizontal" === n ? s = a : l = a, t.querySelectorAll(o(r.progressbarFillClass)).forEach((t => {
                t.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${l})`, t.style.transitionDuration = `${e.params.speed}ms`
              }))
            }
            "custom" === r.type && r.renderCustom ? (t.innerHTML = r.renderCustom(e, i + 1, f), 0 === n && s("paginationRender", t)) : (0 === n && s("paginationRender", t), s("paginationUpdate", t)), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](r.lockClass)
          }))
        }

        function m() {
          const t = e.params.pagination;
          if (u()) return;
          const r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
          let i = e.pagination.el;
          i = (0, n.m)(i);
          let a = "";
          if ("bullets" === t.type) {
            let i = e.params.loop ? Math.ceil(r / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && i > r && (i = r);
            for (let r = 0; r < i; r += 1) t.renderBullet ? a += t.renderBullet.call(e, r, t.bulletClass) : a += `<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`
          }
          "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], i.forEach((r => {
            "custom" !== t.type && (r.innerHTML = a || ""), "bullets" === t.type && e.pagination.bullets.push(...r.querySelectorAll(o(t.bulletClass)))
          })), "custom" !== t.type && s("paginationRender", i[0])
        }

        function v() {
          e.params.pagination = a(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
          });
          const t = e.params.pagination;
          if (!t.el) return;
          let r;
          "string" == typeof t.el && e.isElement && (r = e.el.querySelector(t.el)), r || "string" != typeof t.el || (r = [...document.querySelectorAll(t.el)]), r || (r = t.el), r && 0 !== r.length && (e.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(r) && r.length > 1 && (r = [...e.el.querySelectorAll(t.el)], r.length > 1 && (r = r.filter((t => (0, n.a)(t, ".swiper")[0] === e.el))[0])), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(e.pagination, {
            el: r
          }), r = (0, n.m)(r), r.forEach((r => {
            "bullets" === t.type && t.clickable && r.classList.add(...(t.clickableClass || "").split(" ")), r.classList.add(t.modifierClass + t.type), r.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (r.classList.add(`${t.modifierClass}${t.type}-dynamic`), c = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && r.classList.add(t.progressbarOppositeClass), t.clickable && r.addEventListener("click", d), e.enabled || r.classList.add(t.lockClass)
          })))
        }

        function g() {
          const t = e.params.pagination;
          if (u()) return;
          let r = e.pagination.el;
          r && (r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(t.hiddenClass), r.classList.remove(t.modifierClass + t.type), r.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (r.classList.remove(...(t.clickableClass || "").split(" ")), r.removeEventListener("click", d))
          }))), e.pagination.bullets && e.pagination.bullets.forEach((e => e.classList.remove(...t.bulletActiveClass.split(" "))))
        }
        i("changeDirection", (() => {
          if (!e.pagination || !e.pagination.el) return;
          const t = e.params.pagination;
          let {
            el: r
          } = e.pagination;
          r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(t.horizontalClass, t.verticalClass), r.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
          }))
        })), i("init", (() => {
          !1 === e.params.pagination.enabled ? y() : (v(), m(), f())
        })), i("activeIndexChange", (() => {
          void 0 === e.snapIndex && f()
        })), i("snapIndexChange", (() => {
          f()
        })), i("snapGridLengthChange", (() => {
          m(), f()
        })), i("destroy", (() => {
          g()
        })), i("enable disable", (() => {
          let {
            el: t
          } = e.pagination;
          t && (t = (0, n.m)(t), t.forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))))
        })), i("lock unlock", (() => {
          f()
        })), i("click", ((t, r) => {
          const i = r.target,
            a = (0, n.m)(e.pagination.el);
          if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !i.classList.contains(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
            const t = a[0].classList.contains(e.params.pagination.hiddenClass);
            s(!0 === t ? "paginationShow" : "paginationHide"), a.forEach((t => t.classList.toggle(e.params.pagination.hiddenClass)))
          }
        }));
        const y = () => {
          e.el.classList.add(e.params.pagination.paginationDisabledClass);
          let {
            el: t
          } = e.pagination;
          t && (t = (0, n.m)(t), t.forEach((t => t.classList.add(e.params.pagination.paginationDisabledClass)))), g()
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass);
            let {
              el: t
            } = e.pagination;
            t && (t = (0, n.m)(t), t.forEach((t => t.classList.remove(e.params.pagination.paginationDisabledClass)))), v(), m(), f()
          },
          disable: y,
          render: m,
          update: f,
          init: v,
          destroy: g
        })
      }

      function h(t) {
        let {
          swiper: e,
          extendParams: r,
          on: a
        } = t;
        r({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let s = !1,
          o = !1;

        function l() {
          const t = e.thumbs.swiper;
          if (!t || t.destroyed) return;
          const r = t.clickedIndex,
            i = t.clickedSlide;
          if (i && i.classList.contains(e.params.thumbs.slideThumbActiveClass)) return;
          if (null == r) return;
          let n;
          n = t.params.loop ? parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : r, e.params.loop ? e.slideToLoop(n) : e.slideTo(n)
        }

        function h() {
          const {
            thumbs: t
          } = e.params;
          if (s) return !1;
          s = !0;
          const r = e.constructor;
          if (t.swiper instanceof r) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), e.thumbs.swiper.update();
          else if ((0, n.k)(t.swiper)) {
            const i = Object.assign({}, t.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), e.thumbs.swiper = new r(i), o = !0
          }
          return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", l), !0
        }

        function c(t) {
          const r = e.thumbs.swiper;
          if (!r || r.destroyed) return;
          const i = "auto" === r.params.slidesPerView ? r.slidesPerViewDynamic() : r.params.slidesPerView;
          let a = 1;
          const s = e.params.thumbs.slideThumbActiveClass;
          if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (a = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), r.slides.forEach((t => t.classList.remove(s))), r.params.loop || r.params.virtual && r.params.virtual.enabled)
            for (let t = 0; t < a; t += 1)(0, n.e)(r.slidesEl, `[data-swiper-slide-index="${e.realIndex+t}"]`).forEach((t => {
              t.classList.add(s)
            }));
          else
            for (let t = 0; t < a; t += 1) r.slides[e.realIndex + t] && r.slides[e.realIndex + t].classList.add(s);
          const o = e.params.thumbs.autoScrollOffset,
            l = o && !r.params.loop;
          if (e.realIndex !== r.realIndex || l) {
            const n = r.activeIndex;
            let a, s;
            if (r.params.loop) {
              const t = r.slides.filter((t => t.getAttribute("data-swiper-slide-index") === `${e.realIndex}`))[0];
              a = r.slides.indexOf(t), s = e.activeIndex > e.previousIndex ? "next" : "prev"
            } else a = e.realIndex, s = a > e.previousIndex ? "next" : "prev";
            l && (a += "next" === s ? o : -1 * o), r.visibleSlidesIndexes && r.visibleSlidesIndexes.indexOf(a) < 0 && (r.params.centeredSlides ? a = a > n ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > n && r.params.slidesPerGroup, r.slideTo(a, t ? 0 : void 0))
          }
        }
        e.thumbs = {
          swiper: null
        }, a("beforeInit", (() => {
          const {
            thumbs: t
          } = e.params;
          if (t && t.swiper)
            if ("string" == typeof t.swiper || t.swiper instanceof HTMLElement) {
              const r = (0, i.g)(),
                n = () => {
                  const i = "string" == typeof t.swiper ? r.querySelector(t.swiper) : t.swiper;
                  if (i && i.swiper) t.swiper = i.swiper, h(), c(!0);
                  else if (i) {
                    const r = n => {
                      t.swiper = n.detail[0], i.removeEventListener("init", r), h(), c(!0), t.swiper.update(), e.update()
                    };
                    i.addEventListener("init", r)
                  }
                  return i
                },
                a = () => {
                  e.destroyed || n() || requestAnimationFrame(a)
                };
              requestAnimationFrame(a)
            } else h(), c(!0)
        })), a("slideChange update resize observerUpdate", (() => {
          c()
        })), a("setTransition", ((t, r) => {
          const i = e.thumbs.swiper;
          i && !i.destroyed && i.setTransition(r)
        })), a("beforeDestroy", (() => {
          const t = e.thumbs.swiper;
          t && !t.destroyed && o && t.destroy()
        })), Object.assign(e.thumbs, {
          init: h,
          update: c
        })
      }

      function c(t) {
        let {
          swiper: e,
          extendParams: r,
          emit: i,
          once: a
        } = t;
        r({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(e, {
          freeMode: {
            onTouchStart: function() {
              if (e.params.cssMode) return;
              const t = e.getTranslate();
              e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                currentPos: e.rtl ? e.translate : -e.translate
              })
            },
            onTouchMove: function() {
              if (e.params.cssMode) return;
              const {
                touchEventsData: t,
                touches: r
              } = e;
              0 === t.velocities.length && t.velocities.push({
                position: r[e.isHorizontal() ? "startX" : "startY"],
                time: t.touchStartTime
              }), t.velocities.push({
                position: r[e.isHorizontal() ? "currentX" : "currentY"],
                time: (0, n.d)()
              })
            },
            onTouchEnd: function(t) {
              let {
                currentPos: r
              } = t;
              if (e.params.cssMode) return;
              const {
                params: s,
                wrapperEl: o,
                rtlTranslate: l,
                snapGrid: h,
                touchEventsData: c
              } = e, u = (0, n.d)() - c.touchStartTime;
              if (r < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (r > -e.maxTranslate()) e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1);
              else {
                if (s.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const t = c.velocities.pop(),
                      r = c.velocities.pop(),
                      i = t.position - r.position,
                      a = t.time - r.time;
                    e.velocity = i / a, e.velocity /= 2, Math.abs(e.velocity) < s.freeMode.minimumVelocity && (e.velocity = 0), (a > 150 || (0, n.d)() - t.time > 300) && (e.velocity = 0)
                  } else e.velocity = 0;
                  e.velocity *= s.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let t = 1e3 * s.freeMode.momentumRatio;
                  const r = e.velocity * t;
                  let u = e.translate + r;
                  l && (u = -u);
                  let p, d = !1;
                  const f = 20 * Math.abs(e.velocity) * s.freeMode.momentumBounceRatio;
                  let m;
                  if (u < e.maxTranslate()) s.freeMode.momentumBounce ? (u + e.maxTranslate() < -f && (u = e.maxTranslate() - f), p = e.maxTranslate(), d = !0, c.allowMomentumBounce = !0) : u = e.maxTranslate(), s.loop && s.centeredSlides && (m = !0);
                  else if (u > e.minTranslate()) s.freeMode.momentumBounce ? (u - e.minTranslate() > f && (u = e.minTranslate() + f), p = e.minTranslate(), d = !0, c.allowMomentumBounce = !0) : u = e.minTranslate(), s.loop && s.centeredSlides && (m = !0);
                  else if (s.freeMode.sticky) {
                    let t;
                    for (let e = 0; e < h.length; e += 1)
                      if (h[e] > -u) {
                        t = e;
                        break
                      } u = Math.abs(h[t] - u) < Math.abs(h[t - 1] - u) || "next" === e.swipeDirection ? h[t] : h[t - 1], u = -u
                  }
                  if (m && a("transitionEnd", (() => {
                      e.loopFix()
                    })), 0 !== e.velocity) {
                    if (t = l ? Math.abs((-u - e.translate) / e.velocity) : Math.abs((u - e.translate) / e.velocity), s.freeMode.sticky) {
                      const r = Math.abs((l ? -u : u) - e.translate),
                        i = e.slidesSizesGrid[e.activeIndex];
                      t = r < i ? s.speed : r < 2 * i ? 1.5 * s.speed : 2.5 * s.speed
                    }
                  } else if (s.freeMode.sticky) return void e.slideToClosest();
                  s.freeMode.momentumBounce && d ? (e.updateProgress(p), e.setTransition(t), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating = !0, (0, n.j)(o, (() => {
                    e && !e.destroyed && c.allowMomentumBounce && (i("momentumBounce"), e.setTransition(s.speed), setTimeout((() => {
                      e.setTranslate(p), (0, n.j)(o, (() => {
                        e && !e.destroyed && e.transitionEnd()
                      }))
                    }), 0))
                  }))) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(u), e.setTransition(t), e.setTranslate(u), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, (0, n.j)(o, (() => {
                    e && !e.destroyed && e.transitionEnd()
                  })))) : e.updateProgress(u), e.updateActiveIndex(), e.updateSlidesClasses()
                } else {
                  if (s.freeMode.sticky) return void e.slideToClosest();
                  s.freeMode && i("_freeModeNoMomentumRelease")
                }(!s.freeMode.momentum || u >= s.longSwipesMs) && (i("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    1068: (t, e, r) => {
      "use strict";

      function i(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
      }

      function n(t, e) {
        void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(e).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : i(e[r]) && i(t[r]) && Object.keys(e[r]).length > 0 && n(t[r], e[r])
        }))
      }
      r.d(e, {
        a: () => l,
        g: () => s
      });
      const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const t = "undefined" != typeof document ? document : {};
        return n(t, a), t
      }
      const o = {
        document: a,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
          "undefined" != typeof setTimeout && clearTimeout(t)
        }
      };

      function l() {
        const t = "undefined" != typeof window ? window : {};
        return n(t, o), t
      }
    },
    75848: (t, e, r) => {
      "use strict";
      r.d(e, {
        a: () => b,
        c: () => f,
        d: () => s,
        e: () => p,
        f: () => S,
        g: () => y,
        i: () => o,
        j: () => x,
        k: () => l,
        m: () => E,
        n: () => a,
        o: () => g,
        p: () => v,
        q: () => m,
        r: () => u,
        s: () => c,
        t: () => d,
        u: () => h,
        v: () => n
      });
      var i = r(1068);

      function n(t) {
        const e = t;
        Object.keys(e).forEach((t => {
          try {
            e[t] = null
          } catch (t) {}
          try {
            delete e[t]
          } catch (t) {}
        }))
      }

      function a(t, e) {
        return void 0 === e && (e = 0), setTimeout(t, e)
      }

      function s() {
        return Date.now()
      }

      function o(t, e) {
        void 0 === e && (e = "x");
        const r = (0, i.a)();
        let n, a, s;
        const o = function(t) {
          const e = (0, i.a)();
          let r;
          return e.getComputedStyle && (r = e.getComputedStyle(t, null)), !r && t.currentStyle && (r = t.currentStyle), r || (r = t.style), r
        }(t);
        return r.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((t => t.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === e && (a = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === e && (a = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), a || 0
      }

      function l(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
      }

      function h() {
        const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          e = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != n && (r = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(n)).filter((t => e.indexOf(t) < 0));
            for (let e = 0, i = r.length; e < i; e += 1) {
              const i = r[e],
                a = Object.getOwnPropertyDescriptor(n, i);
              void 0 !== a && a.enumerable && (l(t[i]) && l(n[i]) ? n[i].__swiper__ ? t[i] = n[i] : h(t[i], n[i]) : !l(t[i]) && l(n[i]) ? (t[i] = {}, n[i].__swiper__ ? t[i] = n[i] : h(t[i], n[i])) : t[i] = n[i])
            }
          }
        }
        var r;
        return t
      }

      function c(t, e, r) {
        t.style.setProperty(e, r)
      }

      function u(t) {
        let {
          swiper: e,
          targetPosition: r,
          side: n
        } = t;
        const a = (0, i.a)(),
          s = -e.translate;
        let o, l = null;
        const h = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          u = (t, e) => "next" === c && t >= e || "prev" === c && t <= e,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const t = Math.max(Math.min((o - l) / h, 1), 0),
              i = .5 - Math.cos(t * Math.PI) / 2;
            let c = s + i * (r - s);
            if (u(c, r) && (c = r), e.wrapperEl.scrollTo({
                [n]: c
              }), u(c, r)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                [n]: c
              })
            })), void a.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = a.requestAnimationFrame(p)
          };
        p()
      }

      function p(t, e) {
        return void 0 === e && (e = ""), [...t.children].filter((t => t.matches(e)))
      }

      function d(t) {
        try {
          return void console.warn(t)
        } catch (t) {}
      }

      function f(t, e) {
        void 0 === e && (e = []);
        const r = document.createElement(t);
        return r.classList.add(...Array.isArray(e) ? e : function(t) {
          return void 0 === t && (t = ""), t.trim().split(" ").filter((t => !!t.trim()))
        }(e)), r
      }

      function m(t, e) {
        const r = [];
        for (; t.previousElementSibling;) {
          const i = t.previousElementSibling;
          e ? i.matches(e) && r.push(i) : r.push(i), t = i
        }
        return r
      }

      function v(t, e) {
        const r = [];
        for (; t.nextElementSibling;) {
          const i = t.nextElementSibling;
          e ? i.matches(e) && r.push(i) : r.push(i), t = i
        }
        return r
      }

      function g(t, e) {
        return (0, i.a)().getComputedStyle(t, null).getPropertyValue(e)
      }

      function y(t) {
        let e, r = t;
        if (r) {
          for (e = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (e += 1);
          return e
        }
      }

      function b(t, e) {
        const r = [];
        let i = t.parentElement;
        for (; i;) e ? i.matches(e) && r.push(i) : r.push(i), i = i.parentElement;
        return r
      }

      function x(t, e) {
        e && t.addEventListener("transitionend", (function r(i) {
          i.target === t && (e.call(t, i), t.removeEventListener("transitionend", r))
        }))
      }

      function S(t, e, r) {
        const n = (0, i.a)();
        return r ? t["width" === e ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(t, null).getPropertyValue("width" === e ? "margin-left" : "margin-bottom")) : t.offsetWidth
      }

      function E(t) {
        return (Array.isArray(t) ? t : [t]).filter((t => !!t))
      }
    },
    48111: (t, e, r) => {
      "use strict";
      r.d(e, {
        wx: () => K,
        Ky: () => Z
      });
      var i = r(51664),
        n = r(1068),
        a = r(75848);
      let s, o, l;

      function h() {
        return s || (s = function() {
          const t = (0, n.a)(),
            e = (0, n.g)();
          return {
            smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
            touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
          }
        }()), s
      }

      function c(t) {
        return void 0 === t && (t = {}), o || (o = function(t) {
          let {
            userAgent: e
          } = void 0 === t ? {} : t;
          const r = h(),
            i = (0, n.a)(),
            a = i.navigator.platform,
            s = e || i.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = i.screen.width,
            c = i.screen.height,
            u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = s.match(/(iPad).*OS\s([\d_]+)/);
          const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === a;
          let v = "MacIntel" === a;
          return !p && v && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = s.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), v = !1), u && !m && (o.os = "android", o.android = !0), (p || f || d) && (o.os = "ios", o.ios = !0), o
        }(t)), o
      }
      var u = {
        on(t, e, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;
          const n = r ? "unshift" : "push";
          return t.split(" ").forEach((t => {
            i.eventsListeners[t] || (i.eventsListeners[t] = []), i.eventsListeners[t][n](e)
          })), i
        },
        once(t, e, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof e) return i;

          function n() {
            i.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            e.apply(i, a)
          }
          return n.__emitterProxy = e, i.on(t, n, r)
        },
        onAny(t, e) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof t) return r;
          const i = e ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(t) < 0 && r.eventsAnyListeners[i](t), r
        },
        offAny(t) {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsAnyListeners) return e;
          const r = e.eventsAnyListeners.indexOf(t);
          return r >= 0 && e.eventsAnyListeners.splice(r, 1), e
        },
        off(t, e) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (t.split(" ").forEach((t => {
            void 0 === e ? r.eventsListeners[t] = [] : r.eventsListeners[t] && r.eventsListeners[t].forEach(((i, n) => {
              (i === e || i.__emitterProxy && i.__emitterProxy === e) && r.eventsListeners[t].splice(n, 1)
            }))
          })), r) : r
        },
        emit() {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let e, r, i;
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], r = a.slice(1, a.length), i = t) : (e = a[0].events, r = a[0].data, i = a[0].context || t), r.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((e => {
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
              t.apply(i, [e, ...r])
            })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((t => {
              t.apply(i, r)
            }))
          })), t
        }
      };
      const p = (t, e) => {
          if (!t || t.destroyed || !t.params) return;
          const r = e.closest(t.isElement ? "swiper-slide" : `.${t.params.slideClass}`);
          if (r) {
            let e = r.querySelector(`.${t.params.lazyPreloaderClass}`);
            !e && t.isElement && (r.shadowRoot ? e = r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (e = r.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), e && e.remove())
            }))), e && e.remove()
          }
        },
        d = (t, e) => {
          if (!t.slides[e]) return;
          const r = t.slides[e].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        f = t => {
          if (!t || t.destroyed || !t.params) return;
          let e = t.params.lazyPreloadPrevNext;
          const r = t.slides.length;
          if (!r || !e || e < 0) return;
          e = Math.min(e, r);
          const i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
            n = t.activeIndex;
          if (t.params.grid && t.params.grid.rows > 1) {
            const r = n,
              a = [r - e];
            return a.push(...Array.from({
              length: e
            }).map(((t, e) => r + i + e))), void t.slides.forEach(((e, r) => {
              a.includes(e.column) && d(t, r)
            }))
          }
          const a = n + i - 1;
          if (t.params.rewind || t.params.loop)
            for (let i = n - e; i <= a + e; i += 1) {
              const e = (i % r + r) % r;
              (e < n || e > a) && d(t, e)
            } else
              for (let i = Math.max(n - e, 0); i <= Math.min(a + e, r - 1); i += 1) i !== n && (i > a || i < n) && d(t, i)
        };
      var m = {
        updateSize: function() {
          const t = this;
          let e, r;
          const i = t.el;
          e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : i.clientWidth, r = void 0 !== t.params.height && null !== t.params.height ? t.params.height : i.clientHeight, 0 === e && t.isHorizontal() || 0 === r && t.isVertical() || (e = e - parseInt((0, a.o)(i, "padding-left") || 0, 10) - parseInt((0, a.o)(i, "padding-right") || 0, 10), r = r - parseInt((0, a.o)(i, "padding-top") || 0, 10) - parseInt((0, a.o)(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(r) && (r = 0), Object.assign(t, {
            width: e,
            height: r,
            size: t.isHorizontal() ? e : r
          }))
        },
        updateSlides: function() {
          const t = this;

          function e(e, r) {
            return parseFloat(e.getPropertyValue(t.getDirectionLabel(r)) || 0)
          }
          const r = t.params,
            {
              wrapperEl: i,
              slidesEl: n,
              size: s,
              rtlTranslate: o,
              wrongRTL: l
            } = t,
            h = t.virtual && r.virtual.enabled,
            c = h ? t.virtual.slides.length : t.slides.length,
            u = (0, a.e)(n, `.${t.params.slideClass}, swiper-slide`),
            p = h ? t.virtual.slides.length : u.length;
          let d = [];
          const f = [],
            m = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(t));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(t));
          const y = t.snapGrid.length,
            b = t.slidesGrid.length;
          let x = r.spaceBetween,
            S = -v,
            E = 0,
            P = 0;
          if (void 0 === s) return;
          "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * s : "string" == typeof x && (x = parseFloat(x)), t.virtualSize = -x, u.forEach((t => {
            o ? t.style.marginLeft = "" : t.style.marginRight = "", t.style.marginBottom = "", t.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, a.s)(i, "--swiper-centered-offset-before", ""), (0, a.s)(i, "--swiper-centered-offset-after", ""));
          const w = r.grid && r.grid.rows > 1 && t.grid;
          let T;
          w ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
          const C = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((t => void 0 !== r.breakpoints[t].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
            let n;
            if (T = 0, u[i] && (n = u[i]), w && t.grid.updateSlide(i, n, u), !u[i] || "none" !== (0, a.o)(n, "display")) {
              if ("auto" === r.slidesPerView) {
                C && (u[i].style[t.getDirectionLabel("width")] = "");
                const s = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), r.roundLengths) T = t.isHorizontal() ? (0, a.f)(n, "width", !0) : (0, a.f)(n, "height", !0);
                else {
                  const t = e(s, "width"),
                    r = e(s, "padding-left"),
                    i = e(s, "padding-right"),
                    a = e(s, "margin-left"),
                    o = e(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = t + a + o;
                  else {
                    const {
                      clientWidth: e,
                      offsetWidth: s
                    } = n;
                    T = t + r + i + a + o + (s - e)
                  }
                }
                o && (n.style.transform = o), l && (n.style.webkitTransform = l), r.roundLengths && (T = Math.floor(T))
              } else T = (s - (r.slidesPerView - 1) * x) / r.slidesPerView, r.roundLengths && (T = Math.floor(T)), u[i] && (u[i].style[t.getDirectionLabel("width")] = `${T}px`);
              u[i] && (u[i].swiperSlideSize = T), m.push(T), r.centeredSlides ? (S = S + T / 2 + E / 2 + x, 0 === E && 0 !== i && (S = S - s / 2 - x), 0 === i && (S = S - s / 2 - x), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), P % r.slidesPerGroup == 0 && d.push(S), f.push(S)) : (r.roundLengths && (S = Math.floor(S)), (P - Math.min(t.params.slidesPerGroupSkip, P)) % t.params.slidesPerGroup == 0 && d.push(S), f.push(S), S = S + T + x), t.virtualSize += T + x, E = T, P += 1
            }
          }
          if (t.virtualSize = Math.max(t.virtualSize, s) + g, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${t.virtualSize+x}px`), r.setWrapperSize && (i.style[t.getDirectionLabel("width")] = `${t.virtualSize+x}px`), w && t.grid.updateWrapperSize(T, d), !r.centeredSlides) {
            const e = [];
            for (let i = 0; i < d.length; i += 1) {
              let n = d[i];
              r.roundLengths && (n = Math.floor(n)), d[i] <= t.virtualSize - s && e.push(n)
            }
            d = e, Math.floor(t.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - s)
          }
          if (h && r.loop) {
            const e = m[0] + x;
            if (r.slidesPerGroup > 1) {
              const i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / r.slidesPerGroup),
                n = e * r.slidesPerGroup;
              for (let t = 0; t < i; t += 1) d.push(d[d.length - 1] + n)
            }
            for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && d.push(d[d.length - 1] + e), f.push(f[f.length - 1] + e), t.virtualSize += e
          }
          if (0 === d.length && (d = [0]), 0 !== x) {
            const e = t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
            u.filter(((t, e) => !(r.cssMode && !r.loop) || e !== u.length - 1)).forEach((t => {
              t.style[e] = `${x}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let t = 0;
            m.forEach((e => {
              t += e + (x || 0)
            })), t -= x;
            const e = t - s;
            d = d.map((t => t <= 0 ? -v : t > e ? e + g : t))
          }
          if (r.centerInsufficientSlides) {
            let t = 0;
            if (m.forEach((e => {
                t += e + (x || 0)
              })), t -= x, t < s) {
              const e = (s - t) / 2;
              d.forEach(((t, r) => {
                d[r] = t - e
              })), f.forEach(((t, r) => {
                f[r] = t + e
              }))
            }
          }
          if (Object.assign(t, {
              slides: u,
              snapGrid: d,
              slidesGrid: f,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, a.s)(i, "--swiper-centered-offset-before", -d[0] + "px"), (0, a.s)(i, "--swiper-centered-offset-after", t.size / 2 - m[m.length - 1] / 2 + "px");
            const e = -t.snapGrid[0],
              r = -t.slidesGrid[0];
            t.snapGrid = t.snapGrid.map((t => t + e)), t.slidesGrid = t.slidesGrid.map((t => t + r))
          }
          if (p !== c && t.emit("slidesLengthChange"), d.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== b && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !(h || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const e = `${r.containerModifierClass}backface-hidden`,
              i = t.el.classList.contains(e);
            p <= r.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
          }
        },
        updateAutoHeight: function(t) {
          const e = this,
            r = [],
            i = e.virtual && e.params.virtual.enabled;
          let n, a = 0;
          "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
          const s = t => i ? e.slides[e.getSlideIndexByData(t)] : e.slides[t];
          if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
            if (e.params.centeredSlides)(e.visibleSlides || []).forEach((t => {
              r.push(t)
            }));
            else
              for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const t = e.activeIndex + n;
                if (t > e.slides.length && !i) break;
                r.push(s(t))
              } else r.push(s(e.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const t = r[n].offsetHeight;
              a = t > a ? t : a
            }(a || 0 === a) && (e.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const t = this,
            e = t.slides,
            r = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
          for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - r - t.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(t) {
          void 0 === t && (t = this && this.translate || 0);
          const e = this,
            r = e.params,
            {
              slides: i,
              rtlTranslate: n,
              snapGrid: a
            } = e;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && e.updateSlidesOffset();
          let s = -t;
          n && (s = t), i.forEach((t => {
            t.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), e.visibleSlidesIndexes = [], e.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * e.size : "string" == typeof o && (o = parseFloat(o));
          for (let t = 0; t < i.length; t += 1) {
            const l = i[t];
            let h = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (h -= i[0].swiperSlideOffset);
            const c = (s + (r.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
              u = (s - a[0] + (r.centeredSlides ? e.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
              p = -(s - h),
              d = p + e.slidesSizesGrid[t],
              f = p >= 0 && p <= e.size - e.slidesSizesGrid[t];
            (p >= 0 && p < e.size - 1 || d > 1 && d <= e.size || p <= 0 && d >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(t), i[t].classList.add(r.slideVisibleClass)), f && i[t].classList.add(r.slideFullyVisibleClass), l.progress = n ? -c : c, l.originalProgress = n ? -u : u
          }
        },
        updateProgress: function(t) {
          const e = this;
          if (void 0 === t) {
            const r = e.rtlTranslate ? -1 : 1;
            t = e && e.translate && e.translate * r || 0
          }
          const r = e.params,
            i = e.maxTranslate() - e.minTranslate();
          let {
            progress: n,
            isBeginning: a,
            isEnd: s,
            progressLoop: o
          } = e;
          const l = a,
            h = s;
          if (0 === i) n = 0, a = !0, s = !0;
          else {
            n = (t - e.minTranslate()) / i;
            const r = Math.abs(t - e.minTranslate()) < 1,
              o = Math.abs(t - e.maxTranslate()) < 1;
            a = r || n <= 0, s = o || n >= 1, r && (n = 0), o && (n = 1)
          }
          if (r.loop) {
            const r = e.getSlideIndexByData(0),
              i = e.getSlideIndexByData(e.slides.length - 1),
              n = e.slidesGrid[r],
              a = e.slidesGrid[i],
              s = e.slidesGrid[e.slidesGrid.length - 1],
              l = Math.abs(t);
            o = l >= n ? (l - n) / s : (l + s - a) / s, o > 1 && (o -= 1)
          }
          Object.assign(e, {
            progress: n,
            progressLoop: o,
            isBeginning: a,
            isEnd: s
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && e.updateSlidesProgress(t), a && !l && e.emit("reachBeginning toEdge"), s && !h && e.emit("reachEnd toEdge"), (l && !a || h && !s) && e.emit("fromEdge"), e.emit("progress", n)
        },
        updateSlidesClasses: function() {
          const t = this,
            {
              slides: e,
              params: r,
              slidesEl: i,
              activeIndex: n
            } = t,
            s = t.virtual && r.virtual.enabled,
            o = t.grid && r.grid && r.grid.rows > 1,
            l = t => (0, a.e)(i, `.${r.slideClass}${t}, swiper-slide${t}`)[0];
          let h, c, u;
          if (e.forEach((t => {
              t.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), s)
            if (r.loop) {
              let e = n - t.virtual.slidesBefore;
              e < 0 && (e = t.virtual.slides.length + e), e >= t.virtual.slides.length && (e -= t.virtual.slides.length), h = l(`[data-swiper-slide-index="${e}"]`)
            } else h = l(`[data-swiper-slide-index="${n}"]`);
          else o ? (h = e.filter((t => t.column === n))[0], u = e.filter((t => t.column === n + 1))[0], c = e.filter((t => t.column === n - 1))[0]) : h = e[n];
          h && (h.classList.add(r.slideActiveClass), o ? (u && u.classList.add(r.slideNextClass), c && c.classList.add(r.slidePrevClass)) : (u = (0, a.p)(h, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = e[0]), u && u.classList.add(r.slideNextClass), c = (0, a.q)(h, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = e[e.length - 1]), c && c.classList.add(r.slidePrevClass))), t.emitSlidesClasses()
        },
        updateActiveIndex: function(t) {
          const e = this,
            r = e.rtlTranslate ? e.translate : -e.translate,
            {
              snapGrid: i,
              params: n,
              activeIndex: a,
              realIndex: s,
              snapIndex: o
            } = e;
          let l, h = t;
          const c = t => {
            let r = t - e.virtual.slidesBefore;
            return r < 0 && (r = e.virtual.slides.length + r), r >= e.virtual.slides.length && (r -= e.virtual.slides.length), r
          };
          if (void 0 === h && (h = function(t) {
              const {
                slidesGrid: e,
                params: r
              } = t, i = t.rtlTranslate ? t.translate : -t.translate;
              let n;
              for (let t = 0; t < e.length; t += 1) void 0 !== e[t + 1] ? i >= e[t] && i < e[t + 1] - (e[t + 1] - e[t]) / 2 ? n = t : i >= e[t] && i < e[t + 1] && (n = t + 1) : i >= e[t] && (n = t);
              return r.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            }(e)), i.indexOf(r) >= 0) l = i.indexOf(r);
          else {
            const t = Math.min(n.slidesPerGroupSkip, h);
            l = t + Math.floor((h - t) / n.slidesPerGroup)
          }
          if (l >= i.length && (l = i.length - 1), h === a && !e.params.loop) return void(l !== o && (e.snapIndex = l, e.emit("snapIndexChange")));
          if (h === a && e.params.loop && e.virtual && e.params.virtual.enabled) return void(e.realIndex = c(h));
          const u = e.grid && n.grid && n.grid.rows > 1;
          let p;
          if (e.virtual && n.virtual.enabled && n.loop) p = c(h);
          else if (u) {
            const t = e.slides.filter((t => t.column === h))[0];
            let r = parseInt(t.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(e.slides.indexOf(t), 0)), p = Math.floor(r / n.grid.rows)
          } else if (e.slides[h]) {
            const t = e.slides[h].getAttribute("data-swiper-slide-index");
            p = t ? parseInt(t, 10) : h
          } else p = h;
          Object.assign(e, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: s,
            realIndex: p,
            previousIndex: a,
            activeIndex: h
          }), e.initialized && f(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (s !== p && e.emit("realIndexChange"), e.emit("slideChange"))
        },
        updateClickedSlide: function(t, e) {
          const r = this,
            i = r.params;
          let n = t.closest(`.${i.slideClass}, swiper-slide`);
          !n && r.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((t => {
            !n && t.matches && t.matches(`.${i.slideClass}, swiper-slide`) && (n = t)
          }));
          let a, s = !1;
          if (n)
            for (let t = 0; t < r.slides.length; t += 1)
              if (r.slides[t] === n) {
                s = !0, a = t;
                break
              } if (!n || !s) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = n, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function v(t) {
        let {
          swiper: e,
          runCallbacks: r,
          direction: i,
          step: n
        } = t;
        const {
          activeIndex: a,
          previousIndex: s
        } = e;
        let o = i;
        if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), e.emit(`transition${n}`), r && a !== s) {
          if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
          e.emit(`slideChangeTransition${n}`), "next" === o ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
        }
      }
      var g = {
          slideTo: function(t, e, r, i, n) {
            void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), "string" == typeof t && (t = parseInt(t, 10));
            const s = this;
            let o = t;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: h,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: p,
              rtlTranslate: d,
              wrapperEl: f,
              enabled: m
            } = s;
            if (s.animating && l.preventInteractionOnTransition || !m && !i && !n || s.destroyed) return !1;
            const v = Math.min(s.params.slidesPerGroupSkip, o);
            let g = v + Math.floor((o - v) / s.params.slidesPerGroup);
            g >= h.length && (g = h.length - 1);
            const y = -h[g];
            if (l.normalizeSlideIndex)
              for (let t = 0; t < c.length; t += 1) {
                const e = -Math.floor(100 * y),
                  r = Math.floor(100 * c[t]),
                  i = Math.floor(100 * c[t + 1]);
                void 0 !== c[t + 1] ? e >= r && e < i - (i - r) / 2 ? o = t : e >= r && e < i && (o = t + 1) : e >= r && (o = t)
              }
            if (s.initialized && o !== p) {
              if (!s.allowSlideNext && (d ? y > s.translate && y > s.minTranslate() : y < s.translate && y < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && y > s.translate && y > s.maxTranslate() && (p || 0) !== o) return !1
            }
            let b;
            if (o !== (u || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(y), b = o > p ? "next" : o < p ? "prev" : "reset", d && -y === s.translate || !d && y === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(y), "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const t = s.isHorizontal(),
                r = d ? y : -y;
              if (0 === e) {
                const e = s.virtual && s.params.virtual.enabled;
                e && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), e && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[t ? "scrollLeft" : "scrollTop"] = r
                }))) : f[t ? "scrollLeft" : "scrollTop"] = r, e && requestAnimationFrame((() => {
                  s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                }))
              } else {
                if (!s.support.smoothScroll) return (0, a.r)({
                  swiper: s,
                  targetPosition: r,
                  side: t ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [t ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return s.setTransition(e), s.setTranslate(y), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, i), s.transitionStart(r, b), 0 === e ? s.transitionEnd(r, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(t) {
              s && !s.destroyed && t.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, b))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(t, e, r, i) {
            void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), "string" == typeof t && (t = parseInt(t, 10));
            const n = this;
            if (n.destroyed) return;
            const a = n.grid && n.params.grid && n.params.grid.rows > 1;
            let s = t;
            if (n.params.loop)
              if (n.virtual && n.params.virtual.enabled) s += n.virtual.slidesBefore;
              else {
                let t;
                if (a) {
                  const e = s * n.params.grid.rows;
                  t = n.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else t = n.getSlideIndexByData(s);
                const e = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                  {
                    centeredSlides: r
                  } = n.params;
                let i = n.params.slidesPerView;
                "auto" === i ? i = n.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && i % 2 == 0 && (i += 1));
                let o = e - t < i;
                if (r && (o = o || t < Math.ceil(i / 2)), o) {
                  const i = r ? t < n.activeIndex ? "prev" : "next" : t - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                  n.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? t + 1 : t - e + 1,
                    slideRealIndex: "next" === i ? n.realIndex : void 0
                  })
                }
                if (a) {
                  const t = s * n.params.grid.rows;
                  s = n.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else s = n.getSlideIndexByData(s)
              } return requestAnimationFrame((() => {
              n.slideTo(s, e, r, i)
            })), n
          },
          slideNext: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const i = this,
              {
                enabled: n,
                params: a,
                animating: s
              } = i;
            if (!n || i.destroyed) return i;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
              h = i.virtual && a.virtual.enabled;
            if (a.loop) {
              if (s && !h && a.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + l, t, e, r)
              })), !0
            }
            return a.rewind && i.isEnd ? i.slideTo(0, t, e, r) : i.slideTo(i.activeIndex + l, t, e, r)
          },
          slidePrev: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const i = this,
              {
                params: n,
                snapGrid: a,
                slidesGrid: s,
                rtlTranslate: o,
                enabled: l,
                animating: h
              } = i;
            if (!l || i.destroyed) return i;
            const c = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (h && !c && n.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function u(t) {
              return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
            }
            const p = u(o ? i.translate : -i.translate),
              d = a.map((t => u(t)));
            let f = a[d.indexOf(p) - 1];
            if (void 0 === f && n.cssMode) {
              let t;
              a.forEach(((e, r) => {
                p >= e && (t = r)
              })), void 0 !== t && (f = a[t > 0 ? t - 1 : t])
            }
            let m = 0;
            if (void 0 !== f && (m = s.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && i.isBeginning) {
              const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(n, t, e, r)
            }
            return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(m, t, e, r)
            })), !0) : i.slideTo(m, t, e, r)
          },
          slideReset: function(t, e, r) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
            const i = this;
            if (!i.destroyed) return i.slideTo(i.activeIndex, t, e, r)
          },
          slideToClosest: function(t, e, r, i) {
            void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === i && (i = .5);
            const n = this;
            if (n.destroyed) return;
            let a = n.activeIndex;
            const s = Math.min(n.params.slidesPerGroupSkip, a),
              o = s + Math.floor((a - s) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const t = n.snapGrid[o];
              l - t > (n.snapGrid[o + 1] - t) * i && (a += n.params.slidesPerGroup)
            } else {
              const t = n.snapGrid[o - 1];
              l - t <= (n.snapGrid[o] - t) * i && (a -= n.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, t, e, r)
          },
          slideToClickedSlide: function() {
            const t = this;
            if (t.destroyed) return;
            const {
              params: e,
              slidesEl: r
            } = t, i = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
            let n, s = t.clickedIndex;
            const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
            if (e.loop) {
              if (t.animating) return;
              n = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s < t.loopedSlides - i / 2 || s > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), s = t.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                t.slideTo(s)
              }))) : t.slideTo(s) : s > t.slides.length - i ? (t.loopFix(), s = t.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                t.slideTo(s)
              }))) : t.slideTo(s)
            } else t.slideTo(s)
          }
        },
        y = {
          loopCreate: function(t) {
            const e = this,
              {
                params: r,
                slidesEl: i
              } = e;
            if (!r.loop || e.virtual && e.params.virtual.enabled) return;
            const n = () => {
                (0, a.e)(i, `.${r.slideClass}, swiper-slide`).forEach(((t, e) => {
                  t.setAttribute("data-swiper-slide-index", e)
                }))
              },
              s = e.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (s ? r.grid.rows : 1),
              l = e.slides.length % o != 0,
              h = s && e.slides.length % r.grid.rows != 0,
              c = t => {
                for (let i = 0; i < t; i += 1) {
                  const t = e.isElement ? (0, a.c)("swiper-slide", [r.slideBlankClass]) : (0, a.c)("div", [r.slideClass, r.slideBlankClass]);
                  e.slidesEl.append(t)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - e.slides.length % o), e.recalcSlides(), e.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : h ? (r.loopAddBlankSlides ? (c(r.grid.rows - e.slides.length % r.grid.rows), e.recalcSlides(), e.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), e.loopFix({
              slideRealIndex: t,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(t) {
            let {
              slideRealIndex: e,
              slideTo: r = !0,
              direction: i,
              setTranslate: n,
              activeSlideIndex: s,
              byController: o,
              byMousewheel: l
            } = void 0 === t ? {} : t;
            const h = this;
            if (!h.params.loop) return;
            h.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: u,
              allowSlideNext: p,
              slidesEl: d,
              params: f
            } = h, {
              centeredSlides: m
            } = f;
            if (h.allowSlidePrev = !0, h.allowSlideNext = !0, h.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== h.snapIndex ? f.centeredSlides && h.snapIndex < f.slidesPerView ? h.slideTo(h.virtual.slides.length + h.snapIndex, 0, !1, !0) : h.snapIndex === h.snapGrid.length - 1 && h.slideTo(h.virtual.slidesBefore, 0, !1, !0) : h.slideTo(h.virtual.slides.length, 0, !1, !0)), h.allowSlidePrev = u, h.allowSlideNext = p, void h.emit("loopFix");
            let v = f.slidesPerView;
            "auto" === v ? v = h.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
            const g = f.slidesPerGroupAuto ? v : f.slidesPerGroup;
            let y = g;
            y % g != 0 && (y += g - y % g), y += f.loopAdditionalSlides, h.loopedSlides = y;
            const b = h.grid && f.grid && f.grid.rows > 1;
            c.length < v + y ? (0, a.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, a.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const x = [],
              S = [];
            let E = h.activeIndex;
            void 0 === s ? s = h.getSlideIndex(c.filter((t => t.classList.contains(f.slideActiveClass)))[0]) : E = s;
            const P = "next" === i || !i,
              w = "prev" === i || !i;
            let T = 0,
              C = 0;
            const M = b ? Math.ceil(c.length / f.grid.rows) : c.length,
              A = (b ? c[s].column : s) + (m && void 0 === n ? -v / 2 + .5 : 0);
            if (A < y) {
              T = Math.max(y - A, g);
              for (let t = 0; t < y - A; t += 1) {
                const e = t - Math.floor(t / M) * M;
                if (b) {
                  const t = M - e - 1;
                  for (let e = c.length - 1; e >= 0; e -= 1) c[e].column === t && x.push(e)
                } else x.push(M - e - 1)
              }
            } else if (A + v > M - y) {
              C = Math.max(A - (M - 2 * y), g);
              for (let t = 0; t < C; t += 1) {
                const e = t - Math.floor(t / M) * M;
                b ? c.forEach(((t, r) => {
                  t.column === e && S.push(r)
                })) : S.push(e)
              }
            }
            if (h.__preventObserver__ = !0, requestAnimationFrame((() => {
                h.__preventObserver__ = !1
              })), w && x.forEach((t => {
                c[t].swiperLoopMoveDOM = !0, d.prepend(c[t]), c[t].swiperLoopMoveDOM = !1
              })), P && S.forEach((t => {
                c[t].swiperLoopMoveDOM = !0, d.append(c[t]), c[t].swiperLoopMoveDOM = !1
              })), h.recalcSlides(), "auto" === f.slidesPerView ? h.updateSlides() : b && (x.length > 0 && w || S.length > 0 && P) && h.slides.forEach(((t, e) => {
                h.grid.updateSlide(e, t, h.slides)
              })), f.watchSlidesProgress && h.updateSlidesOffset(), r)
              if (x.length > 0 && w) {
                if (void 0 === e) {
                  const t = h.slidesGrid[E],
                    e = h.slidesGrid[E + T] - t;
                  l ? h.setTranslate(h.translate - e) : (h.slideTo(E + T, 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - e, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - e))
                } else if (n) {
                  const t = b ? x.length / f.grid.rows : x.length;
                  h.slideTo(h.activeIndex + t, 0, !1, !0), h.touchEventsData.currentTranslate = h.translate
                }
              } else if (S.length > 0 && P)
              if (void 0 === e) {
                const t = h.slidesGrid[E],
                  e = h.slidesGrid[E - C] - t;
                l ? h.setTranslate(h.translate - e) : (h.slideTo(E - C, 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - e, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - e))
              } else {
                const t = b ? S.length / f.grid.rows : S.length;
                h.slideTo(h.activeIndex - t, 0, !1, !0)
              } if (h.allowSlidePrev = u, h.allowSlideNext = p, h.controller && h.controller.control && !o) {
              const t = {
                slideRealIndex: e,
                direction: i,
                setTranslate: n,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(h.controller.control) ? h.controller.control.forEach((e => {
                !e.destroyed && e.params.loop && e.loopFix({
                  ...t,
                  slideTo: e.params.slidesPerView === f.slidesPerView && r
                })
              })) : h.controller.control instanceof h.constructor && h.controller.control.params.loop && h.controller.control.loopFix({
                ...t,
                slideTo: h.controller.control.params.slidesPerView === f.slidesPerView && r
              })
            }
            h.emit("loopFix")
          },
          loopDestroy: function() {
            const t = this,
              {
                params: e,
                slidesEl: r
              } = t;
            if (!e.loop || t.virtual && t.params.virtual.enabled) return;
            t.recalcSlides();
            const i = [];
            t.slides.forEach((t => {
              const e = void 0 === t.swiperSlideIndex ? 1 * t.getAttribute("data-swiper-slide-index") : t.swiperSlideIndex;
              i[e] = t
            })), t.slides.forEach((t => {
              t.removeAttribute("data-swiper-slide-index")
            })), i.forEach((t => {
              r.append(t)
            })), t.recalcSlides(), t.slideTo(t.realIndex, 0)
          }
        };

      function b(t, e, r) {
        const i = (0, n.a)(),
          {
            params: a
          } = t,
          s = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return !s || !(r <= o || r >= i.innerWidth - o) || "prevent" === s && (e.preventDefault(), !0)
      }

      function x(t) {
        const e = this,
          r = (0, n.g)();
        let i = t;
        i.originalEvent && (i = i.originalEvent);
        const s = e.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void b(e, i, i.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: h
        } = e;
        if (!h) return;
        if (!o.simulateTouch && "mouse" === i.pointerType) return;
        if (e.animating && o.preventInteractionOnTransition) return;
        !e.animating && o.cssMode && o.loop && e.loopFix();
        let c = i.target;
        if ("wrapper" === o.touchEventsTarget && !e.wrapperEl.contains(c)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const u = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && p && (c = p[0]);
        const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          f = !(!i.target || !i.target.shadowRoot);
        if (o.noSwiping && (f ? function(t, e) {
            return void 0 === e && (e = this),
              function e(r) {
                if (!r || r === (0, n.g)() || r === (0, n.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const i = r.closest(t);
                return i || r.getRootNode ? i || e(r.getRootNode().host) : null
              }(e)
          }(d, c) : c.closest(d))) return void(e.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = i.pageX, l.currentY = i.pageY;
        const m = l.currentX,
          v = l.currentY;
        if (!b(e, i, m)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = v, s.touchStartTime = (0, a.d)(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
        let g = !0;
        c.matches(s.focusableElements) && (g = !1, "SELECT" === c.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const y = g && e.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !y || c.isContentEditable || i.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i)
      }

      function S(t) {
        const e = (0, n.g)(),
          r = this,
          i = r.touchEventsData,
          {
            params: s,
            touches: o,
            rtlTranslate: l,
            enabled: h
          } = r;
        if (!h) return;
        if (!s.simulateTouch && "mouse" === t.pointerType) return;
        let c, u = t;
        if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
          if (null !== i.touchId) return;
          if (u.pointerId !== i.pointerId) return
        }
        if ("touchmove" === u.type) {
          if (c = [...u.changedTouches].filter((t => t.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = u;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", u));
        const p = c.pageX,
          d = c.pageY;
        if (u.preventedByNestedSwiper) return o.startX = p, void(o.startY = d);
        if (!r.allowTouchMove) return u.target.matches(i.focusableElements) || (r.allowClick = !1), void(i.isTouched && (Object.assign(o, {
          startX: p,
          startY: d,
          currentX: p,
          currentY: d
        }), i.touchStartTime = (0, a.d)()));
        if (s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (d < o.startY && r.translate <= r.maxTranslate() || d > o.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()) return;
        if (e.activeElement && u.target === e.activeElement && u.target.matches(i.focusableElements)) return i.isMoved = !0, void(r.allowClick = !1);
        i.allowTouchCallbacks && r.emit("touchMove", u), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = d;
        const f = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(f ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let t;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (t = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, i.isScrolling = r.isHorizontal() ? t > s.touchAngle : 90 - t > s.touchAngle)
        }
        if (i.isScrolling && r.emit("touchMoveOpposite", u), void 0 === i.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        r.allowClick = !1, !s.cssMode && u.cancelable && u.preventDefault(), s.touchMoveStopPropagation && !s.nested && u.stopPropagation();
        let v = r.isHorizontal() ? f : m,
          g = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        s.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = v, v *= s.touchRatio, l && (v = -v, g = -g);
        const y = r.touchesDirection;
        r.swipeDirection = v > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !s.cssMode,
          x = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!i.isMoved) {
          if (b && x && r.loopFix({
              direction: r.swipeDirection
            }), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const t = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(t)
          }
          i.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", u)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && y !== r.touchesDirection && b && x && Math.abs(v) >= 1) return Object.assign(o, {
          startX: p,
          startY: d,
          currentX: p,
          currentY: d,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        r.emit("sliderMove", u), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let S = !0,
          E = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (E = 0), v > 0 ? (b && x && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > r.minTranslate() && (S = !1, s.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (b && x && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
          }), i.currentTranslate < r.maxTranslate() && (S = !1, s.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - v) ** E))), S && (u.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
          if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
      }

      function E(t) {
        const e = this,
          r = e.touchEventsData;
        let i, n = t;
        if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
          if (i = [...n.changedTouches].filter((t => t.identifier === r.touchId))[0], !i || i.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (n.pointerId !== r.pointerId) return;
          i = n
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !e.browser.isSafari && !e.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: l,
          slidesGrid: h,
          enabled: c
        } = e;
        if (!c) return;
        if (!s.simulateTouch && "mouse" === n.pointerType) return;
        if (r.allowTouchCallbacks && e.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && e.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const u = (0, a.d)(),
          p = u - r.touchStartTime;
        if (e.allowClick) {
          const t = n.path || n.composedPath && n.composedPath();
          e.updateClickedSlide(t && t[0] || n.target, t), e.emit("tap click", n), p < 300 && u - r.lastClickTime < 300 && e.emit("doubleTap doubleClick", n)
        }
        if (r.lastClickTime = (0, a.d)(), (0, a.n)((() => {
            e.destroyed || (e.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !e.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let d;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, d = s.followFinger ? l ? e.translate : -e.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void e.freeMode.onTouchEnd({
          currentPos: d
        });
        const f = d >= -e.maxTranslate() && !e.params.loop;
        let m = 0,
          v = e.slidesSizesGrid[0];
        for (let t = 0; t < h.length; t += t < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const e = t < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== h[t + e] ? (f || d >= h[t] && d < h[t + e]) && (m = t, v = h[t + e] - h[t]) : (f || d >= h[t]) && (m = t, v = h[h.length - 1] - h[h.length - 2])
        }
        let g = null,
          y = null;
        s.rewind && (e.isBeginning ? y = s.virtual && s.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (g = 0));
        const b = (d - h[m]) / v,
          x = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (p > s.longSwipesMs) {
          if (!s.longSwipes) return void e.slideTo(e.activeIndex);
          "next" === e.swipeDirection && (b >= s.longSwipesRatio ? e.slideTo(s.rewind && e.isEnd ? g : m + x) : e.slideTo(m)), "prev" === e.swipeDirection && (b > 1 - s.longSwipesRatio ? e.slideTo(m + x) : null !== y && b < 0 && Math.abs(b) > s.longSwipesRatio ? e.slideTo(y) : e.slideTo(m))
        } else {
          if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
          !e.navigation || n.target !== e.navigation.nextEl && n.target !== e.navigation.prevEl ? ("next" === e.swipeDirection && e.slideTo(null !== g ? g : m + x), "prev" === e.swipeDirection && e.slideTo(null !== y ? y : m)) : n.target === e.navigation.nextEl ? e.slideTo(m + x) : e.slideTo(m)
        }
      }

      function P() {
        const t = this,
          {
            params: e,
            el: r
          } = t;
        if (r && 0 === r.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: a
        } = t, s = t.virtual && t.params.virtual.enabled;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
        const o = s && e.loop;
        !("auto" === e.slidesPerView || e.slidesPerView > 1) || !t.isEnd || t.isBeginning || t.params.centeredSlides || o ? t.params.loop && !s ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0) : t.slideTo(t.slides.length - 1, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout((() => {
          t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
        }), 500)), t.allowSlidePrev = n, t.allowSlideNext = i, t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow()
      }

      function w(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
      }

      function T() {
        const t = this,
          {
            wrapperEl: e,
            rtlTranslate: r,
            enabled: i
          } = t;
        if (!i) return;
        let n;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const a = t.maxTranslate() - t.minTranslate();
        n = 0 === a ? 0 : (t.translate - t.minTranslate()) / a, n !== t.progress && t.updateProgress(r ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
      }

      function C(t) {
        const e = this;
        p(e, t.target), e.params.cssMode || "auto" !== e.params.slidesPerView && !e.params.autoHeight || e.update()
      }

      function M() {
        const t = this;
        t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"))
      }
      const A = (t, e) => {
          const r = (0, n.g)(),
            {
              params: i,
              el: a,
              wrapperEl: s,
              device: o
            } = t,
            l = !!i.nested,
            h = "on" === e ? "addEventListener" : "removeEventListener",
            c = e;
          r[h]("touchstart", t.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), a[h]("touchstart", t.onTouchStart, {
            passive: !1
          }), a[h]("pointerdown", t.onTouchStart, {
            passive: !1
          }), r[h]("touchmove", t.onTouchMove, {
            passive: !1,
            capture: l
          }), r[h]("pointermove", t.onTouchMove, {
            passive: !1,
            capture: l
          }), r[h]("touchend", t.onTouchEnd, {
            passive: !0
          }), r[h]("pointerup", t.onTouchEnd, {
            passive: !0
          }), r[h]("pointercancel", t.onTouchEnd, {
            passive: !0
          }), r[h]("touchcancel", t.onTouchEnd, {
            passive: !0
          }), r[h]("pointerout", t.onTouchEnd, {
            passive: !0
          }), r[h]("pointerleave", t.onTouchEnd, {
            passive: !0
          }), r[h]("contextmenu", t.onTouchEnd, {
            passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && a[h]("click", t.onClick, !0), i.cssMode && s[h]("scroll", t.onScroll), i.updateOnWindowResize ? t[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : t[c]("observerUpdate", P, !0), a[h]("load", t.onLoad, {
            capture: !0
          })
        },
        _ = (t, e) => t.grid && e.grid && e.grid.rows > 1;
      var k = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function D(t, e) {
        return function(r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n ? (!0 === t[i] && (t[i] = {
            enabled: !0
          }), "navigation" === i && t[i] && t[i].enabled && !t[i].prevEl && !t[i].nextEl && (t[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && t[i] && t[i].enabled && !t[i].el && (t[i].auto = !0), i in t && "enabled" in n ? ("object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
            enabled: !1
          }), (0, a.u)(e, r)) : (0, a.u)(e, r)) : (0, a.u)(e, r)
        }
      }
      const I = {
          eventsEmitter: u,
          update: m,
          translate: {
            getTranslate: function(t) {
              void 0 === t && (t = this.isHorizontal() ? "x" : "y");
              const {
                params: e,
                rtlTranslate: r,
                translate: i,
                wrapperEl: n
              } = this;
              if (e.virtualTranslate) return r ? -i : i;
              if (e.cssMode) return i;
              let s = (0, a.i)(n, t);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(t, e) {
              const r = this,
                {
                  rtlTranslate: i,
                  params: n,
                  wrapperEl: a,
                  progress: s
                } = r;
              let o, l = 0,
                h = 0;
              r.isHorizontal() ? l = i ? -t : t : h = t, n.roundLengths && (l = Math.floor(l), h = Math.floor(h)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : h, n.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -h : n.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : h -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${h}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (t - r.minTranslate()) / c, o !== s && r.updateProgress(t), r.emit("setTranslate", r.translate, e)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(t, e, r, i, n) {
              void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: l
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const h = s.minTranslate(),
                c = s.maxTranslate();
              let u;
              if (u = i && t > h ? h : i && t < c ? c : t, s.updateProgress(u), o.cssMode) {
                const t = s.isHorizontal();
                if (0 === e) l[t ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!s.support.smoothScroll) return (0, a.r)({
                    swiper: s,
                    targetPosition: -u,
                    side: t ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [t ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === e ? (s.setTransition(0), s.setTranslate(u), r && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(u), r && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(t) {
                s && !s.destroyed && t.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(t, e) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${t}ms`, r.wrapperEl.style.transitionDelay = 0 === t ? "0ms" : ""), r.emit("setTransition", t, e)
            },
            transitionStart: function(t, e) {
              void 0 === t && (t = !0);
              const r = this,
                {
                  params: i
                } = r;
              i.cssMode || (i.autoHeight && r.updateAutoHeight(), v({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "Start"
              }))
            },
            transitionEnd: function(t, e) {
              void 0 === t && (t = !0);
              const r = this,
                {
                  params: i
                } = r;
              r.animating = !1, i.cssMode || (r.setTransition(0), v({
                swiper: r,
                runCallbacks: t,
                direction: e,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: y,
          grabCursor: {
            setGrabCursor: function(t) {
              const e = this;
              if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
              const r = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
              e.isElement && (e.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const t = this;
              t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const t = this,
                {
                  params: e
                } = t;
              t.onTouchStart = x.bind(t), t.onTouchMove = S.bind(t), t.onTouchEnd = E.bind(t), t.onDocumentTouchStart = M.bind(t), e.cssMode && (t.onScroll = T.bind(t)), t.onClick = w.bind(t), t.onLoad = C.bind(t), A(t, "on")
            },
            detachEvents: function() {
              A(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const t = this,
                {
                  realIndex: e,
                  initialized: r,
                  params: i,
                  el: n
                } = t,
                s = i.breakpoints;
              if (!s || s && 0 === Object.keys(s).length) return;
              const o = t.getBreakpoint(s, t.params.breakpointsBase, t.el);
              if (!o || t.currentBreakpoint === o) return;
              const l = (o in s ? s[o] : void 0) || t.originalParams,
                h = _(t, i),
                c = _(t, l),
                u = i.enabled;
              h && !c ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !h && c && (n.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((e => {
                if (void 0 === l[e]) return;
                const r = i[e] && i[e].enabled,
                  n = l[e] && l[e].enabled;
                r && !n && t[e].disable(), !r && n && t[e].enable()
              }));
              const p = l.direction && l.direction !== i.direction,
                d = i.loop && (l.slidesPerView !== i.slidesPerView || p),
                f = i.loop;
              p && r && t.changeDirection(), (0, a.u)(t.params, l);
              const m = t.params.enabled,
                v = t.params.loop;
              Object.assign(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev
              }), u && !m ? t.disable() : !u && m && t.enable(), t.currentBreakpoint = o, t.emit("_beforeBreakpoint", l), r && (d ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !f && v ? (t.loopCreate(e), t.updateSlides()) : f && !v && t.loopDestroy()), t.emit("breakpoint", l)
            },
            getBreakpoint: function(t, e, r) {
              if (void 0 === e && (e = "window"), !t || "container" === e && !r) return;
              let i = !1;
              const a = (0, n.a)(),
                s = "window" === e ? a.innerHeight : r.clientHeight,
                o = Object.keys(t).map((t => {
                  if ("string" == typeof t && 0 === t.indexOf("@")) {
                    const e = parseFloat(t.substr(1));
                    return {
                      value: s * e,
                      point: t
                    }
                  }
                  return {
                    value: t,
                    point: t
                  }
                }));
              o.sort(((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10)));
              for (let t = 0; t < o.length; t += 1) {
                const {
                  point: n,
                  value: s
                } = o[t];
                "window" === e ? a.matchMedia(`(min-width: ${s}px)`).matches && (i = n) : s <= r.clientWidth && (i = n)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const t = this,
                {
                  isLocked: e,
                  params: r
                } = t,
                {
                  slidesOffsetBefore: i
                } = r;
              if (i) {
                const e = t.slides.length - 1,
                  r = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * i;
                t.isLocked = t.size > r
              } else t.isLocked = 1 === t.snapGrid.length;
              !0 === r.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === r.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const t = this,
                {
                  classNames: e,
                  params: r,
                  rtl: i,
                  el: n,
                  device: a
                } = t,
                s = function(t, e) {
                  const r = [];
                  return t.forEach((t => {
                    "object" == typeof t ? Object.keys(t).forEach((i => {
                      t[i] && r.push(e + i)
                    })) : "string" == typeof t && r.push(e + t)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": t.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: i
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              e.push(...s), n.classList.add(...e), t.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: t,
                classNames: e
              } = this;
              t.classList.remove(...e), this.emitContainerClasses()
            }
          }
        },
        F = {};
      class O {
        constructor() {
          let t, e;
          for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? e = i[0] : [t, e] = i, e || (e = {}), e = (0, a.u)({}, e), t && !e.el && (e.el = t);
          const o = (0, n.g)();
          if (e.el && "string" == typeof e.el && o.querySelectorAll(e.el).length > 1) {
            const t = [];
            return o.querySelectorAll(e.el).forEach((r => {
              const i = (0, a.u)({}, e, {
                el: r
              });
              t.push(new O(i))
            })), t
          }
          const u = this;
          u.__swiper__ = !0, u.support = h(), u.device = c({
            userAgent: e.userAgent
          }), u.browser = (l || (l = function() {
            const t = (0, n.a)(),
              e = c();
            let r = !1;

            function i() {
              const e = t.navigator.userAgent.toLowerCase();
              return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }
            if (i()) {
              const e = String(t.navigator.userAgent);
              if (e.includes("Version/")) {
                const [t, i] = e.split("Version/")[1].split(" ")[0].split(".").map((t => Number(t)));
                r = t < 16 || 16 === t && i < 2
              }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
              s = i();
            return {
              isSafari: r || s,
              needPerspectiveFix: r,
              need3dFix: s || a && e.ios,
              isWebView: a
            }
          }()), l), u.eventsListeners = {}, u.eventsAnyListeners = [], u.modules = [...u.__modules__], e.modules && Array.isArray(e.modules) && u.modules.push(...e.modules);
          const p = {};
          u.modules.forEach((t => {
            t({
              params: e,
              swiper: u,
              extendParams: D(e, p),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u)
            })
          }));
          const d = (0, a.u)({}, k, p);
          return u.params = (0, a.u)({}, d, F, e), u.originalParams = (0, a.u)({}, u.params), u.passedParams = (0, a.u)({}, e), u.params && u.params.on && Object.keys(u.params.on).forEach((t => {
            u.on(t, u.params.on[t])
          })), u.params && u.params.onAny && u.onAny(u.params.onAny), Object.assign(u, {
            enabled: u.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === u.params.direction,
            isVertical: () => "vertical" === u.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: u.params.allowSlideNext,
            allowSlidePrev: u.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: u.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: u.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), u.emit("_swiper"), u.params.init && u.init(), u
        }
        getDirectionLabel(t) {
          return this.isHorizontal() ? t : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [t]
        }
        getSlideIndex(t) {
          const {
            slidesEl: e,
            params: r
          } = this, i = (0, a.e)(e, `.${r.slideClass}, swiper-slide`), n = (0, a.g)(i[0]);
          return (0, a.g)(t) - n
        }
        getSlideIndexByData(t) {
          return this.getSlideIndex(this.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0])
        }
        recalcSlides() {
          const {
            slidesEl: t,
            params: e
          } = this;
          this.slides = (0, a.e)(t, `.${e.slideClass}, swiper-slide`)
        }
        enable() {
          const t = this;
          t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }
        disable() {
          const t = this;
          t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }
        setProgress(t, e) {
          const r = this;
          t = Math.min(Math.max(t, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * t + i;
          r.translateTo(n, void 0 === e ? 0 : e), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = t.el.className.split(" ").filter((e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)));
          t.emit("_containerClasses", e.join(" "))
        }
        getSlideClasses(t) {
          const e = this;
          return e.destroyed ? "" : t.className.split(" ").filter((t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const t = this;
          if (!t.params._emitClasses || !t.el) return;
          const e = [];
          t.slides.forEach((r => {
            const i = t.getSlideClasses(r);
            e.push({
              slideEl: r,
              classNames: i
            }), t.emit("_slideClass", r, i)
          })), t.emit("_slideClasses", e)
        }
        slidesPerViewDynamic(t, e) {
          void 0 === t && (t = "current"), void 0 === e && (e = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: a,
            size: s,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let t, e = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < i.length; r += 1) i[r] && !t && (e += Math.ceil(i[r].swiperSlideSize), l += 1, e > s && (t = !0));
            for (let r = o - 1; r >= 0; r -= 1) i[r] && !t && (e += i[r].swiperSlideSize, l += 1, e > s && (t = !0))
          } else if ("current" === t)
            for (let t = o + 1; t < i.length; t += 1)(e ? n[t] + a[t] - n[o] < s : n[t] - n[o] < s) && (l += 1);
          else
            for (let t = o - 1; t >= 0; t -= 1) n[o] - n[t] < s && (l += 1);
          return l
        }
        update() {
          const t = this;
          if (!t || t.destroyed) return;
          const {
            snapGrid: e,
            params: r
          } = t;

          function i() {
            const e = t.rtlTranslate ? -1 * t.translate : t.translate,
              r = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
            t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
          }
          let n;
          if (r.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
              e.complete && p(t, e)
            })), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
              const e = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              n = t.slideTo(e.length - 1, 0, !1, !0)
            } else n = t.slideTo(t.activeIndex, 0, !1, !0);
            n || i()
          }
          r.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }
        changeDirection(t, e) {
          void 0 === e && (e = !0);
          const r = this,
            i = r.params.direction;
          return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${t}`), r.emitContainerClasses(), r.params.direction = t, r.slides.forEach((e => {
            "vertical" === t ? e.style.width = "" : e.style.height = ""
          })), r.emit("changeDirection"), e && r.update()), r
        }
        changeLanguageDirection(t) {
          const e = this;
          e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`), e.el.dir = "rtl") : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`), e.el.dir = "ltr"), e.update())
        }
        mount(t) {
          const e = this;
          if (e.mounted) return !0;
          let r = t || e.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = e, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === e.params.swiperElementNodeName.toUpperCase() && (e.isElement = !0);
          const i = () => `.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : (0, a.e)(r, i())[0];
          return !n && e.params.createElements && (n = (0, a.c)("div", e.params.wrapperClass), r.append(n), (0, a.e)(r, `.${e.params.slideClass}`).forEach((t => {
            n.append(t)
          }))), Object.assign(e, {
            el: r,
            wrapperEl: n,
            slidesEl: e.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
            hostEl: e.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction"),
            rtlTranslate: "horizontal" === e.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, a.o)(n, "display")
          }), !0
        }
        init(t) {
          const e = this;
          if (e.initialized) return e;
          if (!1 === e.mount(t)) return e;
          e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.loop && e.virtual && e.params.virtual.enabled ? e.slideTo(e.params.initialSlide + e.virtual.slidesBefore, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.params.loop && e.loopCreate(), e.attachEvents();
          const r = [...e.el.querySelectorAll('[loading="lazy"]')];
          return e.isElement && r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((t => {
            t.complete ? p(e, t) : t.addEventListener("load", (t => {
              p(e, t.target)
            }))
          })), f(e), e.initialized = !0, f(e), e.emit("init"), e.emit("afterInit"), e
        }
        destroy(t, e) {
          void 0 === t && (t = !0), void 0 === e && (e = !0);
          const r = this,
            {
              params: i,
              el: n,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), e && (r.removeClasses(), n.removeAttribute("style"), s.removeAttribute("style"), o && o.length && o.forEach((t => {
            t.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), t.removeAttribute("style"), t.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((t => {
            r.off(t)
          })), !1 !== t && (r.el.swiper = null, (0, a.v)(r)), r.destroyed = !0), null
        }
        static extendDefaults(t) {
          (0, a.u)(F, t)
        }
        static get extendedDefaults() {
          return F
        }
        static get defaults() {
          return k
        }
        static installModule(t) {
          O.prototype.__modules__ || (O.prototype.__modules__ = []);
          const e = O.prototype.__modules__;
          "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }
        static use(t) {
          return Array.isArray(t) ? (t.forEach((t => O.installModule(t))), O) : (O.installModule(t), O)
        }
      }
      Object.keys(I).forEach((t => {
        Object.keys(I[t]).forEach((e => {
          O.prototype[e] = I[t][e]
        }))
      })), O.use([function(t) {
        let {
          swiper: e,
          on: r,
          emit: i
        } = t;
        const a = (0, n.a)();
        let s = null,
          o = null;
        const l = () => {
            e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
          },
          h = () => {
            e && !e.destroyed && e.initialized && i("orientationchange")
          };
        r("init", (() => {
          e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (s = new ResizeObserver((t => {
            o = a.requestAnimationFrame((() => {
              const {
                width: r,
                height: i
              } = e;
              let n = r,
                a = i;
              t.forEach((t => {
                let {
                  contentBoxSize: r,
                  contentRect: i,
                  target: s
                } = t;
                s && s !== e.el || (n = i ? i.width : (r[0] || r).inlineSize, a = i ? i.height : (r[0] || r).blockSize)
              })), n === r && a === i || l()
            }))
          })), s.observe(e.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", h))
        })), r("destroy", (() => {
          o && a.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), s = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", h)
        }))
      }, function(t) {
        let {
          swiper: e,
          extendParams: r,
          on: i,
          emit: s
        } = t;
        const o = [],
          l = (0, n.a)(),
          h = function(t, r) {
            void 0 === r && (r = {});
            const i = new(l.MutationObserver || l.WebkitMutationObserver)((t => {
              if (e.__preventObserver__) return;
              if (1 === t.length) return void s("observerUpdate", t[0]);
              const r = function() {
                s("observerUpdate", t[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            i.observe(t, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(i)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (e.params.observer) {
            if (e.params.observeParents) {
              const t = (0, a.a)(e.hostEl);
              for (let e = 0; e < t.length; e += 1) h(t[e])
            }
            h(e.hostEl, {
              childList: e.params.observeSlideChildren
            }), h(e.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          o.forEach((t => {
            t.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const L = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function V(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1) && !t.__swiper__
      }

      function R(t, e) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(e).filter((t => r.indexOf(t) < 0)).forEach((r => {
          void 0 === t[r] ? t[r] = e[r] : V(e[r]) && V(t[r]) && Object.keys(e[r]).length > 0 ? e[r].__swiper__ ? t[r] = e[r] : R(t[r], e[r]) : t[r] = e[r]
        }))
      }

      function B(t) {
        return void 0 === t && (t = {}), t.navigation && void 0 === t.navigation.nextEl && void 0 === t.navigation.prevEl
      }

      function N(t) {
        return void 0 === t && (t = {}), t.pagination && void 0 === t.pagination.el
      }

      function z(t) {
        return void 0 === t && (t = {}), t.scrollbar && void 0 === t.scrollbar.el
      }

      function G(t) {
        void 0 === t && (t = "");
        const e = t.split(" ").map((t => t.trim())).filter((t => !!t)),
          r = [];
        return e.forEach((t => {
          r.indexOf(t) < 0 && r.push(t)
        })), r.join(" ")
      }

      function j(t) {
        return void 0 === t && (t = ""), t ? t.includes("swiper-wrapper") ? t : `swiper-wrapper ${t}` : "swiper-wrapper"
      }

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
          }
          return t
        }, H.apply(this, arguments)
      }

      function W(t) {
        return t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
      }

      function q(t) {
        const e = [];
        return i.Children.toArray(t).forEach((t => {
          W(t) ? e.push(t) : t.props && t.props.children && q(t.props.children).forEach((t => e.push(t)))
        })), e
      }

      function U(t) {
        const e = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(t).forEach((t => {
          if (W(t)) e.push(t);
          else if (t.props && t.props.slot && r[t.props.slot]) r[t.props.slot].push(t);
          else if (t.props && t.props.children) {
            const i = q(t.props.children);
            i.length > 0 ? i.forEach((t => e.push(t))) : r["container-end"].push(t)
          } else r["container-end"].push(t)
        })), {
          slides: e,
          slots: r
        }
      }

      function $(t, e) {
        return "undefined" == typeof window ? (0, i.useEffect)(t, e) : (0, i.useLayoutEffect)(t, e)
      }
      const Y = (0, i.createContext)(null),
        X = (0, i.createContext)(null),
        K = (0, i.forwardRef)((function(t, e) {
          let {
            className: r,
            tag: n = "div",
            wrapperTag: a = "div",
            children: s,
            onSwiper: o,
            ...l
          } = void 0 === t ? {} : t, h = !1;
          const [c, u] = (0, i.useState)("swiper"), [p, d] = (0, i.useState)(null), [f, m] = (0, i.useState)(!1), v = (0, i.useRef)(!1), g = (0, i.useRef)(null), y = (0, i.useRef)(null), b = (0, i.useRef)(null), x = (0, i.useRef)(null), S = (0, i.useRef)(null), E = (0, i.useRef)(null), P = (0, i.useRef)(null), w = (0, i.useRef)(null), {
            params: T,
            passedParams: C,
            rest: M,
            events: A
          } = function(t, e) {
            void 0 === t && (t = {}), void 0 === e && (e = !0);
            const r = {
                on: {}
              },
              i = {},
              n = {};
            R(r, k), r._emitClasses = !0, r.init = !1;
            const a = {},
              s = L.map((t => t.replace(/_/, ""))),
              o = Object.assign({}, t);
            return Object.keys(o).forEach((o => {
              void 0 !== t[o] && (s.indexOf(o) >= 0 ? V(t[o]) ? (r[o] = {}, n[o] = {}, R(r[o], t[o]), R(n[o], t[o])) : (r[o] = t[o], n[o] = t[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof t[o] ? e ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = t[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = t[o] : a[o] = t[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((t => {
              !0 === r[t] && (r[t] = {}), !1 === r[t] && delete r[t]
            })), {
              params: r,
              passedParams: n,
              rest: a,
              events: i
            }
          }(l), {
            slides: _,
            slots: D
          } = U(s), I = () => {
            m(!f)
          };
          Object.assign(T.on, {
            _containerClasses(t, e) {
              u(e)
            }
          });
          const F = () => {
            Object.assign(T.on, A), h = !0;
            const t = {
              ...T
            };
            if (delete t.wrapperClass, y.current = new O(t), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = _;
              const t = {
                cache: !1,
                slides: _,
                renderExternal: d,
                renderExternalUpdate: !1
              };
              R(y.current.params.virtual, t), R(y.current.originalParams.virtual, t)
            }
          };
          return g.current || F(), y.current && y.current.on("_beforeBreakpoint", I), (0, i.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", I)
          })), (0, i.useEffect)((() => {
            !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
          })), $((() => {
            if (e && (e.current = g.current), g.current) return y.current.destroyed && F(),
              function(t, e) {
                let {
                  el: r,
                  nextEl: i,
                  prevEl: n,
                  paginationEl: a,
                  scrollbarEl: s,
                  swiper: o
                } = t;
                B(e) && i && n && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), N(e) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), z(e) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
              }({
                el: g.current,
                nextEl: S.current,
                prevEl: E.current,
                paginationEl: P.current,
                scrollbarEl: w.current,
                swiper: y.current
              }, T), o && !y.current.destroyed && o(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), $((() => {
            !h && A && y.current && Object.keys(A).forEach((t => {
              y.current.on(t, A[t])
            }));
            const t = function(t, e, r, i, n) {
              const a = [];
              if (!e) return a;
              const s = t => {
                a.indexOf(t) < 0 && a.push(t)
              };
              if (r && i) {
                const t = i.map(n),
                  e = r.map(n);
                t.join("") !== e.join("") && s("children"), i.length !== r.length && s("children")
              }
              return L.filter((t => "_" === t[0])).map((t => t.replace(/_/, ""))).forEach((r => {
                if (r in t && r in e)
                  if (V(t[r]) && V(e[r])) {
                    const i = Object.keys(t[r]),
                      n = Object.keys(e[r]);
                    i.length !== n.length ? s(r) : (i.forEach((i => {
                      t[r][i] !== e[r][i] && s(r)
                    })), n.forEach((i => {
                      t[r][i] !== e[r][i] && s(r)
                    })))
                  } else t[r] !== e[r] && s(r)
              })), a
            }(C, b.current, _, x.current, (t => t.key));
            return b.current = C, x.current = _, t.length && y.current && !y.current.destroyed && function(t) {
              let {
                swiper: e,
                slides: r,
                passedParams: i,
                changedParams: n,
                nextEl: a,
                prevEl: s,
                scrollbarEl: o,
                paginationEl: l
              } = t;
              const h = n.filter((t => "children" !== t && "direction" !== t && "wrapperClass" !== t)),
                {
                  params: c,
                  pagination: u,
                  navigation: p,
                  scrollbar: d,
                  virtual: f,
                  thumbs: m
                } = e;
              let v, g, y, b, x, S, E, P;
              n.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), n.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (g = !0), n.includes("pagination") && i.pagination && (i.pagination.el || l) && (c.pagination || !1 === c.pagination) && u && !u.el && (y = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && d && !d.el && (b = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || s) && (i.navigation.nextEl || a) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (x = !0);
              const w = t => {
                e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), c[t].prevEl = void 0, c[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), c[t].el = void 0, e[t].el = void 0))
              };
              n.includes("loop") && e.isElement && (c.loop && !i.loop ? S = !0 : !c.loop && i.loop ? E = !0 : P = !0), h.forEach((t => {
                if (V(c[t]) && V(i[t])) Object.assign(c[t], i[t]), "navigation" !== t && "pagination" !== t && "scrollbar" !== t || !("enabled" in i[t]) || i[t].enabled || w(t);
                else {
                  const e = i[t];
                  !0 !== e && !1 !== e || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? c[t] = i[t] : !1 === e && w(t)
                }
              })), h.includes("controller") && !g && e.controller && e.controller.control && c.controller && c.controller.control && (e.controller.control = c.controller.control), n.includes("children") && r && f && c.virtual.enabled ? (f.slides = r, f.update(!0)) : n.includes("virtual") && f && c.virtual.enabled && (r && (f.slides = r), f.update(!0)), n.includes("children") && r && c.loop && (P = !0), v && m.init() && m.update(!0), g && (e.controller.control = c.controller.control), y && (!e.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), e.el.appendChild(l)), l && (c.pagination.el = l), u.init(), u.render(), u.update()), b && (!e.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), e.el.appendChild(o)), o && (c.scrollbar.el = o), d.init(), d.updateSize(), d.setTranslate()), x && (e.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = e.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), e.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), s.innerHTML = e.hostEl.constructor.prevButtonSvg, s.part.add("button-prev"), e.el.appendChild(s))), a && (c.navigation.nextEl = a), s && (c.navigation.prevEl = s), p.init(), p.update()), n.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && e.changeDirection(i.direction, !1), (S || P) && e.loopDestroy(), (E || P) && e.loopCreate(), e.update()
            }({
              swiper: y.current,
              slides: _,
              passedParams: C,
              changedParams: t,
              nextEl: S.current,
              prevEl: E.current,
              scrollbarEl: w.current,
              paginationEl: P.current
            }), () => {
              A && y.current && Object.keys(A).forEach((t => {
                y.current.off(t, A[t])
              }))
            }
          })), $((() => {
            var t;
            !(t = y.current) || t.destroyed || !t.params.virtual || t.params.virtual && !t.params.virtual.enabled || (t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
          }), [p]), i.createElement(n, H({
            ref: g,
            className: G(`${c}${r?` ${r}`:""}`)
          }, M), i.createElement(X.Provider, {
            value: y.current
          }, D["container-start"], i.createElement(a, {
            className: j(T.wrapperClass)
          }, D["wrapper-start"], T.virtual ? function(t, e, r) {
            if (!r) return null;
            const n = t => {
                let r = t;
                return t < 0 ? r = e.length + t : r >= e.length && (r -= e.length), r
              },
              a = t.isHorizontal() ? {
                [t.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: s,
                to: o
              } = r,
              l = t.params.loop ? -e.length : 0,
              h = t.params.loop ? 2 * e.length : e.length,
              c = [];
            for (let t = l; t < h; t += 1) t >= s && t <= o && c.push(e[n(t)]);
            return c.map(((e, r) => i.cloneElement(e, {
              swiper: t,
              style: a,
              key: `slide-${r}`
            })))
          }(y.current, _, p) : _.map(((t, e) => i.cloneElement(t, {
            swiper: y.current,
            swiperSlideIndex: e
          }))), D["wrapper-end"]), B(T) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: S,
            className: "swiper-button-next"
          })), z(T) && i.createElement("div", {
            ref: w,
            className: "swiper-scrollbar"
          }), N(T) && i.createElement("div", {
            ref: P,
            className: "swiper-pagination"
          }), D["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, i.forwardRef)((function(t, e) {
        let {
          tag: r = "div",
          children: n,
          className: a = "",
          swiper: s,
          zoom: o,
          lazy: l,
          virtualIndex: h,
          swiperSlideIndex: c,
          ...u
        } = void 0 === t ? {} : t;
        const p = (0, i.useRef)(null),
          [d, f] = (0, i.useState)("swiper-slide"),
          [m, v] = (0, i.useState)(!1);

        function g(t, e, r) {
          e === p.current && f(r)
        }
        $((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), e && (e.current = p.current), p.current && s) {
            if (!s.destroyed) return s.on("_slideClass", g), () => {
              s && s.off("_slideClass", g)
            };
            "swiper-slide" !== d && f("swiper-slide")
          }
        })), $((() => {
          s && p.current && !s.destroyed && f(s.getSlideClasses(p.current))
        }), [s]);
        const y = {
            isActive: d.indexOf("swiper-slide-active") >= 0,
            isVisible: d.indexOf("swiper-slide-visible") >= 0,
            isPrev: d.indexOf("swiper-slide-prev") >= 0,
            isNext: d.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof n ? n(y) : n;
        return i.createElement(r, H({
          ref: p,
          className: G(`${d}${a?` ${a}`:""}`),
          "data-swiper-slide-index": h,
          onLoad: () => {
            v(!0)
          }
        }, u), o && i.createElement(Y.Provider, {
          value: y
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && i.createElement(Y.Provider, {
          value: y
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    },
    78048: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    82396: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);