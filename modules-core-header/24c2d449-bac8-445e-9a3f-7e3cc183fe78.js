try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "24c2d449-bac8-445e-9a3f-7e3cc183fe78", e._sentryDebugIdIdentifier = "sentry-dbid-24c2d449-bac8-445e-9a3f-7e3cc183fe78")
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
  [3866], {
    43599(e) {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, s = n(t((r - e) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = e, e += o;
        return u
      }
    },
    62314(e, t, n) {
      var r = n(87147),
        o = n(71025),
        i = n(15313),
        a = n(36373),
        s = n(30285);
      e.exports = function(e, t, n, u) {
        if (!a(e)) return e;
        for (var c = -1, d = (t = o(t, e)).length, f = d - 1, l = e; null != l && ++c < d;) {
          var p = s(t[c]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (c != f) {
            var h = l[p];
            void 0 === (v = u ? u(h, p, l) : void 0) && (v = a(h) ? h : i(t[c + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
        }
        return e
      }
    },
    56792(e, t, n) {
      var r = n(41856),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    55276(e, t, n) {
      var r = n(43599),
        o = n(34856),
        i = n(27872);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    },
    41856(e) {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    74143(e, t, n) {
      var r = n(5559);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    54389(e, t, n) {
      var r = n(36373),
        o = n(42308),
        i = n(73894),
        a = Math.max,
        s = Math.min;
      e.exports = function(e, t, n) {
        var u, c, d, f, l, p, v = 0,
          h = !1,
          g = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var n = u,
            r = c;
          return u = c = void 0, v = t, f = e.apply(r, n)
        }

        function _(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - v >= d
        }

        function y() {
          var e = o();
          if (_(e)) return b(e);
          l = setTimeout(y, function(e) {
            var n = t - (e - p);
            return g ? s(n, d - (e - v)) : n
          }(e))
        }

        function b(e) {
          return l = void 0, w && u ? m(e) : (u = c = void 0, f)
        }

        function x() {
          var e = o(),
            n = _(e);
          if (u = arguments, c = this, p = e, n) {
            if (void 0 === l) return function(e) {
              return v = e, l = setTimeout(y, t), h ? m(e) : f
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(y, t), m(p)
          }
          return void 0 === l && (l = setTimeout(y, t)), f
        }
        return t = i(t) || 0, r(n) && (h = !!n.leading, d = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : d, w = "trailing" in n ? !!n.trailing : w), x.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = c = l = void 0
        }, x.flush = function() {
          return void 0 === l ? f : b(o())
        }, x
      }
    },
    73892(e, t, n) {
      var r = n(69526);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    42308(e, t, n) {
      var r = n(84373);
      e.exports = function() {
        return r.Date.now()
      }
    },
    68309(e, t, n) {
      var r = n(55276)();
      e.exports = r
    },
    88584(e, t, n) {
      var r = n(62314);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    27872(e, t, n) {
      var r = n(73894),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    73894(e, t, n) {
      var r = n(56792),
        o = n(36373),
        i = n(69570),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = s.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    45457(e, t, n) {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    93866(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => k,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => w,
        cubicBezier: () => A,
        debounce: () => x,
        filterEventProps: () => s.b,
        get: () => b,
        getOrSet: () => c,
        joinStrings: () => $,
        merge: () => h,
        mergeProps: () => a.v,
        omit: () => p,
        range: () => f,
        set: () => _,
        throttle: () => E
      });
      var r = n(45457);
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
      var a = n(51423),
        s = n(89518);
      const u = "__FOUNDRY_ACCENT__",
        c = (e, t) => r.X ? t() : (window[u] || (window[u] = new Map), window[u].has(e) || window[u].set(e, t()), window[u].get(e));
      var d = n(68309);

      function f(e) {
        return d(e)
      }
      var l = n(15963);

      function p(e, ...t) {
        return l(e, ...t)
      }
      var v = n(54028);

      function h(e, t) {
        return v(e, t)
      }
      var g = n(74143);

      function w(e) {
        return g(e)
      }
      var m = n(88584);

      function _(e, t, n, r) {
        return m(e, t, n, r)
      }
      var y = n(73892);

      function b(e, t) {
        return y(e, t)
      }
      var x = n(54389);
      const E = (e, t) => {
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
          this._promise = new Promise((t, n) => {
            this._resolve = e => {
              this._state = k.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = k.Rejected, n(e)
            }, this._state = k.Pending, e?.(this._resolve, this._reject)
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

      function T(e) {
        return e
      }
      const {
        cbrt: j,
        sqrt: P,
        PI: N
      } = Math, S = (e, t, n, r, o) => {
        const i = t + n * e,
          a = i ** 2 + r;
        if (a > 0) {
          const e = P(a);
          return j(i + e) + j(i - e) - o
        }
        const s = j(P(i * i - a)),
          u = i ? Math.atan(P(-a) / i) : -N / 2;
        let c;
        return c = n < 0 ? (i > 0 ? 2 * N : N) - u : o < 0 ? (i > 0 ? 2 * N : -3 * N) + u : (i > 0 ? 0 : N) + u, 2 * s * Math.cos(c / 3) - o
      };

      function A(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return T;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          a = 3 * e,
          s = o * o,
          u = i * i,
          c = i / o,
          d = 3 * i * a / s - u * i / (s * o),
          f = 2 * a / o - u / s,
          l = f * f * f,
          p = 3 / o,
          v = 3 * t - 3 * r + 1,
          h = r - 2 * t,
          g = 3 * t,
          w = o ? S : T;
        return e => 0 === e || 1 === e ? e : ((e, t, n, r) => ((t * e + 3 * n) * e + r) * e)(w(e, d, p, l, c), v, h, g)
      }
      const $ = (...e) => e.filter(e => e).join(" ")
    },
    89518(e, t, n) {
      "use strict";
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
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (o.test(a) ? t ? n[a] = e[a] : i[a] = e[a] : r.test(a) ? n[a] = e[a] : i[a] = e[a]);
        return {
          events: n,
          others: i
        }
      }
    },
    51423(e, t, n) {
      "use strict";
      n.d(t, {
        v: () => s
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

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function s(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              s = o[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = i(n, s) : t[e] = void 0 !== s ? s : n : t[e] = (0, r.clsx)(n, s)
          }
        }
        return t
      }
    }
  }
]);