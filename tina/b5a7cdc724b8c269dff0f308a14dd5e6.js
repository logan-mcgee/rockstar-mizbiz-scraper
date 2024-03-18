! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ba7db417-641e-428d-a73f-42a7fdaeaeaf", e._sentryDebugIdIdentifier = "sentry-dbid-ba7db417-641e-428d-a73f-42a7fdaeaeaf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [520], {
    8744: (e, a, n) => {
      n.d(a, {
        c: () => d
      });
      const d = function() {
        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
        return [...a].filter(Boolean).join(" ")
      }
    },
    9520: (e, a, n) => {
      n.r(a), n.d(a, {
        classList: () => d.c,
        recursiveNestedTemplates: () => t.c
      });
      var d = n(8744),
        t = n(5572)
    },
    5572: (e, a, n) => {
      n.d(a, {
        c: () => t
      });
      const d = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
            o = {
              ...n
            };
          if (a > 0) {
            const l = d(e, a - 1, n, t);
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
//# sourceMappingURL=b5a7cdc724b8c269dff0f308a14dd5e6.js.map