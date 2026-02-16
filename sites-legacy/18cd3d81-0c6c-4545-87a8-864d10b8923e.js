try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "18cd3d81-0c6c-4545-87a8-864d10b8923e", e._sentryDebugIdIdentifier = "sentry-dbid-18cd3d81-0c6c-4545-87a8-864d10b8923e")
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
    10439: (e, d, n) => {
      function t(e) {
        var d, n, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (d = 0; d < s; d++) e[d] && (n = t(e[d])) && (a && (a += " "), a += n)
          } else
            for (n in e) e[n] && (a && (a += " "), a += n);
        return a
      }

      function a() {
        for (var e, d, n = 0, a = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (d = t(e)) && (a && (a += " "), a += d);
        return a
      }
      n.r(d), n.d(d, {
        clsx: () => a,
        default: () => s
      });
      const s = a
    }
  }
]);