try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3bbe5ab8-28b3-49be-85ed-372c09c5f2ba", e._sentryDebugIdIdentifier = "sentry-dbid-3bbe5ab8-28b3-49be-85ed-372c09c5f2ba")
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
  [5710], {
    69309(e, t, n) {
      const r = "undefined" == typeof window;
      n.d(t, ["X", 0, r])
    },
    85710(e, t, n) {
      n.r(t), n.d(t, {
        ExternalPromise: () => j,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => g,
        cubicBezier: () => I,
        debounce: () => x,
        filterEventProps: () => a.b,
        get: () => v,
        getOrSet: () => c,
        joinStrings: () => L,
        merge: () => w,
        mergeProps: () => s.v,
        omit: () => p,
        range: () => f,
        set: () => m,
        throttle: () => k
      });
      var r = n(69309);
      const o = e => e - .02,
        i = {
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
      var s = n(6675),
        a = n(11914);
      const d = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[d] || (window[d] = new Map), window[d].has(e) || window[d].set(e, t()), window[d].get(e));
      var l = n(68309);

      function f(e) {
        return l(e)
      }
      var u = n(15963);

      function p(e, ...t) {
        return u(e, ...t)
      }
      var h = n(54028);

      function w(e, ...t) {
        return h(e, ...t)
      }
      var b = n(74143);

      function g(e) {
        return b(e)
      }
      var _ = n(88584);

      function m(e, t, n, r) {
        return _(e, t, n, r)
      }
      var y = n(73892);

      function v(e, t) {
        return y(e, t)
      }
      var x = n(54389);
      const k = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
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
        cbrt: P,
        sqrt: S,
        PI: T
      } = Math, A = (e, t, n, r, o) => {
        const i = t + n * e,
          s = i ** 2 + r;
        if (s > 0) {
          const e = S(s);
          return P(i + e) + P(i - e) - o
        }
        const a = P(S(i * i - s)),
          d = i ? Math.atan(S(-s) / i) : -T / 2;
        let c;
        return c = n < 0 ? (i > 0 ? 2 * T : T) - d : o < 0 ? (i > 0 ? 2 * T : -3 * T) + d : (i > 0 ? 0 : T) + d, 2 * a * Math.cos(c / 3) - o
      };

      function I(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return M;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          s = 3 * e,
          a = o * o,
          d = i * i,
          c = i / o,
          l = 3 * i * s / a - d * i / (a * o),
          f = 2 * s / o - d / a,
          u = f * f * f,
          p = 3 / o,
          h = 3 * t - 3 * r + 1,
          w = r - 2 * t,
          b = 3 * t,
          g = o ? A : M;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(g(e, l, p, u, c), h, w, b)
      }
      const L = (...e) => e.filter(e => e).join(" ")
    },
    11914(e, t, n) {
      n.d(t, {
        b: () => i
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function i(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          i = {};
        for (const s in e) Object.prototype.hasOwnProperty.call(e, s) && (o.test(s) ? t ? n[s] = e[s] : i[s] = e[s] : r.test(s) ? n[s] = e[s] : i[s] = e[s]);
        return {
          events: n,
          others: i
        }
      }
    },
    6675(e, t, n) {
      n.d(t, {
        v: () => a
      });
      var r = n(81270);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function a(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              a = o[e];
            "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof a ? "id" === e && n && a ? t.id = i(n, a) : t[e] = void 0 !== a ? a : n : t[e] = (0, r.clsx)(n, a)
          }
        }
        return t
      }
    }
  }
]);