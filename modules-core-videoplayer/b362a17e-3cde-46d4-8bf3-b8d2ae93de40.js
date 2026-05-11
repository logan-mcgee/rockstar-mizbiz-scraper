try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b362a17e-3cde-46d4-8bf3-b8d2ae93de40", e._sentryDebugIdIdentifier = "sentry-dbid-b362a17e-3cde-46d4-8bf3-b8d2ae93de40")
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
    9827(e, d, t) {
      var a = t(18429);
      d.H = a.createRoot, a.hydrateRoot
    },
    87436(e, d, t) {
      var a = t(42295),
        o = t(13331),
        n = t(9827),
        r = t(10181),
        l = t(42909),
        s = t(82199),
        i = t(68517),
        b = t(52542);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)(() => {
          const [e, d] = (0, r.useSearchParams)(), t = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", b = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return n ? (0, a.jsx)(o.ResizeProvider, {
            children: (0, a.jsx)(s.GtmProvider, {
              children: (0, a.jsx)(i.A, {
                autoplay: t,
                context: "embed",
                locale: b,
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
        }, b),
        f = (0, o.withRockstarGraph)(() => (0, a.jsx)(r.BrowserRouter, {
          children: (0, a.jsx)(c, {})
        }), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, a.jsx)(f, {}))
    }
  }
]);