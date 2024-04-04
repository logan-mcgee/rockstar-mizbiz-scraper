! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d97d741e-6f31-4e23-8f20-24893907a22c", e._sentryDebugIdIdentifier = "sentry-dbid-d97d741e-6f31-4e23-8f20-24893907a22c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [68], {
    6068: (e, a, d) => {
      d.r(a), d.d(a, {
        componentsForTinaParser: () => w
      });
      var o = d(9860),
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
        ...d(2052),
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
//# sourceMappingURL=5f812ed1f849b176f7a1d9aadccd32a9.js.map