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
      function a(e) {
        var t, n, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = a(e[t])) && (f && (f += " "), f += n)
          } else
            for (n in e) e[n] && (f && (f += " "), f += n);
        return f
      }

      function f() {
        for (var e, t, n = 0, f = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = a(e)) && (f && (f += " "), f += t);
        return f
      }
      n.r(t), n.d(t, {
        clsx: () => f,
        default: () => o
      });
      const o = f
    }
  }
]);