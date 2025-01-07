! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1a49ccb6-048e-4f7e-8b29-ae8254bef99c", e._sentryDebugIdIdentifier = "sentry-dbid-1a49ccb6-048e-4f7e-8b29-ae8254bef99c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [105], {
    8853: (e, n, d) => {
      d.d(n, {
        A: () => t
      });
      const t = function() {
        for (var e = arguments.length, n = new Array(e), d = 0; d < e; d++) n[d] = arguments[d];
        return [...n].filter(Boolean).join(" ")
      }
    },
    5105: (e, n, d) => {
      d.r(n), d.d(n, {
        classList: () => t.A,
        recursiveNestedTemplates: () => a.A
      });
      var t = d(8853),
        a = d(6151)
    },
    6151: (e, n, d) => {
      d.d(n, {
        A: () => a
      });
      const t = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...d
            };
          if (n > 0) {
            const l = t(e, n - 1, d, a);
            o = {
              ...o,
              ...a(e, {
                templates: l
              })
            }
          }
          return o
        },
        a = t
    }
  }
]);