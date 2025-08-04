try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "63785e93-feb6-43cb-a3e4-2f7f3facecf9", e._sentryDebugIdIdentifier = "sentry-dbid-63785e93-feb6-43cb-a3e4-2f7f3facecf9")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6891], {
    93031: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} lub {1}",
              middle: "{0}, {1}",
              pair: "{0} lub {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} lub {1}",
              middle: "{0}, {1}",
              pair: "{0} lub {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} lub {1}",
              middle: "{0}, {1}",
              pair: "{0} lub {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} i {1}",
              middle: "{0}, {1}",
              pair: "{0} i {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "pl"
      })
    }
  }
]);