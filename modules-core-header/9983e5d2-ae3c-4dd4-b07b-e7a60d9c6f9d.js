try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "9983e5d2-ae3c-4dd4-b07b-e7a60d9c6f9d", e._sentryDebugIdIdentifier = "sentry-dbid-9983e5d2-ae3c-4dd4-b07b-e7a60d9c6f9d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [439], {
    10439: (e, d, n) => {
      function o(e) {
        var d, n, t = "";
        if ("string" == typeof e || "number" == typeof e) t += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (d = 0; d < a; d++) e[d] && (n = o(e[d])) && (t && (t += " "), t += n)
          } else
            for (n in e) e[n] && (t && (t += " "), t += n);
        return t
      }

      function t() {
        for (var e, d, n = 0, t = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (d = o(e)) && (t && (t += " "), t += d);
        return t
      }
      n.r(d), n.d(d, {
        clsx: () => t,
        default: () => a
      });
      const a = t
    }
  }
]);