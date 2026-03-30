try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "b413b8d5-2b2d-4ff2-ae46-ae472ff5a911", t._sentryDebugIdIdentifier = "sentry-dbid-b413b8d5-2b2d-4ff2-ae46-ae472ff5a911")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5744], {
    9738: (t, e, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        f = Math.min;
      t.exports = function(t, e, n) {
        var u, s, d, c, l, p, v = 0,
          g = !1,
          w = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function b(e) {
          var n = u,
            r = s;
          return u = s = void 0, v = e, c = t.apply(r, n)
        }

        function h(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || w && t - v >= d
        }

        function m() {
          var t = o();
          if (h(t)) return x(t);
          l = setTimeout(m, function(t) {
            var n = e - (t - p);
            return w ? f(n, d - (t - v)) : n
          }(t))
        }

        function x(t) {
          return l = void 0, y && u ? b(t) : (u = s = void 0, c)
        }

        function _() {
          var t = o(),
            n = h(t);
          if (u = arguments, s = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(m, e), g ? b(t) : c
            }(p);
            if (w) return clearTimeout(l), l = setTimeout(m, e), b(p)
          }
          return void 0 === l && (l = setTimeout(m, e)), c
        }
        return e = i(e) || 0, r(n) && (g = !!n.leading, d = (w = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : d, y = "trailing" in n ? !!n.trailing : y), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = s = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : x(o())
        }, _
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
    22909: (t, e, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
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
        var n = f.test(t);
        return n || u.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
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
    51105: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => f
      });
      var r = n(1556);
      const o = new Map;

      function i(t, e) {
        if (t === e) return t;
        const n = o.get(t);
        if (n) return n.forEach(t => t(e)), e;
        const r = o.get(e);
        return r ? (r.forEach(e => e(t)), t) : e
      }

      function a(...t) {
        return (...e) => {
          for (const n of t) "function" == typeof n && n(...e)
        }
      }

      function f(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              f = o[t];
            "function" == typeof n && "function" == typeof f && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, f) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof f ? "id" === t && n && f ? e.id = i(n, f) : e[t] = void 0 !== f ? f : n : e[t] = (0, r.clsx)(n, f)
          }
        }
        return e
      }
    },
    60211: (t, e, n) => {
      "use strict";
      n.d(e, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    75523: (t, e, n) => {
      "use strict";
      n.d(e, {
        X3: () => r.X,
        fi: () => i,
        IO: () => u,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var r = n(60211);
      const o = t => t - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${o(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${o(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${o(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${o(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var a = n(51105);
      const f = "__FOUNDRY_ACCENT__",
        u = (t, e) => r.X ? e() : (window[f] || (window[f] = new Map), window[f].has(t) || window[f].set(t, e()), window[f].get(t));
      n(98312);
      var s, d = n(41972);

      function c(t, ...e) {
        return d(t, ...e)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const l = (...t) => t.filter(t => t).join(" ")
    },
    75888: t => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, f = n(e((r - t) / (o || 1)), 0), u = Array(f); f--;) u[i ? f : ++a] = t, t += o;
        return u
      }
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
        a = n(56130),
        f = n(81966);
      t.exports = function(t, e, n, u) {
        if (!a(t)) return t;
        for (var s = -1, d = (e = o(e, t)).length, c = d - 1, l = t; null != l && ++s < d;) {
          var p = f(e[s]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (s != c) {
            var g = l[p];
            void 0 === (v = u ? u(g, p, l) : void 0) && (v = a(g) ? g : i(e[s + 1]) ? [] : {})
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
        s: () => a,
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

      function a(...t) {
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
        return function(e, n, a) {
          return a && "number" != typeof a && o(e, n, a) && (n = a = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), a = void 0 === a ? e < n ? 1 : -1 : i(a), r(e, n, a, t)
        }
      }
    }
  }
]);