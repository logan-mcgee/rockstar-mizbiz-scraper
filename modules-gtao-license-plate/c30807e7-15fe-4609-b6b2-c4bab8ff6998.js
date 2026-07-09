try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c30807e7-15fe-4609-b6b2-c4bab8ff6998", e._sentryDebugIdIdentifier = "sentry-dbid-c30807e7-15fe-4609-b6b2-c4bab8ff6998")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2412], {
    5643(e, a, d) {
      var o = d(84017);
      a.H = o.createRoot, o.hydrateRoot
    },
    92412(e, a, d) {
      d.r(a);
      var o = d(39793),
        t = d(5643),
        n = d(36416),
        s = d(82199),
        l = d(13331),
        r = d(11180);
      const f = document.createElement("div");
      document.querySelector("body").append(f), (0, t.H)(f).render((0, o.jsx)(l.ScrollProvider, {
        children: (0, o.jsx)(n.BrowserRouter, {
          basename: "/",
          children: (0, o.jsx)(s.RockstarUserProvider, {
            children: (0, o.jsx)(r.A, {})
          })
        })
      }))
    }
  }
]);