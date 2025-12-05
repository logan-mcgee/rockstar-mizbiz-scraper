try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "48a16430-b6e4-4a98-838b-f96ba0253f70", e._sentryDebugIdIdentifier = "sentry-dbid-48a16430-b6e4-4a98-838b-f96ba0253f70")
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
    7436: (e, t, o) => {
      var n = o(2295),
        a = o(5966),
        d = o(9827),
        r = o(9623),
        l = o(1788),
        s = o(2918),
        i = o(8517),
        f = o(2542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), o = "true" === e.get("autoplay"), d = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return d ? (0, n.jsx)(a.ResizeProvider, {
            children: (0, n.jsx)(s.GtmProvider, {
              children: (0, n.jsx)(i.A, {
                autoplay: o,
                context: "embed",
                locale: f,
                id: d,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, o, n) => {
                  let a = {
                    id: String(e)
                  };
                  o && (a = {
                    ...a,
                    autoplay: String(o)
                  }), n && (a = {
                    ...a,
                    resolution: String(n)
                  }), t(a)
                }
              })
            })
          }) : null
        }, f),
        b = (0, a.withRockstarGraph)(() => (0, n.jsx)(r.BrowserRouter, {
          children: (0, n.jsx)(c, {})
        }), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, a.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, d.H)(y).render((0, n.jsx)(b, {}))
    },
    9827: (e, t, o) => {
      var n = o(4853);
      t.H = n.createRoot, n.hydrateRoot
    }
  }
]);