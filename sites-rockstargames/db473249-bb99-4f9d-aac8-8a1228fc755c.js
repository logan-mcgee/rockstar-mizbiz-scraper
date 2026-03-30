try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "db473249-bb99-4f9d-aac8-8a1228fc755c", e._sentryDebugIdIdentifier = "sentry-dbid-db473249-bb99-4f9d-aac8-8a1228fc755c")
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
  [2295, 4689], {
    9827: (e, t, n) => {
      var r = n(18429);
      t.H = r.createRoot, r.hydrateRoot
    },
    42295: (e, t, n) => {
      e.exports = n(69245)
    },
    69245: (e, t, n) => {
      var r = n(71127),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, o = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !f.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: u,
          ref: l,
          props: o,
          _owner: i.current
        }
      }
      t.Fragment = o, t.jsx = u, t.jsxs = u
    },
    77053: (e, t, n) => {
      n.d(t, {
        DI: () => r.DI,
        LU: () => r.LU
      });
      var r = n(93715);
      n(57461)
    },
    85819: (e, t, n) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, r.apply(null, arguments)
      }
      var a;
      n.d(t, {
          zR: () => f
        }),
        function(e) {
          e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(a || (a = {}));
      var o = function(e) {
          return e
        },
        s = "beforeunload",
        i = "popstate";

      function f(e) {
        void 0 === e && (e = {});
        var t = e.window,
          n = void 0 === t ? document.defaultView : t,
          f = n.history;

        function c() {
          var e = n.location,
            t = e.pathname,
            r = e.search,
            a = e.hash,
            s = f.state || {};
          return [s.idx, o({
            pathname: t,
            search: r,
            hash: a,
            state: s.usr || null,
            key: s.key || "default"
          })]
        }
        var d = null;
        n.addEventListener(i, function() {
          if (d) v.call(d), d = null;
          else {
            var e = a.Pop,
              t = c(),
              n = t[0],
              r = t[1];
            if (v.length) {
              if (null != n) {
                var o = y - n;
                o && (d = {
                  action: e,
                  location: r,
                  retry: function() {
                    P(-1 * o)
                  }
                }, P(o))
              }
            } else E(e)
          }
        });
        var h = a.Pop,
          p = c(),
          y = p[0],
          b = p[1],
          g = l(),
          v = l();

        function _(e) {
          return "string" == typeof e ? e : (n = (t = e).pathname, r = void 0 === n ? "/" : n, a = t.search, o = void 0 === a ? "" : a, s = t.hash, i = void 0 === s ? "" : s, o && "?" !== o && (r += "?" === o.charAt(0) ? o : "?" + o), i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i), r);
          var t, n, r, a, o, s, i
        }

        function w(e, t) {
          return void 0 === t && (t = null), o(r({
            pathname: b.pathname,
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
          }))
        }

        function k(e, t) {
          return [{
            usr: e.state,
            key: e.key,
            idx: t
          }, _(e)]
        }

        function m(e, t, n) {
          return !v.length || (v.call({
            action: e,
            location: t,
            retry: n
          }), !1)
        }

        function E(e) {
          h = e;
          var t = c();
          y = t[0], b = t[1], g.call({
            action: h,
            location: b
          })
        }

        function P(e) {
          f.go(e)
        }
        return null == y && (y = 0, f.replaceState(r({}, f.state, {
          idx: y
        }), "")), {
          get action() {
            return h
          },
          get location() {
            return b
          },
          createHref: _,
          push: function e(t, r) {
            var o = a.Push,
              s = w(t, r);
            if (m(o, s, function() {
                e(t, r)
              })) {
              var i = k(s, y + 1),
                u = i[0],
                l = i[1];
              try {
                f.pushState(u, "", l)
              } catch (e) {
                n.location.assign(l)
              }
              E(o)
            }
          },
          replace: function e(t, n) {
            var r = a.Replace,
              o = w(t, n);
            if (m(r, o, function() {
                e(t, n)
              })) {
              var s = k(o, y),
                i = s[0],
                u = s[1];
              f.replaceState(i, "", u), E(r)
            }
          },
          go: P,
          back: function() {
            P(-1)
          },
          forward: function() {
            P(1)
          },
          listen: function(e) {
            return g.push(e)
          },
          block: function(e) {
            var t = v.push(e);
            return 1 === v.length && n.addEventListener(s, u),
              function() {
                t(), v.length || n.removeEventListener(s, u)
              }
          }
        }
      }

      function u(e) {
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
    87927: (e, t, n) => {
      n.d(t, {
        NP: () => r.NP
      });
      var r = n(50078)
    }
  }
]);