try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c45ef46a-e96c-4d38-9208-6c9067a71810", e._sentryDebugIdIdentifier = "sentry-dbid-c45ef46a-e96c-4d38-9208-6c9067a71810")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-gta-trilogy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [4861], {
    7749: () => {
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