try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "277b820a-e24b-4ef3-a08e-190c15ea2252", e._sentryDebugIdIdentifier = "sentry-dbid-277b820a-e24b-4ef3-a08e-190c15ea2252")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8461], {
    90842: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(42295),
        o = t(62229),
        s = t(9623);
      const d = ({
        basename: e,
        children: a,
        history: t
      }) => {
        const [d, i] = (0, o.useState)({
          action: t.action,
          location: t.location
        });
        return (0, o.useLayoutEffect)((() => t.listen(((e, a) => {
          i({
            location: e,
            action: a
          })
        }))), [t]), (0, n.jsx)(s.Router, {
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