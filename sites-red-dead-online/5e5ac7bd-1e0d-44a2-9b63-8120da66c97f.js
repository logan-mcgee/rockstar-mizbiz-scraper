! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "5e5ac7bd-1e0d-44a2-9b63-8120da66c97f", e._sentryDebugIdIdentifier = "sentry-dbid-5e5ac7bd-1e0d-44a2-9b63-8120da66c97f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [9936], {
    92385: () => {
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