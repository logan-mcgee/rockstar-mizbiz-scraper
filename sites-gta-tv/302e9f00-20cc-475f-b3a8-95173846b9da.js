! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "302e9f00-20cc-475f-b3a8-95173846b9da", e._sentryDebugIdIdentifier = "sentry-dbid-302e9f00-20cc-475f-b3a8-95173846b9da")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
  [9936], {
    5014: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} o {1}",
              middle: "{0}, {1}",
              pair: "{0} o {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0} e {1}",
              middle: "{0}, {1}",
              pair: "{0} e {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "it"
      })
    }
  }
]);