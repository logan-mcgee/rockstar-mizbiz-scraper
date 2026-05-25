try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ca953740-00bb-4642-bb8f-20ebf61e7dd2", e._sentryDebugIdIdentifier = "sentry-dbid-ca953740-00bb-4642-bb8f-20ebf61e7dd2")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [5959], {
    43599(e) {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, d = n(t((r - e) / (o || 1)), 0), f = Array(d); d--;) f[i ? d : ++a] = e, e += o;
        return f
      }
    },
    62314(e, t, n) {
      var r = n(87147),
        o = n(71025),
        i = n(15313),
        a = n(36373),
        d = n(30285);
      e.exports = function(e, t, n, f) {
        if (!a(e)) return e;
        for (var s = -1, u = (t = o(t, e)).length, c = u - 1, l = e; null != l && ++s < u;) {
          var p = d(t[s]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (s != c) {
            var w = l[p];
            void 0 === (v = f ? f(w, p, l) : void 0) && (v = a(w) ? w : i(t[s + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
        }
        return e
      }
    },
    56792(e, t, n) {
      var r = n(41856),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    55276(e, t, n) {
      var r = n(43599),
        o = n(34856),
        i = n(27872);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    },
    41856(e) {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    74143(e, t, n) {
      var r = n(5559);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    54389(e, t, n) {
      var r = n(36373),
        o = n(42308),
        i = n(73894),
        a = Math.max,
        d = Math.min;
      e.exports = function(e, t, n) {
        var f, s, u, c, l, p, v = 0,
          w = !1,
          g = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var n = f,
            r = s;
          return f = s = void 0, v = t, c = e.apply(r, n)
        }

        function h(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - v >= u
        }

        function m() {
          var e = o();
          if (h(e)) return x(e);
          l = setTimeout(m, function(e) {
            var n = t - (e - p);
            return g ? d(n, u - (e - v)) : n
          }(e))
        }

        function x(e) {
          return l = void 0, b && f ? y(e) : (f = s = void 0, c)
        }

        function _() {
          var e = o(),
            n = h(e);
          if (f = arguments, s = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(m, t), w ? y(e) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(m, t), y(p)
          }
          return void 0 === l && (l = setTimeout(m, t)), c
        }
        return t = i(t) || 0, r(n) && (w = !!n.leading, u = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : u, b = "trailing" in n ? !!n.trailing : b), _.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, f = p = s = l = void 0
        }, _.flush = function() {
          return void 0 === l ? c : x(o())
        }, _
      }
    },
    73892(e, t, n) {
      var r = n(69526);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    42308(e, t, n) {
      var r = n(84373);
      e.exports = function() {
        return r.Date.now()
      }
    },
    68309(e, t, n) {
      var r = n(55276)();
      e.exports = r
    },
    88584(e, t, n) {
      var r = n(62314);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    27872(e, t, n) {
      var r = n(73894),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, t, n) {
      var r = n(56792),
        o = n(36373),
        i = n(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        d = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = d.test(e);
        return n || f.test(e) ? s(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    83503(e, t, n) {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    35959(e, t, n) {
      "use strict";
      n.d(t, {
        X3: () => r.X,
        fi: () => i,
        IO: () => f,
        VW: () => l,
        v6: () => a.v,
        cJ: () => c
      });
      var r = n(83503);
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
      var a = n(72965);
      const d = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      n(68309);
      var s, u = n(15963);

      function c(e, ...t) {
        return u(e, ...t)
      }
      n(54028), n(74143), n(88584), n(73892), n(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag;
      const l = (...e) => e.filter(e => e).join(" ")
    },
    72965(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => d
      });
      var r = n(81270);
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

      function d(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              d = o[e];
            "function" == typeof n && "function" == typeof d && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, d) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof d ? "id" === e && n && d ? t.id = i(n, d) : t[e] = void 0 !== d ? d : n : t[e] = (0, r.clsx)(n, d)
          }
        }
        return t
      }
    }
  }
]);