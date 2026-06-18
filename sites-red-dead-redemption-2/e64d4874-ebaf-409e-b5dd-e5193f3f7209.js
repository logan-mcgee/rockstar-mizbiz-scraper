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
        return !1 !== t.clone && t.isMergeableObject(e) ? i((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
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

      function i(e, r, l) {
        (l = l || {}).arrayMerge = l.arrayMerge || o, l.isMergeableObject = l.isMergeableObject || t, l.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(r);
        return u === Array.isArray(e) ? u ? l.arrayMerge(e, r, l) : function(e, t, r) {
          var o = {};
          return r.isMergeableObject(e) && a(e).forEach(function(t) {
            o[t] = n(e[t], r)
          }), a(t).forEach(function(a) {
            (function(e, t) {
              return c(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, a) || (c(e, a) && r.isMergeableObject(t[a]) ? o[a] = function(e, t) {
              if (!t.customMerge) return i;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : i
            }(a, r)(e[a], t[a], r) : o[a] = n(t[a], r))
          }), o
        }(e, r, l) : n(r, l)
      }
      i.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return i(e, r, t)
        }, {})
      };
      var l = i;
      e.exports = l
    },
    51177(e, t, r) {
      r.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => l,
        fX: () => u,
        sH: () => i
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

      function i(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function c(e) {
            try {
              l(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              l(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(c, i)
          }
          l((n = n.apply(e, t || [])).next())
        })
      }

      function l(e, t) {
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
        return c.next = i(0), c.throw = i(1), c.return = i(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function i(i) {
          return function(l) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, i[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, l])
          }
        }
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