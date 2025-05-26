! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8de46c89-b969-4600-8671-698f3ef3e15f", e._sentryDebugIdIdentifier = "sentry-dbid-8de46c89-b969-4600-8671-698f3ef3e15f")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1314, 8933], {
    88933: (e, t, n) => {
      n.r(t), n.d(t, {
        useHardwareConcurrency: () => g,
        useMemoryStatus: () => b,
        useNetworkStatus: () => f,
        useSaveData: () => l
      });
      var a = n(62229);

      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, a)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(n, !0).forEach((function(t) {
            r(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      var u, c, d, s, f = function(e) {
          var t, n = {
              unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: u ? e : navigator.connection.effectiveType
            },
            r = function(e) {
              if (Array.isArray(e)) return e
            }(t = (0, a.useState)(n)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  n = !0,
                  a = !1,
                  r = void 0;
                try {
                  for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (t.push(o.value), 2 !== t.length); n = !0);
                } catch (e) {
                  a = !0, r = e
                } finally {
                  try {
                    n || null == i.return || i.return()
                  } finally {
                    if (a) throw r
                  }
                }
                return t
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = r[0],
            c = r[1];
          return (0, a.useEffect)((function() {
            if (!u) {
              var e = navigator.connection,
                t = function() {
                  c({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", t),
                function() {
                  e.removeEventListener("change", t)
                }
            }
          }), []), i({}, o, {
            setNetworkStatus: c
          })
        },
        l = function() {
          return {
            unsupported: c = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: c ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (d = !("undefined" != typeof navigator && "deviceMemory" in navigator)) s = {
        unsupported: d
      };
      else {
        var y = "memory" in performance ? performance.memory : null;
        s = {
          unsupported: d,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: y ? y.totalJSHeapSize : null,
          usedJSHeapSize: y ? y.usedJSHeapSize : null,
          jsHeapSizeLimit: y ? y.jsHeapSizeLimit : null
        }
      }
      var p, b = function(e) {
        return d && e ? i({}, s, {}, e) : i({}, s)
      };
      p = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var g = function() {
        return i({}, p)
      }
    }
  }
]);