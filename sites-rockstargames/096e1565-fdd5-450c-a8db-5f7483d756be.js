try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new n.Error).stack;
  e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "096e1565-fdd5-450c-a8db-5f7483d756be", n._sentryDebugIdIdentifier = "sentry-dbid-096e1565-fdd5-450c-a8db-5f7483d756be")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3262], {
    63262: (n, e, t) => {
      function o() {
        return o = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t)({}).hasOwnProperty.call(t, o) && (n[o] = t[o])
          }
          return n
        }, o.apply(null, arguments)
      }

      function r(n) {
        return "/" === n.charAt(0)
      }

      function i(n, e) {
        for (var t = e, o = t + 1, r = n.length; o < r; t += 1, o += 1) n[t] = n[o];
        n.pop()
      }
      t.r(e), t.d(e, {
        createBrowserHistory: () => A,
        createHashHistory: () => S,
        createLocation: () => y,
        createMemoryHistory: () => H,
        createPath: () => w,
        locationsAreEqual: () => m,
        parsePath: () => g
      });
      const a = function(n, e) {
        void 0 === e && (e = "");
        var t, o = n && n.split("/") || [],
          a = e && e.split("/") || [],
          c = n && r(n),
          s = e && r(e),
          f = c || s;
        if (n && r(n) ? a = o : o.length && (a.pop(), a = a.concat(o)), !a.length) return "/";
        if (a.length) {
          var u = a[a.length - 1];
          t = "." === u || ".." === u || "" === u
        } else t = !1;
        for (var d = 0, l = a.length; l >= 0; l--) {
          var h = a[l];
          "." === h ? i(a, l) : ".." === h ? (i(a, l), d++) : d && (i(a, l), d--)
        }
        if (!f)
          for (; d--; d) a.unshift("..");
        !f || "" === a[0] || a[0] && r(a[0]) || a.unshift("");
        var v = a.join("/");
        return t && "/" !== v.substr(-1) && (v += "/"), v
      };

      function c(n) {
        return n.valueOf ? n.valueOf() : Object.prototype.valueOf.call(n)
      }
      const s = function n(e, t) {
        if (e === t) return !0;
        if (null == e || null == t) return !1;
        if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, o) {
          return n(e, t[o])
        });
        if ("object" == typeof e || "object" == typeof t) {
          var o = c(e),
            r = c(t);
          return o !== e || r !== t ? n(o, r) : Object.keys(Object.assign({}, e, t)).every(function(o) {
            return n(e[o], t[o])
          })
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
          r = e.indexOf("#"); - 1 !== r && (o = e.substr(r), e = e.substr(0, r));
        var i = e.indexOf("?");
        return -1 !== i && (t = e.substr(i), e = e.substr(0, i)), {
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
        var i;
        "string" == typeof n ? (i = g(n)).state = e : (void 0 === (i = o({}, n)).pathname && (i.pathname = ""), i.search ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search) : i.search = "", i.hash ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash) : i.hash = "", void 0 !== e && void 0 === i.state && (i.state = e));
        try {
          i.pathname = decodeURI(i.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + i.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return t && (i.key = t), r ? i.pathname ? "/" !== i.pathname.charAt(0) && (i.pathname = a(i.pathname, r.pathname)) : i.pathname = r.pathname : i.pathname || (i.pathname = "/"), i
      }

      function m(n, e) {
        return n.pathname === e.pathname && n.search === e.search && n.hash === e.hash && n.key === e.key && s(n.state, e.state)
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
              var i = "function" == typeof n ? n(e, t) : n;
              "string" == typeof i ? "function" == typeof o ? o(i, r) : r(!0) : r(!1 !== i)
            } else r(!0)
          },
          appendListener: function(n) {
            var t = !0;

            function o() {
              t && n.apply(void 0, arguments)
            }
            return e.push(o),
              function() {
                t = !1, e = e.filter(function(n) {
                  return n !== o
                })
              }
          },
          notifyListeners: function() {
            for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
            e.forEach(function(n) {
              return n.apply(void 0, t)
            })
          }
        }
      }
      var O = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function P(n, e) {
        e(window.confirm(n))
      }
      var k = "popstate",
        x = "hashchange";

      function T() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function A(n) {
        void 0 === n && (n = {}), O || d(!1);
        var e, t = window.history,
          r = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          a = n,
          c = a.forceRefresh,
          s = void 0 !== c && c,
          f = a.getUserConfirmation,
          u = void 0 === f ? P : f,
          h = a.keyLength,
          g = void 0 === h ? 6 : h,
          m = n.basename ? p(l(n.basename)) : "";

        function A(n) {
          var e = n || {},
            t = e.key,
            o = e.state,
            r = window.location,
            i = r.pathname + r.search + r.hash;
          return m && (i = v(i, m)), y(i, o, t)
        }

        function E() {
          return Math.random().toString(36).substr(2, g)
        }
        var L = b();

        function _(n) {
          o(q, n), q.length = t.length, L.notifyListeners(q.location, q.action)
        }

        function M(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || C(A(n.state))
        }

        function I() {
          C(A(T()))
        }
        var S = !1;

        function C(n) {
          S ? (S = !1, _()) : L.confirmTransitionTo(n, "POP", u, function(e) {
            e ? _({
              action: "POP",
              location: n
            }) : function(n) {
              var e = q.location,
                t = j.indexOf(e.key); - 1 === t && (t = 0);
              var o = j.indexOf(n.key); - 1 === o && (o = 0);
              var r = t - o;
              r && (S = !0, U(r))
            }(n)
          })
        }
        var H = A(T()),
          j = [H.key];

        function R(n) {
          return m + w(n)
        }

        function U(n) {
          t.go(n)
        }
        var B = 0;

        function D(n) {
          1 === (B += n) && 1 === n ? (window.addEventListener(k, M), i && window.addEventListener(x, I)) : 0 === B && (window.removeEventListener(k, M), i && window.removeEventListener(x, I))
        }
        var F = !1,
          q = {
            length: t.length,
            action: "POP",
            location: H,
            createHref: R,
            push: function(n, e) {
              var o = "PUSH",
                i = y(n, e, E(), q.location);
              L.confirmTransitionTo(i, o, u, function(n) {
                if (n) {
                  var e = R(i),
                    a = i.key,
                    c = i.state;
                  if (r)
                    if (t.pushState({
                        key: a,
                        state: c
                      }, null, e), s) window.location.href = e;
                    else {
                      var f = j.indexOf(q.location.key),
                        u = j.slice(0, f + 1);
                      u.push(i.key), j = u, _({
                        action: o,
                        location: i
                      })
                    }
                  else window.location.href = e
                }
              })
            },
            replace: function(n, e) {
              var o = "REPLACE",
                i = y(n, e, E(), q.location);
              L.confirmTransitionTo(i, o, u, function(n) {
                if (n) {
                  var e = R(i),
                    a = i.key,
                    c = i.state;
                  if (r)
                    if (t.replaceState({
                        key: a,
                        state: c
                      }, null, e), s) window.location.replace(e);
                    else {
                      var f = j.indexOf(q.location.key); - 1 !== f && (j[f] = i.key), _({
                        action: o,
                        location: i
                      })
                    }
                  else window.location.replace(e)
                }
              })
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
        var e = n.indexOf("#");
        return -1 === e ? n : n.slice(0, e)
      }

      function M() {
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
          r = t.getUserConfirmation,
          i = void 0 === r ? P : r,
          a = t.hashType,
          c = void 0 === a ? "slash" : a,
          s = n.basename ? p(l(n.basename)) : "",
          f = L[c],
          u = f.encodePath,
          h = f.decodePath;

        function g() {
          var n = h(M());
          return s && (n = v(n, s)), y(n)
        }
        var m = b();

        function k(n) {
          o(F, n), F.length = e.length, m.notifyListeners(F.location, F.action)
        }
        var x = !1,
          T = null;

        function A() {
          var n, e, t = M(),
            o = u(t);
          if (t !== o) I(o);
          else {
            var r = g(),
              a = F.location;
            if (!x && (e = r, (n = a).pathname === e.pathname && n.search === e.search && n.hash === e.hash)) return;
            if (T === w(r)) return;
            T = null,
              function(n) {
                if (x) x = !1, k();
                else {
                  m.confirmTransitionTo(n, "POP", i, function(e) {
                    e ? k({
                      action: "POP",
                      location: n
                    }) : function(n) {
                      var e = F.location,
                        t = j.lastIndexOf(w(e)); - 1 === t && (t = 0);
                      var o = j.lastIndexOf(w(n)); - 1 === o && (o = 0);
                      var r = t - o;
                      r && (x = !0, R(r))
                    }(n)
                  })
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
          e.go(n)
        }
        var U = 0;

        function B(n) {
          1 === (U += n) && 1 === n ? window.addEventListener(E, A) : 0 === U && window.removeEventListener(E, A)
        }
        var D = !1,
          F = {
            length: e.length,
            action: "POP",
            location: H,
            createHref: function(n) {
              var e = document.querySelector("base"),
                t = "";
              return e && e.getAttribute("href") && (t = _(window.location.href)), t + "#" + u(s + w(n))
            },
            push: function(n, e) {
              var t = "PUSH",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, t, i, function(n) {
                if (n) {
                  var e = w(o),
                    r = u(s + e);
                  if (M() !== r) {
                    T = e,
                      function(n) {
                        window.location.hash = n
                      }(r);
                    var i = j.lastIndexOf(w(F.location)),
                      a = j.slice(0, i + 1);
                    a.push(e), j = a, k({
                      action: t,
                      location: o
                    })
                  } else k()
                }
              })
            },
            replace: function(n, e) {
              var t = "REPLACE",
                o = y(n, void 0, void 0, F.location);
              m.confirmTransitionTo(o, t, i, function(n) {
                if (n) {
                  var e = w(o),
                    r = u(s + e);
                  M() !== r && (T = e, I(r));
                  var i = j.indexOf(w(F.location)); - 1 !== i && (j[i] = e), k({
                    action: t,
                    location: o
                  })
                }
              })
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

      function C(n, e, t) {
        return Math.min(Math.max(n, e), t)
      }

      function H(n) {
        void 0 === n && (n = {});
        var e = n,
          t = e.getUserConfirmation,
          r = e.initialEntries,
          i = void 0 === r ? ["/"] : r,
          a = e.initialIndex,
          c = void 0 === a ? 0 : a,
          s = e.keyLength,
          f = void 0 === s ? 6 : s,
          u = b();

        function d(n) {
          o(m, n), m.length = m.entries.length, u.notifyListeners(m.location, m.action)
        }

        function l() {
          return Math.random().toString(36).substr(2, f)
        }
        var h = C(c, 0, i.length - 1),
          v = i.map(function(n) {
            return y(n, void 0, "string" == typeof n ? l() : n.key || l())
          }),
          p = w;

        function g(n) {
          var e = C(m.index + n, 0, m.entries.length - 1),
            o = m.entries[e];
          u.confirmTransitionTo(o, "POP", t, function(n) {
            n ? d({
              action: "POP",
              location: o,
              index: e
            }) : d()
          })
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
            u.confirmTransitionTo(r, o, t, function(n) {
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
            })
          },
          replace: function(n, e) {
            var o = "REPLACE",
              r = y(n, e, l(), m.location);
            u.confirmTransitionTo(r, o, t, function(n) {
              n && (m.entries[m.index] = r, d({
                action: o,
                location: r
              }))
            })
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
    }
  }
]);