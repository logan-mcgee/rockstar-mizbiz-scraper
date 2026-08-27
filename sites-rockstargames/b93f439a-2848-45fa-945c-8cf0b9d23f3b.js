try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b93f439a-2848-45fa-945c-8cf0b9d23f3b", e._sentryDebugIdIdentifier = "sentry-dbid-b93f439a-2848-45fa-945c-8cf0b9d23f3b")
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
  [842], {
    10842(e, d, a) {
      a.e(8490).then(a.bind(a, 88490)), Promise.all([a.e(883), a.e(4037), a.e(31), a.e(3431), a.e(5985), a.e(7494), a.e(1375), a.e(6918), a.e(4120), a.e(2683), a.e(3082), a.e(4017), a.e(9225), a.e(1270), a.e(5866), a.e(4935), a.e(2909), a.e(2272), a.e(3331), a.e(2199), a.e(6561), a.e(155), a.e(1215), a.e(6538), a.e(9744)]).then(a.bind(a, 31695))
    }
  }
]);