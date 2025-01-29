! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7634c62a-0cd7-4632-81de-7fe0e4165815", e._sentryDebugIdIdentifier = "sentry-dbid-7634c62a-0cd7-4632-81de-7fe0e4165815")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [564], {
    3782: (e, n, t) => {
      t.d(n, {
        S: () => o
      });
      var r = t(2229);

      function o(e, n) {
        return t = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: t,
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
        var t, o, a
      }
    },
    4269: (e, n, t) => {
      t.d(n, {
        C: () => u,
        f: () => c
      });
      var r = t(8322);

      function o(e) {
        return e
      }

      function a(e, n) {
        void 0 === n && (n = o);
        var t = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : e
          },
          useMedium: function(e) {
            var o = n(e, r);
            return t.push(o),
              function() {
                t = t.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; t.length;) {
              var n = t;
              t = [], n.forEach(e)
            }
            t = {
              push: function(n) {
                return e(n)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var n = [];
            if (t.length) {
              var o = t;
              t = [], o.forEach(e), n = t
            }
            var a = function() {
                var t = n;
                n = [], t.forEach(e)
              },
              u = function() {
                return Promise.resolve().then(a)
              };
            u(), t = {
              push: function(e) {
                n.push(e), u()
              },
              filter: function(e) {
                return n = n.filter(e), t
              }
            }
          }
        }
      }

      function u(e, n) {
        return void 0 === n && (n = o), a(e, n)
      }

      function c(e) {
        void 0 === e && (e = {});
        var n = a(null);
        return n.options = (0, r.Cl)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    8322: (e, n, t) => {
      t.d(n, {
        C6: () => o,
        Cl: () => a,
        Tt: () => u,
        YH: () => f,
        fX: () => l,
        sH: () => c
      });
      var r = function(e, n) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, n) {
          e.__proto__ = n
        } || function(e, n) {
          for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
        }, r(e, n)
      };

      function o(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        r(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          return e
        }, a.apply(this, arguments)
      };

      function u(e, n) {
        var t = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
        }
        return t
      }

      function c(e, n, t, r) {
        return new(t || (t = Promise))((function(o, a) {
          function u(e) {
            try {
              f(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              f(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
            var n;
            e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
              e(n)
            }))).then(u, c)
          }
          f((r = r.apply(e, n || [])).next())
        }))
      }

      function f(e, n) {
        var t, r, o, a, u = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function c(c) {
          return function(f) {
            return function(c) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (u = 0)), u;) try {
                if (t = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return u.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    u.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = u.ops.pop(), u.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = u.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      u = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      u.label = c[1];
                      break
                    }
                    if (6 === c[0] && u.label < o[1]) {
                      u.label = o[1], o = c;
                      break
                    }
                    if (o && u.label < o[2]) {
                      u.label = o[2], u.ops.push(c);
                      break
                    }
                    o[2] && u.ops.pop(), u.trys.pop();
                    continue
                }
                c = n.call(e, u)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                t = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, f])
          }
        }
      }

      function l(e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, a = n.length; o < a; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);