try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "271f3d8a-bd59-41d5-a261-034967fb95e8", e._sentryDebugIdIdentifier = "sentry-dbid-271f3d8a-bd59-41d5-a261-034967fb95e8")
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
  [8271], {
    8271(e, d, a) {
      a.e(793).then(a.bind(a, 10793)), Promise.all([a.e(5422), a.e(5076), a.e(3004), a.e(1396), a.e(4719), a.e(2193), a.e(3661), a.e(8068), a.e(1515), a.e(1127), a.e(181), a.e(8429), a.e(2467), a.e(2909), a.e(7301), a.e(1556), a.e(3331), a.e(7774), a.e(2199), a.e(4502), a.e(8181), a.e(5273), a.e(2304), a.e(8586), a.e(2081)]).then(a.bind(a, 46324))
    }
  }
]);