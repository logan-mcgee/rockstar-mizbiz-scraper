try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ad7946bc-4c5c-4720-b6fe-9cd1a7a863d0", e._sentryDebugIdIdentifier = "sentry-dbid-ad7946bc-4c5c-4720-b6fe-9cd1a7a863d0")
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
  [6179], {
    86179(e, d, a) {
      var o, t = a(39793),
        n = a(84017);
      o = n.createRoot, n.hydrateRoot;
      var s = a(99225),
        l = a(82199),
        r = a(13331),
        i = a(76539);
      const f = document.createElement("div");
      document.querySelector("body").append(f), o(f).render((0, t.jsx)(r.ScrollProvider, {
        children: (0, t.jsx)(s.BrowserRouter, {
          basename: "/",
          children: (0, t.jsx)(l.RockstarUserProvider, {
            children: (0, t.jsx)(i.A, {})
          })
        })
      }))
    }
  }
]);