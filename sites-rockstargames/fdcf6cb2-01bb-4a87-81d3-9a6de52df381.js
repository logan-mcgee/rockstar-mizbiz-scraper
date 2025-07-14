try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fdcf6cb2-01bb-4a87-81d3-9a6de52df381", e._sentryDebugIdIdentifier = "sentry-dbid-fdcf6cb2-01bb-4a87-81d3-9a6de52df381")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3397], {
    68159: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => s
      });
      var n = t(62229),
        d = t(9623),
        o = t(25854);
      const s = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [i, l] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          l({
            location: e,
            action: a
          })
        }))), [s]), (0, o.jsx)(d.Router, {
          basename: a,
          location: i.location,
          navigationType: i.action,
          navigator: s,
          children: t
        })
      }
    }
  }
]);