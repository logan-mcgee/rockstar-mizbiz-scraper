! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0285d9a6-2b2f-4554-a4ef-d56f54b5e2c7", e._sentryDebugIdIdentifier = "sentry-dbid-0285d9a6-2b2f-4554-a4ef-d56f54b5e2c7")
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
  [8092], {
    39216: (e, t, r) => {
      var o = r(12400),
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
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        f = {};

      function s(e) {
        return o.isMemo(e) ? c : f[e.$$typeof] || n
      }
      f[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, f[o.Memo] = c;
      var l = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        i = Object.getOwnPropertySymbols,
        y = Object.getOwnPropertyDescriptor,
        u = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (d) {
            var n = u(r);
            n && n !== d && e(t, n, o)
          }
          var c = p(r);
          i && (c = c.concat(i(r)));
          for (var f = s(t), b = s(r), m = 0; m < c.length; ++m) {
            var g = c[m];
            if (!(a[g] || o && o[g] || b && b[g] || f && f[g])) {
              var w = y(r, g);
              try {
                l(t, g, w)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    41120: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        f = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        l = r ? Symbol.for("react.context") : 60110,
        p = r ? Symbol.for("react.async_mode") : 60111,
        i = r ? Symbol.for("react.concurrent_mode") : 60111,
        y = r ? Symbol.for("react.forward_ref") : 60112,
        u = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        w = r ? Symbol.for("react.fundamental") : 60117,
        S = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function O(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case p:
                case i:
                case a:
                case f:
                case c:
                case u:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case l:
                    case y:
                    case m:
                    case b:
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
        return O(e) === i
      }
      t.AsyncMode = p, t.ConcurrentMode = i, t.ContextConsumer = l, t.ContextProvider = s, t.Element = o, t.ForwardRef = y, t.Fragment = a, t.Lazy = m, t.Memo = b, t.Portal = n, t.Profiler = f, t.StrictMode = c, t.Suspense = u, t.isAsyncMode = function(e) {
        return $(e) || O(e) === p
      }, t.isConcurrentMode = $, t.isContextConsumer = function(e) {
        return O(e) === l
      }, t.isContextProvider = function(e) {
        return O(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return O(e) === y
      }, t.isFragment = function(e) {
        return O(e) === a
      }, t.isLazy = function(e) {
        return O(e) === m
      }, t.isMemo = function(e) {
        return O(e) === b
      }, t.isPortal = function(e) {
        return O(e) === n
      }, t.isProfiler = function(e) {
        return O(e) === f
      }, t.isStrictMode = function(e) {
        return O(e) === c
      }, t.isSuspense = function(e) {
        return O(e) === u
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === i || e === f || e === c || e === u || e === d || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === s || e.$$typeof === l || e.$$typeof === y || e.$$typeof === w || e.$$typeof === S || e.$$typeof === _ || e.$$typeof === g)
      }, t.typeOf = O
    },
    12400: (e, t, r) => {
      e.exports = r(41120)
    },
    87672: (e, t, r) => {
      r.d(t, {
        C3: () => a,
        Mt: () => f,
        ct: () => n,
        sX: () => c
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function f(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);