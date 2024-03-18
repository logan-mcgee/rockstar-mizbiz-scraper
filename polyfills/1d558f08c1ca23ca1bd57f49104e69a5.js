! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a1ab7aad-1a76-4280-a731-1a43e7b69c76", e._sentryDebugIdIdentifier = "sentry-dbid-a1ab7aad-1a76-4280-a731-1a43e7b69c76")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/polyfills",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || []).push([
  [152], {
    7152: (e, a, d) => {
      d.r(a), d(4632), d(4336), d(2004), d(9136), d(4536), d(5019), d(163), d(2840), d(3584), d(2492), d(4624), d(5571), d(3660), d(2676), d(8680), d(5168), d(8956), d(560), d(5040)
    }
  }
]);