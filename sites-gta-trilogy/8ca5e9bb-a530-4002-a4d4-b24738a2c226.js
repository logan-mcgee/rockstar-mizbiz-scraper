try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8ca5e9bb-a530-4002-a4d4-b24738a2c226", e._sentryDebugIdIdentifier = "sentry-dbid-8ca5e9bb-a530-4002-a4d4-b24738a2c226")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [439], {
    10439: (e, a, t) => {
      function n(e) {
        var a, t, d = "";
        if ("string" == typeof e || "number" == typeof e) d += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (a = 0; a < o; a++) e[a] && (t = n(e[a])) && (d && (d += " "), d += t)
          } else
            for (t in e) e[t] && (d && (d += " "), d += t);
        return d
      }

      function d() {
        for (var e, a, t = 0, d = "", o = arguments.length; t < o; t++)(e = arguments[t]) && (a = n(e)) && (d && (d += " "), d += a);
        return d
      }
      t.r(a), t.d(a, {
        clsx: () => d,
        default: () => o
      });
      const o = d
    }
  }
]);