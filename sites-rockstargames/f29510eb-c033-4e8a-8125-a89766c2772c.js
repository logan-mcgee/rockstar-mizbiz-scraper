! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f29510eb-c033-4e8a-8125-a89766c2772c", e._sentryDebugIdIdentifier = "sentry-dbid-f29510eb-c033-4e8a-8125-a89766c2772c")
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
  [4011], {
    45952: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0} y {1}",
              middle: "{0}, {1}",
              pair: "{0} y {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} y {1}",
              middle: "{0}, {1}",
              pair: "{0} y {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0} y {1}",
              middle: "{0}, {1}",
              pair: "{0} y {1}",
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
              end: "{0} y {1}",
              middle: "{0}, {1}",
              pair: "{0} y {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0} {1}",
              middle: "{0} {1}",
              pair: "{0} {1}",
              start: "{0} {1}"
            },
            short: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0} y {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "es"
      })
    }
  }
]);