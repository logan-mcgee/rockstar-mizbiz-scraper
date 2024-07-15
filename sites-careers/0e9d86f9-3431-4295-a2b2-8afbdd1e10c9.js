! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0e9d86f9-3431-4295-a2b2-8afbdd1e10c9", e._sentryDebugIdIdentifier = "sentry-dbid-0e9d86f9-3431-4295-a2b2-8afbdd1e10c9")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [680], {
    88680: (e, a, d) => {
      d.r(a), d(31389), d(42664), d(34904), d(46368), d(58256), d(64932), d(87440), d(53128), d(18932), d(19520), d(24264), d(69224), d(58432), d(13144), d(77571), d(84084), d(86096), d(54012), d(38592);
      var n = d(64508),
        s = d(57013),
        t = d(27864),
        r = d.n(t),
        o = d(33052),
        l = d(85092),
        i = d(77715),
        f = d(42708),
        b = d(82078),
        c = d(95240);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, c.jsx)(i.ScrollProvider, {
          children: (0, c.jsx)(s.BrowserRouter, {
            basename: "/",
            children: (0, c.jsx)(f.RockstarUserProvider, {
              children: (0, c.jsx)(b.c, {})
            })
          })
        })), {
          state: null
        }),
        w = (0, o.withRockstarGraph)(u, {
          env: g,
          typePolicies: {
            ...r()
          }
        });
      (0, n.C)(document.getElementById("main")).render((0, c.jsx)(w, {}))
    }
  }
]);