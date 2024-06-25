! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "f18f2673-80b6-499a-9b41-7b083cc756f7", e._sentryDebugIdIdentifier = "sentry-dbid-f18f2673-80b6-499a-9b41-7b083cc756f7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [640], {
    6984: e => {
      var r = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
      e.exports = function() {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
          for (var r = {}, t = 0; t < 10; t++) r["_" + String.fromCharCode(t)] = t;
          if ("0123456789" !== Object.getOwnPropertyNames(r).map((function(e) {
              return r[e]
            })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function(e) {
            n[e] = e
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
          return !1
        }
      }() ? Object.assign : function(e, o) {
        for (var u, f, l = function(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
          }(e), c = 1; c < arguments.length; c++) {
          for (var a in u = Object(arguments[c])) t.call(u, a) && (l[a] = u[a]);
          if (r) {
            f = r(u);
            for (var i = 0; i < f.length; i++) n.call(u, f[i]) && (l[f[i]] = u[f[i]])
          }
        }
        return l
      }
    },
    57376: (e, r, t) => {
      var n = t(6984),
        o = "function" == typeof Symbol && Symbol.for,
        u = o ? Symbol.for("react.element") : 60103,
        f = o ? Symbol.for("react.portal") : 60106,
        l = o ? Symbol.for("react.fragment") : 60107,
        c = o ? Symbol.for("react.strict_mode") : 60108,
        a = o ? Symbol.for("react.profiler") : 60114,
        i = o ? Symbol.for("react.provider") : 60109,
        s = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.forward_ref") : 60112,
        y = o ? Symbol.for("react.suspense") : 60113,
        d = o ? Symbol.for("react.memo") : 60115,
        b = o ? Symbol.for("react.lazy") : 60116,
        h = "function" == typeof Symbol && Symbol.iterator;

      function m(e) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) r += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var v = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        g = {};

      function _(e, r, t) {
        this.props = e, this.context = r, this.refs = g, this.updater = t || v
      }

      function w() {}

      function k(e, r, t) {
        this.props = e, this.context = r, this.refs = g, this.updater = t || v
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(m(85));
        this.updater.enqueueSetState(this, e, r, "setState")
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
      }, w.prototype = _.prototype;
      var S = k.prototype = new w;
      S.constructor = k, n(S, _.prototype), S.isPureReactComponent = !0;
      var j = {
          current: null
        },
        E = Object.prototype.hasOwnProperty,
        O = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function C(e, r, t) {
        var n, o = {},
          f = null,
          l = null;
        if (null != r)
          for (n in void 0 !== r.ref && (l = r.ref), void 0 !== r.key && (f = "" + r.key), r) E.call(r, n) && !O.hasOwnProperty(n) && (o[n] = r[n]);
        var c = arguments.length - 2;
        if (1 === c) o.children = t;
        else if (1 < c) {
          for (var a = Array(c), i = 0; i < c; i++) a[i] = arguments[i + 2];
          o.children = a
        }
        if (e && e.defaultProps)
          for (n in c = e.defaultProps) void 0 === o[n] && (o[n] = c[n]);
        return {
          $$typeof: u,
          type: e,
          key: f,
          ref: l,
          props: o,
          _owner: j.current
        }
      }

      function $(e) {
        return "object" == typeof e && null !== e && e.$$typeof === u
      }
      var R = /\/+/g,
        P = [];

      function x(e, r, t, n) {
        if (P.length) {
          var o = P.pop();
          return o.result = e, o.keyPrefix = r, o.func = t, o.context = n, o.count = 0, o
        }
        return {
          result: e,
          keyPrefix: r,
          func: t,
          context: n,
          count: 0
        }
      }

      function I(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > P.length && P.push(e)
      }

      function M(e, r, t, n) {
        var o = typeof e;
        "undefined" !== o && "boolean" !== o || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else switch (o) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case u:
              case f:
                l = !0
            }
        }
        if (l) return t(n, e, "" === r ? "." + D(e, 0) : r), 1;
        if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
          for (var c = 0; c < e.length; c++) {
            var a = r + D(o = e[c], c);
            l += M(o, a, t, n)
          } else if ("function" == typeof(a = null === e || "object" != typeof e ? null : "function" == typeof(a = h && e[h] || e["@@iterator"]) ? a : null))
            for (e = a.call(e), c = 0; !(o = e.next()).done;) l += M(o = o.value, a = r + D(o, c++), t, n);
          else if ("object" === o) throw t = "" + e, Error(m(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t, ""));
        return l
      }

      function A(e, r, t) {
        return null == e ? 0 : M(e, "", r, t)
      }

      function D(e, r) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
          var r = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + ("" + e).replace(/[=:]/g, (function(e) {
            return r[e]
          }))
        }(e.key) : r.toString(36)
      }

      function q(e, r) {
        e.func.call(e.context, r, e.count++)
      }

      function N(e, r, t) {
        var n = e.result,
          o = e.keyPrefix;
        e = e.func.call(e.context, r, e.count++), Array.isArray(e) ? U(e, n, t, (function(e) {
          return e
        })) : null != e && ($(e) && (e = function(e, r) {
          return {
            $$typeof: u,
            type: e.type,
            key: r,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        }(e, o + (!e.key || r && r.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + t)), n.push(e))
      }

      function U(e, r, t, n, o) {
        var u = "";
        null != t && (u = ("" + t).replace(R, "$&/") + "/"), A(e, N, r = x(r, u, n, o)), I(r)
      }
      var L = {
        current: null
      };

      function F() {
        var e = L.current;
        if (null === e) throw Error(m(321));
        return e
      }
      var T = {
        ReactCurrentDispatcher: L,
        ReactCurrentBatchConfig: {
          suspense: null
        },
        ReactCurrentOwner: j,
        IsSomeRendererActing: {
          current: !1
        },
        assign: n
      };
      r.Children = {
        map: function(e, r, t) {
          if (null == e) return e;
          var n = [];
          return U(e, n, null, r, t), n
        },
        forEach: function(e, r, t) {
          if (null == e) return e;
          A(e, q, r = x(null, null, r, t)), I(r)
        },
        count: function(e) {
          return A(e, (function() {
            return null
          }), null)
        },
        toArray: function(e) {
          var r = [];
          return U(e, r, null, (function(e) {
            return e
          })), r
        },
        only: function(e) {
          if (!$(e)) throw Error(m(143));
          return e
        }
      }, r.Component = _, r.Fragment = l, r.Profiler = a, r.PureComponent = k, r.StrictMode = c, r.Suspense = y, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, r.cloneElement = function(e, r, t) {
        if (null == e) throw Error(m(267, e));
        var o = n({}, e.props),
          f = e.key,
          l = e.ref,
          c = e._owner;
        if (null != r) {
          if (void 0 !== r.ref && (l = r.ref, c = j.current), void 0 !== r.key && (f = "" + r.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
          for (i in r) E.call(r, i) && !O.hasOwnProperty(i) && (o[i] = void 0 === r[i] && void 0 !== a ? a[i] : r[i])
        }
        var i = arguments.length - 2;
        if (1 === i) o.children = t;
        else if (1 < i) {
          a = Array(i);
          for (var s = 0; s < i; s++) a[s] = arguments[s + 2];
          o.children = a
        }
        return {
          $$typeof: u,
          type: e.type,
          key: f,
          ref: l,
          props: o,
          _owner: c
        }
      }, r.createContext = function(e, r) {
        return void 0 === r && (r = null), (e = {
          $$typeof: s,
          _calculateChangedBits: r,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }).Provider = {
          $$typeof: i,
          _context: e
        }, e.Consumer = e
      }, r.createElement = C, r.createFactory = function(e) {
        var r = C.bind(null, e);
        return r.type = e, r
      }, r.createRef = function() {
        return {
          current: null
        }
      }, r.forwardRef = function(e) {
        return {
          $$typeof: p,
          render: e
        }
      }, r.isValidElement = $, r.lazy = function(e) {
        return {
          $$typeof: b,
          _ctor: e,
          _status: -1,
          _result: null
        }
      }, r.memo = function(e, r) {
        return {
          $$typeof: d,
          type: e,
          compare: void 0 === r ? null : r
        }
      }, r.useCallback = function(e, r) {
        return F().useCallback(e, r)
      }, r.useContext = function(e, r) {
        return F().useContext(e, r)
      }, r.useDebugValue = function() {}, r.useEffect = function(e, r) {
        return F().useEffect(e, r)
      }, r.useImperativeHandle = function(e, r, t) {
        return F().useImperativeHandle(e, r, t)
      }, r.useLayoutEffect = function(e, r) {
        return F().useLayoutEffect(e, r)
      }, r.useMemo = function(e, r) {
        return F().useMemo(e, r)
      }, r.useReducer = function(e, r, t) {
        return F().useReducer(e, r, t)
      }, r.useRef = function(e) {
        return F().useRef(e)
      }, r.useState = function(e) {
        return F().useState(e)
      }, r.version = "16.14.0"
    },
    89640: (e, r, t) => {
      e.exports = t(57376)
    }
  }
]);