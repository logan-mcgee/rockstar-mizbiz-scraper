try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "55733283-06d9-4fd0-a0f3-b06ff3f3dc48", e._sentryDebugIdIdentifier = "sentry-dbid-55733283-06d9-4fd0-a0f3-b06ff3f3dc48")
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
  [750], {
    5643(e, d, t) {
      var a = t(4017);
      d.H = a.createRoot, a.hydrateRoot
    },
    750(e, d, t) {
      var a = t(9793),
        o = t(3331),
        n = t(5643),
        r = t(9225),
        l = t(2909),
        s = t(2199),
        i = t(2578),
        f = t(2542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, d] = (0, r.useSearchParams)(), t = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return n ? (0, a.jsx)(o.ResizeProvider, {
            children: (0, a.jsx)(s.GtmProvider, {
              children: (0, a.jsx)(i.A, {
                autoplay: t,
                context: "embed",
                locale: f,
                id: n,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, t, a) => {
                  let o = {
                    id: String(e)
                  };
                  t && (o = {
                    ...o,
                    autoplay: String(t)
                  }), a && (o = {
                    ...o,
                    resolution: String(a)
                  }), d(o)
                }
              })
            })
          }) : null
        }, f),
        g = (0, o.withRockstarGraph)(() => (0, a.jsx)(r.BrowserRouter, {
          children: (0, a.jsx)(c, {})
        }), {
          env: u
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: y
      });
      const b = document.createElement("main");
      document.body.appendChild(b), (0, n.H)(b).render((0, a.jsx)(g, {}))
    }
  }
]);