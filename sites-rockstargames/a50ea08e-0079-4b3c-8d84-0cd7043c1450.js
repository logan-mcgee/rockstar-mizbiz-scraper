try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a50ea08e-0079-4b3c-8d84-0cd7043c1450", e._sentryDebugIdIdentifier = "sentry-dbid-a50ea08e-0079-4b3c-8d84-0cd7043c1450")
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
  [1177, 5644], {
    10622(e, t, n) {
      n.d(t, {
        zR: () => c
      });
      var r, o = n(88846);
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(r || (r = {}));
      var a = "beforeunload";

      function c(e) {
        void 0 === e && (e = {});
        var t = e.window,
          n = void 0 === t ? document.defaultView : t,
          c = n.history;

        function u() {
          var e = n.location,
            t = e.pathname,
            r = e.search,
            o = e.hash,
            a = c.state || {};
          return [a.idx, {
            pathname: t,
            search: r,
            hash: o,
            state: a.usr || null,
            key: a.key || "default"
          }]
        }
        var f = null;
        n.addEventListener("popstate", function() {
          if (f) b.call(f), f = null;
          else {
            var e = r.Pop,
              t = u(),
              n = t[0],
              o = t[1];
            if (b.length) {
              if (null != n) {
                var a = d - n;
                a && (f = {
                  action: e,
                  location: o,
                  retry: function() {
                    k(-1 * a)
                  }
                }, k(a))
              }
            } else O(e)
          }
        });
        var s = r.Pop,
          p = u(),
          d = p[0],
          y = p[1],
          h = l(),
          b = l();

        function v(e) {
          return "string" == typeof e ? e : (n = (t = e).pathname, r = void 0 === n ? "/" : n, o = t.search, a = void 0 === o ? "" : o, c = t.hash, i = void 0 === c ? "" : c, a && "?" !== a && (r += "?" === a.charAt(0) ? a : "?" + a), i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i), r);
          var t, n, r, o, a, c, i
        }

        function g(e, t) {
          return void 0 === t && (t = null), (0, o.A)({
            pathname: y.pathname,
            hash: "",
            search: ""
          }, "string" == typeof e ? function(e) {
            var t = {};
            if (e) {
              var n = e.indexOf("#");
              n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
              var r = e.indexOf("?");
              r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
          }(e) : e, {
            state: t,
            key: Math.random().toString(36).substr(2, 8)
          })
        }

        function w(e, t) {
          return [{
            usr: e.state,
            key: e.key,
            idx: t
          }, v(e)]
        }

        function _(e, t, n) {
          return !b.length || (b.call({
            action: e,
            location: t,
            retry: n
          }), !1)
        }

        function O(e) {
          s = e;
          var t = u();
          d = t[0], y = t[1], h.call({
            action: s,
            location: y
          })
        }

        function k(e) {
          c.go(e)
        }
        return null == d && (d = 0, c.replaceState((0, o.A)({}, c.state, {
          idx: d
        }), "")), {
          get action() {
            return s
          },
          get location() {
            return y
          },
          createHref: v,
          push: function e(t, o) {
            var a = r.Push,
              i = g(t, o);
            if (_(a, i, function() {
                e(t, o)
              })) {
              var l = w(i, d + 1),
                u = l[0],
                f = l[1];
              try {
                c.pushState(u, "", f)
              } catch (e) {
                n.location.assign(f)
              }
              O(a)
            }
          },
          replace: function e(t, n) {
            var o = r.Replace,
              a = g(t, n);
            if (_(o, a, function() {
                e(t, n)
              })) {
              var i = w(a, d),
                l = i[0],
                u = i[1];
              c.replaceState(l, "", u), O(o)
            }
          },
          go: k,
          back: function() {
            k(-1)
          },
          forward: function() {
            k(1)
          },
          listen: function(e) {
            return h.push(e)
          },
          block: function(e) {
            var t = b.push(e);
            return 1 === b.length && n.addEventListener(a, i),
              function() {
                t(), b.length || n.removeEventListener(a, i)
              }
          }
        }
      }

      function i(e) {
        e.preventDefault(), e.returnValue = ""
      }

      function l() {
        var e = [];
        return {
          get length() {
            return e.length
          },
          push: function(t) {
            return e.push(t),
              function() {
                e = e.filter(function(e) {
                  return e !== t
                })
              }
          },
          call: function(t) {
            e.forEach(function(e) {
              return e && e(t)
            })
          }
        }
      }
    },
    5643(e, t, n) {
      var r = n(84017);
      t.H = r.createRoot, r.hydrateRoot
    },
    94931(e, t, n) {
      var r = n(93082),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        c = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, a = {},
          u = null,
          f = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) c.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: f,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    88846(e, t, n) {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(null, arguments)
      }
      n.d(t, {
        A: () => r
      })
    },
    46966(e, t, n) {
      n.d(t, {
        DI: () => r.DI,
        LU: () => r.LU
      });
      var r = n(30740);
      n(21423)
    },
    26152(e, t, n) {
      n.d(t, {
        NP: () => r.NP
      });
      var r = n(31589)
    },
    51177(e, t, n) {
      n.d(t, {
        C6: () => o,
        Cl: () => a,
        Tt: () => c,
        YH: () => l,
        fX: () => s,
        gz: () => f,
        sH: () => i
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

      function c(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function i(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
          function c(e) {
            try {
              l(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              l(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(c, i)
          }
          l((r = r.apply(e, t || [])).next())
        })
      }

      function l(e, t) {
        var n, r, o, a = {
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
              if (n) throw new TypeError("Generator is already executing.");
              for (; c && (c = 0, i[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                    a.label++, r = i[1], i = [0];
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
                i = [6, e], r = 0
              } finally {
                n = o = 0
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

      function u(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          c = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) c.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return c
      }

      function f() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
        return e
      }

      function s(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);