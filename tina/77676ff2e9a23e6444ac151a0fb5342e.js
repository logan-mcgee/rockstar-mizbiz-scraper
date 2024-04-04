! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f4f42608-4e5a-4a94-84fa-35cf32f65db5", e._sentryDebugIdIdentifier = "sentry-dbid-f4f42608-4e5a-4a94-84fa-35cf32f65db5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [328], {
    1328: e => {
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
        return function e(n, i, d) {
          d = d || 1, Object.keys(n).forEach((function(s) {
            const l = n[s],
              u = o.safe && Array.isArray(l),
              b = Object.prototype.toString.call(l),
              y = t(l),
              p = "[object Object]" === b || "[object Array]" === b,
              g = i ? i + r + c(s) : c(s);
            if (!u && !y && p && Object.keys(l).length && (!o.maxDepth || d < a)) return e(l, g, d + 1);
            f[g] = l
          }))
        }(e), f
      }
      e.exports = o, o.flatten = o, o.unflatten = function e(r, a) {
        const c = (a = a || {}).delimiter || ".",
          f = a.overwrite || !1,
          i = a.transformKey || n,
          d = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function s(e) {
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
          let o = s(n.shift()),
            l = s(n[0]),
            u = d;
          for (; void 0 !== l;) {
            if ("__proto__" === o) return;
            const e = Object.prototype.toString.call(u[o]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!f && !t && void 0 !== u[o]) return;
            (f && !t || !f && null == u[o]) && (u[o] = "number" != typeof l || a.object ? {} : []), u = u[o], n.length > 0 && (o = s(n.shift()), l = s(n[0]))
          }
          u[o] = e(r[t], a)
        })), d
      }
    }
  }
]);
//# sourceMappingURL=77676ff2e9a23e6444ac151a0fb5342e.js.map