! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f7139793-b01e-4324-8e88-4caf748ce552", e._sentryDebugIdIdentifier = "sentry-dbid-f7139793-b01e-4324-8e88-4caf748ce552")
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
  [8515], {
    44970: (e, t, r) => {
      var n = r(45590).Symbol;
      e.exports = n
    },
    56203: (e, t, r) => {
      var n = r(44970),
        o = r(97390),
        a = r(65461),
        i = n ? n.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
      }
    },
    50811: (e, t, r) => {
      var n = r(72089),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
      }
    },
    94239: (e, t, r) => {
      var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = n
    },
    97390: (e, t, r) => {
      var n = r(44970),
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
    65461: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    45590: (e, t, r) => {
      var n = r(94239),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = n || o || Function("return this")();
      e.exports = a
    },
    72089: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    12296: (e, t, r) => {
      var n = r(88660),
        o = r(21383),
        a = r(48635),
        i = Math.max,
        f = Math.min;
      e.exports = function(e, t, r) {
        var u, c, s, l, d, p, b = 0,
          v = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var r = u,
            n = c;
          return u = c = void 0, b = t, l = e.apply(n, r)
        }

        function w(e) {
          var r = e - p;
          return void 0 === p || r >= t || r < 0 || g && e - b >= s
        }

        function _() {
          var e = o();
          if (w(e)) return x(e);
          d = setTimeout(_, function(e) {
            var r = t - (e - p);
            return g ? f(r, s - (e - b)) : r
          }(e))
        }

        function x(e) {
          return d = void 0, y && u ? m(e) : (u = c = void 0, l)
        }

        function h() {
          var e = o(),
            r = w(e);
          if (u = arguments, c = this, p = e, r) {
            if (void 0 === d) return function(e) {
              return b = e, d = setTimeout(_, t), v ? m(e) : l
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(_, t), m(p)
          }
          return void 0 === d && (d = setTimeout(_, t)), l
        }
        return t = a(t) || 0, n(r) && (v = !!r.leading, s = (g = "maxWait" in r) ? i(a(r.maxWait) || 0, t) : s, y = "trailing" in r ? !!r.trailing : y), h.cancel = function() {
          void 0 !== d && clearTimeout(d), b = 0, u = p = c = d = void 0
        }, h.flush = function() {
          return void 0 === d ? l : x(o())
        }, h
      }
    },
    88660: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    10939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    23771: (e, t, r) => {
      var n = r(56203),
        o = r(10939);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
      }
    },
    21383: (e, t, r) => {
      var n = r(45590);
      e.exports = function() {
        return n.Date.now()
      }
    },
    48635: (e, t, r) => {
      var n = r(50811),
        o = r(88660),
        a = r(23771),
        i = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
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
        return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : i.test(e) ? NaN : +e
      }
    }
  }
]);