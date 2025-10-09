try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f677fe9b-3f84-4c38-937c-517dd508aafd", e._sentryDebugIdIdentifier = "sentry-dbid-f677fe9b-3f84-4c38-937c-517dd508aafd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstar-tv",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || []).push([
  [8431], {
    4910: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        i = Symbol.for("react.suspense"),
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
        _ = Object.assign,
        b = {};

      function h(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || y
      }

      function m() {}

      function v(e, t, r) {
        this.props = e, this.context = t, this.refs = b, this.updater = r || y
      }
      h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
      }, h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, m.prototype = h.prototype;
      var w = v.prototype = new m;
      w.constructor = v, _(w, h.prototype), w.isPureReactComponent = !0;
      var g = Array.isArray,
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

      function R(e, t, n) {
        var o, u = {},
          a = null,
          f = null;
        if (null != t)
          for (o in void 0 !== t.ref && (f = t.ref), void 0 !== t.key && (a = "" + t.key), t) k.call(t, o) && !E.hasOwnProperty(o) && (u[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) u.children = n;
        else if (1 < s) {
          for (var c = Array(s), i = 0; i < s; i++) c[i] = arguments[i + 2];
          u.children = c
        }
        if (e && e.defaultProps)
          for (o in s = e.defaultProps) void 0 === u[o] && (u[o] = s[o]);
        return {
          $$typeof: r,
          type: e,
          key: a,
          ref: f,
          props: u,
          _owner: S.current
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
        var s = !1;
        if (null === e) s = !0;
        else switch (f) {
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
        if (s) return a = a(s = e), e = "" === u ? "." + j(s, 0) : u, g(a) ? (o = "", null != e && (o = e.replace(C, "$&/") + "/"), I(a, t, o, "", (function(e) {
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
        }(a, o + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(C, "$&/") + "/") + e)), t.push(a)), 1;
        if (s = 0, u = "" === u ? "." : u + ":", g(e))
          for (var c = 0; c < e.length; c++) {
            var i = u + j(f = e[c], c);
            s += I(f, t, o, i, a)
          } else if (i = function(e) {
              return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
            }(e), "function" == typeof i)
            for (e = i.call(e), c = 0; !(f = e.next()).done;) s += I(f = f.value, t, o, i = u + j(f, c++), a);
          else if ("object" === f) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return s
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
          ReactCurrentOwner: S
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
      }, t.Component = h, t.Fragment = o, t.Profiler = a, t.PureComponent = v, t.StrictMode = u, t.Suspense = i, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.act = D, t.cloneElement = function(e, t, n) {
        if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o = _({}, e.props),
          u = e.key,
          a = e.ref,
          f = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (a = t.ref, f = S.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
          for (c in t) k.call(t, c) && !E.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
        }
        var c = arguments.length - 2;
        if (1 === c) o.children = n;
        else if (1 < c) {
          s = Array(c);
          for (var i = 0; i < c; i++) s[i] = arguments[i + 2];
          o.children = s
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
          $$typeof: s,
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
          $$typeof: c,
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