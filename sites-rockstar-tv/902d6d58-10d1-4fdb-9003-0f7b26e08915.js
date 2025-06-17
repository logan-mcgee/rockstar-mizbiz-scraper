! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "902d6d58-10d1-4fdb-9003-0f7b26e08915", e._sentryDebugIdIdentifier = "sentry-dbid-902d6d58-10d1-4fdb-9003-0f7b26e08915")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [8654], {
    2977: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        i = Symbol.for("react.memo"),
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
        b = Object.assign,
        _ = {};

      function h(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || y
      }

      function m() {}

      function v(e, t, r) {
        this.props = e, this.context = t, this.refs = _, this.updater = r || y
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

      function M(e, t, n) {
        var o, u = {},
          a = null,
          l = null;
        if (null != t)
          for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) u.children = n;
        else if (1 < s) {
          for (var f = Array(s), c = 0; c < s; c++) f[c] = arguments[c + 2];
          u.children = f
        }
        if (e && e.defaultProps)
          for (o in s = e.defaultProps) void 0 === u[o] && (u[o] = s[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: l,
          props: u,
          _owner: S.current
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
        var s = !1;
        if (null === e) s = !0;
        else switch (l) {
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
        if (s) return a = a(s = e), e = "" === u ? "." + C(s, 0) : u, w(a) ? (o = "", null != e && (o = e.replace($, "$&/") + "/"), j(a, t, o, "", (function(e) {
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
        }(a, o + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace($, "$&/") + "/") + e)), t.push(a)), 1;
        if (s = 0, u = "" === u ? "." : u + ":", w(e))
          for (var f = 0; f < e.length; f++) {
            var c = u + C(l = e[f], f);
            s += j(l, t, o, c, a)
          } else if (c = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof c)
            for (e = c.call(e), f = 0; !(l = e.next()).done;) s += j(l = l.value, t, o, c = u + C(l, f++), a);
          else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return s
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
          ReactCurrentOwner: S
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
      }, t.Component = h, t.Fragment = o, t.Profiler = a, t.PureComponent = v, t.StrictMode = u, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.act = D, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = b({}, e.props),
          u = e.key,
          a = e.ref,
          l = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (a = t.ref, l = S.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
          for (f in t) k.call(t, f) && !E.hasOwnProperty(f) && (o[f] = void 0 === t[f] && void 0 !== s ? s[f] : t[f])
        }
        var f = arguments.length - 2;
        if (1 === f) o.children = n;
        else if (1 < f) {
          s = Array(f);
          for (var c = 0; c < f; c++) s[c] = arguments[c + 2];
          o.children = s
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
          $$typeof: s,
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
          $$typeof: f,
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
    8654: (e, t, r) => {
      e.exports = r(2977)
    }
  }
]);