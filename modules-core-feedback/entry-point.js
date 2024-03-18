/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b140928-b37f-49c4-9e7a-694f2f0cf3cc", e._sentryDebugIdIdentifier = "sentry-dbid-6b140928-b37f-49c4-9e7a-694f2f0cf3cc")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-feedback",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-sc-user", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, u, i, s, c = {
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
                m = {};

              function b(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
              }

              function v() {}

              function g(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || y
              }
              b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
              }, b.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
              }, v.prototype = b.prototype;
              var _ = g.prototype = new v;
              _.constructor = g, h(_, b.prototype), _.isPureReactComponent = !0;
              var w = Array.isArray,
                k = Object.prototype.hasOwnProperty,
                S = {
                  current: null
                },
                E = {
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
                  for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) k.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
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
                  _owner: S.current
                }
              }

              function j(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var C = /\/+/g;

              function O(e, t) {
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

              function R(e, t, o, a, u) {
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
                if (s) return u = u(s = e), e = "" === a ? "." + O(s, 0) : a, w(u) ? (o = "", null != e && (o = e.replace(C, "$&/") + "/"), R(u, t, o, "", (function(e) {
                  return e
                }))) : null != u && (j(u) && (u = function(e, t) {
                  return {
                    $$typeof: r,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  }
                }(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(C, "$&/") + "/") + e)), t.push(u)), 1;
                if (s = 0, a = "" === a ? "." : a + ":", w(e))
                  for (var c = 0; c < e.length; c++) {
                    var f = a + O(i = e[c], c);
                    s += R(i, t, o, f, u)
                  } else if (f = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof f)
                    for (e = f.call(e), c = 0; !(i = e.next()).done;) s += R(i = i.value, t, o, f = a + O(i, c++), u);
                  else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
              }

              function $(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return R(e, n, "", "", (function(e) {
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
                  ReactCurrentOwner: S
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
                  if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = b, t.Fragment = o, t.Profiler = u, t.PureComponent = g, t.StrictMode = a, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                  a = e.key,
                  u = e.ref,
                  i = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (u = t.ref, i = S.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                  for (c in t) k.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
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
              }, t.createElement = x, t.createFactory = function(e) {
                var t = x.bind(null, e);
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
              }, t.isValidElement = j, t.lazy = function(e) {
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
                  $$typeof: l,
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
                  "./index": () => r.e(768).then((() => () => r(768)))
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
            856: e => {
              "use strict";
              e.exports = r
            },
            864: e => {
              "use strict";
              e.exports = n
            },
            128: e => {
              "use strict";
              e.exports = o
            },
            344: e => {
              "use strict";
              e.exports = a
            }
          },
          f = {};

        function l(e) {
          var t = f[e];
          if (void 0 !== t) return t.exports;
          var r = f[e] = {
            exports: {}
          };
          return c[e](r, r.exports, l), r.exports
        }
        return l.m = c, l.c = f, l.y = t, l.d = (e, t) => {
          for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, r) => (l.f[r](e, t), t)), [])), l.u = e => "js/0b675995da06201c7ee6cb830817304f.js", l.miniCssF = e => "css/a5bc77306b0111244083fff86dbe2e83.css", l.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, u = "@rockstargames/modules-core-feedback:", l.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, i;
            if (void 0 !== n)
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var f = s[c];
                if (f.getAttribute("src") == t || f.getAttribute("data-webpack") == u + n) {
                  a = f;
                  break
                }
              }
            a || (i = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, l.nc && a.setAttribute("nonce", l.nc), a.setAttribute("data-webpack", u + n), a.src = t), e[t] = [r];
            var d = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), i && document.head.appendChild(a)
          }
        }, l.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i = {
          768: [668, 836, 52, 792]
        }, s = {
          52: ["default", "./index", 864],
          668: ["default", "./index", 856],
          792: ["default", "./index", 344],
          836: ["default", "./index", 128]
        }, l.f.remotes = (e, t) => {
          l.o(i, e) && i[e].forEach((e => {
            var r = l.R;
            r || (r = []);
            var n = s[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), l.m[e] = () => {
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
                u = (e, t, o) => a(t.get, n[1], r, 0, i, o),
                i = t => {
                  n.p = 1, l.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(l, n[2], 0, 0, ((e, t, r) => e ? a(l.I, n[0], 0, e, u, r) : o()), 1)
            }
          }))
        }, (() => {
          l.S = {};
          var e = {},
            t = {};
          l.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              l.o(l.S, r) || (l.S[r] = {});
              var a = l.S[r],
                u = "@rockstargames/modules-core-feedback",
                i = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = l(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(l.S[r], n);
                    if (o.then) return s.push(o.then(a, t));
                    var u = a(o);
                    if (u && u.then) return s.push(u.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (((e, t, r, n) => {
                var o = a[e] = a[e] || {},
                  i = o[t];
                (!i || !i.loaded && (0 != !i.eager || u > i.from)) && (o[t] = {
                  get: () => () => l(188),
                  from: u,
                  eager: !0
                })
              })("react", "18.2.0"), i(856), i(864), i(128), i(344)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          l.g.importScripts && (e = l.g.location + "");
          var t = l.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
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
              var a = l.I(t);
              return a && a.then ? a.then(e.bind(e, t, l.S[t], r, n, o)) : e(t, l.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var u = t && l.o(t, n) && r(t, n, o);
              return u ? (e => (e.loaded = 1, e.get()))(u) : a()
            })),
            o = {},
            a = {
              200: () => n("default", "react", [1, 18, 2, 0], (() => () => l(188)))
            },
            u = {
              768: [200]
            },
            i = {};
          l.f.consumes = (e, t) => {
            l.o(u, e) && u[e].forEach((e => {
              if (l.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, l.m[e] = r => {
                    delete l.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var n = t => {
                  delete o[e], l.m[e] = r => {
                    throw delete l.c[e], t
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
              832: 0
            };
            l.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                768: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = l.miniCssF(e),
                  o = l.p + n;
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
            832: 0
          };
          l.f.j = (t, r) => {
            var n = l.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else {
                var o = new Promise(((r, o) => n = e[t] = [r, o]));
                r.push(n[2] = o);
                var a = l.p + l.u(t),
                  u = new Error;
                l.l(a, (r => {
                  if (l.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                for (n in u) l.o(u, n) && (l.m[n] = u[n]);
                i && i(l)
              }
              for (t && t(r); s < a.length; s++) o = a[s], l.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_feedback = self.webpackChunk_rockstargames_modules_core_feedback || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), l(296), l(461)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map