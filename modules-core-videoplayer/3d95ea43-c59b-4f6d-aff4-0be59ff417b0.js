try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3d95ea43-c59b-4f6d-aff4-0be59ff417b0", e._sentryDebugIdIdentifier = "sentry-dbid-3d95ea43-c59b-4f6d-aff4-0be59ff417b0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [8431], {
    4910: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        i = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        s = Symbol.for("react.memo"),
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
      var w = v.prototype = new m;
      w.constructor = v, b(w, h.prototype), w.isPureReactComponent = !0;
      var g = Array.isArray,
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

      function R(e, t, n) {
        var o, u = {},
          a = null,
          f = null;
        if (null != t)
          for (o in void 0 !== t.ref && (f = t.ref), void 0 !== t.key && (a = "" + t.key), t) S.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) u.children = n;
        else if (1 < c) {
          for (var i = Array(c), l = 0; l < c; l++) i[l] = arguments[l + 2];
          u.children = i
        }
        if (e && e.defaultProps)
          for (o in c = e.defaultProps) void 0 === u[o] && (u[o] = c[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: f,
          props: u,
          _owner: k.current
        }
      }

      function $(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }
      var C = /\/+/g;

      function j(e, t) {
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

      function I(e, t, o, u, a) {
        var f = typeof e;
        "undefined" !== f && "boolean" !== f || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else switch (f) {
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
        if (c) return a = a(c = e), e = "" === u ? "." + j(c, 0) : u, g(a) ? (o = "", null != e && (o = e.replace(C, "$&/") + "/"), I(a, t, o, "", (function(e) {
          return e
        }))) : null != a && ($(a) && (a = function(e, t) {
          return {
            $$typeof: r,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        }(a, o + (!a.key || c && c.key === a.key ? "" : ("" + a.key).replace(C, "$&/") + "/") + e)), t.push(a)), 1;
        if (c = 0, u = "" === u ? "." : u + ":", g(e))
          for (var i = 0; i < e.length; i++) {
            var l = u + j(f = e[i], i);
            c += I(f, t, o, l, a)
          } else if (l = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof l)
            for (e = l.call(e), i = 0; !(f = e.next()).done;) c += I(f = f.value, t, o, l = u + j(f, i++), a);
          else if ("object" === f) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return c
      }

      function O(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return I(e, n, "", "", (function(e) {
          return t.call(r, e, o++)
        })), n
      }

      function T(e) {
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
        M = {
          transition: null
        },
        P = {
          ReactCurrentDispatcher: x,
          ReactCurrentBatchConfig: M,
          ReactCurrentOwner: k
        };

      function D() {
        throw Error("act(...) is not supported in production builds of React.")
      }
      t.Children = {
        map: O,
        forEach: function(e, t, r) {
          O(e, (function() {
            t.apply(this, arguments)
          }), r)
        },
        count: function(e) {
          var t = 0;
          return O(e, (function() {
            t++
          })), t
        },
        toArray: function(e) {
          return O(e, (function(e) {
            return e
          })) || []
        },
        only: function(e) {
          if (!$(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e
        }
      }, t.Component = h, t.Fragment = o, t.Profiler = a, t.PureComponent = v, t.StrictMode = u, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.act = D, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = b({}, e.props),
          u = e.key,
          a = e.ref,
          f = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (a = t.ref, f = k.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
          for (i in t) S.call(t, i) && !E.hasOwnProperty(i) && (o[i] = void 0 === t[i] && void 0 !== c ? c[i] : t[i])
        }
        var i = arguments.length - 2;
        if (1 === i) o.children = n;
        else if (1 < i) {
          c = Array(i);
          for (var l = 0; l < i; l++) c[l] = arguments[l + 2];
          o.children = c
        }
        return {
          $$typeof: r,
          type: e.type,
          key: u,
          ref: a,
          props: o,
          _owner: f
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
          $$typeof: f,
          _context: e
        }, e.Consumer = e
      }, t.createElement = R, t.createFactory = function(e) {
        var t = R.bind(null, e);
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
      }, t.isValidElement = $, t.lazy = function(e) {
        return {
          $$typeof: d,
          _payload: {
            _status: -1,
            _result: e
          },
          _init: T
        }
      }, t.memo = function(e, t) {
        return {
          $$typeof: s,
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
      }, t.unstable_act = D, t.useCallback = function(e, t) {
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
      }, t.version = "18.3.1"
    },
    8431: (e, t, r) => {
      e.exports = r(4910)
    }
  }
]);