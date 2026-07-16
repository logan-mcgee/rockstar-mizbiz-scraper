try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2f8ebe25-1cb4-4039-91a9-be75119ace20", e._sentryDebugIdIdentifier = "sentry-dbid-2f8ebe25-1cb4-4039-91a9-be75119ace20")
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
  [3753], {
    56134(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => P,
        adjustBreakpoint: () => a,
        breakpoints: () => i,
        clone: () => m,
        cubicBezier: () => D,
        debounce: () => E,
        filterEventProps: () => l,
        get: () => k,
        getOrSet: () => f,
        joinStrings: () => $,
        merge: () => g,
        mergeProps: () => s.v,
        omit: () => w,
        range: () => p,
        set: () => v,
        throttle: () => j
      });
      var r = n(31602);
      const a = e => e - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${a(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${a(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${a(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${a(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var s = n(47460);
      const o = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (d.test(a) ? t ? n[a] = e[a] : r[a] = e[a] : o.test(a) ? n[a] = e[a] : r[a] = e[a]);
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
          const a = Date.now();
          a - n >= t && (n = a, e(...r))
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
      } = Math, R = (e, t, n, r, a) => {
        const i = t + n * e,
          s = i ** 2 + r;
        if (s > 0) {
          const e = I(s);
          return T(i + e) + T(i - e) - a
        }
        const o = T(I(i * i - s)),
          d = i ? Math.atan(I(-s) / i) : -L / 2;
        let l;
        return l = n < 0 ? (i > 0 ? 2 * L : L) - d : a < 0 ? (i > 0 ? 2 * L : -3 * L) + d : (i > 0 ? 0 : L) + d, 2 * o * Math.cos(l / 3) - a
      };

      function D(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const a = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          s = 3 * e,
          o = a * a,
          d = i * i,
          l = i / a,
          c = 3 * i * s / o - d * i / (o * a),
          f = 2 * s / a - d / o,
          u = f * f * f,
          p = 3 / a,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          _ = 3 * t,
          g = a ? R : S;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(g(e, c, p, u, l), h, w, _)
      }
      const $ = (...e) => e.filter(e => e).join(" ")
    }
  }
]);