try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e64d4874-ebaf-409e-b5dd-e5193f3f7209", e._sentryDebugIdIdentifier = "sentry-dbid-e64d4874-ebaf-409e-b5dd-e5193f3f7209")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [277], {
    76597(e) {
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? f((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function o(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function c(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function f(e, r, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || t, i.cloneUnlessOtherwiseSpecified = n;
        var l = Array.isArray(r);
        return l === Array.isArray(e) ? l ? i.arrayMerge(e, r, i) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && a(e).forEach(function(t) {
            o[t] = n(e[t], r)
          }), a(t).forEach(function(a) {
            (function(e, t) {
              return c(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (c(e, a) && r.isMergeableObject(t[a]) ? o[a] = function(e, t) {
              if (!t.customMerge) return f;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : f
            }(a, r)(e[a], t[a], r) : o[a] = n(t[a], r))
          }), o
        }(e, r, i) : n(r, i)
      }
      f.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return f(e, r, t)
        }, {})
      };
      var i = f;
      e.exports = i
    },
    51177(e, t, r) {
      r.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => i,
        fX: () => l,
        sH: () => f
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

      function f(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function c(e) {
            try {
              i(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(c, f)
          }
          i((n = n.apply(e, t || [])).next())
        })
      }

      function i(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return c.next = f(0), c.throw = f(1), c.return = f(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function f(f) {
          return function(i) {
            return function(f) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, f[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & f[0] ? n.return : f[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, f[1])).done) return o;
                switch (n = 0, o && (f = [2 & f[0], o.value]), f[0]) {
                  case 0:
                  case 1:
                    o = f;
                    break;
                  case 4:
                    return a.label++, {
                      value: f[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = f[1], f = [0];
                    continue;
                  case 7:
                    f = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== f[0] && 2 !== f[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === f[0] && (!o || f[1] > o[0] && f[1] < o[3])) {
                      a.label = f[1];
                      break
                    }
                    if (6 === f[0] && a.label < o[1]) {
                      a.label = o[1], o = f;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(f);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                f = t.call(e, a)
              } catch (e) {
                f = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & f[0]) throw f[1];
              return {
                value: f[0] ? f[1] : void 0,
                done: !0
              }
            }([f, i])
          }
        }
      }

      function l(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);