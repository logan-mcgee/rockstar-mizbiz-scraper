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
    4921(e, d, a) {
      function n(e) {
        var d, a, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var t = e.length;
            for (d = 0; d < t; d++) e[d] && (a = n(e[d])) && (f && (f += " "), f += a)
          } else
            for (a in e) e[a] && (f && (f += " "), f += a);
        return f
      }

      function f() {
        for (var e, d, a = 0, f = "", t = arguments.length; a < t; a++)(e = arguments[a]) && (d = n(e)) && (f && (f += " "), f += d);
        return f
      }
      a.r(d), a.d(d, {
        clsx: () => f,
        default: () => t
      });
      const t = f
    }
  }
]);