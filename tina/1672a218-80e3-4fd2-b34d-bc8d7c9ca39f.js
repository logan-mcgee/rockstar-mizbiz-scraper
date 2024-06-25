! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1672a218-80e3-4fd2-b34d-bc8d7c9ca39f", e._sentryDebugIdIdentifier = "sentry-dbid-1672a218-80e3-4fd2-b34d-bc8d7c9ca39f")
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
  [328], {
    51328: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function n(e) {
        return e
      }

      function o(e, o) {
        const r = (o = o || {}).delimiter || ".",
          c = o.maxDepth,
          a = o.transformKey || n,
          f = {};
        return function e(n, d, i) {
          i = i || 1, Object.keys(n).forEach((function(s) {
            const b = n[s],
              l = o.safe && Array.isArray(b),
              u = Object.prototype.toString.call(b),
              y = t(b),
              p = "[object Object]" === u || "[object Array]" === u,
              g = d ? d + r + a(s) : a(s);
            if (!l && !y && p && Object.keys(b).length && (!o.maxDepth || i < c)) return e(b, g, i + 1);
            f[g] = b
          }))
        }(e), f
      }
      e.exports = o, o.flatten = o, o.unflatten = function e(r, c) {
        const a = (c = c || {}).delimiter || ".",
          f = c.overwrite || !1,
          d = c.transformKey || n,
          i = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function s(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || c.object ? e : t
        }
        return r = Object.keys(r).reduce((function(e, t) {
          const n = Object.prototype.toString.call(r[t]);
          return "[object Object]" !== n && "[object Array]" !== n || function(e) {
            const t = Object.prototype.toString.call(e),
              n = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : n ? !Object.keys(e).length : void 0)
          }(r[t]) ? (e[t] = r[t], e) : function(e, t, n) {
            return Object.keys(n).reduce((function(t, o) {
              return t[e + a + o] = n[o], t
            }), t)
          }(t, e, o(r[t], c))
        }), {}), Object.keys(r).forEach((function(t) {
          const n = t.split(a).map(d);
          let o = s(n.shift()),
            b = s(n[0]),
            l = i;
          for (; void 0 !== b;) {
            if ("__proto__" === o) return;
            const e = Object.prototype.toString.call(l[o]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!f && !t && void 0 !== l[o]) return;
            (f && !t || !f && null == l[o]) && (l[o] = "number" != typeof b || c.object ? {} : []), l = l[o], n.length > 0 && (o = s(n.shift()), b = s(n[0]))
          }
          l[o] = e(r[t], c)
        })), i
      }
    }
  }
]);