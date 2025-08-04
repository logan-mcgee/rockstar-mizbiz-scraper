try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a5c2e2ca-8c42-43c9-834d-314b8a87b92c", e._sentryDebugIdIdentifier = "sentry-dbid-a5c2e2ca-8c42-43c9-834d-314b8a87b92c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4082], {
    84082: (e, t) => {
      var n;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function a() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = d(e, o(n)))
          }
          return e
        }

        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return a.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = d(t, n));
          return t
        }

        function d(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
          return a
        }.apply(t, [])) || (e.exports = n)
      }()
    }
  }
]);