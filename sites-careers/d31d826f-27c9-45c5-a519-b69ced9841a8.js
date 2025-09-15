try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "d31d826f-27c9-45c5-a519-b69ced9841a8", e._sentryDebugIdIdentifier = "sentry-dbid-d31d826f-27c9-45c5-a519-b69ced9841a8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [2156], {
    9729: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0}、{1}",
              middle: "{0}、{1}",
              pair: "{0}、{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}、{1}",
              middle: "{0}、{1}",
              pair: "{0}、{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}、{1}",
              middle: "{0}、{1}",
              pair: "{0}、{1}",
              start: "{0}、{1}"
            }
          },
          disjunction: {
            long: {
              end: "{0}、または{1}",
              middle: "{0}、{1}",
              pair: "{0}または{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}、または{1}",
              middle: "{0}、{1}",
              pair: "{0}または{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}、または{1}",
              middle: "{0}、{1}",
              pair: "{0}または{1}",
              start: "{0}、{1}"
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
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            },
            short: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            }
          }
        },
        locale: "ja"
      })
    }
  }
]);