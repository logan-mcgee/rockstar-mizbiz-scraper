try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "12de1674-33e1-44b7-a6ee-2889c3957bbe", e._sentryDebugIdIdentifier = "sentry-dbid-12de1674-33e1-44b7-a6ee-2889c3957bbe")
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
  [297], {
    6297(e, n, o) {
      o.d(n, {
        v: () => f
      });
      var t = o(1270);
      const d = new Map;

      function a(e, n) {
        if (e === n) return e;
        const o = d.get(e);
        if (o) return o.forEach(e => e(n)), n;
        const t = d.get(n);
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
          const d = e[o];
          for (const e in d) {
            const o = n[e],
              f = d[e];
            "function" == typeof o && "function" == typeof f && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = s(o, f) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof o || "string" != typeof f ? "id" === e && o && f ? n.id = a(o, f) : n[e] = void 0 !== f ? f : o : n[e] = (0, t.clsx)(o, f)
          }
        }
        return n
      }
    }
  }
]);