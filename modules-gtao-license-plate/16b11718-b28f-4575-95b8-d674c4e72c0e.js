try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "16b11718-b28f-4575-95b8-d674c4e72c0e", e._sentryDebugIdIdentifier = "sentry-dbid-16b11718-b28f-4575-95b8-d674c4e72c0e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [4861], {
    66402() {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0}和{1}",
              middle: "{0}、{1}",
              pair: "{0}和{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}、{1}",
              middle: "{0}、{1}",
              pair: "{0}、{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}和{1}",
              middle: "{0}、{1}",
              pair: "{0}和{1}",
              start: "{0}、{1}"
            }
          },
          disjunction: {
            long: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            }
          },
          unit: {
            long: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            },
            narrow: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            },
            short: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            }
          }
        },
        locale: "zh"
      })
    }
  }
]);