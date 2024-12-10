! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c7472bbd-2628-4f64-895e-9194d6a6a86a", e._sentryDebugIdIdentifier = "sentry-dbid-c7472bbd-2628-4f64-895e-9194d6a6a86a")
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
    6169: (e, d, a) => {
      a.r(d), a(3142), a(594), a(1045), a(8118), a(813), a(2306), a(4035), a(1535), a(3474), a(8863), a(7240), a(6277), a(5911), a(8372), a(442), a(6266), a(3719), a(5938), a(5669);
      var o = a(5662),
        n = a(1190),
        t = a(9779),
        l = a(2756),
        r = a(8407),
        s = a(6717),
        i = a(2757),
        b = a(6454),
        u = a(470),
        c = a(6632);
      const f = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, d] = (0, t.useSearchParams)(), [{
            iso: a
          }] = (0, s.getLocale)(), o = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, f = e.get("locale") ?? "en_us", g = Number(e.get("start") ?? 0);
          return (0, c.jsx)(l.ResizeProvider, {
            children: (0, c.jsx)(i.GtmProvider, {
              children: (0, c.jsx)(s.IntlProvider, {
                locales: b,
                lang: a,
                children: (0, c.jsx)(u.A, {
                  autoplay: o,
                  context: "embed",
                  locale: f,
                  id: n,
                  resolution: r,
                  start: g,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    d({
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
        p = (0, r.withRockstarGraph)((() => (0, c.jsx)(t.BrowserRouter, {
          children: (0, c.jsx)(g, {})
        })), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.H)(w).render((0, c.jsx)(p, {}))
    }
  }
]);