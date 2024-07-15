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
    33448: (e, a, o) => {
      o.r(a), o(31389), o(42664), o(34904), o(46368), o(58256), o(64932), o(87440), o(53128), o(18932), o(19520), o(24264), o(69224), o(58432), o(13144), o(77571), o(84084), o(86096), o(54012), o(38592);
      var d = o(85092),
        n = o(64508),
        t = o(57013),
        l = o(45792),
        r = o(33052),
        s = o(41272),
        i = o(42708),
        c = o(70664),
        u = o(5512),
        f = o(95240);
      const g = window?.env?.graphEnv ?? "prod",
        b = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: o
          }] = (0, s.getLocale)(), d = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, f.jsx)(l.ResizeProvider, {
            children: (0, f.jsx)(i.GtmProvider, {
              children: (0, f.jsx)(s.IntlProvider, {
                locales: c,
                lang: o,
                children: (0, f.jsx)(u.c, {
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
      document.body.appendChild(w), (0, n.C)(w).render((0, f.jsx)(p, {}))
    }
  }
]);