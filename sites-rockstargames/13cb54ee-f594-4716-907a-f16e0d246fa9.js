try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "13cb54ee-f594-4716-907a-f16e0d246fa9", e._sentryDebugIdIdentifier = "sentry-dbid-13cb54ee-f594-4716-907a-f16e0d246fa9")
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
    8271: (e, d, s) => {
      s.e(793).then(s.bind(s, 10793)), Promise.all([s.e(1864), s.e(5076), s.e(5059), s.e(8071), s.e(5602), s.e(8068), s.e(2229), s.e(8429), s.e(4572), s.e(9623), s.e(9311), s.e(1788), s.e(6088), s.e(5966), s.e(9797), s.e(2918), s.e(3114), s.e(8181), s.e(7592), s.e(3582), s.e(7015)]).then(s.bind(s, 69702))
    }
  }
]);