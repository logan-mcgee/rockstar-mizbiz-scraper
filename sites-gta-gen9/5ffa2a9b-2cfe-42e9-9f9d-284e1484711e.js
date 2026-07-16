try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5ffa2a9b-2cfe-42e9-9f9d-284e1484711e", e._sentryDebugIdIdentifier = "sentry-dbid-5ffa2a9b-2cfe-42e9-9f9d-284e1484711e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3267], {
    31602(e, t, n) {
      const r = "undefined" == typeof window;
      n.d(t, ["X", 0, r])
    },
    33267(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => o,
        breakpoints: () => s,
        clone: () => _,
        cubicBezier: () => I,
        debounce: () => x,
        filterEventProps: () => i.b,
        get: () => v,
        getOrSet: () => c,
        joinStrings: () => L,
        merge: () => g,
        mergeProps: () => a.v,
        omit: () => p,
        range: () => l,
        set: () => m,
        throttle: () => k
      });
      var r = n(31602);
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
      var a = n(47460),
        i = n(74571);
      const d = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var f = n(68309);

      function l(e) {
        return f(e)
      }
      var u = n(15963);

      function p(e, ...t) {
        return u(e, ...t)
      }
      var h = n(54028);

      function g(e, ...t) {
        return h(e, ...t)
      }
      var w = n(74143);

      function _(e) {
        return w(e)
      }
      var b = n(88584);

      function m(e, t, n, r) {
        return b(e, t, n, r)
      }
      var y = n(73892);

      function v(e, t) {
        return y(e, t)
      }
      var x = n(54389);
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
          a = s ** 2 + r;
        if (a > 0) {
          const e = S(a);
          return P(s + e) + P(s - e) - o
        }
        const i = P(S(s * s - a)),
          d = s ? Math.atan(S(-a) / s) : -T / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * T : T) - d : o < 0 ? (s > 0 ? 2 * T : -3 * T) + d : (s > 0 ? 0 : T) + d, 2 * i * Math.cos(c / 3) - o
      };

      function I(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          a = 3 * e,
          i = o * o,
          d = s * s,
          c = s / o,
          f = 3 * s * a / i - d * s / (i * o),
          l = 2 * a / o - d / i,
          u = l * l * l,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          g = r - 2 * t,
          w = 3 * t,
          _ = o ? A : M;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(_(e, f, p, u, c), h, g, w)
      }
      const L = (...e) => e.filter(e => e).join(" ")
    },
    74571(e, t, n) {
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
    47460(e, t, n) {
      n.d(t, {
        v: () => i
      });
      var r = n(81270);
      const o = new Map;

      function s(e, t) {
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
    }
  }
]);