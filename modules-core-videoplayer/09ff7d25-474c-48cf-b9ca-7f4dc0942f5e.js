try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "09ff7d25-474c-48cf-b9ca-7f4dc0942f5e", e._sentryDebugIdIdentifier = "sentry-dbid-09ff7d25-474c-48cf-b9ca-7f4dc0942f5e")
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
    5643(e, a, t) {
      var d = t(4017);
      a.H = d.createRoot, d.hydrateRoot
    },
    7837(e, a, t) {
      var d = t(9793),
        o = t(3331),
        n = t(5643),
        r = t(6416),
        l = t(2909),
        s = t(2199),
        i = t(8399),
        f = t(2542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, a] = (0, r.useSearchParams)(), t = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", f = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return n ? (0, d.jsx)(o.ResizeProvider, {
            children: (0, d.jsx)(s.GtmProvider, {
              children: (0, d.jsx)(i.A, {
                autoplay: t,
                context: "embed",
                locale: f,
                id: n,
                resolution: l,
                start: u,
                wrapper: !1,
                videoChangeCallback: (e, t, d) => {
                  let o = {
                    id: String(e)
                  };
                  t && (o = {
                    ...o,
                    autoplay: String(t)
                  }), d && (o = {
                    ...o,
                    resolution: String(d)
                  }), a(o)
                }
              })
            })
          }) : null
        }, f),
        b = (0, o.withRockstarGraph)(() => (0, d.jsx)(r.BrowserRouter, {
          children: (0, d.jsx)(c, {})
        }), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, d.jsx)(b, {}))
    }
  }
]);