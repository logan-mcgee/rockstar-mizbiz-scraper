! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ba7db417-641e-428d-a73f-42a7fdaeaeaf", e._sentryDebugIdIdentifier = "sentry-dbid-ba7db417-641e-428d-a73f-42a7fdaeaeaf")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/tina",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_tina = self.webpackChunk_rockstargames_tina || []).push([
  [520], {
    8744: (e, a, n) => {
      n.d(a, {
        c: () => t
      });
      const t = function() {
        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
        return [...a].filter(Boolean).join(" ")
      }
    },
    9520: (e, a, n) => {
      n.r(a), n.d(a, {
        classList: () => t.c,
        recursiveNestedTemplates: () => d.c
      });
      var t = n(8744),
        d = n(5572)
    },
    5572: (e, a, n) => {
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
//# sourceMappingURL=96058a2fbe1c8b43b874887997178ce9.js.map