! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "63fe1eae-4d2f-4e87-a26c-beed8d06a922", e._sentryDebugIdIdentifier = "sentry-dbid-63fe1eae-4d2f-4e87-a26c-beed8d06a922")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || []).push([
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