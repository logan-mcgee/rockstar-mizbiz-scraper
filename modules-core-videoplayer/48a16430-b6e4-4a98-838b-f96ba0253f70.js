try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "48a16430-b6e4-4a98-838b-f96ba0253f70", e._sentryDebugIdIdentifier = "sentry-dbid-48a16430-b6e4-4a98-838b-f96ba0253f70")
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
    7436: (e, a, t) => {
      var o = t(2295),
        n = t(5966),
        d = t(9827),
        r = t(9623),
        l = t(1788),
        s = t(2918),
        i = t(8517),
        f = t(2542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, a] = (0, r.useSearchParams)(), t = "true" === e.get("autoplay"), d = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return d ? (0, o.jsx)(n.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: t,
                context: "embed",
                locale: f,
                id: d,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, t, o) => {
                  let n = {
                    id: String(e)
                  };
                  t && (n = {
                    ...n,
                    autoplay: String(t)
                  }), o && (n = {
                    ...n,
                    resolution: String(o)
                  }), a(n)
                }
              })
            })
          }) : null
        }, f),
        g = (0, n.withRockstarGraph)(() => (0, o.jsx)(r.BrowserRouter, {
          children: (0, o.jsx)(c, {})
        }), {
          env: u
        }),
        b = window?.env?.gtmId ?? null;
      (0, n.gtmInit)({
        id: b
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, d.H)(y).render((0, o.jsx)(g, {}))
    },
    9827: (e, a, t) => {
      var o = t(4853);
      a.H = o.createRoot, o.hydrateRoot
    }
  }
]);