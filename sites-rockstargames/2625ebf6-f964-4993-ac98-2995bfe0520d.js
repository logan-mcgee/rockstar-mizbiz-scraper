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
    10439: (e, t, d) => {
      function n(e) {
        var t, d, s = "";
        if ("string" == typeof e || "number" == typeof e) s += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (d = n(e[t])) && (s && (s += " "), s += d)
          } else
            for (d in e) e[d] && (s && (s += " "), s += d);
        return s
      }

      function s() {
        for (var e, t, d = 0, s = "", a = arguments.length; d < a; d++)(e = arguments[d]) && (t = n(e)) && (s && (s += " "), s += t);
        return s
      }
      d.r(t), d.d(t, {
        clsx: () => s,
        default: () => a
      });
      const a = s
    }
  }
]);