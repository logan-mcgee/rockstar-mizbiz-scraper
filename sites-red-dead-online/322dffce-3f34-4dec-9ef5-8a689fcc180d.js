try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "322dffce-3f34-4dec-9ef5-8a689fcc180d", e._sentryDebugIdIdentifier = "sentry-dbid-322dffce-3f34-4dec-9ef5-8a689fcc180d")
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
    4921(e, d, n) {
      function a(e) {
        var d, n, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (d = 0; d < f; d++) e[d] && (n = a(e[d])) && (t && (t += " "), t += n)
          } else
            for (n in e) e[n] && (t && (t += " "), t += n);
        return t
      }

      function t() {
        for (var e, d, n = 0, t = "", f = arguments.length; n < f; n++)(e = arguments[n]) && (d = a(e)) && (t && (t += " "), t += d);
        return t
      }
      n.r(d), n.d(d, {
        clsx: () => t,
        default: () => f
      });
      const f = t
    }
  }
]);