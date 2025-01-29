! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5ed09914-ad34-4a88-b0ca-671c420cd128", e._sentryDebugIdIdentifier = "sentry-dbid-5ed09914-ad34-4a88-b0ca-671c420cd128")
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
    837: (e, d, a) => {
      a.r(d), a(8791), a(8345), a(6401), a(5395), a(5078), a(9299), a(274), a(5411), a(4053), a(5972), a(3651), a(1360), a(6198), a(3209), a(8925), a(6007), a(1132), a(739), a(3270);
      var o = a(5966),
        n = a(8074),
        t = a(9623),
        l = a(1788),
        r = a(2918),
        s = a(6454),
        i = a(9094),
        c = a(8096);
      const f = window?.env?.graphEnv ?? "prod",
        u = () => {
          const [e, d] = (0, t.useSearchParams)(), [{
            iso: a
          }] = (0, l.getLocale)(), n = "true" === e.get("autoplay"), f = e.get("id"), u = e.get("resolution") ?? null, g = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, c.jsx)(o.ResizeProvider, {
            children: (0, c.jsx)(r.GtmProvider, {
              children: (0, c.jsx)(l.IntlProvider, {
                locales: s,
                lang: a,
                children: (0, c.jsx)(i.A, {
                  autoplay: n,
                  context: "embed",
                  locale: g,
                  id: f,
                  resolution: u,
                  start: b,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    d({
                      autoplay: n,
                      id: e,
                      resolution: u
                    })
                  }
                })
              })
            })
          })
        },
        g = (0, o.withRockstarGraph)((() => (0, c.jsx)(t.BrowserRouter, {
          children: (0, c.jsx)(u, {})
        })), {
          env: f
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