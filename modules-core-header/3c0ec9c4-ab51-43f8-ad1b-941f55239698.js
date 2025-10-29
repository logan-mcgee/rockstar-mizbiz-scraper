try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3c0ec9c4-ab51-43f8-ad1b-941f55239698", e._sentryDebugIdIdentifier = "sentry-dbid-3c0ec9c4-ab51-43f8-ad1b-941f55239698")
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
  [4680], {
    94680: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => I,
        IS_SERVER: () => r,
        PromiseState: () => T,
        clone: () => v,
        cubicBezier: () => x,
        debounce: () => k,
        filterEventProps: () => l,
        get: () => j,
        getOrSet: () => h,
        joinStrings: () => F,
        merge: () => b,
        mergeProps: () => d,
        omit: () => w,
        range: () => _,
        set: () => M,
        throttle: () => S
      });
      const r = "undefined" == typeof window;
      var o = n(4572);
      const s = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = s.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = s.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function d(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              s = r[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, o.clsx)(n, s)
          }
        }
        return t
      }
      const c = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (f.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : c.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const u = "__FOUNDRY_ACCENT__",
        h = (e, t) => r ? t() : (window[u] || (window[u] = new Map), window[u].has(e) || window[u].set(e, t()), window[u].get(e));
      var g = n(98312);

      function _(e) {
        return g(e)
      }
      var p = n(41972);

      function w(e, ...t) {
        return p(e, ...t)
      }
      var y = n(56265);

      function b(e, t) {
        return y(e, t)
      }
      var m = n(31454);

      function v(e) {
        return m(e)
      }
      var E = n(10533);

      function M(e, t, n, r) {
        return E(e, t, n, r)
      }
      var P = n(10613);

      function j(e, t) {
        return P(e, t)
      }
      var k = n(9738);
      const S = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var T;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(T || (T = {}));
      class I {
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
              this._state = T.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = T.Rejected, n(e)
            }, this._state = T.Pending, e?.(this._resolve, this._reject)
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

      function N(e) {
        return e
      }
      const {
        cbrt: R,
        sqrt: C,
        PI: D
      } = Math, A = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = C(i);
          return R(s + e) + R(s - e) - o
        }
        const a = R(C(s * s - i)),
          d = s ? Math.atan(C(-i) / s) : -D / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * D : D) - d : o < 0 ? (s > 0 ? 2 * D : -3 * D) + d : (s > 0 ? 0 : D) + d, 2 * a * Math.cos(c / 3) - o
      }, O = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function x(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return N;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          d = s * s,
          c = s / o,
          f = 3 * s * i / a - d * s / (a * o),
          l = 2 * i / o - d / a,
          u = l * l * l,
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          _ = r - 2 * t,
          p = 3 * t,
          w = o ? A : N;
        return e => 0 === e || 1 === e ? e : O(w(e, f, h, u, c), g, _, p)
      }
      const F = (...e) => e.filter((e => e)).join(" ")
    }
  }
]);