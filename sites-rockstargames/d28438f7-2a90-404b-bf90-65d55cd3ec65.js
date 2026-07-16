try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d28438f7-2a90-404b-bf90-65d55cd3ec65", e._sentryDebugIdIdentifier = "sentry-dbid-d28438f7-2a90-404b-bf90-65d55cd3ec65")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1177, 4809, 7190], {
    94931(e, t, r) {
      var n = r(93082),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        f = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, r) {
        var n, a = {},
          i = null,
          s = null;
        for (n in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (s = t.ref), t) l.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: s,
          props: a,
          _owner: f.current
        }
      }
      t.Fragment = a, t.jsx = i, t.jsxs = i
    },
    39793(e, t, r) {
      e.exports = r(94931)
    },
    51177(e, t, r) {
      r.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => l,
        YH: () => c,
        fX: () => u,
        gz: () => s,
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

      function l(e, t) {
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
          function l(e) {
            try {
              c(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
            try {
              c(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(l, f)
          }
          c((n = n.apply(e, t || [])).next())
        })
      }

      function c(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = f(0), l.throw = f(1), l.return = f(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
          return this
        }), l;

        function f(f) {
          return function(c) {
            return function(f) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; l && (l = 0, f[0] && (a = 0)), a;) try {
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
            }([f, c])
          }
        }
      }

      function i(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          l = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) l.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return l
      }

      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
        return e
      }

      function u(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create
    }
  }
]);