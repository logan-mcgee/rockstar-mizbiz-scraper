try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new n.Error).stack;
  t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "8733df19-2bd2-4a4f-beb4-c2742bd35a89", n._sentryDebugIdIdentifier = "sentry-dbid-8733df19-2bd2-4a4f-beb4-c2742bd35a89")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8072], {
    28072: (n, t, e) => {
      e.r(t), e.d(t, {
        createBrowserHistory: () => T,
        createHashHistory: () => S,
        createLocation: () => y,
        createMemoryHistory: () => H,
        createPath: () => w,
        locationsAreEqual: () => b,
        parsePath: () => g
      });
      var o = e(66146);

      function r(n) {
        return "/" === n.charAt(0)
      }

      function i(n, t) {
        for (var e = t, o = e + 1, r = n.length; o < r; e += 1, o += 1) n[e] = n[o];
        n.pop()
      }
      const a = function(n, t) {
        void 0 === t && (t = "");
        var e, o = n && n.split("/") || [],
          a = t && t.split("/") || [],
          c = n && r(n),
          s = t && r(t),
          f = c || s;
        if (n && r(n) ? a = o : o.length && (a.pop(), a = a.concat(o)), !a.length) return "/";
        if (a.length) {
          var u = a[a.length - 1];
          e = "." === u || ".." === u || "" === u
        } else e = !1;
        for (var d = 0, l = a.length; l >= 0; l--) {
          var h = a[l];
          "." === h ? i(a, l) : ".." === h ? (i(a, l), d++) : d && (i(a, l), d--)
        }
        if (!f)
          for (; d--; d) a.unshift("..");
        !f || "" === a[0] || a[0] && r(a[0]) || a.unshift("");
        var v = a.join("/");
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
            r = c(e);
          return o !== t || r !== e ? n(o, r) : Object.keys(Object.assign({}, t, e)).every((function(o) {
            return n(t[o], e[o])
          }))
        }
        return !1
      };
      var f = !0,
        u = "Invariant failed";

      function d(n, t) {
        if (!n) {
          if (f) throw new Error(u);
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
          r = t.indexOf("#"); - 1 !== r && (o = t.substr(r), t = t.substr(0, r));
        var i = t.indexOf("?");
        return -1 !== i && (e = t.substr(i), t = t.substr(0, i)), {
          pathname: t,
          search: "?" === e ? "" : e,
          hash: "#" === o ? "" : o
        }
      }

      function w(n) {
        var t = n.pathname,
          e = n.search,
          o = n.hash,
          r = t || "/";
        return e && "?" !== e && (r += "?" === e.charAt(0) ? e : "?" + e), o && "#" !== o && (r += "#" === o.charAt(0) ? o : "#" + o), r
      }

      function y(n, t, e, r) {
        var i;
        "string" == typeof n ? (i = g(n)).state = t : (void 0 === (i = (0, o.A)({}, n)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== t && void 0 === i.state && (i.state = t));
        try {
          i.pathname = decodeURI(i.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return e && (i.key = e), r ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = a(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = "/"), i
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
          confirmTransitionTo: function(t, e, o, r) {
            if (null != n) {
              var i = "function" == typeof n ? n(t, e) : n;
              "string" == typeof i ? "function" == typeof o ? o(i, r) : r(!0) : r(!1 !== i)
            } else r(!0)
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
        void 0 === n && (n = {}), O || d(!1);
        var t, e = window.history,
          r = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          a = n,
          c = a.forceRefresh,
          s = void 0 !== c && c,
          f = a.getUserConfirmation,
          u = void 0 === f ? P : f,
          h = a.keyLength,
          g = void 0 === h ? 6 : h,
          b = n.basename ? p(l(n.basename)) : "";

        function T(n) {
          var t = n || {},
            e = t.key,
            o = t.state,
            r = window.location,
            i = r.pathname + r.search + r.hash;
          return b && (i = v(i, b)), y(i, o, e)
        }

        function E() {
          return Math.random().toString(36).substr(2, g)
        }
        var L = m();

        function _(n) {
          (0, o.A)(q, n), q.length = e.length, L.notifyListeners(q.location, q.action)
        }

        function M(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || C(T(n.state))
        }

        function I() {
          C(T(x()))
        }
        var S = !1;

        function C(n) {
          S ? (S = !1, _()) : L.confirmTransitionTo(n, "POP", u, (function(t) {
            t ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var t = q.location,
                e = j.indexOf(t.key); - 1 === e && (e = 0);
              var o = j.indexOf(n.key); - 1 === o && (o = 0);
              var r = e - o;
              r && (S = !0, U(r))
            }(n)
          }))
        }
        var H = T(x()),
          j = [H.key];

        function R(n) {
          return b + w(n)
        }

        function U(n) {
          e.go(n)
        }
        var B = 0;

        function D(n) {
          1 === (B += n) && 1 === n ? (window.addEventListener(k, M), i && window.addEventListener(A, I)) : 0 === B && (window.removeEventListener(k, M), i && window.removeEventListener(A, I))
        }
        var F = !1,
          q = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: R,
            push: function(n, t) {
              var o = "PUSH",
                i = y(n, t, E(), q.location);
              L.confirmTransitionTo(i, o, u, (function(n) {
                if (n) {
                  var t = R(i),
                    a = i.key,
                    c = i.state;
                  if (r)
                    if (e.pushState({
                        key: a,
                        state: c
                      }, null, t), s) window.location.href = t;
                    else {
                      var f = j.indexOf(q.location.key),
                        u = j.slice(0, f + 1);
                      u.push(i.key), j = u, _({
                        action: o,
                        location: i
                      })
                    }
                  else window.location.href = t
                }
              }))
            },
            replace: function(n, t) {
              var o = "REPLACE",
                i = y(n, t, E(), q.location);
              L.confirmTransitionTo(i, o, u, (function(n) {
                if (n) {
                  var t = R(i),
                    a = i.key,
                    c = i.state;
                  if (r)
                    if (e.replaceState({
                        key: a,
                        state: c
                      }, null, t), s) window.location.replace(t);
                    else {
                      var f = j.indexOf(q.location.key); - 1 !== f && (j[f] = i.key), _({
                        action: o,
                        location: i
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
      var E = "hashchange",
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

      function M() {
        var n = window.location.href,
          t = n.indexOf("#");
        return -1 === t ? "" : n.substring(t + 1)
      }

      function I(n) {
        window.location.replace(_(window.location.href) + "#" + n)
      }

      function S(n) {
        void 0 === n && (n = {}), O || d(!1);
        var t = window.history,
          e = (window.navigator.userAgent.indexOf("Firefox"), n),
          r = e.getUserConfirmation,
          i = void 0 === r ? P : r,
          a = e.hashType,
          c = void 0 === a ? "slash" : a,
          s = n.basename ? p(l(n.basename)) : "",
          f = L[c],
          u = f.encodePath,
          h = f.decodePath;

        function g() {
          var n = h(M());
          return s && (n = v(n, s)), y(n)
        }
        var b = m();

        function k(n) {
          (0, o.A)(F, n), F.length = t.length, b.notifyListeners(F.location, F.action)
        }
        var A = !1,
          x = null;

        function T() {
          var n, t, e = M(),
            o = u(e);
          if (e !== o) I(o);
          else {
            var r = g(),
              a = F.location;
            if (!A && (t = r, (n = a).pathname === t.pathname && n.search === t.search && n.hash === t.hash)) return;
            if (x === w(r)) return;
            x = null,
              function(n) {
                if (A) A = !1, k();
                else {
                  b.confirmTransitionTo(n, "POP", i, (function(t) {
                    t ? k({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var t = F.location,
                        e = j.lastIndexOf(w(t)); - 1 === e && (e = 0);
                      var o = j.lastIndexOf(w(n)); - 1 === o && (o = 0);
                      var r = e - o;
                      r && (A = !0, R(r))
                    }(n)
                  }))
                }
              }(r)
          }
        }
        var S = M(),
          C = u(S);
        S !== C && I(C);
        var H = g(),
          j = [w(H)];

        function R(n) {
          t.go(n)
        }
        var U = 0;

        function B(n) {
          1 === (U += n) && 1 === n ? window.addEventListener(E, T) : 0 === U && window.removeEventListener(E, T)
        }
        var D = !1,
          F = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var t = document.querySelector("base"),
                e = "";
              return t && t.getAttribute("href") && (e = _(window.location.href)), e + "#" + u(s + w(n))
            },
            push: function(n, t) {
              var e = "PUSH",
                o = y(n, void 0, void 0, F.location);
              b.confirmTransitionTo(o, e, i, (function(n) {
                if (n) {
                  var t = w(o),
                    r = u(s + t);
                  if (M() !== r) {
                    x = t,
                      function(n) {
                        window.location.hash = n
                      }(r);
                    var i = j.lastIndexOf(w(F.location)),
                      a = j.slice(0, i + 1);
                    a.push(t), j = a, k({
                      action: e,
                      location: o
                    })
                  } else k()
                }
              }))
            },
            replace: function(n, t) {
              var e = "REPLACE",
                o = y(n, void 0, void 0, F.location);
              b.confirmTransitionTo(o, e, i, (function(n) {
                if (n) {
                  var t = w(o),
                    r = u(s + t);
                  M() !== r && (x = t, I(r));
                  var i = j.indexOf(w(F.location)); - 1 !== i && (j[i] = t), k({
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
              return D || (B(1), D = !0),
                function() {
                  return D && (D = !1, B(-1)), t()
                }
            },
            listen: function(n) {
              var t = b.appendListener(n);
              return B(1),
                function() {
                  B(-1), t()
                }
            }
          };
        return F
      }

      function C(n, t, e) {
        return Math.min(Math.max(n, t), e)
      }

      function H(n) {
        void 0 === n && (n = {});
        var t = n,
          e = t.getUserConfirmation,
          r = t.initialEntries,
          i = void 0 === r ? ["/"] : r,
          a = t.initialIndex,
          c = void 0 === a ? 0 : a,
          s = t.keyLength,
          f = void 0 === s ? 6 : s,
          u = m();

        function d(n) {
          (0, o.A)(b, n), b.length = b.entries.length, u.notifyListeners(b.location, b.action)
        }

        function l() {
          return Math.random().toString(36).substr(2, f)
        }
        var h = C(c, 0, i.length - 1),
          v = i.map((function(n) {
            return y(n, void 0, "string" == typeof n ? l() : n.key || l())
          })),
          p = w;

        function g(n) {
          var t = C(b.index + n, 0, b.entries.length - 1),
            o = b.entries[t];
          u.confirmTransitionTo(o, "POP", e, (function(n) {
            n ? d({
              action: "POP",
              location: o,
              index: t
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
          push: function(n, t) {
            var o = "PUSH",
              r = y(n, t, l(), b.location);
            u.confirmTransitionTo(r, o, e, (function(n) {
              if (n) {
                var t = b.index + 1,
                  e = b.entries.slice(0);
                e.length > t ? e.splice(t, e.length - t, r) : e.push(r), d({
                  action: o,
                  location: r,
                  index: t,
                  entries: e
                })
              }
            }))
          },
          replace: function(n, t) {
            var o = "REPLACE",
              r = y(n, t, l(), b.location);
            u.confirmTransitionTo(r, o, e, (function(n) {
              n && (b.entries[b.index] = r, d({
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