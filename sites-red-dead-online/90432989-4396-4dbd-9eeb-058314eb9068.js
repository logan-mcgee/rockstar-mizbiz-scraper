try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "90432989-4396-4dbd-9eeb-058314eb9068", e._sentryDebugIdIdentifier = "sentry-dbid-90432989-4396-4dbd-9eeb-058314eb9068")
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
  [4569], {
    4569(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => P,
        adjustBreakpoint: () => i,
        breakpoints: () => s,
        clone: () => m,
        cubicBezier: () => D,
        debounce: () => E,
        filterEventProps: () => l,
        get: () => k,
        getOrSet: () => f,
        joinStrings: () => $,
        merge: () => g,
        mergeProps: () => o.v,
        omit: () => w,
        range: () => p,
        set: () => v,
        throttle: () => j
      });
      var r = n(72175);
      const i = e => e - .02,
        s = {
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
      var o = n(20997);
      const a = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (d.test(i) ? t ? n[i] = e[i] : r[i] = e[i] : a.test(i) ? n[i] = e[i] : r[i] = e[i]);
        return {
          events: n,
          others: r
        }
      }
      const c = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[c] || (window[c] = new Map), window[c].has(e) || window[c].set(e, t()), window[c].get(e));
      var u = n(68309);

      function p(e) {
        return u(e)
      }
      var h = n(15963);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var _ = n(54028);

      function g(e, ...t) {
        return _(e, ...t)
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
          const i = Date.now();
          i - n >= t && (n = i, e(...r))
        }
      };
      var P;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(P || (P = {}));
      class M {
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
              this._state = P.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = P.Rejected, n(e)
            }, this._state = P.Pending, e?.(this._resolve, this._reject)
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
        sqrt: I,
        PI: L
      } = Math, R = (e, t, n, r, i) => {
        const s = t + n * e,
          o = s ** 2 + r;
        if (o > 0) {
          const e = I(o);
          return T(s + e) + T(s - e) - i
        }
        const a = T(I(s * s - o)),
          d = s ? Math.atan(I(-o) / s) : -L / 2;
        let l;
        return l = n < 0 ? (s > 0 ? 2 * L : L) - d : i < 0 ? (s > 0 ? 2 * L : -3 * L) + d : (s > 0 ? 0 : L) + d, 2 * a * Math.cos(l / 3) - i
      };

      function D(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const i = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          o = 3 * e,
          a = i * i,
          d = s * s,
          l = s / i,
          c = 3 * s * o / a - d * s / (a * i),
          f = 2 * o / i - d / a,
          u = f * f * f,
          p = 3 / i,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          _ = 3 * t,
          g = i ? R : S;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(g(e, c, p, u, l), h, w, _)
      }
      const $ = (...e) => e.filter(e => e).join(" ")
    }
  }
]);