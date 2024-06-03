! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6d1c72ca-51d8-4220-bdd6-9caf22cfd594", e._sentryDebugIdIdentifier = "sentry-dbid-6d1c72ca-51d8-4220-bdd6-9caf22cfd594")
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
    26068: (e, a, d) => {
      d.r(a), d.d(a, {
        componentsForTinaParser: () => _
      });
      var o = d(9860),
        n = d(88460),
        r = d.n(n),
        l = d(45364),
        s = d.n(l),
        t = d(46040),
        f = d.n(t),
        i = d(84644),
        c = d.n(i),
        b = d(53964),
        u = d.n(b),
        w = d(21760);
      const _ = {
        ...o,
        ...d(22052),
        ...{
          ClrCard: w.qQ,
          ClrCollapsedCard: w.wJ,
          Gif: r(),
          GroupOfItems: s(),
          SwiperCarousel: f(),
          RockstarVideoPlayer: c(),
          UGCJobSpotlight: u()
        }
      }
    }
  }
]);