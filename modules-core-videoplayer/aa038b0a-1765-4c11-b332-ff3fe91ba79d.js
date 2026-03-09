try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "aa038b0a-1765-4c11-b332-ff3fe91ba79d", e._sentryDebugIdIdentifier = "sentry-dbid-aa038b0a-1765-4c11-b332-ff3fe91ba79d")
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
      var a = d(2295),
        o = d(5966),
        n = d(9827),
        r = d(9623),
        l = d(1788),
        s = d(2918),
        i = d(8517),
        f = d(2542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), d = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return n ? (0, a.jsx)(o.ResizeProvider, {
            children: (0, a.jsx)(s.GtmProvider, {
              children: (0, a.jsx)(i.A, {
                autoplay: d,
                context: "embed",
                locale: f,
                id: n,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, d, a) => {
                  let o = {
                    id: String(e)
                  };
                  d && (o = {
                    ...o,
                    autoplay: String(d)
                  }), a && (o = {
                    ...o,
                    resolution: String(a)
                  }), t(o)
                }
              })
            })
          }) : null
        }, f),
        b = (0, o.withRockstarGraph)(() => (0, a.jsx)(r.BrowserRouter, {
          children: (0, a.jsx)(c, {})
        }), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, a.jsx)(b, {}))
    },
    9827: (e, t, d) => {
      var a = d(8429);
      t.H = a.createRoot, a.hydrateRoot
    }
  }
]);