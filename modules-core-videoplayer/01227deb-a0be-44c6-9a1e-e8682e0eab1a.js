try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "01227deb-a0be-44c6-9a1e-e8682e0eab1a", e._sentryDebugIdIdentifier = "sentry-dbid-01227deb-a0be-44c6-9a1e-e8682e0eab1a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1563], {
    11563: (e, a, d) => {
      d(45008), d(33480), d(93887), d(352), d(86011), d(76412), d(29829), d(72485), d(2280), d(20293), d(31650), d(49207), d(8125), d(14978), d(67016), d(97752), d(49301), d(23e3), d(92227);
      var t = d(95966),
        o = d(14120),
        n = d(9623),
        l = d(81788),
        s = d(2918),
        r = d(41120),
        i = d(52542),
        c = d(25854);
      const u = window?.env?.graphEnv ?? "prod",
        f = (0, l.withIntl)((() => {
          const [e, a] = (0, n.useSearchParams)(), [{
            iso: d
          }] = (0, l.getLocale)(), o = "true" === e.get("autoplay"), i = e.get("id"), u = e.get("resolution") ?? null, f = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, c.jsx)(t.ResizeProvider, {
            children: (0, c.jsx)(s.GtmProvider, {
              children: (0, c.jsx)(r.A, {
                autoplay: o,
                context: "embed",
                locale: f,
                id: i,
                resolution: u,
                start: b,
                wrapper: !1,
                videoChangeCallback: e => {
                  a({
                    autoplay: o,
                    id: e,
                    resolution: u
                  })
                }
              })
            })
          })
        }), i),
        b = (0, t.withRockstarGraph)((() => (0, c.jsx)(n.BrowserRouter, {
          children: (0, c.jsx)(f, {})
        })), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: g
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, o.H)(p).render((0, c.jsx)(b, {}))
    }
  }
]);