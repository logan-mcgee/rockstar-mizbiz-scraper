! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5591e95a-6aec-436c-99ae-01bf2e47ba0a", e._sentryDebugIdIdentifier = "sentry-dbid-5591e95a-6aec-436c-99ae-01bf2e47ba0a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2156], {
    76553: () => {
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