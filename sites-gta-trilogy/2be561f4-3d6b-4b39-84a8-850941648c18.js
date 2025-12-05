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
    439: (e, t, n) => {
      function d(e) {
        var t, n, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = d(e[t])) && (a && (a += " "), a += n)
          } else
            for (n in e) e[n] && (a && (a += " "), a += n);
        return a
      }

      function a() {
        for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = d(e)) && (a && (a += " "), a += t);
        return a
      }
      n.r(t), n.d(t, {
        clsx: () => a,
        default: () => o
      });
      const o = a
    }
  }
]);