try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d04bfe65-87b9-4ff3-84f4-76601e893d6a", e._sentryDebugIdIdentifier = "sentry-dbid-d04bfe65-87b9-4ff3-84f4-76601e893d6a")
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
  [6929, 9310], {
    94931(e, a, t) {
      var o = t(93082),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, t) {
        var o, r = {},
          l = null,
          i = null;
        for (o in void 0 !== t && (l = "" + t), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) s.call(a, o) && !f.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: d.current
        }
      }
      a.Fragment = r, a.jsx = l, a.jsxs = l
    },
    39793(e, a, t) {
      e.exports = t(94931)
    },
    19310(e, a, t) {
      t.r(a);
      var o = t(39793),
        n = t(93082),
        r = t(99225);
      t.d(a, ["default", 0, ({
        basename: e,
        children: a,
        history: t
      }) => {
        const [s, d] = (0, n.useState)({
          action: t.action,
          location: t.location
        });
        return (0, n.useLayoutEffect)(() => t.listen(({
          location: e,
          action: a
        }) => {
          d({
            location: e,
            action: a
          })
        }), [t]), (0, o.jsx)(r.Router, {
          basename: e,
          location: s.location,
          navigationType: s.action,
          navigator: t,
          children: a
        })
      }])
    }
  }
]);