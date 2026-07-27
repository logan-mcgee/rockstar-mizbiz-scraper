try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fe38052-4010-4720-82c7-415b6a041b6b", e._sentryDebugIdIdentifier = "sentry-dbid-6fe38052-4010-4720-82c7-415b6a041b6b")
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
    5643(e, t, d) {
      var a = d(4017);
      t.H = a.createRoot, a.hydrateRoot
    },
    750(e, t, d) {
      var a = d(9793),
        o = d(3331),
        n = d(5643),
        r = d(9225),
        l = d(2909),
        s = d(2199),
        i = d(3828),
        c = d(2542);
      const u = window?.env?.graphEnv ?? "prod",
        f = (0, l.withIntl)(() => {
          const [e, t] = (0, r.useSearchParams)(), d = "true" === e.get("autoplay"), n = e.get("id"), l = e.get("resolution") ?? "", c = e.get("locale") ?? "en_us", u = Number(e.get("start") ?? 0);
          return n ? (0, a.jsx)(o.ResizeProvider, {
            children: (0, a.jsx)(s.GtmProvider, {
              children: (0, a.jsx)(i.A, {
                autoplay: d,
                context: "embed",
                locale: c,
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
        }, c),
        b = (0, o.withRockstarGraph)(() => (0, a.jsx)(r.BrowserRouter, {
          children: (0, a.jsx)(f, {})
        }), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: g
      });
      const y = document.createElement("main");
      document.body.appendChild(y), (0, n.H)(y).render((0, a.jsx)(b, {}))
    }
  }
]);