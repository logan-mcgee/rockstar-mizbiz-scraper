! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d6604458-2b81-4344-b13a-83c32293f7fc", e._sentryDebugIdIdentifier = "sentry-dbid-d6604458-2b81-4344-b13a-83c32293f7fc")
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
    33448: (e, d, a) => {
      a.r(d), a(31389), a(42664), a(34904), a(46368), a(58256), a(64932), a(87440), a(53128), a(18932), a(19520), a(24264), a(69224), a(58432), a(13144), a(77571), a(84084), a(86096), a(54012), a(38592);
      var o = a(85092),
        n = a(64508),
        t = a(57013),
        l = a(45792),
        r = a(33052),
        s = a(41272),
        i = a(42708),
        c = a(70664),
        f = a(5512),
        u = a(95240);
      const b = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, d] = (0, t.useSearchParams)(), [{
            iso: a
          }] = (0, s.getLocale)(), o = "true" === e.get("autoplay"), n = e.get("id"), r = e.get("resolution") ?? null, b = e.get("locale") ?? "en_us", g = Number(e.get("start")) ?? 0;
          return (0, u.jsx)(l.ResizeProvider, {
            children: (0, u.jsx)(i.GtmProvider, {
              children: (0, u.jsx)(s.IntlProvider, {
                locales: c,
                lang: a,
                children: (0, u.jsx)(f.c, {
                  autoplay: o,
                  context: "embed",
                  locale: b,
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
        p = (0, r.withRockstarGraph)((() => (0, u.jsx)(t.BrowserRouter, {
          children: (0, u.jsx)(g, {})
        })), {
          env: b
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