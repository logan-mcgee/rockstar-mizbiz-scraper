try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4639c10a-0056-4381-8186-8f2f3d9d6dc6", e._sentryDebugIdIdentifier = "sentry-dbid-4639c10a-0056-4381-8186-8f2f3d9d6dc6")
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
    9827: (e, t, d) => {
      var a = d(18429);
      t.H = a.createRoot, a.hydrateRoot
    },
    87436: (e, t, d) => {
      var a = d(42295),
        o = d(58136),
        n = d(9827),
        r = d(10181),
        l = d(56990),
        s = d(61874),
        i = d(68517),
        u = d(52542);
      const f = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), d = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", u = e.get("locale") ?? "en_us", f = Number(e.get("start") ?? 0);
          return n ? (0, a.jsx)(o.ResizeProvider, {
            children: (0, a.jsx)(s.GtmProvider, {
              children: (0, a.jsx)(i.A, {
                autoplay: d,
                context: "embed",
                locale: u,
                id: n,
                resolution: l,
                start: f,
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
        }, u),
        g = (0, o.withRockstarGraph)(() => (0, a.jsx)(r.BrowserRouter, {
          children: (0, a.jsx)(c, {})
        }), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: y
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, n.H)(p).render((0, a.jsx)(g, {}))
    }
  }
]);