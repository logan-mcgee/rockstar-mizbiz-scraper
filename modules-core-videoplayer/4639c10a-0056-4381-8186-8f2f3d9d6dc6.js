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
      var o = d(18429);
      t.H = o.createRoot, o.hydrateRoot
    },
    87436: (e, t, d) => {
      var o = d(42295),
        n = d(58136),
        a = d(9827),
        r = d(10181),
        l = d(56990),
        s = d(61874),
        i = d(68517),
        f = d(52542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), d = "true" === e.get("autoplay"), a = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return a ? (0, o.jsx)(n.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: d,
                context: "embed",
                locale: f,
                id: a,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, d, o) => {
                  let n = {
                    id: String(e)
                  };
                  d && (n = {
                    ...n,
                    autoplay: String(d)
                  }), o && (n = {
                    ...n,
                    resolution: String(o)
                  }), t(n)
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
        y = window?.env?.gtmId ?? null;
      (0, n.gtmInit)({
        id: y
      });
      const b = document.createElement("main");
      document.body.appendChild(b), (0, a.H)(b).render((0, o.jsx)(g, {}))
    }
  }
]);