try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a4a89b74-e677-4977-a685-4d28699acfa2", e._sentryDebugIdIdentifier = "sentry-dbid-a4a89b74-e677-4977-a685-4d28699acfa2")
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
  [439], {
    439: (e, d, a) => {
      function n(e) {
        var d, a, o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var t = e.length;
            for (d = 0; d < t; d++) e[d] && (a = n(e[d])) && (o && (o += " "), o += a)
          } else
            for (a in e) e[a] && (o && (o += " "), o += a);
        return o
      }

      function o() {
        for (var e, d, a = 0, o = "", t = arguments.length; a < t; a++)(e = arguments[a]) && (d = n(e)) && (o && (o += " "), o += d);
        return o
      }
      a.r(d), a.d(d, {
        clsx: () => o,
        default: () => t
      });
      const t = o
    }
  }
]);