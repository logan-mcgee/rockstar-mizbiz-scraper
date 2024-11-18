! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0a49f8ed-f120-4ecb-a168-66dbfb231a09", e._sentryDebugIdIdentifier = "sentry-dbid-0a49f8ed-f120-4ecb-a168-66dbfb231a09")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4233], {
    84233: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => o
      });
      const d = {
        maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
        content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
        logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
      };
      var t = s(46632);
      const o = () => (0, t.jsx)("div", {
        className: d.maint,
        children: (0, t.jsxs)("div", {
          className: d.content,
          children: [(0, t.jsx)("div", {
            className: d.logo
          }), (0, t.jsx)("p", {
            children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
          }), (0, t.jsx)("a", {
            className: d.support,
            href: "https://support.rockstargames.com/",
            children: "https://support.rockstargames.com/"
          })]
        })
      })
    }
  }
]);