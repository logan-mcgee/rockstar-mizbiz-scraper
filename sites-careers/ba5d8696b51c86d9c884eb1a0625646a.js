! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0972314d-3f28-4a51-b8ea-cc92144feaf9", e._sentryDebugIdIdentifier = "sentry-dbid-0972314d-3f28-4a51-b8ea-cc92144feaf9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
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
        f = d(7715),
        i = d(2708),
        c = d(4944),
        g = d(3480);
      (0, l.init)();
      const u = window?.env?.graphEnv ?? "dev",
        b = (0, o.withReactiveState)((() => (0, g.jsx)(f.ScrollProvider, {
          children: (0, g.jsx)(n.BrowserRouter, {
            basename: "/",
            children: (0, g.jsx)(i.RockstarUserProvider, {
              children: (0, g.jsx)(c.c, {})
            })
          })
        })), {
          state: null
        }),
        y = (0, o.withRockstarGraph)(b, {
          env: u,
          typePolicies: {
            ...s()
          }
        });
      (0, t.C)(document.getElementById("main")).render((0, g.jsx)(y, {}))
    }
  }
]);
//# sourceMappingURL=ba5d8696b51c86d9c884eb1a0625646a.js.map