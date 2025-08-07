try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ec51b815-343f-4b42-bbcf-cd529155438e", e._sentryDebugIdIdentifier = "sentry-dbid-ec51b815-343f-4b42-bbcf-cd529155438e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [507, 2888], {
    5060: (e, t, n) => {
      function r(e) {
        var t, n, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n)
          } else
            for (n in e) e[n] && (o && (o += " "), o += n);
        return o
      }

      function o() {
        for (var e, t, n = 0, o = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (t = r(e)) && (o && (o += " "), o += t);
        return o
      }
      n.d(t, {
        $: () => o,
        A: () => s
      });
      const s = o
    },
    32888: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => S,
        IS_SERVER: () => r,
        PromiseState: () => k,
        clone: () => w,
        cubicBezier: () => C,
        debounce: () => M,
        filterEventProps: () => l,
        get: () => P,
        merge: () => p,
        mergeProps: () => f,
        omit: () => b,
        range: () => h,
        set: () => v,
        throttle: () => j
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

      function f(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              s = r[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, o.A)(n, s)
          }
        }
        return t
      }
      const c = /^(on.*)$/,
        d = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (d.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : c.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      var u = n(7415);

      function h(e) {
        return u(e)
      }
      var g = n(52953);

      function b(e, ...t) {
        return g(e, ...t)
      }
      var y = n(87090);

      function p(e, t) {
        return y(e, t)
      }
      var _ = n(98097);

      function w(e) {
        return _(e)
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

      function A(e) {
        return e
      }
      const {
        cbrt: T,
        sqrt: I,
        PI: R
      } = Math, D = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = I(i);
          return T(s + e) + T(s - e) - o
        }
        const a = T(I(s * s - i)),
          f = s ? Math.atan(I(-i) / s) : -R / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * R : R) - f : o < 0 ? (s > 0 ? 2 * R : -3 * R) + f : (s > 0 ? 0 : R) + f, 2 * a * Math.cos(c / 3) - o
      }, N = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function C(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return A;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          f = s * s,
          c = s / o,
          d = 3 * s * i / a - f * s / (a * o),
          l = 2 * i / o - f / a,
          u = l * l * l,
          h = 3 / o,
          g = 3 * t - 3 * r + 1,
          b = r - 2 * t,
          y = 3 * t,
          p = o ? D : A;
        return e => 0 === e || 1 === e ? e : N(p(e, d, h, u, c), g, b, y)
      }
    }
  }
]);