! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "7d4cbabe-5a49-466f-b319-f6d95c40d652", e._sentryDebugIdIdentifier = "sentry-dbid-7d4cbabe-5a49-466f-b319-f6d95c40d652")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/modules-core-agegate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || []).push([
  [740], {
    740: e => {
      function d(e) {
        var d = new Error("Cannot find module '" + e + "'");
        throw d.code = "MODULE_NOT_FOUND", d
      }
      d.keys = () => [], d.resolve = d, d.id = 740, e.exports = d
    }
  }
]);
//# sourceMappingURL=a22b134d0fc14cc26cfcd8a5aad0530b.js.map