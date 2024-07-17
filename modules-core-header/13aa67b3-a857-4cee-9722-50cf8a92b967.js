! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "13aa67b3-a857-4cee-9722-50cf8a92b967", e._sentryDebugIdIdentifier = "sentry-dbid-13aa67b3-a857-4cee-9722-50cf8a92b967")
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
    89772: (e, a) => {
      var t;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function n() {
          for (var e = "", a = 0; a < arguments.length; a++) {
            var t = arguments[a];
            t && (e = d(e, o(t)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return n.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var a = "";
          for (var t in e) r.call(e, t) && e[t] && (a = d(a, t));
          return a
        }

        function d(e, a) {
          return a ? e ? e + " " + a : e + a : e
        }
        e.exports ? (n.default = n, e.exports = n) : void 0 === (t = function() {
          return n
        }.apply(a, [])) || (e.exports = t)
      }()
    }
  }
]);