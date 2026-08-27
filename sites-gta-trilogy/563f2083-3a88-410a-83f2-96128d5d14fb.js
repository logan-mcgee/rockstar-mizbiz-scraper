try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "563f2083-3a88-410a-83f2-96128d5d14fb", e._sentryDebugIdIdentifier = "sentry-dbid-563f2083-3a88-410a-83f2-96128d5d14fb")
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
    4921(e, t, d) {
      function a(e) {
        var t, d, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (t = 0; t < f; t++) e[t] && (d = a(e[t])) && (n && (n += " "), n += d)
          } else
            for (d in e) e[d] && (n && (n += " "), n += d);
        return n
      }

      function n() {
        for (var e, t, d = 0, n = "", f = arguments.length; d < f; d++)(e = arguments[d]) && (t = a(e)) && (n && (n += " "), n += t);
        return n
      }
      d.r(t), d.d(t, {
        clsx: () => n
      });
      const f = n;
      d.d(t, ["default", 0, f])
    }
  }
]);