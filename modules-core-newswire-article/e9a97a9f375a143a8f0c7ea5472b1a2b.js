! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b3e53ef4-c0dd-4dd0-8a41-eaf475096261", e._sentryDebugIdIdentifier = "sentry-dbid-b3e53ef4-c0dd-4dd0-8a41-eaf475096261")
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
        componentsForTinaParser: () => w
      });
      var o = a(9860),
        n = a(88460),
        l = a.n(n),
        r = a(45364),
        s = a.n(r),
        t = a(46040),
        f = a.n(t),
        i = a(84644),
        c = a.n(i),
        b = a(53964),
        u = a.n(b),
        _ = a(21760);
      const w = {
        ...o,
        ...a(22052),
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