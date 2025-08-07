try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b53d44a9-2357-40fc-9108-7dc48033c5cc", e._sentryDebugIdIdentifier = "sentry-dbid-b53d44a9-2357-40fc-9108-7dc48033c5cc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3546], {
    53546: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var n = t(62229),
        d = t(9623),
        o = t(70954);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [f, i] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          i({
            location: e,
            action: a
          })
        }))), [s]), (0, o.jsx)(d.Router, {
          basename: a,
          location: f.location,
          navigationType: f.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);