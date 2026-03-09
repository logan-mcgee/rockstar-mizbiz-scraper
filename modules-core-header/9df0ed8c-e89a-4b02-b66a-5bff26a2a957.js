try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9df0ed8c-e89a-4b02-b66a-5bff26a2a957", e._sentryDebugIdIdentifier = "sentry-dbid-9df0ed8c-e89a-4b02-b66a-5bff26a2a957")
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
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? t ? n[i] = e[i] : s[i] = e[i] : r.test(i) ? n[i] = e[i] : s[i] = e[i]);
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
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => o,
        breakpoints: () => s,
        clone: () => b,
        cubicBezier: () => L,
        debounce: () => x,
        filterEventProps: () => a.b,
        get: () => v,
        getOrSet: () => c,
        joinStrings: () => N,
        merge: () => w,
        mergeProps: () => i.v,
        omit: () => p,
        range: () => l,
        set: () => m,
        throttle: () => k
      });
      var r = n(55311);
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
      var i = n(35205),
        a = n(52360);
      const d = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var f = n(98312);

      function l(e) {
        return f(e)
      }
      var u = n(41972);

      function p(e, ...t) {
        return u(e, ...t)
      }
      var h = n(56265);

      function w(e, t) {
        return h(e, t)
      }
      var g = n(31454);

      function b(e) {
        return g(e)
      }
      var _ = n(10533);

      function m(e, t, n, r) {
        return _(e, t, n, r)
      }
      var y = n(10613);

      function v(e, t) {
        return y(e, t)
      }
      var x = n(9738);
      const k = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var E;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(E || (E = {}));
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
          this._promise = new Promise((t, n) => {
            this._resolve = e => {
              this._state = E.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = E.Rejected, n(e)
            }, this._state = E.Pending, e?.(this._resolve, this._reject)
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

      function M(e) {
        return e
      }
      const {
        cbrt: P,
        sqrt: S,
        PI: T
      } = Math, A = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = S(i);
          return P(s + e) + P(s - e) - o
        }
        const a = P(S(s * s - i)),
          d = s ? Math.atan(S(-i) / s) : -T / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * T : T) - d : o < 0 ? (s > 0 ? 2 * T : -3 * T) + d : (s > 0 ? 0 : T) + d, 2 * a * Math.cos(c / 3) - o
      }, I = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function L(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
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
          b = o ? A : M;
        return e => 0 === e || 1 === e ? e : I(b(e, f, p, u, c), h, w, g)
      }
      const N = (...e) => e.filter(e => e).join(" ")
    }
  }
]);