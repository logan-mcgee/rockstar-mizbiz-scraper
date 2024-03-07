! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "56278deb-1e20-4a87-84aa-77ed6ab3853b", e._sentryDebugIdIdentifier = "sentry-dbid-56278deb-1e20-4a87-84aa-77ed6ab3853b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [148], {
    4192: (e, a, d) => {
      var o = d(9080);
      a.C = o.createRoot, o.hydrateRoot
    },
    5148: (e, a, d) => {
      d.r(a), d(5488);
      var o = d(5092),
        n = d(4192),
        t = d(3557),
        r = d(5792),
        l = d(3052),
        s = d(696),
        i = d(2708),
        u = d(5016),
        f = d(216),
        c = d(3480);
      const b = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, a] = (0, t.useSearchParams)(), d = (0, r.useLocale)(), o = "true" === e.get("autoplay"), n = Number(e.get("id")), l = e.get("resolution") ?? null, b = Number(e.get("start")) ?? 0;
          return (0, c.jsx)(r.ResizeProvider, {
            children: (0, c.jsx)(i.GtmProvider, {
              children: (0, c.jsx)(s.IntlProvider, {
                locales: u.intlMessages,
                lang: d,
                children: (0, c.jsx)(f.c, {
                  autoplay: o,
                  id: n,
                  context: "embed",
                  resolution: l,
                  start: b,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: o,
                      id: e,
                      resolution: l
                    })
                  }
                })
              })
            })
          })
        },
        p = (0, l.withRockstarGraph)((() => (0, c.jsx)(t.BrowserRouter, {
          children: (0, c.jsx)(g, {})
        })), {
          env: b
        }),
        y = window?.env?.gtmId ?? null;
      (0, o.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, n.C)(w).render((0, c.jsx)(p, {}))
    }
  }
]);
//# sourceMappingURL=50bde2c9251f7b8883f688b5bb4f8f0c.js.map