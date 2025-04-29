! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "131b3a80-e320-4d33-aa57-9836d9b127da", e._sentryDebugIdIdentifier = "sentry-dbid-131b3a80-e320-4d33-aa57-9836d9b127da")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3582], {
    71201: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => p
      });
      var n = s(9623),
        t = s(53178),
        r = s.n(t),
        o = s(27835),
        d = s.n(o),
        l = s(17529),
        c = s.n(l),
        i = s(72162),
        f = s.n(i),
        g = s(82510),
        b = s.n(g),
        u = s(90675),
        m = s.n(u),
        A = s(84045),
        k = {};
      k.styleTagTransform = m(), k.setAttributes = f(), k.insert = c().bind(null, "head"), k.domAPI = d(), k.insertStyleElement = b(), r()(A.A, k);
      const w = A.A && A.A.locals ? A.A.locals : void 0;
      var y = s(73855);
      const p = () => {
        const [e] = (0, n.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: s
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, y.jsx)("div", {
          className: w.viewer,
          children: (0, y.jsx)("div", {
            className: w.img,
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    84045: (e, a, s) => {
      s.d(a, {
        A: () => d
      });
      var n = s(42587),
        t = s.n(n),
        r = s(15081),
        o = s.n(r)()(t());
      o.push([e.id, ".rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e{background:#000;display:flex;flex:1}.rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8{width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/modules-core-screenshot-viewer/src/components/Root/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,eAAA,CACA,YAAA,CAFA,MAGJ,CAEA,mEACI,UAAJ",
        sourcesContent: [".viewer {\n    flex: 1;\n    background: black;\n    display: flex;\n}\n\n.img {\n    width: 100%;\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        viewer: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
        img: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8"
      };
      const d = o
    }
  }
]);