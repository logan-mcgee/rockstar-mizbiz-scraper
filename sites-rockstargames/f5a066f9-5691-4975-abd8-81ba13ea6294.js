try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f5a066f9-5691-4975-abd8-81ba13ea6294", e._sentryDebugIdIdentifier = "sentry-dbid-f5a066f9-5691-4975-abd8-81ba13ea6294")
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
      a.e(793).then(a.bind(a, 10793)), Promise.all([a.e(7849), a.e(602), a.e(4237), a.e(5076), a.e(3736), a.e(8068), a.e(2229), a.e(4853), a.e(4572), a.e(9623), a.e(2148), a.e(1788), a.e(5966), a.e(6191), a.e(2918), a.e(1943), a.e(4200), a.e(3615)]).then(a.bind(a, 14062))
    }
  }
]);