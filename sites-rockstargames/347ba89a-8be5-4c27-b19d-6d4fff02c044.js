try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "347ba89a-8be5-4c27-b19d-6d4fff02c044", e._sentryDebugIdIdentifier = "sentry-dbid-347ba89a-8be5-4c27-b19d-6d4fff02c044")
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
  [4871], {
    60109(e, a, t) {
      t.r(a);
      var n = t(39793),
        o = t(93082),
        d = t(99225);
      t.d(a, ["default", 0, ({
        basename: e,
        children: a,
        history: t
      }) => {
        const [s, i] = (0, o.useState)({
          action: t.action,
          location: t.location
        });
        return (0, o.useLayoutEffect)(() => t.listen(({
          location: e,
          action: a
        }) => {
          i({
            location: e,
            action: a
          })
        }), [t]), (0, n.jsx)(d.Router, {
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