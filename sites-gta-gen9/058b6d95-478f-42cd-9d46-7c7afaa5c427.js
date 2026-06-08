try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "058b6d95-478f-42cd-9d46-7c7afaa5c427", e._sentryDebugIdIdentifier = "sentry-dbid-058b6d95-478f-42cd-9d46-7c7afaa5c427")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3919], {
    56848(e, t, r) {
      var o = r(70502),
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
        s = {};

      function d(e) {
        return o.isMemo(e) ? f : s[e.$$typeof] || n
      }
      s[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[o.Memo] = f;
      var c = Object.defineProperty,
        i = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        y = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        u = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (u) {
            var n = l(r);
            n && n !== u && e(t, n, o)
          }
          var f = i(r);
          p && (f = f.concat(p(r)));
          for (var s = d(t), b = d(r), m = 0; m < f.length; ++m) {
            var g = f[m];
            if (!(a[g] || o && o[g] || b && b[g] || s && s[g])) {
              var w = y(r, g);
              try {
                c(t, g, w)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    56458(e, t) {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        f = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        d = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        i = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        y = r ? Symbol.for("react.forward_ref") : 60112,
        l = r ? Symbol.for("react.suspense") : 60113,
        u = r ? Symbol.for("react.suspense_list") : 60120,
        b = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        w = r ? Symbol.for("react.fundamental") : 60117,
        $ = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;

      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case i:
                case p:
                case a:
                case s:
                case f:
                case l:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case y:
                    case m:
                    case b:
                    case d:
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

      function S(e) {
        return k(e) === p
      }
      t.AsyncMode = i, t.ConcurrentMode = p, t.ContextConsumer = c, t.ContextProvider = d, t.Element = o, t.ForwardRef = y, t.Fragment = a, t.Lazy = m, t.Memo = b, t.Portal = n, t.Profiler = s, t.StrictMode = f, t.Suspense = l, t.isAsyncMode = function(e) {
        return S(e) || k(e) === i
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return k(e) === c
      }, t.isContextProvider = function(e) {
        return k(e) === d
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return k(e) === y
      }, t.isFragment = function(e) {
        return k(e) === a
      }, t.isLazy = function(e) {
        return k(e) === m
      }, t.isMemo = function(e) {
        return k(e) === b
      }, t.isPortal = function(e) {
        return k(e) === n
      }, t.isProfiler = function(e) {
        return k(e) === s
      }, t.isStrictMode = function(e) {
        return k(e) === f
      }, t.isSuspense = function(e) {
        return k(e) === l
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === s || e === f || e === l || e === u || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === d || e.$$typeof === c || e.$$typeof === y || e.$$typeof === w || e.$$typeof === $ || e.$$typeof === _ || e.$$typeof === g)
      }, t.typeOf = k
    },
    70502(e, t, r) {
      e.exports = r(56458)
    },
    18552(e, t, r) {
      r.d(t, {
        m: () => a
      });
      var o = r(8789);
      const n = e => "dark" === e ? o.xW.dark : o.xW.light,
        a = (e, t) => [o.xW.tokens, o.xW.typography, o.xW.grid, n(e)].join(" ")
    },
    8789(e, t, r) {
      r.d(t, {
        nz: () => o,
        wj: () => n,
        xW: () => a,
        Np: () => f,
        HZ: () => s,
        X6: () => d,
        yU: () => c
      });
      var o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        n = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        a = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        f = "foundry_nu8bkpb",
        s = "--foundry-platform-scales-ratio-65afb887",
        d = "foundry_nu8bkp4",
        c = "foundry_nu8bkp3"
    }
  }
]);