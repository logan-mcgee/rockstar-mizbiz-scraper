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
      function a(e) {
        var d, n, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var t = e.length;
            for (d = 0; d < t; d++) e[d] && (n = a(e[d])) && (o && (o += " "), o += n)
          } else
            for (n in e) e[n] && (o && (o += " "), o += n);
        return o
      }

      function o() {
        for (var e, d, n = 0, o = "", t = arguments.length; n < t; n++)(e = arguments[n]) && (d = a(e)) && (o && (o += " "), o += d);
        return o
      }
      n.r(d), n.d(d, {
        clsx: () => o,
        default: () => t
      });
      const t = o
    }
  }
]);