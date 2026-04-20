try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4d79de66-cdad-464e-a933-4aafd8171fd6", t._sentryDebugIdIdentifier = "sentry-dbid-4d79de66-cdad-464e-a933-4aafd8171fd6")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6162], {
    6521: (t, e, n) => {
      "use strict";
      n.d(e, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    9738: (t, e, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        s = Math.min;
      t.exports = function(t, e, n) {
        var u, d, f, c, l, p, v = 0,
          h = !1,
          g = !1,
          w = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function m(e) {
          var n = u,
            r = d;
          return u = d = void 0, v = e, c = t.apply(r, n)
        }

        function _(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - v >= f
        }

        function y() {
          var t = o();
          if (_(t)) return b(t);
          l = setTimeout(y, function(t) {
            var n = e - (t - p);
            return g ? s(n, f - (t - v)) : n
          }(t))
        }

        function b(t) {
          return l = void 0, w && u ? m(t) : (u = d = void 0, c)
        }

        function x() {
          var t = o(),
            n = _(t);
          if (u = arguments, d = this, p = t, n) {
            if (void 0 === l) return function(t) {
              return v = t, l = setTimeout(y, e), h ? m(t) : c
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(y, e), m(p)
          }
          return void 0 === l && (l = setTimeout(y, e)), c
        }
        return e = i(e) || 0, r(n) && (h = !!n.leading, f = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : f, w = "trailing" in n ? !!n.trailing : w), x.cancel = function() {
          void 0 !== l && clearTimeout(l), v = 0, u = p = d = l = void 0
        }, x.flush = function() {
          return void 0 === l ? c : b(o())
        }, x
      }
    },
    10533: (t, e, n) => {
      var r = n(86601);
      t.exports = function(t, e, n, o) {
        return o = "function" == typeof o ? o : void 0, null == t ? t : r(t, e, n, o)
      }
    },
    10613: (t, e, n) => {
      var r = n(23117);
      t.exports = function(t, e, n) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? n : o
      }
    },
    22909: (t, e, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = s.test(t);
        return n || u.test(t) ? d(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    28593: (t, e, n) => {
      var r = n(15036);
      t.exports = function() {
        return r.Date.now()
      }
    },
    31454: (t, e, n) => {
      var r = n(49192);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    43607: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => s
      });
      var r = n(1556);
      const o = new Map;

      function i(t, e) {
        if (t === e) return t;
        const n = o.get(t);
        if (n) return n.forEach(t => t(e)), e;
        const r = o.get(e);
        return r ? (r.forEach(e => e(t)), t) : e
      }

      function a(...t) {
        return (...e) => {
          for (const n of t) "function" == typeof n && n(...e)
        }
      }

      function s(...t) {
        const e = {
          ...t[0]
        };
        for (let n = 1; n < t.length; n++) {
          const o = t[n];
          for (const t in o) {
            const n = e[t],
              s = o[t];
            "function" == typeof n && "function" == typeof s && "o" === t[0] && "n" === t[1] && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90 ? e[t] = a(n, s) : "className" !== t && "UNSAFE_className" !== t || "string" != typeof n || "string" != typeof s ? "id" === t && n && s ? e.id = i(n, s) : e[t] = void 0 !== s ? s : n : e[t] = (0, r.clsx)(n, s)
          }
        }
        return e
      }
    },
    56162: (t, e, n) => {
      "use strict";
      n.r(e), n.d(e, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => k,
        adjustBreakpoint: () => o,
        breakpoints: () => i,
        clone: () => w,
        cubicBezier: () => $,
        debounce: () => x,
        filterEventProps: () => s.b,
        get: () => b,
        getOrSet: () => d,
        joinStrings: () => I,
        merge: () => h,
        mergeProps: () => a.v,
        omit: () => p,
        range: () => c,
        set: () => _,
        throttle: () => E
      });
      var r = n(6521);
      const o = t => t - .02,
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
      var a = n(43607),
        s = n(80070);
      const u = "__FOUNDRY_ACCENT__",
        d = (t, e) => r.X ? e() : (window[u] || (window[u] = new Map), window[u].has(t) || window[u].set(t, e()), window[u].get(t));
      var f = n(98312);

      function c(t) {
        return f(t)
      }
      var l = n(41972);

      function p(t, ...e) {
        return l(t, ...e)
      }
      var v = n(56265);

      function h(t, e) {
        return v(t, e)
      }
      var g = n(31454);

      function w(t) {
        return g(t)
      }
      var m = n(10533);

      function _(t, e, n, r) {
        return m(t, e, n, r)
      }
      var y = n(10613);

      function b(t, e) {
        return y(t, e)
      }
      var x = n(9738);
      const E = (t, e) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= e && (n = o, t(...r))
        }
      };
      var k;
      ! function(t) {
        t.Pending = "pending", t.Fulfilled = "fulfilled", t.Rejected = "rejected"
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
        constructor(t) {
          this._promise = new Promise((e, n) => {
            this._resolve = t => {
              this._state = k.Fulfilled, e(t)
            }, this._reject = t => {
              this._state = k.Rejected, n(t)
            }, this._state = k.Pending, t?.(this._resolve, this._reject)
          })
        }
        then(t, e) {
          return this._promise?.then(t, e)
        } catch (t) {
          return this._promise?.catch(t)
        } finally(t) {
          return this._promise?.finally(t)
        }
        resolve(t) {
          this._resolve?.(t)
        }
        reject(t) {
          this.reject?.(t)
        }
      }

      function T(t) {
        return t
      }
      const {
        cbrt: j,
        sqrt: P,
        PI: N
      } = Math, S = (t, e, n, r, o) => {
        const i = e + n * t,
          a = i ** 2 + r;
        if (a > 0) {
          const t = P(a);
          return j(i + t) + j(i - t) - o
        }
        const s = j(P(i * i - a)),
          u = i ? Math.atan(P(-a) / i) : -N / 2;
        let d;
        return d = n < 0 ? (i > 0 ? 2 * N : N) - u : o < 0 ? (i > 0 ? 2 * N : -3 * N) + u : (i > 0 ? 0 : N) + u, 2 * s * Math.cos(d / 3) - o
      }, A = (t, e, n, r) => ((e * t + 3 * n) * t + r) * t;

      function $(t, e, n, r) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (t === e && n === r) return T;
        const o = 6 * (3 * t - 3 * n + 1),
          i = 6 * (n - 2 * t),
          a = 3 * t,
          s = o * o,
          u = i * i,
          d = i / o,
          f = 3 * i * a / s - u * i / (s * o),
          c = 2 * a / o - u / s,
          l = c * c * c,
          p = 3 / o,
          v = 3 * e - 3 * r + 1,
          h = r - 2 * e,
          g = 3 * e,
          w = o ? S : T;
        return t => 0 === t || 1 === t ? t : A(w(t, f, p, l, d), v, h, g)
      }
      const I = (...t) => t.filter(t => t).join(" ")
    },
    75888: t => {
      var e = Math.ceil,
        n = Math.max;
      t.exports = function(t, r, o, i) {
        for (var a = -1, s = n(e((r - t) / (o || 1)), 0), u = Array(s); s--;) u[i ? s : ++a] = t, t += o;
        return u
      }
    },
    80070: (t, e, n) => {
      "use strict";
      n.d(e, {
        b: () => i
      });
      const r = /^(on.*)$/,
        o = /^(onPress.*)$/;

      function i(t, {
        onPress: e
      } = {
        onPress: !0
      }) {
        const n = {},
          i = {};
        for (const a in t) Object.prototype.hasOwnProperty.call(t, a) && (o.test(a) ? e ? n[a] = t[a] : i[a] = t[a] : r.test(a) ? n[a] = t[a] : i[a] = t[a]);
        return {
          events: n,
          others: i
        }
      }
    },
    85531: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    86601: (t, e, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        a = n(56130),
        s = n(81966);
      t.exports = function(t, e, n, u) {
        if (!a(t)) return t;
        for (var d = -1, f = (e = o(e, t)).length, c = f - 1, l = t; null != l && ++d < f;) {
          var p = s(e[d]),
            v = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
          if (d != c) {
            var h = l[p];
            void 0 === (v = u ? u(h, p, l) : void 0) && (v = a(h) ? h : i(e[d + 1]) ? [] : {})
          }
          r(l, p, v), l = l[p]
        }
        return t
      }
    },
    87625: (t, e, n) => {
      var r = n(85531),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t
      }
    },
    95187: (t, e, n) => {
      var r = n(22909),
        o = 1 / 0;
      t.exports = function(t) {
        return t ? (t = r(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
      }
    },
    98312: (t, e, n) => {
      var r = n(99335)();
      t.exports = r
    },
    99335: (t, e, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      t.exports = function(t) {
        return function(e, n, a) {
          return a && "number" != typeof a && o(e, n, a) && (n = a = void 0), e = i(e), void 0 === n ? (n = e, e = 0) : n = i(n), a = void 0 === a ? e < n ? 1 : -1 : i(a), r(e, n, a, t)
        }
      }
    }
  }
]);