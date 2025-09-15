try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d1c0e5ed-a89f-4a97-aa51-af893f6a55cf", e._sentryDebugIdIdentifier = "sentry-dbid-d1c0e5ed-a89f-4a97-aa51-af893f6a55cf")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "e75daf86583d2f46160d46d6e78dabbc975e828b",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "e75daf86583d2f46160d46d6e78dabbc975e828b"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4120], {
    9827: (e, d, a) => {
      var o = a(44853);
      d.H = o.createRoot, o.hydrateRoot
    },
    84120: (e, d, a) => {
      a.r(d);
      var o = a(42295),
        t = a(9827),
        n = a(9623),
        s = a(2918),
        l = a(95966),
        r = a(56006);
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