"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [619], {
    3619: (n, t, e) => {
      e.d(t, {
        lX: () => p
      });
      var r = e(4975);

      function o(n) {
        return "/" === n.charAt(0)
      }

      function a(n, t) {
        for (var e = t, r = e + 1, o = n.length; r < o; e += 1, r += 1) n[e] = n[r];
        n.pop()
      }
      const i = function(n, t) {
        void 0 === t && (t = "");
        var e, r = n && n.split("/") || [],
          i = t && t.split("/") || [],
          c = n && o(n),
          s = t && o(t),
          f = c || s;
        if (n && o(n) ? i = r : r.length && (i.pop(), i = i.concat(r)), !i.length) return "/";
        if (i.length) {
          var u = i[i.length - 1];
          e = "." === u || ".." === u || "" === u
        } else e = !1;
        for (var h = 0, d = i.length; d >= 0; d--) {
          var l = i[d];
          "." === l ? a(i, d) : ".." === l ? (a(i, d), h++) : h && (a(i, d), h--)
        }
        if (!f)
          for (; h--; h) i.unshift("..");
        !f || "" === i[0] || i[0] && o(i[0]) || i.unshift("");
        var v = i.join("/");
        return e && "/" !== v.substr(-1) && (v += "/"), v
      };
      var c = !0,
        s = "Invariant failed";

      function f(n, t, e, o) {
        var a;
        "string" == typeof n ? (a = function(n) {
          var t = n || "/",
            e = "",
            r = "",
            o = t.indexOf("#"); - 1 !== o && (r = t.substr(o), t = t.substr(0, o));
          var a = t.indexOf("?");
          return -1 !== a && (e = t.substr(a), t = t.substr(0, a)), {
            pathname: t,
            search: "?" === e ? "" : e,
            hash: "#" === r ? "" : r
          }
        }(n), a.state = t) : (void 0 === (a = (0, r.Z)({}, n)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return e && (a.key = e), o ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = i(a.pathname, o.pathname)) : a.pathname = o.pathname : a.pathname || (a.pathname = "/"), a
      }
      var u = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function h(n, t) {
        t(window.confirm(n))
      }
      var d = "popstate",
        l = "hashchange";

      function v() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function p(n) {
        void 0 === n && (n = {}), u || function(n, t) {
          if (c) throw new Error(s);
          throw new Error(s)
        }();
        var t, e, o = window.history,
          a = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          p = n,
          w = p.forceRefresh,
          m = void 0 !== w && w,
          g = p.getUserConfirmation,
          y = void 0 === g ? h : g,
          k = p.keyLength,
          O = void 0 === k ? 6 : k,
          A = n.basename ? function(n) {
            return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
          }("/" === (e = n.basename).charAt(0) ? e : "/" + e) : "";

        function b(n) {
          var t = n || {},
            e = t.key,
            r = t.state,
            o = window.location,
            a = o.pathname + o.search + o.hash;
          return A && (a = function(n, t) {
            return function(n, t) {
              return 0 === n.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(t.length))
            }(n, t) ? n.substr(t.length) : n
          }(a, A)), f(a, r, e)
        }

        function x() {
          return Math.random().toString(36).substr(2, O)
        }
        var E, L, P = (E = null, L = [], {
          setPrompt: function(n) {
            return E = n,
              function() {
                E === n && (E = null)
              }
          },
          confirmTransitionTo: function(n, t, e, r) {
            if (null != E) {
              var o = "function" == typeof E ? E(n, t) : E;
              "string" == typeof o ? "function" == typeof e ? e(o, r) : r(!0) : r(!1 !== o)
            } else r(!0)
          },
          appendListener: function(n) {
            var t = !0;

            function e() {
              t && n.apply(void 0, arguments)
            }
            return L.push(e),
              function() {
                t = !1, L = L.filter((function(n) {
                  return n !== e
                }))
              }
          },
          notifyListeners: function() {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            L.forEach((function(n) {
              return n.apply(void 0, t)
            }))
          }
        });

        function T(n) {
          (0, r.Z)(F, n), F.length = o.length, P.notifyListeners(F.location, F.action)
        }

        function C(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || R(b(n.state))
        }

        function S() {
          R(b(v()))
        }
        var _ = !1;

        function R(n) {
          _ ? (_ = !1, T()) : P.confirmTransitionTo(n, "POP", y, (function(t) {
            t ? T({
              action: "POP",
              location: n
            }) : function(n) {
              var t = F.location,
                e = I.indexOf(t.key); - 1 === e && (e = 0);
              var r = I.indexOf(n.key); - 1 === r && (r = 0);
              var o = e - r;
              o && (_ = !0, M(o))
            }(n)
          }))
        }
        var U = b(v()),
          I = [U.key];

        function H(n) {
          return A + function(n) {
            var t = n.pathname,
              e = n.search,
              r = n.hash,
              o = t || "/";
            return e && "?" !== e && (o += "?" === e.charAt(0) ? e : "?" + e), r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r), o
          }(n)
        }

        function M(n) {
          o.go(n)
        }
        var Z = 0;

        function j(n) {
          1 === (Z += n) && 1 === n ? (window.addEventListener(d, C), i && window.addEventListener(l, S)) : 0 === Z && (window.removeEventListener(d, C), i && window.removeEventListener(l, S))
        }
        var B = !1,
          F = {
            length: o.length,
            action: "POP",
            location: U,
            createHref: H,
            push: function(n, t) {
              var e = "PUSH",
                r = f(n, t, x(), F.location);
              P.confirmTransitionTo(r, e, y, (function(n) {
                if (n) {
                  var t = H(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (o.pushState({
                        key: i,
                        state: c
                      }, null, t), m) window.location.href = t;
                    else {
                      var s = I.indexOf(F.location.key),
                        f = I.slice(0, s + 1);
                      f.push(r.key), I = f, T({
                        action: e,
                        location: r
                      })
                    }
                  else window.location.href = t
                }
              }))
            },
            replace: function(n, t) {
              var e = "REPLACE",
                r = f(n, t, x(), F.location);
              P.confirmTransitionTo(r, e, y, (function(n) {
                if (n) {
                  var t = H(r),
                    i = r.key,
                    c = r.state;
                  if (a)
                    if (o.replaceState({
                        key: i,
                        state: c
                      }, null, t), m) window.location.replace(t);
                    else {
                      var s = I.indexOf(F.location.key); - 1 !== s && (I[s] = r.key), T({
                        action: e,
                        location: r
                      })
                    }
                  else window.location.replace(t)
                }
              }))
            },
            go: M,
            goBack: function() {
              M(-1)
            },
            goForward: function() {
              M(1)
            },
            block: function(n) {
              void 0 === n && (n = !1);
              var t = P.setPrompt(n);
              return B || (j(1), B = !0),
                function() {
                  return B && (B = !1, j(-1)), t()
                }
            },
            listen: function(n) {
              var t = P.appendListener(n);
              return j(1),
                function() {
                  j(-1), t()
                }
            }
          };
        return F
      }
    }
  }
]);