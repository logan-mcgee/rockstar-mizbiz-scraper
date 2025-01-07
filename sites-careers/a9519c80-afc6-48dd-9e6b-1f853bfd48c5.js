! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a9519c80-afc6-48dd-9e6b-1f853bfd48c5", e._sentryDebugIdIdentifier = "sentry-dbid-a9519c80-afc6-48dd-9e6b-1f853bfd48c5")
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
  [12], {
    4012: (e, d, a) => {
      a.r(d), a(3142), a(594), a(1045), a(8118), a(813), a(2306), a(4035), a(1535), a(3474), a(8863), a(7240), a(6277), a(5911), a(8372), a(442), a(6266), a(3719), a(5938), a(5669);
      var n = a(1190),
        s = a(9779),
        t = a(1716),
        r = a.n(t),
        o = a(8407),
        l = a(5662),
        c = a(2158),
        f = a(2757),
        i = a(2871),
        b = a(6632);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, b.jsx)(c.ScrollProvider, {
          children: (0, b.jsx)(s.BrowserRouter, {
            basename: "/",
            children: (0, b.jsx)(f.RockstarUserProvider, {
              children: (0, b.jsx)(i.A, {})
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
      (0, n.H)(document.getElementById("main")).render((0, b.jsx)(w, {}))
    }
  }
]);