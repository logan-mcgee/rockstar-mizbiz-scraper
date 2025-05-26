! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new n.Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "02821674-dc7e-4018-9958-bc68bae6fd45", n._sentryDebugIdIdentifier = "sentry-dbid-02821674-dc7e-4018-9958-bc68bae6fd45")
  } catch (n) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8072], {
    28072: (n, e, t) => {
      t.r(e), t.d(e, {
        createBrowserHistory: () => T,
        createHashHistory: () => S,
        createLocation: () => w,
        createMemoryHistory: () => H,
        createPath: () => y,
        locationsAreEqual: () => b,
        parsePath: () => g
      });
      var o = t(66146);

      function a(n) {
        return "/" === n.charAt(0)
      }

      function r(n, e) {
        for (var t = e, o = t + 1, a = n.length; o < a; t += 1, o += 1) n[t] = n[o];
        n.pop()
      }
      const i = function(n, e) {
        void 0 === e && (e = "");
        var t, o = n && n.split("/") || [],
          i = e && e.split("/") || [],
          c = n && a(n),
          s = e && a(e),
          f = c || s;
        if (n && a(n) ? i = o : o.length && (i.pop(), i = i.concat(o)), !i.length) return "/";
        if (i.length) {
          var u = i[i.length - 1];
          t = "." === u || ".." === u || "" === u
        } else t = !1;
        for (var d = 0, l = i.length; l >= 0; l--) {
          var h = i[l];
          "." === h ? r(i, l) : ".." === h ? (r(i, l), d++) : d && (r(i, l), d--)
        }
        if (!f)
          for (; d--; d) i.unshift("..");
        !f || "" === i[0] || i[0] && a(i[0]) || i.unshift("");
        var v = i.join("/");
        return t && "/" !== v.substr(-1) && (v += "/"), v
      };

      function c(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n)
      }
      const s = function n(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every((function(e, o) {
          return n(e, t[o])
        }));
        if ("object" == typeof e || "object" == typeof t) {
          var o = c(e),
            a = c(t);
          return o !== e || a !== t ? n(o, a) : Object.keys(Object.assign({}, e, t)).every((function(o) {
            return n(e[o], t[o])
          }))
        }
        return !1
      };
      var f = !0,
        u = "Invariant failed";

      function d(n, e) {
        if (!n) {
          if (f) throw new Error(u);
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
          a = e.indexOf("#"); - 1 !== a && (o = e.substr(a), e = e.substr(0, a));
        var r = e.indexOf("?");
        return -1 !== r && (t = e.substr(r), e = e.substr(0, r)), {
          pathname: e,
          search: "?" === t ? "" : t,
          hash: "#" === o ? "" : o
        }
      }

      function y(n) {
        var e = n.pathname,
          t = n.search,
          o = n.hash,
          a = e || "/";
        return t && "?" !== t && (a += "?" === t.charAt(0) ? t : "?" + t), o && "#" !== o && (a += "#" === o.charAt(0) ? o : "#" + o), a
      }

      function w(n, e, t, a) {
        var r;
        "string" == typeof n ? (r = g(n)).state = e : (void 0 === (r = (0, o.A)({}, n)).pathname && (r.pathname = ""), r.search ? "?" !== r.search.charAt(0) && (r.search = "?" + r.search) : r.search = "", r.hash ? "#" !== r.hash.charAt(0) && (r.hash = "#" + r.hash) : r.hash = "", void 0 !== e && void 0 === r.state && (r.state = e));
        try {
          r.pathname = decodeURI(r.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return t && (r.key = t), a ? r.pathname ? "/" !== r.pathname.charAt(0) && (r.pathname = i(r.pathname, a.pathname)) : r.pathname = a.pathname : r.pathname || (r.pathname = "/"), r
      }

      function b(n, e) {
        return n.pathname === e.pathname && n.search === e.search && n.hash === e.hash && n.key === e.key && s(n.state, e.state)
      }

      function m() {
        var n = null,
          e = [];
        return {
          setPrompt: function(e) {
            return n = e,
              function() {
                n === e && (n = null)
              }
          },
          confirmTransitionTo: function(e, t, o, a) {
            if (null != n) {
              var r = "function" == typeof n ? n(e, t) : n;
              "string" == typeof r ? "function" == typeof o ? o(r, a) : a(!0) : a(!1 !== r)
            } else a(!0)
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

      function T(n) {
        void 0 === n && (n = {}), O || d(!1);
        var e, t = window.history,
          a = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          r = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = n,
          c = i.forceRefresh,
          s = void 0 !== c && c,
          f = i.getUserConfirmation,
          u = void 0 === f ? P : f,
          h = i.keyLength,
          g = void 0 === h ? 6 : h,
          b = n.basename ? p(l(n.basename)) : "";

        function T(n) {
          var e = n || {},
            t = e.key,
            o = e.state,
            a = window.location,
            r = a.pathname + a.search + a.hash;
          return b && (r = v(r, b)), w(r, o, t)
        }

        function M() {
          return Math.random().toString(36).substr(2, g)
        }
        var E = m();

        function _(n) {
          (0, o.A)(F, n), F.length = t.length, E.notifyListeners(F.location, F.action)
        }

        function L(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || C(T(n.state))
        }

        function I() {
          C(T(x()))
        }
        var S = !1;

        function C(n) {
          S ? (S = !1, _()) : E.confirmTransitionTo(n, "POP", u, (function(e) {
            e ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var e = F.location,
                t = j.indexOf(e.key); - 1 === t && (t = 0);
              var o = j.indexOf(n.key); - 1 === o && (o = 0);
              var a = t - o;
              a && (S = !0, U(a))
            }(n)
          }))
        }
        var H = T(x()),
          j = [H.key];

        function R(n) {
          return b + y(n)
        }

        function U(n) {
          t.go(n)
        }
        var G = 0;

        function B(n) {
          1 === (G += n) && 1 === n ? (window.addEventListener(k, L), r && window.addEventListener(A, I)) : 0 === G && (window.removeEventListener(k, L), r && window.removeEventListener(A, I))
        }
        var D = !1,
          F = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: R,
            push: function(n, e) {
              var o = "PUSH",
                r = w(n, e, M(), F.location);
              E.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var e = R(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (t.pushState({
                        key: i,
                        state: c
                      }, null, e), s) window.location.href = e;
                    else {
                      var f = j.indexOf(F.location.key),
                        u = j.slice(0, f + 1);
                      u.push(r.key), j = u, _({
                        action: o,
                        location: r
                      })
                    }
                  else window.location.href = e
                }
              }))
            },
            replace: function(n, e) {
              var o = "REPLACE",
                r = w(n, e, M(), F.location);
              E.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var e = R(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (t.replaceState({
                        key: i,
                        state: c
                      }, null, e), s) window.location.replace(e);
                    else {
                      var f = j.indexOf(F.location.key); - 1 !== f && (j[f] = r.key), _({
                        action: o,
                        location: r
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
              var e = E.setPrompt(n);
              return D || (B(1), D = !0),
                function() {
                  return D && (D = !1, B(-1)), e()
                }
            },
            listen: function(n) {
              var e = E.appendListener(n);
              return B(1),
                function() {
                  B(-1), e()
                }
            }
          };
        return F
      }
      var M = "hashchange",
        E = {
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

      function L() {
        var n = window.location.href,
          e = n.indexOf("#");
        return -1 === e ? "" : n.substring(e + 1)
      }

      function I(n) {
        window.location.replace(_(window.location.href) + "#" + n)
      }

      function S(n) {
        void 0 === n && (n = {}), O || d(!1);
        var e = window.history,
          t = (window.navigator.userAgent.indexOf("Firefox"), n),
          a = t.getUserConfirmation,
          r = void 0 === a ? P : a,
          i = t.hashType,
          c = void 0 === i ? "slash" : i,
          s = n.basename ? p(l(n.basename)) : "",
          f = E[c],
          u = f.encodePath,
          h = f.decodePath;

        function g() {
          var n = h(L());
          return s && (n = v(n, s)), w(n)
        }
        var b = m();

        function k(n) {
          (0, o.A)(D, n), D.length = e.length, b.notifyListeners(D.location, D.action)
        }
        var A = !1,
          x = null;

        function T() {
          var n, e, t = L(),
            o = u(t);
          if (t !== o) I(o);
          else {
            var a = g(),
              i = D.location;
            if (!A && (e = a, (n = i).pathname === e.pathname && n.search === e.search && n.hash === e.hash)) return;
            if (x === y(a)) return;
            x = null,
              function(n) {
                if (A) A = !1, k();
                else {
                  b.confirmTransitionTo(n, "POP", r, (function(e) {
                    e ? k({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var e = D.location,
                        t = j.lastIndexOf(y(e)); - 1 === t && (t = 0);
                      var o = j.lastIndexOf(y(n)); - 1 === o && (o = 0);
                      var a = t - o;
                      a && (A = !0, R(a))
                    }(n)
                  }))
                }
              }(a)
          }
        }
        var S = L(),
          C = u(S);
        S !== C && I(C);
        var H = g(),
          j = [y(H)];

        function R(n) {
          e.go(n)
        }
        var U = 0;

        function G(n) {
          1 === (U += n) && 1 === n ? window.addEventListener(M, T) : 0 === U && window.removeEventListener(M, T)
        }
        var B = !1,
          D = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var e = document.querySelector("base"),
                t = "";
              return e && e.getAttribute("href") && (t = _(window.location.href)), t + "#" + u(s + y(n))
            },
            push: function(n, e) {
              var t = "PUSH",
                o = w(n, void 0, void 0, D.location);
              b.confirmTransitionTo(o, t, r, (function(n) {
                if (n) {
                  var e = y(o),
                    a = u(s + e);
                  if (L() !== a) {
                    x = e,
                      function(n) {
                        window.location.hash = n
                      }(a);
                    var r = j.lastIndexOf(y(D.location)),
                      i = j.slice(0, r + 1);
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
                o = w(n, void 0, void 0, D.location);
              b.confirmTransitionTo(o, t, r, (function(n) {
                if (n) {
                  var e = y(o),
                    a = u(s + e);
                  L() !== a && (x = e, I(a));
                  var r = j.indexOf(y(D.location)); - 1 !== r && (j[r] = e), k({
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
              var e = b.setPrompt(n);
              return B || (G(1), B = !0),
                function() {
                  return B && (B = !1, G(-1)), e()
                }
            },
            listen: function(n) {
              var e = b.appendListener(n);
              return G(1),
                function() {
                  G(-1), e()
                }
            }
          };
        return D
      }

      function C(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }

      function H(n) {
        void 0 === n && (n = {});
        var e = n,
          t = e.getUserConfirmation,
          a = e.initialEntries,
          r = void 0 === a ? ["/"] : a,
          i = e.initialIndex,
          c = void 0 === i ? 0 : i,
          s = e.keyLength,
          f = void 0 === s ? 6 : s,
          u = m();

        function d(n) {
          (0, o.A)(b, n), b.length = b.entries.length, u.notifyListeners(b.location, b.action)
        }

        function l() {
          return Math.random().toString(36).substr(2, f)
        }
        var h = C(c, 0, r.length - 1),
          v = r.map((function(n) {
            return w(n, void 0, "string" == typeof n ? l() : n.key || l())
          })),
          p = y;

        function g(n) {
          var e = C(b.index + n, 0, b.entries.length - 1),
            o = b.entries[e];
          u.confirmTransitionTo(o, "POP", t, (function(n) {
            n ? d({
              action: "POP",
              location: o,
              index: e
            }) : d()
          }))
        }
        var b = {
          length: v.length,
          action: "POP",
          location: v[h],
          index: h,
          entries: v,
          createHref: p,
          push: function(n, e) {
            var o = "PUSH",
              a = w(n, e, l(), b.location);
            u.confirmTransitionTo(a, o, t, (function(n) {
              if (n) {
                var e = b.index + 1,
                  t = b.entries.slice(0);
                t.length > e ? t.splice(e, t.length - e, a) : t.push(a), d({
                  action: o,
                  location: a,
                  index: e,
                  entries: t
                })
              }
            }))
          },
          replace: function(n, e) {
            var o = "REPLACE",
              a = w(n, e, l(), b.location);
            u.confirmTransitionTo(a, o, t, (function(n) {
              n && (b.entries[b.index] = a, d({
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
            var e = b.index + n;
            return e >= 0 && e < b.entries.length
          },
          block: function(n) {
            return void 0 === n && (n = !1), u.setPrompt(n)
          },
          listen: function(n) {
            return u.appendListener(n)
          }
        };
        return b
      }
    },
    66146: (n, e, t) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)({}).hasOwnProperty.call(t, o) && (n[o] = t[o])
          }
          return n
        }, o.apply(null, arguments)
      }
      t.d(e, {
        A: () => o
      })
    }
  }
]);