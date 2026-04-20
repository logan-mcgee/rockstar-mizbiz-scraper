try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5b4bf859-29e6-415b-aca4-92ced573b51a", t._sentryDebugIdIdentifier = "sentry-dbid-5b4bf859-29e6-415b-aca4-92ced573b51a")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2496], {
    9738: (t, e, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        u = Math.max,
        a = Math.min;
      t.exports = function(t, e, n) {
        var f, s, c, d, l, p, v = 0,
          b = !1,
          y = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) {
          var n = f,
            r = s;
          return f = s = void 0, v = e, d = t.apply(r, n)
        }

        function w(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || y && t - v >= c
        }

        function _() {
          var t = o();
          if (w(t)) return m(t);
          l = setTimeout(_, function(t) {
            var n = e - (t - p);
            return y ? a(n, c - (t - v)) : n
          }(t))
        }

        function m(t) {
          return l = void 0, g && f ? h(t) : (f = s = void 0, d)
        }

        function x() {
          var t = o(),
            n = w(t);
          if (f = arguments, s = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(_, e), b ? h(t) : d
            }(p);
            if (y) return clearTimeout(l), l = setTimeout(_, e), h(p)
          }
          return void 0 === l && (l = setTimeout(_, e)), d
        }
        return e = i(e) || 0, r(n) && (b = !!n.leading, c = (y = "maxWait" in n) ? u(i(n.maxWait) || 0, e) : c, g = "trailing" in n ? !!n.trailing : g), x.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, f = p = s = l = void 0
        }, x.flush = function() {
          return void 0 === l ? d : m(o())
        }, x
      }
    },
    10533: (t, e, n) => {
      var r = n(86601);
      t.exports = function(t, e, n, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : r(t, e, n, o)
      }
    },
    10613: (t, e, n) => {
      var r = n(23117);
      t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o
      }
    },
    20332: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => u
      });
      var r = n(42735),
        o = n(77044);

      function i(t, e) {
        return (0, o.w)(e || t, t)
      }

      function u(t, e, n) {
        const o = function(t, e) {
          return +i(t) - +i(e)
        }(t, e) / 1e3;
        return (0, r.u)(n?.roundingMethod)(o)
      }
    },
    22909: (t, e, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        u = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = a.test(t);
        return n || f.test(t) ? s(t.slice(2), n ? 2 : 8) : u.test(t) ? NaN : +t
      }
    },
    28593: (t, e, n) => {
      var r = n(15036);
      t.exports = function() {
        return r.Date.now()
      }
    },
    31454: (t, e, n) => {
      var r = n(49192);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    42735: (t, e, n) => {
      "use strict";

      function r(t) {
        return e => {
          const n = (t ? Math[t] : Math.trunc)(e);
          return 0 === n ? 0 : n
        }
      }
      n.d(e, {
        u: () => r
      })
    },
    75888: t => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var u = -1, a = n(e((r - t) / (o || 1)), 0), f = Array(a); a--;) f[i ? a : ++u] = t, t += o;
        return f
      }
    },
    77044: (t, e, n) => {
      "use strict";
      n.d(e, {
        w: () => o
      });
      var r = n(77984);

      function o(t, e) {
        return "function" == typeof t ? t(e) : t && "object" == typeof t && r._P in t ? t[r._P](e) : t instanceof Date ? new t.constructor(e) : new Date(e)
      }
    },
    77984: (t, e, n) => {
      "use strict";
      n.d(e, {
        _P: () => o,
        s0: () => r
      }), Math.pow(10, 8);
      const r = 36e5,
        o = Symbol.for("constructDateFrom")
    },
    85531: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    86601: (t, e, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        u = n(56130),
        a = n(81966);
      t.exports = function(t, e, n, f) {
        if (!u(t)) return t;
        for (var s = -1, c = (e = o(e, t)).length, d = c - 1, l = t; null != l && ++s < c;) {
          var p = a(e[s]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (s != d) {
            var b = l[p];
            void 0 === (v = f ? f(b, p, l) : void 0) && (v = u(b) ? b : i(e[s + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
        }
        return t
      }
    },
    87625: (t, e, n) => {
      var r = n(85531),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t
      }
    },
    95187: (t, e, n) => {
      var r = n(22909),
        o = 1 / 0;
      t.exports = function(t) {
        return t ? (t = r(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    95362: (t, e, n) => {
      "use strict";
      n.d(e, {
        s: () => u,
        t: () => i
      });
      var r = n(71127);

      function o(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }

      function i(...t) {
        return e => {
          let n = !1;
          const r = t.map(t => {
            const r = o(t, e);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let e = 0; e < r.length; e++) {
              const n = r[e];
              "function" == typeof n ? n() : o(t[e], null)
            }
          }
        }
      }

      function u(...t) {
        return r.useCallback(i(...t), t)
      }
    },
    98312: (t, e, n) => {
      var r = n(99335)();
      t.exports = r
    },
    99335: (t, e, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      t.exports = function(t) {
        return function(e, n, u) {
          return u && "number" != typeof u && o(e, n, u) && (n = u = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), u = void 0 === u ? e < n ? 1 : -1 : i(u), r(e, n, u, t)
        }
      }
    }
  }
]);