! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ffe89674-dd38-4f93-ae0a-34e1121b0570", e._sentryDebugIdIdentifier = "sentry-dbid-ffe89674-dd38-4f93-ae0a-34e1121b0570")
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
  [1590], {
    21590: (e, d, a) => {
      a.r(d), a(44980), a(2876), a(74395), a(93180), a(43759), a(54936), a(66945), a(38585), a(71436), a(98073), a(30014), a(94323), a(6929), a(99598), a(26804), a(76580), a(32033), a(63612), a(62567);
      var n = a(40347),
        o = a(9623),
        l = a(2918),
        t = a(95966),
        s = a(1069),
        r = a(73855);
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