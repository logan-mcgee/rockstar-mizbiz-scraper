! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f0f0fdf7-0804-48ce-9264-783ab5a39637", e._sentryDebugIdIdentifier = "sentry-dbid-f0f0fdf7-0804-48ce-9264-783ab5a39637")
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
    45672: (e, a, d) => {
      Promise.all([d.e(8174), d.e(5771), d.e(2229), d.e(9623), d.e(5966), d.e(4853), d.e(9010), d.e(3581), d.e(2918), d.e(2319), d.e(6892)]).then(d.bind(d, 66892))
    }
  }
]);