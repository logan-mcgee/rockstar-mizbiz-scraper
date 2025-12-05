try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "feb3007b-09d9-4c88-825a-c77500d358bc", e._sentryDebugIdIdentifier = "sentry-dbid-feb3007b-09d9-4c88-825a-c77500d358bc")
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
    9827: (e, d, o) => {
      var t = o(44853);
      d.H = t.createRoot, t.hydrateRoot
    },
    84120: (e, d, o) => {
      o.r(d);
      var t = o(42295),
        n = o(9827),
        a = o(9623),
        s = o(2918),
        l = o(95966),
        r = o(56006);
      const c = document.createElement("div");
      document.querySelector("body").append(c), (0, n.H)(c).render((0, t.jsx)(l.ScrollProvider, {
        children: (0, t.jsx)(a.BrowserRouter, {
          basename: "/",
          children: (0, t.jsx)(s.RockstarUserProvider, {
            children: (0, t.jsx)(r.A, {})
          })
        })
      }))
    }
  }
]);