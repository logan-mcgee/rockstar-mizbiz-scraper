try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a801506b-ccf7-4c58-9195-e4331b939b3b", e._sentryDebugIdIdentifier = "sentry-dbid-a801506b-ccf7-4c58-9195-e4331b939b3b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9936], {
    78842: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "it"
      })
    }
  }
]);