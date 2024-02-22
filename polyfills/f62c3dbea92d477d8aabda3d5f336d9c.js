! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a1ab7aad-1a76-4280-a731-1a43e7b69c76", e._sentryDebugIdIdentifier = "sentry-dbid-a1ab7aad-1a76-4280-a731-1a43e7b69c76")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/polyfills",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_polyfills = self.webpackChunk_rockstargames_polyfills || []).push([
  [152], {
    7152: (e, a, l) => {
      l.r(a), l(4632), l(4336), l(2004), l(9136), l(4536), l(5019), l(163), l(2840), l(3584), l(2492), l(4624), l(5571), l(3660), l(2676), l(8680), l(5168), l(8956), l(560), l(5040)
    }
  }
]);