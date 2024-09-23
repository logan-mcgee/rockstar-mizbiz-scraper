! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "03ce3e31-a772-4c05-94d6-e53a3d9a232a", e._sentryDebugIdIdentifier = "sentry-dbid-03ce3e31-a772-4c05-94d6-e53a3d9a232a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [169], {
    6169: (e, a, o) => {
      o.r(a), o(3142), o(594), o(1045), o(8118), o(813), o(2306), o(4035), o(1535), o(3474), o(8863), o(7240), o(6277), o(5911), o(8372), o(442), o(6266), o(3719), o(5938), o(5669);
      var d = o(5662),
        n = o(1190),
        t = o(9779),
        l = o(2756),
        r = o(8407),
        s = o(6717),
        i = o(2757),
        u = o(6454),
        c = o(470),
        f = o(6632);
      const g = window?.env?.graphEnv ?? "prod",
        b = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: o
          }] = (0, s.getLocale)(), d = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, f.jsx)(l.ResizeProvider, {
            children: (0, f.jsx)(i.GtmProvider, {
              children: (0, f.jsx)(s.IntlProvider, {
                locales: u,
                lang: o,
                children: (0, f.jsx)(c.A, {
                  autoplay: d,
                  context: "embed",
                  locale: g,
                  id: n,
                  resolution: r,
                  start: b,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: d,
                      id: e,
                      resolution: r
                    })
                  }
                })
              })
            })
          })
        },
        p = (0, r.withRockstarGraph)((() => (0, f.jsx)(t.BrowserRouter, {
          children: (0, f.jsx)(b, {})
        })), {
          env: g
        }),
        y = window?.env?.gtmId ?? null;
      (0, d.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.H)(w).render((0, f.jsx)(p, {}))
    }
  }
]);