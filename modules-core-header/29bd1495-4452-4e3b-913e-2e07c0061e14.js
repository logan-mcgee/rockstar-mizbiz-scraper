try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "29bd1495-4452-4e3b-913e-2e07c0061e14", e._sentryDebugIdIdentifier = "sentry-dbid-29bd1495-4452-4e3b-913e-2e07c0061e14")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4798], {
    12417: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => S,
        IS_SERVER: () => r,
        PromiseState: () => j,
        clone: () => w,
        cubicBezier: () => C,
        debounce: () => M,
        filterEventProps: () => l,
        get: () => P,
        merge: () => p,
        mergeProps: () => c,
        omit: () => g,
        range: () => h,
        set: () => v,
        throttle: () => k
      });
      const r = "undefined" == typeof window;
      var o = n(5060);
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

      function c(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              s = r[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, o.$)(n, s)
          }
        }
        return t
      }
      const d = /^(on.*)$/,
        f = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (f.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : d.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      var u = n(7415);

      function h(e) {
        return u(e)
      }
      var b = n(52953);

      function g(e, ...t) {
        return b(e, ...t)
      }
      var _ = n(87090);

      function p(e, t) {
        return _(e, t)
      }
      var y = n(98097);

      function w(e) {
        return y(e)
      }
      var m = n(76030);

      function v(e, t, n, r) {
        return m(e, t, n, r)
      }
      var E = n(62670);

      function P(e, t) {
        return E(e, t)
      }
      var M = n(54375);
      const k = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var j;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(j || (j = {}));
      class S {
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
              this._state = j.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = j.Rejected, n(e)
            }, this._state = j.Pending, e?.(this._resolve, this._reject)
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

      function T(e) {
        return e
      }
      const {
        cbrt: I,
        sqrt: R,
        PI: D
      } = Math, N = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = R(i);
          return I(s + e) + I(s - e) - o
        }
        const a = I(R(s * s - i)),
          c = s ? Math.atan(R(-i) / s) : -D / 2;
        let d;
        return d = n < 0 ? (s > 0 ? 2 * D : D) - c : o < 0 ? (s > 0 ? 2 * D : -3 * D) + c : (s > 0 ? 0 : D) + c, 2 * a * Math.cos(d / 3) - o
      }, A = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function C(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return T;
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
          b = 3 * t - 3 * r + 1,
          g = r - 2 * t,
          _ = 3 * t,
          p = o ? N : T;
        return e => 0 === e || 1 === e ? e : A(p(e, f, h, u, d), b, g, _)
      }
    }
  }
]);