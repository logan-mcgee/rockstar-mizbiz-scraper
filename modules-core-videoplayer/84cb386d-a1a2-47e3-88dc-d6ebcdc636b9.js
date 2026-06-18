try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "84cb386d-a1a2-47e3-88dc-d6ebcdc636b9", e._sentryDebugIdIdentifier = "sentry-dbid-84cb386d-a1a2-47e3-88dc-d6ebcdc636b9")
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
    5643(e, d, t) {
      var o = t(4017);
      d.H = o.createRoot, o.hydrateRoot
    },
    7837(e, d, t) {
      var o = t(9793),
        n = t(3331),
        a = t(5643),
        r = t(6416),
        l = t(2909),
        s = t(2199),
        i = t(8399),
        c = t(2542);
      const u = window?.env?.graphEnv ?? "prod",
        f = (0, l.withIntl)(() => {
          const [e, d] = (0, r.useSearchParams)(), t = "true" === e.get("autoplay"), a = e.get("id"), l = e.get("resolution") ?? "", c = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return a ? (0, o.jsx)(n.ResizeProvider, {
            children: (0, o.jsx)(s.GtmProvider, {
              children: (0, o.jsx)(i.A, {
                autoplay: t,
                context: "embed",
                locale: c,
                id: a,
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
                  }), d(n)
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