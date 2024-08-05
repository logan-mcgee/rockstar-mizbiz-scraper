! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "75d55708-c067-4f36-b8e1-53162dbc57e3", e._sentryDebugIdIdentifier = "sentry-dbid-75d55708-c067-4f36-b8e1-53162dbc57e3")
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
    74216: (e, d, o) => {
      o.r(d), o.d(d, {
        componentsForTinaParser: () => w
      });
      var a = o(20009),
        n = o(64064),
        r = o.n(n),
        l = o(74459),
        s = o.n(l),
        t = o(26527),
        f = o.n(t),
        c = o(31879),
        i = o.n(c),
        b = o(66713),
        u = o.n(b),
        _ = o(28157);
      const w = {
        ...a,
        ...o(26750),
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