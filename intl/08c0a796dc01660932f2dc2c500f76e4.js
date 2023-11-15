/*! For license information please see 08c0a796dc01660932f2dc2c500f76e4.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_intl = self.webpackChunk_rockstargames_intl || []).push([
  [534], {
    471: (e, t, r) => {
      r.d(t, {
        vU: () => d
      });
      var n = function() {
        return n = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, n.apply(this, arguments)
      };

      function o(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var a = r(377);
      r(571);
      var u, c, f = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? a.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = a.createContext(null)),
        i = (f.Consumer, f.Provider, f);

      function s() {
        this.cache = Object.create(null)
      }

      function l() {
        var e = a.useContext(i);
        return function(e) {
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }
      s.prototype.get = function(e) {
          return this.cache[e]
        }, s.prototype.set = function(e, t) {
          this.cache[e] = t
        }, n(n({}, {
          formats: {},
          messages: {},
          timeZone: void 0,
          defaultLocale: "en",
          defaultFormats: {},
          fallbackOnEmptyString: !0,
          onError: function(e) {},
          onWarn: function(e) {}
        }), {
          textComponent: a.Fragment
        }),
        function(e) {
          e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
        }(u || (u = {})),
        function(e) {
          e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
        }(c || (c = {}));
      var p = function(e) {
        var t = l(),
          r = e.value,
          n = e.children,
          a = o(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, a))
      };

      function y(e) {
        var t = function(t) {
          var r = l(),
            n = t.value,
            a = t.children,
            u = o(t, ["value", "children"]),
            c = "string" == typeof n ? new Date(n || 0) : n;
          return a("formatDate" === e ? r.formatDateToParts(c, u) : r.formatTimeToParts(c, u))
        };
        return t.displayName = c[e], t
      }

      function m(e) {
        var t = function(t) {
          var r = l(),
            n = t.value,
            u = t.children,
            c = o(t, ["value", "children"]),
            f = r[e](n, c);
          if ("function" == typeof u) return u(f);
          var i = r.textComponent || a.Fragment;
          return a.createElement(i, null, f)
        };
        return t.displayName = u[e], t
      }

      function d(e) {
        return e
      }
      p.displayName = "FormattedNumberParts", p.displayName = "FormattedNumberParts", m("formatDate"), m("formatTime"), m("formatNumber"), m("formatList"), m("formatDisplayName"), y("formatDate"), y("formatTime")
    },
    571: (e, t, r) => {
      var n = r(607),
        o = {
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
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        u = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function f(e) {
        return n.isMemo(e) ? u : c[e.$$typeof] || o
      }
      c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[n.Memo] = u;
      var i = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (m) {
            var o = y(r);
            o && o !== m && e(t, o, n)
          }
          var u = s(r);
          l && (u = u.concat(l(r)));
          for (var c = f(t), d = f(r), b = 0; b < u.length; ++b) {
            var _ = u[b];
            if (!(a[_] || n && n[_] || d && d[_] || c && c[_])) {
              var v = p(r, _);
              try {
                i(t, _, v)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    478: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        u = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        f = r ? Symbol.for("react.provider") : 60109,
        i = r ? Symbol.for("react.context") : 60110,
        s = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        d = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        h = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;

      function $(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case s:
                case l:
                case a:
                case c:
                case u:
                case y:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case i:
                    case p:
                    case b:
                    case d:
                    case f:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function w(e) {
        return $(e) === l
      }
      t.AsyncMode = s, t.ConcurrentMode = l, t.ContextConsumer = i, t.ContextProvider = f, t.Element = n, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = d, t.Portal = o, t.Profiler = c, t.StrictMode = u, t.Suspense = y, t.isAsyncMode = function(e) {
        return w(e) || $(e) === s
      }, t.isConcurrentMode = w, t.isContextConsumer = function(e) {
        return $(e) === i
      }, t.isContextProvider = function(e) {
        return $(e) === f
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return $(e) === p
      }, t.isFragment = function(e) {
        return $(e) === a
      }, t.isLazy = function(e) {
        return $(e) === b
      }, t.isMemo = function(e) {
        return $(e) === d
      }, t.isPortal = function(e) {
        return $(e) === o
      }, t.isProfiler = function(e) {
        return $(e) === c
      }, t.isStrictMode = function(e) {
        return $(e) === u
      }, t.isSuspense = function(e) {
        return $(e) === y
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === l || e === c || e === u || e === y || e === m || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === d || e.$$typeof === f || e.$$typeof === i || e.$$typeof === p || e.$$typeof === v || e.$$typeof === h || e.$$typeof === S || e.$$typeof === _)
      }, t.typeOf = $
    },
    607: (e, t, r) => {
      e.exports = r(478)
    },
    32: (e, t, r) => {
      var n = r(377);
      Symbol.for("react.element"), Symbol.for("react.fragment"), Object.prototype.hasOwnProperty, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
    },
    755: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        c = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        i = Symbol.for("react.forward_ref"),
        s = Symbol.for("react.suspense"),
        l = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        y = Symbol.iterator,
        m = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        d = Object.assign,
        b = {};

      function _(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || m
      }

      function v() {}

      function h(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || m
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, v.prototype = _.prototype;
      var S = h.prototype = new v;
      S.constructor = h, d(S, _.prototype), S.isPureReactComponent = !0;
      var $ = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        O = {
          current: null
        },
        E = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function g(e, t, n) {
        var o, a = {},
          u = null,
          c = null;
        if (null != t)
          for (o in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (u = "" + t.key), t) w.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
        var f = arguments.length - 2;
        if (1 === f) a.children = n;
        else if (1 < f) {
          for (var i = Array(f), s = 0; s < f; s++) i[s] = arguments[s + 2];
          a.children = i
        }
        if (e && e.defaultProps)
          for (o in f = e.defaultProps) void 0 === a[o] && (a[o] = f[o]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: c,
          props: a,
          _owner: O.current
        }
      }

      function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }
      var P = /\/+/g;

      function T(e, t) {
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

      function j(e, t, o, a, u) {
        var c = typeof e;
        "undefined" !== c && "boolean" !== c || (e = null);
        var f = !1;
        if (null === e) f = !0;
        else switch (c) {
          case "string":
          case "number":
            f = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case r:
              case n:
                f = !0
            }
        }
        if (f) return u = u(f = e), e = "" === a ? "." + T(f, 0) : a, $(u) ? (o = "", null != e && (o = e.replace(P, "$&/") + "/"), j(u, t, o, "", (function(e) {
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
        }(u, o + (!u.key || f && f.key === u.key ? "" : ("" + u.key).replace(P, "$&/") + "/") + e)), t.push(u)), 1;
        if (f = 0, a = "" === a ? "." : a + ":", $(e))
          for (var i = 0; i < e.length; i++) {
            var s = a + T(c = e[i], i);
            f += j(c, t, o, s, u)
          } else if (s = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = y && e[y] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof s)
            for (e = s.call(e), i = 0; !(c = e.next()).done;) f += j(c = c.value, t, o, s = a + T(c, i++), u);
          else if ("object" === c) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return f
      }

      function R(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return j(e, n, "", "", (function(e) {
          return t.call(r, e, o++)
        })), n
      }

      function N(e) {
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
      var x = {
          current: null
        },
        k = {
          transition: null
        },
        F = {
          ReactCurrentDispatcher: x,
          ReactCurrentBatchConfig: k,
          ReactCurrentOwner: O
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
          if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      }, t.Component = _, t.Fragment = o, t.Profiler = u, t.PureComponent = h, t.StrictMode = a, t.Suspense = s, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = d({}, e.props),
          a = e.key,
          u = e.ref,
          c = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (u = t.ref, c = O.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var f = e.type.defaultProps;
          for (i in t) w.call(t, i) && !E.hasOwnProperty(i) && (o[i] = void 0 === t[i] && void 0 !== f ? f[i] : t[i])
        }
        var i = arguments.length - 2;
        if (1 === i) o.children = n;
        else if (1 < i) {
          f = Array(i);
          for (var s = 0; s < i; s++) f[s] = arguments[s + 2];
          o.children = f
        }
        return {
          $$typeof: r,
          type: e.type,
          key: a,
          ref: u,
          props: o,
          _owner: c
        }
      }, t.createContext = function(e) {
        return (e = {
          $$typeof: f,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {
          $$typeof: c,
          _context: e
        }, e.Consumer = e
      }, t.createElement = g, t.createFactory = function(e) {
        var t = g.bind(null, e);
        return t.type = e, t
      }, t.createRef = function() {
        return {
          current: null
        }
      }, t.forwardRef = function(e) {
        return {
          $$typeof: i,
          render: e
        }
      }, t.isValidElement = C, t.lazy = function(e) {
        return {
          $$typeof: p,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: N
        }
      }, t.memo = function(e, t) {
        return {
          $$typeof: l,
          type: e,
          compare: void 0 === t ? null : t
        }
      }, t.startTransition = function(e) {
        var t = k.transition;
        k.transition = {};
        try {
          e()
        } finally {
          k.transition = t
        }
      }, t.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
      }, t.useCallback = function(e, t) {
        return x.current.useCallback(e, t)
      }, t.useContext = function(e) {
        return x.current.useContext(e)
      }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
        return x.current.useDeferredValue(e)
      }, t.useEffect = function(e, t) {
        return x.current.useEffect(e, t)
      }, t.useId = function() {
        return x.current.useId()
      }, t.useImperativeHandle = function(e, t, r) {
        return x.current.useImperativeHandle(e, t, r)
      }, t.useInsertionEffect = function(e, t) {
        return x.current.useInsertionEffect(e, t)
      }, t.useLayoutEffect = function(e, t) {
        return x.current.useLayoutEffect(e, t)
      }, t.useMemo = function(e, t) {
        return x.current.useMemo(e, t)
      }, t.useReducer = function(e, t, r) {
        return x.current.useReducer(e, t, r)
      }, t.useRef = function(e) {
        return x.current.useRef(e)
      }, t.useState = function(e) {
        return x.current.useState(e)
      }, t.useSyncExternalStore = function(e, t, r) {
        return x.current.useSyncExternalStore(e, t, r)
      }, t.useTransition = function() {
        return x.current.useTransition()
      }, t.version = "18.2.0"
    },
    377: (e, t, r) => {
      e.exports = r(755)
    },
    705: (e, t, r) => {
      r(32)
    }
  }
]);