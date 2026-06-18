try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6b19bc94-6bb4-4b92-94b9-04e587f87f62", e._sentryDebugIdIdentifier = "sentry-dbid-6b19bc94-6bb4-4b92-94b9-04e587f87f62")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [921], {
    4921(e, n, d) {
      function t(e) {
        var n, d, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (n = 0; n < o; n++) e[n] && (d = t(e[n])) && (a && (a += " "), a += d)
          } else
            for (d in e) e[d] && (a && (a += " "), a += d);
        return a
      }

      function a() {
        for (var e, n, d = 0, a = "", o = arguments.length; d < o; d++)(e = arguments[d]) && (n = t(e)) && (a && (a += " "), a += n);
        return a
      }
      d.r(n), d.d(n, {
        clsx: () => a,
        default: () => o
      });
      const o = a
    }
  }
]);