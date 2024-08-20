! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b6ad44a8-f118-41b6-8439-261d5031ca91", e._sentryDebugIdIdentifier = "sentry-dbid-b6ad44a8-f118-41b6-8439-261d5031ca91")
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
    3952: (e, d, a) => {
      a.r(d), a(3142), a(594), a(1045), a(8118), a(813), a(2306), a(4035), a(1535), a(3474), a(8863), a(7240), a(6277), a(5911), a(8372), a(442), a(6266), a(3719), a(5938), a(5669);
      var n = a(1190),
        o = a(9779),
        l = a(2757),
        t = a(2158),
        s = a(8598),
        r = a(6632);
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