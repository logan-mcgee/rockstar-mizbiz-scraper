try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9456876e-4832-43b7-a507-154d53541010", e._sentryDebugIdIdentifier = "sentry-dbid-9456876e-4832-43b7-a507-154d53541010")
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
  [2683], {
    10622(e, t, n) {
      n.d(t, {
        zR: () => i
      });
      var a, r = n(84965);
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(a || (a = {}));
      var o = "beforeunload";

      function i(e) {
        void 0 === e && (e = {});
        var t = e.window,
          n = void 0 === t ? document.defaultView : t,
          i = n.history;

        function l() {
          var e = n.location,
            t = e.pathname,
            a = e.search,
            r = e.hash,
            o = i.state || {};
          return [o.idx, {
            pathname: t,
            search: a,
            hash: r,
            state: o.usr || null,
            key: o.key || "default"
          }]
        }
        var d = null;
        n.addEventListener("popstate", function() {
          if (d) y.call(d), d = null;
          else {
            var e = a.Pop,
              t = l(),
              n = t[0],
              r = t[1];
            if (y.length) {
              if (null != n) {
                var o = h - n;
                o && (d = {
                  action: e,
                  location: r,
                  retry: function() {
                    _(-1 * o)
                  }
                }, _(o))
              }
            } else m(e)
          }
        });
        var f = a.Pop,
          c = l(),
          h = c[0],
          p = c[1],
          g = u(),
          y = u();

        function b(e) {
          return "string" == typeof e ? e : (n = (t = e).pathname, a = void 0 === n ? "/" : n, r = t.search, o = void 0 === r ? "" : r, i = t.hash, s = void 0 === i ? "" : i, o && "?" !== o && (a += "?" === o.charAt(0) ? o : "?" + o), s && "#" !== s && (a += "#" === s.charAt(0) ? s : "#" + s), a);
          var t, n, a, r, o, i, s
        }

        function v(e, t) {
          return void 0 === t && (t = null), (0, r.A)({
            pathname: p.pathname,
            hash: "",
            search: ""
          }, "string" == typeof e ? function(e) {
            var t = {};
            if (e) {
              var n = e.indexOf("#");
              n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
              var a = e.indexOf("?");
              a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e)
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
          }, b(e)]
        }

        function k(e, t, n) {
          return !y.length || (y.call({
            action: e,
            location: t,
            retry: n
          }), !1)
        }

        function m(e) {
          f = e;
          var t = l();
          h = t[0], p = t[1], g.call({
            action: f,
            location: p
          })
        }

        function _(e) {
          i.go(e)
        }
        return null == h && (h = 0, i.replaceState((0, r.A)({}, i.state, {
          idx: h
        }), "")), {
          get action() {
            return f
          },
          get location() {
            return p
          },
          createHref: b,
          push: function e(t, r) {
            var o = a.Push,
              s = v(t, r);
            if (k(o, s, function() {
                e(t, r)
              })) {
              var u = w(s, h + 1),
                l = u[0],
                d = u[1];
              try {
                i.pushState(l, "", d)
              } catch (e) {
                n.location.assign(d)
              }
              m(o)
            }
          },
          replace: function e(t, n) {
            var r = a.Replace,
              o = v(t, n);
            if (k(r, o, function() {
                e(t, n)
              })) {
              var s = w(o, h),
                u = s[0],
                l = s[1];
              i.replaceState(u, "", l), m(r)
            }
          },
          go: _,
          back: function() {
            _(-1)
          },
          forward: function() {
            _(1)
          },
          listen: function(e) {
            return g.push(e)
          },
          block: function(e) {
            var t = y.push(e);
            return 1 === y.length && n.addEventListener(o, s),
              function() {
                t(), y.length || n.removeEventListener(o, s)
              }
          }
        }
      }

      function s(e) {
        e.preventDefault(), e.returnValue = ""
      }

      function u() {
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
      var a = n(84017);
      t.H = a.createRoot, a.hydrateRoot
    },
    84965(e, t, n) {
      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)({}).hasOwnProperty.call(n, a) && (e[a] = n[a])
          }
          return e
        }, a.apply(null, arguments)
      }
      n.d(t, {
        A: () => a
      })
    },
    34666(e, t, n) {
      n.d(t, {
        NP: () => a.NP
      });
      var a = n(37494)
    }
  }
]);