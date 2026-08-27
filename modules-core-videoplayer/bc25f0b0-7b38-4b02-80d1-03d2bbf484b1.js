try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bc25f0b0-7b38-4b02-80d1-03d2bbf484b1", e._sentryDebugIdIdentifier = "sentry-dbid-bc25f0b0-7b38-4b02-80d1-03d2bbf484b1")
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
  [6123], {
    8504(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => i,
        breakpoints: () => o,
        clone: () => g,
        cubicBezier: () => L,
        debounce: () => x,
        filterEventProps: () => d.b,
        get: () => v,
        getOrSet: () => l,
        joinStrings: () => R,
        merge: () => b,
        mergeProps: () => a.v,
        omit: () => p,
        range: () => u,
        set: () => m,
        throttle: () => k
      });
      var r = n(7059);
      const i = e => e - .02,
        o = {
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
      var a = n(4513),
        d = n(4412);
      const s = "__FOUNDRY_ACCENT__",
        l = (e, t) => r.X ? t() : (window[s] || (window[s] = new Map), window[s].has(e) || window[s].set(e, t()), window[s].get(e));
      var c = n(8309);

      function u(e) {
        return c(e)
      }
      var f = n(5963);

      function p(e, ...t) {
        return f(e, ...t)
      }
      var h = n(4028);

      function b(e, ...t) {
        return h(e, ...t)
      }
      var w = n(4143);

      function g(e) {
        return w(e)
      }
      var _ = n(8584);

      function m(e, t, n, r) {
        return _(e, t, n, r)
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
        const o = t + n * e,
          a = o ** 2 + r;
        if (a > 0) {
          const e = P(a);
          return S(o + e) + S(o - e) - i
        }
        const d = S(P(o * o - a)),
          s = o ? Math.atan(P(-a) / o) : -T / 2;
        let l;
        return l = n < 0 ? (o > 0 ? 2 * T : T) - s : i < 0 ? (o > 0 ? 2 * T : -3 * T) + s : (o > 0 ? 0 : T) + s, 2 * d * Math.cos(l / 3) - i
      };

      function L(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
        const i = 6 * (3 * e - 3 * n + 1),
          o = 6 * (n - 2 * e),
          a = 3 * e,
          d = i * i,
          s = o * o,
          l = o / i,
          c = 3 * o * a / d - s * o / (d * i),
          u = 2 * a / i - s / d,
          f = u * u * u,
          p = 3 / i,
          h = 3 * t - 3 * r + 1,
          b = r - 2 * t,
          w = 3 * t,
          g = i ? I : M;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(g(e, c, p, f, l), h, b, w)
      }
      const R = (...e) => e.filter(e => e).join(" ")
    }
  }
]);