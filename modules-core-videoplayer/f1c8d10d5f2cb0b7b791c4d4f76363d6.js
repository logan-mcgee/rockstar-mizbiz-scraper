! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1d8d180b-ab27-4322-94d2-62a5ab865c87", e._sentryDebugIdIdentifier = "sentry-dbid-1d8d180b-ab27-4322-94d2-62a5ab865c87")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
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
        u = a(75016),
        c = a(16724),
        b = a(95240);
      const f = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, d] = (0, r.useSearchParams)(), a = (0, t.useLocale)(), o = "true" === e.get("autoplay"), n = Number(e.get("id")), l = e.get("resolution") ?? null, f = Number(e.get("start")) ?? 0;
          return (0, b.jsx)(t.ResizeProvider, {
            children: (0, b.jsx)(i.GtmProvider, {
              children: (0, b.jsx)(s.IntlProvider, {
                locales: u.intlMessages,
                lang: a,
                children: (0, b.jsx)(c.c, {
                  autoplay: o,
                  id: n,
                  context: "embed",
                  resolution: l,
                  start: f,
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
        p = (0, l.withRockstarGraph)((() => (0, b.jsx)(r.BrowserRouter, {
          children: (0, b.jsx)(g, {})
        })), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.C)(w).render((0, b.jsx)(p, {}))
    }
  }
]);
//# sourceMappingURL=f1c8d10d5f2cb0b7b791c4d4f76363d6.js.map