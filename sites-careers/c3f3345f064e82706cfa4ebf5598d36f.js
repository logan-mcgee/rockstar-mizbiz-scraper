/*! For license information please see c3f3345f064e82706cfa4ebf5598d36f.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "94cdf235-1304-4b4a-b929-8f5fc94684e0", e._sentryDebugIdIdentifier = "sentry-dbid-94cdf235-1304-4b4a-b929-8f5fc94684e0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [540, 264], {
    1104: (e, t, r) => {
      r.d(t, {
        c: () => s
      });
      var o = r(5819);
      r(6264);
      var n = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? o.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = o.createContext(null)),
        a = (n.Consumer, n.Provider, n),
        f = function() {
          return f = Object.assign || function(e) {
            for (var t, r = 1, o = arguments.length; r < o; r++)
              for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, f.apply(this, arguments)
        };

      function c() {
        this.cache = Object.create(null)
      }

      function s() {
        var e = o.useContext(a);
        return function(e) {
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError, c.prototype.get = function(e) {
        return this.cache[e]
      }, c.prototype.set = function(e, t) {
        this.cache[e] = t
      }, f(f({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: o.Fragment
      })
    },
    6264: (e, t, r) => {
      var o = r(9120),
        n = {
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
        f = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function s(e) {
        return o.isMemo(e) ? f : c[e.$$typeof] || n
      }
      c[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[o.Memo] = f;
      var i = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        y = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (y) {
            var n = d(r);
            n && n !== y && e(t, n, o)
          }
          var f = l(r);
          u && (f = f.concat(u(r)));
          for (var c = s(t), m = s(r), b = 0; b < f.length; ++b) {
            var _ = f[b];
            if (!(a[_] || o && o[_] || m && m[_] || c && c[_])) {
              var g = p(r, _);
              try {
                i(t, _, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    4308: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        f = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        i = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        u = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        y = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;

      function v(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case l:
                case u:
                case a:
                case c:
                case f:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case i:
                    case p:
                    case b:
                    case m:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case n:
              return t
          }
        }
      }

      function $(e) {
        return v(e) === u
      }
      t.AsyncMode = l, t.ConcurrentMode = u, t.ContextConsumer = i, t.ContextProvider = s, t.Element = o, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = m, t.Portal = n, t.Profiler = c, t.StrictMode = f, t.Suspense = d, t.isAsyncMode = function(e) {
        return $(e) || v(e) === l
      }, t.isConcurrentMode = $, t.isContextConsumer = function(e) {
        return v(e) === i
      }, t.isContextProvider = function(e) {
        return v(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return v(e) === p
      }, t.isFragment = function(e) {
        return v(e) === a
      }, t.isLazy = function(e) {
        return v(e) === b
      }, t.isMemo = function(e) {
        return v(e) === m
      }, t.isPortal = function(e) {
        return v(e) === n
      }, t.isProfiler = function(e) {
        return v(e) === c
      }, t.isStrictMode = function(e) {
        return v(e) === f
      }, t.isSuspense = function(e) {
        return v(e) === d
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === u || e === c || e === f || e === d || e === y || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === m || e.$$typeof === s || e.$$typeof === i || e.$$typeof === p || e.$$typeof === g || e.$$typeof === w || e.$$typeof === S || e.$$typeof === _)
      }, t.typeOf = v
    },
    9120: (e, t, r) => {
      e.exports = r(4308)
    },
    1996: (e, t, r) => {
      var o = r(5819),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, r) {
        var o, a = {},
          i = null,
          l = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (l = t.ref), t) f.call(t, o) && !s.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: l,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = i, t.jsxs = i
    },
    3480: (e, t, r) => {
      e.exports = r(1996)
    }
  }
]);
//# sourceMappingURL=c3f3345f064e82706cfa4ebf5598d36f.js.map