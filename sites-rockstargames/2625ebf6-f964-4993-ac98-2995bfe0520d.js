try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2625ebf6-f964-4993-ac98-2995bfe0520d", e._sentryDebugIdIdentifier = "sentry-dbid-2625ebf6-f964-4993-ac98-2995bfe0520d")
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
    10439: (e, t, a) => {
      function n(e) {
        var t, a, s = "";
        if ("string" == typeof e || "number" == typeof e) s += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var f = e.length;
            for (t = 0; t < f; t++) e[t] && (a = n(e[t])) && (s && (s += " "), s += a)
          } else
            for (a in e) e[a] && (s && (s += " "), s += a);
        return s
      }

      function s() {
        for (var e, t, a = 0, s = "", f = arguments.length; a < f; a++)(e = arguments[a]) && (t = n(e)) && (s && (s += " "), s += t);
        return s
      }
      a.r(t), a.d(t, {
        clsx: () => s,
        default: () => f
      });
      const f = s
    }
  }
]);