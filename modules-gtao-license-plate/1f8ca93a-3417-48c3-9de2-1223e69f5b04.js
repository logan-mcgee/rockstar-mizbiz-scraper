try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1f8ca93a-3417-48c3-9de2-1223e69f5b04", e._sentryDebugIdIdentifier = "sentry-dbid-1f8ca93a-3417-48c3-9de2-1223e69f5b04")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [420], {
    80420: (e, d, a) => {
      a(45008), a(33480), a(93887), a(352), a(86011), a(76412), a(29829), a(72485), a(2280), a(20293), a(31650), a(49207), a(8125), a(14978), a(67016), a(97752), a(49301), a(23e3), a(92227);
      var n = a(14120),
        o = a(9623),
        t = a(2918),
        s = a(95966),
        l = a(90642),
        r = a(25854);
      const f = document.createElement("div");
      document.querySelector("body").append(f), (0, n.H)(f).render((0, r.jsx)(s.ScrollProvider, {
        children: (0, r.jsx)(o.BrowserRouter, {
          basename: "/",
          children: (0, r.jsx)(t.RockstarUserProvider, {
            children: (0, r.jsx)(l.A, {})
          })
        })
      }))
    }
  }
]);