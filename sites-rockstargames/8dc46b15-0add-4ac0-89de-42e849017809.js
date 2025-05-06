! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8dc46b15-0add-4ac0-89de-42e849017809", e._sentryDebugIdIdentifier = "sentry-dbid-8dc46b15-0add-4ac0-89de-42e849017809")
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
  [5045], {
    35045: (e, a, n) => {
      n.r(a), n.d(a, {
        default: () => h
      });
      var s = n(53178),
        t = n.n(s),
        d = n(27835),
        r = n.n(d),
        o = n(17529),
        i = n.n(o),
        c = n(72162),
        g = n.n(c),
        l = n(82510),
        A = n.n(l),
        m = n(90675),
        b = n.n(m),
        f = n(120),
        p = {};
      p.styleTagTransform = b(), p.setAttributes = g(), p.insert = i().bind(null, "head"), p.domAPI = r(), p.insertStyleElement = A(), t()(f.A, p);
      const u = f.A && f.A.locals ? f.A.locals : void 0;
      var k = n(73855);
      const h = () => (0, k.jsxs)("div", {
        className: u.sd,
        children: [(0, k.jsx)("div", {
          className: u.logo
        }), (0, k.jsx)("h3", {
          children: "Standard Deviation is now a part of Rockstar Games."
        })]
      })
    },
    120: (e, a, n) => {
      n.d(a, {
        A: () => A
      });
      var s = n(42587),
        t = n.n(s),
        d = n(15081),
        r = n.n(d),
        o = n(79908),
        i = n.n(o),
        c = new URL(n(37139), n.b),
        g = r()(t()),
        l = i()(c);
      g.push([e.id, `.rockstargames-sites-rockstargamesde90457c42504bea6b08059e335add00{grid-gap:2rem;align-content:center;display:grid;justify-items:center;min-height:calc(100vh - var(--header-height));padding:1rem;text-align:center}.rockstargames-sites-rockstargamesf42266067086be596ce3210aca0c54eb{background:url(${l}) no-repeat 50%/contain;width:245px}.rockstargames-sites-rockstargamesf42266067086be596ce3210aca0c54eb:after{content:"";display:block;padding-top:92.1875%}`, "", {
        version: 3,
        sources: ["webpack://./src/pages/StandardDeviation/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,aAAA,CAEA,oBAAA,CAHA,YAAA,CAIA,oBAAA,CAFA,6CAAA,CAGA,YAAA,CACA,iBACJ,CAEA,mEAGI,wEAAA,CADA,WAAJ,CAEI,yEACI,UAAA,CAEA,aAAA,CADA,oBACR",
        sourcesContent: [".sd {\n    display: grid;\n    grid-gap: 2rem;\n    min-height: calc(100vh - var(--header-height));\n    align-content: center;\n    justify-items: center;\n    padding: 1rem;\n    text-align: center;\n}\n\n.logo {\n    @img: './img/rockstar.svg';\n    width: 245px;\n    background: url(@img) no-repeat center/contain;\n    &:after {\n        content: '';\n        padding-top: (image-height(@img) / image-width(@img) * 100%);\n        display: block;\n    }\n}\n"],
        sourceRoot: ""
      }]), g.locals = {
        sd: "rockstargames-sites-rockstargamesde90457c42504bea6b08059e335add00",
        logo: "rockstargames-sites-rockstargamesf42266067086be596ce3210aca0c54eb"
      };
      const A = g
    },
    37139: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/87d9246255e985e0b791e0b29487070e.svg"
    }
  }
]);