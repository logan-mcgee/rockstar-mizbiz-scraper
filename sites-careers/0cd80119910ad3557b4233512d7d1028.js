! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a29fd0b7-b466-44f5-b70c-7da135fb1a3d", e._sentryDebugIdIdentifier = "sentry-dbid-a29fd0b7-b466-44f5-b70c-7da135fb1a3d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [132], {
    4192: (e, a, d) => {
      var t = d(9080);
      a.C = t.createRoot, t.hydrateRoot
    },
    3132: (e, a, d) => {
      d.r(a), d(5488);
      var t = d(4192),
        n = d(3557),
        r = d(7864),
        s = d.n(r),
        o = d(3052),
        l = d(5092),
        i = d(7715),
        f = d(2708),
        c = d(4944),
        b = d(3480);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, b.jsx)(i.ScrollProvider, {
          children: (0, b.jsx)(n.BrowserRouter, {
            basename: "/",
            children: (0, b.jsx)(f.RockstarUserProvider, {
              children: (0, b.jsx)(c.c, {})
            })
          })
        })), {
          state: null
        }),
        y = (0, o.withRockstarGraph)(u, {
          env: g,
          typePolicies: {
            ...s()
          }
        });
      (0, t.C)(document.getElementById("main")).render((0, b.jsx)(y, {}))
    }
  }
]);
//# sourceMappingURL=0cd80119910ad3557b4233512d7d1028.js.map