try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e600ddeb-d56a-4468-9541-342e7ed4f2a2", t._sentryDebugIdIdentifier = "sentry-dbid-e600ddeb-d56a-4468-9541-342e7ed4f2a2")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5744], {
    9738: (t, e, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        d = Math.min;
      t.exports = function(t, e, n) {
        var u, f, s, c, l, p, v = 0,
          w = !1,
          g = !1,
          y = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function h(e) {
          var n = u,
            r = f;
          return u = f = void 0, v = e, c = t.apply(r, n)
        }

        function m(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - v >= s
        }

        function x() {
          var t = o();
          if (m(t)) return b(t);
          l = setTimeout(x, function(t) {
            var n = e - (t - p);
            return g ? d(n, s - (t - v)) : n
          }(t))
        }

        function b(t) {
          return l = void 0, y && u ? h(t) : (u = f = void 0, c)
        }

        function _() {
          var t = o(),
            n = m(t);
          if (u = arguments, f = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(x, e), w ? h(t) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(x, e), h(p)
          }
          return void 0 === l && (l = setTimeout(x, e)), c
        }
        return e = i(e) || 0, r(n) && (w = !!n.leading, s = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : s, y = "trailing" in n ? !!n.trailing : y), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = f = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : b(o())
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
        d = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        f = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = d.test(t);
        return n || u.test(t) ? f(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
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
        v: () => d
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

      function d(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              d = o[t];
            "function" == typeof n && "function" == typeof d && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, d) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof d ? "id" === t && n && d ? e.id = i(n, d) : e[t] = void 0 !== d ? d : n : e[t] = (0, r.clsx)(n, d)
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
      const d = "__FOUNDRY_ACCENT__",
        u = (t, e) => r.X ? e() : (window[d] || (window[d] = new Map), window[d].has(t) || window[d].set(t, e()), window[d].get(t));
      n(98312);
      var f, s = n(41972);

      function c(t, ...e) {
        return s(t, ...e)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(t) {
          t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const l = (...t) => t.filter(t => t).join(" ")
    },
    75888: t => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, d = n(e((r - t) / (o || 1)), 0), u = Array(d); d--;) u[i ? d : ++a] = t, t += o;
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
        d = n(81966);
      t.exports = function(t, e, n, u) {
        if (!a(t)) return t;
        for (var f = -1, s = (e = o(e, t)).length, c = s - 1, l = t; null != l && ++f < s;) {
          var p = d(e[f]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (f != c) {
            var w = l[p];
            void 0 === (v = u ? u(w, p, l) : void 0) && (v = a(w) ? w : i(e[f + 1]) ? [] : {})
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