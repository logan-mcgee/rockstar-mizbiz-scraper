try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7cbc7472-85be-43e8-bb34-1cce91e41e44", e._sentryDebugIdIdentifier = "sentry-dbid-7cbc7472-85be-43e8-bb34-1cce91e41e44")
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
    7436: (e, d, t) => {
      var o = t(2295),
        a = t(5966),
        n = t(9827),
        l = t(9623),
        r = t(1788),
        s = t(2918),
        i = t(4994),
        c = t(2542);
      const u = window?.env?.graphEnv ?? "prod",
        f = (0, r.withIntl)((() => {
          const [e, d] = (0, l.useSearchParams)(), [{
            iso: t
          }] = (0, r.getLocale)(), n = "true" === e.get("autoplay"), c = e.get("id"), u = e.get("resolution") ?? null, f = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, o.jsx)(a.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: n,
                context: "embed",
                locale: f,
                id: c,
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
        }), c),
        b = (0, a.withRockstarGraph)((() => (0, o.jsx)(l.BrowserRouter, {
          children: (0, o.jsx)(f, {})
        })), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, a.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, o.jsx)(b, {}))
    },
    9827: (e, d, t) => {
      var o = t(4853);
      d.H = o.createRoot, o.hydrateRoot
    }
  }
]);