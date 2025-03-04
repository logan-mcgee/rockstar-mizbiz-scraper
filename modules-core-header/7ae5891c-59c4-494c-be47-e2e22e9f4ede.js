! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ae5891c-59c4-494c-be47-e2e22e9f4ede", e._sentryDebugIdIdentifier = "sentry-dbid-7ae5891c-59c4-494c-be47-e2e22e9f4ede")
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
  [5485], {
    65485: (e, t) => {
      var r;
      ! function() {
        "use strict";
        var n = {}.hasOwnProperty;

        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var r = arguments[t];
            r && (e = d(e, a(r)))
          }
          return e
        }

        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var r in e) n.call(e, r) && e[r] && (t = d(t, r));
          return t
        }

        function d(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
          return o
        }.apply(t, [])) || (e.exports = r)
      }()
    }
  }
]);