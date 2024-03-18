! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b07a3935-f3fd-4787-b3c7-e1117894263f", e._sentryDebugIdIdentifier = "sentry-dbid-b07a3935-f3fd-4787-b3c7-e1117894263f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [800], {
    86540: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          n = a
        }
      }();
      var u, c = [],
        l = !1,
        f = -1;

      function s() {
        l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
      }

      function p() {
        if (!l) {
          var e = i(s);
          l = !0;
          for (var t = c.length; t;) {
            for (u = c, c = []; ++f < t;) u && u[f].run();
            f = -1, t = c.length
          }
          u = null, l = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function y() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new d(e, t)), 1 !== c.length || l || i(p)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y, r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    87672: (e, t, n) => {
      "use strict";
      n.d(t, {
        C3: () => a,
        KE: () => c,
        Mt: () => l,
        ct: () => o,
        kH: () => u,
        sX: () => i
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

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function u(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function i(e) {
            try {
              c(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            try {
              c(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(i, u)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      }

      function c(e, t) {
        var n, r, o, a, i = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: u(0),
          throw: u(1),
          return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function u(u) {
          return function(c) {
            return function(u) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return i.label++, {
                      value: u[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = u[1], u = [0];
                    continue;
                  case 7:
                    u = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                      i.label = u[1];
                      break
                    }
                    if (6 === u[0] && i.label < o[1]) {
                      i.label = o[1], o = u;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(u);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                u = t.call(e, i)
              } catch (e) {
                u = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & u[0]) throw u[1];
              return {
                value: u[0] ? u[1] : void 0,
                done: !0
              }
            }([u, c])
          }
        }
      }

      function l(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);
//# sourceMappingURL=316d87d3158b7ae8221f2de44f9b2626.js.map