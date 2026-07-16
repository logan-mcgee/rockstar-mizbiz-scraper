try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7ed1fd21-de93-4707-a196-ece864d2999e", e._sentryDebugIdIdentifier = "sentry-dbid-7ed1fd21-de93-4707-a196-ece864d2999e")
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
  [460], {
    7460(e, n, o) {
      o.d(n, {
        v: () => f
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

      function s(...e) {
        return (...n) => {
          for (const o of e) "function" == typeof o && o(...n)
        }
      }

      function f(...e) {
        const n = {
          ...e[0]
        };
        for (let o = 1; o < e.length; o++) {
          const a = e[o];
          for (const e in a) {
            const o = n[e],
              f = a[e];
            "function" == typeof o && "function" == typeof f && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = s(o, f) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof o || "string" != typeof f ? "id" === e && o && f ? n.id = d(o, f) : n[e] = void 0 !== f ? f : o : n[e] = (0, t.clsx)(o, f)
          }
        }
        return n
      }
    }
  }
]);