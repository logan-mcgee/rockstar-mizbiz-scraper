! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a78f16a9-26f7-4eab-beab-5cf1083541f5", e._sentryDebugIdIdentifier = "sentry-dbid-a78f16a9-26f7-4eab-beab-5cf1083541f5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6668], {
    67366: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
        i = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        o = p(n(71403)),
        s = p(n(37977)),
        a = p(n(52696)),
        u = p(n(51901)),
        l = p(n(66785)),
        d = p(n(28512)),
        c = p(n(54518)),
        f = n(75923);

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function y(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var b = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {
            fontSize: null,
            ready: !1
          }, n.handleWindowResize = function() {
            n.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), n.handleWindowResize = (0, d.default)(n.handleWindowResize, e.throttle), n
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
            this.state.ready && ((0, a.default)(this.props, e) || this.process())
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
              n = t.min,
              r = t.max,
              i = t.mode,
              o = t.forceSingleModeWidth,
              s = t.onReady,
              a = this._parent,
              d = this._child,
              p = (0, f.innerWidth)(a),
              b = (0, f.innerHeight)(a);
            if (b <= 0 || isNaN(b)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, c.default)();
              this.pid = g;
              var v = function() {
                  return g !== e.pid
                },
                m = "multi" === i ? function() {
                  return y(d, b)
                } : function() {
                  return h(d, p)
                },
                w = "multi" === i ? function() {
                  return h(d, p)
                } : function() {
                  return y(d, b)
                },
                _ = void 0,
                k = n,
                O = r;
              this.setState({
                ready: !1
              }), (0, u.default)([function(t) {
                return (0, l.default)((function() {
                  return k <= O
                }), (function(t) {
                  if (v()) return t(!0);
                  _ = parseInt((k + O) / 2, 10), e.setState({
                    fontSize: _
                  }, (function() {
                    return v() ? t(!0) : (m() ? k = _ + 1 : O = _ - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === i && o || w() ? t() : (k = n, O = _, (0, l.default)((function() {
                  return k < O
                }), (function(t) {
                  if (v()) return t(!0);
                  _ = parseInt((k + O) / 2, 10), e.setState({
                    fontSize: _
                  }, (function() {
                    return g !== e.pid ? t(!0) : (w() ? k = _ + 1 : O = _ - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (_ = Math.min(k, O), _ = Math.max(_, n), _ = Math.min(_, r), _ = Math.max(_, 0), v()) return t(!0);
                e.setState({
                  fontSize: _
                }, t)
              }], (function(t) {
                t || v() || e.setState({
                  ready: !0
                }, (function() {
                  return s(_)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              n = t.children,
              i = t.text,
              s = t.style,
              a = (t.min, t.max, t.mode),
              u = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              l = this.state,
              d = l.fontSize,
              c = l.ready,
              f = r({}, s, {
                fontSize: d
              }),
              p = {
                display: c ? "block" : "inline-block"
              };
            return "single" === a && (p.whiteSpace = "nowrap"), o.default.createElement("div", r({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, u), o.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: p
            }, i && "function" == typeof n ? c ? n(i) : i : n))
          }
        }]), t
      }(o.default.Component);
      b.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, b.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = b
    },
    64544: (e, t, n) => {
      "use strict";
      t.zb = void 0;
      var r, i = (r = n(67366)) && r.__esModule ? r : {
        default: r
      };
      t.zb = i.default, i.default
    },
    75923: (e, t) => {
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
    51901: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = [],
          r = 0,
          o = !0;

        function s(e) {
          function r() {
            t && t(e, n)
          }
          o ? i.default.nextTick(r) : r()
        }
        e.length > 0 ? e[0]((function t(i, o) {
          n.push(o), ++r >= e.length || i ? s(i) : e[r](t)
        })) : s(null), o = !1
      };
      var r, i = (r = n(90098)) && r.__esModule ? r : {
        default: r
      }
    },
    52696: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, o = 0; o < n.length; o++)
          if (!i.call(t, n[o]) || e[n[o]] !== t[n[o]]) return !1;
        return !0
      }
    },
    28512: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = void 0,
          r = void 0,
          i = void 0,
          o = void 0,
          s = 0;

        function a() {
          o = 0, s = +new Date, i = e.apply(n, r), n = null, r = null
        }
        return function() {
          n = this, r = arguments;
          var e = new Date - s;
          return o || (e >= t ? a() : o = setTimeout(a, t - e)), i
        }
      }
    },
    54518: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return n++
      };
      var n = 0
    },
    66785: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        e() ? t((function n(i) {
          for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
          i ? r(i) : e.apply(this, s) ? t(n) : r(null)
        })) : r(null)
      };
      var n = function() {}
    },
    89269: (e, t, n) => {
      "use strict";
      var r = n(17254);

      function i() {}

      function o() {}
      o.resetWarningCache = i, e.exports = function() {
        function e(e, t, n, i, o, s) {
          if (s !== r) {
            var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation", a
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
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
          checkPropTypes: o,
          resetWarningCache: i
        };
        return n.PropTypes = n, n
      }
    },
    37977: (e, t, n) => {
      e.exports = n(89269)()
    },
    17254: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    41136: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => u
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const o = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(o)
      }
      const a = [];
      for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
      const u = function(e, t, n) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const i = (e = e || {}).random || (e.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = i[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]
        }(i)
      }
    },
    300: (e, t, n) => {
      "use strict";
      n.d(t, {
        Wx: () => f,
        pL: () => c
      });
      var r = n(71403),
        i = Object.defineProperty,
        o = (e, t, n) => (((e, t, n) => {
          t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n
        })(e, "symbol" != typeof t ? t + "" : t, n), n),
        s = new Map,
        a = new WeakMap,
        u = 0,
        l = void 0;

      function d(e, t, n = {}, r = l) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const i = e.getBoundingClientRect();
          return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: i,
          observer: o,
          elements: d
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(n=e.root,n?(a.has(n)||(u+=1,a.set(n,u.toString())),a.get(n)):"0"):e[t]}`;
              var n
            })).toString()
          }(e);
          let n = s.get(t);
          if (!n) {
            const r = new Map;
            let i;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const o = t.isIntersecting && i.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = r.get(t.target)) || n.forEach((e => {
                  e(o, t)
                }))
              }))
            }), e);
            i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: o,
              elements: r
            }, s.set(t, n)
          }
          return n
        }(n), c = d.get(e) || [];
        return d.has(e) || d.set(e, c), c.push(t), o.observe(e),
          function() {
            c.splice(c.indexOf(t), 1), 0 === c.length && (d.delete(e), o.unobserve(e)), 0 === d.size && (o.disconnect(), s.delete(i))
          }
      }
      var c = class extends r.Component {
        constructor(e) {
          super(e), o(this, "node", null), o(this, "_unobserveCb", null), o(this, "handleNode", (e => {
            this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = e || null, this.observeNode()
          })), o(this, "handleChange", ((e, t) => {
            e && this.props.triggerOnce && this.unobserve(),
              function(e) {
                return "function" != typeof e.children
              }(this.props) || this.setState({
                inView: e,
                entry: t
              }), this.props.onChange && this.props.onChange(e, t)
          })), this.state = {
            inView: !!e.initialInView,
            entry: void 0
          }
        }
        componentDidMount() {
          this.unobserve(), this.observeNode()
        }
        componentDidUpdate(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve()
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: r,
            delay: i,
            fallbackInView: o
          } = this.props;
          this._unobserveCb = d(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: r,
            delay: i
          }, o)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          const {
            children: e
          } = this.props;
          if ("function" == typeof e) {
            const {
              inView: t,
              entry: n
            } = this.state;
            return e({
              inView: t,
              entry: n,
              ref: this.handleNode
            })
          }
          const {
            as: t,
            triggerOnce: n,
            threshold: i,
            root: o,
            rootMargin: s,
            onChange: a,
            skip: u,
            trackVisibility: l,
            delay: d,
            initialInView: c,
            fallbackInView: f,
            ...p
          } = this.props;
          return r.createElement(t || "div", {
            ref: this.handleNode,
            ...p
          }, e)
        }
      };

      function f({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: i,
        root: o,
        triggerOnce: s,
        skip: a,
        initialInView: u,
        fallbackInView: l,
        onChange: c
      } = {}) {
        var f;
        const [p, h] = r.useState(null), y = r.useRef(), [b, g] = r.useState({
          inView: !!u,
          entry: void 0
        });
        y.current = c, r.useEffect((() => {
          if (a || !p) return;
          let r;
          return r = d(p, ((e, t) => {
            g({
              inView: e,
              entry: t
            }), y.current && y.current(e, t), t.isIntersecting && s && r && (r(), r = void 0)
          }), {
            root: o,
            rootMargin: i,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, l), () => {
            r && r()
          }
        }), [Array.isArray(e) ? e.toString() : e, p, o, i, s, a, n, l, t]);
        const v = null == (f = b.entry) ? void 0 : f.target,
          m = r.useRef();
        p || !v || s || a || m.current === v || (m.current = v, g({
          inView: !!u,
          entry: void 0
        }));
        const w = [h, b.inView, b.entry];
        return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
      }
    }
  }
]);