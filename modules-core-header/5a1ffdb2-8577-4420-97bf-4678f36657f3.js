try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a1ffdb2-8577-4420-97bf-4678f36657f3", e._sentryDebugIdIdentifier = "sentry-dbid-5a1ffdb2-8577-4420-97bf-4678f36657f3")
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
  [507, 2888], {
    5060: (e, t, r) => {
      "use strict";

      function n(e) {
        var t, r, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (r = n(e[t])) && (o && (o += " "), o += r)
          } else
            for (r in e) e[r] && (o && (o += " "), o += r);
        return o
      }

      function o() {
        for (var e, t, r = 0, o = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = n(e)) && (o && (o += " "), o += t);
        return o
      }
      r.d(t, {
        $: () => o,
        A: () => i
      });
      const i = o
    },
    6761: (e, t, r) => {
      var n = r(55319),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        a = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = i.call(e, a),
          r = e[a];
        try {
          e[a] = void 0;
          var n = !0
        } catch (e) {}
        var o = s.call(e);
        return n && (t ? e[a] = r : delete e[a]), o
      }
    },
    17564: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    32780: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    32888: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        ExternalPromise: () => M,
        IS_SERVER: () => n,
        PromiseState: () => S,
        clone: () => m,
        cubicBezier: () => $,
        debounce: () => E,
        filterEventProps: () => l,
        get: () => x,
        merge: () => g,
        mergeProps: () => f,
        omit: () => v,
        range: () => p,
        set: () => w,
        throttle: () => T
      });
      const n = "undefined" == typeof window;
      var o = r(5060);
      const i = new Map;

      function s(e, t) {
        if (e === t) return e;
        const r = i.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = i.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function f(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              i = n[e];
            "function" == typeof r && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(r, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof i ? "id" === e && r && i ? t.id = s(r, i) : t[e] = void 0 !== i ? i : r : t[e] = (0, o.$)(r, i)
          }
        }
        return t
      }
      const u = /^(on.*)$/,
        c = /^(onPress.*)$/;

      function l(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (c.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : u.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      var d = r(7415);

      function p(e) {
        return d(e)
      }
      var b = r(52953);

      function v(e, ...t) {
        return b(e, ...t)
      }
      var y = r(87090);

      function g(e, t) {
        return y(e, t)
      }
      var h = r(98097);

      function m(e) {
        return h(e)
      }
      var _ = r(76030);

      function w(e, t, r, n) {
        return _(e, t, r, n)
      }
      var j = r(62670);

      function x(e, t) {
        return j(e, t)
      }
      var E = r(54375);
      const T = (e, t) => {
        let r = 0;
        return (...n) => {
          const o = Date.now();
          o - r >= t && (r = o, e(...n))
        }
      };
      var S;
      ! function(e) {
        e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
      }(S || (S = {}));
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
          this._promise = new Promise(((t, r) => {
            this._resolve = e => {
              this._state = S.Fulfilled, t(e)
            }, this._reject = e => {
              this._state = S.Rejected, r(e)
            }, this._state = S.Pending, e?.(this._resolve, this._reject)
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
      } = Math, A = (e, t, r, n, o) => {
        const i = t + r * e,
          s = i ** 2 + n;
        if (s > 0) {
          const e = k(s);
          return O(i + e) + O(i - e) - o
        }
        const a = O(k(i * i - s)),
          f = i ? Math.atan(k(-s) / i) : -N / 2;
        let u;
        return u = r < 0 ? (i > 0 ? 2 * N : N) - f : o < 0 ? (i > 0 ? 2 * N : -3 * N) + f : (i > 0 ? 0 : N) + f, 2 * a * Math.cos(u / 3) - o
      }, I = (e, t, r, n) => ((t * e + 3 * r) * e + n) * e;

      function $(e, t, r, n) {
        if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && r === n) return P;
        const o = 6 * (3 * e - 3 * r + 1),
          i = 6 * (r - 2 * e),
          s = 3 * e,
          a = o * o,
          f = i * i,
          u = i / o,
          c = 3 * i * s / a - f * i / (a * o),
          l = 2 * s / o - f / a,
          d = l * l * l,
          p = 3 / o,
          b = 3 * t - 3 * n + 1,
          v = n - 2 * t,
          y = 3 * t,
          g = o ? A : P;
        return e => 0 === e || 1 === e ? e : I(g(e, c, p, d, u), b, v, y)
      }
    },
    36218: (e, t, r) => {
      var n = r(55319),
        o = r(6761),
        i = r(32780),
        s = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? o(e) : i(e)
      }
    },
    42627: (e, t, r) => {
      var n = r(58062),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = n || o || Function("return this")();
      e.exports = i
    },
    51230: (e, t, r) => {
      var n = r(42627);
      e.exports = function() {
        return n.Date.now()
      }
    },
    54375: (e, t, r) => {
      var n = r(98947),
        o = r(51230),
        i = r(93376),
        s = Math.max,
        a = Math.min;
      e.exports = function(e, t, r) {
        var f, u, c, l, d, p, b = 0,
          v = !1,
          y = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function h(t) {
          var r = f,
            n = u;
          return f = u = void 0, b = t, l = e.apply(n, r)
        }

        function m(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || y && e - b >= c
        }

        function _() {
          var e = o();
          if (m(e)) return w(e);
          d = setTimeout(_, function(e) {
            var r = t - (e - p);
            return y ? a(r, c - (e - b)) : r
          }(e))
        }

        function w(e) {
          return d = void 0, g && f ? h(e) : (f = u = void 0, l)
        }

        function j() {
          var e = o(),
            r = m(e);
          if (f = arguments, u = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return b = e, d = setTimeout(_, t), v ? h(e) : l
            }(p);
            if (y) return clearTimeout(d), d = setTimeout(_, t), h(p)
          }
          return void 0 === d && (d = setTimeout(_, t)), l
        }
        return t = i(t) || 0, n(r) && (v = !!r.leading, c = (y = "maxWait" in r) ? s(i(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), j.cancel = function() {
          void 0 !== d && clearTimeout(d), b = 0, f = p = u = d = void 0
        }, j.flush = function() {
          return void 0 === d ? l : w(o())
        }, j
      }
    },
    55319: (e, t, r) => {
      var n = r(42627).Symbol;
      e.exports = n
    },
    58062: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    69022: (e, t, r) => {
      var n = r(69746),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    69746: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    73476: (e, t, r) => {
      var n = r(36218),
        o = r(17564);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
      }
    },
    93376: (e, t, r) => {
      var n = r(69022),
        o = r(98947),
        i = r(73476),
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        f = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = a.test(e);
        return r || f.test(e) ? u(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
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