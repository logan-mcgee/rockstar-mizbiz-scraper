try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "04013664-78f5-453c-98b7-9322407a8eed", e._sentryDebugIdIdentifier = "sentry-dbid-04013664-78f5-453c-98b7-9322407a8eed")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [4710], {
    6304: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0} und {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0} und {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0} und {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} oder {1}",
              middle: "{0}, {1}",
              pair: "{0} oder {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} oder {1}",
              middle: "{0}, {1}",
              pair: "{0} oder {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} oder {1}",
              middle: "{0}, {1}",
              pair: "{0} oder {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} und {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "de"
      })
    }
  }
]);