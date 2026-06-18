try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d461a94d-2d8c-4f0d-9d74-2429c716ca74", e._sentryDebugIdIdentifier = "sentry-dbid-d461a94d-2d8c-4f0d-9d74-2429c716ca74")
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
  [71], {
    371(e, n, o) {
      o.d(n, {
        X: () => d
      });
      const d = "undefined" == typeof window
    },
    1985(e, n, o) {
      o.d(n, {
        v: () => a
      });
      var d = o(1270);
      const t = new Map;

      function f(e, n) {
        if (e === n) return e;
        const o = t.get(e);
        if (o) return o.forEach(e => e(n)), n;
        const d = t.get(n);
        return d ? (d.forEach(n => n(e)), e) : n
      }

      function s(...e) {
        return (...n) => {
          for (const o of e) "function" == typeof o && o(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let o = 1; o < e.length; o++) {
          const t = e[o];
          for (const e in t) {
            const o = n[e],
              a = t[e];
            "function" == typeof o && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = s(o, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof o || "string" != typeof a ? "id" === e && o && a ? n.id = f(o, a) : n[e] = void 0 !== a ? a : o : n[e] = (0, d.clsx)(o, a)
          }
        }
        return n
      }
    }
  }
]);