try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2ae7a6a-8636-4719-862a-40203a485ebf", e._sentryDebugIdIdentifier = "sentry-dbid-a2ae7a6a-8636-4719-862a-40203a485ebf")
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
  [439], {
    10439(e, a, n) {
      function t(e) {
        var a, n, d = "";
        if ("string" == typeof e || "number" == typeof e) d += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (a = 0; a < o; a++) e[a] && (n = t(e[a])) && (d && (d += " "), d += n)
          } else
            for (n in e) e[n] && (d && (d += " "), d += n);
        return d
      }

      function d() {
        for (var e, a, n = 0, d = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (a = t(e)) && (d && (d += " "), d += a);
        return d
      }
      n.r(a), n.d(a, {
        clsx: () => d,
        default: () => o
      });
      const o = d
    }
  }
]);