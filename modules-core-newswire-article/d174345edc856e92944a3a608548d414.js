! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4243b5d3-89f3-46da-8ae0-d60a1714ecd8", e._sentryDebugIdIdentifier = "sentry-dbid-4243b5d3-89f3-46da-8ae0-d60a1714ecd8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [896], {
    4896: (e, a, d) => {
      d.r(a), d.d(a, {
        componentsForTinaParser: () => w
      });
      var o = d(1668),
        n = d(8460),
        r = d.n(n),
        l = d(9812),
        s = d.n(l),
        t = d(4316),
        f = d.n(t),
        i = d(4644),
        c = d.n(i),
        u = d(8508),
        b = d.n(u),
        _ = d(7047);
      const w = {
        ...o,
        ...d(9208),
        ...{
          ClrCard: _.ClrCard,
          ClrCollapsedcard: _.ClrCollapsedcard,
          Gif: r(),
          GroupOfItems: s(),
          SwiperCarousel: f(),
          RockstarVideoPlayer: c(),
          UGCJobSpotlight: b()
        }
      }
    }
  }
]);
//# sourceMappingURL=d174345edc856e92944a3a608548d414.js.map