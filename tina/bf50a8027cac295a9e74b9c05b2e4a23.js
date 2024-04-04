! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7974c8a5-da6a-4959-af77-d39f2b6d63e0", e._sentryDebugIdIdentifier = "sentry-dbid-7974c8a5-da6a-4959-af77-d39f2b6d63e0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [864], {
    5724: (e, a, d) => {
      d.d(a, {
        c: () => n
      });
      const n = function() {
        for (var e = arguments.length, a = new Array(e), d = 0; d < e; d++) a[d] = arguments[d];
        return [...a].filter(Boolean).join(" ")
      }
    },
    9864: (e, a, d) => {
      d.r(a), d.d(a, {
        classList: () => n.c,
        recursiveNestedTemplates: () => t.c
      });
      var n = d(5724),
        t = d(3936)
    },
    3936: (e, a, d) => {
      d.d(a, {
        c: () => t
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
//# sourceMappingURL=bf50a8027cac295a9e74b9c05b2e4a23.js.map