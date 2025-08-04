try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c7dd6519-ead9-4d86-b047-34d96db061ed", e._sentryDebugIdIdentifier = "sentry-dbid-c7dd6519-ead9-4d86-b047-34d96db061ed")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3885], {
    55529: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} 및 {1}",
              middle: "{0}, {1}",
              pair: "{0} 및 {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} 및 {1}",
              middle: "{0}, {1}",
              pair: "{0} 및 {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} 및 {1}",
              middle: "{0}, {1}",
              pair: "{0} 및 {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} 또는 {1}",
              middle: "{0}, {1}",
              pair: "{0} 또는 {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} 또는 {1}",
              middle: "{0}, {1}",
              pair: "{0} 또는 {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} 또는 {1}",
              middle: "{0}, {1}",
              pair: "{0} 또는 {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            }
          }
        },
        locale: "ko"
      })
    }
  }
]);