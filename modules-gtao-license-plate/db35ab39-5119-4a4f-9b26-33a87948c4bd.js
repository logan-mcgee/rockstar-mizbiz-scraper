! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "db35ab39-5119-4a4f-9b26-33a87948c4bd", e._sentryDebugIdIdentifier = "sentry-dbid-db35ab39-5119-4a4f-9b26-33a87948c4bd")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [420], {
    80420: (e, a, d) => {
      d(45008), d(33480), d(93887), d(352), d(86011), d(76412), d(29829), d(72485), d(2280), d(20293), d(31650), d(49207), d(8125), d(14978), d(67016), d(97752), d(49301), d(23e3), d(92227);
      var t = d(14120),
        l = d(9623),
        o = d(2918),
        n = d(95966),
        s = d(90642),
        r = d(25854);
      const b = document.createElement("div");
      document.querySelector("body").append(b), (0, t.H)(b).render((0, r.jsx)(n.ScrollProvider, {
        children: (0, r.jsx)(l.BrowserRouter, {
          basename: "/",
          children: (0, r.jsx)(o.RockstarUserProvider, {
            children: (0, r.jsx)(s.A, {})
          })
        })
      }))
    }
  }
]);