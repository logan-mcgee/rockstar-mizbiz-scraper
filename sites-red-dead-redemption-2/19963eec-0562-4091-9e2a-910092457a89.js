try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "19963eec-0562-4091-9e2a-910092457a89", e._sentryDebugIdIdentifier = "sentry-dbid-19963eec-0562-4091-9e2a-910092457a89")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [921], {
    4921(e, d, n) {
      function t(e) {
        var d, n, a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (d = 0; d < o; d++) e[d] && (n = t(e[d])) && (a && (a += " "), a += n)
          } else
            for (n in e) e[n] && (a && (a += " "), a += n);
        return a
      }

      function a() {
        for (var e, d, n = 0, a = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (d = t(e)) && (a && (a += " "), a += d);
        return a
      }
      n.r(d), n.d(d, {
        clsx: () => a,
        default: () => o
      });
      const o = a
    }
  }
]);