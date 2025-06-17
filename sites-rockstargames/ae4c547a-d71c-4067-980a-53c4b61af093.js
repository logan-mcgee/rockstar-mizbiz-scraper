! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ae4c547a-d71c-4067-980a-53c4b61af093", e._sentryDebugIdIdentifier = "sentry-dbid-ae4c547a-d71c-4067-980a-53c4b61af093")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [5322], {
    65322: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => d
      });
      var t = s(25854);
      const d = () => (0, t.jsxs)("div", {
        className: "rockstargames-sites-rockstargamesde90457c42504bea6b08059e335add00",
        children: [(0, t.jsx)("div", {
          className: "rockstargames-sites-rockstargamesf42266067086be596ce3210aca0c54eb"
        }), (0, t.jsx)("h3", {
          children: "Standard Deviation is now a part of Rockstar Games."
        })]
      })
    }
  }
]);