try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9686df1c-5251-41ca-b955-e84ccbf39db1", e._sentryDebugIdIdentifier = "sentry-dbid-9686df1c-5251-41ca-b955-e84ccbf39db1")
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
  [1913, 3608], {
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      var o = n(71127),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, n) {
        var o, d = {},
          l = null,
          i = null;
        for (o in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) f.call(t, o) && !s.hasOwnProperty(o) && (d[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === d[o] && (d[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: a.current
        }
      }
      t.Fragment = d, t.jsx = l, t.jsxs = l
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => f,
        t: () => d
      });
      var o = n(71127);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function d(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = r(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : r(e[t], null)
            }
          }
        }
      }

      function f(...e) {
        return o.useCallback(d(...e), e)
      }
    }
  }
]);