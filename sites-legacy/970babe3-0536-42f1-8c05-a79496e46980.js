try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "970babe3-0536-42f1-8c05-a79496e46980", e._sentryDebugIdIdentifier = "sentry-dbid-970babe3-0536-42f1-8c05-a79496e46980")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [439], {
    10439: (e, a, n) => {
      function t(e) {
        var a, n, f = "";
        if ("string" == typeof e || "number" == typeof e) f += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var d = e.length;
            for (a = 0; a < d; a++) e[a] && (n = t(e[a])) && (f && (f += " "), f += n)
          } else
            for (n in e) e[n] && (f && (f += " "), f += n);
        return f
      }

      function f() {
        for (var e, a, n = 0, f = "", d = arguments.length; n < d; n++)(e = arguments[n]) && (a = t(e)) && (f && (f += " "), f += a);
        return f
      }
      n.r(a), n.d(a, {
        clsx: () => f,
        default: () => d
      });
      const d = f
    }
  }
]);