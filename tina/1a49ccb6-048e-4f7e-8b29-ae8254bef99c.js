! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1a49ccb6-048e-4f7e-8b29-ae8254bef99c", e._sentryDebugIdIdentifier = "sentry-dbid-1a49ccb6-048e-4f7e-8b29-ae8254bef99c")
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
    8853: (e, a, d) => {
      d.d(a, {
        A: () => n
      });
      const n = function() {
        for (var e = arguments.length, a = new Array(e), d = 0; d < e; d++) a[d] = arguments[d];
        return [...a].filter(Boolean).join(" ")
      }
    },
    5105: (e, a, d) => {
      d.r(a), d.d(a, {
        classList: () => n.A,
        recursiveNestedTemplates: () => t.A
      });
      var n = d(8853),
        t = d(6151)
    },
    6151: (e, a, d) => {
      d.d(a, {
        A: () => t
      });
      const n = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...d
            };
          if (a > 0) {
            const l = n(e, a - 1, d, t);
            o = {
              ...o,
              ...t(e, {
                templates: l
              })
            }
          }
          return o
        },
        t = n
    }
  }
]);