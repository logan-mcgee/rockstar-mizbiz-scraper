try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "660fdb21-58b2-4c46-b6de-632a87483621", e._sentryDebugIdIdentifier = "sentry-dbid-660fdb21-58b2-4c46-b6de-632a87483621")
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
  [9162], {
    9738: (e, t, r) => {
      var n = r(56130),
        o = r(28593),
        i = r(22909),
        a = Math.max,
        s = Math.min;
      e.exports = function(e, t, r) {
        var u, d, f, c, l, p, v = 0,
          h = !1,
          w = !1,
          m = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function g(t) {
          var r = u,
            n = d;
          return u = d = void 0, v = t, c = e.apply(n, r)
        }

        function b(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || w && e - v >= f
        }

        function _() {
          var e = o();
          if (b(e)) return x(e);
          l = setTimeout(_, function(e) {
            var r = t - (e - p);
            return w ? s(r, f - (e - v)) : r
          }(e))
        }

        function x(e) {
          return l = void 0, m && u ? g(e) : (u = d = void 0, c)
        }

        function y() {
          var e = o(),
            r = b(e);
          if (u = arguments, d = this, p = e, r) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(_, t), h ? g(e) : c
            }(p);
            if (w) return clearTimeout(l), l = setTimeout(_, t), g(p)
          }
          return void 0 === l && (l = setTimeout(_, t)), c
        }
        return t = i(t) || 0, n(r) && (h = !!r.leading, f = (w = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : f, m = "trailing" in r ? !!r.trailing : m), y.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = d = l = void 0
        }, y.flush = function() {
          return void 0 === l ? c : x(o())
        }, y
      }
    },
    10533: (e, t, r) => {
      var n = r(86601);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    10613: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
      }
    },
    22909: (e, t, r) => {
      var n = r(87625),
        o = r(56130),
        i = r(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = s.test(e);
        return r || u.test(e) ? d(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    26781: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => n.X,
        PromiseState: () => T,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => b,
        cubicBezier: () => D,
        debounce: () => E,
        filterEventProps: () => d,
        get: () => k,
        getOrSet: () => c,
        joinStrings: () => L,
        merge: () => m,
        mergeProps: () => a.v,
        omit: () => h,
        range: () => p,
        set: () => x,
        throttle: () => M
      });
      var n = r(60211);
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
      var a = r(51105);
      const s = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (u.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : s.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      const f = "__FOUNDRY_ACCENT__",
        c = (e, t) => n.X ? t() : (window[f] || (window[f] = new Map), window[f].has(e) || window[f].set(e, t()), window[f].get(e));
      var l = r(98312);

      function p(e) {
        return l(e)
      }
      var v = r(41972);

      function h(e, ...t) {
        return v(e, ...t)
      }
      var w = r(56265);

      function m(e, t) {
        return w(e, t)
      }
      var g = r(31454);

      function b(e) {
        return g(e)
      }
      var _ = r(10533);

      function x(e, t, r, n) {
        return _(e, t, r, n)
      }
      var y = r(10613);

      function k(e, t) {
        return y(e, t)
      }
      var E = r(9738);
      const M = (e, t) => {
        let r = 0;
        return (...n) => {
          const o = Date.now();
          o - r >= t && (r = o, e(...n))
        }
      };
      var T;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
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
        constructor(e) {
          this._promise = new Promise((t, r) => {
            this._resolve = e => {
              this._state = T.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = T.Rejected, r(e)
            }, this._state = T.Pending, e?.(this._resolve, this._reject)
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

      function P(e) {
        return e
      }
      const {
        cbrt: S,
        sqrt: $,
        PI: I
      } = Math, N = (e, t, r, n, o) => {
        const i = t + r * e,
          a = i ** 2 + n;
        if (a > 0) {
          const e = $(a);
          return S(i + e) + S(i - e) - o
        }
        const s = S($(i * i - a)),
          u = i ? Math.atan($(-a) / i) : -I / 2;
        let d;
        return d = r < 0 ? (i > 0 ? 2 * I : I) - u : o < 0 ? (i > 0 ? 2 * I : -3 * I) + u : (i > 0 ? 0 : I) + u, 2 * s * Math.cos(d / 3) - o
      }, A = (e, t, r, n) => ((t * e + 3 * r) * e + n) * e;

      function D(e, t, r, n) {
        if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && r === n) return P;
        const o = 6 * (3 * e - 3 * r + 1),
          i = 6 * (r - 2 * e),
          a = 3 * e,
          s = o * o,
          u = i * i,
          d = i / o,
          f = 3 * i * a / s - u * i / (s * o),
          c = 2 * a / o - u / s,
          l = c * c * c,
          p = 3 / o,
          v = 3 * t - 3 * n + 1,
          h = n - 2 * t,
          w = 3 * t,
          m = o ? N : P;
        return e => 0 === e || 1 === e ? e : A(m(e, f, p, l, d), v, h, w)
      }
      const L = (...e) => e.filter(e => e).join(" ")
    },
    28593: (e, t, r) => {
      var n = r(15036);
      e.exports = function() {
        return n.Date.now()
      }
    },
    31454: (e, t, r) => {
      var n = r(49192);
      e.exports = function(e) {
        return n(e, 5)
      }
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, i) {
        for (var a = -1, s = r(t((n - e) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = e, e += o;
        return u
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var n = r(56312),
        o = r(78328),
        i = r(21574),
        a = r(56130),
        s = r(81966);
      e.exports = function(e, t, r, u) {
        if (!a(e)) return e;
        for (var d = -1, f = (t = o(t, e)).length, c = f - 1, l = e; null != l && ++d < f;) {
          var p = s(t[d]),
            v = r;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (d != c) {
            var h = l[p];
            void 0 === (v = u ? u(h, p, l) : void 0) && (v = a(h) ? h : i(t[d + 1]) ? [] : {})
          }
          n(l, p, v), l = l[p]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var n = r(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, r) => {
      var n = r(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    98312: (e, t, r) => {
      var n = r(99335)();
      e.exports = n
    },
    99335: (e, t, r) => {
      var n = r(75888),
        o = r(4661),
        i = r(95187);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
        }
      }
    }
  }
]);