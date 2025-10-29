try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28523df2-e407-4760-aaa6-e0b5d6921015", e._sentryDebugIdIdentifier = "sentry-dbid-28523df2-e407-4760-aaa6-e0b5d6921015")
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
  [6781, 9162], {
    26781: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => k,
        IS_SERVER: () => r.X,
        PromiseState: () => j,
        breakpoints: () => o,
        clone: () => b,
        cubicBezier: () => A,
        debounce: () => M,
        filterEventProps: () => d,
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
      var r = n(60211);
      const o = {
        mobile: "(min-width: 0px) and (max-width: 767px)",
        tabletAndLarger: "(min-width: 768px)"
      };
      var s = n(51105);
      const i = /^(on.*)$/,
        a = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (a.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : i.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const c = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[c] || (window[c] = new Map), window[c].has(e) || window[c].set(e, t()), window[c].get(e));
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
          i = s ** 2 + r;
        if (i > 0) {
          const e = x(i);
          return T(s + e) + T(s - e) - o
        }
        const a = T(x(s * s - i)),
          d = s ? Math.atan(x(-i) / s) : -I / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * I : I) - d : o < 0 ? (s > 0 ? 2 * I : -3 * I) + d : (s > 0 ? 0 : I) + d, 2 * a * Math.cos(c / 3) - o
      }, R = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function A(e, t, n, r) {
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
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          _ = r - 2 * t,
          p = 3 * t,
          w = o ? N : S;
        return e => 0 === e || 1 === e ? e : R(w(e, f, h, u, c), g, _, p)
      }
      const C = (...e) => e.filter((e => e)).join(" ")
    },
    51105: (e, t, n) => {
      n.d(t, {
        v: () => a
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
    60211: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    }
  }
]);