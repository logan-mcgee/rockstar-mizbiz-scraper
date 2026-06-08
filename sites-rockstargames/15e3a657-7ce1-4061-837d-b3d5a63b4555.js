try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "15e3a657-7ce1-4061-837d-b3d5a63b4555", e._sentryDebugIdIdentifier = "sentry-dbid-15e3a657-7ce1-4061-837d-b3d5a63b4555")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4827], {
    4827(e, d, a) {
      a.e(7078).then(a.bind(a, 7078)), Promise.all([a.e(4577), a.e(9512), a.e(2631), a.e(6797), a.e(6608), a.e(9012), a.e(1589), a.e(4089), a.e(6583), a.e(5644), a.e(3082), a.e(4017), a.e(6416), a.e(1270), a.e(3710), a.e(2909), a.e(6760), a.e(5997), a.e(3331), a.e(2199), a.e(5002), a.e(2808), a.e(8415), a.e(3517), a.e(1215), a.e(223)]).then(a.bind(a, 85318))
    }
  }
]);