! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "099310b1-e984-4d03-8b67-09c57b5ece28", e._sentryDebugIdIdentifier = "sentry-dbid-099310b1-e984-4d03-8b67-09c57b5ece28")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [4861], {
    52018: () => {
      Intl.ListFormat && "function" == typeof Intl.ListFormat.__addLocaleData && Intl.ListFormat.__addLocaleData({
        data: {
          conjunction: {
            long: {
              end: "{0}和{1}",
              middle: "{0}、{1}",
              pair: "{0}和{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}、{1}",
              middle: "{0}、{1}",
              pair: "{0}、{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}和{1}",
              middle: "{0}、{1}",
              pair: "{0}和{1}",
              start: "{0}、{1}"
            }
          },
          disjunction: {
            long: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            },
            narrow: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            },
            short: {
              end: "{0}或{1}",
              middle: "{0}、{1}",
              pair: "{0}或{1}",
              start: "{0}、{1}"
            }
          },
          unit: {
            long: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            },
            narrow: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            },
            short: {
              end: "{0}{1}",
              middle: "{0}{1}",
              pair: "{0}{1}",
              start: "{0}{1}"
            }
          }
        },
        locale: "zh"
      })
    }
  }
]);