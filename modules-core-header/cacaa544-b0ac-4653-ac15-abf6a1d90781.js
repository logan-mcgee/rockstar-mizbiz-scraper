try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cacaa544-b0ac-4653-ac15-abf6a1d90781", e._sentryDebugIdIdentifier = "sentry-dbid-cacaa544-b0ac-4653-ac15-abf6a1d90781")
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
  [5964], {
    35205: (e, t, n) => {
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
    52360: (e, t, n) => {
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
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.test(a) ? t ? n[a] = e[a] : s[a] = e[a] : r.test(a) ? n[a] = e[a] : s[a] = e[a]);
        return {
          events: n,
          others: s
        }
      }
    },
    55311: (e, t, n) => {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    95964: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => P,
        IS_SERVER: () => r.X,
        PromiseState: () => M,
        breakpoints: () => o,
        clone: () => p,
        cubicBezier: () => N,
        debounce: () => v,
        filterEventProps: () => a.b,
        get: () => m,
        getOrSet: () => c,
        joinStrings: () => R,
        merge: () => g,
        mergeProps: () => s.v,
        omit: () => u,
        range: () => f,
        set: () => w,
        throttle: () => E
      });
      var r = n(55311);
      const o = {
        mobile: "(min-width: 0px) and (max-width: 767px)",
        tabletAndLarger: "(min-width: 768px)"
      };
      var s = n(35205),
        a = n(52360);
      const i = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[i] || (window[i] = new Map), window[i].has(e) || window[i].set(e, t()), window[i].get(e));
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
      var b = n(10533);

      function w(e, t, n, r) {
        return b(e, t, n, r)
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
          this._promise = new Promise(((t, n) => {
            this._resolve = e => {
              this._state = M.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = M.Rejected, n(e)
            }, this._state = M.Pending, e?.(this._resolve, this._reject)
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

      function j(e) {
        return e
      }
      const {
        cbrt: k,
        sqrt: S,
        PI: T
      } = Math, x = (e, t, n, r, o) => {
        const s = t + n * e,
          a = s ** 2 + r;
        if (a > 0) {
          const e = S(a);
          return k(s + e) + k(s - e) - o
        }
        const i = k(S(s * s - a)),
          c = s ? Math.atan(S(-a) / s) : -T / 2;
        let d;
        return d = n < 0 ? (s > 0 ? 2 * T : T) - c : o < 0 ? (s > 0 ? 2 * T : -3 * T) + c : (s > 0 ? 0 : T) + c, 2 * i * Math.cos(d / 3) - o
      }, I = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function N(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return j;
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
          b = o ? x : j;
        return e => 0 === e || 1 === e ? e : I(b(e, f, h, u, d), g, _, p)
      }
      const R = (...e) => e.filter((e => e)).join(" ")
    }
  }
]);