/*! For license information please see remote-entry.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da370b7b-9e90-4c30-a4ea-4e10dec5b700", e._sentryDebugIdIdentifier = "sentry-dbid-da370b7b-9e90-4c30-a4ea-4e10dec5b700")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, System.register(["@rockstargames/components", "@rockstargames/graph-client", "@rockstargames/modules-core-card", "@rockstargames/modules-core-carousel", "@rockstargames/modules-core-engagement", "@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-group-of-items", "@rockstargames/modules-core-videoplayer", "@rockstargames/modules-sc-ugc-spotlight", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    n = {},
    o = {},
    a = {},
    u = {},
    i = {},
    s = {},
    c = {},
    f = {},
    l = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(i, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(f, "__esModule", {
    value: !0
  }), Object.defineProperty(l, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
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
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        u[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        i[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        s[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        f[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        l[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, p, h, y, b = {
            3032: (e, t, r) => {
              (0, r(8752).G)(1)
            },
            8752: (e, t, r) => {
              const n = r(2184).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = n(r.y.meta.url, e)
              }
            },
            9296: (e, t, r) => {
              r(3032)
            },
            2184: (e, t, r) => {
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
            2224: (e, t) => {
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
                h = {
                  isMounted: function() {
                    return !1
                  },
                  enqueueForceUpdate: function() {},
                  enqueueReplaceState: function() {},
                  enqueueSetState: function() {}
                },
                y = Object.assign,
                b = {};

              function m(e, t, r) {
                this.props = e, this.context = t, this.refs = b, this.updater = r || h
              }

              function v() {}

              function g(e, t, r) {
                this.props = e, this.context = t, this.refs = b, this.updater = r || h
              }
              m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
              }, m.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
              }, v.prototype = m.prototype;
              var _ = g.prototype = new v;
              _.constructor = g, y(_, m.prototype), _.isPureReactComponent = !0;
              var w = Array.isArray,
                k = Object.prototype.hasOwnProperty,
                E = {
                  current: null
                },
                S = {
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
                  for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) k.call(t, o) && !S.hasOwnProperty(o) && (a[o] = t[o]);
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
                  _owner: E.current
                }
              }

              function j(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
              }
              var O = /\/+/g;

              function P(e, t) {
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

              function C(e, t, o, a, u) {
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
                if (s) return u = u(s = e), e = "" === a ? "." + P(s, 0) : a, w(u) ? (o = "", null != e && (o = e.replace(O, "$&/") + "/"), C(u, t, o, "", (function(e) {
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
                }(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(O, "$&/") + "/") + e)), t.push(u)), 1;
                if (s = 0, a = "" === a ? "." : a + ":", w(e))
                  for (var c = 0; c < e.length; c++) {
                    var f = a + P(i = e[c], c);
                    s += C(i, t, o, f, u)
                  } else if (f = function(e) {
                      return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                    }(e), "function" == typeof f)
                    for (e = f.call(e), c = 0; !(i = e.next()).done;) s += C(i = i.value, t, o, f = a + P(i, c++), u);
                  else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
              }

              function R(e, t, r) {
                if (null == e) return e;
                var n = [],
                  o = 0;
                return C(e, n, "", "", (function(e) {
                  return t.call(r, e, o++)
                })), n
              }

              function $(e) {
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
              var M = {
                  current: null
                },
                T = {
                  transition: null
                },
                I = {
                  ReactCurrentDispatcher: M,
                  ReactCurrentBatchConfig: T,
                  ReactCurrentOwner: E
                };
              t.Children = {
                map: R,
                forEach: function(e, t, r) {
                  R(e, (function() {
                    t.apply(this, arguments)
                  }), r)
                },
                count: function(e) {
                  var t = 0;
                  return R(e, (function() {
                    t++
                  })), t
                },
                toArray: function(e) {
                  return R(e, (function(e) {
                    return e
                  })) || []
                },
                only: function(e) {
                  if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
                  return e
                }
              }, t.Component = m, t.Fragment = o, t.Profiler = u, t.PureComponent = g, t.StrictMode = a, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = y({}, e.props),
                  a = e.key,
                  u = e.ref,
                  i = e._owner;
                if (null != t) {
                  if (void 0 !== t.ref && (u = t.ref, i = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                  for (c in t) k.call(t, c) && !S.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
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
                  _init: $
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
                return M.current.useCallback(e, t)
              }, t.useContext = function(e) {
                return M.current.useContext(e)
              }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return M.current.useDeferredValue(e)
              }, t.useEffect = function(e, t) {
                return M.current.useEffect(e, t)
              }, t.useId = function() {
                return M.current.useId()
              }, t.useImperativeHandle = function(e, t, r) {
                return M.current.useImperativeHandle(e, t, r)
              }, t.useInsertionEffect = function(e, t) {
                return M.current.useInsertionEffect(e, t)
              }, t.useLayoutEffect = function(e, t) {
                return M.current.useLayoutEffect(e, t)
              }, t.useMemo = function(e, t) {
                return M.current.useMemo(e, t)
              }, t.useReducer = function(e, t, r) {
                return M.current.useReducer(e, t, r)
              }, t.useRef = function(e) {
                return M.current.useRef(e)
              }, t.useState = function(e) {
                return M.current.useState(e)
              }, t.useSyncExternalStore = function(e, t, r) {
                return M.current.useSyncExternalStore(e, t, r)
              }, t.useTransition = function() {
                return M.current.useTransition()
              }, t.version = "18.2.0"
            },
            8188: (e, t, r) => {
              "use strict";
              e.exports = r(2224)
            },
            5468: (e, t, r) => {
              "use strict";
              var n = {
                  "./NewswireArticle": () => Promise.all([r.e(200), r.e(668), r.e(816), r.e(208), r.e(556), r.e(850), r.e(844)]).then((() => () => r(6844))),
                  "./NewswireTitle": () => Promise.all([r.e(200), r.e(668), r.e(816), r.e(650)]).then((() => () => r(9650))),
                  "./components": () => Promise.all([r.e(200), r.e(668), r.e(816), r.e(208)]).then((() => () => r(9208))),
                  "./index": () => Promise.all([r.e(200), r.e(668), r.e(816), r.e(208), r.e(556), r.e(896)]).then((() => () => r(4896))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(668), r.e(396)]).then((() => () => r(396))),
                  "./types": () => Promise.all([r.e(200), r.e(668), r.e(816), r.e(208), r.e(556), r.e(850), r.e(620)]).then((() => () => r(8620)))
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
            8856: e => {
              "use strict";
              e.exports = r
            },
            3864: e => {
              "use strict";
              e.exports = n
            },
            7672: e => {
              "use strict";
              e.exports = o
            },
            3096: e => {
              "use strict";
              e.exports = a
            },
            8542: e => {
              "use strict";
              e.exports = u
            },
            5576: e => {
              "use strict";
              e.exports = i
            },
            72: e => {
              "use strict";
              e.exports = s
            },
            4472: e => {
              "use strict";
              e.exports = c
            },
            2354: e => {
              "use strict";
              e.exports = f
            },
            8428: e => {
              "use strict";
              e.exports = l
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          m = {};

        function v(e) {
          var t = m[e];
          if (void 0 !== t) return t.exports;
          var r = m[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, v), r.loaded = !0, r.exports
        }
        return v.m = b, v.c = m, v.y = t, v.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return v.d(t, {
            a: t
          }), t
        }, v.d = (e, t) => {
          for (var r in t) v.o(t, r) && !v.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, v.f = {}, v.e = e => Promise.all(Object.keys(v.f).reduce(((t, r) => (v.f[r](e, t), t)), [])), v.u = e => "js/" + {
          200: "e3b81e2af68561569a63050df639ebf4",
          208: "3cdf907d62e656fd8cc3ecfecef19849",
          272: "8b843c03464fda950845a05160bcd5aa",
          336: "1c7fcadadc9f06feabf28c0808095db4",
          396: "7714e4c8c89992b153b1dd99226bf3ae",
          448: "9b3f5e69326cd51412dfe77a0308fcea",
          556: "1e3c8d3117cc76fb780db8e27ac30372",
          620: "91e03848814baa40a5b248ef02d19def",
          648: "cba3f3d1cf8b8adf939e2e5f73fa7f77",
          650: "1e16900c5711388814fde5135f7b5561",
          668: "4af1d3749e076c0cd0614f618d761f79",
          816: "5b6467f1c20d6ccbf9cef623d13826b7",
          844: "dbb8b6b81bc894b4f5b8cfed842dac4a",
          850: "abe1738d2cb195433785813cb48d4250",
          896: "364fad9c3163bca689af115647716745"
        } [e] + ".js", v.miniCssF = e => "css/" + {
          208: "e39026cde64295f4bb1e51bac55c71e3",
          650: "38cfc95a9203c101bd489ff5c88bc10d",
          850: "39ff1dafce4f00ed5e4e8d89a4e075ae"
        } [e] + ".css", v.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, p = "@rockstargames/modules-core-newswire-article:", v.l = (t, r, n, o) => {
          if (e[t]) e[t].push(r);
          else {
            var a, u;
            if (void 0 !== n)
              for (var i = document.getElementsByTagName("script"), s = 0; s < i.length; s++) {
                var c = i[s];
                if (c.getAttribute("src") == t || c.getAttribute("data-webpack") == p + n) {
                  a = c;
                  break
                }
              }
            a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, v.nc && a.setAttribute("nonce", v.nc), a.setAttribute("data-webpack", p + n), a.src = t), e[t] = [r];
            var f = (r, n) => {
                a.onerror = a.onload = null, clearTimeout(l);
                var o = e[t];
                if (delete e[t], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e => e(n))), r) return r(n)
              },
              l = setTimeout(f.bind(null, void 0, {
                type: "timeout",
                target: a
              }), 12e4);
            a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), u && document.head.appendChild(a)
          }
        }, v.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, v.nmd = e => (e.paths = [], e.children || (e.children = []), e), h = {
          208: [2112, 3052, 3061, 4644, 7047, 8460, 9812],
          396: [1736, 4344, 5356, 5652, 7256, 7368, 9468, 9572],
          556: [4316, 8508],
          668: [1668],
          816: [1740, 5792],
          844: [3784, 7715]
        }, y = {
          1668: ["default", "./index", 8856],
          1736: ["default", "./tinaBlockTemplates", 5576],
          1740: ["default", "./index", 8428],
          2112: ["default", "./index", 8542],
          3052: ["default", "./index", 3864],
          3061: ["default", "./hooks", 9344],
          3784: ["default", "./operations/fragments/newswire-post.graphql", 3864],
          4316: ["default", "./index", 3096],
          4344: ["default", "./tina", 4472],
          4644: ["default", "./index", 4472],
          5356: ["default", "./helpers", 8428],
          5652: ["default", "./helpers/uploads", 8428],
          5792: ["default", "./index", 9344],
          7047: ["default", "./components", 7672],
          7256: ["default", "./tina", 5576],
          7368: ["default", "./tinaBlockTemplates", 8856],
          7715: ["default", "./providers", 9344],
          8460: ["default", "./index", 5576],
          8508: ["default", "./index", 2354],
          9468: ["default", "./properties", 8428],
          9572: ["default", "./tinaBlockTemplates", 4472],
          9812: ["default", "./index", 72]
        }, v.f.remotes = (e, t) => {
          v.o(h, e) && h[e].forEach((e => {
            var r = v.R;
            r || (r = []);
            var n = y[e];
            if (!(r.indexOf(n) >= 0)) {
              if (r.push(n), n.p) return t.push(n.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + n[1] + '" from ' + n[2]), v.m[e] = () => {
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
                  n.p = 1, v.m[e] = e => {
                    e.exports = t()
                  }
                };
              a(v, n[2], 0, 0, ((e, t, r) => e ? a(v.I, n[0], 0, e, u, r) : o()), 1)
            }
          }))
        }, (() => {
          v.S = {};
          var e = {},
            t = {};
          v.I = (r, n) => {
            n || (n = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
              if (n.push(o), e[r]) return e[r];
              v.o(v.S, r) || (v.S[r] = {});
              var a = v.S[r],
                u = "@rockstargames/modules-core-newswire-article",
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
                    var o = v(e);
                    if (!o) return;
                    var a = e => e && e.init && e.init(v.S[r], n);
                    if (o.then) return c.push(o.then(a, t));
                    var u = a(o);
                    if (u && u.then) return c.push(u.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (i("dompurify", "2.4.7", (() => v.e(448).then((() => () => v(7448))))), i("lodash", "4.17.21", (() => v.e(648).then((() => () => v(5648))))), i("react-jsx-parser", "1.29.0", (() => Promise.all([v.e(336), v.e(200)]).then((() => () => v(1336))))), i("react", "18.2.0", (() => () => v(8188)), 1), i("text-balancer", "1.0.5", (() => v.e(272).then((() => () => v(1272))))), s(8856), s(8428), s(9344), s(3864), s(7672), s(8542), s(5576), s(72), s(4472), s(3096), s(2354)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          v.g.importScripts && (e = v.g.location + "");
          var t = v.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), v.p = e
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
                var h = r[u];
                d.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, n) : !p())
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
              var a = v.I(t);
              return a && a.then ? a.then(e.bind(e, t, v.S[t], r, n, o)) : e(t, v.S[t], r, n, o)
            })(((e, t, n, o, a) => {
              var u = t && v.o(t, n) && r(t, n, o);
              return u ? (e => (e.loaded = 1, e.get()))(u) : a()
            })),
            o = {},
            a = {
              8200: () => n("default", "react", [1, 18, 2, 0], (() => () => v(8188))),
              2064: () => n("default", "text-balancer", [1, 1, 0, 5], (() => v.e(272).then((() => () => v(1272))))),
              3660: () => n("default", "lodash", [1, 4, 17, 21], (() => v.e(648).then((() => () => v(5648))))),
              9416: () => n("default", "dompurify", [1, 2, 4, 1], (() => v.e(448).then((() => () => v(7448))))),
              6280: () => n("default", "react-jsx-parser", [1, 1, 29, 0], (() => v.e(336).then((() => () => v(1336)))))
            },
            u = {
              200: [8200],
              208: [2064, 3660, 9416],
              850: [6280]
            },
            i = {};
          v.f.consumes = (e, t) => {
            v.o(u, e) && u[e].forEach((e => {
              if (v.o(o, e)) return t.push(o[e]);
              if (!i[e]) {
                var r = t => {
                  o[e] = 0, v.m[e] = r => {
                    delete v.c[e], r.exports = t()
                  }
                };
                i[e] = !0;
                var n = t => {
                  delete o[e], v.m[e] = r => {
                    throw delete v.c[e], t
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
              92: 0
            };
            v.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                208: 1,
                650: 1,
                850: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var n = v.miniCssF(e),
                  o = v.p + n;
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
            92: 0
          };
          v.f.j = (t, r) => {
            var n = v.o(e, t) ? e[t] : void 0;
            if (0 !== n)
              if (n) r.push(n[2]);
              else if (/^(200|556|668|816|850)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => n = e[t] = [r, o]));
              r.push(n[2] = o);
              var a = v.p + v.u(t),
                u = new Error;
              v.l(a, (r => {
                if (v.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
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
                for (n in u) v.o(u, n) && (v.m[n] = u[n]);
                i && i(v)
              }
              for (t && t(r); s < a.length; s++) o = a[s], v.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), v(9296), v(5468)
      })())
    }
  }
}));
//# sourceMappingURL=remote-entry.js.map