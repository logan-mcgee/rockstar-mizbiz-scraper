try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8e179941-cd9c-4e13-a8fe-f1eff3d10d14", e._sentryDebugIdIdentifier = "sentry-dbid-8e179941-cd9c-4e13-a8fe-f1eff3d10d14")
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
  [842], {
    842(e, d, a) {
      Promise.all([a.e(6085), a.e(2977), a.e(7133), a.e(6199), a.e(3082), a.e(283), a.e(4017), a.e(9225), a.e(1270), a.e(5812), a.e(2909), a.e(3331), a.e(7347), a.e(8912), a.e(2199), a.e(8618), a.e(9912)]).then(a.bind(a, 3746))
    }
  }
]);