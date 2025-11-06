try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9bf84a3a-fc5c-429a-a850-c22e35bed5dc", e._sentryDebugIdIdentifier = "sentry-dbid-9bf84a3a-fc5c-429a-a850-c22e35bed5dc")
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
  [439], {
    439: (e, t, a) => {
      function d(e) {
        var t, a, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (a = d(e[t])) && (n && (n += " "), n += a)
          } else
            for (a in e) e[a] && (n && (n += " "), n += a);
        return n
      }

      function n() {
        for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++)(e = arguments[a]) && (t = d(e)) && (n && (n += " "), n += t);
        return n
      }
      a.r(t), a.d(t, {
        clsx: () => n,
        default: () => o
      });
      const o = n
    }
  }
]);