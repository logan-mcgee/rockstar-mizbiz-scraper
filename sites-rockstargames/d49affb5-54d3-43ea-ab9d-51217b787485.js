! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d49affb5-54d3-43ea-ab9d-51217b787485", e._sentryDebugIdIdentifier = "sentry-dbid-d49affb5-54d3-43ea-ab9d-51217b787485")
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
  [9968], {
    92634: (e, t, r) => {
      r.d(t, {
        m: () => o
      });
      var n = r(51664);

      function o(e, t) {
        return r = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (a = (0, n.useState)((function() {
          return {
            value: r,
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
        var r, o, a
      }
    },
    35045: (e, t, r) => {
      r.d(t, {
        W: () => c,
        Y: () => u
      });
      var n = r(87672);

      function o(e) {
        return e
      }

      function a(e, t) {
        void 0 === t && (t = o);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, n);
            return r.push(o),
              function() {
                r = r.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (n = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            n = !0;
            var t = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(e), t = r
            }
            var a = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              c = function() {
                return Promise.resolve().then(a)
              };
            c(), r = {
              push: function(e) {
                t.push(e), c()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function c(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function u(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, n.C3)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    62504: (e, t, r) => {
      r.d(t, {
        c: () => o
      });
      var n = r(53952);

      function o(e, t, r) {
        return (t = (0, n.c)(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
    },
    82795: (e, t, r) => {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(this, arguments)
      }
      r.d(t, {
        c: () => n
      })
    },
    31632: (e, t, r) => {
      function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }
      r.d(t, {
        c: () => n
      })
    },
    74848: (e, t, r) => {
      function n(e, t) {
        return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, n(e, t)
      }
      r.d(t, {
        c: () => n
      })
    },
    53952: (e, t, r) => {
      r.d(t, {
        c: () => o
      });
      var n = r(28792);

      function o(e) {
        var t = function(e, t) {
          if ("object" !== (0, n.c)(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(e, "string");
            if ("object" !== (0, n.c)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === (0, n.c)(t) ? t : String(t)
      }
    },
    28792: (e, t, r) => {
      function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
      }
      r.d(t, {
        c: () => n
      })
    },
    87672: (e, t, r) => {
      r.d(t, {
        C3: () => a,
        Mt: () => u,
        ct: () => o,
        sX: () => c
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function u(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);