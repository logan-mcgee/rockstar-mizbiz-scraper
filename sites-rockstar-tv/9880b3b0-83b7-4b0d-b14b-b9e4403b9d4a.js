! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9880b3b0-83b7-4b0d-b14b-b9e4403b9d4a", e._sentryDebugIdIdentifier = "sentry-dbid-9880b3b0-83b7-4b0d-b14b-b9e4403b9d4a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [3475], {
    9790: () => {
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
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
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
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} ou {1}",
              middle: "{0}, {1}",
              pair: "{0} ou {1}",
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
        locale: "pt"
      })
    }
  }
]);