try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e600ddeb-d56a-4468-9541-342e7ed4f2a2", e._sentryDebugIdIdentifier = "sentry-dbid-e600ddeb-d56a-4468-9541-342e7ed4f2a2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5744], {
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        f = Math.min;
      e.exports = function(e, t, n) {
        var d, u, s, c, l, p, v = 0,
          w = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var n = d,
            r = u;
          return d = u = void 0, v = t, c = e.apply(r, n)
        }

        function m(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - v >= s
        }

        function b() {
          var e = o();
          if (m(e)) return x(e);
          l = setTimeout(b, function(e) {
            var n = t - (e - p);
            return g ? f(n, s - (e - v)) : n
          }(e))
        }

        function x(e) {
          return l = void 0, y && d ? h(e) : (d = u = void 0, c)
        }

        function _() {
          var e = o(),
            n = m(e);
          if (d = arguments, u = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(b, t), w ? h(e) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(b, t), h(p)
          }
          return void 0 === l && (l = setTimeout(b, t)), c
        }
        return t = i(t) || 0, r(n) && (w = !!n.leading, s = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : s, y = "trailing" in n ? !!n.trailing : y), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, d = p = u = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : x(o())
        }, _
      }
    },
    10533: (e, t, n) => {
      var r = n(86601);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    10613: (e, t, n) => {
      var r = n(23117);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = f.test(e);
        return n || d.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    28593: (e, t, n) => {
      var r = n(15036);
      e.exports = function() {
        return r.Date.now()
      }
    },
    31454: (e, t, n) => {
      var r = n(49192);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    51105: (e, t, n) => {
      "use strict";
      n.d(t, {
        v: () => f
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function f(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              f = o[e];
            "function" == typeof n && "function" == typeof f && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, f) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof f ? "id" === e && n && f ? t.id = i(n, f) : t[e] = void 0 !== f ? f : n : t[e] = (0, r.clsx)(n, f)
          }
        }
        return t
      }
    },
    60211: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    75523: (e, t, n) => {
      "use strict";
      n.d(t, {
        X3: () => r.X,
        fi: () => i,
        IO: () => d,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var r = n(60211);
      const o = e => e - .02,
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
        d = (e, t) => r.X ? t() : (window[f] || (window[f] = new Map), window[f].has(e) || window[f].set(e, t()), window[f].get(e));
      n(98312);
      var u, s = n(41972);

      function c(e, ...t) {
        return s(e, ...t)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(u || (u = {})), Symbol.toStringTag;
      const l = (...e) => e.filter(e => e).join(" ")
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, f = n(t((r - e) / (o || 1)), 0), d = Array(f); f--;) d[i ? f : ++a] = e, e += o;
        return d
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    86601: (e, t, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        a = n(56130),
        f = n(81966);
      e.exports = function(e, t, n, d) {
        if (!a(e)) return e;
        for (var u = -1, s = (t = o(t, e)).length, c = s - 1, l = e; null != l && ++u < s;) {
          var p = f(t[u]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (u != c) {
            var w = l[p];
            void 0 === (v = d ? d(w, p, l) : void 0) && (v = a(w) ? w : i(t[u + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
        }
        return e
      }
    },
    87625: (e, t, n) => {
      var r = n(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, n) => {
      var r = n(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => a,
        t: () => i
      });
      var r = n(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    98312: (e, t, n) => {
      var r = n(99335)();
      e.exports = r
    },
    99335: (e, t, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    }
  }
]);