! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f07d77b2-e5d9-410e-a3b8-a583a9612f84", e._sentryDebugIdIdentifier = "sentry-dbid-f07d77b2-e5d9-410e-a3b8-a583a9612f84")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9980, 7599], {
    19980: (e, n, t) => {
      t.r(n), t.d(n, {
        useHardwareConcurrency: () => g,
        useMemoryStatus: () => b,
        useNetworkStatus: () => d,
        useSaveData: () => l
      });
      var r = t(62229);

      function a(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }

      function o(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n && (r = r.filter((function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }

      function i(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2 ? o(t, !0).forEach((function(n) {
            a(e, n, t[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(t).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }
      var u, c, f, s, d = function(e) {
          var n, t = {
              unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: u ? e : navigator.connection.effectiveType
            },
            a = function(e) {
              if (Array.isArray(e)) return e
            }(n = (0, r.useState)(t)) || function(e, n) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (t.push(i.value), 2 !== t.length); r = !0);
                } catch (e) {
                  a = !0, o = e
                } finally {
                  try {
                    r || null == u.return || u.return()
                  } finally {
                    if (a) throw o
                  }
                }
                return t
              }
            }(n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            o = a[0],
            c = a[1];
          return (0, r.useEffect)((function() {
            if (!u) {
              var e = navigator.connection,
                n = function() {
                  c({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", n),
                function() {
                  e.removeEventListener("change", n)
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
      if (f = !("undefined" != typeof navigator && "deviceMemory" in navigator)) s = {
        unsupported: f
      };
      else {
        var p = "memory" in performance ? performance.memory : null;
        s = {
          unsupported: f,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: p ? p.totalJSHeapSize : null,
          usedJSHeapSize: p ? p.usedJSHeapSize : null,
          jsHeapSizeLimit: p ? p.jsHeapSizeLimit : null
        }
      }
      var y, b = function(e) {
        return f && e ? i({}, s, {}, e) : i({}, s)
      };
      y = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var g = function() {
        return i({}, y)
      }
    }
  }
]);