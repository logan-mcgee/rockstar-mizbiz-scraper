try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "970babe3-0536-42f1-8c05-a79496e46980", e._sentryDebugIdIdentifier = "sentry-dbid-970babe3-0536-42f1-8c05-a79496e46980")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [439], {
    10439: (e, d, a) => {
      function n(e) {
        var d, a, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (d = 0; d < f; d++) e[d] && (a = n(e[d])) && (t && (t += " "), t += a)
          } else
            for (a in e) e[a] && (t && (t += " "), t += a);
        return t
      }

      function t() {
        for (var e, d, a = 0, t = "", f = arguments.length; a < f; a++)(e = arguments[a]) && (d = n(e)) && (t && (t += " "), t += d);
        return t
      }
      a.r(d), a.d(d, {
        clsx: () => t,
        default: () => f
      });
      const f = t
    }
  }
]);