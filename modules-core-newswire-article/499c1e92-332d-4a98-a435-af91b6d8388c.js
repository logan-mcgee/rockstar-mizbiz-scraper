! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "499c1e92-332d-4a98-a435-af91b6d8388c", e._sentryDebugIdIdentifier = "sentry-dbid-499c1e92-332d-4a98-a435-af91b6d8388c")
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
        componentsForTinaParser: () => h
      });
      var n = d(73695),
        o = d(64064),
        r = d.n(o),
        t = d(74459),
        s = d.n(t),
        l = d(26527),
        i = d.n(l),
        c = d(31879),
        f = d.n(c),
        u = d(66713),
        b = d.n(u),
        g = d(42012),
        _ = d(26750),
        w = d(29210),
        y = d(28089),
        p = d(46632);
      const h = {
        ...n,
        ..._,
        ClrCard: g.y3,
        ClrCollapsedCard: g.h7,
        Gif: r(),
        GroupOfItems: s(),
        Lightbox: e => {
          const {
            src: a,
            thumbnail: d
          } = e, n = (0, y.useGetCdnSource)(a), o = (0, y.useGetCdnSource)(d);
          return (0, p.jsx)(w.Lightbox, {
            ...e,
            src: n,
            thumbnail: o
          })
        },
        RockstarVideoPlayer: f(),
        SwiperCarousel: i(),
        UGCJobSpotlight: b()
      }
    }
  }
]);