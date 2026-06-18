try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "948f9db2-972d-4cfe-9f9c-d9c010cc8328", e._sentryDebugIdIdentifier = "sentry-dbid-948f9db2-972d-4cfe-9f9c-d9c010cc8328")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [782, 8401], {
    94931(e, t, o) {
      var a = o(93082),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, o) {
        var a, r = {},
          l = null,
          i = null;
        for (a in void 0 !== o && (l = "" + o), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, a) && !f.hasOwnProperty(a) && (r[a] = t[a]);
        if (e && e.defaultProps)
          for (a in t = e.defaultProps) void 0 === r[a] && (r[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: d.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    60782(e, t, o) {
      o.r(t), o.d(t, {
        default: () => s
      });
      var a = o(39793),
        n = o(93082),
        r = o(36416);
      const s = ({
        basename: e,
        children: t,
        history: o
      }) => {
        const [s, d] = (0, n.useState)({
          action: o.action,
          location: o.location
        });
        return (0, n.useLayoutEffect)(() => o.listen(({
          location: e,
          action: t
        }) => {
          d({
            location: e,
            action: t
          })
        }), [o]), (0, a.jsx)(r.Router, {
          basename: e,
          location: s.location,
          navigationType: s.action,
          navigator: o,
          children: t
        })
      }
    }
  }
]);