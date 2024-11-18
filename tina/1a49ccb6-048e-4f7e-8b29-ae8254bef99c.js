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
    8853: (e, a, n) => {
      n.d(a, {
        A: () => t
      });
      const t = function() {
        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
        return [...a].filter(Boolean).join(" ")
      }
    },
    5105: (e, a, n) => {
      n.r(a), n.d(a, {
        classList: () => t.A,
        recursiveNestedTemplates: () => d.A
      });
      var t = n(8853),
        d = n(6151)
    },
    6151: (e, a, n) => {
      n.d(a, {
        A: () => d
      });
      const t = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (a > 0) {
            const f = t(e, a - 1, n, d);
            o = {
              ...o,
              ...d(e, {
                templates: f
              })
            }
          }
          return o
        },
        d = t
    }
  }
]);