try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6bd4d453-e7e9-4ca6-b354-87a89765c7f1", e._sentryDebugIdIdentifier = "sentry-dbid-6bd4d453-e7e9-4ca6-b354-87a89765c7f1")
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
  [1019], {
    53400(e, d, a) {
      a.e(5788).then(a.bind(a, 5788)), Promise.all([a.e(883), a.e(3860), a.e(31), a.e(4130), a.e(5200), a.e(1375), a.e(6918), a.e(5148), a.e(3082), a.e(4017), a.e(9225), a.e(1270), a.e(9340), a.e(2909), a.e(3762), a.e(195), a.e(3331), a.e(2199), a.e(5216), a.e(5618), a.e(4136), a.e(5266), a.e(1215), a.e(837)]).then(a.bind(a, 52572))
    }
  }
]);