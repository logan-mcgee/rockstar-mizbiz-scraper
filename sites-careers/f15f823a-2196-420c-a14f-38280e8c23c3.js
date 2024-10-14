! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f15f823a-2196-420c-a14f-38280e8c23c3", e._sentryDebugIdIdentifier = "sentry-dbid-f15f823a-2196-420c-a14f-38280e8c23c3")
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
    4012: (e, a, d) => {
      d.r(a), d(3142), d(594), d(1045), d(8118), d(813), d(2306), d(4035), d(1535), d(3474), d(8863), d(7240), d(6277), d(5911), d(8372), d(442), d(6266), d(3719), d(5938), d(5669);
      var n = d(1190),
        s = d(9779),
        t = d(1716),
        r = d.n(t),
        o = d(8407),
        l = d(5662),
        i = d(2158),
        f = d(2757),
        c = d(2871),
        b = d(6632);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, b.jsx)(i.ScrollProvider, {
          children: (0, b.jsx)(s.BrowserRouter, {
            basename: "/",
            children: (0, b.jsx)(f.RockstarUserProvider, {
              children: (0, b.jsx)(c.A, {})
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