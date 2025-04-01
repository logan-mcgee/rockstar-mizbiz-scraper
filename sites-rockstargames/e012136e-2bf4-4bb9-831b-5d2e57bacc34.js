! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e012136e-2bf4-4bb9-831b-5d2e57bacc34", e._sentryDebugIdIdentifier = "sentry-dbid-e012136e-2bf4-4bb9-831b-5d2e57bacc34")
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
  [5672], {
    45672: (e, a, d) => {
      Promise.all([d.e(5499), d.e(5652)]).then(d.bind(d, 75652)), Promise.all([d.e(6035), d.e(3806), d.e(5442), d.e(9154), d.e(1720), d.e(3476), d.e(5620), d.e(2229), d.e(9623), d.e(2246), d.e(4853), d.e(5966), d.e(4281), d.e(5388)]).then(d.bind(d, 85388))
    }
  }
]);