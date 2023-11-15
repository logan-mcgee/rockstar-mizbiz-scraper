/*! For license information please see d72a10acc2c6ecb144c125bc7d1f4507.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [585], {
    9585: (e, t, r) => {
      r.d(t, {
        Z: () => y
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
      var a = r(927);
      r(2571);
      var c = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? a.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = a.createContext(null)),
        s = (c.Consumer, c.Provider, c);

      function i() {
        this.cache = Object.create(null)
      }

      function f(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          o = Object.keys(t),
          n = r.length;
        if (o.length !== n) return !1;
        for (var a = 0; a < n; a++) {
          var c = r[a];
          if (e[c] !== t[c] || !Object.prototype.hasOwnProperty.call(t, c)) return !1
        }
        return !0
      }

      function u(e, t) {
        var r = e.values,
          o = n(e, ["values"]),
          a = t.values,
          c = n(t, ["values"]);
        return f(a, r) && f(o, c)
      }

      function l(e) {
        var t = function() {
            var e = a.useContext(s);
            return function(e) {
              ! function(e, t, r) {
                if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
              }(e)
            }(e), e
          }(),
          r = t.formatMessage,
          o = t.textComponent,
          n = void 0 === o ? a.Fragment : o,
          c = e.id,
          i = e.description,
          f = e.defaultMessage,
          u = e.values,
          l = e.children,
          p = e.tagName,
          y = void 0 === p ? n : p,
          m = r({
            id: c,
            description: i,
            defaultMessage: f
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof l ? l(Array.isArray(m) ? m : [m]) : y ? a.createElement(y, null, a.Children.toArray(m)) : a.createElement(a.Fragment, null, m)
      }
      i.prototype.get = function(e) {
        return this.cache[e]
      }, i.prototype.set = function(e, t) {
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
      }), l.displayName = "FormattedMessage";
      var p = a.memo(l, u);
      p.displayName = "MemoizedFormattedMessage";
      const y = p
    },
    2571: (e, t, r) => {
      var o = r(4607),
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
        s = {};

      function i(e) {
        return o.isMemo(e) ? c : s[e.$$typeof] || n
      }
      s[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[o.Memo] = c;
      var f = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (m) {
            var n = y(r);
            n && n !== m && e(t, n, o)
          }
          var c = u(r);
          l && (c = c.concat(l(r)));
          for (var s = i(t), d = i(r), b = 0; b < c.length; ++b) {
            var g = c[b];
            if (!(a[g] || o && o[g] || d && d[g] || s && s[g])) {
              var v = p(r, g);
              try {
                f(t, g, v)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    7478: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        c = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        i = r ? Symbol.for("react.provider") : 60109,
        f = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.suspense_list") : 60120,
        d = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        v = r ? Symbol.for("react.fundamental") : 60117,
        O = r ? Symbol.for("react.responder") : 60118,
        S = r ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch (e = e.type) {
                case u:
                case l:
                case a:
                case s:
                case c:
                case y:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case f:
                    case p:
                    case b:
                    case d:
                    case i:
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
        return _(e) === l
      }
      t.AsyncMode = u, t.ConcurrentMode = l, t.ContextConsumer = f, t.ContextProvider = i, t.Element = o, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = d, t.Portal = n, t.Profiler = s, t.StrictMode = c, t.Suspense = y, t.isAsyncMode = function(e) {
        return $(e) || _(e) === u
      }, t.isConcurrentMode = $, t.isContextConsumer = function(e) {
        return _(e) === f
      }, t.isContextProvider = function(e) {
        return _(e) === i
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return _(e) === p
      }, t.isFragment = function(e) {
        return _(e) === a
      }, t.isLazy = function(e) {
        return _(e) === b
      }, t.isMemo = function(e) {
        return _(e) === d
      }, t.isPortal = function(e) {
        return _(e) === n
      }, t.isProfiler = function(e) {
        return _(e) === s
      }, t.isStrictMode = function(e) {
        return _(e) === c
      }, t.isSuspense = function(e) {
        return _(e) === y
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === l || e === s || e === c || e === y || e === m || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === d || e.$$typeof === i || e.$$typeof === f || e.$$typeof === p || e.$$typeof === v || e.$$typeof === O || e.$$typeof === S || e.$$typeof === g)
      }, t.typeOf = _
    },
    4607: (e, t, r) => {
      e.exports = r(7478)
    }
  }
]);