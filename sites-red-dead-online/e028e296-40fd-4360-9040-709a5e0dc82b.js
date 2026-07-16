try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e028e296-40fd-4360-9040-709a5e0dc82b", e._sentryDebugIdIdentifier = "sentry-dbid-e028e296-40fd-4360-9040-709a5e0dc82b")
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
  [3753, 6134], {
    31602(e, t, n) {
      const r = "undefined" == typeof window;
      n.d(t, ["X", 0, r])
    },
    56134(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => P,
        IS_SERVER: () => r.X,
        PromiseState: () => M,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => m,
        cubicBezier: () => N,
        debounce: () => E,
        filterEventProps: () => c,
        get: () => k,
        getOrSet: () => f,
        joinStrings: () => R,
        merge: () => _,
        mergeProps: () => s.v,
        omit: () => w,
        range: () => p,
        set: () => v,
        throttle: () => j
      });
      var r = n(31602);
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
      var s = n(47460);
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
      const l = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[l] || (window[l] = new Map), window[l].has(e) || window[l].set(e, t()), window[l].get(e));
      var u = n(68309);

      function p(e) {
        return u(e)
      }
      var h = n(15963);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var g = n(54028);

      function _(e, ...t) {
        return g(e, ...t)
      }
      var b = n(74143);

      function m(e) {
        return b(e)
      }
      var y = n(88584);

      function v(e, t, n, r) {
        return y(e, t, n, r)
      }
      var x = n(73892);

      function k(e, t) {
        return x(e, t)
      }
      var E = n(54389);
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
        const i = t + n * e,
          s = i ** 2 + r;
        if (s > 0) {
          const e = A(s);
          return T(i + e) + T(i - e) - o
        }
        const a = T(A(i * i - s)),
          d = i ? Math.atan(A(-s) / i) : -I / 2;
        let c;
        return c = n < 0 ? (i > 0 ? 2 * I : I) - d : o < 0 ? (i > 0 ? 2 * I : -3 * I) + d : (i > 0 ? 0 : I) + d, 2 * a * Math.cos(c / 3) - o
      };

      function N(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          s = 3 * e,
          a = o * o,
          d = i * i,
          c = i / o,
          l = 3 * i * s / a - d * i / (a * o),
          f = 2 * s / o - d / a,
          u = f * f * f,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          g = 3 * t,
          _ = o ? L : S;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(_(e, l, p, u, c), h, w, g)
      }
      const R = (...e) => e.filter(e => e).join(" ")
    },
    47460(e, t, n) {
      n.d(t, {
        v: () => a
      });
      var r = n(81270);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
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
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    }
  }
]);