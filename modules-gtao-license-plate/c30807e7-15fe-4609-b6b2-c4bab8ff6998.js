try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c30807e7-15fe-4609-b6b2-c4bab8ff6998", e._sentryDebugIdIdentifier = "sentry-dbid-c30807e7-15fe-4609-b6b2-c4bab8ff6998")
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
    5643(e, d, a) {
      var o = a(84017);
      d.H = o.createRoot, o.hydrateRoot
    },
    92412(e, d, a) {
      a.r(d);
      var o = a(39793),
        t = a(5643),
        n = a(36416),
        s = a(82199),
        l = a(13331),
        r = a(11180);
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