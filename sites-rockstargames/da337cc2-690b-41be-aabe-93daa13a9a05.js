! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "da337cc2-690b-41be-aabe-93daa13a9a05", e._sentryDebugIdIdentifier = "sentry-dbid-da337cc2-690b-41be-aabe-93daa13a9a05")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9640], {
    6984: e => {
      var t = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
      e.exports = function() {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
          for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
          if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
              return t[e]
            })).join("")) return !1;
          var n = {};
          return "abcdefghijklmnopqrst".split("").forEach((function(e) {
            n[e] = e
          })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (e) {
          return !1
        }
      }() ? Object.assign : function(e, o) {
        for (var u, a, f = function(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
          }(e), c = 1; c < arguments.length; c++) {
          for (var l in u = Object(arguments[c])) r.call(u, l) && (f[l] = u[l]);
          if (t) {
            a = t(u);
            for (var i = 0; i < a.length; i++) n.call(u, a[i]) && (f[a[i]] = u[a[i]])
          }
        }
        return f
      }
    },
    57376: (e, t, r) => {
      var n = r(6984),
        o = "function" == typeof Symbol && Symbol.for,
        u = o ? Symbol.for("react.element") : 60103,
        a = o ? Symbol.for("react.portal") : 60106,
        f = o ? Symbol.for("react.fragment") : 60107,
        c = o ? Symbol.for("react.strict_mode") : 60108,
        l = o ? Symbol.for("react.profiler") : 60114,
        i = o ? Symbol.for("react.provider") : 60109,
        s = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.forward_ref") : 60112,
        y = o ? Symbol.for("react.suspense") : 60113,
        d = o ? Symbol.for("react.memo") : 60115,
        b = o ? Symbol.for("react.lazy") : 60116,
        h = "function" == typeof Symbol && Symbol.iterator;

      function m(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      }
      var g = {
          isMounted: function() {
            return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        v = {};

      function _(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
      }

      function w() {}

      function k(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(m(85));
        this.updater.enqueueSetState(this, e, t, "setState")
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

      function C(e, t, r) {
        var n, o = {},
          a = null,
          f = null;
        if (null != t)
          for (n in void 0 !== t.ref && (f = t.ref), void 0 !== t.key && (a = "" + t.key), t) E.call(t, n) && !O.hasOwnProperty(n) && (o[n] = t[n]);
        var c = arguments.length - 2;
        if (1 === c) o.children = r;
        else if (1 < c) {
          for (var l = Array(c), i = 0; i < c; i++) l[i] = arguments[i + 2];
          o.children = l
        }
        if (e && e.defaultProps)
          for (n in c = e.defaultProps) void 0 === o[n] && (o[n] = c[n]);
        return {
          $$typeof: u,
          type: e,
          key: a,
          ref: f,
          props: o,
          _owner: j.current
        }
      }

      function $(e) {
        return "object" == typeof e && null !== e && e.$$typeof === u
      }
      var R = /\/+/g,
        P = [];

      function x(e, t, r, n) {
        if (P.length) {
          var o = P.pop();
          return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o
        }
        return {
          result: e,
          keyPrefix: t,
          func: r,
          context: n,
          count: 0
        }
      }

      function I(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > P.length && P.push(e)
      }

      function M(e, t, r, n) {
        var o = typeof e;
        "undefined" !== o && "boolean" !== o || (e = null);
        var f = !1;
        if (null === e) f = !0;
        else switch (o) {
          case "string":
          case "number":
            f = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case u:
              case a:
                f = !0
            }
        }
        if (f) return r(n, e, "" === t ? "." + D(e, 0) : t), 1;
        if (f = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
          for (var c = 0; c < e.length; c++) {
            var l = t + D(o = e[c], c);
            f += M(o, l, r, n)
          } else if ("function" == typeof(l = null === e || "object" != typeof e ? null : "function" == typeof(l = h && e[h] || e["@@iterator"]) ? l : null))
            for (e = l.call(e), c = 0; !(o = e.next()).done;) f += M(o = o.value, l = t + D(o, c++), r, n);
          else if ("object" === o) throw r = "" + e, Error(m(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, ""));
        return f
      }

      function A(e, t, r) {
        return null == e ? 0 : M(e, "", t, r)
      }

      function D(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
          var t = {
            "=": "=0",
            ":": "=2"
          };
          return "$" + ("" + e).replace(/[=:]/g, (function(e) {
            return t[e]
          }))
        }(e.key) : t.toString(36)
      }

      function q(e, t) {
        e.func.call(e.context, t, e.count++)
      }

      function N(e, t, r) {
        var n = e.result,
          o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, n, r, (function(e) {
          return e
        })) : null != e && ($(e) && (e = function(e, t) {
          return {
            $$typeof: u,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
          }
        }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + r)), n.push(e))
      }

      function U(e, t, r, n, o) {
        var u = "";
        null != r && (u = ("" + r).replace(R, "$&/") + "/"), A(e, N, t = x(t, u, n, o)), I(t)
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
      t.Children = {
        map: function(e, t, r) {
          if (null == e) return e;
          var n = [];
          return U(e, n, null, t, r), n
        },
        forEach: function(e, t, r) {
          if (null == e) return e;
          A(e, q, t = x(null, null, t, r)), I(t)
        },
        count: function(e) {
          return A(e, (function() {
            return null
          }), null)
        },
        toArray: function(e) {
          var t = [];
          return U(e, t, null, (function(e) {
            return e
          })), t
        },
        only: function(e) {
          if (!$(e)) throw Error(m(143));
          return e
        }
      }, t.Component = _, t.Fragment = f, t.Profiler = l, t.PureComponent = k, t.StrictMode = c, t.Suspense = y, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.cloneElement = function(e, t, r) {
        if (null == e) throw Error(m(267, e));
        var o = n({}, e.props),
          a = e.key,
          f = e.ref,
          c = e._owner;
        if (null != t) {
          if (void 0 !== t.ref && (f = t.ref, c = j.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
          for (i in t) E.call(t, i) && !O.hasOwnProperty(i) && (o[i] = void 0 === t[i] && void 0 !== l ? l[i] : t[i])
        }
        var i = arguments.length - 2;
        if (1 === i) o.children = r;
        else if (1 < i) {
          l = Array(i);
          for (var s = 0; s < i; s++) l[s] = arguments[s + 2];
          o.children = l
        }
        return {
          $$typeof: u,
          type: e.type,
          key: a,
          ref: f,
          props: o,
          _owner: c
        }
      }, t.createContext = function(e, t) {
        return void 0 === t && (t = null), (e = {
          $$typeof: s,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
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
          $$typeof: p,
          render: e
        }
      }, t.isValidElement = $, t.lazy = function(e) {
        return {
          $$typeof: b,
          _ctor: e,
          _status: -1,
          _result: null
        }
      }, t.memo = function(e, t) {
        return {
          $$typeof: d,
          type: e,
          compare: void 0 === t ? null : t
        }
      }, t.useCallback = function(e, t) {
        return F().useCallback(e, t)
      }, t.useContext = function(e, t) {
        return F().useContext(e, t)
      }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
        return F().useEffect(e, t)
      }, t.useImperativeHandle = function(e, t, r) {
        return F().useImperativeHandle(e, t, r)
      }, t.useLayoutEffect = function(e, t) {
        return F().useLayoutEffect(e, t)
      }, t.useMemo = function(e, t) {
        return F().useMemo(e, t)
      }, t.useReducer = function(e, t, r) {
        return F().useReducer(e, t, r)
      }, t.useRef = function(e) {
        return F().useRef(e)
      }, t.useState = function(e) {
        return F().useState(e)
      }, t.version = "16.14.0"
    },
    89640: (e, t, r) => {
      e.exports = r(57376)
    }
  }
]);