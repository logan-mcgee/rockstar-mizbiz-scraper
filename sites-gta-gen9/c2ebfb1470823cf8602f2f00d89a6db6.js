! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "556a808f-5251-4821-9506-3aa93ec0ccea", e._sentryDebugIdIdentifier = "sentry-dbid-556a808f-5251-4821-9506-3aa93ec0ccea")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [8848], {
    45164: (e, t, r) => {
      "use strict";
      var n = p(r(67032)),
        i = p(r(4616)),
        a = p(r(65908)),
        s = p(r(272)),
        o = p(r(66516)),
        l = p(r(92392)),
        h = p(r(51664)),
        u = p(r(71424)),
        c = p(r(86352));

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var f = function(e) {
        function t() {
          var e, r, n, s;
          (0, a.default)(this, t);
          for (var l = arguments.length, h = Array(l), u = 0; u < l; u++) h[u] = arguments[u];
          return r = n = (0, o.default)(this, (e = t.__proto__ || (0, i.default)(t)).call.apply(e, [this].concat(h))), n.handleClickToPause = function() {
            n.anim.isPaused ? n.anim.play() : n.anim.pause()
          }, s = r, (0, o.default)(n, s)
        }
        return (0, l.default)(t, e), (0, s.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this.props,
              t = e.options,
              r = e.eventListeners,
              i = t.loop,
              a = t.autoplay,
              s = t.animationData,
              o = t.rendererSettings,
              l = t.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== i,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, n.default)({}, this.options, t), this.anim = c.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(e) {
            this.options.animationData !== e.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, n.default)({}, this.options, e.options), this.anim = c.default.loadAnimation(this.options), this.registerEvents(e.eventListeners))
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
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.addEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.removeEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.width,
              i = t.height,
              a = t.ariaRole,
              s = t.ariaLabel,
              o = t.isClickToPauseDisabled,
              l = t.title,
              u = function(e) {
                return "number" == typeof e ? e + "px" : e || "100%"
              },
              c = (0, n.default)({
                width: u(r),
                height: u(i),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return h.default.createElement("div", {
              ref: function(t) {
                e.el = t
              },
              style: c,
              onClick: p,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), t
      }(h.default.Component);
      t.c = f, f.propTypes = {
        eventListeners: u.default.arrayOf(u.default.object),
        options: u.default.object.isRequired,
        height: u.default.oneOfType([u.default.string, u.default.number]),
        width: u.default.oneOfType([u.default.string, u.default.number]),
        isStopped: u.default.bool,
        isPaused: u.default.bool,
        speed: u.default.number,
        segments: u.default.arrayOf(u.default.number),
        direction: u.default.number,
        ariaRole: u.default.string,
        ariaLabel: u.default.string,
        isClickToPauseDisabled: u.default.bool,
        title: u.default.string,
        style: u.default.string
      }, f.defaultProps = {
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
    95364: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, n) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var i = r.y0,
          a = r.y1,
          s = r.x1,
          o = r.x0,
          l = "%" === a.unit && "%" === i.unit,
          h = i.value,
          u = a.value;
        if (l) {
          var c = t.height / 100;
          h = i.value * c, u = a.value * c
        }
        var p = "%" === s.unit && "%" === o.unit,
          f = o.value,
          d = s.value;
        if (p) {
          var m = t.width / 100;
          f = o.value * m, d = s.value * m
        }
        var y = Math.abs(h) + Math.abs(u);
        this.totalDistY = n.height + t.height + y;
        var v = n.height + t.height + (u > h ? -1 * y : y),
          g = Math.abs(f) + Math.abs(d);
        this.totalDistX = n.width + t.width + g;
        var b = n.width + t.width + (d > f ? -1 * g : g),
          S = t.originTotalDistY / v,
          x = t.originTotalDistX / b;
        this.top = t.top, this.bottom = t.bottom, h < 0 && (this.top = this.top + h * S), u > 0 && (this.bottom = this.bottom + u * S), this.left = t.left, this.right = t.right, f < 0 && (this.left = this.left + f * x), d > 0 && (this.right = this.right + d * x)
      }
    },
    9560: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Element = void 0;
      var n = r(89932),
        i = r(44964),
        a = r(57892),
        s = l(r(95364)),
        o = l(r(73100));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(r), !0).forEach((function(t) {
            c(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
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

      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      var f = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.elInner = t.elInner, this.elOuter = t.elOuter, this.props = t.props, this.scrollAxis = t.scrollAxis, this.id = (0, n.createId)(), this.offsets = (0, i.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = t.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var t, r;
        return t = e, (r = [{
          key: "updateProps",
          value: function(e) {
            return this.props = u(u({}, this.props), e), this.offsets = (0, i.getOffsets)(e), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(e, t) {
            return this.rect = new o.default(this.elOuter, e, t), this.bounds = new s.default(this.rect, this.offsets, e), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(e, t) {
            return this.isInView = (0, i.isElementInView)(this.bounds.left, this.bounds.right, e.width, t.x), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.left, this.rect.originTotalDistX, e.width, t.x), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(e, t) {
            return this.isInView = (0, i.isElementInView)(this.bounds.top, this.bounds.bottom, e.height, t.y), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.top, this.rect.originTotalDistY, e.height, t.y), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(t.prototype, r), e
      }();
      t.Element = f
    },
    48708: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = r(89932),
        i = r(44964),
        a = r(39820),
        s = r(34779),
        o = r(9560),
        l = r(57892);

      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
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

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            p(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
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

      function f(e) {
        var t = e.scrollAxis,
          r = void 0 === t ? l.VERTICAL : t,
          u = e.scrollContainer,
          p = [],
          f = !!u,
          d = u || window,
          m = f ? d.scrollLeft : window.pageXOffset,
          y = f ? d.scrollTop : window.pageYOffset,
          v = new s.Scroll(m, y),
          g = new a.View({
            width: 0,
            height: 0,
            scrollContainer: u
          }),
          b = !1,
          S = (0, n.testForPassiveScroll)();

        function x(e) {
          e.addEventListener("scroll", P, !!S && {
            passive: !0
          }), window.addEventListener("resize", C, !1)
        }

        function E(e) {
          e.removeEventListener("scroll", P, !!S && {
            passive: !0
          }), window.removeEventListener("resize", C, !1)
        }

        function P() {
          var e = f ? d.scrollLeft : window.pageXOffset,
            t = f ? d.scrollTop : window.pageYOffset;
          v.setScroll(e, t), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(T))
        }

        function C() {
          _(), T({
            updateCache: !0
          })
        }

        function T() {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(t) {
            M(t), e && t.setCachedAttributes(g, v)
          })), b = !1
        }

        function M(e) {
          e.props.disabled || e.updatePosition(g, v)
        }

        function _() {
          if (f) {
            var e = d.offsetWidth,
              t = d.offsetHeight;
            return g.setSize(e, t)
          }
          var r = document.documentElement,
            n = window.innerWidth || r.clientWidth,
            i = window.innerHeight || r.clientHeight;
          return g.setSize(n, i)
        }
        x(d), _(), this.getElements = function() {
          return p
        }, this.createElement = function(e) {
          var t, n = new o.Element(c(c({}, e), {}, {
            scrollAxis: r
          }));
          return n.setCachedAttributes(g, v), p = p ? [].concat(function(e) {
            if (Array.isArray(e)) return h(e)
          }(t = p) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return h(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(e, t) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [n]) : [n], M(n), n
        }, this.removeElementById = function(e) {
          p && (p = p.filter((function(t) {
            return t.id !== e
          })))
        }, this.updateElementPropsById = function(e, t) {
          p && (p = p.map((function(r) {
            return r.id === e ? r.updateProps(t) : r
          }))), this.update()
        }, this.resetElementStyles = function(e) {
          (0, i.resetStyles)(e)
        }, this.update = function() {
          var e = f ? d.scrollLeft : window.pageXOffset,
            t = f ? d.scrollTop : window.pageYOffset;
          v.setScroll(e, t), _(), T({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(e) {
          E(d), d = e, f = !!e, g = new a.View({
            width: 0,
            height: 0,
            scrollContainer: e
          }), _(), x(d), T({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(d), p && p.forEach((function(e) {
            return (0, i.resetStyles)(e)
          })), p = void 0
        }
      }
      f.init = function(e) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new f(e)
      };
      var d = f;
      t.default = d
    },
    73100: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, n) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var i = t.getBoundingClientRect();
        if (r.scrollContainer) {
          var a = r.scrollContainer.getBoundingClientRect();
          i = {
            top: i.top - a.top,
            right: i.right - a.left,
            bottom: i.bottom - a.top,
            left: i.left - a.left
          }
        }
        this.height = t.offsetHeight, this.width = t.offsetWidth, this.left = i.left + n.x, this.right = i.right + n.x, this.top = i.top + n.y, this.bottom = i.bottom + n.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    34779: (e, t) => {
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
    39820: (e, t) => {
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
            i = t.scrollContainer;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.scrollContainer = i, this.setSize(r, n)
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
    91520: (e, t, r) => {
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
      var i = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = h();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(51664)),
        a = l(r(71424)),
        s = l(r(48708)),
        o = l(r(92320));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return h = function() {
          return e
        }, e
      }

      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function c(e, t) {
        return c = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, c(e, t)
      }

      function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function f(e) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, f(e)
      }

      function d(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var m = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && c(e, t)
        }(h, e);
        var t, r, a, o, l = (a = h, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = f(a);
          if (o) {
            var r = f(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? p(e) : t
          }(this, e)
        });

        function h() {
          var e;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, h);
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
          return d(p(e = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(t) {
            e._outer = t
          })), d(p(e), "mapRefInner", (function(t) {
            e._inner = t
          })), e
        }
        return t = h, (r = [{
          key: "componentDidMount",
          value: function() {
            var e = this.controller instanceof s.default;
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
              a = e.tagInner,
              s = e.styleOuter,
              o = e.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return i.default.createElement(n, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, i.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, t))
          }
        }]) && u(t.prototype, r), h
      }(i.Component);
      d(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), d(m, "propTypes", {
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
      var y = (0, o.default)(m);
      t.default = y
    },
    13708: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = s(r(51664)),
        i = s(r(71424)),
        a = s(r(91520));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function o() {
        return o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, o.apply(this, arguments)
      }

      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach((function(t) {
            u(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var c = {
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
        f = function(e) {
          var t = e.children,
            r = e.className,
            i = e.layers,
            s = e.style,
            l = e.disabled;
          return n.default.createElement("div", {
            style: h(h({}, c), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, i.map((function(e, t) {
            var r = e.amount,
              i = e.children,
              s = e.expanded,
              u = void 0 === s || s,
              c = e.image,
              f = e.props,
              d = void 0 === f ? {} : f,
              m = d.style || {},
              y = d.className || "";
            delete d.style, delete d.className;
            var v = "parallax-banner-layer-".concat(t).concat(y ? " ".concat(y) : ""),
              g = u ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = c ? {
                backgroundImage: "url(".concat(c, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return n.default.createElement(a.default, {
              key: "layer-".concat(t),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: l
            }, n.default.createElement("div", o({
              className: v,
              style: h(h(h(h({}, b), p), g), m)
            }, d), i))
          })), t)
        };
      f.defaultProps = {
        disabled: !1
      }, f.propTypes = {
        children: i.default.node,
        className: i.default.string,
        disabled: i.default.bool.isRequired,
        layers: i.default.arrayOf(i.default.shape({
          amount: i.default.number.isRequired,
          children: i.default.oneOfType([i.default.node, i.default.func]),
          expanded: i.default.bool,
          image: i.default.string,
          props: i.default.object
        })),
        style: i.default.object
      };
      var d = f;
      t.default = d
    },
    40648: (e, t, r) => {
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
      var i = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(51664)),
        a = u(r(71424)),
        s = u(r(92752)),
        o = u(r(48708)),
        l = r(57892),
        h = u(r(86569));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return c = function() {
          return e
        }, e
      }

      function p(e, t) {
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

      function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, d(e)
      }

      function m(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var y = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && f(e, t)
        }(u, e);
        var t, r, a, l, h = (a = u, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = d(a);
          if (l) {
            var r = d(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== n(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e) : t
          }(this, e)
        });

        function u(e) {
          var t, r;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, u), (t = h.call(this, e)).controller = (r = {
            scrollAxis: e.scrollAxis,
            scrollContainer: e.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), t
        }
        return t = u, (r = [{
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
            return i.default.createElement(s.default.Provider, {
              value: this.controller
            }, e)
          }
        }]) && p(t.prototype, r), u
      }(i.Component);
      t.default = y, m(y, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(y, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: h.default
      })
    },
    98784: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n, i = r(51664),
        a = (n = r(92752)) && n.__esModule ? n : {
          default: n
        };
      t.default = function() {
        var e = (0, i.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!e) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: e
        }
      }
    },
    92320: (e, t, r) => {
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
      var i = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== n(e) && "function" != typeof e) return {
            default: e
          };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(51664)),
        a = o(r(71424)),
        s = o(r(92752));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return l = function() {
          return e
        }, e
      }

      function h() {
        return h = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, h.apply(this, arguments)
      }

      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function c(e, t) {
        return c = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, c(e, t)
      }

      function p(e) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, p(e)
      }
      t.default = function(e) {
        var t, r, o, l = function(t) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && c(e, t)
          }(d, t);
          var r, a, o, l, f = (o = d, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, t = p(o);
            if (l) {
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

          function d() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d), f.apply(this, arguments)
          }
          return r = d, (a = [{
            key: "render",
            value: function() {
              var t = this;
              return i.default.createElement(s.default.Consumer, null, (function(r) {
                return i.default.createElement(e, h({
                  parallaxController: r
                }, t.props))
              }))
            }
          }]) && u(r.prototype, a), d
        }(i.Component);
        return t = l, r = "propTypes", o = {
          parallaxController: a.default.object
        }, r in t ? Object.defineProperty(t, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = o, l
      }
    },
    57892: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HORIZONTAL = t.VERTICAL = void 0, t.VERTICAL = "vertical", t.HORIZONTAL = "horizontal"
    },
    92752: (e, t, r) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = ((n = r(51664)) && n.__esModule ? n : {
        default: n
      }).default.createContext(null);
      t.default = i
    },
    29837: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setParallaxStyles = function(e, t, r) {
        var i = (0, n.getParallaxOffsets)(t, r),
          a = i.x,
          s = a.value,
          o = a.unit,
          l = i.y,
          h = l.value,
          u = l.unit;
        e.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(h).concat(u, ", 0)")
      }, t.resetStyles = function(e) {
        e.elInner.style.transform = ""
      };
      var n = r(29864)
    },
    26516: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = e.y0,
          r = e.y1,
          i = e.x1,
          a = e.x0,
          s = (0, n.parseValueAndUnit)(t),
          o = (0, n.parseValueAndUnit)(r),
          l = (0, n.parseValueAndUnit)(a),
          h = (0, n.parseValueAndUnit)(i);
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
      var n = r(89932)
    },
    29864: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getParallaxOffsets = function(e, t) {
        var r = e.y0,
          i = e.y1,
          a = e.x0,
          s = e.x1,
          o = i.unit,
          l = s.unit;
        return {
          x: {
            value: (0, n.scaleBetween)(t, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, n.scaleBetween)(t, r.value, i.value, 0, 100),
            unit: o
          }
        }
      };
      var n = r(89932)
    },
    44964: (e, t, r) => {
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
          return i.percentMoved
        }
      }), Object.defineProperty(t, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(t, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(t, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(t, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(t, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var n = h(r(92752)),
        i = r(31288),
        a = r(29837),
        s = r(29864),
        o = r(59352),
        l = h(r(26516));

      function h(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    59352: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isElementInView = function(e, t, r, n) {
        var i = e - n,
          a = t - n;
        return i >= 0 && i <= r || a >= 0 && a <= r || i <= 0 && a >= r
      }
    },
    31288: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.percentMoved = function(e, t, r, n) {
        return (-1 * (e - n) + r) / t * 100
      }
    },
    77616: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "oZ", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "mw", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "qK", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "Sr", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      });
      var n = o(r(98784)),
        i = (o(r(92320)), o(r(91520))),
        a = o(r(40648)),
        s = o(r(13708));
      o(r(92752));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    98357: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createId = function() {
        return ++r
      };
      var r = 0
    },
    89932: (e, t, r) => {
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
          return i.default
        }
      }), Object.defineProperty(t, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var n = o(r(25536)),
        i = o(r(16512)),
        a = o(r(45560)),
        s = r(98357);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    25536: (e, t) => {
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
    16512: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t, r, n, i) {
        return (r - t) * (e - n) / (i - n) + t
      }
    },
    45560: (e, t) => {
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
    86569: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !e[t] || e[t] instanceof window.Element ? null : new Error('Prop name "'.concat(t, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    69736: (e, t, r) => {
      "use strict";
      r.d(t, {
        cp: () => an
      });
      var n = r(62504);

      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(r), !0).forEach((function(t) {
            (0, n.c)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function o(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
        }
      }

      function l(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var n, i, a, s, o = [],
              l = !0,
              h = !1;
            try {
              if (a = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r) return;
                l = !1
              } else
                for (; !(l = (n = a.call(r)).done) && (o.push(n.value), o.length !== t); l = !0);
            } catch (e) {
              h = !0, i = e
            } finally {
              try {
                if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
              } finally {
                if (h) throw i
              }
            }
            return o
          }
        }(e, t) || o(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var h = r(31632);

      function u(e, t) {
        if (null == e) return {};
        var r, n, i = (0, h.c)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }
      var c = r(51664),
        p = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"],
        f = r(82795),
        d = r(53952);

      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (0, d.c)(n.key), n)
        }
      }
      var y = r(74848);

      function v(e) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, v(e)
      }
      var g = r(28792);

      function b(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var r, n = v(e);
          if (t) {
            var i = v(this).constructor;
            r = Reflect.construct(n, arguments, i)
          } else r = n.apply(this, arguments);
          return function(e, t) {
            if (t && ("object" === (0, g.c)(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(this, r)
        }
      }

      function S(e) {
        return function(e) {
          if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || o(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var x = function() {
          function e(e) {
            var t = this;
            this._insertTag = function(e) {
              var r;
              r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, r), t.tags.push(e)
            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
          }
          var t = e.prototype;
          return t.hydrate = function(e) {
            e.forEach(this._insertTag)
          }, t.insert = function(e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
              var t = document.createElement("style");
              return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
            }(this));
            var t = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var r = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
              }(t);
              try {
                r.insertRule(e, r.cssRules.length)
              } catch (e) {}
            } else t.appendChild(document.createTextNode(e));
            this.ctr++
          }, t.flush = function() {
            this.tags.forEach((function(e) {
              return e.parentNode && e.parentNode.removeChild(e)
            })), this.tags = [], this.ctr = 0
          }, e
        }(),
        E = Math.abs,
        P = String.fromCharCode,
        C = Object.assign;

      function T(e) {
        return e.trim()
      }

      function M(e, t, r) {
        return e.replace(t, r)
      }

      function _(e, t) {
        return e.indexOf(t)
      }

      function w(e, t) {
        return 0 | e.charCodeAt(t)
      }

      function A(e, t, r) {
        return e.slice(t, r)
      }

      function k(e) {
        return e.length
      }

      function D(e) {
        return e.length
      }

      function I(e, t) {
        return t.push(e), e
      }
      var F = 1,
        O = 1,
        R = 0,
        L = 0,
        V = 0,
        B = "";

      function N(e, t, r, n, i, a, s) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: i,
          children: a,
          line: F,
          column: O,
          length: s,
          return: ""
        }
      }

      function z(e, t) {
        return C(N("", null, null, "", null, null, 0), e, {
          length: -e.length
        }, t)
      }

      function G() {
        return V = L > 0 ? w(B, --L) : 0, O--, 10 === V && (O = 1, F--), V
      }

      function j() {
        return V = L < R ? w(B, L++) : 0, O++, 10 === V && (O = 1, F++), V
      }

      function H() {
        return w(B, L)
      }

      function W() {
        return L
      }

      function U(e, t) {
        return A(B, e, t)
      }

      function q(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1
        }
        return 0
      }

      function $(e) {
        return F = O = 1, R = k(B = e), L = 0, []
      }

      function Y(e) {
        return B = "", e
      }

      function K(e) {
        return T(U(L - 1, J(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }

      function X(e) {
        for (;
          (V = H()) && V < 33;) j();
        return q(e) > 2 || q(V) > 3 ? "" : " "
      }

      function Z(e, t) {
        for (; --t && j() && !(V < 48 || V > 102 || V > 57 && V < 65 || V > 70 && V < 97););
        return U(e, W() + (t < 6 && 32 == H() && 32 == j()))
      }

      function J(e) {
        for (; j();) switch (V) {
          case e:
            return L;
          case 34:
          case 39:
            34 !== e && 39 !== e && J(V);
            break;
          case 40:
            41 === e && J(e);
            break;
          case 92:
            j()
        }
        return L
      }

      function Q(e, t) {
        for (; j() && e + V !== 57 && (e + V !== 84 || 47 !== H()););
        return "/*" + U(t, L - 1) + "*" + P(47 === e ? e : j())
      }

      function ee(e) {
        for (; !q(H());) j();
        return U(e, L)
      }
      var te = "-ms-",
        re = "-moz-",
        ne = "-webkit-",
        ie = "comm",
        ae = "rule",
        se = "decl",
        oe = "@keyframes";

      function le(e, t) {
        for (var r = "", n = D(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || "";
        return r
      }

      function he(e, t, r, n) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case se:
            return e.return = e.return || e.value;
          case ie:
            return "";
          case oe:
            return e.return = e.value + "{" + le(e.children, n) + "}";
          case ae:
            e.value = e.props.join(",")
        }
        return k(r = le(e.children, n)) ? e.return = e.value + "{" + r + "}" : ""
      }

      function ue(e) {
        return Y(ce("", null, null, null, [""], e = $(e), 0, [0], e))
      }

      function ce(e, t, r, n, i, a, s, o, l) {
        for (var h = 0, u = 0, c = s, p = 0, f = 0, d = 0, m = 1, y = 1, v = 1, g = 0, b = "", S = i, x = a, E = n, C = b; y;) switch (d = g, g = j()) {
          case 40:
            if (108 != d && 58 == w(C, c - 1)) {
              -1 != _(C += M(K(g), "&", "&\f"), "&\f") && (v = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            C += K(g);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            C += X(d);
            break;
          case 92:
            C += Z(W() - 1, 7);
            continue;
          case 47:
            switch (H()) {
              case 42:
              case 47:
                I(fe(Q(j(), W()), t, r), l);
                break;
              default:
                C += "/"
            }
            break;
          case 123 * m:
            o[h++] = k(C) * v;
          case 125 * m:
          case 59:
          case 0:
            switch (g) {
              case 0:
              case 125:
                y = 0;
              case 59 + u:
                -1 == v && (C = M(C, /\f/g, "")), f > 0 && k(C) - c && I(f > 32 ? de(C + ";", n, r, c - 1) : de(M(C, " ", "") + ";", n, r, c - 2), l);
                break;
              case 59:
                C += ";";
              default:
                if (I(E = pe(C, t, r, h, u, i, o, b, S = [], x = [], c), a), 123 === g)
                  if (0 === u) ce(C, t, E, E, S, a, c, o, x);
                  else switch (99 === p && 110 === w(C, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ce(e, E, E, n && I(pe(e, E, E, 0, 0, i, o, b, i, S = [], c), x), i, x, c, o, n ? S : x);
                      break;
                    default:
                      ce(C, E, E, E, [""], x, 0, o, x)
                  }
            }
            h = u = f = 0, m = v = 1, b = C = "", c = s;
            break;
          case 58:
            c = 1 + k(C), f = d;
          default:
            if (m < 1)
              if (123 == g) --m;
              else if (125 == g && 0 == m++ && 125 == G()) continue;
            switch (C += P(g), g * m) {
              case 38:
                v = u > 0 ? 1 : (C += "\f", -1);
                break;
              case 44:
                o[h++] = (k(C) - 1) * v, v = 1;
                break;
              case 64:
                45 === H() && (C += K(j())), p = H(), u = c = k(b = C += ee(W())), g++;
                break;
              case 45:
                45 === d && 2 == k(C) && (m = 0)
            }
        }
        return a
      }

      function pe(e, t, r, n, i, a, s, o, l, h, u) {
        for (var c = i - 1, p = 0 === i ? a : [""], f = D(p), d = 0, m = 0, y = 0; d < n; ++d)
          for (var v = 0, g = A(e, c + 1, c = E(m = s[d])), b = e; v < f; ++v)(b = T(m > 0 ? p[v] + " " + g : M(g, /&\f/g, p[v]))) && (l[y++] = b);
        return N(e, t, r, 0 === i ? ae : o, l, h, u)
      }

      function fe(e, t, r) {
        return N(e, t, r, ie, P(V), A(e, 2, -2), 0)
      }

      function de(e, t, r, n) {
        return N(e, t, r, se, A(e, 0, n), A(e, n + 1, -1), n)
      }
      var me = function(e, t, r) {
          for (var n = 0, i = 0; n = i, i = H(), 38 === n && 12 === i && (t[r] = 1), !q(i);) j();
          return U(e, L)
        },
        ye = new WeakMap,
        ve = function(e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line;
              "rule" !== r.type;)
              if (!(r = r.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || ye.get(r)) && !n) {
              ye.set(e, !0);
              for (var i = [], a = function(e, t) {
                  return Y(function(e, t) {
                    var r = -1,
                      n = 44;
                    do {
                      switch (q(n)) {
                        case 0:
                          38 === n && 12 === H() && (t[r] = 1), e[r] += me(L - 1, t, r);
                          break;
                        case 2:
                          e[r] += K(n);
                          break;
                        case 4:
                          if (44 === n) {
                            e[++r] = 58 === H() ? "&\f" : "", t[r] = e[r].length;
                            break
                          }
                        default:
                          e[r] += P(n)
                      }
                    } while (n = j());
                    return e
                  }($(e), t))
                }(t, i), s = r.props, o = 0, l = 0; o < a.length; o++)
                for (var h = 0; h < s.length; h++, l++) e.props[l] = i[o] ? a[o].replace(/&\f/g, s[h]) : s[h] + " " + a[o]
            }
          }
        },
        ge = function(e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
          }
        };

      function be(e, t) {
        switch (function(e, t) {
            return 45 ^ w(e, 0) ? (((t << 2 ^ w(e, 0)) << 2 ^ w(e, 1)) << 2 ^ w(e, 2)) << 2 ^ w(e, 3) : 0
          }(e, t)) {
          case 5103:
            return ne + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return ne + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return ne + e + re + e + te + e + e;
          case 6828:
          case 4268:
            return ne + e + te + e + e;
          case 6165:
            return ne + e + te + "flex-" + e + e;
          case 5187:
            return ne + e + M(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + te + "flex-$1$2") + e;
          case 5443:
            return ne + e + te + "flex-item-" + M(e, /flex-|-self/, "") + e;
          case 4675:
            return ne + e + te + "flex-line-pack" + M(e, /align-content|flex-|-self/, "") + e;
          case 5548:
            return ne + e + te + M(e, "shrink", "negative") + e;
          case 5292:
            return ne + e + te + M(e, "basis", "preferred-size") + e;
          case 6060:
            return ne + "box-" + M(e, "-grow", "") + ne + e + te + M(e, "grow", "positive") + e;
          case 4554:
            return ne + M(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
          case 6187:
            return M(M(M(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return M(e, /(image-set\([^]*)/, ne + "$1$`$1");
          case 4968:
            return M(M(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + e + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return M(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (k(e) - 1 - t > 6) switch (w(e, t + 1)) {
              case 109:
                if (45 !== w(e, t + 4)) break;
              case 102:
                return M(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + re + (108 == w(e, t + 3) ? "$3" : "$2-$3")) + e;
              case 115:
                return ~_(e, "stretch") ? be(M(e, "stretch", "fill-available"), t) + e : e
            }
            break;
          case 4949:
            if (115 !== w(e, t + 1)) break;
          case 6444:
            switch (w(e, k(e) - 3 - (~_(e, "!important") && 10))) {
              case 107:
                return M(e, ":", ":" + ne) + e;
              case 101:
                return M(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ne + (45 === w(e, 14) ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + te + "$2box$3") + e
            }
            break;
          case 5936:
            switch (w(e, t + 11)) {
              case 114:
                return ne + e + te + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return ne + e + te + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return ne + e + te + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return ne + e + te + e + e
        }
        return e
      }
      var Se = [function(e, t, r, n) {
          if (e.length > -1 && !e.return) switch (e.type) {
            case se:
              e.return = be(e.value, e.length);
              break;
            case oe:
              return le([z(e, {
                value: M(e.value, "@", "@" + ne)
              })], n);
            case ae:
              if (e.length) return function(e, t) {
                return e.map(t).join("")
              }(e.props, (function(t) {
                switch (function(e, t) {
                    return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e
                  }(t)) {
                  case ":read-only":
                  case ":read-write":
                    return le([z(e, {
                      props: [M(t, /:(read-\w+)/, ":-moz-$1")]
                    })], n);
                  case "::placeholder":
                    return le([z(e, {
                      props: [M(t, /:(plac\w+)/, ":" + ne + "input-$1")]
                    }), z(e, {
                      props: [M(t, /:(plac\w+)/, ":-moz-$1")]
                    }), z(e, {
                      props: [M(t, /:(plac\w+)/, te + "input-$1")]
                    })], n)
                }
                return ""
              }))
          }
        }],
        xe = function(e) {
          var t = e.key;
          if ("css" === t) {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, (function(e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
            }))
          }
          var n, i, a = e.stylisPlugins || Se,
            s = {},
            o = [];
          n = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
            for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) s[t[r]] = !0;
            o.push(e)
          }));
          var l, h, u, c, p = [he, (c = function(e) {
              l.insert(e)
            }, function(e) {
              e.root || (e = e.return) && c(e)
            })],
            f = (h = [ve, ge].concat(a, p), u = D(h), function(e, t, r, n) {
              for (var i = "", a = 0; a < u; a++) i += h[a](e, t, r, n) || "";
              return i
            });
          i = function(e, t, r, n) {
            l = r, le(ue(e ? e + "{" + t.styles + "}" : t.styles), f), n && (d.inserted[t.name] = !0)
          };
          var d = {
            key: t,
            sheet: new x({
              key: t,
              container: n,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: i
          };
          return d.sheet.hydrate(o), d
        },
        Ee = function(e, t, r) {
          var n = e.key + "-" + t.name;
          !1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles)
        },
        Pe = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };

      function Ce(e) {
        var t = Object.create(null);
        return function(r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r]
        }
      }
      var Te = /[A-Z]|^ms/g,
        Me = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        _e = function(e) {
          return 45 === e.charCodeAt(1)
        },
        we = function(e) {
          return null != e && "boolean" != typeof e
        },
        Ae = Ce((function(e) {
          return _e(e) ? e : e.replace(Te, "-$&").toLowerCase()
        })),
        ke = function(e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t) return t.replace(Me, (function(e, t, r) {
                return Ie = {
                  name: t,
                  styles: r,
                  next: Ie
                }, t
              }))
          }
          return 1 === Pe[e] || _e(e) || "number" != typeof t || 0 === t ? t : t + "px"
        };

      function De(e, t, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim) return Ie = {
              name: r.name,
              styles: r.styles,
              next: Ie
            }, r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n;) Ie = {
                  name: n.name,
                  styles: n.styles,
                  next: Ie
                }, n = n.next;
              return r.styles + ";"
            }
            return function(e, t, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += De(e, t, r[i]) + ";";
              else
                for (var a in r) {
                  var s = r[a];
                  if ("object" != typeof s) null != t && void 0 !== t[s] ? n += a + "{" + t[s] + "}" : we(s) && (n += Ae(a) + ":" + ke(a, s) + ";");
                  else if (!Array.isArray(s) || "string" != typeof s[0] || null != t && void 0 !== t[s[0]]) {
                    var o = De(e, t, s);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        n += Ae(a) + ":" + o + ";";
                        break;
                      default:
                        n += a + "{" + o + "}"
                    }
                  } else
                    for (var l = 0; l < s.length; l++) we(s[l]) && (n += Ae(a) + ":" + ke(a, s[l]) + ";")
                }
              return n
            }(e, t, r);
          case "function":
            if (void 0 !== e) {
              var i = Ie,
                a = r(e);
              return Ie = i, De(e, t, a)
            }
        }
        if (null == t) return r;
        var s = t[r];
        return void 0 !== s ? s : r
      }
      var Ie, Fe = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Oe = function(e, t, r) {
          if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
          var n = !0,
            i = "";
          Ie = void 0;
          var a = e[0];
          null == a || void 0 === a.raw ? (n = !1, i += De(r, t, a)) : i += a[0];
          for (var s = 1; s < e.length; s++) i += De(r, t, e[s]), n && (i += a[s]);
          Fe.lastIndex = 0;
          for (var o, l = ""; null !== (o = Fe.exec(i));) l += "-" + o[1];
          var h = function(e) {
            for (var t, r = 0, n = 0, i = e.length; i >= 4; ++n, i -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) + (59797 * (t >>> 16) << 16), r = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & r) + (59797 * (r >>> 16) << 16);
            switch (i) {
              case 3:
                r ^= (255 & e.charCodeAt(n + 2)) << 16;
              case 2:
                r ^= (255 & e.charCodeAt(n + 1)) << 8;
              case 1:
                r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) + (59797 * (r >>> 16) << 16)
            }
            return (((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (59797 * (r >>> 16) << 16)) ^ r >>> 15) >>> 0).toString(36)
          }(i) + l;
          return {
            name: h,
            styles: i,
            next: Ie
          }
        },
        Re = !!c.useInsertionEffect && c.useInsertionEffect,
        Le = Re || function(e) {
          return e()
        },
        Ve = (Re || c.useLayoutEffect, {}.hasOwnProperty),
        Be = c.createContext("undefined" != typeof HTMLElement ? xe({
          key: "css"
        }) : null);
      Be.Provider;
      var Ne = function(e) {
          return (0, c.forwardRef)((function(t, r) {
            var n = (0, c.useContext)(Be);
            return e(t, n, r)
          }))
        },
        ze = c.createContext({}),
        Ge = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        je = function(e) {
          var t = e.cache,
            r = e.serialized,
            n = e.isStringTag;
          return Ee(t, r, n), Le((function() {
            return function(e, t, r) {
              Ee(e, t, r);
              var n = e.key + "-" + t.name;
              if (void 0 === e.inserted[t.name]) {
                var i = t;
                do {
                  e.insert(t === i ? "." + n : "", i, e.sheet, !0), i = i.next
                } while (void 0 !== i)
              }
            }(t, r, n)
          })), null
        },
        He = Ne((function(e, t, r) {
          var n = e.css;
          "string" == typeof n && void 0 !== t.registered[n] && (n = t.registered[n]);
          var i = e[Ge],
            a = [n],
            s = "";
          "string" == typeof e.className ? s = function(e, t, r) {
            var n = "";
            return r.split(" ").forEach((function(r) {
              void 0 !== e[r] ? t.push(e[r] + ";") : n += r + " "
            })), n
          }(t.registered, a, e.className) : null != e.className && (s = e.className + " ");
          var o = Oe(a, void 0, c.useContext(ze));
          s += t.key + "-" + o.name;
          var l = {};
          for (var h in e) Ve.call(e, h) && "css" !== h && h !== Ge && (l[h] = e[h]);
          return l.ref = r, l.className = s, c.createElement(c.Fragment, null, c.createElement(je, {
            cache: t,
            serialized: o,
            isStringTag: "string" == typeof i
          }), c.createElement(i, l))
        })),
        We = He,
        Ue = (r(39216), function(e, t) {
          var r = arguments;
          if (null == t || !Ve.call(t, "css")) return c.createElement.apply(void 0, r);
          var n = r.length,
            i = new Array(n);
          i[0] = We, i[1] = function(e, t) {
            var r = {};
            for (var n in t) Ve.call(t, n) && (r[n] = t[n]);
            return r[Ge] = e, r
          }(e, t);
          for (var a = 2; a < n; a++) i[a] = r[a];
          return c.createElement.apply(null, i)
        });

      function qe() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return Oe(t)
      }
      var $e = r(77364);
      const Ye = Math.min,
        Ke = Math.max,
        Xe = Math.round,
        Ze = Math.floor,
        Je = e => ({
          x: e,
          y: e
        });

      function Qe(e) {
        return rt(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function et(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function tt(e) {
        var t;
        return null == (t = (rt(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function rt(e) {
        return e instanceof Node || e instanceof et(e).Node
      }

      function nt(e) {
        return e instanceof Element || e instanceof et(e).Element
      }

      function it(e) {
        return e instanceof HTMLElement || e instanceof et(e).HTMLElement
      }

      function at(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof et(e).ShadowRoot)
      }

      function st(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: n,
          display: i
        } = ot(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i)
      }

      function ot(e) {
        return et(e).getComputedStyle(e)
      }

      function lt(e) {
        const t = function(e) {
          if ("html" === Qe(e)) return e;
          const t = e.assignedSlot || e.parentNode || at(e) && e.host || tt(e);
          return at(t) ? t.host : t
        }(e);
        return function(e) {
          return ["html", "body", "#document"].includes(Qe(e))
        }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : it(t) && st(t) ? t : lt(t)
      }

      function ht(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const i = lt(e),
          a = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          s = et(i);
        return a ? t.concat(s, s.visualViewport || [], st(i) ? i : [], s.frameElement && r ? ht(s.frameElement) : []) : t.concat(i, ht(i, [], r))
      }

      function ut(e) {
        return nt(e) ? e : e.contextElement
      }

      function ct(e) {
        const t = ut(e);
        if (!it(t)) return Je(1);
        const r = t.getBoundingClientRect(),
          {
            width: n,
            height: i,
            $: a
          } = function(e) {
            const t = ot(e);
            let r = parseFloat(t.width) || 0,
              n = parseFloat(t.height) || 0;
            const i = it(e),
              a = i ? e.offsetWidth : r,
              s = i ? e.offsetHeight : n,
              o = Xe(r) !== a || Xe(n) !== s;
            return o && (r = a, n = s), {
              width: r,
              height: n,
              $: o
            }
          }(t);
        let s = (a ? Xe(r.width) : r.width) / n,
          o = (a ? Xe(r.height) : r.height) / i;
        return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), {
          x: s,
          y: o
        }
      }
      const pt = Je(0);

      function ft(e) {
        const t = et(e);
        return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : pt
      }

      function dt(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const i = e.getBoundingClientRect(),
          a = ut(e);
        let s = Je(1);
        t && (n ? nt(n) && (s = ct(n)) : s = ct(e));
        const o = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== et(e)) && t
        }(a, r, n) ? ft(a) : Je(0);
        let l = (i.left + o.x) / s.x,
          h = (i.top + o.y) / s.y,
          u = i.width / s.x,
          c = i.height / s.y;
        if (a) {
          const e = et(a),
            t = n && nt(n) ? et(n) : n;
          let r = e.frameElement;
          for (; r && n && t !== e;) {
            const e = ct(r),
              t = r.getBoundingClientRect(),
              n = ot(r),
              i = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
              a = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
            l *= e.x, h *= e.y, u *= e.x, c *= e.y, l += i, h += a, r = et(r).frameElement
          }
        }
        return p = {
          width: u,
          height: c,
          x: l,
          y: h
        }, {
          ...p,
          top: p.y,
          left: p.x,
          right: p.x + p.width,
          bottom: p.y + p.height
        };
        var p
      }
      const mt = c.useLayoutEffect;
      var yt = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
        vt = function() {};

      function gt(e, t) {
        return t ? "-" === t[0] ? e + t : e + "__" + t : e
      }

      function bt(e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        var a = [].concat(n);
        if (t && e)
          for (var s in t) t.hasOwnProperty(s) && t[s] && a.push("".concat(gt(e, s)));
        return a.filter((function(e) {
          return e
        })).map((function(e) {
          return String(e).trim()
        })).join(" ")
      }
      var St = function(e) {
          return t = e, Array.isArray(t) ? e.filter(Boolean) : "object" === (0, g.c)(e) && null !== e ? [e] : [];
          var t
        },
        xt = function(e) {
          return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, a({}, u(e, yt))
        },
        Et = function(e, t, r) {
          var n = e.cx,
            i = e.getStyles,
            a = e.getClassNames,
            s = e.className;
          return {
            css: i(t, e),
            className: n(null != r ? r : {}, a(t, e), s)
          }
        };

      function Pt(e) {
        return [document.documentElement, document.body, window].indexOf(e) > -1
      }

      function Ct(e) {
        return Pt(e) ? window.pageYOffset : e.scrollTop
      }

      function Tt(e, t) {
        Pt(e) ? window.scrollTo(0, t) : e.scrollTop = t
      }

      function Mt(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vt,
          i = Ct(e),
          a = t - i,
          s = 0;
        ! function t() {
          var o, l = a * ((o = (o = s += 10) / r - 1) * o * o + 1) + i;
          Tt(e, l), s < r ? window.requestAnimationFrame(t) : n(e)
        }()
      }

      function _t(e, t) {
        var r = e.getBoundingClientRect(),
          n = t.getBoundingClientRect(),
          i = t.offsetHeight / 3;
        n.bottom + i > r.bottom ? Tt(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : n.top - i < r.top && Tt(e, Math.max(t.offsetTop - i, 0))
      }

      function wt() {
        try {
          return document.createEvent("TouchEvent"), !0
        } catch (e) {
          return !1
        }
      }
      var At = !1,
        kt = {
          get passive() {
            return At = !0
          }
        },
        Dt = "undefined" != typeof window ? window : {};
      Dt.addEventListener && Dt.removeEventListener && (Dt.addEventListener("p", vt, kt), Dt.removeEventListener("p", vt, !1));
      var It = At;

      function Ft(e) {
        return null != e
      }

      function Ot(e, t, r) {
        return e ? t : r
      }
      var Rt = ["children", "innerProps"],
        Lt = ["children", "innerProps"];
      var Vt, Bt, Nt, zt = function(e) {
          return "auto" === e ? "bottom" : e
        },
        Gt = (0, c.createContext)(null),
        jt = function(e) {
          var t = e.children,
            r = e.minMenuHeight,
            n = e.maxMenuHeight,
            i = e.menuPlacement,
            s = e.menuPosition,
            o = e.menuShouldScrollIntoView,
            h = e.theme,
            u = ((0, c.useContext)(Gt) || {}).setPortalPlacement,
            p = (0, c.useRef)(null),
            f = l((0, c.useState)(n), 2),
            d = f[0],
            m = f[1],
            y = l((0, c.useState)(null), 2),
            v = y[0],
            g = y[1],
            b = h.spacing.controlHeight;
          return mt((function() {
            var e = p.current;
            if (e) {
              var t = "fixed" === s,
                a = function(e) {
                  var t = e.maxHeight,
                    r = e.menuEl,
                    n = e.minHeight,
                    i = e.placement,
                    a = e.shouldScroll,
                    s = e.isFixedPosition,
                    o = e.controlHeight,
                    l = function(e) {
                      var t = getComputedStyle(e),
                        r = "absolute" === t.position,
                        n = /(auto|scroll)/;
                      if ("fixed" === t.position) return document.documentElement;
                      for (var i = e; i = i.parentElement;)
                        if (t = getComputedStyle(i), (!r || "static" !== t.position) && n.test(t.overflow + t.overflowY + t.overflowX)) return i;
                      return document.documentElement
                    }(r),
                    h = {
                      placement: "bottom",
                      maxHeight: t
                    };
                  if (!r || !r.offsetParent) return h;
                  var u, c = l.getBoundingClientRect().height,
                    p = r.getBoundingClientRect(),
                    f = p.bottom,
                    d = p.height,
                    m = p.top,
                    y = r.offsetParent.getBoundingClientRect().top,
                    v = s || Pt(u = l) ? window.innerHeight : u.clientHeight,
                    g = Ct(l),
                    b = parseInt(getComputedStyle(r).marginBottom, 10),
                    S = parseInt(getComputedStyle(r).marginTop, 10),
                    x = y - S,
                    E = v - m,
                    P = x + g,
                    C = c - g - m,
                    T = f - v + g + b,
                    M = g + m - S,
                    _ = 160;
                  switch (i) {
                    case "auto":
                    case "bottom":
                      if (E >= d) return {
                        placement: "bottom",
                        maxHeight: t
                      };
                      if (C >= d && !s) return a && Mt(l, T, _), {
                        placement: "bottom",
                        maxHeight: t
                      };
                      if (!s && C >= n || s && E >= n) return a && Mt(l, T, _), {
                        placement: "bottom",
                        maxHeight: s ? E - b : C - b
                      };
                      if ("auto" === i || s) {
                        var w = t,
                          A = s ? x : P;
                        return A >= n && (w = Math.min(A - b - o, t)), {
                          placement: "top",
                          maxHeight: w
                        }
                      }
                      if ("bottom" === i) return a && Tt(l, T), {
                        placement: "bottom",
                        maxHeight: t
                      };
                      break;
                    case "top":
                      if (x >= d) return {
                        placement: "top",
                        maxHeight: t
                      };
                      if (P >= d && !s) return a && Mt(l, M, _), {
                        placement: "top",
                        maxHeight: t
                      };
                      if (!s && P >= n || s && x >= n) {
                        var k = t;
                        return (!s && P >= n || s && x >= n) && (k = s ? x - S : P - S), a && Mt(l, M, _), {
                          placement: "top",
                          maxHeight: k
                        }
                      }
                      return {
                        placement: "bottom", maxHeight: t
                      };
                    default:
                      throw new Error('Invalid placement provided "'.concat(i, '".'))
                  }
                  return h
                }({
                  maxHeight: n,
                  menuEl: e,
                  minHeight: r,
                  placement: i,
                  shouldScroll: o && !t,
                  isFixedPosition: t,
                  controlHeight: b
                });
              m(a.maxHeight), g(a.placement), null == u || u(a.placement)
            }
          }), [n, i, s, o, r, u, b]), t({
            ref: p,
            placerProps: a(a({}, e), {}, {
              placement: v || zt(i),
              maxHeight: d
            })
          })
        },
        Ht = function(e, t) {
          var r = e.theme,
            n = r.spacing.baseUnit,
            i = r.colors;
          return a({
            textAlign: "center"
          }, t ? {} : {
            color: i.neutral40,
            padding: "".concat(2 * n, "px ").concat(3 * n, "px")
          })
        },
        Wt = Ht,
        Ut = Ht,
        qt = ["size"],
        $t = ["innerProps", "isRtl", "size"],
        Yt = {
          name: "8mmkcg",
          styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
        },
        Kt = function(e) {
          var t = e.size,
            r = u(e, qt);
          return Ue("svg", (0, f.c)({
            height: t,
            width: t,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: Yt
          }, r))
        },
        Xt = function(e) {
          return Ue(Kt, (0, f.c)({
            size: 20
          }, e), Ue("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
          }))
        },
        Zt = function(e) {
          return Ue(Kt, (0, f.c)({
            size: 20
          }, e), Ue("path", {
            d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
          }))
        },
        Jt = function(e, t) {
          var r = e.isFocused,
            n = e.theme,
            i = n.spacing.baseUnit,
            s = n.colors;
          return a({
            label: "indicatorContainer",
            display: "flex",
            transition: "color 150ms"
          }, t ? {} : {
            color: r ? s.neutral60 : s.neutral20,
            padding: 2 * i,
            ":hover": {
              color: r ? s.neutral80 : s.neutral40
            }
          })
        },
        Qt = Jt,
        er = Jt,
        tr = function() {
          var e = qe.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function() {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
          }
        }(Vt || (Bt = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Nt || (Nt = Bt.slice(0)), Vt = Object.freeze(Object.defineProperties(Bt, {
          raw: {
            value: Object.freeze(Nt)
          }
        })))),
        rr = function(e) {
          var t = e.delay,
            r = e.offset;
          return Ue("span", {
            css: qe({
              animation: "".concat(tr, " 1s ease-in-out ").concat(t, "ms infinite;"),
              backgroundColor: "currentColor",
              borderRadius: "1em",
              display: "inline-block",
              marginLeft: r ? "1em" : void 0,
              height: "1em",
              verticalAlign: "top",
              width: "1em"
            }, "", "")
          })
        },
        nr = ["data"],
        ir = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        ar = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0
        },
        sr = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": a({
            content: 'attr(data-value) " "',
            visibility: "hidden",
            whiteSpace: "pre"
          }, ar)
        },
        or = function(e) {
          return a({
            label: "input",
            color: "inherit",
            background: 0,
            opacity: e ? 0 : 1,
            width: "100%"
          }, ar)
        },
        lr = function(e) {
          var t = e.children,
            r = e.innerProps;
          return Ue("div", r, t)
        },
        hr = {
          ClearIndicator: function(e) {
            var t = e.children,
              r = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "clearIndicator", {
              indicator: !0,
              "clear-indicator": !0
            }), r), t || Ue(Xt, null))
          },
          Control: function(e) {
            var t = e.children,
              r = e.isDisabled,
              n = e.isFocused,
              i = e.innerRef,
              a = e.innerProps,
              s = e.menuIsOpen;
            return Ue("div", (0, f.c)({
              ref: i
            }, Et(e, "control", {
              control: !0,
              "control--is-disabled": r,
              "control--is-focused": n,
              "control--menu-is-open": s
            }), a, {
              "aria-disabled": r || void 0
            }), t)
          },
          DropdownIndicator: function(e) {
            var t = e.children,
              r = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0
            }), r), t || Ue(Zt, null))
          },
          DownChevron: Zt,
          CrossIcon: Xt,
          Group: function(e) {
            var t = e.children,
              r = e.cx,
              n = e.getStyles,
              i = e.getClassNames,
              a = e.Heading,
              s = e.headingProps,
              o = e.innerProps,
              l = e.label,
              h = e.theme,
              u = e.selectProps;
            return Ue("div", (0, f.c)({}, Et(e, "group", {
              group: !0
            }), o), Ue(a, (0, f.c)({}, s, {
              selectProps: u,
              theme: h,
              getStyles: n,
              getClassNames: i,
              cx: r
            }), l), Ue("div", null, t))
          },
          GroupHeading: function(e) {
            var t = xt(e);
            t.data;
            var r = u(t, nr);
            return Ue("div", (0, f.c)({}, Et(e, "groupHeading", {
              "group-heading": !0
            }), r))
          },
          IndicatorsContainer: function(e) {
            var t = e.children,
              r = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "indicatorsContainer", {
              indicators: !0
            }), r), t)
          },
          IndicatorSeparator: function(e) {
            var t = e.innerProps;
            return Ue("span", (0, f.c)({}, t, Et(e, "indicatorSeparator", {
              "indicator-separator": !0
            })))
          },
          Input: function(e) {
            var t = e.cx,
              r = e.value,
              n = xt(e),
              i = n.innerRef,
              a = n.isDisabled,
              s = n.isHidden,
              o = n.inputClassName,
              l = u(n, ir);
            return Ue("div", (0, f.c)({}, Et(e, "input", {
              "input-container": !0
            }), {
              "data-value": r || ""
            }), Ue("input", (0, f.c)({
              className: t({
                input: !0
              }, o),
              ref: i,
              style: or(s),
              disabled: a
            }, l)))
          },
          LoadingIndicator: function(e) {
            var t = e.innerProps,
              r = e.isRtl,
              n = e.size,
              i = void 0 === n ? 4 : n,
              s = u(e, $t);
            return Ue("div", (0, f.c)({}, Et(a(a({}, s), {}, {
              innerProps: t,
              isRtl: r,
              size: i
            }), "loadingIndicator", {
              indicator: !0,
              "loading-indicator": !0
            }), t), Ue(rr, {
              delay: 0,
              offset: r
            }), Ue(rr, {
              delay: 160,
              offset: !0
            }), Ue(rr, {
              delay: 320,
              offset: !r
            }))
          },
          Menu: function(e) {
            var t = e.children,
              r = e.innerRef,
              n = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "menu", {
              menu: !0
            }), {
              ref: r
            }, n), t)
          },
          MenuList: function(e) {
            var t = e.children,
              r = e.innerProps,
              n = e.innerRef,
              i = e.isMulti;
            return Ue("div", (0, f.c)({}, Et(e, "menuList", {
              "menu-list": !0,
              "menu-list--is-multi": i
            }), {
              ref: n
            }, r), t)
          },
          MenuPortal: function(e) {
            var t = e.appendTo,
              r = e.children,
              n = e.controlElement,
              i = e.innerProps,
              s = e.menuPlacement,
              o = e.menuPosition,
              h = (0, c.useRef)(null),
              u = (0, c.useRef)(null),
              p = l((0, c.useState)(zt(s)), 2),
              d = p[0],
              m = p[1],
              y = (0, c.useMemo)((function() {
                return {
                  setPortalPlacement: m
                }
              }), []),
              v = l((0, c.useState)(null), 2),
              g = v[0],
              b = v[1],
              S = (0, c.useCallback)((function() {
                if (n) {
                  var e = function(e) {
                      var t = e.getBoundingClientRect();
                      return {
                        bottom: t.bottom,
                        height: t.height,
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        width: t.width
                      }
                    }(n),
                    t = "fixed" === o ? 0 : window.pageYOffset,
                    r = e[d] + t;
                  r === (null == g ? void 0 : g.offset) && e.left === (null == g ? void 0 : g.rect.left) && e.width === (null == g ? void 0 : g.rect.width) || b({
                    offset: r,
                    rect: e
                  })
                }
              }), [n, o, d, null == g ? void 0 : g.offset, null == g ? void 0 : g.rect.left, null == g ? void 0 : g.rect.width]);
            mt((function() {
              S()
            }), [S]);
            var x = (0, c.useCallback)((function() {
              "function" == typeof u.current && (u.current(), u.current = null), n && h.current && (u.current = function(e, t, r, n) {
                void 0 === n && (n = {});
                const {
                  ancestorScroll: i = !0,
                  ancestorResize: a = !0,
                  elementResize: s = "function" == typeof ResizeObserver,
                  layoutShift: o = "function" == typeof IntersectionObserver,
                  animationFrame: l = !1
                } = n, h = ut(e), u = i || a ? [...h ? ht(h) : [], ...ht(t)] : [];
                u.forEach((e => {
                  i && e.addEventListener("scroll", r, {
                    passive: !0
                  }), a && e.addEventListener("resize", r)
                }));
                const c = h && o ? function(e, t) {
                  let r, n = null;
                  const i = tt(e);

                  function a() {
                    clearTimeout(r), n && n.disconnect(), n = null
                  }
                  return function s(o, l) {
                    void 0 === o && (o = !1), void 0 === l && (l = 1), a();
                    const {
                      left: h,
                      top: u,
                      width: c,
                      height: p
                    } = e.getBoundingClientRect();
                    if (o || t(), !c || !p) return;
                    const f = {
                      rootMargin: -Ze(u) + "px " + -Ze(i.clientWidth - (h + c)) + "px " + -Ze(i.clientHeight - (u + p)) + "px " + -Ze(h) + "px",
                      threshold: Ke(0, Ye(1, l)) || 1
                    };
                    let d = !0;

                    function m(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== l) {
                        if (!d) return s();
                        t ? s(!1, t) : r = setTimeout((() => {
                          s(!1, 1e-7)
                        }), 100)
                      }
                      d = !1
                    }
                    try {
                      n = new IntersectionObserver(m, {
                        ...f,
                        root: i.ownerDocument
                      })
                    } catch (e) {
                      n = new IntersectionObserver(m, f)
                    }
                    n.observe(e)
                  }(!0), a
                }(h, r) : null;
                let p, f = -1,
                  d = null;
                s && (d = new ResizeObserver((e => {
                  let [n] = e;
                  n && n.target === h && d && (d.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                    d && d.observe(t)
                  }))), r()
                })), h && !l && d.observe(h), d.observe(t));
                let m = l ? dt(e) : null;
                return l && function t() {
                  const n = dt(e);
                  !m || n.x === m.x && n.y === m.y && n.width === m.width && n.height === m.height || r(), m = n, p = requestAnimationFrame(t)
                }(), r(), () => {
                  u.forEach((e => {
                    i && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                  })), c && c(), d && d.disconnect(), d = null, l && cancelAnimationFrame(p)
                }
              }(n, h.current, S, {
                elementResize: "ResizeObserver" in window
              }))
            }), [n, S]);
            mt((function() {
              x()
            }), [x]);
            var E = (0, c.useCallback)((function(e) {
              h.current = e, x()
            }), [x]);
            if (!t && "fixed" !== o || !g) return null;
            var P = Ue("div", (0, f.c)({
              ref: E
            }, Et(a(a({}, e), {}, {
              offset: g.offset,
              position: o,
              rect: g.rect
            }), "menuPortal", {
              "menu-portal": !0
            }), i), r);
            return Ue(Gt.Provider, {
              value: y
            }, t ? (0, $e.createPortal)(P, t) : P)
          },
          LoadingMessage: function(e) {
            var t = e.children,
              r = void 0 === t ? "Loading..." : t,
              n = e.innerProps,
              i = u(e, Lt);
            return Ue("div", (0, f.c)({}, Et(a(a({}, i), {}, {
              children: r,
              innerProps: n
            }), "loadingMessage", {
              "menu-notice": !0,
              "menu-notice--loading": !0
            }), n), r)
          },
          NoOptionsMessage: function(e) {
            var t = e.children,
              r = void 0 === t ? "No options" : t,
              n = e.innerProps,
              i = u(e, Rt);
            return Ue("div", (0, f.c)({}, Et(a(a({}, i), {}, {
              children: r,
              innerProps: n
            }), "noOptionsMessage", {
              "menu-notice": !0,
              "menu-notice--no-options": !0
            }), n), r)
          },
          MultiValue: function(e) {
            var t = e.children,
              r = e.components,
              n = e.data,
              i = e.innerProps,
              s = e.isDisabled,
              o = e.removeProps,
              l = e.selectProps,
              h = r.Container,
              u = r.Label,
              c = r.Remove;
            return Ue(h, {
              data: n,
              innerProps: a(a({}, Et(e, "multiValue", {
                "multi-value": !0,
                "multi-value--is-disabled": s
              })), i),
              selectProps: l
            }, Ue(u, {
              data: n,
              innerProps: a({}, Et(e, "multiValueLabel", {
                "multi-value__label": !0
              })),
              selectProps: l
            }, t), Ue(c, {
              data: n,
              innerProps: a(a({}, Et(e, "multiValueRemove", {
                "multi-value__remove": !0
              })), {}, {
                "aria-label": "Remove ".concat(t || "option")
              }, o),
              selectProps: l
            }))
          },
          MultiValueContainer: lr,
          MultiValueLabel: lr,
          MultiValueRemove: function(e) {
            var t = e.children,
              r = e.innerProps;
            return Ue("div", (0, f.c)({
              role: "button"
            }, r), t || Ue(Xt, {
              size: 14
            }))
          },
          Option: function(e) {
            var t = e.children,
              r = e.isDisabled,
              n = e.isFocused,
              i = e.isSelected,
              a = e.innerRef,
              s = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "option", {
              option: !0,
              "option--is-disabled": r,
              "option--is-focused": n,
              "option--is-selected": i
            }), {
              ref: a,
              "aria-disabled": r
            }, s), t)
          },
          Placeholder: function(e) {
            var t = e.children,
              r = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "placeholder", {
              placeholder: !0
            }), r), t)
          },
          SelectContainer: function(e) {
            var t = e.children,
              r = e.innerProps,
              n = e.isDisabled,
              i = e.isRtl;
            return Ue("div", (0, f.c)({}, Et(e, "container", {
              "--is-disabled": n,
              "--is-rtl": i
            }), r), t)
          },
          SingleValue: function(e) {
            var t = e.children,
              r = e.isDisabled,
              n = e.innerProps;
            return Ue("div", (0, f.c)({}, Et(e, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": r
            }), n), t)
          },
          ValueContainer: function(e) {
            var t = e.children,
              r = e.innerProps,
              n = e.isMulti,
              i = e.hasValue;
            return Ue("div", (0, f.c)({}, Et(e, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": n,
              "value-container--has-value": i
            }), r), t)
          }
        },
        ur = Number.isNaN || function(e) {
          return "number" == typeof e && e != e
        };

      function cr(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (!((n = e[r]) === (i = t[r]) || ur(n) && ur(i))) return !1;
        var n, i;
        return !0
      }
      for (var pr = {
          name: "7pg0cj-a11yText",
          styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
        }, fr = function(e) {
          return Ue("span", (0, f.c)({
            css: pr
          }, e))
        }, dr = {
          guidance: function(e) {
            var t = e.isSearchable,
              r = e.isMulti,
              n = e.isDisabled,
              i = e.tabSelectsValue;
            switch (e.context) {
              case "menu":
                return "Use Up and Down to choose options".concat(n ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
              case "input":
                return "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
              case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
              default:
                return ""
            }
          },
          onChange: function(e) {
            var t = e.action,
              r = e.label,
              n = void 0 === r ? "" : r,
              i = e.labels,
              a = e.isDisabled;
            switch (t) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(n, ", deselected.");
              case "clear":
                return "All selected options have been cleared.";
              case "initial-input-focus":
                return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
              case "select-option":
                return "option ".concat(n, a ? " is disabled. Select another option." : ", selected.");
              default:
                return ""
            }
          },
          onFocus: function(e) {
            var t = e.context,
              r = e.focused,
              n = e.options,
              i = e.label,
              a = void 0 === i ? "" : i,
              s = e.selectValue,
              o = e.isDisabled,
              l = e.isSelected,
              h = function(e, t) {
                return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : ""
              };
            if ("value" === t && s) return "value ".concat(a, " focused, ").concat(h(s, r), ".");
            if ("menu" === t) {
              var u = o ? " disabled" : "",
                c = "".concat(l ? "selected" : "focused").concat(u);
              return "option ".concat(a, " ").concat(c, ", ").concat(h(n, r), ".")
            }
            return ""
          },
          onFilter: function(e) {
            var t = e.inputValue,
              r = e.resultsMessage;
            return "".concat(r).concat(t ? " for search term " + t : "", ".")
          }
        }, mr = function(e) {
          var t = e.ariaSelection,
            r = e.focusedOption,
            n = e.focusedValue,
            i = e.focusableOptions,
            s = e.isFocused,
            o = e.selectValue,
            l = e.selectProps,
            h = e.id,
            u = l.ariaLiveMessages,
            p = l.getOptionLabel,
            f = l.inputValue,
            d = l.isMulti,
            m = l.isOptionDisabled,
            y = l.isSearchable,
            v = l.menuIsOpen,
            g = l.options,
            b = l.screenReaderStatus,
            S = l.tabSelectsValue,
            x = l["aria-label"],
            E = l["aria-live"],
            P = (0, c.useMemo)((function() {
              return a(a({}, dr), u || {})
            }), [u]),
            C = (0, c.useMemo)((function() {
              var e, r = "";
              if (t && P.onChange) {
                var n = t.option,
                  i = t.options,
                  s = t.removedValue,
                  l = t.removedValues,
                  h = t.value,
                  u = s || n || (e = h, Array.isArray(e) ? null : e),
                  c = u ? p(u) : "",
                  f = i || l || void 0,
                  d = f ? f.map(p) : [],
                  y = a({
                    isDisabled: u && m(u, o),
                    label: c,
                    labels: d
                  }, t);
                r = P.onChange(y)
              }
              return r
            }), [t, P, m, o, p]),
            T = (0, c.useMemo)((function() {
              var e = "",
                t = r || n,
                a = !!(r && o && o.includes(r));
              if (t && P.onFocus) {
                var s = {
                  focused: t,
                  label: p(t),
                  isDisabled: m(t, o),
                  isSelected: a,
                  options: i,
                  context: t === r ? "menu" : "value",
                  selectValue: o
                };
                e = P.onFocus(s)
              }
              return e
            }), [r, n, p, m, P, i, o]),
            M = (0, c.useMemo)((function() {
              var e = "";
              if (v && g.length && P.onFilter) {
                var t = b({
                  count: i.length
                });
                e = P.onFilter({
                  inputValue: f,
                  resultsMessage: t
                })
              }
              return e
            }), [i, f, v, P, g, b]),
            _ = (0, c.useMemo)((function() {
              var e = "";
              if (P.guidance) {
                var t = n ? "value" : v ? "menu" : "input";
                e = P.guidance({
                  "aria-label": x,
                  context: t,
                  isDisabled: r && m(r, o),
                  isMulti: d,
                  isSearchable: y,
                  tabSelectsValue: S
                })
              }
              return e
            }), [x, r, n, d, m, y, v, P, o, S]),
            w = "".concat(T, " ").concat(M, " ").concat(_),
            A = Ue(c.Fragment, null, Ue("span", {
              id: "aria-selection"
            }, C), Ue("span", {
              id: "aria-context"
            }, w)),
            k = "initial-input-focus" === (null == t ? void 0 : t.action);
          return Ue(c.Fragment, null, Ue(fr, {
            id: h
          }, k && A), Ue(fr, {
            "aria-live": E,
            "aria-atomic": "false",
            "aria-relevant": "additions text"
          }, s && !k && A))
        }, yr = [{
          base: "A",
          letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
        }, {
          base: "AA",
          letters: "Ꜳ"
        }, {
          base: "AE",
          letters: "ÆǼǢ"
        }, {
          base: "AO",
          letters: "Ꜵ"
        }, {
          base: "AU",
          letters: "Ꜷ"
        }, {
          base: "AV",
          letters: "ꜸꜺ"
        }, {
          base: "AY",
          letters: "Ꜽ"
        }, {
          base: "B",
          letters: "BⒷＢḂḄḆɃƂƁ"
        }, {
          base: "C",
          letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
        }, {
          base: "D",
          letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
        }, {
          base: "DZ",
          letters: "ǱǄ"
        }, {
          base: "Dz",
          letters: "ǲǅ"
        }, {
          base: "E",
          letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
        }, {
          base: "F",
          letters: "FⒻＦḞƑꝻ"
        }, {
          base: "G",
          letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
        }, {
          base: "H",
          letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
        }, {
          base: "I",
          letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
        }, {
          base: "J",
          letters: "JⒿＪĴɈ"
        }, {
          base: "K",
          letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
        }, {
          base: "L",
          letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
        }, {
          base: "LJ",
          letters: "Ǉ"
        }, {
          base: "Lj",
          letters: "ǈ"
        }, {
          base: "M",
          letters: "MⓂＭḾṀṂⱮƜ"
        }, {
          base: "N",
          letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
        }, {
          base: "NJ",
          letters: "Ǌ"
        }, {
          base: "Nj",
          letters: "ǋ"
        }, {
          base: "O",
          letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
        }, {
          base: "OI",
          letters: "Ƣ"
        }, {
          base: "OO",
          letters: "Ꝏ"
        }, {
          base: "OU",
          letters: "Ȣ"
        }, {
          base: "P",
          letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
        }, {
          base: "Q",
          letters: "QⓆＱꝖꝘɊ"
        }, {
          base: "R",
          letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
        }, {
          base: "S",
          letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
        }, {
          base: "T",
          letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
        }, {
          base: "TZ",
          letters: "Ꜩ"
        }, {
          base: "U",
          letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
        }, {
          base: "V",
          letters: "VⓋＶṼṾƲꝞɅ"
        }, {
          base: "VY",
          letters: "Ꝡ"
        }, {
          base: "W",
          letters: "WⓌＷẀẂŴẆẄẈⱲ"
        }, {
          base: "X",
          letters: "XⓍＸẊẌ"
        }, {
          base: "Y",
          letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
        }, {
          base: "Z",
          letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
        }, {
          base: "a",
          letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
        }, {
          base: "aa",
          letters: "ꜳ"
        }, {
          base: "ae",
          letters: "æǽǣ"
        }, {
          base: "ao",
          letters: "ꜵ"
        }, {
          base: "au",
          letters: "ꜷ"
        }, {
          base: "av",
          letters: "ꜹꜻ"
        }, {
          base: "ay",
          letters: "ꜽ"
        }, {
          base: "b",
          letters: "bⓑｂḃḅḇƀƃɓ"
        }, {
          base: "c",
          letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
        }, {
          base: "d",
          letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
        }, {
          base: "dz",
          letters: "ǳǆ"
        }, {
          base: "e",
          letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
        }, {
          base: "f",
          letters: "fⓕｆḟƒꝼ"
        }, {
          base: "g",
          letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
        }, {
          base: "h",
          letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
        }, {
          base: "hv",
          letters: "ƕ"
        }, {
          base: "i",
          letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
        }, {
          base: "j",
          letters: "jⓙｊĵǰɉ"
        }, {
          base: "k",
          letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
        }, {
          base: "l",
          letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
        }, {
          base: "lj",
          letters: "ǉ"
        }, {
          base: "m",
          letters: "mⓜｍḿṁṃɱɯ"
        }, {
          base: "n",
          letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
        }, {
          base: "nj",
          letters: "ǌ"
        }, {
          base: "o",
          letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
        }, {
          base: "oi",
          letters: "ƣ"
        }, {
          base: "ou",
          letters: "ȣ"
        }, {
          base: "oo",
          letters: "ꝏ"
        }, {
          base: "p",
          letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
        }, {
          base: "q",
          letters: "qⓠｑɋꝗꝙ"
        }, {
          base: "r",
          letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
        }, {
          base: "s",
          letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
        }, {
          base: "t",
          letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
        }, {
          base: "tz",
          letters: "ꜩ"
        }, {
          base: "u",
          letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
        }, {
          base: "v",
          letters: "vⓥｖṽṿʋꝟʌ"
        }, {
          base: "vy",
          letters: "ꝡ"
        }, {
          base: "w",
          letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
        }, {
          base: "x",
          letters: "xⓧｘẋẍ"
        }, {
          base: "y",
          letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
        }, {
          base: "z",
          letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
        }], vr = new RegExp("[" + yr.map((function(e) {
          return e.letters
        })).join("") + "]", "g"), gr = {}, br = 0; br < yr.length; br++)
        for (var Sr = yr[br], xr = 0; xr < Sr.letters.length; xr++) gr[Sr.letters[xr]] = Sr.base;
      var Er = function(e) {
          return e.replace(vr, (function(e) {
            return gr[e]
          }))
        },
        Pr = function(e, t) {
          void 0 === t && (t = cr);
          var r = null;

          function n() {
            for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
            if (r && r.lastThis === this && t(n, r.lastArgs)) return r.lastResult;
            var a = e.apply(this, n);
            return r = {
              lastResult: a,
              lastArgs: n,
              lastThis: this
            }, a
          }
          return n.clear = function() {
            r = null
          }, n
        }(Er),
        Cr = function(e) {
          return e.replace(/^\s+|\s+$/g, "")
        },
        Tr = function(e) {
          return "".concat(e.label, " ").concat(e.value)
        },
        Mr = ["innerRef"];

      function _r(e) {
        var t = e.innerRef,
          r = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            var i = Object.entries(e).filter((function(e) {
              var t = l(e, 1)[0];
              return !r.includes(t)
            }));
            return i.reduce((function(e, t) {
              var r = l(t, 2),
                n = r[0],
                i = r[1];
              return e[n] = i, e
            }), {})
          }(u(e, Mr), "onExited", "in", "enter", "exit", "appear");
        return Ue("input", (0, f.c)({
          ref: t
        }, r, {
          css: qe({
            label: "dummyInput",
            background: 0,
            border: 0,
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            width: 1,
            color: "transparent",
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)"
          }, "", "")
        }))
      }
      var wr = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        Ar = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%"
        };

      function kr(e) {
        e.preventDefault()
      }

      function Dr(e) {
        e.stopPropagation()
      }

      function Ir() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          r = e + this.offsetHeight;
        0 === e ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1)
      }

      function Fr() {
        return "ontouchstart" in window || navigator.maxTouchPoints
      }
      var Or = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Rr = 0,
        Lr = {
          capture: !1,
          passive: !1
        },
        Vr = function(e) {
          var t = e.target;
          return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
        },
        Br = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0"
        };

      function Nr(e) {
        var t = e.children,
          r = e.lockEnabled,
          n = e.captureEnabled,
          i = function(e) {
            var t = e.isEnabled,
              r = e.onBottomArrive,
              n = e.onBottomLeave,
              i = e.onTopArrive,
              a = e.onTopLeave,
              s = (0, c.useRef)(!1),
              o = (0, c.useRef)(!1),
              l = (0, c.useRef)(0),
              h = (0, c.useRef)(null),
              u = (0, c.useCallback)((function(e, t) {
                if (null !== h.current) {
                  var l = h.current,
                    u = l.scrollTop,
                    c = l.scrollHeight,
                    p = l.clientHeight,
                    f = h.current,
                    d = t > 0,
                    m = c - p - u,
                    y = !1;
                  m > t && s.current && (n && n(e), s.current = !1), d && o.current && (a && a(e), o.current = !1), d && t > m ? (r && !s.current && r(e), f.scrollTop = c, y = !0, s.current = !0) : !d && -t > u && (i && !o.current && i(e), f.scrollTop = 0, y = !0, o.current = !0), y && function(e) {
                    e.cancelable && e.preventDefault(), e.stopPropagation()
                  }(e)
                }
              }), [r, n, i, a]),
              p = (0, c.useCallback)((function(e) {
                u(e, e.deltaY)
              }), [u]),
              f = (0, c.useCallback)((function(e) {
                l.current = e.changedTouches[0].clientY
              }), []),
              d = (0, c.useCallback)((function(e) {
                var t = l.current - e.changedTouches[0].clientY;
                u(e, t)
              }), [u]),
              m = (0, c.useCallback)((function(e) {
                if (e) {
                  var t = !!It && {
                    passive: !1
                  };
                  e.addEventListener("wheel", p, t), e.addEventListener("touchstart", f, t), e.addEventListener("touchmove", d, t)
                }
              }), [d, f, p]),
              y = (0, c.useCallback)((function(e) {
                e && (e.removeEventListener("wheel", p, !1), e.removeEventListener("touchstart", f, !1), e.removeEventListener("touchmove", d, !1))
              }), [d, f, p]);
            return (0, c.useEffect)((function() {
                if (t) {
                  var e = h.current;
                  return m(e),
                    function() {
                      y(e)
                    }
                }
              }), [t, m, y]),
              function(e) {
                h.current = e
              }
          }({
            isEnabled: void 0 === n || n,
            onBottomArrive: e.onBottomArrive,
            onBottomLeave: e.onBottomLeave,
            onTopArrive: e.onTopArrive,
            onTopLeave: e.onTopLeave
          }),
          a = function(e) {
            var t = e.isEnabled,
              r = e.accountForScrollbars,
              n = void 0 === r || r,
              i = (0, c.useRef)({}),
              a = (0, c.useRef)(null),
              s = (0, c.useCallback)((function(e) {
                if (Or) {
                  var t = document.body,
                    r = t && t.style;
                  if (n && wr.forEach((function(e) {
                      var t = r && r[e];
                      i.current[e] = t
                    })), n && Rr < 1) {
                    var a = parseInt(i.current.paddingRight, 10) || 0,
                      s = document.body ? document.body.clientWidth : 0,
                      o = window.innerWidth - s + a || 0;
                    Object.keys(Ar).forEach((function(e) {
                      var t = Ar[e];
                      r && (r[e] = t)
                    })), r && (r.paddingRight = "".concat(o, "px"))
                  }
                  t && Fr() && (t.addEventListener("touchmove", kr, Lr), e && (e.addEventListener("touchstart", Ir, Lr), e.addEventListener("touchmove", Dr, Lr))), Rr += 1
                }
              }), [n]),
              o = (0, c.useCallback)((function(e) {
                if (Or) {
                  var t = document.body,
                    r = t && t.style;
                  Rr = Math.max(Rr - 1, 0), n && Rr < 1 && wr.forEach((function(e) {
                    var t = i.current[e];
                    r && (r[e] = t)
                  })), t && Fr() && (t.removeEventListener("touchmove", kr, Lr), e && (e.removeEventListener("touchstart", Ir, Lr), e.removeEventListener("touchmove", Dr, Lr)))
                }
              }), [n]);
            return (0, c.useEffect)((function() {
                if (t) {
                  var e = a.current;
                  return s(e),
                    function() {
                      o(e)
                    }
                }
              }), [t, s, o]),
              function(e) {
                a.current = e
              }
          }({
            isEnabled: r
          });
        return Ue(c.Fragment, null, r && Ue("div", {
          onClick: Vr,
          css: Br
        }), t((function(e) {
          i(e), a(e)
        })))
      }
      var zr = {
          name: "1a0ro4n-requiredInput",
          styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
        },
        Gr = function(e) {
          var t = e.name,
            r = e.onFocus;
          return Ue("input", {
            required: !0,
            name: t,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: r,
            css: zr,
            value: "",
            onChange: function() {}
          })
        },
        jr = {
          clearIndicator: er,
          container: function(e) {
            var t = e.isDisabled;
            return {
              label: "container",
              direction: e.isRtl ? "rtl" : void 0,
              pointerEvents: t ? "none" : void 0,
              position: "relative"
            }
          },
          control: function(e, t) {
            var r = e.isDisabled,
              n = e.isFocused,
              i = e.theme,
              s = i.colors,
              o = i.borderRadius;
            return a({
              label: "control",
              alignItems: "center",
              cursor: "default",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              minHeight: i.spacing.controlHeight,
              outline: "0 !important",
              position: "relative",
              transition: "all 100ms"
            }, t ? {} : {
              backgroundColor: r ? s.neutral5 : s.neutral0,
              borderColor: r ? s.neutral10 : n ? s.primary : s.neutral20,
              borderRadius: o,
              borderStyle: "solid",
              borderWidth: 1,
              boxShadow: n ? "0 0 0 1px ".concat(s.primary) : void 0,
              "&:hover": {
                borderColor: n ? s.primary : s.neutral30
              }
            })
          },
          dropdownIndicator: Qt,
          group: function(e, t) {
            var r = e.theme.spacing;
            return t ? {} : {
              paddingBottom: 2 * r.baseUnit,
              paddingTop: 2 * r.baseUnit
            }
          },
          groupHeading: function(e, t) {
            var r = e.theme,
              n = r.colors,
              i = r.spacing;
            return a({
              label: "group",
              cursor: "default",
              display: "block"
            }, t ? {} : {
              color: n.neutral40,
              fontSize: "75%",
              fontWeight: 500,
              marginBottom: "0.25em",
              paddingLeft: 3 * i.baseUnit,
              paddingRight: 3 * i.baseUnit,
              textTransform: "uppercase"
            })
          },
          indicatorsContainer: function() {
            return {
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              flexShrink: 0
            }
          },
          indicatorSeparator: function(e, t) {
            var r = e.isDisabled,
              n = e.theme,
              i = n.spacing.baseUnit,
              s = n.colors;
            return a({
              label: "indicatorSeparator",
              alignSelf: "stretch",
              width: 1
            }, t ? {} : {
              backgroundColor: r ? s.neutral10 : s.neutral20,
              marginBottom: 2 * i,
              marginTop: 2 * i
            })
          },
          input: function(e, t) {
            var r = e.isDisabled,
              n = e.value,
              i = e.theme,
              s = i.spacing,
              o = i.colors;
            return a(a({
              visibility: r ? "hidden" : "visible",
              transform: n ? "translateZ(0)" : ""
            }, sr), t ? {} : {
              margin: s.baseUnit / 2,
              paddingBottom: s.baseUnit / 2,
              paddingTop: s.baseUnit / 2,
              color: o.neutral80
            })
          },
          loadingIndicator: function(e, t) {
            var r = e.isFocused,
              n = e.size,
              i = e.theme,
              s = i.colors,
              o = i.spacing.baseUnit;
            return a({
              label: "loadingIndicator",
              display: "flex",
              transition: "color 150ms",
              alignSelf: "center",
              fontSize: n,
              lineHeight: 1,
              marginRight: n,
              textAlign: "center",
              verticalAlign: "middle"
            }, t ? {} : {
              color: r ? s.neutral60 : s.neutral20,
              padding: 2 * o
            })
          },
          loadingMessage: Ut,
          menu: function(e, t) {
            var r, i = e.placement,
              s = e.theme,
              o = s.borderRadius,
              l = s.spacing,
              h = s.colors;
            return a((r = {
              label: "menu"
            }, (0, n.c)(r, function(e) {
              return e ? {
                bottom: "top",
                top: "bottom"
              } [e] : "bottom"
            }(i), "100%"), (0, n.c)(r, "position", "absolute"), (0, n.c)(r, "width", "100%"), (0, n.c)(r, "zIndex", 1), r), t ? {} : {
              backgroundColor: h.neutral0,
              borderRadius: o,
              boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
              marginBottom: l.menuGutter,
              marginTop: l.menuGutter
            })
          },
          menuList: function(e, t) {
            var r = e.maxHeight,
              n = e.theme.spacing.baseUnit;
            return a({
              maxHeight: r,
              overflowY: "auto",
              position: "relative",
              WebkitOverflowScrolling: "touch"
            }, t ? {} : {
              paddingBottom: n,
              paddingTop: n
            })
          },
          menuPortal: function(e) {
            var t = e.rect,
              r = e.offset,
              n = e.position;
            return {
              left: t.left,
              position: n,
              top: r,
              width: t.width,
              zIndex: 1
            }
          },
          multiValue: function(e, t) {
            var r = e.theme,
              n = r.spacing,
              i = r.borderRadius,
              s = r.colors;
            return a({
              label: "multiValue",
              display: "flex",
              minWidth: 0
            }, t ? {} : {
              backgroundColor: s.neutral10,
              borderRadius: i / 2,
              margin: n.baseUnit / 2
            })
          },
          multiValueLabel: function(e, t) {
            var r = e.theme,
              n = r.borderRadius,
              i = r.colors,
              s = e.cropWithEllipsis;
            return a({
              overflow: "hidden",
              textOverflow: s || void 0 === s ? "ellipsis" : void 0,
              whiteSpace: "nowrap"
            }, t ? {} : {
              borderRadius: n / 2,
              color: i.neutral80,
              fontSize: "85%",
              padding: 3,
              paddingLeft: 6
            })
          },
          multiValueRemove: function(e, t) {
            var r = e.theme,
              n = r.spacing,
              i = r.borderRadius,
              s = r.colors,
              o = e.isFocused;
            return a({
              alignItems: "center",
              display: "flex"
            }, t ? {} : {
              borderRadius: i / 2,
              backgroundColor: o ? s.dangerLight : void 0,
              paddingLeft: n.baseUnit,
              paddingRight: n.baseUnit,
              ":hover": {
                backgroundColor: s.dangerLight,
                color: s.danger
              }
            })
          },
          noOptionsMessage: Wt,
          option: function(e, t) {
            var r = e.isDisabled,
              n = e.isFocused,
              i = e.isSelected,
              s = e.theme,
              o = s.spacing,
              l = s.colors;
            return a({
              label: "option",
              cursor: "default",
              display: "block",
              fontSize: "inherit",
              width: "100%",
              userSelect: "none",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
            }, t ? {} : {
              backgroundColor: i ? l.primary : n ? l.primary25 : "transparent",
              color: r ? l.neutral20 : i ? l.neutral0 : "inherit",
              padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
              ":active": {
                backgroundColor: r ? void 0 : i ? l.primary : l.primary50
              }
            })
          },
          placeholder: function(e, t) {
            var r = e.theme,
              n = r.spacing,
              i = r.colors;
            return a({
              label: "placeholder",
              gridArea: "1 / 1 / 2 / 3"
            }, t ? {} : {
              color: i.neutral50,
              marginLeft: n.baseUnit / 2,
              marginRight: n.baseUnit / 2
            })
          },
          singleValue: function(e, t) {
            var r = e.isDisabled,
              n = e.theme,
              i = n.spacing,
              s = n.colors;
            return a({
              label: "singleValue",
              gridArea: "1 / 1 / 2 / 3",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, t ? {} : {
              color: r ? s.neutral40 : s.neutral80,
              marginLeft: i.baseUnit / 2,
              marginRight: i.baseUnit / 2
            })
          },
          valueContainer: function(e, t) {
            var r = e.theme.spacing,
              n = e.isMulti,
              i = e.hasValue,
              s = e.selectProps.controlShouldRenderValue;
            return a({
              alignItems: "center",
              display: n && i && s ? "flex" : "grid",
              flex: 1,
              flexWrap: "wrap",
              WebkitOverflowScrolling: "touch",
              position: "relative",
              overflow: "hidden"
            }, t ? {} : {
              padding: "".concat(r.baseUnit / 2, "px ").concat(2 * r.baseUnit, "px")
            })
          }
        },
        Hr = {
          borderRadius: 4,
          colors: {
            primary: "#2684FF",
            primary75: "#4C9AFF",
            primary50: "#B2D4FF",
            primary25: "#DEEBFF",
            danger: "#DE350B",
            dangerLight: "#FFBDAD",
            neutral0: "hsl(0, 0%, 100%)",
            neutral5: "hsl(0, 0%, 95%)",
            neutral10: "hsl(0, 0%, 90%)",
            neutral20: "hsl(0, 0%, 80%)",
            neutral30: "hsl(0, 0%, 70%)",
            neutral40: "hsl(0, 0%, 60%)",
            neutral50: "hsl(0, 0%, 50%)",
            neutral60: "hsl(0, 0%, 40%)",
            neutral70: "hsl(0, 0%, 30%)",
            neutral80: "hsl(0, 0%, 20%)",
            neutral90: "hsl(0, 0%, 10%)"
          },
          spacing: {
            baseUnit: 4,
            controlHeight: 38,
            menuGutter: 8
          }
        },
        Wr = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: wt(),
          captureMenuScroll: !wt(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function(e, t) {
            if (e.data.__isNew__) return !0;
            var r = a({
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: Tr,
                trim: !0,
                matchFrom: "any"
              }, undefined),
              n = r.ignoreCase,
              i = r.ignoreAccents,
              s = r.stringify,
              o = r.trim,
              l = r.matchFrom,
              h = o ? Cr(t) : t,
              u = o ? Cr(s(e)) : s(e);
            return n && (h = h.toLowerCase(), u = u.toLowerCase()), i && (h = Pr(h), u = Er(u)), "start" === l ? u.substr(0, h.length) === h : u.indexOf(h) > -1
          },
          formatGroupLabel: function(e) {
            return e.label
          },
          getOptionLabel: function(e) {
            return e.label
          },
          getOptionValue: function(e) {
            return e.value
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function(e) {
            return !!e.isDisabled
          },
          loadingMessage: function() {
            return "Loading..."
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: "bottom",
          menuPosition: "absolute",
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: ! function() {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            } catch (e) {
              return !1
            }
          }(),
          noOptionsMessage: function() {
            return "No options"
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: "Select...",
          screenReaderStatus: function(e) {
            var t = e.count;
            return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1
        };

      function Ur(e, t, r, n) {
        return {
          type: "option",
          data: t,
          isDisabled: Zr(e, t, r),
          isSelected: Jr(e, t, r),
          label: Kr(e, t),
          value: Xr(e, t),
          index: n
        }
      }

      function qr(e, t) {
        return e.options.map((function(r, n) {
          if ("options" in r) {
            var i = r.options.map((function(r, n) {
              return Ur(e, r, t, n)
            })).filter((function(t) {
              return Yr(e, t)
            }));
            return i.length > 0 ? {
              type: "group",
              data: r,
              options: i,
              index: n
            } : void 0
          }
          var a = Ur(e, r, t, n);
          return Yr(e, a) ? a : void 0
        })).filter(Ft)
      }

      function $r(e) {
        return e.reduce((function(e, t) {
          return "group" === t.type ? e.push.apply(e, S(t.options.map((function(e) {
            return e.data
          })))) : e.push(t.data), e
        }), [])
      }

      function Yr(e, t) {
        var r = e.inputValue,
          n = void 0 === r ? "" : r,
          i = t.data,
          a = t.isSelected,
          s = t.label,
          o = t.value;
        return (!en(e) || !a) && Qr(e, {
          label: s,
          value: o,
          data: i
        }, n)
      }
      var Kr = function(e, t) {
          return e.getOptionLabel(t)
        },
        Xr = function(e, t) {
          return e.getOptionValue(t)
        };

      function Zr(e, t, r) {
        return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, r)
      }

      function Jr(e, t, r) {
        if (r.indexOf(t) > -1) return !0;
        if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, r);
        var n = Xr(e, t);
        return r.some((function(t) {
          return Xr(e, t) === n
        }))
      }

      function Qr(e, t, r) {
        return !e.filterOption || e.filterOption(t, r)
      }
      var en = function(e) {
          var t = e.hideSelectedOptions,
            r = e.isMulti;
          return void 0 === t ? r : t
        },
        tn = 1,
        rn = function(e) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && (0, y.c)(e, t)
          }(s, e);
          var t, r, n, i = b(s);

          function s(e) {
            var t;
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, s), (t = i.call(this, e)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0
              }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.instancePrefix = "", t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function(e) {
                t.controlRef = e
              }, t.focusedOptionRef = null, t.getFocusedOptionRef = function(e) {
                t.focusedOptionRef = e
              }, t.menuListRef = null, t.getMenuListRef = function(e) {
                t.menuListRef = e
              }, t.inputRef = null, t.getInputRef = function(e) {
                t.inputRef = e
              }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function(e, r) {
                var n = t.props,
                  i = n.onChange,
                  a = n.name;
                r.name = a, t.ariaOnChange(e, r), i(e, r)
              }, t.setValue = function(e, r, n) {
                var i = t.props,
                  a = i.closeMenuOnSelect,
                  s = i.isMulti,
                  o = i.inputValue;
                t.onInputChange("", {
                  action: "set-value",
                  prevInputValue: o
                }), a && (t.setState({
                  inputIsHiddenAfterUpdate: !s
                }), t.onMenuClose()), t.setState({
                  clearFocusValueOnUpdate: !0
                }), t.onChange(e, {
                  action: r,
                  option: n
                })
              }, t.selectOption = function(e) {
                var r = t.props,
                  n = r.blurInputOnSelect,
                  i = r.isMulti,
                  a = r.name,
                  s = t.state.selectValue,
                  o = i && t.isOptionSelected(e, s),
                  l = t.isOptionDisabled(e, s);
                if (o) {
                  var h = t.getOptionValue(e);
                  t.setValue(s.filter((function(e) {
                    return t.getOptionValue(e) !== h
                  })), "deselect-option", e)
                } else {
                  if (l) return void t.ariaOnChange(e, {
                    action: "select-option",
                    option: e,
                    name: a
                  });
                  i ? t.setValue([].concat(S(s), [e]), "select-option", e) : t.setValue(e, "select-option")
                }
                n && t.blurInput()
              }, t.removeValue = function(e) {
                var r = t.props.isMulti,
                  n = t.state.selectValue,
                  i = t.getOptionValue(e),
                  a = n.filter((function(e) {
                    return t.getOptionValue(e) !== i
                  })),
                  s = Ot(r, a, a[0] || null);
                t.onChange(s, {
                  action: "remove-value",
                  removedValue: e
                }), t.focusInput()
              }, t.clearValue = function() {
                var e = t.state.selectValue;
                t.onChange(Ot(t.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: e
                })
              }, t.popValue = function() {
                var e = t.props.isMulti,
                  r = t.state.selectValue,
                  n = r[r.length - 1],
                  i = r.slice(0, r.length - 1),
                  a = Ot(e, i, i[0] || null);
                t.onChange(a, {
                  action: "pop-value",
                  removedValue: n
                })
              }, t.getValue = function() {
                return t.state.selectValue
              }, t.cx = function() {
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                return bt.apply(void 0, [t.props.classNamePrefix].concat(r))
              }, t.getOptionLabel = function(e) {
                return Kr(t.props, e)
              }, t.getOptionValue = function(e) {
                return Xr(t.props, e)
              }, t.getStyles = function(e, r) {
                var n = t.props.unstyled,
                  i = jr[e](r, n);
                i.boxSizing = "border-box";
                var a = t.props.styles[e];
                return a ? a(i, r) : i
              }, t.getClassNames = function(e, r) {
                var n, i;
                return null === (n = (i = t.props.classNames)[e]) || void 0 === n ? void 0 : n.call(i, r)
              }, t.getElementId = function(e) {
                return "".concat(t.instancePrefix, "-").concat(e)
              }, t.getComponents = function() {
                return e = t.props, a(a({}, hr), e.components);
                var e
              }, t.buildCategorizedOptions = function() {
                return qr(t.props, t.state.selectValue)
              }, t.getCategorizedOptions = function() {
                return t.props.menuIsOpen ? t.buildCategorizedOptions() : []
              }, t.buildFocusableOptions = function() {
                return $r(t.buildCategorizedOptions())
              }, t.getFocusableOptions = function() {
                return t.props.menuIsOpen ? t.buildFocusableOptions() : []
              }, t.ariaOnChange = function(e, r) {
                t.setState({
                  ariaSelection: a({
                    value: e
                  }, r)
                })
              }, t.onMenuMouseDown = function(e) {
                0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput())
              }, t.onMenuMouseMove = function(e) {
                t.blockOptionHover = !1
              }, t.onControlMouseDown = function(e) {
                if (!e.defaultPrevented) {
                  var r = t.props.openMenuOnClick;
                  t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : r && t.openMenu("first") : (r && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
                }
              }, t.onDropdownIndicatorMouseDown = function(e) {
                if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
                  var r = t.props,
                    n = r.isMulti,
                    i = r.menuIsOpen;
                  t.focusInput(), i ? (t.setState({
                    inputIsHiddenAfterUpdate: !n
                  }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault()
                }
              }, t.onClearIndicatorMouseDown = function(e) {
                e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout((function() {
                  return t.focusInput()
                })))
              }, t.onScroll = function(e) {
                "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && Pt(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose()
              }, t.onCompositionStart = function() {
                t.isComposing = !0
              }, t.onCompositionEnd = function() {
                t.isComposing = !1
              }, t.onTouchStart = function(e) {
                var r = e.touches,
                  n = r && r.item(0);
                n && (t.initialTouchX = n.clientX, t.initialTouchY = n.clientY, t.userIsDragging = !1)
              }, t.onTouchMove = function(e) {
                var r = e.touches,
                  n = r && r.item(0);
                if (n) {
                  var i = Math.abs(n.clientX - t.initialTouchX),
                    a = Math.abs(n.clientY - t.initialTouchY);
                  t.userIsDragging = i > 5 || a > 5
                }
              }, t.onTouchEnd = function(e) {
                t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0)
              }, t.onControlTouchEnd = function(e) {
                t.userIsDragging || t.onControlMouseDown(e)
              }, t.onClearIndicatorTouchEnd = function(e) {
                t.userIsDragging || t.onClearIndicatorMouseDown(e)
              }, t.onDropdownIndicatorTouchEnd = function(e) {
                t.userIsDragging || t.onDropdownIndicatorMouseDown(e)
              }, t.handleInputChange = function(e) {
                var r = t.props.inputValue,
                  n = e.currentTarget.value;
                t.setState({
                  inputIsHiddenAfterUpdate: !1
                }), t.onInputChange(n, {
                  action: "input-change",
                  prevInputValue: r
                }), t.props.menuIsOpen || t.onMenuOpen()
              }, t.onInputFocus = function(e) {
                t.props.onFocus && t.props.onFocus(e), t.setState({
                  inputIsHiddenAfterUpdate: !1,
                  isFocused: !0
                }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1
              }, t.onInputBlur = function(e) {
                var r = t.props.inputValue;
                t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
                  action: "input-blur",
                  prevInputValue: r
                }), t.onMenuClose(), t.setState({
                  focusedValue: null,
                  isFocused: !1
                }))
              }, t.onOptionHover = function(e) {
                t.blockOptionHover || t.state.focusedOption === e || t.setState({
                  focusedOption: e
                })
              }, t.shouldHideSelectedOptions = function() {
                return en(t.props)
              }, t.onValueInputFocus = function(e) {
                e.preventDefault(), e.stopPropagation(), t.focus()
              }, t.onKeyDown = function(e) {
                var r = t.props,
                  n = r.isMulti,
                  i = r.backspaceRemovesValue,
                  a = r.escapeClearsValue,
                  s = r.inputValue,
                  o = r.isClearable,
                  l = r.isDisabled,
                  h = r.menuIsOpen,
                  u = r.onKeyDown,
                  c = r.tabSelectsValue,
                  p = r.openMenuOnFocus,
                  f = t.state,
                  d = f.focusedOption,
                  m = f.focusedValue,
                  y = f.selectValue;
                if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
                  switch (t.blockOptionHover = !0, e.key) {
                    case "ArrowLeft":
                      if (!n || s) return;
                      t.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!n || s) return;
                      t.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (s) return;
                      if (m) t.removeValue(m);
                      else {
                        if (!i) return;
                        n ? t.popValue() : o && t.clearValue()
                      }
                      break;
                    case "Tab":
                      if (t.isComposing) return;
                      if (e.shiftKey || !h || !c || !d || p && t.isOptionSelected(d, y)) return;
                      t.selectOption(d);
                      break;
                    case "Enter":
                      if (229 === e.keyCode) break;
                      if (h) {
                        if (!d) return;
                        if (t.isComposing) return;
                        t.selectOption(d);
                        break
                      }
                      return;
                    case "Escape":
                      h ? (t.setState({
                        inputIsHiddenAfterUpdate: !1
                      }), t.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: s
                      }), t.onMenuClose()) : o && a && t.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!h) {
                        t.openMenu("first");
                        break
                      }
                      if (!d) return;
                      t.selectOption(d);
                      break;
                    case "ArrowUp":
                      h ? t.focusOption("up") : t.openMenu("last");
                      break;
                    case "ArrowDown":
                      h ? t.focusOption("down") : t.openMenu("first");
                      break;
                    case "PageUp":
                      if (!h) return;
                      t.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!h) return;
                      t.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!h) return;
                      t.focusOption("first");
                      break;
                    case "End":
                      if (!h) return;
                      t.focusOption("last");
                      break;
                    default:
                      return
                  }
                  e.preventDefault()
                }
              }, t.instancePrefix = "react-select-" + (t.props.instanceId || ++tn), t.state.selectValue = St(e.value), e.menuIsOpen && t.state.selectValue.length) {
              var r = t.buildFocusableOptions(),
                n = r.indexOf(t.state.selectValue[0]);
              t.state.focusedOption = r[n]
            }
            return t
          }
          return t = s, r = [{
            key: "componentDidMount",
            value: function() {
              this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && _t(this.menuListRef, this.focusedOptionRef)
            }
          }, {
            key: "componentDidUpdate",
            value: function(e) {
              var t = this.props,
                r = t.isDisabled,
                n = t.menuIsOpen,
                i = this.state.isFocused;
              (i && !r && e.isDisabled || i && n && !e.menuIsOpen) && this.focusInput(), i && r && !e.isDisabled ? this.setState({
                isFocused: !1
              }, this.onMenuClose) : i || r || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
                isFocused: !0
              }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (_t(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
            }
          }, {
            key: "onMenuOpen",
            value: function() {
              this.props.onMenuOpen()
            }
          }, {
            key: "onMenuClose",
            value: function() {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue
              }), this.props.onMenuClose()
            }
          }, {
            key: "onInputChange",
            value: function(e, t) {
              this.props.onInputChange(e, t)
            }
          }, {
            key: "focusInput",
            value: function() {
              this.inputRef && this.inputRef.focus()
            }
          }, {
            key: "blurInput",
            value: function() {
              this.inputRef && this.inputRef.blur()
            }
          }, {
            key: "openMenu",
            value: function(e) {
              var t = this,
                r = this.state,
                n = r.selectValue,
                i = r.isFocused,
                a = this.buildFocusableOptions(),
                s = "first" === e ? 0 : a.length - 1;
              if (!this.props.isMulti) {
                var o = a.indexOf(n[0]);
                o > -1 && (s = o)
              }
              this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
                inputIsHiddenAfterUpdate: !1,
                focusedValue: null,
                focusedOption: a[s]
              }, (function() {
                return t.onMenuOpen()
              }))
            }
          }, {
            key: "focusValue",
            value: function(e) {
              var t = this.state,
                r = t.selectValue,
                n = t.focusedValue;
              if (this.props.isMulti) {
                this.setState({
                  focusedOption: null
                });
                var i = r.indexOf(n);
                n || (i = -1);
                var a = r.length - 1,
                  s = -1;
                if (r.length) {
                  switch (e) {
                    case "previous":
                      s = 0 === i ? 0 : -1 === i ? a : i - 1;
                      break;
                    case "next":
                      i > -1 && i < a && (s = i + 1)
                  }
                  this.setState({
                    inputIsHidden: -1 !== s,
                    focusedValue: r[s]
                  })
                }
              }
            }
          }, {
            key: "focusOption",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                t = this.props.pageSize,
                r = this.state.focusedOption,
                n = this.getFocusableOptions();
              if (n.length) {
                var i = 0,
                  a = n.indexOf(r);
                r || (a = -1), "up" === e ? i = a > 0 ? a - 1 : n.length - 1 : "down" === e ? i = (a + 1) % n.length : "pageup" === e ? (i = a - t) < 0 && (i = 0) : "pagedown" === e ? (i = a + t) > n.length - 1 && (i = n.length - 1) : "last" === e && (i = n.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                  focusedOption: n[i],
                  focusedValue: null
                })
              }
            }
          }, {
            key: "getTheme",
            value: function() {
              return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(Hr) : a(a({}, Hr), this.props.theme) : Hr
            }
          }, {
            key: "getCommonProps",
            value: function() {
              var e = this.clearValue,
                t = this.cx,
                r = this.getStyles,
                n = this.getClassNames,
                i = this.getValue,
                a = this.selectOption,
                s = this.setValue,
                o = this.props,
                l = o.isMulti,
                h = o.isRtl,
                u = o.options;
              return {
                clearValue: e,
                cx: t,
                getStyles: r,
                getClassNames: n,
                getValue: i,
                hasValue: this.hasValue(),
                isMulti: l,
                isRtl: h,
                options: u,
                selectOption: a,
                selectProps: o,
                setValue: s,
                theme: this.getTheme()
              }
            }
          }, {
            key: "hasValue",
            value: function() {
              return this.state.selectValue.length > 0
            }
          }, {
            key: "hasOptions",
            value: function() {
              return !!this.getFocusableOptions().length
            }
          }, {
            key: "isClearable",
            value: function() {
              var e = this.props,
                t = e.isClearable,
                r = e.isMulti;
              return void 0 === t ? r : t
            }
          }, {
            key: "isOptionDisabled",
            value: function(e, t) {
              return Zr(this.props, e, t)
            }
          }, {
            key: "isOptionSelected",
            value: function(e, t) {
              return Jr(this.props, e, t)
            }
          }, {
            key: "filterOption",
            value: function(e, t) {
              return Qr(this.props, e, t)
            }
          }, {
            key: "formatOptionLabel",
            value: function(e, t) {
              if ("function" == typeof this.props.formatOptionLabel) {
                var r = this.props.inputValue,
                  n = this.state.selectValue;
                return this.props.formatOptionLabel(e, {
                  context: t,
                  inputValue: r,
                  selectValue: n
                })
              }
              return this.getOptionLabel(e)
            }
          }, {
            key: "formatGroupLabel",
            value: function(e) {
              return this.props.formatGroupLabel(e)
            }
          }, {
            key: "startListeningComposition",
            value: function() {
              document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
            }
          }, {
            key: "stopListeningComposition",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
            }
          }, {
            key: "startListeningToTouch",
            value: function() {
              document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
            }
          }, {
            key: "stopListeningToTouch",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
            }
          }, {
            key: "renderInput",
            value: function() {
              var e = this.props,
                t = e.isDisabled,
                r = e.isSearchable,
                n = e.inputId,
                i = e.inputValue,
                s = e.tabIndex,
                o = e.form,
                l = e.menuIsOpen,
                h = e.required,
                u = this.getComponents().Input,
                p = this.state,
                d = p.inputIsHidden,
                m = p.ariaSelection,
                y = this.commonProps,
                v = n || this.getElementId("input"),
                g = a(a(a({
                  "aria-autocomplete": "list",
                  "aria-expanded": l,
                  "aria-haspopup": !0,
                  "aria-errormessage": this.props["aria-errormessage"],
                  "aria-invalid": this.props["aria-invalid"],
                  "aria-label": this.props["aria-label"],
                  "aria-labelledby": this.props["aria-labelledby"],
                  "aria-required": h,
                  role: "combobox"
                }, l && {
                  "aria-controls": this.getElementId("listbox"),
                  "aria-owns": this.getElementId("listbox")
                }), !r && {
                  "aria-readonly": !0
                }), this.hasValue() ? "initial-input-focus" === (null == m ? void 0 : m.action) && {
                  "aria-describedby": this.getElementId("live-region")
                } : {
                  "aria-describedby": this.getElementId("placeholder")
                });
              return r ? c.createElement(u, (0, f.c)({}, y, {
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                id: v,
                innerRef: this.getInputRef,
                isDisabled: t,
                isHidden: d,
                onBlur: this.onInputBlur,
                onChange: this.handleInputChange,
                onFocus: this.onInputFocus,
                spellCheck: "false",
                tabIndex: s,
                form: o,
                type: "text",
                value: i
              }, g)) : c.createElement(_r, (0, f.c)({
                id: v,
                innerRef: this.getInputRef,
                onBlur: this.onInputBlur,
                onChange: vt,
                onFocus: this.onInputFocus,
                disabled: t,
                tabIndex: s,
                inputMode: "none",
                form: o,
                value: ""
              }, g))
            }
          }, {
            key: "renderPlaceholderOrValue",
            value: function() {
              var e = this,
                t = this.getComponents(),
                r = t.MultiValue,
                n = t.MultiValueContainer,
                i = t.MultiValueLabel,
                a = t.MultiValueRemove,
                s = t.SingleValue,
                o = t.Placeholder,
                l = this.commonProps,
                h = this.props,
                u = h.controlShouldRenderValue,
                p = h.isDisabled,
                d = h.isMulti,
                m = h.inputValue,
                y = h.placeholder,
                v = this.state,
                g = v.selectValue,
                b = v.focusedValue,
                S = v.isFocused;
              if (!this.hasValue() || !u) return m ? null : c.createElement(o, (0, f.c)({}, l, {
                key: "placeholder",
                isDisabled: p,
                isFocused: S,
                innerProps: {
                  id: this.getElementId("placeholder")
                }
              }), y);
              if (d) return g.map((function(t, s) {
                var o = t === b,
                  h = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
                return c.createElement(r, (0, f.c)({}, l, {
                  components: {
                    Container: n,
                    Label: i,
                    Remove: a
                  },
                  isFocused: o,
                  isDisabled: p,
                  key: h,
                  index: s,
                  removeProps: {
                    onClick: function() {
                      return e.removeValue(t)
                    },
                    onTouchEnd: function() {
                      return e.removeValue(t)
                    },
                    onMouseDown: function(e) {
                      e.preventDefault()
                    }
                  },
                  data: t
                }), e.formatOptionLabel(t, "value"))
              }));
              if (m) return null;
              var x = g[0];
              return c.createElement(s, (0, f.c)({}, l, {
                data: x,
                isDisabled: p
              }), this.formatOptionLabel(x, "value"))
            }
          }, {
            key: "renderClearIndicator",
            value: function() {
              var e = this.getComponents().ClearIndicator,
                t = this.commonProps,
                r = this.props,
                n = r.isDisabled,
                i = r.isLoading,
                a = this.state.isFocused;
              if (!this.isClearable() || !e || n || !this.hasValue() || i) return null;
              var s = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true"
              };
              return c.createElement(e, (0, f.c)({}, t, {
                innerProps: s,
                isFocused: a
              }))
            }
          }, {
            key: "renderLoadingIndicator",
            value: function() {
              var e = this.getComponents().LoadingIndicator,
                t = this.commonProps,
                r = this.props,
                n = r.isDisabled,
                i = r.isLoading,
                a = this.state.isFocused;
              return e && i ? c.createElement(e, (0, f.c)({}, t, {
                innerProps: {
                  "aria-hidden": "true"
                },
                isDisabled: n,
                isFocused: a
              })) : null
            }
          }, {
            key: "renderIndicatorSeparator",
            value: function() {
              var e = this.getComponents(),
                t = e.DropdownIndicator,
                r = e.IndicatorSeparator;
              if (!t || !r) return null;
              var n = this.commonProps,
                i = this.props.isDisabled,
                a = this.state.isFocused;
              return c.createElement(r, (0, f.c)({}, n, {
                isDisabled: i,
                isFocused: a
              }))
            }
          }, {
            key: "renderDropdownIndicator",
            value: function() {
              var e = this.getComponents().DropdownIndicator;
              if (!e) return null;
              var t = this.commonProps,
                r = this.props.isDisabled,
                n = this.state.isFocused,
                i = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true"
                };
              return c.createElement(e, (0, f.c)({}, t, {
                innerProps: i,
                isDisabled: r,
                isFocused: n
              }))
            }
          }, {
            key: "renderMenu",
            value: function() {
              var e = this,
                t = this.getComponents(),
                r = t.Group,
                n = t.GroupHeading,
                i = t.Menu,
                a = t.MenuList,
                s = t.MenuPortal,
                o = t.LoadingMessage,
                l = t.NoOptionsMessage,
                h = t.Option,
                u = this.commonProps,
                p = this.state.focusedOption,
                d = this.props,
                m = d.captureMenuScroll,
                y = d.inputValue,
                v = d.isLoading,
                g = d.loadingMessage,
                b = d.minMenuHeight,
                S = d.maxMenuHeight,
                x = d.menuIsOpen,
                E = d.menuPlacement,
                P = d.menuPosition,
                C = d.menuPortalTarget,
                T = d.menuShouldBlockScroll,
                M = d.menuShouldScrollIntoView,
                _ = d.noOptionsMessage,
                w = d.onMenuScrollToTop,
                A = d.onMenuScrollToBottom;
              if (!x) return null;
              var k, D = function(t, r) {
                var n = t.type,
                  i = t.data,
                  a = t.isDisabled,
                  s = t.isSelected,
                  o = t.label,
                  l = t.value,
                  d = p === i,
                  m = a ? void 0 : function() {
                    return e.onOptionHover(i)
                  },
                  y = a ? void 0 : function() {
                    return e.selectOption(i)
                  },
                  v = "".concat(e.getElementId("option"), "-").concat(r),
                  g = {
                    id: v,
                    onClick: y,
                    onMouseMove: m,
                    onMouseOver: m,
                    tabIndex: -1
                  };
                return c.createElement(h, (0, f.c)({}, u, {
                  innerProps: g,
                  data: i,
                  isDisabled: a,
                  isSelected: s,
                  key: v,
                  label: o,
                  type: n,
                  value: l,
                  isFocused: d,
                  innerRef: d ? e.getFocusedOptionRef : void 0
                }), e.formatOptionLabel(t.data, "menu"))
              };
              if (this.hasOptions()) k = this.getCategorizedOptions().map((function(t) {
                if ("group" === t.type) {
                  var i = t.data,
                    a = t.options,
                    s = t.index,
                    o = "".concat(e.getElementId("group"), "-").concat(s),
                    l = "".concat(o, "-heading");
                  return c.createElement(r, (0, f.c)({}, u, {
                    key: o,
                    data: i,
                    options: a,
                    Heading: n,
                    headingProps: {
                      id: l,
                      data: t.data
                    },
                    label: e.formatGroupLabel(t.data)
                  }), t.options.map((function(e) {
                    return D(e, "".concat(s, "-").concat(e.index))
                  })))
                }
                if ("option" === t.type) return D(t, "".concat(t.index))
              }));
              else if (v) {
                var I = g({
                  inputValue: y
                });
                if (null === I) return null;
                k = c.createElement(o, u, I)
              } else {
                var F = _({
                  inputValue: y
                });
                if (null === F) return null;
                k = c.createElement(l, u, F)
              }
              var O = {
                  minMenuHeight: b,
                  maxMenuHeight: S,
                  menuPlacement: E,
                  menuPosition: P,
                  menuShouldScrollIntoView: M
                },
                R = c.createElement(jt, (0, f.c)({}, u, O), (function(t) {
                  var r = t.ref,
                    n = t.placerProps,
                    s = n.placement,
                    o = n.maxHeight;
                  return c.createElement(i, (0, f.c)({}, u, O, {
                    innerRef: r,
                    innerProps: {
                      onMouseDown: e.onMenuMouseDown,
                      onMouseMove: e.onMenuMouseMove,
                      id: e.getElementId("listbox")
                    },
                    isLoading: v,
                    placement: s
                  }), c.createElement(Nr, {
                    captureEnabled: m,
                    onTopArrive: w,
                    onBottomArrive: A,
                    lockEnabled: T
                  }, (function(t) {
                    return c.createElement(a, (0, f.c)({}, u, {
                      innerRef: function(r) {
                        e.getMenuListRef(r), t(r)
                      },
                      isLoading: v,
                      maxHeight: o,
                      focusedOption: p
                    }), k)
                  })))
                }));
              return C || "fixed" === P ? c.createElement(s, (0, f.c)({}, u, {
                appendTo: C,
                controlElement: this.controlRef,
                menuPlacement: E,
                menuPosition: P
              }), R) : R
            }
          }, {
            key: "renderFormField",
            value: function() {
              var e = this,
                t = this.props,
                r = t.delimiter,
                n = t.isDisabled,
                i = t.isMulti,
                a = t.name,
                s = t.required,
                o = this.state.selectValue;
              if (s && !this.hasValue() && !n) return c.createElement(Gr, {
                name: a,
                onFocus: this.onValueInputFocus
              });
              if (a && !n) {
                if (i) {
                  if (r) {
                    var l = o.map((function(t) {
                      return e.getOptionValue(t)
                    })).join(r);
                    return c.createElement("input", {
                      name: a,
                      type: "hidden",
                      value: l
                    })
                  }
                  var h = o.length > 0 ? o.map((function(t, r) {
                    return c.createElement("input", {
                      key: "i-".concat(r),
                      name: a,
                      type: "hidden",
                      value: e.getOptionValue(t)
                    })
                  })) : c.createElement("input", {
                    name: a,
                    type: "hidden",
                    value: ""
                  });
                  return c.createElement("div", null, h)
                }
                var u = o[0] ? this.getOptionValue(o[0]) : "";
                return c.createElement("input", {
                  name: a,
                  type: "hidden",
                  value: u
                })
              }
            }
          }, {
            key: "renderLiveRegion",
            value: function() {
              var e = this.commonProps,
                t = this.state,
                r = t.ariaSelection,
                n = t.focusedOption,
                i = t.focusedValue,
                a = t.isFocused,
                s = t.selectValue,
                o = this.getFocusableOptions();
              return c.createElement(mr, (0, f.c)({}, e, {
                id: this.getElementId("live-region"),
                ariaSelection: r,
                focusedOption: n,
                focusedValue: i,
                isFocused: a,
                selectValue: s,
                focusableOptions: o
              }))
            }
          }, {
            key: "render",
            value: function() {
              var e = this.getComponents(),
                t = e.Control,
                r = e.IndicatorsContainer,
                n = e.SelectContainer,
                i = e.ValueContainer,
                a = this.props,
                s = a.className,
                o = a.id,
                l = a.isDisabled,
                h = a.menuIsOpen,
                u = this.state.isFocused,
                p = this.commonProps = this.getCommonProps();
              return c.createElement(n, (0, f.c)({}, p, {
                className: s,
                innerProps: {
                  id: o,
                  onKeyDown: this.onKeyDown
                },
                isDisabled: l,
                isFocused: u
              }), this.renderLiveRegion(), c.createElement(t, (0, f.c)({}, p, {
                innerRef: this.getControlRef,
                innerProps: {
                  onMouseDown: this.onControlMouseDown,
                  onTouchEnd: this.onControlTouchEnd
                },
                isDisabled: l,
                isFocused: u,
                menuIsOpen: h
              }), c.createElement(i, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderPlaceholderOrValue(), this.renderInput()), c.createElement(r, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
            }
          }], n = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
              var r = t.prevProps,
                n = t.clearFocusValueOnUpdate,
                i = t.inputIsHiddenAfterUpdate,
                s = t.ariaSelection,
                o = t.isFocused,
                l = t.prevWasFocused,
                h = e.options,
                u = e.value,
                c = e.menuIsOpen,
                p = e.inputValue,
                f = e.isMulti,
                d = St(u),
                m = {};
              if (r && (u !== r.value || h !== r.options || c !== r.menuIsOpen || p !== r.inputValue)) {
                var y = c ? function(e, t) {
                    return $r(qr(e, t))
                  }(e, d) : [],
                  v = n ? function(e, t) {
                    var r = e.focusedValue,
                      n = e.selectValue.indexOf(r);
                    if (n > -1) {
                      if (t.indexOf(r) > -1) return r;
                      if (n < t.length) return t[n]
                    }
                    return null
                  }(t, d) : null,
                  g = function(e, t) {
                    var r = e.focusedOption;
                    return r && t.indexOf(r) > -1 ? r : t[0]
                  }(t, y);
                m = {
                  selectValue: d,
                  focusedOption: g,
                  focusedValue: v,
                  clearFocusValueOnUpdate: !1
                }
              }
              var b = null != i && e !== r ? {
                  inputIsHidden: i,
                  inputIsHiddenAfterUpdate: void 0
                } : {},
                S = s,
                x = o && l;
              return o && !x && (S = {
                value: Ot(f, d, d[0] || null),
                options: d,
                action: "initial-input-focus"
              }, x = !l), "initial-input-focus" === (null == s ? void 0 : s.action) && (S = null), a(a(a({}, m), b), {}, {
                prevProps: e,
                ariaSelection: S,
                prevWasFocused: x
              })
            }
          }], r && m(t.prototype, r), n && m(t, n), Object.defineProperty(t, "prototype", {
            writable: !1
          }), s
        }(c.Component);
      rn.defaultProps = Wr;
      var nn = (0, c.forwardRef)((function(e, t) {
          var r = function(e) {
            var t = e.defaultInputValue,
              r = void 0 === t ? "" : t,
              n = e.defaultMenuIsOpen,
              i = void 0 !== n && n,
              s = e.defaultValue,
              o = void 0 === s ? null : s,
              h = e.inputValue,
              f = e.menuIsOpen,
              d = e.onChange,
              m = e.onInputChange,
              y = e.onMenuClose,
              v = e.onMenuOpen,
              g = e.value,
              b = u(e, p),
              S = l((0, c.useState)(void 0 !== h ? h : r), 2),
              x = S[0],
              E = S[1],
              P = l((0, c.useState)(void 0 !== f ? f : i), 2),
              C = P[0],
              T = P[1],
              M = l((0, c.useState)(void 0 !== g ? g : o), 2),
              _ = M[0],
              w = M[1],
              A = (0, c.useCallback)((function(e, t) {
                "function" == typeof d && d(e, t), w(e)
              }), [d]),
              k = (0, c.useCallback)((function(e, t) {
                var r;
                "function" == typeof m && (r = m(e, t)), E(void 0 !== r ? r : e)
              }), [m]),
              D = (0, c.useCallback)((function() {
                "function" == typeof v && v(), T(!0)
              }), [v]),
              I = (0, c.useCallback)((function() {
                "function" == typeof y && y(), T(!1)
              }), [y]),
              F = void 0 !== h ? h : x,
              O = void 0 !== f ? f : C,
              R = void 0 !== g ? g : _;
            return a(a({}, b), {}, {
              inputValue: F,
              menuIsOpen: O,
              onChange: A,
              onInputChange: k,
              onMenuClose: I,
              onMenuOpen: D,
              value: R
            })
          }(e);
          return c.createElement(rn, (0, f.c)({
            ref: t
          }, r))
        })),
        an = nn
    },
    16728: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        i = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(),
        a = f(r(51664)),
        s = f(r(71424)),
        o = f(r(35459)),
        l = f(r(34332)),
        h = f(r(17368)),
        u = f(r(31792)),
        c = f(r(54080)),
        p = r(57884);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function d(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function m(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var y = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, u.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), i(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, o.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, c.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              n = t.max,
              i = t.mode,
              a = t.forceSingleModeWidth,
              s = t.onReady,
              o = this._parent,
              u = this._child,
              f = (0, p.innerWidth)(o),
              y = (0, p.innerHeight)(o);
            if (y <= 0 || isNaN(y)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, c.default)();
              this.pid = v;
              var g = function() {
                  return v !== e.pid
                },
                b = "multi" === i ? function() {
                  return m(u, y)
                } : function() {
                  return d(u, f)
                },
                S = "multi" === i ? function() {
                  return d(u, f)
                } : function() {
                  return m(u, y)
                },
                x = void 0,
                E = r,
                P = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, h.default)((function() {
                  return E <= P
                }), (function(t) {
                  if (g()) return t(!0);
                  x = parseInt((E + P) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return g() ? t(!0) : (b() ? E = x + 1 : P = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === i && a || S() ? t() : (E = r, P = x, (0, h.default)((function() {
                  return E < P
                }), (function(t) {
                  if (g()) return t(!0);
                  x = parseInt((E + P) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return v !== e.pid ? t(!0) : (S() ? E = x + 1 : P = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(E, P), x = Math.max(x, r), x = Math.min(x, n), x = Math.max(x, 0), g()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || g() || e.setState({
                  ready: !0
                }, (function() {
                  return s(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              i = t.text,
              s = t.style,
              o = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              h = this.state,
              u = h.fontSize,
              c = h.ready,
              p = n({}, s, {
                fontSize: u
              }),
              f = {
                display: c ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), a.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: p
            }, l), a.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: f
            }, i && "function" == typeof r ? c ? r(i) : i : r))
          }
        }]), t
      }(a.default.Component);
      y.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, y.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = y
    },
    58936: (e, t, r) => {
      "use strict";
      t.cR = void 0;
      var n, i = (n = r(16728)) && n.__esModule ? n : {
        default: n
      };
      t.cR = i.default, i.default
    },
    57884: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    34332: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          a = !0;

        function s(e) {
          function n() {
            t && t(e, r)
          }
          a ? i.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0]((function t(i, a) {
          r.push(a), ++n >= e.length || i ? s(i) : e[n](t)
        })) : s(null), a = !1
      };
      var n, i = (n = r(44392)) && n.__esModule ? n : {
        default: n
      }
    },
    35459: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!i.call(t, r[a]) || e[r[a]] !== t[r[a]]) return !1;
        return !0
      }
    },
    31792: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          i = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, i = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - s;
          return a || (e >= t ? o() : a = setTimeout(o, t - e)), i
        }
      }
    },
    54080: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    17368: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(i) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          i ? n(i) : e.apply(this, s) ? t(r) : n(null)
        })) : n(null)
      };
      var r = function() {}
    },
    62748: (e, t, r) => {
      "use strict";
      r.d(t, {
        U1: () => f
      });
      const n = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        i = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(e, t) {
          return function(r, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = e[t];
            if (!i(r)) return;
            if (!n(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const h = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const e = l[r].handlers;
              let t;
              for (t = e.length; t > 0 && !(o >= e[t - 1].priority); t--);
              t === e.length ? e[t] = h : e.splice(t, 0, h), l.__current.forEach((e => {
                e.name === r && e.currentIndex >= t && e.currentIndex++
              }))
            } else l[r] = {
              handlers: [h],
              runs: 0
            };
            "hookAdded" !== r && e.doAction("hookAdded", r, a, s, o)
          }
        },
        s = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = e[t];
            if (!i(a)) return;
            if (!r && !n(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (r) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const e = o[a].handlers;
              for (let t = e.length - 1; t >= 0; t--) e[t].namespace === s && (e.splice(t, 1), l++, o.__current.forEach((e => {
                e.name === a && e.currentIndex >= t && e.currentIndex--
              })))
            }
            return "hookRemoved" !== a && e.doAction("hookRemoved", a, s), l
          }
        },
        o = function(e, t) {
          return function(r, n) {
            const i = e[t];
            return void 0 !== n ? r in i && i[r].handlers.some((e => e.namespace === n)) : r in i
          }
        },
        l = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(n) {
            const i = e[t];
            i[n] || (i[n] = {
              handlers: [],
              runs: 0
            }), i[n].runs++;
            const a = i[n].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return r ? o[0] : void 0;
            const h = {
              name: n,
              currentIndex: 0
            };
            for (i.__current.push(h); h.currentIndex < a.length;) {
              const e = a[h.currentIndex].callback.apply(null, o);
              r && (o[0] = e), h.currentIndex++
            }
            return i.__current.pop(), r ? o[0] : void 0
          }
        },
        h = function(e, t) {
          return function() {
            var r;
            const n = e[t];
            return null !== (r = n.__current[n.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        u = function(e, t) {
          return function(r) {
            const n = e[t];
            return void 0 === r ? void 0 !== n.__current[0] : !!n.__current[0] && r === n.__current[0].name
          }
        },
        c = function(e, t) {
          return function(r) {
            const n = e[t];
            if (i(r)) return n[r] && n[r].runs ? n[r].runs : 0
          }
        };
      class p {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = h(this, "actions"), this.currentFilter = h(this, "filters"), this.doingAction = u(this, "actions"), this.doingFilter = u(this, "filters"), this.didAction = c(this, "actions"), this.didFilter = c(this, "filters")
        }
      }
      const f = function() {
          return new p
        },
        d = f(),
        {
          addAction: m,
          addFilter: y,
          removeAction: v,
          removeFilter: g,
          hasAction: b,
          hasFilter: S,
          removeAllActions: x,
          removeAllFilters: E,
          doAction: P,
          applyFilters: C,
          currentAction: T,
          currentFilter: M,
          doingAction: _,
          doingFilter: w,
          didAction: A,
          didFilter: k,
          actions: D,
          filters: I
        } = d
    },
    86016: (e, t, r) => {
      e.exports = {
        default: r(40684),
        __esModule: !0
      }
    },
    18276: (e, t, r) => {
      e.exports = {
        default: r(41248),
        __esModule: !0
      }
    },
    2016: (e, t, r) => {
      e.exports = {
        default: r(47952),
        __esModule: !0
      }
    },
    4616: (e, t, r) => {
      e.exports = {
        default: r(37488),
        __esModule: !0
      }
    },
    48844: (e, t, r) => {
      e.exports = {
        default: r(46760),
        __esModule: !0
      }
    },
    48011: (e, t, r) => {
      e.exports = {
        default: r(90020),
        __esModule: !0
      }
    },
    70224: (e, t, r) => {
      e.exports = {
        default: r(32784),
        __esModule: !0
      }
    },
    65908: (e, t) => {
      "use strict";
      t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
    },
    272: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var n, i = (n = r(2016)) && n.__esModule ? n : {
        default: n
      };
      t.default = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }()
    },
    67032: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var n, i = (n = r(86016)) && n.__esModule ? n : {
        default: n
      };
      t.default = i.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }
    },
    92392: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var n = s(r(48844)),
        i = s(r(18276)),
        a = s(r(83528));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
        e.prototype = (0, i.default)(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
      }
    },
    66516: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var n, i = (n = r(83528)) && n.__esModule ? n : {
        default: n
      };
      t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t
      }
    },
    83528: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var n = s(r(70224)),
        i = s(r(48011)),
        a = "function" == typeof i.default && "symbol" == typeof n.default ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
        };

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = "function" == typeof i.default && "symbol" === a(n.default) ? function(e) {
        return void 0 === e ? "undefined" : a(e)
      } : function(e) {
        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
      }
    },
    8560: function(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, r) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, r)
        }

        function r(e, n, i) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, r, n) {
            var i = [null];
            i.push.apply(i, r);
            var a = new(Function.bind.apply(e, i));
            return n && t(a, n.prototype), a
          }, r.apply(null, arguments)
        }

        function n(e) {
          return function(e) {
            if (Array.isArray(e)) return i(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n
        }
        var a = Object.hasOwnProperty,
          s = Object.setPrototypeOf,
          o = Object.isFrozen,
          l = Object.getPrototypeOf,
          h = Object.getOwnPropertyDescriptor,
          u = Object.freeze,
          c = Object.seal,
          p = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          d = f.apply,
          m = f.construct;
        d || (d = function(e, t, r) {
          return e.apply(t, r)
        }), u || (u = function(e) {
          return e
        }), c || (c = function(e) {
          return e
        }), m || (m = function(e, t) {
          return r(e, n(t))
        });
        var y, v = w(Array.prototype.forEach),
          g = w(Array.prototype.pop),
          b = w(Array.prototype.push),
          S = w(String.prototype.toLowerCase),
          x = w(String.prototype.toString),
          E = w(String.prototype.match),
          P = w(String.prototype.replace),
          C = w(String.prototype.indexOf),
          T = w(String.prototype.trim),
          M = w(RegExp.prototype.test),
          _ = (y = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return m(y, t)
          });

        function w(e) {
          return function(t) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            return d(e, t, n)
          }
        }

        function A(e, t, r) {
          var n;
          r = null !== (n = r) && void 0 !== n ? n : S, s && s(e, null);
          for (var i = t.length; i--;) {
            var a = t[i];
            if ("string" == typeof a) {
              var l = r(a);
              l !== a && (o(t) || (t[i] = l), a = l)
            }
            e[a] = !0
          }
          return e
        }

        function k(e) {
          var t, r = p(null);
          for (t in e) !0 === d(a, e, [t]) && (r[t] = e[t]);
          return r
        }

        function D(e, t) {
          for (; null !== e;) {
            var r = h(e, t);
            if (r) {
              if (r.get) return w(r.get);
              if ("function" == typeof r.value) return w(r.value)
            }
            e = l(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var I = u(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          F = u(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          O = u(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          R = u(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          L = u(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          V = u(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          B = u(["#text"]),
          N = u(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          z = u(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          G = u(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = u(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          H = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = c(/<%[\w\W]*|[\w\W]*%>/gm),
          U = c(/\${[\w\W]*}/gm),
          q = c(/^data-[\-\w.\u00B7-\uFFFF]/),
          $ = c(/^aria-[\-\w]+$/),
          Y = c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          K = c(/^(?:\w+script|data):/i),
          X = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = c(/^html$/i),
          J = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
            i = function(e) {
              return t(e)
            };
          if (i.version = "2.4.7", i.removed = [], !r || !r.document || 9 !== r.document.nodeType) return i.isSupported = !1, i;
          var a = r.document,
            s = r.document,
            o = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            h = r.Node,
            c = r.Element,
            p = r.NodeFilter,
            f = r.NamedNodeMap,
            d = void 0 === f ? r.NamedNodeMap || r.MozNamedAttrMap : f,
            m = r.HTMLFormElement,
            y = r.DOMParser,
            w = r.trustedTypes,
            Q = c.prototype,
            ee = D(Q, "cloneNode"),
            te = D(Q, "nextSibling"),
            re = D(Q, "childNodes"),
            ne = D(Q, "parentNode");
          if ("function" == typeof l) {
            var ie = s.createElement("template");
            ie.content && ie.content.ownerDocument && (s = ie.content.ownerDocument)
          }
          var ae = function(t, r) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var n = null,
                i = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(i) && (n = r.currentScript.getAttribute(i));
              var a = "dompurify" + (n ? "#" + n : "");
              try {
                return t.createPolicy(a, {
                  createHTML: function(e) {
                    return e
                  },
                  createScriptURL: function(e) {
                    return e
                  }
                })
              } catch (e) {
                return console.warn("TrustedTypes policy " + a + " could not be created."), null
              }
            }(w, a),
            se = ae ? ae.createHTML("") : "",
            oe = s,
            le = oe.implementation,
            he = oe.createNodeIterator,
            ue = oe.createDocumentFragment,
            ce = oe.getElementsByTagName,
            pe = a.importNode,
            fe = {};
          try {
            fe = k(s).documentMode ? s.documentMode : {}
          } catch (e) {}
          var de = {};
          i.isSupported = "function" == typeof ne && le && void 0 !== le.createHTMLDocument && 9 !== fe;
          var me, ye, ve = H,
            ge = W,
            be = U,
            Se = q,
            xe = $,
            Ee = K,
            Pe = X,
            Ce = Y,
            Te = null,
            Me = A({}, [].concat(n(I), n(F), n(O), n(L), n(B))),
            _e = null,
            we = A({}, [].concat(n(N), n(z), n(G), n(j))),
            Ae = Object.seal(Object.create(null, {
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
            ke = null,
            De = null,
            Ie = !0,
            Fe = !0,
            Oe = !1,
            Re = !0,
            Le = !1,
            Ve = !1,
            Be = !1,
            Ne = !1,
            ze = !1,
            Ge = !1,
            je = !1,
            He = !0,
            We = !1,
            Ue = !0,
            qe = !1,
            $e = {},
            Ye = null,
            Ke = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Xe = null,
            Ze = A({}, ["audio", "video", "img", "source", "image", "track"]),
            Je = null,
            Qe = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            et = "http://www.w3.org/1998/Math/MathML",
            tt = "http://www.w3.org/2000/svg",
            rt = "http://www.w3.org/1999/xhtml",
            nt = rt,
            it = !1,
            at = null,
            st = A({}, [et, tt, rt], x),
            ot = ["application/xhtml+xml", "text/html"],
            lt = null,
            ht = s.createElement("form"),
            ut = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            ct = function(t) {
              lt && lt === t || (t && "object" === e(t) || (t = {}), t = k(t), me = me = -1 === ot.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ye = "application/xhtml+xml" === me ? x : S, Te = "ALLOWED_TAGS" in t ? A({}, t.ALLOWED_TAGS, ye) : Me, _e = "ALLOWED_ATTR" in t ? A({}, t.ALLOWED_ATTR, ye) : we, at = "ALLOWED_NAMESPACES" in t ? A({}, t.ALLOWED_NAMESPACES, x) : st, Je = "ADD_URI_SAFE_ATTR" in t ? A(k(Qe), t.ADD_URI_SAFE_ATTR, ye) : Qe, Xe = "ADD_DATA_URI_TAGS" in t ? A(k(Ze), t.ADD_DATA_URI_TAGS, ye) : Ze, Ye = "FORBID_CONTENTS" in t ? A({}, t.FORBID_CONTENTS, ye) : Ke, ke = "FORBID_TAGS" in t ? A({}, t.FORBID_TAGS, ye) : {}, De = "FORBID_ATTR" in t ? A({}, t.FORBID_ATTR, ye) : {}, $e = "USE_PROFILES" in t && t.USE_PROFILES, Ie = !1 !== t.ALLOW_ARIA_ATTR, Fe = !1 !== t.ALLOW_DATA_ATTR, Oe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Le = t.SAFE_FOR_TEMPLATES || !1, Ve = t.WHOLE_DOCUMENT || !1, ze = t.RETURN_DOM || !1, Ge = t.RETURN_DOM_FRAGMENT || !1, je = t.RETURN_TRUSTED_TYPE || !1, Ne = t.FORCE_BODY || !1, He = !1 !== t.SANITIZE_DOM, We = t.SANITIZE_NAMED_PROPS || !1, Ue = !1 !== t.KEEP_CONTENT, qe = t.IN_PLACE || !1, Ce = t.ALLOWED_URI_REGEXP || Ce, nt = t.NAMESPACE || rt, Ae = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ae.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Le && (Fe = !1), Ge && (ze = !0), $e && (Te = A({}, n(B)), _e = [], !0 === $e.html && (A(Te, I), A(_e, N)), !0 === $e.svg && (A(Te, F), A(_e, z), A(_e, j)), !0 === $e.svgFilters && (A(Te, O), A(_e, z), A(_e, j)), !0 === $e.mathMl && (A(Te, L), A(_e, G), A(_e, j))), t.ADD_TAGS && (Te === Me && (Te = k(Te)), A(Te, t.ADD_TAGS, ye)), t.ADD_ATTR && (_e === we && (_e = k(_e)), A(_e, t.ADD_ATTR, ye)), t.ADD_URI_SAFE_ATTR && A(Je, t.ADD_URI_SAFE_ATTR, ye), t.FORBID_CONTENTS && (Ye === Ke && (Ye = k(Ye)), A(Ye, t.FORBID_CONTENTS, ye)), Ue && (Te["#text"] = !0), Ve && A(Te, ["html", "head", "body"]), Te.table && (A(Te, ["tbody"]), delete ke.tbody), u && u(t), lt = t)
            },
            pt = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ft = A({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            dt = A({}, ["title", "style", "font", "a", "script"]),
            mt = A({}, F);
          A(mt, O), A(mt, R);
          var yt = A({}, L);
          A(yt, V);
          var vt = function(e) {
              b(i.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = se
                } catch (t) {
                  e.remove()
                }
              }
            },
            gt = function(e, t) {
              try {
                b(i.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                b(i.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !_e[e])
                if (ze || Ge) try {
                  vt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            bt = function(e) {
              var t, r;
              if (Ne) e = "<remove></remove>" + e;
              else {
                var n = E(e, /^[\r\n\t ]+/);
                r = n && n[0]
              }
              "application/xhtml+xml" === me && nt === rt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var i = ae ? ae.createHTML(e) : e;
              if (nt === rt) try {
                t = (new y).parseFromString(i, me)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = le.createDocument(nt, "template", null);
                try {
                  t.documentElement.innerHTML = it ? se : i
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return e && r && a.insertBefore(s.createTextNode(r), a.childNodes[0] || null), nt === rt ? ce.call(t, Ve ? "html" : "body")[0] : Ve ? t.documentElement : a
            },
            St = function(e) {
              return he.call(e.ownerDocument || e, e, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT, null, !1)
            },
            xt = function(t) {
              return "object" === e(h) ? t instanceof h : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            Et = function(e, t, r) {
              de[e] && v(de[e], (function(e) {
                e.call(i, t, r, lt)
              }))
            },
            Pt = function(e) {
              var t, r;
              if (Et("beforeSanitizeElements", e, null), (r = e) instanceof m && ("string" != typeof r.nodeName || "string" != typeof r.textContent || "function" != typeof r.removeChild || !(r.attributes instanceof d) || "function" != typeof r.removeAttribute || "function" != typeof r.setAttribute || "string" != typeof r.namespaceURI || "function" != typeof r.insertBefore || "function" != typeof r.hasChildNodes)) return vt(e), !0;
              if (M(/[\u0080-\uFFFF]/, e.nodeName)) return vt(e), !0;
              var n = ye(e.nodeName);
              if (Et("uponSanitizeElement", e, {
                  tagName: n,
                  allowedTags: Te
                }), e.hasChildNodes() && !xt(e.firstElementChild) && (!xt(e.content) || !xt(e.content.firstElementChild)) && M(/<[/\w]/g, e.innerHTML) && M(/<[/\w]/g, e.textContent)) return vt(e), !0;
              if ("select" === n && M(/<template/i, e.innerHTML)) return vt(e), !0;
              if (!Te[n] || ke[n]) {
                if (!ke[n] && Tt(n)) {
                  if (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, n)) return !1;
                  if (Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(n)) return !1
                }
                if (Ue && !Ye[n]) {
                  var a = ne(e) || e.parentNode,
                    s = re(e) || e.childNodes;
                  if (s && a)
                    for (var o = s.length - 1; o >= 0; --o) a.insertBefore(ee(s[o], !0), te(e))
                }
                return vt(e), !0
              }
              return e instanceof c && ! function(e) {
                var t = ne(e);
                t && t.tagName || (t = {
                  namespaceURI: nt,
                  tagName: "template"
                });
                var r = S(e.tagName),
                  n = S(t.tagName);
                return !!at[e.namespaceURI] && (e.namespaceURI === tt ? t.namespaceURI === rt ? "svg" === r : t.namespaceURI === et ? "svg" === r && ("annotation-xml" === n || pt[n]) : Boolean(mt[r]) : e.namespaceURI === et ? t.namespaceURI === rt ? "math" === r : t.namespaceURI === tt ? "math" === r && ft[n] : Boolean(yt[r]) : e.namespaceURI === rt ? !(t.namespaceURI === tt && !ft[n]) && !(t.namespaceURI === et && !pt[n]) && !yt[r] && (dt[r] || !mt[r]) : !("application/xhtml+xml" !== me || !at[e.namespaceURI]))
              }(e) ? (vt(e), !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !M(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Le && 3 === e.nodeType && (t = e.textContent, t = P(t, ve, " "), t = P(t, ge, " "), t = P(t, be, " "), e.textContent !== t && (b(i.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Et("afterSanitizeElements", e, null), !1) : (vt(e), !0)
            },
            Ct = function(e, t, r) {
              if (He && ("id" === t || "name" === t) && (r in s || r in ht)) return !1;
              if (Fe && !De[t] && M(Se, t));
              else if (Ie && M(xe, t));
              else if (!_e[t] || De[t]) {
                if (!(Tt(e) && (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, e) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(e)) && (Ae.attributeNameCheck instanceof RegExp && M(Ae.attributeNameCheck, t) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(t)) || "is" === t && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, r) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)))) return !1
              } else if (Je[t]);
              else if (M(Ce, P(r, Pe, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== C(r, "data:") || !Xe[e])
                if (Oe && !M(Ee, P(r, Pe, "")));
                else if (r) return !1;
              return !0
            },
            Tt = function(e) {
              return e.indexOf("-") > 0
            },
            Mt = function(t) {
              var r, n, a, s;
              Et("beforeSanitizeAttributes", t, null);
              var o = t.attributes;
              if (o) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: _e
                };
                for (s = o.length; s--;) {
                  var h = r = o[s],
                    u = h.name,
                    c = h.namespaceURI;
                  if (n = "value" === u ? r.value : T(r.value), a = ye(u), l.attrName = a, l.attrValue = n, l.keepAttr = !0, l.forceKeepAttr = void 0, Et("uponSanitizeAttribute", t, l), n = l.attrValue, !l.forceKeepAttr && (gt(u, t), l.keepAttr))
                    if (Re || !M(/\/>/i, n)) {
                      Le && (n = P(n, ve, " "), n = P(n, ge, " "), n = P(n, be, " "));
                      var p = ye(t.nodeName);
                      if (Ct(p, a, n)) {
                        if (!We || "id" !== a && "name" !== a || (gt(u, t), n = "user-content-" + n), ae && "object" === e(w) && "function" == typeof w.getAttributeType)
                          if (c);
                          else switch (w.getAttributeType(p, a)) {
                            case "TrustedHTML":
                              n = ae.createHTML(n);
                              break;
                            case "TrustedScriptURL":
                              n = ae.createScriptURL(n)
                          }
                        try {
                          c ? t.setAttributeNS(c, u, n) : t.setAttribute(u, n), g(i.removed)
                        } catch (e) {}
                      }
                    } else gt(u, t)
                }
                Et("afterSanitizeAttributes", t, null)
              }
            },
            _t = function e(t) {
              var r, n = St(t);
              for (Et("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) Et("uponSanitizeShadowNode", r, null), Pt(r) || (r.content instanceof o && e(r.content), Mt(r));
              Et("afterSanitizeShadowDOM", t, null)
            };
          return i.sanitize = function(t) {
            var n, s, l, u, c, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((it = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !xt(t)) {
              if ("function" != typeof t.toString) throw _("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw _("dirty is not a string, aborting")
            }
            if (!i.isSupported) {
              if ("object" === e(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof t) return r.toStaticHTML(t);
                if (xt(t)) return r.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (Be || ct(p), i.removed = [], "string" == typeof t && (qe = !1), qe) {
              if (t.nodeName) {
                var f = ye(t.nodeName);
                if (!Te[f] || ke[f]) throw _("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof h) 1 === (s = (n = bt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? n = s : n.appendChild(s);
            else {
              if (!ze && !Le && !Ve && -1 === t.indexOf("<")) return ae && je ? ae.createHTML(t) : t;
              if (!(n = bt(t))) return ze ? null : je ? se : ""
            }
            n && Ne && vt(n.firstChild);
            for (var d = St(qe ? t : n); l = d.nextNode();) 3 === l.nodeType && l === u || Pt(l) || (l.content instanceof o && _t(l.content), Mt(l), u = l);
            if (u = null, qe) return t;
            if (ze) {
              if (Ge)
                for (c = ue.call(n.ownerDocument); n.firstChild;) c.appendChild(n.firstChild);
              else c = n;
              return (_e.shadowroot || _e.shadowrootmod) && (c = pe.call(a, c, !0)), c
            }
            var m = Ve ? n.outerHTML : n.innerHTML;
            return Ve && Te["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && M(Z, n.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + m), Le && (m = P(m, ve, " "), m = P(m, ge, " "), m = P(m, be, " ")), ae && je ? ae.createHTML(m) : m
          }, i.setConfig = function(e) {
            ct(e), Be = !0
          }, i.clearConfig = function() {
            lt = null, Be = !1
          }, i.isValidAttribute = function(e, t, r) {
            lt || ct({});
            var n = ye(e),
              i = ye(t);
            return Ct(n, i, r)
          }, i.addHook = function(e, t) {
            "function" == typeof t && (de[e] = de[e] || [], b(de[e], t))
          }, i.removeHook = function(e) {
            if (de[e]) return g(de[e])
          }, i.removeHooks = function(e) {
            de[e] && (de[e] = [])
          }, i.removeAllHooks = function() {
            de = {}
          }, i
        }()
      }()
    },
    65772: (e, t, r) => {
      var n;
      ! function(i, a, s, o) {
        "use strict";
        var l, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          u = a.createElement("div"),
          c = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(e, t, r) {
          return setTimeout(E(e, r), t)
        }

        function y(e, t, r) {
          return !!Array.isArray(e) && (v(e, r[t], r), !0)
        }

        function v(e, t, r) {
          var n;
          if (e)
            if (e.forEach) e.forEach(t, r);
            else if (e.length !== o)
            for (n = 0; n < e.length;) t.call(r, e[n], n, e), n++;
          else
            for (n in e) e.hasOwnProperty(n) && t.call(r, e[n], n, e)
        }

        function g(e, t, r) {
          var n = "DEPRECATED METHOD: " + t + "\n" + r + " AT \n";
          return function() {
            var t = new Error("get-stack-trace"),
              r = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = i.console && (i.console.warn || i.console.log);
            return a && a.call(i.console, n, r), e.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(e) {
          if (e === o || null === e) throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            if (n !== o && null !== n)
              for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
          }
          return t
        } : Object.assign;
        var b = g((function(e, t, r) {
            for (var n = Object.keys(t), i = 0; i < n.length;)(!r || r && e[n[i]] === o) && (e[n[i]] = t[n[i]]), i++;
            return e
          }), "extend", "Use `assign`."),
          S = g((function(e, t) {
            return b(e, t, !0)
          }), "merge", "Use `assign`.");

        function x(e, t, r) {
          var n, i = t.prototype;
          (n = e.prototype = Object.create(i)).constructor = e, n._super = i, r && l(n, r)
        }

        function E(e, t) {
          return function() {
            return e.apply(t, arguments)
          }
        }

        function P(e, t) {
          return typeof e == c ? e.apply(t && t[0] || o, t) : e
        }

        function C(e, t) {
          return e === o ? t : e
        }

        function T(e, t, r) {
          v(A(t), (function(t) {
            e.addEventListener(t, r, !1)
          }))
        }

        function M(e, t, r) {
          v(A(t), (function(t) {
            e.removeEventListener(t, r, !1)
          }))
        }

        function _(e, t) {
          for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
          }
          return !1
        }

        function w(e, t) {
          return e.indexOf(t) > -1
        }

        function A(e) {
          return e.trim().split(/\s+/g)
        }

        function k(e, t, r) {
          if (e.indexOf && !r) return e.indexOf(t);
          for (var n = 0; n < e.length;) {
            if (r && e[n][r] == t || !r && e[n] === t) return n;
            n++
          }
          return -1
        }

        function D(e) {
          return Array.prototype.slice.call(e, 0)
        }

        function I(e, t, r) {
          for (var n = [], i = [], a = 0; a < e.length;) {
            var s = t ? e[a][t] : e[a];
            k(i, s) < 0 && n.push(e[a]), i[a] = s, a++
          }
          return r && (n = t ? n.sort((function(e, r) {
            return e[t] > r[t]
          })) : n.sort()), n
        }

        function F(e, t) {
          for (var r, n, i = t[0].toUpperCase() + t.slice(1), a = 0; a < h.length;) {
            if ((n = (r = h[a]) ? r + i : t) in e) return n;
            a++
          }
          return o
        }
        var O = 1;

        function R(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || i
        }
        var L = "ontouchstart" in i,
          V = F(i, "PointerEvent") !== o,
          B = L && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          z = "mouse",
          G = 25,
          j = 1,
          H = 4,
          W = 8,
          U = 1,
          q = 2,
          $ = 4,
          Y = 8,
          K = 16,
          X = q | $,
          Z = Y | K,
          J = X | Z,
          Q = ["x", "y"],
          ee = ["clientX", "clientY"];

        function te(e, t) {
          var r = this;
          this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            P(e.options.enable, [e]) && r.handler(t)
          }, this.init()
        }

        function re(e, t, r) {
          var n = r.pointers.length,
            i = r.changedPointers.length,
            a = t & j && n - i == 0,
            s = t & (H | W) && n - i == 0;
          r.isFirst = !!a, r.isFinal = !!s, a && (e.session = {}), r.eventType = t,
            function(e, t) {
              var r = e.session,
                n = t.pointers,
                i = n.length;
              r.firstInput || (r.firstInput = ne(t)), i > 1 && !r.firstMultiple ? r.firstMultiple = ne(t) : 1 === i && (r.firstMultiple = !1);
              var a = r.firstInput,
                s = r.firstMultiple,
                l = s ? s.center : a.center,
                h = t.center = ie(n);
              t.timeStamp = d(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = le(l, h), t.distance = oe(l, h),
                function(e, t) {
                  var r = t.center,
                    n = e.offsetDelta || {},
                    i = e.prevDelta || {},
                    a = e.prevInput || {};
                  t.eventType !== j && a.eventType !== H || (i = e.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, n = e.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), t.deltaX = i.x + (r.x - n.x), t.deltaY = i.y + (r.y - n.y)
                }(r, t), t.offsetDirection = se(t.deltaX, t.deltaY);
              var u, c, p = ae(t.deltaTime, t.deltaX, t.deltaY);
              t.overallVelocityX = p.x, t.overallVelocityY = p.y, t.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, t.scale = s ? (u = s.pointers, oe((c = n)[0], c[1], ee) / oe(u[0], u[1], ee)) : 1, t.rotation = s ? function(e, t) {
                  return le(t[1], t[0], ee) + le(e[1], e[0], ee)
                }(s.pointers, n) : 0, t.maxPointers = r.prevInput ? t.pointers.length > r.prevInput.maxPointers ? t.pointers.length : r.prevInput.maxPointers : t.pointers.length,
                function(e, t) {
                  var r, n, i, a, s = e.lastInterval || t,
                    l = t.timeStamp - s.timeStamp;
                  if (t.eventType != W && (l > G || s.velocity === o)) {
                    var h = t.deltaX - s.deltaX,
                      u = t.deltaY - s.deltaY,
                      c = ae(l, h, u);
                    n = c.x, i = c.y, r = f(c.x) > f(c.y) ? c.x : c.y, a = se(h, u), e.lastInterval = t
                  } else r = s.velocity, n = s.velocityX, i = s.velocityY, a = s.direction;
                  t.velocity = r, t.velocityX = n, t.velocityY = i, t.direction = a
                }(r, t);
              var m = e.element;
              _(t.srcEvent.target, m) && (m = t.srcEvent.target), t.target = m
            }(e, r), e.emit("hammer.input", r), e.recognize(r), e.session.prevInput = r
        }

        function ne(e) {
          for (var t = [], r = 0; r < e.pointers.length;) t[r] = {
            clientX: p(e.pointers[r].clientX),
            clientY: p(e.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: d(),
            pointers: t,
            center: ie(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
          }
        }

        function ie(e) {
          var t = e.length;
          if (1 === t) return {
            x: p(e[0].clientX),
            y: p(e[0].clientY)
          };
          for (var r = 0, n = 0, i = 0; i < t;) r += e[i].clientX, n += e[i].clientY, i++;
          return {
            x: p(r / t),
            y: p(n / t)
          }
        }

        function ae(e, t, r) {
          return {
            x: t / e || 0,
            y: r / e || 0
          }
        }

        function se(e, t) {
          return e === t ? U : f(e) >= f(t) ? e < 0 ? q : $ : t < 0 ? Y : K
        }

        function oe(e, t, r) {
          r || (r = Q);
          var n = t[r[0]] - e[r[0]],
            i = t[r[1]] - e[r[1]];
          return Math.sqrt(n * n + i * i)
        }

        function le(e, t, r) {
          r || (r = Q);
          var n = t[r[0]] - e[r[0]],
            i = t[r[1]] - e[r[1]];
          return 180 * Math.atan2(i, n) / Math.PI
        }
        te.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(R(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && M(this.element, this.evEl, this.domHandler), this.evTarget && M(this.target, this.evTarget, this.domHandler), this.evWin && M(R(this.element), this.evWin, this.domHandler)
          }
        };
        var he = {
            mousedown: j,
            mousemove: 2,
            mouseup: H
          },
          ue = "mousedown",
          ce = "mousemove mouseup";

        function pe() {
          this.evEl = ue, this.evWin = ce, this.pressed = !1, te.apply(this, arguments)
        }
        x(pe, te, {
          handler: function(e) {
            var t = he[e.type];
            t & j && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = H), this.pressed && (t & H && (this.pressed = !1), this.callback(this.manager, t, {
              pointers: [e],
              changedPointers: [e],
              pointerType: z,
              srcEvent: e
            }))
          }
        });
        var fe = {
            pointerdown: j,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          de = {
            2: N,
            3: "pen",
            4: z,
            5: "kinect"
          },
          me = "pointerdown",
          ye = "pointermove pointerup pointercancel";

        function ve() {
          this.evEl = me, this.evWin = ye, te.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (me = "MSPointerDown", ye = "MSPointerMove MSPointerUp MSPointerCancel"), x(ve, te, {
          handler: function(e) {
            var t = this.store,
              r = !1,
              n = e.type.toLowerCase().replace("ms", ""),
              i = fe[n],
              a = de[e.pointerType] || e.pointerType,
              s = a == N,
              o = k(t, e.pointerId, "pointerId");
            i & j && (0 === e.button || s) ? o < 0 && (t.push(e), o = t.length - 1) : i & (H | W) && (r = !0), o < 0 || (t[o] = e, this.callback(this.manager, i, {
              pointers: t,
              changedPointers: [e],
              pointerType: a,
              srcEvent: e
            }), r && t.splice(o, 1))
          }
        });
        var ge = {
          touchstart: j,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function be() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, te.apply(this, arguments)
        }

        function Se(e, t) {
          var r = D(e.touches),
            n = D(e.changedTouches);
          return t & (H | W) && (r = I(r.concat(n), "identifier", !0)), [r, n]
        }
        x(be, te, {
          handler: function(e) {
            var t = ge[e.type];
            if (t === j && (this.started = !0), this.started) {
              var r = Se.call(this, e, t);
              t & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: N,
                srcEvent: e
              })
            }
          }
        });
        var xe = {
            touchstart: j,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Ee = "touchstart touchmove touchend touchcancel";

        function Pe() {
          this.evTarget = Ee, this.targetIds = {}, te.apply(this, arguments)
        }

        function Ce(e, t) {
          var r = D(e.touches),
            n = this.targetIds;
          if (t & (2 | j) && 1 === r.length) return n[r[0].identifier] = !0, [r, r];
          var i, a, s = D(e.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(e) {
              return _(e.target, l)
            })), t === j)
            for (i = 0; i < a.length;) n[a[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) n[s[i].identifier] && o.push(s[i]), t & (H | W) && delete n[s[i].identifier], i++;
          return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
        }
        x(Pe, te, {
          handler: function(e) {
            var t = xe[e.type],
              r = Ce.call(this, e, t);
            r && this.callback(this.manager, t, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: N,
              srcEvent: e
            })
          }
        });
        var Te = 2500;

        function Me() {
          te.apply(this, arguments);
          var e = E(this.handler, this);
          this.touch = new Pe(this.manager, e), this.mouse = new pe(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function _e(e, t) {
          e & j ? (this.primaryTouch = t.changedPointers[0].identifier, we.call(this, t)) : e & (H | W) && we.call(this, t)
        }

        function we(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var r = {
              x: t.clientX,
              y: t.clientY
            };
            this.lastTouches.push(r);
            var n = this.lastTouches;
            setTimeout((function() {
              var e = n.indexOf(r);
              e > -1 && n.splice(e, 1)
            }), Te)
          }
        }

        function Ae(e) {
          for (var t = e.srcEvent.clientX, r = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var i = this.lastTouches[n],
              a = Math.abs(t - i.x),
              s = Math.abs(r - i.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        x(Me, te, {
          handler: function(e, t, r) {
            var n = r.pointerType == N,
              i = r.pointerType == z;
            if (!(i && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (n) _e.call(this, t, r);
              else if (i && Ae.call(this, r)) return;
              this.callback(e, t, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var ke = F(u.style, "touchAction"),
          De = ke !== o,
          Ie = "compute",
          Fe = "auto",
          Oe = "manipulation",
          Re = "none",
          Le = "pan-x",
          Ve = "pan-y",
          Be = function() {
            if (!De) return !1;
            var e = {},
              t = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              e[r] = !t || i.CSS.supports("touch-action", r)
            })), e
          }();

        function Ne(e, t) {
          this.manager = e, this.set(t)
        }
        Ne.prototype = {
          set: function(e) {
            e == Ie && (e = this.compute()), De && this.manager.element.style && Be[e] && (this.manager.element.style[ke] = e), this.actions = e.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var e = [];
            return v(this.manager.recognizers, (function(t) {
                P(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
              })),
              function(e) {
                if (w(e, Re)) return Re;
                var t = w(e, Le),
                  r = w(e, Ve);
                return t && r ? Re : t || r ? t ? Le : Ve : w(e, Oe) ? Oe : Fe
              }(e.join(" "))
          },
          preventDefaults: function(e) {
            var t = e.srcEvent,
              r = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var n = this.actions,
                i = w(n, Re) && !Be[Re],
                a = w(n, Ve) && !Be[Ve],
                s = w(n, Le) && !Be[Le];
              if (i) {
                var o = 1 === e.pointers.length,
                  l = e.distance < 2,
                  h = e.deltaTime < 250;
                if (o && l && h) return
              }
              if (!s || !a) return i || a && r & X || s && r & Z ? this.preventSrc(t) : void 0
            }
          },
          preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
          }
        };
        var ze = 1,
          Ge = 32;

        function je(e) {
          this.options = l({}, this.defaults, e || {}), this.id = O++, this.manager = null, this.options.enable = C(this.options.enable, !0), this.state = ze, this.simultaneous = {}, this.requireFail = []
        }

        function He(e) {
          return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function We(e) {
          return e == K ? "down" : e == Y ? "up" : e == q ? "left" : e == $ ? "right" : ""
        }

        function Ue(e, t) {
          var r = t.manager;
          return r ? r.get(e) : e
        }

        function qe() {
          je.apply(this, arguments)
        }

        function $e() {
          qe.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Ye() {
          qe.apply(this, arguments)
        }

        function Ke() {
          je.apply(this, arguments), this._timer = null, this._input = null
        }

        function Xe() {
          qe.apply(this, arguments)
        }

        function Ze() {
          qe.apply(this, arguments)
        }

        function Je() {
          je.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qe(e, t) {
          return (t = t || {}).recognizers = C(t.recognizers, Qe.defaults.preset), new et(e, t)
        }

        function et(e, t) {
          this.options = l({}, Qe.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new(this.options.inputClass || (V ? ve : B ? Pe : L ? Me : pe))(this, re), this.touchAction = new Ne(this, this.options.touchAction), tt(this, !0), v(this.options.recognizers, (function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
          }), this)
        }

        function tt(e, t) {
          var r, n = e.element;
          n.style && (v(e.options.cssProps, (function(i, a) {
            r = F(n.style, a), t ? (e.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = e.oldCssProps[r] || ""
          })), t || (e.oldCssProps = {}))
        }
        je.prototype = {
          defaults: {},
          set: function(e) {
            return l(this.options, e), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(e) {
            if (y(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = Ue(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
          },
          dropRecognizeWith: function(e) {
            return y(e, "dropRecognizeWith", this) || (e = Ue(e, this), delete this.simultaneous[e.id]), this
          },
          requireFailure: function(e) {
            if (y(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === k(t, e = Ue(e, this)) && (t.push(e), e.requireFailure(this)), this
          },
          dropRequireFailure: function(e) {
            if (y(e, "dropRequireFailure", this)) return this;
            e = Ue(e, this);
            var t = k(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
          },
          emit: function(e) {
            var t = this,
              r = this.state;

            function n(r) {
              t.manager.emit(r, e)
            }
            r < 8 && n(t.options.event + He(r)), n(t.options.event), e.additionalEvent && n(e.additionalEvent), r >= 8 && n(t.options.event + He(r))
          },
          tryEmit: function(e) {
            if (this.canEmit()) return this.emit(e);
            this.state = Ge
          },
          canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
              if (!(this.requireFail[e].state & (Ge | ze))) return !1;
              e++
            }
            return !0
          },
          recognize: function(e) {
            var t = l({}, e);
            if (!P(this.options.enable, [this, t])) return this.reset(), void(this.state = Ge);
            56 & this.state && (this.state = ze), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
          },
          process: function(e) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x(qe, je, {
          defaults: {
            pointers: 1
          },
          attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
          },
          process: function(e) {
            var t = this.state,
              r = e.eventType,
              n = 6 & t,
              i = this.attrTest(e);
            return n && (r & W || !i) ? 16 | t : n || i ? r & H ? 8 | t : 2 & t ? 4 | t : 2 : Ge
          }
        }), x($e, qe, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var e = this.options.direction,
              t = [];
            return e & X && t.push(Ve), e & Z && t.push(Le), t
          },
          directionTest: function(e) {
            var t = this.options,
              r = !0,
              n = e.distance,
              i = e.direction,
              a = e.deltaX,
              s = e.deltaY;
            return i & t.direction || (t.direction & X ? (i = 0 === a ? U : a < 0 ? q : $, r = a != this.pX, n = Math.abs(e.deltaX)) : (i = 0 === s ? U : s < 0 ? Y : K, r = s != this.pY, n = Math.abs(e.deltaY))), e.direction = i, r && n > t.threshold && i & t.direction
          },
          attrTest: function(e) {
            return qe.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
          },
          emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = We(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
          }
        }), x(Ye, qe, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Re]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(e) {
            if (1 !== e.scale) {
              var t = e.scale < 1 ? "in" : "out";
              e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
          }
        }), x(Ke, je, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Fe]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              n = e.distance < t.threshold,
              i = e.deltaTime > t.time;
            if (this._input = e, !n || !r || e.eventType & (H | W) && !i) this.reset();
            else if (e.eventType & j) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), t.time, this);
            else if (e.eventType & H) return 8;
            return Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(e) {
            8 === this.state && (e && e.eventType & H ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), x(Xe, qe, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Re]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
          }
        }), x(Ze, qe, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: X | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return $e.prototype.getTouchAction.call(this)
          },
          attrTest: function(e) {
            var t, r = this.options.direction;
            return r & (X | Z) ? t = e.overallVelocity : r & X ? t = e.overallVelocityX : r & Z && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && r & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && f(t) > this.options.velocity && e.eventType & H
          },
          emit: function(e) {
            var t = We(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
          }
        }), x(Je, je, {
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
            return [Oe]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              n = e.distance < t.threshold,
              i = e.deltaTime < t.time;
            if (this.reset(), e.eventType & j && 0 === this.count) return this.failTimeout();
            if (n && i && r) {
              if (e.eventType != H) return this.failTimeout();
              var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                s = !this.pCenter || oe(this.pCenter, e.center) < t.posThreshold;
              if (this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), t.interval, this), 2) : 8
            }
            return Ge
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Ge
            }), this.options.interval, this), Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qe.VERSION = "2.0.7", Qe.defaults = {
          domEvents: !1,
          touchAction: Ie,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Xe, {
              enable: !1
            }],
            [Ye, {
                enable: !1
              },
              ["rotate"]
            ],
            [Ze, {
              direction: X
            }],
            [$e, {
                direction: X
              },
              ["swipe"]
            ],
            [Je],
            [Je, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Ke]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, et.prototype = {
          set: function(e) {
            return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
          },
          stop: function(e) {
            this.session.stopped = e ? 2 : 1
          },
          recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
              var r;
              this.touchAction.preventDefaults(e);
              var n = this.recognizers,
                i = t.curRecognizer;
              (!i || i && 8 & i.state) && (i = t.curRecognizer = null);
              for (var a = 0; a < n.length;) r = n[a], 2 === t.stopped || i && r != i && !r.canRecognizeWith(i) ? r.reset() : r.recognize(e), !i && 14 & r.state && (i = t.curRecognizer = r), a++
            }
          },
          get: function(e) {
            if (e instanceof je) return e;
            for (var t = this.recognizers, r = 0; r < t.length; r++)
              if (t[r].options.event == e) return t[r];
            return null
          },
          add: function(e) {
            if (y(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
          },
          remove: function(e) {
            if (y(e, "remove", this)) return this;
            if (e = this.get(e)) {
              var t = this.recognizers,
                r = k(t, e); - 1 !== r && (t.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(e, t) {
            if (e !== o && t !== o) {
              var r = this.handlers;
              return v(A(e), (function(e) {
                r[e] = r[e] || [], r[e].push(t)
              })), this
            }
          },
          off: function(e, t) {
            if (e !== o) {
              var r = this.handlers;
              return v(A(e), (function(e) {
                t ? r[e] && r[e].splice(k(r[e], t), 1) : delete r[e]
              })), this
            }
          },
          emit: function(e, t) {
            this.options.domEvents && function(e, t) {
              var r = a.createEvent("Event");
              r.initEvent(e, !0, !0), r.gesture = t, t.target.dispatchEvent(r)
            }(e, t);
            var r = this.handlers[e] && this.handlers[e].slice();
            if (r && r.length) {
              t.type = e, t.preventDefault = function() {
                t.srcEvent.preventDefault()
              };
              for (var n = 0; n < r.length;) r[n](t), n++
            }
          },
          destroy: function() {
            this.element && tt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qe, {
          INPUT_START: j,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: ze,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Ge,
          DIRECTION_NONE: U,
          DIRECTION_LEFT: q,
          DIRECTION_RIGHT: $,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: K,
          DIRECTION_HORIZONTAL: X,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: et,
          Input: te,
          TouchAction: Ne,
          TouchInput: Pe,
          MouseInput: pe,
          PointerEventInput: ve,
          TouchMouseInput: Me,
          SingleTouchInput: be,
          Recognizer: je,
          AttrRecognizer: qe,
          Tap: Je,
          Pan: $e,
          Swipe: Ze,
          Pinch: Ye,
          Rotate: Xe,
          Press: Ke,
          on: T,
          off: M,
          each: v,
          merge: S,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: E,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = Qe, (n = function() {
          return Qe
        }.call(t, r, t, e)) === o || (e.exports = n)
      }(window, document)
    },
    39216: (e, t, r) => {
      "use strict";
      var n = r(12400),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        o = {};

      function l(e) {
        return n.isMemo(e) ? s : o[e.$$typeof] || i
      }
      o[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, o[n.Memo] = s;
      var h = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        c = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (d) {
            var i = f(r);
            i && i !== d && e(t, i, n)
          }
          var s = u(r);
          c && (s = s.concat(c(r)));
          for (var o = l(t), m = l(r), y = 0; y < s.length; ++y) {
            var v = s[y];
            if (!(a[v] || n && n[v] || m && m[v] || o && o[v])) {
              var g = p(r, v);
              try {
                h(t, v, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    31580: (e, t, r) => {
      var n = r(36056).Symbol;
      e.exports = n
    },
    95992: (e, t, r) => {
      var n = r(31580),
        i = r(78584),
        a = r(49176),
        s = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? i(e) : a(e)
      }
    },
    96096: (e, t, r) => {
      var n = r(57520),
        i = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e
      }
    },
    81044: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    78584: (e, t, r) => {
      var n = r(31580),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.toString,
        o = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, o),
          r = e[o];
        try {
          e[o] = void 0;
          var n = !0
        } catch (e) {}
        var i = s.call(e);
        return n && (t ? e[o] = r : delete e[o]), i
      }
    },
    49176: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    36056: (e, t, r) => {
      var n = r(81044),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
      e.exports = a
    },
    57520: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    69760: (e, t, r) => {
      var n = r(89048),
        i = r(12721),
        a = r(80088),
        s = Math.max,
        o = Math.min;
      e.exports = function(e, t, r) {
        var l, h, u, c, p, f, d = 0,
          m = !1,
          y = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function g(t) {
          var r = l,
            n = h;
          return l = h = void 0, d = t, c = e.apply(n, r)
        }

        function b(e) {
          var r = e - f;
          return void 0 === f || r >= t || r < 0 || y && e - d >= u
        }

        function S() {
          var e = i();
          if (b(e)) return x(e);
          p = setTimeout(S, function(e) {
            var r = t - (e - f);
            return y ? o(r, u - (e - d)) : r
          }(e))
        }

        function x(e) {
          return p = void 0, v && l ? g(e) : (l = h = void 0, c)
        }

        function E() {
          var e = i(),
            r = b(e);
          if (l = arguments, h = this, f = e, r) {
            if (void 0 === p) return function(e) {
              return d = e, p = setTimeout(S, t), m ? g(e) : c
            }(f);
            if (y) return clearTimeout(p), p = setTimeout(S, t), g(f)
          }
          return void 0 === p && (p = setTimeout(S, t)), c
        }
        return t = a(t) || 0, n(r) && (m = !!r.leading, u = (y = "maxWait" in r) ? s(a(r.maxWait) || 0, t) : u, v = "trailing" in r ? !!r.trailing : v), E.cancel = function() {
          void 0 !== p && clearTimeout(p), d = 0, l = f = h = p = void 0
        }, E.flush = function() {
          return void 0 === p ? c : x(i())
        }, E
      }
    },
    89048: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    72316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    99464: (e, t, r) => {
      var n = r(95992),
        i = r(72316);
      e.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
      }
    },
    12721: (e, t, r) => {
      var n = r(36056);
      e.exports = function() {
        return n.Date.now()
      }
    },
    80088: (e, t, r) => {
      var n = r(96096),
        i = r(89048),
        a = r(99464),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        h = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = o.test(e);
        return r || l.test(e) ? h(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
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
          setWebWorker = function(e) {
            _useWebWorker = !!e
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(e) {
            locationHref = e
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(e) {
          return document.createElement(e)
        }

        function extendPrototype(e, t) {
          var r, n, i = e.length;
          for (r = 0; r < i; r += 1)
            for (var a in n = e[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (t.prototype[a] = n[a])
        }

        function getDescriptor(e, t) {
          return Object.getOwnPropertyDescriptor(e, t)
        }

        function createProxyFunction(e) {
          function t() {}
          return t.prototype = e, t
        }
        var audioControllerFactory = function() {
            function e(e) {
              this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
            }
            return e.prototype = {
                addAudio: function(e) {
                  this.audios.push(e)
                },
                pause: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].pause()
                },
                resume: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].resume()
                },
                setRate: function(e) {
                  var t, r = this.audios.length;
                  for (t = 0; t < r; t += 1) this.audios[t].setRate(e)
                },
                createAudio: function(e) {
                  return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                    src: [e]
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
                setAudioFactory: function(e) {
                  this.audioFactory = e
                },
                setVolume: function(e) {
                  this._volume = e, this._updateVolume()
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
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new e
              }
          }(),
          createTypedArray = function() {
            function e(e, t) {
              var r, n = 0,
                i = [];
              switch (e) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (n = 0; n < t; n += 1) i.push(r);
              return i
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, r) {
              return "float32" === t ? new Float32Array(r) : "int16" === t ? new Int16Array(r) : "uint8c" === t ? new Uint8ClampedArray(r) : e(t, r)
            } : e
          }();

        function createSizedArray(e) {
          return Array.apply(null, {
            length: e
          })
        }

        function _typeof$6(e) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$6(e)
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
          var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = t.length;
          for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        }(), BMMath.random = Math.random, BMMath.abs = function(e) {
          if ("object" === _typeof$6(e) && e.length) {
            var t, r = createSizedArray(e.length),
              n = e.length;
            for (t = 0; t < n; t += 1) r[t] = Math.abs(e[t]);
            return r
          }
          return Math.abs(e)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(e) {
          _shouldRoundValues = !!e
        }

        function bmRnd(e) {
          return _shouldRoundValues ? Math.round(e) : e
        }

        function styleDiv(e) {
          e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(e, t, r, n) {
          this.type = e, this.currentTime = t, this.totalTime = r, this.direction = n < 0 ? -1 : 1
        }

        function BMCompleteEvent(e, t) {
          this.type = e, this.direction = t < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(e, t, r, n) {
          this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = n < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(e, t, r) {
          this.type = e, this.firstFrame = t, this.totalFrames = r
        }

        function BMDestroyEvent(e, t) {
          this.type = e, this.target = t
        }

        function BMRenderFrameErrorEvent(e, t) {
          this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
        }

        function BMConfigErrorEvent(e) {
          this.type = "configError", this.nativeError = e
        }

        function BMAnimationConfigErrorEvent(e, t) {
          this.type = e, this.nativeError = t
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(e, t, r) {
          var n, i, a, s, o, l, h, u;
          switch (l = r * (1 - t), h = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), u = r * (1 - (1 - o) * t), s % 6) {
            case 0:
              n = r, i = u, a = l;
              break;
            case 1:
              n = h, i = r, a = l;
              break;
            case 2:
              n = l, i = r, a = u;
              break;
            case 3:
              n = l, i = h, a = r;
              break;
            case 4:
              n = u, i = l, a = r;
              break;
            case 5:
              n = r, i = l, a = h
          }
          return [n, i, a]
        }

        function RGBtoHSV(e, t, r) {
          var n, i = Math.max(e, t, r),
            a = Math.min(e, t, r),
            s = i - a,
            o = 0 === i ? 0 : s / i,
            l = i / 255;
          switch (i) {
            case a:
              n = 0;
              break;
            case e:
              n = t - r + s * (t < r ? 6 : 0), n /= 6 * s;
              break;
            case t:
              n = r - e + 2 * s, n /= 6 * s;
              break;
            case r:
              n = e - t + 4 * s, n /= 6 * s
          }
          return [n, o, l]
        }

        function addSaturationToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var e, t, r = [];
            for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = 1 === t.length ? "0" + t : t;
            return function(e, t, n) {
              return e < 0 && (e = 0), t < 0 && (t = 0), n < 0 && (n = 0), "#" + r[e] + r[t] + r[n]
            }
          }(),
          setSubframeEnabled = function(e) {
            subframeEnabled = !!e
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(e) {
            expressionsPlugin = e
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(e) {
            expressionsInterfaces = e
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(e) {
            defaultCurveSegments = e
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(e) {
            idPrefix$1 = e
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(e) {
          return document.createElementNS(svgNS, e)
        }

        function _typeof$5(e) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$5(e)
        }
        var dataManager = function() {
            var e, t, r = 1,
              n = [],
              i = {
                onmessage: function() {},
                postMessage: function(t) {
                  e({
                    data: t
                  })
                }
              },
              a = {
                postMessage: function(e) {
                  i.onmessage({
                    data: e
                  })
                }
              };

            function s() {
              t || (t = function(t) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {
                      type: "text/javascript"
                    }),
                    n = URL.createObjectURL(r);
                  return new Worker(n)
                }
                return e = t, i
              }((function(e) {
                if (a.dataManager || (a.dataManager = function() {
                    function e(i, a) {
                      var s, o, l, h, u, c, p, f = i.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (s = i[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var d = s.masksProperties;
                            for (h = d.length, l = 0; l < h; l += 1)
                              if (d[l].pt.k.i) n(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, u = 0; u < c; u += 1) d[l].pt.k[u].s && n(d[l].pt.k[u].s[0]), d[l].pt.k[u].e && n(d[l].pt.k[u].e[0])
                          }
                          0 === s.ty ? (s.layers = t(s.refId, a), e(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && (0 === (p = s).t.a.length && p.t.p)
                        }
                    }

                    function t(e, t) {
                      var r = function(e, t) {
                        for (var r = 0, n = t.length; r < n;) {
                          if (t[r].id === e) return t[r];
                          r += 1
                        }
                        return null
                      }(e, t);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(e) {
                      var t, i, a;
                      for (t = e.length - 1; t >= 0; t -= 1)
                        if ("sh" === e[t].ty)
                          if (e[t].ks.k.i) n(e[t].ks.k);
                          else
                            for (a = e[t].ks.k.length, i = 0; i < a; i += 1) e[t].ks.k[i].s && n(e[t].ks.k[i].s[0]), e[t].ks.k[i].e && n(e[t].ks.k[i].e[0]);
                      else "gr" === e[t].ty && r(e[t].it)
                    }

                    function n(e) {
                      var t, r = e.i.length;
                      for (t = 0; t < r; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
                    }

                    function i(e, t) {
                      var r = t ? t.split(".") : [100, 100, 100];
                      return e[0] > r[0] || !(r[0] > e[0]) && (e[1] > r[1] || !(r[1] > e[1]) && (e[2] > r[2] || !(r[2] > e[2]) && null))
                    }
                    var a, s = function() {
                        var e = [4, 4, 14];

                        function t(e) {
                          var t, r, n, i = e.length;
                          for (t = 0; t < i; t += 1) 5 === e[t].ty && (void 0, n = (r = e[t]).t.d, r.t.d = {
                            k: [{
                              s: n,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (i(e, r.v) && (t(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && t(r.assets[n].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(e) {
                        if (e.chars && !i(a, e.v)) {
                          var t, n = e.chars.length;
                          for (t = 0; t < n; t += 1) {
                            var s = e.chars[t];
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
                            }, e.chars[t].t || (s.data.shapes.push({
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
                        var e = [5, 7, 15];

                        function t(e) {
                          var t, r, n = e.length;
                          for (t = 0; t < n; t += 1) 5 === e[t].ty && (r = void 0, "number" == typeof(r = e[t].t.p).a && (r.a = {
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
                          if (i(e, r.v) && (t(r.layers), r.assets)) {
                            var n, a = r.assets.length;
                            for (n = 0; n < a; n += 1) r.assets[n].layers && t(r.assets[n].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var e = [4, 1, 9];

                        function t(e) {
                          var r, n, i, a = e.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === e[r].ty) t(e[r].it);
                            else if ("fl" === e[r].ty || "st" === e[r].ty)
                            if (e[r].c.k && e[r].c.k[0].i)
                              for (i = e[r].c.k.length, n = 0; n < i; n += 1) e[r].c.k[n].s && (e[r].c.k[n].s[0] /= 255, e[r].c.k[n].s[1] /= 255, e[r].c.k[n].s[2] /= 255, e[r].c.k[n].s[3] /= 255), e[r].c.k[n].e && (e[r].c.k[n].e[0] /= 255, e[r].c.k[n].e[1] /= 255, e[r].c.k[n].e[2] /= 255, e[r].c.k[n].e[3] /= 255);
                            else e[r].c.k[0] /= 255, e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255
                        }

                        function r(e) {
                          var r, n = e.length;
                          for (r = 0; r < n; r += 1) 4 === e[r].ty && t(e[r].shapes)
                        }
                        return function(t) {
                          if (i(e, t.v) && (r(t.layers), t.assets)) {
                            var n, a = t.assets.length;
                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                          }
                        }
                      }(),
                      u = function() {
                        var e = [4, 4, 18];

                        function t(e) {
                          var r, n, i;
                          for (r = e.length - 1; r >= 0; r -= 1)
                            if ("sh" === e[r].ty)
                              if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                              else
                                for (i = e[r].ks.k.length, n = 0; n < i; n += 1) e[r].ks.k[n].s && (e[r].ks.k[n].s[0].c = e[r].closed), e[r].ks.k[n].e && (e[r].ks.k[n].e[0].c = e[r].closed);
                          else "gr" === e[r].ty && t(e[r].it)
                        }

                        function r(e) {
                          var r, n, i, a, s, o, l = e.length;
                          for (n = 0; n < l; n += 1) {
                            if ((r = e[n]).hasMask) {
                              var h = r.masksProperties;
                              for (a = h.length, i = 0; i < a; i += 1)
                                if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                else
                                  for (o = h[i].pt.k.length, s = 0; s < o; s += 1) h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl), h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl)
                            }
                            4 === r.ty && t(r.shapes)
                          }
                        }
                        return function(t) {
                          if (i(e, t.v) && (r(t.layers), t.assets)) {
                            var n, a = t.assets.length;
                            for (n = 0; n < a; n += 1) t.assets[n].layers && r(t.assets[n].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(r) {
                        r.__complete || (h(r), s(r), o(r), l(r), u(r), e(r.layers, r.assets), function(r, n) {
                          if (r) {
                            var i = 0,
                              a = r.length;
                            for (i = 0; i < a; i += 1) 1 === r[i].t && (r[i].data.layers = t(r[i].data.refId, n), e(r[i].data.layers, n))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return c.checkColors = h, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = u, c.completeLayers = e, c
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function e(e) {
                      var t = e.getResponseHeader("content-type");
                      return t && "json" === e.responseType && -1 !== t.indexOf("json") || e.response && "object" === _typeof$5(e.response) ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null
                    }
                    return {
                      load: function(t, r, n, i) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (e) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = e(s), n(a);
                            else try {
                              a = e(s), n(a)
                            } catch (e) {
                              i && i(e)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), t, !0)
                        } catch (e) {
                          s.open(["G", "E", "T"].join(""), r + "/" + t, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === e.data.type) a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === e.data.type) {
                  var t = e.data.animation;
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                } else "loadData" === e.data.type && a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }))
              })), t.onmessage = function(e) {
                var t = e.data,
                  r = t.id,
                  i = n[r];
                n[r] = null, "success" === t.status ? i.onComplete(t.payload) : i.onError && i.onError()
              })
            }

            function o(e, t) {
              var i = "processId_" + (r += 1);
              return n[i] = {
                onComplete: e,
                onError: t
              }, i
            }
            return {
              loadAnimation: function(e, r, n) {
                s();
                var i = o(r, n);
                t.postMessage({
                  type: "loadAnimation",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              loadData: function(e, r, n) {
                s();
                var i = o(r, n);
                t.postMessage({
                  type: "loadData",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              completeAnimation: function(e, r, n) {
                s();
                var i = o(r, n);
                t.postMessage({
                  type: "complete",
                  animation: e,
                  id: i
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var e = function() {
              var e = createTag("canvas");
              e.width = 1, e.height = 1;
              var t = e.getContext("2d");
              return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
            }();

            function t() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function n(e, t, r) {
              var n = "";
              if (e.e) n = e.p;
              else if (t) {
                var i = e.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = t + i
              } else n = r, n += e.u ? e.u : "", n += e.p;
              return n
            }

            function i(e) {
              var t = 0,
                r = setInterval(function() {
                  (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(r)), t += 1
                }.bind(this), 50)
            }

            function a(e) {
              var t = {
                  assetData: e
                },
                r = n(e, this.assetsPath, this.path);
              return dataManager.loadData(r, function(e) {
                t.img = e, this._footageLoaded()
              }.bind(this), function() {
                t.img = {}, this._footageLoaded()
              }.bind(this)), t
            }

            function s() {
              this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(e, t) {
                var r;
                this.imagesLoadedCb = t;
                var n = e.length;
                for (r = 0; r < n; r += 1) e[r].layers || (e[r].t && "seq" !== e[r].t ? 3 === e[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(e[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(e[r]))))
              },
              setAssetsPath: function(e) {
                this.assetsPath = e || ""
              },
              setPath: function(e) {
                this.path = e || ""
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
              getAsset: function(e) {
                for (var t = 0, r = this.images.length; t < r;) {
                  if (this.images[t].assetData === e) return this.images[t].img;
                  t += 1
                }
                return null
              },
              createImgData: function(t) {
                var r = n(t, this.assetsPath, this.path),
                  i = createTag("img");
                i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), i.src = r;
                var a = {
                  img: i,
                  assetData: t
                };
                return a
              },
              createImageData: function(t) {
                var r = n(t, this.assetsPath, this.path),
                  i = createNS("image");
                isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                var a = {
                  img: i,
                  assetData: t
                };
                return a
              },
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: function(e, t) {
                "svg" === e ? (this._elementHelper = t, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(e, t) {
            if (this._cbs[e])
              for (var r = this._cbs[e], n = 0; n < r.length; n += 1) r[n](t)
          },
          addEventListener: function(e, t) {
            return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
              function() {
                this.removeEventListener(e, t)
              }.bind(this)
          },
          removeEventListener: function(e, t) {
            if (t) {
              if (this._cbs[e]) {
                for (var r = 0, n = this._cbs[e].length; r < n;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, n -= 1), r += 1;
                this._cbs[e].length || (this._cbs[e] = null)
              }
            } else this._cbs[e] = null
          }
        };
        var markerParser = function() {
            function e(e) {
              for (var t, r = e.split("\r\n"), n = {}, i = 0, a = 0; a < r.length; a += 1) 2 === (t = r[a].split(":")).length && (n[t[0]] = t[1].trim(), i += 1);
              if (0 === i) throw new Error;
              return n
            }
            return function(t) {
              for (var r = [], n = 0; n < t.length; n += 1) {
                var i = t[n],
                  a = {
                    time: i.tm,
                    duration: i.dr
                  };
                try {
                  a.payload = JSON.parse(t[n].cm)
                } catch (r) {
                  try {
                    a.payload = e(t[n].cm)
                  } catch (e) {
                    a.payload = {
                      name: t[n].cm
                    }
                  }
                }
                r.push(a)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function e(e) {
              this.compositions.push(e)
            }
            return function() {
              function t(e) {
                for (var t = 0, r = this.compositions.length; t < r;) {
                  if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                  t += 1
                }
                return null
              }
              return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
            }
          }(),
          renderers = {},
          registerRenderer = function(e, t) {
            renderers[e] = t
          };

        function getRenderer(e) {
          return renderers[e]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var e in renderers)
            if (renderers[e]) return e;
          return ""
        }

        function _typeof$4(e) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$4(e)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
          (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
          var t = "svg";
          e.animType ? t = e.animType : e.renderer && (t = e.renderer);
          var r = getRenderer(t);
          this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? this.loop = !0 : !1 === e.loop ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(e) {
          dataManager.completeAnimation(e, this.configAnimation)
        }, AnimationItem.prototype.setData = function(e, t) {
          t && "object" !== _typeof$4(t) && (t = JSON.parse(t));
          var r = {
              wrapper: e,
              animationData: t
            },
            n = e.attributes;
          r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : "";
          "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10));
          var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(e) {
          e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
          var t, r, n = this.animationData.layers,
            i = n.length,
            a = e.layers,
            s = a.length;
          for (r = 0; r < s; r += 1)
            for (t = 0; t < i;) {
              if (n[t].id === a[r].id) {
                n[t] = a[r];
                break
              }
              t += 1
            }
          if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
            for (i = e.assets.length, t = 0; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(e) {
          this.animationData = e;
          var t = getExpressionsPlugin();
          t && t.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var e = this.animationData.segments;
          if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var t = e.shift();
          this.timeCompleted = t.time * this.frameRate;
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
        }, AnimationItem.prototype.configAnimation = function(e) {
          if (this.renderer) try {
            this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (e) {
            this.triggerConfigError(e)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(e, t) {
          var r = "number" == typeof e ? e : void 0,
            n = "number" == typeof t ? t : void 0;
          this.renderer.updateContainerSize(r, n)
        }, AnimationItem.prototype.setSubframe = function(e) {
          this.isSubframeEnabled = !!e
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (e) {
            this.triggerRenderFrameError(e)
          }
        }, AnimationItem.prototype.play = function(e) {
          e && this.name !== e || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(e) {
          e && this.name !== e || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(e) {
          e && this.name !== e || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(e) {
          e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(e) {
          for (var t, r = 0; r < this.markers.length; r += 1)
            if ((t = this.markers[r]).payload && t.payload.name === e) return t;
          return null
        }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
          if (!r || this.name === r) {
            var n = Number(e);
            if (isNaN(n)) {
              var i = this.getMarkerData(e);
              i && this.goToAndStop(i.time, !0)
            } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
          if (!r || this.name === r) {
            var n = Number(e);
            if (isNaN(n)) {
              var i = this.getMarkerData(e);
              i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
            } else this.goToAndStop(n, t, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(e) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var t = this.currentRawFrame + e * this.frameModifier,
              r = !1;
            t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(e, t) {
          this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(e, t) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(e, t) {
          if (t && (this.segments.length = 0), "object" === _typeof$4(e[0])) {
            var r, n = e.length;
            for (r = 0; r < n; r += 1) this.segments.push(e[r])
          } else this.segments.push(e);
          this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(e) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(e) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
        }, AnimationItem.prototype.destroy = function(e) {
          e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
          this.currentRawFrame = e, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(e) {
          this.playSpeed = e, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(e) {
          this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(e) {
          this.loop = e
        }, AnimationItem.prototype.setVolume = function(e, t) {
          t && this.name !== t || this.audioController.setVolume(e)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(e) {
          e && this.name !== e || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(e) {
          e && this.name !== e || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(e) {
          var t = "";
          if (e.e) t = e.p;
          else if (this.assetsPath) {
            var r = e.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), t = this.assetsPath + r
          } else t = this.path, t += e.u ? e.u : "", t += e.p;
          return t
        }, AnimationItem.prototype.getAssetData = function(e) {
          for (var t = 0, r = this.assets.length; t < r;) {
            if (e === this.assets[t].id) return this.assets[t];
            t += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(e) {
          return e ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
          try {
            this.renderer.getElementByPath(e).updateDocumentData(t, r)
          } catch (e) {}
        }, AnimationItem.prototype.trigger = function(e) {
          if (this._cbs && this._cbs[e]) switch (e) {
            case "enterFrame":
              this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(e, new BMDestroyEvent(e, this));
              break;
            default:
              this.triggerEvent(e)
          }
          "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
          var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        }, AnimationItem.prototype.triggerConfigError = function(e) {
          var t = new BMConfigErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        };
        var animationManager = function() {
            var e = {},
              t = [],
              r = 0,
              n = 0,
              i = 0,
              a = !0,
              s = !1;

            function o(e) {
              for (var r = 0, i = e.target; r < n;) t[r].animation === i && (t.splice(r, 1), r -= 1, n -= 1, i.isPaused || u()), r += 1
            }

            function l(e, r) {
              if (!e) return null;
              for (var i = 0; i < n;) {
                if (t[i].elem === e && null !== t[i].elem) return t[i].animation;
                i += 1
              }
              var a = new AnimationItem;
              return c(a, e), a.setData(e, r), a
            }

            function h() {
              i += 1, d()
            }

            function u() {
              i -= 1
            }

            function c(e, r) {
              e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", u), t.push({
                elem: r,
                animation: e
              }), n += 1
            }

            function p(e) {
              var o, l = e - r;
              for (o = 0; o < n; o += 1) t[o].animation.advanceTime(l);
              r = e, i && !s ? window.requestAnimationFrame(p) : a = !0
            }

            function f(e) {
              r = e, window.requestAnimationFrame(p)
            }

            function d() {
              !s && i && a && (window.requestAnimationFrame(f), a = !1)
            }
            return e.registerAnimation = l, e.loadAnimation = function(e) {
              var t = new AnimationItem;
              return c(t, null), t.setParams(e), t
            }, e.setSpeed = function(e, r) {
              var i;
              for (i = 0; i < n; i += 1) t[i].animation.setSpeed(e, r)
            }, e.setDirection = function(e, r) {
              var i;
              for (i = 0; i < n; i += 1) t[i].animation.setDirection(e, r)
            }, e.play = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.play(e)
            }, e.pause = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.pause(e)
            }, e.stop = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.stop(e)
            }, e.togglePause = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.togglePause(e)
            }, e.searchAnimations = function(e, t, r) {
              var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = i.length;
              for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], e);
              if (t && 0 === a) {
                r || (r = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, e)
              }
            }, e.resize = function() {
              var e;
              for (e = 0; e < n; e += 1) t[e].animation.resize()
            }, e.goToAndStop = function(e, r, i) {
              var a;
              for (a = 0; a < n; a += 1) t[a].animation.goToAndStop(e, r, i)
            }, e.destroy = function(e) {
              var r;
              for (r = n - 1; r >= 0; r -= 1) t[r].animation.destroy(e)
            }, e.freeze = function() {
              s = !0
            }, e.unfreeze = function() {
              s = !1, d()
            }, e.setVolume = function(e, r) {
              var i;
              for (i = 0; i < n; i += 1) t[i].animation.setVolume(e, r)
            }, e.mute = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.mute(e)
            }, e.unmute = function(e) {
              var r;
              for (r = 0; r < n; r += 1) t[r].animation.unmute(e)
            }, e.getRegisteredAnimations = function() {
              var e, r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n.push(t[e].animation);
              return n
            }, e
          }(),
          BezierFactory = function() {
            var e = {
                getBezierEasing: function(e, r, n, i, a) {
                  var s = a || ("bez_" + e + "_" + r + "_" + n + "_" + i).replace(/\./g, "p");
                  if (t[s]) return t[s];
                  var o = new u([e, r, n, i]);
                  return t[s] = o, o
                }
              },
              t = {},
              r = 11,
              n = 1 / (r - 1),
              i = "function" == typeof Float32Array;

            function a(e, t) {
              return 1 - 3 * t + 3 * e
            }

            function s(e, t) {
              return 3 * t - 6 * e
            }

            function o(e) {
              return 3 * e
            }

            function l(e, t, r) {
              return ((a(t, r) * e + s(t, r)) * e + o(t)) * e
            }

            function h(e, t, r) {
              return 3 * a(t, r) * e * e + 2 * s(t, r) * e + o(t)
            }

            function u(e) {
              this._p = e, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return u.prototype = {
              get: function(e) {
                var t = this._p[0],
                  r = this._p[1],
                  n = this._p[2],
                  i = this._p[3];
                return this._precomputed || this._precompute(), t === r && n === i ? e : 0 === e ? 0 : 1 === e ? 1 : l(this._getTForX(e), r, i)
              },
              _precompute: function() {
                var e = this._p[0],
                  t = this._p[1],
                  r = this._p[2],
                  n = this._p[3];
                this._precomputed = !0, e === t && r === n || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var e = this._p[0], t = this._p[2], i = 0; i < r; ++i) this._mSampleValues[i] = l(i * n, e, t)
              },
              _getTForX: function(e) {
                for (var t = this._p[0], i = this._p[2], a = this._mSampleValues, s = 0, o = 1, u = r - 1; o !== u && a[o] <= e; ++o) s += n;
                var c = s + (e - a[--o]) / (a[o + 1] - a[o]) * n,
                  p = h(c, t, i);
                return p >= .001 ? function(e, t, r, n) {
                  for (var i = 0; i < 4; ++i) {
                    var a = h(t, r, n);
                    if (0 === a) return t;
                    t -= (l(t, r, n) - e) / a
                  }
                  return t
                }(e, c, t, i) : 0 === p ? c : function(e, t, r, n, i) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = t + (r - t) / 2, n, i) - e) > 0 ? r = s : t = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(e, s, s + n, t, i)
              }
            }, e
          }(),
          pooling = {
            double: function(e) {
              return e.concat(createSizedArray(e.length))
            }
          },
          poolFactory = function(e, t, r) {
            var n = 0,
              i = e,
              a = createSizedArray(i);
            return {
              newElement: function() {
                return n ? a[n -= 1] : t()
              },
              release: function(e) {
                n === i && (a = pooling.double(a), i *= 2), r && r(e), a[n] = e, n += 1
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
          }), (function(e) {
            var t, r = e.lengths.length;
            for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
            e.lengths.length = 0
          }));

        function bezFunction() {
          var e = Math;

          function t(e, t, r, n, i, a) {
            var s = e * n + t * i + r * a - i * n - a * e - r * t;
            return s > -.001 && s < .001
          }
          var r = function(e, t, r, n) {
            var i, a, s, o, l, h, u = getDefaultCurveSegments(),
              c = 0,
              p = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (s = r.length, i = 0; i < u; i += 1) {
              for (l = i / (u - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * t[a], p[a] = o, null !== f[a] && (h += bmPow(p[a] - f[a], 2)), f[a] = p[a];
              h && (c += h = bmSqrt(h)), d.percents[i] = l, d.lengths[i] = c
            }
            return d.addedLength = c, d
          };

          function n(e) {
            this.segmentLength = 0, this.points = new Array(e)
          }

          function i(e, t) {
            this.partialLength = e, this.point = t
          }
          var a, s = (a = {}, function(e, r, s, o) {
            var l = (e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var h, u, c, p, f, d, m, y = getDefaultCurveSegments(),
                v = 0,
                g = null;
              2 === e.length && (e[0] !== r[0] || e[1] !== r[1]) && t(e[0], e[1], r[0], r[1], e[0] + s[0], e[1] + s[1]) && t(e[0], e[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
              var b = new n(y);
              for (c = s.length, h = 0; h < y; h += 1) {
                for (m = createSizedArray(c), f = h / (y - 1), d = 0, u = 0; u < c; u += 1) p = bmPow(1 - f, 3) * e[u] + 3 * bmPow(1 - f, 2) * f * (e[u] + s[u]) + 3 * (1 - f) * bmPow(f, 2) * (r[u] + o[u]) + bmPow(f, 3) * r[u], m[u] = p, null !== g && (d += bmPow(m[u] - g[u], 2));
                v += d = bmSqrt(d), b.points[h] = new i(d, m), g = m
              }
              b.segmentLength = v, a[l] = b
            }
            return a[l]
          });

          function o(e, t) {
            var r = t.percents,
              n = t.lengths,
              i = r.length,
              a = bmFloor((i - 1) * e),
              s = e * t.addedLength,
              o = 0;
            if (a === i - 1 || 0 === a || s === n[a]) return r[a];
            for (var l = n[a] > s ? -1 : 1, h = !0; h;)
              if (n[a] <= s && n[a + 1] > s ? (o = (s - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || a >= i - 1) {
                if (a === i - 1) return r[a];
                h = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(e) {
              var t, n = segmentsLengthPool.newElement(),
                i = e.c,
                a = e.v,
                s = e.o,
                o = e.i,
                l = e._length,
                h = n.lengths,
                u = 0;
              for (t = 0; t < l - 1; t += 1) h[t] = r(a[t], a[t + 1], s[t], o[t + 1]), u += h[t].addedLength;
              return i && l && (h[t] = r(a[t], a[0], s[t], o[0]), u += h[t].addedLength), n.totalLength = u, n
            },
            getNewSegment: function(t, r, n, i, a, s, h) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var u, c = o(a, h),
                p = o(s = s > 1 ? 1 : s, h),
                f = t.length,
                d = 1 - c,
                m = 1 - p,
                y = d * d * d,
                v = c * d * d * 3,
                g = c * c * d * 3,
                b = c * c * c,
                S = d * d * m,
                x = c * d * m + d * c * m + d * d * p,
                E = c * c * m + d * c * p + c * d * p,
                P = c * c * p,
                C = d * m * m,
                T = c * m * m + d * p * m + d * m * p,
                M = c * p * m + d * p * p + c * m * p,
                _ = c * p * p,
                w = m * m * m,
                A = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                D = p * p * p;
              for (u = 0; u < f; u += 1) l[4 * u] = e.round(1e3 * (y * t[u] + v * n[u] + g * i[u] + b * r[u])) / 1e3, l[4 * u + 1] = e.round(1e3 * (S * t[u] + x * n[u] + E * i[u] + P * r[u])) / 1e3, l[4 * u + 2] = e.round(1e3 * (C * t[u] + T * n[u] + M * i[u] + _ * r[u])) / 1e3, l[4 * u + 3] = e.round(1e3 * (w * t[u] + A * n[u] + k * i[u] + D * r[u])) / 1e3;
              return l
            },
            getPointInSegment: function(t, r, n, i, a, s) {
              var l = o(a, s),
                h = 1 - l;
              return [e.round(1e3 * (h * h * h * t[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * i[0] + l * l * l * r[0])) / 1e3, e.round(1e3 * (h * h * h * t[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * i[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: t,
            pointOnLine3D: function(r, n, i, a, s, o, l, h, u) {
              if (0 === i && 0 === o && 0 === u) return t(r, n, a, s, l, h);
              var c, p = e.sqrt(e.pow(a - r, 2) + e.pow(s - n, 2) + e.pow(o - i, 2)),
                f = e.sqrt(e.pow(l - r, 2) + e.pow(h - n, 2) + e.pow(u - i, 2)),
                d = e.sqrt(e.pow(l - a, 2) + e.pow(h - s, 2) + e.pow(u - o, 2));
              return (c = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(e, t) {
          var r, n = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var i, a, s, o, l, h, u, c, p, f = t.lastIndex, d = f, m = this.keyframes.length - 1, y = !0; y;) {
            if (i = this.keyframes[d], a = this.keyframes[d + 1], d === m - 1 && e >= a.t - n) {
              i.h && (i = a), f = 0;
              break
            }
            if (a.t - n > e) {
              f = d;
              break
            }
            d < m - 1 ? d += 1 : (f = 0, y = !1)
          }
          s = this.keyframesMetadata[d] || {};
          var v, g = a.t - n,
            b = i.t - n;
          if (i.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
            var S = s.bezierData;
            if (e >= g || e < b) {
              var x = e >= g ? S.points.length - 1 : 0;
              for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = p), h = p((e - b) / (g - b));
              var E, P = S.segmentLength * h,
                C = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastAddedLength : 0;
              for (c = t.lastFrame < e && t._lastKeyframeIndex === d ? t._lastPoint : 0, y = !0, u = S.points.length; y;) {
                if (C += S.points[c].partialLength, 0 === P || 0 === h || c === S.points.length - 1) {
                  for (l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o];
                  break
                }
                if (P >= C && P < C + S.points[c + 1].partialLength) {
                  for (E = (P - C) / S.points[c + 1].partialLength, l = S.points[c].point.length, o = 0; o < l; o += 1) r[o] = S.points[c].point[o] + (S.points[c + 1].point[o] - S.points[c].point[o]) * E;
                  break
                }
                c < u - 1 ? c += 1 : y = !1
              }
              t._lastPoint = c, t._lastAddedLength = C - S.points[c].partialLength, t._lastKeyframeIndex = d
            }
          } else {
            var T, M, _, w, A;
            if (m = i.s.length, v = a.s || i.e, this.sh && 1 !== i.h) e >= g ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : e <= b ? (r[0] = i.s[0], r[1] = i.s[1], r[2] = i.s[2]) : quaternionToEuler(r, slerp(createQuaternion(i.s), createQuaternion(v), (e - b) / (g - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== i.h && (e >= g ? h = 1 : e < b ? h = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (T = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d], M = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d], _ = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d], w = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d], p = BezierFactory.getBezierEasing(T, M, _, w).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (T = i.o.x, M = i.o.y, _ = i.i.x, w = i.i.y, p = BezierFactory.getBezierEasing(T, M, _, w).get, i.keyframeMetadata = p), h = p((e - b) / (g - b)))), v = a.s || i.e, A = 1 === i.h ? i.s[d] : i.s[d] + (v[d] - i.s[d]) * h, "multidimensional" === this.propType ? r[d] = A : r = A
          }
          return t.lastIndex = f, r
        }

        function slerp(e, t, r) {
          var n, i, a, s, o, l = [],
            h = e[0],
            u = e[1],
            c = e[2],
            p = e[3],
            f = t[0],
            d = t[1],
            m = t[2],
            y = t[3];
          return (i = h * f + u * d + c * m + p * y) < 0 && (i = -i, f = -f, d = -d, m = -m, y = -y), 1 - i > 1e-6 ? (n = Math.acos(i), a = Math.sin(n), s = Math.sin((1 - r) * n) / a, o = Math.sin(r * n) / a) : (s = 1 - r, o = r), l[0] = s * h + o * f, l[1] = s * u + o * d, l[2] = s * c + o * m, l[3] = s * p + o * y, l
        }

        function quaternionToEuler(e, t) {
          var r = t[0],
            n = t[1],
            i = t[2],
            a = t[3],
            s = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i),
            o = Math.asin(2 * r * n + 2 * i * a),
            l = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i);
          e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
        }

        function createQuaternion(e) {
          var t = e[0] * degToRads,
            r = e[1] * degToRads,
            n = e[2] * degToRads,
            i = Math.cos(t / 2),
            a = Math.cos(r / 2),
            s = Math.cos(n / 2),
            o = Math.sin(t / 2),
            l = Math.sin(r / 2),
            h = Math.sin(n / 2);
          return [o * l * s + i * a * h, o * a * s + i * l * h, i * l * s - o * a * h, i * a * s - o * l * h]
        }

        function getValueAtCurrentTime() {
          var e = this.comp.renderedFrame - this.offsetTime,
            t = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var n = this.interpolateValue(e, this._caching);
            this.pv = n
          }
          return this._caching.lastFrame = e, this.pv
        }

        function setVValue(e) {
          var t;
          if ("unidimensional" === this.propType) t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
          else
            for (var r = 0, n = this.v.length; r < n;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var e;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var t = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(e) {
          this.effectsSequence.push(e), this.container.addDynamicProperty(this)
        }

        function ValueProperty(e, t, r, n) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(e, t, r, n) {
          var i;
          this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = n, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = t.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(e, t, r, n) {
          this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(e, t, r, n) {
          var i;
          this.propType = "multidimensional";
          var a, s, o, l, h = t.k.length;
          for (i = 0; i < h - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, s = t.k[i + 1].s, o = t.k[i].to, l = t.k[i].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (t.k[i].to = null, t.k[i].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = n, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var u = t.k[0].s.length;
          for (this.v = createTypedArray("float32", u), this.pv = createTypedArray("float32", u), i = 0; i < u; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", u)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(e, t, r, n, i) {
            var a;
            if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
              if ("number" == typeof t.k[0]) a = new MultiDimensionalProperty(e, t, n, i);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(e, t, n, i);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(e, t, n, i)
              } else a = new ValueProperty(e, t, n, i);
            return a.effectsSequence.length && i.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var e;
            this._mdf = !1;
            var t = this.dynamicProperties.length;
            for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(e) {
            this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(e, t) {
          this.c = e, this.setLength(t);
          for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(e) {
          for (; this._maxLength < e;) this.doubleArrayLength();
          this._length = e
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(e, t, r, n, i) {
          var a;
          switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
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
          }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = e, a[n][1] = t
        }, ShapePath.prototype.setTripleAt = function(e, t, r, n, i, a, s, o) {
          this.setXYAt(e, t, "v", s, o), this.setXYAt(r, n, "o", s, o), this.setXYAt(i, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var e = new ShapePath;
          e.setPathData(this.c, this._length);
          var t = this.v,
            r = this.o,
            n = this.i,
            i = 0;
          this.c && (e.setTripleAt(t[0][0], t[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = i; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), s -= 1;
          return e
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
            e._length = 0, e.c = !1
          })), factory.clone = function(e) {
            var t, r = factory.newElement(),
              n = void 0 === e._length ? e.v.length : e._length;
            for (r.setLength(n), r.c = e.c, t = 0; t < n; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(e) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var e;
          for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(e) {
              var t, r = e._length;
              for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
              e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var e = -999999;

            function t(e, t, r) {
              var n, i, a, s, o, l, h, u, c, p = r.lastIndex,
                f = this.keyframes;
              if (e < f[0].t - this.offsetTime) n = f[0].s[0], a = !0, p = 0;
              else if (e >= f[f.length - 1].t - this.offsetTime) n = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
              else {
                for (var d, m, y, v = p, g = f.length - 1, b = !0; b && (d = f[v], !((m = f[v + 1]).t - this.offsetTime > e));) v < g - 1 ? v += 1 : b = !1;
                if (y = this.keyframesMetadata[v] || {}, p = v, !(a = 1 === d.h)) {
                  if (e >= m.t - this.offsetTime) u = 1;
                  else if (e < d.t - this.offsetTime) u = 0;
                  else {
                    var S;
                    y.__fnct ? S = y.__fnct : (S = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = S), u = S((e - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  i = m.s ? m.s[0] : d.e[0]
                }
                n = d.s[0]
              }
              for (l = t._length, h = n.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < h; o += 1) c = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * u, t.i[s][o] = c, c = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * u, t.o[s][o] = c, c = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * u, t.v[s][o] = c
            }

            function r() {
              var t = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                i = this._caching.lastFrame;
              return i !== e && (i < r && t < r || i > n && t > n) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
            }

            function n() {
              this.paths = this.localShapeCollection
            }

            function i(e) {
              (function(e, t) {
                if (e._length !== t._length || e.c !== t.c) return !1;
                var r, n = e._length;
                for (r = 0; r < n; r += 1)
                  if (e.v[r][0] !== t.v[r][0] || e.v[r][1] !== t.v[r][1] || e.o[r][0] !== t.o[r][0] || e.o[r][1] !== t.o[r][1] || e.i[r][0] !== t.i[r][0] || e.i[r][1] !== t.i[r][1]) return !1;
                return !0
              })(this.v, e) || (this.v = shapePool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var e, t;
                    this.lock = !0, this._mdf = !1, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(e, t, r) {
              this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
              var i = 3 === r ? t.pt.k : t.ks.k;
              this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n, this.effectsSequence = []
            }

            function o(e) {
              this.effectsSequence.push(e), this.container.addDynamicProperty(this)
            }

            function l(t, i, a) {
              this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = n, this._caching = {
                lastFrame: e,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = i, l.prototype.addEffect = o;
            var h = function() {
                var e = roundCorner;

                function t(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return t.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var t = this.p.v[0],
                      r = this.p.v[1],
                      n = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = t, s.v[0][1] = r - i, s.v[1][0] = a ? t + n : t - n, s.v[1][1] = r, s.v[2][0] = t, s.v[2][1] = r + i, s.v[3][0] = a ? t - n : t + n, s.v[3][1] = r, s.i[0][0] = a ? t - n * e : t + n * e, s.i[0][1] = r - i, s.i[1][0] = a ? t + n : t - n, s.i[1][1] = r - i * e, s.i[2][0] = a ? t + n * e : t - n * e, s.i[2][1] = r + i, s.i[3][0] = a ? t - n : t + n, s.i[3][1] = r + i * e, s.o[0][0] = a ? t + n * e : t - n * e, s.o[0][1] = r - i, s.o[1][0] = a ? t + n : t - n, s.o[1][1] = r + i * e, s.o[2][0] = a ? t - n * e : t + n * e, s.o[2][1] = r + i, s.o[3][0] = a ? t - n : t + n, s.o[3][1] = r - i * e
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              u = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return e.prototype = {
                  reset: n,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var e, t, r, n, i = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / i,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      u = this.is.v,
                      c = 2 * Math.PI * o / (2 * i),
                      p = 2 * Math.PI * l / (2 * i),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, e = 0; e < i; e += 1) {
                      r = s ? h : u, n = s ? c : p;
                      var m = (t = s ? o : l) * Math.cos(f),
                        y = t * Math.sin(f),
                        v = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                        g = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                      m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - v * n * r * d, y - g * n * r * d, m + v * n * r * d, y + g * n * r * d, e, !0), s = !s, f += a * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var e, t = Math.floor(this.pt.v),
                      r = 2 * Math.PI / t,
                      n = this.or.v,
                      i = this.os.v,
                      a = 2 * Math.PI * n / (4 * t),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                      var l = n * Math.cos(s),
                        h = n * Math.sin(s),
                        u = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - u * a * i * o, h - c * a * i * o, l + u * a * i * o, h + c * a * i * o, e, !0), s += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              c = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return e.prototype = {
                  convertRectToPath: function() {
                    var e = this.p.v[0],
                      t = this.p.v[1],
                      r = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      i = bmMin(r, n, this.r.v),
                      a = i * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + i, e + r, t - n + a, 0, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - a, e + r, t + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t + n, e + r - i, t + n, e + r - a, t + n, 2, !0), this.v.setTripleAt(e - r + i, t + n, e - r + a, t + n, e - r + i, t + n, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - i, e - r, t + n - a, 4, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + a, e - r, t - n + i, 5, !0), this.v.setTripleAt(e - r + i, t - n, e - r + i, t - n, e - r + a, t - n, 6, !0), this.v.setTripleAt(e + r - i, t - n, e + r - a, t - n, e + r - i, t - n, 7, !0)) : (this.v.setTripleAt(e - r, t + n, e - r + a, t + n, e - r, t + n, 2), this.v.setTripleAt(e - r, t - n, e - r, t - n + a, e - r, t - n, 3))) : (this.v.setTripleAt(e + r, t - n + i, e + r, t - n + a, e + r, t - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + r - i, t - n, e + r - i, t - n, e + r - a, t - n, 1, !0), this.v.setTripleAt(e - r + i, t - n, e - r + a, t - n, e - r + i, t - n, 2, !0), this.v.setTripleAt(e - r, t - n + i, e - r, t - n + i, e - r, t - n + a, 3, !0), this.v.setTripleAt(e - r, t + n - i, e - r, t + n - a, e - r, t + n - i, 4, !0), this.v.setTripleAt(e - r + i, t + n, e - r + i, t + n, e - r + a, t + n, 5, !0), this.v.setTripleAt(e + r - i, t + n, e + r - a, t + n, e + r - i, t + n, 6, !0), this.v.setTripleAt(e + r, t + n - i, e + r, t + n - i, e + r, t + n - a, 7, !0)) : (this.v.setTripleAt(e - r, t - n, e - r + a, t - n, e - r, t - n, 1, !0), this.v.setTripleAt(e - r, t + n, e - r, t + n - a, e - r, t + n, 2, !0), this.v.setTripleAt(e + r, t + n, e + r - a, t + n, e + r, t + n, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: n
                }, extendPrototype([DynamicPropertyContainer], e), e
              }();
            return {
              getShapeProp: function(e, t, r) {
                var n;
                return 3 === r || 4 === r ? n = (3 === r ? t.pt : t.ks).k.length ? new l(e, t, r) : new s(e, t, r) : 5 === r ? n = new c(e, t) : 6 === r ? n = new h(e, t) : 7 === r && (n = new u(e, t)), n.k && e.addDynamicProperty(n), n
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
            var e = Math.cos,
              t = Math.sin,
              r = Math.tan,
              n = Math.round;

            function i() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var n = e(r),
                i = t(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(r) {
              if (0 === r) return this;
              var n = e(r),
                i = t(r);
              return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var n = e(r),
                i = t(r);
              return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var n = e(r),
                i = t(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(e, t) {
              return this._t(1, t, e, 1, 0, 0)
            }

            function u(e, t) {
              return this.shear(r(e), r(t))
            }

            function c(n, i) {
              var a = e(i),
                s = t(i);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(e, t, r) {
              return r || 0 === r || (r = 1), 1 === e && 1 === t && 1 === r ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function f(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
              return this.props[0] = e, this.props[1] = t, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = u, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(e, t, r) {
              return r = r || 0, 0 !== e || 0 !== t || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, r, 1) : this
            }

            function m(e, t, r, n, i, a, s, o, l, h, u, c, p, f, d, m) {
              var y = this.props;
              if (1 === e && 0 === t && 0 === r && 0 === n && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === u && 0 === c) return y[12] = y[12] * e + y[15] * p, y[13] = y[13] * a + y[15] * f, y[14] = y[14] * u + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
              var v = y[0],
                g = y[1],
                b = y[2],
                S = y[3],
                x = y[4],
                E = y[5],
                P = y[6],
                C = y[7],
                T = y[8],
                M = y[9],
                _ = y[10],
                w = y[11],
                A = y[12],
                k = y[13],
                D = y[14],
                I = y[15];
              return y[0] = v * e + g * i + b * l + S * p, y[1] = v * t + g * a + b * h + S * f, y[2] = v * r + g * s + b * u + S * d, y[3] = v * n + g * o + b * c + S * m, y[4] = x * e + E * i + P * l + C * p, y[5] = x * t + E * a + P * h + C * f, y[6] = x * r + E * s + P * u + C * d, y[7] = x * n + E * o + P * c + C * m, y[8] = T * e + M * i + _ * l + w * p, y[9] = T * t + M * a + _ * h + w * f, y[10] = T * r + M * s + _ * u + w * d, y[11] = T * n + M * o + _ * c + w * m, y[12] = A * e + k * i + D * l + I * p, y[13] = A * t + k * a + D * h + I * f, y[14] = A * r + k * s + D * u + I * d, y[15] = A * n + k * o + D * c + I * m, this._identityCalculated = !1, this
            }

            function y(e) {
              var t = e.props;
              return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }

            function v() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function g(e) {
              for (var t = 0; t < 16;) {
                if (e.props[t] !== this.props[t]) return !1;
                t += 1
              }
              return !0
            }

            function b(e) {
              var t;
              for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
              return e
            }

            function S(e) {
              var t;
              for (t = 0; t < 16; t += 1) this.props[t] = e[t]
            }

            function x(e, t, r) {
              return {
                x: e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12],
                y: e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13],
                z: e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function E(e, t, r) {
              return e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(e, t, r) {
              return e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13]
            }

            function C(e, t, r) {
              return e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
            }

            function T() {
              var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                t = this.props[5] / e,
                r = -this.props[1] / e,
                n = -this.props[4] / e,
                i = this.props[0] / e,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                o = new Matrix;
              return o.props[0] = t, o.props[1] = r, o.props[4] = n, o.props[5] = i, o.props[12] = a, o.props[13] = s, o
            }

            function M(e) {
              return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function _(e) {
              var t, r = e.length,
                n = [];
              for (t = 0; t < r; t += 1) n[t] = M(e[t]);
              return n
            }

            function w(e, t, r) {
              var n = createTypedArray("float32", 6);
              if (this.isIdentity()) n[0] = e[0], n[1] = e[1], n[2] = t[0], n[3] = t[1], n[4] = r[0], n[5] = r[1];
              else {
                var i = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                n[0] = e[0] * i + e[1] * s + l, n[1] = e[0] * a + e[1] * o + h, n[2] = t[0] * i + t[1] * s + l, n[3] = t[0] * a + t[1] * o + h, n[4] = r[0] * i + r[1] * s + l, n[5] = r[0] * a + r[1] * o + h
              }
              return n
            }

            function A(e, t, r) {
              return this.isIdentity() ? [e, t, r] : [e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(e, t) {
              if (this.isIdentity()) return e + "," + t;
              var r = this.props;
              return Math.round(100 * (e * r[0] + t * r[4] + r[12])) / 100 + "," + Math.round(100 * (e * r[1] + t * r[5] + r[13])) / 100
            }

            function D() {
              for (var e = 0, t = this.props, r = "matrix3d("; e < 16;) r += n(1e4 * t[e]) / 1e4, r += 15 === e ? ")" : ",", e += 1;
              return r
            }

            function I(e) {
              return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? n(1e4 * e) / 1e4 : e
            }

            function F() {
              var e = this.props;
              return "matrix(" + I(e[0]) + "," + I(e[1]) + "," + I(e[4]) + "," + I(e[5]) + "," + I(e[12]) + "," + I(e[13]) + ")"
            }
            return function() {
              this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = u, this.skewFromAxis = c, this.shear = h, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = y, this.applyToPoint = x, this.applyToX = E, this.applyToY = P, this.applyToZ = C, this.applyToPointArray = A, this.applyToTriplePoints = w, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = F, this.clone = b, this.cloneFromProps = S, this.equals = g, this.inversePoints = _, this.inversePoint = M, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(e) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$3(e)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(e) {
          setLocationHref(e)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(e) {
          setSubframeEnabled(e)
        }

        function setPrefix(e) {
          setIdPrefix(e)
        }

        function loadAnimation(e) {
          return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
        }

        function setQuality(e) {
          if ("string" == typeof e) switch (e) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(e, t) {
          "expressions" === e && setExpressionsPlugin(t)
        }

        function getFactory(e) {
          switch (e) {
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

        function getQueryVariable(e) {
          for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
            var n = t[r].split("=");
            if (decodeURIComponent(n[0]) == e) return decodeURIComponent(n[1])
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
        } catch (e) {}
        var ShapeModifiers = function() {
          var e = {},
            t = {};
          return e.registerModifier = function(e, r) {
            t[e] || (t[e] = r)
          }, e.getModifier = function(e, r, n) {
            return new t[e](r, n)
          }, e
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
          if (!this.closed) {
            e.sh.container.addDynamicProperty(e.sh);
            var t = {
              shape: e.sh,
              data: e,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(e, t) {
          this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
          this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(e) {
          e.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, n, i) {
          var a = [];
          t <= 1 ? a.push({
            s: e,
            e: t
          }) : e >= 1 ? a.push({
            s: e - 1,
            e: t - 1
          }) : (a.push({
            s: e,
            e: 1
          }), a.push({
            s: 0,
            e: t - 1
          }));
          var s, o, l = [],
            h = a.length;
          for (s = 0; s < h; s += 1) {
            var u, c;
            (o = a[s]).e * i < n || o.s * i > n + r || (u = o.s * i <= n ? 0 : (o.s * i - n) / r, c = o.e * i >= n + r ? 1 : (o.e * i - n) / r, l.push([u, c]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
          return e.length = 0, e
        }, TrimModifier.prototype.processShapes = function(e) {
          var t, r, n, i;
          if (this._mdf || e) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = t;
              t = r, r = s
            }
            t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
          } else t = this.sValue, r = this.eValue;
          var o, l, h, u, c, p = this.shapes.length,
            f = 0;
          if (r === t)
            for (i = 0; i < p; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
          else if (1 === r && 0 === t || 0 === r && 1 === t) {
            if (this._mdf)
              for (i = 0; i < p; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
          } else {
            var d, m, y = [];
            for (i = 0; i < p; i += 1)
              if ((d = this.shapes[i]).shape._mdf || this._mdf || e || 2 === this.m) {
                if (l = (n = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                else {
                  for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) u = bez.getSegmentsLength(n.shapes[o]), h.push(u), c += u.totalLength;
                  d.totalShapeLength = c, d.pathsData = h
                }
                f += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var v, g = t,
              b = r,
              S = 0;
            for (i = p - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (v = this.calculateShapeEdges(t, r, d.totalShapeLength, S, f), S += d.totalShapeLength) : v = [
                    [g, b]
                  ], l = v.length, o = 0; o < l; o += 1) {
                  g = v[o][0], b = v[o][1], y.length = 0, b <= 1 ? y.push({
                    s: d.totalShapeLength * g,
                    e: d.totalShapeLength * b
                  }) : g >= 1 ? y.push({
                    s: d.totalShapeLength * (g - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (y.push({
                    s: d.totalShapeLength * g,
                    e: d.totalShapeLength
                  }), y.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(d, y[0]);
                  if (y[0].s !== y[0].e) {
                    if (y.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, m), x = this.addShapes(d, y[1], E)
                      } else this.addPaths(x, m), x = this.addShapes(d, y[1]);
                    this.addPaths(x, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(e, t) {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) t.addShape(e[r])
        }, TrimModifier.prototype.addSegment = function(e, t, r, n, i, a, s) {
          i.setXYAt(t[0], t[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), s && i.setXYAt(e[0], e[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, n) {
          t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), n && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(e, t, r) {
          var n, i, a, s, o, l, h, u, c = e.pathsData,
            p = e.shape.paths.shapes,
            f = e.shape.paths._length,
            d = 0,
            m = [],
            y = !0;
          for (r ? (o = r._length, u = r._length) : (r = shapePool.newElement(), o = 0, u = 0), m.push(r), n = 0; n < f; n += 1) {
            for (l = c[n].lengths, r.c = p[n].c, a = p[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
              if (d + (s = l[i - 1]).addedLength < t.s) d += s.addedLength, r.c = !1;
              else {
                if (d > t.e) {
                  r.c = !1;
                  break
                }
                t.s <= d && t.e >= d + s.addedLength ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[i], p[n].v[i], r, o, y), y = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[i], p[n].o[i - 1], p[n].i[i], (t.s - d) / s.addedLength, (t.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), d += s.addedLength, o += 1
              } if (p[n].c && l.length) {
              if (s = l[i - 1], d <= t.e) {
                var v = l[i - 1].addedLength;
                t.s <= d && t.e >= d + v ? (this.addSegment(p[n].v[i - 1], p[n].o[i - 1], p[n].i[0], p[n].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(p[n].v[i - 1], p[n].v[0], p[n].o[i - 1], p[n].i[0], (t.s - d) / v, (t.e - d) / v, l[i - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
              } else r.c = !1;
              d += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[u][0], r.v[u][1], "i", u), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > t.e) break;
            n < f - 1 && (r = shapePool.newElement(), y = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
          var r = t / 100,
            n = [0, 0],
            i = e._length,
            a = 0;
          for (a = 0; a < i; a += 1) n[0] += e.v[a][0], n[1] += e.v[a][1];
          n[0] /= i, n[1] /= i;
          var s, o, l, h, u, c, p = shapePool.newElement();
          for (p.c = e.c, a = 0; a < i; a += 1) s = e.v[a][0] + (n[0] - e.v[a][0]) * r, o = e.v[a][1] + (n[1] - e.v[a][1]) * r, l = e.o[a][0] + (n[0] - e.o[a][0]) * -r, h = e.o[a][1] + (n[1] - e.o[a][1]) * -r, u = e.i[a][0] + (n[0] - e.i[a][0]) * -r, c = e.i[a][1] + (n[1] - e.i[a][1]) * -r, p.setTripleAt(s, o, l, h, u, c, a);
          return p
        }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
          var t, r, n, i, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var e = [0, 0];

          function t(e, t, r) {
            if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {
                k: [0, 0, 0]
              }, 1, 0, this), t.rx) {
              if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                var n, i = t.or.k.length;
                for (n = 0; n < i; n += 1) t.or.k[n].to = null, t.or.k[n].ti = null
              }
              this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(e, t.r || {
              k: 0
            }, 0, degToRads, this);
            t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {
              k: [100, 100, 100]
            }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return t.prototype = {
            applyToMatrix: function(e) {
              var t = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var n, i;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      n = [], i = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (n[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (n[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (n = [a.pv, s.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                    } else n = i = e;
                    this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
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
          }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(e) {
            this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
          }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(e, r, n) {
              return new t(e, r, n)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(e, t) {
          return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
        }

        function floatZero(e) {
          return Math.abs(e) <= 1e-5
        }

        function lerp(e, t, r) {
          return e * (1 - r) + t * r
        }

        function lerpPoint(e, t, r) {
          return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
        }

        function quadRoots(e, t, r) {
          if (0 === e) return [];
          var n = t * t - 4 * e * r;
          if (n < 0) return [];
          var i = -t / (2 * e);
          if (0 === n) return [i];
          var a = Math.sqrt(n) / (2 * e);
          return [i - a, i + a]
        }

        function polynomialCoefficients(e, t, r, n) {
          return [3 * t - e - 3 * r + n, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
        }

        function singlePoint(e) {
          return new PolynomialBezier(e, e, e, e, !1)
        }

        function PolynomialBezier(e, t, r, n, i) {
          i && pointEqual(e, t) && (t = lerpPoint(e, n, 1 / 3)), i && pointEqual(r, n) && (r = lerpPoint(e, n, 2 / 3));
          var a = polynomialCoefficients(e[0], t[0], r[0], n[0]),
            s = polynomialCoefficients(e[1], t[1], r[1], n[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, n]
        }

        function extrema(e, t) {
          var r = e.points[0][t],
            n = e.points[e.points.length - 1][t];
          if (r > n) {
            var i = n;
            n = r, r = i
          }
          for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = e.point(a[s])[t];
              o < r ? r = o : o > n && (n = o)
            } return {
            min: r,
            max: n
          }
        }

        function intersectData(e, t, r) {
          var n = e.boundingBox();
          return {
            cx: n.cx,
            cy: n.cy,
            width: n.width,
            height: n.height,
            bez: e,
            t: (t + r) / 2,
            t1: t,
            t2: r
          }
        }

        function splitData(e) {
          var t = e.bez.split(.5);
          return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
        }

        function boxIntersect(e, t) {
          return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
        }

        function intersectsImpl(e, t, r, n, i, a) {
          if (boxIntersect(e, t))
            if (r >= a || e.width <= n && e.height <= n && t.width <= n && t.height <= n) i.push([e.t, t.t]);
            else {
              var s = splitData(e),
                o = splitData(t);
              intersectsImpl(s[0], o[0], r + 1, n, i, a), intersectsImpl(s[0], o[1], r + 1, n, i, a), intersectsImpl(s[1], o[0], r + 1, n, i, a), intersectsImpl(s[1], o[1], r + 1, n, i, a)
            }
        }

        function crossProduct(e, t) {
          return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
        }

        function lineIntersection(e, t, r, n) {
          var i = [e[0], e[1], 1],
            a = [t[0], t[1], 1],
            s = [r[0], r[1], 1],
            o = [n[0], n[1], 1],
            l = crossProduct(crossProduct(i, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(e, t, r) {
          return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
        }

        function pointDistance(e, t) {
          return Math.hypot(e[0] - t[0], e[1] - t[1])
        }

        function pointEqual(e, t) {
          return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
        }

        function ZigZagModifier() {}

        function setPoint(e, t, r, n, i, a, s) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            h = t[0] + Math.cos(r) * n * i,
            u = t[1] - Math.sin(r) * n * i;
          e.setTripleAt(h, u, h + Math.cos(o) * a, u - Math.sin(o) * a, h + Math.cos(l) * s, u - Math.sin(l) * s, e.length())
        }

        function getPerpendicularVector(e, t) {
          var r = [t[0] - e[0], t[1] - e[1]],
            n = .5 * -Math.PI;
          return [Math.cos(n) * r[0] - Math.sin(n) * r[1], Math.sin(n) * r[0] + Math.cos(n) * r[1]]
        }

        function getProjectingAngle(e, t) {
          var r = 0 === t ? e.length() - 1 : t - 1,
            n = (t + 1) % e.length(),
            i = getPerpendicularVector(e.v[r], e.v[n]);
          return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
        }

        function zigZagCorner(e, t, r, n, i, a, s) {
          var o = getProjectingAngle(t, r),
            l = t.v[r % t._length],
            h = t.v[0 === r ? t._length - 1 : r - 1],
            u = t.v[(r + 1) % t._length],
            c = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
          setPoint(e, t.v[r % t._length], o, s, n, p / (2 * (i + 1)), c / (2 * (i + 1)), a)
        }

        function zigZagSegment(e, t, r, n, i, a) {
          for (var s = 0; s < n; s += 1) {
            var o = (s + 1) / (n + 1),
              l = 2 === i ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
              h = t.normalAngle(o);
            setPoint(e, t.point(o), h, a, r, l / (2 * (n + 1)), l / (2 * (n + 1)), i), a = -a
          }
          return a
        }

        function linearOffset(e, t, r) {
          var n = Math.atan2(t[0] - e[0], t[1] - e[1]);
          return [polarOffset(e, n, r), polarOffset(t, n, r)]
        }

        function offsetSegment(e, t) {
          var r, n, i, a, s, o, l;
          r = (l = linearOffset(e.points[0], e.points[1], t))[0], n = l[1], i = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
          var h = lineIntersection(r, n, i, a);
          null === h && (h = n);
          var u = lineIntersection(s, o, i, a);
          return null === u && (u = s), new PolynomialBezier(r, h, u, o)
        }

        function joinLines(e, t, r, n, i) {
          var a = t.points[3],
            s = r.points[0];
          if (3 === n) return a;
          if (pointEqual(a, s)) return a;
          if (2 === n) {
            var o = -t.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              u = h ? pointDistance(h, a) : pointDistance(a, s) / 2,
              c = polarOffset(a, o, 2 * u * roundCorner);
            return e.setXYAt(c[0], c[1], "o", e.length() - 1), c = polarOffset(s, l, 2 * u * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], e.length()), s
          }
          var p = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
          return p && pointDistance(p, a) < i ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : a
        }

        function getIntersection(e, t) {
          var r = e.intersections(t);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(e, t) {
          var r = e.slice(),
            n = t.slice(),
            i = getIntersection(e[e.length - 1], t[0]);
          return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], n[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1])) ? [
            [e[0].split(i[0])[0]],
            [t[t.length - 1].split(i[1])[1]]
          ] : [r, n]
        }

        function pruneIntersections(e) {
          for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
          return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
        }

        function offsetSegmentSplit(e, t) {
          var r, n, i, a, s = e.inflectionPoints();
          if (0 === s.length) return [offsetSegment(e, t)];
          if (1 === s.length || floatEqual(s[1], 1)) return r = (i = e.split(s[0]))[0], n = i[1], [offsetSegment(r, t), offsetSegment(n, t)];
          r = (i = e.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (i = i[1].split(o))[0], n = i[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(n, t)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(e) {
          for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", n = "normal", i = t.length, a = 0; a < i; a += 1) switch (t[a].toLowerCase()) {
            case "italic":
              n = "italic";
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
            style: n,
            weight: e.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, n, i, a) {
          var s = a ? -1 : 1,
            o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
            l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
          e.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]), t.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), t.rotate(-n.r.v * s * i), t.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2])
        }, RepeaterModifier.prototype.init = function(e, t, r, n) {
          for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
        }, RepeaterModifier.prototype.cloneElements = function(e) {
          var t = JSON.parse(JSON.stringify(e));
          return this.resetElements(t), t
        }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) e[r]._render = t, "gr" === e[r].ty && this.changeGroupRender(e[r].it, t)
        }, RepeaterModifier.prototype.processShapes = function(e) {
          var t, r, n, i, a, s = !1;
          if (this._mdf || e) {
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
            for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
              if (o = a < l, this._groups[n]._render = o, this.changeGroupRender(this._groups[n].it, o), !o) {
                var u = this.elemsData[n].it,
                  c = u[u.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var p = this.o.v,
              f = p % 1,
              d = p > 0 ? Math.floor(p) : Math.ceil(p),
              m = this.pMatrix.props,
              y = this.rMatrix.props,
              v = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var g, b, S = 0;
            if (p > 0) {
              for (; S < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), S += f)
            } else if (p < 0) {
              for (; S > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), S -= f)
            }
            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== S) {
                for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), g = 0; g < b; g += 1) r[g] = this.matrix.props[g];
              S += 1, a -= 1, n += i
            }
          } else
            for (a = this._currentCopies, n = 0, i = 1; a;) r = (t = this.elemsData[n].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, n += i;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(e, t) {
          var r, n = shapePool.newElement();
          n.c = e.c;
          var i, a, s, o, l, h, u, c, p, f, d, m, y = e._length,
            v = 0;
          for (r = 0; r < y; r += 1) i = e.v[r], s = e.o[r], a = e.i[r], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== y - 1 || e.c ? (o = 0 === r ? e.v[y - 1] : e.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = d = i[0] + (o[0] - i[0]) * h, c = m = i[1] - (i[1] - o[1]) * h, p = u - (u - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, v), v += 1, o = r === y - 1 ? e.v[0] : e.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, u = p = i[0] + (o[0] - i[0]) * h, c = f = i[1] + (o[1] - i[1]) * h, d = u - (u - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, n.setTripleAt(u, c, p, f, d, m, v), v += 1) : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], v), v += 1) : (n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], v), v += 1);
          return n
        }, RoundCornersModifier.prototype.processShapes = function(e) {
          var t, r, n, i, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(e) {
          return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(e) {
          return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[1], t[0])
        }, PolynomialBezier.prototype.normalAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[0], t[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(e)) return [];
          var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
            r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
          if (r < 0) return [];
          var n = Math.sqrt(r);
          return floatZero(n) ? n > 0 && n < 1 ? [t] : [] : [t - n, t + n].filter((function(e) {
            return e > 0 && e < 1
          }))
        }, PolynomialBezier.prototype.split = function(e) {
          if (e <= 0) return [singlePoint(this.points[0]), this];
          if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var t = lerpPoint(this.points[0], this.points[1], e),
            r = lerpPoint(this.points[1], this.points[2], e),
            n = lerpPoint(this.points[2], this.points[3], e),
            i = lerpPoint(t, r, e),
            a = lerpPoint(r, n, e),
            s = lerpPoint(i, a, e);
          return [new PolynomialBezier(this.points[0], t, i, s, !0), new PolynomialBezier(s, a, n, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var e = this.bounds();
          return {
            left: e.x.min,
            right: e.x.max,
            top: e.y.min,
            bottom: e.y.max,
            width: e.x.max - e.x.min,
            height: e.y.max - e.y.min,
            cx: (e.x.max + e.x.min) / 2,
            cy: (e.y.max + e.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(e, t, r) {
          void 0 === t && (t = 2), void 0 === r && (r = 7);
          var n = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, n, r), n
        }, PolynomialBezier.shapeSegment = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(e, t, r, n) {
          var i = e._length,
            a = shapePool.newElement();
          if (a.c = e.c, e.c || (i -= 1), 0 === i) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(e, 0);
          zigZagCorner(a, e, 0, t, r, n, s);
          for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, t, r, n, -s), o = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null, zigZagCorner(a, e, l + 1, t, r, n, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(e) {
          var t, r, n, i, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            u = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, h, u));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(e, t, r, n) {
          var i = shapePool.newElement();
          i.c = e.c;
          var a, s, o, l = e.length();
          e.c || (l -= 1);
          var h = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), h.push(offsetSegmentSplit(o, t));
          if (!e.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), h.push(offsetSegmentSplit(o, t));
          h = pruneIntersections(h);
          var u = null,
            c = null;
          for (a = 0; a < h.length; a += 1) {
            var p = h[a];
            for (c && (u = joinLines(i, c, p[0], r, n)), c = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], u && pointEqual(o.points[0], u) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), u = o.points[3]
          }
          return h.length && joinLines(i, c, h[0][0], r, n), i
        }, OffsetPathModifier.prototype.processShapes = function(e) {
          var t, r, n, i, a, s, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            u = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) s.addShape(this.processPath(t[n], l, u, h));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var e = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            t = [];
          t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            n = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function i(e, t) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = t;
            var n = createTag("span");
            n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r);
            var i = n.offsetWidth;
            return n.style.fontFamily = function(e) {
              var t, r = e.split(","),
                n = r.length,
                i = [];
              for (t = 0; t < n; t += 1) "sans-serif" !== r[t] && "monospace" !== r[t] && i.push(r[t]);
              return i.join(",")
            }(e) + ", " + t, {
              node: n,
              w: i,
              parent: r
            }
          }

          function a(e, t) {
            var r, n = document.body && t ? "svg" : "canvas",
              i = getFontProperties(e);
            if ("svg" === n) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), r = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = i.style + " " + i.weight + " 100px " + e.fFamily, r = s
            }
            return {
              measureText: function(e) {
                return "svg" === n ? (r.textContent = e, r.getComputedTextLength()) : r.measureText(e).width
              }
            }
          }

          function s(e) {
            var t = 0,
              r = e.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var n = e.charCodeAt(1);
              n >= 56320 && n <= 57343 && (t = 1024 * (r - 55296) + n - 56320 + 65536)
            }
            return t
          }

          function o(e) {
            var t = s(e);
            return t >= 127462 && t <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(e, t) {
            var r = e.toString(16) + t.toString(16);
            return -1 !== n.indexOf(r)
          }, l.isZeroWidthJoiner = function(e) {
            return 8205 === e
          }, l.isFlagEmoji = function(e) {
            return o(e.substr(0, 2)) && o(e.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(e) {
            return -1 !== t.indexOf(e)
          }, l.isRegionalFlag = function(e, t) {
            var n = s(e.substr(t, 2));
            if (n !== r) return !1;
            var i = 0;
            for (t += 2; i < 5;) {
              if ((n = s(e.substr(t, 2))) < 917601 || n > 917626) return !1;
              i += 1, t += 2
            }
            return 917631 === s(e.substr(t, 2))
          }, l.isVariationSelector = function(e) {
            return 65039 === e
          }, l.BLACK_FLAG_CODE_POINT = r;
          var h = {
            addChars: function(e) {
              if (e) {
                var t;
                this.chars || (this.chars = []);
                var r, n, i = e.length,
                  a = this.chars.length;
                for (t = 0; t < i; t += 1) {
                  for (r = 0, n = !1; r < a;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (n = !0), r += 1;
                  n || (this.chars.push(e[t]), a += 1)
                }
              }
            },
            addFonts: function(e, t) {
              if (e) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = e.list);
                if (!document.body) return this.isLoaded = !0, e.list.forEach((function(e) {
                  e.helper = a(e), e.cache = {}
                })), void(this.fonts = e.list);
                var r, n = e.list,
                  s = n.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var l, h, u = !0;
                  if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) {
                    if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length > 0 && (u = !1), u) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.setAttribute("f-family", n[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", t.appendChild(c)
                      }
                    } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(n[r].fPath) && (u = !1);
                      if (u) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = n[r].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[r].fPath === l[h].src && (u = !1);
                      if (u) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", n[r].fPath), t.appendChild(f)
                      }
                    }
                  } else n[r].loaded = !0, o -= 1;
                  n[r].helper = a(n[r], t), n[r].cache = {}, this.fonts.push(n[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(t, r, n) {
              for (var i = 0, a = this.chars.length; i < a;) {
                if (this.chars[i].ch === t && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                i += 1
              }
              return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, r, n)), e
            },
            getFontByName: function(e) {
              for (var t = 0, r = this.fonts.length; t < r;) {
                if (this.fonts[t].fName === e) return this.fonts[t];
                t += 1
              }
              return this.fonts[0]
            },
            measureText: function(e, t, r) {
              var n = this.getFontByName(t),
                i = e;
              if (!n.cache[i]) {
                var a = n.helper;
                if (" " === e) {
                  var s = a.measureText("|" + e + "|"),
                    o = a.measureText("||");
                  n.cache[i] = (s - o) / 100
                } else n.cache[i] = a.measureText(e) / 100
              }
              return n.cache[i] * r
            },
            checkLoadedFonts: function() {
              var e, t, r, n = this.fonts.length,
                i = n;
              for (e = 0; e < n; e += 1) this.fonts[e].loaded ? i -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (t = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, t.offsetWidth !== r ? (i -= 1, this.fonts[e].loaded = !0) : (t = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, t.offsetWidth !== r && (i -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
              0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = h, l
        }();

        function SlotManager(e) {
          this.animationData = e
        }

        function slotFactory(e) {
          return new SlotManager(e)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(e) {
          return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(e) {
            -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
          },
          removeRenderableComponent: function(e) {
            -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
          },
          prepareRenderableFrame: function(e) {
            this.checkLayerLimits(e)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(e) {
            this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var e, t = this.renderableComponents.length;
            for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
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
          }, function(e) {
            return blendModeEnums[e] || ""
          }),
          blendModeEnums;

        function SliderEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function AngleEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function ColorEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function PointEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function LayerIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function MaskIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function CheckboxEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(e, t) {
          var r, n = e.ef || [];
          this.effectElements = [];
          var i, a = n.length;
          for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], t), this.effectElements.push(i)
        }

        function GroupEffect(e, t) {
          this.init(e, t)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
        }

        function AudioElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
          var n = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
          var r;
          this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
          var n, i = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < i; r += 1) {
            switch (n = null, a[r].ty) {
              case 0:
                n = new SliderEffect(a[r], t, this);
                break;
              case 1:
                n = new AngleEffect(a[r], t, this);
                break;
              case 2:
                n = new ColorEffect(a[r], t, this);
                break;
              case 3:
                n = new PointEffect(a[r], t, this);
                break;
              case 4:
              case 7:
                n = new CheckboxEffect(a[r], t, this);
                break;
              case 10:
                n = new LayerIndexEffect(a[r], t, this);
                break;
              case 11:
                n = new MaskIndexEffect(a[r], t, this);
                break;
              case 5:
                n = new EffectsManager(a[r], t, this);
                break;
              default:
                n = new NoValueEffect(a[r], t, this)
            }
            n && this.effectElements.push(n)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var e = 0, t = this.data.masksProperties.length; e < t;) {
              if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
              e += 1
            }
            return !1
          },
          initExpressions: function() {
            var e = getExpressionInterfaces();
            if (e) {
              var t = e("layer"),
                r = e("effects"),
                n = e("shape"),
                i = e("text"),
                a = e("comp");
              this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = n(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var e = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
          },
          initBaseData: function(e, t, r) {
            this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(e, t) {
            var r, n = this.dynamicProperties.length;
            for (r = 0; r < n; r += 1)(t || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("footage");
            this.layerInterface = t(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(e) {
          if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
          else {
            var t = this.tm.v;
            this._currentTime = t
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
        }, AudioElement.prototype.setRate = function(e) {
          this.audio.rate(e)
        }, AudioElement.prototype.volume = function(e) {
          this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
          var t, r, n = this.layers.length;
          for (this.completeLayers = !0, t = n - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(e) {
          switch (e.ty) {
            case 2:
              return this.createImage(e);
            case 0:
              return this.createComp(e);
            case 1:
              return this.createSolid(e);
            case 3:
            default:
              return this.createNull(e);
            case 4:
              return this.createShape(e);
            case 5:
              return this.createText(e);
            case 6:
              return this.createAudio(e);
            case 13:
              return this.createCamera(e);
            case 15:
              return this.createFootage(e)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(e) {
          return new AudioElement(e, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(e) {
          return new FootageElement(e, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.buildItem(e);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(e) {
          var t;
          this.completeLayers = !1;
          var r, n = e.length,
            i = this.layers.length;
          for (t = 0; t < n; t += 1)
            for (r = 0; r < i;) {
              if (this.layers[r].id === e[t].id) {
                this.layers[r] = e[t];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(e) {
          this.globalData.projectInterface = e
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
          for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == t && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(e) {
          this.pendingElements.push(e)
        }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var n = this.createComp(e[t]);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, BaseRenderer.prototype.getElementById = function(e) {
          var t, r = this.elements.length;
          for (t = 0; t < r; t += 1)
            if (this.elements[t].data.ind === e) return this.elements[t];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(e) {
          var t, r = e.shift();
          if ("number" == typeof r) t = this.elements[r];
          else {
            var n, i = this.elements.length;
            for (n = 0; n < i; n += 1)
              if (this.elements[n].data.nm === r) {
                t = this.elements[n];
                break
              }
          }
          return 0 === e.length ? t : t.getElementByPath(e)
        }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
            w: e.w,
            h: e.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(e, t, r) {
          this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var n, i, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, h, u, c, p, f = this.masksProperties,
            d = 0,
            m = [],
            y = createElementID(),
            v = "clipPath",
            g = "clip-path";
          for (n = 0; n < s; n += 1)
            if (("a" !== f[n].mode && "n" !== f[n].mode || f[n].inv || 100 !== f[n].o.k || f[n].o.x) && (v = "mask", g = "mask"), "s" !== f[n].mode && "i" !== f[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), i = createNS("path"), "n" === f[n].mode) this.viewData[n] = {
              op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
              elem: i,
              lastPath: ""
            }, a.appendChild(i);
            else {
              var b;
              if (d += 1, i.setAttribute("fill", "s" === f[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[n].x.k ? (v = "mask", g = "mask", p = PropertyFactory.getProp(this.element, f[n].x, 0, null, this.element), b = createElementID(), (u = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), u.appendChild(c), a.appendChild(u), i.setAttribute("stroke", "s" === f[n].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[n] = {
                  elem: i,
                  x: p,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === f[n].mode) {
                l = m.length;
                var S = createNS("g");
                for (o = 0; o < l; o += 1) S.appendChild(m[o]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(i), a.appendChild(x), S.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), m.length = 0, m.push(S)
              } else m.push(i);
              f[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = {
                elem: i,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, f[n].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[n], 3),
                invRect: h
              }, this.viewData[n].prop.k || this.drawPath(f[n], this.viewData[n].prop.v, this.viewData[n])
            } for (this.maskElement = createNS(v), s = m.length, n = 0; n < s; n += 1) this.maskElement.appendChild(m[n]);
          d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(g, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var e = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: e,
              localMat: e,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var e, t = this.finalTransform.mat,
                r = 0,
                n = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < n;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < n; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var e = 0,
                t = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                  var n = this.localTransforms[e].matrix;
                  r.multiply(n)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var i = this.finalTransform.localOpacity;
                for (e = 0; e < t; e += 1) i *= .01 * this.localTransforms[e].opacity;
                this.finalTransform.localOpacity = i
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (e.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var t = 0,
                  r = e.length;
                for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
              }
            }
          },
          globalToLocal: function(e) {
            var t = [];
            t.push(this.finalTransform);
            for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && t.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
            var a, s = t.length;
            for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
            return e
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(e) {
          return this.viewData[e].prop
        }, MaskElement.prototype.renderFrame = function(e) {
          var t, r = this.element.finalTransform.mat,
            n = this.masksProperties.length;
          for (t = 0; t < n; t += 1)
            if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
              var i = this.storedData[t].expan;
              this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), i.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var e = "M0,0 ";
          return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, (e += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(e, t, r) {
          var n, i, a = " M" + t.v[0][0] + "," + t.v[0][1];
          for (i = t._length, n = 1; n < i; n += 1) a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[n][0] + "," + t.i[n][1] + " " + t.v[n][0] + "," + t.v[n][1];
          if (t.c && i > 1 && (a += " C" + t.o[n - 1][0] + "," + t.o[n - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
            var s = "";
            r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(e, t) {
              var r = createNS("filter");
              return r.setAttribute("id", e), !0 !== t && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var e = createNS("feColorMatrix");
              return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
            }
          },
          featureSupport = function() {
            var e = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(e) {
          var t, r, n = "SourceGraphic",
            i = e.data.ef ? e.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], t = 0; t < i; t += 1) {
            r = null;
            var l = e.data.ef[t].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(s, e.effectsManager.effectElements[t], e, idPrefix + o, n), n = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect$1(e, t, r) {
          registeredEffects$1[e] = {
            effect: t,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(e, t) {
          this.elem = e, this.pos = t
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, SVGEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            n = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
          return n
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var e = null;
            if (this.data.td) {
              this.matteMasks = {};
              var t = createNS("g");
              t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                n = createNS("path");
              n.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var i = createElementID();
              if (r.setAttribute("id", i), r.appendChild(n), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
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
          getMatte: function(e) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
              var t, r, n, i, a = this.layerId + "_" + e;
              if (1 === e || 3 === e) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(n), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== e || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(n), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
              } else if (2 === e) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var u = createNS("feFuncA");
                u.setAttribute("type", "table"), u.setAttribute("tableValues", "1.0 0.0"), h.appendChild(u), this.globalData.defs.appendChild(r);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(c), (n = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(c), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[e] = a
            }
            return this.matteMasks[e]
          },
          setMatte: function(e) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(e) {
            this.hierarchy = e
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
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
          prepareFrame: function(e) {
            this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(e) {
            var t, r = this.shapeModifiers.length;
            for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
          },
          isShapeInAnimatedModifiers: function(e) {
            for (var t = this.shapeModifiers.length; 0 < t;)
              if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var e, t = this.shapes.length;
              for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
              for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
            }
          },
          searchProcessedElement: function(e) {
            for (var t = this.processedElements, r = 0, n = t.length; r < n;) {
              if (t[r].elem === e) return t[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(e, t) {
            for (var r = this.processedElements, n = r.length; n;)
              if (r[n -= 1].elem === e) return void(r[n].pos = t);
            r.push(new ProcessedElement(e, t))
          },
          prepareFrame: function(e) {
            this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
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

        function SVGShapeData(e, t, r) {
          this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
          for (var n = 0, i = e.length; n < i;) {
            if (e[n].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            n += 1
          }
        }

        function SVGStyleData(e, t) {
          this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(e, t, r, n) {
          var i;
          this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
          var a, s = t.length || 0;
          for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
            n: t[i].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(e, t, r) {
          this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
          var n = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
          this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
        }

        function SVGGradientStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(e, t, r) {
          this.transform = {
            mProps: e,
            op: t,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(e) {
          if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
            var t = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < r; t += 1) "o" !== this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
          for (var r = 0, n = this.o.length / 2; r < n;) {
            if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var e = 0, t = this.data.k.k.length; e < t;) {
              if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
              e += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(e) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
            var t, r, n, i = 4 * this.data.p;
            for (t = 0; t < i; t += 1) r = t % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[t] * r), this.c[t] !== n && (this.c[t] = n, this._cmdf = !e);
            if (this.o.length)
              for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) r = t % 2 == 0 ? 100 : 1, n = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== n && (this.o[t - 4 * this.data.p] = n, this._omdf = !e);
            this._mdf = !e
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
          this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
          var r = createElementID(),
            n = createNS(1 === t.t ? "linearGradient" : "radialGradient");
          n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse");
          var i, a, s, o = [];
          for (s = 4 * t.g.p, a = 0; a < s; a += 4) i = createNS("stop"), n.appendChild(i), o.push(i);
          e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = n, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, n, i, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var h = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
            var u = this.stops;
            for (n = 4 * e.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), u.push(r);
            s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === e.ty && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), 1 === e.lj && s.setAttribute("stroke-miterlimit", e.ml)), this.of = h, this.ms = a, this.ost = u, this.maskId = l, t.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(e, t, r, n) {
            if (0 === t) return "";
            var i, a = e.o,
              s = e.i,
              o = e.v,
              l = " M" + n.applyToPointStringified(o[0][0], o[0][1]);
            for (i = 1; i < t; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]);
            return r && t && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var e = new Matrix,
              t = new Matrix;

            function r(e, t, r) {
              (r || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (r || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS())
            }

            function n() {}

            function i(r, n, i) {
              var a, s, o, l, h, u, c, p, f, d, m = n.styles.length,
                y = n.lvl;
              for (u = 0; u < m; u += 1) {
                if (l = n.sh._mdf || i, n.styles[u].lvl < y) {
                  for (p = t.reset(), f = y - n.styles[u].lvl, d = n.transformers.length - 1; !l && f > 0;) l = n.transformers[d].mProps._mdf || l, f -= 1, d -= 1;
                  if (l)
                    for (f = y - n.styles[u].lvl, d = n.transformers.length - 1; f > 0;) p.multiply(n.transformers[d].mProps.v), f -= 1, d -= 1
                } else p = e;
                if (s = (c = n.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, p));
                  n.caches[u] = o
                } else o = n.caches[u];
                n.styles[u].d += !0 === r.hd ? "" : o, n.styles[u]._mdf = l || n.styles[u]._mdf
              }
            }

            function a(e, t, r) {
              var n = t.style;
              (t.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("fill-opacity", t.o.v)
            }

            function s(e, t, r) {
              o(e, t, r), l(0, t, r)
            }

            function o(e, t, r) {
              var n, i, a, s, o, l = t.gf,
                h = t.g._hasOpacity,
                u = t.s.v,
                c = t.e.v;
              if (t.o._mdf || r) {
                var p = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                t.style.pElem.setAttribute(p, t.o.v)
              }
              if (t.s._mdf || r) {
                var f = 1 === e.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, u[0]), l.setAttribute(d, u[1]), h && !t.g._collapsable && (t.of.setAttribute(f, u[0]), t.of.setAttribute(d, u[1]))
              }
              if (t.g._cmdf || r) {
                n = t.cst;
                var m = t.g.c;
                for (a = n.length, i = 0; i < a; i += 1)(s = n[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
              }
              if (h && (t.g._omdf || r)) {
                var y = t.g.o;
                for (a = (n = t.g._collapsable ? t.cst : t.ost).length, i = 0; i < a; i += 1) s = n[i], t.g._collapsable || s.setAttribute("offset", y[2 * i] + "%"), s.setAttribute("stop-opacity", y[2 * i + 1])
              }
              if (1 === e.t)(t.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !t.g._collapsable && (t.of.setAttribute("x2", c[0]), t.of.setAttribute("y2", c[1])));
              else if ((t.s._mdf || t.e._mdf || r) && (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)), l.setAttribute("r", o), h && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)));
                var v = Math.atan2(c[1] - u[1], c[0] - u[0]),
                  g = t.h.v;
                g >= 1 ? g = .99 : g <= -1 && (g = -.99);
                var b = o * g,
                  S = Math.cos(v + t.a.v) * b + u[0],
                  x = Math.sin(v + t.a.v) * b + u[1];
                l.setAttribute("fx", S), l.setAttribute("fy", x), h && !t.g._collapsable && (t.of.setAttribute("fx", S), t.of.setAttribute("fy", x))
              }
            }

            function l(e, t, r) {
              var n = t.style,
                i = t.d;
              i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), t.c && (t.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || r) && (n.pElem.setAttribute("stroke-width", t.w.v), n.msElem && n.msElem.setAttribute("stroke-width", t.w.v))
            }
            return {
              createRenderFunction: function(e) {
                switch (e.ty) {
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
                    return i;
                  case "tr":
                    return r;
                  case "no":
                    return n;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
        }

        function LetterProps(e, t, r, n, i, a) {
          this.o = e, this.sw = t, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
            o: !0,
            sw: !!t,
            sc: !!r,
            fc: !!n,
            m: !0,
            p: !0
          }
        }

        function TextProperty(e, t) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
          var e, t, r, n, i = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (n = this.stylesList[r], o = !1, s.length = 0, e = 0; e < i; e += 1) - 1 !== (t = this.shapes[e]).styles.indexOf(n) && (s.push(t), o = t._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
          var r, n = new SVGStyleData(e, t),
            i = n.pElem;
          return "st" === e.ty ? r = new SVGStrokeStyleData(this, e, n) : "fl" === e.ty ? r = new SVGFillStyleData(this, e, n) : "gf" === e.ty || "gs" === e.ty ? (r = new("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === e.ty && (r = new SVGNoStyleData(this, e, n)), "st" !== e.ty && "gs" !== e.ty || (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === e.lj && i.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(n), this.addToAnimatedContents(e, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(e) {
          var t = new ShapeGroupData;
          return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
        }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
          var r = TransformPropertyFactory.getTransformProperty(this, e, this),
            n = new SVGTransformData(r, r.o, t);
          return this.addToAnimatedContents(e, n), n
        }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
          var n = 4;
          "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7);
          var i = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, n, this));
          return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
          for (var r = 0, n = this.animatedContents.length; r < n;) {
            if (this.animatedContents[r].element === t) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(e),
            element: t,
            data: e
          })
        }, SVGShapeElement.prototype.setElementStyles = function(e) {
          var t, r = e.styles,
            n = this.stylesList.length;
          for (t = 0; t < n; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(e, t, r, n, i, a, s) {
          var o, l, h, u, c, p, f = [].concat(a),
            d = e.length - 1,
            m = [],
            y = [];
          for (o = d; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(e[o])) ? t[o] = r[p - 1] : e[o]._render = s, "fl" === e[o].ty || "st" === e[o].ty || "gf" === e[o].ty || "gs" === e[o].ty || "no" === e[o].ty) p ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== n && n.appendChild(t[o].style.pElem), m.push(t[o].style);
            else if ("gr" === e[o].ty) {
              if (p)
                for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l];
              else t[o] = this.createGroupElement(e[o]);
              this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, f, s), e[o]._render && t[o].gr.parentNode !== n && n.appendChild(t[o].gr)
            } else "tr" === e[o].ty ? (p || (t[o] = this.createTransformElement(e[o], n)), u = t[o].transform, f.push(u)) : "sh" === e[o].ty || "rc" === e[o].ty || "el" === e[o].ty || "sr" === e[o].ty ? (p || (t[o] = this.createShapeElement(e[o], f, i)), this.setElementStyles(t[o])) : "tm" === e[o].ty || "rd" === e[o].ty || "ms" === e[o].ty || "pb" === e[o].ty || "zz" === e[o].ty || "op" === e[o].ty ? (p ? (c = t[o]).closed = !1 : ((c = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === e[o].ty && (p ? (c = t[o]).closed = !0 : (c = ShapeModifiers.getModifier(e[o].ty), t[o] = c, c.init(this, e, o, t), this.shapeModifiers.push(c), s = !1), y.push(c));
            this.addProcessedElement(e[o], o + 1)
          }
          for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
          for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var e;
          this.renderModifiers();
          var t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].reset();
          for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var e, t, r = this.animatedContents.length;
          for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(e, t, r, n, i, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== n && (this.fc = n, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, TextProperty.prototype.setCurrentData = function(e) {
          e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(e) {
          this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(e) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var t = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var n;
              this.lock = !0, this._mdf = !1;
              var i = this.effectsSequence.length,
                a = e || this.data.d.k[this.keysIndex].s;
              for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
              t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, n = e.length; r <= n - 1 && !(r === n - 1 || e[r + 1].t > t);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(e) {
          for (var t, r, n = [], i = 0, a = e.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, t = e.charCodeAt(i), l = e.charAt(i), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, i) ? l = e.substr(i, 14) : (r = e.charCodeAt(i + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)) : t > 56319 ? (r = e.charCodeAt(i + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (n[n.length - 1] += l, s = !1) : n.push(l), i += l.length;
          return n
        }, TextProperty.prototype.completeTextData = function(e) {
          e.__complete = !0;
          var t, r, n, i, a, s, o, l = this.elem.globalData.fontManager,
            h = this.data,
            u = [],
            c = 0,
            p = h.m.g,
            f = 0,
            d = 0,
            m = 0,
            y = [],
            v = 0,
            g = 0,
            b = l.getFontByName(e.f),
            S = 0,
            x = getFontProperties(b);
          e.fWeight = x.weight, e.fStyle = x.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
          var E, P = e.tr / 1e3 * e.finalSize;
          if (e.sz)
            for (var C, T, M = !0, _ = e.sz[0], w = e.sz[1]; M;) {
              C = 0, v = 0, r = (T = this.buildFinalText(e.t)).length, P = e.tr / 1e3 * e.finalSize;
              var A = -1;
              for (t = 0; t < r; t += 1) E = T[t].charCodeAt(0), n = !1, " " === T[t] ? A = t : 13 !== E && 3 !== E || (v = 0, n = !0, C += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(T[t], b.fStyle, b.fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(T[t], e.f, e.finalSize), v + S > _ && " " !== T[t] ? (-1 === A ? r += 1 : t = A, C += e.finalLineHeight || 1.2 * e.finalSize, T.splice(t, A === t ? 1 : 0, "\r"), A = -1, v = 0) : (v += S, v += P);
              C += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && w < C ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = T, r = e.finalText.length, M = !1)
            }
          v = -P, S = 0;
          var k, D = 0;
          for (t = 0; t < r; t += 1)
            if (n = !1, 13 === (E = (k = e.finalText[t]).charCodeAt(0)) || 3 === E ? (D = 0, y.push(v), g = v > g ? v : g, v = -2 * P, i = "", n = !0, m += 1) : i = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(e.f).fFamily), S = n ? 0 : o.w * e.finalSize / 100) : S = l.measureText(i, e.f, e.finalSize), " " === k ? D += S + P : (v += S + P + D, D = 0), u.push({
                l: S,
                an: S,
                add: f,
                n,
                anIndexes: [],
                val: i,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (f += S, "" === i || " " === i || t === r - 1) {
                for ("" !== i && " " !== i || (f -= S); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = S, d += 1;
                c += 1, f = 0
              }
            } else if (3 == p) {
            if (f += S, "" === i || t === r - 1) {
              for ("" === i && (f -= S); d <= t;) u[d].an = f, u[d].ind = c, u[d].extra = S, d += 1;
              f = 0, c += 1
            }
          } else u[c].ind = c, u[c].extra = 0, c += 1;
          if (e.l = u, g = v > g ? v : g, y.push(v), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
          else switch (e.boxWidth = g, e.j) {
            case 1:
              e.justifyOffset = -e.boxWidth;
              break;
            case 2:
              e.justifyOffset = -e.boxWidth / 2;
              break;
            default:
              e.justifyOffset = 0
          }
          e.lineWidths = y;
          var I, F, O, R, L = h.a;
          s = L.length;
          var V = [];
          for (a = 0; a < s; a += 1) {
            for ((I = L[a]).a.sc && (e.strokeColorAnim = !0), I.a.sw && (e.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (e.fillColorAnim = !0), R = 0, O = I.s.b, t = 0; t < r; t += 1)(F = u[t]).anIndexes[a] = R, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || t == r - 1) || 4 == O && (F.n || t == r - 1)) && (1 === I.s.rn && V.push(R), R += 1);
            h.a[a].s.totalChars = R;
            var B, N = -1;
            if (1 === I.s.rn)
              for (t = 0; t < r; t += 1) N != (F = u[t]).anIndexes[a] && (N = F.anIndexes[a], B = V.splice(Math.floor(Math.random() * V.length), 1)[0]), F.anIndexes[a] = B
          }
          e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(e, t) {
          t = void 0 === t ? this.keysIndex : t;
          var r = this.copyData({}, this.data.d.k[t].s);
          r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(e) {
          var t = this.data.d.k[e].s;
          t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
        }, TextProperty.prototype.canResizeFont = function(e) {
          this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(e) {
          this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var e = Math.max,
            t = Math.min,
            r = Math.floor;

          function n(e, t) {
            this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(e, t.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(e, t.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return n.prototype = {
            getMult: function(n) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var i = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(i, a, s, o).get,
                h = 0,
                u = this.finalS,
                c = this.finalE,
                p = this.data.sh;
              if (2 === p) h = l(h = c === u ? n >= c ? 1 : 0 : e(0, t(.5 / (c - u) + (n - u) / (c - u), 1)));
              else if (3 === p) h = l(h = c === u ? n >= c ? 0 : 1 : 1 - e(0, t(.5 / (c - u) + (n - u) / (c - u), 1)));
              else if (4 === p) c === u ? h = 0 : (h = e(0, t(.5 / (c - u) + (n - u) / (c - u), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === p) {
                if (c === u) h = 0;
                else {
                  var f = c - u,
                    d = -f / 2 + (n = t(e(0, n + .5 - u), c - u)),
                    m = f / 2;
                  h = Math.sqrt(1 - d * d / (m * m))
                }
                h = l(h)
              } else 6 === p ? (c === u ? h = 0 : (n = t(e(0, n + .5 - u), c - u), h = (1 + Math.cos(Math.PI + 2 * Math.PI * n / (c - u))) / 2), h = l(h)) : (n >= r(u) && (h = e(0, t(n - u < 0 ? t(c, 1) - (u - n) : c - n, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var y = .01 * this.sm.v;
                0 === y && (y = 1e-8);
                var v = .5 - .5 * y;
                h < v ? h = 0 : (h = (h - v) / y) > 1 && (h = 1)
              }
              return h * this.a.v
            },
            getValue: function(e) {
              this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / t,
                n = this.s.v / t + r,
                i = this.e.v / t + r;
              if (n > i) {
                var a = n;
                n = i, i = a
              }
              this.finalS = n, this.finalE = i
            }
          }, extendPrototype([DynamicPropertyContainer], n), {
            getTextSelectorProp: function(e, t, r) {
              return new n(e, t, r)
            }
          }
        }();

        function TextAnimatorDataProperty(e, t, r) {
          var n = {
              propType: !1
            },
            i = PropertyFactory.getProp,
            a = t.a;
          this.a = {
            r: a.r ? i(e, a.r, 0, degToRads, r) : n,
            rx: a.rx ? i(e, a.rx, 0, degToRads, r) : n,
            ry: a.ry ? i(e, a.ry, 0, degToRads, r) : n,
            sk: a.sk ? i(e, a.sk, 0, degToRads, r) : n,
            sa: a.sa ? i(e, a.sa, 0, degToRads, r) : n,
            s: a.s ? i(e, a.s, 1, .01, r) : n,
            a: a.a ? i(e, a.a, 1, 0, r) : n,
            o: a.o ? i(e, a.o, 0, .01, r) : n,
            p: a.p ? i(e, a.p, 1, 0, r) : n,
            sw: a.sw ? i(e, a.sw, 0, 0, r) : n,
            sc: a.sc ? i(e, a.sc, 1, 0, r) : n,
            fc: a.fc ? i(e, a.fc, 1, 0, r) : n,
            fh: a.fh ? i(e, a.fh, 0, 0, r) : n,
            fs: a.fs ? i(e, a.fs, 0, .01, r) : n,
            fb: a.fb ? i(e, a.fb, 0, .01, r) : n,
            t: a.t ? i(e, a.t, 0, 0, r) : n
          }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
        }

        function TextAnimatorProperty(e, t, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var e, t, r = this._textData.a.length,
            n = PropertyFactory.getProp;
          for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: n(this._elem, this._textData.p.a, 0, 0, this),
            f: n(this._elem, this._textData.p.f, 0, 0, this),
            l: n(this._elem, this._textData.p.l, 0, 0, this),
            r: n(this._elem, this._textData.p.r, 0, 0, this),
            p: n(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
          if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, n, i, a, s, o, l, h, u, c, p, f, d, m, y, v, g, b, S, x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              P = this._textData,
              C = this.mHelper,
              T = this._renderType,
              M = this.renderedLetters.length,
              _ = e.l;
            if (this._hasMaskedPath) {
              if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var w, A = S.v;
                for (this._pathData.r.v && (A = A.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = A._length - 1, v = 0, i = 0; i < a; i += 1) w = bez.buildBezierData(A.v[i], A.v[i + 1], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[i + 1][0] - A.v[i + 1][0], A.i[i + 1][1] - A.v[i + 1][1]]), s.tLength += w.segmentLength, s.segments.push(w), v += w.segmentLength;
                i = a, S.v.c && (w = bez.buildBezierData(A.v[i], A.v[0], [A.o[i][0] - A.v[i][0], A.o[i][1] - A.v[i][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), s.tLength += w.segmentLength, s.segments.push(w), v += w.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, h = 0, u = !0, m = s.segments, o < 0 && S.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
              f = (d = m[p].points)[c - 1], y = (l = d[c]).partialLength
            }
            a = _.length, r = 0, n = 0;
            var k, D, I, F, O, R = 1.2 * e.finalSize * .714,
              L = !0;
            I = E.length;
            var V, B, N, z, G, j, H, W, U, q, $, Y, K = -1,
              X = o,
              Z = p,
              J = c,
              Q = -1,
              ee = "",
              te = this.defaultPropsArray;
            if (2 === e.j || 1 === e.j) {
              var re = 0,
                ne = 0,
                ie = 2 === e.j ? -.5 : -1,
                ae = 0,
                se = !0;
              for (i = 0; i < a; i += 1)
                if (_[i].n) {
                  for (re && (re += ne); ae < i;) _[ae].animatorJustifyOffset = re, ae += 1;
                  re = 0, se = !0
                } else {
                  for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (se && 2 === e.j && (ne += k.t.v * ie), (O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars)).length ? re += k.t.v * O[0] * ie : re += k.t.v * O * ie);
                  se = !1
                } for (re && (re += ne); ae < i;) _[ae].animatorJustifyOffset = re, ae += 1
            }
            for (i = 0; i < a; i += 1) {
              if (C.reset(), z = 1, _[i].n) r = 0, n += e.yOffset, n += L ? 1 : 0, o = X, L = !1, this._hasMaskedPath && (c = J, f = (d = m[p = Z].points)[c - 1], y = (l = d[c]).partialLength, h = 0), ee = "", $ = "", U = "", Y = "", te = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== _[i].line) {
                    switch (e.j) {
                      case 1:
                        o += v - e.lineWidths[_[i].line];
                        break;
                      case 2:
                        o += (v - e.lineWidths[_[i].line]) / 2
                    }
                    Q = _[i].line
                  }
                  K !== _[i].ind && (_[K] && (o += _[K].extra), o += _[i].an / 2, K = _[i].ind), o += x[0] * _[i].an * .005;
                  var oe = 0;
                  for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && ((O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars)).length ? oe += k.p.v[0] * O[0] : oe += k.p.v[0] * O), k.a.propType && ((O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars)).length ? oe += k.a.v[0] * O[0] : oe += k.a.v[0] * O);
                  for (u = !0, this._pathData.a.v && (o = .5 * _[0].an + (v - this._pathData.f.v - .5 * _[0].an - .5 * _[_.length - 1].an) * K / (a - 1), o += this._pathData.f.v); u;) h + y >= o + oe || !d ? (g = (o + oe - h) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * g, N = f.point[1] + (l.point[1] - f.point[1]) * g, C.translate(-x[0] * _[i].an * .005, -x[1] * R * .01), u = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : S.v.c ? (c = 0, d = m[p = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, y = (l = d[c]).partialLength));
                  V = _[i].an / 2 - _[i].add, C.translate(-V, 0, 0)
                } else V = _[i].an / 2 - _[i].add, C.translate(-V, 0, 0), C.translate(-x[0] * _[i].an * .005, -x[1] * R * .01, 0);
                for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars), 0 === r && 0 === e.j || (this._hasMaskedPath ? O.length ? o += k.t.v * O[0] : o += k.t.v * O : O.length ? r += k.t.v * O[0] : r += k.t.v * O));
                for (e.strokeWidthAnim && (j = e.sw || 0), e.strokeColorAnim && (G = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (H = [e.fc[0], e.fc[1], e.fc[2]]), D = 0; D < I; D += 1)(k = E[D].a).a.propType && ((O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars)).length ? C.translate(-k.a.v[0] * O[0], -k.a.v[1] * O[1], k.a.v[2] * O[2]) : C.translate(-k.a.v[0] * O, -k.a.v[1] * O, k.a.v[2] * O));
                for (D = 0; D < I; D += 1)(k = E[D].a).s.propType && ((O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars)).length ? C.scale(1 + (k.s.v[0] - 1) * O[0], 1 + (k.s.v[1] - 1) * O[1], 1) : C.scale(1 + (k.s.v[0] - 1) * O, 1 + (k.s.v[1] - 1) * O, 1));
                for (D = 0; D < I; D += 1) {
                  if (k = E[D].a, O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars), k.sk.propType && (O.length ? C.skewFromAxis(-k.sk.v * O[0], k.sa.v * O[1]) : C.skewFromAxis(-k.sk.v * O, k.sa.v * O)), k.r.propType && (O.length ? C.rotateZ(-k.r.v * O[2]) : C.rotateZ(-k.r.v * O)), k.ry.propType && (O.length ? C.rotateY(k.ry.v * O[1]) : C.rotateY(k.ry.v * O)), k.rx.propType && (O.length ? C.rotateX(k.rx.v * O[0]) : C.rotateX(k.rx.v * O)), k.o.propType && (O.length ? z += (k.o.v * O[0] - z) * O[0] : z += (k.o.v * O - z) * O), e.strokeWidthAnim && k.sw.propType && (O.length ? j += k.sw.v * O[0] : j += k.sw.v * O), e.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? G[W] += (k.sc.v[W] - G[W]) * O[0] : G[W] += (k.sc.v[W] - G[W]) * O;
                  if (e.fillColorAnim && e.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (k.fc.v[W] - H[W]) * O[0] : H[W] += (k.fc.v[W] - H[W]) * O;
                    k.fh.propType && (H = O.length ? addHueToRGB(H, k.fh.v * O[0]) : addHueToRGB(H, k.fh.v * O)), k.fs.propType && (H = O.length ? addSaturationToRGB(H, k.fs.v * O[0]) : addSaturationToRGB(H, k.fs.v * O)), k.fb.propType && (H = O.length ? addBrightnessToRGB(H, k.fb.v * O[0]) : addBrightnessToRGB(H, k.fb.v * O))
                  }
                }
                for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && (O = E[D].s.getMult(_[i].anIndexes[D], P.a[D].s.totalChars), this._hasMaskedPath ? O.length ? C.translate(0, k.p.v[1] * O[0], -k.p.v[2] * O[1]) : C.translate(0, k.p.v[1] * O, -k.p.v[2] * O) : O.length ? C.translate(k.p.v[0] * O[0], k.p.v[1] * O[1], -k.p.v[2] * O[2]) : C.translate(k.p.v[0] * O, k.p.v[1] * O, -k.p.v[2] * O));
                if (e.strokeWidthAnim && (U = j < 0 ? 0 : j), e.strokeColorAnim && (q = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), e.fillColorAnim && e.fc && ($ = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -e.ls), C.translate(0, x[1] * R * .01 + n, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var le = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (le += 180), C.rotate(-le * Math.PI / 180)
                  }
                  C.translate(B, N, 0), o -= x[0] * _[i].an * .005, _[i + 1] && K !== _[i + 1].ind && (o += _[i].an / 2, o += .001 * e.tr * e.finalSize)
                } else {
                  switch (C.translate(r, n, 0), e.ps && C.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                    case 1:
                      C.translate(_[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[_[i].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(_[i].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[_[i].line]) / 2, 0, 0)
                  }
                  C.translate(0, -e.ls), C.translate(V, 0, 0), C.translate(x[0] * _[i].an * .005, x[1] * R * .01, 0), r += _[i].l + .001 * e.tr * e.finalSize
                }
                "html" === T ? ee = C.toCSS() : "svg" === T ? ee = C.to2dCSS() : te = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Y = z
              }
              M <= i ? (F = new LetterProps(Y, U, q, $, ee, te), this.renderedLetters.push(F), M += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update(Y, U, q, $, ee, te) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(e, t) {
          var r, n, i = t.length,
            a = "";
          for (r = 0; r < i; r += 1) "sh" === t[r].ty && (n = t[r].ks.k, a += buildShapeString(n, n.i.length, !0, e));
          return a
        }, ITextElement.prototype.updateDocumentData = function(e, t) {
          this.textProperty.updateDocumentData(e, t)
        }, ITextElement.prototype.canResizeFont = function(e) {
          this.textProperty.canResizeFont(e)
        }, ITextElement.prototype.setMinimumFontSize = function(e) {
          this.textProperty.setMinimumFontSize(e)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, n, i) {
          switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
            case 1:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
              break;
            case 2:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
          }
          t.translate(n, i, 0)
        }, ITextElement.prototype.buildColor = function(e) {
          return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(e, t, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
        }

        function ISolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function NullElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (t && t.title) {
            var n = createNS("title"),
              i = createElementID();
            n.setAttribute("id", i), n.textContent = t.title, this.svgElement.appendChild(n), r += i
          }
          if (t && t.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            progressiveLoad: t && t.progressiveLoad || !1,
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            viewBoxOnly: t && t.viewBoxOnly || !1,
            viewBoxSize: t && t.viewBoxSize || !1,
            className: t && t.className || "",
            id: t && t.id || "",
            focusable: t && t.focusable,
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "100%",
              height: t && t.filterSize && t.filterSize.height || "100%",
              x: t && t.filterSize && t.filterSize.x || "0%",
              y: t && t.filterSize && t.filterSize.y || "0%"
            },
            width: t && t.width,
            height: t && t.height,
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
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
        }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
          for (var t = 0, r = e.length, n = [], i = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (n.push(i), i = "") : i += e[t], t += 1;
          return n.push(i), n
        }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
          if (e.shapes && e.shapes.length) {
            var r = e.shapes[0];
            if (r.it) {
              var n = r.it[r.it.length - 1];
              n.s && (n.s.k[0] = t, n.s.k[1] = t)
            }
          }
          return e
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var e, t;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var n = this.globalData.fontManager.getFontByName(r.f);
          if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
          else {
            this.layerElement.setAttribute("font-family", n.fFamily);
            var i = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var s, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          t = o.length;
          var h = this.mHelper,
            u = this.data.singleShape,
            c = 0,
            p = 0,
            f = !0,
            d = .001 * r.tr * r.finalSize;
          if (!u || l || r.sz) {
            var m, y = this.textSpans.length;
            for (e = 0; e < t; e += 1) {
              if (this.textSpans[e] || (this.textSpans[e] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !u || 0 === e) {
                if (s = y > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), y <= e) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                    var v = createNS("g");
                    s.appendChild(v), this.textSpans[e].childSpan = v
                  }
                  this.textSpans[e].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (h.reset(), u && (o[e].n && (c = -d, p += r.yOffset, p += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(r, h, o[e].line, c, p), c += o[e].l || 0, c += d), l) {
                var g;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[e], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) g = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), g = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[e].glyph) {
                  var S = this.textSpans[e].glyph;
                  this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
                }
                this.textSpans[e].glyph = g, g._debug = !0, g.prepareFrame(0), g.renderFrame(), this.textSpans[e].childSpan.appendChild(g.layerElement), 1 === m.t && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else u && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            u && s && s.setAttribute("d", "")
          } else {
            var x = this.textContainer,
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
            x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", d);
            var P = this.buildTextContents(r.finalText);
            for (t = P.length, p = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = P[e], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
              span: null,
              glyph: null
            }), this.textSpans[e].span = s, p += r.finalLineHeight;
            this.layerElement.appendChild(x)
          }
          for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
              top: e.y,
              left: e.x,
              width: e.width,
              height: e.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var e, t, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var e, t;
            this._sizeChanged = !0;
            var r, n, i, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], n = this.textSpans[e].span, (i = this.textSpans[e].glyph) && i.renderFrame(), r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var e = createNS("rect");
          e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
        }, NullElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
          return new NullElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(e) {
          return new SVGShapeElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(e) {
          return new SVGTextLottieElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(e) {
          return new IImageElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(e) {
          return new ISolidElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(e) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var t = this.globalData.defs;
          this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
          var r = createNS("clipPath"),
            n = createNS("rect");
          n.setAttribute("width", e.w), n.setAttribute("height", e.h), n.setAttribute("x", 0), n.setAttribute("y", 0);
          var i = createElementID();
          r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
          var t = 0,
            r = this.layers.length;
          for (t = 0; t < r; t += 1)
            if (this.layers[t].ind === e) return t;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            t[e] = !0;
            var r = this.createItem(this.layers[e]);
            if (t[e] = r, getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
              var n = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
              if (-1 === n) return;
              if (this.elements[n] && !0 !== this.elements[n]) {
                var i = t[n].getMatte(this.layers[e].tt);
                r.setMatte(i)
              } else this.buildItem(n), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var e = this.pendingElements.pop();
            if (e.checkParenting(), e.data.tt)
              for (var t = 0, r = this.elements.length; t < r;) {
                if (this.elements[t] === e) {
                  var n = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                    i = this.elements[n].getMatte(this.layers[t].tt);
                  e.setMatte(i);
                  break
                }
                t += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(e) {
          if (this.renderedFrame !== e && !this.destroyed) {
            var t;
            null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
            if (this.globalData._mdf)
              for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            for (var n, i = 0; i < t;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
            n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(e) {
          if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
            else {
              var t = this.tm.v;
              t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
            }
            var r, n = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, ICompElement.prototype.setElements = function(e) {
          this.elements = e
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(e) {
            var t, r = e.length,
              n = "_";
            for (t = 0; t < r; t += 1) n += e[t].transform.key + "_";
            var i = this.sequences[n];
            return i || (i = {
              transforms: [].concat(e),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[n] = i, this.sequenceList.push(i)), i
          },
          processSequence: function(e, t) {
            for (var r = 0, n = e.transforms.length, i = t; r < n && !t;) {
              if (e.transforms[r].transform.mProps._mdf) {
                i = !0;
                break
              }
              r += 1
            }
            if (i)
              for (e.finalTransform.reset(), r = n - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
            e._mdf = i
          },
          processSequences: function(e) {
            var t, r = this.sequenceList.length;
            for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var e = "__lottie_element_luma_buffer",
            t = null,
            r = null,
            n = null;

          function i() {
            var i, a, s;
            t || (i = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", e), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), i.appendChild(a), i.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (i.style.display = "none"), n = i, document.body.appendChild(n), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: i,
            get: function(n) {
              return t || i(), t.width = n.width, t.height = n.height, r.filter = "url(#" + e + ")", t
            }
          }
        };

        function createCanvas(e, t) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
          var r = createTag("canvas");
          return r.width = e, r.height = t, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(e) {
          var t, r, n = e.data.ef ? e.data.ef.length : 0;
          for (this.filters = [], t = 0; t < n; t += 1) {
            r = null;
            var i = e.data.ef[t].ty;
            registeredEffects[i] && (r = new(0, registeredEffects[i].effect)(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
          }
          this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect(e, t) {
          registeredEffects[e] = {
            effect: t
          }
        }

        function CVMaskElement(e, t) {
          var r;
          this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var n = this.masksProperties.length,
            i = !1;
          for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = i, i && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, CVEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            n = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && n.push(this.filters[t]);
          return n
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var e, t, r, n, i = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), e = 0; e < s; e += 1)
              if ("n" !== this.masksProperties[e].mode) {
                var o;
                this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[e].v, t = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(t[0], t[1]);
                var l = n._length;
                for (o = 1; o < l; o += 1) r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
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

        function CVShapeData(e, t, r, n) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var i, a = 4;
          "rc" === t.ty ? a = 5 : "el" === t.ty ? a = 6 : "sr" === t.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
          var s, o = r.length;
          for (i = 0; i < o; i += 1) r[i].closed || (s = {
            transforms: n.addTransformSequence(r[i].transforms),
            trNodes: []
          }, this.styledShapes.push(s), r[i].elements.push(s))
        }

        function CVShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
        }

        function CVTextElement(e, t, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(e, t, r)
        }

        function CVImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
        }

        function CVSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var e;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
            var t = new CanvasContext;
            this.stack[e] = t
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(e, t, r) {
          this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(e, t) {
          this.animationItem = e, this.renderConfig = {
            clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
            context: t && t.context || null,
            progressiveLoad: t && t.progressiveLoad || !1,
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            className: t && t.className || "",
            id: t && t.id || "",
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
          }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function HShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(e, t, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
        }

        function HCameraElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
          var n = PropertyFactory.getProp;
          if (this.pe = n(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = n(this, e.ks.p.x, 1, 0, this), this.py = n(this, e.ks.p.y, 1, 0, this), this.pz = n(this, e.ks.p.z, 1, 0, this)) : this.p = n(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = n(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
            var i, a = e.ks.or.k.length;
            for (i = 0; i < a; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
          }
          this.or = n(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, e.ks.rx, 0, degToRads, this), this.ry = n(this, e.ks.ry, 0, degToRads, this), this.rz = n(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
        }

        function HybridRendererBase(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            },
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
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
              var e = this.globalData.canvasContext,
                t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(t);
              var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var e = this.globalData;
            if (e.blendMode !== this.data.bm) {
              e.blendMode = this.data.bm;
              var t = getBlendMode(this.data.bm);
              e.canvasContext.globalCompositeOperation = t
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
          clearCanvas: function(e) {
            e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[0].getContext("2d");
              this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[1],
                t = e.getContext("2d");
              if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(e) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var t = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
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
        }, CVShapeElement.prototype.createStyleElement = function(e, t) {
          var r = {
              data: e,
              type: e.ty,
              preTransforms: this.transformsManager.addTransformSequence(t),
              transforms: [],
              elements: [],
              closed: !0 === e.hd
            },
            n = {};
          if ("fl" === e.ty || "st" === e.ty ? (n.c = PropertyFactory.getProp(this, e.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (n.s = PropertyFactory.getProp(this, e.s, 1, null, this), n.e = PropertyFactory.getProp(this, e.e, 1, null, this), n.h = PropertyFactory.getProp(this, e.h || {
              k: 0
            }, 0, .01, this), n.a = PropertyFactory.getProp(this, e.a || {
              k: 0
            }, 0, degToRads, this), n.g = new GradientProperty(this, e.g, this)), n.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" === e.ty || "gs" === e.ty) {
            if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], 1 == e.lj && (r.ml = e.ml), n.w = PropertyFactory.getProp(this, e.w, 0, null, this), n.w.k || (r.wi = n.w.v), e.d) {
              var i = new DashProperty(this, e.d, "canvas", this);
              n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0])
            }
          } else r.r = 2 === e.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), n.style = r, n
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(e) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, e.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(e) {
          var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
          return this.shapes.push(t), this.addShapeToModifiers(t), t
        }, CVShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
          var t, r = this.stylesList.length;
          for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var e, t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(e, t, r, n, i) {
          var a, s, o, l, h, u, c = e.length - 1,
            p = [],
            f = [],
            d = [].concat(i);
          for (a = c; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = n, "fl" === e[a].ty || "st" === e[a].ty || "gf" === e[a].ty || "gs" === e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], d), p.push(t[a].style);
            else if ("gr" === e[a].ty) {
              if (l)
                for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
              else t[a] = this.createGroupElement(e[a]);
              this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, n, d)
            } else "tr" === e[a].ty ? (l || (u = this.createTransformElement(e[a]), t[a] = u), d.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" === e[a].ty || "rc" === e[a].ty || "el" === e[a].ty || "sr" === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" === e[a].ty || "rd" === e[a].ty || "pb" === e[a].ty || "zz" === e[a].ty || "op" === e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), n = !1), f.push(h));
            this.addProcessedElement(e[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
          (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var e, t, r, n, i, a, s, o, l, h = this.stylesList.length,
            u = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (e = 0; e < h; e += 1)
            if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (u.save(), a = l.elements, "st" === o || "gs" === o ? (u.ctxStrokeStyle("st" === o ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle("fl" === o ? l.co : l.grd), u.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[t].trNodes).length, n = 0; n < i; n += 1) "m" === s[n].t ? c.moveTo(s[n].p[0], s[n].p[1]) : "c" === s[n].t ? c.bezierCurveTo(s[n].pts[0], s[n].pts[1], s[n].pts[2], s[n].pts[3], s[n].pts[4], s[n].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (u.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), u.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(e, t, r, n) {
          var i, a;
          for (a = e, i = t.length - 1; i >= 0; i -= 1) "tr" === t[i].ty ? (a = r[i].transform, this.renderShapeTransform(e, a)) : "sh" === t[i].ty || "el" === t[i].ty || "rc" === t[i].ty || "sr" === t[i].ty ? this.renderPath(t[i], r[i]) : "fl" === t[i].ty ? this.renderFill(t[i], r[i], a) : "st" === t[i].ty ? this.renderStroke(t[i], r[i], a) : "gf" === t[i].ty || "gs" === t[i].ty ? this.renderGradientFill(t[i], r[i], a) : "gr" === t[i].ty ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
          n && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
          if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
            var r, n, i, a = e.trNodes,
              s = t.paths,
              o = s._length;
            a.length = 0;
            var l = e.transforms.finalTransform;
            for (i = 0; i < o; i += 1) {
              var h = s.shapes[i];
              if (h && h.v) {
                for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === n && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && n && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            e.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(e, t) {
          if (!0 !== e.hd && e._shouldRender) {
            var r, n = t.styledShapes.length;
            for (r = 0; r < n; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(e, t, r) {
          var n = t.style;
          (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
          var n, i = t.style;
          if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = t.s.v,
              l = t.e.v;
            if (1 === e.t) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                u = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = t.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var p = h * c,
                f = Math.cos(u + t.a.v) * p + o[0],
                d = Math.sin(u + t.a.v) * p + o[1];
              n = s.createRadialGradient(f, d, 0, o[0], o[1], h)
            }
            var m = e.g.p,
              y = t.g.c,
              v = 1;
            for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (v = t.g.o[2 * a + 1]), n.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + v + ")");
            i.grd = n
          }
          i.coOp = t.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
          var n = t.style,
            i = t.d;
          i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (n.wi = t.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = !1;
          e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
          var r = !1;
          e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
          var n, i, a, s, o, l, h, u, c, p, f, d, m = this.globalData.fontManager.getFontByName(e.f),
            y = e.l,
            v = this.mHelper;
          this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, i = e.finalText.length;
          var g = this.data.singleShape,
            b = .001 * e.tr * e.finalSize,
            S = 0,
            x = 0,
            E = !0,
            P = 0;
          for (n = 0; n < i; n += 1) {
            s = (a = this.globalData.fontManager.getCharData(e.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, v.reset(), g && y[n].n && (S = -b, x += e.yOffset, x += E ? 1 : 0, E = !1), c = (h = s.shapes ? s.shapes[0].it : []).length, v.scale(e.finalSize / 100, e.finalSize / 100), g && this.applyTextPropertiesToMatrix(e, v, y[n].line, S, x), f = createSizedArray(c - 1);
            var C = 0;
            for (u = 0; u < c; u += 1)
              if ("sh" === h[u].ty) {
                for (l = h[u].ks.k.i.length, p = h[u].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(v.applyToX(p.v[0][0], p.v[0][1], 0), v.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(v.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), v.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), v.applyToX(p.i[o][0], p.i[o][1], 0), v.applyToY(p.i[o][0], p.i[o][1], 0), v.applyToX(p.v[o][0], p.v[o][1], 0), v.applyToY(p.v[o][0], p.v[o][1], 0));
                d.push(v.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), v.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), v.applyToX(p.i[0][0], p.i[0][1], 0), v.applyToY(p.i[0][0], p.i[0][1], 0), v.applyToX(p.v[0][0], p.v[0][1], 0), v.applyToY(p.v[0][0], p.v[0][1], 0)), f[C] = d, C += 1
              } g && (S += y[n].l, S += b), this.textSpans[P] ? this.textSpans[P].elem = f : this.textSpans[P] = {
              elem: f
            }, P += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var e, t, r, n, i, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          t = l.length;
          var h, u, c = null,
            p = null,
            f = null,
            d = this.globalData.renderer;
          for (e = 0; e < t; e += 1)
            if (!l[e].n) {
              if ((s = o[e]) && (d.save(), d.ctxTransform(s.p), d.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? c !== s.fc && (d.ctxFillStyle(s.fc), c = s.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), n = (h = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? f !== s.sw && (f = s.sw, d.ctxLineWidth(s.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, d.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), n = (h = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                  for (a = (u = h[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var e = createTag("canvas");
            e.width = this.assetData.w, e.height = this.assetData.h;
            var t, r, n = e.getContext("2d"),
              i = this.img.width,
              a = this.img.height,
              s = i / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (r = a) * o : r = (t = i) / o, n.drawImage(this.img, (i - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
          return new CVShapeElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(e) {
          return new CVTextElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(e) {
          return new CVImageElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(e) {
          return new CVSolidElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
          1 === e[0] && 0 === e[1] && 0 === e[4] && 1 === e[5] && 0 === e[12] && 0 === e[13] || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
          this.canvasContext.globalAlpha *= e < 0 ? 0 : e
        }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
          this.canvasContext.fillStyle = e
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
          this.canvasContext.strokeStyle = e
        }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
          this.canvasContext.lineWidth = e
        }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
          this.canvasContext.lineCap = e
        }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
          this.canvasContext.lineJoin = e
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
          this.canvasContext.miterLimit = e
        }, CanvasRendererBase.prototype.ctxFill = function(e) {
          this.canvasContext.fill(e)
        }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, n) {
          this.canvasContext.fillRect(e, t, r, n)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(e) {
          this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(e) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var t = this.animationItem.container.style;
            t.width = "100%", t.height = "100%";
            var r = "0px 0px 0px";
            t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
            w: e.w,
            h: e.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
          var r, n, i, a;
          if (this.reset(), e ? (r = e, n = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = n) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, n = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = n * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              h = l.substr(0, 4),
              u = l.substr(4);
            i = r / n, (a = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || a < i && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (a < i && "meet" === o || a > i && "slice" === o) ? (r - this.transformCanvas.w * (n / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === u && (a > i && "meet" === o || a < i && "slice" === o) ? (n - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var e;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
          if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
            var r;
            this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
            var n = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            var r = this.createItem(this.layers[e], this, this.globalData);
            t[e] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var e = 2 * this._length,
            t = 0;
          for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
          this._length = e
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(e) {
          this.cArrPos -= 1;
          var t, r = this.stack[this.cArrPos],
            n = r.transform,
            i = this.cTr.props;
          for (t = 0; t < 16; t += 1) i[t] = n[t];
          if (e) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), (e || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(e) {
          e && this.nativeContext.save();
          var t = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, n = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) n.transform[r] = t[r];
          this.cArrPos += 1;
          var i = this.stack[this.cArrPos];
          i.opacity = n.opacity, i.fillStyle = n.fillStyle, i.strokeStyle = n.strokeStyle, i.lineWidth = n.lineWidth, i.lineCap = n.lineCap, i.lineJoin = n.lineJoin, i.miterLimit = n.miterLimit
        }, CVContextData.prototype.setOpacity = function(e) {
          this.stack[this.cArrPos].opacity = e
        }, CVContextData.prototype.setContext = function(e) {
          this.nativeContext = e
        }, CVContextData.prototype.fillStyle = function(e) {
          this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
        }, CVContextData.prototype.strokeStyle = function(e) {
          this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
        }, CVContextData.prototype.lineWidth = function(e) {
          this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
        }, CVContextData.prototype.lineCap = function(e) {
          this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
        }, CVContextData.prototype.lineJoin = function(e) {
          this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
        }, CVContextData.prototype.miterLimit = function(e) {
          this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
        }, CVContextData.prototype.transform = function(e) {
          this.transformMat.cloneFromProps(e);
          var t = this.cTr;
          this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
          var r = t.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(e) {
          var t = this.stack[this.cArrPos].opacity;
          t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
        }, CVContextData.prototype.fill = function(e) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
        }, CVContextData.prototype.fillRect = function(e, t, r, n) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, n)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var e, t = this.canvasContext;
          for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var e;
          for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var e = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var t = this.finalTransform.mat.toCSS();
              e.transform = t, e.webkitTransform = t
            }
            this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
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
          var e;
          this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var e;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
          else {
            e = createNS("svg");
            var t = this.comp.data ? this.comp.data : this.globalData.compSize;
            e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
        }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
          return t
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
          var r, n, i, a, s, o = e.sh.v,
            l = e.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(n, i, a, s, t);
            o.c && (n = this.getTransformedPoint(l, o.v[r]), i = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(n, i, a, s, t))
          }
        }, HShapeElement.prototype.checkBounds = function(e, t, r, n, i) {
          this.getBoundsOfCurve(e, t, r, n);
          var a = this.shapeBoundingBox;
          i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
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
        }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, n) {
          for (var i, a, s, o, l, h, u, c = [
              [e[0], n[0]],
              [e[1], n[1]]
            ], p = 0; p < 2; ++p) a = 6 * e[p] - 12 * t[p] + 6 * r[p], i = -3 * e[p] + 9 * t[p] - 9 * r[p] + 3 * n[p], s = 3 * t[p] - 3 * e[p], a |= 0, s |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? (o = -s / a) > 0 && o < 1 && c[p].push(this.calculateF(o, e, t, r, n, p)) : (l = a * a - 4 * s * i) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * i)) > 0 && h < 1 && c[p].push(this.calculateF(h, e, t, r, n, p)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[p].push(this.calculateF(u, e, t, r, n, p))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(e, t, r, n, i, a) {
          return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * n[a] + bmPow(e, 3) * i[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
          var r, n = e.length;
          for (r = 0; r < n; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
          var r = 0;
          if (e.keyframes) {
            for (var n = 0; n < e.keyframes.length; n += 1) {
              var i = e.keyframes[n].s;
              i > r && (r = i)
            }
            r *= e.mult
          } else r = e.v * e.mult;
          t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(e) {
          return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var e = this.tempBoundingBox,
              t = 999999;
            if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
            var r = !1;
            if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
              this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var n = this.shapeCont.style,
                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              n.transform = i, n.webkitTransform = i
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var e = createNS("g");
            this.maskedElement.appendChild(e), this.innerElem = e
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = this.innerElem.style,
            r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
          t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
          var n, i, a = this.globalData.fontManager.getFontByName(e.f);
          if (!this.globalData.fontManager.chars)
            if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              t.fontFamily = a.fFamily;
              var s = e.fWeight,
                o = e.fStyle;
              t.fontStyle = o, t.fontWeight = s
            } var l, h, u, c = e.l;
          i = c.length;
          var p, f = this.mHelper,
            d = "",
            m = 0;
          for (n = 0; n < i; n += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? u = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (u = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var y, v = this.globalData.fontManager.getCharData(e.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
              if (y = v ? v.data : null, f.reset(), y && y.shapes && y.shapes.length && (p = y.shapes[0].it, f.scale(e.finalSize / 100, e.finalSize / 100), d = this.createPathShape(f, p), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), y && y.shapes) {
                  document.body.appendChild(u);
                  var g = u.getBBox();
                  u.setAttribute("width", g.width + 2), u.setAttribute("height", g.height + 2), u.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2));
                  var b = u.style,
                    S = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)";
                  b.transform = S, b.webkitTransform = S, c[n].yOffset = g.y - 1
                } else u.setAttribute("width", 1), u.setAttribute("height", 1);
                h.appendChild(u)
              }
            } else if (l.textContent = c[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var x = l.style,
                E = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
              x.transform = E, x.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var e;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
              var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              e.transform = t, e.webkitTransform = t
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, n, i, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (n = h.length, r = 0; r < n; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var u = this.innerElem.getBBox();
              if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.svgElement.setAttribute("width", u.width)), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.svgElement.setAttribute("height", u.height)), this.currentBBox.w !== u.width + 2 || this.currentBBox.h !== u.height + 2 || this.currentBBox.x !== u.x - 1 || this.currentBBox.y !== u.y - 1) {
                this.currentBBox.w = u.width + 2, this.currentBBox.h = u.height + 2, this.currentBBox.x = u.x - 1, this.currentBBox.y = u.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                e.transform = c, e.webkitTransform = c
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var e, t, r, n, i = this.comp.threeDElements.length;
          for (e = 0; e < i; e += 1)
            if ("3d" === (t = this.comp.threeDElements[e]).type) {
              r = t.perspectiveElem.style, n = t.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, n.transformOrigin = s, n.mozTransformOrigin = s, n.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var e, t, r = this._isFirstFrame;
          if (this.hierarchy)
            for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                var n = this.hierarchy[e].finalTransform.mProp;
                this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var i;
              i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                s = [i[0] / a, i[1] / a, i[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                h = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var u = !this._prevMat.equals(this.mat);
            if ((u || this.pe._mdf) && this.comp.threeDElements) {
              var c, p, f;
              for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
                if ("3d" === (c = this.comp.threeDElements[e]).type) {
                  if (u) {
                    var d = this.mat.toCSS();
                    (f = c.container.style).transform = d, f.webkitTransform = d
                  }
                  this.pe._mdf && ((p = c.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData),
            t = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            var n = this.layers[t];
            if (n.ddd && this.supports3d) this.addTo3dContainer(r, t);
            else if (this.threeDElements) this.addTo3dContainer(r, t);
            else {
              for (var i, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
              i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(e) {
          return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(e) {
          return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(e) {
          return this.camera = new HCameraElement(e, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(e) {
          return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(e) {
          return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
          for (var t = 0, r = this.threeDElements.length; t < r;) {
            if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
            t += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
          var r, n, i = createTag("div");
          styleDiv(i);
          var a = createTag("div");
          if (styleDiv(a), "3d" === t) {
            (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (n = a.style).transform = o, n.webkitTransform = o
          }
          i.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: i,
            startPos: e,
            endPos: e,
            type: t
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var e, t, r = this.layers.length,
            n = "";
          for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== n && (n = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== n && (n = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
          for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
          for (var r = 0, n = this.threeDElements.length; r < n;) {
            if (t <= this.threeDElements[r].endPos) {
              for (var i, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
              i ? this.threeDElements[r].container.insertBefore(e, i) : this.threeDElements[r].container.appendChild(e);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(e) {
          var t = createTag("div"),
            r = this.animationItem.wrapper,
            n = t.style;
          n.width = e.w + "px", n.height = e.h + "px", this.resizerElem = t, styleDiv(t), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), n.overflow = "hidden";
          var i = createNS("svg");
          i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
          var a = createNS("defs");
          i.appendChild(a), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var e, t, r, n, i = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = i / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = i / this.globalData.compSize.w, t = i / this.globalData.compSize.w, r = 0, n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, n = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var e, t = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              n = this.threeDElements.length;
            for (e = 0; e < n; e += 1) {
              var i = this.threeDElements[e].perspectiveElem.style;
              i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length,
            n = createTag("div");
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var i = this.createComp(e[t], n, this.globalData.comp, null);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(e, t) {
          for (var r, n = 0; n < t;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
          r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
        }, HCompElement.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        };
        var CompExpressionInterface = function(e) {
          function t(t) {
            for (var r = 0, n = e.layers.length; r < n;) {
              if (e.layers[r].nm === t || e.layers[r].ind === t) return e.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(t, "_name", {
            value: e.data.nm
          }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
        };

        function _typeof$2(e) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$2(e)
        }

        function seedRandom(e, t) {
          var r, n = this,
            i = 256,
            a = "random",
            s = t.pow(i, 6),
            o = t.pow(2, 52),
            l = 2 * o,
            h = 255;

          function u(e) {
            var t, r = e.length,
              n = this,
              a = 0,
              s = n.i = n.j = 0,
              o = n.S = [];
            for (r || (e = [r++]); a < i;) o[a] = a++;
            for (a = 0; a < i; a++) o[a] = o[s = h & s + e[a % r] + (t = o[a])], o[s] = t;
            n.g = function(e) {
              for (var t, r = 0, a = n.i, s = n.j, o = n.S; e--;) t = o[a = h & a + 1], r = r * i + o[h & (o[a] = o[s = h & s + t]) + (o[s] = t)];
              return n.i = a, n.j = s, r
            }
          }

          function c(e, t) {
            return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
          }

          function p(e, t) {
            var r, n = [],
              i = _typeof$2(e);
            if (t && "object" == i)
              for (r in e) try {
                n.push(p(e[r], t - 1))
              } catch (e) {}
            return n.length ? n : "string" == i ? e : e + "\0"
          }

          function f(e, t) {
            for (var r, n = e + "", i = 0; i < n.length;) t[h & i] = h & (r ^= 19 * t[h & i]) + n.charCodeAt(i++);
            return d(t)
          }

          function d(e) {
            return String.fromCharCode.apply(0, e)
          }
          t["seed" + a] = function(h, m, y) {
            var v = [],
              g = f(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, d(e)] : null === h ? function() {
                try {
                  r;
                  var t = new Uint8Array(i);
                  return (n.crypto || n.msCrypto).getRandomValues(t), d(t)
                } catch (t) {
                  var a = n.navigator,
                    s = a && a.plugins;
                  return [+new Date, n, s, n.screen, d(e)]
                }
              }() : h, 3), v),
              b = new u(v),
              S = function() {
                for (var e = b.g(6), t = s, r = 0; e < o;) e = (e + r) * i, t *= i, r = b.g(1);
                for (; e >= l;) e /= 2, t /= 2, r >>>= 1;
                return (e + r) / t
              };
            return S.int32 = function() {
              return 0 | b.g(4)
            }, S.quick = function() {
              return b.g(4) / 4294967296
            }, S.double = S, f(d(b.S), e), (m.pass || y || function(e, r, n, i) {
              return i && (i.S && c(i, b), e.state = function() {
                return c(b, {})
              }), n ? (t[a] = e, r) : e
            })(S, g, "global" in m ? m.global : this == t, m.state)
          }, f(t.random(), e)
        }

        function initialize$2(e) {
          seedRandom([], e)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(e) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$1(e)
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

            function $bm_isInstanceOfArray(e) {
              return e.constructor === Array || e.constructor === Float32Array
            }

            function isNumerable(e, t) {
              return "number" === e || t instanceof Number || "boolean" === e || "string" === e
            }

            function $bm_neg(e) {
              var t = _typeof$1(e);
              if ("number" === t || e instanceof Number || "boolean" === t) return -e;
              if ($bm_isInstanceOfArray(e)) {
                var r, n = e.length,
                  i = [];
                for (r = 0; r < n; r += 1) i[r] = -e[r];
                return i
              }
              return e.propType ? e.v : -e
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(e, t) {
              var r = _typeof$1(e),
                n = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(n, t) || "string" === r || "string" === n) return e + t;
              if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] += t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] + t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(e, t) {
              var r = _typeof$1(e),
                n = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(n, t)) return "string" === r && (e = parseInt(e, 10)), "string" === n && (t = parseInt(t, 10)), e - t;
              if ($bm_isInstanceOfArray(e) && isNumerable(n, t)) return (e = e.slice(0))[0] -= t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var i = 0, a = e.length, s = t.length, o = []; i < a || i < s;)("number" == typeof e[i] || e[i] instanceof Number) && ("number" == typeof t[i] || t[i] instanceof Number) ? o[i] = e[i] - t[i] : o[i] = void 0 === t[i] ? e[i] : e[i] || t[i], i += 1;
                return o
              }
              return 0
            }

            function mul(e, t) {
              var r, n, i, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] * t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e * t[n];
                return r
              }
              return 0
            }

            function div(e, t) {
              var r, n, i, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e[n] / t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = e / t[n];
                return r
              }
              return 0
            }

            function mod(e, t) {
              return "string" == typeof e && (e = parseInt(e, 10)), "string" == typeof t && (t = parseInt(t, 10)), e % t
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(e, t, r) {
              if (t > r) {
                var n = r;
                r = t, t = n
              }
              return Math.min(Math.max(e, t), r)
            }

            function radiansToDegrees(e) {
              return e / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(e) {
              return e * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(e, t) {
              if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
              var r;
              t || (t = helperLengthArray);
              var n = Math.min(e.length, t.length),
                i = 0;
              for (r = 0; r < n; r += 1) i += Math.pow(t[r] - e[r], 2);
              return Math.sqrt(i)
            }

            function normalize(e) {
              return div(e, length(e))
            }

            function rgbToHsl(e) {
              var t, r, n = e[0],
                i = e[1],
                a = e[2],
                s = Math.max(n, i, a),
                o = Math.min(n, i, a),
                l = (s + o) / 2;
              if (s === o) t = 0, r = 0;
              else {
                var h = s - o;
                switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                  case n:
                    t = (i - a) / h + (i < a ? 6 : 0);
                    break;
                  case i:
                    t = (a - n) / h + 2;
                    break;
                  case a:
                    t = (n - i) / h + 4
                }
                t /= 6
              }
              return [t, r, l, e[3]]
            }

            function hue2rgb(e, t, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }

            function hslToRgb(e) {
              var t, r, n, i = e[0],
                a = e[1],
                s = e[2];
              if (0 === a) t = s, n = s, r = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                t = hue2rgb(l, o, i + 1 / 3), r = hue2rgb(l, o, i), n = hue2rgb(l, o, i - 1 / 3)
              }
              return [t, r, n, e[3]]
            }

            function linear(e, t, r, n, i) {
              if (void 0 !== n && void 0 !== i || (n = t, i = r, t = 0, r = 1), r < t) {
                var a = r;
                r = t, t = a
              }
              if (e <= t) return n;
              if (e >= r) return i;
              var s, o = r === t ? 0 : (e - t) / (r - t);
              if (!n.length) return n + (i - n) * o;
              var l = n.length,
                h = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) h[s] = n[s] + (i[s] - n[s]) * o;
              return h
            }

            function random(e, t) {
              if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                var r, n = t.length;
                e || (e = createTypedArray("float32", n));
                var i = createTypedArray("float32", n),
                  a = BMMath.random();
                for (r = 0; r < n; r += 1) i[r] = e[r] + a * (t[r] - e[r]);
                return i
              }
              return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
            }

            function createPath(e, t, r, n) {
              var i, a = e.length,
                s = shapePool.newElement();
              s.setPathData(!!n, a);
              var o, l, h = [0, 0];
              for (i = 0; i < a; i += 1) o = t && t[i] ? t[i] : h, l = r && r[i] ? r[i] : h, s.setTripleAt(e[i][0], e[i][1], l[0] + e[i][0], l[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(e) {
                return e
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
                wiggle = function(e, t) {
                  var r, n, i = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", i),
                    s = Math.floor(5 * time);
                  for (r = 0, n = 0; r < s;) {
                    for (n = 0; n < i; n += 1) a[n] += -t + 2 * t * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", i);
                  if (i > 1) {
                    for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-t + 2 * t * BMMath.random()) * l;
                    return h
                  }
                  return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(e, t) {
                return loopIn(e, t, !0)
              }

              function loopOutDuration(e, t) {
                return loopOut(e, t, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(e, t) {
                var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                  n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, n, 0]
              }

              function easeOut(e, t, r, n, i) {
                return applyEase(easeOutBez, e, t, r, n, i)
              }

              function easeIn(e, t, r, n, i) {
                return applyEase(easeInBez, e, t, r, n, i)
              }

              function ease(e, t, r, n, i) {
                return applyEase(easeInOutBez, e, t, r, n, i)
              }

              function applyEase(e, t, r, n, i, a) {
                void 0 === i ? (i = r, a = n) : t = (t - r) / (n - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                var s = e(t);
                if ($bm_isInstanceOfArray(i)) {
                  var o, l = i.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                  return h
                }
                return (a - i) * s + i
              }

              function nearestKey(e) {
                var t, r, n, i = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                  else {
                    for (t = 0; t < i - 1; t += 1) {
                      if (e === data.k[t].t) {
                        r = t + 1, n = data.k[t].t;
                        break
                      }
                      if (e > data.k[t].t && e < data.k[t + 1].t) {
                        e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, n = data.k[t + 1].t) : (r = t + 1, n = data.k[t].t);
                        break
                      }
                    } - 1 === r && (r = t + 1, n = data.k[t].t)
                  }
                else r = 0, n = 0;
                var a = {};
                return a.index = r, a.time = n / elem.comp.globalData.frameRate, a
              }

              function key(e) {
                var t, r, n;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                e -= 1, t = {
                  time: data.k[e].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                for (n = i.length, r = 0; r < n; r += 1) t[r] = i[r], t.value[r] = i[r];
                return t
              }

              function framesToTime(e, t) {
                return t || (t = elem.comp.globalData.frameRate), e / t
              }

              function timeToFrames(e, t) {
                return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
              }

              function seedRandom(e) {
                BMMath.seedrandom(randSeed + e)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
              }

              function substr(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
              }

              function posterizeTime(e) {
                time = 0 === e ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(e) {
                return value = e, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var e = {
              initExpressions: function(e) {
                var t = 0,
                  r = [];
                e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
                  t += 1
                }, e.renderer.globalData.popExpression = function() {
                  0 == (t -= 1) && function() {
                    var e, t = r.length;
                    for (e = 0; e < t; e += 1) r[e].release();
                    r.length = 0
                  }()
                }, e.renderer.globalData.registerExpressionProperty = function(e) {
                  -1 === r.indexOf(e) && r.push(e)
                }
              }
            };
            return e.resetFrame = ExpressionManager.resetFrame, e
          }(),
          MaskManagerInterface = function() {
            function e(e, t) {
              this._mask = e, this._data = t
            }
            return Object.defineProperty(e.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(e.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(t) {
                var r, n = createSizedArray(t.viewData.length),
                  i = t.viewData.length;
                for (r = 0; r < i; r += 1) n[r] = new e(t.viewData[r], t.masksProperties[r]);
                return function(e) {
                  for (r = 0; r < i;) {
                    if (t.masksProperties[r].nm === e) return n[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var e = {
                pv: 0,
                v: 0,
                mult: 1
              },
              t = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(e, t, r) {
              Object.defineProperty(e, "velocity", {
                get: function() {
                  return t.getVelocityAtTime(t.comp.currentFrame)
                }
              }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(n) {
                if (!e.numKeys) return 0;
                var i;
                i = "s" in t.keyframes[n - 1] ? t.keyframes[n - 1].s : "e" in t.keyframes[n - 2] ? t.keyframes[n - 2].e : t.keyframes[n - 2].s;
                var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i);
                return a.time = t.keyframes[n - 1].t / t.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? i[0] : i, a
              }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
            }

            function n() {
              return e
            }
            return function(i) {
              return i ? "unidimensional" === i.propType ? function(t) {
                t && "pv" in t || (t = e);
                var n = 1 / t.mult,
                  i = t.pv * n,
                  a = new Number(i);
                return a.value = i, r(a, t, "unidimensional"),
                  function() {
                    return t.k && t.getValue(), i = t.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, t, "unidimensional")), a
                  }
              }(i) : function(e) {
                e && "pv" in e || (e = t);
                var n = 1 / e.mult,
                  i = e.data && e.data.l || e.pv.length,
                  a = createTypedArray("float32", i),
                  s = createTypedArray("float32", i);
                return a.value = s, r(a, e, "multidimensional"),
                  function() {
                    e.k && e.getValue();
                    for (var t = 0; t < i; t += 1) s[t] = e.v[t] * n, a[t] = s[t];
                    return a
                  }
              }(i) : n
            }
          }(),
          TransformExpressionInterface = function(e) {
            function t(e) {
              switch (e) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null
              }
            }
            var r, n, i, a;
            return Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz)
            }), Object.defineProperty(t, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r)
            }), Object.defineProperty(t, "xRotation", {
              get: ExpressionPropertyInterface(e.rx)
            }), Object.defineProperty(t, "yRotation", {
              get: ExpressionPropertyInterface(e.ry)
            }), Object.defineProperty(t, "scale", {
              get: ExpressionPropertyInterface(e.s)
            }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), n = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? a() : [r(), n(), i ? i() : 0]
              }
            }), Object.defineProperty(t, "xPosition", {
              get: ExpressionPropertyInterface(e.px)
            }), Object.defineProperty(t, "yPosition", {
              get: ExpressionPropertyInterface(e.py)
            }), Object.defineProperty(t, "zPosition", {
              get: ExpressionPropertyInterface(e.pz)
            }), Object.defineProperty(t, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a)
            }), Object.defineProperty(t, "opacity", {
              get: ExpressionPropertyInterface(e.o)
            }), Object.defineProperty(t, "skew", {
              get: ExpressionPropertyInterface(e.sk)
            }), Object.defineProperty(t, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa)
            }), Object.defineProperty(t, "orientation", {
              get: ExpressionPropertyInterface(e.or)
            }), t
          },
          LayerExpressionInterface = function() {
            function e(e) {
              var t = new Matrix;
              return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t) : this._elem.finalTransform.mProp.applyToMatrix(t), t
            }

            function t(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, e)
            }

            function r(e, t) {
              var r = this.getMatrix(t);
              return this.applyPoint(r, e)
            }

            function n(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, e)
            }

            function i(e, t) {
              var r = this.getMatrix(t);
              return this.invertPoint(r, e)
            }

            function a(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function s(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.inversePoint(t)
            }

            function o(e) {
              var t = new Matrix;
              if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                return t.inversePoint(e)
              }
              return t.inversePoint(e)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(h) {
              var u;

              function c(e) {
                switch (e) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return u;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null
                }
              }
              c.getMatrix = e, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = t, c.fromWorld = i, c.fromWorldVec = n, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
              var p = getDescriptor(u = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
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
                rotation: getDescriptor(u, "rotation"),
                scale: getDescriptor(u, "scale"),
                position: getDescriptor(u, "position"),
                opacity: getDescriptor(u, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return u
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function(e) {
                c.mask = new MaskManagerInterface(e, h)
              }, c.registerEffectsInterface = function(e) {
                c.effect = e
              }, c
            }
          }(),
          propertyGroupFactory = function(e, t) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? e : t(r - 1)
            }
          },
          PropertyInterface = function(e, t) {
            var r = {
              _name: e
            };
            return function(e) {
              return (e = void 0 === e ? 1 : e) <= 0 ? r : t(e - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function e(r, n, i, a) {
              function s(e) {
                for (var t = r.ef, n = 0, i = t.length; n < i;) {
                  if (e === t[n].nm || e === t[n].mn || e === t[n].ix) return 5 === t[n].ty ? h[n] : h[n]();
                  n += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, i),
                h = [],
                u = r.ef.length;
              for (o = 0; o < u; o += 1) 5 === r.ef[o].ty ? h.push(e(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a)) : h.push(t(n.effectElements[o], r.ef[o].ty, a, l));
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

            function t(e, t, r, n) {
              var i = ExpressionPropertyInterface(e.p);
              return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", n)),
                function() {
                  return 10 === t ? r.comp.compInterface(e.p.v) : i()
                }
            }
            return {
              createEffectsInterface: function(t, r) {
                if (t.effectsManager) {
                  var n, i = [],
                    a = t.data.ef,
                    s = t.effectsManager.effectElements.length;
                  for (n = 0; n < s; n += 1) i.push(e(a[n], t.effectsManager.effectElements[n], r, t));
                  var o = t.data.ef || [],
                    l = function(e) {
                      for (n = 0, s = o.length; n < s;) {
                        if (e === o[n].nm || e === o[n].mn || e === o[n].ix) return i[n];
                        n += 1
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
          ShapePathInterface = function(e, t, r) {
            var n = t.sh;

            function i(e) {
              return "Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e ? i.path : null
            }
            var a = propertyGroupFactory(i, r);
            return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
              path: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              shape: {
                get: function() {
                  return n.k && n.getValue(), n
                }
              },
              _name: {
                value: e.nm
              },
              ix: {
                value: e.ix
              },
              propertyIndex: {
                value: e.ix
              },
              mn: {
                value: e.mn
              },
              propertyGroup: {
                value: r
              }
            }), i
          },
          ShapeExpressionInterface = function() {
            function e(e, s, p) {
              var f, d = [],
                m = e ? e.length : 0;
              for (f = 0; f < m; f += 1) "gr" === e[f].ty ? d.push(t(e[f], s[f], p)) : "fl" === e[f].ty ? d.push(r(e[f], s[f], p)) : "st" === e[f].ty ? d.push(i(e[f], s[f], p)) : "tm" === e[f].ty ? d.push(a(e[f], s[f], p)) : "tr" === e[f].ty || ("el" === e[f].ty ? d.push(o(e[f], s[f], p)) : "sr" === e[f].ty ? d.push(l(e[f], s[f], p)) : "sh" === e[f].ty ? d.push(ShapePathInterface(e[f], s[f], p)) : "rc" === e[f].ty ? d.push(h(e[f], s[f], p)) : "rd" === e[f].ty ? d.push(u(e[f], s[f], p)) : "rp" === e[f].ty ? d.push(c(e[f], s[f], p)) : "gf" === e[f].ty ? d.push(n(e[f], s[f], p)) : d.push((e[f], s[f], function() {
                return null
              })));
              return d
            }

            function t(t, r, n) {
              var i = function(e) {
                switch (e) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return i.content;
                  default:
                    return i.transform
                }
              };
              i.propertyGroup = propertyGroupFactory(i, n);
              var a = function(t, r, n) {
                  var i, a = function(e) {
                    for (var t = 0, r = i.length; t < r;) {
                      if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                      t += 1
                    }
                    return "number" == typeof e ? i[e - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, n), i = e(t.it, r.it, a.propertyGroup), a.numProperties = i.length;
                  var o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = t.cix, a._name = t.nm, a
                }(t, r, i.propertyGroup),
                o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
              return i.content = a, i.transform = o, Object.defineProperty(i, "_name", {
                get: function() {
                  return t.nm
                }
              }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
            }

            function r(e, t, r) {
              function n(e) {
                return "Color" === e || "color" === e ? n.color : "Opacity" === e || "opacity" === e ? n.opacity : null
              }
              return Object.defineProperties(n, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function n(e, t, r) {
              function n(e) {
                return "Start Point" === e || "start point" === e ? n.startPoint : "End Point" === e || "end point" === e ? n.endPoint : "Opacity" === e || "opacity" === e ? n.opacity : null
              }
              return Object.defineProperties(n, {
                startPoint: {
                  get: ExpressionPropertyInterface(t.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(t.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.s.setGroupProperty(PropertyInterface("Start Point", r)), t.e.setGroupProperty(PropertyInterface("End Point", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), n
            }

            function i(e, t, r) {
              var n, i = propertyGroupFactory(h, r),
                a = propertyGroupFactory(l, i);

              function s(r) {
                Object.defineProperty(l, e.d[r].nm, {
                  get: ExpressionPropertyInterface(t.d.dataProps[r].p)
                })
              }
              var o = e.d ? e.d.length : 0,
                l = {};
              for (n = 0; n < o; n += 1) s(n), t.d.dataProps[n].p.setGroupProperty(a);

              function h(e) {
                return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(t.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", i)), t.o.setGroupProperty(PropertyInterface("Opacity", i)), t.w.setGroupProperty(PropertyInterface("Stroke Width", i)), h
            }

            function a(e, t, r) {
              function n(t) {
                return t === e.e.ix || "End" === t || "end" === t ? n.end : t === e.s.ix ? n.start : t === e.o.ix ? n.offset : null
              }
              var i = propertyGroupFactory(n, r);
              return n.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", i)), t.e.setGroupProperty(PropertyInterface("End", i)), t.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = e.ix, n.propertyGroup = r, Object.defineProperties(n, {
                start: {
                  get: ExpressionPropertyInterface(t.s)
                },
                end: {
                  get: ExpressionPropertyInterface(t.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }

            function s(e, t, r) {
              function n(t) {
                return e.a.ix === t || "Anchor Point" === t ? n.anchorPoint : e.o.ix === t || "Opacity" === t ? n.opacity : e.p.ix === t || "Position" === t ? n.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? n.rotation : e.s.ix === t || "Scale" === t ? n.scale : e.sk && e.sk.ix === t || "Skew" === t ? n.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? n.skewAxis : null
              }
              var i = propertyGroupFactory(n, r);
              return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, {
                opacity: {
                  get: ExpressionPropertyInterface(t.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(t.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(t.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(t.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(t.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sa)
                },
                _name: {
                  value: e.nm
                }
              }), n.ty = "tr", n.mn = e.mn, n.propertyGroup = r, n
            }

            function o(e, t, r) {
              function n(t) {
                return e.p.ix === t ? n.position : e.s.ix === t ? n.size : null
              }
              var i = propertyGroupFactory(n, r);
              n.propertyIndex = e.ix;
              var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }

            function l(e, t, r) {
              function n(t) {
                return e.p.ix === t ? n.position : e.r.ix === t ? n.rotation : e.pt.ix === t ? n.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? n.outerRadius : e.os.ix === t ? n.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? n.innerRoundness : null : n.innerRadius
              }
              var i = propertyGroupFactory(n, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return n.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, {
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
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }

            function h(e, t, r) {
              function n(t) {
                return e.p.ix === t ? n.position : e.r.ix === t ? n.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? n.size : null
              }
              var i = propertyGroupFactory(n, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return n.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, {
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
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }

            function u(e, t, r) {
              function n(t) {
                return e.r.ix === t || "Round Corners 1" === t ? n.radius : null
              }
              var i = propertyGroupFactory(n, r),
                a = t;
              return n.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }

            function c(e, t, r) {
              function n(t) {
                return e.c.ix === t || "Copies" === t ? n.copies : e.o.ix === t || "Offset" === t ? n.offset : null
              }
              var i = propertyGroupFactory(n, r),
                a = t;
              return n.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: e.nm
                }
              }), n.mn = e.mn, n
            }
            return function(t, r, n) {
              var i;

              function a(e) {
                if ("number" == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? n : i[e - 1];
                for (var t = 0, r = i.length; t < r;) {
                  if (i[t]._name === e) return i[t];
                  t += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return n
              })), i = e(t, r, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(e) {
            var t;

            function r(e) {
              return "ADBE Text Document" === e ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                e.textProperty.getValue();
                var r = e.textProperty.currentData.t;
                return t && r === t.value || ((t = new String(r)).value = r || new String(r), Object.defineProperty(t, "style", {
                  get: function() {
                    return {
                      fillColor: e.textProperty.currentData.fc
                    }
                  }
                })), t
              }
            }), r
          };

        function _typeof(e) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof(e)
        }
        var FootageInterface = (dataInterfaceFactory = function(e) {
            function t(e) {
              return "Outline" === e ? t.outlineInterface() : null
            }
            return t._name = "Outline", t.outlineInterface = function(e) {
              var t = "",
                r = e.getFootageData();

              function n(e) {
                if (r[e]) return t = e, "object" === _typeof(r = r[e]) ? n : r;
                var i = e.indexOf(t);
                if (-1 !== i) {
                  var a = parseInt(e.substr(i + t.length), 10);
                  return "object" === _typeof(r = r[a]) ? n : r
                }
                return ""
              }
              return function() {
                return t = "", r = e.getFootageData(), n
              }
            }(e), t
          }, function(e) {
            function t(e) {
              return "Data" === e ? t.dataInterface : null
            }
            return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(e) {
          return interfaces[e] || null
        }
        var expressionHelpers = {
          searchExpressions: function(e, t, r) {
            t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
          },
          getSpeedAtTime: function(e) {
            var t = this.getValueAtTime(e),
              r = this.getValueAtTime(e + -.01),
              n = 0;
            if (t.length) {
              var i;
              for (i = 0; i < t.length; i += 1) n += Math.pow(r[i] - t[i], 2);
              n = 100 * Math.sqrt(n)
            } else n = 0;
            return n
          },
          getVelocityAtTime: function(e) {
            if (void 0 !== this.vel) return this.vel;
            var t, r, n = -.001,
              i = this.getValueAtTime(e),
              a = this.getValueAtTime(e + n);
            if (i.length)
              for (t = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) t[r] = (a[r] - i[r]) / n;
            else t = (a - i) / n;
            return t
          },
          getValueAtTime: function(e) {
            return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(e) {
            this.propertyGroup = e
          }
        };

        function addPropertyDecorator() {
          function e(e, t, r) {
            if (!this.k || !this.keyframes) return this.pv;
            e = e ? e.toLowerCase() : "";
            var n, i, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              u = h[h.length - 1].t;
            if (l <= u) return this.pv;
            if (r ? i = u - (n = t ? Math.abs(u - this.elem.comp.globalData.frameRate * t) : Math.max(0, u - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = u - (i = h[h.length - 1 - t].t)), "pingpong" === e) {
              if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / n);
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                  return o
                }
                return (p - c) * d + f
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((u - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * ((l - u) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - u) / .001 * (m - y)
              }
            }
            return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0)
          }

          function t(e, t, r) {
            if (!this.k) return this.pv;
            e = e ? e.toLowerCase() : "";
            var n, i, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              u = h[0].t;
            if (l >= u) return this.pv;
            if (r ? i = u + (n = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - u)) : ((!t || t > h.length - 1) && (t = h.length - 1), n = (i = h[t].t) - u), "pingpong" === e) {
              if (Math.floor((u - l) / n) % 2 == 0) return this.getValueAtTime(((u - l) % n + u) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var c = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((n - (u - l) % n + u) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((u - l) / n) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                  return o
                }
                return f - (p - c) * d
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((u + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * (u - l) / .001;
                  return o
                }
                return m + (m - y) * (u - l) / .001
              }
            }
            return this.getValueAtTime((n - ((u - l) % n + u)) / this.comp.globalData.frameRate, 0)
          }

          function r(e, t) {
            if (!this.k) return this.pv;
            if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
            var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = i - e,
              s = t > 1 ? (i + e - a) / (t - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
              if (n = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
              else r += n;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= t;
            else r /= t;
            return r
          }

          function n(e) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var t = this._transformCachingAtTime.v;
            if (t.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(e);
              t.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var n = this.s.getValueAtTime(e);
              t.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var i = this.sk.getValueAtTime(e),
                a = this.sa.getValueAtTime(e);
              t.skewFromAxis(-i * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(e);
              t.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(e),
                l = this.ry.getValueAtTime(e),
                h = this.rx.getValueAtTime(e),
                u = this.or.getValueAtTime(e);
              t.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-u[2] * this.or.mult).rotateY(u[1] * this.or.mult).rotateX(u[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(e),
                p = this.py.getValueAtTime(e);
              if (this.data.p.z) {
                var f = this.pz.getValueAtTime(e);
                t.translate(c * this.px.mult, p * this.py.mult, -f * this.pz.mult)
              } else t.translate(c * this.px.mult, p * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(e);
              t.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return t
          }

          function i() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(e, t, r) {
            var s = a(e, t, r);
            return s.dynamicProperties.length ? s.getValueAtTime = n.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(n, i, a, o, l) {
            var h = s(n, i, a, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === i.a ? i.k.length : 0, h.propertyIndex = i.ix;
            var u = 0;
            return 0 !== a && (u = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: u
            }, expressionHelpers.searchExpressions(n, i, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(e, t) {
              this.k && this.getValue();
              var r, n = this.v;
              void 0 !== t && (n = this.getValueAtTime(t, 0));
              var i = n._length,
                a = n[e],
                s = n.v,
                o = createSizedArray(i);
              for (r = 0; r < i; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
              return o
            },
            points: function(e) {
              return this.vertices("v", e)
            },
            inTangents: function(e) {
              return this.vertices("i", e)
            },
            outTangents: function(e) {
              return this.vertices("o", e)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(e, t) {
              var r = this.v;
              void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var n, i = this._segmentsLength, a = i.lengths, s = i.totalLength * e, o = 0, l = a.length, h = 0; o < l;) {
                if (h + a[o].addedLength > s) {
                  var u = o,
                    c = r.c && o === l - 1 ? 0 : o + 1,
                    p = (s - h) / a[o].addedLength;
                  n = bez.getPointInSegment(r.v[u], r.v[c], r.o[u], r.i[c], p, a[o]);
                  break
                }
                h += a[o].addedLength, o += 1
              }
              return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n
            },
            vectorOnPath: function(e, t, r) {
              1 == e ? e = this.v.c : 0 == e && (e = .999);
              var n = this.pointOnPath(e, t),
                i = this.pointOnPath(e + .001, t),
                a = i[0] - n[0],
                s = i[1] - n[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "tangent")
            },
            normalOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(e) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var u = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(e, t, r, n, i) {
            var a = u(e, t, r, n, i);
            return a.propertyIndex = t.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === r && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(e, t) {
            var r = this.calculateExpression(t);
            if (e.t !== r) {
              var n = {};
              return this.copyData(n, e), n.t = r.toString(), n.__complete = !1, n
            }
            return e
          }, TextProperty.prototype.searchProperty = function() {
            var e = this.searchKeyframes(),
              t = this.searchExpressions();
            return this.kf = e || t, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(e, t) {
            var r, n, i = createNS("feMerge");
            for (i.setAttribute("result", e), n = 0; n < t.length; n += 1)(r = createNS("feMergeNode")).setAttribute("in", t[n]), i.appendChild(r), i.appendChild(r);
            return i
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(e, t, r, n, i) {
          this.filterManager = t;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", n + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", n + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(n, [i, n + "_tint_1", n + "_tint_2"]);
          e.appendChild(s)
        }

        function SVGFillFilter(e, t, r, n) {
          this.filterManager = t;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", n), e.appendChild(i), this.matrixFilter = i
        }

        function SVGStrokeEffect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(e, t, r, n) {
          this.filterManager = t;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
        }

        function SVGProLevelsFilter(e, t, r, n) {
          this.filterManager = t;
          var i = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", n), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(e, t, r, n, i) {
          var a = t.container.globalData.renderConfig.filterSize,
            s = t.data.fs || a;
          e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", n + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", n + "_drop_shadow_1"), l.setAttribute("result", n + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", n + "_drop_shadow_3"), this.feFlood = h, e.appendChild(h);
          var u = createNS("feComposite");
          u.setAttribute("in", n + "_drop_shadow_3"), u.setAttribute("in2", n + "_drop_shadow_2"), u.setAttribute("operator", "in"), u.setAttribute("result", n + "_drop_shadow_4"), e.appendChild(u);
          var c = this.createMergeNode(n, [n + "_drop_shadow_4", i]);
          e.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + n + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var e, t, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < n; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
            p: e,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = t
        }, SVGStrokeEffect.prototype.renderFrame = function(e) {
          var t;
          this.initialized || this.initialize();
          var r, n, i = this.paths.length;
          for (t = 0; t < i; t += 1)
            if (-1 !== this.paths[t].m && (r = this.elem.maskManager.viewData[this.paths[t].m], n = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = n.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var h, u = l * (o - s),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(u / c);
                for (h = 0; h < p; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              n.setAttribute("stroke-dasharray", a)
            } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = this.filterManager.effectElements[2].p.v,
              i = n[0] + " " + r[0] + " " + t[0],
              a = n[1] + " " + r[1] + " " + t[1],
              s = n[2] + " " + r[2] + " " + t[2];
            this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
          var r = createNS(e);
          return r.setAttribute("type", "table"), t.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, n, i) {
          for (var a, s, o = 0, l = Math.min(e, t), h = Math.max(e, t), u = Array.call(null, {
              length: 256
            }), c = 0, p = i - n, f = t - e; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : n : a >= h ? f < 0 ? n : i : n + p * Math.pow((a - e) / f, 1 / r), u[c] = s, c += 1, o += 256 / 255;
          return u.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t, r = this.filterManager.effectElements;
            this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
              var t = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
            }
            if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                i = r * Math.cos(n),
                a = r * Math.sin(n);
              this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(e, t, r, n) {
          e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
          var i = createNS("feGaussianBlur");
          i.setAttribute("result", n), e.appendChild(i), this.feGaussianBlur = i
        }

        function TransformEffect() {}

        function SVGTransformEffect(e, t) {
          this.init(t)
        }

        function CVTransformEffect(e) {
          this.init(e)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(e) {
          for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
            if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
            t += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
          var r = e.layerElement.parentNode;
          if (r) {
            for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== e.layerElement;) a += 1;
            a <= s - 2 && (n = i[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + t), n ? r.insertBefore(o, n) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
          if (!this.findSymbol(t)) {
            var r = createElementID(),
              n = createNS("mask");
            n.setAttribute("id", t.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
            var i = e.globalData.defs;
            i.appendChild(n);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), i.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + r), n.appendChild(s), t.data.hd = !1, t.show()
          }
          e.setMatte(t.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, n = t.length; r < n;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              n = 3 == r ? 0 : t,
              i = 2 == r ? 0 : t;
            this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(e) {
          this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(e) {
          if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
            var t = this.effectsManager.effectElements,
              r = t[0].p.v,
              n = t[1].p.v,
              i = 1 === t[2].p.v,
              a = t[3].p.v,
              s = i ? a : t[4].p.v,
              o = t[5].p.v,
              l = t[6].p.v,
              h = t[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(n[0], n[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    44392: e => {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          r = a
        }
      }();
      var o, l = [],
        h = !1,
        u = -1;

      function c() {
        h && o && (h = !1, o.length ? l = o.concat(l) : u = -1, l.length && p())
      }

      function p() {
        if (!h) {
          var e = s(c);
          h = !0;
          for (var t = l.length; t;) {
            for (o = l, l = []; ++u < t;) o && o[u].run();
            u = -1, t = l.length
          }
          o = null, h = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function d() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || h || s(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = d, n.addListener = d, n.once = d, n.off = d, n.removeListener = d, n.removeAllListeners = d, n.emit = d, n.prependListener = d, n.prependOnceListener = d, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    54280: (e, t, r) => {
      "use strict";
      var n = r(75004);

      function i() {}

      function a() {}
      a.resetWarningCache = i, e.exports = function() {
        function e(e, t, r, i, a, s) {
          if (s !== n) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
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
          checkPropTypes: a,
          resetWarningCache: i
        };
        return r.PropTypes = r, r
      }
    },
    71424: (e, t, r) => {
      e.exports = r(54280)()
    },
    75004: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    41120: (e, t) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        o = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        h = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        c = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        y = r ? Symbol.for("react.lazy") : 60116,
        v = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;

      function x(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case c:
                case a:
                case o:
                case s:
                case f:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case h:
                    case p:
                    case y:
                    case m:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case i:
              return t
          }
        }
      }

      function E(e) {
        return x(e) === c
      }
      t.AsyncMode = u, t.ConcurrentMode = c, t.ContextConsumer = h, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = a, t.Lazy = y, t.Memo = m, t.Portal = i, t.Profiler = o, t.StrictMode = s, t.Suspense = f, t.isAsyncMode = function(e) {
        return E(e) || x(e) === u
      }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
        return x(e) === h
      }, t.isContextProvider = function(e) {
        return x(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return x(e) === p
      }, t.isFragment = function(e) {
        return x(e) === a
      }, t.isLazy = function(e) {
        return x(e) === y
      }, t.isMemo = function(e) {
        return x(e) === m
      }, t.isPortal = function(e) {
        return x(e) === i
      }, t.isProfiler = function(e) {
        return x(e) === o
      }, t.isStrictMode = function(e) {
        return x(e) === s
      }, t.isSuspense = function(e) {
        return x(e) === f
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === c || e === o || e === s || e === f || e === d || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === l || e.$$typeof === h || e.$$typeof === p || e.$$typeof === g || e.$$typeof === b || e.$$typeof === S || e.$$typeof === v)
      }, t.typeOf = x
    },
    12400: (e, t, r) => {
      "use strict";
      e.exports = r(41120)
    },
    44236: function(e, t, r) {
      class n {
        constructor() {
          this.data = r(82396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          }))
        }
        getValue(e) {
          return this.labelMap[e.toLowerCase()]
        }
        getLabel(e) {
          return this.valueMap[e.toLowerCase()]
        }
        getLabels() {
          return this.data.map((e => e.label))
        }
        getValues() {
          return this.data.map((e => e.value))
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
        setLabel(e, t) {
          return this.data.forEach((r => {
            r.value === e && (r.label = t, this.valueMap[r.value.toLowerCase()] = r.label)
          })), this
        }
        setEmpty(e) {
          return this.data.unshift({
            value: "",
            label: e
          }), this.valueMap[""] = e, this.labelMap[e] = "", this
        }
        native() {
          return this.nativeData = r(78048), this.nativeData.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          })), this
        }
      }
      e.exports = () => {
        if (!(this instanceof n)) return new n
      }
    },
    12231: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => l
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const a = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(a)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const l = function(e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        const i = (e = e || {}).random || (e.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = i[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(i)
      }
    },
    40684: (e, t, r) => {
      r(19808), e.exports = r(37208).Object.assign
    },
    41248: (e, t, r) => {
      r(47779);
      var n = r(37208).Object;
      e.exports = function(e, t) {
        return n.create(e, t)
      }
    },
    47952: (e, t, r) => {
      r(19652);
      var n = r(37208).Object;
      e.exports = function(e, t, r) {
        return n.defineProperty(e, t, r)
      }
    },
    37488: (e, t, r) => {
      r(24048), e.exports = r(37208).Object.getPrototypeOf
    },
    46760: (e, t, r) => {
      r(16200), e.exports = r(37208).Object.setPrototypeOf
    },
    90020: (e, t, r) => {
      r(37104), r(14788), r(71284), r(93696), e.exports = r(37208).Symbol
    },
    32784: (e, t, r) => {
      r(41852), r(63624), e.exports = r(33728).f("iterator")
    },
    18416: e => {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }
    },
    62016: e => {
      e.exports = function() {}
    },
    83060: (e, t, r) => {
      var n = r(93536);
      e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
      }
    },
    43572: (e, t, r) => {
      var n = r(28828),
        i = r(49344),
        a = r(82752);
      e.exports = function(e) {
        return function(t, r, s) {
          var o, l = n(t),
            h = i(l.length),
            u = a(s, h);
          if (e && r != r) {
            for (; h > u;)
              if ((o = l[u++]) != o) return !0
          } else
            for (; h > u; u++)
              if ((e || u in l) && l[u] === r) return e || u || 0;
          return !e && -1
        }
      }
    },
    79683: e => {
      var t = {}.toString;
      e.exports = function(e) {
        return t.call(e).slice(8, -1)
      }
    },
    37208: e => {
      var t = e.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = t)
    },
    76040: (e, t, r) => {
      var n = r(18416);
      e.exports = function(e, t, r) {
        if (n(e), void 0 === t) return e;
        switch (r) {
          case 1:
            return function(r) {
              return e.call(t, r)
            };
          case 2:
            return function(r, n) {
              return e.call(t, r, n)
            };
          case 3:
            return function(r, n, i) {
              return e.call(t, r, n, i)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    69396: e => {
      e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
      }
    },
    65168: (e, t, r) => {
      e.exports = !r(65032)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    76440: (e, t, r) => {
      var n = r(93536),
        i = r(56384).document,
        a = n(i) && n(i.createElement);
      e.exports = function(e) {
        return a ? i.createElement(e) : {}
      }
    },
    21608: e => {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    9684: (e, t, r) => {
      var n = r(37108),
        i = r(70716),
        a = r(9520);
      e.exports = function(e) {
        var t = n(e),
          r = i.f;
        if (r)
          for (var s, o = r(e), l = a.f, h = 0; o.length > h;) l.call(e, s = o[h++]) && t.push(s);
        return t
      }
    },
    96604: (e, t, r) => {
      var n = r(56384),
        i = r(37208),
        a = r(76040),
        s = r(11480),
        o = r(58868),
        l = "prototype",
        h = function(e, t, r) {
          var u, c, p, f = e & h.F,
            d = e & h.G,
            m = e & h.S,
            y = e & h.P,
            v = e & h.B,
            g = e & h.W,
            b = d ? i : i[t] || (i[t] = {}),
            S = b[l],
            x = d ? n : m ? n[t] : (n[t] || {})[l];
          for (u in d && (r = t), r)(c = !f && x && void 0 !== x[u]) && o(b, u) || (p = c ? x[u] : r[u], b[u] = d && "function" != typeof x[u] ? r[u] : v && c ? a(p, n) : g && x[u] == p ? function(e) {
            var t = function(t, r, n) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t);
                  case 2:
                    return new e(t, r)
                }
                return new e(t, r, n)
              }
              return e.apply(this, arguments)
            };
            return t[l] = e[l], t
          }(p) : y && "function" == typeof p ? a(Function.call, p) : p, y && ((b.virtual || (b.virtual = {}))[u] = p, e & h.R && S && !S[u] && s(S, u, p)))
        };
      h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, e.exports = h
    },
    65032: e => {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    56384: e => {
      var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = t)
    },
    58868: e => {
      var t = {}.hasOwnProperty;
      e.exports = function(e, r) {
        return t.call(e, r)
      }
    },
    11480: (e, t, r) => {
      var n = r(56008),
        i = r(15196);
      e.exports = r(65168) ? function(e, t, r) {
        return n.f(e, t, i(1, r))
      } : function(e, t, r) {
        return e[t] = r, e
      }
    },
    82176: (e, t, r) => {
      var n = r(56384).document;
      e.exports = n && n.documentElement
    },
    50160: (e, t, r) => {
      e.exports = !r(65168) && !r(65032)((function() {
        return 7 != Object.defineProperty(r(76440)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    45760: (e, t, r) => {
      var n = r(79683);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
      }
    },
    44244: (e, t, r) => {
      var n = r(79683);
      e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
      }
    },
    93536: e => {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    },
    27e3: (e, t, r) => {
      "use strict";
      var n = r(75069),
        i = r(15196),
        a = r(76572),
        s = {};
      r(11480)(s, r(42516)("iterator"), (function() {
        return this
      })), e.exports = function(e, t, r) {
        e.prototype = n(s, {
          next: i(1, r)
        }), a(e, t + " Iterator")
      }
    },
    65708: (e, t, r) => {
      "use strict";
      var n = r(41380),
        i = r(96604),
        a = r(50496),
        s = r(11480),
        o = r(71148),
        l = r(27e3),
        h = r(76572),
        u = r(88872),
        c = r(42516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      e.exports = function(e, t, r, y, v, g, b) {
        l(r, t, y);
        var S, x, E, P = function(e) {
            if (!p && e in _) return _[e];
            switch (e) {
              case f:
              case d:
                return function() {
                  return new r(this, e)
                }
            }
            return function() {
              return new r(this, e)
            }
          },
          C = t + " Iterator",
          T = v == d,
          M = !1,
          _ = e.prototype,
          w = _[c] || _["@@iterator"] || v && _[v],
          A = w || P(v),
          k = v ? T ? P("entries") : A : void 0,
          D = "Array" == t && _.entries || w;
        if (D && (E = u(D.call(new e))) !== Object.prototype && E.next && (h(E, C, !0), n || "function" == typeof E[c] || s(E, c, m)), T && w && w.name !== d && (M = !0, A = function() {
            return w.call(this)
          }), n && !b || !p && !M && _[c] || s(_, c, A), o[t] = A, o[C] = m, v)
          if (S = {
              values: T ? A : P(d),
              keys: g ? A : P(f),
              entries: k
            }, b)
            for (x in S) x in _ || a(_, x, S[x]);
          else i(i.P + i.F * (p || M), t, S);
        return S
      }
    },
    9980: e => {
      e.exports = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      }
    },
    71148: e => {
      e.exports = {}
    },
    41380: e => {
      e.exports = !0
    },
    60528: (e, t, r) => {
      var n = r(63540)("meta"),
        i = r(93536),
        a = r(58868),
        s = r(56008).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        h = !r(65032)((function() {
          return l(Object.preventExtensions({}))
        })),
        u = function(e) {
          s(e, n, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        c = e.exports = {
          KEY: n,
          NEED: !1,
          fastKey: function(e, t) {
            if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, n)) {
              if (!l(e)) return "F";
              if (!t) return "E";
              u(e)
            }
            return e[n].i
          },
          getWeak: function(e, t) {
            if (!a(e, n)) {
              if (!l(e)) return !0;
              if (!t) return !1;
              u(e)
            }
            return e[n].w
          },
          onFreeze: function(e) {
            return h && c.NEED && l(e) && !a(e, n) && u(e), e
          }
        }
    },
    43492: (e, t, r) => {
      "use strict";
      var n = r(65168),
        i = r(37108),
        a = r(70716),
        s = r(9520),
        o = r(47380),
        l = r(45760),
        h = Object.assign;
      e.exports = !h || r(65032)((function() {
        var e = {},
          t = {},
          r = Symbol(),
          n = "abcdefghijklmnopqrst";
        return e[r] = 7, n.split("").forEach((function(e) {
          t[e] = e
        })), 7 != h({}, e)[r] || Object.keys(h({}, t)).join("") != n
      })) ? function(e, t) {
        for (var r = o(e), h = arguments.length, u = 1, c = a.f, p = s.f; h > u;)
          for (var f, d = l(arguments[u++]), m = c ? i(d).concat(c(d)) : i(d), y = m.length, v = 0; y > v;) f = m[v++], n && !p.call(d, f) || (r[f] = d[f]);
        return r
      } : h
    },
    75069: (e, t, r) => {
      var n = r(83060),
        i = r(23876),
        a = r(21608),
        s = r(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        h = function() {
          var e, t = r(76440)("iframe"),
            n = a.length;
          for (t.style.display = "none", r(82176).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), h = e.F; n--;) delete h[l][a[n]];
          return h()
        };
      e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (o[l] = n(e), r = new o, o[l] = null, r[s] = e) : r = h(), void 0 === t ? r : i(r, t)
      }
    },
    56008: (e, t, r) => {
      var n = r(83060),
        i = r(50160),
        a = r(94800),
        s = Object.defineProperty;
      t.f = r(65168) ? Object.defineProperty : function(e, t, r) {
        if (n(e), t = a(t, !0), n(r), i) try {
          return s(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
      }
    },
    23876: (e, t, r) => {
      var n = r(56008),
        i = r(83060),
        a = r(37108);
      e.exports = r(65168) ? Object.defineProperties : function(e, t) {
        i(e);
        for (var r, s = a(t), o = s.length, l = 0; o > l;) n.f(e, r = s[l++], t[r]);
        return e
      }
    },
    34096: (e, t, r) => {
      var n = r(9520),
        i = r(15196),
        a = r(28828),
        s = r(94800),
        o = r(58868),
        l = r(50160),
        h = Object.getOwnPropertyDescriptor;
      t.f = r(65168) ? h : function(e, t) {
        if (e = a(e), t = s(t, !0), l) try {
          return h(e, t)
        } catch (e) {}
        if (o(e, t)) return i(!n.f.call(e, t), e[t])
      }
    },
    49920: (e, t, r) => {
      var n = r(28828),
        i = r(79584).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e.exports.f = function(e) {
        return s && "[object Window]" == a.call(e) ? function(e) {
          try {
            return i(e)
          } catch (e) {
            return s.slice()
          }
        }(e) : i(n(e))
      }
    },
    79584: (e, t, r) => {
      var n = r(67988),
        i = r(21608).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, i)
      }
    },
    70716: (e, t) => {
      t.f = Object.getOwnPropertySymbols
    },
    88872: (e, t, r) => {
      var n = r(58868),
        i = r(47380),
        a = r(7448)("IE_PROTO"),
        s = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
      }
    },
    67988: (e, t, r) => {
      var n = r(58868),
        i = r(28828),
        a = r(43572)(!1),
        s = r(7448)("IE_PROTO");
      e.exports = function(e, t) {
        var r, o = i(e),
          l = 0,
          h = [];
        for (r in o) r != s && n(o, r) && h.push(r);
        for (; t.length > l;) n(o, r = t[l++]) && (~a(h, r) || h.push(r));
        return h
      }
    },
    37108: (e, t, r) => {
      var n = r(67988),
        i = r(21608);
      e.exports = Object.keys || function(e) {
        return n(e, i)
      }
    },
    9520: (e, t) => {
      t.f = {}.propertyIsEnumerable
    },
    91040: (e, t, r) => {
      var n = r(96604),
        i = r(37208),
        a = r(65032);
      e.exports = function(e, t) {
        var r = (i.Object || {})[e] || Object[e],
          s = {};
        s[e] = t(r), n(n.S + n.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    15196: e => {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }
    },
    50496: (e, t, r) => {
      e.exports = r(11480)
    },
    46935: (e, t, r) => {
      var n = r(93536),
        i = r(83060),
        a = function(e, t) {
          if (i(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
      e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
          try {
            (n = r(76040)(Function.call, r(34096).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
          } catch (e) {
            t = !0
          }
          return function(e, r) {
            return a(e, r), t ? e.__proto__ = r : n(e, r), e
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    76572: (e, t, r) => {
      var n = r(56008).f,
        i = r(58868),
        a = r(42516)("toStringTag");
      e.exports = function(e, t, r) {
        e && !i(e = r ? e : e.prototype, a) && n(e, a, {
          configurable: !0,
          value: t
        })
      }
    },
    7448: (e, t, r) => {
      var n = r(13332)("keys"),
        i = r(63540);
      e.exports = function(e) {
        return n[e] || (n[e] = i(e))
      }
    },
    13332: (e, t, r) => {
      var n = r(37208),
        i = r(56384),
        a = "__core-js_shared__",
        s = i[a] || (i[a] = {});
      (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {})
      })("versions", []).push({
        version: n.version,
        mode: r(41380) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    66268: (e, t, r) => {
      var n = r(9592),
        i = r(69396);
      e.exports = function(e) {
        return function(t, r) {
          var a, s, o = String(i(t)),
            l = n(r),
            h = o.length;
          return l < 0 || l >= h ? e ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    82752: (e, t, r) => {
      var n = r(9592),
        i = Math.max,
        a = Math.min;
      e.exports = function(e, t) {
        return (e = n(e)) < 0 ? i(e + t, 0) : a(e, t)
      }
    },
    9592: e => {
      var t = Math.ceil,
        r = Math.floor;
      e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
      }
    },
    28828: (e, t, r) => {
      var n = r(45760),
        i = r(69396);
      e.exports = function(e) {
        return n(i(e))
      }
    },
    49344: (e, t, r) => {
      var n = r(9592),
        i = Math.min;
      e.exports = function(e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0
      }
    },
    47380: (e, t, r) => {
      var n = r(69396);
      e.exports = function(e) {
        return Object(n(e))
      }
    },
    94800: (e, t, r) => {
      var n = r(93536);
      e.exports = function(e, t) {
        if (!n(e)) return e;
        var r, i;
        if (t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
        if ("function" == typeof(r = e.valueOf) && !n(i = r.call(e))) return i;
        if (!t && "function" == typeof(r = e.toString) && !n(i = r.call(e))) return i;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    63540: e => {
      var t = 0,
        r = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36))
      }
    },
    66152: (e, t, r) => {
      var n = r(56384),
        i = r(37208),
        a = r(41380),
        s = r(33728),
        o = r(56008).f;
      e.exports = function(e) {
        var t = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
        "_" == e.charAt(0) || e in t || o(t, e, {
          value: s.f(e)
        })
      }
    },
    33728: (e, t, r) => {
      t.f = r(42516)
    },
    42516: (e, t, r) => {
      var n = r(13332)("wks"),
        i = r(63540),
        a = r(56384).Symbol,
        s = "function" == typeof a;
      (e.exports = function(e) {
        return n[e] || (n[e] = s && a[e] || (s ? a : i)("Symbol." + e))
      }).store = n
    },
    2084: (e, t, r) => {
      "use strict";
      var n = r(62016),
        i = r(9980),
        a = r(71148),
        s = r(28828);
      e.exports = r(65708)(Array, "Array", (function(e, t) {
        this._t = s(e), this._i = 0, this._k = t
      }), (function() {
        var e = this._t,
          t = this._k,
          r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
      }), "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
    },
    19808: (e, t, r) => {
      var n = r(96604);
      n(n.S + n.F, "Object", {
        assign: r(43492)
      })
    },
    47779: (e, t, r) => {
      var n = r(96604);
      n(n.S, "Object", {
        create: r(75069)
      })
    },
    19652: (e, t, r) => {
      var n = r(96604);
      n(n.S + n.F * !r(65168), "Object", {
        defineProperty: r(56008).f
      })
    },
    24048: (e, t, r) => {
      var n = r(47380),
        i = r(88872);
      r(91040)("getPrototypeOf", (function() {
        return function(e) {
          return i(n(e))
        }
      }))
    },
    16200: (e, t, r) => {
      var n = r(96604);
      n(n.S, "Object", {
        setPrototypeOf: r(46935).set
      })
    },
    14788: () => {},
    41852: (e, t, r) => {
      "use strict";
      var n = r(66268)(!0);
      r(65708)(String, "String", (function(e) {
        this._t = String(e), this._i = 0
      }), (function() {
        var e, t = this._t,
          r = this._i;
        return r >= t.length ? {
          value: void 0,
          done: !0
        } : (e = n(t, r), this._i += e.length, {
          value: e,
          done: !1
        })
      }))
    },
    37104: (e, t, r) => {
      "use strict";
      var n = r(56384),
        i = r(58868),
        a = r(65168),
        s = r(96604),
        o = r(50496),
        l = r(60528).KEY,
        h = r(65032),
        u = r(13332),
        c = r(76572),
        p = r(63540),
        f = r(42516),
        d = r(33728),
        m = r(66152),
        y = r(9684),
        v = r(44244),
        g = r(83060),
        b = r(93536),
        S = r(47380),
        x = r(28828),
        E = r(94800),
        P = r(15196),
        C = r(75069),
        T = r(49920),
        M = r(34096),
        _ = r(70716),
        w = r(56008),
        A = r(37108),
        k = M.f,
        D = w.f,
        I = T.f,
        F = n.Symbol,
        O = n.JSON,
        R = O && O.stringify,
        L = "prototype",
        V = f("_hidden"),
        B = f("toPrimitive"),
        N = {}.propertyIsEnumerable,
        z = u("symbol-registry"),
        G = u("symbols"),
        j = u("op-symbols"),
        H = Object[L],
        W = "function" == typeof F && !!_.f,
        U = n.QObject,
        q = !U || !U[L] || !U[L].findChild,
        $ = a && h((function() {
          return 7 != C(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(e, t, r) {
          var n = k(H, t);
          n && delete H[t], D(e, t, r), n && e !== H && D(H, t, n)
        } : D,
        Y = function(e) {
          var t = G[e] = C(F[L]);
          return t._k = e, t
        },
        K = W && "symbol" == typeof F.iterator ? function(e) {
          return "symbol" == typeof e
        } : function(e) {
          return e instanceof F
        },
        X = function(e, t, r) {
          return e === H && X(j, t, r), g(e), t = E(t, !0), g(r), i(G, t) ? (r.enumerable ? (i(e, V) && e[V][t] && (e[V][t] = !1), r = C(r, {
            enumerable: P(0, !1)
          })) : (i(e, V) || D(e, V, P(1, {})), e[V][t] = !0), $(e, t, r)) : D(e, t, r)
        },
        Z = function(e, t) {
          g(e);
          for (var r, n = y(t = x(t)), i = 0, a = n.length; a > i;) X(e, r = n[i++], t[r]);
          return e
        },
        J = function(e) {
          var t = N.call(this, e = E(e, !0));
          return !(this === H && i(G, e) && !i(j, e)) && (!(t || !i(this, e) || !i(G, e) || i(this, V) && this[V][e]) || t)
        },
        Q = function(e, t) {
          if (e = x(e), t = E(t, !0), e !== H || !i(G, t) || i(j, t)) {
            var r = k(e, t);
            return !r || !i(G, t) || i(e, V) && e[V][t] || (r.enumerable = !0), r
          }
        },
        ee = function(e) {
          for (var t, r = I(x(e)), n = [], a = 0; r.length > a;) i(G, t = r[a++]) || t == V || t == l || n.push(t);
          return n
        },
        te = function(e) {
          for (var t, r = e === H, n = I(r ? j : x(e)), a = [], s = 0; n.length > s;) !i(G, t = n[s++]) || r && !i(H, t) || a.push(G[t]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
          t = function(r) {
            this === H && t.call(j, r), i(this, V) && i(this[V], e) && (this[V][e] = !1), $(this, e, P(1, r))
          };
        return a && q && $(H, e, {
          configurable: !0,
          set: t
        }), Y(e)
      })[L], "toString", (function() {
        return this._k
      })), M.f = Q, w.f = X, r(79584).f = T.f = ee, r(9520).f = J, _.f = te, a && !r(41380) && o(H, "propertyIsEnumerable", J, !0), d.f = function(e) {
        return Y(f(e))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var re = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; re.length > ne;) f(re[ne++]);
      for (var ie = A(f.store), ae = 0; ie.length > ae;) m(ie[ae++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(e) {
          return i(z, e += "") ? z[e] : z[e] = F(e)
        },
        keyFor: function(e) {
          if (!K(e)) throw TypeError(e + " is not a symbol!");
          for (var t in z)
            if (z[t] === e) return t
        },
        useSetter: function() {
          q = !0
        },
        useSimple: function() {
          q = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(e, t) {
          return void 0 === t ? C(e) : Z(C(e), t)
        },
        defineProperty: X,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te
      });
      var se = h((function() {
        _.f(1)
      }));
      s(s.S + s.F * se, "Object", {
        getOwnPropertySymbols: function(e) {
          return _.f(S(e))
        }
      }), O && s(s.S + s.F * (!W || h((function() {
        var e = F();
        return "[null]" != R([e]) || "{}" != R({
          a: e
        }) || "{}" != R(Object(e))
      }))), "JSON", {
        stringify: function(e) {
          for (var t, r, n = [e], i = 1; arguments.length > i;) n.push(arguments[i++]);
          if (r = t = n[1], (b(t) || void 0 !== e) && !K(e)) return v(t) || (t = function(e, t) {
            if ("function" == typeof r && (t = r.call(this, e, t)), !K(t)) return t
          }), n[1] = t, R.apply(O, n)
        }
      }), F[L][B] || r(11480)(F[L], B, F[L].valueOf), c(F, "Symbol"), c(Math, "Math", !0), c(n.JSON, "JSON", !0)
    },
    71284: (e, t, r) => {
      r(66152)("asyncIterator")
    },
    93696: (e, t, r) => {
      r(66152)("observable")
    },
    63624: (e, t, r) => {
      r(2084);
      for (var n = r(56384), i = r(11480), a = r(71148), s = r(42516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var h = o[l],
          u = n[h],
          c = u && u.prototype;
        c && !c[s] && i(c, s, h), a[h] = a.Array
      }
    },
    78048: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    82396: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);