try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7cbc7472-85be-43e8-bb34-1cce91e41e44", e._sentryDebugIdIdentifier = "sentry-dbid-7cbc7472-85be-43e8-bb34-1cce91e41e44")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [5055], {
    7436: (e, t, o) => {
      var d = o(2295),
        a = o(5966),
        n = o(9827),
        l = o(9623),
        r = o(1788),
        s = o(2918),
        i = o(4994),
        c = o(2542);
      const f = window?.env?.graphEnv ?? "prod",
        u = (0, r.withIntl)((() => {
          const [e, t] = (0, l.useSearchParams)(), [{
            iso: o
          }] = (0, r.getLocale)(), n = "true" === e.get("autoplay"), c = e.get("id"), f = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, d.jsx)(a.ResizeProvider, {
            children: (0, d.jsx)(s.GtmProvider, {
              children: (0, d.jsx)(i.A, {
                autoplay: n,
                context: "embed",
                locale: u,
                id: c,
                resolution: f,
                start: b,
                wrapper: !1,
                videoChangeCallback: e => {
                  t({
                    autoplay: n,
                    id: e,
                    resolution: f
                  })
                }
              })
            })
          })
        }), c),
        b = (0, a.withRockstarGraph)((() => (0, d.jsx)(l.BrowserRouter, {
          children: (0, d.jsx)(u, {})
        })), {
          env: f
        }),
        g = window?.env?.gtmId ?? null;
      (0, a.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, d.jsx)(b, {}))
    },
    9827: (e, t, o) => {
      var d = o(4853);
      t.H = d.createRoot, d.hydrateRoot
    }
  }
]);