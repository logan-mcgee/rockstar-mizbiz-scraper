try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0a69b2cf-a465-4930-82d3-cb55156b3b7b", e._sentryDebugIdIdentifier = "sentry-dbid-0a69b2cf-a465-4930-82d3-cb55156b3b7b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9704], {
    89704: (e, t) => {
      var n;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = d(e, a(n)))
          }
          return e
        }

        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = d(t, n));
          return t
        }

        function d(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
          return o
        }.apply(t, [])) || (e.exports = n)
      }()
    }
  }
]);