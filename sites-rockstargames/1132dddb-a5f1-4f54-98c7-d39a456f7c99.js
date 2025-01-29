! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1132dddb-a5f1-4f54-98c7-d39a456f7c99", e._sentryDebugIdIdentifier = "sentry-dbid-1132dddb-a5f1-4f54-98c7-d39a456f7c99")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7586], {
    80689: (e, t, r) => {
      var n = r(20605).Symbol;
      e.exports = n
    },
    95192: (e, t, r) => {
      var n = r(80689),
        o = r(54915),
        a = r(18150),
        i = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
      }
    },
    42368: (e, t, r) => {
      var n = r(69896),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    38888: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    54915: (e, t, r) => {
      var n = r(80689),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        f = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, f),
          r = e[f];
        try {
          e[f] = void 0;
          var n = !0
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? e[f] = r : delete e[f]), o
      }
    },
    18150: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    20605: (e, t, r) => {
      var n = r(38888),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
      e.exports = a
    },
    69896: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    45757: (e, t, r) => {
      var n = r(23693),
        o = r(42204),
        a = r(79902),
        i = Math.max,
        f = Math.min;
      e.exports = function(e, t, r) {
        var u, s, c, d, l, p, b = 0,
          v = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var r = u,
            n = s;
          return u = s = void 0, b = t, d = e.apply(n, r)
        }

        function w(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || g && e - b >= c
        }

        function _() {
          var e = o();
          if (w(e)) return x(e);
          l = setTimeout(_, function(e) {
            var r = t - (e - p);
            return g ? f(r, c - (e - b)) : r
          }(e))
        }

        function x(e) {
          return l = void 0, y && u ? m(e) : (u = s = void 0, d)
        }

        function h() {
          var e = o(),
            r = w(e);
          if (u = arguments, s = this, p = e, r) {
            if (void 0 === l) return function(e) {
              return b = e, l = setTimeout(_, t), v ? m(e) : d
            }(p);
            if (g) return clearTimeout(l), l = setTimeout(_, t), m(p)
          }
          return void 0 === l && (l = setTimeout(_, t)), d
        }
        return t = a(t) || 0, n(r) && (v = !!r.leading, c = (g = "maxWait" in r) ? i(a(r.maxWait) || 0, t) : c, y = "trailing" in r ? !!r.trailing : y), h.cancel = function() {
          void 0 !== l && clearTimeout(l), b = 0, u = p = s = l = void 0
        }, h.flush = function() {
          return void 0 === l ? d : x(o())
        }, h
      }
    },
    23693: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    56490: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    69978: (e, t, r) => {
      var n = r(95192),
        o = r(56490);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
      }
    },
    42204: (e, t, r) => {
      var n = r(20605);
      e.exports = function() {
        return n.Date.now()
      }
    },
    79902: (e, t, r) => {
      var n = r(42368),
        o = r(23693),
        a = r(69978),
        i = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        s = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = f.test(e);
        return r || u.test(e) ? s(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
      }
    }
  }
]);