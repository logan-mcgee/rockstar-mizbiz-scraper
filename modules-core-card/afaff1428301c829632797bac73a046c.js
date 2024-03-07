! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "33c79685-c7c5-4506-965e-6e7547b842a3", e._sentryDebugIdIdentifier = "sentry-dbid-33c79685-c7c5-4506-965e-6e7547b842a3")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [420], {
    7420: (e, a, d) => {
      Promise.all([d.e(652), d.e(112), d.e(952)]).then(d.bind(d, 1952))
    }
  }
]);
//# sourceMappingURL=afaff1428301c829632797bac73a046c.js.map