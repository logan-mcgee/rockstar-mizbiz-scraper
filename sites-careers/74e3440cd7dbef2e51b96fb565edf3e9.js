! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1887538c-de0e-43cc-a8d6-dff93329c341", e._sentryDebugIdIdentifier = "sentry-dbid-1887538c-de0e-43cc-a8d6-dff93329c341")
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
    88680: (e, d, a) => {
      a.r(d), a(31389), a(42664), a(34904), a(46368), a(58256), a(64932), a(87440), a(53128), a(18932), a(19520), a(24264), a(69224), a(58432), a(13144), a(77571), a(84084), a(86096), a(54012), a(38592);
      var n = a(64508),
        s = a(57013),
        t = a(27864),
        r = a.n(t),
        o = a(33052),
        l = a(85092),
        c = a(77715),
        f = a(42708),
        i = a(82078),
        b = a(95240);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, b.jsx)(c.ScrollProvider, {
          children: (0, b.jsx)(s.BrowserRouter, {
            basename: "/",
            children: (0, b.jsx)(f.RockstarUserProvider, {
              children: (0, b.jsx)(i.c, {})
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
      (0, n.C)(document.getElementById("main")).render((0, b.jsx)(w, {}))
    }
  }
]);