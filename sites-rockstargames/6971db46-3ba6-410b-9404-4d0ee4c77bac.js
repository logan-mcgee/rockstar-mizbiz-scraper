try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6971db46-3ba6-410b-9404-4d0ee4c77bac", e._sentryDebugIdIdentifier = "sentry-dbid-6971db46-3ba6-410b-9404-4d0ee4c77bac")
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
  [5796], {
    35796(e, a, d) {
      d.e(3670).then(d.bind(d, 33670)), Promise.all([d.e(883), d.e(3860), d.e(31), d.e(3666), d.e(3870), d.e(1375), d.e(6918), d.e(9984), d.e(3082), d.e(4017), d.e(9225), d.e(1270), d.e(9340), d.e(2909), d.e(357), d.e(6596), d.e(3331), d.e(2199), d.e(2780), d.e(297), d.e(4136), d.e(8447), d.e(1215), d.e(6561)]).then(d.bind(d, 40026))
    }
  }
]);