! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1d8d180b-ab27-4322-94d2-62a5ab865c87", e._sentryDebugIdIdentifier = "sentry-dbid-1d8d180b-ab27-4322-94d2-62a5ab865c87")
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
    66324: (e, d, a) => {
      a.r(d), a(31389), a(42664), a(34904), a(46368), a(58256), a(64932), a(87440), a(53128), a(18932), a(19520), a(24264), a(69224), a(58432), a(13144), a(77571), a(84084), a(86096), a(54012), a(38592);
      var o = a(85092),
        n = a(64508),
        r = a(57013),
        t = a(45792),
        l = a(33052),
        s = a(41272),
        i = a(42708),
        c = a(75016),
        b = a(16724),
        f = a(95240);
      const u = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, d] = (0, r.useSearchParams)(), a = (0, t.useLocale)(), o = "true" === e.get("autoplay"), n = Number(e.get("id")), l = e.get("resolution") ?? null, u = Number(e.get("start")) ?? 0;
          return (0, f.jsx)(t.ResizeProvider, {
            children: (0, f.jsx)(i.GtmProvider, {
              children: (0, f.jsx)(s.IntlProvider, {
                locales: c.intlMessages,
                lang: a,
                children: (0, f.jsx)(b.c, {
                  autoplay: o,
                  id: n,
                  context: "embed",
                  resolution: l,
                  start: u,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    d({
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
        p = (0, l.withRockstarGraph)((() => (0, f.jsx)(r.BrowserRouter, {
          children: (0, f.jsx)(g, {})
        })), {
          env: u
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.C)(w).render((0, f.jsx)(p, {}))
    }
  }
]);