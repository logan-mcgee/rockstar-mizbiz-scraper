! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f0f0fdf7-0804-48ce-9264-783ab5a39637", e._sentryDebugIdIdentifier = "sentry-dbid-f0f0fdf7-0804-48ce-9264-783ab5a39637")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [5672], {
    45672: (e, d, a) => {
      Promise.all([a.e(8174), a.e(5771), a.e(2229), a.e(9623), a.e(5966), a.e(4853), a.e(9010), a.e(3581), a.e(2918), a.e(2319), a.e(6892)]).then(a.bind(a, 66892))
    }
  }
]);