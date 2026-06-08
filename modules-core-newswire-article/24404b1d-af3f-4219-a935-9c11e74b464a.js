try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "24404b1d-af3f-4219-a935-9c11e74b464a", e._sentryDebugIdIdentifier = "sentry-dbid-24404b1d-af3f-4219-a935-9c11e74b464a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8277], {
    76597(e) {
      var r = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var r = Object.prototype.toString.call(e);
            return "[object RegExp]" === r || "[object Date]" === r || function(e) {
              return e.$$typeof === t
            }(e)
          }(e)
        },
        t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? l((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function o(e, r, t) {
        return e.concat(r).map(function(e) {
          return n(e, t)
        })
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          }) : []
        }(e))
      }

      function c(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function l(e, t, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || o, i.isMergeableObject = i.isMergeableObject || r, i.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? i.arrayMerge(e, t, i) : function(e, r, t) {
          var o = {};
          return t.isMergeableObject(e) && a(e).forEach(function(r) {
            o[r] = n(e[r], t)
          }), a(r).forEach(function(a) {
            (function(e, r) {
              return c(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, a) || (c(e, a) && t.isMergeableObject(r[a]) ? o[a] = function(e, r) {
              if (!r.customMerge) return l;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : l
            }(a, t)(e[a], r[a], t) : o[a] = n(r[a], t))
          }), o
        }(e, t, i) : n(t, i)
      }
      l.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return l(e, t, r)
        }, {})
      };
      var i = l;
      e.exports = i
    },
    51177(e, r, t) {
      t.d(r, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => i,
        fX: () => s,
        gz: () => f,
        sH: () => l
      });
      var n = function(e, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, r) {
          e.__proto__ = r
        } || function(e, r) {
          for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }, n(e, r)
      };

      function o(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var r, t = 1, n = arguments.length; t < n; t++)
            for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]])
        }
        return t
      }

      function l(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
          function c(e) {
            try {
              i(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            try {
              i(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
              e(r)
            })).then(c, l)
          }
          i((n = n.apply(e, r || [])).next())
        })
      }

      function i(e, r) {
        var t, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          c = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return c.next = l(0), c.throw = l(1), c.return = l(2), "function" == typeof Symbol && (c[Symbol.iterator] = function() {
          return this
        }), c;

        function l(l) {
          return function(i) {
            return function(l) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, l[0] && (a = 0)), a;) try {
                if (t = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
                switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return a.label++, {
                      value: l[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = l[1], l = [0];
                    continue;
                  case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                      a.label = l[1];
                      break
                    }
                    if (6 === l[0] && a.label < o[1]) {
                      a.label = o[1], o = l;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(l);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                l = r.call(e, a)
              } catch (e) {
                l = [6, e], n = 0
              } finally {
                t = o = 0
              }
              if (5 & l[0]) throw l[1];
              return {
                value: l[0] ? l[1] : void 0,
                done: !0
              }
            }([l, i])
          }
        }
      }

      function u(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
          c = [];
        try {
          for (;
            (void 0 === r || r-- > 0) && !(n = a.next()).done;) c.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (t = a.return) && t.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return c
      }

      function f() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(u(arguments[r]));
        return e
      }

      function s(e, r, t) {
        if (t || 2 === arguments.length)
          for (var n, o = 0, a = r.length; o < a; o++) !n && o in r || (n || (n = Array.prototype.slice.call(r, 0, o)), n[o] = r[o]);
        return e.concat(n || Array.prototype.slice.call(r))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);