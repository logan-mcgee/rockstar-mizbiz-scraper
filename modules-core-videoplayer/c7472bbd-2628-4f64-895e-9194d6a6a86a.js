! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c7472bbd-2628-4f64-895e-9194d6a6a86a", e._sentryDebugIdIdentifier = "sentry-dbid-c7472bbd-2628-4f64-895e-9194d6a6a86a")
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
        u = d(6454),
        c = d(470),
        b = d(6632);
      const f = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: d
          }] = (0, s.getLocale)(), o = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, f = e.get("locale") ?? "en_us", g = Number(e.get("start") ?? 0);
          return (0, b.jsx)(l.ResizeProvider, {
            children: (0, b.jsx)(i.GtmProvider, {
              children: (0, b.jsx)(s.IntlProvider, {
                locales: u,
                lang: d,
                children: (0, b.jsx)(c.A, {
                  autoplay: o,
                  context: "embed",
                  locale: f,
                  id: n,
                  resolution: r,
                  start: g,
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
        p = (0, r.withRockstarGraph)((() => (0, b.jsx)(t.BrowserRouter, {
          children: (0, b.jsx)(g, {})
        })), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.H)(w).render((0, b.jsx)(p, {}))
    }
  }
]);