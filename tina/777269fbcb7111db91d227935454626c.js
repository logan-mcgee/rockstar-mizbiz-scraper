! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7974c8a5-da6a-4959-af77-d39f2b6d63e0", e._sentryDebugIdIdentifier = "sentry-dbid-7974c8a5-da6a-4959-af77-d39f2b6d63e0")
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
  [864], {
    5724: (e, n, a) => {
      a.d(n, {
        c: () => d
      });
      const d = function() {
        for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
        return [...n].filter(Boolean).join(" ")
      }
    },
    9864: (e, n, a) => {
      a.r(n), a.d(n, {
        classList: () => d.c,
        recursiveNestedTemplates: () => t.c
      });
      var d = a(5724),
        t = a(3936)
    },
    3936: (e, n, a) => {
      a.d(n, {
        c: () => t
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
            const f = d(e, n - 1, a, t);
            o = {
              ...o,
              ...t(e, {
                templates: f
              })
            }
          }
          return o
        },
        t = d
    }
  }
]);