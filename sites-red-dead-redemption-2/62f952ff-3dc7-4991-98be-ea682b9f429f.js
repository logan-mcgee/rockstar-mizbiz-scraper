try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "62f952ff-3dc7-4991-98be-ea682b9f429f", e._sentryDebugIdIdentifier = "sentry-dbid-62f952ff-3dc7-4991-98be-ea682b9f429f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [439], {
    10439: (e, d, n) => {
      function t(e) {
        var d, n, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (d = 0; d < a; d++) e[d] && (n = t(e[d])) && (f && (f += " "), f += n)
          } else
            for (n in e) e[n] && (f && (f += " "), f += n);
        return f
      }

      function f() {
        for (var e, d, n = 0, f = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (d = t(e)) && (f && (f += " "), f += d);
        return f
      }
      n.r(d), n.d(d, {
        clsx: () => f,
        default: () => a
      });
      const a = f
    }
  }
]);