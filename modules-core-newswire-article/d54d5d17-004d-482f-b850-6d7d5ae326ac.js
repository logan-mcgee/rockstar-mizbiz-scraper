! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d54d5d17-004d-482f-b850-6d7d5ae326ac", e._sentryDebugIdIdentifier = "sentry-dbid-d54d5d17-004d-482f-b850-6d7d5ae326ac")
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
  [2654], {
    4797: (e, t, n) => {
      "use strict";
      var A = n(43790);

      function r() {}

      function o() {}
      o.resetWarningCache = r, e.exports = function() {
        function e(e, t, n, r, o, i) {
          if (i !== A) {
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
          resetWarningCache: r
        };
        return n.PropTypes = n, n
      }
    },
    72817: (e, t, n) => {
      e.exports = n(4797)()
    },
    43790: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    37186: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var A = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var A in n) Object.prototype.hasOwnProperty.call(n, A) && (e[A] = n[A])
          }
          return e
        },
        r = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var A = t[n];
              A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(e, A.key, A)
            }
          }
          return function(t, n, A) {
            return n && e(t.prototype, n), A && e(t, A), t
          }
        }(),
        o = c(n(62229)),
        i = c(n(72817)),
        a = c(n(14332)),
        u = c(n(85177)),
        l = c(n(94613)),
        s = c(n(74844)),
        d = c(n(54762)),
        f = n(71319);

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function h(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var g = function(e) {
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
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), n.handleWindowResize = (0, s.default)(n.handleWindowResize, e.throttle), n
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
        }(t, e), r(t, [{
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
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, d.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              n = t.min,
              A = t.max,
              r = t.mode,
              o = t.forceSingleModeWidth,
              i = t.onReady,
              a = this._parent,
              s = this._child,
              c = (0, f.innerWidth)(a),
              g = (0, f.innerHeight)(a);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (c <= 0 || isNaN(c)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var y = (0, d.default)();
              this.pid = y;
              var w = function() {
                  return y !== e.pid
                },
                b = "multi" === r ? function() {
                  return h(s, g)
                } : function() {
                  return p(s, c)
                },
                m = "multi" === r ? function() {
                  return p(s, c)
                } : function() {
                  return h(s, g)
                },
                v = void 0,
                B = n,
                Y = A;
              this.setState({
                ready: !1
              }), (0, u.default)([function(t) {
                return (0, l.default)((function() {
                  return B <= Y
                }), (function(t) {
                  if (w()) return t(!0);
                  v = parseInt((B + Y) / 2, 10), e.setState({
                    fontSize: v
                  }, (function() {
                    return w() ? t(!0) : (b() ? B = v + 1 : Y = v - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === r && o || m() ? t() : (B = n, Y = v, (0, l.default)((function() {
                  return B < Y
                }), (function(t) {
                  if (w()) return t(!0);
                  v = parseInt((B + Y) / 2, 10), e.setState({
                    fontSize: v
                  }, (function() {
                    return y !== e.pid ? t(!0) : (m() ? B = v + 1 : Y = v - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (v = Math.min(B, Y), v = Math.max(v, n), v = Math.min(v, A), v = Math.max(v, 0), w()) return t(!0);
                e.setState({
                  fontSize: v
                }, t)
              }], (function(t) {
                t || w() || e.setState({
                  ready: !0
                }, (function() {
                  return i(v)
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
              r = t.text,
              i = t.style,
              a = (t.min, t.max, t.mode),
              u = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var n = {};
                for (var A in e) t.indexOf(A) >= 0 || Object.prototype.hasOwnProperty.call(e, A) && (n[A] = e[A]);
                return n
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              l = this.state,
              s = l.fontSize,
              d = l.ready,
              f = A({}, i, {
                fontSize: s
              }),
              c = {
                display: d ? "block" : "inline-block"
              };
            return "single" === a && (c.whiteSpace = "nowrap"), o.default.createElement("div", A({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, u), o.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: c
            }, r && "function" == typeof n ? d ? n(r) : r : n))
          }
        }]), t
      }(o.default.Component);
      g.propTypes = {
        children: i.default.node,
        text: i.default.string,
        min: i.default.number,
        max: i.default.number,
        mode: i.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: i.default.bool,
        throttle: i.default.number,
        onReady: i.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = g
    },
    21308: (e, t, n) => {
      "use strict";
      t.zb = void 0;
      var A, r = (A = n(37186)) && A.__esModule ? A : {
        default: A
      };
      t.zb = r.default, r.default
    },
    71319: (e, t) => {
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
    85177: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = [],
          A = 0,
          o = !0;

        function i(e) {
          function A() {
            t && t(e, n)
          }
          o ? r.default.nextTick(A) : A()
        }
        e.length > 0 ? e[0]((function t(r, o) {
          n.push(o), ++A >= e.length || r ? i(r) : e[A](t)
        })) : i(null), o = !1
      };
      var A, r = (A = n(18113)) && A.__esModule ? A : {
        default: A
      }
    },
    14332: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var n = Object.keys(e),
          A = Object.keys(t);
        if (n.length !== A.length) return !1;
        for (var r = Object.prototype.hasOwnProperty, o = 0; o < n.length; o++)
          if (!r.call(t, n[o]) || e[n[o]] !== t[n[o]]) return !1;
        return !0
      }
    },
    74844: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = void 0,
          A = void 0,
          r = void 0,
          o = void 0,
          i = 0;

        function a() {
          o = 0, i = +new Date, r = e.apply(n, A), n = null, A = null
        }
        return function() {
          n = this, A = arguments;
          var e = new Date - i;
          return o || (e >= t ? a() : o = setTimeout(a, t - e)), r
        }
      }
    },
    54762: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return n++
      };
      var n = 0
    },
    94613: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        e() ? t((function n(r) {
          for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
          r ? A(r) : e.apply(this, i) ? t(n) : A(null)
        })) : A(null)
      };
      var n = function() {}
    },
    56085: e => {
      "use strict";
      e.exports = "data:application/font-woff;charset=utf-8;base64, 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"
    }
  }
]);