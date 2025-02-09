! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "fcad0baa-469c-41bc-b7f9-b7fd73cae4f0", n._sentryDebugIdIdentifier = "sentry-dbid-fcad0baa-469c-41bc-b7f9-b7fd73cae4f0")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6531], {
    26531: (n, t, e) => {
      e.r(t), e.d(t, {
        createBrowserHistory: () => E,
        createHashHistory: () => C,
        createLocation: () => y,
        createMemoryHistory: () => H,
        createPath: () => w,
        locationsAreEqual: () => m,
        parsePath: () => g
      });
      var o = e(43680);

      function a(n) {
        return "/" === n.charAt(0)
      }

      function r(n, t) {
        for (var e = t, o = e + 1, a = n.length; o < a; e += 1, o += 1) n[e] = n[o];
        n.pop()
      }
      const i = function(n, t) {
        void 0 === t && (t = "");
        var e, o = n && n.split("/") || [],
          i = t && t.split("/") || [],
          c = n && a(n),
          f = t && a(t),
          s = c || f;
        if (n && a(n) ? i = o : o.length && (i.pop(), i = i.concat(o)), !i.length) return "/";
        if (i.length) {
          var u = i[i.length - 1];
          e = "." === u || ".." === u || "" === u
        } else e = !1;
        for (var d = 0, l = i.length; l >= 0; l--) {
          var h = i[l];
          "." === h ? r(i, l) : ".." === h ? (r(i, l), d++) : d && (r(i, l), d--)
        }
        if (!s)
          for (; d--; d) i.unshift("..");
        !s || "" === i[0] || i[0] && a(i[0]) || i.unshift("");
        var v = i.join("/");
        return e && "/" !== v.substr(-1) && (v += "/"), v
      };

      function c(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n)
      }
      const f = function n(t, e) {
        if (t === e) return !0;
        if (null == t || null == e) return !1;
        if (Array.isArray(t)) return Array.isArray(e) && t.length === e.length && t.every((function(t, o) {
          return n(t, e[o])
        }));
        if ("object" == typeof t || "object" == typeof e) {
          var o = c(t),
            a = c(e);
          return o !== t || a !== e ? n(o, a) : Object.keys(Object.assign({}, t, e)).every((function(o) {
            return n(t[o], e[o])
          }))
        }
        return !1
      };
      var s = !0,
        u = "Invariant failed";

      function d(n, t) {
        if (!n) {
          if (s) throw new Error(u);
          var e = "function" == typeof t ? t() : t,
            o = e ? "".concat(u, ": ").concat(e) : u;
          throw new Error(o)
        }
      }

      function l(n) {
        return "/" === n.charAt(0) ? n : "/" + n
      }

      function h(n) {
        return "/" === n.charAt(0) ? n.substr(1) : n
      }

      function v(n, t) {
        return function(n, t) {
          return 0 === n.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(t.length))
        }(n, t) ? n.substr(t.length) : n
      }

      function p(n) {
        return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
      }

      function g(n) {
        var t = n || "/",
          e = "",
          o = "",
          a = t.indexOf("#"); - 1 !== a && (o = t.substr(a), t = t.substr(0, a));
        var r = t.indexOf("?");
        return -1 !== r && (e = t.substr(r), t = t.substr(0, r)), {
          pathname: t,
          search: "?" === e ? "" : e,
          hash: "#" === o ? "" : o
        }
      }

      function w(n) {
        var t = n.pathname,
          e = n.search,
          o = n.hash,
          a = t || "/";
        return e && "?" !== e && (a += "?" === e.charAt(0) ? e : "?" + e), o && "#" !== o && (a += "#" === o.charAt(0) ? o : "#" + o), a
      }

      function y(n, t, e, a) {
        var r;
        "string" == typeof n ? (r = g(n)).state = t : (void 0 === (r = (0, o.A)({}, n)).pathname && (r.pathname = ""), r.search ? "?" !== r.search.charAt(0) && (r.search = "?" + r.search) : r.search = "", r.hash ? "#" !== r.hash.charAt(0) && (r.hash = "#" + r.hash) : r.hash = "", void 0 !== t && void 0 === r.state && (r.state = t));
        try {
          r.pathname = decodeURI(r.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return e && (r.key = e), a ? r.pathname ? "/" !== r.pathname.charAt(0) && (r.pathname = i(r.pathname, a.pathname)) : r.pathname = a.pathname : r.pathname || (r.pathname = "/"), r
      }

      function m(n, t) {
        return n.pathname === t.pathname && n.search === t.search && n.hash === t.hash && n.key === t.key && f(n.state, t.state)
      }

      function b() {
        var n = null,
          t = [];
        return {
          setPrompt: function(t) {
            return n = t,
              function() {
                n === t && (n = null)
              }
          },
          confirmTransitionTo: function(t, e, o, a) {
            if (null != n) {
              var r = "function" == typeof n ? n(t, e) : n;
              "string" == typeof r ? "function" == typeof o ? o(r, a) : a(!0) : a(!1 !== r)
            } else a(!0)
          },
          appendListener: function(n) {
            var e = !0;

            function o() {
              e && n.apply(void 0, arguments)
            }
            return t.push(o),
              function() {
                e = !1, t = t.filter((function(n) {
                  return n !== o
                }))
              }
          },
          notifyListeners: function() {
            for (var n = arguments.length, e = new Array(n), o = 0; o < n; o++) e[o] = arguments[o];
            t.forEach((function(n) {
              return n.apply(void 0, e)
            }))
          }
        }
      }
      var P = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function k(n, t) {
        t(window.confirm(n))
      }
      var O = "popstate",
        A = "hashchange";

      function x() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function E(n) {
        void 0 === n && (n = {}), P || d(!1);
        var t, e = window.history,
          a = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          r = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = n,
          c = i.forceRefresh,
          f = void 0 !== c && c,
          s = i.getUserConfirmation,
          u = void 0 === s ? k : s,
          h = i.keyLength,
          g = void 0 === h ? 6 : h,
          m = n.basename ? p(l(n.basename)) : "";

        function E(n) {
          var t = n || {},
            e = t.key,
            o = t.state,
            a = window.location,
            r = a.pathname + a.search + a.hash;
          return m && (r = v(r, m)), y(r, o, e)
        }

        function T() {
          return Math.random().toString(36).substr(2, g)
        }
        var L = b();

        function _(n) {
          (0, o.A)(q, n), q.length = e.length, L.notifyListeners(q.location, q.action)
        }

        function I(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || M(E(n.state))
        }

        function S() {
          M(E(x()))
        }
        var C = !1;

        function M(n) {
          C ? (C = !1, _()) : L.confirmTransitionTo(n, "POP", u, (function(t) {
            t ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var t = q.location,
                e = R.indexOf(t.key); - 1 === e && (e = 0);
              var o = R.indexOf(n.key); - 1 === o && (o = 0);
              var a = e - o;
              a && (C = !0, j(a))
            }(n)
          }))
        }
        var H = E(x()),
          R = [H.key];

        function U(n) {
          return m + w(n)
        }

        function j(n) {
          e.go(n)
        }
        var B = 0;

        function D(n) {
          1 === (B += n) && 1 === n ? (window.addEventListener(O, I), r && window.addEventListener(A, S)) : 0 === B && (window.removeEventListener(O, I), r && window.removeEventListener(A, S))
        }
        var F = !1,
          q = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: U,
            push: function(n, t) {
              var o = "PUSH",
                r = y(n, t, T(), q.location);
              L.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var t = U(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (e.pushState({
                        key: i,
                        state: c
                      }, null, t), f) window.location.href = t;
                    else {
                      var s = R.indexOf(q.location.key),
                        u = R.slice(0, s + 1);
                      u.push(r.key), R = u, _({
                        action: o,
                        location: r
                      })
                    }
                  else window.location.href = t
                }
              }))
            },
            replace: function(n, t) {
              var o = "REPLACE",
                r = y(n, t, T(), q.location);
              L.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var t = U(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (e.replaceState({
                        key: i,
                        state: c
                      }, null, t), f) window.location.replace(t);
                    else {
                      var s = R.indexOf(q.location.key); - 1 !== s && (R[s] = r.key), _({
                        action: o,
                        location: r
                      })
                    }
                  else window.location.replace(t)
                }
              }))
            },
            go: j,
            goBack: function() {
              j(-1)
            },
            goForward: function() {
              j(1)
            },
            block: function(n) {
              void 0 === n && (n = !1);
              var t = L.setPrompt(n);
              return F || (D(1), F = !0),
                function() {
                  return F && (F = !1, D(-1)), t()
                }
            },
            listen: function(n) {
              var t = L.appendListener(n);
              return D(1),
                function() {
                  D(-1), t()
                }
            }
          };
        return q
      }
      var T = "hashchange",
        L = {
          hashbang: {
            encodePath: function(n) {
              return "!" === n.charAt(0) ? n : "!/" + h(n)
            },
            decodePath: function(n) {
              return "!" === n.charAt(0) ? n.substr(1) : n
            }
          },
          noslash: {
            encodePath: h,
            decodePath: l
          },
          slash: {
            encodePath: l,
            decodePath: l
          }
        };

      function _(n) {
        var t = n.indexOf("#");
        return -1 === t ? n : n.slice(0, t)
      }

      function I() {
        var n = window.location.href,
          t = n.indexOf("#");
        return -1 === t ? "" : n.substring(t + 1)
      }

      function S(n) {
        window.location.replace(_(window.location.href) + "#" + n)
      }

      function C(n) {
        void 0 === n && (n = {}), P || d(!1);
        var t = window.history,
          e = (window.navigator.userAgent.indexOf("Firefox"), n),
          a = e.getUserConfirmation,
          r = void 0 === a ? k : a,
          i = e.hashType,
          c = void 0 === i ? "slash" : i,
          f = n.basename ? p(l(n.basename)) : "",
          s = L[c],
          u = s.encodePath,
          h = s.decodePath;

        function g() {
          var n = h(I());
          return f && (n = v(n, f)), y(n)
        }
        var m = b();

        function O(n) {
          (0, o.A)(F, n), F.length = t.length, m.notifyListeners(F.location, F.action)
        }
        var A = !1,
          x = null;

        function E() {
          var n, t, e = I(),
            o = u(e);
          if (e !== o) S(o);
          else {
            var a = g(),
              i = F.location;
            if (!A && (t = a, (n = i).pathname === t.pathname && n.search === t.search && n.hash === t.hash)) return;
            if (x === w(a)) return;
            x = null,
              function(n) {
                if (A) A = !1, O();
                else {
                  m.confirmTransitionTo(n, "POP", r, (function(t) {
                    t ? O({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var t = F.location,
                        e = R.lastIndexOf(w(t)); - 1 === e && (e = 0);
                      var o = R.lastIndexOf(w(n)); - 1 === o && (o = 0);
                      var a = e - o;
                      a && (A = !0, U(a))
                    }(n)
                  }))
                }
              }(a)
          }
        }
        var C = I(),
          M = u(C);
        C !== M && S(M);
        var H = g(),
          R = [w(H)];

        function U(n) {
          t.go(n)
        }
        var j = 0;

        function B(n) {
          1 === (j += n) && 1 === n ? window.addEventListener(T, E) : 0 === j && window.removeEventListener(T, E)
        }
        var D = !1,
          F = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var t = document.querySelector("base"),
                e = "";
              return t && t.getAttribute("href") && (e = _(window.location.href)), e + "#" + u(f + w(n))
            },
            push: function(n, t) {
              var e = "PUSH",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, e, r, (function(n) {
                if (n) {
                  var t = w(o),
                    a = u(f + t);
                  if (I() !== a) {
                    x = t,
                      function(n) {
                        window.location.hash = n
                      }(a);
                    var r = R.lastIndexOf(w(F.location)),
                      i = R.slice(0, r + 1);
                    i.push(t), R = i, O({
                      action: e,
                      location: o
                    })
                  } else O()
                }
              }))
            },
            replace: function(n, t) {
              var e = "REPLACE",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, e, r, (function(n) {
                if (n) {
                  var t = w(o),
                    a = u(f + t);
                  I() !== a && (x = t, S(a));
                  var r = R.indexOf(w(F.location)); - 1 !== r && (R[r] = t), O({
                    action: e,
                    location: o
                  })
                }
              }))
            },
            go: U,
            goBack: function() {
              U(-1)
            },
            goForward: function() {
              U(1)
            },
            block: function(n) {
              void 0 === n && (n = !1);
              var t = m.setPrompt(n);
              return D || (B(1), D = !0),
                function() {
                  return D && (D = !1, B(-1)), t()
                }
            },
            listen: function(n) {
              var t = m.appendListener(n);
              return B(1),
                function() {
                  B(-1), t()
                }
            }
          };
        return F
      }

      function M(n, t, e) {
        return Math.min(Math.max(n, t), e)
      }

      function H(n) {
        void 0 === n && (n = {});
        var t = n,
          e = t.getUserConfirmation,
          a = t.initialEntries,
          r = void 0 === a ? ["/"] : a,
          i = t.initialIndex,
          c = void 0 === i ? 0 : i,
          f = t.keyLength,
          s = void 0 === f ? 6 : f,
          u = b();

        function d(n) {
          (0, o.A)(m, n), m.length = m.entries.length, u.notifyListeners(m.location, m.action)
        }

        function l() {
          return Math.random().toString(36).substr(2, s)
        }
        var h = M(c, 0, r.length - 1),
          v = r.map((function(n) {
            return y(n, void 0, "string" == typeof n ? l() : n.key || l())
          })),
          p = w;

        function g(n) {
          var t = M(m.index + n, 0, m.entries.length - 1),
            o = m.entries[t];
          u.confirmTransitionTo(o, "POP", e, (function(n) {
            n ? d({
              action: "POP",
              location: o,
              index: t
            }) : d()
          }))
        }
        var m = {
          length: v.length,
          action: "POP",
          location: v[h],
          index: h,
          entries: v,
          createHref: p,
          push: function(n, t) {
            var o = "PUSH",
              a = y(n, t, l(), m.location);
            u.confirmTransitionTo(a, o, e, (function(n) {
              if (n) {
                var t = m.index + 1,
                  e = m.entries.slice(0);
                e.length > t ? e.splice(t, e.length - t, a) : e.push(a), d({
                  action: o,
                  location: a,
                  index: t,
                  entries: e
                })
              }
            }))
          },
          replace: function(n, t) {
            var o = "REPLACE",
              a = y(n, t, l(), m.location);
            u.confirmTransitionTo(a, o, e, (function(n) {
              n && (m.entries[m.index] = a, d({
                action: o,
                location: a
              }))
            }))
          },
          go: g,
          goBack: function() {
            g(-1)
          },
          goForward: function() {
            g(1)
          },
          canGo: function(n) {
            var t = m.index + n;
            return t >= 0 && t < m.entries.length
          },
          block: function(n) {
            return void 0 === n && (n = !1), u.setPrompt(n)
          },
          listen: function(n) {
            return u.appendListener(n)
          }
        };
        return m
      }
    }
  }
]);