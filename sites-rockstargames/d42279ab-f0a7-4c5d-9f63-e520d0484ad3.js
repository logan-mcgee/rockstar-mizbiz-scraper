try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d42279ab-f0a7-4c5d-9f63-e520d0484ad3", e._sentryDebugIdIdentifier = "sentry-dbid-d42279ab-f0a7-4c5d-9f63-e520d0484ad3")
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
    4827(e, a, d) {
      d.e(7078).then(d.bind(d, 7078)), Promise.all([d.e(883), d.e(6765), d.e(31), d.e(625), d.e(632), d.e(5024), d.e(6583), d.e(5644), d.e(3082), d.e(4017), d.e(1270), d.e(6416), d.e(6760), d.e(3710), d.e(2909), d.e(5997), d.e(3331), d.e(2199), d.e(5002), d.e(2808), d.e(8415), d.e(3517), d.e(1215), d.e(134)]).then(d.bind(d, 34873))
    }
  }
]);