try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "133e8545-2ccc-4e09-8f92-fb1fd2a56200", e._sentryDebugIdIdentifier = "sentry-dbid-133e8545-2ccc-4e09-8f92-fb1fd2a56200")
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
  [6781], {
    26781: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => k,
        breakpoints: () => o,
        clone: () => p,
        cubicBezier: () => O,
        debounce: () => P,
        filterEventProps: () => d,
        get: () => E,
        getOrSet: () => l,
        joinStrings: () => C,
        merge: () => w,
        mergeProps: () => s.v,
        omit: () => _,
        range: () => u,
        set: () => m,
        throttle: () => j
      });
      var r = n(60211);
      const o = {
        mobile: "(min-width: 0px) and (max-width: 767px)",
        tabletAndLarger: "(min-width: 768px)"
      };
      var s = n(51105);
      const i = /^(on.*)$/,
        a = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (a.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : i.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const c = "__FOUNDRY_ACCENT__",
        l = (e, t) => r.X ? t() : (window[c] || (window[c] = new Map), window[c].has(e) || window[c].set(e, t()), window[c].get(e));
      var f = n(98312);

      function u(e) {
        return f(e)
      }
      var h = n(41972);

      function _(e, ...t) {
        return h(e, ...t)
      }
      var g = n(56265);

      function w(e, t) {
        return g(e, t)
      }
      var b = n(31454);

      function p(e) {
        return b(e)
      }
      var y = n(10533);

      function m(e, t, n, r) {
        return y(e, t, n, r)
      }
      var v = n(10613);

      function E(e, t) {
        return v(e, t)
      }
      var P = n(9738);
      const j = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var k;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(k || (k = {}));
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
          this._promise = new Promise(((t, n) => {
            this._resolve = e => {
              this._state = k.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = k.Rejected, n(e)
            }, this._state = k.Pending, e?.(this._resolve, this._reject)
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

      function S(e) {
        return e
      }
      const {
        cbrt: T,
        sqrt: x,
        PI: I
      } = Math, R = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = x(i);
          return T(s + e) + T(s - e) - o
        }
        const a = T(x(s * s - i)),
          d = s ? Math.atan(x(-i) / s) : -I / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * I : I) - d : o < 0 ? (s > 0 ? 2 * I : -3 * I) + d : (s > 0 ? 0 : I) + d, 2 * a * Math.cos(c / 3) - o
      }, D = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function O(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return S;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          d = s * s,
          c = s / o,
          l = 3 * s * i / a - d * s / (a * o),
          f = 2 * i / o - d / a,
          u = f * f * f,
          h = 3 / o,
          _ = 3 * t - 3 * r + 1,
          g = r - 2 * t,
          w = 3 * t,
          b = o ? R : S;
        return e => 0 === e || 1 === e ? e : D(b(e, l, h, u, c), _, g, w)
      }
      const C = (...e) => e.filter((e => e)).join(" ")
    }
  }
]);