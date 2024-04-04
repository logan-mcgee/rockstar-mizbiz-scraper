! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "317d0691-1827-42d5-8735-f1494afe2f40", e._sentryDebugIdIdentifier = "sentry-dbid-317d0691-1827-42d5-8735-f1494afe2f40")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [804], {
    92634: (e, t, n) => {
      n.d(t, {
        m: () => o
      });
      var r = n(51664);

      function o(e, t) {
        return n = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: n,
            callback: o,
            facade: {
              get current() {
                return a.value
              },
              set current(e) {
                var t = a.value;
                t !== e && (a.value = e, a.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, a.facade;
        var n, o, a
      }
    },
    35045: (e, t, n) => {
      n.d(t, {
        W: () => u,
        Y: () => f
      });
      var r = n(87672);

      function o(e) {
        return e
      }

      function a(e, t) {
        void 0 === t && (t = o);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
              function() {
                n = n.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              n = [], o.forEach(e), t = n
            }
            var a = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              u = function() {
                return Promise.resolve().then(a)
              };
            u(), n = {
              push: function(e) {
                t.push(e), u()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function u(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function f(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    87672: (e, t, n) => {
      n.d(t, {
        C3: () => a,
        Mt: () => f,
        ct: () => o,
        sX: () => u
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function u(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function f(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=180a775482f9c2c3a7ba767ec8a3c994.js.map