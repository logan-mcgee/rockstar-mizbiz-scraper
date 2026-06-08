try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "648e0cdc-e347-4e90-9548-45b1acd90381", e._sentryDebugIdIdentifier = "sentry-dbid-648e0cdc-e347-4e90-9548-45b1acd90381")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [48, 667], {
    3431(e) {
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
      var i, s = [],
        u = !1,
        l = -1;

      function f() {
        u && i && (u = !1, i.length ? s = i.concat(s) : l = -1, s.length && d())
      }

      function d() {
        if (!u) {
          var e = c(f);
          u = !0;
          for (var t = s.length; t;) {
            for (i = s, s = []; ++l < t;) i && i[l].run();
            l = -1, t = s.length
          }
          i = null, u = !1,
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

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function y() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        s.push(new p(e, t)), 1 !== s.length || u || c(d)
      }, p.prototype.run = function() {
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
    7667(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        GoogleReCaptcha: () => d,
        GoogleReCaptchaConsumer: () => u,
        GoogleReCaptchaContext: () => s,
        GoogleReCaptchaProvider: () => l,
        useGoogleReCaptcha: () => f,
        withGoogleReCaptcha: () => U
      });
      var n, o = r(3082),
        a = r(3431),
        c = function() {
          return c = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, c.apply(this, arguments)
        },
        i = function(e) {
          void 0 !== a && a.env, console.warn(e)
        };
      (n || (n = {})).SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available";
      var s = (0, o.createContext)({
          executeRecaptcha: function() {
            throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")
          }
        }),
        u = s.Consumer;

      function l(e) {
        var t = e.reCaptchaKey,
          r = e.useEnterprise,
          a = void 0 !== r && r,
          u = e.useRecaptchaNet,
          l = void 0 !== u && u,
          f = e.scriptProps,
          d = e.language,
          p = e.container,
          y = e.children,
          m = (0, o.useState)(null),
          h = m[0],
          g = m[1],
          b = (0, o.useRef)(t),
          v = JSON.stringify(f),
          w = JSON.stringify(null == p ? void 0 : p.parameters);
        (0, o.useEffect)(function() {
          if (t) {
            var e = (null == f ? void 0 : f.id) || "google-recaptcha-v3",
              r = (null == f ? void 0 : f.onLoadCallbackName) || "onRecaptchaLoadCallback";
            return window[r] = function() {
                var e = a ? window.grecaptcha.enterprise : window.grecaptcha,
                  r = c({
                    badge: "inline",
                    size: "invisible",
                    sitekey: t
                  }, (null == p ? void 0 : p.parameters) || {});
                b.current = e.render(null == p ? void 0 : p.element, r)
              },
              function(e) {
                var t = e.render,
                  r = e.onLoadCallbackName,
                  n = e.language,
                  o = e.onLoad,
                  a = e.useRecaptchaNet,
                  c = e.useEnterprise,
                  i = e.scriptProps,
                  s = void 0 === i ? {} : i,
                  u = s.nonce,
                  l = void 0 === u ? "" : u,
                  f = s.defer,
                  d = void 0 !== f && f,
                  p = s.async,
                  y = void 0 !== p && p,
                  m = s.id,
                  h = void 0 === m ? "" : m,
                  g = s.appendTo,
                  b = h || "google-recaptcha-v3";
                if (function(e) {
                    return !!document.querySelector("#" + e)
                  }(b)) o();
                else {
                  var v = function(e) {
                      return "https://www." + (e.useRecaptchaNet ? "recaptcha.net" : "google.com") + "/recaptcha/" + (e.useEnterprise ? "enterprise.js" : "api.js")
                    }({
                      useEnterprise: c,
                      useRecaptchaNet: a
                    }),
                    w = document.createElement("script");
                  w.id = b, w.src = v + "?render=" + t + ("explicit" === t ? "&onload=" + r : "") + (n ? "&hl=" + n : ""), l && (w.nonce = l), w.defer = !!d, w.async = !!y, w.onload = o, ("body" === g ? document.body : document.getElementsByTagName("head")[0]).appendChild(w)
                }
              }({
                render: (null == p ? void 0 : p.element) ? "explicit" : t,
                onLoadCallbackName: r,
                useEnterprise: a,
                useRecaptchaNet: l,
                scriptProps: f,
                language: d,
                onLoad: function() {
                  if (window && window.grecaptcha) {
                    var e = a ? window.grecaptcha.enterprise : window.grecaptcha;
                    e.ready(function() {
                      g(e)
                    })
                  } else i("<GoogleRecaptchaProvider /> " + n.SCRIPT_NOT_AVAILABLE)
                },
                onError: function() {
                  i("Error loading google recaptcha script")
                }
              }),
              function() {
                ! function(e, t) {
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
                }(e, null == p ? void 0 : p.element)
              }
          }
          i("<GoogleReCaptchaProvider /> recaptcha key not provided")
        }, [a, l, v, w, d, t, null == p ? void 0 : p.element]);
        var C = (0, o.useCallback)(function(e) {
            if (!h || !h.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
            return h.execute(b.current, {
              action: e
            })
          }, [h, b]),
          S = (0, o.useMemo)(function() {
            return {
              executeRecaptcha: h ? C : void 0,
              container: null == p ? void 0 : p.element
            }
          }, [C, h, null == p ? void 0 : p.element]);
        return o.createElement(s.Provider, {
          value: S
        }, y)
      }
      var f = function() {
        return (0, o.useContext)(s)
      };

      function d(e) {
        var t = this,
          r = e.action,
          n = e.onVerify,
          a = e.refreshReCaptcha,
          c = f();
        (0, o.useEffect)(function() {
          var e = c.executeRecaptcha;
          e && function(e, t, r, n) {
            new(r || (r = Promise))(function(t, o) {
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
                e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r(function(e) {
                  e(n)
                })).then(a, c)
              }
              i((n = n.apply(e, [])).next())
            })
          }(t, 0, void 0, function() {
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
            }(this, function(o) {
              switch (o.label) {
                case 0:
                  return [4, e(r)];
                case 1:
                  return t = o.sent(), n ? (n(t), [2]) : (i("Please define an onVerify function"), [2])
              }
            })
          })
        }, [r, n, a, c]);
        var s = c.container;
        return "string" == typeof s ? o.createElement("div", {
          id: s
        }) : null
      }

      function p(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports
      }
      var y = "function" == typeof Symbol && Symbol.for,
        m = y ? Symbol.for("react.element") : 60103,
        h = y ? Symbol.for("react.portal") : 60106,
        g = y ? Symbol.for("react.fragment") : 60107,
        b = y ? Symbol.for("react.strict_mode") : 60108,
        v = y ? Symbol.for("react.profiler") : 60114,
        w = y ? Symbol.for("react.provider") : 60109,
        C = y ? Symbol.for("react.context") : 60110,
        S = y ? Symbol.for("react.async_mode") : 60111,
        E = y ? Symbol.for("react.concurrent_mode") : 60111,
        T = y ? Symbol.for("react.forward_ref") : 60112,
        P = y ? Symbol.for("react.suspense") : 60113,
        R = y ? Symbol.for("react.suspense_list") : 60120,
        x = y ? Symbol.for("react.memo") : 60115,
        $ = y ? Symbol.for("react.lazy") : 60116,
        k = y ? Symbol.for("react.block") : 60121,
        _ = y ? Symbol.for("react.fundamental") : 60117,
        M = y ? Symbol.for("react.responder") : 60118,
        N = y ? Symbol.for("react.scope") : 60119;

      function O(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case m:
              switch (e = e.type) {
                case S:
                case E:
                case g:
                case v:
                case b:
                case P:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case C:
                    case T:
                    case $:
                    case x:
                    case w:
                      return e;
                    default:
                      return t
                  }
              }
            case h:
              return t
          }
        }
      }

      function L(e) {
        return O(e) === E
      }
      var G = {
          AsyncMode: S,
          ConcurrentMode: E,
          ContextConsumer: C,
          ContextProvider: w,
          Element: m,
          ForwardRef: T,
          Fragment: g,
          Lazy: $,
          Memo: x,
          Portal: h,
          Profiler: v,
          StrictMode: b,
          Suspense: P,
          isAsyncMode: function(e) {
            return L(e) || O(e) === S
          },
          isConcurrentMode: L,
          isContextConsumer: function(e) {
            return O(e) === C
          },
          isContextProvider: function(e) {
            return O(e) === w
          },
          isElement: function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === m
          },
          isForwardRef: function(e) {
            return O(e) === T
          },
          isFragment: function(e) {
            return O(e) === g
          },
          isLazy: function(e) {
            return O(e) === $
          },
          isMemo: function(e) {
            return O(e) === x
          },
          isPortal: function(e) {
            return O(e) === h
          },
          isProfiler: function(e) {
            return O(e) === v
          },
          isStrictMode: function(e) {
            return O(e) === b
          },
          isSuspense: function(e) {
            return O(e) === P
          },
          isValidElementType: function(e) {
            return "string" == typeof e || "function" == typeof e || e === g || e === E || e === v || e === b || e === P || e === R || "object" == typeof e && null !== e && (e.$$typeof === $ || e.$$typeof === x || e.$$typeof === w || e.$$typeof === C || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === M || e.$$typeof === N || e.$$typeof === k)
          },
          typeOf: O
        },
        j = p(function(e, t) {}),
        A = (j.AsyncMode, j.ConcurrentMode, j.ContextConsumer, j.ContextProvider, j.Element, j.ForwardRef, j.Fragment, j.Lazy, j.Memo, j.Portal, j.Profiler, j.StrictMode, j.Suspense, j.isAsyncMode, j.isConcurrentMode, j.isContextConsumer, j.isContextProvider, j.isElement, j.isForwardRef, j.isFragment, j.isLazy, j.isMemo, j.isPortal, j.isProfiler, j.isStrictMode, j.isSuspense, j.isValidElementType, j.typeOf, p(function(e) {
          e.exports = G
        })),
        F = {
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
        I = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        D = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        z = {};

      function V(e) {
        return A.isMemo(e) ? D : z[e.$$typeof] || F
      }
      z[A.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, z[A.Memo] = D;
      var q = Object.defineProperty,
        B = Object.getOwnPropertyNames,
        J = Object.getOwnPropertySymbols,
        K = Object.getOwnPropertyDescriptor,
        Y = Object.getPrototypeOf,
        H = Object.prototype,
        Q = function e(t, r, n) {
          if ("string" != typeof r) {
            if (H) {
              var o = Y(r);
              o && o !== H && e(t, o, n)
            }
            var a = B(r);
            J && (a = a.concat(J(r)));
            for (var c = V(t), i = V(r), s = 0; s < a.length; ++s) {
              var u = a[s];
              if (!(I[u] || n && n[u] || i && i[u] || c && c[u])) {
                var l = K(r, u);
                try {
                  q(t, u, l)
                } catch (e) {}
              }
            }
          }
          return t
        },
        U = function(e) {
          var t = function(t) {
            return o.createElement(u, null, function(r) {
              return o.createElement(e, c({}, t, {
                googleReCaptchaProps: r
              }))
            })
          };
          return t.displayName = "withGoogleReCaptcha(" + (e.displayName || e.name || "Component") + ")", Q(t, e), t
        }
    }
  }
]);