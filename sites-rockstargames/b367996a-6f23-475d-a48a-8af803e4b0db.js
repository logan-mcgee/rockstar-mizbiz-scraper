try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b367996a-6f23-475d-a48a-8af803e4b0db", e._sentryDebugIdIdentifier = "sentry-dbid-b367996a-6f23-475d-a48a-8af803e4b0db")
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
      d.e(793).then(d.bind(d, 10793)), Promise.all([d.e(5076), d.e(5523), d.e(5059), d.e(2512), d.e(78), d.e(8068), d.e(2229), d.e(9623), d.e(9311), d.e(4853), d.e(1788), d.e(6088), d.e(1082), d.e(4572), d.e(5966), d.e(3915), d.e(2918), d.e(4200), d.e(6191), d.e(7592), d.e(9410), d.e(1413)]).then(d.bind(d, 58640))
    }
  }
]);