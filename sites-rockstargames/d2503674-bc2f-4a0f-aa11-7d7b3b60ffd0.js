try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d2503674-bc2f-4a0f-aa11-7d7b3b60ffd0", e._sentryDebugIdIdentifier = "sentry-dbid-d2503674-bc2f-4a0f-aa11-7d7b3b60ffd0")
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
    8271: (e, d, a) => {
      a.e(793).then(a.bind(a, 10793)), Promise.all([a.e(5076), a.e(6833), a.e(5059), a.e(557), a.e(78), a.e(8068), a.e(2229), a.e(9623), a.e(8429), a.e(9311), a.e(1788), a.e(6088), a.e(4572), a.e(5966), a.e(58), a.e(2918), a.e(3114), a.e(8181), a.e(7592), a.e(3582), a.e(7015)]).then(a.bind(a, 69702))
    }
  }
]);