try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ead22e7a-6940-4033-a712-3a6a1d3526da", e._sentryDebugIdIdentifier = "sentry-dbid-ead22e7a-6940-4033-a712-3a6a1d3526da")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [3486], {
    579: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0}, and {1}",
              middle: "{0}, {1}",
              pair: "{0} and {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0}, & {1}",
              middle: "{0}, {1}",
              pair: "{0} & {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "en"
      })
    }
  }
]);