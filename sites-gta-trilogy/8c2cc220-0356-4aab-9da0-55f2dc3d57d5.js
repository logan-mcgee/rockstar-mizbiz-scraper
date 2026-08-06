try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8c2cc220-0356-4aab-9da0-55f2dc3d57d5", e._sentryDebugIdIdentifier = "sentry-dbid-8c2cc220-0356-4aab-9da0-55f2dc3d57d5")
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
    4921(e, d, a) {
      function t(e) {
        var d, a, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (d = 0; d < o; d++) e[d] && (a = t(e[d])) && (n && (n += " "), n += a)
          } else
            for (a in e) e[a] && (n && (n += " "), n += a);
        return n
      }

      function n() {
        for (var e, d, a = 0, n = "", o = arguments.length; a < o; a++)(e = arguments[a]) && (d = t(e)) && (n && (n += " "), n += d);
        return n
      }
      a.r(d), a.d(d, {
        clsx: () => n
      });
      const o = n;
      a.d(d, ["default", 0, o])
    }
  }
]);