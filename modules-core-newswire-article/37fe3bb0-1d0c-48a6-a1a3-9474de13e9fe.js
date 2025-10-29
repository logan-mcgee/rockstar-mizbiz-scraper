try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "37fe3bb0-1d0c-48a6-a1a3-9474de13e9fe", e._sentryDebugIdIdentifier = "sentry-dbid-37fe3bb0-1d0c-48a6-a1a3-9474de13e9fe")
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
    10439: (e, a, d) => {
      function n(e) {
        var a, d, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (a = 0; a < o; a++) e[a] && (d = n(e[a])) && (t && (t += " "), t += d)
          } else
            for (d in e) e[d] && (t && (t += " "), t += d);
        return t
      }

      function t() {
        for (var e, a, d = 0, t = "", o = arguments.length; d < o; d++)(e = arguments[d]) && (a = n(e)) && (t && (t += " "), t += a);
        return t
      }
      d.r(a), d.d(a, {
        clsx: () => t,
        default: () => o
      });
      const o = t
    }
  }
]);