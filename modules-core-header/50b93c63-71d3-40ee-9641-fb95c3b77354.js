try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "50b93c63-71d3-40ee-9641-fb95c3b77354", t._sentryDebugIdIdentifier = "sentry-dbid-50b93c63-71d3-40ee-9641-fb95c3b77354")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5959, 8340], {
    3322: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => s
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

      function s(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              s = o[t];
            "function" == typeof n && "function" == typeof s && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, s) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof s ? "id" === t && n && s ? e.id = i(n, s) : e[t] = void 0 !== s ? s : n : e[t] = (0, r.clsx)(n, s)
          }
        }
        return e
      }
    },
    9738: (t, e, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        s = Math.min;
      t.exports = function(t, e, n) {
        var u, f, d, c, l, p, v = 0,
          h = !1,
          g = !1,
          w = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function m(e) {
          var n = u,
            r = f;
          return u = f = void 0, v = e, c = t.apply(r, n)
        }

        function b(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - v >= d
        }

        function _() {
          var t = o();
          if (b(t)) return y(t);
          l = setTimeout(_, function(t) {
            var n = e - (t - p);
            return g ? s(n, d - (t - v)) : n
          }(t))
        }

        function y(t) {
          return l = void 0, w && u ? m(t) : (u = f = void 0, c)
        }

        function x() {
          var t = o(),
            n = b(t);
          if (u = arguments, f = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(_, e), h ? m(t) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(_, e), m(p)
          }
          return void 0 === l && (l = setTimeout(_, e)), c
        }
        return e = i(e) || 0, r(n) && (h = !!n.leading, d = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : d, w = "trailing" in n ? !!n.trailing : w), x.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = f = l = void 0
        }, x.flush = function() {
          return void 0 === l ? c : y(o())
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
    22909: (t, e, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
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
        var n = s.test(t);
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
    37792: (t, e, n) => {
      "use strict";
      n.d(e, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    58340: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => T,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => b,
        cubicBezier: () => D,
        debounce: () => k,
        filterEventProps: () => f,
        get: () => E,
        getOrSet: () => c,
        joinStrings: () => L,
        merge: () => w,
        mergeProps: () => a.v,
        omit: () => h,
        range: () => p,
        set: () => y,
        throttle: () => M
      });
      var r = n(37792);
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
      var a = n(3322);
      const s = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function f(t, {
        onPress: e
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (u.test(o) ? e ? n[o] = t[o] : r[o] = t[o] : s.test(o) ? n[o] = t[o] : r[o] = t[o]);
        return {
          events: n,
          others: r
        }
      }
      const d = "__FOUNDRY_ACCENT__",
        c = (t, e) => r.X ? e() : (window[d] || (window[d] = new Map), window[d].has(t) || window[d].set(t, e()), window[d].get(t));
      var l = n(98312);

      function p(t) {
        return l(t)
      }
      var v = n(41972);

      function h(t, ...e) {
        return v(t, ...e)
      }
      var g = n(56265);

      function w(t, e) {
        return g(t, e)
      }
      var m = n(31454);

      function b(t) {
        return m(t)
      }
      var _ = n(10533);

      function y(t, e, n, r) {
        return _(t, e, n, r)
      }
      var x = n(10613);

      function E(t, e) {
        return x(t, e)
      }
      var k = n(9738);
      const M = (t, e) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= e && (n = o, t(...r))
        }
      };
      var T;
      ! function(t) {
        t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
      }(T || (T = {}));
      class j {
        _promise;
        _resolve;
        _reject;
        _state = null;
        [Symbol.toStringTag] = "ExternalPromise";
        get State() {
          return this._state
        }
        constructor(t) {
          this._promise = new Promise((e, n) => {
            this._resolve = t => {
              this._state = T.Fulfilled, e(t)
            }, this._reject = t => {
              this._state = T.Rejected, n(t)
            }, this._state = T.Pending, t?.(this._resolve, this._reject)
          })
        }
        then(t, e) {
          return this._promise?.then(t, e)
        } catch (t) {
          return this._promise?.catch(t)
        } finally(t) {
          return this._promise?.finally(t)
        }
        resolve(t) {
          this._resolve?.(t)
        }
        reject(t) {
          this.reject?.(t)
        }
      }

      function P(t) {
        return t
      }
      const {
        cbrt: N,
        sqrt: S,
        PI: A
      } = Math, $ = (t, e, n, r, o) => {
        const i = e + n * t,
          a = i ** 2 + r;
        if (a > 0) {
          const t = S(a);
          return N(i + t) + N(i - t) - o
        }
        const s = N(S(i * i - a)),
          u = i ? Math.atan(S(-a) / i) : -A / 2;
        let f;
        return f = n < 0 ? (i > 0 ? 2 * A : A) - u : o < 0 ? (i > 0 ? 2 * A : -3 * A) + u : (i > 0 ? 0 : A) + u, 2 * s * Math.cos(f / 3) - o
      }, I = (t, e, n, r) => ((e * t + 3 * n) * t + r) * t;

      function D(t, e, n, r) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (t === e && n === r) return P;
        const o = 6 * (3 * t - 3 * n + 1),
          i = 6 * (n - 2 * t),
          a = 3 * t,
          s = o * o,
          u = i * i,
          f = i / o,
          d = 3 * i * a / s - u * i / (s * o),
          c = 2 * a / o - u / s,
          l = c * c * c,
          p = 3 / o,
          v = 3 * e - 3 * r + 1,
          h = r - 2 * e,
          g = 3 * e,
          w = o ? $ : P;
        return t => 0 === t || 1 === t ? t : I(w(t, d, p, l, f), v, h, g)
      }
      const L = (...t) => t.filter(t => t).join(" ")
    },
    75888: t => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, s = n(e((r - t) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = t, t += o;
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
        s = n(81966);
      t.exports = function(t, e, n, u) {
        if (!a(t)) return t;
        for (var f = -1, d = (e = o(e, t)).length, c = d - 1, l = t; null != l && ++f < d;) {
          var p = s(e[f]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (f != c) {
            var h = l[p];
            void 0 === (v = u ? u(h, p, l) : void 0) && (v = a(h) ? h : i(e[f + 1]) ? [] : {})
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