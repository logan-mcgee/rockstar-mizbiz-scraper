! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a8be1bde-6b45-4f10-9c1c-5d4ec6a486df", e._sentryDebugIdIdentifier = "sentry-dbid-a8be1bde-6b45-4f10-9c1c-5d4ec6a486df")
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
  [3002, 621], {
    73002: (e, n, t) => {
      t.r(n), t.d(n, {
        useHardwareConcurrency: () => g,
        useMemoryStatus: () => b,
        useNetworkStatus: () => d,
        useSaveData: () => l
      });
      var r = t(62229);

      function o(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }

      function a(e, n) {
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
          n % 2 ? a(t, !0).forEach((function(n) {
            o(e, n, t[n])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(t).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }))
        }
        return e
      }
      var c, u, f, s, d = function(e) {
          var n, t = {
              unsupported: c = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: c ? e : navigator.connection.effectiveType
            },
            o = function(e) {
              if (Array.isArray(e)) return e
            }(n = (0, r.useState)(t)) || function(e, n) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var t = [],
                  r = !0,
                  o = !1,
                  a = void 0;
                try {
                  for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (t.push(i.value), 2 !== t.length); r = !0);
                } catch (e) {
                  o = !0, a = e
                } finally {
                  try {
                    r || null == c.return || c.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return t
              }
            }(n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            a = o[0],
            u = o[1];
          return (0, r.useEffect)((function() {
            if (!c) {
              var e = navigator.connection,
                n = function() {
                  u({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", n),
                function() {
                  e.removeEventListener("change", n)
                }
            }
          }), []), i({}, a, {
            setNetworkStatus: u
          })
        },
        l = function() {
          return {
            unsupported: u = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: u ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
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