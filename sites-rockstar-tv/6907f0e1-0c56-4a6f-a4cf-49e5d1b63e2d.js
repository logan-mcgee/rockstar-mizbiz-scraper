try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6907f0e1-0c56-4a6f-a4cf-49e5d1b63e2d", e._sentryDebugIdIdentifier = "sentry-dbid-6907f0e1-0c56-4a6f-a4cf-49e5d1b63e2d")
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