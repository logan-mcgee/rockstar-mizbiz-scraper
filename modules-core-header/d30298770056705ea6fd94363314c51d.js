! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "35cc449c-7aa0-45a7-8c91-3be8fa416fae", n._sentryDebugIdIdentifier = "sentry-dbid-35cc449c-7aa0-45a7-8c91-3be8fa416fae")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [940], {
    19940: (n, e, t) => {
      t.d(e, {
        iU: () => p
      });
      var a = t(82795);

      function o(n) {
        return "/" === n.charAt(0)
      }

      function r(n, e) {
        for (var t = e, a = t + 1, o = n.length; a < o; t += 1, a += 1) n[t] = n[a];
        n.pop()
      }
      const i = function(n, e) {
        void 0 === e && (e = "");
        var t, a = n && n.split("/") || [],
          i = e && e.split("/") || [],
          c = n && o(n),
          f = e && o(e),
          s = c || f;
        if (n && o(n) ? i = a : a.length && (i.pop(), i = i.concat(a)), !i.length) return "/";
        if (i.length) {
          var d = i[i.length - 1];
          t = "." === d || ".." === d || "" === d
        } else t = !1;
        for (var u = 0, l = i.length; l >= 0; l--) {
          var h = i[l];
          "." === h ? r(i, l) : ".." === h ? (r(i, l), u++) : u && (r(i, l), u--)
        }
        if (!s)
          for (; u--; u) i.unshift("..");
        !s || "" === i[0] || i[0] && o(i[0]) || i.unshift("");
        var w = i.join("/");
        return t && "/" !== w.substr(-1) && (w += "/"), w
      };
      var c = !0,
        f = "Invariant failed";

      function s(n, e, t, o) {
        var r;
        "string" == typeof n ? (r = function(n) {
          var e = n || "/",
            t = "",
            a = "",
            o = e.indexOf("#"); - 1 !== o && (a = e.substr(o), e = e.substr(0, o));
          var r = e.indexOf("?");
          return -1 !== r && (t = e.substr(r), e = e.substr(0, r)), {
            pathname: e,
            search: "?" === t ? "" : t,
            hash: "#" === a ? "" : a
          }
        }(n), r.state = e) : (void 0 === (r = (0, a.c)({}, n)).pathname && (r.pathname = ""), r.search ? "?" !== r.search.charAt(0) && (r.search = "?" + r.search) : r.search = "", r.hash ? "#" !== r.hash.charAt(0) && (r.hash = "#" + r.hash) : r.hash = "", void 0 !== e && void 0 === r.state && (r.state = e));
        try {
          r.pathname = decodeURI(r.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return t && (r.key = t), o ? r.pathname ? "/" !== r.pathname.charAt(0) && (r.pathname = i(r.pathname, o.pathname)) : r.pathname = o.pathname : r.pathname || (r.pathname = "/"), r
      }
      var d = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function u(n, e) {
        e(window.confirm(n))
      }
      var l = "popstate",
        h = "hashchange";

      function w() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function p(n) {
        void 0 === n && (n = {}), d || function(n, e) {
          if (c) throw new Error(f);
          throw new Error(f)
        }();
        var e, t, o = window.history,
          r = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          p = n,
          v = p.forceRefresh,
          g = void 0 !== v && v,
          y = p.getUserConfirmation,
          b = void 0 === y ? u : y,
          m = p.keyLength,
          k = void 0 === m ? 6 : m,
          _ = n.basename ? function(n) {
            return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
          }("/" === (t = n.basename).charAt(0) ? t : "/" + t) : "";

        function O(n) {
          var e = n || {},
            t = e.key,
            a = e.state,
            o = window.location,
            r = o.pathname + o.search + o.hash;
          return _ && (r = function(n, e) {
            return function(n, e) {
              return 0 === n.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(e.length))
            }(n, e) ? n.substr(e.length) : n
          }(r, _)), s(r, a, t)
        }

        function E() {
          return Math.random().toString(36).substr(2, k)
        }
        var A, x, L = (A = null, x = [], {
          setPrompt: function(n) {
            return A = n,
              function() {
                A === n && (A = null)
              }
          },
          confirmTransitionTo: function(n, e, t, a) {
            if (null != A) {
              var o = "function" == typeof A ? A(n, e) : A;
              "string" == typeof o ? "function" == typeof t ? t(o, a) : a(!0) : a(!1 !== o)
            } else a(!0)
          },
          appendListener: function(n) {
            var e = !0;

            function t() {
              e && n.apply(void 0, arguments)
            }
            return x.push(t),
              function() {
                e = !1, x = x.filter((function(n) {
                  return n !== t
                }))
              }
          },
          notifyListeners: function() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
            x.forEach((function(n) {
              return n.apply(void 0, e)
            }))
          }
        });

        function P(n) {
          (0, a.c)(B, n), B.length = o.length, L.notifyListeners(B.location, B.action)
        }

        function T(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || C(O(n.state))
        }

        function I() {
          C(O(w()))
        }
        var S = !1;

        function C(n) {
          S ? (S = !1, P()) : L.confirmTransitionTo(n, "POP", b, (function(e) {
            e ? P({
              action: "POP",
              location: n
            }) : function(n) {
              var e = B.location,
                t = R.indexOf(e.key); - 1 === t && (t = 0);
              var a = R.indexOf(n.key); - 1 === a && (a = 0);
              var o = t - a;
              o && (S = !0, D(o))
            }(n)
          }))
        }
        var M = O(w()),
          R = [M.key];

        function U(n) {
          return _ + function(n) {
            var e = n.pathname,
              t = n.search,
              a = n.hash,
              o = e || "/";
            return t && "?" !== t && (o += "?" === t.charAt(0) ? t : "?" + t), a && "#" !== a && (o += "#" === a.charAt(0) ? a : "#" + a), o
          }(n)
        }

        function D(n) {
          o.go(n)
        }
        var H = 0;

        function N(n) {
          1 === (H += n) && 1 === n ? (window.addEventListener(l, T), i && window.addEventListener(h, I)) : 0 === H && (window.removeEventListener(l, T), i && window.removeEventListener(h, I))
        }
        var j = !1,
          B = {
            length: o.length,
            action: "POP",
            location: M,
            createHref: U,
            push: function(n, e) {
              var t = "PUSH",
                a = s(n, e, E(), B.location);
              L.confirmTransitionTo(a, t, b, (function(n) {
                if (n) {
                  var e = U(a),
                    i = a.key,
                    c = a.state;
                  if (r)
                    if (o.pushState({
                        key: i,
                        state: c
                      }, null, e), g) window.location.href = e;
                    else {
                      var f = R.indexOf(B.location.key),
                        s = R.slice(0, f + 1);
                      s.push(a.key), R = s, P({
                        action: t,
                        location: a
                      })
                    }
                  else window.location.href = e
                }
              }))
            },
            replace: function(n, e) {
              var t = "REPLACE",
                a = s(n, e, E(), B.location);
              L.confirmTransitionTo(a, t, b, (function(n) {
                if (n) {
                  var e = U(a),
                    i = a.key,
                    c = a.state;
                  if (r)
                    if (o.replaceState({
                        key: i,
                        state: c
                      }, null, e), g) window.location.replace(e);
                    else {
                      var f = R.indexOf(B.location.key); - 1 !== f && (R[f] = a.key), P({
                        action: t,
                        location: a
                      })
                    }
                  else window.location.replace(e)
                }
              }))
            },
            go: D,
            goBack: function() {
              D(-1)
            },
            goForward: function() {
              D(1)
            },
            block: function(n) {
              void 0 === n && (n = !1);
              var e = L.setPrompt(n);
              return j || (N(1), j = !0),
                function() {
                  return j && (j = !1, N(-1)), e()
                }
            },
            listen: function(n) {
              var e = L.appendListener(n);
              return N(1),
                function() {
                  N(-1), e()
                }
            }
          };
        return B
      }
    }
  }
]);
//# sourceMappingURL=d30298770056705ea6fd94363314c51d.js.map