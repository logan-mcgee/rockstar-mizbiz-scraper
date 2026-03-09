try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "16c3c1e0-590b-41b0-b1a5-d446c69757bc", e._sentryDebugIdIdentifier = "sentry-dbid-16c3c1e0-590b-41b0-b1a5-d446c69757bc")
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
  [530, 8149], {
    88149: (e, t, n) => {
      n.r(t), n.d(t, {
        ExternalPromise: () => I,
        IS_SERVER: () => r,
        PromiseState: () => A,
        adjustBreakpoint: () => o,
        breakpoints: () => s,
        clone: () => v,
        cubicBezier: () => O,
        debounce: () => S,
        filterEventProps: () => p,
        get: () => P,
        getOrSet: () => w,
        joinStrings: () => F,
        merge: () => x,
        mergeProps: () => f,
        omit: () => m,
        range: () => b,
        set: () => j,
        throttle: () => T
      });
      const r = "undefined" == typeof window,
        o = e => e - .02,
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
      var i = n(4572);
      const a = new Map;

      function d(e, t) {
        if (e === t) return e;
        const n = a.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = a.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function c(...e) {
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
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = c(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = d(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, i.clsx)(n, o)
          }
        }
        return t
      }
      const l = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function p(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (u.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : l.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      const h = "__FOUNDRY_ACCENT__",
        w = (e, t) => r ? t() : (window[h] || (window[h] = new Map), window[h].has(e) || window[h].set(e, t()), window[h].get(e));
      var g = n(98312);

      function b(e) {
        return g(e)
      }
      var _ = n(41972);

      function m(e, ...t) {
        return _(e, ...t)
      }
      var y = n(56265);

      function x(e, t) {
        return y(e, t)
      }
      var k = n(31454);

      function v(e) {
        return k(e)
      }
      var E = n(10533);

      function j(e, t, n, r) {
        return E(e, t, n, r)
      }
      var M = n(10613);

      function P(e, t) {
        return M(e, t)
      }
      var S = n(9738);
      const T = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      };
      var A;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(A || (A = {}));
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
          this._promise = new Promise((t, n) => {
            this._resolve = e => {
              this._state = A.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = A.Rejected, n(e)
            }, this._state = A.Pending, e?.(this._resolve, this._reject)
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

      function L(e) {
        return e
      }
      const {
        cbrt: N,
        sqrt: R,
        PI: C
      } = Math, D = (e, t, n, r, o) => {
        const s = t + n * e,
          i = s ** 2 + r;
        if (i > 0) {
          const e = R(i);
          return N(s + e) + N(s - e) - o
        }
        const a = N(R(s * s - i)),
          d = s ? Math.atan(R(-i) / s) : -C / 2;
        let c;
        return c = n < 0 ? (s > 0 ? 2 * C : C) - d : o < 0 ? (s > 0 ? 2 * C : -3 * C) + d : (s > 0 ? 0 : C) + d, 2 * a * Math.cos(c / 3) - o
      }, $ = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function O(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return L;
        const o = 6 * (3 * e - 3 * n + 1),
          s = 6 * (n - 2 * e),
          i = 3 * e,
          a = o * o,
          d = s * s,
          c = s / o,
          f = 3 * s * i / a - d * s / (a * o),
          l = 2 * i / o - d / a,
          u = l * l * l,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          g = 3 * t,
          b = o ? D : L;
        return e => 0 === e || 1 === e ? e : $(b(e, f, p, u, c), h, w, g)
      }
      const F = (...e) => e.filter(e => e).join(" ")
    }
  }
]);