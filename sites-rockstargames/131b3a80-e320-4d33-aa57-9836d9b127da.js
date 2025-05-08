! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "131b3a80-e320-4d33-aa57-9836d9b127da", e._sentryDebugIdIdentifier = "sentry-dbid-131b3a80-e320-4d33-aa57-9836d9b127da")
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
    71201: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => p
      });
      var n = a(9623),
        d = a(53178),
        t = a.n(d),
        r = a(27835),
        o = a.n(r),
        c = a(17529),
        l = a.n(c),
        i = a(72162),
        b = a.n(i),
        f = a(82510),
        g = a.n(f),
        u = a(90675),
        m = a.n(u),
        A = a(84045),
        k = {};
      k.styleTagTransform = m(), k.setAttributes = b(), k.insert = l().bind(null, "head"), k.domAPI = o(), k.insertStyleElement = g(), t()(A.A, k);
      const w = A.A && A.A.locals ? A.A.locals : void 0;
      var y = a(73855);
      const p = () => {
        const [e] = (0, n.useSearchParams)(), s = e.get("src") ?? null;
        if (!s) return null;
        const {
          hostname: a
        } = new URL(s);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(a) ? (0, y.jsx)("div", {
          className: w.viewer,
          children: (0, y.jsx)("div", {
            className: w.img,
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    84045: (e, s, a) => {
      a.d(s, {
        A: () => o
      });
      var n = a(42587),
        d = a.n(n),
        t = a(15081),
        r = a.n(t)()(d());
      r.push([e.id, ".rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e{background:#000;display:flex;flex:1}.rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8{width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/modules-core-screenshot-viewer/src/components/Root/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,eAAA,CACA,YAAA,CAFA,MAGJ,CAEA,mEACI,UAAJ",
        sourcesContent: [".viewer {\n    flex: 1;\n    background: black;\n    display: flex;\n}\n\n.img {\n    width: 100%;\n}\n"],
        sourceRoot: ""
      }]), r.locals = {
        viewer: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
        img: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8"
      };
      const o = r
    }
  }
]);