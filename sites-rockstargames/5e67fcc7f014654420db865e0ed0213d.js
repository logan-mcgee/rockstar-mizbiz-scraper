! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d8b307d9-bc10-4bac-946e-4d85b256105c", e._sentryDebugIdIdentifier = "sentry-dbid-d8b307d9-bc10-4bac-946e-4d85b256105c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [272], {
    6072: e => {
      function n(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }
      e.exports = function(e, r, o, a) {
        r = r || "&", o = o || "=";
        var s = {};
        if ("string" != typeof e || 0 === e.length) return s;
        var d = /\+/g;
        e = e.split(r);
        var c = 1e3;
        a && "number" == typeof a.maxKeys && (c = a.maxKeys);
        var f = e.length;
        c > 0 && f > c && (f = c);
        for (var i = 0; i < f; ++i) {
          var u, l, p, b, y = e[i].replace(d, "%20"),
            g = y.indexOf(o);
          g >= 0 ? (u = y.substr(0, g), l = y.substr(g + 1)) : (u = y, l = ""), p = decodeURIComponent(u), b = decodeURIComponent(l), n(s, p) ? t(s[p]) ? s[p].push(b) : s[p] = [s[p], b] : s[p] = b
        }
        return s
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    },
    5604: e => {
      var n = function(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return ""
        }
      };
      e.exports = function(e, a, s, d) {
        return a = a || "&", s = s || "=", null === e && (e = void 0), "object" == typeof e ? r(o(e), (function(o) {
          var d = encodeURIComponent(n(o)) + s;
          return t(e[o]) ? r(e[o], (function(e) {
            return d + encodeURIComponent(n(e))
          })).join(a) : d + encodeURIComponent(n(e[o]))
        })).join(a) : d ? encodeURIComponent(n(d)) + s + encodeURIComponent(n(e)) : ""
      };
      var t = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      };

      function r(e, n) {
        if (e.map) return e.map(n);
        for (var t = [], r = 0; r < e.length; r++) t.push(n(e[r], r));
        return t
      }
      var o = Object.keys || function(e) {
        var n = [];
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
      }
    },
    5272: (e, n, t) => {
      n.decode = n.parse = t(6072), n.encode = n.stringify = t(5604)
    }
  }
]);
//# sourceMappingURL=5e67fcc7f014654420db865e0ed0213d.js.map