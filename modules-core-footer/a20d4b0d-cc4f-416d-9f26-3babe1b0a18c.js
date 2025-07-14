try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "a20d4b0d-cc4f-416d-9f26-3babe1b0a18c", e._sentryDebugIdIdentifier = "sentry-dbid-a20d4b0d-cc4f-416d-9f26-3babe1b0a18c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "5186d42ad1acddf97418fd86e38e0b7d3a16e8d4"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [4528], {
    82282: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} и {1}",
              middle: "{0}, {1}",
              pair: "{0} и {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} и {1}",
              middle: "{0}, {1}",
              pair: "{0} и {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} или {1}",
              middle: "{0}, {1}",
              pair: "{0} или {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} или {1}",
              middle: "{0}, {1}",
              pair: "{0} или {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} или {1}",
              middle: "{0}, {1}",
              pair: "{0} или {1}",
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
        locale: "ru"
      })
    }
  }
]);