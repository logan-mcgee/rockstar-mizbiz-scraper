try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7cbc7472-85be-43e8-bb34-1cce91e41e44", e._sentryDebugIdIdentifier = "sentry-dbid-7cbc7472-85be-43e8-bb34-1cce91e41e44")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [5055], {
    7436: (e, t, d) => {
      var o = d(2295),
        a = d(5966),
        n = d(9827),
        l = d(9623),
        r = d(1788),
        s = d(2918),
        i = d(4994),
        c = d(2542);
      const u = window?.env?.graphEnv ?? "prod",
        b = (0, r.withIntl)((() => {
          const [e, t] = (0, l.useSearchParams)(), [{
            iso: d
          }] = (0, r.getLocale)(), n = "true" === e.get("autoplay"), c = e.get("id"), u = e.get("resolution") ?? null, b = e.get("locale") ?? "en_us", f = Number(e.get("start") ?? 0);
          return (0, o.jsx)(a.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: n,
                context: "embed",
                locale: b,
                id: c,
                resolution: u,
                start: f,
                wrapper: !1,
                videoChangeCallback: e => {
                  t({
                    autoplay: n,
                    id: e,
                    resolution: u
                  })
                }
              })
            })
          })
        }), c),
        f = (0, a.withRockstarGraph)((() => (0, o.jsx)(l.BrowserRouter, {
          children: (0, o.jsx)(b, {})
        })), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, a.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, o.jsx)(f, {}))
    },
    9827: (e, t, d) => {
      var o = d(4853);
      t.H = o.createRoot, o.hydrateRoot
    }
  }
]);