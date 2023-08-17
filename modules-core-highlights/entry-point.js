/*! For license information please see remote-entry.js.LICENSE.txt */
var modules_core_highlights;
(() => {
  "use strict";
  var e, t, r, n, o = {
      401: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          u = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          c = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          d = Symbol.iterator,
          h = {
            isMounted: function() {
              return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
          },
          y = Object.assign,
          m = {};

        function v(e, t, r) {
          this.props = e, this.context = t, this.refs = m, this.updater = r || h
        }

        function g() {}

        function b(e, t, r) {
          this.props = e, this.context = t, this.refs = m, this.updater = r || h
        }
        v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, t, "setState")
        }, v.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, g.prototype = v.prototype;
        var _ = b.prototype = new g;
        _.constructor = b, y(_, v.prototype), _.isPureReactComponent = !0;
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

        function C(e, t, n) {
          var o, a = {},
            u = null,
            i = null;
          if (null != t)
            for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (u = "" + t.key), t) S.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            for (var l = Array(s), f = 0; f < s; f++) l[f] = arguments[f + 2];
            a.children = l
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

        function x(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r
        }
        var j = /\/+/g;

        function $(e, t) {
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

        function P(e, t, o, a, u) {
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
          if (s) return u = u(s = e), e = "" === a ? "." + $(s, 0) : a, w(u) ? (o = "", null != e && (o = e.replace(j, "$&/") + "/"), P(u, t, o, "", (function(e) {
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
          }(u, o + (!u.key || s && s.key === u.key ? "" : ("" + u.key).replace(j, "$&/") + "/") + e)), t.push(u)), 1;
          if (s = 0, a = "" === a ? "." : a + ":", w(e))
            for (var l = 0; l < e.length; l++) {
              var f = a + $(i = e[l], l);
              s += P(i, t, o, f, u)
            } else if (f = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = d && e[d] || e["@@iterator"]) ? e : null
              }(e), "function" == typeof f)
              for (e = f.call(e), l = 0; !(i = e.next()).done;) s += P(i = i.value, t, o, f = a + $(i, l++), u);
            else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return s
        }

        function R(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return P(e, n, "", "", (function(e) {
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
        var T = {
            current: null
          },
          A = {
            transition: null
          },
          I = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: A,
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
            if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, t.Component = v, t.Fragment = o, t.Profiler = u, t.PureComponent = b, t.StrictMode = a, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, n) {
          if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
          var o = y({}, e.props),
            a = e.key,
            u = e.ref,
            i = e._owner;
          if (null != t) {
            if (void 0 !== t.ref && (u = t.ref, i = E.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for (l in t) S.call(t, l) && !k.hasOwnProperty(l) && (o[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l])
          }
          var l = arguments.length - 2;
          if (1 === l) o.children = n;
          else if (1 < l) {
            s = Array(l);
            for (var f = 0; f < l; f++) s[f] = arguments[f + 2];
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
        }, t.createElement = C, t.createFactory = function(e) {
          var t = C.bind(null, e);
          return t.type = e, t
        }, t.createRef = function() {
          return {
            current: null
          }
        }, t.forwardRef = function(e) {
          return {
            $$typeof: l,
            render: e
          }
        }, t.isValidElement = x, t.lazy = function(e) {
          return {
            $$typeof: p,
            _payload: {
              _status: -1,
              _result: e
            },
            _init: O
          }
        }, t.memo = function(e, t) {
          return {
            $$typeof: c,
            type: e,
            compare: void 0 === t ? null : t
          }
        }, t.startTransition = function(e) {
          var t = A.transition;
          A.transition = {};
          try {
            e()
          } finally {
            A.transition = t
          }
        }, t.unstable_act = function() {
          throw Error("act(...) is not supported in production builds of React.")
        }, t.useCallback = function(e, t) {
          return T.current.useCallback(e, t)
        }, t.useContext = function(e) {
          return T.current.useContext(e)
        }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
          return T.current.useDeferredValue(e)
        }, t.useEffect = function(e, t) {
          return T.current.useEffect(e, t)
        }, t.useId = function() {
          return T.current.useId()
        }, t.useImperativeHandle = function(e, t, r) {
          return T.current.useImperativeHandle(e, t, r)
        }, t.useInsertionEffect = function(e, t) {
          return T.current.useInsertionEffect(e, t)
        }, t.useLayoutEffect = function(e, t) {
          return T.current.useLayoutEffect(e, t)
        }, t.useMemo = function(e, t) {
          return T.current.useMemo(e, t)
        }, t.useReducer = function(e, t, r) {
          return T.current.useReducer(e, t, r)
        }, t.useRef = function(e) {
          return T.current.useRef(e)
        }, t.useState = function(e) {
          return T.current.useState(e)
        }, t.useSyncExternalStore = function(e, t, r) {
          return T.current.useSyncExternalStore(e, t, r)
        }, t.useTransition = function() {
          return T.current.useTransition()
        }, t.version = "18.2.0"
      },
      252: (e, t, r) => {
        e.exports = r(401)
      },
      139: (e, t, r) => {
        var n = {
            "./index": () => Promise.all([r.e(887), r.e(509)]).then((() => () => r(509))),
            "./tina": () => r.e(334).then((() => () => r(334)))
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
      413: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof intl) return e();
          r.l(window.mfe.path("@rockstargames/intl"), (r => {
            if ("undefined" != typeof intl) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "intl")
        })).then((() => intl))
      },
      489: (e, t, r) => {
        var n = new Error;
        e.exports = new Promise(((e, t) => {
          if ("undefined" != typeof tina) return e();
          r.l(window.mfe.path("@rockstargames/tina"), (r => {
            if ("undefined" != typeof tina) return e();
            var o = r && ("load" === r.type ? "missing" : r.type),
              a = r && r.target && r.target.src;
            n.message = "Loading script failed.\n(" + o + ": " + a + ")", n.name = "ScriptExternalLoadError", n.type = o, n.request = a, t(n)
          }), "tina")
        })).then((() => tina))
      }
    },
    a = {};

  function u(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = a[e] = {
      exports: {}
    };
    return o[e](r, r.exports, u), r.exports
  }
  u.m = o, u.c = a, u.d = (e, t) => {
    for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
      enumerable: !0,
      get: t[r]
    })
  }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
    334: "e03640ca9ea0c7c357b0",
    509: "eb10955a3c1e9d1b1507",
    887: "45f39dba98c61f35c3d5"
  } [e] + ".js", u.miniCssF = e => "css/5777ff74f1c84f270a88.css", u.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "@rockstargames/modules-core-highlights:", u.l = (r, n, o, a) => {
    if (e[r]) e[r].push(n);
    else {
      var i, s;
      if (void 0 !== o)
        for (var l = document.getElementsByTagName("script"), f = 0; f < l.length; f++) {
          var c = l[f];
          if (c.getAttribute("src") == r || c.getAttribute("data-webpack") == t + o) {
            i = c;
            break
          }
        }
      i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, u.nc && i.setAttribute("nonce", u.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
      var p = (t, n) => {
          i.onerror = i.onload = null, clearTimeout(d);
          var o = e[r];
          if (delete e[r], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(n))), t) return t(n)
        },
        d = setTimeout(p.bind(null, void 0, {
          type: "timeout",
          target: i
        }), 12e4);
      i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), s && document.head.appendChild(i)
    }
  }, u.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r = {
    334: [559, 616],
    509: [542, 570]
  }, n = {
    542: ["default", "./index", 489],
    559: ["default", "./helpers/uploads", 489],
    570: ["default", "./index", 413],
    616: ["default", "./properties", 489]
  }, u.f.remotes = (e, t) => {
    u.o(r, e) && r[e].forEach((e => {
      var r = u.R;
      r || (r = []);
      var o = n[e];
      if (!(r.indexOf(o) >= 0)) {
        if (r.push(o), o.p) return t.push(o.p);
        var a = t => {
            t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + o[1] + '" from ' + o[2]), u.m[e] = () => {
              throw t
            }, o.p = 0
          },
          i = (e, r, n, u, i, s) => {
            try {
              var l = e(r, n);
              if (!l || !l.then) return i(l, u, s);
              var f = l.then((e => i(e, u)), a);
              if (!s) return f;
              t.push(o.p = f)
            } catch (e) {
              a(e)
            }
          },
          s = (e, t, n) => i(t.get, o[1], r, 0, l, n),
          l = t => {
            o.p = 1, u.m[e] = e => {
              e.exports = t()
            }
          };
        i(u, o[2], 0, 0, ((e, t, r) => e ? i(u.I, o[0], 0, e, s, r) : a()), 1)
      }
    }))
  }, (() => {
    u.S = {};
    var e = {},
      t = {};
    u.I = (r, n) => {
      n || (n = []);
      var o = t[r];
      if (o || (o = t[r] = {}), !(n.indexOf(o) >= 0)) {
        if (n.push(o), e[r]) return e[r];
        u.o(u.S, r) || (u.S[r] = {});
        var a = u.S[r],
          i = "@rockstargames/modules-core-highlights",
          s = e => {
            var t = e => {
              return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
              var t
            };
            try {
              var o = u(e);
              if (!o) return;
              var a = e => e && e.init && e.init(u.S[r], n);
              if (o.then) return l.push(o.then(a, t));
              var i = a(o);
              if (i && i.then) return l.push(i.catch(t))
            } catch (e) {
              t(e)
            }
          },
          l = [];
        return "default" === r && (((e, t, r, n) => {
          var o = a[e] = a[e] || {},
            s = o[t];
          (!s || !s.loaded && (0 != !s.eager || i > s.from)) && (o[t] = {
            get: () => () => u(252),
            from: i,
            eager: !0
          })
        })("react", "18.2.0"), s(413), s(489)), l.length ? e[r] = Promise.all(l).then((() => e[r] = 1)) : e[r] = 1
      }
    }
  })(), (() => {
    var e;
    u.g.importScripts && (e = u.g.location + "");
    var t = u.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var r = t.getElementsByTagName("script");
      if (r.length)
        for (var n = r.length - 1; n > -1 && !e;) e = r[n--].src
    }
    if (!e) throw new Error("Automatic publicPath is not supported in this browser");
    e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
            var l, f, c = i < r.length ? (typeof r[i])[0] : "";
            if (u >= n.length || "o" == (f = (typeof(l = n[u]))[0])) return !s || ("u" == c ? i > o && !a : "" == c != a);
            if ("u" == f) {
              if (!s || "u" != c) return !1
            } else if (s)
              if (c == f)
                if (i <= o) {
                  if (l != r[i]) return !1
                } else {
                  if (a ? l > r[i] : l < r[i]) return !1;
                  l != r[i] && (s = !1)
                }
            else if ("s" != c && "n" != c) {
              if (a || i <= o) return !1;
              s = !1, i--
            } else {
              if (i <= o || f < c != a) return !1;
              s = !1
            } else "s" != c && "n" != c && (s = !1, i--)
          }
        }
        var p = [],
          d = p.pop.bind(p);
        for (u = 1; u < r.length; u++) {
          var h = r[u];
          p.push(1 == h ? d() | d() : 2 == h ? d() & d() : h ? t(h, n) : !d())
        }
        return !!d()
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
        var a = u.I(t);
        return a && a.then ? a.then(e.bind(e, t, u.S[t], r, n, o)) : e(t, u.S[t], r, n, o)
      })(((e, t, n, o, a) => {
        var i = t && u.o(t, n) && r(t, n, o);
        return i ? (e => (e.loaded = 1, e.get()))(i) : a()
      })),
      o = {},
      a = {
        289: () => n("default", "react", [1, 18, 2, 0], (() => () => u(252)))
      },
      i = {
        509: [289]
      };
    u.f.consumes = (e, t) => {
      u.o(i, e) && i[e].forEach((e => {
        if (u.o(o, e)) return t.push(o[e]);
        var r = t => {
            o[e] = 0, u.m[e] = r => {
              delete u.c[e], r.exports = t()
            }
          },
          n = t => {
            delete o[e], u.m[e] = r => {
              throw delete u.c[e], t
            }
          };
        try {
          var i = a[e]();
          i.then ? t.push(o[e] = i.then(r).catch(n)) : r(i)
        } catch (e) {
          n(e)
        }
      }))
    }
  })(), (() => {
    if ("undefined" != typeof document) {
      var e = {
        541: 0
      };
      u.f.miniCss = (t, r) => {
        e[t] ? r.push(e[t]) : 0 !== e[t] && {
          509: 1
        } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
          var n = u.miniCssF(e),
            o = u.p + n;
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
      541: 0
    };
    u.f.j = (t, r) => {
      var n = u.o(e, t) ? e[t] : void 0;
      if (0 !== n)
        if (n) r.push(n[2]);
        else {
          var o = new Promise(((r, o) => n = e[t] = [r, o]));
          r.push(n[2] = o);
          var a = u.p + u.u(t),
            i = new Error;
          u.l(a, (r => {
            if (u.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
              var o = r && ("load" === r.type ? "missing" : r.type),
                a = r && r.target && r.target.src;
              i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", i.name = "ChunkLoadError", i.type = o, i.request = a, n[1](i)
            }
          }), "chunk-" + t, t)
        }
    };
    var t = (t, r) => {
        var n, o, a = r[0],
          i = r[1],
          s = r[2],
          l = 0;
        if (a.some((t => 0 !== e[t]))) {
          for (n in i) u.o(i, n) && (u.m[n] = i[n]);
          s && s(u)
        }
        for (t && t(r); l < a.length; l++) o = a[l], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
      },
      r = self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
  })();
  var i = u(139);
  modules_core_highlights = i
})();