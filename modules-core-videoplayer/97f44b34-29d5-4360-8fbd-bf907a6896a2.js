! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "97f44b34-29d5-4360-8fbd-bf907a6896a2", e._sentryDebugIdIdentifier = "sentry-dbid-97f44b34-29d5-4360-8fbd-bf907a6896a2")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [1563], {
    11563: (e, a, t) => {
      t(45008), t(33480), t(93887), t(352), t(86011), t(76412), t(29829), t(72485), t(2280), t(20293), t(31650), t(49207), t(8125), t(14978), t(67016), t(97752), t(49301), t(23e3), t(92227);
      var d = t(95966),
        o = t(14120),
        l = t(9623),
        n = t(81788),
        r = t(2918),
        s = t(41120),
        i = t(52542),
        u = t(25854);
      const f = window?.env?.graphEnv ?? "prod",
        b = (0, n.withIntl)((() => {
          const [e, a] = (0, l.useSearchParams)(), [{
            iso: t
          }] = (0, n.getLocale)(), o = "true" === e.get("autoplay"), i = e.get("id"), f = e.get("resolution") ?? null, b = e.get("locale") ?? "en_us", c = Number(e.get("start") ?? 0);
          return (0, u.jsx)(d.ResizeProvider, {
            children: (0, u.jsx)(r.GtmProvider, {
              children: (0, u.jsx)(s.A, {
                autoplay: o,
                context: "embed",
                locale: b,
                id: i,
                resolution: f,
                start: c,
                wrapper: !1,
                videoChangeCallback: e => {
                  a({
                    autoplay: o,
                    id: e,
                    resolution: f
                  })
                }
              })
            })
          })
        }), i),
        c = (0, d.withRockstarGraph)((() => (0, u.jsx)(l.BrowserRouter, {
          children: (0, u.jsx)(b, {})
        })), {
          env: f
        }),
        y = window?.env?.gtmId ?? null;
      (0, d.gtmInit)({
        id: y
      });
      const g = document.createElement("main");
      document.body.appendChild(g), (0, o.H)(g).render((0, u.jsx)(c, {}))
    }
  }
]);