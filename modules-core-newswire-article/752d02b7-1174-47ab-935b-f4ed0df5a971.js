try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "752d02b7-1174-47ab-935b-f4ed0df5a971", e._sentryDebugIdIdentifier = "sentry-dbid-752d02b7-1174-47ab-935b-f4ed0df5a971")
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
    10439: (e, n, d) => {
      function a(e) {
        var n, d, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (n = 0; n < o; n++) e[n] && (d = a(e[n])) && (t && (t += " "), t += d)
          } else
            for (d in e) e[d] && (t && (t += " "), t += d);
        return t
      }

      function t() {
        for (var e, n, d = 0, t = "", o = arguments.length; d < o; d++)(e = arguments[d]) && (n = a(e)) && (t && (t += " "), t += n);
        return t
      }
      d.r(n), d.d(n, {
        clsx: () => t,
        default: () => o
      });
      const o = t
    }
  }
]);