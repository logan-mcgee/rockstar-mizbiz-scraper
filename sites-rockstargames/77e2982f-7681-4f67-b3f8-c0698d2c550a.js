try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "77e2982f-7681-4f67-b3f8-c0698d2c550a", e._sentryDebugIdIdentifier = "sentry-dbid-77e2982f-7681-4f67-b3f8-c0698d2c550a")
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
    8271: (e, a, d) => {
      d.e(793).then(d.bind(d, 10793)), Promise.all([d.e(3004), d.e(5076), d.e(8387), d.e(4896), d.e(5602), d.e(8068), d.e(4689), d.e(1127), d.e(8429), d.e(1556), d.e(181), d.e(2467), d.e(6990), d.e(5085), d.e(8136), d.e(1617), d.e(1874), d.e(4502), d.e(8181), d.e(2304), d.e(8586), d.e(229)]).then(d.bind(d, 2688))
    }
  }
]);