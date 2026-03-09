try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a95e958-5179-4a60-8261-8feef8b3080c", e._sentryDebugIdIdentifier = "sentry-dbid-5a95e958-5179-4a60-8261-8feef8b3080c")
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
  [1617], {
    35613: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(4572);
      const o = new Map;

      function s(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function i(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = s(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    },
    91617: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => P,
        IS_SERVER: () => r.X,
        PromiseState: () => M,
        adjustBreakpoint: () => o,
        breakpoints: () => s,
        clone: () => b,
        cubicBezier: () => R,
        debounce: () => E,
        filterEventProps: () => c,
        get: () => k,
        getOrSet: () => l,
        joinStrings: () => C,
        merge: () => _,
        mergeProps: () => i.v,
        omit: () => w,
        range: () => p,
        set: () => v,
        throttle: () => j
      });
      var r = n(95191);
      const o = e => e - .02,
        s = {
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
      var i = n(35613);
      const a = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function c(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (d.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : a.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const f = "__FOUNDRY_ACCENT__",
        l = (e, t) => r.X ? t() : (window[f] || (window[f] = new Map), window[f].has(e) || window[f].set(e, t()), window[f].get(e));
      var u = n(98312);

      function p(e) {
        return u(e)
      }
      var h = n(41972);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var g = n(56265);

      function _(e, t) {
        return g(e, t)
      }
      var m = n(31454);

      function b(e) {
        return m(e)
      }
      var y = n(10533);

      function v(e, t, n, r) {
        return y(e, t, n, r)
      }
      var x = n(10613);

      function k(e, t) {
        return x(e, t)
      }
      var E = n(9738);
      const j = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var M;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(M || (M = {}));
      class P {
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
              this._state = M.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = M.Rejected, n(e)
            }, this._state = M.Pending, e?.(this._resolve, this._reject)
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

      function S(e) {
        return e
      }
      const {
        cbrt: T,
        sqrt: A,
        PI: I
      } = Math, L = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = A(i);
          return T(s + e) + T(s - e) - o
        }
        const a = T(A(s * s - i)),
          d = s ? Math.atan(A(-i) / s) : -I / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * I : I) - d : o < 0 ? (s > 0 ? 2 * I : -3 * I) + d : (s > 0 ? 0 : I) + d, 2 * a * Math.cos(c / 3) - o
      }, N = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function R(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          d = s * s,
          c = s / o,
          f = 3 * s * i / a - d * s / (a * o),
          l = 2 * i / o - d / a,
          u = l * l * l,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          g = 3 * t,
          _ = o ? L : S;
        return e => 0 === e || 1 === e ? e : N(_(e, f, p, u, c), h, w, g)
      }
      const C = (...e) => e.filter(e => e).join(" ")
    },
    95191: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    }
  }
]);