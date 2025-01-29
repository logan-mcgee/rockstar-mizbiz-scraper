! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f352adf6-d05e-496a-86ff-b095d4c6e75b", e._sentryDebugIdIdentifier = "sentry-dbid-f352adf6-d05e-496a-86ff-b095d4c6e75b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || []).push([
  [322], {
    8322: (e, t, n) => {
      n.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => l,
        YH: () => c,
        fX: () => i,
        sH: () => f
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

      function l(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function f(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function l(e) {
            try {
              c(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
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
            }))).then(l, f)
          }
          c((r = r.apply(e, t || [])).next())
        }))
      }

      function c(e, t) {
        var n, r, o, a, l = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: f(0),
          throw: f(1),
          return: f(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function f(f) {
          return function(c) {
            return function(f) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, f[0] && (l = 0)), l;) try {
                if (n = 1, r && (o = 2 & f[0] ? r.return : f[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, f[1])).done) return o;
                switch (r = 0, o && (f = [2 & f[0], o.value]), f[0]) {
                  case 0:
                  case 1:
                    o = f;
                    break;
                  case 4:
                    return l.label++, {
                      value: f[1],
                      done: !1
                    };
                  case 5:
                    l.label++, r = f[1], f = [0];
                    continue;
                  case 7:
                    f = l.ops.pop(), l.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = l.trys).length > 0 && o[o.length - 1]) || 6 !== f[0] && 2 !== f[0])) {
                      l = 0;
                      continue
                    }
                    if (3 === f[0] && (!o || f[1] > o[0] && f[1] < o[3])) {
                      l.label = f[1];
                      break
                    }
                    if (6 === f[0] && l.label < o[1]) {
                      l.label = o[1], o = f;
                      break
                    }
                    if (o && l.label < o[2]) {
                      l.label = o[2], l.ops.push(f);
                      break
                    }
                    o[2] && l.ops.pop(), l.trys.pop();
                    continue
                }
                f = t.call(e, l)
              } catch (e) {
                f = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & f[0]) throw f[1];
              return {
                value: f[0] ? f[1] : void 0,
                done: !0
              }
            }([f, c])
          }
        }
      }

      function i(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);