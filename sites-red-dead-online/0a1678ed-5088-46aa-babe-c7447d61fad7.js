try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0a1678ed-5088-46aa-babe-c7447d61fad7", e._sentryDebugIdIdentifier = "sentry-dbid-0a1678ed-5088-46aa-babe-c7447d61fad7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2158], {
    87213(e, t, n) {
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    72158(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => o,
        breakpoints: () => a,
        clone: () => g,
        cubicBezier: () => I,
        debounce: () => x,
        filterEventProps: () => s.b,
        get: () => v,
        getOrSet: () => f,
        joinStrings: () => L,
        merge: () => w,
        mergeProps: () => i.v,
        omit: () => p,
        range: () => l,
        set: () => m,
        throttle: () => k
      });
      var r = n(87213);
      const o = e => e - .02,
        a = {
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
      var i = n(71107),
        s = n(24442);
      const d = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var c = n(68309);

      function l(e) {
        return c(e)
      }
      var u = n(15963);

      function p(e, ...t) {
        return u(e, ...t)
      }
      var h = n(54028);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var b = n(74143);

      function g(e) {
        return b(e)
      }
      var _ = n(88584);

      function m(e, t, n, r) {
        return _(e, t, n, r)
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
        const a = t + n * e,
          i = a ** 2 + r;
        if (i > 0) {
          const e = S(i);
          return P(a + e) + P(a - e) - o
        }
        const s = P(S(a * a - i)),
          d = a ? Math.atan(S(-i) / a) : -T / 2;
        let f;
        return f = n < 0 ? (a > 0 ? 2 * T : T) - d : o < 0 ? (a > 0 ? 2 * T : -3 * T) + d : (a > 0 ? 0 : T) + d, 2 * s * Math.cos(f / 3) - o
      };

      function I(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
        const o = 6 * (3 * e - 3 * n + 1),
          a = 6 * (n - 2 * e),
          i = 3 * e,
          s = o * o,
          d = a * a,
          f = a / o,
          c = 3 * a * i / s - d * a / (s * o),
          l = 2 * i / o - d / s,
          u = l * l * l,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          b = 3 * t,
          g = o ? A : M;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(g(e, c, p, u, f), h, w, b)
      }
      const L = (...e) => e.filter(e => e).join(" ")
    },
    24442(e, t, n) {
      n.d(t, {
        b: () => a
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function a(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          a = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (o.test(i) ? t ? n[i] = e[i] : a[i] = e[i] : r.test(i) ? n[i] = e[i] : a[i] = e[i]);
        return {
          events: n,
          others: a
        }
      }
    },
    71107(e, t, n) {
      n.d(t, {
        v: () => s
      });
      var r = n(81270);
      const o = new Map;

      function a(e, t) {
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

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = i(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = a(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    }
  }
]);