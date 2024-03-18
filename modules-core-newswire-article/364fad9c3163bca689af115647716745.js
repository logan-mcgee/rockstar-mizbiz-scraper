! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e6b5281f-36c9-4d1e-aa52-fba44160ca34", e._sentryDebugIdIdentifier = "sentry-dbid-e6b5281f-36c9-4d1e-aa52-fba44160ca34")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
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
        b = d.n(i),
        c = d(8508),
        u = d.n(c),
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
          RockstarVideoPlayer: b(),
          UGCJobSpotlight: u()
        }
      }
    }
  }
]);
//# sourceMappingURL=364fad9c3163bca689af115647716745.js.map