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
    66892: (e, n, d) => {
      d.r(n), d(44980), d(2876), d(74395), d(93180), d(43759), d(54936), d(66945), d(38585), d(71436), d(98073), d(30014), d(94323), d(6929), d(99598), d(26804), d(76580), d(32033), d(63612), d(62567);
      var o = d(95966),
        t = d(40347),
        a = d(9623),
        s = d(81788),
        r = d(2918),
        l = d(84700),
        i = d(53178),
        c = d.n(i),
        u = d(27835),
        b = d.n(u),
        g = d(17529),
        f = d.n(g),
        p = d(72162),
        m = d.n(p),
        y = d(82510),
        w = d.n(y),
        h = d(90675),
        A = d.n(h),
        v = d(18418),
        _ = {};
      _.styleTagTransform = A(), _.setAttributes = m(), _.insert = f().bind(null, "head"), _.domAPI = b(), _.insertStyleElement = w(), c()(v.A, _), v.A && v.A.locals && v.A.locals;
      var k = d(52542),
        E = d(73855);
      const I = window?.env?.graphEnv ?? "prod",
        x = (0, s.withIntl)((() => {
          const [e, n] = (0, a.useSearchParams)(), [{
            iso: d
          }] = (0, s.getLocale)(), t = "true" === e.get("autoplay"), i = e.get("id"), c = e.get("resolution") ?? null, u = e.get("locale") ?? "en_us", b = Number(e.get("start") ?? 0);
          return (0, E.jsx)(o.ResizeProvider, {
            children: (0, E.jsx)(r.GtmProvider, {
              children: (0, E.jsx)(l.A, {
                autoplay: t,
                context: "embed",
                locale: u,
                id: i,
                resolution: c,
                start: b,
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
        C = (0, o.withRockstarGraph)((() => (0, E.jsx)(a.BrowserRouter, {
          children: (0, E.jsx)(x, {})
        })), {
          env: I
        }),
        R = window?.env?.gtmId ?? null;
      (0, o.gtmInit)({
        id: R
      });
      const j = document.createElement("main");
      document.body.appendChild(j), (0, t.H)(j).render((0, E.jsx)(C, {}))
    },
    18418: (e, n, d) => {
      d.d(n, {
        A: () => r
      });
      var o = d(42587),
        t = d.n(o),
        a = d(15081),
        s = d.n(a)()(t());
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