try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8d0a4d90-861e-48fc-9e26-77a08e9b3d97", e._sentryDebugIdIdentifier = "sentry-dbid-8d0a4d90-861e-48fc-9e26-77a08e9b3d97")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-careers",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [1301, 3682], {
    1301: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        GoogleReCaptcha: () => m,
        GoogleReCaptchaConsumer: () => d,
        GoogleReCaptchaContext: () => f,
        GoogleReCaptchaProvider: () => p,
        useGoogleReCaptcha: () => y,
        withGoogleReCaptcha: () => Z
      });
      var n, o = r(2229),
        a = r.n(o),
        c = r(7144),
        i = function() {
          return i = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, i.apply(this, arguments)
        },
        s = function(e, t) {
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
        u = function(e) {
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
        d = f.Consumer;

      function p(e) {
        var t = e.reCaptchaKey,
          r = e.useEnterprise,
          c = void 0 !== r && r,
          d = e.useRecaptchaNet,
          p = void 0 !== d && d,
          y = e.scriptProps,
          m = e.language,
          h = e.container,
          g = e.children,
          b = (0, o.useState)(null),
          v = b[0],
          w = b[1],
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
              }, u({
                render: (null == h ? void 0 : h.element) ? "explicit" : t,
                onLoadCallbackName: r,
                useEnterprise: c,
                useRecaptchaNet: p,
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
                s(e, null == h ? void 0 : h.element)
              }
          }
          l("<GoogleReCaptchaProvider /> recaptcha key not provided")
        }), [c, p, S, E, m, t, null == h ? void 0 : h.element]);
        var T = (0, o.useCallback)((function(e) {
            if (!v || !v.execute) throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");
            return v.execute(C.current, {
              action: e
            })
          }), [v, C]),
          P = (0, o.useMemo)((function() {
            return {
              executeRecaptcha: v ? T : void 0,
              container: null == h ? void 0 : h.element
            }
          }), [T, v, null == h ? void 0 : h.element]);
        return a().createElement(f.Provider, {
          value: P
        }, g)
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
        var s = i.container;
        return "string" == typeof s ? a().createElement("div", {
          id: s
        }) : null
      }

      function h(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports
      }
      var g = "function" == typeof Symbol && Symbol.for,
        b = g ? Symbol.for("react.element") : 60103,
        v = g ? Symbol.for("react.portal") : 60106,
        w = g ? Symbol.for("react.fragment") : 60107,
        C = g ? Symbol.for("react.strict_mode") : 60108,
        S = g ? Symbol.for("react.profiler") : 60114,
        E = g ? Symbol.for("react.provider") : 60109,
        T = g ? Symbol.for("react.context") : 60110,
        P = g ? Symbol.for("react.async_mode") : 60111,
        R = g ? Symbol.for("react.concurrent_mode") : 60111,
        x = g ? Symbol.for("react.forward_ref") : 60112,
        $ = g ? Symbol.for("react.suspense") : 60113,
        k = g ? Symbol.for("react.suspense_list") : 60120,
        _ = g ? Symbol.for("react.memo") : 60115,
        M = g ? Symbol.for("react.lazy") : 60116,
        N = g ? Symbol.for("react.block") : 60121,
        O = g ? Symbol.for("react.fundamental") : 60117,
        L = g ? Symbol.for("react.responder") : 60118,
        G = g ? Symbol.for("react.scope") : 60119;

      function j(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case b:
              switch (e = e.type) {
                case P:
                case R:
                case w:
                case S:
                case C:
                case $:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case T:
                    case x:
                    case M:
                    case _:
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
        return j(e) === R
      }
      var F = {
          AsyncMode: P,
          ConcurrentMode: R,
          ContextConsumer: T,
          ContextProvider: E,
          Element: b,
          ForwardRef: x,
          Fragment: w,
          Lazy: M,
          Memo: _,
          Portal: v,
          Profiler: S,
          StrictMode: C,
          Suspense: $,
          isAsyncMode: function(e) {
            return A(e) || j(e) === P
          },
          isConcurrentMode: A,
          isContextConsumer: function(e) {
            return j(e) === T
          },
          isContextProvider: function(e) {
            return j(e) === E
          },
          isElement: function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === b
          },
          isForwardRef: function(e) {
            return j(e) === x
          },
          isFragment: function(e) {
            return j(e) === w
          },
          isLazy: function(e) {
            return j(e) === M
          },
          isMemo: function(e) {
            return j(e) === _
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
            return j(e) === $
          },
          isValidElementType: function(e) {
            return "string" == typeof e || "function" == typeof e || e === w || e === R || e === S || e === C || e === $ || e === k || "object" == typeof e && null !== e && (e.$$typeof === M || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === T || e.$$typeof === x || e.$$typeof === O || e.$$typeof === L || e.$$typeof === G || e.$$typeof === N)
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
            for (var c = J(t), i = J(r), s = 0; s < a.length; ++s) {
              var u = a[s];
              if (!(V[u] || n && n[u] || i && i[u] || c && c[u])) {
                var l = Q(r, u);
                try {
                  K(t, u, l)
                } catch (e) {}
              }
            }
          }
          return t
        },
        Z = function(e) {
          var t = function(t) {
            return a().createElement(d, null, (function(r) {
              return a().createElement(e, i({}, t, {
                googleReCaptchaProps: r
              }))
            }))
          };
          return t.displayName = "withGoogleReCaptcha(" + (e.displayName || e.name || "Component") + ")", X(t, e), t
        }
    },
    7144: e => {
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
    }
  }
]);