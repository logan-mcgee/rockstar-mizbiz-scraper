try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fab13277-fd6b-42d3-a630-1eaafe3aafb2", e._sentryDebugIdIdentifier = "sentry-dbid-fab13277-fd6b-42d3-a630-1eaafe3aafb2")
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
  [2433, 4814], {
    8956: (e, t, n) => {
      n.d(t, {
        v: () => i
      });
      var r = n(4572);
      const o = new Map;

      function s(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = o.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function i(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              i = o[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = s(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, r.clsx)(n, i)
          }
        }
        return t
      }
    },
    24814: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => k,
        IS_SERVER: () => r.X,
        PromiseState: () => j,
        breakpoints: () => o,
        clone: () => b,
        cubicBezier: () => A,
        debounce: () => M,
        filterEventProps: () => c,
        get: () => E,
        getOrSet: () => f,
        joinStrings: () => C,
        merge: () => p,
        mergeProps: () => s.v,
        omit: () => g,
        range: () => u,
        set: () => m,
        throttle: () => P
      });
      var r = n(90394);
      const o = {
        mobile: "(min-width: 0px) and (max-width: 767px)",
        tabletAndLarger: "(min-width: 768px)"
      };
      var s = n(8956);
      const a = /^(on.*)$/,
        i = /^(onPress.*)$/;

      function c(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (i.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : a.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const d = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var l = n(98312);

      function u(e) {
        return l(e)
      }
      var h = n(41972);

      function g(e, ...t) {
        return h(e, ...t)
      }
      var _ = n(56265);

      function p(e, t) {
        return _(e, t)
      }
      var w = n(31454);

      function b(e) {
        return w(e)
      }
      var y = n(10533);

      function m(e, t, n, r) {
        return y(e, t, n, r)
      }
      var v = n(10613);

      function E(e, t) {
        return v(e, t)
      }
      var M = n(9738);
      const P = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var j;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(j || (j = {}));
      class k {
        _promise;
        _resolve;
        _reject;
        _state = null;
        [Symbol.toStringTag] = "ExternalPromise";
        get State() {
          return this._state
        }
        constructor(e) {
          this._promise = new Promise(((t, n) => {
            this._resolve = e => {
              this._state = j.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = j.Rejected, n(e)
            }, this._state = j.Pending, e?.(this._resolve, this._reject)
          }))
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
        sqrt: x,
        PI: I
      } = Math, N = (e, t, n, r, o) => {
        const s = t + n * e,
          a = s ** 2 + r;
        if (a > 0) {
          const e = x(a);
          return T(s + e) + T(s - e) - o
        }
        const i = T(x(s * s - a)),
          c = s ? Math.atan(x(-a) / s) : -I / 2;
        let d;
        return d = n < 0 ? (s > 0 ? 2 * I : I) - c : o < 0 ? (s > 0 ? 2 * I : -3 * I) + c : (s > 0 ? 0 : I) + c, 2 * i * Math.cos(d / 3) - o
      }, R = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function A(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          a = 3 * e,
          i = o * o,
          c = s * s,
          d = s / o,
          f = 3 * s * a / i - c * s / (i * o),
          l = 2 * a / o - c / i,
          u = l * l * l,
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          _ = r - 2 * t,
          p = 3 * t,
          w = o ? N : S;
        return e => 0 === e || 1 === e ? e : R(w(e, f, h, u, d), g, _, p)
      }
      const C = (...e) => e.filter((e => e)).join(" ")
    },
    90394: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    }
  }
]);