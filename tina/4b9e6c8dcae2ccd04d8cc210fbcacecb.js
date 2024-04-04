! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f4f42608-4e5a-4a94-84fa-35cf32f65db5", e._sentryDebugIdIdentifier = "sentry-dbid-f4f42608-4e5a-4a94-84fa-35cf32f65db5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
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
          f = o.maxDepth,
          a = o.transformKey || n,
          c = {};
        return function e(n, i, s) {
          s = s || 1, Object.keys(n).forEach((function(b) {
            const l = n[b],
              u = o.safe && Array.isArray(l),
              d = Object.prototype.toString.call(l),
              y = t(l),
              p = "[object Object]" === d || "[object Array]" === d,
              g = i ? i + r + a(b) : a(b);
            if (!u && !y && p && Object.keys(l).length && (!o.maxDepth || s < f)) return e(l, g, s + 1);
            c[g] = l
          }))
        }(e), c
      }
      e.exports = o, o.flatten = o, o.unflatten = function e(r, f) {
        const a = (f = f || {}).delimiter || ".",
          c = f.overwrite || !1,
          i = f.transformKey || n,
          s = {};
        if (t(r) || "[object Object]" !== Object.prototype.toString.call(r)) return r;

        function b(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || f.object ? e : t
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
          }(t, e, o(r[t], f))
        }), {}), Object.keys(r).forEach((function(t) {
          const n = t.split(a).map(i);
          let o = b(n.shift()),
            l = b(n[0]),
            u = s;
          for (; void 0 !== l;) {
            if ("__proto__" === o) return;
            const e = Object.prototype.toString.call(u[o]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!c && !t && void 0 !== u[o]) return;
            (c && !t || !c && null == u[o]) && (u[o] = "number" != typeof l || f.object ? {} : []), u = u[o], n.length > 0 && (o = b(n.shift()), l = b(n[0]))
          }
          u[o] = e(r[t], f)
        })), s
      }
    }
  }
]);
//# sourceMappingURL=4b9e6c8dcae2ccd04d8cc210fbcacecb.js.map