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
        useSaveData: () => c
      });
      var r = n(62229);

      function a(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(n, !0).forEach((function(t) {
            a(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(n).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      var u, s, d, l, f = function(e) {
          var t, n = {
              unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: u ? e : navigator.connection.effectiveType
            },
            a = function(e) {
              if (Array.isArray(e)) return e
            }(t = (0, r.useState)(n)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  n = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (t.push(o.value), 2 !== t.length); n = !0);
                } catch (e) {
                  r = !0, a = e
                } finally {
                  try {
                    n || null == i.return || i.return()
                  } finally {
                    if (r) throw a
                  }
                }
                return t
              }
            }(t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = a[0],
            s = a[1];
          return (0, r.useEffect)((function() {
            if (!u) {
              var e = navigator.connection,
                t = function() {
                  s({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", t),
                function() {
                  e.removeEventListener("change", t)
                }
            }
          }), []), i({}, o, {
            setNetworkStatus: s
          })
        },
        c = function() {
          return {
            unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: s ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (d = !("undefined" != typeof navigator && "deviceMemory" in navigator)) l = {
        unsupported: d
      };
      else {
        var y = "memory" in performance ? performance.memory : null;
        l = {
          unsupported: d,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: y ? y.totalJSHeapSize : null,
          usedJSHeapSize: y ? y.usedJSHeapSize : null,
          jsHeapSizeLimit: y ? y.jsHeapSizeLimit : null
        }
      }
      var p, b = function(e) {
        return d && e ? i({}, l, {}, e) : i({}, l)
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