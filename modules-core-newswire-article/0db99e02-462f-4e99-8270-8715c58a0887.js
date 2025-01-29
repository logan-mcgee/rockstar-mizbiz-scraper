! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0db99e02-462f-4e99-8270-8715c58a0887", e._sentryDebugIdIdentifier = "sentry-dbid-0db99e02-462f-4e99-8270-8715c58a0887")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6471, 8096], {
    45356: (e, t, r) => {
      var n = r(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, r) {
        var n, a = {},
          i = null,
          u = null;
        for (n in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (u = t.ref), t) l.call(t, n) && !f.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: u,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = i, t.jsxs = i
    },
    98096: (e, t, r) => {
      e.exports = r(45356)
    },
    78322: (e, t, r) => {
      r.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => l,
        YH: () => f,
        fX: () => i,
        sH: () => c
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

      function c(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
          function l(e) {
            try {
              f(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              f(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function f(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(l, c)
          }
          f((n = n.apply(e, t || [])).next())
        }))
      }

      function f(e, t) {
        var r, n, o, a, l = {
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
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (l = 0)), l;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return l.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    l.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = l.ops.pop(), l.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = l.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      l = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      l.label = c[1];
                      break
                    }
                    if (6 === c[0] && l.label < o[1]) {
                      l.label = o[1], o = c;
                      break
                    }
                    if (o && l.label < o[2]) {
                      l.label = o[2], l.ops.push(c);
                      break
                    }
                    o[2] && l.ops.pop(), l.trys.pop();
                    continue
                }
                c = t.call(e, l)
              } catch (e) {
                c = [6, e], n = 0
              } finally {
                r = o = 0
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

      function i(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);