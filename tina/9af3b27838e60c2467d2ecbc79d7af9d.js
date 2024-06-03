! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7974c8a5-da6a-4959-af77-d39f2b6d63e0", e._sentryDebugIdIdentifier = "sentry-dbid-7974c8a5-da6a-4959-af77-d39f2b6d63e0")
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
    5724: (e, a, n) => {
      n.d(a, {
        c: () => t
      });
      const t = function() {
        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
        return [...a].filter(Boolean).join(" ")
      }
    },
    9864: (e, a, n) => {
      n.r(a), n.d(a, {
        classList: () => t.c,
        recursiveNestedTemplates: () => d.c
      });
      var t = n(5724),
        d = n(3936)
    },
    3936: (e, a, n) => {
      n.d(a, {
        c: () => d
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
            const l = t(e, a - 1, n, d);
            o = {
              ...o,
              ...d(e, {
                templates: l
              })
            }
          }
          return o
        },
        d = t
    }
  }
]);