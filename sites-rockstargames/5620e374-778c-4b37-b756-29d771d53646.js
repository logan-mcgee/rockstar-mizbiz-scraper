! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "5620e374-778c-4b37-b756-29d771d53646", e._sentryDebugIdIdentifier = "sentry-dbid-5620e374-778c-4b37-b756-29d771d53646")
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
  [4680], {
    54680: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => o
      });
      const t = {
        maint: "rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7",
        content: "rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9",
        logo: "rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446"
      };
      var d = a(91029);
      const o = () => (0, d.jsx)("div", {
        className: t.maint,
        children: (0, d.jsxs)("div", {
          className: t.content,
          children: [(0, d.jsx)("div", {
            className: t.logo
          }), (0, d.jsx)("p", {
            children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
          }), (0, d.jsx)("a", {
            className: t.support,
            href: "https://support.rockstargames.com/",
            children: "https://support.rockstargames.com/"
          })]
        })
      })
    }
  }
]);