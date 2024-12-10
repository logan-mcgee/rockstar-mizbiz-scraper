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
    8853: (e, n, a) => {
      a.d(n, {
        A: () => d
      });
      const d = function() {
        for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
        return [...n].filter(Boolean).join(" ")
      }
    },
    5105: (e, n, a) => {
      a.r(n), a.d(n, {
        classList: () => d.A,
        recursiveNestedTemplates: () => t.A
      });
      var d = a(8853),
        t = a(6151)
    },
    6151: (e, n, a) => {
      a.d(n, {
        A: () => t
      });
      const d = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...a
            };
          if (n > 0) {
            const l = d(e, n - 1, a, t);
            o = {
              ...o,
              ...t(e, {
                templates: l
              })
            }
          }
          return o
        },
        t = d
    }
  }
]);