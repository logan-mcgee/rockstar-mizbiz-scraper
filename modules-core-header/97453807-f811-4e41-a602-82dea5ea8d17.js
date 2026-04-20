try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "97453807-f811-4e41-a602-82dea5ea8d17", e._sentryDebugIdIdentifier = "sentry-dbid-97453807-f811-4e41-a602-82dea5ea8d17")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4104], {
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        s = Math.min;
      e.exports = function(e, t, n) {
        var u, f, d, c, l, p, h = 0,
          v = !1,
          g = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var n = u,
            r = f;
          return u = f = void 0, h = t, c = e.apply(r, n)
        }

        function _(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - h >= d
        }

        function y() {
          var e = o();
          if (_(e)) return b(e);
          l = setTimeout(y, function(e) {
            var n = t - (e - p);
            return g ? s(n, d - (e - h)) : n
          }(e))
        }

        function b(e) {
          return l = void 0, w && u ? m(e) : (u = f = void 0, c)
        }

        function x() {
          var e = o(),
            n = _(e);
          if (u = arguments, f = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return h = e, l = setTimeout(y, t), v ? m(e) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(y, t), m(p)
          }
          return void 0 === l && (l = setTimeout(y, t)), c
        }
        return t = i(t) || 0, r(n) && (v = !!n.leading, d = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : d, w = "trailing" in n ? !!n.trailing : w), x.cancel = function() {
          void 0 !== l && clearTimeout(l), h = 0, u = p = f = l = void 0
        }, x.flush = function() {
          return void 0 === l ? c : b(o())
        }, x
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
    14104: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ExternalPromise: () => A,
        IS_SERVER: () => r,
        PromiseState: () => S,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => E,
        cubicBezier: () => C,
        debounce: () => P,
        filterEventProps: () => p,
        get: () => j,
        getOrSet: () => v,
        joinStrings: () => F,
        merge: () => b,
        mergeProps: () => d,
        omit: () => _,
        range: () => w,
        set: () => M,
        throttle: () => N
      });
      const r = "undefined" == typeof window,
        o = e => e - .02,
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
      var a = n(1556);
      const s = new Map;

      function u(e, t) {
        if (e === t) return e;
        const n = s.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = s.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function f(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function d(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = f(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = u(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, a.clsx)(n, o)
          }
        }
        return t
      }
      const c = /^(on.*)$/,
        l = /^(onPress.*)$/;

      function p(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (l.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : c.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const h = "__FOUNDRY_ACCENT__",
        v = (e, t) => r ? t() : (window[h] || (window[h] = new Map), window[h].has(e) || window[h].set(e, t()), window[h].get(e));
      var g = n(98312);

      function w(e) {
        return g(e)
      }
      var m = n(41972);

      function _(e, ...t) {
        return m(e, ...t)
      }
      var y = n(56265);

      function b(e, t) {
        return y(e, t)
      }
      var x = n(31454);

      function E(e) {
        return x(e)
      }
      var k = n(10533);

      function M(e, t, n, r) {
        return k(e, t, n, r)
      }
      var T = n(10613);

      function j(e, t) {
        return T(e, t)
      }
      var P = n(9738);
      const N = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var S;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(S || (S = {}));
      class A {
        _promise;
        _resolve;
        _reject;
        _state = null;
        [Symbol.toStringTag] = "ExternalPromise";
        get State() {
          return this._state
        }
        constructor(e) {
          this._promise = new Promise((t, n) => {
            this._resolve = e => {
              this._state = S.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = S.Rejected, n(e)
            }, this._state = S.Pending, e?.(this._resolve, this._reject)
          })
        }
        then(e, t) {
          return this._promise?.then(e, t)
        } catch (e) {
          return this._promise?.catch(e)
        } finally(e) {
          return this._promise?.finally(e)
        }
        resolve(e) {
          this._resolve?.(e)
        }
        reject(e) {
          this.reject?.(e)
        }
      }

      function $(e) {
        return e
      }
      const {
        cbrt: I,
        sqrt: D,
        PI: L
      } = Math, O = (e, t, n, r, o) => {
        const i = t + n * e,
          a = i ** 2 + r;
        if (a > 0) {
          const e = D(a);
          return I(i + e) + I(i - e) - o
        }
        const s = I(D(i * i - a)),
          u = i ? Math.atan(D(-a) / i) : -L / 2;
        let f;
        return f = n < 0 ? (i > 0 ? 2 * L : L) - u : o < 0 ? (i > 0 ? 2 * L : -3 * L) + u : (i > 0 ? 0 : L) + u, 2 * s * Math.cos(f / 3) - o
      }, R = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function C(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return $;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          a = 3 * e,
          s = o * o,
          u = i * i,
          f = i / o,
          d = 3 * i * a / s - u * i / (s * o),
          c = 2 * a / o - u / s,
          l = c * c * c,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          v = r - 2 * t,
          g = 3 * t,
          w = o ? O : $;
        return e => 0 === e || 1 === e ? e : R(w(e, d, p, l, f), h, v, g)
      }
      const F = (...e) => e.filter(e => e).join(" ")
    },
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        f = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = s.test(e);
        return n || u.test(e) ? f(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
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
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, s = n(t((r - e) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = e, e += o;
        return u
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
        s = n(81966);
      e.exports = function(e, t, n, u) {
        if (!a(e)) return e;
        for (var f = -1, d = (t = o(t, e)).length, c = d - 1, l = e; null != l && ++f < d;) {
          var p = s(t[f]),
            h = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (f != c) {
            var v = l[p];
            void 0 === (h = u ? u(v, p, l) : void 0) && (h = a(v) ? v : i(t[f + 1]) ? [] : {})
          }
          r(l, p, h), l = l[p]
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