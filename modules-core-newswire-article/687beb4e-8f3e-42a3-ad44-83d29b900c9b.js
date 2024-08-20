! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "687beb4e-8f3e-42a3-ad44-83d29b900c9b", e._sentryDebugIdIdentifier = "sentry-dbid-687beb4e-8f3e-42a3-ad44-83d29b900c9b")
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
  [4216], {
    74216: (e, d, a) => {
      a.r(d), a.d(d, {
        componentsForTinaParser: () => w
      });
      var o = a(20009),
        n = a(64064),
        r = a.n(n),
        l = a(74459),
        s = a.n(l),
        t = a(26527),
        f = a.n(t),
        b = a(31879),
        i = a.n(b),
        c = a(66713),
        u = a.n(c),
        _ = a(53473);
      const w = {
        ...o,
        ...a(26750),
        ...{
          ClrCard: _.y3,
          ClrCollapsedCard: _.h7,
          Gif: r(),
          GroupOfItems: s(),
          RockstarVideoPlayer: i(),
          SwiperCarousel: f(),
          UGCJobSpotlight: u()
        }
      }
    }
  }
]);