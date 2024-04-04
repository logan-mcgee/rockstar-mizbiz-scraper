! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1d8d180b-ab27-4322-94d2-62a5ab865c87", e._sentryDebugIdIdentifier = "sentry-dbid-1d8d180b-ab27-4322-94d2-62a5ab865c87")
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
  [324], {
    66324: (e, a, d) => {
      d.r(a), d(31389), d(42664), d(34904), d(46368), d(58256), d(64932), d(87440), d(53128), d(18932), d(19520), d(24264), d(69224), d(58432), d(13144), d(77571), d(84084), d(86096), d(54012), d(38592);
      var o = d(85092),
        n = d(64508),
        r = d(57013),
        t = d(45792),
        l = d(33052),
        s = d(41272),
        i = d(42708),
        u = d(75016),
        b = d(16724),
        c = d(95240);
      const f = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, a] = (0, r.useSearchParams)(), d = (0, t.useLocale)(), o = "true" === e.get("autoplay"), n = Number(e.get("id")), l = e.get("resolution") ?? null, f = Number(e.get("start")) ?? 0;
          return (0, c.jsx)(t.ResizeProvider, {
            children: (0, c.jsx)(i.GtmProvider, {
              children: (0, c.jsx)(s.IntlProvider, {
                locales: u.intlMessages,
                lang: d,
                children: (0, c.jsx)(b.c, {
                  autoplay: o,
                  id: n,
                  context: "embed",
                  resolution: l,
                  start: f,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: o,
                      id: e,
                      resolution: l
                    })
                  }
                })
              })
            })
          })
        },
        p = (0, l.withRockstarGraph)((() => (0, c.jsx)(r.BrowserRouter, {
          children: (0, c.jsx)(g, {})
        })), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.C)(w).render((0, c.jsx)(p, {}))
    }
  }
]);