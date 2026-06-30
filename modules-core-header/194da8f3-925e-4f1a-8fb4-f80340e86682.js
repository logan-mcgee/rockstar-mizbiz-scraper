try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "194da8f3-925e-4f1a-8fb4-f80340e86682", e._sentryDebugIdIdentifier = "sentry-dbid-194da8f3-925e-4f1a-8fb4-f80340e86682")
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
    4921(e, a, d) {
      function f(e) {
        var a, d, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (a = 0; a < o; a++) e[a] && (d = f(e[a])) && (n && (n += " "), n += d)
          } else
            for (d in e) e[d] && (n && (n += " "), n += d);
        return n
      }

      function n() {
        for (var e, a, d = 0, n = "", o = arguments.length; d < o; d++)(e = arguments[d]) && (a = f(e)) && (n && (n += " "), n += a);
        return n
      }
      d.r(a), d.d(a, {
        clsx: () => n,
        default: () => o
      });
      const o = n
    }
  }
]);