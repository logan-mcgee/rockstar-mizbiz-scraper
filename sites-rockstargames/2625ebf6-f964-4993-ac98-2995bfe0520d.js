try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2625ebf6-f964-4993-ac98-2995bfe0520d", e._sentryDebugIdIdentifier = "sentry-dbid-2625ebf6-f964-4993-ac98-2995bfe0520d")
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
  [439], {
    10439: (e, a, t) => {
      function f(e) {
        var a, t, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (a = 0; a < s; a++) e[a] && (t = f(e[a])) && (n && (n += " "), n += t)
          } else
            for (t in e) e[t] && (n && (n += " "), n += t);
        return n
      }

      function n() {
        for (var e, a, t = 0, n = "", s = arguments.length; t < s; t++)(e = arguments[t]) && (a = f(e)) && (n && (n += " "), n += a);
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