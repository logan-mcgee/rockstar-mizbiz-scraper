! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cd0a4194-7951-4e80-aff8-62a14156aae1", e._sentryDebugIdIdentifier = "sentry-dbid-cd0a4194-7951-4e80-aff8-62a14156aae1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [188], {
    1188: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function o(e, o) {
        const r = (o = o || {}).delimiter || ".",
          a = o.maxDepth,
          c = o.transformKey || n,
          f = {};
        return function e(n, i, s) {
          s = s || 1, Object.keys(n).forEach((function(l) {
            const u = n[l],
              d = o.safe && Array.isArray(u),
              b = Object.prototype.toString.call(u),
              y = t(u),
              p = "[object Object]" === b || "[object Array]" === b,
              g = i ? i + r + c(l) : c(l);
            if (!d && !y && p && Object.keys(u).length && (!o.maxDepth || s < a)) return e(u, g, s + 1);
            f[g] = u
          }))
        }(e), f
      }
      e.exports = o, o.flatten = o, o.unflatten = function e(r, a) {
        const c = (a = a || {}).delimiter || ".",
          f = a.overwrite || !1,
          i = a.transformKey || n,
          s = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function l(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || a.object ? e : t
        }
        return r = Object.keys(r).reduce((function(e, t) {
          const n = Object.prototype.toString.call(r[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(r[t]) ? (e[t] = r[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, o) {
              return t[e + c + o] = n[o], t
            }), t)
          }(t, e, o(r[t], a))
        }), {}), Object.keys(r).forEach((function(t) {
          const n = t.split(c).map(i);
          let o = l(n.shift()),
            u = l(n[0]),
            d = s;
          for (; void 0 !== u;) {
            if ("__proto__" === o) return;
            const e = Object.prototype.toString.call(d[o]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!f && !t && void 0 !== d[o]) return;
            (f && !t || !f && null == d[o]) && (d[o] = "number" != typeof u || a.object ? {} : []), d = d[o], n.length > 0 && (o = l(n.shift()), u = l(n[0]))
          }
          d[o] = e(r[t], a)
        })), s
      }
    }
  }
]);
//# sourceMappingURL=98d5659e39aadd7fca591fff0efaf9d3.js.map