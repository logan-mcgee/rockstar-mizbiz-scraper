! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "71c03972-ecfd-4d93-aa32-813d977d95b2", e._sentryDebugIdIdentifier = "sentry-dbid-71c03972-ecfd-4d93-aa32-813d977d95b2")
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
    74216: (e, a, d) => {
      d.r(a), d.d(a, {
        componentsForTinaParser: () => w
      });
      var o = d(76612),
        n = d(64064),
        r = d.n(n),
        l = d(74459),
        s = d.n(l),
        t = d(26527),
        f = d.n(t),
        i = d(31879),
        c = d.n(i),
        b = d(66713),
        u = d.n(b),
        _ = d(42012);
      const w = {
        ...o,
        ...d(26750),
        ClrCard: _.y3,
        ClrCollapsedCard: _.h7,
        Gif: r(),
        GroupOfItems: s(),
        RockstarVideoPlayer: c(),
        SwiperCarousel: f(),
        UGCJobSpotlight: u()
      }
    }
  }
]);