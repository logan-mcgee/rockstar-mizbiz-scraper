try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d3ac00dc-7989-4701-9a36-580aba71b825", e._sentryDebugIdIdentifier = "sentry-dbid-d3ac00dc-7989-4701-9a36-580aba71b825")
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
  [3885], {
    16373: () => {
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