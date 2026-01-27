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
    10439: (e, d, f) => {
      function n(e) {
        var d, f, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (d = 0; d < a; d++) e[d] && (f = n(e[d])) && (t && (t += " "), t += f)
          } else
            for (f in e) e[f] && (t && (t += " "), t += f);
        return t
      }

      function t() {
        for (var e, d, f = 0, t = "", a = arguments.length; f < a; f++)(e = arguments[f]) && (d = n(e)) && (t && (t += " "), t += d);
        return t
      }
      f.r(d), f.d(d, {
        clsx: () => t,
        default: () => a
      });
      const a = t
    }
  }
]);