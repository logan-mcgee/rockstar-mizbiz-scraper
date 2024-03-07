/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "80f989b9-8cd6-4c41-95bc-dc6cc807adeb", e._sentryDebugIdIdentifier = "sentry-dbid-80f989b9-8cd6-4c41-95bc-dc6cc807adeb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-core-sc-user",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, System.register(["@rockstargames/graph-client", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, o, a, u, i = {
            32: (e, t, r) => {
              (0, r(752).G)(1)
            },
            752: (e, t, r) => {
              const n = r(184).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            296: (e, t, r) => {
              r(32)
            },
            184: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var n = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, a = n.length; o !== t && a >= 0;) "/" === n[--a] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var u = n.slice(0, a + 1);
                return r.protocol + "//" + r.host + u
              };
              Number.isInteger
            },
            224: (e, t) => {
              "use strict";
              var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                u = Symbol.for("react.profiler"),
                i = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                f = Symbol.for("react.suspense"),
                l = Symbol.for("react.memo"),
                d = Symbol.for("react.lazy"),
                p = Symbol.iterator,
                y = {
                  isMounted: function() {
                    return !1
                  },
                  enqueueForceUpdate: function() {},
                  enqueueReplaceState: function() {},
                  enqueueSetState: function() {}
                },
                h = Object.assign,
                b = {};

              function m(e, t, r) {
                this.props = e, this.context = t, this.refs = b, this.updater = r || y
              }

              function v() {}

              function g(e, t, r) {
                this.props = e, this.context = t, this.refs = b, this.updater = r || y
              }
              m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
              }, m.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
              }, v.prototype = m.prototype;
              var _ = g.prototype = new v;
              _.constructor = g, h(_, m.prototype), _.isPureReactComponent = !0;
              var w = Array.isArray,
                S = Object.prototype.hasOwnProperty,
                k = {
                  current: null
                },
                E = {
                  key: !0,
                  ref: !0,
                  __self: !0,
                  __source: !0
                };

              function j(e, t, n) {
                var o, a = {},
                  u = null,
                  i = null;
                if (null != t)
                  for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) S.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s) a.children = n;
                else if (1 < s) {
                  for (var c = Array(s), f = 0; f < s; f++) c[f] = arguments[f + 2];
                  a.children = c
                }
                if (e && e.defaultProps)
                  for (o in s = e.defaultProps) void 0 === a[o] && (a[o] = s[o]);
                return {
                  $$typeof: r,
                  type: e,
                  key: u,
                  ref: i,
                  props: a,
                  _owner: k.current
                }
              }

              function x(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var P = /\/+/g;

              function R(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                  var t = {
                    "=": "=0",
                    ":": "=2"
                  };
                  return "$" + e.replace(/[=:]/g, (function(e) {
                    return t[e]
                  }))
                }("" + e.key) : t.toString(36)
              }

              function $(e, t, o, a, u) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var s = !1;
                if (null === e) s = !0;
                else switch (i) {
                  case "string":
                  case "number":
                    s = !0;
                    break;
                  case "object":
                    switch (e.$$typeof) {
                      case r:
                      case n:
                        s = !0
                    }
                }
                if (s) return u = u(s = e), e = "" === a ? "." + R(s, 0) : a, w(u) ? (o = "", null != e && (o = e.replace(P, "$&/") + "/"), $(u, t, o, "", (function(e) {
                  return e
                }))) : null != u && (x(u) && (u = function(e, t) {
                  return {
                    $$typeof: r,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  }
                }(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(P, "$&/") + "/") + e)), t.push(u)), 1;
                if (s = 0, a = "" === a ? "." : a + ":", w(e))
                  for (var c = 0; c < e.length; c++) {
                    var f = a + R(i = e[c], c);
                    s += $(i, t, o, f, u)
                  } else if (f = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof f)
                    for (e = f.call(e), c = 0; !(i = e.next()).done;) s += $(i = i.value, t, o, f = a + R(i, c++), u);
                  else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
              }

              function C(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return $(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function O(e) {
                if (-1 === e._status) {
                  var t = e._result;
                  (t = t()).then((function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                  }), (function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                  })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
              }
              var I = {
                  current: null
                },
                M = {
                  transition: null
                },
                T = {
                  ReactCurrentDispatcher: I,
                  ReactCurrentBatchConfig: M,
                  ReactCurrentOwner: k
                };
              t.Children = {
                map: C,
                forEach: function(e, t, r) {
                  C(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return C(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return C(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = m, t.Fragment = o, t.Profiler = u, t.PureComponent = g, t.StrictMode = a, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                  a = e.key,
                  u = e.ref,
                  i = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (u = t.ref, i = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                  for (c in t) S.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = n;
                else if (1 < c) {
                  s = Array(c);
                  for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                  o.children = s
                }
                return {
                  $$typeof: r,
                  type: e.type,
                  key: a,
                  ref: u,
                  props: o,
                  _owner: i
                }
              }, t.createContext = function(e) {
                return (e = {
                  $$typeof: s,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null
                }).Provider = {
                  $$typeof: i,
                  _context: e
                }, e.Consumer = e
              }, t.createElement = j, t.createFactory = function(e) {
                var t = j.bind(null, e);
                return t.type = e, t
              }, t.createRef = function() {
                return {
                  current: null
                }
              }, t.forwardRef = function(e) {
                return {
                  $$typeof: c,
                  render: e
                }
              }, t.isValidElement = x, t.lazy = function(e) {
                return {
                  $$typeof: d,
                  _payload: {
                    _status: -1,
                    _result: e
                  },
                  _init: O
                }
              }, t.memo = function(e, t) {
                return {
                  $$typeof: l,
                  type: e,
                  compare: void 0 === t ? null : t
                }
              }, t.startTransition = function(e) {
                var t = M.transition;
                M.transition = {};
                try {
                  e()
                } finally {
                  M.transition = t
                }
              }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
              }, t.useCallback = function(e, t) {
                return I.current.useCallback(e, t)
              }, t.useContext = function(e) {
                return I.current.useContext(e)
              }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return I.current.useDeferredValue(e)
              }, t.useEffect = function(e, t) {
                return I.current.useEffect(e, t)
              }, t.useId = function() {
                return I.current.useId()
              }, t.useImperativeHandle = function(e, t, r) {
                return I.current.useImperativeHandle(e, t, r)
              }, t.useInsertionEffect = function(e, t) {
                return I.current.useInsertionEffect(e, t)
              }, t.useLayoutEffect = function(e, t) {
                return I.current.useLayoutEffect(e, t)
              }, t.useMemo = function(e, t) {
                return I.current.useMemo(e, t)
              }, t.useReducer = function(e, t, r) {
                return I.current.useReducer(e, t, r)
              }, t.useRef = function(e) {
                return I.current.useRef(e)
              }, t.useState = function(e) {
                return I.current.useState(e)
              }, t.useSyncExternalStore = function(e, t, r) {
                return I.current.useSyncExternalStore(e, t, r)
              }, t.useTransition = function() {
                return I.current.useTransition()
              }, t.version = "18.2.0"
            },
            188: (e, t, r) => {
              "use strict";
              e.exports = r(224)
            },
            904: (e, t, r) => {
              "use strict";
              var n = {
                  "./components": () => Promise.all([r.e(200), r.e(792), r.e(560), r.e(396), r.e(416)]).then((() => () => r(416))),
                  "./graph/policies": () => Promise.all([r.e(792), r.e(596)]).then((() => () => r(596))),
                  "./hocs": () => Promise.all([r.e(200), r.e(792), r.e(560), r.e(396), r.e(352)]).then((() => () => r(352))),
                  "./index": () => Promise.all([r.e(200), r.e(792), r.e(560)]).then((() => () => r(128))),
                  "./providers": () => Promise.all([r.e(200), r.e(792), r.e(560)]).then((() => () => r(688)))
                },
                o = (e, t) => (r.R = t, t = r.o(n, e) ? n[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                a = (e, t) => {
                  if (r.S) {
                    var n = "default",
                      o = r.S[n];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[n] = e, r.I(n, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => a
              })
            },
            864: e => {
              "use strict";
              e.exports = r
            },
            344: e => {
              "use strict";
              e.exports = n
            }
          },
          s = {};

        function c(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            exports: {}
          };
          return i[e](r, r.exports, c), r.exports
        }
        return c.m = i, c.c = s, c.y = t, c.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return c.d(t, {
            a: t
          }), t
        }, c.d = (e, t) => {
          for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((t, r) => (c.f[r](e, t), t)), [])), c.u = e => "js/" + {
          16: "875870b62b636a974cca1de4c2b4e421",
          200: "d82f7c63473c658549bf4b2b4d96588a",
          352: "98e0e290e5ca1c5d9f64440a3ab472fd",
          396: "f76af718330ad43e00bf195b2ff91300",
          416: "1e1c5ab876a77ed1d5d0ab4b642e8d4a",
          560: "7b803cb6675a58af0d0feec10f71b3ba",
          596: "5b303fc056537915f89940832187a680",
          792: "ca9af4a151f76a0731b69b6b4c0bd1dc",
          848: "fc3ef7d2287680d0523e0e5739d37661",
          988: "ccf5bd6202ac357fb5da5df32a3d81b1"
        } [e] + ".js", c.miniCssF = e => {}, c.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-core-sc-user:", c.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var u, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                var l = s[f];
                if (l.getAttribute("src") == t || l.getAttribute("data-webpack") == o + n) {
                  u = l;
                  break
                }
              }
            u || (i = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.setAttribute("data-webpack", o + n), u.src = t), e[t] = [r];
            var d = (r, n) => {
                u.onerror = u.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((e => e(n))), r) return r(n)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: u
              }), 12e4);
            u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), i && document.head.appendChild(u)
          }
        }, c.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, a = {
          560: [52, 92],
          792: [792]
        }, u = {
          52: ["default", "./index", 864],
          92: ["default", "./gtm", 344],
          792: ["default", "./index", 344]
        }, c.f.remotes = (e, t) => {
          c.o(a, e) && a[e].forEach((e => {
            var r = c.R;
            r || (r = []);
            var n = u[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), c.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, u, i, s) => {
                  try {
                    var c = e(r, a);
                    if (!c || !c.then) return i(c, u, s);
                    var f = c.then((e => i(e, u)), o);
                    if (!s) return f;
                    t.push(n.p = f)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, c.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(c, n[2], 0, 0, ((e, t, r) => e ? a(c.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          c.S = {};
          var e = {},
            t = {};
          c.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              c.o(c.S, r) || (c.S[r] = {});
              var a = c.S[r],
                u = "@rockstargames/modules-core-sc-user",
                i = (e, t, r, n) => {
                  var o = a[e] = a[e] || {},
                    i = o[t];
                  (!i || !i.loaded && (!n != !i.eager ? n : u > i.from)) && (o[t] = {
                    get: r,
                    from: u,
                    eager: !!n
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = c(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(c.S[r], n);
                    if (o.then) return f.push(o.then(a, t));
                    var u = a(o);
                    if (u && u.then) return f.push(u.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (i("@rockstar/fingerprint-js", "1.0.0", (() => c.e(848).then((() => () => c(848))))), i("react-intersection-observer", "9.7.0", (() => Promise.all([c.e(200), c.e(16)]).then((() => () => c(988))))), i("react", "18.2.0", (() => () => c(188)), 1), s(344), s(864)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          c.g.importScripts && (e = c.g.location + "");
          var t = c.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                n = r[1] ? t(r[1]) : [];
              return r[2] && (n.length++, n.push.apply(n, t(r[2]))), r[3] && (n.push([]), n.push.apply(n, t(r[3]))), n
            },
            t = (r, n) => {
              if (0 in r) {
                n = e(n);
                var o = r[0],
                  a = o < 0;
                a && (o = -o - 1);
                for (var u = 0, i = 1, s = !0;; i++, u++) {
                  var c, f, l = i < r.length ? (typeof r[i])[0] : "";
                  if (u >= n.length || "o" == (f = (typeof(c = n[u]))[0])) return !s || ("u" == l ? i > o && !a : "" == l != a);
                  if ("u" == f) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == f)
                      if (i <= o) {
                        if (c != r[i]) return !1
                      } else {
                        if (a ? c > r[i] : c < r[i]) return !1;
                        c != r[i] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (a || i <= o) return !1;
                    s = !1, i--
                  } else {
                    if (i <= o || f < l != a) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, i--)
                }
              }
              var d = [],
                p = d.pop.bind(d);
              for (u = 1; u < r.length; u++) {
                var y = r[u];
                d.push(1 == y ? p() | p() : 2 == y ? p() & p() : y ? t(y, n) : !p())
              }
              return !!p()
            },
            r = (r, n, o) => {
              var a = r[n];
              return (n = Object.keys(a).reduce(((r, n) => !t(o, n) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var n = 0;;) {
                  if (n >= t.length) return n < r.length && "u" != (typeof r[n])[0];
                  var o = t[n],
                    a = (typeof o)[0];
                  if (n >= r.length) return "u" == a;
                  var u = r[n],
                    i = (typeof u)[0];
                  if (a != i) return "o" == a && "n" == i || "s" == i || "u" == a;
                  if ("o" != a && "u" != a && o != u) return o < u;
                  n++
                }
              })(r, n) ? r : n), 0)) && a[n]
            },
            n = (e => function(t, r, n, o) {
              var a = c.I(t);
              return a && a.then ? a.then(e.bind(e, t, c.S[t], r, n, o)) : e(t, c.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var u = t && c.o(t, n) && r(t, n, o);
              return u ? (e => (e.loaded = 1, e.get()))(u) : a()
            })),
            o = {},
            a = {
              200: () => n("default", "react", [1, 18, 2, 0], (() => () => c(188))),
              468: () => n("default", "@rockstar/fingerprint-js", [1, 1, 0, 0], (() => c.e(848).then((() => () => c(848))))),
              396: () => n("default", "react-intersection-observer", [1, 9, 5, 3], (() => c.e(988).then((() => () => c(988)))))
            },
            u = {
              200: [200],
              396: [396],
              560: [468]
            },
            i = {};
          c.f.consumes = (e, t) => {
            c.o(u, e) && u[e].forEach((e => {
              if (c.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, c.m[e] = r => {
                    delete c.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var n = t => {
                  delete o[e], c.m[e] = r => {
                    throw delete c.c[e], t
                  }
                };
                try {
                  var u = a[e]();
                  u.then ? t.push(o[e] = u.then(r).catch(n)) : r(u)
                } catch (e) {
                  n(e)
                }
              }
            }))
          }
        })(), (() => {
          var e = {
            126: 0
          };
          c.f.j = (t, r) => {
            var n = c.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(200|396|792)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => n = e[t] = [r, o]));
              r.push(n[2] = o);
              var a = c.p + c.u(t),
                u = new Error;
              c.l(a, (r => {
                if (c.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", u.name = "ChunkLoadError", u.type = o, u.request = a, n[1](u)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var n, o, a = r[0],
                u = r[1],
                i = r[2],
                s = 0;
              if (a.some((t => 0 !== e[t]))) {
                for (n in u) c.o(u, n) && (c.m[n] = u[n]);
                i && i(c)
              }
              for (t && t(r); s < a.length; s++) o = a[s], c.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_sc_user = self.webpackChunk_rockstargames_modules_core_sc_user || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), c(296), c(904)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map