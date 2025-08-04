try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6c32bc99-3f7e-4ce7-a4ef-9b536b08c1e4", e._sentryDebugIdIdentifier = "sentry-dbid-6c32bc99-3f7e-4ce7-a4ef-9b536b08c1e4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [7851], {
    27851: (e, d, t) => {
      t(10790), t(75826), t(58533), t(79910), t(6637), t(19954), t(86099), t(85311), t(7250), t(83711), t(81016), t(38069), t(95303), t(32372), t(15674), t(35610), t(73783), t(29090), t(24165);
      var o = t(95966),
        n = t(40748),
        a = t(9623),
        l = t(81788),
        s = t(2918),
        r = t(54156),
        i = t(52542),
        c = t(70954);
      const f = window?.env?.graphEnv ?? "prod",
        u = (0, l.withIntl)((() => {
          const [e, d] = (0, a.useSearchParams)(), [{
            iso: t
          }] = (0, l.getLocale)(), n = "true" === e.get("autoplay"), i = e.get("id"), f = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", g = Number(e.get("start") ?? 0);
          return (0, c.jsx)(o.ResizeProvider, {
            children: (0, c.jsx)(s.GtmProvider, {
              children: (0, c.jsx)(r.A, {
                autoplay: n,
                context: "embed",
                locale: u,
                id: i,
                resolution: f,
                start: g,
                wrapper: !1,
                videoChangeCallback: e => {
                  d({
                    autoplay: n,
                    id: e,
                    resolution: f
                  })
                }
              })
            })
          })
        }), i),
        g = (0, o.withRockstarGraph)((() => (0, c.jsx)(a.BrowserRouter, {
          children: (0, c.jsx)(u, {})
        })), {
          env: f
        }),
        b = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: b
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, n.H)(p).render((0, c.jsx)(g, {}))
    }
  }
]);