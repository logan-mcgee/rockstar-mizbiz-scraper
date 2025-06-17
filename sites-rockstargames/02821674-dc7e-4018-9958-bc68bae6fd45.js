! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new n.Error).stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "02821674-dc7e-4018-9958-bc68bae6fd45", n._sentryDebugIdIdentifier = "sentry-dbid-02821674-dc7e-4018-9958-bc68bae6fd45")
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
    28072: (n, t, e) => {
      e.r(t), e.d(t, {
        createBrowserHistory: () => T,
        createHashHistory: () => S,
        createLocation: () => w,
        createMemoryHistory: () => H,
        createPath: () => y,
        locationsAreEqual: () => b,
        parsePath: () => g
      });
      var o = e(66146);

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
          s = t && a(t),
          f = c || s;
        if (n && a(n) ? i = o : o.length && (i.pop(), i = i.concat(o)), !i.length) return "/";
        if (i.length) {
          var u = i[i.length - 1];
          e = "." === u || ".." === u || "" === u
        } else e = !1;
        for (var l = 0, d = i.length; d >= 0; d--) {
          var h = i[d];
          "." === h ? r(i, d) : ".." === h ? (r(i, d), l++) : l && (r(i, d), l--)
        }
        if (!f)
          for (; l--; l) i.unshift("..");
        !f || "" === i[0] || i[0] && a(i[0]) || i.unshift("");
        var v = i.join("/");
        return e && "/" !== v.substr(-1) && (v += "/"), v
      };

      function c(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n)
      }
      const s = function n(t, e) {
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
      var f = !0,
        u = "Invariant failed";

      function l(n, t) {
        if (!n) {
          if (f) throw new Error(u);
          var e = "function" == typeof t ? t() : t,
            o = e ? "".concat(u, ": ").concat(e) : u;
          throw new Error(o)
        }
      }

      function d(n) {
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

      function y(n) {
        var t = n.pathname,
          e = n.search,
          o = n.hash,
          a = t || "/";
        return e && "?" !== e && (a += "?" === e.charAt(0) ? e : "?" + e), o && "#" !== o && (a += "#" === o.charAt(0) ? o : "#" + o), a
      }

      function w(n, t, e, a) {
        var r;
        "string" == typeof n ? (r = g(n)).state = t : (void 0 === (r = (0, o.A)({}, n)).pathname && (r.pathname = ""), r.search ? "?" !== r.search.charAt(0) && (r.search = "?" + r.search) : r.search = "", r.hash ? "#" !== r.hash.charAt(0) && (r.hash = "#" + r.hash) : r.hash = "", void 0 !== t && void 0 === r.state && (r.state = t));
        try {
          r.pathname = decodeURI(r.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return e && (r.key = e), a ? r.pathname ? "/" !== r.pathname.charAt(0) && (r.pathname = i(r.pathname, a.pathname)) : r.pathname = a.pathname : r.pathname || (r.pathname = "/"), r
      }

      function b(n, t) {
        return n.pathname === t.pathname && n.search === t.search && n.hash === t.hash && n.key === t.key && s(n.state, t.state)
      }

      function m() {
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
      var O = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function P(n, t) {
        t(window.confirm(n))
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
        void 0 === n && (n = {}), O || l(!1);
        var t, e = window.history,
          a = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          r = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = n,
          c = i.forceRefresh,
          s = void 0 !== c && c,
          f = i.getUserConfirmation,
          u = void 0 === f ? P : f,
          h = i.keyLength,
          g = void 0 === h ? 6 : h,
          b = n.basename ? p(d(n.basename)) : "";

        function T(n) {
          var t = n || {},
            e = t.key,
            o = t.state,
            a = window.location,
            r = a.pathname + a.search + a.hash;
          return b && (r = v(r, b)), w(r, o, e)
        }

        function M() {
          return Math.random().toString(36).substr(2, g)
        }
        var E = m();

        function _(n) {
          (0, o.A)(F, n), F.length = e.length, E.notifyListeners(F.location, F.action)
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
          S ? (S = !1, _()) : E.confirmTransitionTo(n, "POP", u, (function(t) {
            t ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var t = F.location,
                e = j.indexOf(t.key); - 1 === e && (e = 0);
              var o = j.indexOf(n.key); - 1 === o && (o = 0);
              var a = e - o;
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
          e.go(n)
        }
        var G = 0;

        function B(n) {
          1 === (G += n) && 1 === n ? (window.addEventListener(k, L), r && window.addEventListener(A, I)) : 0 === G && (window.removeEventListener(k, L), r && window.removeEventListener(A, I))
        }
        var D = !1,
          F = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: R,
            push: function(n, t) {
              var o = "PUSH",
                r = w(n, t, M(), F.location);
              E.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var t = R(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (e.pushState({
                        key: i,
                        state: c
                      }, null, t), s) window.location.href = t;
                    else {
                      var f = j.indexOf(F.location.key),
                        u = j.slice(0, f + 1);
                      u.push(r.key), j = u, _({
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
                r = w(n, t, M(), F.location);
              E.confirmTransitionTo(r, o, u, (function(n) {
                if (n) {
                  var t = R(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (e.replaceState({
                        key: i,
                        state: c
                      }, null, t), s) window.location.replace(t);
                    else {
                      var f = j.indexOf(F.location.key); - 1 !== f && (j[f] = r.key), _({
                        action: o,
                        location: r
                      })
                    }
                  else window.location.replace(t)
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
              var t = E.setPrompt(n);
              return D || (B(1), D = !0),
                function() {
                  return D && (D = !1, B(-1)), t()
                }
            },
            listen: function(n) {
              var t = E.appendListener(n);
              return B(1),
                function() {
                  B(-1), t()
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
            decodePath: d
          },
          slash: {
            encodePath: d,
            decodePath: d
          }
        };

      function _(n) {
        var t = n.indexOf("#");
        return -1 === t ? n : n.slice(0, t)
      }

      function L() {
        var n = window.location.href,
          t = n.indexOf("#");
        return -1 === t ? "" : n.substring(t + 1)
      }

      function I(n) {
        window.location.replace(_(window.location.href) + "#" + n)
      }

      function S(n) {
        void 0 === n && (n = {}), O || l(!1);
        var t = window.history,
          e = (window.navigator.userAgent.indexOf("Firefox"), n),
          a = e.getUserConfirmation,
          r = void 0 === a ? P : a,
          i = e.hashType,
          c = void 0 === i ? "slash" : i,
          s = n.basename ? p(d(n.basename)) : "",
          f = E[c],
          u = f.encodePath,
          h = f.decodePath;

        function g() {
          var n = h(L());
          return s && (n = v(n, s)), w(n)
        }
        var b = m();

        function k(n) {
          (0, o.A)(D, n), D.length = t.length, b.notifyListeners(D.location, D.action)
        }
        var A = !1,
          x = null;

        function T() {
          var n, t, e = L(),
            o = u(e);
          if (e !== o) I(o);
          else {
            var a = g(),
              i = D.location;
            if (!A && (t = a, (n = i).pathname === t.pathname && n.search === t.search && n.hash === t.hash)) return;
            if (x === y(a)) return;
            x = null,
              function(n) {
                if (A) A = !1, k();
                else {
                  b.confirmTransitionTo(n, "POP", r, (function(t) {
                    t ? k({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var t = D.location,
                        e = j.lastIndexOf(y(t)); - 1 === e && (e = 0);
                      var o = j.lastIndexOf(y(n)); - 1 === o && (o = 0);
                      var a = e - o;
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
          t.go(n)
        }
        var U = 0;

        function G(n) {
          1 === (U += n) && 1 === n ? window.addEventListener(M, T) : 0 === U && window.removeEventListener(M, T)
        }
        var B = !1,
          D = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var t = document.querySelector("base"),
                e = "";
              return t && t.getAttribute("href") && (e = _(window.location.href)), e + "#" + u(s + y(n))
            },
            push: function(n, t) {
              var e = "PUSH",
                o = w(n, void 0, void 0, D.location);
              b.confirmTransitionTo(o, e, r, (function(n) {
                if (n) {
                  var t = y(o),
                    a = u(s + t);
                  if (L() !== a) {
                    x = t,
                      function(n) {
                        window.location.hash = n
                      }(a);
                    var r = j.lastIndexOf(y(D.location)),
                      i = j.slice(0, r + 1);
                    i.push(t), j = i, k({
                      action: e,
                      location: o
                    })
                  } else k()
                }
              }))
            },
            replace: function(n, t) {
              var e = "REPLACE",
                o = w(n, void 0, void 0, D.location);
              b.confirmTransitionTo(o, e, r, (function(n) {
                if (n) {
                  var t = y(o),
                    a = u(s + t);
                  L() !== a && (x = t, I(a));
                  var r = j.indexOf(y(D.location)); - 1 !== r && (j[r] = t), k({
                    action: e,
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
              var t = b.setPrompt(n);
              return B || (G(1), B = !0),
                function() {
                  return B && (B = !1, G(-1)), t()
                }
            },
            listen: function(n) {
              var t = b.appendListener(n);
              return G(1),
                function() {
                  G(-1), t()
                }
            }
          };
        return D
      }

      function C(n, t, e) {
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
          s = t.keyLength,
          f = void 0 === s ? 6 : s,
          u = m();

        function l(n) {
          (0, o.A)(b, n), b.length = b.entries.length, u.notifyListeners(b.location, b.action)
        }

        function d() {
          return Math.random().toString(36).substr(2, f)
        }
        var h = C(c, 0, r.length - 1),
          v = r.map((function(n) {
            return w(n, void 0, "string" == typeof n ? d() : n.key || d())
          })),
          p = y;

        function g(n) {
          var t = C(b.index + n, 0, b.entries.length - 1),
            o = b.entries[t];
          u.confirmTransitionTo(o, "POP", e, (function(n) {
            n ? l({
              action: "POP",
              location: o,
              index: t
            }) : l()
          }))
        }
        var b = {
          length: v.length,
          action: "POP",
          location: v[h],
          index: h,
          entries: v,
          createHref: p,
          push: function(n, t) {
            var o = "PUSH",
              a = w(n, t, d(), b.location);
            u.confirmTransitionTo(a, o, e, (function(n) {
              if (n) {
                var t = b.index + 1,
                  e = b.entries.slice(0);
                e.length > t ? e.splice(t, e.length - t, a) : e.push(a), l({
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
              a = w(n, t, d(), b.location);
            u.confirmTransitionTo(a, o, e, (function(n) {
              n && (b.entries[b.index] = a, l({
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
            var t = b.index + n;
            return t >= 0 && t < b.entries.length
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
    66146: (n, t, e) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t];
            for (var o in e)({}).hasOwnProperty.call(e, o) && (n[o] = e[o])
          }
          return n
        }, o.apply(null, arguments)
      }
      e.d(t, {
        A: () => o
      })
    }
  }
]);