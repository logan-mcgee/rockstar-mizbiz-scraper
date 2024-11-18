! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "b91bbc2f-9a4f-4413-97d7-fe86145653fb", n._sentryDebugIdIdentifier = "sentry-dbid-b91bbc2f-9a4f-4413-97d7-fe86145653fb")
  } catch (n) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [434], {
    600: (n, e, t) => {
      t.d(e, {
        zR: () => v
      });
      var r = t(6677);

      function a(n) {
        return "/" === n.charAt(0)
      }

      function o(n, e) {
        for (var t = e, r = t + 1, a = n.length; r < a; t += 1, r += 1) n[t] = n[r];
        n.pop()
      }
      const i = function(n, e) {
        void 0 === e && (e = "");
        var t, r = n && n.split("/") || [],
          i = e && e.split("/") || [],
          f = n && a(n),
          s = e && a(e),
          c = f || s;
        if (n && a(n) ? i = r : r.length && (i.pop(), i = i.concat(r)), !i.length) return "/";
        if (i.length) {
          var d = i[i.length - 1];
          t = "." === d || ".." === d || "" === d
        } else t = !1;
        for (var u = 0, l = i.length; l >= 0; l--) {
          var h = i[l];
          "." === h ? o(i, l) : ".." === h ? (o(i, l), u++) : u && (o(i, l), u--)
        }
        if (!c)
          for (; u--; u) i.unshift("..");
        !c || "" === i[0] || i[0] && a(i[0]) || i.unshift("");
        var p = i.join("/");
        return t && "/" !== p.substr(-1) && (p += "/"), p
      };
      var f = !0,
        s = "Invariant failed";

      function c(n, e, t, a) {
        var o;
        "string" == typeof n ? (o = function(n) {
          var e = n || "/",
            t = "",
            r = "",
            a = e.indexOf("#"); - 1 !== a && (r = e.substr(a), e = e.substr(0, a));
          var o = e.indexOf("?");
          return -1 !== o && (t = e.substr(o), e = e.substr(0, o)), {
            pathname: e,
            search: "?" === t ? "" : t,
            hash: "#" === r ? "" : r
          }
        }(n), o.state = e) : (void 0 === (o = (0, r.A)({}, n)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== e && void 0 === o.state && (o.state = e));
        try {
          o.pathname = decodeURI(o.pathname)
        } catch (n) {
          throw n instanceof URIError ? new URIError('Pathname "' + o.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : n
        }
        return t && (o.key = t), a ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = i(o.pathname, a.pathname)) : o.pathname = a.pathname : o.pathname || (o.pathname = "/"), o
      }
      var d = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function u(n, e) {
        e(window.confirm(n))
      }
      var l = "popstate",
        h = "hashchange";

      function p() {
        try {
          return window.history.state || {}
        } catch (n) {
          return {}
        }
      }

      function v(n) {
        void 0 === n && (n = {}), d || function(n, e) {
          if (f) throw new Error(s);
          throw new Error(s)
        }();
        var e, t, a = window.history,
          o = (-1 === (e = window.navigator.userAgent).indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          v = n,
          w = v.forceRefresh,
          y = void 0 !== w && w,
          g = v.getUserConfirmation,
          b = void 0 === g ? u : g,
          m = v.keyLength,
          _ = void 0 === m ? 6 : m,
          k = n.basename ? function(n) {
            return "/" === n.charAt(n.length - 1) ? n.slice(0, -1) : n
          }("/" === (t = n.basename).charAt(0) ? t : "/" + t) : "";

        function O(n) {
          var e = n || {},
            t = e.key,
            r = e.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return k && (o = function(n, e) {
            return function(n, e) {
              return 0 === n.toLowerCase().indexOf(e.toLowerCase()) && -1 !== "/?#".indexOf(n.charAt(e.length))
            }(n, e) ? n.substr(e.length) : n
          }(o, k)), c(o, r, t)
        }

        function E() {
          return Math.random().toString(36).substr(2, _)
        }
        var A, x, P = (A = null, x = [], {
          setPrompt: function(n) {
            return A = n,
              function() {
                A === n && (A = null)
              }
          },
          confirmTransitionTo: function(n, e, t, r) {
            if (null != A) {
              var a = "function" == typeof A ? A(n, e) : A;
              "string" == typeof a ? "function" == typeof t ? t(a, r) : r(!0) : r(!1 !== a)
            } else r(!0)
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

        function L(n) {
          (0, r.A)(B, n), B.length = a.length, P.notifyListeners(B.location, B.action)
        }

        function S(n) {
          (function(n) {
            return void 0 === n.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(n) || I(O(n.state))
        }

        function T() {
          I(O(p()))
        }
        var R = !1;

        function I(n) {
          R ? (R = !1, L()) : P.confirmTransitionTo(n, "POP", b, (function(e) {
            e ? L({
              action: "POP",
              location: n
            }) : function(n) {
              var e = B.location,
                t = M.indexOf(e.key); - 1 === t && (t = 0);
              var r = M.indexOf(n.key); - 1 === r && (r = 0);
              var a = t - r;
              a && (R = !0, U(a))
            }(n)
          }))
        }
        var C = O(p()),
          M = [C.key];

        function j(n) {
          return k + function(n) {
            var e = n.pathname,
              t = n.search,
              r = n.hash,
              a = e || "/";
            return t && "?" !== t && (a += "?" === t.charAt(0) ? t : "?" + t), r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r), a
          }(n)
        }

        function U(n) {
          a.go(n)
        }
        var D = 0;

        function N(n) {
          1 === (D += n) && 1 === n ? (window.addEventListener(l, S), i && window.addEventListener(h, T)) : 0 === D && (window.removeEventListener(l, S), i && window.removeEventListener(h, T))
        }
        var F = !1,
          B = {
            length: a.length,
            action: "POP",
            location: C,
            createHref: j,
            push: function(n, e) {
              var t = "PUSH",
                r = c(n, e, E(), B.location);
              P.confirmTransitionTo(r, t, b, (function(n) {
                if (n) {
                  var e = j(r),
                    i = r.key,
                    f = r.state;
                  if (o)
                    if (a.pushState({
                        key: i,
                        state: f
                      }, null, e), y) window.location.href = e;
                    else {
                      var s = M.indexOf(B.location.key),
                        c = M.slice(0, s + 1);
                      c.push(r.key), M = c, L({
                        action: t,
                        location: r
                      })
                    }
                  else window.location.href = e
                }
              }))
            },
            replace: function(n, e) {
              var t = "REPLACE",
                r = c(n, e, E(), B.location);
              P.confirmTransitionTo(r, t, b, (function(n) {
                if (n) {
                  var e = j(r),
                    i = r.key,
                    f = r.state;
                  if (o)
                    if (a.replaceState({
                        key: i,
                        state: f
                      }, null, e), y) window.location.replace(e);
                    else {
                      var s = M.indexOf(B.location.key); - 1 !== s && (M[s] = r.key), L({
                        action: t,
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
              var e = P.setPrompt(n);
              return F || (N(1), F = !0),
                function() {
                  return F && (F = !1, N(-1)), e()
                }
            },
            listen: function(n) {
              var e = P.appendListener(n);
              return N(1),
                function() {
                  N(-1), e()
                }
            }
          };
        return B
      }
    },
    6516: (n, e, t) => {
      var r = t(1403),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(n, e, t) {
        var r, o = {},
          c = null,
          d = null;
        for (r in void 0 !== t && (c = "" + t), void 0 !== e.key && (c = "" + e.key), void 0 !== e.ref && (d = e.ref), e) i.call(e, r) && !s.hasOwnProperty(r) && (o[r] = e[r]);
        if (n && n.defaultProps)
          for (r in e = n.defaultProps) void 0 === o[r] && (o[r] = e[r]);
        return {
          $$typeof: a,
          type: n,
          key: c,
          ref: d,
          props: o,
          _owner: f.current
        }
      }
      e.Fragment = o, e.jsx = c, e.jsxs = c
    },
    6632: (n, e, t) => {
      n.exports = t(6516)
    },
    6677: (n, e, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }, r.apply(this, arguments)
      }
      t.d(e, {
        A: () => r
      })
    }
  }
]);