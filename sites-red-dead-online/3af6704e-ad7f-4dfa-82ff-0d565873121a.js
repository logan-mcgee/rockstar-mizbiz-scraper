! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      d = (new e.Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3af6704e-ad7f-4dfa-82ff-0d565873121a", e._sentryDebugIdIdentifier = "sentry-dbid-3af6704e-ad7f-4dfa-82ff-0d565873121a")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [4710], {
    76304: () => {
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