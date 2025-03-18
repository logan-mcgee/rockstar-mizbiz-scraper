! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "5b38a8eb-a59a-429a-8013-ede79fae1d98", n._sentryDebugIdIdentifier = "sentry-dbid-5b38a8eb-a59a-429a-8013-ede79fae1d98")
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
  [5836, 3455], {
    75836: (n, e, t) => {
      t.r(e), t.d(e, {
        createBrowserHistory: () => E,
        createHashHistory: () => C,
        createLocation: () => y,
        createMemoryHistory: () => H,
        createPath: () => w,
        locationsAreEqual: () => m,
        parsePath: () => g
      });
      var o = t(18751);

      function r(n) {
        return "/" === n.charAt(0)
      }

      function a(n, e) {
        for (var t = e, o = t + 1, r = n.length; o < r; t += 1, o += 1) n[t] = n[o];
        n.pop()
      }
      const i = function(n, e) {
        void 0 === e && (e = "");
        var t, o = n && n.split("/") || [],
          i = e && e.split("/") || [],
          c = n && r(n),
          f = e && r(e),
          s = c || f;
        if (n && r(n) ? i = o : o.length && (i.pop(), i = i.concat(o)), !i.length) return "/";
        if (i.length) {
          var u = i[i.length - 1];
          t = "." === u || ".." === u || "" === u
        } else t = !1;
        for (var d = 0, l = i.length; l >= 0; l--) {
          var h = i[l];
          "." === h ? a(i, l) : ".." === h ? (a(i, l), d++) : d && (a(i, l), d--)
        }
        if (!s)
          for (; d--; d) i.unshift("..");
        !s || "" === i[0] || i[0] && r(i[0]) || i.unshift("");
        var v = i.join("/");
        return t && "/" !== v.substr(-1) && (v += "/"), v
      };

      function c(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n)
      }
      const f = function n(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every((function(e, o) {
          return n(e, t[o])
        }));
        if ("object" == typeof e || "object" == typeof t) {
          var o = c(e),
            r = c(t);
          return o !== e || r !== t ? n(o, r) : Object.keys(Object.assign({}, e, t)).every((function(o) {
            return n(e[o], t[o])
          }))
        }
        return !1
      };
      var s = !0,
        u = "Invariant failed";

      function d(n, e) {
        if (!n) {
          if (s) throw new Error(u);
          var t = "function" == typeof e ? e() : e,
            o = t ? "".concat(u, ": ").concat(t) : u;
          throw new Error(o)
        }
      }

      function l(n) {
        return "/" === n.charAt(0) ? n : "/" + n
      }

      function h(n) {
        return "/" === n.charAt(0) ? n.substr(1) : n
      }

      function v(n, e) {
        return function(n, e) {
          return 0 === n.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(e.length))
        }(n, e) ? n.substr(e.length) : n
      }

      function p(n) {
        return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
      }

      function g(n) {
        var e = n || "/",
          t = "",
          o = "",
          r = e.indexOf("#"); - 1 !== r && (o = e.substr(r), e = e.substr(0, r));
        var a = e.indexOf("?");
        return -1 !== a && (t = e.substr(a), e = e.substr(0, a)), {
          pathname: e,
          search: "?" === t ? "" : t,
          hash: "#" === o ? "" : o
        }
      }

      function w(n) {
        var e = n.pathname,
          t = n.search,
          o = n.hash,
          r = e || "/";
        return t && "?" !== t && (r += "?" === t.charAt(0) ? t : "?" + t), o && "#" !== o && (r += "#" === o.charAt(0) ? o : "#" + o), r
      }

      function y(n, e, t, r) {
        var a;
        "string" == typeof n ? (a = g(n)).state = e : (void 0 === (a = (0, o.A)({}, n)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== e && void 0 === a.state && (a.state = e));
        try {
          a.pathname = decodeURI(a.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return t && (a.key = t), r ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = i(a.pathname, r.pathname)) : a.pathname = r.pathname : a.pathname || (a.pathname = "/"), a
      }

      function m(n, e) {
        return n.pathname === e.pathname && n.search === e.search && n.hash === e.hash && n.key === e.key && f(n.state, e.state)
      }

      function b() {
        var n = null,
          e = [];
        return {
          setPrompt: function(e) {
            return n = e,
              function() {
                n === e && (n = null)
              }
          },
          confirmTransitionTo: function(e, t, o, r) {
            if (null != n) {
              var a = "function" == typeof n ? n(e, t) : n;
              "string" == typeof a ? "function" == typeof o ? o(a, r) : r(!0) : r(!1 !== a)
            } else r(!0)
          },
          appendListener: function(n) {
            var t = !0;

            function o() {
              t && n.apply(void 0, arguments)
            }
            return e.push(o),
              function() {
                t = !1, e = e.filter((function(n) {
                  return n !== o
                }))
              }
          },
          notifyListeners: function() {
            for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
            e.forEach((function(n) {
              return n.apply(void 0, t)
            }))
          }
        }
      }
      var O = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function P(n, e) {
        e(window.confirm(n))
      }
      var k = "popstate",
        A = "hashchange";

      function x() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function E(n) {
        void 0 === n && (n = {}), O || d(!1);
        var e, t = window.history,
          r = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          a = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = n,
          c = i.forceRefresh,
          f = void 0 !== c && c,
          s = i.getUserConfirmation,
          u = void 0 === s ? P : s,
          h = i.keyLength,
          g = void 0 === h ? 6 : h,
          m = n.basename ? p(l(n.basename)) : "";

        function E(n) {
          var e = n || {},
            t = e.key,
            o = e.state,
            r = window.location,
            a = r.pathname + r.search + r.hash;
          return m && (a = v(a, m)), y(a, o, t)
        }

        function T() {
          return Math.random().toString(36).substr(2, g)
        }
        var L = b();

        function _(n) {
          (0, o.A)(q, n), q.length = t.length, L.notifyListeners(q.location, q.action)
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
          C ? (C = !1, _()) : L.confirmTransitionTo(n, "POP", u, (function(e) {
            e ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var e = q.location,
                t = j.indexOf(e.key); - 1 === t && (t = 0);
              var o = j.indexOf(n.key); - 1 === o && (o = 0);
              var r = t - o;
              r && (C = !0, U(r))
            }(n)
          }))
        }
        var H = E(x()),
          j = [H.key];

        function R(n) {
          return m + w(n)
        }

        function U(n) {
          t.go(n)
        }
        var B = 0;

        function D(n) {
          1 === (B += n) && 1 === n ? (window.addEventListener(k, I), a && window.addEventListener(A, S)) : 0 === B && (window.removeEventListener(k, I), a && window.removeEventListener(A, S))
        }
        var F = !1,
          q = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: R,
            push: function(n, e) {
              var o = "PUSH",
                a = y(n, e, T(), q.location);
              L.confirmTransitionTo(a, o, u, (function(n) {
                if (n) {
                  var e = R(a),
                    i = a.key,
                    c = a.state;
                  if (r)
                    if (t.pushState({
                        key: i,
                        state: c
                      }, null, e), f) window.location.href = e;
                    else {
                      var s = j.indexOf(q.location.key),
                        u = j.slice(0, s + 1);
                      u.push(a.key), j = u, _({
                        action: o,
                        location: a
                      })
                    }
                  else window.location.href = e
                }
              }))
            },
            replace: function(n, e) {
              var o = "REPLACE",
                a = y(n, e, T(), q.location);
              L.confirmTransitionTo(a, o, u, (function(n) {
                if (n) {
                  var e = R(a),
                    i = a.key,
                    c = a.state;
                  if (r)
                    if (t.replaceState({
                        key: i,
                        state: c
                      }, null, e), f) window.location.replace(e);
                    else {
                      var s = j.indexOf(q.location.key); - 1 !== s && (j[s] = a.key), _({
                        action: o,
                        location: a
                      })
                    }
                  else window.location.replace(e)
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
              var e = L.setPrompt(n);
              return F || (D(1), F = !0),
                function() {
                  return F && (F = !1, D(-1)), e()
                }
            },
            listen: function(n) {
              var e = L.appendListener(n);
              return D(1),
                function() {
                  D(-1), e()
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
        var e = n.indexOf("#");
        return -1 === e ? n : n.slice(0, e)
      }

      function I() {
        var n = window.location.href,
          e = n.indexOf("#");
        return -1 === e ? "" : n.substring(e + 1)
      }

      function S(n) {
        window.location.replace(_(window.location.href) + "#" + n)
      }

      function C(n) {
        void 0 === n && (n = {}), O || d(!1);
        var e = window.history,
          t = (window.navigator.userAgent.indexOf("Firefox"), n),
          r = t.getUserConfirmation,
          a = void 0 === r ? P : r,
          i = t.hashType,
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

        function k(n) {
          (0, o.A)(F, n), F.length = e.length, m.notifyListeners(F.location, F.action)
        }
        var A = !1,
          x = null;

        function E() {
          var n, e, t = I(),
            o = u(t);
          if (t !== o) S(o);
          else {
            var r = g(),
              i = F.location;
            if (!A && (e = r, (n = i).pathname === e.pathname && n.search === e.search && n.hash === e.hash)) return;
            if (x === w(r)) return;
            x = null,
              function(n) {
                if (A) A = !1, k();
                else {
                  m.confirmTransitionTo(n, "POP", a, (function(e) {
                    e ? k({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var e = F.location,
                        t = j.lastIndexOf(w(e)); - 1 === t && (t = 0);
                      var o = j.lastIndexOf(w(n)); - 1 === o && (o = 0);
                      var r = t - o;
                      r && (A = !0, R(r))
                    }(n)
                  }))
                }
              }(r)
          }
        }
        var C = I(),
          M = u(C);
        C !== M && S(M);
        var H = g(),
          j = [w(H)];

        function R(n) {
          e.go(n)
        }
        var U = 0;

        function B(n) {
          1 === (U += n) && 1 === n ? window.addEventListener(T, E) : 0 === U && window.removeEventListener(T, E)
        }
        var D = !1,
          F = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var e = document.querySelector("base"),
                t = "";
              return e && e.getAttribute("href") && (t = _(window.location.href)), t + "#" + u(f + w(n))
            },
            push: function(n, e) {
              var t = "PUSH",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, t, a, (function(n) {
                if (n) {
                  var e = w(o),
                    r = u(f + e);
                  if (I() !== r) {
                    x = e,
                      function(n) {
                        window.location.hash = n
                      }(r);
                    var a = j.lastIndexOf(w(F.location)),
                      i = j.slice(0, a + 1);
                    i.push(e), j = i, k({
                      action: t,
                      location: o
                    })
                  } else k()
                }
              }))
            },
            replace: function(n, e) {
              var t = "REPLACE",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, t, a, (function(n) {
                if (n) {
                  var e = w(o),
                    r = u(f + e);
                  I() !== r && (x = e, S(r));
                  var a = j.indexOf(w(F.location)); - 1 !== a && (j[a] = e), k({
                    action: t,
                    location: o
                  })
                }
              }))
            },
            go: R,
            goBack: function() {
              R(-1)
            },
            goForward: function() {
              R(1)
            },
            block: function(n) {
              void 0 === n && (n = !1);
              var e = m.setPrompt(n);
              return D || (B(1), D = !0),
                function() {
                  return D && (D = !1, B(-1)), e()
                }
            },
            listen: function(n) {
              var e = m.appendListener(n);
              return B(1),
                function() {
                  B(-1), e()
                }
            }
          };
        return F
      }

      function M(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }

      function H(n) {
        void 0 === n && (n = {});
        var e = n,
          t = e.getUserConfirmation,
          r = e.initialEntries,
          a = void 0 === r ? ["/"] : r,
          i = e.initialIndex,
          c = void 0 === i ? 0 : i,
          f = e.keyLength,
          s = void 0 === f ? 6 : f,
          u = b();

        function d(n) {
          (0, o.A)(m, n), m.length = m.entries.length, u.notifyListeners(m.location, m.action)
        }

        function l() {
          return Math.random().toString(36).substr(2, s)
        }
        var h = M(c, 0, a.length - 1),
          v = a.map((function(n) {
            return y(n, void 0, "string" == typeof n ? l() : n.key || l())
          })),
          p = w;

        function g(n) {
          var e = M(m.index + n, 0, m.entries.length - 1),
            o = m.entries[e];
          u.confirmTransitionTo(o, "POP", t, (function(n) {
            n ? d({
              action: "POP",
              location: o,
              index: e
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
          push: function(n, e) {
            var o = "PUSH",
              r = y(n, e, l(), m.location);
            u.confirmTransitionTo(r, o, t, (function(n) {
              if (n) {
                var e = m.index + 1,
                  t = m.entries.slice(0);
                t.length > e ? t.splice(e, t.length - e, r) : t.push(r), d({
                  action: o,
                  location: r,
                  index: e,
                  entries: t
                })
              }
            }))
          },
          replace: function(n, e) {
            var o = "REPLACE",
              r = y(n, e, l(), m.location);
            u.confirmTransitionTo(r, o, t, (function(n) {
              n && (m.entries[m.index] = r, d({
                action: o,
                location: r
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
            var e = m.index + n;
            return e >= 0 && e < m.entries.length
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
    },
    18751: (n, e, t) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
          }
          return n
        }, o.apply(this, arguments)
      }
      t.d(e, {
        A: () => o
      })
    }
  }
]);