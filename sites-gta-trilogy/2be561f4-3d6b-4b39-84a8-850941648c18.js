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
    439: (e, t, d) => {
      function n(e) {
        var t, d, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (d = n(e[t])) && (a && (a += " "), a += d)
          } else
            for (d in e) e[d] && (a && (a += " "), a += d);
        return a
      }

      function a() {
        for (var e, t, d = 0, a = "", o = arguments.length; d < o; d++)(e = arguments[d]) && (t = n(e)) && (a && (a += " "), a += t);
        return a
      }
      d.r(t), d.d(t, {
        clsx: () => a,
        default: () => o
      });
      const o = a
    }
  }
]);