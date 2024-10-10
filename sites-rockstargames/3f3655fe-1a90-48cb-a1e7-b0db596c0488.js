! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3f3655fe-1a90-48cb-a1e7-b0db596c0488", e._sentryDebugIdIdentifier = "sentry-dbid-3f3655fe-1a90-48cb-a1e7-b0db596c0488")
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
  [4765], {
    60903: (e, t, r) => {
      function o(e, t) {
        var r = t && t.cache ? t.cache : l,
          o = t && t.serializer ? t.serializer : s;
        return (t && t.strategy ? t.strategy : f)(e, {
          cache: r,
          serializer: o
        })
      }

      function n(e, t, r, o) {
        var n, a = null == (n = o) || "number" == typeof n || "boolean" == typeof n ? o : r(o),
          c = t.get(a);
        return void 0 === c && (c = e.call(this, o), t.set(a, c)), c
      }

      function a(e, t, r) {
        var o = Array.prototype.slice.call(arguments, 3),
          n = r(o),
          a = t.get(n);
        return void 0 === a && (a = e.apply(this, o), t.set(n, a)), a
      }

      function c(e, t, r, o, n) {
        return r.bind(t, e, o, n)
      }

      function f(e, t) {
        return c(e, this, 1 === e.length ? n : a, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => o,
        W: () => p
      });
      var s = function() {
        return JSON.stringify(arguments)
      };

      function i() {
        this.cache = Object.create(null)
      }
      i.prototype.get = function(e) {
        return this.cache[e]
      }, i.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var l = {
          create: function() {
            return new i
          }
        },
        p = {
          variadic: function(e, t) {
            return c(e, this, a, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return c(e, this, n, t.cache.create(), t.serializer)
          }
        }
    },
    3536: (e, t, r) => {
      var o = r(36057),
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
      var i = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        u = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (d) {
            var n = y(r);
            n && n !== d && e(t, n, o)
          }
          var c = l(r);
          p && (c = c.concat(p(r)));
          for (var f = s(t), b = s(r), m = 0; m < c.length; ++m) {
            var g = c[m];
            if (!(a[g] || o && o[g] || b && b[g] || f && f[g])) {
              var h = u(r, g);
              try {
                i(t, g, h)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    93093: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        f = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        i = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        u = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        h = r ? Symbol.for("react.fundamental") : 60117,
        v = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case l:
                case p:
                case a:
                case f:
                case c:
                case y:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case i:
                    case u:
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

      function _(e) {
        return S(e) === p
      }
      t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = i, t.ContextProvider = s, t.Element = o, t.ForwardRef = u, t.Fragment = a, t.Lazy = m, t.Memo = b, t.Portal = n, t.Profiler = f, t.StrictMode = c, t.Suspense = y, t.isAsyncMode = function(e) {
        return _(e) || S(e) === l
      }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
        return S(e) === i
      }, t.isContextProvider = function(e) {
        return S(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return S(e) === u
      }, t.isFragment = function(e) {
        return S(e) === a
      }, t.isLazy = function(e) {
        return S(e) === m
      }, t.isMemo = function(e) {
        return S(e) === b
      }, t.isPortal = function(e) {
        return S(e) === n
      }, t.isProfiler = function(e) {
        return S(e) === f
      }, t.isStrictMode = function(e) {
        return S(e) === c
      }, t.isSuspense = function(e) {
        return S(e) === y
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === f || e === c || e === y || e === d || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === s || e.$$typeof === i || e.$$typeof === u || e.$$typeof === h || e.$$typeof === v || e.$$typeof === w || e.$$typeof === g)
      }, t.typeOf = S
    },
    36057: (e, t, r) => {
      e.exports = r(93093)
    },
    80226: (e, t, r) => {
      r.d(t, {
        C6: () => n,
        Cl: () => a,
        Tt: () => c,
        fX: () => f
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