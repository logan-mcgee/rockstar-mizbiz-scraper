try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "21bbada1-8dfc-4328-ae41-e202e09a693c", e._sentryDebugIdIdentifier = "sentry-dbid-21bbada1-8dfc-4328-ae41-e202e09a693c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4921], {
    4921(e, a, n) {
      function t(e) {
        var a, n, d = "";
        if ("string" == typeof e || "number" == typeof e) d += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (a = 0; a < s; a++) e[a] && (n = t(e[a])) && (d && (d += " "), d += n)
          } else
            for (n in e) e[n] && (d && (d += " "), d += n);
        return d
      }

      function d() {
        for (var e, a, n = 0, d = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (a = t(e)) && (d && (d += " "), d += a);
        return d
      }
      n.r(a), n.d(a, {
        clsx: () => d,
        default: () => s
      });
      const s = d
    }
  }
]);