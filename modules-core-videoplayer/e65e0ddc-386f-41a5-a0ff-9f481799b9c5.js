! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e65e0ddc-386f-41a5-a0ff-9f481799b9c5", e._sentryDebugIdIdentifier = "sentry-dbid-e65e0ddc-386f-41a5-a0ff-9f481799b9c5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [3811], {
    53811: (e, a, o) => {
      o.r(a), o(11138), o(10206), o(75177), o(34554), o(87065), o(15222), o(77655), o(8075), o(13950), o(66699), o(15980), o(28681), o(62563), o(11416), o(86670), o(47934), o(42555), o(17982), o(63761);
      var d = o(95966),
        t = o(91689),
        n = o(9623),
        l = o(81788),
        r = o(2918),
        s = o(83906),
        i = o(52542),
        c = o(91029);
      const f = window?.env?.graphEnv ?? "prod",
        u = (0, l.withIntl)((() => {
          const [e, a] = (0, n.useSearchParams)(), [{
            iso: o
          }] = (0, l.getLocale)(), t = "true" === e.get("autoplay"), i = e.get("id"), f = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, c.jsx)(d.ResizeProvider, {
            children: (0, c.jsx)(r.GtmProvider, {
              children: (0, c.jsx)(s.A, {
                autoplay: t,
                context: "embed",
                locale: u,
                id: i,
                resolution: f,
                start: b,
                wrapper: !1,
                videoChangeCallback: e => {
                  a({
                    autoplay: t,
                    id: e,
                    resolution: f
                  })
                }
              })
            })
          })
        }), i),
        b = (0, d.withRockstarGraph)((() => (0, c.jsx)(n.BrowserRouter, {
          children: (0, c.jsx)(u, {})
        })), {
          env: f
        }),
        g = window?.env?.gtmId ?? null;
      (0, d.gtmInit)({
        id: g
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, t.H)(p).render((0, c.jsx)(b, {}))
    }
  }
]);