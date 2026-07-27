try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dcfda376-33e0-455d-a50b-949adabaf1c5", e._sentryDebugIdIdentifier = "sentry-dbid-dcfda376-33e0-455d-a50b-949adabaf1c5")
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
    53400(e, a, d) {
      d.e(5788).then(d.bind(d, 5788)), Promise.all([d.e(883), d.e(3860), d.e(31), d.e(543), d.e(9759), d.e(1375), d.e(6918), d.e(4152), d.e(3082), d.e(4017), d.e(9225), d.e(1270), d.e(9340), d.e(2909), d.e(6616), d.e(195), d.e(3331), d.e(2199), d.e(5216), d.e(5618), d.e(4136), d.e(5266), d.e(1215), d.e(9348)]).then(d.bind(d, 81045))
    }
  }
]);