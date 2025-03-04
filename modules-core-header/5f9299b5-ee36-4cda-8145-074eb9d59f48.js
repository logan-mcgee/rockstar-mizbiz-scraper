! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5f9299b5-ee36-4cda-8145-074eb9d59f48", e._sentryDebugIdIdentifier = "sentry-dbid-5f9299b5-ee36-4cda-8145-074eb9d59f48")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [6718], {
    26324: e => {
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        a = function e(a, i) {
          "single" != (i = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o];
            return n
          }(i, e.options)).quotes && "double" != i.quotes && (i.quotes = "single");
          for (var s = "double" == i.quotes ? '"' : "'", l = i.isIdentifier, u = a.charAt(0), c = "", d = 0, f = a.length; d < f;) {
            var p = a.charAt(d++),
              h = p.charCodeAt(),
              v = void 0;
            if (h < 32 || h > 126) {
              if (h >= 55296 && h <= 56319 && d < f) {
                var m = a.charCodeAt(d++);
                56320 == (64512 & m) ? h = ((1023 & h) << 10) + (1023 & m) + 65536 : d--
              }
              v = "\\" + h.toString(16).toUpperCase() + " "
            } else v = i.escapeEverything ? r.test(p) ? "\\" + p : "\\" + h.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(p) ? "\\" + h.toString(16).toUpperCase() + " " : "\\" == p || !l && ('"' == p && s == p || "'" == p && s == p) || l && n.test(p) ? "\\" + p : p;
            c += v
          }
          return l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(o, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !l && i.wrap ? s + c + s : c
        };
      a.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, a.version = "3.0.0", e.exports = a
    },
    63305: (e, t, r) => {
      var n = r(59337),
        o = {
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
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return n.isMemo(e) ? i : s[e.$$typeof] || o
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[n.Memo] = i;
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (h) {
            var o = p(r);
            o && o !== h && e(t, o, n)
          }
          var i = c(r);
          d && (i = i.concat(d(r)));
          for (var s = l(t), v = l(r), m = 0; m < i.length; ++m) {
            var y = i[m];
            if (!(a[y] || n && n[y] || v && v[y] || s && s[y])) {
              var g = f(r, y);
              try {
                u(t, y, g)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    37685: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        p = r ? Symbol.for("react.suspense") : 60113,
        h = r ? Symbol.for("react.suspense_list") : 60120,
        v = r ? Symbol.for("react.memo") : 60115,
        m = r ? Symbol.for("react.lazy") : 60116,
        y = r ? Symbol.for("react.block") : 60121,
        g = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function C(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case c:
                case d:
                case a:
                case s:
                case i:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case f:
                    case m:
                    case v:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function P(e) {
        return C(e) === d
      }
      t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = m, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function(e) {
        return P(e) || C(e) === c
      }, t.isConcurrentMode = P, t.isContextConsumer = function(e) {
        return C(e) === u
      }, t.isContextProvider = function(e) {
        return C(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return C(e) === f
      }, t.isFragment = function(e) {
        return C(e) === a
      }, t.isLazy = function(e) {
        return C(e) === m
      }, t.isMemo = function(e) {
        return C(e) === v
      }, t.isPortal = function(e) {
        return C(e) === o
      }, t.isProfiler = function(e) {
        return C(e) === s
      }, t.isStrictMode = function(e) {
        return C(e) === i
      }, t.isSuspense = function(e) {
        return C(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === i || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === g || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
      }, t.typeOf = C
    },
    59337: (e, t, r) => {
      e.exports = r(37685)
    },
    72523: (e, t, r) => {
      r.d(t, {
        ms: () => uh,
        c$: () => ch
      });
      var n = {};
      r.r(n), r.d(n, {
        CheckLG: () => wm,
        CheckMD: () => bm,
        CheckXL: () => Cm,
        DashLG: () => xm,
        DashMD: () => Pm,
        DashXL: () => Em
      });
      var o = {};
      r.r(o), r.d(o, {
        DotLG: () => by,
        DotMD: () => gy,
        DotXL: () => wy
      });
      var a = r(91029),
        i = r(57120),
        s = r(62229),
        l = r(20025),
        u = r(75199);
      const c = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? u.VisuallyHidden : s.Fragment;
        return (0, a.jsx)(r, {
          ...t
        })
      };

      function d(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = d(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function h(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var v, m, y = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        g = (v = {
          defaultClassName: "foundry_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd3",
              2: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd4",
              3: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd5",
              4: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd6",
              5: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7",
              6: "foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (m = e => {
          var t = v.defaultClassName,
            r = p(p({}, v.defaultVariants), e);
          for (var n in r) {
            var o, a = null !== (o = r[n]) && void 0 !== o ? o : v.defaultVariants[n];
            if (null != a) {
              var i = a;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var s = v.variantClassNames[n][i];
              s && (t += " " + s)
            }
          }
          for (var [l, u] of v.compoundVariants) y(l, r, v.defaultVariants) && (t += " " + u);
          return t
        }).variants = () => Object.keys(v.variantClassNames), m.classNames = {
          get base() {
            return v.defaultClassName.split(" ")[0]
          },
          get variants() {
            return h(v.variantClassNames, (e => h(e, (e => e.split(" ")[0]))))
          }
        }, m);
      const b = (0, s.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? l.Slot : `h${t}`,
          u = (0, i.v6)(n, {
            className: g({
              level: t
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...u
        })
      }));

      function w(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? C(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = w(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function x(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var E = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        S = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = P(P({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) E(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return x(e.variantClassNames, (e => x(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_kwp8su0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
              bold: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
              hyperlink: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdh",
              allCaps: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _ = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : "p",
          u = (0, i.v6)(n, {
            className: S({
              appearance: r
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));

      function k(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? j(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = k(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function T(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var N = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        L = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = O(O({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) N(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return T(e.variantClassNames, (e => T(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_tv8xa40",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              bold: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm",
              hyperlink: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdn",
              allCaps: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const M = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : "span",
          u = (0, i.v6)(n, {
            className: L({
              appearance: r
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));

      function D(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = D(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function A(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var z = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        V = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = I(I({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) z(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return A(e.variantClassNames, (e => A(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_13plll30",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              bold: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcds"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const F = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : "span",
          u = (0, i.v6)(n, {
            className: V({
              appearance: r
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));

      function q(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = q(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function K(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var H = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        W = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = B(B({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) H(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return K(e.variantClassNames, (e => K(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_xnp8ik0",
          variantClassNames: {
            appearance: {
              default: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdb",
              bold: "foundry_tdsdcd9 foundry_tdsdcd0 foundry_tdsdcdc"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function U(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function G(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? G(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = U(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Y(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : "p",
          u = (0, i.v6)(n, {
            className: W({
              appearance: r
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var Z = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Q = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = X(X({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Z(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Y(e.variantClassNames, (e => Y(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_12nwidl1",
              cite: "foundry_12nwidl2",
              emphasis: "foundry_12nwidl3",
              idiomatic: "foundry_12nwidl4",
              mark: "foundry_12nwidl5",
              "strike-through": "foundry_12nwidl6",
              strong: "foundry_12nwidl7",
              sub: "foundry_12nwidl8",
              sup: "foundry_12nwidl9",
              underline: "foundry_12nwidla",
              default: "foundry_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const J = {
        abbr: "abbr",
        cite: "cite",
        emphasis: "em",
        idiomatic: "i",
        mark: "mark",
        "strike-through": "s",
        strong: "strong",
        sub: "sub",
        sup: "sup",
        underline: "u",
        default: "span"
      };
      (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        semantic: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : J[r] || "span",
          u = (0, i.v6)(n, {
            className: Q({
              semantic: r
            })
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var ee = r(81409),
        te = r.t(ee, 2);
      const re = new Set(["id"]),
        ne = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        oe = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        ae = /^(data-.*)$/;
      const ie = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function se(e) {
        const t = (0, s.useRef)(null);
        return ie((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      const le = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ue = e => e && "window" in e && e.window === e ? e : le(e).defaultView || window;

      function ce(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const de = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        fe = s.createContext(de),
        pe = s.createContext(!1);
      let he = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        ve = new WeakMap;
      const me = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [r] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(be, ye, ge) : (0, s.useContext)(pe));
        return e || `${r?"react-aria":`react-aria${de.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(fe);
        t !== de || he || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(e = !1) {
            let t = (0, s.useContext)(fe),
              r = (0, s.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = ve.get(e);
                null == r ? ve.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, ve.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function ye() {
        return !1
      }

      function ge() {
        return !0
      }

      function be(e) {
        return () => {}
      }
      let we = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ce = new Map;

      function Pe(e) {
        let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = me(t), a = (0, s.useCallback)((e => {
          n.current = e
        }), []);
        return we && Ce.set(o, a), ie((() => {
          let e = o;
          return () => {
            Ce.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = n.current;
          e && (n.current = null, r(e))
        })), o
      }

      function xe(e, t) {
        if (e === t) return e;
        let r = Ce.get(e);
        if (r) return r(t), t;
        let n = Ce.get(t);
        return n ? (n(e), e) : t
      }

      function Ee(e = []) {
        let t = Pe(),
          [r, n] = function(e) {
            let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = se((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            ie((() => {
              n.current && o()
            }));
            let a = se((e => {
              n.current = e(t), o()
            }));
            return [t, a]
          }(t),
          o = (0, s.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return ie(o, [t, o, ...e]), r
      }
      var Se = r(15302);

      function _e(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = ce(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = xe(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, Se.A)(r, o)
          }
        }
        return t
      }

      function ke(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Pe(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function je(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = Pe(t);
          let i = Pe(),
            s = {};
          return r ? (n = n ? `${i} ${n}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }) : n || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: ke({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Ee([Boolean(t), Boolean(r), n, o]), l = Ee([Boolean(t), Boolean(r), n, o]);
        return i = _e(i, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: i,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      let Oe = new Map,
        Te = new Set;

      function Ne() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Oe.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Oe.delete(r.target)), 0 === Oe.size)) {
            for (let e of Te) e();
            Te.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = Oe.get(r.target);
          n || (n = new Set, Oe.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Le(e) {
        if (function() {
            if (null == Me) {
              Me = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Me = !0, !0
                  }
                })
              } catch (e) {}
            }
            return Me
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Ne() : document.addEventListener("DOMContentLoaded", Ne));
      let Me = null;

      function De() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
        var e, t
      }

      function Re(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (t = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (r = window.navigator.userAgentData) || void 0 === r ? void 0 : r.brands.some((e => t.test(e.brand)))) || t.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var t, r
      }
      let Ie = null,
        Ae = new Set,
        ze = new Map,
        Ve = !1,
        Fe = !1;

      function qe(e, t) {
        for (let r of Ae) r(e, t)
      }

      function $e(e) {
        Ve = !0,
          function(e) {
            return !(e.metaKey || !De() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ie = "keyboard", qe("keyboard", e))
      }

      function Be(e) {
        Ie = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ve = !0, qe("pointer", e))
      }

      function Ke(e) {
        Re(e) && (Ve = !0, Ie = "virtual")
      }

      function He(e) {
        e.target !== window && e.target !== document && (Ve || Fe || (Ie = "virtual", qe("virtual", e)), Ve = !1, Fe = !1)
      }

      function We() {
        Ve = !1, Fe = !0
      }

      function Ue(e) {
        if ("undefined" == typeof window || ze.get(ue(e))) return;
        const t = ue(e),
          r = le(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ve = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", $e, !0), r.addEventListener("keyup", $e, !0), r.addEventListener("click", Ke, !0), t.addEventListener("focus", He, !0), t.addEventListener("blur", We, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", Be, !0), r.addEventListener("pointermove", Be, !0), r.addEventListener("pointerup", Be, !0)) : (r.addEventListener("mousedown", Be, !0), r.addEventListener("mousemove", Be, !0), r.addEventListener("mouseup", Be, !0)), t.addEventListener("beforeunload", (() => {
          Ge(e)
        }), {
          once: !0
        }), ze.set(t, {
          focus: n
        })
      }
      const Ge = (e, t) => {
        const r = ue(e),
          n = le(e);
        t && n.removeEventListener("DOMContentLoaded", t), ze.has(r) && (r.HTMLElement.prototype.focus = ze.get(r).focus, n.removeEventListener("keydown", $e, !0), n.removeEventListener("keyup", $e, !0), n.removeEventListener("click", Ke, !0), r.removeEventListener("focus", He, !0), r.removeEventListener("blur", We, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", Be, !0), n.removeEventListener("pointermove", Be, !0), n.removeEventListener("pointerup", Be, !0)) : (n.removeEventListener("mousedown", Be, !0), n.removeEventListener("mousemove", Be, !0), n.removeEventListener("mouseup", Be, !0)), ze.delete(r))
      };
      "undefined" != typeof document && function(e) {
        const t = le(e);
        let r;
        "loading" !== t.readyState ? Ue(e) : (r = () => {
          Ue(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Xe {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function Ye(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const a = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }), [n, o]),
          i = function(e) {
            let t = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            ie((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let r = se((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  o = e => {
                    t.current.isFocused = !1, n.disabled && r(new Xe("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                n.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let r = n === document.activeElement ? null : document.activeElement;
                    n.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: r
                    })), n.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: r
                    }))
                  }
                })), t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [r])
          }(a),
          l = (0, s.useCallback)((e => {
            const t = le(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), o && o(!0), i(e))
          }), [o, r, i]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? l : void 0,
            onBlur: t || !n && !o ? void 0 : a
          }
        }
      }

      function Ze(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(n), t && r.stopPropagation()
        }
      }
      let Qe = s.createContext(null);

      function Je(e) {
        let t = (0, s.useContext)(Qe) || {};
        ! function(e, t) {
          ie((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e);
        let {
          ref: r,
          ...n
        } = t;
        return n
      }

      function et(e, t) {
        let {
          focusProps: r
        } = Ye(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Ze(e.onKeyDown),
              onKeyUp: Ze(e.onKeyUp)
            }
          }
        }(e), o = _e(r, n), a = Je(t), i = e.isDisabled ? {} : a, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = le(e);
            if ("virtual" === Ie) {
              let n = t.activeElement;
              r = () => {
                t.activeElement === n && e.isConnected && Le(e)
              }, requestAnimationFrame((() => {
                0 === Oe.size ? r() : Te.add(r)
              }))
            } else Le(e);
            var r
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: _e({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, i)
        }
      }

      function tt(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
      const rt = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        nt = {
          ...rt,
          customError: !0,
          valid: !1
        },
        ot = {
          isInvalid: !1,
          validationDetails: rt,
          validationErrors: []
        },
        at = (0, s.createContext)({}),
        it = "__formValidationState" + Date.now();

      function st(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function lt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: nt
        } : null
      }

      function ut(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function ct(e, t) {
        let {
          inputElementType: r = "input",
          isDisabled: n = !1,
          isRequired: o = !1,
          isReadOnly: a = !1,
          type: i = "text",
          validationBehavior: l = "aria"
        } = e, [u, c] = function(e, t, r) {
          let [n, o] = (0, s.useState)(e || t), a = (0, s.useRef)(void 0 !== e), i = void 0 !== e;
          (0, s.useEffect)((() => {
            let e = a.current;
            e !== i && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`), a.current = i
          }), [i]);
          let l = i ? e : n,
            u = (0, s.useCallback)(((e, ...t) => {
              let n = (e, ...t) => {
                r && (Object.is(l, e) || r(e, ...t)), i || (l = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((r, ...o) => {
                let a = e(i ? l : r, ...o);
                return n(a, ...t), i ? r : a
              }))) : (i || o(e), n(e, ...t))
            }), [i, l, r]);
          return [l, u]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: d
        } = et(e, t), f = function(e) {
          if (e[it]) {
            let {
              realtimeValidation: t,
              displayValidation: r,
              updateValidation: n,
              resetValidation: o,
              commitValidation: a
            } = e[it];
            return {
              realtimeValidation: t,
              displayValidation: r,
              updateValidation: n,
              resetValidation: o,
              commitValidation: a
            }
          }
          return function(e) {
            let {
              isInvalid: t,
              validationState: r,
              name: n,
              value: o,
              builtinValidation: a,
              validate: i,
              validationBehavior: l = "aria"
            } = e;
            r && (t || (t = "invalid" === r));
            let u = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: nt
              } : null,
              c = (0, s.useMemo)((() => lt(function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return st(r)
                }
                return []
              }(i, o))), [i, o]);
            (null == a ? void 0 : a.validationDetails.valid) && (a = null);
            let d = (0, s.useContext)(at),
              f = (0, s.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => st(d[e]))) : st(d[n]) : []), [d, n]),
              [p, h] = (0, s.useState)(d),
              [v, m] = (0, s.useState)(!1);
            d !== p && (h(d), m(!1));
            let y = (0, s.useMemo)((() => lt(v ? [] : f)), [v, f]),
              g = (0, s.useRef)(ot),
              [b, w] = (0, s.useState)(ot),
              C = (0, s.useRef)(ot),
              [P, x] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!P) return;
              x(!1);
              let e = c || a || g.current;
              ut(e, C.current) || (C.current = e, w(e))
            })), {
              realtimeValidation: u || y || c || a || ot,
              displayValidation: "native" === l ? u || y || b : u || y || c || a || b,
              updateValidation(e) {
                "aria" !== l || ut(b, e) ? g.current = e : w(e)
              },
              resetValidation() {
                let e = ot;
                ut(e, C.current) || (C.current = e, w(e)), "native" === l && x(!1), m(!0)
              },
              commitValidation() {
                "native" === l && x(!0), m(!0)
              }
            }
          }(e)
        }({
          ...e,
          value: u
        }), {
          isInvalid: p,
          validationErrors: h,
          validationDetails: v
        } = f.displayValidation, {
          labelProps: m,
          fieldProps: y,
          descriptionProps: g,
          errorMessageProps: b
        } = je({
          ...e,
          isInvalid: p,
          errorMessage: e.errorMessage || h
        }), w = function(e, t = {}) {
          let {
            labelable: r,
            isLink: n,
            propNames: o
          } = t, a = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (re.has(t) || r && ne.has(t) || n && oe.has(t) || (null == o ? void 0 : o.has(t)) || ae.test(t)) && (a[t] = e[t]);
          return a
        }(e, {
          labelable: !0
        });
        const C = {
          type: i,
          pattern: e.pattern
        };
        return function(e, t, r) {
            let n = (0, s.useRef)(t),
              o = se((() => {
                r && r(n.current)
              }));
            (0, s.useEffect)((() => {
              var t;
              let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
              return null == r || r.addEventListener("reset", o), () => {
                null == r || r.removeEventListener("reset", o)
              }
            }), [e, o])
          }(t, u, c),
          function(e, t, r) {
            let {
              validationBehavior: n,
              focus: o
            } = e;
            ie((() => {
              if ("native" === n && (null == r ? void 0 : r.current)) {
                let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = r.current).validity.valid,
                  validationDetails: tt(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let a = se((() => {
                t.resetValidation()
              })),
              i = se((e => {
                var n;
                t.displayValidation.isInvalid || t.commitValidation();
                let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
                var i;
                !e.defaultPrevented && r && a && function(e) {
                  for (let t = 0; t < e.elements.length; t++) {
                    let r = e.elements[t];
                    if (!r.validity.valid) return r
                  }
                  return null
                }(a) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), Ie = "keyboard", qe("keyboard", null)), e.preventDefault()
              })),
              l = se((() => {
                t.commitValidation()
              }));
            (0, s.useEffect)((() => {
              let e = null == r ? void 0 : r.current;
              if (!e) return;
              let t = e.form;
              return e.addEventListener("invalid", i), e.addEventListener("change", l), null == t || t.addEventListener("reset", a), () => {
                e.removeEventListener("invalid", i), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", a)
              }
            }), [r, i, l, a, n])
          }(e, f, t), (0, s.useEffect)((() => {
            if (t.current instanceof ue(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: m,
            inputProps: _e(w, "input" === r && C, {
              disabled: n,
              readOnly: a,
              required: o && "native" === l,
              "aria-required": o && "aria" === l || void 0,
              "aria-invalid": p || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: u,
              onChange: e => c(e.target.value),
              autoComplete: e.autoComplete,
              autoCapitalize: e.autoCapitalize,
              maxLength: e.maxLength,
              minLength: e.minLength,
              name: e.name,
              placeholder: e.placeholder,
              inputMode: e.inputMode,
              onCopy: e.onCopy,
              onCut: e.onCut,
              onPaste: e.onPaste,
              onCompositionEnd: e.onCompositionEnd,
              onCompositionStart: e.onCompositionStart,
              onCompositionUpdate: e.onCompositionUpdate,
              onSelect: e.onSelect,
              onBeforeInput: e.onBeforeInput,
              onInput: e.onInput,
              ...d,
              ...y
            }),
            descriptionProps: g,
            errorMessageProps: b,
            isInvalid: p,
            validationErrors: h,
            validationDetails: v
          }
      }
      var dt = r(83540);

      function ft(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => dt.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, s.useState)((() => r ? n(e) : t));

        function i() {
          a(n(e))
        }
        return (0, s.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), o
      }

      function pt(e) {
        const t = (0, s.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function ht(...e) {
        const t = (0, s.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }

      function vt(e) {
        const t = (0, s.useRef)(e);
        return (0, s.useEffect)((() => {
          t.current = e
        })), (0, s.useMemo)((() => (...e) => t.current?.(...e)), [])
      }

      function mt({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, s.useState)(e),
            [n] = r,
            o = (0, s.useRef)(n),
            a = vt(t);
          return (0, s.useEffect)((() => {
            o.current !== n && (a(n), o.current = n)
          }), [n, o, a]), r
        }({
          defaultProp: t,
          onChange: r
        }), a = void 0 !== e, i = a ? e : n, l = vt(r), u = (0, s.useCallback)((t => {
          if (a) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else o(t)
        }), [a, e, o, l]);
        return [i, u]
      }

      function yt(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function gt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gt(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = yt(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gt(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function wt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ct = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Pt = "foundry_vq8c3j8",
        xt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bt(bt({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Ct(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wt(e.variantClassNames, (e => wt(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_vq8c3j9 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
          variantClassNames: {
            isInvalid: {
              false: "foundry_vq8c3ja",
              true: "foundry_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Et(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }(0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: r,
        hint: n,
        children: o,
        description: u,
        testId: d,
        className: f,
        rows: p = 5,
        hideLabel: h,
        hideDescription: v,
        hideRequiredAsterisk: m,
        validate: y,
        errorMessage: g,
        ...b
      }, w) => {
        const C = (0, s.useRef)(null),
          P = ht(C, w),
          {
            inputProps: x,
            labelProps: E,
            descriptionProps: S,
            isInvalid: _,
            errorMessageProps: k,
            validationErrors: j
          } = ct({
            ...b,
            label: t,
            description: u,
            isRequired: r,
            inputElementType: "textarea",
            validate: e => y?.(e) ?? (!g || [g])
          }, C),
          O = (0, i.v6)({
            ...x,
            className: f
          }, {
            className: xt({
              isInvalid: _
            }),
            "aria-errormessage": k?.id
          }),
          T = e ? l.Slot : "textarea";
        return (0, a.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || n) && (0, a.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, a.jsx)(c, {
              enabled: !!h,
              children: (0, a.jsx)(M, {
                ...E,
                className: (0, Se.$)("foundry_vq8c3j2", x.disabled && Pt),
                asChild: !0,
                children: (0, a.jsxs)("label", {
                  children: [t, r && !m && (0, a.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, a.jsx)(F, {
              className: "foundry_vq8c3j3",
              children: n
            })]
          }), (0, a.jsx)(T, {
            rows: p,
            ref: P,
            "data-testid": d,
            ...O,
            children: o
          }), u && (0, a.jsx)(c, {
            enabled: j.length > 0 || !!v,
            children: (0, a.jsx)(M, {
              ...S,
              className: (0, Se.$)("foundry_vq8c3j4", x.disabled && Pt),
              children: u
            })
          }), j.length > 0 && (0, a.jsxs)(M, {
            ...k,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, a.jsx)(ee.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), j.join(". ")]
          })]
        })
      })), Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let St = new Map;

      function _t(e, t) {
        if (e === t) return e;
        let r = St.get(e);
        if (r) return r(t), t;
        let n = St.get(t);
        return n ? (n(e), e) : t
      }

      function kt(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Et(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = _t(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, Se.A)(r, o)
          }
        }
        return t
      }
      const jt = new Set(["id"]),
        Ot = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Tt = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Nt = /^(data-.*)$/;
      const Lt = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Mt = e => e && "window" in e && e.window === e ? e : Lt(e).defaultView || window;
      let Dt = new Map,
        Rt = new Set;

      function It() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = Dt.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), Dt.delete(r.target)), 0 === Dt.size)) {
            for (let e of Rt) e();
            Rt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = Dt.get(r.target);
          n || (n = new Set, Dt.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function At(e) {
        requestAnimationFrame((() => {
          0 === Dt.size ? e() : Rt.add(e)
        }))
      }

      function zt(e) {
        if (function() {
            if (null == Vt) {
              Vt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Vt = !0, !0
                  }
                })
              } catch (e) {}
            }
            return Vt
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? It() : document.addEventListener("DOMContentLoaded", It));
      let Vt = null;

      function Ft(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function qt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function $t() {
        return qt(/^Mac/i)
      }

      function Bt() {
        return qt(/^iPad/i) || $t() && navigator.maxTouchPoints > 1
      }

      function Kt() {
        return qt(/^iPhone/i) || Bt()
      }

      function Ht() {
        return Ft(/Android/i)
      }

      function Wt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Ht() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Ut = null,
        Gt = new Set,
        Xt = new Map,
        Yt = !1,
        Zt = !1;

      function Qt(e, t) {
        for (let r of Gt) r(e, t)
      }

      function Jt(e) {
        Yt = !0,
          function(e) {
            return !(e.metaKey || !$t() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ut = "keyboard", Qt("keyboard", e))
      }

      function er(e) {
        Ut = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Yt = !0, Qt("pointer", e))
      }

      function tr(e) {
        Wt(e) && (Yt = !0, Ut = "virtual")
      }

      function rr(e) {
        e.target !== window && e.target !== document && (Yt || Zt || (Ut = "virtual", Qt("virtual", e)), Yt = !1, Zt = !1)
      }

      function nr() {
        Yt = !1, Zt = !0
      }

      function or(e) {
        if ("undefined" == typeof window || Xt.get(Mt(e))) return;
        const t = Mt(e),
          r = Lt(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Yt = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Jt, !0), r.addEventListener("keyup", Jt, !0), r.addEventListener("click", tr, !0), t.addEventListener("focus", rr, !0), t.addEventListener("blur", nr, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", er, !0), r.addEventListener("pointermove", er, !0), r.addEventListener("pointerup", er, !0)) : (r.addEventListener("mousedown", er, !0), r.addEventListener("mousemove", er, !0), r.addEventListener("mouseup", er, !0)), t.addEventListener("beforeunload", (() => {
          ar(e)
        }), {
          once: !0
        }), Xt.set(t, {
          focus: n
        })
      }
      const ar = (e, t) => {
        const r = Mt(e),
          n = Lt(e);
        t && n.removeEventListener("DOMContentLoaded", t), Xt.has(r) && (r.HTMLElement.prototype.focus = Xt.get(r).focus, n.removeEventListener("keydown", Jt, !0), n.removeEventListener("keyup", Jt, !0), n.removeEventListener("click", tr, !0), r.removeEventListener("focus", rr, !0), r.removeEventListener("blur", nr, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", er, !0), n.removeEventListener("pointermove", er, !0), n.removeEventListener("pointerup", er, !0)) : (n.removeEventListener("mousedown", er, !0), n.removeEventListener("mousemove", er, !0), n.removeEventListener("mouseup", er, !0)), Xt.delete(r))
      };
      "undefined" != typeof document && function(e) {
        const t = Lt(e);
        let r;
        "loading" !== t.readyState ? or(e) : (r = () => {
          or(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const ir = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function sr(e, t) {
        ir((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function lr(e) {
        const t = (0, s.useRef)(null);
        return ir((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      class ur {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function cr(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: o
        } = e;
        const a = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
          }), [n, o]),
          i = function(e) {
            let t = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            ir((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let r = lr((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  o = e => {
                    t.current.isFocused = !1, n.disabled && r(new ur("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                n.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let r = n === document.activeElement ? null : document.activeElement;
                    n.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: r
                    })), n.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: r
                    }))
                  }
                })), t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [r])
          }(a),
          l = (0, s.useCallback)((e => {
            const t = Lt(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), o && o(!0), i(e))
          }), [o, r, i]);
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? l : void 0,
            onBlur: t || !n && !o ? void 0 : a
          }
        }
      }

      function dr(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(n), t && r.stopPropagation()
        }
      }
      let fr = s.createContext(null);

      function pr(e, t) {
        let {
          focusProps: r
        } = cr(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: dr(e.onKeyDown),
              onKeyUp: dr(e.onKeyUp)
            }
          }
        }(e), o = kt(r, n), a = function(e) {
          let t = (0, s.useContext)(fr) || {};
          sr(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = Lt(e);
            if ("virtual" === Ut) {
              let r = t.activeElement;
              At((() => {
                t.activeElement === r && e.isConnected && zt(e)
              }))
            } else zt(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: kt({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, i)
        }
      }
      let hr = "default",
        vr = "",
        mr = new WeakMap;

      function yr(e) {
        if (Kt()) {
          if ("default" === hr) {
            const t = Lt(e);
            vr = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          hr = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (mr.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function gr(e) {
        if (Kt()) {
          if ("disabled" !== hr) return;
          hr = "restoring", setTimeout((() => {
            At((() => {
              if ("restoring" === hr) {
                const t = Lt(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = vr || ""), vr = "", hr = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && mr.has(e)) {
          let t = mr.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), mr.delete(e)
        }
      }
      const br = s.createContext({
        register: () => {}
      });

      function wr(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function Cr(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, wr(e, t, "get"))
      }

      function Pr(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }

      function xr(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, wr(e, t, "set"), r), r
      }

      function Er(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        Ft(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && ($t() ? a = !0 : i = !0);
        let u = Ft(/AppleWebKit/i) && !Ft(/Chrome/i) && $t() && !Bt() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Er.isOpening = r, zt(e), e.dispatchEvent(u), Er.isOpening = !1
      }
      br.displayName = "PressResponderContext", Er.isOpening = !1;
      var Sr = new WeakMap;
      class _r {
        continuePropagation() {
          xr(this, Sr, !1)
        }
        get shouldStopPropagation() {
          return Cr(this, Sr)
        }
        constructor(e, t, r) {
          Pr(this, Sr, {
            writable: !0,
            value: void 0
          }), xr(this, Sr, !0), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey
        }
      }
      const kr = Symbol("linkClicked");

      function jr(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          isDisabled: i,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, s.useContext)(br);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = kt(n, e), r()
          }
          return sr(t, e.ref), e
        }(e), [h, v] = (0, s.useState)(!1), m = (0, s.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: y,
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, s.useRef)(new Map),
            t = (0, s.useCallback)(((t, r, n, o) => {
              let a = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: a,
                options: o
              }), t.addEventListener(r, n, o)
            }), []),
            r = (0, s.useCallback)(((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }), []),
            n = (0, s.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, s.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = lr(((e, t) => {
          let o = m.current;
          if (i || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new _r("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        })), w = lr(((e, n, a = !0) => {
          let s = m.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new _r("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !i) {
            let r = new _r("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), C = lr(((e, t) => {
          let r = m.current;
          if (i) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new _r("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), P = lr((e => {
          let t = m.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(Lr(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || gr(t.target))
        })), x = lr((e => {
          c && P(e)
        })), E = (0, s.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (Tr(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var n;
                  Rr(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        Tr(t, n) && !t.repeat && n.contains(t.target) && e.target && C(Lr(e.target, t), "keyboard")
                      };
                    y(Lt(t.currentTarget), "keyup", Et(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && $t() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !Er.isOpening) {
                  let r = !0;
                  if (i && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || Wt(t.nativeEvent))) {
                    i || u || zt(t.currentTarget);
                    let e = b(t, "virtual"),
                      n = C(t, "virtual"),
                      o = w(t, "virtual");
                    r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Tr(t, e.target)) {
                var n;
                Rr(t.target, t.key) && t.preventDefault();
                let r = t.target;
                w(Lr(e.target, t), "keyboard", e.target.contains(r)), g(), "Enter" !== t.key && Or(e.target) && e.target.contains(r) && !t[kr] && (t[kr] = !0, Er(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (a = t.nativeEvent, !Ht() && 0 === a.width && 0 === a.height || 1 === a.width && 1 === a.height && 0 === a.pressure && 0 === a.detail && "mouse" === a.pointerType) return void(e.pointerType = "virtual");
              var a;
              Dr(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, i || u || zt(t.currentTarget), d || yr(e.target), s = b(t, e.pointerType), y(Lt(t.currentTarget), "pointermove", r, !1), y(Lt(t.currentTarget), "pointerup", n, !1), y(Lt(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (Dr(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && Mr(t, t.currentTarget) && C(t, e.pointerType || t.pointerType)
            };
            let r = t => {
                t.pointerId === e.activePointerId && (e.target && Mr(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(Lr(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Lr(e.target, t), e.pointerType, !1), x(t)))
              },
              n = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (Mr(t, e.target) && null != e.pointerType ? w(Lr(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(Lr(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, g(), d || gr(e.target))
              },
              o = e => {
                P(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && P(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (Dr(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = Wt(t.nativeEvent) ? "virtual" : "mouse", i || u || zt(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), y(Lt(t.currentTarget), "mouseup", r, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, r = b(t, e.pointerType)), r && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), x(t)), r && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || C(t, e.pointerType || "mouse"))
            };
            let r = t => {
              0 === t.button && (e.isPressed = !1, g(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && Mr(t, e.target) && null != e.pointerType ? w(Lr(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(Lr(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", i || u || zt(t.currentTarget), d || yr(e.target), b(t, e.pointerType) && t.stopPropagation(), y(Mt(t.currentTarget), "scroll", n, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = Nr(t.nativeEvent, e.activePointerId),
                n = !0;
              r && Mr(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, n = b(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, n = w(t, e.pointerType, !1), x(t)), n && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = Nr(t.nativeEvent, e.activePointerId),
                n = !0;
              r && Mr(r, t.currentTarget) && null != e.pointerType ? (C(t, e.pointerType), n = w(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (n = w(t, e.pointerType, !1)), n && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && gr(e.target), g()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && P(t))
            };
            let n = t => {
              e.isPressed && t.target.contains(e.target) && P({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && P(e)
            }
          }
          return t
        }), [y, i, u, g, d, P, x, w, b, C]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || gr(null !== (e = m.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || h,
          pressProps: kt(p, E)
        }
      }

      function Or(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Tr(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof Mt(o).HTMLInputElement && !Ar(o, r) || o instanceof Mt(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && Or(o)) && "Enter" !== r)
      }

      function Nr(e, t) {
        const r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          const n = r[e];
          if (n.identifier === t) return n
        }
        return null
      }

      function Lr(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function Mr(e, t) {
        let r = t.getBoundingClientRect(),
          n = function(e) {
            let t = 0,
              r = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? r = e.height / 2 : void 0 !== e.radiusY && (r = e.radiusY), {
              top: e.clientY - r,
              right: e.clientX + t,
              bottom: e.clientY + r,
              left: e.clientX - t
            }
          }(e);
        return a = n, !((o = r).left > a.right || a.left > o.right || o.top > a.bottom || a.top > o.bottom);
        var o, a
      }

      function Dr(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function Rr(e, t) {
        return e instanceof HTMLInputElement ? !Ar(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !Or(e)
      }
      const Ir = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Ar(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Ir.has(e.type)
      }

      function zr(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: a,
          onPressStart: i,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: u,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: p,
          target: h,
          rel: v,
          type: m = "button"
        } = e;
        r = "button" === n ? {
          type: m,
          disabled: o
        } : {
          role: "button",
          tabIndex: o ? void 0 : 0,
          href: "a" === n && o ? void 0 : p,
          target: "a" === n ? h : void 0,
          type: "input" === n ? m : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? v : void 0
        };
        let {
          pressProps: y,
          isPressed: g
        } = jr({
          onPressStart: i,
          onPressEnd: s,
          onPressChange: u,
          onPress: a,
          onPressUp: l,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = pr(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = kt(b, y, function(e, t = {}) {
          let {
            labelable: r,
            isLink: n,
            propNames: o
          } = t, a = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (jt.has(t) || r && Ot.has(t) || n && Tt.has(t) || (null == o ? void 0 : o.has(t)) || Nt.test(t)) && (a[t] = e[t]);
          return a
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: g,
          buttonProps: kt(r, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: e => {
              f && (f(e), console.warn("onClick is deprecated, please use onPress"))
            }
          })
        }
      }

      function Vr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Fr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Fr(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Vr(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function $r(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Br = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Kr = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = qr(qr({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Br(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $r(e.variantClassNames, (e => $r(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Hr = Kr({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy1",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              MD: "foundry_17pcofya",
              LG: "foundry_17pcofyb"
            },
            fullWidth: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
            },
            allCaps: {
              true: "foundry_17pcofye",
              false: "foundry_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              allCaps: !1
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdm"],
            [{
              size: "MD",
              allCaps: !0
            }, "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdo"],
            [{
              size: "LG",
              allCaps: !1
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg"],
            [{
              size: "LG",
              allCaps: !0
            }, "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdi"]
          ]
        }),
        Wr = Kr({
          defaultClassName: "foundry_17pcofyl",
          variantClassNames: {
            fullWidth: {
              true: "foundry_17pcofym",
              false: "foundry_17pcofyn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: r,
        children: n,
        onClick: o,
        iconLeft: u,
        iconLeftLabel: c,
        iconRight: d,
        iconRightLabel: f,
        appearance: p,
        size: h = "MD",
        allCaps: v = !1,
        fullWidth: m = !1,
        ...y
      }, g) => {
        const b = (0, s.useRef)(null),
          w = ht(b, g),
          {
            events: C,
            others: P
          } = (0, i.bZ)(y, {
            onPress: !1
          }),
          {
            buttonProps: x,
            isPressed: E
          } = zr({
            ...P,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => P.onPress?.(e) ?? o?.(e)
          }, b),
          S = (0, i.v6)({
            ...x,
            className: r
          }, {
            ...C,
            role: "button",
            "data-pressed": E,
            "data-testid": e,
            className: Hr({
              appearance: p,
              size: h,
              fullWidth: m,
              allCaps: v
            })
          }),
          _ = u && te[u],
          k = d && te[d],
          j = t ? l.Slot : "button",
          O = m && (k || k && _);
        return (0, a.jsxs)(j, {
          ref: w,
          ...S,
          children: [O && (0, a.jsx)("div", {
            className: "foundry_17pcofyo"
          }), _ && (0, a.jsx)(_, {
            label: c || "",
            size: h,
            className: "foundry_17pcofyk"
          }), (0, a.jsx)(l.Slottable, {
            children: n
          }), k && (0, a.jsx)(k, {
            label: f || "",
            size: h,
            className: Wr({
              fullWidth: m
            })
          })]
        })
      }));
      var Ur = {},
        Gr = r(26324),
        Xr = r.n(Gr);
      class Yr {
        constructor(e) {
          const {
            failure: t,
            gotoFn: r,
            output: n
          } = this._buildTables(e);
          this.gotoFn = r, this.output = n, this.failure = t
        }
        _buildTables(e) {
          const t = {
              0: {}
            },
            r = {};
          let n = 0;
          for (const o of e) {
            let e = 0;
            for (const a of o) t[e] && a in t[e] ? e = t[e][a] : (n++, t[e][a] = n, t[n] = {}, e = n, r[n] = []);
            r[e].push(o)
          }
          const o = {},
            a = [];
          for (const e in t[0]) {
            const r = t[0][e];
            o[r] = 0, a.push(r)
          }
          for (; a.length > 0;) {
            const e = a.shift();
            if (void 0 !== e)
              for (const n in t[e]) {
                const i = t[e][n];
                a.push(i);
                let s = o[e];
                for (; s > 0 && !(n in t[s]);) s = o[s];
                if (n in t[s]) {
                  const e = t[s][n];
                  o[i] = e, r[i] = [...r[i], ...r[e]]
                } else o[i] = 0
              }
          }
          return {
            gotoFn: t,
            output: r,
            failure: o
          }
        }
        search(e) {
          let t = 0;
          const r = [];
          for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
            if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
              const e = this.output[t];
              r.push([n, e])
            }
          }
          return r
        }
      }
      var Zr, Qr, Jr = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        en = !1;

      function tn(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(Zr || (Zr = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(Qr || (Qr = {}));
      const rn = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        nn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        on = new Map([
          [126, Qr.Element],
          [94, Qr.Start],
          [36, Qr.End],
          [42, Qr.Any],
          [33, Qr.Not],
          [124, Qr.Hyphen]
        ]),
        an = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        sn = new Set(["contains", "icontains"]);

      function ln(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function un(e) {
        return e.replace(nn, ln)
      }

      function cn(e) {
        return 39 === e || 34 === e
      }

      function dn(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function fn(e) {
        const t = [],
          r = pn(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function pn(e, t, r) {
        let n = [];

        function o(e) {
          const n = t.slice(r + e).match(rn);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = n;
          return r += e + o.length, un(o)
        }

        function a(e) {
          for (r += e; r < t.length && dn(t.charCodeAt(r));) r++
        }

        function i() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || s(r) ? 41 !== t.charCodeAt(r) || s(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return un(t.slice(e, r - 1))
        }

        function s(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return 1 == (1 & r)
        }

        function l() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case Zr.Adjacent:
                case Zr.Child:
                case Zr.Descendant:
                case Zr.Parent:
                case Zr.Sibling:
                case Zr.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          n.length > 0 && n[n.length - 1].type === Zr.Descendant ? n[n.length - 1].type = e : (l(), n.push({
            type: e
          }))
        }

        function c(e, t) {
          n.push({
            type: Zr.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (n.length && n[n.length - 1].type === Zr.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
        }
        if (a(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== n.length && n[0].type === Zr.Descendant || (l(), n.push({
                type: Zr.Descendant
              })), a(1);
              break;
            case 62:
              u(Zr.Child), a(1);
              break;
            case 60:
              u(Zr.Parent), a(1);
              break;
            case 126:
              u(Zr.Sibling), a(1);
              break;
            case 43:
              u(Zr.Adjacent), a(1);
              break;
            case 46:
              c("class", Qr.Element);
              break;
            case 35:
              c("id", Qr.Equals);
              break;
            case 91: {
              let e;
              a(1);
              let i = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (i = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (i = e, e = o(1))), a(0);
              let l = Qr.Exists;
              const u = on.get(t.charCodeAt(r));
              if (u) {
                if (l = u, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                a(2)
              } else 61 === t.charCodeAt(r) && (l = Qr.Equals, a(1));
              let c = "",
                d = null;
              if ("exists" !== l) {
                if (cn(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || s(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  c = un(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!dn(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || s(r));) r += 1;
                  c = un(t.slice(e, r))
                }
                a(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (d = !1, a(1)) : 105 === e && (d = !0, a(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const f = {
                type: Zr.Attribute,
                name: e,
                action: l,
                value: c,
                namespace: i,
                ignoreCase: d
              };
              n.push(f);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: Zr.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? i() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let a = null;
              if (40 === t.charCodeAt(r))
                if (an.has(e)) {
                  if (cn(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (a = [], r = pn(a, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (a = i(), sn.has(e)) {
                    const e = a.charCodeAt(0);
                    e === a.charCodeAt(a.length - 1) && cn(e) && (a = a.slice(1, -1))
                  }
                  a = un(a)
                } n.push({
                type: Zr.Pseudo,
                name: e,
                data: a
              });
              break
            }
            case 44:
              d(), n = [], a(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && a(0);
                break
              }
              let i, s = null;
              if (42 === e) r += 1, i = "*";
              else if (124 === e) {
                if (i = "", 124 === t.charCodeAt(r + 1)) {
                  u(Zr.ColumnCombinator), a(2);
                  break
                }
              } else {
                if (!rn.test(t.slice(r))) break e;
                i = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (s = i, 42 === t.charCodeAt(r + 1) ? (i = "*", r += 2) : i = o(1)), n.push("*" === i ? {
                type: Zr.Universal,
                namespace: s
              } : {
                type: Zr.Tag,
                name: i,
                namespace: s
              })
            }
          }
        }
        return d(), r
      }

      function hn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function vn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hn(Object(r), !0).forEach((function(t) {
            mn(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function mn(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      const yn = function e(t) {
        return r.withOptions = r => e(vn(vn({}, t), r)), r;

        function r(e, ...r) {
          const n = "string" == typeof e ? [e] : e.raw,
            {
              escapeSpecialCharacters: o = Array.isArray(e)
            } = t;
          let a = "";
          for (let e = 0; e < n.length; e++) {
            let t = n[e];
            o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), a += t, e < r.length && (a += r[e])
          }
          const i = a.split("\n");
          let s = null;
          for (const e of i) {
            const t = e.match(/^(\s+)\S+/);
            if (t) {
              const e = t[1].length;
              s = s ? Math.min(s, e) : e
            }
          }
          if (null !== s) {
            const e = s;
            a = i.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
          }
          return a = a.trim(), o && (a = a.replace(/\\n/g, "\n")), a
        }
      }({});
      var gn = function() {
        return gn = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, gn.apply(this, arguments)
      };

      function bn(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function wn(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }
      var Cn, Pn = /(\u000D|\u000C|\u000D\u000A)/g,
        xn = /[\u0000\uD800-\uDFFF]/g,
        En = /(\/\*)[\s\S]*?(\*\/)/g,
        Sn = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
            var a = e.charCodeAt(o);
            if (a === r) return [o, String.fromCharCode.apply(null, n)];
            if (92 === a) {
              var i = kn(e, o);
              if (null === i) return null;
              var s = wn(i, 2),
                l = s[0],
                u = s[1];
              n.push(u), o = l
            } else {
              if (10 === a) return null;
              n.push(a)
            }
          }
          return null
        },
        _n = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        kn = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], o = Math.min(t + 7, e.length), a = t + 2; a < o; a += 1) {
              var i = e.charCodeAt(a);
              if (!(i >= 48 && i <= 57 || i >= 65 && i <= 70 || i >= 97 && i <= 102)) break;
              n.push(i)
            }
            if (a < e.length) {
              var s = e.charCodeAt(a);
              9 !== s && 32 !== s && 10 !== s || (a += 1)
            }
            return [a - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        jn = function(e, t) {
          var r = On(e, t);
          if (null === r) return null;
          var n = wn(r, 3),
            o = n[0],
            a = n[1],
            i = n[2],
            s = Nn(e, o + 1);
          if (null !== s) {
            var l = wn(s, 2);
            return [l[0],
              ["<dimension-token>", a, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", a]] : [o, ["<number-token>", a, i]]
        },
        On = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && n.push(45)); t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) n.push(u), t += 1;
          if (t + 1 < e.length) {
            var a = e.charCodeAt(t),
              i = e.charCodeAt(t + 1);
            if (46 === a && i >= 48 && i <= 57)
              for (n.push(a, i), r = "number", t += 2; t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) n.push(u), t += 1
          }
          if (t + 1 < e.length) {
            a = e.charCodeAt(t), i = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === a || 101 === a) {
              var l = i >= 48 && i <= 57;
              if (l || (43 === i || 45 === i) && s >= 48 && s <= 57)
                for (r = "number", l ? (n.push(69, i), t += 2) : 45 === i ? (n.push(69, 45, s), t += 3) : (n.push(69, s), t += 3); t < e.length;) {
                  var u;
                  if (!((u = e.charCodeAt(t)) >= 48 && u <= 57)) break;
                  n.push(u), t += 1
                }
            }
          }
          var c = String.fromCharCode.apply(null, n),
            d = "number" === r ? parseFloat(c) : parseInt(c);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, r]
        },
        Tn = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = kn(e, t);
              if (null === o) break;
              var a = wn(o, 2),
                i = a[0],
                s = a[1];
              r.push(s), t = i
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        Nn = function(e, t) {
          if (e.length <= t || !_n(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = kn(e, t);
              if (null === o) break;
              var a = wn(o, 2),
                i = a[0],
                s = a[1];
              r.push(s), t = i
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        Ln = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === n.length || (o = !0);
            else if (92 === r) {
              var a = kn(e, t);
              if (null === a || o) return null;
              var i = wn(a, 2),
                s = i[0],
                l = i[1];
              n.push(l), t = s
            } else {
              if (o) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        Mn = function(e, t) {
          var r = Nn(e, t);
          if (null === r) return null;
          var n = wn(r, 2),
            o = n[0],
            a = n[1];
          if ("url" === a.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var i = 2; o + i < e.length; i += 1) {
                var s = e.charCodeAt(o + i);
                if (34 === s || 39 === s) return [o + 1, a.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Ln(e, o + i);
                  if (null === l) return null;
                  var u = wn(l, 2);
                  return [u[0], u[1], "<url-token>"]
                }
              }
              return [o + 1, a.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, a.toLowerCase(), "<function-token>"];
          return [o, a.toLowerCase(), "<ident-token>"]
        },
        Dn = function(e) {
          if (null === e.mediaCondition) return e;
          var t = Rn(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        Rn = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var o = e(n);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var a = [r, 1], i = 0; i < o.children.length; i++) a.push(o.children[i]);
                t.children.splice.apply(t.children, a)
              }
            }
          }
          return t
        },
        In = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        An = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Pn, "\n").replace(xn, "�")).replace(En, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (S = Sn(e, t))) return null;
                var a = wn(S, 2),
                  i = a[0],
                  s = a[1];
                r.push({
                  type: "<string-token>",
                  value: s
                }), t = i
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (h = e.charCodeAt(t + 1)) || h >= 65 && h <= 90 || h >= 97 && h <= 122 || h >= 128 || h >= 48 && h <= 57 || 92 === h && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = _n(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (S = Tn(e, t + 1))) {
                    var u = wn(S, 2);
                    i = u[0], s = u[1], r.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = i;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (S = Sn(e, t))) return null;
                var c = wn(S, 2);
                i = c[0], s = c[1], r.push({
                  type: "<string-token>",
                  value: s
                }), t = i
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var d = jn(e, t);
                if (null === d) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var f = wn(d, 2);
                  i = f[0], "<dimension-token>" === (x = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = i
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (g = jn(e, t))) {
                  var p = wn(g, 2);
                  i = p[0], "<dimension-token>" === (x = p[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = i;
                  continue
                }
                if (t + 2 < e.length) {
                  var h = e.charCodeAt(t + 1),
                    v = e.charCodeAt(t + 2);
                  if (45 === h && 62 === v) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (S = Mn(e, t))) {
                  var m = wn(S, 3),
                    y = (i = m[0], s = m[1], m[2]);
                  r.push({
                    type: y,
                    value: s
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var g;
                if (null !== (g = jn(e, t))) {
                  var b = wn(g, 2);
                  i = b[0], "<dimension-token>" === (x = b[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: x[1],
                    unit: x[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === x[0] ? r.push({
                    type: x[0],
                    value: x[1],
                    flag: x[2]
                  }) : r.push({
                    type: x[0],
                    value: x[1],
                    flag: "number"
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  h = e.charCodeAt(t + 1), v = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === h && 45 === v && 45 === w) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (S = Nn(e, t + 1))) {
                  var C = wn(S, 2);
                  i = C[0], s = C[1], r.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = i;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (S = kn(e, t))) return null;
                var P = wn(S, 2);
                i = P[0], s = P[1], e = e.slice(0, t) + s + e.slice(i + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var x, E = wn(S = jn(e, t), 2);
                i = E[0], "<dimension-token>" === (x = E[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: x[1],
                  unit: x[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === x[0] ? r.push({
                  type: x[0],
                  value: x[1],
                  flag: x[2]
                }) : r.push({
                  type: x[0],
                  value: x[1],
                  flag: "number"
                }), t = i
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var S;
                if (null === (S = Mn(e, t))) return null;
                var _ = wn(S, 3);
                i = _[0], s = _[1], y = _[2], r.push({
                  type: y,
                  value: s
                }), t = i
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw In("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw In("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var a = t[o];
              if ("<{-token>" === a.type) {
                n = o;
                break
              }
              if ("<semicolon-token>" === a.type) throw In("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Vn(t)
        },
        zn = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(gn(gn({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Vn = function(e) {
          for (var t, r, n = [
              []
            ], o = 0; o < e.length; o++) {
            var a = e[o];
            "<comma-token>" === a.type ? n.push([]) : n[n.length - 1].push(a)
          }
          var i = n.map(zn);
          if (1 === i.length && 0 === i[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = i.map((function(e) {
              return 0 === e.length ? null : Fn(e)
            })),
            l = [];
          try {
            for (var u = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), c = u.next(); !c.done; c = u.next()) {
              var d = c.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              c && !c.done && (r = u.return) && r.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw In("No valid media queries");
          return l
        },
        Fn = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: qn(e, !0)
            }
          } catch (e) {
            throw In("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw In("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var a = null === r ? 0 : 1;
            if (e.length <= a) throw In("Expected extra token in media query");
            var i = e[a];
            if ("<ident-token>" === i.type) {
              var s = i.value;
              if ("all" === s) n = "all";
              else if ("print" === s || "screen" === s) n = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw In("Unknown ident '".concat(s, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== i.type) throw In("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: qn(l, !0)
                }
              } catch (e) {
                throw In("Expected media condition after '('", e)
              }
            }
            if (a + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(a + 4 < e.length)) throw In("Expected media condition after media prefix");
            var u = e[a + 1];
            if ("<ident-token>" !== u.type || "and" !== u.value) throw In("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: qn(e.slice(a + 2), !1)
              }
            } catch (e) {
              throw In("Expected media condition after 'and'", e)
            }
          }
        },
        qn = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, a = t.length - 1, i = 0, s = 0, l = 0; l < t.length; l++) {
            var u = t[l];
            if ("<(-token>" === u.type ? (s += 1, i = Math.max(i, s)) : "<)-token>" === u.type && (s -= 1), 0 === s) {
              a = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, a + 1);
          if (o = 1 === i ? $n(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), a === t.length - 1) return {
            operator: n,
            children: [o]
          };
          var d = t[a + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== d.value) throw new Error("'".concat(d.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var f = e(t.slice(a + 2), r, d.value);
          return {
            operator: d.value,
            children: [o].concat(f.children)
          }
        },
        $n = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                o = e[r + 1],
                a = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === a.type && a.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: a.value,
                  wsBefore: n.wsBefore,
                  wsAfter: a.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
          }
          var i = t[1];
          if ("<ident-token>" === i.type && 3 === t.length) return {
            context: "boolean",
            feature: i.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var s = t[3];
            if ("<number-token>" === s.type || "<dimension-token>" === s.type || "<ratio-token>" === s.type || "<ident-token>" === s.type) {
              var l = t[1].value,
                u = null,
                c = l.slice(0, 4);
              return "min-" === c ? (u = "min", l = l.slice(4)) : "max-" === c && (u = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: u,
                feature: l,
                value: bn(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = Bn(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw In("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        Bn = function(e) {
          var t, r, n, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var a = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            i = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? a[i ? "leftOp" : "rightOp"] = "<" : a[i ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? a[i ? "leftOp" : "rightOp"] = ">" : a[i ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              a[i ? "leftOp" : "rightOp"] = "="
            }
            if (i) a.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              a.featureName = e[1].value
            }
            var s = 2 + (null !== (r = null === (t = a[i ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[s];
            if (i) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (a.featureName = l.value, e.length >= 7) {
                var u = e[s + 1],
                  c = e[s + 2];
                if ("<delim-token>" !== u.type) throw new Error("Invalid range");
                var d = u.value;
                if (60 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? a.rightOp = "<" : a.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? a.rightOp = ">" : a.rightOp = ">="
                }
                var f = e[s + 1 + (null !== (o = null === (n = a.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)];
                a.rightToken = f
              } else if (s + 2 !== e.length) throw new Error("Invalid range")
            } else a.rightToken = l;
            var p = null,
              h = a.leftToken,
              v = a.leftOp,
              m = a.featureName,
              y = a.rightOp,
              g = a.rightToken,
              b = null;
            if (null !== h)
              if ("<ident-token>" === h.type) {
                var w = h.type;
                "infinite" === (P = h.value) && (b = {
                  type: w,
                  value: P
                })
              } else "<number-token>" !== h.type && "<dimension-token>" !== h.type && "<ratio-token>" !== h.type || (h.wsBefore, h.wsAfter, b = bn(h, ["wsBefore", "wsAfter"]));
            var C = null;
            if (null !== g)
              if ("<ident-token>" === g.type) {
                var P;
                w = g.type, "infinite" === (P = g.value) && (C = {
                  type: w,
                  value: P
                })
              } else "<number-token>" !== g.type && "<dimension-token>" !== g.type && "<ratio-token>" !== g.type || (g.wsBefore, g.wsAfter, C = bn(g, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== C)
              if ("<" !== v && "<=" !== v || "<" !== y && "<=" !== y) {
                if (">" !== v && ">=" !== v || ">" !== y && ">=" !== y) throw new Error("Invalid range");
                p = {
                  leftToken: b,
                  leftOp: v,
                  featureName: m,
                  rightOp: y,
                  rightToken: C
                }
              } else p = {
                leftToken: b,
                leftOp: v,
                featureName: m,
                rightOp: y,
                rightToken: C
              };
            else(null === b && null === v && null !== y && null !== C || null !== b && null !== v && null === y && null === C) && (p = {
              leftToken: b,
              leftOp: v,
              featureName: m,
              rightOp: y,
              rightToken: C
            });
            return p
          }
          throw new Error("Invalid range")
        };

      function Kn(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Hn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Wn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Hn(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Kn(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Un(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function Gn(e, t) {
        for (var r in e) t(e[r], r)
      }

      function Xn(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class Yn {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new Yn
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var o, a = t[n],
              i = null !== (o = r.precedenceLookup.get(a)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(n + 1)) i.add(s);
            r.precedenceLookup.set(a, i)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(n)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: a,
              children: i
            }
            of e.ruleset.values()) {
            var s = this.ruleset.get(a);
            if (s && !s.children.isCompatible(i)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
            })
          }
          for (var [a, i] of e.precedenceLookup.entries()) {
            var s, l = null !== (s = this.precedenceLookup.get(a)) && void 0 !== s ? s : new Set;
            this.precedenceLookup.set(a, new Set([...l, ...i]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            r = function(r) {
              var o = e.ruleset.get(n);
              if (!o) throw new Error("Can't find condition for ".concat(n));
              var a = t.findIndex((e => r.has(e.query)));
              a > -1 ? t.splice(a, 0, o) : t.push(o)
            };
          for (var [n, o] of this.precedenceLookup.entries()) r(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var a of r) o[a.selector] = a.rule;
            Object.assign(o, ...n.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var Zn, Qn = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        Jn = Object.keys(Qn),
        eo = Qn,
        to = (e, t) => new Error(yn(Zn || (Zn = tn(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        ro = e => {
          if ("@media " === e) throw to(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = Dn(e[t])
            })(An(e))
          } catch (t) {
            throw to(e, t.message)
          }
        },
        no = ["vars"],
        oo = ["content"],
        ao = "__DECLARATION",
        io = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function so(e, t, r, n) {
        var o = e.slice(0, t),
          a = e.slice(r);
        return "".concat(o).concat(n).concat(a)
      }
      var lo = [...Jn, "@layer", "@media", "@supports", "@container", "selectors"];
      class uo {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new Yn], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new Yr(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type) {
            if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
              var [t, r] = e;
              return [t, this.transformProperties(r)]
            }))), void this.keyframesRules.push(e);
            if (this.currConditionalRuleset = new Yn, "layer" === e.type) {
              var t = "@layer ".concat(e.name);
              this.addLayer([t])
            } else {
              var r = Xn(e.rule, lo);
              this.addRule({
                selector: e.selector,
                rule: r
              }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            a = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, o, a)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return Gn(e, ((t, r) => {
            "number" != typeof t || 0 === t || io[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = Un(e, no);
          return t ? Wn(Wn({}, function(e, t) {
            var r, n, o, a = {};
            for (var i in e) a[(e[i], r = i, n = void 0, o = void 0, (o = (n = r).match(/^var\((.*)\)$/)) ? o[1] : n)] = e[i];
            return a
          }(t)), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = Un(e, oo);
          return void 0 === t ? r : Wn({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(Xr()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (Jr.length < 1) throw new Error("No adapter configured");
                  return Jr[Jr.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: o
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var a = this.localClassNamesSearch.search(t), i = t.length, s = a.length - 1; s >= 0; s--) {
            var [l, [u]] = a[s], c = l - u.length + 1;
            c >= i || (i = c, "." !== t[c - 1] && (t = so(t, c, l + 1, this.transformClassname(u))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          Gn(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(Xr()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = fn(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()))
              }
              r.forEach((e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(yn(Cn || (Cn = tn(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var a = {
              selector: o,
              rule: Xn(t, lo)
            };
            r ? this.addConditionalRule(a, r) : this.addRule(a);
            var i = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(i, t["@layer"], r), this.transformSupports(i, t["@supports"], r), this.transformMedia(i, t["@media"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, a] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var i = "@media ".concat(o);
              ro(i);
              var s = [...n, i];
              this.addConditionalRule({
                selector: e.selector,
                rule: Xn(a, lo)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, a, s), this.transformSelectors(e, a, s)), this.transformLayer(e, a["@layer"], s), this.transformSupports(e, a["@supports"], s), this.transformContainer(e, a["@container"], s)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), Gn(t, ((t, r) => {
            var o = "@container ".concat(r),
              a = [...n, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: Xn(t, lo)
            }, a), "local" === e.type && (this.transformSimplePseudos(e, t, a), this.transformSelectors(e, t, a)), this.transformLayer(e, t["@layer"], a), this.transformSupports(e, t["@supports"], a), this.transformMedia(e, t["@media"], a)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), Gn(t, ((t, r) => {
            var o = [...n, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: Xn(t, lo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), Gn(t, ((t, r) => {
            var o = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: Xn(t, lo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (eo[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(co({
            "@font-face": t
          }));
          for (var r of this.keyframesRules) e.push(co({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var n of this.layers.values()) {
            var [o, ...a] = n.reverse(), i = {
              [o]: ao
            };
            for (var s of a) i = {
              [s]: i
            };
            e.push(co(i))
          }
          for (var l of this.rules) e.push(co({
            [l.selector]: l.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var c of u.renderToArray()) e.push(co(c));
          return e.filter(Boolean)
        }
      }

      function co(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var o, a = e[n];
            a && Array.isArray(a) ? r.push(...a.map((e => co({
              [n]: e
            }, t)))) : a && "object" == typeof a ? 0 === Object.keys(a).length || r.push("".concat(t).concat(n, " {\n").concat(co(a, t + "  "), "\n").concat(t, "}")) : a === ao ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (o = n, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(a, ";"))
          };
        for (var o of Object.keys(e)) n(o);
        return r.join("\n")
      }
      r(94751);
      var fo = new Set,
        po = [],
        ho = [],
        vo = {
          appendCss: e => {
            ho.push(e)
          },
          registerClassName: e => {
            fo.add(e)
          },
          registerComposition: e => {
            po.push(e)
          },
          markCompositionUsed: () => {},
          onEndFileScope: e => {
            var t = function(e) {
              var {
                localClassNames: t,
                cssObjs: r,
                composedClassLists: n
              } = e, o = new uo(t, n);
              for (var a of r) o.processCssObj(a);
              return o.toCss()
            }({
              localClassNames: Array.from(fo),
              composedClassLists: po,
              cssObjs: ho
            }).join("\n");
            (e => {
              var {
                fileScope: t,
                css: r
              } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = Ur[n];
              if (!o) {
                var a = document.createElement("style");
                t.packageName && a.setAttribute("data-package", t.packageName), a.setAttribute("data-file", t.filePath), a.setAttribute("type", "text/css"), o = Ur[n] = a, document.head.appendChild(a)
              }
              o.innerHTML = r
            })({
              fileScope: e,
              css: t
            }), ho = []
          },
          getIdentOption: () => "short"
        };
      en || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        en = !0, Jr.push(e)
      })(vo);
      var mo = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        yo = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        go = "foundry_nu8bkpar",
        bo = "foundry_nu8bkpat",
        wo = "foundry_nu8bkpaq",
        Co = "foundry_nu8bkpas",
        Po = "--foundry_nu8bkp0",
        xo = "foundry_nu8bkp1";
      const Eo = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: yo,
          platformScaleBreakpoints: mo,
          locale: "en-US"
        }),
        So = (e, t) => "dark" === e ? "more" === t ? bo : go : "more" === t ? Co : wo;
      const _o = () => i.X3 ? null : document.body;
      (0, s.forwardRef)((({
        children: e,
        className: t,
        container: r = _o(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: u,
        contrastMode: c,
        defaultContrastMode: d,
        platformScaleBreakpoints: f,
        platformScaleRatios: p,
        defaultPlatformScale: h,
        platformScale: v,
        locale: m = "en-US"
      }, y) => {
        const g = (0, s.useRef)(null),
          b = ht(g, y),
          w = (0, s.useRef)(r),
          {
            ratio: C,
            scale: P
          } = function(e) {
            const t = (0, s.useMemo)((() => ({
                ...yo,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              r = (0, s.useMemo)((() => ({
                ...mo,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [n, o] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
              a = (0, s.useRef)([]),
              l = () => {
                if (!i.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of a.current) t.removeEventListener("change", e);
                  a.current = []
                }
              };
            return (0, s.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!i.X3) {
                l();
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", n), t.matches && o(e), a.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), l)), [r, e.platformScale]), {
              scale: n,
              ratio: t[n]
            }
          }({
            platformScaleBreakpoints: f,
            platformScaleRatios: p,
            defaultPlatformScale: h,
            platformScale: v
          }),
          {
            appearanceClass: x,
            otherAppearanceClasses: E,
            providerColor: S,
            providerContrast: _
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = ft("(prefers-color-scheme: light)"),
              a = ft("(prefers-color-scheme: dark)"),
              i = ft("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || a && "dark" || t,
              u = r || i && "more" || n,
              c = (0, s.useMemo)((() => So(l, u)), [l, u]),
              d = (0, s.useMemo)((() => ((e, t) => {
                const r = So(e, t);
                return [wo, go, Co, bo].filter((e => e !== r))
              })(l, u)), [l, u]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: u
            }
          }({
            colorScheme: o,
            defaultColorScheme: u,
            contrastMode: c,
            defaultContrastMode: d
          });
        return ((e, t, r, n, o) => {
          const a = pt(o),
            i = pt(e.current);
          (0, s.useEffect)((() => {
            e.current?.classList.contains(xo) || e.current?.classList.add(xo), e.current?.classList.add(r), e.current?.classList.remove(...n), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [r, o]), (0, s.useEffect)((() => {
            e.current?.style.setProperty(Po, t.toString())
          }), [t]), (0, s.useEffect)((() => {
            i?.classList.remove(xo), i?.classList.remove(r), i?.style.removeProperty(Po), o && i?.classList.remove(o)
          }), [i])
        })(n ? g : w, C, x, E, t), (0, a.jsx)(Eo.Provider, {
          value: {
            locale: m,
            defaultColorScheme: u,
            colorScheme: S,
            defaultContrastMode: d,
            contrastMode: _,
            defaultPlatformScale: h,
            platformScale: P,
            platformScaleRatios: p,
            platformScaleBreakpoints: f
          },
          children: n ? (0, a.jsx)(l.Slot, {
            ref: b,
            children: e
          }) : e
        })
      }));
      var ko = Bo(),
        jo = e => Vo(e, ko),
        Oo = Bo();
      jo.write = e => Vo(e, Oo);
      var To = Bo();
      jo.onStart = e => Vo(e, To);
      var No = Bo();
      jo.onFrame = e => Vo(e, No);
      var Lo = Bo();
      jo.onFinish = e => Vo(e, Lo);
      var Mo = [];
      jo.setTimeout = (e, t) => {
        const r = jo.now() + t,
          n = () => {
            const e = Mo.findIndex((e => e.cancel == n));
            ~e && Mo.splice(e, 1), Ao -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return Mo.splice(Do(r), 0, o), Ao += 1, Fo(), o
      };
      var Do = e => ~(~Mo.findIndex((t => t.time > e)) || ~Mo.length);
      jo.cancel = e => {
        To.delete(e), No.delete(e), Lo.delete(e), ko.delete(e), Oo.delete(e)
      }, jo.sync = e => {
        zo = !0, jo.batchedUpdates(e), zo = !1
      }, jo.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, jo.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          To.delete(r), t = null
        }, n
      };
      var Ro = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      jo.use = e => Ro = e, jo.now = "undefined" != typeof performance ? () => performance.now() : Date.now, jo.batchedUpdates = e => e(), jo.catch = console.error, jo.frameLoop = "always", jo.advance = () => {
        "demand" !== jo.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : $o()
      };
      var Io = -1,
        Ao = 0,
        zo = !1;

      function Vo(e, t) {
        zo ? (t.delete(e), e(0)) : (t.add(e), Fo())
      }

      function Fo() {
        Io < 0 && (Io = 0, "demand" !== jo.frameLoop && Ro(qo))
      }

      function qo() {
        ~Io && (Ro(qo), jo.batchedUpdates($o))
      }

      function $o() {
        const e = Io;
        Io = jo.now();
        const t = Do(Io);
        t && (Ko(Mo.splice(0, t), (e => e.handler())), Ao -= t), Ao ? (To.flush(), ko.flush(e ? Math.min(64, Io - e) : 16.667), No.flush(), Oo.flush(), Lo.flush()) : Io = -1
      }

      function Bo() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Ao += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Ao -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Ao -= t.size, Ko(t, (t => t(r) && e.add(t))), Ao += e.size, t = e)
          }
        }
      }

      function Ko(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            jo.catch(e)
          }
        }))
      }
      var Ho = Object.defineProperty,
        Wo = {};

      function Uo() {}((e, t) => {
        for (var r in t) Ho(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Wo, {
        assign: () => sa,
        colors: () => oa,
        createStringInterpolator: () => ea,
        skipAnimation: () => aa,
        to: () => ta,
        willAdvance: () => ia
      });
      var Go = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Xo(e, t) {
        if (Go.arr(e)) {
          if (!Go.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Yo = (e, t) => e.forEach(t);

      function Zo(e, t, r) {
        if (Go.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Qo = e => Go.und(e) ? [] : Go.arr(e) ? e : [e];

      function Jo(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Yo(r, t)
        }
      }
      var ea, ta, ra = (e, ...t) => Jo(e, (e => e(...t))),
        na = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        oa = null,
        aa = !1,
        ia = Uo,
        sa = e => {
          e.to && (ta = e.to), e.now && (jo.now = e.now), void 0 !== e.colors && (oa = e.colors), null != e.skipAnimation && (aa = e.skipAnimation), e.createStringInterpolator && (ea = e.createStringInterpolator), e.requestAnimationFrame && jo.use(e.requestAnimationFrame), e.batchedUpdates && (jo.batchedUpdates = e.batchedUpdates), e.willAdvance && (ia = e.willAdvance), e.frameLoop && (jo.frameLoop = e.frameLoop)
        },
        la = new Set,
        ua = [],
        ca = [],
        da = 0,
        fa = {
          get idle() {
            return !la.size && !ua.length
          },
          start(e) {
            da > e.priority ? (la.add(e), jo.onStart(pa)) : (ha(e), jo(ma))
          },
          advance: ma,
          sort(e) {
            if (da) jo.onFrame((() => fa.sort(e)));
            else {
              const t = ua.indexOf(e);
              ~t && (ua.splice(t, 1), va(e))
            }
          },
          clear() {
            ua = [], la.clear()
          }
        };

      function pa() {
        la.forEach(ha), la.clear(), jo(ma)
      }

      function ha(e) {
        ua.includes(e) || va(e)
      }

      function va(e) {
        ua.splice(function(t, r) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(ua), 0, e)
      }

      function ma(e) {
        const t = ca;
        for (let r = 0; r < ua.length; r++) {
          const n = ua[r];
          da = n.priority, n.idle || (ia(n), n.advance(e), n.idle || t.push(n))
        }
        return da = 0, (ca = ua).length = 0, (ua = t).length > 0
      }
      var ya = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        },
        ga = "[-+]?\\d*\\.?\\d+",
        ba = ga + "%";

      function wa(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Ca = new RegExp("rgb" + wa(ga, ga, ga)),
        Pa = new RegExp("rgba" + wa(ga, ga, ga, ga)),
        xa = new RegExp("hsl" + wa(ga, ba, ba)),
        Ea = new RegExp("hsla" + wa(ga, ba, ba, ga)),
        Sa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        _a = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ka = /^#([0-9a-fA-F]{6})$/,
        ja = /^#([0-9a-fA-F]{8})$/;

      function Oa(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Ta(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          a = Oa(o, n, e + 1 / 3),
          i = Oa(o, n, e),
          s = Oa(o, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * i) << 16 | Math.round(255 * s) << 8
      }

      function Na(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function La(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ma(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Da(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ra(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ka.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : oa && void 0 !== oa[e] ? oa[e] : (t = Ca.exec(e)) ? (Na(t[1]) << 24 | Na(t[2]) << 16 | Na(t[3]) << 8 | 255) >>> 0 : (t = Pa.exec(e)) ? (Na(t[1]) << 24 | Na(t[2]) << 16 | Na(t[3]) << 8 | Ma(t[4])) >>> 0 : (t = Sa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ja.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = _a.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = xa.exec(e)) ? (255 | Ta(La(t[1]), Da(t[2]), Da(t[3]))) >>> 0 : (t = Ea.exec(e)) ? (Ta(La(t[1]), Da(t[2]), Da(t[3])) | Ma(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Ia = (e, t, r) => {
          if (Go.fun(e)) return e;
          if (Go.arr(e)) return Ia({
            range: e,
            output: t,
            extrapolate: r
          });
          if (Go.str(e.output[0])) return ea(e);
          const n = e,
            o = n.output,
            a = n.range || [0, 1],
            i = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, o, a, i, s, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === i) return u;
                "clamp" === i && (u = t)
              }
              if (u > r) {
                if ("identity" === s) return u;
                "clamp" === s && (u = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = a(u), n === -1 / 0 ? u = -u : o === 1 / 0 ? u += n : u = u * (o - n) + n, u)
            }(e, a[t], a[t + 1], o[t], o[t + 1], l, i, s, n.map)
          }
        },
        Aa = 1.70158,
        za = 1.525 * Aa,
        Va = Aa + 1,
        Fa = 2 * Math.PI / 3,
        qa = 2 * Math.PI / 4.5,
        $a = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Ba = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => Va * e * e * e - Aa * e * e,
          easeOutBack: e => 1 + Va * Math.pow(e - 1, 3) + Aa * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - za) / 2 : (Math.pow(2 * e - 2, 2) * ((za + 1) * (2 * e - 2) + za) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Fa),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Fa) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * qa) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * qa) / 2 + 1,
          easeInBounce: e => 1 - $a(1 - e),
          easeOutBounce: $a,
          easeInOutBounce: e => e < .5 ? (1 - $a(1 - 2 * e)) / 2 : (1 + $a(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return 0, 1, o = ("end" === t ? Math.floor(n) : Math.ceil(n)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        Ka = Symbol.for("FluidValue.get"),
        Ha = Symbol.for("FluidValue.observers"),
        Wa = e => Boolean(e && e[Ka]),
        Ua = e => e && e[Ka] ? e[Ka]() : e,
        Ga = e => e[Ha] || null;

      function Xa(e, t) {
        const r = e[Ha];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ya = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Za(this, e)
          }
        },
        Za = (e, t) => ti(e, Ka, t);

      function Qa(e, t) {
        if (e[Ka]) {
          let r = e[Ha];
          r || ti(e, Ha, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Ja(e, t) {
        const r = e[Ha];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[Ha] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var ei, ti = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        ri = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ni = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        oi = new RegExp(`(${ri.source})(%|[a-z]+)`, "i"),
        ai = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ii = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        si = e => {
          const [t, r] = li(e);
          if (!t || na()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && ii.test(r) ? si(r) : r || e
        },
        li = e => {
          const t = ii.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        ui = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        ci = e => {
          ei || (ei = oa ? new RegExp(`(${Object.keys(oa).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ua(e).replace(ii, si).replace(ni, Ra).replace(ei, Ra))),
            r = t.map((e => e.match(ri).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => Ia({
              ...e,
              output: t
            })));
          return e => {
            const r = !oi.test(t[0]) && t.find((e => oi.test(e)))?.replace(ri, "");
            let o = 0;
            return t[0].replace(ri, (() => `${n[o++](e)}${r||""}`)).replace(ai, ui)
          }
        },
        di = "react-spring: ",
        fi = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${di}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        pi = fi(console.warn),
        hi = fi(console.warn);

      function vi(e) {
        return Go.str(e) && ("#" == e[0] || /\d/.test(e) || !na() && ii.test(e) || e in (oa || {}))
      }
      var mi = na() ? s.useEffect : s.useLayoutEffect,
        yi = () => {
          const e = (0, s.useRef)(!1);
          return mi((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function gi() {
        const e = (0, s.useState)()[1],
          t = yi();
        return () => {
          t.current && e(Math.random())
        }
      }
      var bi = e => (0, s.useEffect)(e, wi),
        wi = [];

      function Ci(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Pi = Symbol.for("Animated:node"),
        xi = e => e && e[Pi],
        Ei = (e, t) => {
          return r = e, n = Pi, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        Si = e => e && e[Pi] && e[Pi].getPayload(),
        _i = class {
          constructor() {
            Ei(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        ki = class extends _i {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Go.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new ki(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Go.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Go.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        ji = class extends ki {
          constructor(e) {
            super(0), this._string = null, this._toString = Ia({
              output: [e, e]
            })
          }
          static create(e) {
            return new ji(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Go.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Ia({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Oi = {
          dependencies: null
        },
        Ti = class extends _i {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Zo(this.source, ((r, n) => {
              var o;
              (o = r) && o[Pi] === o ? t[n] = r.getValue(e) : Wa(r) ? t[n] = Ua(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Yo(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Zo(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Oi.dependencies && Wa(e) && Oi.dependencies.add(e);
            const t = Si(e);
            t && Yo(t, (e => this.add(e)))
          }
        },
        Ni = class extends Ti {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Ni(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Li)), !0)
          }
        };

      function Li(e) {
        return (vi(e) ? ji : ki).create(e)
      }

      function Mi(e) {
        const t = xi(e);
        return t ? t.constructor : Go.arr(e) ? Ni : vi(e) ? ji : ki
      }
      var Di = (e, t) => {
          const r = !Go.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((n, o) => {
            const a = (0, s.useRef)(null),
              i = r && (0, s.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (Go.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, u] = function(e, t) {
                const r = new Set;
                return Oi.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Ti(e), Oi.dependencies = null, [e, r]
              }(n, t),
              c = gi(),
              d = () => {
                const e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
              },
              f = new Ri(d, u),
              p = (0, s.useRef)();
            mi((() => (p.current = f, Yo(u, (e => Qa(e, f))), () => {
              p.current && (Yo(p.current.deps, (e => Ja(e, p.current))), jo.cancel(p.current.update))
            }))), (0, s.useEffect)(d, []), bi((() => () => {
              const e = p.current;
              Yo(e.deps, (t => Ja(t, e)))
            }));
            const h = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...h,
              ref: i
            })
          }))
        },
        Ri = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && jo.write(this.update)
          }
        },
        Ii = Symbol.for("AnimatedComponent"),
        Ai = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: r = (e => new Ti(e)),
          getComponentProps: n = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            a = e => {
              const t = zi(e) || "Anonymous";
              return (e = Go.str(e) ? a[e] || (a[e] = Di(e, o)) : e[Ii] || (e[Ii] = Di(e, o))).displayName = `Animated(${t})`, e
            };
          return Zo(e, ((t, r) => {
            Go.arr(e) && (r = zi(t)), a[r] = a(t)
          })), {
            animated: a
          }
        },
        zi = e => Go.str(e) ? e : e && Go.str(e.displayName) ? e.displayName : Go.fun(e) && e.name || null;

      function Vi(e, ...t) {
        return Go.fun(e) ? e(...t) : e
      }
      var Fi = (e, t) => !0 === e || !!(t && e && (Go.fun(e) ? e(t) : Qo(e).includes(t))),
        qi = (e, t) => Go.obj(e) ? t && e[t] : e,
        $i = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Bi = e => e,
        Ki = (e, t = Bi) => {
          let r = Hi;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            Go.und(r) || (n[o] = r)
          }
          return n
        },
        Hi = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Wi = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Ui(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Zo(e, ((e, n) => {
              Wi[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Zo(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Gi(e) {
        return e = Ua(e), Go.arr(e) ? e.map(Gi) : vi(e) ? Wo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Xi(e) {
        return Go.fun(e) || Go.arr(e) && Go.obj(e[0])
      }
      var Yi = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Ba.linear,
          clamp: !1
        },
        Zi = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Yi)
          }
        };

      function Qi(e, t) {
        if (Go.und(t.decay)) {
          const r = !Go.und(t.tension) || !Go.und(t.friction);
          !r && Go.und(t.frequency) && Go.und(t.damping) && Go.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ji = [],
        es = class {
          constructor() {
            this.changed = !1, this.values = Ji, this.toValues = null, this.fromValues = Ji, this.config = new Zi, this.immediate = !1
          }
        };

      function ts(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: a
      }) {
        return new Promise(((i, s) => {
          let l, u, c = Fi(r.cancel ?? n?.cancel, t);
          if (c) p();
          else {
            Go.und(r.pause) || (o.paused = Fi(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || Fi(e, t)), l = Vi(r.delay || 0, t), e ? (o.resumeQueue.add(f), a.pause()) : (a.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - jo.now()
          }

          function f() {
            l > 0 && !Wo.skipAnimation ? (o.delayed = !0, u = jo.setTimeout(p, l), o.pauseQueue.add(d), o.timeouts.add(u)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              a.start({
                ...r,
                callId: e,
                cancel: c
              }, i)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var rs = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? as(e.get()) : t.every((e => e.noop)) ? ns(e.get()) : os(e.get(), t.every((e => e.finished))),
        ns = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        os = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        as = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function is(e, t, r, n) {
        const {
          callId: o,
          parentId: a,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return a || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const u = Ki(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            p = e => {
              const t = o <= (r.cancelId || 0) && as(n) || o !== r.asyncId && os(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            h = (e, t) => {
              const a = new ls,
                i = new us;
              return (async () => {
                if (Wo.skipAnimation) throw ss(r), i.result = os(n, !1), d(i), i;
                p(a);
                const s = Go.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Zo(u, ((e, t) => {
                  Go.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return p(a), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let v;
          if (Wo.skipAnimation) return ss(r), os(n, !1);
          try {
            let t;
            t = Go.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, n.stop.bind(n))), await Promise.all([t.then(c), f]), v = os(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof ls) v = e.result;
            else {
              if (!(e instanceof us)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = a, r.asyncTo = a ? s : void 0, r.promise = a ? l : void 0)
          }
          return Go.fun(i) && jo.batchedUpdates((() => {
            i(v, n, n.item)
          })), v
        })() : l
      }

      function ss(e, t) {
        Jo(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var ls = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        us = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        cs = e => e instanceof fs,
        ds = 1,
        fs = class extends Ya {
          constructor() {
            super(...arguments), this.id = ds++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = xi(this);
            return e && e.getValue()
          }
          to(...e) {
            return Wo.to(this, e)
          }
          interpolate(...e) {
            return pi(`${di}The "interpolate" function is deprecated in v9 (use "to" instead)`), Wo.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Xa(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || fa.sort(this), Xa(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        ps = Symbol.for("SpringPhase"),
        hs = e => (1 & e[ps]) > 0,
        vs = e => (2 & e[ps]) > 0,
        ms = e => (4 & e[ps]) > 0,
        ys = (e, t) => t ? e[ps] |= 3 : e[ps] &= -3,
        gs = (e, t) => t ? e[ps] |= 4 : e[ps] &= -5,
        bs = class extends fs {
          constructor(e, t) {
            if (super(), this.animation = new es, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Go.und(e) || !Go.und(t)) {
              const r = Go.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Go.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(vs(this) || this._state.asyncTo) || ms(this)
          }
          get goal() {
            return Ua(this.animation.to)
          }
          get velocity() {
            const e = xi(this);
            return e instanceof ki ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return hs(this)
          }
          get isAnimating() {
            return vs(this)
          }
          get isPaused() {
            return ms(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: a
            } = n, i = Si(n.to);
            !i && Wa(n.to) && (o = Qo(Ua(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == ji ? 1 : i ? i[l].lastPosition : o[l];
              let c = n.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, a.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Go.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let i;
                const f = a.precision || (r == u ? .005 : Math.min(1, .001 * Math.abs(u - r)));
                if (Go.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), c = Math.abs(s.lastPosition - d) <= f, i = o * n
                  } else {
                    i = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = a.restVelocity || f / 10,
                      n = a.clamp ? 0 : a.bounce,
                      l = !Go.und(n),
                      p = r == u ? s.v0 > 0 : r < u;
                    let h, v = !1;
                    const m = 1,
                      y = Math.ceil(e / m);
                    for (let e = 0; e < y && (h = Math.abs(i) > t, h || (c = Math.abs(u - d) <= f, !c)); ++e) l && (v = d == u || d > u == p, v && (i = -i * n, d = u)), i += (1e-6 * -a.tension * (d - u) + .001 * -a.friction * i) / a.mass * m, d += i * m
                  }
                else {
                  let n = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, s.durationProgress > 0 && (s.elapsedTime = a.duration * s.durationProgress, t = s.elapsedTime += e)), n = (a.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + a.easing(n) * (u - r), i = (d - s.lastPosition) / e, c = 1 == n
                }
                s.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              i && !i[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, a.round) && (r = !0)
            }));
            const s = xi(this),
              l = s.getValue();
            if (t) {
              const e = Ua(n.to);
              l === e && !r || a.decay ? r && a.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return jo.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (vs(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              jo.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return Go.und(e) ? (r = this.queue || [], this.queue = []) : r = [Go.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => rs(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ss(this._state, e && this._lastCallId), jo.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: r,
              from: n
            } = e;
            r = Go.obj(r) ? r[t] : r, (null == r || Xi(r)) && (r = void 0), n = Go.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return hs(this) || (e.reverse && ([r, n] = [n, r]), n = Ua(n), Go.und(n) ? xi(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, Ki(e, ((e, t) => /^on/.test(t) ? qi(e, r) : e))), _s(this, e, "onProps"), ks(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return ts(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: a,
              actions: {
                pause: () => {
                  ms(this) || (gs(this, !0), ra(a.pauseQueue), ks(this, "onPause", os(this, ws(this, this.animation.to)), this))
                },
                resume: () => {
                  ms(this) && (gs(this, !1), vs(this) && this._resume(), ra(a.resumeQueue), ks(this, "onResume", os(this, ws(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Cs(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(as(this));
            const n = !Go.und(e.to),
              o = !Go.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(as(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
              defaultProps: i,
              animation: s
            } = this, {
              to: l,
              from: u
            } = s;
            let {
              to: c = l,
              from: d = u
            } = e;
            !o || n || t.default && !Go.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Xo(d, u);
            f && (s.from = d), d = Ua(d);
            const p = !Xo(c, l);
            p && this._focus(c);
            const h = Xi(t.to),
              {
                config: v
              } = s,
              {
                decay: m,
                velocity: y
              } = v;
            (n || o) && (v.velocity = 0), t.config && !h && function(e, t, r) {
              r && (Qi(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Qi(e, t), Object.assign(e, t);
              for (const t in Yi) null == e[t] && (e[t] = Yi[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: a
              } = e;
              Go.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * a, e.friction = 4 * Math.PI * o * a / n)
            }(v, Vi(t.config, a), t.config !== i.config ? Vi(i.config, a) : void 0);
            let g = xi(this);
            if (!g || Go.und(c)) return r(os(this, !0));
            const b = Go.und(t.reset) ? o && !t.default : !Go.und(d) && Fi(t.reset, a),
              w = b ? d : this.get(),
              C = Gi(c),
              P = Go.num(C) || Go.arr(C) || vi(C),
              x = !h && (!P || Fi(i.immediate || t.immediate, a));
            if (p) {
              const e = Mi(c);
              if (e !== g.constructor) {
                if (!x) throw Error(`Cannot animate between ${g.constructor.name} and ${e.name}, as the "to" prop suggests`);
                g = this._set(C)
              }
            }
            const E = g.constructor;
            let S = Wa(c),
              _ = !1;
            if (!S) {
              const e = b || !hs(this) && f;
              (p || e) && (_ = Xo(Gi(w), C), S = !_), (Xo(s.immediate, x) || x) && Xo(v.decay, m) && Xo(v.velocity, y) || (S = !0)
            }
            if (_ && vs(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !h && ((S || Wa(l)) && (s.values = g.getPayload(), s.toValues = Wa(c) ? null : E == ji ? [1] : Qo(C)), s.immediate != x && (s.immediate = x, x || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Yo(Ss, (e => _s(this, t, e)));
              const n = os(this, ws(this, l));
              ra(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && jo.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? Vi(i.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(w), h ? r(is(t.to, t, this._state, this)) : S ? this._start() : vs(this) && !p ? this._pendingCalls.add(r) : r(ns(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Ga(this) && this._detach(), t.to = e, Ga(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Wa(t) && (Qa(t, this), cs(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Wa(e) && Ja(e, this)
          }
          _set(e, t = !0) {
            const r = Ua(e);
            if (!Go.und(r)) {
              const e = xi(this);
              if (!e || !Xo(r, e.getValue())) {
                const n = Mi(r);
                e && e.constructor == n ? e.setValue(r) : Ei(this, n.create(r)), e && jo.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return xi(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ks(this, "onStart", os(this, ws(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Vi(this.animation.onChange, e, this)), Vi(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            xi(this).reset(Ua(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), vs(this) || (ys(this, !0), ms(this) || this._resume())
          }
          _resume() {
            Wo.skipAnimation ? this.finish() : fa.start(this)
          }
          _stop(e, t) {
            if (vs(this)) {
              ys(this, !1);
              const r = this.animation;
              Yo(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Xa(this, {
                type: "idle",
                parent: this
              });
              const n = t ? as(this.get()) : os(this.get(), ws(this, e ?? r.to));
              ra(this._pendingCalls, n), r.changed && (r.changed = !1, ks(this, "onRest", n, this))
            }
          }
        };

      function ws(e, t) {
        const r = Gi(t);
        return Xo(Gi(e.get()), r)
      }

      function Cs(e, t = e.loop, r = e.to) {
        const n = Vi(t);
        if (n) {
          const o = !0 !== n && Ui(n),
            a = (o || e).reverse,
            i = !o || o.reset;
          return Ps({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Xi(r) ? r : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...o
          })
        }
      }

      function Ps(e) {
        const {
          to: t,
          from: r
        } = e = Ui(e), n = new Set;
        return Go.obj(t) && Es(t, n), Go.obj(r) && Es(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function xs(e) {
        const t = Ps(e);
        return Go.und(t.default) && (t.default = Ki(t)), t
      }

      function Es(e, t) {
        Zo(e, ((e, r) => null != e && t.add(r)))
      }
      var Ss = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function _s(e, t, r) {
        e.animation[r] = t[r] !== $i(t, r) ? qi(t[r], e.key) : void 0
      }

      function ks(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var js = ["onStart", "onChange", "onRest"],
        Os = 1,
        Ts = class {
          constructor(e, t) {
            this.id = Os++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, r) => e[r] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              Go.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Ps(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Qo(e).map(Ps) : this.queue = [], this._flush ? this._flush(this, t) : (As(this, t), Ns(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              Yo(Qo(t), (t => r[t].stop(!!e)))
            } else ss(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Go.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Yo(Qo(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Go.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Yo(Qo(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Zo(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, Jo(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const a = !n && this._started,
              i = o || a && r.size ? this.get() : null;
            o && t.size && Jo(t, (([e, t]) => {
              t.value = i, e(t, this, this._item)
            })), a && (this._started = !1, Jo(r, (([e, t]) => {
              t.value = i, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            jo.onFrame(this._onFrame)
          }
        };

      function Ns(e, t) {
        return Promise.all(t.map((t => Ls(e, t)))).then((t => rs(e, t)))
      }
      async function Ls(e, t, r) {
        const {
          keys: n,
          to: o,
          from: a,
          loop: i,
          onRest: s,
          onResolve: l
        } = t, u = Go.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === o && (t.to = null), !1 === a && (t.from = null);
        const c = Go.arr(o) || Go.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Yo(js, (r => {
          const n = t[r];
          if (Go.fun(n)) {
            const o = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = o.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, u && (u[r] = t[r])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, ra(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          p = !0 === t.cancel || !0 === $i(t, "cancel");
        (c || p && d.asyncId) && f.push(ts(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Uo,
            resume: Uo,
            start(t, r) {
              p ? (ss(d, e._lastAsyncId), r(as(e))) : (t.onRest = s, r(is(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const h = rs(e, await Promise.all(f));
        if (i && h.finished && (!r || !h.noop)) {
          const r = Cs(t, i, o);
          if (r) return As(e, [r]), Ls(e, r, !0)
        }
        return l && jo.batchedUpdates((() => l(h, e, e.item))), h
      }

      function Ms(e, t) {
        const r = {
          ...e.springs
        };
        return t && Yo(Qo(t), (e => {
          Go.und(e.keys) && (e = Ps(e)), Go.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Is(r, e, (e => Rs(e)))
        })), Ds(e, r), r
      }

      function Ds(e, t) {
        Zo(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Qa(t, e))
        }))
      }

      function Rs(e, t) {
        const r = new bs;
        return r.key = e, t && Qa(r, t), r
      }

      function Is(e, t, r) {
        t.keys && Yo(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function As(e, t) {
        Yo(t, (t => {
          Is(e.springs, t, (t => Rs(t, e)))
        }))
      }
      var zs, Vs, Fs = ({
          children: e,
          ...t
        }) => {
          const r = (0, s.useContext)(qs),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, s.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, s.useRef)(), o = n.current;
            let a = o;
            return a ? Boolean(t && a.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, a.inputs)) || (a = {
              inputs: t,
              result: e()
            }) : a = r, (0, s.useEffect)((() => {
              n.current = a, o == r && (r.inputs = r.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: a
          } = qs;
          return s.createElement(a, {
            value: t
          }, e)
        },
        qs = (zs = Fs, Vs = {}, Object.assign(zs, s.createContext(Vs)), zs.Provider._context = zs, zs.Consumer._context = zs, zs);
      Fs.Provider = qs.Provider, Fs.Consumer = qs.Consumer;
      var $s = () => {
        const e = [],
          t = function(t) {
            hi(`${di}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Yo(e, ((e, o) => {
              if (Go.und(t)) n.push(e.start());
              else {
                const a = r(t, e, o);
                a && n.push(e.start(a))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return Yo(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Yo(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Yo(e, ((e, r) => {
            const n = Go.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Yo(e, ((e, n) => {
            if (Go.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Yo(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Yo(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return Go.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Bs(e, t) {
        const r = Go.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = Go.fun(t) && t;
            n && !r && (r = []);
            const o = (0, s.useMemo)((() => n || 3 == arguments.length ? $s() : void 0), []),
              a = (0, s.useRef)(0),
              i = gi(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = Ms(e, t);
                  return a.current > 0 && !l.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Ns(e, t) : new Promise((n => {
                    Ds(e, r), l.queue.push((() => {
                      n(Ns(e, t))
                    })), i()
                  }))
                }
              })), []),
              u = (0, s.useRef)([...l.ctrls]),
              c = [],
              d = Ci(e) || 0;

            function f(e, r) {
              for (let o = e; o < r; o++) {
                const e = u.current[o] || (u.current[o] = new Ts(null, l.flush)),
                  r = n ? n(o, e) : t[o];
                r && (c[o] = xs(r))
              }
            }(0, s.useMemo)((() => {
              Yo(u.current.slice(e, d), (e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              })), u.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), r);
            const p = u.current.map(((e, t) => Ms(e, c[t]))),
              h = (0, s.useContext)(Fs),
              v = Ci(h),
              m = h !== v && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            mi((() => {
              a.current++, l.ctrls = u.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], Yo(e, (e => e()))), Yo(u.current, ((e, t) => {
                o?.add(e), m && e.start({
                  default: h
                });
                const r = c[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), bi((() => () => {
              Yo(l.ctrls, (e => e.stop(!0)))
            }));
            const y = p.map((e => ({
              ...e
            })));
            return o ? [y, o] : y
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var Ks = class extends fs {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Ia(...t);
          const r = this._get(),
            n = Mi(r);
          Ei(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Xo(t, this.get()) || (xi(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ws(this._active) && Us(this)
        }
        _get() {
          const e = Go.arr(this.source) ? this.source.map(Ua) : Qo(Ua(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Ws(this._active) && (this.idle = !1, Yo(Si(this), (e => {
            e.done = !1
          })), Wo.skipAnimation ? (jo.batchedUpdates((() => this.advance())), Us(this)) : fa.start(this))
        }
        _attach() {
          let e = 1;
          Yo(Qo(this.source), (t => {
            Wa(t) && Qa(t, this), cs(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          Yo(Qo(this.source), (e => {
            Wa(e) && Ja(e, this)
          })), this._active.clear(), Us(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Qo(this.source).reduce(((e, t) => Math.max(e, (cs(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function Hs(e) {
        return !1 !== e.idle
      }

      function Ws(e) {
        return !e.size || Array.from(e).every(Hs)
      }

      function Us(e) {
        e.idle || (e.idle = !0, Yo(Si(e), (e => {
          e.done = !0
        })), Xa(e, {
          type: "idle",
          parent: e
        }))
      }
      Wo.assign({
        createStringInterpolator: ci,
        to: (e, t) => new Ks(e, t)
      }), fa.advance;
      var Gs = r(44853),
        Xs = /^--/;

      function Ys(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Xs.test(e) || Qs.hasOwnProperty(e) && Qs[e] ? ("" + t).trim() : t + "px"
      }
      var Zs = {},
        Qs = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Js = ["Webkit", "Ms", "Moz", "O"];
      Qs = Object.keys(Qs).reduce(((e, t) => (Js.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Qs);
      var el = /^(matrix|translate|scale|rotate|skew)/,
        tl = /^(translate)/,
        rl = /^(rotate|skew)/,
        nl = (e, t) => Go.num(e) && 0 !== e ? e + t : e,
        ol = (e, t) => Go.arr(e) ? e.every((e => ol(e, t))) : Go.num(e) ? e === t : parseFloat(e) === t,
        al = class extends Ti {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push((e => [`translate3d(${e.map((e=>nl(e,"px"))).join(",")})`, ol(e, 0)]))), Zo(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push((e => [e, "" === e]));
              else if (el.test(t)) {
                if (delete n[t], Go.und(e)) return;
                const r = tl.test(t) ? "px" : rl.test(t) ? "deg" : "";
                o.push(Qo(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${nl(o,r)})`, ol(o, 0)] : e => [`${t}(${e.map((e=>nl(e,r))).join(",")})`, ol(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new il(o, a)), super(n)
          }
        },
        il = class extends Ya {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Yo(this.inputs, ((r, n) => {
              const o = Ua(r[0]),
                [a, i] = this.transforms[n](Go.arr(o) ? o : r.map(Ua));
              e += " " + a, t = t && i
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yo(this.inputs, (e => Yo(e, (e => Wa(e) && Qa(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Yo(this.inputs, (e => Yo(e, (e => Wa(e) && Ja(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Xa(this, e)
          }
        };
      Wo.assign({
        batchedUpdates: Gs.unstable_batchedUpdates,
        createStringInterpolator: ci,
        colors: ya
      });
      var sl = Ai(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: a,
                scrollTop: i,
                scrollLeft: s,
                viewBox: l,
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map((t => r || e.hasAttribute(t) ? t : Zs[t] || (Zs[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== a && (e.textContent = a);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Ys(t, o[t]);
                Xs.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, c[r])
            })), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new al(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }).animated,
        ll = r(63461);
      r(63305);
      var ul = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        cl = (ul.Consumer, ul.Provider, ul);

      function dl() {
        this.cache = Object.create(null)
      }
      dl.prototype.get = function(e) {
        return this.cache[e]
      }, dl.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var fl, pl;

      function hl() {
        var e = s.useContext(cl);
        return function(e) {
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }(0, ll.__assign)((0, ll.__assign)({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: s.Fragment
      }),
      function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(fl || (fl = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(pl || (pl = {}));
      var vl = function(e) {
        var t = hl(),
          r = e.value,
          n = e.children,
          o = (0, ll.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function ml(e) {
        var t = function(t) {
          var r = hl(),
            n = t.value,
            o = t.children,
            a = (0, ll.__rest)(t, ["value", "children"]),
            i = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(i, a) : r.formatTimeToParts(i, a))
        };
        return t.displayName = pl[e], t
      }

      function yl(e) {
        var t = function(t) {
          var r = hl(),
            n = t.value,
            o = t.children,
            a = (0, ll.__rest)(t, ["value", "children"]),
            i = r[e](n, a);
          if ("function" == typeof o) return o(i);
          var l = r.textComponent || s.Fragment;
          return s.createElement(l, null, i)
        };
        return t.displayName = fl[e], t
      }

      function gl(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }

      function bl(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function wl(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Cl(e, t = []) {
        let r = [];
        const n = () => {
          const t = r.map((e => s.createContext(e)));
          return function(r) {
            const n = r?.[e] || t;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...r,
                [e]: n
              }
            })), [r, n])
          }
        };
        return n.scopeName = e, [function(t, n) {
          const o = s.createContext(n),
            i = r.length;

          function l(t) {
            const {
              scope: r,
              children: n,
              ...l
            } = t, u = r?.[e][i] || o, c = s.useMemo((() => l), Object.values(l));
            return (0, a.jsx)(u.Provider, {
              value: c,
              children: n
            })
          }
          return r = [...r, n], l.displayName = t + "Provider", [l, function(r, a) {
            const l = a?.[e][i] || o,
              u = s.useContext(l);
            if (u) return u;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, Pl(n, ...t)]
      }

      function Pl(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      vl.displayName = "FormattedNumberParts", vl.displayName = "FormattedNumberParts", yl("formatDate"), yl("formatTime"), yl("formatNumber"), yl("formatList"), yl("formatDisplayName"), ml("formatDate"), ml("formatTime"), r.e(5309).then(r.bind(r, 35309)), r.e(3954).then(r.bind(r, 83954)), r.e(6864).then(r.bind(r, 16864)), r.e(6521).then(r.bind(r, 16521)), r.e(9292).then(r.bind(r, 69292)), r.e(9130).then(r.bind(r, 69130)), r.e(9157).then(r.bind(r, 19157)), r.e(707).then(r.bind(r, 70707)), r.e(6304).then(r.bind(r, 96304)), r.e(3360).then(r.bind(r, 13360)), r.e(7070).then(r.bind(r, 31832)), r.e(3131).then(r.bind(r, 23131)), r.e(3759).then(r.bind(r, 93759));
      var xl = r(91377),
        El = r(26137),
        Sl = r(1371),
        _l = r(16991),
        kl = r(21222),
        jl = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = s.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, i = n ? kl.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        Ol = ["PageUp", "PageDown"],
        Tl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Nl = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Ll = "Slider",
        [Ml, Dl, Rl] = function(e) {
          const t = e + "CollectionProvider",
            [r, n] = Cl(t),
            [o, i] = r(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            l = e => {
              const {
                scope: t,
                children: r
              } = e, n = s.useRef(null), i = s.useRef(new Map).current;
              return (0, a.jsx)(o, {
                scope: t,
                itemMap: i,
                collectionRef: n,
                children: r
              })
            };
          l.displayName = t;
          const u = e + "CollectionSlot",
            c = s.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n
              } = e, o = wl(t, i(u, r).collectionRef);
              return (0, a.jsx)(kl.Slot, {
                ref: o,
                children: n
              })
            }));
          c.displayName = u;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = s.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n,
                ...o
              } = e, l = s.useRef(null), u = wl(t, l), c = i(d, r);
              return s.useEffect((() => (c.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                c.itemMap.delete(l)
              }))), (0, a.jsx)(kl.Slot, {
                [f]: "",
                ref: u,
                children: n
              })
            }));
          return p.displayName = d, [{
            Provider: l,
            Slot: c,
            ItemSlot: p
          }, function(t) {
            const r = i(e + "CollectionConsumer", t);
            return s.useCallback((() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
            }), [r.collectionRef, r.itemMap])
          }, n]
        }(Ll),
        [Il, Al] = Cl(Ll, [Rl]),
        [zl, Vl] = Il(Ll),
        Fl = s.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: i = 1,
            orientation: l = "horizontal",
            disabled: u = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: d = [n],
            value: f,
            onValueChange: p = (() => {}),
            onValueCommit: h = (() => {}),
            inverted: v = !1,
            ...m
          } = e, y = s.useRef(new Set), g = s.useRef(0), b = "horizontal" === l ? Bl : Kl, [w = [], C] = (0, xl.i)({
            prop: f,
            defaultProp: d,
            onChange: e => {
              const t = [...y.current];
              t[g.current]?.focus(), p(e)
            }
          }), P = s.useRef(w);

          function x(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(i),
              s = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / i) * i + n, a),
              l = gl(s, [n, o]);
            C(((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort(((e, t) => e - t))
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map(((t, r) => e[r + 1] - t))
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, c * i)) {
                g.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && h(n), t ? n : e
              }
              return e
            }))
          }
          return (0, a.jsx)(zl, {
            scope: e.__scopeSlider,
            name: r,
            disabled: u,
            min: n,
            max: o,
            valueIndexToChangeRef: g,
            thumbs: y.current,
            values: w,
            orientation: l,
            children: (0, a.jsx)(Ml.Provider, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(Ml.Slot, {
                scope: e.__scopeSlider,
                children: (0, a.jsx)(b, {
                  "aria-disabled": u,
                  "data-disabled": u ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: bl(m.onPointerDown, (() => {
                    u || (P.current = w)
                  })),
                  min: n,
                  max: o,
                  inverted: v,
                  onSlideStart: u ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(w, e);
                    x(e, t)
                  },
                  onSlideMove: u ? void 0 : function(e) {
                    x(e, g.current)
                  },
                  onSlideEnd: u ? void 0 : function() {
                    const e = P.current[g.current];
                    w[g.current] !== e && h(w)
                  },
                  onHomeKeyDown: () => !u && x(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !u && x(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!u) {
                      const r = Ol.includes(e.key) || e.shiftKey && Tl.includes(e.key) ? 10 : 1,
                        n = g.current;
                      x(w[n] + i * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Fl.displayName = Ll;
      var [ql, $l] = Il(Ll, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Bl = s.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: i,
          onSlideStart: l,
          onSlideMove: u,
          onSlideEnd: c,
          onStepKeyDown: d,
          ...f
        } = e, [p, h] = s.useState(null), v = wl(t, (e => h(e))), m = s.useRef(), y = (0, El.jH)(o), g = "ltr" === y, b = g && !i || !g && i;

        function w(e) {
          const t = m.current || p.getBoundingClientRect(),
            o = tu([0, t.width], b ? [r, n] : [n, r]);
          return m.current = t, o(e - t.left)
        }
        return (0, a.jsx)(ql, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, a.jsx)(Hl, {
            dir: y,
            "data-orientation": "horizontal",
            ...f,
            ref: v,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = w(e.clientX);
              l?.(t)
            },
            onSlideMove: e => {
              const t = w(e.clientX);
              u?.(t)
            },
            onSlideEnd: () => {
              m.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = Nl[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Kl = s.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: i,
          onSlideMove: l,
          onSlideEnd: u,
          onStepKeyDown: c,
          ...d
        } = e, f = s.useRef(null), p = wl(t, f), h = s.useRef(), v = !o;

        function m(e) {
          const t = h.current || f.current.getBoundingClientRect(),
            o = tu([0, t.height], v ? [n, r] : [r, n]);
          return h.current = t, o(e - t.top)
        }
        return (0, a.jsx)(ql, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, a.jsx)(Hl, {
            "data-orientation": "vertical",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = m(e.clientY);
              i?.(t)
            },
            onSlideMove: e => {
              const t = m(e.clientY);
              l?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = Nl[v ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Hl = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: i,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: u,
          ...c
        } = e, d = Vl(Ll, r);
        return (0, a.jsx)(jl.span, {
          ...c,
          ref: t,
          onKeyDown: bl(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : Ol.concat(Tl).includes(e.key) && (u(e), e.preventDefault())
          })),
          onPointerDown: bl(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: bl(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: bl(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), i(e))
          }))
        })
      })), Wl = "SliderTrack", Ul = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Vl(Wl, r);
        return (0, a.jsx)(jl.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      Ul.displayName = Wl;
      var Gl = "SliderRange",
        Xl = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Vl(Gl, r), i = $l(Gl, r), l = wl(t, s.useRef(null)), u = o.values.length, c = o.values.map((e => eu(e, o.min, o.max))), d = u > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, a.jsx)(jl.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: l,
            style: {
              ...e.style,
              [i.startEdge]: d + "%",
              [i.endEdge]: f + "%"
            }
          })
        }));
      Xl.displayName = Gl;
      var Yl = "SliderThumb",
        Zl = s.forwardRef(((e, t) => {
          const r = Dl(e.__scopeSlider),
            [n, o] = s.useState(null),
            i = wl(t, (e => o(e))),
            l = s.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, a.jsx)(Ql, {
            ...e,
            ref: i,
            index: l
          })
        })),
        Ql = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...i
          } = e, l = Vl(Yl, r), u = $l(Yl, r), [c, d] = s.useState(null), f = wl(t, (e => d(e))), p = !c || Boolean(c.closest("form")), h = (0, _l.X)(c), v = l.values[n], m = void 0 === v ? 0 : eu(v, l.min, l.max), y = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, l.values.length), g = h?.[u.size], b = g ? function(e, t, r) {
            const n = e / 2;
            return (n - tu([0, 50], [0, n])(t) * r) * r
          }(g, m, u.direction) : 0;
          return s.useEffect((() => {
            if (c) return l.thumbs.add(c), () => {
              l.thumbs.delete(c)
            }
          }), [c, l.thumbs]), (0, a.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [u.startEdge]: `calc(${m}% + ${b}px)`
            },
            children: [(0, a.jsx)(Ml.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(jl.span, {
                role: "slider",
                "aria-label": e["aria-label"] || y,
                "aria-valuemin": l.min,
                "aria-valuenow": v,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...i,
                ref: f,
                style: void 0 === v ? {
                  display: "none"
                } : e.style,
                onFocus: bl(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = n
                }))
              })
            }), p && (0, a.jsx)(Jl, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              value: v
            }, n)]
          })
        }));
      Zl.displayName = Yl;
      var Jl = e => {
        const {
          value: t,
          ...r
        } = e, n = s.useRef(null), o = (0, Sl.Z)(t);
        return s.useEffect((() => {
          const e = n.current,
            r = window.HTMLInputElement.prototype,
            a = Object.getOwnPropertyDescriptor(r, "value").set;
          if (o !== t && a) {
            const r = new Event("input", {
              bubbles: !0
            });
            a.call(e, t), e.dispatchEvent(r)
          }
        }), [o, t]), (0, a.jsx)("input", {
          style: {
            display: "none"
          },
          ...r,
          ref: n,
          defaultValue: t
        })
      };

      function eu(e, t, r) {
        return gl(100 / (r - t) * (e - t), [0, 100])
      }

      function tu(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      var ru = Fl,
        nu = Ul,
        ou = Xl,
        au = Zl;
      const iu = {
          id: "Lightbox_Close_Button_Label"
        },
        su = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        lu = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        uu = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        cu = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        du = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        fu = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        pu = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        hu = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        vu = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        mu = {
          id: "Lightbox_Download_Button_Label"
        },
        yu = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function gu() {
        return gu = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, gu.apply(this, arguments)
      }
      var bu = ["shift", "alt", "meta", "mod", "ctrl"],
        wu = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function Cu(e) {
        return (wu[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Pu(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function xu(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return Cu(e)
        }));
        return gu({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !bu.includes(e)
          })),
          description: r
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && _u([Cu(e.key), Cu(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && ku([Cu(e.key), Cu(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Eu.clear()
      }));
      var Eu = new Set;

      function Su(e) {
        return Array.isArray(e)
      }

      function _u(e) {
        var t = Array.isArray(e) ? e : [e];
        Eu.has("meta") && Eu.forEach((function(e) {
          return ! function(e) {
            return bu.includes(e)
          }(e) && Eu.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Eu.add(e.toLowerCase())
        }))
      }

      function ku(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Eu.clear() : t.forEach((function(e) {
          return Eu.delete(e.toLowerCase())
        }))
      }

      function ju(e, t) {
        var r = e.target;
        void 0 === t && (t = !1);
        var n = r && r.tagName;
        return Su(t) ? Boolean(n && t && t.some((function(e) {
          return e.toLowerCase() === n.toLowerCase()
        }))) : Boolean(n && t && !0 === t)
      }
      var Ou = (0, s.createContext)(void 0);

      function Tu(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, a.jsx)(Ou.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function Nu(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && Nu(e[n], t[n])
        }), !0) : e === t
      }
      var Lu = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Mu = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, s.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            l = o[1],
            u = (0, s.useState)([]),
            c = u[0],
            d = u[1],
            f = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            p = (0, s.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            h = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            v = (0, s.useCallback)((function(e) {
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            m = (0, s.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !Nu(t, e)
                }))
              }))
            }), []);
          return (0, a.jsx)(Lu.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: c,
              enableScope: f,
              disableScope: p,
              toggleScope: h
            },
            children: (0, a.jsx)(Tu, {
              addHotkey: v,
              removeHotkey: m,
              children: n
            })
          })
        },
        Du = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Ru = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function Iu(e, t, r, n) {
        var o = (0, s.useRef)(null),
          a = (0, s.useRef)(!1),
          i = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          l = Su(e) ? e.join(null == i ? void 0 : i.splitKey) : e,
          u = r instanceof Array ? r : n instanceof Array ? n : void 0,
          c = (0, s.useCallback)(t, null != u ? u : []),
          d = (0, s.useRef)(c);
        d.current = u ? c : t;
        var f = function(e) {
            var t = (0, s.useRef)(void 0);
            return Nu(t.current, e) || (t.current = e), t.current
          }(i),
          p = (0, s.useContext)(Lu).enabledScopes,
          h = (0, s.useContext)(Ou);
        return Ru((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = p, t = null == f ? void 0 : f.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !ju(e, ["input", "textarea", "select"]) || ju(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var n = o.current.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== o.current && !o.current.contains(n.activeElement)) return void Du(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != f && f.enableOnContentEditable) && Pu(l, null == f ? void 0 : f.splitKey).forEach((function(r) {
                    var n, o = xu(r, null == f ? void 0 : f.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, a = t.alt,
                          i = t.meta,
                          s = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          v = e.shiftKey,
                          m = e.altKey,
                          y = Cu(f),
                          g = d.toLowerCase();
                        if (!(null != c && c.includes(y) || null != c && c.includes(g) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(y))) return !1;
                        if (!r) {
                          if (a === !m && "alt" !== g) return !1;
                          if (l === !v && "shift" !== g) return !1;
                          if (s) {
                            if (!h && !p) return !1
                          } else {
                            if (i === !h && "meta" !== g && "os" !== g) return !1;
                            if (u === !p && "ctrl" !== g && "control" !== g) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(g) && !c.includes(y)) || (c ? (void 0 === o && (o = ","), (Su(n = c) ? n : n.split(o)).every((function(e) {
                          return Eu.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == f ? void 0 : f.enabled)) return void Du(e);
                      d.current(e, o), t || (a.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (_u(Cu(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && r(e))
              },
              s = function(e) {
                void 0 !== e.key && (ku(Cu(e.code)), a.current = !1, null != f && f.keyup && r(e, !0))
              },
              u = o.current || (null == i ? void 0 : i.document) || document;
            return u.addEventListener("keyup", s), u.addEventListener("keydown", n), h && Pu(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return h.addHotkey(xu(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                u.removeEventListener("keyup", s), u.removeEventListener("keydown", n), h && Pu(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return h.removeHotkey(xu(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [l, f, p]), o
      }

      function Au(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function zu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Vu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zu(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Au(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zu(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Fu(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var qu = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $u = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Vu(Vu({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) qu(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Fu(e.variantClassNames, (e => Fu(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5",
              monochrome: "foundry_1qqcnua0 foundry_1qqcnua7"
            },
            size: {
              XS: "foundry_a5x3kh9",
              SM: "foundry_a5x3kha",
              MD: "foundry_a5x3khb",
              LG: "foundry_a5x3khc"
            },
            fullWidth: {
              true: "foundry_a5x3khd",
              false: "foundry_a5x3khe"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Bu = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Ku = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          icon: n,
          label: o,
          appearance: u,
          size: c = "MD",
          fullWidth: d = !1,
          onClick: f,
          children: p,
          ...h
        }, v) => {
          const m = (0, s.useRef)(null),
            y = ht(m, v),
            {
              events: g,
              others: b
            } = (0, i.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: w,
              isPressed: C
            } = zr({
              ...b,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => b.onPress?.(e) ?? f?.(e)
            }, m),
            P = (0, i.v6)({
              ...w,
              className: r
            }, {
              ...g,
              role: "button",
              "data-pressed": C,
              "data-testid": e,
              className: $u({
                appearance: u,
                size: c,
                fullWidth: d
              })
            }),
            x = te[n],
            E = t ? l.Slot : "button",
            S = Bu[c];
          return (0, a.jsxs)(E, {
            ref: y,
            ...P,
            children: [x && (0, a.jsx)(x, {
              label: o || "",
              size: S
            }), (0, a.jsx)(l.Slottable, {
              children: p
            })]
          })
        })),
        Hu = (0, s.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: r
        }, n) => (Iu(e, (e => r?.(e)), [r]), (0, a.jsx)(F, {
          className: (0, Se.$)("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, a.jsx)("kbd", {
            ref: n,
            children: e
          })
        }))));
      var Wu = /^--/;

      function Uu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Wu.test(e) || Xu.hasOwnProperty(e) && Xu[e] ? ("" + t).trim() : t + "px"
      }
      var Gu = {},
        Xu = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Yu = ["Webkit", "Ms", "Moz", "O"];
      Xu = Object.keys(Xu).reduce(((e, t) => (Yu.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Xu);
      var Zu = /^(matrix|translate|scale|rotate|skew)/,
        Qu = /^(translate)/,
        Ju = /^(rotate|skew)/,
        ec = (e, t) => Go.num(e) && 0 !== e ? e + t : e,
        tc = (e, t) => Go.arr(e) ? e.every((e => tc(e, t))) : Go.num(e) ? e === t : parseFloat(e) === t,
        rc = class extends Ti {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              a = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), a.push((e => [`translate3d(${e.map((e=>ec(e,"px"))).join(",")})`, tc(e, 0)]))), Zo(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), a.push((e => [e, "" === e]));
              else if (Zu.test(t)) {
                if (delete n[t], Go.und(e)) return;
                const r = Qu.test(t) ? "px" : Ju.test(t) ? "deg" : "";
                o.push(Qo(e)), a.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${ec(o,r)})`, tc(o, 0)] : e => [`${t}(${e.map((e=>ec(e,r))).join(",")})`, tc(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new nc(o, a)), super(n)
          }
        },
        nc = class extends Ya {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Yo(this.inputs, ((r, n) => {
              const o = Ua(r[0]),
                [a, i] = this.transforms[n](Go.arr(o) ? o : r.map(Ua));
              e += " " + a, t = t && i
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Yo(this.inputs, (e => Yo(e, (e => Wa(e) && Qa(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Yo(this.inputs, (e => Yo(e, (e => Wa(e) && Ja(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Xa(this, e)
          }
        };
      Wo.assign({
        batchedUpdates: Gs.unstable_batchedUpdates,
        createStringInterpolator: ci,
        colors: ya
      });
      var oc = Ai(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: n,
              style: o,
              children: a,
              scrollTop: i,
              scrollLeft: s,
              viewBox: l,
              ...u
            } = t,
            c = Object.values(u),
            d = Object.keys(u).map((t => r || e.hasAttribute(t) ? t : Gu[t] || (Gu[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== a && (e.textContent = a);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const r = Uu(t, o[t]);
              Wu.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
            } d.forEach(((t, r) => {
            e.setAttribute(t, c[r])
          })), void 0 !== n && (e.className = n), void 0 !== i && (e.scrollTop = i), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new rc(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...r
        }) => r
      }).animated;

      function ac(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function ic(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function sc(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var lc, uc = r(13942),
        cc = r(59693),
        dc = r(99935),
        fc = "dismissableLayer.update",
        pc = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        hc = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = s.useContext(pc), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, v] = s.useState({}), m = ic(t, (e => p(e))), y = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(g), w = f ? y.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, P = w >= b, x = function(e, t = globalThis?.document) {
            const r = (0, cc.c)(e),
              n = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      mc("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                a = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }((e => {
            const t = e.target,
              r = [...d.branches].some((e => e.contains(t)));
            P && !r && (o?.(e), l?.(e), e.defaultPrevented || u?.())
          }), h), E = function(e, t = globalThis?.document) {
            const r = (0, cc.c)(e),
              n = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !n.current && mc("dismissableLayer.focusOutside", r, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, r]), {
              onFocusCapture: () => n.current = !0,
              onBlurCapture: () => n.current = !1
            }
          }((e => {
            const t = e.target;
            [...d.branches].some((e => e.contains(t))) || (i?.(e), l?.(e), e.defaultPrevented || u?.())
          }), h);
          return (0, dc.U)((e => {
            w === d.layers.size - 1 && (n?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), h), s.useEffect((() => {
            if (f) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (lc = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), vc(), () => {
              r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = lc)
            }
          }), [f, h, r, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), vc())
          }), [f, d]), s.useEffect((() => {
            const e = () => v({});
            return document.addEventListener(fc, e), () => document.removeEventListener(fc, e)
          }), []), (0, a.jsx)(uc.sG.div, {
            ...c,
            ref: m,
            style: {
              pointerEvents: C ? P ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: ac(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: ac(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: ac(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        }));

      function vc() {
        const e = new CustomEvent(fc);
        document.dispatchEvent(e)
      }

      function mc(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, uc.hO)(o, a) : o.dispatchEvent(a)
      }
      hc.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const r = s.useContext(pc),
          n = s.useRef(null),
          o = ic(t, n);
        return s.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, a.jsx)(uc.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var yc = r(74406),
        gc = r(87101),
        bc = r(50123),
        wc = r(15191),
        Cc = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = s.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, i = n ? kl.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        Pc = s.forwardRef(((e, t) => {
          const {
            children: r,
            width: n = 10,
            height: o = 5,
            ...i
          } = e;
          return (0, a.jsx)(Cc.svg, {
            ...i,
            ref: t,
            width: n,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? r : (0, a.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      Pc.displayName = "Arrow";
      var xc = Pc;

      function Ec(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Sc(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }
      var _c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = s.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, i = n ? kl.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        kc = r(66698),
        jc = "Popper",
        [Oc, Tc] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map((e => s.createContext(e)));
            return function(r) {
              const n = r?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              })), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = s.createContext(n),
              i = r.length;

            function l(t) {
              const {
                scope: r,
                children: n,
                ...l
              } = t, u = r?.[e][i] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, a.jsx)(u.Provider, {
                value: c,
                children: n
              })
            }
            return r = [...r, n], l.displayName = t + "Provider", [l, function(r, a) {
              const l = a?.[e][i] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, Sc(n, ...t)]
        }(jc),
        [Nc, Lc] = Oc(jc),
        Mc = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = s.useState(null);
          return (0, a.jsx)(Nc, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      Mc.displayName = jc;
      var Dc = "PopperAnchor",
        Rc = s.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, i = Lc(Dc, r), l = s.useRef(null), u = Ec(t, l);
          return s.useEffect((() => {
            i.onAnchorChange(n?.current || l.current)
          })), n ? null : (0, a.jsx)(_c.div, {
            ...o,
            ref: u
          })
        }));
      Rc.displayName = Dc;
      var Ic = "PopperContent",
        [Ac, zc] = Oc(Ic),
        Vc = s.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: l = 0,
            arrowPadding: u = 0,
            avoidCollisions: c = !0,
            collisionBoundary: d = [],
            collisionPadding: f = 0,
            sticky: p = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: m,
            ...y
          } = e, g = Lc(Ic, r), [b, w] = s.useState(null), C = Ec(t, (e => w(e))), [P, x] = s.useState(null), E = (0, _l.X)(P), S = E?.width ?? 0, _ = E?.height ?? 0, k = n + ("center" !== i ? "-" + i : ""), j = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, O = Array.isArray(d) ? d : [d], T = O.length > 0, N = {
            padding: j,
            boundary: O.filter(Bc),
            altBoundary: T
          }, {
            refs: L,
            floatingStyles: M,
            placement: D,
            isPositioned: R,
            middlewareData: I
          } = (0, gc.we)({
            strategy: "fixed",
            placement: k,
            whileElementsMounted: (...e) => (0, bc.ll)(...e, {
              animationFrame: "always" === v
            }),
            elements: {
              reference: g.anchor
            },
            middleware: [(0, wc.cY)({
              mainAxis: o + _,
              alignmentAxis: l
            }), c && (0, wc.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === p ? (0, wc.ER)() : void 0,
              ...N
            }), c && (0, wc.UU)({
              ...N
            }), (0, wc.Ej)({
              ...N,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: o,
                  height: a
                } = t.reference, i = e.floating.style;
                i.setProperty("--radix-popper-available-width", `${r}px`), i.setProperty("--radix-popper-available-height", `${n}px`), i.setProperty("--radix-popper-anchor-width", `${o}px`), i.setProperty("--radix-popper-anchor-height", `${a}px`)
              }
            }), P && (0, gc.UE)({
              element: P,
              padding: u
            }), Kc({
              arrowWidth: S,
              arrowHeight: _
            }), h && (0, wc.jD)({
              strategy: "referenceHidden",
              ...N
            })]
          }), [A, z] = Hc(D), V = (0, cc.c)(m);
          (0, kc.N)((() => {
            R && V?.()
          }), [R, V]);
          const F = I.arrow?.x,
            q = I.arrow?.y,
            $ = 0 !== I.arrow?.centerOffset,
            [B, K] = s.useState();
          return (0, kc.N)((() => {
            b && K(window.getComputedStyle(b).zIndex)
          }), [b]), (0, a.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...M,
              transform: R ? M.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: B,
              "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
              ...I.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, a.jsx)(Ac, {
              scope: r,
              placedSide: A,
              onArrowChange: x,
              arrowX: F,
              arrowY: q,
              shouldHideArrow: $,
              children: (0, a.jsx)(_c.div, {
                "data-side": A,
                "data-align": z,
                ...y,
                ref: C,
                style: {
                  ...y.style,
                  animation: R ? void 0 : "none"
                }
              })
            })
          })
        }));
      Vc.displayName = Ic;
      var Fc = "PopperArrow",
        qc = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        $c = s.forwardRef((function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = zc(Fc, r), i = qc[o.placedSide];
          return (0, a.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, a.jsx)(xc, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }));

      function Bc(e) {
        return null !== e
      }
      $c.displayName = Fc;
      var Kc = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: o
          } = t, a = 0 !== o.arrow?.centerOffset, i = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [l, u] = Hc(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + i / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = a ? c : `${d}px`, h = -s + "px") : "top" === l ? (p = a ? c : `${d}px`, h = `${n.floating.height+s}px`) : "right" === l ? (p = -s + "px", h = a ? c : `${f}px`) : "left" === l && (p = `${n.floating.width+s}px`, h = a ? c : `${f}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function Hc(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var Wc = Mc,
        Uc = Rc,
        Gc = Vc,
        Xc = $c,
        Yc = r(56679),
        Zc = e => {
          const {
            present: t,
            children: r
          } = e, n = function(e) {
            const [t, r] = s.useState(), n = s.useRef({}), o = s.useRef(e), a = s.useRef("none"), i = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
              return s.useReducer(((e, r) => t[e][r] ?? e), e)
            }(i, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return s.useEffect((() => {
              const e = Qc(n.current);
              a.current = "mounted" === l ? e : "none"
            }), [l]), (0, kc.N)((() => {
              const t = n.current,
                r = o.current;
              if (r !== e) {
                const n = a.current,
                  i = Qc(t);
                u(e ? "MOUNT" : "none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
              }
            }), [e, u]), (0, kc.N)((() => {
              if (t) {
                const e = e => {
                    const r = Qc(n.current).includes(e.animationName);
                    e.target === t && r && Gs.flushSync((() => u("ANIMATION_END")))
                  },
                  r = e => {
                    e.target === t && (a.current = Qc(n.current))
                  };
                return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                  t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
                }
              }
              u("ANIMATION_END")
            }), [t, u]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: s.useCallback((e => {
                e && (n.current = getComputedStyle(e)), r(e)
              }), [])
            }
          }(t), o = "function" == typeof r ? r({
            present: n.isPresent
          }) : s.Children.only(r), a = ic(n.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(o));
          return "function" == typeof r || n.isPresent ? s.cloneElement(o, {
            ref: a
          }) : null
        };

      function Qc(e) {
        return e?.animationName || "none"
      }
      Zc.displayName = "Presence";
      var Jc = r(47773),
        [ed, td] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map((e => s.createContext(e)));
            return function(r) {
              const n = r?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              })), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = s.createContext(n),
              i = r.length;

            function l(t) {
              const {
                scope: r,
                children: n,
                ...l
              } = t, u = r?.[e][i] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, a.jsx)(u.Provider, {
                value: c,
                children: n
              })
            }
            return r = [...r, n], l.displayName = t + "Provider", [l, function(r, a) {
              const l = a?.[e][i] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, sc(n, ...t)]
        }("Tooltip", [Tc]),
        rd = Tc(),
        nd = "TooltipProvider",
        od = 700,
        ad = "tooltip.open",
        [id, sd] = ed(nd),
        ld = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = od,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: i
          } = e, [l, u] = s.useState(!0), c = s.useRef(!1), d = s.useRef(0);
          return s.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, a.jsx)(id, {
            scope: t,
            isOpenDelayed: l,
            delayDuration: r,
            onOpen: s.useCallback((() => {
              window.clearTimeout(d.current), u(!1)
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(d.current), d.current = window.setTimeout((() => u(!0)), n)
            }), [n]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: s.useCallback((e => {
              c.current = e
            }), []),
            disableHoverableContent: o,
            children: i
          })
        };
      ld.displayName = nd;
      var ud = "Tooltip",
        [cd, dd] = ed(ud),
        fd = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o = !1,
            onOpenChange: i,
            disableHoverableContent: l,
            delayDuration: u
          } = e, c = sd(ud, e.__scopeTooltip), d = rd(t), [f, p] = s.useState(null), h = (0, yc.useId)(), v = s.useRef(0), m = l ?? c.disableHoverableContent, y = u ?? c.delayDuration, g = s.useRef(!1), [b = !1, w] = (0, xl.i)({
            prop: n,
            defaultProp: o,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ad))) : c.onClose(), i?.(e)
            }
          }), C = s.useMemo((() => b ? g.current ? "delayed-open" : "instant-open" : "closed"), [b]), P = s.useCallback((() => {
            window.clearTimeout(v.current), g.current = !1, w(!0)
          }), [w]), x = s.useCallback((() => {
            window.clearTimeout(v.current), w(!1)
          }), [w]), E = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              g.current = !0, w(!0)
            }), y)
          }), [y, w]);
          return s.useEffect((() => () => window.clearTimeout(v.current)), []), (0, a.jsx)(Wc, {
            ...d,
            children: (0, a.jsx)(cd, {
              scope: t,
              contentId: h,
              open: b,
              stateAttribute: C,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: s.useCallback((() => {
                c.isOpenDelayed ? E() : P()
              }), [c.isOpenDelayed, E, P]),
              onTriggerLeave: s.useCallback((() => {
                m ? x() : window.clearTimeout(v.current)
              }), [x, m]),
              onOpen: P,
              onClose: x,
              disableHoverableContent: m,
              children: r
            })
          })
        };
      fd.displayName = ud;
      var pd = "TooltipTrigger",
        hd = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = dd(pd, r), i = sd(pd, r), l = rd(r), u = ic(t, s.useRef(null), o.onTriggerChange), c = s.useRef(!1), d = s.useRef(!1), f = s.useCallback((() => c.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, a.jsx)(Uc, {
            asChild: !0,
            ...l,
            children: (0, a.jsx)(uc.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: u,
              onPointerMove: ac(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || i.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: ac(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: ac(e.onPointerDown, (() => {
                c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: ac(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: ac(e.onBlur, o.onClose),
              onClick: ac(e.onClick, o.onClose)
            })
          })
        }));
      hd.displayName = pd;
      var vd = "TooltipPortal",
        [md, yd] = ed(vd, {
          forceMount: void 0
        }),
        gd = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, i = dd(vd, t);
          return (0, a.jsx)(md, {
            scope: t,
            forceMount: r,
            children: (0, a.jsx)(Zc, {
              present: r || i.open,
              children: (0, a.jsx)(Yc.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      gd.displayName = vd;
      var bd = "TooltipContent",
        wd = s.forwardRef(((e, t) => {
          const r = yd(bd, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...i
            } = e,
            s = dd(bd, e.__scopeTooltip);
          return (0, a.jsx)(Zc, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, a.jsx)(Ed, {
              side: o,
              ...i,
              ref: t
            }) : (0, a.jsx)(Cd, {
              side: o,
              ...i,
              ref: t
            })
          })
        })),
        Cd = s.forwardRef(((e, t) => {
          const r = dd(bd, e.__scopeTooltip),
            n = sd(bd, e.__scopeTooltip),
            o = s.useRef(null),
            i = ic(t, o),
            [l, u] = s.useState(null),
            {
              trigger: c,
              onClose: d
            } = r,
            f = o.current,
            {
              onPointerInTransitChange: p
            } = n,
            h = s.useCallback((() => {
              u(null), p(!1)
            }), [p]),
            v = s.useCallback(((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, r = 5) {
                  const n = [];
                  switch (t) {
                    case "top":
                      n.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return n
                }(n, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, a)) {
                    case a:
                      return "left";
                    case o:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                a = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              u(a), p(!0)
            }), [p]);
          return s.useEffect((() => () => h()), [h]), s.useEffect((() => {
            if (c && f) {
              const e = e => v(e, f),
                t = e => v(e, c);
              return c.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [c, f, v, h]), s.useEffect((() => {
            if (l) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = c?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const i = t[e].x,
                        s = t[e].y,
                        l = t[a].x,
                        u = t[a].y;
                      s > n != u > n && r < (l - i) * (n - s) / (u - s) + i && (o = !o)
                    }
                    return o
                  }(r, l);
                n ? h() : o && (h(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [c, f, l, d, h]), (0, a.jsx)(Ed, {
            ...e,
            ref: i
          })
        })),
        [Pd, xd] = ed(ud, {
          isInside: !1
        }),
        Ed = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            ...u
          } = e, c = dd(bd, r), d = rd(r), {
            onClose: f
          } = c;
          return s.useEffect((() => (document.addEventListener(ad, f), () => document.removeEventListener(ad, f))), [f]), s.useEffect((() => {
            if (c.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(c.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [c.trigger, f]), (0, a.jsx)(hc, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, a.jsxs)(Gc, {
              "data-state": c.stateAttribute,
              ...d,
              ...u,
              ref: t,
              style: {
                ...u.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, a.jsx)(kl.Slottable, {
                children: n
              }), (0, a.jsx)(Pd, {
                scope: r,
                isInside: !0,
                children: (0, a.jsx)(Jc.Root, {
                  id: c.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      wd.displayName = bd;
      var Sd = "TooltipArrow",
        _d = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = rd(r);
          return xd(Sd, r).isInside ? null : (0, a.jsx)(Xc, {
            ...o,
            ...n,
            ref: t
          })
        }));
      _d.displayName = Sd;
      var kd = ld,
        jd = fd,
        Od = hd,
        Td = gd,
        Nd = wd,
        Ld = _d;
      const Md = ({
        content: e,
        children: t,
        side: r = "top",
        sideOffset: n = 8,
        align: o = "center",
        alignOffset: i = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u,
        collisionPadding: c,
        sticky: d = "partial",
        onEscapeKeyDown: f,
        onPointerDownOutside: p,
        label: h,
        defaultOpen: v,
        open: m,
        onOpenChange: y,
        delayDuration: g = 400,
        portal: b = !0,
        arrow: w = !0,
        portalContainer: C,
        testId: P
      }) => {
        const [x = !1, E] = mt({
          defaultProp: v,
          prop: m,
          onChange: y
        }), S = pt(x), _ = Bs({
          opacity: x ? 1 : 0,
          immediate: x && !S
        }), k = "left" === r || "right" === r ? "center" : o, j = b ? {
          container: C
        } : {}, O = b ? Td : s.Fragment, T = w ? {
          className: "foundry_h3lgaa2"
        } : {}, N = w ? Ld : s.Fragment;
        return (0, a.jsx)(kd, {
          delayDuration: g,
          children: (0, a.jsxs)(jd, {
            open: x,
            onOpenChange: E,
            children: [(0, a.jsx)(Od, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, a.jsx)(O, {
              ...j,
              children: (0, a.jsx)(Nd, {
                side: r,
                align: k,
                sticky: d,
                forceMount: !0,
                "aria-label": h,
                "data-testid": P,
                sideOffset: n,
                alignOffset: i,
                onEscapeKeyDown: f,
                avoidCollisions: l,
                collisionPadding: c,
                collisionBoundary: u,
                onPointerDownOutside: p,
                children: (0, a.jsxs)(oc.div, {
                  className: "foundry_h3lgaa0",
                  style: _,
                  children: [(0, a.jsx)(M, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, a.jsx)(N, {
                    ...T
                  })]
                })
              })
            })]
          })
        })
      };
      var Dd = "foundry_bwy1ds1",
        Rd = "foundry_bwy1dsg",
        Id = "foundry_bwy1dsf";
      const Ad = e => {
        e.preventDefault?.()
      };
      (0, s.forwardRef)((({
        onClose: e,
        onDownload: t,
        zoomLevel: r,
        zoomIn: n,
        zoomOut: o,
        zoomTo: i,
        minZoomLevel: s,
        maxZoomLevel: l,
        canZoomIn: u,
        canZoomOut: c,
        resetZoom: d,
        caption: f,
        showDownloadButton: p,
        defaultZoomLevel: h,
        showZoomControls: v
      }, m) => {
        const y = hl(),
          g = ft("screen and (max-width: 1024px)"),
          b = r !== h,
          w = g ? "SM" : "LG",
          C = Bs({
            opacity: b ? 1 : 0,
            immediate: ft("(prefers-reduced-motion: reduce)", {
              defaultValue: !1,
              initializeWithValue: !0
            })
          });
        Iu(["+", "=", "add", "plus"], (() => n?.()), {
          preventDefault: !0,
          enabled: v
        }), Iu(["minus", "subtract"], (() => o?.()), {
          preventDefault: !0,
          enabled: v
        }), Iu("r", (() => d?.()), {
          preventDefault: !0,
          enabled: v
        });
        const P = function(e = !0) {
          return !!e && ft("screen and (pointer: coarse) and (hover: none)")
        }() && g;
        return (0, a.jsx)(Mu, {
          children: (0, a.jsxs)("div", {
            className: "foundry_bwy1ds0",
            ref: m,
            children: [(0, a.jsx)(Md, {
              side: "right",
              portal: !1,
              delayDuration: 0,
              onPointerDownOutside: Ad,
              content: (0, a.jsxs)("div", {
                className: Id,
                children: [y.formatMessage(iu), (0, a.jsx)(F, {
                  className: Rd,
                  children: y.formatMessage(su, {
                    shortcut: (0, a.jsx)(Hu, {
                      shortcut: "Esc",
                      isInline: !0
                    })
                  })
                })]
              }),
              children: (0, a.jsx)(Ku, {
                size: w,
                appearance: "tertiary",
                icon: "ArrowLeft",
                label: y.formatMessage(iu),
                className: (0, Se.$)(Dd, "foundry_bwy1ds2"),
                onPress: e
              })
            }), (0, a.jsxs)("div", {
              className: "foundry_bwy1ds3",
              children: [!P && v && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: "foundry_bwy1ds4",
                  children: [(0, a.jsx)(Md, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Ad,
                    content: (0, a.jsxs)("div", {
                      className: Id,
                      children: [y.formatMessage(lu), (0, a.jsx)(F, {
                        className: Rd,
                        children: y.formatMessage(uu, {
                          shortcut: (0, a.jsx)(Hu, {
                            shortcut: "+",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Ku, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Plus",
                      label: y.formatMessage(lu),
                      className: (0, Se.$)(Dd, "foundry_bwy1ds5"),
                      onPress: () => n(),
                      isDisabled: !u
                    })
                  }), (0, a.jsxs)(ru, {
                    className: "foundry_bwy1dsa",
                    value: [r],
                    max: l,
                    min: s,
                    step: 1,
                    orientation: "vertical",
                    onValueChange: e => i?.(e[0]),
                    children: [(0, a.jsx)(nu, {
                      className: "foundry_bwy1dsb",
                      children: (0, a.jsx)(ou, {
                        className: "foundry_bwy1dsc"
                      })
                    }), (0, a.jsx)(Md, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Ad,
                      content: y.formatMessage(vu, {
                        zoom: r.toFixed(0)
                      }),
                      children: (0, a.jsx)(au, {
                        className: "foundry_bwy1dsd",
                        "aria-label": y.formatMessage(hu),
                        children: (0, a.jsx)("span", {
                          className: "foundry_bwy1dse"
                        })
                      })
                    })]
                  }), (0, a.jsx)(Md, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Ad,
                    content: (0, a.jsxs)("div", {
                      className: Id,
                      children: [y.formatMessage(cu), (0, a.jsx)(F, {
                        className: Rd,
                        children: y.formatMessage(du, {
                          shortcut: (0, a.jsx)(Hu, {
                            shortcut: "-",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Ku, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Minus",
                      label: y.formatMessage(cu),
                      className: (0, Se.$)(Dd, "foundry_bwy1ds6"),
                      onPress: () => o(),
                      isDisabled: !c
                    })
                  })]
                }), (0, a.jsx)(sl.div, {
                  style: C,
                  children: (0, a.jsx)(Md, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Ad,
                    content: (0, a.jsxs)("div", {
                      className: Id,
                      children: [y.formatMessage(fu), (0, a.jsx)(F, {
                        className: Rd,
                        children: y.formatMessage(pu, {
                          shortcut: (0, a.jsx)(Hu, {
                            shortcut: "R",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, a.jsx)(Ku, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Revert",
                      label: y.formatMessage(fu),
                      className: (0, Se.$)(Dd, "foundry_bwy1ds7"),
                      onPress: d,
                      isDisabled: !b,
                      "aria-hidden": !b
                    })
                  })
                })]
              }), p && P && (0, a.jsx)(Md, {
                side: "left",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Ad,
                content: y.formatMessage(yu),
                children: (0, a.jsx)(Ku, {
                  size: w,
                  appearance: "tertiary",
                  icon: "Download",
                  label: y.formatMessage(mu),
                  className: Dd,
                  onPress: e
                })
              })]
            }), (0, a.jsxs)("div", {
              className: "foundry_bwy1ds8",
              children: [f && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: "foundry_bwy1dsh"
                }), (0, a.jsx)(_, {
                  "aria-hidden": !0,
                  asChild: "string" != typeof f,
                  children: f
                })]
              }), p && !P && (0, a.jsx)("div", {
                className: "foundry_bwy1ds9",
                children: (0, a.jsx)(Md, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Ad,
                  content: y.formatMessage(yu),
                  children: (0, a.jsx)(Ku, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: y.formatMessage(mu),
                    className: Dd,
                    onPress: t
                  })
                })
              })]
            })]
          })
        })
      }));
      var zd = r(35755);

      function Vd(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function Fd(e, t = []) {
        let r = [];
        const n = () => {
          const t = r.map((e => s.createContext(e)));
          return function(r) {
            const n = r?.[e] || t;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...r,
                [e]: n
              }
            })), [r, n])
          }
        };
        return n.scopeName = e, [function(t, n) {
          const o = s.createContext(n),
            i = r.length;

          function l(t) {
            const {
              scope: r,
              children: n,
              ...l
            } = t, u = r?.[e][i] || o, c = s.useMemo((() => l), Object.values(l));
            return (0, a.jsx)(u.Provider, {
              value: c,
              children: n
            })
          }
          return r = [...r, n], l.displayName = t + "Provider", [l, function(r, a) {
            const l = a?.[e][i] || o,
              u = s.useContext(l);
            if (u) return u;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, qd(n, ...t)]
      }

      function qd(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }

      function $d(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      sl(zd.Overlay), sl(zd.Content), (0, i.AK)(.77, 0, .175, 1);
      var Bd, Kd = r(4119),
        Hd = "dismissableLayer.update",
        Wd = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Ud = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = s.useContext(Wd), [f, p] = s.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, v] = s.useState({}), m = $d(t, (e => p(e))), y = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(g), w = f ? y.indexOf(f) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, P = w >= b, x = function(e, t = globalThis?.document) {
            const r = (0, cc.c)(e),
              n = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Xd("dismissableLayer.pointerDownOutside", r, a, {
                        discrete: !0
                      })
                    };
                    const a = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = n, t.addEventListener("click", o.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", o.current);
                  n.current = !1
                },
                a = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }((e => {
            const t = e.target,
              r = [...d.branches].some((e => e.contains(t)));
            P && !r && (o?.(e), l?.(e), e.defaultPrevented || u?.())
          }), h), E = function(e, t = globalThis?.document) {
            const r = (0, cc.c)(e),
              n = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !n.current && Xd("dismissableLayer.focusOutside", r, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, r]), {
              onFocusCapture: () => n.current = !0,
              onBlurCapture: () => n.current = !1
            }
          }((e => {
            const t = e.target;
            [...d.branches].some((e => e.contains(t))) || (i?.(e), l?.(e), e.defaultPrevented || u?.())
          }), h);
          return (0, dc.U)((e => {
            w === d.layers.size - 1 && (n?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), h), s.useEffect((() => {
            if (f) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Bd = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Gd(), () => {
              r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = Bd)
            }
          }), [f, h, r, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Gd())
          }), [f, d]), s.useEffect((() => {
            const e = () => v({});
            return document.addEventListener(Hd, e), () => document.removeEventListener(Hd, e)
          }), []), (0, a.jsx)(Kd.sG.div, {
            ...c,
            ref: m,
            style: {
              pointerEvents: C ? P ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Vd(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: Vd(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: Vd(e.onPointerDownCapture, x.onPointerDownCapture)
          })
        }));

      function Gd() {
        const e = new CustomEvent(Hd);
        document.dispatchEvent(e)
      }

      function Xd(e, t, r, {
        discrete: n
      }) {
        const o = r.originalEvent.target,
          a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), n ? (0, Kd.hO)(o, a) : o.dispatchEvent(a)
      }
      Ud.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const r = s.useContext(Wd),
          n = s.useRef(null),
          o = $d(t, n);
        return s.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, a.jsx)(Kd.sG.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Yd = 0;

      function Zd() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Qd = "focusScope.autoFocusOnMount",
        Jd = "focusScope.autoFocusOnUnmount",
        ef = {
          bubbles: !1,
          cancelable: !0
        },
        tf = s.forwardRef(((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            ...l
          } = e, [u, c] = s.useState(null), d = (0, cc.c)(o), f = (0, cc.c)(i), p = s.useRef(null), h = $d(t, (e => c(e))), v = s.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          s.useEffect((() => {
            if (n) {
              let e = function(e) {
                  if (v.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? p.current = t : af(p.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (v.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || af(p.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && af(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return u && n.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }), [n, u, v.paused]), s.useEffect((() => {
            if (u) {
              sf.add(v);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(Qd, ef);
                u.addEventListener(Qd, d), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (af(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(rf(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && af(u))
              }
              return () => {
                u.removeEventListener(Qd, d), setTimeout((() => {
                  const t = new CustomEvent(Jd, ef);
                  u.addEventListener(Jd, f), u.dispatchEvent(t), t.defaultPrevented || af(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(Jd, f), sf.remove(v)
                }), 0)
              }
            }
          }), [u, d, f, v]);
          const m = s.useCallback((e => {
            if (!r && !n) return;
            if (v.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [n, a] = function(e) {
                  const t = rf(e);
                  return [nf(t, e), nf(t.reverse(), e)]
                }(t);
              n && a ? e.shiftKey || o !== a ? e.shiftKey && o === n && (e.preventDefault(), r && af(a, {
                select: !0
              })) : (e.preventDefault(), r && af(n, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [r, n, v.paused]);
          return (0, a.jsx)(Kd.sG.div, {
            tabIndex: -1,
            ...l,
            ref: h,
            onKeyDown: m
          })
        }));

      function rf(e) {
        const t = [],
          r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; r.nextNode();) t.push(r.currentNode);
        return t
      }

      function nf(e, t) {
        for (const r of e)
          if (!of(r, {
              upTo: t
            })) return r
      }

      function of(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function af(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const r = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== r && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      tf.displayName = "FocusScope";
      var sf = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = lf(e, t), e.unshift(t)
          },
          remove(t) {
            e = lf(e, t), e[0]?.resume()
          }
        }
      }();

      function lf(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var uf = r(52072),
        cf = r(53648),
        df = r(58924),
        ff = r(19690),
        pf = [" ", "Enter", "ArrowUp", "ArrowDown"],
        hf = [" ", "Enter"],
        vf = "Select",
        [mf, yf, gf] = function(e) {
          const t = e + "CollectionProvider",
            [r, n] = Fd(t),
            [o, i] = r(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            l = e => {
              const {
                scope: t,
                children: r
              } = e, n = s.useRef(null), i = s.useRef(new Map).current;
              return (0, a.jsx)(o, {
                scope: t,
                itemMap: i,
                collectionRef: n,
                children: r
              })
            };
          l.displayName = t;
          const u = e + "CollectionSlot",
            c = s.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n
              } = e, o = $d(t, i(u, r).collectionRef);
              return (0, a.jsx)(kl.Slot, {
                ref: o,
                children: n
              })
            }));
          c.displayName = u;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            p = s.forwardRef(((e, t) => {
              const {
                scope: r,
                children: n,
                ...o
              } = e, l = s.useRef(null), u = $d(t, l), c = i(d, r);
              return s.useEffect((() => (c.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                c.itemMap.delete(l)
              }))), (0, a.jsx)(kl.Slot, {
                [f]: "",
                ref: u,
                children: n
              })
            }));
          return p.displayName = d, [{
            Provider: l,
            Slot: c,
            ItemSlot: p
          }, function(t) {
            const r = i(e + "CollectionConsumer", t);
            return s.useCallback((() => {
              const e = r.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
            }), [r.collectionRef, r.itemMap])
          }, n]
        }(vf),
        [bf, wf] = Fd(vf, [gf, Tc]),
        Cf = Tc(),
        [Pf, xf] = bf(vf),
        [Ef, Sf] = bf(vf),
        _f = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: i,
            value: l,
            defaultValue: u,
            onValueChange: c,
            dir: d,
            name: f,
            autoComplete: p,
            disabled: h,
            required: v
          } = e, m = Cf(t), [y, g] = s.useState(null), [b, w] = s.useState(null), [C, P] = s.useState(!1), x = (0, El.jH)(d), [E = !1, S] = (0, xl.i)({
            prop: n,
            defaultProp: o,
            onChange: i
          }), [_, k] = (0, xl.i)({
            prop: l,
            defaultProp: u,
            onChange: c
          }), j = s.useRef(null), O = !y || Boolean(y.closest("form")), [T, N] = s.useState(new Set), L = Array.from(T).map((e => e.props.value)).join(";");
          return (0, a.jsx)(Wc, {
            ...m,
            children: (0, a.jsxs)(Pf, {
              required: v,
              scope: t,
              trigger: y,
              onTriggerChange: g,
              valueNode: b,
              onValueNodeChange: w,
              valueNodeHasChildren: C,
              onValueNodeHasChildrenChange: P,
              contentId: (0, yc.useId)(),
              value: _,
              onValueChange: k,
              open: E,
              onOpenChange: S,
              dir: x,
              triggerPointerDownPosRef: j,
              disabled: h,
              children: [(0, a.jsx)(mf.Provider, {
                scope: t,
                children: (0, a.jsx)(Ef, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    N((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    N((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), O ? (0, a.jsxs)(sp, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: _,
                onChange: e => k(e.target.value),
                disabled: h,
                children: [void 0 === _ ? (0, a.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, L) : null]
            })
          })
        };
      _f.displayName = vf;
      var kf = "SelectTrigger",
        jf = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, i = Cf(r), s = xf(kf, r), l = s.disabled || n, u = $d(t, s.onTriggerChange), c = yf(r), [d, f, p] = lp((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === s.value)),
              n = up(t, e, r);
            void 0 !== n && s.onValueChange(n.value)
          })), h = () => {
            l || (s.onOpenChange(!0), p())
          };
          return (0, a.jsx)(Uc, {
            asChild: !0,
            ...i,
            children: (0, a.jsx)(Kd.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              dir: s.dir,
              "data-state": s.open ? "open" : "closed",
              disabled: l,
              "data-disabled": l ? "" : void 0,
              "data-placeholder": ip(s.value) ? "" : void 0,
              ...o,
              ref: u,
              onClick: Vd(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: Vd(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (h(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: Vd(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || pf.includes(e.key) && (h(), e.preventDefault())
              }))
            })
          })
        }));
      jf.displayName = kf;
      var Of = "SelectValue",
        Tf = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: i,
            placeholder: s = "",
            ...l
          } = e, u = xf(Of, r), {
            onValueNodeHasChildrenChange: c
          } = u, d = void 0 !== i, f = $d(t, u.onValueNodeChange);
          return (0, kc.N)((() => {
            c(d)
          }), [c, d]), (0, a.jsx)(Kd.sG.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: ip(u.value) ? (0, a.jsx)(a.Fragment, {
              children: s
            }) : i
          })
        }));
      Tf.displayName = Of;
      var Nf = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, a.jsx)(Kd.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      Nf.displayName = "SelectIcon";
      var Lf = e => (0, a.jsx)(uf.Portal, {
        asChild: !0,
        ...e
      });
      Lf.displayName = "SelectPortal";
      var Mf = "SelectContent",
        Df = s.forwardRef(((e, t) => {
          const r = xf(Mf, e.__scopeSelect),
            [n, o] = s.useState();
          if ((0, kc.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? Gs.createPortal((0, a.jsx)(If, {
              scope: e.__scopeSelect,
              children: (0, a.jsx)(mf.Slot, {
                scope: e.__scopeSelect,
                children: (0, a.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, a.jsx)(zf, {
            ...e,
            ref: t
          })
        }));
      Df.displayName = Mf;
      var Rf = 10,
        [If, Af] = bf(Mf),
        zf = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: m,
            hideWhenDetached: y,
            avoidCollisions: g,
            ...b
          } = e, w = xf(Mf, r), [C, P] = s.useState(null), [x, E] = s.useState(null), S = $d(t, (e => P(e))), [_, k] = s.useState(null), [j, O] = s.useState(null), T = yf(r), [N, L] = s.useState(!1), M = s.useRef(!1);
          s.useEffect((() => {
            if (C) return (0, df.Eq)(C)
          }), [C]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zd()), document.body.insertAdjacentElement("beforeend", e[1] ?? Zd()), Yd++, () => {
              1 === Yd && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Yd--
            }
          }), []);
          const D = s.useCallback((e => {
              const [t, ...r] = T().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && x && (x.scrollTop = 0), r === n && x && (x.scrollTop = x.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [T, x]),
            R = s.useCallback((() => D([_, C])), [D, _, C]);
          s.useEffect((() => {
            N && R()
          }), [N, R]);
          const {
            onOpenChange: I,
            triggerPointerDownPosRef: A
          } = w;
          s.useEffect((() => {
            if (C) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (A.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : C.contains(r.target) || I(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [C, I, A]), s.useEffect((() => {
            const e = () => I(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [I]);
          const [z, V] = lp((e => {
            const t = T().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = up(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), F = s.useCallback(((e, t, r) => {
            const n = !M.current && !r;
            (void 0 !== w.value && w.value === t || n) && (k(e), n && (M.current = !0))
          }), [w.value]), q = s.useCallback((() => C?.focus()), [C]), $ = s.useCallback(((e, t, r) => {
            const n = !M.current && !r;
            (void 0 !== w.value && w.value === t || n) && O(e)
          }), [w.value]), B = "popper" === n ? Ff : Vf, K = B === Ff ? {
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: m,
            hideWhenDetached: y,
            avoidCollisions: g
          } : {};
          return (0, a.jsx)(If, {
            scope: r,
            content: C,
            viewport: x,
            onViewportChange: E,
            itemRefCallback: F,
            selectedItem: _,
            onItemLeave: q,
            itemTextRefCallback: $,
            focusSelectedItem: R,
            selectedItemText: j,
            position: n,
            isPositioned: N,
            searchRef: z,
            children: (0, a.jsx)(ff.RemoveScroll, {
              as: kl.Slot,
              allowPinchZoom: !0,
              children: (0, a.jsx)(tf, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: Vd(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, a.jsx)(Ud, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: l,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, a.jsx)(B, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...K,
                    onPlaced: () => L(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: Vd(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = T().filter((e => !e.disabled));
                        let r = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout((() => D(r))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      zf.displayName = "SelectContentImpl";
      var Vf = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = xf(Mf, r), l = Af(Mf, r), [u, c] = s.useState(null), [d, f] = s.useState(null), p = $d(t, (e => f(e))), h = yf(r), v = s.useRef(!1), m = s.useRef(!0), {
          viewport: y,
          selectedItem: g,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, C = s.useCallback((() => {
          if (i.trigger && i.valueNode && u && d && y && g && b) {
            const e = i.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = o.left - t.left,
                a = r.left - n,
                i = e.left - a,
                s = e.width + i,
                l = Math.max(s, t.width),
                c = window.innerWidth - Rf,
                d = gl(a, [Rf, c - l]);
              u.style.minWidth = s + "px", u.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                a = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - a,
                s = e.width + i,
                l = Math.max(s, t.width),
                c = window.innerWidth - Rf,
                d = gl(a, [Rf, c - l]);
              u.style.minWidth = s + "px", u.style.right = d + "px"
            }
            const a = h(),
              s = window.innerHeight - 2 * Rf,
              l = y.scrollHeight,
              c = window.getComputedStyle(d),
              f = parseInt(c.borderTopWidth, 10),
              p = parseInt(c.paddingTop, 10),
              m = parseInt(c.borderBottomWidth, 10),
              w = f + p + l + parseInt(c.paddingBottom, 10) + m,
              C = Math.min(5 * g.offsetHeight, w),
              P = window.getComputedStyle(y),
              x = parseInt(P.paddingTop, 10),
              E = parseInt(P.paddingBottom, 10),
              S = e.top + e.height / 2 - Rf,
              _ = s - S,
              k = g.offsetHeight / 2,
              j = f + p + (g.offsetTop + k),
              O = w - j;
            if (j <= S) {
              const e = g === a[a.length - 1].ref.current;
              u.style.bottom = "0px";
              const t = d.clientHeight - y.offsetTop - y.offsetHeight,
                r = j + Math.max(_, k + (e ? E : 0) + t + m);
              u.style.height = r + "px"
            } else {
              const e = g === a[0].ref.current;
              u.style.top = "0px";
              const t = Math.max(S, f + y.offsetTop + (e ? x : 0) + k) + O;
              u.style.height = t + "px", y.scrollTop = j - S + y.offsetTop
            }
            u.style.margin = `${Rf}px 0`, u.style.minHeight = C + "px", u.style.maxHeight = s + "px", n?.(), requestAnimationFrame((() => v.current = !0))
          }
        }), [h, i.trigger, i.valueNode, u, d, y, g, b, i.dir, n]);
        (0, kc.N)((() => C()), [C]);
        const [P, x] = s.useState();
        (0, kc.N)((() => {
          d && x(window.getComputedStyle(d).zIndex)
        }), [d]);
        const E = s.useCallback((e => {
          e && !0 === m.current && (C(), w?.(), m.current = !1)
        }), [C, w]);
        return (0, a.jsx)(qf, {
          scope: r,
          contentWrapper: u,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: E,
          children: (0, a.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: P
            },
            children: (0, a.jsx)(Kd.sG.div, {
              ...o,
              ref: p,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      Vf.displayName = "SelectItemAlignedPosition";
      var Ff = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Rf,
          ...i
        } = e, s = Cf(r);
        return (0, a.jsx)(Gc, {
          ...s,
          ...i,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...i.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      Ff.displayName = "SelectPopperPosition";
      var [qf, $f] = bf(Mf, {}), Bf = "SelectViewport", Kf = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, i = Af(Bf, r), l = $f(Bf, r), u = $d(t, i.onViewportChange), c = s.useRef(0);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, a.jsx)(mf.Slot, {
            scope: r,
            children: (0, a.jsx)(Kd.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: u,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...o.style
              },
              onScroll: Vd(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = l;
                if (n?.current && r) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Rf,
                      o = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      i = Math.max(o, a);
                    if (i < n) {
                      const o = i + e,
                        a = Math.min(n, o),
                        s = o - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                c.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      Kf.displayName = Bf;
      var Hf = "SelectGroup",
        [Wf, Uf] = bf(Hf);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, yc.useId)();
        return (0, a.jsx)(Wf, {
          scope: r,
          id: o,
          children: (0, a.jsx)(Kd.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = Hf;
      var Gf = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Uf(Gf, r);
        return (0, a.jsx)(Kd.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = Gf;
      var Xf = "SelectItem",
        [Yf, Zf] = bf(Xf),
        Qf = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: i,
            ...l
          } = e, u = xf(Xf, r), c = Af(Xf, r), d = u.value === n, [f, p] = s.useState(i ?? ""), [h, v] = s.useState(!1), m = $d(t, (e => c.itemRefCallback?.(e, n, o))), y = (0, yc.useId)(), g = () => {
            o || (u.onValueChange(n), u.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, a.jsx)(Yf, {
            scope: r,
            value: n,
            disabled: o,
            textId: y,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              p((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, a.jsx)(mf.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: f,
              children: (0, a.jsx)(Kd.sG.div, {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": d && h,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...l,
                ref: m,
                onFocus: Vd(l.onFocus, (() => v(!0))),
                onBlur: Vd(l.onBlur, (() => v(!1))),
                onPointerUp: Vd(l.onPointerUp, g),
                onPointerMove: Vd(l.onPointerMove, (e => {
                  o ? c.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: Vd(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: Vd(l.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (hf.includes(e.key) && g(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Qf.displayName = Xf;
      var Jf = "SelectItemText",
        ep = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...i
          } = e, l = xf(Jf, r), u = Af(Jf, r), c = Zf(Jf, r), d = Sf(Jf, r), [f, p] = s.useState(null), h = $d(t, (e => p(e)), c.onItemTextChange, (e => u.itemTextRefCallback?.(e, c.value, c.disabled))), v = f?.textContent, m = s.useMemo((() => (0, a.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: v
          }, c.value)), [c.disabled, c.value, v]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: g
          } = d;
          return (0, kc.N)((() => (y(m), () => g(m))), [y, g, m]), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(Kd.sG.span, {
              id: c.textId,
              ...i,
              ref: h
            }), c.isSelected && l.valueNode && !l.valueNodeHasChildren ? Gs.createPortal(i.children, l.valueNode) : null]
          })
        }));
      ep.displayName = Jf;
      var tp = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Zf(tp, r).isSelected ? (0, a.jsx)(Kd.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = tp;
      var rp = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const r = Af(rp, e.__scopeSelect),
          n = $f(rp, e.__scopeSelect),
          [o, i] = s.useState(!1),
          l = $d(t, n.onScrollButtonChange);
        return (0, kc.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              i(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, a.jsx)(op, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = rp;
      var np = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const r = Af(np, e.__scopeSelect),
          n = $f(np, e.__scopeSelect),
          [o, i] = s.useState(!1),
          l = $d(t, n.onScrollButtonChange);
        return (0, kc.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              i(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, a.jsx)(op, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = np;
      var op = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, i = Af("SelectScrollButton", r), l = s.useRef(null), u = yf(r), c = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => c()), [c]), (0, kc.N)((() => {
          const e = u().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [u]), (0, a.jsx)(Kd.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: Vd(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(n, 50))
          })),
          onPointerMove: Vd(o.onPointerMove, (() => {
            i.onItemLeave?.(), null === l.current && (l.current = window.setInterval(n, 50))
          })),
          onPointerLeave: Vd(o.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, a.jsx)(Kd.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var ap = "SelectArrow";

      function ip(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Cf(r), i = xf(ap, r), s = Af(ap, r);
        return i.open && "popper" === s.position ? (0, a.jsx)(Xc, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = ap;
      var sp = s.forwardRef(((e, t) => {
        const {
          value: r,
          ...n
        } = e, o = s.useRef(null), i = $d(t, o), l = (0, Sl.Z)(r);
        return s.useEffect((() => {
          const e = o.current,
            t = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, "value").set;
          if (l !== r && n) {
            const t = new Event("change", {
              bubbles: !0
            });
            n.call(e, r), e.dispatchEvent(t)
          }
        }), [l, r]), (0, a.jsx)(cf.VisuallyHidden, {
          asChild: !0,
          children: (0, a.jsx)("select", {
            ...n,
            ref: i,
            defaultValue: r
          })
        })
      }));

      function lp(e) {
        const t = (0, cc.c)(e),
          r = s.useRef(""),
          n = s.useRef(0),
          o = s.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          a = s.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return s.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, a]
      }

      function up(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let a = (i = e, s = Math.max(o, 0), i.map(((e, t) => i[(s + t) % i.length])));
        var i, s;
        1 === n.length && (a = a.filter((e => e !== r)));
        const l = a.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      sp.displayName = "BubbleSelect";
      var cp = _f,
        dp = jf,
        fp = Tf,
        pp = Nf,
        hp = Lf,
        vp = Df,
        mp = Kf,
        yp = Qf,
        gp = ep,
        bp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = s.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, i = n ? kl.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function wp(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var Cp = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = s.useState(), n = s.useRef({}), o = s.useRef(e), a = s.useRef("none"), i = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
            return s.useReducer(((e, r) => t[e][r] ?? e), e)
          }(i, {
            mounted: {
              UNMOUNT: "unmounted",
              ANIMATION_OUT: "unmountSuspended"
            },
            unmountSuspended: {
              MOUNT: "mounted",
              ANIMATION_END: "unmounted"
            },
            unmounted: {
              MOUNT: "mounted"
            }
          });
          return s.useEffect((() => {
            const e = Pp(n.current);
            a.current = "mounted" === l ? e : "none"
          }), [l]), (0, kc.N)((() => {
            const t = n.current,
              r = o.current;
            if (r !== e) {
              const n = a.current,
                i = Pp(t);
              u(e ? "MOUNT" : "none" === i || "none" === t?.display ? "UNMOUNT" : r && n !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, u]), (0, kc.N)((() => {
            if (t) {
              const e = e => {
                  const r = Pp(n.current).includes(e.animationName);
                  e.target === t && r && Gs.flushSync((() => u("ANIMATION_END")))
                },
                r = e => {
                  e.target === t && (a.current = Pp(n.current))
                };
              return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (n.current = getComputedStyle(e)), r(e)
            }), [])
          }
        }(t), o = "function" == typeof r ? r({
          present: n.isPresent
        }) : s.Children.only(r), a = wp(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof r || n.isPresent ? s.cloneElement(o, {
          ref: a
        }) : null
      };

      function Pp(e) {
        return e?.animationName || "none"
      }

      function xp(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const r = () => {
          const r = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const n = r.reduce(((t, {
              useScope: r,
              scopeName: n
            }) => ({
              ...t,
              ...r(e)[`__scope${n}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }

      function Ep(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }
      Cp.displayName = "Presence";
      var Sp = "ScrollArea",
        [_p, kp] = function(e, t = []) {
          let r = [];
          const n = () => {
            const t = r.map((e => s.createContext(e)));
            return function(r) {
              const n = r?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...r,
                  [e]: n
                }
              })), [r, n])
            }
          };
          return n.scopeName = e, [function(t, n) {
            const o = s.createContext(n),
              i = r.length;

            function l(t) {
              const {
                scope: r,
                children: n,
                ...l
              } = t, u = r?.[e][i] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, a.jsx)(u.Provider, {
                value: c,
                children: n
              })
            }
            return r = [...r, n], l.displayName = t + "Provider", [l, function(r, a) {
              const l = a?.[e][i] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== n) return n;
              throw new Error(`\`${r}\` must be used within \`${t}\``)
            }]
          }, xp(n, ...t)]
        }(Sp),
        [jp, Op] = _p(Sp),
        Tp = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: i = 600,
            ...l
          } = e, [u, c] = s.useState(null), [d, f] = s.useState(null), [p, h] = s.useState(null), [v, m] = s.useState(null), [y, g] = s.useState(null), [b, w] = s.useState(0), [C, P] = s.useState(0), [x, E] = s.useState(!1), [S, _] = s.useState(!1), k = wp(t, (e => c(e))), j = (0, El.jH)(o);
          return (0, a.jsx)(jp, {
            scope: r,
            type: n,
            dir: j,
            scrollHideDelay: i,
            scrollArea: u,
            viewport: d,
            onViewportChange: f,
            content: p,
            onContentChange: h,
            scrollbarX: v,
            onScrollbarXChange: m,
            scrollbarXEnabled: x,
            onScrollbarXEnabledChange: E,
            scrollbarY: y,
            onScrollbarYChange: g,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: _,
            onCornerWidthChange: w,
            onCornerHeightChange: P,
            children: (0, a.jsx)(bp.div, {
              dir: j,
              ...l,
              ref: k,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": C + "px",
                ...e.style
              }
            })
          })
        }));
      Tp.displayName = Sp;
      var Np = "ScrollAreaViewport",
        Lp = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...i
          } = e, l = Op(Np, r), u = wp(t, s.useRef(null), l.onViewportChange);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, a.jsx)(bp.div, {
              "data-radix-scroll-area-viewport": "",
              ...i,
              ref: u,
              style: {
                overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, a.jsx)("div", {
                ref: l.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }));
      Lp.displayName = Np;
      var Mp = "ScrollAreaScrollbar",
        Dp = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Mp, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: i,
            onScrollbarYEnabledChange: l
          } = o, u = "horizontal" === e.orientation;
          return s.useEffect((() => (u ? i(!0) : l(!0), () => {
            u ? i(!1) : l(!1)
          })), [u, i, l]), "hover" === o.type ? (0, a.jsx)(Rp, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, a.jsx)(Ip, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, a.jsx)(Ap, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, a.jsx)(zp, {
            ...n,
            ref: t
          }) : null
        }));
      Dp.displayName = Mp;
      var Rp = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Mp, e.__scopeScrollArea), [i, l] = s.useState(!1);
          return s.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), l(!0)
                },
                n = () => {
                  t = window.setTimeout((() => l(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, a.jsx)(Cp, {
            present: r || i,
            children: (0, a.jsx)(Ap, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        Ip = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Op(Mp, e.__scopeScrollArea), i = "horizontal" === e.orientation, l = rh((() => c("SCROLL_END")), 100), [u, c] = ("hidden", d = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, s.useReducer(((e, t) => d[e][t] ?? e), "hidden"));
          var d;
          return s.useEffect((() => {
            if ("idle" === u) {
              const e = window.setTimeout((() => c("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [u, o.scrollHideDelay, c]), s.useEffect((() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (c("SCROLL"), l()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [o.viewport, i, c, l]), (0, a.jsx)(Cp, {
            present: r || "hidden" !== u,
            children: (0, a.jsx)(zp, {
              "data-state": "hidden" === u ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: Ep(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: Ep(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        Ap = s.forwardRef(((e, t) => {
          const r = Op(Mp, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, l] = s.useState(!1),
            u = "horizontal" === e.orientation,
            c = rh((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                l(u ? e : t)
              }
            }), 10);
          return nh(r.viewport, c), nh(r.content, c), (0, a.jsx)(Cp, {
            present: n || i,
            children: (0, a.jsx)(zp, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        zp = s.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Op(Mp, e.__scopeScrollArea), i = s.useRef(null), l = s.useRef(0), [u, c] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Yp(u.viewport, u.content), f = {
            ...n,
            sizes: u,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => i.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function p(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = Zp(r),
                a = t || o / 2,
                i = o - a,
                s = r.scrollbar.paddingStart + a,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - i,
                u = r.content - r.viewport;
              return Jp([s, l], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
            }(e, l.current, u, t)
          }
          return "horizontal" === r ? (0, a.jsx)(Vp, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Qp(o.viewport.scrollLeft, u, o.dir);
                i.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === r ? (0, a.jsx)(Fp, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const e = Qp(o.viewport.scrollTop, u);
                i.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = p(e))
            }
          }) : null
        })),
        Vp = s.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Op(Mp, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = wp(t, c, i.onScrollbarXChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, a.jsx)(Bp, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Zp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), eh(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && i.viewport && l && n({
                content: i.viewport.scrollWidth,
                viewport: i.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: Xp(l.paddingLeft),
                  paddingEnd: Xp(l.paddingRight)
                }
              })
            }
          })
        })),
        Fp = s.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, i = Op(Mp, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = wp(t, c, i.onScrollbarYChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, a.jsx)(Bp, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === i.dir ? 0 : void 0,
              left: "rtl" === i.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Zp(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (i.viewport) {
                const n = i.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), eh(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && i.viewport && l && n({
                content: i.viewport.scrollHeight,
                viewport: i.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: Xp(l.paddingTop),
                  paddingEnd: Xp(l.paddingBottom)
                }
              })
            }
          })
        })),
        [qp, $p] = _p(Mp),
        Bp = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: i,
            onThumbPointerUp: l,
            onThumbPointerDown: u,
            onThumbPositionChange: c,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: p,
            ...h
          } = e, v = Op(Mp, r), [m, y] = s.useState(null), g = wp(t, (e => y(e))), b = s.useRef(null), w = s.useRef(""), C = v.viewport, P = n.content - n.viewport, x = (0, cc.c)(f), E = (0, cc.c)(c), S = rh(p, 10);

          function _(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                r = e.clientY - b.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return s.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = m?.contains(t);
              r && x(e, P)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [C, m, P, x]), s.useEffect(E, [n, E]), nh(m, S), nh(v.content, S), (0, a.jsx)(qp, {
            scope: r,
            scrollbar: m,
            hasThumb: o,
            onThumbChange: (0, cc.c)(i),
            onThumbPointerUp: (0, cc.c)(l),
            onThumbPositionChange: E,
            onThumbPointerDown: (0, cc.c)(u),
            children: (0, a.jsx)(bp.div, {
              ...h,
              ref: g,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: Ep(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = m.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), _(e))
              })),
              onPointerMove: Ep(e.onPointerMove, _),
              onPointerUp: Ep(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Kp = "ScrollAreaThumb",
        Hp = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = $p(Kp, e.__scopeScrollArea);
          return (0, a.jsx)(Cp, {
            present: r || o.hasThumb,
            children: (0, a.jsx)(Wp, {
              ref: t,
              ...n
            })
          })
        })),
        Wp = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, i = Op(Kp, r), l = $p(Kp, r), {
            onThumbPositionChange: u
          } = l, c = wp(t, (e => l.onThumbChange(e))), d = s.useRef(), f = rh((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = i.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = th(e, u);
                  d.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [i.viewport, f, u]), (0, a.jsx)(bp.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: Ep(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              l.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: Ep(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      Hp.displayName = Kp;
      var Up = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const r = Op(Up, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, a.jsx)(Gp, {
          ...e,
          ref: t
        }) : null
      })).displayName = Up;
      var Gp = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Op(Up, r), [i, l] = s.useState(0), [u, c] = s.useState(0), d = Boolean(i && u);
        return nh(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), c(e)
        })), nh(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, a.jsx)(bp.div, {
          ...n,
          ref: t,
          style: {
            width: i,
            height: u,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function Xp(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Yp(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function Zp(e) {
        const t = Yp(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function Qp(e, t, r = "ltr") {
        const n = Zp(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - o,
          i = t.content - t.viewport,
          s = a - n,
          l = gl(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
        return Jp([0, i], [0, s])(l)
      }

      function Jp(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function eh(e, t) {
        return e > 0 && e < t
      }
      var th = (e, t = (() => {})) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            i = r.left !== a.left,
            s = r.top !== a.top;
          (i || s) && t(), r = a, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function rh(e, t) {
        const r = (0, cc.c)(e),
          n = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(n.current)), []), s.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function nh(e, t) {
        const r = (0, cc.c)(t);
        (0, kc.N)((() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            }));
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }), [e, r])
      }
      var oh = Tp,
        ah = Lp,
        ih = Dp,
        sh = Hp,
        lh = "foundry_uaq1gwn";
      const uh = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: r,
          placeholder: n,
          description: o,
          testId: i,
          hideLabel: l,
          hideDescription: u = !1,
          hideRequiredAsterisk: d,
          hideDividers: f,
          errorMessage: p,
          value: h,
          defaultValue: v,
          onValueChange: m,
          open: y,
          defaultOpen: g,
          onOpenChange: b,
          isRequired: w,
          isDisabled: C,
          isReadOnly: P,
          className: x,
          ariaLabelledBy: E
        }, S) => {
          const _ = ht((0, s.useRef)(null), S),
            k = (0, s.useId)(),
            j = (0, s.useId)(),
            [O = !1, T] = mt({
              prop: y,
              defaultProp: g,
              onChange: b
            });
          return (0, a.jsxs)("div", {
            className: (0, Se.$)("foundry_uaq1gw0", x),
            children: [(t && !l || r) && (0, a.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, a.jsx)(c, {
                enabled: !!l,
                children: (0, a.jsx)(M, {
                  className: (0, Se.$)("foundry_uaq1gw2", C && lh),
                  asChild: !0,
                  children: (0, a.jsxs)("label", {
                    id: k,
                    children: [t, w && !d && (0, a.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, a.jsx)(F, {
                className: (0, Se.$)("foundry_uaq1gw3", C && lh),
                children: r
              })]
            }), (0, a.jsxs)(cp, {
              required: w,
              disabled: C,
              open: O,
              onOpenChange: () => T(!P && !O),
              value: h,
              defaultValue: v,
              onValueChange: m,
              children: [(0, a.jsxs)(dp, {
                className: (0, Se.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!p && "foundry_uaq1gw7", P && "foundry_uaq1gw6"),
                ref: _,
                "data-testid": i,
                "aria-activedescendant": h,
                "aria-labelledby": E || k,
                "aria-controls": j,
                children: [(0, a.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, a.jsx)(fp, {
                    placeholder: n,
                    "aria-label": h
                  })
                }), (0, a.jsx)(pp, {
                  asChild: !0,
                  className: (0, Se.$)("foundry_uaq1gw9", (P || C) && "foundry_uaq1gwa"),
                  children: O ? (0, a.jsx)(ee.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, a.jsx)(ee.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, a.jsx)(hp, {
                children: (0, a.jsx)(vp, {
                  id: j,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, a.jsxs)(oh, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, a.jsx)(mp, {
                      className: (0, Se.$)("foundry_uaq1gwc", f && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, a.jsx)(ah, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, a.jsx)(ih, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, a.jsx)(sh, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, a.jsx)(c, {
              enabled: !!p || u || 0 === o.length,
              children: (0, a.jsx)(M, {
                className: (0, Se.$)("foundry_uaq1gwf", C && lh),
                children: o
              })
            }), p && (0, a.jsxs)(M, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, a.jsx)(ee.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), p]
            })]
          })
        })),
        ch = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: n,
          iconPosition: o,
          isDisabled: i,
          testId: l
        }, u) => {
          const c = ht((0, s.useRef)(null), u),
            d = r && te[r];
          return (0, a.jsxs)(yp, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: i,
            "data-testid": l,
            children: [d && "left" === o && (0, a.jsx)(d, {
              label: n || "",
              size: "LG"
            }), (0, a.jsx)(gp, {
              children: e
            }), d && "right" === o && (0, a.jsx)(d, {
              label: n || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var dh;
      dh = {
        "ar-AE": {
          breadcrumbs: "عناصر الواجهة"
        },
        "bg-BG": {
          breadcrumbs: "Трохи хляб"
        },
        "cs-CZ": {
          breadcrumbs: "Popis cesty"
        },
        "da-DK": {
          breadcrumbs: "Brødkrummer"
        },
        "de-DE": {
          breadcrumbs: "Breadcrumbs"
        },
        "el-GR": {
          breadcrumbs: "Πλοηγήσεις breadcrumb"
        },
        "en-US": {
          breadcrumbs: "Breadcrumbs"
        },
        "es-ES": {
          breadcrumbs: "Migas de pan"
        },
        "et-EE": {
          breadcrumbs: "Lingiread"
        },
        "fi-FI": {
          breadcrumbs: "Navigointilinkit"
        },
        "fr-FR": {
          breadcrumbs: "Chemin de navigation"
        },
        "he-IL": {
          breadcrumbs: "שבילי ניווט"
        },
        "hr-HR": {
          breadcrumbs: "Navigacijski putovi"
        },
        "hu-HU": {
          breadcrumbs: "Morzsamenü"
        },
        "it-IT": {
          breadcrumbs: "Breadcrumb"
        },
        "ja-JP": {
          breadcrumbs: "パンくずリスト"
        },
        "ko-KR": {
          breadcrumbs: "탐색 표시"
        },
        "lt-LT": {
          breadcrumbs: "Naršymo kelias"
        },
        "lv-LV": {
          breadcrumbs: "Atpakaļceļi"
        },
        "nb-NO": {
          breadcrumbs: "Navigasjonsstier"
        },
        "nl-NL": {
          breadcrumbs: "Broodkruimels"
        },
        "pl-PL": {
          breadcrumbs: "Struktura nawigacyjna"
        },
        "pt-BR": {
          breadcrumbs: "Caminho detalhado"
        },
        "pt-PT": {
          breadcrumbs: "Categorias"
        },
        "ro-RO": {
          breadcrumbs: "Miez de pâine"
        },
        "ru-RU": {
          breadcrumbs: "Навигация"
        },
        "sk-SK": {
          breadcrumbs: "Navigačné prvky Breadcrumbs"
        },
        "sl-SI": {
          breadcrumbs: "Drobtine"
        },
        "sr-SP": {
          breadcrumbs: "Putanje navigacije"
        },
        "sv-SE": {
          breadcrumbs: "Sökvägar"
        },
        "tr-TR": {
          breadcrumbs: "İçerik haritaları"
        },
        "uk-UA": {
          breadcrumbs: "Навігаційна стежка"
        },
        "zh-CN": {
          breadcrumbs: "导航栏"
        },
        "zh-TW": {
          breadcrumbs: "導覽列"
        }
      };
      const fh = new Set(["id"]),
        ph = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        hh = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        vh = /^(data-.*)$/;

      function mh(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: o
        } = t, a = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (fh.has(t) || r && ph.has(t) || n && hh.has(t) || (null == o ? void 0 : o.has(t)) || vh.test(t)) && (a[t] = e[t]);
        return a
      }
      const yh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        gh = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function bh(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return yh.has(t.script)
        }
        let t = e.split("-")[0];
        return gh.has(t)
      }
      const wh = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Ch = s.createContext(wh),
        Ph = s.createContext(!1);
      let xh = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Eh = new WeakMap;
      const Sh = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [r] = (0, s.useState)(Oh());
        return e || `${r?"react-aria":`react-aria${wh.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(Ch);
        t !== wh || xh || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(e = !1) {
            let t = (0, s.useContext)(Ch),
              r = (0, s.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Eh.get(e);
                null == r ? Eh.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Eh.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function _h() {
        return !1
      }

      function kh() {
        return !0
      }

      function jh(e) {
        return () => {}
      }

      function Oh() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(jh, _h, kh) : (0, s.useContext)(Ph)
      }
      const Th = Symbol.for("react-aria.i18n.locale");

      function Nh() {
        let e = "undefined" != typeof window && window[Th] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: bh(e) ? "rtl" : "ltr"
        }
      }
      let Lh = Nh(),
        Mh = new Set;

      function Dh() {
        Lh = Nh();
        for (let e of Mh) e(Lh)
      }
      const Rh = s.createContext(null);

      function Ih() {
        let e = function() {
          let e = Oh(),
            [t, r] = (0, s.useState)(Lh);
          return (0, s.useEffect)((() => (0 === Mh.size && window.addEventListener("languagechange", Dh), Mh.add(r), () => {
            Mh.delete(r), 0 === Mh.size && window.removeEventListener("languagechange", Dh)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(Rh) || e
      }
      const Ah = Symbol.for("react-aria.i18n.locale"),
        zh = Symbol.for("react-aria.i18n.strings");
      let Vh;
      class Fh {
        getStringForLocale(e, t) {
          let r = this.getStringsForLocale(t)[e];
          if (!r) throw new Error(`Could not find intl message ${e} in ${t} locale`);
          return r
        }
        getStringsForLocale(e) {
          let t = this.strings[e];
          return t || (t = function(e, t, r = "en-US") {
            if (t[e]) return t[e];
            let n = function(e) {
              return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
            }(e);
            if (t[n]) return t[n];
            for (let e in t)
              if (e.startsWith(n + "-")) return t[e];
            return t[r]
          }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
          if ("undefined" == typeof window) return null;
          let t = window[Ah];
          if (void 0 === Vh) {
            let e = window[zh];
            if (!e) return null;
            Vh = {};
            for (let r in e) Vh[r] = new Fh({
              [t]: e[r]
            }, t)
          }
          let r = null == Vh ? void 0 : Vh[e];
          if (!r) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return r
        }
        constructor(e, t = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = t
        }
      }
      const qh = new Map,
        $h = new Map;
      class Bh {
        format(e, t) {
          let r = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof r ? r(t, this) : r
        }
        plural(e, t, r = "cardinal") {
          let n = t["=" + e];
          if (n) return "function" == typeof n ? n() : n;
          let o = this.locale + ":" + r,
            a = qh.get(o);
          return a || (a = new Intl.PluralRules(this.locale, {
            type: r
          }), qh.set(o, a)), n = t[a.select(e)] || t.other, "function" == typeof n ? n() : n
        }
        number(e) {
          let t = $h.get(this.locale);
          return t || (t = new Intl.NumberFormat(this.locale), $h.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
          let r = e[t] || e.other;
          return "function" == typeof r ? r() : r
        }
        constructor(e, t) {
          this.locale = e, this.strings = t
        }
      }
      const Kh = new WeakMap;

      function Hh(e, t) {
        let {
          locale: r
        } = Ih(), n = function(e, t) {
          return t && Fh.getGlobalDictionaryForPackage(t) || function(e) {
            let t = Kh.get(e);
            return t || (t = new Fh(e), Kh.set(e, t)), t
          }(e)
        }(e, t);
        return (0, s.useMemo)((() => new Bh(r, n)), [r, n])
      }

      function Wh(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const Uh = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Gh(e) {
        const t = (0, s.useRef)(null);
        return Uh((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      let Xh = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Yh = new Map;

      function Zh(e) {
        let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = Sh(t), a = (0, s.useCallback)((e => {
          n.current = e
        }), []);
        return Xh && (Yh.has(o) && !Yh.get(o).includes(a) ? Yh.set(o, [...Yh.get(o), a]) : Yh.set(o, [a])), Uh((() => {
          let e = o;
          return () => {
            Yh.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = n.current;
          e && (n.current = null, r(e))
        })), o
      }

      function Qh(e, t) {
        if (e === t) return e;
        let r = Yh.get(e);
        if (r) return r.forEach((e => e(t))), t;
        let n = Yh.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function Jh(e = []) {
        let t = Zh(),
          [r, n] = function(e) {
            let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = Gh((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            Uh((() => {
              n.current && o()
            }));
            let a = Gh((e => {
              n.current = e(t), o()
            }));
            return [t, a]
          }(t),
          o = (0, s.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return Uh(o, [t, o, ...e]), r
      }

      function ev(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Wh(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Qh(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, Se.A)(r, o)
          }
        }
        return t
      }

      function tv(e) {
        if (function() {
            if (null == rv) {
              rv = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return rv = !0, !0
                  }
                })
              } catch (e) {}
            }
            return rv
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
            }(t)
        }
      }
      let rv = null;

      function nv(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function ov(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function av(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const iv = av((function() {
          return ov(/^Mac/i)
        })),
        sv = av((function() {
          return ov(/^iPhone/i)
        })),
        lv = av((function() {
          return ov(/^iPad/i) || iv() && navigator.maxTouchPoints > 1
        })),
        uv = av((function() {
          return sv() || lv()
        })),
        cv = (av((function() {
          return iv() || uv()
        })), av((function() {
          return nv(/AppleWebKit/i) && !dv()
        }))),
        dv = av((function() {
          return nv(/Chrome/i)
        })),
        fv = av((function() {
          return nv(/Android/i)
        })),
        pv = av((function() {
          return nv(/Firefox/i)
        })),
        hv = (0, s.createContext)({
          isNative: !0,
          open: function(e, t) {
            ! function(e, t) {
              if (e instanceof HTMLAnchorElement) t(e);
              else if (e.hasAttribute("data-href")) {
                let r = document.createElement("a");
                r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
              }
            }(e, (e => mv(e, t)))
          },
          useHref: e => e
        });

      function vv() {
        return (0, s.useContext)(hv)
      }

      function mv(e, t, r = !0) {
        var n, o;
        let {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        } = t;
        pv() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (iv() ? a = !0 : i = !0);
        let u = cv() && iv() && !lv() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: i,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        mv.isOpening = r, tv(e), e.dispatchEvent(u), mv.isOpening = !1
      }

      function yv(e) {
        var t;
        const r = vv().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      mv.isOpening = !1;
      const gv = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        bv = e => e && "window" in e && e.window === e ? e : gv(e).defaultView || window;
      let wv = new Map,
        Cv = new Set;

      function Pv() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = wv.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), wv.delete(r.target)), 0 === wv.size)) {
            for (let e of Cv) e();
            Cv.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = wv.get(r.target);
          n || (n = new Set, wv.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function xv(e) {
        requestAnimationFrame((() => {
          0 === wv.size ? e() : Cv.add(e)
        }))
      }

      function Ev(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (fv() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Pv() : document.addEventListener("DOMContentLoaded", Pv));
      let Sv = null,
        _v = new Set,
        kv = new Map,
        jv = !1,
        Ov = !1;

      function Tv(e, t) {
        for (let r of _v) r(e, t)
      }

      function Nv(e) {
        jv = !0,
          function(e) {
            return !(e.metaKey || !iv() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Sv = "keyboard", Tv("keyboard", e))
      }

      function Lv(e) {
        Sv = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (jv = !0, Tv("pointer", e))
      }

      function Mv(e) {
        Ev(e) && (jv = !0, Sv = "virtual")
      }

      function Dv(e) {
        e.target !== window && e.target !== document && (jv || Ov || (Sv = "virtual", Tv("virtual", e)), jv = !1, Ov = !1)
      }

      function Rv() {
        jv = !1, Ov = !0
      }

      function Iv(e) {
        if ("undefined" == typeof window || kv.get(bv(e))) return;
        const t = bv(e),
          r = gv(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          jv = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Nv, !0), r.addEventListener("keyup", Nv, !0), r.addEventListener("click", Mv, !0), t.addEventListener("focus", Dv, !0), t.addEventListener("blur", Rv, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", Lv, !0), r.addEventListener("pointermove", Lv, !0), r.addEventListener("pointerup", Lv, !0)) : (r.addEventListener("mousedown", Lv, !0), r.addEventListener("mousemove", Lv, !0), r.addEventListener("mouseup", Lv, !0)), t.addEventListener("beforeunload", (() => {
          Av(e)
        }), {
          once: !0
        }), kv.set(t, {
          focus: n
        })
      }
      const Av = (e, t) => {
        const r = bv(e),
          n = gv(e);
        t && n.removeEventListener("DOMContentLoaded", t), kv.has(r) && (r.HTMLElement.prototype.focus = kv.get(r).focus, n.removeEventListener("keydown", Nv, !0), n.removeEventListener("keyup", Nv, !0), n.removeEventListener("click", Mv, !0), r.removeEventListener("focus", Dv, !0), r.removeEventListener("blur", Rv, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", Lv, !0), n.removeEventListener("pointermove", Lv, !0), n.removeEventListener("pointerup", Lv, !0)) : (n.removeEventListener("mousedown", Lv, !0), n.removeEventListener("mousemove", Lv, !0), n.removeEventListener("mouseup", Lv, !0)), kv.delete(r))
      };

      function zv(e, t) {
        Uh((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = gv(e);
        let r;
        "loading" !== t.readyState ? Iv(e) : (r = () => {
          Iv(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Vv {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
          this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
          return !1
        }
        persist() {}
        constructor(e, t) {
          this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
      }

      function Fv(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        Uh((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let r = Gh((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                t.current.isFocused = !1, n.disabled && r(new Vv("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && n.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let r = n === document.activeElement ? null : document.activeElement;
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            })), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [r])
      }

      function qv(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(n), t && r.stopPropagation()
        }
      }
      let $v = s.createContext(null);

      function Bv(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const a = (0, s.useCallback)((e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }), [n, o]),
            i = Fv(a),
            l = (0, s.useCallback)((e => {
              const t = gv(e.target);
              e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), o && o(!0), i(e))
            }), [o, r, i]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? l : void 0,
              onBlur: t || !n && !o ? void 0 : a
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: qv(e.onKeyDown),
              onKeyUp: qv(e.onKeyUp)
            }
          }
        }(e), o = ev(r, n), a = function(e) {
          let t = (0, s.useContext)($v) || {};
          zv(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), i = e.isDisabled ? {} : a, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = gv(e);
            if ("virtual" === Sv) {
              let r = t.activeElement;
              xv((() => {
                t.activeElement === r && e.isConnected && tv(e)
              }))
            } else tv(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: ev({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, i)
        }
      }
      let Kv = "default",
        Hv = "",
        Wv = new WeakMap;

      function Uv(e) {
        if (uv()) {
          if ("default" === Kv) {
            const t = gv(e);
            Hv = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          Kv = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Wv.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Gv(e) {
        if (uv()) {
          if ("disabled" !== Kv) return;
          Kv = "restoring", setTimeout((() => {
            xv((() => {
              if ("restoring" === Kv) {
                const t = gv(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Hv || ""), Hv = "", Kv = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Wv.has(e)) {
          let t = Wv.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Wv.delete(e)
        }
      }
      const Xv = s.createContext({
        register: () => {}
      });
      Xv.displayName = "PressResponderContext";
      var Yv = new WeakMap;
      class Zv {
        continuePropagation() {
          xr(this, Yv, !1)
        }
        get shouldStopPropagation() {
          return Cr(this, Yv)
        }
        constructor(e, t, r, n) {
          var o;
          Pr(this, Yv, {
            writable: !0,
            value: void 0
          }), xr(this, Yv, !0);
          let a = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != r.clientX && null != r.clientY && (l = r.clientX, c = r.clientY), i && (null != l && null != c ? (s = l - i.left, u = c - i.top) : (s = i.width / 2, u = i.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = s, this.y = u
        }
      }
      const Qv = Symbol("linkClicked");

      function Jv(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: a,
          isDisabled: i,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...p
        } = function(e) {
          let t = (0, s.useContext)(Xv);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = ev(n, e), r()
          }
          return zv(t, e.ref), e
        }(e), [h, v] = (0, s.useState)(!1), m = (0, s.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          ignoreClickAfterPress: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null
        }), {
          addGlobalListener: y,
          removeAllGlobalListeners: g
        } = function() {
          let e = (0, s.useRef)(new Map),
            t = (0, s.useCallback)(((t, r, n, o) => {
              let a = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: a,
                options: o
              }), t.addEventListener(r, n, o)
            }), []),
            r = (0, s.useCallback)(((t, r, n, o) => {
              var a;
              let i = (null === (a = e.current.get(n)) || void 0 === a ? void 0 : a.fn) || n;
              t.removeEventListener(r, i, o), e.current.delete(n)
            }), []),
            n = (0, s.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, s.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), b = Gh(((e, t) => {
          let o = m.current;
          if (i || o.didFirePressStart) return !1;
          let a = !0;
          if (o.isTriggeringEvent = !0, n) {
            let r = new Zv("pressstart", t, e);
            n(r), a = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, v(!0), a
        })), w = Gh(((e, n, a = !0) => {
          let s = m.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Zv("pressend", n, e);
            o(t), l = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && a && !i) {
            let r = new Zv("press", n, e);
            t(r), l && (l = r.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), C = Gh(((e, t) => {
          let r = m.current;
          if (i) return !1;
          if (a) {
            r.isTriggeringEvent = !0;
            let n = new Zv("pressup", t, e);
            return a(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), P = Gh((e => {
          let t = m.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(om(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, g(), d || Gv(t.target))
        })), x = Gh((e => {
          c && P(e)
        })), E = (0, s.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (tm(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var n;
                  lm(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let n = t.currentTarget,
                      a = t => {
                        tm(t, n) && !t.repeat && n.contains(t.target) && e.target && C(om(e.target, t), "keyboard")
                      };
                    y(gv(t.currentTarget), "keyup", Wh(a, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && iv() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !mv.isOpening) {
                  let r = !0;
                  if (i && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || Ev(t.nativeEvent))) {
                    i || u || tv(t.currentTarget);
                    let e = b(t, "virtual"),
                      n = C(t, "virtual"),
                      o = w(t, "virtual");
                    r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && tm(t, e.target)) {
                var n;
                lm(t.target, t.key) && t.preventDefault();
                let r = t.target;
                w(om(e.target, t), "keyboard", e.target.contains(r)), g(), "Enter" !== t.key && em(e.target) && e.target.contains(r) && !t[Qv] && (t[Qv] = !0, mv(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (o = t.nativeEvent, !fv() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              im(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, i || u || tv(t.currentTarget), d || Uv(e.target), s = b(t, e.pointerType), y(gv(t.currentTarget), "pointermove", r, !1), y(gv(t.currentTarget), "pointerup", n, !1), y(gv(t.currentTarget), "pointercancel", a, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (im(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && am(t, t.currentTarget) && C(t, e.pointerType || t.pointerType)
            };
            let r = t => {
                t.pointerId === e.activePointerId && (e.target && am(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(om(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(om(e.target, t), e.pointerType, !1), x(t)))
              },
              n = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (am(t, e.target) && null != e.pointerType ? w(om(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(om(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, g(), d || Gv(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && y(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                sm(e.currentTarget) && e.preventDefault()
              },
              a = e => {
                P(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && P(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (im(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = Ev(t.nativeEvent) ? "virtual" : "mouse", i || u || tv(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), y(gv(t.currentTarget), "mouseup", r, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, r = b(t, e.pointerType)), r && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), x(t)), r && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || C(t, e.pointerType || "mouse"))
            };
            let r = t => {
              0 === t.button && (e.isPressed = !1, g(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && am(t, e.target) && null != e.pointerType ? w(om(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(om(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", i || u || tv(t.currentTarget), d || Uv(e.target), b(nm(e.target, t), e.pointerType) && t.stopPropagation(), y(bv(t.currentTarget), "scroll", n, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = rm(t.nativeEvent, e.activePointerId),
                n = !0;
              r && am(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, n = b(nm(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, n = w(nm(e.target, t), e.pointerType, !1), x(nm(e.target, t))), n && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = rm(t.nativeEvent, e.activePointerId),
                n = !0;
              r && am(r, t.currentTarget) && null != e.pointerType ? (C(nm(e.target, t), e.pointerType), n = w(nm(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (n = w(nm(e.target, t), e.pointerType, !1)), n && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && Gv(e.target), g()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && P(nm(e.target, t)))
            };
            let n = t => {
              e.isPressed && t.target.contains(e.target) && P({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && P(e)
            }
          }
          return t
        }), [y, i, u, g, d, P, x, w, b, C]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || Gv(null !== (e = m.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || h,
          pressProps: ev(p, E)
        }
      }

      function em(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function tm(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof bv(o).HTMLInputElement && !cm(o, r) || o instanceof bv(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && em(o)) && "Enter" !== r)
      }

      function rm(e, t) {
        const r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          const n = r[e];
          if (n.identifier === t) return n
        }
        return null
      }

      function nm(e, t) {
        let r = 0,
          n = 0;
        return t.targetTouches && 1 === t.targetTouches.length && (r = t.targetTouches[0].clientX, n = t.targetTouches[0].clientY), {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function om(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function am(e, t) {
        let r = t.getBoundingClientRect(),
          n = function(e) {
            let t = 0,
              r = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? r = e.height / 2 : void 0 !== e.radiusY && (r = e.radiusY), {
              top: e.clientY - r,
              right: e.clientX + t,
              bottom: e.clientY + r,
              left: e.clientX - t
            }
          }(e);
        return a = n, !((o = r).left > a.right || a.left > o.right || o.top > a.bottom || a.top > o.bottom);
        var o, a
      }

      function im(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function sm(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : em(e)))
      }

      function lm(e, t) {
        return e instanceof HTMLInputElement ? !cm(e, t) : sm(e)
      }
      const um = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function cm(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : um.has(e.type)
      }

      function dm(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          onClick: i,
          isDisabled: s,
          ...l
        } = e, u = {};
        "a" !== r && (u = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = Bv(e, t), {
          pressProps: d,
          isPressed: f
        } = Jv({
          onPress: n,
          onPressStart: o,
          onPressEnd: a,
          isDisabled: s,
          ref: t
        }), p = mh(l, {
          labelable: !0
        }), h = ev(c, d), v = vv();
        return {
          isPressed: f,
          linkProps: ev(p, yv(e), {
            ...h,
            ...u,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), i && (i(t), console.warn("onClick is deprecated, please use onPress")), !v.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let r = e.getAttribute("target");
                return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), v.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
      var fm = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        pm = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        hm = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        vm = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        mm = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      (0, s.forwardRef)((({
        breadcrumbs: e,
        size: t = "MD",
        isLandmark: r = !0,
        hideRootPage: n,
        showCurrentPage: o,
        testId: i,
        ...l
      }, u) => {
        if (0 === e.length) return null;
        const c = ht((0, s.useRef)(null), u),
          d = (0, s.useRef)(null),
          {
            countWrappedElements: f
          } = {
            countWrappedElements: e => {
              if (!e.current) return;
              const {
                children: t
              } = e.current;
              let r = 0,
                n = 0;
              return Array.from(t).map(((e, t) => {
                const o = e.getBoundingClientRect().top,
                  a = e.getBoundingClientRect().height;
                return 0 === t && (r = o, n = a), o
              })).filter((e => e >= r + n)).length
            }
          },
          p = e[0],
          h = e[e.length - 1],
          v = e.slice(1, e.length - 1),
          [m, y] = (0, s.useState)(v),
          [g, b] = (0, s.useState)([]),
          w = (0, s.useCallback)((() => {
            const e = f(d);
            y(v.slice(e, v.length)), b(v.slice(0, e))
          }), [d]);
        (0, s.useEffect)((() => {
          const e = new ResizeObserver(w);
          return d.current && e.observe(d.current), () => {
            d.current && e.unobserve(d.current)
          }
        }), [d.current]);
        const C = (0, s.useMemo)((() => {
            const e = v.slice().reverse();
            return (0, a.jsxs)("ol", {
              className: fm[t],
              ref: d,
              "aria-hidden": "true",
              children: [!n && p && (0, a.jsx)(ym, {
                href: p.url,
                size: t,
                icon: p.icon,
                iconLabel: p.iconLabel,
                iconPosition: p.iconPosition,
                children: p.label
              }, p.label), g.length > 0 && (0, a.jsx)("li", {
                className: hm[t],
                children: (0, a.jsx)("button", {
                  className: vm,
                  children: "..."
                })
              }), o && h && (0, a.jsx)(ym, {
                href: h.url,
                size: t,
                icon: h.icon,
                iconLabel: h.iconLabel,
                iconPosition: h.iconPosition,
                isCurrent: !0,
                children: h.label
              }, h.label), e.map((e => (0, a.jsx)(ym, {
                href: e.url,
                size: t,
                icon: e.icon,
                iconLabel: e.iconLabel,
                iconPosition: e.iconPosition,
                children: e.label
              }, e.label)))]
            })
          }), [e, g]),
          {
            navProps: P
          } = function(e) {
            let {
              "aria-label": t,
              ...r
            } = e, n = Hh((o = dh) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
            var o;
            return {
              navProps: {
                ...mh(r, {
                  labelable: !0
                }),
                "aria-label": t || n.format("breadcrumbs")
              }
            }
          }(l),
          x = r ? "nav" : "div";
        return (0, a.jsxs)(x, {
          ...P,
          role: r ? "navigation" : null,
          className: "foundry_m1icrx0",
          children: [(0, a.jsxs)("ol", {
            className: mm[t],
            "data-testid": i,
            ref: c,
            children: [!n && p && (0, a.jsx)(ym, {
              href: p.url,
              size: t,
              icon: p.icon,
              iconLabel: p.iconLabel,
              iconPosition: p.iconPosition,
              children: p.label
            }, p.label), g.length > 0 && (0, a.jsx)("li", {
              className: hm[t],
              children: (0, a.jsx)(gm, {
                items: g
              })
            }), m.length > 0 && m.map(((e, r) => {
              const {
                label: n,
                url: o,
                icon: i,
                iconLabel: s,
                iconPosition: l
              } = e;
              return (0, a.jsx)(ym, {
                href: o,
                size: t,
                icon: i,
                iconLabel: s,
                iconPosition: l,
                children: n
              }, `${n.replace(/\s/g,"")}-${r}`)
            })), o && h && (0, a.jsx)(ym, {
              href: h.url,
              size: t,
              icon: h.icon,
              iconLabel: h.iconLabel,
              iconPosition: h.iconPosition,
              isCurrent: !0,
              children: h.label
            }, h.label)]
          }), C]
        })
      }));
      const ym = ({
          size: e,
          icon: t,
          iconLabel: r,
          iconPosition: n = "left",
          ...o
        }) => {
          const i = (0, s.useRef)(null),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: r,
                isDisabled: n,
                "aria-current": o,
                elementType: a = "a",
                ...i
              } = e, {
                linkProps: s
              } = dm({
                isDisabled: n || r,
                elementType: a,
                ...i
              }, t), l = {};
              return /^h[1-6]$/.test(a) || (l = s), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": n,
                  ...l
                }
              }
            }({
              ...o,
              elementType: "a"
            }, i),
            {
              isCurrent: u,
              children: c
            } = o,
            d = u ? "span" : "a",
            f = t && te[t];
          return (0, a.jsx)("li", {
            className: hm[e],
            children: (0, a.jsxs)(d, {
              ...l,
              ref: i,
              className: (0, Se.$)(pm[e], u && "foundry_m1icrxd"),
              children: [f && "left" === n && (0, a.jsx)(f, {
                label: r || "",
                size: "LG"
              }), c, f && "right" === n && (0, a.jsx)(f, {
                label: r || "",
                size: "LG"
              })]
            })
          })
        },
        gm = ({
          items: e
        }) => {
          const [t, r] = (0, s.useState)(!1);
          return (0, a.jsxs)(cp, {
            open: t,
            onOpenChange: () => r(!t),
            children: [(0, a.jsx)(dp, {
              className: vm,
              children: "..."
            }), (0, a.jsx)(hp, {
              children: (0, a.jsx)(vp, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, a.jsx)(mp, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, t) => (0, a.jsx)(yp, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, a.jsx)(gp, {
                      children: e.label
                    })
                  }, `${e.label}-${t}`)))
                })
              })
            })]
          })
        },
        bm = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        wm = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Cm = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Pm = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        xm = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Em = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Sm(e, t, r) {
        let [n, o] = (0, s.useState)(e || t), a = (0, s.useRef)(void 0 !== e), i = void 0 !== e;
        (0, s.useEffect)((() => {
          let e = a.current;
          e !== i && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${i?"controlled":"uncontrolled"}.`), a.current = i
        }), [i]);
        let l = i ? e : n,
          u = (0, s.useCallback)(((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(l, e) || r(e, ...t)), i || (l = e)
            };
            "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((r, ...o) => {
              let a = e(i ? l : r, ...o);
              return n(a, ...t), i ? r : a
            }))) : (i || o(e), n(e, ...t))
          }), [i, l, r]);
        return [l, u]
      }

      function _m(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = Sm(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: r,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function km(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Uh((() => {
          if ("native" === n && (null == r ? void 0 : r.current)) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: jm(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let a = Gh((() => {
            t.resetValidation()
          })),
          i = Gh((e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var i;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (o ? o() : null === (i = r.current) || void 0 === i || i.focus(), Sv = "keyboard", Tv("keyboard", null)), e.preventDefault()
          })),
          l = Gh((() => {
            t.commitValidation()
          }));
        (0, s.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", i), e.addEventListener("change", l), null == t || t.addEventListener("reset", a), () => {
            e.removeEventListener("invalid", i), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", a)
          }
        }), [r, i, l, a, n])
      }

      function jm(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
      const Om = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        Tm = {
          ...Om,
          customError: !0,
          valid: !1
        },
        Nm = {
          isInvalid: !1,
          validationDetails: Om,
          validationErrors: []
        },
        Lm = (0, s.createContext)({}),
        Mm = "__formValidationState" + Date.now();

      function Dm(e) {
        if (e[Mm]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          } = e[Mm];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: a,
            validate: i,
            validationBehavior: l = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let u = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: Tm
            } : null,
            c = (0, s.useMemo)((() => Im(function(e, t) {
              if ("function" == typeof e) {
                let r = e(t);
                if (r && "boolean" != typeof r) return Rm(r)
              }
              return []
            }(i, o))), [i, o]);
          (null == a ? void 0 : a.validationDetails.valid) && (a = null);
          let d = (0, s.useContext)(Lm),
            f = (0, s.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => Rm(d[e]))) : Rm(d[n]) : []), [d, n]),
            [p, h] = (0, s.useState)(d),
            [v, m] = (0, s.useState)(!1);
          d !== p && (h(d), m(!1));
          let y = (0, s.useMemo)((() => Im(v ? [] : f)), [v, f]),
            g = (0, s.useRef)(Nm),
            [b, w] = (0, s.useState)(Nm),
            C = (0, s.useRef)(Nm),
            [P, x] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!P) return;
            x(!1);
            let e = c || a || g.current;
            Am(e, C.current) || (C.current = e, w(e))
          })), {
            realtimeValidation: u || y || c || a || Nm,
            displayValidation: "native" === l ? u || y || b : u || y || c || a || b,
            updateValidation(e) {
              "aria" !== l || Am(b, e) ? g.current = e : w(e)
            },
            resetValidation() {
              let e = Nm;
              Am(e, C.current) || (C.current = e, w(e)), "native" === l && x(!1), m(!0)
            },
            commitValidation() {
              "native" === l && x(!0), m(!0)
            }
          }
        }(e)
      }

      function Rm(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Im(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: Tm
        } : null
      }

      function Am(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function zm(e, t, r) {
        let n = (0, s.useRef)(t),
          o = Gh((() => {
            r && r(n.current)
          }));
        (0, s.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }

      function Vm(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: a,
          name: i,
          children: s,
          "aria-label": l,
          "aria-labelledby": u,
          validationState: c = "valid",
          isInvalid: d
        } = e;
        null != s || null != l || null != u || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
          pressProps: f,
          isPressed: p
        } = Jv({
          isDisabled: n
        }), {
          pressProps: h,
          isPressed: v
        } = Jv({
          isDisabled: n || o,
          onPress() {
            t.toggle()
          }
        }), {
          focusableProps: m
        } = Bv(e, r), y = ev(f, m), g = mh(e, {
          labelable: !0
        });
        return zm(r, t.isSelected, t.setSelected), {
          labelProps: ev(h, {
            onClick: e => e.preventDefault()
          }),
          inputProps: ev(g, {
            "aria-invalid": d || "invalid" === c || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == a ? {} : {
              value: a
            },
            name: i,
            type: "checkbox",
            ...y
          }),
          isSelected: t.isSelected,
          isPressed: p || v,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: d || "invalid" === c
        }
      }

      function Fm(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function qm(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function $m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qm(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Fm(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qm(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Bm(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Km = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Hm = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $m($m({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Km(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Bm(e.variantClassNames, (e => Bm(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Wm = Hm({
          defaultClassName: "foundry_11gbdty6 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty7",
              LG: "foundry_11gbdty8",
              XL: "foundry_11gbdty9"
            },
            appearance: {
              primary: "foundry_11gbdtya",
              secondary: "foundry_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Um = Hm({
          defaultClassName: "foundry_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdty3",
              LG: "foundry_11gbdty4",
              XL: "foundry_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gm = Hm({
          defaultClassName: "foundry_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xm = Hm({
          defaultClassName: "foundry_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_11gbdtye",
              LG: "foundry_11gbdtyf",
              XL: "foundry_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        isChecked: e,
        defaultChecked: t,
        onCheckedChange: r,
        label: o,
        description: l,
        size: u = "MD",
        appearance: d = "primary",
        isIndeterminate: f,
        hideLabel: p,
        testId: h,
        errorMessage: v,
        className: m,
        ...y
      }, g) => {
        const b = (0, s.useRef)(null),
          w = ht(b, g),
          C = (0, s.useId)(),
          {
            setSelected: P,
            ...x
          } = _m({
            isSelected: e,
            defaultSelected: t,
            onChange: r,
            value: y.value
          }),
          {
            inputProps: E,
            isDisabled: S,
            isReadOnly: _,
            isInvalid: k,
            isSelected: j
          } = function(e, t, r) {
            let n = Dm({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: a,
                validationDetails: i
              } = n.displayValidation,
              {
                labelProps: l,
                inputProps: u,
                isSelected: c,
                isPressed: d,
                isDisabled: f,
                isReadOnly: p
              } = Vm({
                ...e,
                isInvalid: o
              }, t, r);
            km(e, n, r);
            let {
              isIndeterminate: h,
              isRequired: v,
              validationBehavior: m = "aria"
            } = e;
            return (0, s.useEffect)((() => {
              r.current && (r.current.indeterminate = !!h)
            })), {
              labelProps: l,
              inputProps: {
                ...u,
                checked: c,
                "aria-required": v && "aria" === m || void 0,
                required: v && "native" === m
              },
              isSelected: c,
              isPressed: d,
              isDisabled: f,
              isReadOnly: p,
              isInvalid: o,
              validationErrors: a,
              validationDetails: i
            }
          }({
            ...y,
            "aria-label": o,
            id: C
          }, {
            ...x,
            setSelected: y.isReadOnly ? () => !1 : P
          }, b),
          O = (0, i.v6)({
            ...E,
            "aria-checked": j,
            className: m
          }, {
            className: "foundry_11gbdty1"
          }),
          T = f ? n[`Dash${u}`] : n[`Check${u}`],
          N = k && !!v;
        return (0, a.jsxs)("label", {
          className: "foundry_11gbdty0",
          children: [(0, a.jsxs)("div", {
            className: Um({
              size: u
            }),
            children: [(0, a.jsx)(c, {
              children: (0, a.jsx)("input", {
                ...O,
                ref: w
              })
            }), (0, a.jsx)("div", {
              className: Wm({
                size: u,
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": f ? "mixed" : j ? "checked" : "unchecked",
              "data-disabled": S || _,
              "data-testid": h,
              children: (0, a.jsx)("span", {
                className: "foundry_11gbdtyc",
                children: (j || f) && (0, a.jsx)(T, {
                  "aria-hidden": "true"
                })
              })
            })]
          }), (0, a.jsx)(c, {
            enabled: !!p,
            children: (0, a.jsxs)("div", {
              className: Xm({
                size: u,
                isDisabled: S
              }),
              children: [(0, a.jsx)("p", {
                className: Gm({
                  size: u
                }),
                children: o
              }), l && !N && (0, a.jsx)("p", {
                className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: l
              }), N && (0, a.jsx)("p", {
                className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: v
              })]
            })
          })]
        })
      }));
      const Ym = new WeakMap;

      function Zm(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = bv(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: n
          } = e.style, o = "none" !== r && "hidden" !== n && "collapse" !== n;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: n
            } = t(e);
            o = "none" !== r && "hidden" !== n && "collapse" !== n
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || Zm(e.parentElement, e))
      }
      const Qm = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        Jm = Qm.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      Qm.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const ey = Qm.join(':not([hidden]):not([tabindex="-1"]),');

      function ty(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function ry(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? ey : Jm,
          o = gv(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(n) || !Zm(e) || r && !ty(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class ny {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new oy({
            scopeRef: e
          });
          n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && ty(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new ny;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new oy({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class oy {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }

      function ay(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = Zh(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function iy(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: a,
          fieldProps: i
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: a = "label"
          } = e;
          t = Zh(t);
          let i = Zh(),
            s = {};
          return r ? (n = n ? `${i} ${n}` : i, s = {
            id: i,
            htmlFor: "label" === a ? t : void 0
          }) : n || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: ay({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = Jh([Boolean(t), Boolean(r), n, o]), l = Jh([Boolean(t), Boolean(r), n, o]);
        return i = ev(i, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: a,
          fieldProps: i,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }

      function sy(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: a,
          orientation: i = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: u
        } = Ih(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: v,
          errorMessageProps: m
        } = iy({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), y = mh(e, {
          labelable: !0
        }), {
          focusWithinProps: g
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, a = (0, s.useRef)({
            isFocusWithin: !1
          }), i = (0, s.useCallback)((e => {
            a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, r && r(e), o && o(!1))
          }), [r, o, a]), l = Fv(i), u = (0, s.useCallback)((e => {
            a.current.isFocusWithin || document.activeElement !== e.target || (n && n(e), o && o(!0), a.current.isFocusWithin = !0, l(e))
          }), [n, o, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: u,
              onBlur: i
            }
          }
        }({
          onBlurWithin(r) {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = Zh(r);
        return Ym.set(t, {
          name: b,
          descriptionId: v.id,
          errorMessageId: m.id,
          validationBehavior: l
        }), {
          radioGroupProps: ev(y, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === u && "vertical" !== i ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === u && "vertical" !== i ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let n, o = ry(e.currentTarget, {
                from: e.target
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": n || void 0,
            "aria-required": o || void 0,
            "aria-disabled": a || void 0,
            "aria-orientation": i,
            ...h,
            ...g
          }),
          labelProps: p,
          descriptionProps: v,
          errorMessageProps: m,
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }
      new ny;
      let ly = Math.round(1e10 * Math.random()),
        uy = 0;

      function cy(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function dy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function fy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dy(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = cy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function py(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var hy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        vy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = fy(fy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) hy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return py(e.variantClassNames, (e => py(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        my = vy({
          defaultClassName: "foundry_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_njguqn2",
              LG: "foundry_njguqn3",
              XL: "foundry_njguqn4"
            },
            orientation: {
              horizontal: "foundry_njguqn5",
              vertical: "foundry_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const yy = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        gy = ((0, s.forwardRef)((({
          label: e,
          description: t,
          size: r = "MD",
          appearance: n = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: u,
          testId: d,
          className: f,
          errorMessage: p,
          orientation: h = "vertical",
          ...v
        }, m) => {
          const {
            children: y
          } = v, g = ht((0, s.useRef)(null), m), b = v.id || (0, s.useId)(), w = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${ly}-${++uy}`), [e.name]);
            var r;
            let [n, o] = Sm(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [a, i] = (0, s.useState)(null), l = Dm({
              ...e,
              value: n
            }), u = l.displayValidation.isInvalid;
            return {
              ...l,
              name: t,
              selectedValue: n,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
              },
              lastFocusedValue: a,
              setLastFocusedValue: i,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (u ? "invalid" : null),
              isInvalid: u
            }
          }(v), C = {
            state: w,
            size: r,
            appearance: n
          }, {
            radioGroupProps: P,
            labelProps: x,
            descriptionProps: E,
            isInvalid: S,
            errorMessageProps: _
          } = sy({
            ...v,
            id: b,
            label: e,
            isRequired: l,
            description: t,
            orientation: h
          }, w), k = (0, i.v6)({
            ...P,
            className: f
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": _?.id
          }), j = S && !!p;
          return (0, a.jsxs)("div", {
            ref: g,
            "data-testid": d,
            ...k,
            children: [(0, a.jsx)(c, {
              enabled: !!o,
              children: (0, a.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, a.jsx)(M, {
                  ...x,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, a.jsxs)("label", {
                    children: [e, l && !u && (0, a.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, a.jsx)(F, {
                  ...E,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: t
                })]
              })
            }), (0, a.jsx)("div", {
              className: my({
                size: r,
                orientation: h
              }),
              children: (0, a.jsx)(yy.Provider, {
                value: C,
                children: y
              })
            }), j && (0, a.jsxs)(M, {
              ..._,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, a.jsx)(ee.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), p]
            })]
          })
        })), ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        })),
        by = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        wy = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, a.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var Cy = vy({
          defaultClassName: "foundry_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
              LG: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              XL: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            },
            isDisabled: {
              true: "foundry_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Py = vy({
          defaultClassName: "foundry_1pfduet6 foundry_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_1pfduet7",
              secondary: "foundry_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xy = vy({
          defaultClassName: "foundry_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduet3",
              LG: "foundry_1pfduet4",
              XL: "foundry_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ey = vy({
          defaultClassName: "foundry_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_1pfduetb",
              LG: "foundry_1pfduetc",
              XL: "foundry_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Sy(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ky(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _y(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Sy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function jy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: r,
        testId: n,
        className: i,
        ...l
      }, u) => {
        const d = (0, s.useRef)(null),
          f = ht(d, u),
          p = l.id || (0, s.useId)(),
          h = (0, s.useContext)(yy),
          {
            state: v,
            appearance: m,
            size: y
          } = h,
          {
            inputProps: g
          } = function(e, t, r) {
            let {
              value: n,
              children: o,
              "aria-label": a,
              "aria-labelledby": i
            } = e;
            const s = e.isDisabled || t.isDisabled;
            null != o || null != a || null != i || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
            let l = t.selectedValue === n,
              {
                pressProps: u,
                isPressed: c
              } = Jv({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = Jv({
                isDisabled: s,
                onPress() {
                  t.setSelectedValue(n)
                }
              }),
              {
                focusableProps: p
              } = Bv(ev(e, {
                onFocus: () => t.setLastFocusedValue(n)
              }), r),
              h = ev(u, p),
              v = mh(e, {
                labelable: !0
              }),
              m = -1;
            null != t.selectedValue ? t.selectedValue === n && (m = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (m = 0), s && (m = void 0);
            let {
              name: y,
              descriptionId: g,
              errorMessageId: b,
              validationBehavior: w
            } = Ym.get(t);
            return zm(r, t.selectedValue, t.setSelectedValue), km({
              validationBehavior: w
            }, t, r), {
              labelProps: ev(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: ev(v, {
                ...h,
                type: "radio",
                name: y,
                tabIndex: m,
                disabled: s,
                required: t.isRequired && "native" === w,
                checked: l,
                value: n,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(n)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, g].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: c || f
            }
          }({
            ...l,
            "aria-label": e,
            id: p
          }, v, d),
          b = g.checked,
          w = g.disabled || v?.isReadOnly,
          C = o[`Dot${y}`];
        return (0, a.jsxs)("label", {
          className: (0, Se.$)("foundry_1pfduet0", i),
          children: [(0, a.jsxs)("div", {
            className: xy({
              size: y
            }),
            children: [(0, a.jsx)(c, {
              children: (0, a.jsx)("input", {
                ...g,
                ref: f,
                className: "foundry_1pfduet1"
              })
            }), (0, a.jsx)("div", {
              className: Py({
                appearance: m
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": w,
              "data-testid": n,
              children: (0, a.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, a.jsx)(C, {})
              })
            })]
          }), (0, a.jsx)(c, {
            enabled: !!r,
            children: (0, a.jsxs)("div", {
              className: Ey({
                size: y
              }),
              children: [(0, a.jsx)("p", {
                className: Cy({
                  size: y,
                  isDisabled: g.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, a.jsx)("p", {
                className: "foundry_1pfduetj foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: t
              })]
            })
          })]
        })
      }));
      var Oy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ty = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ky(ky({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Oy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jy(e.variantClassNames, (e => jy(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_thj3a32",
              thick: "foundry_thj3a33",
              thicker: "foundry_thj3a34",
              thickest: "foundry_thj3a35"
            },
            orientation: {
              horizontal: "foundry_thj3a36",
              vertical: "foundry_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: i,
        ...s
      }, u) => {
        const c = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === c ? void 0 : "separator",
          f = o ? l.Slot : c;
        return (0, a.jsx)(f, {
          ref: u,
          className: (0, Se.$)(Ty({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": i,
          ...s
        })
      }));
      const Ny = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        Ly = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        My = ({
          color: e = "currentColor"
        }) => (0, a.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, a.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });

      function Dy(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Ry(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Iy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ry(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Dy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ry(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ay(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var zy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Vy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Iy(Iy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) zy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ay(e.variantClassNames, (e => Ay(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Fy = Vy({
          defaultClassName: "foundry_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z213 foundry_okz6z2y foundry_okz6z2z",
              LG: "foundry_okz6z214 foundry_okz6z210 foundry_okz6z211"
            },
            isSelected: {
              true: "foundry_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qy = Vy({
          defaultClassName: "foundry_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z2p foundry_okz6z2k foundry_okz6z2l",
              LG: "foundry_okz6z2q foundry_okz6z2m foundry_okz6z2n"
            },
            position: {
              left: "foundry_okz6z2r",
              right: "foundry_okz6z2s"
            },
            isSelected: {
              true: "foundry_okz6z2t",
              false: "foundry_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_okz6z2w"]
          ]
        }),
        $y = Vy({
          defaultClassName: "foundry_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
              LG: "foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        By = Vy({
          defaultClassName: "foundry_okz6z28 foundry_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_okz6z29 foundry_okz6z24 foundry_okz6z25",
              LG: "foundry_okz6z2a foundry_okz6z26 foundry_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ky = Vy({
          defaultClassName: "foundry_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_okz6z22",
              secondary: "foundry_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Hy = Vy({
          defaultClassName: "foundry_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_okz6z2c"
            },
            size: {
              MD: "foundry_okz6z2d",
              LG: "foundry_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Wy(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Uy(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Gy(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Uy(Object(r), !0).forEach((function(t) {
            var n, o, a;
            n = e, o = t, a = r[t], (o = Wy(o)) in n ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uy(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Xy(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        size: r = "MD",
        appearance: n = "primary",
        showIcons: o = !1,
        selectedIcon: i,
        unselectedIcon: l,
        hideLabel: u,
        testId: d,
        ...f
      }, p) => {
        const h = (0, s.useRef)(null),
          v = ht(h, p),
          m = (0, s.useId)(),
          y = _m(f),
          {
            inputProps: g,
            isDisabled: b,
            isReadOnly: w,
            isSelected: C
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              isSelected: a,
              isPressed: i,
              isDisabled: s,
              isReadOnly: l
            } = Vm(e, t, r);
            return {
              labelProps: n,
              inputProps: {
                ...o,
                role: "switch",
                checked: a
              },
              isSelected: a,
              isPressed: i,
              isDisabled: s,
              isReadOnly: l
            }
          }({
            ...f,
            "aria-label": e,
            id: m
          }, y, h),
          P = i ? te[i] : My,
          x = l ? te[l] : Ly;
        return (0, a.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, a.jsxs)("div", {
            className: Ky({
              appearance: n
            }),
            "data-state": C ? "selected" : "unselected",
            "data-disabled": b || w,
            "data-testid": d,
            children: [(0, a.jsx)(c, {
              children: (0, a.jsx)("input", {
                ...g,
                ref: v
              })
            }), (0, a.jsxs)("div", {
              className: By({
                size: r
              }),
              "aria-hidden": "true",
              children: [(0, a.jsx)("div", {
                className: Fy({
                  size: r,
                  isSelected: C
                }),
                children: (0, a.jsx)(Ny, {})
              }), o && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: qy({
                    size: r,
                    isSelected: C,
                    position: "left"
                  }),
                  children: (0, a.jsx)(P, {
                    label: ""
                  })
                }), (0, a.jsx)("div", {
                  className: qy({
                    size: r,
                    isSelected: C,
                    position: "right"
                  }),
                  children: (0, a.jsx)(x, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, a.jsx)(c, {
            enabled: !!u,
            children: (0, a.jsxs)("div", {
              className: Hy({
                size: r,
                isDisabled: b
              }),
              children: [(0, a.jsx)("p", {
                className: $y({
                  size: r
                }),
                children: e
              }), t && (0, a.jsx)("p", {
                className: "foundry_okz6z2i foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: t
              })]
            })
          })]
        })
      })).displayName = "Switch";
      var Yy = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Zy = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Gy(Gy({}, e.defaultVariants), t);
            for (var o in n) {
              var a, i = null !== (a = n[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != i) {
                var s = i;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Yy(u, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Xy(e.variantClassNames, (e => Xy(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Qy = Zy({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jy = Zy({
          defaultClassName: "foundry_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_1m368qhe",
              danger: "foundry_1m368qhf",
              success: "foundry_1m368qhg",
              warning: "foundry_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        eg = Zy({
          defaultClassName: "foundry_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_1m368qh3",
              information: "foundry_1m368qh4",
              success: "foundry_1m368qh5",
              warning: "foundry_1m368qh6"
            },
            background: {
              "two-tone": "foundry_1m368qh7",
              neutral: "foundry_1m368qh8",
              none: "foundry_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const tg = (0, s.createContext)(null);

      function rg() {
        const e = (0, s.useContext)(tg);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        status: r,
        background: n,
        ...o
      }, s) => {
        const u = e ? l.Slot : "div",
          c = (0, i.v6)(o, {
            className: eg({
              status: r,
              background: n
            })
          });
        return (0, a.jsx)(tg.Provider, {
          value: {
            status: r,
            background: n
          },
          children: (0, a.jsx)(u, {
            ref: s,
            "data-testid": t,
            ...c,
            ...o
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, i.v6)(r, {
            className: "foundry_1m368qha"
          });
        return (0, a.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, i.v6)(r, {
            className: "foundry_1m368qhb"
          });
        return (0, a.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      }));
      const ng = {
        danger: "XCircleSolid",
        information: "InfoCircleSolid",
        success: "CheckCircleSolid",
        warning: "AlertTriangleSolid"
      };
      (0, s.forwardRef)((({
        icon: e,
        ...t
      }, r) => {
        const {
          status: n
        } = rg(), o = te[e || ng[n]], s = (0, i.v6)(t, {
          className: Jy({
            status: n
          })
        });
        return (0, a.jsx)("div", {
          className: "foundry_1m368qhc",
          children: (0, a.jsx)(o, {
            title: "",
            ref: r,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, i.v6)(r, {
            className: "foundry_1m368qhi"
          });
        return (0, a.jsx)(b, {
          level: 5,
          asChild: !0,
          children: (0, a.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, i.v6)(r, {
            className: "foundry_1m368qhj"
          });
        return (0, a.jsx)(M, {
          asChild: !0,
          children: (0, a.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const u = (0, s.useRef)(null),
          c = ht(u, o),
          d = e ? l.Slot : "a",
          {
            linkProps: f,
            isPressed: p
          } = dm(n, u),
          h = (0, i.v6)(f, {
            className: "foundry_1m368qhk foundry_1d5mo5m0"
          });
        return (0, a.jsx)(M, {
          asChild: !0,
          appearance: "hyperlink",
          children: (0, a.jsx)(d, {
            "data-pressed": p,
            "data-testid": r,
            ref: c,
            ...h,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? l.Slot : "div",
          u = (0, i.v6)(n, {
            className: "foundry_1m368qhl"
          });
        return (0, a.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...u,
          children: t
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        className: r,
        ...n
      }, o) => {
        const i = e ? l.Slot : "div";
        return (0, a.jsx)(M, {
          asChild: !0,
          children: (0, a.jsx)(i, {
            ref: o,
            "data-testid": t,
            className: (0, Se.$)(r, "foundry_1m368qho"),
            ...n
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        label: t = "close alert",
        ...r
      }, n) => {
        const {
          background: o
        } = rg(), s = (0, i.v6)(r, {
          className: Qy({
            hasBackground: "none" !== o
          })
        });
        return (0, a.jsx)(Ku, {
          ref: n,
          label: t,
          "data-testid": e,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...s
        })
      }))
    },
    26137: (e, t, r) => {
      r.d(t, {
        jH: () => a
      });
      var n = r(62229),
        o = (r(91029), n.createContext(void 0));

      function a(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    4119: (e, t, r) => {
      r.d(t, {
        hO: () => l,
        sG: () => s
      });
      var n = r(62229),
        o = r(44853),
        a = r(21222),
        i = r(91029),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = n.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, s = n ? a.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function l(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    },
    13942: (e, t, r) => {
      r.d(t, {
        hO: () => l,
        sG: () => s
      });
      var n = r(62229),
        o = r(44853),
        a = r(21222),
        i = r(91029),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = n.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, s = n ? a.Slot : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {});

      function l(e, t) {
        e && o.flushSync((() => e.dispatchEvent(t)))
      }
    },
    1371: (e, t, r) => {
      r.d(t, {
        Z: () => o
      });
      var n = r(62229);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    }
  }
]);