try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "28afff49-b236-4448-b5f6-fd140c362728", e._sentryDebugIdIdentifier = "sentry-dbid-28afff49-b236-4448-b5f6-fd140c362728")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7674], {
    37674: (e, d, n) => {
      n(10790), n(75826), n(58533), n(79910), n(6637), n(19954), n(86099), n(85311), n(7250), n(83711), n(81016), n(38069), n(95303), n(32372), n(93293), n(35610), n(73783), n(29090), n(24165);
      var a = n(40748),
        o = n(9623),
        t = n(2918),
        s = n(95966),
        f = n(56847),
        l = n(70954);
      const r = document.createElement("div");
      document.querySelector("body").append(r), (0, a.H)(r).render((0, l.jsx)(s.ScrollProvider, {
        children: (0, l.jsx)(o.BrowserRouter, {
          basename: "/",
          children: (0, l.jsx)(t.RockstarUserProvider, {
            children: (0, l.jsx)(f.A, {})
          })
        })
      }))
    }
  }
]);