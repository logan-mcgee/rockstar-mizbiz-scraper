! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e514c25b-ba64-465b-9fff-c4a1661627f0", e._sentryDebugIdIdentifier = "sentry-dbid-e514c25b-ba64-465b-9fff-c4a1661627f0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [6470], {
    6470: (e, a, l) => {
      Promise.all([l.e(9334), l.e(3041), l.e(5771), l.e(2229), l.e(4853), l.e(6682), l.e(5966), l.e(7637), l.e(3988), l.e(1069), l.e(1590)]).then(l.bind(l, 21590))
    }
  }
]);