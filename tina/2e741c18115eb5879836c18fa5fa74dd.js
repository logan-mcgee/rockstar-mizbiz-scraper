! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "8ff980d2-34cd-4cfe-a886-e981122de327", e._sentryDebugIdIdentifier = "sentry-dbid-8ff980d2-34cd-4cfe-a886-e981122de327")
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
    35724: (e, d, n) => {
      n.d(d, {
        c: () => a
      });
      const a = function() {
        for (var e = arguments.length, d = new Array(e), n = 0; n < e; n++) d[n] = arguments[n];
        return [...d].filter(Boolean).join(" ")
      }
    },
    89864: (e, d, n) => {
      n.r(d), n.d(d, {
        classList: () => a.c,
        recursiveNestedTemplates: () => t.c
      });
      var a = n(35724),
        t = n(73936)
    },
    73936: (e, d, n) => {
      n.d(d, {
        c: () => t
      });
      const a = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (d > 0) {
            const f = a(e, d - 1, n, t);
            o = {
              ...o,
              ...t(e, {
                templates: f
              })
            }
          }
          return o
        },
        t = a
    }
  }
]);