try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2716073-c01f-4d22-8ff0-a2a4c282ea58", e._sentryDebugIdIdentifier = "sentry-dbid-a2716073-c01f-4d22-8ff0-a2a4c282ea58")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [921], {
    4921(e, a, d) {
      function n(e) {
        var a, d, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var t = e.length;
            for (a = 0; a < t; a++) e[a] && (d = n(e[a])) && (o && (o += " "), o += d)
          } else
            for (d in e) e[d] && (o && (o += " "), o += d);
        return o
      }

      function o() {
        for (var e, a, d = 0, o = "", t = arguments.length; d < t; d++)(e = arguments[d]) && (a = n(e)) && (o && (o += " "), o += a);
        return o
      }
      d.r(a), d.d(a, {
        clsx: () => o
      });
      const t = o;
      d.d(a, ["default", 0, t])
    }
  }
]);