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
    6169: (e, a, d) => {
      d.r(a), d(3142), d(594), d(1045), d(8118), d(813), d(2306), d(4035), d(1535), d(3474), d(8863), d(7240), d(6277), d(5911), d(8372), d(442), d(6266), d(3719), d(5938), d(5669);
      var o = d(5662),
        n = d(1190),
        t = d(9779),
        l = d(2756),
        r = d(8407),
        s = d(6717),
        i = d(2757),
        c = d(6454),
        u = d(470),
        f = d(6632);
      const g = window?.env?.graphEnv ?? "prod",
        p = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: d
          }] = (0, s.getLocale)(), o = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", p = Number(e.get("start") ?? 0);
          return (0, f.jsx)(l.ResizeProvider, {
            children: (0, f.jsx)(i.GtmProvider, {
              children: (0, f.jsx)(s.IntlProvider, {
                locales: c,
                lang: d,
                children: (0, f.jsx)(u.A, {
                  autoplay: o,
                  context: "embed",
                  locale: g,
                  id: n,
                  resolution: r,
                  start: p,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: o,
                      id: e,
                      resolution: r
                    })
                  }
                })
              })
            })
          })
        },
        y = (0, r.withRockstarGraph)((() => (0, f.jsx)(t.BrowserRouter, {
          children: (0, f.jsx)(p, {})
        })), {
          env: g
        }),
        b = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: b
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.H)(w).render((0, f.jsx)(y, {}))
    }
  }
]);