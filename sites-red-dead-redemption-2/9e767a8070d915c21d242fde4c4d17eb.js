/*! For license information please see 9e767a8070d915c21d242fde4c4d17eb.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84b23790-2587-42f2-8079-d39a82e8d49e", e._sentryDebugIdIdentifier = "sentry-dbid-84b23790-2587-42f2-8079-d39a82e8d49e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [52], {
    56524: (e, t, r) => {
      r.d(t, {
        Os: () => y
      });
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, o.apply(this, arguments)
      };

      function n(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError;
      var a = r(88200);
      r(96264);
      var f, i, s = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? a.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = a.createContext(null)),
        c = (s.Consumer, s.Provider, s);

      function l() {
        this.cache = Object.create(null)
      }

      function u() {
        var e = a.useContext(c);
        return function(e) {
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }
      l.prototype.get = function(e) {
          return this.cache[e]
        }, l.prototype.set = function(e, t) {
          this.cache[e] = t
        }, o(o({}, {
          formats: {},
          messages: {},
          timeZone: void 0,
          defaultLocale: "en",
          defaultFormats: {},
          fallbackOnEmptyString: !0,
          onError: function(e) {},
          onWarn: function(e) {}
        }), {
          textComponent: a.Fragment
        }),
        function(e) {
          e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
        }(f || (f = {})),
        function(e) {
          e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
        }(i || (i = {}));
      var d = function(e) {
        var t = u(),
          r = e.value,
          o = e.children,
          a = n(e, ["value", "children"]);
        return o(t.formatNumberToParts(r, a))
      };

      function p(e) {
        var t = function(t) {
          var r = u(),
            o = t.value,
            a = t.children,
            f = n(t, ["value", "children"]),
            i = "string" == typeof o ? new Date(o || 0) : o;
          return a("formatDate" === e ? r.formatDateToParts(i, f) : r.formatTimeToParts(i, f))
        };
        return t.displayName = i[e], t
      }

      function m(e) {
        var t = function(t) {
          var r = u(),
            o = t.value,
            f = t.children,
            i = n(t, ["value", "children"]),
            s = r[e](o, i);
          if ("function" == typeof f) return f(s);
          var c = r.textComponent || a.Fragment;
          return a.createElement(c, null, s)
        };
        return t.displayName = f[e], t
      }

      function y(e) {
        return e
      }
      d.displayName = "FormattedNumberParts", d.displayName = "FormattedNumberParts", m("formatDate"), m("formatTime"), m("formatNumber"), m("formatList"), m("formatDisplayName"), p("formatDate"), p("formatTime")
    },
    96264: (e, t, r) => {
      var o = r(89120),
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
        i = {};

      function s(e) {
        return o.isMemo(e) ? f : i[e.$$typeof] || n
      }
      i[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, i[o.Memo] = f;
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (m) {
            var n = p(r);
            n && n !== m && e(t, n, o)
          }
          var f = l(r);
          u && (f = f.concat(u(r)));
          for (var i = s(t), y = s(r), b = 0; b < f.length; ++b) {
            var _ = f[b];
            if (!(a[_] || o && o[_] || y && y[_] || i && i[_])) {
              var v = d(r, _);
              try {
                c(t, _, v)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    24308: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        f = r ? Symbol.for("react.strict_mode") : 60108,
        i = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        u = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        y = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        g = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function S(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case l:
                case u:
                case a:
                case i:
                case f:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case d:
                    case b:
                    case y:
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

      function O(e) {
        return S(e) === u
      }
      t.AsyncMode = l, t.ConcurrentMode = u, t.ContextConsumer = c, t.ContextProvider = s, t.Element = o, t.ForwardRef = d, t.Fragment = a, t.Lazy = b, t.Memo = y, t.Portal = n, t.Profiler = i, t.StrictMode = f, t.Suspense = p, t.isAsyncMode = function(e) {
        return O(e) || S(e) === l
      }, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
        return S(e) === c
      }, t.isContextProvider = function(e) {
        return S(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return S(e) === d
      }, t.isFragment = function(e) {
        return S(e) === a
      }, t.isLazy = function(e) {
        return S(e) === b
      }, t.isMemo = function(e) {
        return S(e) === y
      }, t.isPortal = function(e) {
        return S(e) === n
      }, t.isProfiler = function(e) {
        return S(e) === i
      }, t.isStrictMode = function(e) {
        return S(e) === f
      }, t.isSuspense = function(e) {
        return S(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === u || e === i || e === f || e === p || e === m || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === v || e.$$typeof === g || e.$$typeof === w || e.$$typeof === _)
      }, t.typeOf = S
    },
    89120: (e, t, r) => {
      e.exports = r(24308)
    },
    61996: (e, t, r) => {
      var o = r(88200),
        n = Symbol.for("react.element"),
        a = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, r) {
        var o, s = {},
          c = null,
          l = null;
        for (o in void 0 !== r && (c = "" + r), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, o) && !i.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: l,
          props: s,
          _owner: f.current
        }
      }
      t.jsx = s, t.jsxs = s
    },
    63480: (e, t, r) => {
      e.exports = r(61996)
    }
  }
]);
//# sourceMappingURL=9e767a8070d915c21d242fde4c4d17eb.js.map