! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a3e92f1-b1f3-4f73-b4b6-65f64339444e", e._sentryDebugIdIdentifier = "sentry-dbid-5a3e92f1-b1f3-4f73-b4b6-65f64339444e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [968], {
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
        }, (u = (0, r.useState)((function() {
          return {
            value: n,
            callback: o,
            facade: {
              get current() {
                return u.value
              },
              set current(e) {
                var t = u.value;
                t !== e && (u.value = e, u.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, u.facade;
        var n, o, u
      }
    },
    35045: (e, t, n) => {
      n.d(t, {
        W: () => a,
        Y: () => c
      });
      var r = n(87672);

      function o(e) {
        return e
      }

      function u(e, t) {
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
            var u = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(u)
              };
            a(), n = {
              push: function(e) {
                t.push(e), a()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function a(e, t) {
        return void 0 === t && (t = o), u(e, t)
      }

      function c(e) {
        void 0 === e && (e = {});
        var t = u(null);
        return t.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    62504: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(53952);

      function o(e, t, n) {
        return (t = (0, r.c)(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
    },
    82795: (e, t, n) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(this, arguments)
      }
      n.d(t, {
        c: () => r
      })
    },
    31632: (e, t, n) => {
      function r(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          u = Object.keys(e);
        for (r = 0; r < u.length; r++) n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }
      n.d(t, {
        c: () => r
      })
    },
    74848: (e, t, n) => {
      function r(e, t) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, r(e, t)
      }
      n.d(t, {
        c: () => r
      })
    },
    53952: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(28792);

      function o(e) {
        var t = function(e, t) {
          if ("object" !== (0, r.c)(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, "string");
            if ("object" !== (0, r.c)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === (0, r.c)(t) ? t : String(t)
      }
    },
    28792: (e, t, n) => {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }
      n.d(t, {
        c: () => r
      })
    },
    87672: (e, t, n) => {
      n.d(t, {
        C3: () => u,
        Mt: () => c,
        ct: () => o,
        sX: () => a
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
      var u = function() {
        return u = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, u.apply(this, arguments)
      };

      function a(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, u = t.length; o < u; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);