try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "57bcc1c5-e64e-4dfe-8f4c-28ae9a4ab08b", e._sentryDebugIdIdentifier = "sentry-dbid-57bcc1c5-e64e-4dfe-8f4c-28ae9a4ab08b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [9158], {
    9738: (e, t, r) => {
      var n = r(56130),
        o = r(28593),
        i = r(22909),
        a = Math.max,
        f = Math.min;
      e.exports = function(e, t, r) {
        var u, d, s, l, c, p, v = 0,
          b = !1,
          y = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function _(t) {
          var r = u,
            n = d;
          return u = d = void 0, v = t, l = e.apply(n, r)
        }

        function h(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || y && e - v >= s
        }

        function m() {
          var e = o();
          if (h(e)) return w(e);
          c = setTimeout(m, function(e) {
            var r = t - (e - p);
            return y ? f(r, s - (e - v)) : r
          }(e))
        }

        function w(e) {
          return c = void 0, g && u ? _(e) : (u = d = void 0, l)
        }

        function x() {
          var e = o(),
            r = h(e);
          if (u = arguments, d = this, p = e, r) {
            if (void 0 === c) return function(e) {
              return v = e, c = setTimeout(m, t), b ? _(e) : l
            }(p);
            if (y) return clearTimeout(c), c = setTimeout(m, t), _(p)
          }
          return void 0 === c && (c = setTimeout(m, t)), l
        }
        return t = i(t) || 0, n(r) && (b = !!r.leading, s = (y = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : s, g = "trailing" in r ? !!r.trailing : g), x.cancel = function() {
          void 0 !== c && clearTimeout(c), v = 0, u = p = d = c = void 0
        }, x.flush = function() {
          return void 0 === c ? l : w(o())
        }, x
      }
    },
    10533: (e, t, r) => {
      var n = r(86601);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    10613: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
      }
    },
    22909: (e, t, r) => {
      var n = r(87625),
        o = r(56130),
        i = r(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = f.test(e);
        return r || u.test(e) ? d(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    28593: (e, t, r) => {
      var n = r(15036);
      e.exports = function() {
        return n.Date.now()
      }
    },
    31454: (e, t, r) => {
      var n = r(49192);
      e.exports = function(e) {
        return n(e, 5)
      }
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, i) {
        for (var a = -1, f = r(t((n - e) / (o || 1)), 0), u = Array(f); f--;) u[i ? f : ++a] = e, e += o;
        return u
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var n = r(56312),
        o = r(78328),
        i = r(21574),
        a = r(56130),
        f = r(81966);
      e.exports = function(e, t, r, u) {
        if (!a(e)) return e;
        for (var d = -1, s = (t = o(t, e)).length, l = s - 1, c = e; null != c && ++d < s;) {
          var p = f(t[d]),
            v = r;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (d != l) {
            var b = c[p];
            void 0 === (v = u ? u(b, p, c) : void 0) && (v = a(b) ? b : i(t[d + 1]) ? [] : {})
          }
          n(c, p, v), c = c[p]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var n = r(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    95187: (e, t, r) => {
      var n = r(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    98312: (e, t, r) => {
      var n = r(99335)();
      e.exports = n
    },
    99335: (e, t, r) => {
      var n = r(75888),
        o = r(4661),
        i = r(95187);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
        }
      }
    }
  }
]);