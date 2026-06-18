try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1ca07bce-842e-4aa5-8863-a1e9e08a5cd6", e._sentryDebugIdIdentifier = "sentry-dbid-1ca07bce-842e-4aa5-8863-a1e9e08a5cd6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2174, 5838, 9793], {
    94931(e, t, n) {
      var a = n(93082),
        o = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var a, r = {},
          l = null,
          i = null;
        for (a in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, a) && !d.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
        return {
          $$typeof: o,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    50446(e, t, n) {
      n.d(t, {
        s: () => s,
        t: () => r
      });
      var a = n(93082);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function r(...e) {
        return t => {
          let n = !1;
          const a = e.map(e => {
            const a = o(e, t);
            return n || "function" != typeof a || (n = !0), a
          });
          if (n) return () => {
            for (let t = 0; t < a.length; t++) {
              const n = a[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return a.useCallback(r(...e), e)
      }
    }
  }
]);