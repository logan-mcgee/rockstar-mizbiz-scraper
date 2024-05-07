! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b3e53ef4-c0dd-4dd0-8a41-eaf475096261", e._sentryDebugIdIdentifier = "sentry-dbid-b3e53ef4-c0dd-4dd0-8a41-eaf475096261")
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
        componentsForTinaParser: () => w
      });
      var o = d(9860),
        n = d(88460),
        l = d.n(n),
        r = d(45364),
        s = d.n(r),
        t = d(46040),
        f = d.n(t),
        i = d(84644),
        c = d.n(i),
        b = d(53964),
        u = d.n(b),
        _ = d(21760);
      const w = {
        ...o,
        ...d(22052),
        ...{
          ClrCard: _.qQ,
          ClrCollapsedcard: _.ClrCollapsedcard,
          Gif: l(),
          GroupOfItems: s(),
          SwiperCarousel: f(),
          RockstarVideoPlayer: c(),
          UGCJobSpotlight: u()
        }
      }
    }
  }
]);