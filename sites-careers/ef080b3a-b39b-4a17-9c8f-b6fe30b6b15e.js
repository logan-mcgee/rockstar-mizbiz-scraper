! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ef080b3a-b39b-4a17-9c8f-b6fe30b6b15e", e._sentryDebugIdIdentifier = "sentry-dbid-ef080b3a-b39b-4a17-9c8f-b6fe30b6b15e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [6980, 4599], {
    1771: e => {
      var t, r, n = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function c(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          r = a
        }
      }();
      var i, u = [],
        s = !1,
        l = -1;

      function f() {
        s && i && (s = !1, i.length ? u = i.concat(u) : l = -1, u.length && p())
      }

      function p() {
        if (!s) {
          var e = c(f);
          s = !0;
          for (var t = u.length; t;) {
            for (i = u, u = []; ++l < t;) i && i[l].run();
            l = -1, t = u.length
          }
          i = null, s = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function y() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        u.push(new d(e, t)), 1 !== u.length || s || c(p)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = y, n.addListener = y, n.once = y, n.off = y, n.removeListener = y, n.removeAllListeners = y, n.emit = y, n.prependListener = y, n.prependOnceListener = y, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    6980: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        GoogleReCaptcha: () => m,
        GoogleReCaptchaConsumer: () => p,
        GoogleReCaptchaContext: () => f,
        GoogleReCaptchaProvider: () => d,
        useGoogleReCaptcha: () => y,
        withGoogleReCaptcha: () => Z
      });
      var n, o = r(2229),
        a = r.n(o),
        c = r(1771),
        i = function() {
          return i = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, i.apply(this, arguments)
        },
        u = function(e, t) {
          (function(e) {
            var t;
            e ? function(e) {
              if (e)
                for (; e.lastChild;) e.lastChild.remove()
            }("string" == typeof e ? document.getElementById(e) : e) : (t = document.querySelector(".grecaptcha-badge")) && t.parentNode && document.body.removeChild(t.parentNode)
          })(t), window.___grecaptcha_cfg = void 0;
          var r = document.querySelector("#" + e);
          r && r.remove(),
            function() {
              var e = document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');
              e && e.remove()
            }()
        },
        s = function(e) {
          var t = e.render,
            r = e.onLoadCallbackName,
            n = e.language,
            o = e.onLoad,
            a = e.useRecaptchaNet,
            c = e.useEnterprise,
            i = e.scriptProps,
            u = void 0 === i ? {} : i,
            s = u.nonce,
            l = void 0 === s ? "" : s,
            f = u.defer,
            p = void 0 !== f && f,
            d = u.async,
            y = void 0 !== d && d,
            m = u.id,
            h = void 0 === m ? "" : m,
            b = u.appendTo,
            g = h || "google-recaptcha-v3";
          if (function(e) {
              return !!document.querySelector("#" + e)
            }(g)) o();
          else {
            var v = function(e) {
                return "https://www." + (e.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (e.useEnterprise ? "enterprise.js" : "api.js")
              }({
                useEnterprise: c,
                useRecaptchaNet: a
              }),
              w = document.createElement("script");
            w.id = g, w.src = v + "?render=" + t + ("explicit" === t ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), l && (w.nonce = l), w.defer = !!p, w.async = !!y, w.onload = o, ("body" === b ? document.body : document.getElementsByTagName("head")[0]).appendChild(w)
          }
        },
        l = function(e) {
          void 0 !== c && c.env, console.warn(e)
        };
      (n || (n = {})).SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
      var f = (0, o.createContext)({
          executeRecaptcha: function() {
            throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")
          }
        }),
        p = f.Consumer;

      function d(e) {
        var t = e.reCaptchaKey,
          r = e.useEnterprise,
          c = void 0 !== r && r,
          p = e.useRecaptchaNet,
          d = void 0 !== p && p,
          y = e.scriptProps,
          m = e.language,
          h = e.container,
          b = e.children,
          g = (0, o.useState)(null),
          v = g[0],
          w = g[1],
          C = (0, o.useRef)(t),
          S = JSON.stringify(y),
          E = JSON.stringify(null == h ? void 0 : h.parameters);
        (0, o.useEffect)((function() {
          if (t) {
            var e = (null == y ? void 0 : y.id) || "google-recaptcha-v3",
              r = (null == y ? void 0 : y.onLoadCallbackName) || "onRecaptchaLoadCallback";
            return window[r] = function() {
                var e = c ? window.grecaptcha.enterprise : window.grecaptcha,
                  r = i({
                    badge: "inline",
                    size: "invisible",
                    sitekey: t
                  }, (null == h ? void 0 : h.parameters) || {});
                C.current = e.render(null == h ? void 0 : h.element, r)
              }, s({
                render: (null == h ? void 0 : h.element) ? "explicit" : t,
                onLoadCallbackName: r,
                useEnterprise: c,
                useRecaptchaNet: d,
                scriptProps: y,
                language: m,
                onLoad: function() {
                  if (window && window.grecaptcha) {
                    var e = c ? window.grecaptcha.enterprise : window.grecaptcha;
                    e.ready((function() {
                      w(e)
                    }))
                  } else l("<GoogleRecaptchaProvider /> " + n.SCRIPT_NOT_AVAILABLE)
                },
                onError: function() {
                  l("Error loading google recaptcha script")
                }
              }),
              function() {
                u(e, null == h ? void 0 : h.element)
              }
          }
          l("<GoogleReCaptchaProvider /> recaptcha key not provided")
        }), [c, d, S, E, m, t, null == h ? void 0 : h.element]);
        var P = (0, o.useCallback)((function(e) {
            if (!v || !v.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
            return v.execute(C.current, {
              action: e
            })
          }), [v, C]),
          R = (0, o.useMemo)((function() {
            return {
              executeRecaptcha: v ? P : void 0,
              container: null == h ? void 0 : h.element
            }
          }), [P, v, null == h ? void 0 : h.element]);
        return a().createElement(f.Provider, {
          value: R
        }, b)
      }
      var y = function() {
        return (0, o.useContext)(f)
      };

      function m(e) {
        var t = this,
          r = e.action,
          n = e.onVerify,
          c = e.refreshReCaptcha,
          i = y();
        (0, o.useEffect)((function() {
          var e = i.executeRecaptcha;
          e && function(e, t, r, n) {
            new(r || (r = Promise))((function(t, o) {
              function a(e) {
                try {
                  i(n.next(e))
                } catch (e) {
                  o(e)
                }
              }

              function c(e) {
                try {
                  i(n.throw(e))
                } catch (e) {
                  o(e)
                }
              }

              function i(e) {
                var n;
                e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r((function(e) {
                  e(n)
                }))).then(a, c)
              }
              i((n = n.apply(e, [])).next())
            }))
          }(t, 0, void 0, (function() {
            var t;
            return function(e, t) {
              var r, n, o, a, c = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1]
                },
                trys: [],
                ops: []
              };
              return a = {
                next: i(0),
                throw: i(1),
                return: i(2)
              }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
              }), a;

              function i(a) {
                return function(i) {
                  return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                      if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                      switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                        case 0:
                        case 1:
                          o = a;
                          break;
                        case 4:
                          return c.label++, {
                            value: a[1],
                            done: !1
                          };
                        case 5:
                          c.label++, n = a[1], a = [0];
                          continue;
                        case 7:
                          a = c.ops.pop(), c.trys.pop();
                          continue;
                        default:
                          if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                            c = 0;
                            continue
                          }
                          if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                            c.label = a[1];
                            break
                          }
                          if (6 === a[0] && c.label < o[1]) {
                            c.label = o[1], o = a;
                            break
                          }
                          if (o && c.label < o[2]) {
                            c.label = o[2], c.ops.push(a);
                            break
                          }
                          o[2] && c.ops.pop(), c.trys.pop();
                          continue
                      }
                      a = t.call(e, c)
                    } catch (e) {
                      a = [6, e], n = 0
                    } finally {
                      r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                      value: a[0] ? a[1] : void 0,
                      done: !0
                    }
                  }([a, i])
                }
              }
            }(this, (function(o) {
              switch (o.label) {
                case 0:
                  return [4, e(r)];
                case 1:
                  return t = o.sent(), n ? (n(t), [2]) : (l("Please define an onVerify function"), [2])
              }
            }))
          }))
        }), [r, n, c, i]);
        var u = i.container;
        return "string" == typeof u ? a().createElement("div", {
          id: u
        }) : null
      }

      function h(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports
      }
      var b = "function" == typeof Symbol && Symbol.for,
        g = b ? Symbol.for("react.element") : 60103,
        v = b ? Symbol.for("react.portal") : 60106,
        w = b ? Symbol.for("react.fragment") : 60107,
        C = b ? Symbol.for("react.strict_mode") : 60108,
        S = b ? Symbol.for("react.profiler") : 60114,
        E = b ? Symbol.for("react.provider") : 60109,
        P = b ? Symbol.for("react.context") : 60110,
        R = b ? Symbol.for("react.async_mode") : 60111,
        x = b ? Symbol.for("react.concurrent_mode") : 60111,
        T = b ? Symbol.for("react.forward_ref") : 60112,
        _ = b ? Symbol.for("react.suspense") : 60113,
        $ = b ? Symbol.for("react.suspense_list") : 60120,
        k = b ? Symbol.for("react.memo") : 60115,
        M = b ? Symbol.for("react.lazy") : 60116,
        N = b ? Symbol.for("react.block") : 60121,
        L = b ? Symbol.for("react.fundamental") : 60117,
        O = b ? Symbol.for("react.responder") : 60118,
        G = b ? Symbol.for("react.scope") : 60119;

      function j(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case g:
              switch (e = e.type) {
                case R:
                case x:
                case w:
                case S:
                case C:
                case _:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case P:
                    case T:
                    case M:
                    case k:
                    case E:
                      return e;
                    default:
                      return t
                  }
              }
            case v:
              return t
          }
        }
      }

      function A(e) {
        return j(e) === x
      }
      var F = {
          AsyncMode: R,
          ConcurrentMode: x,
          ContextConsumer: P,
          ContextProvider: E,
          Element: g,
          ForwardRef: T,
          Fragment: w,
          Lazy: M,
          Memo: k,
          Portal: v,
          Profiler: S,
          StrictMode: C,
          Suspense: _,
          isAsyncMode: function(e) {
            return A(e) || j(e) === R
          },
          isConcurrentMode: A,
          isContextConsumer: function(e) {
            return j(e) === P
          },
          isContextProvider: function(e) {
            return j(e) === E
          },
          isElement: function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === g
          },
          isForwardRef: function(e) {
            return j(e) === T
          },
          isFragment: function(e) {
            return j(e) === w
          },
          isLazy: function(e) {
            return j(e) === M
          },
          isMemo: function(e) {
            return j(e) === k
          },
          isPortal: function(e) {
            return j(e) === v
          },
          isProfiler: function(e) {
            return j(e) === S
          },
          isStrictMode: function(e) {
            return j(e) === C
          },
          isSuspense: function(e) {
            return j(e) === _
          },
          isValidElementType: function(e) {
            return "string" == typeof e || "function" == typeof e || e === w || e === x || e === S || e === C || e === _ || e === $ || "object" == typeof e && null !== e && (e.$$typeof === M || e.$$typeof === k || e.$$typeof === E || e.$$typeof === P || e.$$typeof === T || e.$$typeof === L || e.$$typeof === O || e.$$typeof === G || e.$$typeof === N)
          },
          typeOf: j
        },
        I = h((function(e, t) {})),
        D = (I.AsyncMode, I.ConcurrentMode, I.ContextConsumer, I.ContextProvider, I.Element, I.ForwardRef, I.Fragment, I.Lazy, I.Memo, I.Portal, I.Profiler, I.StrictMode, I.Suspense, I.isAsyncMode, I.isConcurrentMode, I.isContextConsumer, I.isContextProvider, I.isElement, I.isForwardRef, I.isFragment, I.isLazy, I.isMemo, I.isPortal, I.isProfiler, I.isStrictMode, I.isSuspense, I.isValidElementType, I.typeOf, h((function(e) {
          e.exports = F
        }))),
        z = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        V = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        q = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        B = {};

      function J(e) {
        return D.isMemo(e) ? q : B[e.$$typeof] || z
      }
      B[D.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, B[D.Memo] = q;
      var K = Object.defineProperty,
        Y = Object.getOwnPropertyNames,
        H = Object.getOwnPropertySymbols,
        Q = Object.getOwnPropertyDescriptor,
        U = Object.getPrototypeOf,
        W = Object.prototype,
        X = function e(t, r, n) {
          if ("string" != typeof r) {
            if (W) {
              var o = U(r);
              o && o !== W && e(t, o, n)
            }
            var a = Y(r);
            H && (a = a.concat(H(r)));
            for (var c = J(t), i = J(r), u = 0; u < a.length; ++u) {
              var s = a[u];
              if (!(V[s] || n && n[s] || i && i[s] || c && c[s])) {
                var l = Q(r, s);
                try {
                  K(t, s, l)
                } catch (e) {}
              }
            }
          }
          return t
        },
        Z = function(e) {
          var t = function(t) {
            return a().createElement(p, null, (function(r) {
              return a().createElement(e, i({}, t, {
                googleReCaptchaProps: r
              }))
            }))
          };
          return t.displayName = "withGoogleReCaptcha(" + (e.displayName || e.name || "Component") + ")", X(t, e), t
        }
    }
  }
]);