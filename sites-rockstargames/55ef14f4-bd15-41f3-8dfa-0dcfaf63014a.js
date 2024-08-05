! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55ef14f4-bd15-41f3-8dfa-0dcfaf63014a", e._sentryDebugIdIdentifier = "sentry-dbid-55ef14f4-bd15-41f3-8dfa-0dcfaf63014a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5933, 6632], {
    19435: (e, t, r) => {
      var n = r(78007).Symbol;
      e.exports = n
    },
    7158: (e, t, r) => {
      var n = r(19435),
        o = r(16061),
        a = r(84968),
        i = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
      }
    },
    48530: (e, t, r) => {
      var n = r(18478),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    94626: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    16061: (e, t, r) => {
      var n = r(19435),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        f = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, f),
          r = e[f];
        try {
          e[f] = void 0;
          var n = !0
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? e[f] = r : delete e[f]), o
      }
    },
    84968: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    78007: (e, t, r) => {
      var n = r(94626),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
      e.exports = a
    },
    18478: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    14963: (e, t, r) => {
      var n = r(27335),
        o = r(92346),
        a = r(58972),
        i = Math.max,
        f = Math.min;
      e.exports = function(e, t, r) {
        var u, s, c, l, d, p, v = 0,
          y = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(t) {
          var r = u,
            n = s;
          return u = s = void 0, v = t, l = e.apply(n, r)
        }

        function m(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || b && e - v >= c
        }

        function w() {
          var e = o();
          if (m(e)) return x(e);
          d = setTimeout(w, function(e) {
            var r = t - (e - p);
            return b ? f(r, c - (e - v)) : r
          }(e))
        }

        function x(e) {
          return d = void 0, g && u ? _(e) : (u = s = void 0, l)
        }

        function O() {
          var e = o(),
            r = m(e);
          if (u = arguments, s = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return v = e, d = setTimeout(w, t), y ? _(e) : l
            }(p);
            if (b) return clearTimeout(d), d = setTimeout(w, t), _(p)
          }
          return void 0 === d && (d = setTimeout(w, t)), l
        }
        return t = a(t) || 0, n(r) && (y = !!r.leading, c = (b = "maxWait" in r) ? i(a(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), O.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, u = p = s = d = void 0
        }, O.flush = function() {
          return void 0 === d ? l : x(o())
        }, O
      }
    },
    27335: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    95360: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    87416: (e, t, r) => {
      var n = r(7158),
        o = r(95360);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
      }
    },
    92346: (e, t, r) => {
      var n = r(78007);
      e.exports = function() {
        return n.Date.now()
      }
    },
    58972: (e, t, r) => {
      var n = r(48530),
        o = r(27335),
        a = r(87416),
        i = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = f.test(e);
        return r || u.test(e) ? s(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    26516: (e, t, r) => {
      "use strict";
      var n = r(71403),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, r) {
        var n, a = {},
          s = null,
          c = null;
        for (n in void 0 !== r && (s = "" + r), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, n) && !u.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: a,
          _owner: f.current
        }
      }
      t.Fragment = a, t.jsx = s, t.jsxs = s
    },
    46632: (e, t, r) => {
      "use strict";
      e.exports = r(26516)
    },
    72862: (e, t) => {
      var r;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r && (e = i(e, a(r)))
          }
          return e
        }

        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var r in e) n.call(e, r) && e[r] && (t = i(t, r));
          return t
        }

        function i(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
          return o
        }.apply(t, [])) || (e.exports = r)
      }()
    }
  }
]);