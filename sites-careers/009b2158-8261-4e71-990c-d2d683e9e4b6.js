! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "009b2158-8261-4e71-990c-d2d683e9e4b6", e._sentryDebugIdIdentifier = "sentry-dbid-009b2158-8261-4e71-990c-d2d683e9e4b6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [3486], {
    923: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0}, and {1}",
              middle: "{0}, {1}",
              pair: "{0} and {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0}, & {1}",
              middle: "{0}, {1}",
              pair: "{0} & {1}",
              start: "{0}, {1}"
            }
          },
          disjunction: {
            long: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            },
            narrow: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            },
            short: {
              end: "{0}, or {1}",
              middle: "{0}, {1}",
              pair: "{0} or {1}",
              start: "{0}, {1}"
            }
          },
          unit: {
            long: {
              end: "{0}, {1}",
              middle: "{0}, {1}",
              pair: "{0}, {1}",
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
              pair: "{0}, {1}",
              start: "{0}, {1}"
            }
          }
        },
        locale: "en"
      })
    }
  }
]);