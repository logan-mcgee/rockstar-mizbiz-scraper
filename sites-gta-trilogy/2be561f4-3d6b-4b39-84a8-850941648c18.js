try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2be561f4-3d6b-4b39-84a8-850941648c18", e._sentryDebugIdIdentifier = "sentry-dbid-2be561f4-3d6b-4b39-84a8-850941648c18")
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
    439: (e, t, a) => {
      function n(e) {
        var t, a, d = "";
        if ("string" == typeof e || "number" == typeof e) d += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (t = 0; t < f; t++) e[t] && (a = n(e[t])) && (d && (d += " "), d += a)
          } else
            for (a in e) e[a] && (d && (d += " "), d += a);
        return d
      }

      function d() {
        for (var e, t, a = 0, d = "", f = arguments.length; a < f; a++)(e = arguments[a]) && (t = n(e)) && (d && (d += " "), d += t);
        return d
      }
      a.r(t), a.d(t, {
        clsx: () => d,
        default: () => f
      });
      const f = d
    }
  }
]);