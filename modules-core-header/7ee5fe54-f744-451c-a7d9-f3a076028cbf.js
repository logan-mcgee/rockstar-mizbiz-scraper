try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ee5fe54-f744-451c-a7d9-f3a076028cbf", e._sentryDebugIdIdentifier = "sentry-dbid-7ee5fe54-f744-451c-a7d9-f3a076028cbf")
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
  [2101, 4482], {
    5060: (e, t, n) => {
      "use strict";

      function r(e) {
        var t, n, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n)
          } else
            for (n in e) e[n] && (o && (o += " "), o += n);
        return o
      }

      function o() {
        for (var e, t, n = 0, o = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = r(e)) && (o && (o += " "), o += t);
        return o
      }
      n.d(t, {
        $: () => o,
        A: () => i
      });
      const i = o
    },
    6761: (e, t, n) => {
      var r = n(55319),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        a = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = i.call(e, a),
          n = e[a];
        try {
          e[a] = void 0;
          var r = !0
        } catch (e) {}
        var o = s.call(e);
        return r && (t ? e[a] = n : delete e[a]), o
      }
    },
    16691: (e, t, n) => {
      "use strict";
      n.d(t, {
        n: () => r
      });
      const r = (e, t) => {
        let n = 0;
        return (...r) => {
          const o = Date.now();
          o - n >= t && (n = o, e(...r))
        }
      }
    },
    17564: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    32101: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => r.X,
        PromiseState: () => E,
        clone: () => m,
        cubicBezier: () => $,
        debounce: () => T,
        filterEventProps: () => l,
        get: () => x,
        joinStrings: () => D,
        merge: () => y,
        mergeProps: () => f,
        omit: () => b,
        range: () => p,
        set: () => w,
        throttle: () => S.n
      });
      var r = n(44802),
        o = n(5060);
      const i = new Map;

      function s(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = i.get(t);
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
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = s(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.$)(n, i)
          }
        }
        return t
      }
      const c = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (u.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : c.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      var d = n(7415);

      function p(e) {
        return d(e)
      }
      var v = n(52953);

      function b(e, ...t) {
        return v(e, ...t)
      }
      var g = n(87090);

      function y(e, t) {
        return g(e, t)
      }
      var h = n(98097);

      function m(e) {
        return h(e)
      }
      var _ = n(76030);

      function w(e, t, n, r) {
        return _(e, t, n, r)
      }
      var j = n(62670);

      function x(e, t) {
        return j(e, t)
      }
      var E, T = n(54375),
        S = n(16691);
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(E || (E = {}));
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
              this._state = E.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = E.Rejected, n(e)
            }, this._state = E.Pending, e?.(this._resolve, this._reject)
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

      function P(e) {
        return e
      }
      const {
        cbrt: O,
        sqrt: k,
        PI: N
      } = Math, A = (e, t, n, r, o) => {
        const i = t + n * e,
          s = i ** 2 + r;
        if (s > 0) {
          const e = k(s);
          return O(i + e) + O(i - e) - o
        }
        const a = O(k(i * i - s)),
          f = i ? Math.atan(k(-s) / i) : -N / 2;
        let c;
        return c = n < 0 ? (i > 0 ? 2 * N : N) - f : o < 0 ? (i > 0 ? 2 * N : -3 * N) + f : (i > 0 ? 0 : N) + f, 2 * a * Math.cos(c / 3) - o
      }, I = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function $(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return P;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          s = 3 * e,
          a = o * o,
          f = i * i,
          c = i / o,
          u = 3 * i * s / a - f * i / (a * o),
          l = 2 * s / o - f / a,
          d = l * l * l,
          p = 3 / o,
          v = 3 * t - 3 * r + 1,
          b = r - 2 * t,
          g = 3 * t,
          y = o ? A : P;
        return e => 0 === e || 1 === e ? e : I(y(e, u, p, d, c), v, b, g)
      }
      const D = (...e) => e.filter((e => e)).join(" ")
    },
    32780: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    36218: (e, t, n) => {
      var r = n(55319),
        o = n(6761),
        i = n(32780),
        s = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? o(e) : i(e)
      }
    },
    42627: (e, t, n) => {
      var r = n(58062),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      e.exports = i
    },
    44802: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    51230: (e, t, n) => {
      var r = n(42627);
      e.exports = function() {
        return r.Date.now()
      }
    },
    54375: (e, t, n) => {
      var r = n(98947),
        o = n(51230),
        i = n(93376),
        s = Math.max,
        a = Math.min;
      e.exports = function(e, t, n) {
        var f, c, u, l, d, p, v = 0,
          b = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var n = f,
            r = c;
          return f = c = void 0, v = t, l = e.apply(r, n)
        }

        function m(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - v >= u
        }

        function _() {
          var e = o();
          if (m(e)) return w(e);
          d = setTimeout(_, function(e) {
            var n = t - (e - p);
            return g ? a(n, u - (e - v)) : n
          }(e))
        }

        function w(e) {
          return d = void 0, y && f ? h(e) : (f = c = void 0, l)
        }

        function j() {
          var e = o(),
            n = m(e);
          if (f = arguments, c = this, p = e, n) {
            if (void 0 === d) return function(e) {
              return v = e, d = setTimeout(_, t), b ? h(e) : l
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(_, t), h(p)
          }
          return void 0 === d && (d = setTimeout(_, t)), l
        }
        return t = i(t) || 0, r(n) && (b = !!n.leading, u = (g = "maxWait" in n) ? s(i(n.maxWait) || 0, t) : u, y = "trailing" in n ? !!n.trailing : y), j.cancel = function() {
          void 0 !== d && clearTimeout(d), v = 0, f = p = c = d = void 0
        }, j.flush = function() {
          return void 0 === d ? l : w(o())
        }, j
      }
    },
    55319: (e, t, n) => {
      var r = n(42627).Symbol;
      e.exports = r
    },
    58062: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r
    },
    69022: (e, t, n) => {
      var r = n(69746),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    69746: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    73476: (e, t, n) => {
      var r = n(36218),
        o = n(17564);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
      }
    },
    93376: (e, t, n) => {
      var r = n(69022),
        o = n(98947),
        i = n(73476),
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
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
        var n = a.test(e);
        return n || f.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e
      }
    },
    98947: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    }
  }
]);