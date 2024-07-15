! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d9a61e22-9496-4f45-9dab-5712e059bdaa", e._sentryDebugIdIdentifier = "sentry-dbid-d9a61e22-9496-4f45-9dab-5712e059bdaa")
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
      d.e(5400).then(d.bind(d, 65400)), Promise.all([d.e(8092), d.e(9440), d.e(6872), d.e(1664), d.e(3061), d.e(8488), d.e(3924), d.e(104), d.e(4848)]).then(d.bind(d, 15536))
    }
  }
]);