! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5ed09914-ad34-4a88-b0ca-671c420cd128", e._sentryDebugIdIdentifier = "sentry-dbid-5ed09914-ad34-4a88-b0ca-671c420cd128")
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
  [837], {
    837: (e, a, d) => {
      d.r(a), d(8791), d(8345), d(6401), d(5395), d(5078), d(9299), d(274), d(5411), d(4053), d(5972), d(3651), d(1360), d(6198), d(3209), d(8925), d(6007), d(1132), d(739), d(3270);
      var o = d(5966),
        n = d(8074),
        t = d(9623),
        l = d(1788),
        r = d(2918),
        s = d(6454),
        i = d(9094),
        c = d(8096);
      const u = window?.env?.graphEnv ?? "prod",
        f = () => {
          const [e, a] = (0, t.useSearchParams)(), [{
            iso: d
          }] = (0, l.getLocale)(), n = "true" === e.get("autoplay"), u = e.get("id"), f = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, c.jsx)(o.ResizeProvider, {
            children: (0, c.jsx)(r.GtmProvider, {
              children: (0, c.jsx)(l.IntlProvider, {
                locales: s,
                lang: d,
                children: (0, c.jsx)(i.A, {
                  autoplay: n,
                  context: "embed",
                  locale: g,
                  id: u,
                  resolution: f,
                  start: b,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: n,
                      id: e,
                      resolution: f
                    })
                  }
                })
              })
            })
          })
        },
        g = (0, o.withRockstarGraph)((() => (0, c.jsx)(t.BrowserRouter, {
          children: (0, c.jsx)(f, {})
        })), {
          env: u
        }),
        b = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: b
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, n.H)(p).render((0, c.jsx)(g, {}))
    }
  }
]);