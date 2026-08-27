try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "89054515-efc0-427b-b1df-ca65a2f29132", e._sentryDebugIdIdentifier = "sentry-dbid-89054515-efc0-427b-b1df-ca65a2f29132")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [5625], {
    8006(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => i,
        breakpoints: () => a,
        clone: () => _,
        cubicBezier: () => L,
        debounce: () => x,
        filterEventProps: () => s.b,
        get: () => v,
        getOrSet: () => l,
        joinStrings: () => R,
        merge: () => w,
        mergeProps: () => o.v,
        omit: () => p,
        range: () => f,
        set: () => m,
        throttle: () => k
      });
      var r = n(2101);
      const i = e => e - .02,
        a = {
          mobile: `(min-width: 0px) and (max-width: ${i(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${i(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${i(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${i(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var o = n(4043),
        s = n(5394);
      const d = "__FOUNDRY_ACCENT__",
        l = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var c = n(8309);

      function f(e) {
        return c(e)
      }
      var u = n(5963);

      function p(e, ...t) {
        return u(e, ...t)
      }
      var h = n(4028);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var g = n(4143);

      function _(e) {
        return g(e)
      }
      var b = n(8584);

      function m(e, t, n, r) {
        return b(e, t, n, r)
      }
      var y = n(3892);

      function v(e, t) {
        return y(e, t)
      }
      var x = n(4389);
      const k = (e, t) => {
        let n = 0;
        return (...r) => {
          const i = Date.now();
          i - n >= t && (n = i, e(...r))
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
        cbrt: S,
        sqrt: P,
        PI: T
      } = Math, I = (e, t, n, r, i) => {
        const a = t + n * e,
          o = a ** 2 + r;
        if (o > 0) {
          const e = P(o);
          return S(a + e) + S(a - e) - i
        }
        const s = S(P(a * a - o)),
          d = a ? Math.atan(P(-o) / a) : -T / 2;
        let l;
        return l = n < 0 ? (a > 0 ? 2 * T : T) - d : i < 0 ? (a > 0 ? 2 * T : -3 * T) + d : (a > 0 ? 0 : T) + d, 2 * s * Math.cos(l / 3) - i
      };

      function L(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
        const i = 6 * (3 * e - 3 * n + 1),
          a = 6 * (n - 2 * e),
          o = 3 * e,
          s = i * i,
          d = a * a,
          l = a / i,
          c = 3 * a * o / s - d * a / (s * i),
          f = 2 * o / i - d / s,
          u = f * f * f,
          p = 3 / i,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          g = 3 * t,
          _ = i ? I : M;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(_(e, c, p, u, l), h, w, g)
      }
      const R = (...e) => e.filter(e => e).join(" ")
    }
  }
]);