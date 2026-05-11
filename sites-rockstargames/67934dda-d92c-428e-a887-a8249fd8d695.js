try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "67934dda-d92c-428e-a887-a8249fd8d695", e._sentryDebugIdIdentifier = "sentry-dbid-67934dda-d92c-428e-a887-a8249fd8d695")
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
  [8461], {
    90842(e, a, t) {
      t.r(a), t.d(a, {
        default: () => s
      });
      var n = t(42295),
        o = t(71127),
        d = t(10181);
      const s = ({
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
      }
    }
  }
]);