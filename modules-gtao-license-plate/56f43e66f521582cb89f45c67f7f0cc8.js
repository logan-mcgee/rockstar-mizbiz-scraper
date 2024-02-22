! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f08e59e0-b96b-49e8-adc5-83610823f65f", e._sentryDebugIdIdentifier = "sentry-dbid-f08e59e0-b96b-49e8-adc5-83610823f65f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [944], {
    2840: (e, a, d) => {
      var o = d(4768);
      a.C = o.createRoot, o.hydrateRoot
    },
    9944: (e, a, d) => {
      d.r(a), d(5488);
      var o = d(2840),
        n = d(1916),
        t = d(2708),
        l = d(7715),
        r = d(6812),
        s = d(3480);
      const f = document.createElement("div");
      document.querySelector("body").append(f), (0, o.C)(f).render((0, s.jsx)(l.ScrollProvider, {
        children: (0, s.jsx)(n.BrowserRouter, {
          basename: "/",
          children: (0, s.jsx)(t.RockstarUserProvider, {
            children: (0, s.jsx)(r.c, {})
          })
        })
      }))
    }
  }
]);
//# sourceMappingURL=56f43e66f521582cb89f45c67f7f0cc8.js.map