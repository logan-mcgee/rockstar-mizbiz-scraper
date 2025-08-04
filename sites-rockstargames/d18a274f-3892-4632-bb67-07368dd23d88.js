try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d18a274f-3892-4632-bb67-07368dd23d88", e._sentryDebugIdIdentifier = "sentry-dbid-d18a274f-3892-4632-bb67-07368dd23d88")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7185, 9566], {
    27185: (e, n, t) => {
      t.r(n), t.d(n, {
        useHardwareConcurrency: () => b,
        useMemoryStatus: () => g,
        useNetworkStatus: () => f,
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
      var d, s, u, c, f = function(e) {
          var n, t = {
              unsupported: d = !("undefined" != typeof navigator && "connection" in navigator && "effectiveType" in navigator.connection),
              effectiveConnectionType: d ? e : navigator.connection.effectiveType
            },
            o = function(e) {
              if (Array.isArray(e)) return e
            }(n = (0, r.useState)(t)) || function(e) {
              if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                var n = [],
                  t = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (var a, i = e[Symbol.iterator](); !(t = (a = i.next()).done) && (n.push(a.value), 2 !== n.length); t = !0);
                } catch (e) {
                  r = !0, o = e
                } finally {
                  try {
                    t || null == i.return || i.return()
                  } finally {
                    if (r) throw o
                  }
                }
                return n
              }
            }(n) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }(),
            a = o[0],
            s = o[1];
          return (0, r.useEffect)((function() {
            if (!d) {
              var e = navigator.connection,
                n = function() {
                  s({
                    effectiveConnectionType: e.effectiveType
                  })
                };
              return e.addEventListener("change", n),
                function() {
                  e.removeEventListener("change", n)
                }
            }
          }), []), i({}, a, {
            setNetworkStatus: s
          })
        },
        l = function() {
          return {
            unsupported: s = !("undefined" != typeof navigator && "connection" in navigator && "saveData" in navigator.connection),
            saveData: s ? arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null : !0 === navigator.connection.saveData
          }
        };
      if (u = !("undefined" != typeof navigator && "deviceMemory" in navigator)) c = {
        unsupported: u
      };
      else {
        var p = "memory" in performance ? performance.memory : null;
        c = {
          unsupported: u,
          deviceMemory: navigator.deviceMemory,
          totalJSHeapSize: p ? p.totalJSHeapSize : null,
          usedJSHeapSize: p ? p.usedJSHeapSize : null,
          jsHeapSizeLimit: p ? p.jsHeapSizeLimit : null
        }
      }
      var y, g = function(e) {
        return u && e ? i({}, c, {}, e) : i({}, c)
      };
      y = "undefined" != typeof navigator && "hardwareConcurrency" in navigator ? {
        unsupported: !1,
        numberOfLogicalProcessors: navigator.hardwareConcurrency
      } : {
        unsupported: !0
      };
      var b = function() {
        return i({}, y)
      }
    }
  }
]);