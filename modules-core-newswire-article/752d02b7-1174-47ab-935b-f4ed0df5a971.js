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
      function t(e) {
        var n, d, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++) e[n] && (d = t(e[n])) && (o && (o += " "), o += d)
          } else
            for (d in e) e[d] && (o && (o += " "), o += d);
        return o
      }

      function o() {
        for (var e, n, d = 0, o = "", a = arguments.length; d < a; d++)(e = arguments[d]) && (n = t(e)) && (o && (o += " "), o += n);
        return o
      }
      d.r(n), d.d(n, {
        clsx: () => o,
        default: () => a
      });
      const a = o
    }
  }
]);