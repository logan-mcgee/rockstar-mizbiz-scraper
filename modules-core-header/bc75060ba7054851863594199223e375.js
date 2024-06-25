! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13aa67b3-a857-4cee-9722-50cf8a92b967", e._sentryDebugIdIdentifier = "sentry-dbid-13aa67b3-a857-4cee-9722-50cf8a92b967")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [772], {
    89772: (e, t) => {
      var r;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function a() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r && (e = d(e, o(r)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return a.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var r in e) n.call(e, r) && e[r] && (t = d(t, r));
          return t
        }

        function d(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (a.default = a, e.exports = a) : void 0 === (r = function() {
          return a
        }.apply(t, [])) || (e.exports = r)
      }()
    }
  }
]);