! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e463b115-b261-40e0-b921-a340167aa755", e._sentryDebugIdIdentifier = "sentry-dbid-e463b115-b261-40e0-b921-a340167aa755")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [445], {
    5445: e => {
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
          b = {};
        return function e(n, f, i) {
          i = i || 1, Object.keys(n).forEach((function(d) {
            const s = n[d],
              l = o.safe && Array.isArray(s),
              u = Object.prototype.toString.call(s),
              y = t(s),
              p = "[object Object]" === u || "[object Array]" === u,
              g = f ? f + r + c(d) : c(d);
            if (!l && !y && p && Object.keys(s).length && (!o.maxDepth || i < a)) return e(s, g, i + 1);
            b[g] = s
          }))
        }(e), b
      }
      e.exports = o, o.flatten = o, o.unflatten = function e(r, a) {
        const c = (a = a || {}).delimiter || ".",
          b = a.overwrite || !1,
          f = a.transformKey || n,
          i = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function d(e) {
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
          const n = t.split(c).map(f);
          let o = d(n.shift()),
            s = d(n[0]),
            l = i;
          for (; void 0 !== s;) {
            if ("__proto__" === o) return;
            const e = Object.prototype.toString.call(l[o]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!b && !t && void 0 !== l[o]) return;
            (b && !t || !b && null == l[o]) && (l[o] = "number" != typeof s || a.object ? {} : []), l = l[o], n.length > 0 && (o = d(n.shift()), s = d(n[0]))
          }
          l[o] = e(r[t], a)
        })), i
      }
    }
  }
]);