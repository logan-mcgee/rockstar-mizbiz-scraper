try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "194da8f3-925e-4f1a-8fb4-f80340e86682", e._sentryDebugIdIdentifier = "sentry-dbid-194da8f3-925e-4f1a-8fb4-f80340e86682")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4921], {
    4921(e, d, n) {
      function a(e) {
        var d, n, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (d = 0; d < o; d++) e[d] && (n = a(e[d])) && (f && (f += " "), f += n)
          } else
            for (n in e) e[n] && (f && (f += " "), f += n);
        return f
      }

      function f() {
        for (var e, d, n = 0, f = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (d = a(e)) && (f && (f += " "), f += d);
        return f
      }
      n.r(d), n.d(d, {
        clsx: () => f,
        default: () => o
      });
      const o = f
    }
  }
]);