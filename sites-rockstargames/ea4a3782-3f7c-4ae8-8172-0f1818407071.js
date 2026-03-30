try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ea4a3782-3f7c-4ae8-8172-0f1818407071", e._sentryDebugIdIdentifier = "sentry-dbid-ea4a3782-3f7c-4ae8-8172-0f1818407071")
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
    8271: (e, a, s) => {
      s.e(793).then(s.bind(s, 10793)), Promise.all([s.e(5076), s.e(3004), s.e(8387), s.e(5744), s.e(6352), s.e(78), s.e(8068), s.e(4689), s.e(1127), s.e(181), s.e(8429), s.e(2467), s.e(6990), s.e(6088), s.e(1556), s.e(8136), s.e(4531), s.e(1874), s.e(4502), s.e(8181), s.e(2304), s.e(8586), s.e(229)]).then(s.bind(s, 2688))
    }
  }
]);