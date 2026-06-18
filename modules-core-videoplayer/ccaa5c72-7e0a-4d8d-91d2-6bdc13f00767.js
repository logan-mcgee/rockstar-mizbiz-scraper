try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ccaa5c72-7e0a-4d8d-91d2-6bdc13f00767", e._sentryDebugIdIdentifier = "sentry-dbid-ccaa5c72-7e0a-4d8d-91d2-6bdc13f00767")
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
  [827], {
    4827(e, d, a) {
      Promise.all([a.e(447), a.e(82), a.e(283), a.e(909), a.e(416), a.e(17), a.e(331), a.e(815), a.e(431), a.e(270), a.e(199), a.e(389), a.e(837)]).then(a.bind(a, 7837))
    }
  }
]);