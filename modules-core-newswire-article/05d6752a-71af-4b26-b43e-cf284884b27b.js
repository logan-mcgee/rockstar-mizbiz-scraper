try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "05d6752a-71af-4b26-b43e-cf284884b27b", e._sentryDebugIdIdentifier = "sentry-dbid-05d6752a-71af-4b26-b43e-cf284884b27b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [4921], {
    4921(e, n, a) {
      function d(e) {
        var n, a, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (n = 0; n < o; n++) e[n] && (a = d(e[n])) && (t && (t += " "), t += a)
          } else
            for (a in e) e[a] && (t && (t += " "), t += a);
        return t
      }

      function t() {
        for (var e, n, a = 0, t = "", o = arguments.length; a < o; a++)(e = arguments[a]) && (n = d(e)) && (t && (t += " "), t += n);
        return t
      }
      a.r(n), a.d(n, {
        clsx: () => t,
        default: () => o
      });
      const o = t
    }
  }
]);