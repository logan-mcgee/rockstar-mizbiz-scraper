! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ba7db417-641e-428d-a73f-42a7fdaeaeaf", e._sentryDebugIdIdentifier = "sentry-dbid-ba7db417-641e-428d-a73f-42a7fdaeaeaf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [520], {
    8744: (e, a, d) => {
      d.d(a, {
        c: () => n
      });
      const n = function() {
        for (var e = arguments.length, a = new Array(e), d = 0; d < e; d++) a[d] = arguments[d];
        return [...a].filter(Boolean).join(" ")
      }
    },
    9520: (e, a, d) => {
      d.r(a), d.d(a, {
        classList: () => n.c,
        recursiveNestedTemplates: () => t.c
      });
      var n = d(8744),
        t = d(5572)
    },
    5572: (e, a, d) => {
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
            const f = n(e, a - 1, d, t);
            o = {
              ...o,
              ...t(e, {
                templates: f
              })
            }
          }
          return o
        },
        t = n
    }
  }
]);
//# sourceMappingURL=0790f5de5d0c8b22f82622bb5f1afba0.js.map