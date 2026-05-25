try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ca3c1e89-e9ba-4fdb-8a41-9dc78de624bd", e._sentryDebugIdIdentifier = "sentry-dbid-ca3c1e89-e9ba-4fdb-8a41-9dc78de624bd")
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
    94931(e, a, t) {
      var o = t(93082),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, a, t) {
        var o, r = {},
          i = null,
          f = null;
        for (o in void 0 !== t && (i = "" + t), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) s.call(a, o) && !l.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: f,
          props: r,
          _owner: d.current
        }
      }
      a.Fragment = r, a.jsx = i, a.jsxs = i
    },
    39793(e, a, t) {
      e.exports = t(94931)
    },
    60782(e, a, t) {
      t.r(a), t.d(a, {
        default: () => s
      });
      var o = t(39793),
        n = t(93082),
        r = t(36416);
      const s = ({
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
      }
    }
  }
]);