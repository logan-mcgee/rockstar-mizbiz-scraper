try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "1d502229-2cd5-4ccc-9133-63acc15823b5", e._sentryDebugIdIdentifier = "sentry-dbid-1d502229-2cd5-4ccc-9133-63acc15823b5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4827], {
    4827(e, d, a) {
      Promise.all([a.e(7338), a.e(6896), a.e(3150), a.e(9158), a.e(3082), a.e(4017), a.e(283), a.e(5997), a.e(3331), a.e(188), a.e(7625), a.e(3952), a.e(2412)]).then(a.bind(a, 92412))
    }
  }
]);