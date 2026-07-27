try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df2f8c5a-532e-4f0f-b956-f480ecfb537b", e._sentryDebugIdIdentifier = "sentry-dbid-df2f8c5a-532e-4f0f-b956-f480ecfb537b")
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
  [109, 4871], {
    94931(e, t, a) {
      var o = a(93082),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var o, r = {},
          l = null,
          i = null;
        for (o in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) s.call(t, o) && !d.hasOwnProperty(o) && (r[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === r[o] && (r[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: r,
          _owner: f.current
        }
      }
      t.Fragment = r, t.jsx = l, t.jsxs = l
    },
    39793(e, t, a) {
      e.exports = a(94931)
    },
    60109(e, t, a) {
      a.r(t);
      var o = a(39793),
        n = a(93082),
        r = a(99225);
      a.d(t, ["default", 0, ({
        basename: e,
        children: t,
        history: a
      }) => {
        const [s, f] = (0, n.useState)({
          action: a.action,
          location: a.location
        });
        return (0, n.useLayoutEffect)(() => a.listen(({
          location: e,
          action: t
        }) => {
          f({
            location: e,
            action: t
          })
        }), [a]), (0, o.jsx)(r.Router, {
          basename: e,
          location: s.location,
          navigationType: s.action,
          navigator: a,
          children: t
        })
      }])
    }
  }
]);