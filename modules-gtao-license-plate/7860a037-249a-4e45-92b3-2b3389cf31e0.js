try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7860a037-249a-4e45-92b3-2b3389cf31e0", e._sentryDebugIdIdentifier = "sentry-dbid-7860a037-249a-4e45-92b3-2b3389cf31e0")
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
  [4120], {
    9827(e, d, a) {
      var o = a(18429);
      d.H = o.createRoot, o.hydrateRoot
    },
    84120(e, d, a) {
      a.r(d);
      var o = a(42295),
        t = a(9827),
        n = a(10181),
        s = a(82199),
        l = a(13331),
        r = a(56006);
      const i = document.createElement("div");
      document.querySelector("body").append(i), (0, t.H)(i).render((0, o.jsx)(l.ScrollProvider, {
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