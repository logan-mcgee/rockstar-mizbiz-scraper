try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a0148a3e-16dd-4f07-aa44-34bf8b09ce73", e._sentryDebugIdIdentifier = "sentry-dbid-a0148a3e-16dd-4f07-aa44-34bf8b09ce73")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4921], {
    4921(e, a, t) {
      function d(e) {
        var a, t, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (a = 0; a < s; a++) e[a] && (t = d(e[a])) && (n && (n += " "), n += t)
          } else
            for (t in e) e[t] && (n && (n += " "), n += t);
        return n
      }

      function n() {
        for (var e, a, t = 0, n = "", s = arguments.length; t < s; t++)(e = arguments[t]) && (a = d(e)) && (n && (n += " "), n += a);
        return n
      }
      t.r(a), t.d(a, {
        clsx: () => n,
        default: () => s
      });
      const s = n
    }
  }
]);