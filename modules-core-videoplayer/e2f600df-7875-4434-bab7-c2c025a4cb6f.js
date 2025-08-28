try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "e2f600df-7875-4434-bab7-c2c025a4cb6f", e._sentryDebugIdIdentifier = "sentry-dbid-e2f600df-7875-4434-bab7-c2c025a4cb6f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [4851], {
    55803: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} et {1}",
              middle: "{0}, {1}",
              pair: "{0} et {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} et {1}",
              middle: "{0}, {1}",
              pair: "{0} et {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} et {1}",
              middle: "{0}, {1}",
              pair: "{0} et {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0} et {1}",
              middle: "{0}, {1}",
              pair: "{0} et {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "fr"
      })
    }
  }
]);