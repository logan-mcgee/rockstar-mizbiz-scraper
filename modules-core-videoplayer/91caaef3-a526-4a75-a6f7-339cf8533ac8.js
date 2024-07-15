! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "91caaef3-a526-4a75-a6f7-339cf8533ac8", e._sentryDebugIdIdentifier = "sentry-dbid-91caaef3-a526-4a75-a6f7-339cf8533ac8")
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
  [448], {
    33448: (e, a, d) => {
      d.r(a), d(31389), d(42664), d(34904), d(46368), d(58256), d(64932), d(87440), d(53128), d(18932), d(19520), d(24264), d(69224), d(58432), d(13144), d(77571), d(84084), d(86096), d(54012), d(38592);
      var o = d(85092),
        n = d(64508),
        t = d(57013),
        l = d(45792),
        r = d(33052),
        s = d(41272),
        i = d(42708),
        c = d(70664),
        f = d(5512),
        u = d(95240);
      const g = window?.env?.graphEnv ?? "prod",
        b = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: d
          }] = (0, s.getLocale)(), o = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, u.jsx)(l.ResizeProvider, {
            children: (0, u.jsx)(i.GtmProvider, {
              children: (0, u.jsx)(s.IntlProvider, {
                locales: c,
                lang: d,
                children: (0, u.jsx)(f.c, {
                  autoplay: o,
                  context: "embed",
                  locale: g,
                  id: n,
                  resolution: r,
                  start: b,
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
        p = (0, r.withRockstarGraph)((() => (0, u.jsx)(t.BrowserRouter, {
          children: (0, u.jsx)(b, {})
        })), {
          env: g
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.C)(w).render((0, u.jsx)(p, {}))
    }
  }
]);