try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "64fb7fc5-725d-4375-9fb1-a687f9aa1873", e._sentryDebugIdIdentifier = "sentry-dbid-64fb7fc5-725d-4375-9fb1-a687f9aa1873")
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
  [79], {
    7213(e, n, o) {
      o.d(n, {
        X: () => t
      });
      const t = "undefined" == typeof window
    },
    1107(e, n, o) {
      o.d(n, {
        v: () => s
      });
      var t = o(1270);
      const a = new Map;

      function d(e, n) {
        if (e === n) return e;
        const o = a.get(e);
        if (o) return o.forEach(e => e(n)), n;
        const t = a.get(n);
        return t ? (t.forEach(n => n(e)), e) : n
      }

      function f(...e) {
        return (...n) => {
          for (const o of e) "function" == typeof o && o(...n)
        }
      }

      function s(...e) {
        const n = {
          ...e[0]
        };
        for (let o = 1; o < e.length; o++) {
          const a = e[o];
          for (const e in a) {
            const o = n[e],
              s = a[e];
            "function" == typeof o && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = f(o, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof o || "string" != typeof s ? "id" === e && o && s ? n.id = d(o, s) : n[e] = void 0 !== s ? s : o : n[e] = (0, t.clsx)(o, s)
          }
        }
        return n
      }
    }
  }
]);