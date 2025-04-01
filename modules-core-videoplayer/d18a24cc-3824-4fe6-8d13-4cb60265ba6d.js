! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d18a24cc-3824-4fe6-8d13-4cb60265ba6d", e._sentryDebugIdIdentifier = "sentry-dbid-d18a24cc-3824-4fe6-8d13-4cb60265ba6d")
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
  [6892], {
    66892: (e, n, o) => {
      o.r(n), o(44980), o(2876), o(74395), o(93180), o(43759), o(54936), o(66945), o(38585), o(71436), o(98073), o(30014), o(94323), o(6929), o(99598), o(26804), o(76580), o(32033), o(63612), o(62567);
      var a = o(95966),
        t = o(40347),
        d = o(9623),
        s = o(81788),
        r = o(2918),
        l = o(84700),
        i = o(53178),
        c = o.n(i),
        u = o(27835),
        g = o.n(u),
        b = o(17529),
        f = o.n(b),
        p = o(72162),
        m = o.n(p),
        y = o(82510),
        w = o.n(y),
        h = o(90675),
        A = o.n(h),
        v = o(18418),
        _ = {};
      _.styleTagTransform = A(), _.setAttributes = m(), _.insert = f().bind(null, "head"), _.domAPI = g(), _.insertStyleElement = w(), c()(v.A, _), v.A && v.A.locals && v.A.locals;
      var k = o(52542),
        E = o(73855);
      const I = window?.env?.graphEnv ?? "prod",
        x = (0, s.withIntl)((() => {
          const [e, n] = (0, d.useSearchParams)(), [{
            iso: o
          }] = (0, s.getLocale)(), t = "true" === e.get("autoplay"), i = e.get("id"), c = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", g = Number(e.get("start") ?? 0);
          return (0, E.jsx)(a.ResizeProvider, {
            children: (0, E.jsx)(r.GtmProvider, {
              children: (0, E.jsx)(l.A, {
                autoplay: t,
                context: "embed",
                locale: u,
                id: i,
                resolution: c,
                start: g,
                wrapper: !1,
                videoChangeCallback: e => {
                  n({
                    autoplay: t,
                    id: e,
                    resolution: c
                  })
                }
              })
            })
          })
        }), k),
        C = (0, a.withRockstarGraph)((() => (0, E.jsx)(d.BrowserRouter, {
          children: (0, E.jsx)(x, {})
        })), {
          env: I
        }),
        R = window?.env?.gtmId ?? null;
      (0, a.gtmInit)({
        id: R
      });
      const j = document.createElement("main");
      document.body.appendChild(j), (0, t.H)(j).render((0, E.jsx)(C, {}))
    },
    18418: (e, n, o) => {
      o.d(n, {
        A: () => r
      });
      var a = o(42587),
        t = o.n(a),
        d = o(15081),
        s = o.n(d)()(t());
      s.push([e.id, "body,html{margin:0;overflow:hidden!important}main{height:100vh;width:100vw}", "", {
        version: 3,
        sources: ["webpack://./src/components/Root/index.less"],
        names: [],
        mappings: "AAEA,UAGI,QAAA,CADA,yBA+BJ,CA3BA,KAEI,YAAA,CADA,WA8BJ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\nhtml,\nbody {\n    overflow: hidden !important;\n    margin: 0;\n}\n\nmain {\n    width: 100vw;\n    height: 100vh;\n}\n"],
        sourceRoot: ""
      }]), s.locals = {};
      const r = s
    }
  }
]);