try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b53d44a9-2357-40fc-9108-7dc48033c5cc", e._sentryDebugIdIdentifier = "sentry-dbid-b53d44a9-2357-40fc-9108-7dc48033c5cc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3546], {
    53546: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => d
      });
      var n = t(62229),
        o = t(9623),
        s = t(70954);
      const d = e => {
        let {
          basename: a,
          children: t,
          history: d
        } = e;
        const [i, l] = (0, n.useState)({
          action: d.action,
          location: d.location
        });
        return (0, n.useLayoutEffect)((() => d.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [d]), (0, s.jsx)(o.Router, {
          basename: a,
          location: i.location,
          navigationType: i.action,
          navigator: d,
          children: t
        })
      }
    }
  }
]);