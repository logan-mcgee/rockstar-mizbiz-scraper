! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "389cac96-3857-43cf-947a-a1cda32ba87f", e._sentryDebugIdIdentifier = "sentry-dbid-389cac96-3857-43cf-947a-a1cda32ba87f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [5465], {
    85465: (e, a, d) => {
      d.r(a), d(11138), d(10206), d(75177), d(34554), d(87065), d(15222), d(77655), d(8075), d(13950), d(66699), d(15980), d(28681), d(62563), d(11416), d(86670), d(47934), d(42555), d(17982), d(63761);
      var n = d(91689),
        o = d(9623),
        l = d(2918),
        t = d(95966),
        s = d(55666),
        r = d(91029);
      const c = document.createElement("div");
      document.querySelector("body").append(c), (0, n.H)(c).render((0, r.jsx)(t.ScrollProvider, {
        children: (0, r.jsx)(o.BrowserRouter, {
          basename: "/",
          children: (0, r.jsx)(l.RockstarUserProvider, {
            children: (0, r.jsx)(s.A, {})
          })
        })
      }))
    }
  }
]);