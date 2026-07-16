try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "461fced3-f8fe-437c-aa9e-923405bb2e75", e._sentryDebugIdIdentifier = "sentry-dbid-461fced3-f8fe-437c-aa9e-923405bb2e75")
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
  [4921], {
    4921(e, a, n) {
      function d(e) {
        var a, n, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (a = 0; a < f; a++) e[a] && (n = d(e[a])) && (t && (t += " "), t += n)
          } else
            for (n in e) e[n] && (t && (t += " "), t += n);
        return t
      }

      function t() {
        for (var e, a, n = 0, t = "", f = arguments.length; n < f; n++)(e = arguments[n]) && (a = d(e)) && (t && (t += " "), t += a);
        return t
      }
      n.r(a), n.d(a, {
        clsx: () => t
      });
      const f = t;
      n.d(a, ["default", 0, f])
    }
  }
]);