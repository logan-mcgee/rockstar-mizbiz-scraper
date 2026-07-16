try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f3840733-f3cc-4af8-b7a0-b75f0435d007", e._sentryDebugIdIdentifier = "sentry-dbid-f3840733-f3cc-4af8-b7a0-b75f0435d007")
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
  [921], {
    4921(e, a, t) {
      function n(e) {
        var a, t, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var d = e.length;
            for (a = 0; a < d; a++) e[a] && (t = n(e[a])) && (f && (f += " "), f += t)
          } else
            for (t in e) e[t] && (f && (f += " "), f += t);
        return f
      }

      function f() {
        for (var e, a, t = 0, f = "", d = arguments.length; t < d; t++)(e = arguments[t]) && (a = n(e)) && (f && (f += " "), f += a);
        return f
      }
      t.r(a), t.d(a, {
        clsx: () => f
      });
      const d = f;
      t.d(a, ["default", 0, d])
    }
  }
]);