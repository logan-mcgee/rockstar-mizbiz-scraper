try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6c32bc99-3f7e-4ce7-a4ef-9b536b08c1e4", e._sentryDebugIdIdentifier = "sentry-dbid-6c32bc99-3f7e-4ce7-a4ef-9b536b08c1e4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [7851], {
    27851: (e, d, a) => {
      a(10790), a(75826), a(58533), a(79910), a(6637), a(19954), a(86099), a(85311), a(7250), a(83711), a(81016), a(38069), a(95303), a(32372), a(15674), a(35610), a(73783), a(29090), a(24165);
      var t = a(95966),
        o = a(40748),
        n = a(9623),
        l = a(81788),
        s = a(2918),
        r = a(54156),
        i = a(52542),
        c = a(70954);
      const f = window?.env?.graphEnv ?? "prod",
        u = (0, l.withIntl)((() => {
          const [e, d] = (0, n.useSearchParams)(), [{
            iso: a
          }] = (0, l.getLocale)(), o = "true" === e.get("autoplay"), i = e.get("id"), f = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, c.jsx)(t.ResizeProvider, {
            children: (0, c.jsx)(s.GtmProvider, {
              children: (0, c.jsx)(r.A, {
                autoplay: o,
                context: "embed",
                locale: u,
                id: i,
                resolution: f,
                start: b,
                wrapper: !1,
                videoChangeCallback: e => {
                  d({
                    autoplay: o,
                    id: e,
                    resolution: f
                  })
                }
              })
            })
          })
        }), i),
        b = (0, t.withRockstarGraph)((() => (0, c.jsx)(n.BrowserRouter, {
          children: (0, c.jsx)(u, {})
        })), {
          env: f
        }),
        g = window?.env?.gtmId ?? null;
      (0, t.gtmInit)({
        id: g
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, o.H)(p).render((0, c.jsx)(b, {}))
    }
  }
]);