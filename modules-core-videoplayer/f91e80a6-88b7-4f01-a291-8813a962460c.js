try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f91e80a6-88b7-4f01-a291-8813a962460c", e._sentryDebugIdIdentifier = "sentry-dbid-f91e80a6-88b7-4f01-a291-8813a962460c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [921], {
    4921(e, d, n) {
      function o(e) {
        var d, n, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var t = e.length;
            for (d = 0; d < t; d++) e[d] && (n = o(e[d])) && (a && (a += " "), a += n)
          } else
            for (n in e) e[n] && (a && (a += " "), a += n);
        return a
      }

      function a() {
        for (var e, d, n = 0, a = "", t = arguments.length; n < t; n++)(e = arguments[n]) && (d = o(e)) && (a && (a += " "), a += d);
        return a
      }
      n.r(d), n.d(d, {
        clsx: () => a,
        default: () => t
      });
      const t = a
    }
  }
]);