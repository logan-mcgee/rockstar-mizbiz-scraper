try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cc0a76d0-c222-4e21-a177-dc91810ba71f", e._sentryDebugIdIdentifier = "sentry-dbid-cc0a76d0-c222-4e21-a177-dc91810ba71f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4851], {
    32951: () => {
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