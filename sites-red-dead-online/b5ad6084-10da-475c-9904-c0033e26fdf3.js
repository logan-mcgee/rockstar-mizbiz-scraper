try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "b5ad6084-10da-475c-9904-c0033e26fdf3", e._sentryDebugIdIdentifier = "sentry-dbid-b5ad6084-10da-475c-9904-c0033e26fdf3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [4710], {
    74655() {
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