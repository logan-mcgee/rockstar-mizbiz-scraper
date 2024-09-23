! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "71d2beb9-baf1-4f8f-81e2-e717606718f8", e._sentryDebugIdIdentifier = "sentry-dbid-71d2beb9-baf1-4f8f-81e2-e717606718f8")
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
  [952], {
    3952: (e, a, d) => {
      d.r(a), d(3142), d(594), d(1045), d(8118), d(813), d(2306), d(4035), d(1535), d(3474), d(8863), d(7240), d(6277), d(5911), d(8372), d(442), d(6266), d(3719), d(5938), d(5669);
      var n = d(1190),
        o = d(9779),
        l = d(2757),
        t = d(2158),
        s = d(8598),
        r = d(6632);
      const f = document.createElement("div");
      document.querySelector("body").append(f), (0, n.H)(f).render((0, r.jsx)(t.ScrollProvider, {
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