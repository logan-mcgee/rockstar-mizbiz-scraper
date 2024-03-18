/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed87f75d-1f19-40ef-afee-e573a9fa7ad2", e._sentryDebugIdIdentifier = "sentry-dbid-ed87f75d-1f19-40ef-afee-e573a9fa7ad2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-agegate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, System.register(["@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, t) {
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
                f = Symbol.for("react.forward_ref"),
                l = Symbol.for("react.suspense"),
                c = Symbol.for("react.memo"),
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
                m = {};

              function v(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
              }

              function b() {}

              function g(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
              }
              v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
              }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
              }, b.prototype = v.prototype;
              var _ = g.prototype = new b;
              _.constructor = g, h(_, v.prototype), _.isPureReactComponent = !0;
              var w = Array.isArray,
                S = Object.prototype.hasOwnProperty,
                E = {
                  current: null
                },
                k = {
                  key: !0,
                  ref: !0,
                  __self: !0,
                  __source: !0
                };

              function x(e, t, n) {
                var o, a = {},
                  u = null,
                  i = null;
                if (null != t)
                  for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) S.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s) a.children = n;
                else if (1 < s) {
                  for (var f = Array(s), l = 0; l < s; l++) f[l] = arguments[l + 2];
                  a.children = f
                }
                if (e && e.defaultProps)
                  for (o in s = e.defaultProps) void 0 === a[o] && (a[o] = s[o]);
                return {
                  $$typeof: r,
                  type: e,
                  key: u,
                  ref: i,
                  props: a,
                  _owner: E.current
                }
              }

              function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var j = /\/+/g;

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

              function O(e, t, o, a, u) {
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
                if (s) return u = u(s = e), e = "" === a ? "." + R(s, 0) : a, w(u) ? (o = "", null != e && (o = e.replace(j, "$&/") + "/"), O(u, t, o, "", (function(e) {
                  return e
                }))) : null != u && (C(u) && (u = function(e, t) {
                  return {
                    $$typeof: r,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  }
                }(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(j, "$&/") + "/") + e)), t.push(u)), 1;
                if (s = 0, a = "" === a ? "." : a + ":", w(e))
                  for (var f = 0; f < e.length; f++) {
                    var l = a + R(i = e[f], f);
                    s += O(i, t, o, l, u)
                  } else if (l = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof l)
                    for (e = l.call(e), f = 0; !(i = e.next()).done;) s += O(i = i.value, t, o, l = a + R(i, f++), u);
                  else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
              }

              function $(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return O(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function P(e) {
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
                T = {
                  transition: null
                },
                A = {
                  ReactCurrentDispatcher: I,
                  ReactCurrentBatchConfig: T,
                  ReactCurrentOwner: E
                };
              t.Children = {
                map: $,
                forEach: function(e, t, r) {
                  $(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return $(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return $(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = v, t.Fragment = o, t.Profiler = u, t.PureComponent = g, t.StrictMode = a, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                  a = e.key,
                  u = e.ref,
                  i = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (u = t.ref, i = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                  for (f in t) S.call(t, f) && !k.hasOwnProperty(f) && (o[f] = void 0 === t[f] && void 0 !== s ? s[f] : t[f])
                }
                var f = arguments.length - 2;
                if (1 === f) o.children = n;
                else if (1 < f) {
                  s = Array(f);
                  for (var l = 0; l < f; l++) s[l] = arguments[l + 2];
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
              }, t.createElement = x, t.createFactory = function(e) {
                var t = x.bind(null, e);
                return t.type = e, t
              }, t.createRef = function() {
                return {
                  current: null
                }
              }, t.forwardRef = function(e) {
                return {
                  $$typeof: f,
                  render: e
                }
              }, t.isValidElement = C, t.lazy = function(e) {
                return {
                  $$typeof: d,
                  _payload: {
                    _status: -1,
                    _result: e
                  },
                  _init: P
                }
              }, t.memo = function(e, t) {
                return {
                  $$typeof: c,
                  type: e,
                  compare: void 0 === t ? null : t
                }
              }, t.startTransition = function(e) {
                var t = T.transition;
                T.transition = {};
                try {
                  e()
                } finally {
                  T.transition = t
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
            461: (e, t, r) => {
              "use strict";
              var n = {
                  "./index": () => r.e(520).then((() => () => r(520)))
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
            128: e => {
              "use strict";
              e.exports = r
            },
            344: e => {
              "use strict";
              e.exports = n
            }
          },
          s = {};

        function f(e) {
          var t = s[e];
          if (void 0 !== t) return t.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, f), r.loaded = !0, r.exports
        }
        return f.m = i, f.c = s, f.y = t, f.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return f.d(t, {
            a: t
          }), t
        }, f.d = (e, t) => {
          for (var r in t) f.o(t, r) && !f.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, f.f = {}, f.e = e => Promise.all(Object.keys(f.f).reduce(((t, r) => (f.f[r](e, t), t)), [])), f.u = e => "js/" + {
          284: "58edd69ce7806cadd31b795ce1ecaa43",
          520: "12947a600f619ac09f8306728237d9d1",
          740: "738ff9c33d6db74a58a4d284f0d3699f"
        } [e] + ".js", f.miniCssF = e => "css/2f17795c279d25f550bef076e83114f5.css", f.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), f.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, o = "@rockstargames/modules-core-agegate:", f.l = (t, r, n, a) => {
          if (e[t]) e[t].push(r);
          else {
            var u, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                var c = s[l];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == o + n) {
                  u = c;
                  break
                }
              }
            u || (i = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, f.nc && u.setAttribute("nonce", f.nc), u.setAttribute("data-webpack", o + n), u.src = t), e[t] = [r];
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
        }, f.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, f.nmd = e => (e.paths = [], e.children || (e.children = []), e), a = {
          520: [792, 836]
        }, u = {
          792: ["default", "./index", 344],
          836: ["default", "./index", 128]
        }, f.f.remotes = (e, t) => {
          f.o(a, e) && a[e].forEach((e => {
            var r = f.R;
            r || (r = []);
            var n = u[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), f.m[e] = () => {
                    throw t
                  }, n.p = 0
                },
                a = (e, r, a, u, i, s) => {
                  try {
                    var f = e(r, a);
                    if (!f || !f.then) return i(f, u, s);
                    var l = f.then((e => i(e, u)), o);
                    if (!s) return l;
                    t.push(n.p = l)
                  } catch (e) {
                    o(e)
                  }
                },
                i = (e, t, o) => a(t.get, n[1], r, 0, s, o),
                s = t => {
                  n.p = 1, f.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(f, n[2], 0, 0, ((e, t, r) => e ? a(f.I, n[0], 0, e, i, r) : o()), 1)
            }
          }))
        }, (() => {
          f.S = {};
          var e = {},
            t = {};
          f.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              f.o(f.S, r) || (f.S[r] = {});
              var a = f.S[r],
                u = "@rockstargames/modules-core-agegate",
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
                    var o = f(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(f.S[r], n);
                    if (o.then) return l.push(o.then(a, t));
                    var u = a(o);
                    if (u && u.then) return l.push(u.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                l = [];
              return "default" === r && (i("moment", "2.29.4", (() => Promise.all([f.e(284), f.e(740)]).then((() => () => f(284))))), i("react", "18.2.0", (() => () => f(188)), 1), s(128), s(344)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          f.g.importScripts && (e = f.g.location + "");
          var t = f.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), f.p = e
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
                  var f, l, c = i < r.length ? (typeof r[i])[0] : "";
                  if (u >= n.length || "o" == (l = (typeof(f = n[u]))[0])) return !s || ("u" == c ? i > o && !a : "" == c != a);
                  if ("u" == l) {
                    if (!s || "u" != c) return !1
                  } else if (s)
                    if (c == l)
                      if (i <= o) {
                        if (f != r[i]) return !1
                      } else {
                        if (a ? f > r[i] : f < r[i]) return !1;
                        f != r[i] && (s = !1)
                      }
                  else if ("s" != c && "n" != c) {
                    if (a || i <= o) return !1;
                    s = !1, i--
                  } else {
                    if (i <= o || l < c != a) return !1;
                    s = !1
                  } else "s" != c && "n" != c && (s = !1, i--)
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
              var a = f.I(t);
              return a && a.then ? a.then(e.bind(e, t, f.S[t], r, n, o)) : e(t, f.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var u = t && f.o(t, n) && r(t, n, o);
              return u ? (e => (e.loaded = 1, e.get()))(u) : a()
            })),
            o = {},
            a = {
              200: () => n("default", "react", [1, 18, 2, 0], (() => () => f(188))),
              708: () => n("default", "moment", [1, 2, 29, 4], (() => Promise.all([f.e(284), f.e(740)]).then((() => () => f(284)))))
            },
            u = {
              520: [200, 708]
            },
            i = {};
          f.f.consumes = (e, t) => {
            f.o(u, e) && u[e].forEach((e => {
              if (f.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, f.m[e] = r => {
                    delete f.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var n = t => {
                  delete o[e], f.m[e] = r => {
                    throw delete f.c[e], t
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
          if ("undefined" != typeof document) {
            var e = {
              388: 0
            };
            f.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                520: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = f.miniCssF(e),
                  o = f.p + n;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                      var o = (u = r[n]).getAttribute("data-href") || u.getAttribute("href");
                      if ("stylesheet" === u.rel && (o === e || o === t)) return u
                    }
                    var a = document.getElementsByTagName("style");
                    for (n = 0; n < a.length; n++) {
                      var u;
                      if ((o = (u = a[n]).getAttribute("data-href")) === e || o === t) return u
                    }
                  })(n, o)) return t();
                ((e, t, r, n, o) => {
                  var a = document.createElement("link");
                  a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = r => {
                    if (a.onerror = a.onload = null, "load" === r.type) n();
                    else {
                      var u = r && ("load" === r.type ? "missing" : r.type),
                        i = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = u, s.request = i, a.parentNode && a.parentNode.removeChild(a), o(s)
                    }
                  }, a.href = t, document.head.appendChild(a)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            388: 0
          };
          f.f.j = (t, r) => {
            var n = f.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = f.p + f.u(t),
                  u = new Error;
                f.l(a, (r => {
                  if (f.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                for (n in u) f.o(u, n) && (f.m[n] = u[n]);
                i && i(f)
              }
              for (t && t(r); s < a.length; s++) o = a[s], f.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_agegate = self.webpackChunk_rockstargames_modules_core_agegate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), f(296), f(461)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map