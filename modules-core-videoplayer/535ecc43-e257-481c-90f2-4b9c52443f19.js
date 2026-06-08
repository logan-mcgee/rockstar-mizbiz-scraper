try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "535ecc43-e257-481c-90f2-4b9c52443f19", e._sentryDebugIdIdentifier = "sentry-dbid-535ecc43-e257-481c-90f2-4b9c52443f19")
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
  [837], {
    5643(e, t, d) {
      var o = d(4017);
      t.H = o.createRoot, o.hydrateRoot
    },
    7837(e, t, d) {
      var o = d(9793),
        n = d(3331),
        a = d(5643),
        r = d(6416),
        l = d(2909),
        s = d(2199),
        i = d(9599),
        c = d(2542);
      const u = window?.env?.graphEnv ?? "prod",
        f = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), d = "true" === e.get("autoplay"), a = e.get("id"), l = e.get("resolution") ?? "", c = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return a ? (0, o.jsx)(n.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: d,
                context: "embed",
                locale: c,
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
        }, c),
        g = (0, n.withRockstarGraph)(() => (0, o.jsx)(r.BrowserRouter, {
          children: (0, o.jsx)(f, {})
        }), {
          env: u
        }),
        b = window?.env?.gtmId ?? null;
      (0, n.gtmInit)({
        id: b
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, a.H)(y).render((0, o.jsx)(g, {}))
    }
  }
]);