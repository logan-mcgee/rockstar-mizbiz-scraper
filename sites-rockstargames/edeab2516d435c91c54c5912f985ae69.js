! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d4d8adcc-6c42-4c60-a0a6-574d75c5697a", e._sentryDebugIdIdentifier = "sentry-dbid-d4d8adcc-6c42-4c60-a0a6-574d75c5697a")
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
  [6236], {
    46236: (e, a, d) => {
      d.e(5400).then(d.bind(d, 65400)), Promise.all([d.e(8092), d.e(4268), d.e(6872), d.e(1664), d.e(3061), d.e(8488), d.e(3924), d.e(104), d.e(4848)]).then(d.bind(d, 15536))
    }
  }
]);