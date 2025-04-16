! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ffe89674-dd38-4f93-ae0a-34e1121b0570", e._sentryDebugIdIdentifier = "sentry-dbid-ffe89674-dd38-4f93-ae0a-34e1121b0570")
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
    21590: (e, a, d) => {
      d.r(a), d(44980), d(2876), d(74395), d(93180), d(43759), d(54936), d(66945), d(38585), d(71436), d(98073), d(30014), d(94323), d(6929), d(99598), d(26804), d(76580), d(32033), d(63612), d(62567);
      var n = d(40347),
        o = d(9623),
        l = d(2918),
        t = d(95966),
        s = d(1069),
        r = d(73855);
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