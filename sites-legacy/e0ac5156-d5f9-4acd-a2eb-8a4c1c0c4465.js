! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e0ac5156-d5f9-4acd-a2eb-8a4c1c0c4465", e._sentryDebugIdIdentifier = "sentry-dbid-e0ac5156-d5f9-4acd-a2eb-8a4c1c0c4465")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8654], {
    92977: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        i = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        y = Symbol.iterator,
        p = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        b = Object.assign,
        _ = {};

      function h(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || p
      }

      function m() {}

      function v(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || p
      }
      h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      }, h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, m.prototype = h.prototype;
      var g = v.prototype = new m;
      g.constructor = v, b(g, h.prototype), g.isPureReactComponent = !0;
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

      function M(e, t, n) {
        var o, u = {},
          a = null,
          l = null;
        if (null != t)
          for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) S.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) u.children = n;
        else if (1 < c) {
          for (var s = Array(c), f = 0; f < c; f++) s[f] = arguments[f + 2];
          u.children = s
        }
        if (e && e.defaultProps)
          for (o in c = e.defaultProps) void 0 === u[o] && (u[o] = c[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: l,
          props: u,
          _owner: k.current
        }
      }

      function R(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }
      var $ = /\/+/g;

      function C(e, t) {
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

      function j(e, t, o, u, a) {
        var l = typeof e;
        "undefined" !== l && "boolean" !== l || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else switch (l) {
          case "string":
          case "number":
            c = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case r:
              case n:
                c = !0
            }
        }
        if (c) return a = a(c = e), e = "" === u ? "." + C(c, 0) : u, w(a) ? (o = "", null != e && (o = e.replace($, "$&/") + "/"), j(a, t, o, "", (function(e) {
          return e
        }))) : null != a && (R(a) && (a = function(e, t) {
          return {
            $$typeof: r,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        }(a, o + (!a.key || c && c.key === a.key ? "" : ("" + a.key).replace($, "$&/") + "/") + e)), t.push(a)), 1;
        if (c = 0, u = "" === u ? "." : u + ":", w(e))
          for (var s = 0; s < e.length; s++) {
            var f = u + C(l = e[s], s);
            c += j(l, t, o, f, a)
          } else if (f = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = y && e[y] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof f)
            for (e = f.call(e), s = 0; !(l = e.next()).done;) c += j(l = l.value, t, o, f = u + C(l, s++), a);
          else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return c
      }

      function I(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return j(e, n, "", "", (function(e) {
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
        x = {
          transition: null
        },
        P = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: x,
          ReactCurrentOwner: k
        };

      function D() {
        throw Error("act(...) is not supported in production builds of React.")
      }
      t.Children = {
        map: I,
        forEach: function(e, t, r) {
          I(e, (function() {
            t.apply(this, arguments)
          }), r)
        },
        count: function(e) {
          var t = 0;
          return I(e, (function() {
            t++
          })), t
        },
        toArray: function(e) {
          return I(e, (function(e) {
            return e
          })) || []
        },
        only: function(e) {
          if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      }, t.Component = h, t.Fragment = o, t.Profiler = a, t.PureComponent = v, t.StrictMode = u, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.act = D, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = b({}, e.props),
          u = e.key,
          a = e.ref,
          l = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (a = t.ref, l = k.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
          for (s in t) S.call(t, s) && !E.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
        }
        var s = arguments.length - 2;
        if (1 === s) o.children = n;
        else if (1 < s) {
          c = Array(s);
          for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
          o.children = c
        }
        return {
          $$typeof: r,
          type: e.type,
          key: u,
          ref: a,
          props: o,
          _owner: l
        }
      }, t.createContext = function(e) {
        return (e = {
          $$typeof: c,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        }).Provider = {
          $$typeof: l,
          _context: e
        }, e.Consumer = e
      }, t.createElement = M, t.createFactory = function(e) {
        var t = M.bind(null, e);
        return t.type = e, t
      }, t.createRef = function() {
        return {
          current: null
        }
      }, t.forwardRef = function(e) {
        return {
          $$typeof: s,
          render: e
        }
      }, t.isValidElement = R, t.lazy = function(e) {
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
          $$typeof: i,
          type: e,
          compare: void 0 === t ? null : t
        }
      }, t.startTransition = function(e) {
        var t = x.transition;
        x.transition = {};
        try {
          e()
        } finally {
          x.transition = t
        }
      }, t.unstable_act = D, t.useCallback = function(e, t) {
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
      }, t.version = "18.3.1"
    },
    98654: (e, t, r) => {
      e.exports = r(92977)
    }
  }
]);