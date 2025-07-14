try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "0b6c621d-aa56-4dc1-b334-7ebc2e1bbc77", e._sentryDebugIdIdentifier = "sentry-dbid-0b6c621d-aa56-4dc1-b334-7ebc2e1bbc77")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7706], {
    97706: (e, d, a) => {
      a.e(1235).then(a.bind(a, 1235)), Promise.all([a.e(2909), a.e(8348), a.e(5074), a.e(7709), a.e(5790), a.e(2176), a.e(8076), a.e(2229), a.e(9623), a.e(4309), a.e(4853), a.e(5966), a.e(6662), a.e(3804), a.e(2782)]).then(a.bind(a, 72782))
    }
  }
]);