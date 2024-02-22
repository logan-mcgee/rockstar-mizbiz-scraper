! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "42f1269a-f508-40a3-a441-56ba128b2263", e._sentryDebugIdIdentifier = "sentry-dbid-42f1269a-f508-40a3-a441-56ba128b2263")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [148], {
    4192: (e, a, o) => {
      var n = o(9080);
      a.C = n.createRoot, n.hydrateRoot
    },
    5148: (e, a, o) => {
      o.r(a), o(5488);
      var n = o(5092),
        t = o(4192),
        d = o(3557),
        r = o(5792),
        l = o(3052),
        s = o(1512),
        i = o(2708),
        u = o(5016),
        f = o(216),
        c = o(3480);
      const b = window?.env?.graphEnv ?? "prod",
        g = () => {
          const [e, a] = (0, d.useSearchParams)(), o = (0, r.useLocale)(), n = "true" === e.get("autoplay"), t = Number(e.get("id")), l = e.get("resolution") ?? null, b = Number(e.get("start")) ?? 0;
          return (0, c.jsx)(r.ResizeProvider, {
            children: (0, c.jsx)(i.GtmProvider, {
              children: (0, c.jsx)(s.IntlProvider, {
                locales: u.intlMessages,
                lang: o,
                children: (0, c.jsx)(f.c, {
                  autoplay: n,
                  id: t,
                  context: "embed",
                  resolution: l,
                  start: b,
                  wrapper: !1,
                  videoChangeCallback: e => {
                    a({
                      autoplay: n,
                      id: e,
                      resolution: l
                    })
                  }
                })
              })
            })
          })
        },
        p = (0, l.withRockstarGraph)((() => (0, c.jsx)(d.BrowserRouter, {
          children: (0, c.jsx)(g, {})
        })), {
          env: b
        }),
        y = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: y
      });
      const w = document.createElement("main");
      document.body.appendChild(w), (0, t.C)(w).render((0, c.jsx)(p, {}))
    }
  }
]);
//# sourceMappingURL=44932c492fc5fe4bafc67bbc8cd6e7cd.js.map