try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "28afff49-b236-4448-b5f6-fd140c362728", e._sentryDebugIdIdentifier = "sentry-dbid-28afff49-b236-4448-b5f6-fd140c362728")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7674], {
    37674: (e, d, a) => {
      a(10790), a(75826), a(58533), a(79910), a(6637), a(19954), a(86099), a(85311), a(7250), a(83711), a(81016), a(38069), a(95303), a(32372), a(93293), a(35610), a(73783), a(29090), a(24165);
      var n = a(40748),
        o = a(9623),
        t = a(2918),
        s = a(95966),
        l = a(56847),
        f = a(70954);
      const r = document.createElement("div");
      document.querySelector("body").append(r), (0, n.H)(r).render((0, f.jsx)(s.ScrollProvider, {
        children: (0, f.jsx)(o.BrowserRouter, {
          basename: "/",
          children: (0, f.jsx)(t.RockstarUserProvider, {
            children: (0, f.jsx)(l.A, {})
          })
        })
      }))
    }
  }
]);