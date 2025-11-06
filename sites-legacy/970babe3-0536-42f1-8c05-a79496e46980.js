try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "970babe3-0536-42f1-8c05-a79496e46980", e._sentryDebugIdIdentifier = "sentry-dbid-970babe3-0536-42f1-8c05-a79496e46980")
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
    10439: (e, a, n) => {
      function t(e) {
        var a, n, d = "";
        if ("string" == typeof e || "number" == typeof e) d += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (a = 0; a < s; a++) e[a] && (n = t(e[a])) && (d && (d += " "), d += n)
          } else
            for (n in e) e[n] && (d && (d += " "), d += n);
        return d
      }

      function d() {
        for (var e, a, n = 0, d = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (a = t(e)) && (d && (d += " "), d += a);
        return d
      }
      n.r(a), n.d(a, {
        clsx: () => d,
        default: () => s
      });
      const s = d
    }
  }
]);