try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1a8d47a7-1fe8-4ff2-8b5e-ade56eeb8776", e._sentryDebugIdIdentifier = "sentry-dbid-1a8d47a7-1fe8-4ff2-8b5e-ade56eeb8776")
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
  [2482], {
    52482: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => P,
        adjustBreakpoint: () => o,
        breakpoints: () => s,
        clone: () => m,
        cubicBezier: () => $,
        debounce: () => E,
        filterEventProps: () => l,
        get: () => k,
        getOrSet: () => f,
        joinStrings: () => A,
        merge: () => _,
        mergeProps: () => i.v,
        omit: () => w,
        range: () => p,
        set: () => v,
        throttle: () => j
      });
      var r = n(81518);
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
      var i = n(61304);
      const a = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function l(e, {
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
      const c = "__FOUNDRY_ACCENT__",
        f = (e, t) => r.X ? t() : (window[c] || (window[c] = new Map), window[c].has(e) || window[c].set(e, t()), window[c].get(e));
      var u = n(98312);

      function p(e) {
        return u(e)
      }
      var h = n(41972);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var g = n(56265);

      function _(e, t) {
        return g(e, t)
      }
      var b = n(31454);

      function m(e) {
        return b(e)
      }
      var y = n(10533);

      function v(e, t, n, r) {
        return y(e, t, n, r)
      }
      var x = n(10613);

      function k(e, t) {
        return x(e, t)
      }
      var E = n(9738);
      const j = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
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
      } = Math, R = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = I(i);
          return T(s + e) + T(s - e) - o
        }
        const a = T(I(s * s - i)),
          d = s ? Math.atan(I(-i) / s) : -L / 2;
        let l;
        return l = n < 0 ? (s > 0 ? 2 * L : L) - d : o < 0 ? (s > 0 ? 2 * L : -3 * L) + d : (s > 0 ? 0 : L) + d, 2 * a * Math.cos(l / 3) - o
      }, D = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function $(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          d = s * s,
          l = s / o,
          c = 3 * s * i / a - d * s / (a * o),
          f = 2 * i / o - d / a,
          u = f * f * f,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          g = 3 * t,
          _ = o ? R : S;
        return e => 0 === e || 1 === e ? e : D(_(e, c, p, u, l), h, w, g)
      }
      const A = (...e) => e.filter(e => e).join(" ")
    }
  }
]);