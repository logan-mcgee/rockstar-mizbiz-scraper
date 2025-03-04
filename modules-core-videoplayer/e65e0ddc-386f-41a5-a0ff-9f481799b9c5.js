! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e65e0ddc-386f-41a5-a0ff-9f481799b9c5", e._sentryDebugIdIdentifier = "sentry-dbid-e65e0ddc-386f-41a5-a0ff-9f481799b9c5")
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
    53811: (e, d, a) => {
      a.r(d), a(11138), a(10206), a(75177), a(34554), a(87065), a(15222), a(77655), a(8075), a(13950), a(66699), a(15980), a(28681), a(62563), a(11416), a(86670), a(47934), a(42555), a(17982), a(63761);
      var o = a(95966),
        t = a(91689),
        n = a(9623),
        l = a(81788),
        r = a(2918),
        s = a(83906),
        i = a(52542),
        f = a(91029);
      const u = window?.env?.graphEnv ?? "prod",
        c = (0, l.withIntl)((() => {
          const [e, d] = (0, n.useSearchParams)(), [{
            iso: a
          }] = (0, l.getLocale)(), t = "true" === e.get("autoplay"), i = e.get("id"), u = e.get("resolution") ?? null, c = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, f.jsx)(o.ResizeProvider, {
            children: (0, f.jsx)(r.GtmProvider, {
              children: (0, f.jsx)(s.A, {
                autoplay: t,
                context: "embed",
                locale: c,
                id: i,
                resolution: u,
                start: b,
                wrapper: !1,
                videoChangeCallback: e => {
                  d({
                    autoplay: t,
                    id: e,
                    resolution: u
                  })
                }
              })
            })
          })
        }), i),
        b = (0, o.withRockstarGraph)((() => (0, f.jsx)(n.BrowserRouter, {
          children: (0, f.jsx)(c, {})
        })), {
          env: u
        }),
        g = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: g
      });
      const p = document.createElement("main");
      document.body.appendChild(p), (0, t.H)(p).render((0, f.jsx)(b, {}))
    }
  }
]);