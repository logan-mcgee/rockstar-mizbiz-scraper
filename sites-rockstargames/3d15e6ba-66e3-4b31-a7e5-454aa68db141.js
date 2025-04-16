! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3d15e6ba-66e3-4b31-a7e5-454aa68db141", e._sentryDebugIdIdentifier = "sentry-dbid-3d15e6ba-66e3-4b31-a7e5-454aa68db141")
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
      Promise.all([d.e(5499), d.e(5652)]).then(d.bind(d, 75652)), Promise.all([d.e(3365), d.e(6035), d.e(3806), d.e(7868), d.e(1720), d.e(2475), d.e(7040), d.e(2229), d.e(4853), d.e(9623), d.e(2246), d.e(5966), d.e(4281), d.e(5388)]).then(d.bind(d, 85388))
    }
  }
]);