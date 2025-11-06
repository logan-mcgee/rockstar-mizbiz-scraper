try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a6c8b456-b3e3-4854-9c0f-d7b1deebad31", e._sentryDebugIdIdentifier = "sentry-dbid-a6c8b456-b3e3-4854-9c0f-d7b1deebad31")
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
  [6367, 8748], {
    36367: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => I,
        IS_SERVER: () => r,
        PromiseState: () => x,
        breakpoints: () => o,
        clone: () => E,
        cubicBezier: () => F,
        debounce: () => S,
        filterEventProps: () => u,
        get: () => k,
        getOrSet: () => g,
        joinStrings: () => z,
        merge: () => m,
        mergeProps: () => d,
        omit: () => w,
        range: () => p,
        set: () => P,
        throttle: () => T
      });
      const r = "undefined" == typeof window,
        o = {
          mobile: "(min-width: 0px) and (max-width: 767px)",
          tabletAndLarger: "(min-width: 768px)"
        };
      var s = n(4572);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = i.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function c(...e) {
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
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = c(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = a(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, s.clsx)(n, o)
          }
        }
        return t
      }
      const f = /^(on.*)$/,
        l = /^(onPress.*)$/;

      function u(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (l.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : f.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const h = "__FOUNDRY_ACCENT__",
        g = (e, t) => r ? t() : (window[h] || (window[h] = new Map), window[h].has(e) || window[h].set(e, t()), window[h].get(e));
      var _ = n(98312);

      function p(e) {
        return _(e)
      }
      var b = n(41972);

      function w(e, ...t) {
        return b(e, ...t)
      }
      var y = n(56265);

      function m(e, t) {
        return y(e, t)
      }
      var v = n(31454);

      function E(e) {
        return v(e)
      }
      var M = n(10533);

      function P(e, t, n, r) {
        return M(e, t, n, r)
      }
      var j = n(10613);

      function k(e, t) {
        return j(e, t)
      }
      var S = n(9738);
      const T = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var x;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(x || (x = {}));
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
              this._state = x.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = x.Rejected, n(e)
            }, this._state = x.Pending, e?.(this._resolve, this._reject)
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
        sqrt: A,
        PI: C
      } = Math, D = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = A(i);
          return R(s + e) + R(s - e) - o
        }
        const a = R(A(s * s - i)),
          c = s ? Math.atan(A(-i) / s) : -C / 2;
        let d;
        return d = n < 0 ? (s > 0 ? 2 * C : C) - c : o < 0 ? (s > 0 ? 2 * C : -3 * C) + c : (s > 0 ? 0 : C) + c, 2 * a * Math.cos(d / 3) - o
      }, O = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function F(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return N;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          c = s * s,
          d = s / o,
          f = 3 * s * i / a - c * s / (a * o),
          l = 2 * i / o - c / a,
          u = l * l * l,
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          _ = r - 2 * t,
          p = 3 * t,
          b = o ? D : N;
        return e => 0 === e || 1 === e ? e : O(b(e, f, h, u, d), g, _, p)
      }
      const z = (...e) => e.filter((e => e)).join(" ")
    }
  }
]);