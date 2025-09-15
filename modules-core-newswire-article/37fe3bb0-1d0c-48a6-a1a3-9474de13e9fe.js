try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "37fe3bb0-1d0c-48a6-a1a3-9474de13e9fe", e._sentryDebugIdIdentifier = "sentry-dbid-37fe3bb0-1d0c-48a6-a1a3-9474de13e9fe")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [439], {
    10439: (e, n, a) => {
      function d(e) {
        var n, a, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (n = 0; n < f; n++) e[n] && (a = d(e[n])) && (t && (t += " "), t += a)
          } else
            for (a in e) e[a] && (t && (t += " "), t += a);
        return t
      }

      function t() {
        for (var e, n, a = 0, t = "", f = arguments.length; a < f; a++)(e = arguments[a]) && (n = d(e)) && (t && (t += " "), t += n);
        return t
      }
      a.r(n), a.d(n, {
        clsx: () => t,
        default: () => f
      });
      const f = t
    }
  }
]);