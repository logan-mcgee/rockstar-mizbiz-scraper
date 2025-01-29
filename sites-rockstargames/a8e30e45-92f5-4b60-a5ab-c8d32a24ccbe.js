! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a8e30e45-92f5-4b60-a5ab-c8d32a24ccbe", e._sentryDebugIdIdentifier = "sentry-dbid-a8e30e45-92f5-4b60-a5ab-c8d32a24ccbe")
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
  [2756], {
    72756: (e, a, d) => {
      d.e(5490).then(d.bind(d, 95490)), Promise.all([d.e(9819), d.e(7182), d.e(8384), d.e(8322), d.e(1629), d.e(2229), d.e(9623), d.e(7170), d.e(9375), d.e(4853), d.e(1885)]).then(d.bind(d, 58548))
    }
  }
]);