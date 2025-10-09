! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9cd70e0c-2c9f-4f17-866e-a14c6e0b5b44", e._sentryDebugIdIdentifier = "sentry-dbid-9cd70e0c-2c9f-4f17-866e-a14c6e0b5b44")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "1a2a4086bf51f6ab1b48a1034109163ec977b086",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "1a2a4086bf51f6ab1b48a1034109163ec977b086"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [2156], {
    5422: () => {
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