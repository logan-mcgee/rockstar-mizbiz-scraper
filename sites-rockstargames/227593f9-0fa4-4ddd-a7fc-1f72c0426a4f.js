! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "227593f9-0fa4-4ddd-a7fc-1f72c0426a4f", e._sentryDebugIdIdentifier = "sentry-dbid-227593f9-0fa4-4ddd-a7fc-1f72c0426a4f")
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
  [760], {
    70760: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => t
      });
      var d = s(46632);
      const t = () => (0, d.jsxs)("div", {
        className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
        children: [(0, d.jsx)("div", {
          className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
        }), (0, d.jsx)("h3", {
          children: "Standard Deviation is now a part of Rockstar Games."
        })]
      })
    }
  }
]);