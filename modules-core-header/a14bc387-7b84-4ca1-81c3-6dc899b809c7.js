try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a14bc387-7b84-4ca1-81c3-6dc899b809c7", e._sentryDebugIdIdentifier = "sentry-dbid-a14bc387-7b84-4ca1-81c3-6dc899b809c7")
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
  [6162], {
    6521: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    43607: (e, t, n) => {
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
    56162: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => P,
        IS_SERVER: () => r.X,
        PromiseState: () => M,
        breakpoints: () => o,
        clone: () => p,
        cubicBezier: () => N,
        debounce: () => v,
        filterEventProps: () => i.b,
        get: () => m,
        getOrSet: () => c,
        joinStrings: () => R,
        merge: () => g,
        mergeProps: () => s.v,
        omit: () => u,
        range: () => f,
        set: () => b,
        throttle: () => E
      });
      var r = n(6521);
      const o = {
        mobile: "(min-width: 0px) and (max-width: 767px)",
        tabletAndLarger: "(min-width: 768px)"
      };
      var s = n(43607),
        i = n(80070);
      const a = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, t()), window[a].get(e));
      var d = n(98312);

      function f(e) {
        return d(e)
      }
      var l = n(41972);

      function u(e, ...t) {
        return l(e, ...t)
      }
      var h = n(56265);

      function g(e, t) {
        return h(e, t)
      }
      var _ = n(31454);

      function p(e) {
        return _(e)
      }
      var w = n(10533);

      function b(e, t, n, r) {
        return w(e, t, n, r)
      }
      var y = n(10613);

      function m(e, t) {
        return y(e, t)
      }
      var v = n(9738);
      const E = (e, t) => {
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

      function j(e) {
        return e
      }
      const {
        cbrt: k,
        sqrt: S,
        PI: T
      } = Math, x = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = S(i);
          return k(s + e) + k(s - e) - o
        }
        const a = k(S(s * s - i)),
          c = s ? Math.atan(S(-i) / s) : -T / 2;
        let d;
        return d = n < 0 ? (s > 0 ? 2 * T : T) - c : o < 0 ? (s > 0 ? 2 * T : -3 * T) + c : (s > 0 ? 0 : T) + c, 2 * a * Math.cos(d / 3) - o
      }, I = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function N(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return j;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          c = s * s,
          d = s / o,
          f = 3 * s * i / a - c * s / (a * o),
          l = 2 * i / o - c / a,
          u = l * l * l,
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          _ = r - 2 * t,
          p = 3 * t,
          w = o ? x : j;
        return e => 0 === e || 1 === e ? e : I(w(e, f, h, u, d), g, _, p)
      }
      const R = (...e) => e.filter(e => e).join(" ")
    },
    80070: (e, t, n) => {
      n.d(t, {
        b: () => s
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function s(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          s = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? t ? n[i] = e[i] : s[i] = e[i] : r.test(i) ? n[i] = e[i] : s[i] = e[i]);
        return {
          events: n,
          others: s
        }
      }
    }
  }
]);