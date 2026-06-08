try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c81842c3-148a-45e6-8fe9-26fab9651813", e._sentryDebugIdIdentifier = "sentry-dbid-c81842c3-148a-45e6-8fe9-26fab9651813")
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
  [8401], {
    60782(e, a, t) {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(39793),
        o = t(93082),
        s = t(36416);
      const d = ({
        basename: e,
        children: a,
        history: t
      }) => {
        const [d, i] = (0, o.useState)({
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
        }), [t]), (0, n.jsx)(s.Router, {
          basename: e,
          location: d.location,
          navigationType: d.action,
          navigator: t,
          children: a
        })
      }
    }
  }
]);