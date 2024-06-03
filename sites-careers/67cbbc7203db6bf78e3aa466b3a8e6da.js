! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b8a4d9ff-a263-4ead-a9e4-5b954597d79f", e._sentryDebugIdIdentifier = "sentry-dbid-b8a4d9ff-a263-4ead-a9e4-5b954597d79f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [804], {
    92634: (e, n, r) => {
      r.d(n, {
        m: () => o
      });
      var t = r(51664);

      function o(e, n) {
        return r = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (a = (0, t.useState)((function() {
          return {
            value: r,
            callback: o,
            facade: {
              get current() {
                return a.value
              },
              set current(e) {
                var n = a.value;
                n !== e && (a.value = e, a.callback(e, n))
              }
            }
          }
        }))[0]).callback = o, a.facade;
        var r, o, a
      }
    },
    35045: (e, n, r) => {
      r.d(n, {
        W: () => u,
        Y: () => f
      });
      var t = r(87672);

      function o(e) {
        return e
      }

      function a(e, n) {
        void 0 === n && (n = o);
        var r = [],
          t = !1;
        return {
          read: function() {
            if (t) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var o = n(e, t);
            return r.push(o),
              function() {
                r = r.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (t = !0; r.length;) {
              var n = r;
              r = [], n.forEach(e)
            }
            r = {
              push: function(n) {
                return e(n)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            t = !0;
            var n = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(e), n = r
            }
            var a = function() {
                var r = n;
                n = [], r.forEach(e)
              },
              u = function() {
                return Promise.resolve().then(a)
              };
            u(), r = {
              push: function(e) {
                n.push(e), u()
              },
              filter: function(e) {
                return n = n.filter(e), r
              }
            }
          }
        }
      }

      function u(e, n) {
        return void 0 === n && (n = o), a(e, n)
      }

      function f(e) {
        void 0 === e && (e = {});
        var n = a(null);
        return n.options = (0, t.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    87672: (e, n, r) => {
      r.d(n, {
        C3: () => a,
        Mt: () => f,
        ct: () => o,
        sX: () => u
      });
      var t = function(e, n) {
        return t = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }, t(e, n)
      };

      function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var n, r = 1, t = arguments.length; r < t; r++)
            for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e
        }, a.apply(this, arguments)
      };

      function u(e, n) {
        var r = {};
        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) n.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (r[t[o]] = e[t[o]])
        }
        return r
      }

      function f(e, n, r) {
        if (r || 2 === arguments.length)
          for (var t, o = 0, a = n.length; o < a; o++) !t && o in n || (t || (t = Array.prototype.slice.call(n, 0, o)), t[o] = n[o]);
        return e.concat(t || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);