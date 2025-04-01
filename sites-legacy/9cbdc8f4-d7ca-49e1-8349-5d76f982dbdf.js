! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9cbdc8f4-d7ca-49e1-8349-5d76f982dbdf", e._sentryDebugIdIdentifier = "sentry-dbid-9cbdc8f4-d7ca-49e1-8349-5d76f982dbdf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9964], {
    16465: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05f9a77c98ced3942631978d7672ad20.svg"
    },
    69308: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/23bdc67ffcc24a66b8fe01ae5c40a7ed.svg"
    }
  }
]);