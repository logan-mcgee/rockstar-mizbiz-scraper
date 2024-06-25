! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6d1c72ca-51d8-4220-bdd6-9caf22cfd594", e._sentryDebugIdIdentifier = "sentry-dbid-6d1c72ca-51d8-4220-bdd6-9caf22cfd594")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [68], {
    26068: (e, d, a) => {
      a.r(d), a.d(d, {
        componentsForTinaParser: () => _
      });
      var o = a(9860),
        n = a(88460),
        r = a.n(n),
        l = a(45364),
        s = a.n(l),
        t = a(46040),
        f = a.n(t),
        c = a(84644),
        i = a.n(c),
        b = a(53964),
        u = a.n(b),
        w = a(21760);
      const _ = {
        ...o,
        ...a(22052),
        ...{
          ClrCard: w.qQ,
          ClrCollapsedCard: w.wJ,
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