! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9e1dca93-cb34-4d77-978f-554faf1779a1", e._sentryDebugIdIdentifier = "sentry-dbid-9e1dca93-cb34-4d77-978f-554faf1779a1")
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
  [1212], {
    11212: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => x
      });
      var n = s(53178),
        t = s.n(n),
        r = s(27835),
        o = s.n(r),
        d = s(17529),
        i = s.n(d),
        A = s(72162),
        c = s.n(A),
        l = s(82510),
        g = s.n(l),
        f = s(90675),
        m = s.n(f),
        b = s(90617),
        p = {};
      p.styleTagTransform = m(), p.setAttributes = c(), p.insert = i().bind(null, "head"), p.domAPI = o(), p.insertStyleElement = g(), t()(b.A, p);
      const u = b.A && b.A.locals ? b.A.locals : void 0;
      var k = s(73855);
      const x = () => (0, k.jsx)("div", {
        className: u.maint,
        children: (0, k.jsxs)("div", {
          className: u.content,
          children: [(0, k.jsx)("div", {
            className: u.logo
          }), (0, k.jsx)("p", {
            children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
          }), (0, k.jsx)("a", {
            className: u.support,
            href: "https://support.rockstargames.com/",
            children: "https://support.rockstargames.com/"
          })]
        })
      })
    },
    90617: (e, a, s) => {
      s.d(a, {
        A: () => m
      });
      var n = s(42587),
        t = s.n(n),
        r = s(15081),
        o = s.n(r),
        d = s(79908),
        i = s.n(d),
        A = new URL(s(82271), s.b),
        c = new URL(s(17923), s.b),
        l = o()(t()),
        g = i()(A),
        f = i()(c);
      l.push([e.id, `.rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7{align-items:center;background:url(${g}) fixed;display:flex;flex:1;justify-content:center}.rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9{grid-gap:1.5rem;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border-radius:5px;box-shadow:0 0 5px hsla(0,0%,100%,.25);display:grid;max-width:640px;padding:1.5rem;text-align:center}.rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446{background:url(${f}) no-repeat 50%/contain;margin:0 auto;max-width:256px;width:100%}.rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446:after{content:"";display:block;padding-top:28.125%;width:100%}`, "", {
        version: 3,
        sources: ["webpack://./src/pages/SCMaintenance/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,kBAAA,CAGA,wDAAA,CAJA,YAAA,CAGA,MAAA,CADA,sBAGJ,CACA,mEAEI,eAAA,CAIA,iCAAA,CAAA,yBAAA,CAEA,iBAAA,CADA,sCAAA,CANA,YAAA,CAEA,eAAA,CAEA,cAAA,CADA,iBAKJ,CAEA,mEAEI,wEAAA,CAEA,aAAA,CADA,eAAA,CAEA,UADJ,CAEI,yEAEI,UAAA,CAEA,aAAA,CADA,mBAAA,CAFA,UAGR",
        sourcesContent: [".maint {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    background: url(./img/bg_pattern.gif) fixed;\n}\n.content {\n    display: grid;\n    grid-gap: 1.5rem;\n    max-width: 640px;\n    text-align: center;\n    padding: 1.5rem;\n    backdrop-filter: blur(2px);\n    box-shadow: 0px 0px 5px rgb(255 255 255 / 25%);\n    border-radius: 5px;\n}\n\n.logo {\n    @logo: ./img/socialclub_small.png;\n    background: url(@logo) no-repeat center/contain;\n    max-width: 256px;\n    margin: 0 auto;\n    width: 100%;\n    &:after {\n        width: 100%;\n        content: '';\n        padding-top: (image-height(@logo) / image-width(@logo) * 100%);\n        display: block;\n    }\n}\n"],
        sourceRoot: ""
      }]), l.locals = {
        maint: "rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7",
        content: "rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9",
        logo: "rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446"
      };
      const m = l
    },
    82271: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/69446ff620d0701f929f986380918d62.gif"
    },
    17923: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/60681b90bf08a69831bcb56e88f92c91.png"
    }
  }
]);