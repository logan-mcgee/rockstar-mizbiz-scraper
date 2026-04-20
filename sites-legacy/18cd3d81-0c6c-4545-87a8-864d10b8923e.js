try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "18cd3d81-0c6c-4545-87a8-864d10b8923e", e._sentryDebugIdIdentifier = "sentry-dbid-18cd3d81-0c6c-4545-87a8-864d10b8923e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [439], {
    10439: (e, n, t) => {
      function d(e) {
        var n, t, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (n = 0; n < s; n++) e[n] && (t = d(e[n])) && (a && (a += " "), a += t)
          } else
            for (t in e) e[t] && (a && (a += " "), a += t);
        return a
      }

      function a() {
        for (var e, n, t = 0, a = "", s = arguments.length; t < s; t++)(e = arguments[t]) && (n = d(e)) && (a && (a += " "), a += n);
        return a
      }
      t.r(n), t.d(n, {
        clsx: () => a,
        default: () => s
      });
      const s = a
    }
  }
]);