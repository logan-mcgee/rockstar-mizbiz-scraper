! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e6b5281f-36c9-4d1e-aa52-fba44160ca34", e._sentryDebugIdIdentifier = "sentry-dbid-e6b5281f-36c9-4d1e-aa52-fba44160ca34")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "55a9ca587741545089a7fe4bb45bb58fb164842b",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "55a9ca587741545089a7fe4bb45bb58fb164842b"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [896], {
    4896: (e, a, o) => {
      o.r(a), o.d(a, {
        componentsForTinaParser: () => w
      });
      var d = o(1668),
        n = o(8460),
        r = o.n(n),
        l = o(9812),
        s = o.n(l),
        t = o(4316),
        f = o.n(t),
        b = o(4644),
        i = o.n(b),
        c = o(8508),
        u = o.n(c),
        _ = o(7047);
      const w = {
        ...d,
        ...o(9208),
        ...{
          ClrCard: _.ClrCard,
          ClrCollapsedcard: _.ClrCollapsedcard,
          Gif: r(),
          GroupOfItems: s(),
          SwiperCarousel: f(),
          RockstarVideoPlayer: i(),
          UGCJobSpotlight: u()
        }
      }
    }
  }
]);
//# sourceMappingURL=2712d846c0caa60e7dc1a3bdbf63e574.js.map