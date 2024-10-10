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
    4012: (e, a, n) => {
      n.r(a), n(3142), n(594), n(1045), n(8118), n(813), n(2306), n(4035), n(1535), n(3474), n(8863), n(7240), n(6277), n(5911), n(8372), n(442), n(6266), n(3719), n(5938), n(5669);
      var d = n(1190),
        s = n(9779),
        t = n(1716),
        r = n.n(t),
        o = n(8407),
        l = n(5662),
        f = n(2158),
        i = n(2757),
        c = n(2871),
        b = n(6632);
      (0, l.init)();
      const g = window?.env?.graphEnv ?? "dev",
        u = (0, o.withReactiveState)((() => (0, b.jsx)(f.ScrollProvider, {
          children: (0, b.jsx)(s.BrowserRouter, {
            basename: "/",
            children: (0, b.jsx)(i.RockstarUserProvider, {
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
      (0, d.H)(document.getElementById("main")).render((0, b.jsx)(w, {}))
    }
  }
]);