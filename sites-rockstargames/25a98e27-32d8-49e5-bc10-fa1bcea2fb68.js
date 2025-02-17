! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "25a98e27-32d8-49e5-bc10-fa1bcea2fb68", e._sentryDebugIdIdentifier = "sentry-dbid-25a98e27-32d8-49e5-bc10-fa1bcea2fb68")
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
  [7902], {
    37902: (e, a, d) => {
      d.e(9747).then(d.bind(d, 29747)), Promise.all([d.e(1271), d.e(8496), d.e(6942), d.e(1095), d.e(2509), d.e(954), d.e(2229), d.e(9623), d.e(3058), d.e(5966), d.e(4281), d.e(4853), d.e(2363), d.e(899)]).then(d.bind(d, 21736))
    }
  }
]);