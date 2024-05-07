! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e30e8d71-2c7c-4147-9a00-d51e599e9367", e._sentryDebugIdIdentifier = "sentry-dbid-e30e8d71-2c7c-4147-9a00-d51e599e9367")
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
  [639], {
    63020: (e, a, d) => {
      d.r(a), d(31389), d(42664), d(34904), d(46368), d(58256), d(64932), d(87440), d(53128), d(18932), d(19520), d(24264), d(69224), d(58432), d(13144), d(77571), d(84084), d(86096), d(54012), d(38592);
      var n = d(64508),
        o = d(57013),
        l = d(42708),
        t = d(77715),
        s = d(47212),
        r = d(95240);
      const c = document.createElement("div");
      document.querySelector("body").append(c), (0, n.C)(c).render((0, r.jsx)(t.ScrollProvider, {
        children: (0, r.jsx)(o.BrowserRouter, {
          basename: "/",
          children: (0, r.jsx)(l.RockstarUserProvider, {
            children: (0, r.jsx)(s.c, {})
          })
        })
      }))
    }
  }
]);