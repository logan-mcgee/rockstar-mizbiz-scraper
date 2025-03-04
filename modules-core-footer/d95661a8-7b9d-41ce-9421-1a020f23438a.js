! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d95661a8-7b9d-41ce-9421-1a020f23438a", e._sentryDebugIdIdentifier = "sentry-dbid-d95661a8-7b9d-41ce-9421-1a020f23438a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [3138], {
    26324: e => {
      var t = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        r = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, n) {
            if (!e) return n;
            var r = {};
            for (var o in n) r[o] = t.call(e, o) ? e[o] : n[o];
            return r
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, c = i.charAt(0), u = "", d = 0, f = i.length; d < f;) {
            var h = i.charAt(d++),
              p = h.charCodeAt(),
              m = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && d < f) {
                var v = i.charCodeAt(d++);
                56320 == (64512 & v) ? p = ((1023 & p) << 10) + (1023 & v) + 65536 : d--
              }
              m = "\\" + p.toString(16).toUpperCase() + " "
            } else m = a.escapeEverything ? n.test(h) ? "\\" + h : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(h) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == h || !l && ('"' == h && s == h || "'" == h && s == h) || l && r.test(h) ? "\\" + h : h;
            u += m
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(o, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !l && a.wrap ? s + u + s : u
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    },
    63305: (e, t, n) => {
      var r = n(59337),
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
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var o = h(n);
            o && o !== p && e(t, o, r)
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!(i[g] || r && r[g] || m && m[g] || s && s[g])) {
              var y = f(n, g);
              try {
                c(t, g, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    37685: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function E(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case f:
                    case v:
                    case m:
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

      function _(e) {
        return E(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return _(e) || E(e) === u
      }, t.isConcurrentMode = _, t.isContextConsumer = function(e) {
        return E(e) === c
      }, t.isContextProvider = function(e) {
        return E(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return E(e) === f
      }, t.isFragment = function(e) {
        return E(e) === i
      }, t.isLazy = function(e) {
        return E(e) === v
      }, t.isMemo = function(e) {
        return E(e) === m
      }, t.isPortal = function(e) {
        return E(e) === o
      }, t.isProfiler = function(e) {
        return E(e) === s
      }, t.isStrictMode = function(e) {
        return E(e) === a
      }, t.isSuspense = function(e) {
        return E(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === g)
      }, t.typeOf = E
    },
    59337: (e, t, n) => {
      e.exports = n(37685)
    },
    66863: (e, t, n) => {
      n.r(t), n.d(t, {
        Body: () => ST,
        BreadcrumbItem: () => AC,
        Breadcrumbs: () => NC,
        Button: () => dr,
        Caption: () => z,
        Checkbox: () => dS,
        CloseButton: () => RT,
        Description: () => LT,
        Divider: () => XS,
        Dropdown: () => P_,
        ErrorText: () => AT,
        Footer: () => NT,
        Header: () => CT,
        Heading: () => L,
        Icon: () => xT,
        IconButton: () => Qp,
        Lightbox: () => tw,
        Link: () => kT,
        Metadata: () => Y,
        Option: () => C_,
        Paragraph: () => j,
        RadioButton: () => VS,
        RadioContext: () => RS,
        RadioGroup: () => MS,
        Root: () => PT,
        RootContext: () => ET,
        Subtitle: () => re,
        Switch: () => dT,
        Text: () => de,
        TextArea: () => Ft,
        TextSemantics: () => ue,
        Title: () => OT,
        Tooltip: () => Jg,
        iconStatusMap: () => TT,
        useAlertContext: () => _T
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => DC,
        CheckMD: () => MC,
        CheckXL: () => jC,
        DashLG: () => HC,
        DashMD: () => IC,
        DashXL: () => BC
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => jS,
        DotMD: () => DS,
        DotXL: () => IS
      });
      var i = n(91029),
        a = n(57120),
        s = n(62229),
        l = n.t(s, 2),
        c = n.n(s);

      function u() {
        return u = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, u.apply(this, arguments)
      }

      function d(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      const f = (0, s.forwardRef)(((e, t) => {
        const {
          children: n,
          ...r
        } = e, o = s.Children.toArray(n), i = o.find(m);
        if (i) {
          const e = i.props.children,
            n = o.map((t => t === i ? s.Children.count(e) > 1 ? s.Children.only(null) : (0, s.isValidElement)(e) ? e.props.children : null : t));
          return (0, s.createElement)(h, u({}, r, {
            ref: t
          }), (0, s.isValidElement)(e) ? (0, s.cloneElement)(e, void 0, n) : null)
        }
        return (0, s.createElement)(h, u({}, r, {
          ref: t
        }), n)
      }));
      f.displayName = "Slot";
      const h = (0, s.forwardRef)(((e, t) => {
        const {
          children: n,
          ...r
        } = e;
        return (0, s.isValidElement)(n) ? (0, s.cloneElement)(n, {
          ...v(r, n.props),
          ref: t ? d(t, n.ref) : n.ref
        }) : s.Children.count(n) > 1 ? s.Children.only(null) : null
      }));
      h.displayName = "SlotClone";
      const p = ({
        children: e
      }) => (0, s.createElement)(s.Fragment, null, e);

      function m(e) {
        return (0, s.isValidElement)(e) && e.type === p
      }

      function v(e, t) {
        const n = {
          ...t
        };
        for (const r in t) {
          const o = e[r],
            i = t[r];
          /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
            i(...e), o(...e)
          } : o && (n[r] = o) : "style" === r ? n[r] = {
            ...o,
            ...i
          } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...n
        }
      }
      var g = n(44853);
      const y = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = (0, s.forwardRef)(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, i = r ? f : t;
            return (0, s.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, s.createElement)(i, u({}, o, {
              ref: n
            }))
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        b = (0, s.forwardRef)(((e, t) => (0, s.createElement)(y.span, u({}, e, {
          ref: t,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })))),
        w = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? b : s.Fragment;
          return (0, i.jsx)(n, {
            ...t
          })
        };

      function E(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = E(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function C(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var S, T, x = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        O = (S = {
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
        }, T = e => {
          var t = S.defaultClassName,
            n = P(P({}, S.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : S.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = S.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of S.compoundVariants) x(l, n, S.defaultVariants) && (t += " " + c);
          return t
        }, T.variants = () => Object.keys(S.variantClassNames), T.classNames = {
          get base() {
            return S.defaultClassName.split(" ")[0]
          },
          get variants() {
            return C(S.variantClassNames, (e => C(e, (e => e.split(" ")[0]))))
          }
        }, T);
      const L = (0, s.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const s = e ? f : `h${t}`,
          l = (0, a.v6)(r, {
            className: O({
              level: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...l
        })
      }));

      function k(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? N(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = k(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function R(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var M = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        D = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = A(A({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) M(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return R(e.variantClassNames, (e => R(e, (e => e.split(" ")[0]))))
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
      const j = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? f : "p",
          l = (0, a.v6)(r, {
            className: D({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function I(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? H(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = I(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function F(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var U = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        V = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = B(B({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) U(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return F(e.variantClassNames, (e => F(e, (e => e.split(" ")[0]))))
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
      const z = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? f : "span",
          l = (0, a.v6)(r, {
            className: V({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function G(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function K(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = G(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function W(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var $ = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        X = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = q(q({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) $(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return W(e.variantClassNames, (e => W(e, (e => e.split(" ")[0]))))
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
      const Y = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? f : "span",
          l = (0, a.v6)(r, {
            className: X({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function Z(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Q(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Z(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ee(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var te = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ne = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = J(J({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) te(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ee(e.variantClassNames, (e => ee(e, (e => e.split(" ")[0]))))
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
      const re = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? f : "p",
          l = (0, a.v6)(r, {
            className: ne({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function oe(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ie(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ie(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = oe(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function se(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var le = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ce = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ae(ae({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) le(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return se(e.variantClassNames, (e => se(e, (e => e.split(" ")[0]))))
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
      const ue = {
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
        },
        de = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const s = e ? f : ue[n] || "span",
            l = (0, a.v6)(r, {
              className: ce({
                semantic: n
              })
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...l
          })
        }));
      var fe = n(3082);
      const he = new Set(["id"]),
        pe = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        me = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        ve = /^(data-.*)$/;
      const ge = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function ye(e) {
        const t = (0, s.useRef)(null);
        return ge((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      const be = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        we = e => e && "window" in e && e.window === e ? e : be(e).defaultView || window;

      function Ee(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const _e = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Pe = s.createContext(_e),
        Ce = s.createContext(!1);
      let Se = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Te = new WeakMap;
      const xe = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(ke, Oe, Le) : (0, s.useContext)(Ce));
        return e || `${n?"react-aria":`react-aria${_e.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(Pe);
        t !== _e || Se || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(Pe),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = Te.get(e);
                null == n ? Te.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, Te.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function Oe() {
        return !1
      }

      function Le() {
        return !0
      }

      function ke(e) {
        return () => {}
      }
      let Ne = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ae = new Map;

      function Re(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = xe(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return Ne && Ae.set(o, i), ge((() => {
          let e = o;
          return () => {
            Ae.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function Me(e, t) {
        if (e === t) return e;
        let n = Ae.get(e);
        if (n) return n(t), t;
        let r = Ae.get(t);
        return r ? (r(e), e) : t
      }

      function De(e = []) {
        let t = Re(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = ye((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            ge((() => {
              r.current && o()
            }));
            let i = ye((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return ge(o, [t, o, ...e]), n
      }
      var je = n(15302);

      function Ie(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ee(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Me(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, je.A)(n, o)
          }
        }
        return t
      }

      function He(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = Re(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Be(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = Re(t);
          let a = Re(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: He({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = De([Boolean(t), Boolean(n), r, o]), l = De([Boolean(t), Boolean(n), r, o]);
        return a = Ie(a, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      let Fe = new Map,
        Ue = new Set;

      function Ve() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Fe.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Fe.delete(n.target)), 0 === Fe.size)) {
            for (let e of Ue) e();
            Ue.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Fe.get(n.target);
          r || (r = new Set, Fe.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function ze(e) {
        if (function() {
            if (null == Ge) {
              Ge = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Ge = !0, !0
                  }
                })
              } catch (e) {}
            }
            return Ge
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Ve() : document.addEventListener("DOMContentLoaded", Ve));
      let Ge = null;

      function Ke() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
        var e, t
      }

      function qe(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (t = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((e => t.test(e.brand)))) || t.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var t, n
      }
      let We = null,
        $e = new Set,
        Xe = new Map,
        Ye = !1,
        Ze = !1;

      function Qe(e, t) {
        for (let n of $e) n(e, t)
      }

      function Je(e) {
        Ye = !0,
          function(e) {
            return !(e.metaKey || !Ke() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (We = "keyboard", Qe("keyboard", e))
      }

      function et(e) {
        We = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ye = !0, Qe("pointer", e))
      }

      function tt(e) {
        qe(e) && (Ye = !0, We = "virtual")
      }

      function nt(e) {
        e.target !== window && e.target !== document && (Ye || Ze || (We = "virtual", Qe("virtual", e)), Ye = !1, Ze = !1)
      }

      function rt() {
        Ye = !1, Ze = !0
      }

      function ot(e) {
        if ("undefined" == typeof window || Xe.get(we(e))) return;
        const t = we(e),
          n = be(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ye = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Je, !0), n.addEventListener("keyup", Je, !0), n.addEventListener("click", tt, !0), t.addEventListener("focus", nt, !0), t.addEventListener("blur", rt, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", et, !0), n.addEventListener("pointermove", et, !0), n.addEventListener("pointerup", et, !0)) : (n.addEventListener("mousedown", et, !0), n.addEventListener("mousemove", et, !0), n.addEventListener("mouseup", et, !0)), t.addEventListener("beforeunload", (() => {
          it(e)
        }), {
          once: !0
        }), Xe.set(t, {
          focus: r
        })
      }
      const it = (e, t) => {
        const n = we(e),
          r = be(e);
        t && r.removeEventListener("DOMContentLoaded", t), Xe.has(n) && (n.HTMLElement.prototype.focus = Xe.get(n).focus, r.removeEventListener("keydown", Je, !0), r.removeEventListener("keyup", Je, !0), r.removeEventListener("click", tt, !0), n.removeEventListener("focus", nt, !0), n.removeEventListener("blur", rt, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", et, !0), r.removeEventListener("pointermove", et, !0), r.removeEventListener("pointerup", et, !0)) : (r.removeEventListener("mousedown", et, !0), r.removeEventListener("mousemove", et, !0), r.removeEventListener("mouseup", et, !0)), Xe.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = be(e);
        let n;
        "loading" !== t.readyState ? ot(e) : (n = () => {
          ot(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class at {
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

      function st(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          a = function(e) {
            let t = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            ge((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = ye((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new at("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                })), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [n])
          }(i),
          l = (0, s.useCallback)((e => {
            const t = be(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
          }), [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function lt(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(r), t && n.stopPropagation()
        }
      }
      let ct = s.createContext(null);

      function ut(e) {
        let t = (0, s.useContext)(ct) || {};
        ! function(e, t) {
          ge((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e);
        let {
          ref: n,
          ...r
        } = t;
        return r
      }

      function dt(e, t) {
        let {
          focusProps: n
        } = st(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: lt(e.onKeyDown),
              onKeyUp: lt(e.onKeyUp)
            }
          }
        }(e), o = Ie(n, r), i = ut(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = be(e);
            if ("virtual" === We) {
              let r = t.activeElement;
              n = () => {
                t.activeElement === r && e.isConnected && ze(e)
              }, requestAnimationFrame((() => {
                0 === Fe.size ? n() : Ue.add(n)
              }))
            } else ze(e);
            var n
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: Ie({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }

      function ft(e) {
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
      const ht = {
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
        pt = {
          ...ht,
          customError: !0,
          valid: !1
        },
        mt = {
          isInvalid: !1,
          validationDetails: ht,
          validationErrors: []
        },
        vt = (0, s.createContext)({}),
        gt = "__formValidationState" + Date.now();

      function yt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function bt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: pt
        } : null
      }

      function wt(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function Et(e, t) {
        let {
          inputElementType: n = "input",
          isDisabled: r = !1,
          isRequired: o = !1,
          isReadOnly: i = !1,
          type: a = "text",
          validationBehavior: l = "aria"
        } = e, [c, u] = function(e, t, n) {
          let [r, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
          (0, s.useEffect)((() => {
            let e = i.current;
            e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
          }), [a]);
          let l = a ? e : r,
            c = (0, s.useCallback)(((e, ...t) => {
              let r = (e, ...t) => {
                n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((n, ...o) => {
                let i = e(a ? l : n, ...o);
                return r(i, ...t), a ? n : i
              }))) : (a || o(e), r(e, ...t))
            }), [a, l, n]);
          return [l, c]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: d
        } = dt(e, t), f = function(e) {
          if (e[gt]) {
            let {
              realtimeValidation: t,
              displayValidation: n,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[gt];
            return {
              realtimeValidation: t,
              displayValidation: n,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            }
          }
          return function(e) {
            let {
              isInvalid: t,
              validationState: n,
              name: r,
              value: o,
              builtinValidation: i,
              validate: a,
              validationBehavior: l = "aria"
            } = e;
            n && (t || (t = "invalid" === n));
            let c = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: pt
              } : null,
              u = (0, s.useMemo)((() => bt(function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return yt(n)
                }
                return []
              }(a, o))), [a, o]);
            (null == i ? void 0 : i.validationDetails.valid) && (i = null);
            let d = (0, s.useContext)(vt),
              f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => yt(d[e]))) : yt(d[r]) : []), [d, r]),
              [h, p] = (0, s.useState)(d),
              [m, v] = (0, s.useState)(!1);
            d !== h && (p(d), v(!1));
            let g = (0, s.useMemo)((() => bt(m ? [] : f)), [m, f]),
              y = (0, s.useRef)(mt),
              [b, w] = (0, s.useState)(mt),
              E = (0, s.useRef)(mt),
              [_, P] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!_) return;
              P(!1);
              let e = u || i || y.current;
              wt(e, E.current) || (E.current = e, w(e))
            })), {
              realtimeValidation: c || g || u || i || mt,
              displayValidation: "native" === l ? c || g || b : c || g || u || i || b,
              updateValidation(e) {
                "aria" !== l || wt(b, e) ? y.current = e : w(e)
              },
              resetValidation() {
                let e = mt;
                wt(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
              },
              commitValidation() {
                "native" === l && P(!0), v(!0)
              }
            }
          }(e)
        }({
          ...e,
          value: c
        }), {
          isInvalid: h,
          validationErrors: p,
          validationDetails: m
        } = f.displayValidation, {
          labelProps: v,
          fieldProps: g,
          descriptionProps: y,
          errorMessageProps: b
        } = Be({
          ...e,
          isInvalid: h,
          errorMessage: e.errorMessage || p
        }), w = function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (he.has(t) || n && pe.has(t) || r && me.has(t) || (null == o ? void 0 : o.has(t)) || ve.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        });
        const E = {
          type: a,
          pattern: e.pattern
        };
        return function(e, t, n) {
            let r = (0, s.useRef)(t),
              o = ye((() => {
                n && n(r.current)
              }));
            (0, s.useEffect)((() => {
              var t;
              let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
              return null == n || n.addEventListener("reset", o), () => {
                null == n || n.removeEventListener("reset", o)
              }
            }), [e, o])
          }(t, c, u),
          function(e, t, n) {
            let {
              validationBehavior: r,
              focus: o
            } = e;
            ge((() => {
              if ("native" === r && (null == n ? void 0 : n.current)) {
                let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: ft(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let i = ye((() => {
                t.resetValidation()
              })),
              a = ye((e => {
                var r;
                t.displayValidation.isInvalid || t.commitValidation();
                let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
                var a;
                !e.defaultPrevented && n && i && function(e) {
                  for (let t = 0; t < e.elements.length; t++) {
                    let n = e.elements[t];
                    if (!n.validity.valid) return n
                  }
                  return null
                }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), We = "keyboard", Qe("keyboard", null)), e.preventDefault()
              })),
              l = ye((() => {
                t.commitValidation()
              }));
            (0, s.useEffect)((() => {
              let e = null == n ? void 0 : n.current;
              if (!e) return;
              let t = e.form;
              return e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
                e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i)
              }
            }), [n, a, l, i, r])
          }(e, f, t), (0, s.useEffect)((() => {
            if (t.current instanceof we(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: v,
            inputProps: Ie(w, "input" === n && E, {
              disabled: r,
              readOnly: i,
              required: o && "native" === l,
              "aria-required": o && "aria" === l || void 0,
              "aria-invalid": h || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: c,
              onChange: e => u(e.target.value),
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
              ...g
            }),
            descriptionProps: y,
            errorMessageProps: b,
            isInvalid: h,
            validationErrors: p,
            validationDetails: m
          }
      }
      var _t = n(83540);

      function Pt(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => _t.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, s.useState)((() => n ? r(e) : t));

        function a() {
          i(r(e))
        }
        return (0, s.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function Ct(e) {
        const t = (0, s.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function St(...e) {
        const t = (0, s.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const Tt = () => Pt("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function xt(e) {
        const t = (0, s.useRef)(e);
        return (0, s.useEffect)((() => {
          t.current = e
        })), (0, s.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const Ot = ({
        activity: e,
        leave: t,
        enabled: n = !0
      }) => {
        const r = (0, s.useRef)(),
          [o, i] = (0, s.useState)(!1),
          a = (0, s.useCallback)((() => {
            i(!0)
          }), []),
          l = (0, s.useCallback)(((t, n) => {
            let o = 0;
            return (...t) => {
              const n = Date.now();
              n - o >= 500 && (o = n, (() => {
                i(!1), window.clearTimeout(r.current), r.current = window.setTimeout(a, e)
              })(...t))
            }
          })(), []),
          c = (0, s.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(a, t)
          }), []),
          u = (0, s.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, s.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", c), document.removeEventListener("visibilitychange", u), window.clearTimeout(r.current), i(!1)
          };
          return n ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", c), document.addEventListener("visibilitychange", u), l()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function Lt({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, s.useState)(e),
            [r] = n,
            o = (0, s.useRef)(r),
            i = xt(t);
          return (0, s.useEffect)((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = xt(n), c = (0, s.useCallback)((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l]);
        return [a, c]
      }

      function kt(e, t, n, r) {
        const o = (0, s.useRef)(t);
        (0, s.useEffect)((() => {
          o.current = t
        }), [t]), (0, s.useEffect)((() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const i = e => {
            o.current(e)
          };
          return t.addEventListener(e, i, r), () => {
            t.removeEventListener(e, i, r)
          }
        }), [e, n?.current, r])
      }

      function Nt(e = !0) {
        return !!e && Pt("screen and (pointer: coarse) and (hover: none)")
      }
      const At = (e, t = []) => {
        const n = (0, s.useRef)(!1);
        (0, s.useEffect)((() => (n.current = !0, () => {
          n.current = !1
        })), []), (0, s.useEffect)((() => {
          n.current && e()
        }), [...t])
      };

      function Rt(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Dt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Rt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function jt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var It = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ht = "foundry_vq8c3j8",
        Bt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Dt(Dt({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) It(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return jt(e.variantClassNames, (e => jt(e, (e => e.split(" ")[0]))))
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
      const Ft = (0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: l,
        testId: c,
        className: u,
        rows: d = 5,
        hideLabel: h,
        hideDescription: p,
        hideRequiredAsterisk: m,
        validate: v,
        errorMessage: g,
        ...y
      }, b) => {
        const E = (0, s.useRef)(null),
          _ = St(E, b),
          {
            inputProps: P,
            labelProps: C,
            descriptionProps: S,
            isInvalid: T,
            errorMessageProps: x,
            validationErrors: O
          } = Et({
            ...y,
            label: t,
            description: l,
            isRequired: n,
            inputElementType: "textarea",
            validate: e => v?.(e) ?? (!g || [g])
          }, E),
          L = (0, a.v6)({
            ...P,
            className: u
          }, {
            className: Bt({
              isInvalid: T
            }),
            "aria-errormessage": x?.id
          }),
          k = e ? f : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || r) && (0, i.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, i.jsx)(w, {
              enabled: !!h,
              children: (0, i.jsx)(z, {
                ...C,
                className: (0, je.$)("foundry_vq8c3j2", P.disabled && Ht),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  children: [t, n && !m && (0, i.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, i.jsx)(Y, {
              className: "foundry_vq8c3j3",
              children: r
            })]
          }), (0, i.jsx)(k, {
            rows: d,
            ref: _,
            "data-testid": c,
            ...L,
            children: o
          }), l && (0, i.jsx)(w, {
            enabled: O.length > 0 || !!p,
            children: (0, i.jsx)(z, {
              ...S,
              className: (0, je.$)("foundry_vq8c3j4", P.disabled && Ht),
              children: l
            })
          }), O.length > 0 && (0, i.jsxs)(z, {
            ...x,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, i.jsx)(fe.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), O.join(". ")]
          })]
        })
      }));

      function Ut(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Vt = new Map;

      function zt(e, t) {
        if (e === t) return e;
        let n = Vt.get(e);
        if (n) return n(t), t;
        let r = Vt.get(t);
        return r ? (r(e), e) : t
      }

      function Gt(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ut(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = zt(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, je.A)(n, o)
          }
        }
        return t
      }
      const Kt = new Set(["id"]),
        qt = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Wt = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        $t = /^(data-.*)$/;
      const Xt = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Yt = e => e && "window" in e && e.window === e ? e : Xt(e).defaultView || window;
      let Zt = new Map,
        Qt = new Set;

      function Jt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Zt.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Zt.delete(n.target)), 0 === Zt.size)) {
            for (let e of Qt) e();
            Qt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Zt.get(n.target);
          r || (r = new Set, Zt.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function en(e) {
        requestAnimationFrame((() => {
          0 === Zt.size ? e() : Qt.add(e)
        }))
      }

      function tn(e) {
        if (function() {
            if (null == nn) {
              nn = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return nn = !0, !0
                  }
                })
              } catch (e) {}
            }
            return nn
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? Jt() : document.addEventListener("DOMContentLoaded", Jt));
      let nn = null;

      function rn(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function on(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function an() {
        return on(/^Mac/i)
      }

      function sn() {
        return on(/^iPad/i) || an() && navigator.maxTouchPoints > 1
      }

      function ln() {
        return on(/^iPhone/i) || sn()
      }

      function cn() {
        return rn(/Android/i)
      }

      function un(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (cn() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let dn = null,
        fn = new Set,
        hn = new Map,
        pn = !1,
        mn = !1;

      function vn(e, t) {
        for (let n of fn) n(e, t)
      }

      function gn(e) {
        pn = !0,
          function(e) {
            return !(e.metaKey || !an() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (dn = "keyboard", vn("keyboard", e))
      }

      function yn(e) {
        dn = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (pn = !0, vn("pointer", e))
      }

      function bn(e) {
        un(e) && (pn = !0, dn = "virtual")
      }

      function wn(e) {
        e.target !== window && e.target !== document && (pn || mn || (dn = "virtual", vn("virtual", e)), pn = !1, mn = !1)
      }

      function En() {
        pn = !1, mn = !0
      }

      function _n(e) {
        if ("undefined" == typeof window || hn.get(Yt(e))) return;
        const t = Yt(e),
          n = Xt(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          pn = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", gn, !0), n.addEventListener("keyup", gn, !0), n.addEventListener("click", bn, !0), t.addEventListener("focus", wn, !0), t.addEventListener("blur", En, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", yn, !0), n.addEventListener("pointermove", yn, !0), n.addEventListener("pointerup", yn, !0)) : (n.addEventListener("mousedown", yn, !0), n.addEventListener("mousemove", yn, !0), n.addEventListener("mouseup", yn, !0)), t.addEventListener("beforeunload", (() => {
          Pn(e)
        }), {
          once: !0
        }), hn.set(t, {
          focus: r
        })
      }
      const Pn = (e, t) => {
        const n = Yt(e),
          r = Xt(e);
        t && r.removeEventListener("DOMContentLoaded", t), hn.has(n) && (n.HTMLElement.prototype.focus = hn.get(n).focus, r.removeEventListener("keydown", gn, !0), r.removeEventListener("keyup", gn, !0), r.removeEventListener("click", bn, !0), n.removeEventListener("focus", wn, !0), n.removeEventListener("blur", En, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", yn, !0), r.removeEventListener("pointermove", yn, !0), r.removeEventListener("pointerup", yn, !0)) : (r.removeEventListener("mousedown", yn, !0), r.removeEventListener("mousemove", yn, !0), r.removeEventListener("mouseup", yn, !0)), hn.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = Xt(e);
        let n;
        "loading" !== t.readyState ? _n(e) : (n = () => {
          _n(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const Cn = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Sn(e, t) {
        Cn((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function Tn(e) {
        const t = (0, s.useRef)(null);
        return Cn((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      class xn {
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

      function On(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: o
        } = e;
        const i = (0, s.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          a = function(e) {
            let t = (0, s.useRef)({
              isFocused: !1,
              observer: null
            });
            Cn((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = Tn((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new xn("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver((() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                })), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }), [n])
          }(i),
          l = (0, s.useCallback)((e => {
            const t = Xt(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
          }), [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function Ln(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(r), t && n.stopPropagation()
        }
      }
      let kn = s.createContext(null);

      function Nn(e, t) {
        let {
          focusProps: n
        } = On(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Ln(e.onKeyDown),
              onKeyUp: Ln(e.onKeyUp)
            }
          }
        }(e), o = Gt(n, r), i = function(e) {
          let t = (0, s.useContext)(kn) || {};
          Sn(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = Xt(e);
            if ("virtual" === dn) {
              let n = t.activeElement;
              en((() => {
                t.activeElement === n && e.isConnected && tn(e)
              }))
            } else tn(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: Gt({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let An = "default",
        Rn = "",
        Mn = new WeakMap;

      function Dn(e) {
        if (ln()) {
          if ("default" === An) {
            const t = Xt(e);
            Rn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          An = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Mn.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function jn(e) {
        if (ln()) {
          if ("disabled" !== An) return;
          An = "restoring", setTimeout((() => {
            en((() => {
              if ("restoring" === An) {
                const t = Xt(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Rn || ""), Rn = "", An = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mn.has(e)) {
          let t = Mn.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Mn.delete(e)
        }
      }
      const In = s.createContext({
        register: () => {}
      });

      function Hn(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function Bn(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, Hn(e, t, "get"))
      }

      function Fn(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function Un(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, Hn(e, t, "set"), n), n
      }

      function Vn(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        rn(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (an() ? i = !0 : a = !0);
        let c = rn(/AppleWebKit/i) && !rn(/Chrome/i) && an() && !sn() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Vn.isOpening = n, tn(e), e.dispatchEvent(c), Vn.isOpening = !1
      }
      In.displayName = "PressResponderContext", Vn.isOpening = !1;
      var zn = new WeakMap;
      class Gn {
        continuePropagation() {
          Un(this, zn, !1)
        }
        get shouldStopPropagation() {
          return Bn(this, zn)
        }
        constructor(e, t, n) {
          Fn(this, zn, {
            writable: !0,
            value: void 0
          }), Un(this, zn, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
      }
      const Kn = Symbol("linkClicked");

      function qn(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, s.useContext)(In);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = Gt(r, e), n()
          }
          return Sn(t, e.ref), e
        }(e), [p, m] = (0, s.useState)(!1), v = (0, s.useRef)({
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
          addGlobalListener: g,
          removeAllGlobalListeners: y
        } = function() {
          let e = (0, s.useRef)(new Map),
            t = (0, s.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, r, o)
            }), []),
            n = (0, s.useCallback)(((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }), []),
            r = (0, s.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, s.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = Tn(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Gn("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = Tn(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Gn("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Gn("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = Tn(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Gn("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = Tn((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(Yn(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || jn(t.target))
        })), P = Tn((e => {
          u && _(e)
        })), C = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if ($n(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  Jn(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        $n(t, r) && !t.repeat && r.contains(t.target) && e.target && E(Yn(e.target, t), "keyboard")
                      };
                    g(Xt(t.currentTarget), "keyup", Ut(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && an() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !Vn.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || un(t.nativeEvent))) {
                    a || c || tn(t.currentTarget);
                    let e = b(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && $n(t, e.target)) {
                var r;
                Jn(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(Yn(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && Wn(e.target) && e.target.contains(n) && !t[Kn] && (t[Kn] = !0, Vn(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (i = t.nativeEvent, !cn() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              Qn(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || c || tn(t.currentTarget), d || Dn(e.target), s = b(t, e.pointerType), g(Xt(t.currentTarget), "pointermove", n, !1), g(Xt(t.currentTarget), "pointerup", r, !1), g(Xt(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (Qn(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && Zn(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && Zn(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(Yn(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Yn(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (Zn(t, e.target) && null != e.pointerType ? w(Yn(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(Yn(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || jn(e.target))
              },
              o = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (Qn(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = un(t.nativeEvent) ? "virtual" : "mouse", a || c || tn(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(Xt(t.currentTarget), "mouseup", n, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = b(t, e.pointerType)), n && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = w(t, e.pointerType, !1), P(t)), n && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || E(t, e.pointerType || "mouse"))
            };
            let n = t => {
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && Zn(t, e.target) && null != e.pointerType ? w(Yn(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(Yn(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || c || tn(t.currentTarget), d || Dn(e.target), b(t, e.pointerType) && t.stopPropagation(), g(Yt(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Xn(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Zn(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), P(t)), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Xn(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Zn(n, t.currentTarget) && null != e.pointerType ? (E(t, e.pointerType), r = w(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && jn(e.target), y()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && _(t))
            };
            let r = t => {
              e.isPressed && t.target.contains(e.target) && _({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          }
          return t
        }), [g, a, c, y, d, _, P, w, b, E]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || jn(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: Gt(h, C)
        }
      }

      function Wn(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function $n(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Yt(o).HTMLInputElement && !tr(o, n) || o instanceof Yt(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Wn(o)) && "Enter" !== n)
      }

      function Xn(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function Yn(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function Zn(e, t) {
        let n = t.getBoundingClientRect(),
          r = function(e) {
            let t = 0,
              n = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? n = e.height / 2 : void 0 !== e.radiusY && (n = e.radiusY), {
              top: e.clientY - n,
              right: e.clientX + t,
              bottom: e.clientY + n,
              left: e.clientX - t
            }
          }(e);
        return i = r, !((o = n).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function Qn(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function Jn(e, t) {
        return e instanceof HTMLInputElement ? !tr(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !Wn(e)
      }
      const er = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function tr(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : er.has(e.type)
      }

      function nr(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: m,
          type: v = "button"
        } = e;
        n = "button" === r ? {
          type: v,
          disabled: o
        } : {
          role: "button",
          tabIndex: o ? void 0 : 0,
          href: "a" === r && o ? void 0 : h,
          target: "a" === r ? p : void 0,
          type: "input" === r ? v : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? m : void 0
        };
        let {
          pressProps: g,
          isPressed: y
        } = qn({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = Nn(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Gt(b, g, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Kt.has(t) || n && qt.has(t) || r && Wt.has(t) || (null == o ? void 0 : o.has(t)) || $t.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: Gt(n, w, {
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

      function rr(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function or(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ir(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? or(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = rr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : or(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ar(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var sr = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        lr = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ir(ir({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) sr(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ar(e.variantClassNames, (e => ar(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        cr = lr({
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
        ur = lr({
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
      const dr = (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: r,
        onClick: o,
        iconLeft: l,
        iconLeftLabel: c,
        iconRight: u,
        iconRightLabel: d,
        appearance: h,
        size: m = "MD",
        allCaps: v = !1,
        fullWidth: g = !1,
        ...y
      }, b) => {
        const w = (0, s.useRef)(null),
          E = St(w, b),
          {
            events: _,
            others: P
          } = (0, a.bZ)(y, {
            onPress: !1
          }),
          {
            buttonProps: C,
            isPressed: S
          } = nr({
            ...P,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => P.onPress?.(e) ?? o?.(e)
          }, w),
          T = (0, a.v6)({
            ...C,
            className: n
          }, {
            ..._,
            role: "button",
            "data-pressed": S,
            "data-testid": e,
            className: cr({
              appearance: h,
              size: m,
              fullWidth: g,
              allCaps: v
            })
          }),
          x = l && fe[l],
          O = u && fe[u],
          L = t ? f : "button",
          k = g && (O || O && x);
        return (0, i.jsxs)(L, {
          ref: E,
          ...T,
          children: [k && (0, i.jsx)("div", {
            className: "foundry_17pcofyo"
          }), x && (0, i.jsx)(x, {
            label: c || "",
            size: m,
            className: "foundry_17pcofyk"
          }), (0, i.jsx)(p, {
            children: r
          }), O && (0, i.jsx)(O, {
            label: d || "",
            size: m,
            className: ur({
              fullWidth: g
            })
          })]
        })
      }));
      var fr = {},
        hr = n(26324),
        pr = n.n(hr);
      class mr {
        constructor(e) {
          const {
            failure: t,
            gotoFn: n,
            output: r
          } = this._buildTables(e);
          this.gotoFn = n, this.output = r, this.failure = t
        }
        _buildTables(e) {
          const t = {
              0: {}
            },
            n = {};
          let r = 0;
          for (const o of e) {
            let e = 0;
            for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (r++, t[e][i] = r, t[r] = {}, e = r, n[r] = []);
            n[e].push(o)
          }
          const o = {},
            i = [];
          for (const e in t[0]) {
            const n = t[0][e];
            o[n] = 0, i.push(n)
          }
          for (; i.length > 0;) {
            const e = i.shift();
            if (void 0 !== e)
              for (const r in t[e]) {
                const a = t[e][r];
                i.push(a);
                let s = o[e];
                for (; s > 0 && !(r in t[s]);) s = o[s];
                if (r in t[s]) {
                  const e = t[s][r];
                  o[a] = e, n[a] = [...n[a], ...n[e]]
                } else o[a] = 0
              }
          }
          return {
            gotoFn: t,
            output: n,
            failure: o
          }
        }
        search(e) {
          let t = 0;
          const n = [];
          for (let r = 0; r < e.length; r++) {
            const o = e[r];
            for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
            if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
              const e = this.output[t];
              n.push([r, e])
            }
          }
          return n
        }
      }
      var vr, gr, yr = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        br = !1;

      function wr(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(vr || (vr = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(gr || (gr = {}));
      const Er = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        _r = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        Pr = new Map([
          [126, gr.Element],
          [94, gr.Start],
          [36, gr.End],
          [42, gr.Any],
          [33, gr.Not],
          [124, gr.Hyphen]
        ]),
        Cr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        Sr = new Set(["contains", "icontains"]);

      function Tr(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function xr(e) {
        return e.replace(_r, Tr)
      }

      function Or(e) {
        return 39 === e || 34 === e
      }

      function Lr(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function kr(e) {
        const t = [],
          n = Nr(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function Nr(e, t, n) {
        let r = [];

        function o(e) {
          const r = t.slice(n + e).match(Er);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [o] = r;
          return n += e + o.length, xr(o)
        }

        function i(e) {
          for (n += e; n < t.length && Lr(t.charCodeAt(n));) n++
        }

        function a() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || s(n) ? 41 !== t.charCodeAt(n) || s(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return xr(t.slice(e, n - 1))
        }

        function s(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return 1 == (1 & n)
        }

        function l() {
          if (r.length > 0 && function(e) {
              switch (e.type) {
                case vr.Adjacent:
                case vr.Child:
                case vr.Descendant:
                case vr.Parent:
                case vr.Sibling:
                case vr.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(r[r.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function c(e) {
          r.length > 0 && r[r.length - 1].type === vr.Descendant ? r[r.length - 1].type = e : (l(), r.push({
            type: e
          }))
        }

        function u(e, t) {
          r.push({
            type: vr.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (r.length && r[r.length - 1].type === vr.Descendant && r.pop(), 0 === r.length) throw new Error("Empty sub-selector");
          e.push(r)
        }
        if (i(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== r.length && r[0].type === vr.Descendant || (l(), r.push({
                type: vr.Descendant
              })), i(1);
              break;
            case 62:
              c(vr.Child), i(1);
              break;
            case 60:
              c(vr.Parent), i(1);
              break;
            case 126:
              c(vr.Sibling), i(1);
              break;
            case 43:
              c(vr.Adjacent), i(1);
              break;
            case 46:
              u("class", gr.Element);
              break;
            case 35:
              u("id", gr.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(n) ? e = o(1) : t.startsWith("*|", n) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (a = e, e = o(1))), i(0);
              let l = gr.Exists;
              const c = Pr.get(t.charCodeAt(n));
              if (c) {
                if (l = c, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(n) && (l = gr.Equals, i(1));
              let u = "",
                d = null;
              if ("exists" !== l) {
                if (Or(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || s(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  u = xr(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!Lr(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || s(n));) n += 1;
                  u = xr(t.slice(e, n))
                }
                i(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const f = {
                type: vr.Attribute,
                name: e,
                action: l,
                value: u,
                namespace: a,
                ignoreCase: d
              };
              r.push(f);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(n + 1)) {
                r.push({
                  type: vr.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (Cr.has(e)) {
                  if (Or(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = Nr(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = a(), Sr.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && Or(e) && (i = i.slice(1, -1))
                  }
                  i = xr(i)
                } r.push({
                type: vr.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              d(), r = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === r.length && i(0);
                break
              }
              let a, s = null;
              if (42 === e) n += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(n + 1)) {
                  c(vr.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!Er.test(t.slice(n))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (s = a, 42 === t.charCodeAt(n + 1) ? (a = "*", n += 2) : a = o(1)), r.push("*" === a ? {
                type: vr.Universal,
                namespace: s
              } : {
                type: vr.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), n
      }

      function Ar(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ar(Object(n), !0).forEach((function(t) {
            Mr(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Mr(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const Dr = function e(t) {
          return n.withOptions = n => e(Rr(Rr({}, t), n)), n;

          function n(e, ...n) {
            const r = "string" == typeof e ? [e] : e.raw,
              {
                escapeSpecialCharacters: o = Array.isArray(e)
              } = t;
            let i = "";
            for (let e = 0; e < r.length; e++) {
              let t = r[e];
              o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < n.length && (i += n[e])
            }
            const a = i.split("\n");
            let s = null;
            for (const e of a) {
              const t = e.match(/^(\s+)\S+/);
              if (t) {
                const e = t[1].length;
                s = s ? Math.min(s, e) : e
              }
            }
            if (null !== s) {
              const e = s;
              i = a.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
            }
            return i = i.trim(), o && (i = i.replace(/\\n/g, "\n")), i
          }
        }({}),
        jr = Dr;
      var Ir = function() {
        return Ir = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, Ir.apply(this, arguments)
      };

      function Hr(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function Br(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      var Fr, Ur = /(\u000D|\u000C|\u000D\u000A)/g,
        Vr = /[\u0000\uD800-\uDFFF]/g,
        zr = /(\/\*)[\s\S]*?(\*\/)/g,
        Gr = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === n) return [o, String.fromCharCode.apply(null, r)];
            if (92 === i) {
              var a = qr(e, o);
              if (null === a) return null;
              var s = Br(a, 2),
                l = s[0],
                c = s[1];
              r.push(c), o = l
            } else {
              if (10 === i) return null;
              r.push(i)
            }
          }
          return null
        },
        Kr = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        qr = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              r.push(a)
            }
            if (i < e.length) {
              var s = e.charCodeAt(i);
              9 !== s && 32 !== s && 10 !== s || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        Wr = function(e, t) {
          var n = $r(e, t);
          if (null === n) return null;
          var r = Br(n, 3),
            o = r[0],
            i = r[1],
            a = r[2],
            s = Yr(e, o + 1);
          if (null !== s) {
            var l = Br(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        $r = function(e, t) {
          if (e.length <= t) return null;
          var n = "integer",
            r = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && r.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (r.push(i, a), n = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) r.push(c), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (n = "number", l ? (r.push(69, a), t += 2) : 45 === a ? (r.push(69, 45, s), t += 3) : (r.push(69, s), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  r.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, r),
            d = "number" === n ? parseFloat(u) : parseInt(u);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, n]
        },
        Xr = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = qr(e, t);
              if (null === o) break;
              var i = Br(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        Yr = function(e, t) {
          if (e.length <= t || !Kr(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = qr(e, t);
              if (null === o) break;
              var i = Br(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        Zr = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], o = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) o || 0 === r.length || (o = !0);
            else if (92 === n) {
              var i = qr(e, t);
              if (null === i || o) return null;
              var a = Br(i, 2),
                s = a[0],
                l = a[1];
              r.push(l), t = s
            } else {
              if (o) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        Qr = function(e, t) {
          var n = Yr(e, t);
          if (null === n) return null;
          var r = Br(n, 2),
            o = r[0],
            i = r[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Zr(e, o + a);
                  if (null === l) return null;
                  var c = Br(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        Jr = function(e) {
          if (null === e.mediaCondition) return e;
          var t = eo(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        eo = function e(t) {
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var o = e(r);
              if (null === o.operator && 1 === o.children.length) t.children[n] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [n, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        to = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        no = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Ur, "\n").replace(Vr, "�")).replace(zr, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (S = Gr(e, t))) return null;
                var i = Br(S, 2),
                  a = i[0],
                  s = i[1];
                n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = Kr(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (S = Xr(e, t + 1))) {
                    var c = Br(S, 2);
                    a = c[0], s = c[1], n.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = a;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (S = Gr(e, t))) return null;
                var u = Br(S, 2);
                a = u[0], s = u[1], n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var d = Wr(e, t);
                if (null === d) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var f = Br(d, 2);
                  a = f[0], "<dimension-token>" === (P = f[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (y = Wr(e, t))) {
                  var h = Br(y, 2);
                  a = h[0], "<dimension-token>" === (P = h[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    m = e.charCodeAt(t + 2);
                  if (45 === p && 62 === m) {
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (S = Qr(e, t))) {
                  var v = Br(S, 3),
                    g = (a = v[0], s = v[1], v[2]);
                  n.push({
                    type: g,
                    value: s
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var y;
                if (null !== (y = Wr(e, t))) {
                  var b = Br(y, 2);
                  a = b[0], "<dimension-token>" === (P = b[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: P[1],
                    unit: P[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === P[0] ? n.push({
                    type: P[0],
                    value: P[1],
                    flag: P[2]
                  }) : n.push({
                    type: P[0],
                    value: P[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (58 === r) n.push({
                type: "<colon-token>"
              });
              else if (59 === r) n.push({
                type: "<semicolon-token>"
              });
              else if (60 === r) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), m = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === p && 45 === m && 45 === w) {
                    n.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (64 === r) {
                if (null !== (S = Yr(e, t + 1))) {
                  var E = Br(S, 2);
                  a = E[0], s = E[1], n.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (91 === r) n.push({
                type: "<[-token>"
              });
              else if (92 === r) {
                if (null === (S = qr(e, t))) return null;
                var _ = Br(S, 2);
                a = _[0], s = _[1], e = e.slice(0, t) + s + e.slice(a + 1), t -= 1
              } else if (93 === r) n.push({
                type: "<]-token>"
              });
              else if (123 === r) n.push({
                type: "<{-token>"
              });
              else if (125 === r) n.push({
                type: "<}-token>"
              });
              else if (r >= 48 && r <= 57) {
                var P, C = Br(S = Wr(e, t), 2);
                a = C[0], "<dimension-token>" === (P = C[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: P[1],
                  unit: P[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === P[0] ? n.push({
                  type: P[0],
                  value: P[1],
                  flag: P[2]
                }) : n.push({
                  type: P[0],
                  value: P[1],
                  flag: "number"
                }), t = a
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var S;
                if (null === (S = Qr(e, t))) return null;
                var T = Br(S, 3);
                a = T[0], s = T[1], g = T[2], n.push({
                  type: g,
                  value: s
                }), t = a
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw to("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw to("Expected whitespace after media");
            n = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                r = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw to("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), oo(t)
        },
        ro = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(Ir(Ir({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        oo = function(e) {
          for (var t, n, r = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? r.push([]) : r[r.length - 1].push(i)
          }
          var a = r.map(ro);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : io(e)
            })),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && r >= e.length && (e = void 0), {
                      value: e && e[r++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), u = c.next(); !u.done; u = c.next()) {
              var d = u.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (n = c.return) && n.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw to("No valid media queries");
          return l
        },
        io = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: ao(e, !0)
            }
          } catch (e) {
            throw to("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw to("Expected media condition or media prefix");
            var n = null,
              r = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (n = o);
            var i = null === n ? 0 : 1;
            if (e.length <= i) throw to("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) r = "all";
              else if ("print" === s || "screen" === s) r = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw to("Unknown ident '".concat(s, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== a.type) throw to("Invalid media query");
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
                  mediaCondition: ao(l, !0)
                }
              } catch (e) {
                throw to("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw to("Expected media condition after media prefix");
            var c = e[i + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw to("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: ao(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw to("Expected media condition after 'and'", e)
            }
          }
        },
        ao = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === c.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, i + 1);
          if (o = 1 === a ? so(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), i === t.length - 1) return {
            operator: r,
            children: [o]
          };
          var d = t[i + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== d.value) throw new Error("'".concat(d.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var f = e(t.slice(i + 2), n, d.value);
          return {
            operator: d.value,
            children: [o].concat(f.children)
          }
        },
        so = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                o = e[n + 1],
                i = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: i.value,
                  wsBefore: r.wsBefore,
                  wsAfter: i.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
          }
          var a = t[1];
          if ("<ident-token>" === a.type && 3 === t.length) return {
            context: "boolean",
            feature: a.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var s = t[3];
            if ("<number-token>" === s.type || "<dimension-token>" === s.type || "<ratio-token>" === s.type || "<ident-token>" === s.type) {
              var l = t[1].value,
                c = null,
                u = l.slice(0, 4);
              return "min-" === u ? (c = "min", l = l.slice(4)) : "max-" === u && (c = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: Hr(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = lo(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw to("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        lo = function(e) {
          var t, n, r, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var i = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            a = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = "<" : i[a ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = ">" : i[a ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              i[a ? "leftOp" : "rightOp"] = "="
            }
            if (a) i.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              i.featureName = e[1].value
            }
            var s = 2 + (null !== (n = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
              l = e[s];
            if (a) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (i.featureName = l.value, e.length >= 7) {
                var c = e[s + 1],
                  u = e[s + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var d = c.value;
                if (60 === d) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var f = e[s + 1 + (null !== (o = null === (r = i.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0)];
                i.rightToken = f
              } else if (s + 2 !== e.length) throw new Error("Invalid range")
            } else i.rightToken = l;
            var h = null,
              p = i.leftToken,
              m = i.leftOp,
              v = i.featureName,
              g = i.rightOp,
              y = i.rightToken,
              b = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var w = p.type;
                "infinite" === (_ = p.value) && (b = {
                  type: w,
                  value: _
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = Hr(p, ["wsBefore", "wsAfter"]));
            var E = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var _;
                w = y.type, "infinite" === (_ = y.value) && (E = {
                  type: w,
                  value: _
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, E = Hr(y, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== E)
              if ("<" !== m && "<=" !== m || "<" !== g && "<=" !== g) {
                if (">" !== m && ">=" !== m || ">" !== g && ">=" !== g) throw new Error("Invalid range");
                h = {
                  leftToken: b,
                  leftOp: m,
                  featureName: v,
                  rightOp: g,
                  rightToken: E
                }
              } else h = {
                leftToken: b,
                leftOp: m,
                featureName: v,
                rightOp: g,
                rightToken: E
              };
            else(null === b && null === m && null !== g && null !== E || null !== b && null !== m && null === g && null === E) && (h = {
              leftToken: b,
              leftOp: m,
              featureName: v,
              rightOp: g,
              rightToken: E
            });
            return h
          }
          throw new Error("Invalid range")
        };

      function co(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function uo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function fo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uo(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = co(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uo(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ho(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
          if (null == e) return {};
          var n, r, o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
      }

      function po(e, t) {
        for (var n in e) t(e[n], n)
      }

      function mo(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
      }
      class vo {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new vo
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var n of e) {
            var r = t.findOrCreateCondition(n);
            t = r.children
          }
          return t
        }
        addRule(e, t, n) {
          var r = this.getConditionalRulesetByPath(n).findOrCreateCondition(t);
          if (!r) throw new Error("Failed to add conditional rule");
          r.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var n = this.getConditionalRulesetByPath(e), r = 0; r < t.length; r++) {
            var o, i = t[r],
              a = null !== (o = n.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(r + 1)) a.add(s);
            n.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, n] of this.precedenceLookup.entries())
            for (var r of n) {
              var o;
              if (null !== (o = e.precedenceLookup.get(r)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: i,
              children: a
            }
            of e.ruleset.values()) {
            var s = this.ruleset.get(i);
            if (s && !s.children.isCompatible(a)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...n), o.children.merge(r)) : this.ruleset.set(t, {
              query: t,
              rules: n,
              children: r
            })
          }
          for (var [i, a] of e.precedenceLookup.entries()) {
            var s, l = null !== (s = this.precedenceLookup.get(i)) && void 0 !== s ? s : new Set;
            this.precedenceLookup.set(i, new Set([...l, ...a]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            n = function(n) {
              var o = e.ruleset.get(r);
              if (!o) throw new Error("Can't find condition for ".concat(r));
              var i = t.findIndex((e => n.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [r, o] of this.precedenceLookup.entries()) n(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of n) o[i.selector] = i.rule;
            Object.assign(o, ...r.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var go, yo = {
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
        bo = Object.keys(yo),
        wo = yo,
        Eo = (e, t) => new Error(jr(go || (go = wr(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        _o = e => {
          if ("@media " === e) throw Eo(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = Jr(e[t])
            })(no(e))
          } catch (t) {
            throw Eo(e, t.message)
          }
        },
        Po = ["vars"],
        Co = ["content"],
        So = "__DECLARATION",
        To = {
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

      function xo(e, t, n, r) {
        var o = e.slice(0, t),
          i = e.slice(n);
        return "".concat(o).concat(r).concat(i)
      }
      var Oo = [...bo, "@layer", "@media", "@supports", "@container", "selectors"];
      class Lo {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new vo], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new mr(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: n
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(n, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type) {
            if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
              var [t, n] = e;
              return [t, this.transformProperties(n)]
            }))), void this.keyframesRules.push(e);
            if (this.currConditionalRuleset = new vo, "layer" === e.type) {
              var t = "@layer ".concat(e.name);
              this.addLayer([t])
            } else {
              var n = mo(e.rule, Oo);
              this.addRule({
                selector: e.selector,
                rule: n
              }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
            }
            this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
          } else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var n = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: r,
            rule: n
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          this.rules.push({
            selector: n,
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
          return po(e, ((t, n) => {
            "number" != typeof t || 0 === t || To[n] || (e[n] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = ho(e, Po);
          return t ? fo(fo({}, function(e, t) {
            var n, r, o, i = {};
            for (var a in e) i[(e[a], n = a, r = void 0, o = void 0, (o = (r = n).match(/^var\((.*)\)$/)) ? o[1] : r)] = e[a];
            return i
          }(t)), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = ho(e, Co);
          return void 0 === t ? n : fo({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(pr()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (yr.length < 1) throw new Error("No adapter configured");
                  return yr[yr.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: r,
              regex: o
            }
            of this.composedClassLists) n(r);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, s = i.length - 1; s >= 0; s--) {
            var [l, [c]] = i[s], u = l - c.length + 1;
            u >= a || (a = u, "." !== t[u - 1] && (t = xo(t, u, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          po(t.selectors, ((t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var n, r = () => {
                var n = new RegExp(".".concat(pr()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(n, "&")
              };
              try {
                n = kr(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(r()))
              }
              n.forEach((e => {
                try {
                  for (var n = e.length - 1; n >= -1; n--) {
                    if (!e[n]) throw new Error;
                    var o = e[n];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(jr(Fr || (Fr = wr(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: mo(t, Oo)
            };
            n ? this.addConditionalRule(i, n) : this.addRule(i);
            var a = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(a, t["@layer"], n), this.transformSupports(a, t["@supports"], n), this.transformMedia(a, t["@media"], n)
          }))
        }
        transformMedia(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              _o(a);
              var s = [...r, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: mo(i, Oo)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@container ".concat(e)))), po(t, ((t, n) => {
            var o = "@container ".concat(n),
              i = [...r, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: mo(t, Oo)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@layer ".concat(e)))), po(t, ((t, n) => {
            var o = [...r, "@layer ".concat(n)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: mo(t, Oo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@supports ".concat(e)))), po(t, ((t, n) => {
            var o = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: mo(t, Oo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (wo[r]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              n ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              }, n) : this.addRule({
                conditions: n,
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(ko({
            "@font-face": t
          }));
          for (var n of this.keyframesRules) e.push(ko({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var r of this.layers.values()) {
            var [o, ...i] = r.reverse(), a = {
              [o]: So
            };
            for (var s of i) a = {
              [s]: a
            };
            e.push(ko(a))
          }
          for (var l of this.rules) e.push(ko({
            [l.selector]: l.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var u of c.renderToArray()) e.push(ko(u));
          return e.filter(Boolean)
        }
      }

      function ko(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = [],
          r = function(r) {
            var o, i = e[r];
            i && Array.isArray(i) ? n.push(...i.map((e => ko({
              [r]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || n.push("".concat(t).concat(r, " {\n").concat(ko(i, t + "  "), "\n").concat(t, "}")) : i === So ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (o = r, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) r(o);
        return n.join("\n")
      }
      n(17132);
      var No = new Set,
        Ao = [],
        Ro = [],
        Mo = {
          appendCss: e => {
            Ro.push(e)
          },
          registerClassName: e => {
            No.add(e)
          },
          registerComposition: e => {
            Ao.push(e)
          },
          markCompositionUsed: () => {},
          onEndFileScope: e => {
            var t = function(e) {
              var {
                localClassNames: t,
                cssObjs: n,
                composedClassLists: r
              } = e, o = new Lo(t, r);
              for (var i of n) o.processCssObj(i);
              return o.toCss()
            }({
              localClassNames: Array.from(No),
              composedClassLists: Ao,
              cssObjs: Ro
            }).join("\n");
            (e => {
              var {
                fileScope: t,
                css: n
              } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = fr[r];
              if (!o) {
                var i = document.createElement("style");
                t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = fr[r] = i, document.head.appendChild(i)
              }
              o.innerHTML = n
            })({
              fileScope: e,
              css: t
            }), Ro = []
          },
          getIdentOption: () => "short"
        };
      br || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        br = !0, yr.push(e)
      })(Mo);
      var Do = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        jo = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Io = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        Ho = "--foundry_nu8bkp0",
        Bo = "foundry_nu8bkp1";
      const Fo = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: jo,
          platformScaleBreakpoints: Do,
          locale: "en-US"
        }),
        Uo = () => (0, s.useContext)(Fo),
        Vo = (e, t) => {
          const n = "more" === t ? Io.lightHc : Io.light,
            r = "more" === t ? Io.darkHc : Io.dark;
          return "dark" === e ? r : n
        };
      const zo = () => a.X3 ? null : document.body;
      (0, s.forwardRef)((({
        children: e,
        className: t,
        container: n = zo(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: l,
        contrastMode: c,
        defaultContrastMode: u,
        platformScaleBreakpoints: d,
        platformScaleRatios: h,
        defaultPlatformScale: p,
        platformScale: m,
        locale: v = "en-US"
      }, g) => {
        const y = (0, s.useRef)(null),
          b = St(y, g),
          w = (0, s.useRef)(n),
          {
            ratio: E,
            scale: _
          } = function(e) {
            const t = (0, s.useMemo)((() => ({
                ...jo,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, s.useMemo)((() => ({
                ...Do,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
              i = (0, s.useRef)([]),
              l = () => {
                if (!a.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of i.current) t.removeEventListener("change", e);
                  i.current = []
                }
              };
            return (0, s.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!a.X3) {
                l();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), i.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), l)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: d,
            platformScaleRatios: h,
            defaultPlatformScale: p,
            platformScale: m
          }),
          {
            appearanceClass: P,
            otherAppearanceClasses: C,
            providerColor: S,
            providerContrast: T
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = Pt("(prefers-color-scheme: light)"),
              i = Pt("(prefers-color-scheme: dark)"),
              a = Pt("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || i && "dark" || t,
              c = n || a && "more" || r,
              u = (0, s.useMemo)((() => Vo(l, c)), [l, c]),
              d = (0, s.useMemo)((() => ((e, t) => {
                const n = Vo(e, t);
                return [Io.light, Io.dark, Io.lightHc, Io.darkHc].filter((e => e !== n))
              })(l, c)), [l, c]);
            return {
              appearanceClass: u,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: l,
            contrastMode: c,
            defaultContrastMode: u
          });
        return ((e, t, n, r, o) => {
          const i = Ct(o),
            a = Ct(e.current);
          (0, s.useEffect)((() => {
            e.current?.classList.contains(Bo) || e.current?.classList.add(Bo), e.current?.classList.add(n), e.current?.classList.remove(...r), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [n, o]), (0, s.useEffect)((() => {
            e.current?.style.setProperty(Ho, t.toString())
          }), [t]), (0, s.useEffect)((() => {
            a?.classList.remove(Bo), a?.classList.remove(n), a?.style.removeProperty(Ho), o && a?.classList.remove(o)
          }), [a])
        })(r ? y : w, E, P, C, t), (0, i.jsx)(Fo.Provider, {
          value: {
            locale: v,
            defaultColorScheme: l,
            colorScheme: S,
            defaultContrastMode: u,
            contrastMode: T,
            defaultPlatformScale: p,
            platformScale: _,
            platformScaleRatios: h,
            platformScaleBreakpoints: d
          },
          children: r ? (0, i.jsx)(f, {
            ref: b,
            children: e
          }) : e
        })
      }));
      const Go = {
        toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
        add: (e, t) => [e[0] + t[0], e[1] + t[1]],
        sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
        addTo(e, t) {
          e[0] += t[0], e[1] += t[1]
        },
        subTo(e, t) {
          e[0] -= t[0], e[1] -= t[1]
        }
      };

      function Ko(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function qo(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Ko(t - e, n - t, r) + t : e > n ? +Ko(e - n, n - t, r) + n : e
      }

      function Wo(e, t, n) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function $o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Xo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $o(Object(n), !0).forEach((function(t) {
            Wo(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $o(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const Yo = {
        pointer: {
          start: "down",
          change: "move",
          end: "up"
        },
        mouse: {
          start: "down",
          change: "move",
          end: "up"
        },
        touch: {
          start: "start",
          change: "move",
          end: "end"
        },
        gesture: {
          start: "start",
          change: "change",
          end: "end"
        }
      };

      function Zo(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Qo = ["enter", "leave"];
      const Jo = ["gotpointercapture", "lostpointercapture"];

      function ei(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = Jo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function ti(e) {
        return "touches" in e
      }

      function ni(e) {
        return ti(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function ri(e) {
        return ti(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function oi(e, t) {
        try {
          const n = t.clientX - e.clientX,
            r = t.clientY - e.clientY,
            o = (t.clientX + e.clientX) / 2,
            i = (t.clientY + e.clientY) / 2,
            a = Math.hypot(n, r);
          return {
            angle: -180 * Math.atan2(n, r) / Math.PI,
            distance: a,
            origin: [o, i]
          }
        } catch (e) {}
        return null
      }

      function ii(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return oi(n, r)
      }

      function ai(e) {
        const t = ri(e);
        return ti(e) ? t.identifier : t.pointerId
      }

      function si(e) {
        const t = ri(e);
        return [t.clientX, t.clientY]
      }

      function li(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function ci(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function ui() {}

      function di() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? ui : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function fi(e, t) {
        return Object.assign({}, t, e || {})
      }
      class hi {
        constructor(e, t, n) {
          this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
        }
        get state() {
          return this.ctrl.state[this.key]
        }
        set state(e) {
          this.ctrl.state[this.key] = e
        }
        get shared() {
          return this.ctrl.state.shared
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key]
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key]
        }
        get config() {
          return this.ctrl.config[this.key]
        }
        get sharedConfig() {
          return this.ctrl.config.shared
        }
        get handler() {
          return this.ctrl.handlers[this.key]
        }
        reset() {
          const {
            state: e,
            shared: t,
            ingKey: n,
            args: r
          } = this;
          t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ], e.args = r, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
        }
        start(e) {
          const t = this.state,
            n = this.config;
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? ci(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
        }
        computeValues(e) {
          const t = this.state;
          t._values = e, t.values = this.config.transform(e)
        }
        computeInitial() {
          const e = this.state;
          e._initial = e._values, e.initial = e.values
        }
        compute(e) {
          const {
            state: t,
            config: n,
            shared: r
          } = this;
          t.args = this.args;
          let o = 0;
          if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, r.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, r.locked = !!document.pointerLockElement, Object.assign(r, function(e) {
              const t = {};
              if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                const {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                } = e;
                Object.assign(t, {
                  shiftKey: n,
                  altKey: r,
                  metaKey: o,
                  ctrlKey: i
                })
              }
              return t
            }(e)), r.down = r.pressed = r.buttons % 2 == 1 || r.touches > 0, o = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            Go.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = n.threshold, {
            _step: c,
            values: u
          } = t;
          if (n.hasCustomTransform ? (!1 === c[0] && (c[0] = Math.abs(i) >= s && u[0]), !1 === c[1] && (c[1] = Math.abs(a) >= l && u[1])) : (!1 === c[0] && (c[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === c[1] && (c[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== c[0] || !1 !== c[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== c[0] ? e - c[0] : 0, d[1] = !1 !== c[1] ? t - c[1] : 0
          } else d[0] = !1 !== c[0] ? i - c[0] : 0, d[1] = !1 !== c[1] ? a - c[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = ci(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
          const [p, m] = t.offset, [
            [v, g],
            [y, b]
          ] = t._bounds;
          t.overflow = [p < v ? -1 : p > g ? 1 : 0, m < y ? -1 : m > b ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
          const w = t._active && n.rubberband || [0, 0];
          if (t.offset = function(e, t, n) {
              let [r, o] = t, [i, a] = n;
              const [
                [s, l],
                [c, u]
              ] = e;
              return [qo(r, s, l, i), qo(o, c, u, a)]
            }(t._bounds, t.offset, w), t.delta = Go.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = Go.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Go.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(Xo(Xo(Xo({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class pi extends hi {
        constructor() {
          super(...arguments), Wo(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Go.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Go.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[ni(e)] : n.axisThreshold;
            t.axis = function(e, t) {
              let [n, r] = e;
              const o = Math.abs(n),
                i = Math.abs(r);
              return o > i && o > t ? "x" : i > o && i > t ? "y" : void 0
            }(t._movement, r)
          }
          t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
              e[1] = 0;
              break;
            case "y":
              e[0] = 0
          }
        }
      }
      const mi = e => e,
        vi = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => Xo(Xo({}, n.shared.eventOptions), e),
          preventDefault() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          triggerAllEvents() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          },
          rubberband() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return [.15, .15];
              case !1:
                return [0, 0];
              default:
                return Go.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Go.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || mi
          },
          threshold: e => Go.toVector(e, 0)
        },
        gi = Xo(Xo({}, vi), {}, {
          axis(e, t, n) {
            let {
              axis: r
            } = n;
            if (this.lockDirection = "lock" === r, !this.lockDirection) return r
          },
          axisThreshold() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          },
          bounds() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("function" == typeof e) return t => gi.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
              left: t = -1 / 0,
              right: n = 1 / 0,
              top: r = -1 / 0,
              bottom: o = 1 / 0
            } = e;
            return [
              [t, n],
              [r, o]
            ]
          }
        }),
        yi = {
          ArrowRight: function(e) {
            return [e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowLeft: function(e) {
            return [-1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1), 0]
          },
          ArrowUp: function(e) {
            return [0, -1 * e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          },
          ArrowDown: function(e) {
            return [0, e * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)]
          }
        },
        bi = "undefined" != typeof window && window.document && window.document.createElement;

      function wi() {
        return bi && "ontouchstart" in window
      }
      const Ei = {
          isBrowser: bi,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: wi(),
          touchscreen: wi() || bi && window.navigator.maxTouchPoints > 1,
          pointer: bi && "onpointerdown" in window,
          pointerLock: bi && "exitPointerLock" in window.document
        },
        _i = .5,
        Pi = 50,
        Ci = 250,
        Si = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Ti = Xo(Xo({}, gi), {}, {
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && Ei.pointerLock, Ei.touch && r ? "touch" : this.pointerLock ? "mouse" : Ei.pointer && !i ? "pointer" : Ei.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Ei.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
          },
          pointerCapture(e, t, n) {
            let {
              pointer: {
                capture: r = !0,
                buttons: o = 1,
                keys: i = !0
              } = {}
            } = n;
            return this.pointerButtons = o, this.keys = i, !this.pointerLock && "pointer" === this.device && r
          },
          threshold(e, t, n) {
            let {
              filterTaps: r = !1,
              tapsThreshold: o = 3,
              axis: i
            } = n;
            const a = Go.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = _i,
              distance: t = Pi,
              duration: n = Ci
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(Go.toVector(e)),
              distance: this.transform(Go.toVector(t)),
              duration: n
            }
          },
          delay() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            switch (e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          },
          axisThreshold: e => e ? Xo(Xo({}, Si), e) : Si,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function xi(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Oi = Xo(Xo({}, vi), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !Ei.touch && Ei.gesture) return "gesture";
            if (Ei.touch && o) return "touch";
            if (Ei.touchscreen) {
              if (Ei.pointer) return "pointer";
              if (Ei.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = fi(ci(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = fi(ci(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Go.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Li = Xo(Xo({}, gi), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        ki = gi,
        Ni = gi,
        Ai = Xo(Xo({}, gi), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Ri = new Map,
        Mi = new Map;

      function Di(e) {
        Ri.set(e.key, e.engine), Mi.set(e.key, e.resolver)
      }
      const ji = {
          key: "drag",
          engine: class extends pi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "dragging")
            }
            reset() {
              super.reset();
              const e = this.state;
              e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
            }
            setup() {
              const e = this.state;
              if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                  n = e.currentTarget.getBoundingClientRect(),
                  r = {
                    left: t.left - n.left + e.offset[0],
                    right: t.right - n.right + e.offset[0],
                    top: t.top - n.top + e.offset[1],
                    bottom: t.bottom - n.bottom + e.offset[1]
                  };
                e._bounds = gi.bounds(r)
              }
            }
            cancel() {
              const e = this.state;
              e.canceled || (e.canceled = !0, e._active = !1, setTimeout((() => {
                this.compute(), this.emit()
              }), 0))
            }
            setActive() {
              this.state._active = this.state._pointerActive || this.state._keyboardActive
            }
            clean() {
              this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
            }
            pointerDown(e) {
              const t = this.config,
                n = this.state;
              if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
              const r = this.ctrl.setEventIds(e);
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = ai(e), n._pointerActive = !0, this.computeValues(si(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== ni(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = ai(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = si(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Go.sub(o, t._values), this.computeValues(o)), Go.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = ai(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [a, s] = n.swipe.velocity, [l, c] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                  const n = Math.abs(e / t.timeDelta),
                    u = Math.abs(r / t.timeDelta);
                  n > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), u > s && Math.abs(i) > c && (t.swipe[1] = Math.sign(r))
                }
              }
              this.emit()
            }
            pointerClick(e) {
              !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }
            setupPointer(e) {
              const t = this.config,
                n = t.device;
              t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
            }
            pointerClean() {
              this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
            }
            preventScroll(e) {
              this.state._preventScroll && e.cancelable && e.preventDefault()
            }
            setupScrollPrevention(e) {
              this.state._preventScroll = !1,
                function(e) {
                  "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
              const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
              });
              this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
            }
            setupDelayTrigger(e) {
              this.state._delayed = !0, this.timeoutStore.add("dragDelay", (() => {
                this.state._step = [0, 0], this.startPointerDrag(e)
              }), this.config.delay)
            }
            keyDown(e) {
              const t = yi[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Go.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in yi && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Ti
        },
        Ii = {
          key: "hover",
          engine: class extends pi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(si(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = si(e);
              t._movement = t._delta = Go.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Ai
        },
        Hi = {
          key: "move",
          engine: class extends pi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(si(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = si(e),
                n = this.state;
              n._delta = Go.sub(t, n._values), Go.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Li
        },
        Bi = {
          key: "pinch",
          engine: class extends hi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "pinching"), Wo(this, "aliasKey", "da")
            }
            init() {
              this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = new Map
            }
            reset() {
              super.reset();
              const e = this.state;
              e._touchIds = [], e.canceled = !1, e.cancel = this.cancel.bind(this), e.turns = 0
            }
            computeOffset() {
              const {
                type: e,
                movement: t,
                lastOffset: n
              } = this.state;
              this.state.offset = "wheel" === e ? Go.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
            }
            computeMovement() {
              const {
                offset: e,
                lastOffset: t
              } = this.state;
              this.state.movement = [e[0] / t[0], e[1] - t[1]]
            }
            axisIntent() {
              const e = this.state,
                [t, n] = e._movement;
              if (!e.axis) {
                const r = 30 * Math.abs(t) - Math.abs(n);
                r < 0 ? e.axis = "angle" : r > 0 && (e.axis = "scale")
              }
            }
            restrictToAxis(e) {
              this.config.lockDirection && ("scale" === this.state.axis ? e[1] = 0 : "angle" === this.state.axis && (e[0] = 0))
            }
            cancel() {
              const e = this.state;
              e.canceled || setTimeout((() => {
                e.canceled = !0, e._active = !1, this.compute(), this.emit()
              }), 0)
            }
            touchStart(e) {
              this.ctrl.setEventIds(e);
              const t = this.state,
                n = this.ctrl.touchIds;
              if (t._active && t._touchIds.every((e => n.has(e)))) return;
              if (n.size < 2) return;
              this.start(e), t._touchIds = Array.from(n).slice(0, 2);
              const r = ii(e, t._touchIds);
              r && this.pinchStart(e, r)
            }
            pointerStart(e) {
              if (null != e.buttons && e.buttons % 2 != 1) return;
              this.ctrl.setEventIds(e), e.target.setPointerCapture(e.pointerId);
              const t = this.state,
                n = t._pointerEvents,
                r = this.ctrl.pointerIds;
              if (t._active && Array.from(n.keys()).every((e => r.has(e)))) return;
              if (n.size < 2 && n.set(e.pointerId, e), t._pointerEvents.size < 2) return;
              this.start(e);
              const o = oi(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = ii(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = oi(...Array.from(t.values()));
              n && this.pinchMove(e, n)
            }
            pinchMove(e, t) {
              const n = this.state,
                r = n._values[1],
                o = t.angle - r;
              let i = 0;
              Math.abs(o) > 270 && (i += Math.sign(o)), this.computeValues([t.distance, t.angle - 360 * i]), n.origin = t.origin, n.turns = i, n._movement = [n._values[0] / n._initial[0] - 1, n._values[1] - n._initial[1]], this.compute(e), this.emit()
            }
            touchEnd(e) {
              this.ctrl.setEventIds(e), this.state._active && this.state._touchIds.some((e => !this.ctrl.touchIds.has(e))) && (this.state._active = !1, this.compute(e), this.emit())
            }
            pointerEnd(e) {
              const t = this.state;
              this.ctrl.setEventIds(e);
              try {
                e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              t._pointerEvents.has(e.pointerId) && t._pointerEvents.delete(e.pointerId), t._active && t._pointerEvents.size < 2 && (t._active = !1, this.compute(e), this.emit())
            }
            gestureStart(e) {
              e.cancelable && e.preventDefault();
              const t = this.state;
              t._active || (this.start(e), this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY], this.compute(e), this.emit())
            }
            gestureMove(e) {
              if (e.cancelable && e.preventDefault(), !this.state._active) return;
              const t = this.state;
              this.computeValues([e.scale, e.rotation]), t.origin = [e.clientX, e.clientY];
              const n = t._movement;
              t._movement = [e.scale - 1, e.rotation], t._delta = Go.sub(t._movement, n), this.compute(e), this.emit()
            }
            gestureEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            wheel(e) {
              const t = this.config.modifierKey;
              t && !(Array.isArray(t) ? t.find((t => e[t])) : e[t]) || (this.state._active ? this.wheelChange(e) : this.wheelStart(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)))
            }
            wheelStart(e) {
              this.start(e), this.wheelChange(e)
            }
            wheelChange(e) {
              "uv" in e || e.cancelable && e.preventDefault();
              const t = this.state;
              t._delta = [-li(e)[1] / 100 * t.offset[0], 0], Go.addTo(t._movement, t._delta), xi(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              t && (e(t, "start", this[t + "Start"].bind(this)), e(t, "change", this[t + "Move"].bind(this)), e(t, "end", this[t + "End"].bind(this)), e(t, "cancel", this[t + "End"].bind(this)), e("lostPointerCapture", "", this[t + "End"].bind(this))), this.config.pinchOnWheel && e("wheel", "", this.wheel.bind(this), {
                passive: !1
              })
            }
          },
          resolver: Oi
        },
        Fi = {
          key: "scroll",
          engine: class extends pi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "scrolling")
            }
            scroll(e) {
              this.state._active || this.start(e), this.scrollChange(e), this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this))
            }
            scrollChange(e) {
              e.cancelable && e.preventDefault();
              const t = this.state,
                n = function(e) {
                  var t, n;
                  const {
                    scrollX: r,
                    scrollY: o,
                    scrollLeft: i,
                    scrollTop: a
                  } = e.currentTarget;
                  return [null !== (t = null != r ? r : i) && void 0 !== t ? t : 0, null !== (n = null != o ? o : a) && void 0 !== n ? n : 0]
                }(e);
              t._delta = Go.sub(n, t._values), Go.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: ki
        },
        Ui = {
          key: "wheel",
          engine: class extends pi {
            constructor() {
              super(...arguments), Wo(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = li(e), Go.addTo(t._movement, t._delta), xi(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Ni
        };
      const Vi = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ei.isBrowser ? window : void 0
          },
          eventOptions() {
            let {
              passive: e = !0,
              capture: t = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              passive: e,
              capture: t
            }
          },
          transform: e => e
        },
        zi = ["target", "eventOptions", "window", "enabled", "transform"];

      function Gi() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = Gi(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Ki {
        constructor(e, t) {
          Wo(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const n = Yo[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = Xo(Xo({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
          e.addEventListener(a, r, s);
          const l = () => {
            e.removeEventListener(a, r, s), i.delete(l)
          };
          return i.add(l), l
        }
        clean() {
          this._listeners.forEach((e => e())), this._listeners.clear()
        }
      }
      class qi {
        constructor() {
          Wo(this, "_timeouts", new Map)
        }
        add(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 140;
          this.remove(e);
          for (var r = arguments.length, o = new Array(r > 3 ? r - 3 : 0), i = 3; i < r; i++) o[i - 3] = arguments[i];
          this._timeouts.set(e, window.setTimeout(t, n, ...o))
        }
        remove(e) {
          const t = this._timeouts.get(e);
          t && window.clearTimeout(t)
        }
        clean() {
          this._timeouts.forEach((e => {
            window.clearTimeout(e)
          })), this._timeouts.clear()
        }
      }
      class Wi {
        constructor(e) {
          var t, n;
          Wo(this, "gestures", new Set), Wo(this, "_targetEventStore", new Ki(this)), Wo(this, "gestureEventStores", {}), Wo(this, "gestureTimeoutStores", {}), Wo(this, "handlers", {}), Wo(this, "config", {}), Wo(this, "pointerIds", new Set), Wo(this, "touchIds", new Set), Wo(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && $i(t, "drag"), n.wheel && $i(t, "wheel"), n.scroll && $i(t, "scroll"), n.move && $i(t, "move"), n.pinch && $i(t, "pinch"), n.hover && $i(t, "hover")
        }
        setEventIds(e) {
          return ti(e) ? (this.touchIds = new Set(function(e) {
            return function(e) {
              return Array.from(e.touches).filter((t => {
                var n, r;
                return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (r = n.contains) || void 0 === r ? void 0 : r.call(n, t.target))
              }))
            }(e).map((e => e.identifier))
          }(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
        }
        applyHandlers(e, t) {
          this.handlers = e, this.nativeHandlers = t
        }
        applyConfig(e, t) {
          this.config = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const r = e,
              {
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              } = r,
              c = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = {},
                    i = Object.keys(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                  return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
              }(r, zi);
            if (n.shared = Gi({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, Vi), t) {
              const e = Mi.get(t);
              n[t] = Gi(Xo({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Mi.get(e);
                t && (n[e] = Gi(Xo({
                  shared: n.shared
                }, c[e]), t))
              }
            return n
          }(e, t, this.config)
        }
        clean() {
          this._targetEventStore.clean();
          for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
        }
        effect() {
          return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
        }
        bind() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          const r = this.config.shared,
            o = {};
          let i;
          if (!r.target || (i = r.target(), i)) {
            if (r.enabled) {
              for (const e of this.gestures) {
                const n = this.config[e],
                  r = Xi(o, n.eventOptions, !!i);
                n.enabled && new(Ri.get(e))(this, t, e).bind(r)
              }
              const e = Xi(o, r.eventOptions, !!i);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n](Xo(Xo({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = di(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = ei(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: n,
                passive: r
              })
            }
          }
        }
      }

      function $i(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Ki(e, t), e.gestureTimeoutStores[t] = new qi
      }
      const Xi = (e, t, n) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let f = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = Yo[e],
              o = r && r[t] || t;
            return "on" + Zo(e) + Zo(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !Qo.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Yi = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Zi(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Ri.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function Qi(e, t) {
        const n = ([ji, Bi, Fi, Ui, Hi, Ii].forEach(Di), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) Yi.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return Zi(o, n, "onDrag", "drag", i, t), Zi(o, n, "onWheel", "wheel", i, t), Zi(o, n, "onScroll", "scroll", i, t), Zi(o, n, "onPinch", "pinch", i, t), Zi(o, n, "onMove", "move", i, t), Zi(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = c().useMemo((() => new Wi(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), c().useEffect(o.effect.bind(o)), c().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var Ji = ma(),
        ea = e => da(e, Ji),
        ta = ma();
      ea.write = e => da(e, ta);
      var na = ma();
      ea.onStart = e => da(e, na);
      var ra = ma();
      ea.onFrame = e => da(e, ra);
      var oa = ma();
      ea.onFinish = e => da(e, oa);
      var ia = [];
      ea.setTimeout = (e, t) => {
        const n = ea.now() + t,
          r = () => {
            const e = ia.findIndex((e => e.cancel == r));
            ~e && ia.splice(e, 1), ca -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return ia.splice(aa(n), 0, o), ca += 1, fa(), o
      };
      var aa = e => ~(~ia.findIndex((t => t.time > e)) || ~ia.length);
      ea.cancel = e => {
        na.delete(e), ra.delete(e), oa.delete(e), Ji.delete(e), ta.delete(e)
      }, ea.sync = e => {
        ua = !0, ea.batchedUpdates(e), ua = !1
      }, ea.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, ea.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          na.delete(n), t = null
        }, r
      };
      var sa = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      ea.use = e => sa = e, ea.now = "undefined" != typeof performance ? () => performance.now() : Date.now, ea.batchedUpdates = e => e(), ea.catch = console.error, ea.frameLoop = "always", ea.advance = () => {
        "demand" !== ea.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : pa()
      };
      var la = -1,
        ca = 0,
        ua = !1;

      function da(e, t) {
        ua ? (t.delete(e), e(0)) : (t.add(e), fa())
      }

      function fa() {
        la < 0 && (la = 0, "demand" !== ea.frameLoop && sa(ha))
      }

      function ha() {
        ~la && (sa(ha), ea.batchedUpdates(pa))
      }

      function pa() {
        const e = la;
        la = ea.now();
        const t = aa(la);
        t && (va(ia.splice(0, t), (e => e.handler())), ca -= t), ca ? (na.flush(), Ji.flush(e ? Math.min(64, la - e) : 16.667), ra.flush(), ta.flush(), oa.flush()) : la = -1
      }

      function ma() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            ca += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (ca -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, ca -= t.size, va(t, (t => t(n) && e.add(t))), ca += e.size, t = e)
          }
        }
      }

      function va(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            ea.catch(e)
          }
        }))
      }
      var ga = Object.defineProperty,
        ya = {};

      function ba() {}((e, t) => {
        for (var n in t) ga(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(ya, {
        assign: () => Ra,
        colors: () => ka,
        createStringInterpolator: () => Ta,
        skipAnimation: () => Na,
        to: () => xa,
        willAdvance: () => Aa
      });
      var wa = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Ea(e, t) {
        if (wa.arr(e)) {
          if (!wa.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var _a = (e, t) => e.forEach(t);

      function Pa(e, t, n) {
        if (wa.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var Ca = e => wa.und(e) ? [] : wa.arr(e) ? e : [e];

      function Sa(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), _a(n, t)
        }
      }
      var Ta, xa, Oa = (e, ...t) => Sa(e, (e => e(...t))),
        La = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ka = null,
        Na = !1,
        Aa = ba,
        Ra = e => {
          e.to && (xa = e.to), e.now && (ea.now = e.now), void 0 !== e.colors && (ka = e.colors), null != e.skipAnimation && (Na = e.skipAnimation), e.createStringInterpolator && (Ta = e.createStringInterpolator), e.requestAnimationFrame && ea.use(e.requestAnimationFrame), e.batchedUpdates && (ea.batchedUpdates = e.batchedUpdates), e.willAdvance && (Aa = e.willAdvance), e.frameLoop && (ea.frameLoop = e.frameLoop)
        },
        Ma = new Set,
        Da = [],
        ja = [],
        Ia = 0,
        Ha = {
          get idle() {
            return !Ma.size && !Da.length
          },
          start(e) {
            Ia > e.priority ? (Ma.add(e), ea.onStart(Ba)) : (Fa(e), ea(Va))
          },
          advance: Va,
          sort(e) {
            if (Ia) ea.onFrame((() => Ha.sort(e)));
            else {
              const t = Da.indexOf(e);
              ~t && (Da.splice(t, 1), Ua(e))
            }
          },
          clear() {
            Da = [], Ma.clear()
          }
        };

      function Ba() {
        Ma.forEach(Fa), Ma.clear(), ea(Va)
      }

      function Fa(e) {
        Da.includes(e) || Ua(e)
      }

      function Ua(e) {
        Da.splice(function(t, n) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(Da), 0, e)
      }

      function Va(e) {
        const t = ja;
        for (let n = 0; n < Da.length; n++) {
          const r = Da[n];
          Ia = r.priority, r.idle || (Aa(r), r.advance(e), r.idle || t.push(r))
        }
        return Ia = 0, (ja = Da).length = 0, (Da = t).length > 0
      }
      var za = {
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
        Ga = "[-+]?\\d*\\.?\\d+",
        Ka = Ga + "%";

      function qa(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Wa = new RegExp("rgb" + qa(Ga, Ga, Ga)),
        $a = new RegExp("rgba" + qa(Ga, Ga, Ga, Ga)),
        Xa = new RegExp("hsl" + qa(Ga, Ka, Ka)),
        Ya = new RegExp("hsla" + qa(Ga, Ka, Ka, Ga)),
        Za = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Qa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ja = /^#([0-9a-fA-F]{6})$/,
        es = /^#([0-9a-fA-F]{8})$/;

      function ts(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function ns(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ts(o, r, e + 1 / 3),
          a = ts(o, r, e),
          s = ts(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function rs(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function os(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function is(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function as(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function ss(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ja.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ka && void 0 !== ka[e] ? ka[e] : (t = Wa.exec(e)) ? (rs(t[1]) << 24 | rs(t[2]) << 16 | rs(t[3]) << 8 | 255) >>> 0 : (t = $a.exec(e)) ? (rs(t[1]) << 24 | rs(t[2]) << 16 | rs(t[3]) << 8 | is(t[4])) >>> 0 : (t = Za.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = es.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Qa.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Xa.exec(e)) ? (255 | ns(os(t[1]), as(t[2]), as(t[3]))) >>> 0 : (t = Ya.exec(e)) ? (ns(os(t[1]), as(t[2]), as(t[3])) | is(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var ls = (e, t, n) => {
          if (wa.fun(e)) return e;
          if (wa.arr(e)) return ls({
            range: e,
            output: t,
            extrapolate: n
          });
          if (wa.str(e.output[0])) return Ta(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, a, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > n) {
                if ("identity" === s) return c;
                "clamp" === s && (c = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), r === -1 / 0 ? c = -c : o === 1 / 0 ? c += r : c = c * (o - r) + r, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        cs = 1.70158,
        us = 1.525 * cs,
        ds = cs + 1,
        fs = 2 * Math.PI / 3,
        hs = 2 * Math.PI / 4.5,
        ps = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        ms = {
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
          easeInBack: e => ds * e * e * e - cs * e * e,
          easeOutBack: e => 1 + ds * Math.pow(e - 1, 3) + cs * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - us) / 2 : (Math.pow(2 * e - 2, 2) * ((us + 1) * (2 * e - 2) + us) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * fs),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * fs) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * hs) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * hs) / 2 + 1,
          easeInBounce: e => 1 - ps(1 - e),
          easeOutBounce: ps,
          easeInOutBounce: e => e < .5 ? (1 - ps(1 - 2 * e)) / 2 : (1 + ps(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        vs = Symbol.for("FluidValue.get"),
        gs = Symbol.for("FluidValue.observers"),
        ys = e => Boolean(e && e[vs]),
        bs = e => e && e[vs] ? e[vs]() : e,
        ws = e => e[gs] || null;

      function Es(e, t) {
        const n = e[gs];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var _s = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ps(this, e)
          }
        },
        Ps = (e, t) => xs(e, vs, t);

      function Cs(e, t) {
        if (e[vs]) {
          let n = e[gs];
          n || xs(e, gs, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Ss(e, t) {
        const n = e[gs];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[gs] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Ts, xs = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Os = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ls = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ks = new RegExp(`(${Os.source})(%|[a-z]+)`, "i"),
        Ns = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        As = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Rs = e => {
          const [t, n] = Ms(e);
          if (!t || La()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && As.test(n) ? Rs(n) : n || e
        },
        Ms = e => {
          const t = As.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Ds = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        js = e => {
          Ts || (Ts = ka ? new RegExp(`(${Object.keys(ka).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => bs(e).replace(As, Rs).replace(Ls, ss).replace(Ts, ss))),
            n = t.map((e => e.match(Os).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => ls({
              ...e,
              output: t
            })));
          return e => {
            const n = !ks.test(t[0]) && t.find((e => ks.test(e)))?.replace(Os, "");
            let o = 0;
            return t[0].replace(Os, (() => `${r[o++](e)}${n||""}`)).replace(Ns, Ds)
          }
        },
        Is = "react-spring: ",
        Hs = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Is}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Bs = Hs(console.warn),
        Fs = Hs(console.warn);

      function Us(e) {
        return wa.str(e) && ("#" == e[0] || /\d/.test(e) || !La() && As.test(e) || e in (ka || {}))
      }
      var Vs = La() ? s.useEffect : s.useLayoutEffect,
        zs = () => {
          const e = (0, s.useRef)(!1);
          return Vs((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Gs() {
        const e = (0, s.useState)()[1],
          t = zs();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ks = e => (0, s.useEffect)(e, qs),
        qs = [];

      function Ws(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var $s = Symbol.for("Animated:node"),
        Xs = e => e && e[$s],
        Ys = (e, t) => {
          return n = e, r = $s, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        Zs = e => e && e[$s] && e[$s].getPayload(),
        Qs = class {
          constructor() {
            Ys(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Js = class extends Qs {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, wa.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Js(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return wa.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, wa.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        el = class extends Js {
          constructor(e) {
            super(0), this._string = null, this._toString = ls({
              output: [e, e]
            })
          }
          static create(e) {
            return new el(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (wa.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = ls({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        tl = {
          dependencies: null
        },
        nl = class extends Qs {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Pa(this.source, ((n, r) => {
              var o;
              (o = n) && o[$s] === o ? t[r] = n.getValue(e) : ys(n) ? t[r] = bs(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && _a(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Pa(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            tl.dependencies && ys(e) && tl.dependencies.add(e);
            const t = Zs(e);
            t && _a(t, (e => this.add(e)))
          }
        },
        rl = class extends nl {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new rl(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(ol)), !0)
          }
        };

      function ol(e) {
        return (Us(e) ? el : Js).create(e)
      }

      function il(e) {
        const t = Xs(e);
        return t ? t.constructor : wa.arr(e) ? rl : Us(e) ? el : Js
      }
      var al = (e, t) => {
          const n = !wa.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = n && (0, s.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (wa.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, c] = function(e, t) {
                const n = new Set;
                return tl.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new nl(e), tl.dependencies = null, [e, n]
              }(r, t),
              u = Gs(),
              d = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u()
              },
              f = new sl(d, c),
              h = (0, s.useRef)();
            Vs((() => (h.current = f, _a(c, (e => Cs(e, f))), () => {
              h.current && (_a(h.current.deps, (e => Ss(e, h.current))), ea.cancel(h.current.update))
            }))), (0, s.useEffect)(d, []), Ks((() => () => {
              const e = h.current;
              _a(e.deps, (t => Ss(t, e)))
            }));
            const p = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        sl = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && ea.write(this.update)
          }
        },
        ll = Symbol.for("AnimatedComponent"),
        cl = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new nl(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = ul(e) || "Anonymous";
              return (e = wa.str(e) ? i[e] || (i[e] = al(e, o)) : e[ll] || (e[ll] = al(e, o))).displayName = `Animated(${t})`, e
            };
          return Pa(e, ((t, n) => {
            wa.arr(e) && (n = ul(t)), i[n] = i(t)
          })), {
            animated: i
          }
        },
        ul = e => wa.str(e) ? e : e && wa.str(e.displayName) ? e.displayName : wa.fun(e) && e.name || null;

      function dl(e, ...t) {
        return wa.fun(e) ? e(...t) : e
      }
      var fl = (e, t) => !0 === e || !!(t && e && (wa.fun(e) ? e(t) : Ca(e).includes(t))),
        hl = (e, t) => wa.obj(e) ? t && e[t] : e,
        pl = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ml = e => e,
        vl = (e, t = ml) => {
          let n = gl;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            wa.und(n) || (r[o] = n)
          }
          return r
        },
        gl = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        yl = {
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

      function bl(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Pa(e, ((e, r) => {
              yl[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Pa(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function wl(e) {
        return e = bs(e), wa.arr(e) ? e.map(wl) : Us(e) ? ya.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function El(e) {
        for (const t in e) return !0;
        return !1
      }

      function _l(e) {
        return wa.fun(e) || wa.arr(e) && wa.obj(e[0])
      }

      function Pl(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Cl(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var Sl = {
          tension: 170,
          friction: 26
        },
        Tl = {
          ...Sl,
          mass: 1,
          damping: 1,
          easing: ms.linear,
          clamp: !1
        },
        xl = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Tl)
          }
        };

      function Ol(e, t) {
        if (wa.und(t.decay)) {
          const n = !wa.und(t.tension) || !wa.und(t.friction);
          !n && wa.und(t.frequency) && wa.und(t.damping) && wa.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ll = [],
        kl = class {
          constructor() {
            this.changed = !1, this.values = Ll, this.toValues = null, this.fromValues = Ll, this.config = new xl, this.immediate = !1
          }
        };

      function Nl(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = fl(n.cancel ?? r?.cancel, t);
          if (u) h();
          else {
            wa.und(n.pause) || (o.paused = fl(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || fl(e, t)), l = dl(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - ea.now()
          }

          function f() {
            l > 0 && !ya.skipAnimation ? (o.delayed = !0, c = ea.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: u
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var Al = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Dl(e.get()) : t.every((e => e.noop)) ? Rl(e.get()) : Ml(e.get(), t.every((e => e.finished))),
        Rl = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Ml = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Dl = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function jl(e, t, n, r) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = n;
        return i || e !== s || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const c = vl(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && Dl(r) || o !== n.asyncId && Ml(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Hl,
                a = new Bl;
              return (async () => {
                if (ya.skipAnimation) throw Il(n), a.result = Ml(r, !1), d(a), a;
                h(i);
                const s = wa.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Pa(c, ((e, t) => {
                  wa.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return h(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (ya.skipAnimation) return Il(n), Ml(r, !1);
          try {
            let t;
            t = wa.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), f]), m = Ml(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Hl) m = e.result;
            else {
              if (!(e instanceof Bl)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return wa.fun(a) && ea.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function Il(e, t) {
        Sa(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Hl = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Bl = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Fl = e => e instanceof Vl,
        Ul = 1,
        Vl = class extends _s {
          constructor() {
            super(...arguments), this.id = Ul++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Xs(this);
            return e && e.getValue()
          }
          to(...e) {
            return ya.to(this, e)
          }
          interpolate(...e) {
            return Bs(`${Is}The "interpolate" function is deprecated in v9 (use "to" instead)`), ya.to(this, e)
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
            Es(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ha.sort(this), Es(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        zl = Symbol.for("SpringPhase"),
        Gl = e => (1 & e[zl]) > 0,
        Kl = e => (2 & e[zl]) > 0,
        ql = e => (4 & e[zl]) > 0,
        Wl = (e, t) => t ? e[zl] |= 3 : e[zl] &= -3,
        $l = (e, t) => t ? e[zl] |= 4 : e[zl] &= -5,
        Xl = class extends Vl {
          constructor(e, t) {
            if (super(), this.animation = new kl, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !wa.und(e) || !wa.und(t)) {
              const n = wa.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              wa.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Kl(this) || this._state.asyncTo) || ql(this)
          }
          get goal() {
            return bs(this.animation.to)
          }
          get velocity() {
            const e = Xs(this);
            return e instanceof Js ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Gl(this)
          }
          get isAnimating() {
            return Kl(this)
          }
          get isPaused() {
            return ql(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, a = Zs(r.to);
            !a && ys(r.to) && (o = Ca(bs(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == el ? 1 : a ? a[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = wa.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (wa.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !wa.und(r),
                      h = n == c ? s.v0 > 0 : n < c;
                    let p, m = !1;
                    const v = 1,
                      g = Math.ceil(e / v);
                    for (let e = 0; e < g && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (m = d == c || d > c == h, m && (a = -a * r, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * v, d += a * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (c - n), a = (d - s.lastPosition) / e, u = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = Xs(this),
              l = s.getValue();
            if (t) {
              const e = bs(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return ea.batchedUpdates((() => {
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
            if (Kl(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              ea.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return wa.und(e) ? (n = this.queue || [], this.queue = []) : n = [wa.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Al(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Il(this._state, e && this._lastCallId), ea.batchedUpdates((() => this._stop(t, e))), this
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
              to: n,
              from: r
            } = e;
            n = wa.obj(n) ? n[t] : n, (null == n || _l(n)) && (n = void 0), r = wa.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return Gl(this) || (e.reverse && ([n, r] = [r, n]), r = bs(r), wa.und(r) ? Xs(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, vl(e, ((e, t) => /^on/.test(t) ? hl(e, n) : e))), nc(this, e, "onProps"), rc(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Nl(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  ql(this) || ($l(this, !0), Oa(i.pauseQueue), rc(this, "onPause", Ml(this, Yl(this, this.animation.to)), this))
                },
                resume: () => {
                  ql(this) && ($l(this, !1), Kl(this) && this._resume(), Oa(i.resumeQueue), rc(this, "onResume", Ml(this, Yl(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Zl(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Dl(this));
            const r = !wa.und(e.to),
              o = !wa.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Dl(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || r || t.default && !wa.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Ea(d, c);
            f && (s.from = d), d = bs(d);
            const h = !Ea(u, l);
            h && this._focus(u);
            const p = _l(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: g
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Ol(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Ol(e, t), Object.assign(e, t);
              for (const t in Tl) null == e[t] && (e[t] = Tl[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              wa.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, dl(t.config, i), t.config !== a.config ? dl(a.config, i) : void 0);
            let y = Xs(this);
            if (!y || wa.und(u)) return n(Ml(this, !0));
            const b = wa.und(t.reset) ? o && !t.default : !wa.und(d) && fl(t.reset, i),
              w = b ? d : this.get(),
              E = wl(u),
              _ = wa.num(E) || wa.arr(E) || Us(E),
              P = !p && (!_ || fl(a.immediate || t.immediate, i));
            if (h) {
              const e = il(u);
              if (e !== y.constructor) {
                if (!P) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(E)
              }
            }
            const C = y.constructor;
            let S = ys(u),
              T = !1;
            if (!S) {
              const e = b || !Gl(this) && f;
              (h || e) && (T = Ea(wl(w), E), S = !T), (Ea(s.immediate, P) || P) && Ea(m.decay, v) && Ea(m.velocity, g) || (S = !0)
            }
            if (T && Kl(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || ys(l)) && (s.values = y.getPayload(), s.toValues = ys(u) ? null : C == el ? [1] : Ca(E)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              _a(tc, (e => nc(this, t, e)));
              const r = Ml(this, Yl(this, l));
              Oa(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && ea.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? dl(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(w), p ? n(jl(t.to, t, this._state, this)) : S ? this._start() : Kl(this) && !h ? this._pendingCalls.add(n) : n(Rl(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (ws(this) && this._detach(), t.to = e, ws(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ys(t) && (Cs(t, this), Fl(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ys(e) && Ss(e, this)
          }
          _set(e, t = !0) {
            const n = bs(e);
            if (!wa.und(n)) {
              const e = Xs(this);
              if (!e || !Ea(n, e.getValue())) {
                const r = il(n);
                e && e.constructor == r ? e.setValue(n) : Ys(this, r.create(n)), e && ea.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return Xs(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, rc(this, "onStart", Ml(this, Yl(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), dl(this.animation.onChange, e, this)), dl(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Xs(this).reset(bs(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Kl(this) || (Wl(this, !0), ql(this) || this._resume())
          }
          _resume() {
            ya.skipAnimation ? this.finish() : Ha.start(this)
          }
          _stop(e, t) {
            if (Kl(this)) {
              Wl(this, !1);
              const n = this.animation;
              _a(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Es(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Dl(this.get()) : Ml(this.get(), Yl(this, e ?? n.to));
              Oa(this._pendingCalls, r), n.changed && (n.changed = !1, rc(this, "onRest", r, this))
            }
          }
        };

      function Yl(e, t) {
        const n = wl(t);
        return Ea(wl(e.get()), n)
      }

      function Zl(e, t = e.loop, n = e.to) {
        const r = dl(t);
        if (r) {
          const o = !0 !== r && bl(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Ql({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || _l(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Ql(e) {
        const {
          to: t,
          from: n
        } = e = bl(e), r = new Set;
        return wa.obj(t) && ec(t, r), wa.obj(n) && ec(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Jl(e) {
        const t = Ql(e);
        return wa.und(t.default) && (t.default = vl(t)), t
      }

      function ec(e, t) {
        Pa(e, ((e, n) => null != e && t.add(n)))
      }
      var tc = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function nc(e, t, n) {
        e.animation[n] = t[n] !== pl(t, n) ? hl(t[n], e.key) : void 0
      }

      function rc(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var oc = ["onStart", "onChange", "onRest"],
        ic = 1,
        ac = class {
          constructor(e, t) {
            this.id = ic++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              wa.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Ql(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = Ca(e).map(Ql) : this.queue = [], this._flush ? this._flush(this, t) : (hc(this, t), sc(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              _a(Ca(t), (t => n[t].stop(!!e)))
            } else Il(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (wa.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              _a(Ca(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (wa.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              _a(Ca(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Pa(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Sa(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Sa(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Sa(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            ea.onFrame(this._onFrame)
          }
        };

      function sc(e, t) {
        return Promise.all(t.map((t => lc(e, t)))).then((t => Al(e, t)))
      }
      async function lc(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = wa.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = wa.arr(o) || wa.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : _a(oc, (n => {
          const r = t[n];
          if (wa.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Oa(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === pl(t, "cancel");
        (u || h && d.asyncId) && f.push(Nl(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: ba,
            resume: ba,
            start(t, n) {
              h ? (Il(d, e._lastAsyncId), n(Dl(e))) : (t.onRest = s, n(jl(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Al(e, await Promise.all(f));
        if (a && p.finished && (!n || !p.noop)) {
          const n = Zl(t, a, o);
          if (n) return hc(e, [n]), lc(e, n, !0)
        }
        return l && ea.batchedUpdates((() => l(p, e, e.item))), p
      }

      function cc(e, t) {
        const n = {
          ...e.springs
        };
        return t && _a(Ca(t), (e => {
          wa.und(e.keys) && (e = Ql(e)), wa.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), fc(n, e, (e => dc(e)))
        })), uc(e, n), n
      }

      function uc(e, t) {
        Pa(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Cs(t, e))
        }))
      }

      function dc(e, t) {
        const n = new Xl;
        return n.key = e, t && Cs(n, t), n
      }

      function fc(e, t, n) {
        t.keys && _a(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function hc(e, t) {
        _a(t, (t => {
          fc(e.springs, t, (t => dc(t, e)))
        }))
      }
      var pc, mc, vc = ({
          children: e,
          ...t
        }) => {
          const n = (0, s.useContext)(gc),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, s.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, s.useRef)(), o = r.current;
            let i = o;
            return i ? Boolean(t && i.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; n++)
                if (e[n] !== t[n]) return !1;
              return !0
            }(t, i.inputs)) || (i = {
              inputs: t,
              result: e()
            }) : i = n, (0, s.useEffect)((() => {
              r.current = i, o == n && (n.inputs = n.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: i
          } = gc;
          return s.createElement(i, {
            value: t
          }, e)
        },
        gc = (pc = vc, mc = {}, Object.assign(pc, s.createContext(mc)), pc.Provider._context = pc, pc.Consumer._context = pc, pc);
      vc.Provider = gc.Provider, vc.Consumer = gc.Consumer;
      var yc = () => {
        const e = [],
          t = function(t) {
            Fs(`${Is}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return _a(e, ((e, o) => {
              if (wa.und(t)) r.push(e.start());
              else {
                const i = n(t, e, o);
                i && r.push(e.start(i))
              }
            })), r
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return _a(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return _a(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          _a(e, ((e, n) => {
            const r = wa.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return _a(e, ((e, r) => {
            if (wa.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return _a(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return _a(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return wa.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function bc(e, t) {
        const n = wa.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = wa.fun(t) && t;
            r && !n && (n = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? yc() : void 0), []),
              i = (0, s.useRef)(0),
              a = Gs(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = cc(e, t);
                  return i.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? sc(e, t) : new Promise((r => {
                    uc(e, n), l.queue.push((() => {
                      r(sc(e, t))
                    })), a()
                  }))
                }
              })), []),
              c = (0, s.useRef)([...l.ctrls]),
              u = [],
              d = Ws(e) || 0;

            function f(e, n) {
              for (let o = e; o < n; o++) {
                const e = c.current[o] || (c.current[o] = new ac(null, l.flush)),
                  n = r ? r(o, e) : t[o];
                n && (u[o] = Jl(n))
              }
            }(0, s.useMemo)((() => {
              _a(c.current.slice(e, d), (e => {
                Pl(e, o), e.stop(!0)
              })), c.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), n);
            const h = c.current.map(((e, t) => cc(e, u[t]))),
              p = (0, s.useContext)(vc),
              m = Ws(p),
              v = p !== m && El(p);
            Vs((() => {
              i.current++, l.ctrls = c.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], _a(e, (e => e()))), _a(c.current, ((e, t) => {
                o?.add(e), v && e.start({
                  default: p
                });
                const n = u[t];
                n && (Cl(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), Ks((() => () => {
              _a(l.ctrls, (e => e.stop(!0)))
            }));
            const g = h.map((e => ({
              ...e
            })));
            return o ? [g, o] : g
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var wc = () => yc(),
        Ec = () => (0, s.useState)(wc)[0];
      var _c = 1,
        Pc = class extends Vl {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = ls(...t);
            const n = this._get(),
              r = il(n);
            Ys(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            Ea(t, this.get()) || (Xs(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Sc(this._active) && Tc(this)
          }
          _get() {
            const e = wa.arr(this.source) ? this.source.map(bs) : Ca(bs(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Sc(this._active) && (this.idle = !1, _a(Zs(this), (e => {
              e.done = !1
            })), ya.skipAnimation ? (ea.batchedUpdates((() => this.advance())), Tc(this)) : Ha.start(this))
          }
          _attach() {
            let e = 1;
            _a(Ca(this.source), (t => {
              ys(t) && Cs(t, this), Fl(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            _a(Ca(this.source), (e => {
              ys(e) && Ss(e, this)
            })), this._active.clear(), Tc(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = Ca(this.source).reduce(((e, t) => Math.max(e, (Fl(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Cc(e) {
        return !1 !== e.idle
      }

      function Sc(e) {
        return !e.size || Array.from(e).every(Cc)
      }

      function Tc(e) {
        e.idle || (e.idle = !0, _a(Zs(e), (e => {
          e.done = !0
        })), Es(e, {
          type: "idle",
          parent: e
        }))
      }
      ya.assign({
        createStringInterpolator: js,
        to: (e, t) => new Pc(e, t)
      }), Ha.advance;
      var xc = /^--/;

      function Oc(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || xc.test(e) || kc.hasOwnProperty(e) && kc[e] ? ("" + t).trim() : t + "px"
      }
      var Lc = {},
        kc = {
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
        Nc = ["Webkit", "Ms", "Moz", "O"];
      kc = Object.keys(kc).reduce(((e, t) => (Nc.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), kc);
      var Ac = /^(matrix|translate|scale|rotate|skew)/,
        Rc = /^(translate)/,
        Mc = /^(rotate|skew)/,
        Dc = (e, t) => wa.num(e) && 0 !== e ? e + t : e,
        jc = (e, t) => wa.arr(e) ? e.every((e => jc(e, t))) : wa.num(e) ? e === t : parseFloat(e) === t,
        Ic = class extends nl {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Dc(e,"px"))).join(",")})`, jc(e, 0)]))), Pa(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ac.test(t)) {
                if (delete r[t], wa.und(e)) return;
                const n = Rc.test(t) ? "px" : Mc.test(t) ? "deg" : "";
                o.push(Ca(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Dc(o,n)})`, jc(o, 0)] : e => [`${t}(${e.map((e=>Dc(e,n))).join(",")})`, jc(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Hc(o, i)), super(r)
          }
        },
        Hc = class extends _s {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return _a(this.inputs, ((n, r) => {
              const o = bs(n[0]),
                [i, a] = this.transforms[r](wa.arr(o) ? o : n.map(bs));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && _a(this.inputs, (e => _a(e, (e => ys(e) && Cs(e, this)))))
          }
          observerRemoved(e) {
            0 == e && _a(this.inputs, (e => _a(e, (e => ys(e) && Ss(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Es(this, e)
          }
        };
      ya.assign({
        batchedUpdates: g.unstable_batchedUpdates,
        createStringInterpolator: js,
        colors: za
      });
      var Bc = cl(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: r,
              style: o,
              children: i,
              scrollTop: a,
              scrollLeft: s,
              viewBox: l,
              ...c
            } = t,
            u = Object.values(c),
            d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : Lc[t] || (Lc[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = Oc(t, o[t]);
              xc.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, u[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new Ic(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;
      const Fc = (e, t, n) => {
          if (e > n) {
            const t = e - n;
            return n + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          if (e < t) {
            const n = e - t;
            return t + 2 * (n > 0 ? Math.sqrt(n) : -Math.sqrt(-n))
          }
          return e
        },
        Uc = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        Vc = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = Uc(n), i = o.width / r, a = 100 * Gc(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * Gc(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        zc = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = Uc(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, f = u * s > d ? u * s - d : 0, h = l.height / a / 2, p = c.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, g = o > f, y = i > m, b = -i > m;
          return v && !g ? o = -f : g && !v && (o = f), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        Gc = (e, t, n) => Math.min(Math.max(e, t), n),
        Kc = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        qc = Sl,
        Wc = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        $c = ({
          children: e,
          containerRef: t,
          contentRef: n,
          minZoomLevel: r,
          maxZoomLevel: o,
          eventHandlers: a,
          enabled: l,
          animation: c
        }) => {
          (({
            containerRef: e,
            contentRef: t
          }) => {
            const n = e => {
              e.preventDefault(), e.nativeEvent?.preventDefault()
            };
            (0, s.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
              document.removeEventListener("gesturestart", n), document.removeEventListener("gesturechange", n), t.current?.removeEventListener("dragstart", n), t.current?.removeEventListener("click", n), e.current?.removeEventListener("dragstart", n), e.current?.removeEventListener("click", n)
            })), [e.current, t.current])
          })({
            containerRef: t,
            contentRef: n
          }), Qi({
            onDrag: a.onDrag,
            onDragEnd: a.onDragEnd,
            onPinch: a.onPinch,
            onPinchEnd: a.onPinchEnd,
            onWheel: a.onWheel,
            onWheelEnd: a.onWheelEnd
          }, {
            enabled: !0,
            target: t,
            drag: {
              filterTaps: !0
            },
            pinch: {
              enabled: l,
              scaleBounds: {
                min: r / 100,
                max: o / 100
              }
            },
            wheel: {
              enabled: l
            },
            eventOptions: {
              passive: !1
            }
          });
          const u = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
          return (0, i.jsx)("div", {
            ref: t,
            className: "foundry_148vt480",
            style: u,
            children: (0, i.jsx)(Bc.div, {
              ref: n,
              className: "foundry_148vt481",
              style: {
                ...c,
                ...u,
                width: "100%",
                height: "100%"
              },
              children: e
            })
          })
        };
      var Xc, Yc, Zc, Qc, Jc = n(63461);

      function eu(e) {
        return e.type === Yc.literal
      }

      function tu(e) {
        return e.type === Yc.argument
      }

      function nu(e) {
        return e.type === Yc.number
      }

      function ru(e) {
        return e.type === Yc.date
      }

      function ou(e) {
        return e.type === Yc.time
      }

      function iu(e) {
        return e.type === Yc.select
      }

      function au(e) {
        return e.type === Yc.plural
      }

      function su(e) {
        return e.type === Yc.pound
      }

      function lu(e) {
        return e.type === Yc.tag
      }

      function cu(e) {
        return !(!e || "object" != typeof e || e.type !== Zc.number)
      }

      function uu(e) {
        return !(!e || "object" != typeof e || e.type !== Zc.dateTime)
      }(Qc = Xc || (Xc = {}))[Qc.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", Qc[Qc.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", Qc[Qc.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", Qc[Qc.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", Qc[Qc.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", Qc[Qc.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", Qc[Qc.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", Qc[Qc.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", Qc[Qc.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", Qc[Qc.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", Qc[Qc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", Qc[Qc.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", Qc[Qc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", Qc[Qc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", Qc[Qc.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", Qc[Qc.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", Qc[Qc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", Qc[Qc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", Qc[Qc.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", Qc[Qc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", Qc[Qc.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", Qc[Qc.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", Qc[Qc.INVALID_TAG = 23] = "INVALID_TAG", Qc[Qc.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", Qc[Qc.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", Qc[Qc.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Yc || (Yc = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Zc || (Zc = {}));
      var du = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        fu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function hu(e) {
        var t = {};
        return e.replace(fu, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
      var pu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        mu = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        vu = /^(@+)?(\+|#+)?[rs]?$/g,
        gu = /(\*)(0+)|(#+)(0+)|(0+)/g,
        yu = /^(0+)$/;

      function bu(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(vu, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function wu(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function Eu(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !yu.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function _u(e) {
        return wu(e) || {}
      }

      function Pu(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Jc.__assign)((0, Jc.__assign)({}, e), _u(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Jc.__assign)((0, Jc.__assign)({}, e), _u(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(gu, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (yu.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (mu.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(mu, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Jc.__assign)((0, Jc.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), bu(i)))
          } else if (vu.test(o.stem)) t = (0, Jc.__assign)((0, Jc.__assign)({}, t), bu(o.stem));
          else {
            var a = wu(o.stem);
            a && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), a));
            var s = Eu(o.stem);
            s && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), s))
          }
        }
        return t
      }
      var Cu, Su = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function Tu(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (Su[n || ""] || Su[r || ""] || Su["".concat(r, "-001")] || Su["001"])[0]
      }
      var xu = new RegExp("^".concat(du.source, "*")),
        Ou = new RegExp("".concat(du.source, "*$"));

      function Lu(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var ku = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        Nu = !!String.fromCodePoint,
        Au = !!Object.fromEntries,
        Ru = !!String.prototype.codePointAt,
        Mu = !!String.prototype.trimStart,
        Du = !!String.prototype.trimEnd,
        ju = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Iu = !0;
      try {
        Iu = "a" === (null === (Cu = Ku("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Cu ? void 0 : Cu[0])
      } catch (e) {
        Iu = !1
      }
      var Hu, Bu = ku ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Fu = Nu ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Uu = Au ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Vu = Ru ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        zu = Mu ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(xu, "")
        },
        Gu = Du ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Ou, "")
        };

      function Ku(e, t) {
        return new RegExp(e, t)
      }
      if (Iu) {
        var qu = Ku("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Hu = function(e, t) {
          var n;
          return qu.lastIndex = t, null !== (n = qu.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else Hu = function(e, t) {
        for (var n = [];;) {
          var r = Vu(e, t);
          if (void 0 === r || Xu(r) || Yu(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Fu.apply(void 0, n)
      };
      var Wu = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(Xc.UNMATCHED_CLOSING_TAG, Lu(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && $u(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: Yc.pound,
                  location: Lu(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Yc.literal,
              value: "<".concat(r, "/>"),
              location: Lu(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !$u(this.char())) return this.error(Xc.INVALID_TAG, Lu(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Xc.UNMATCHED_CLOSING_TAG, Lu(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Yc.tag,
                  value: r,
                  children: i,
                  location: Lu(n, this.clonePosition())
                },
                err: null
              } : this.error(Xc.INVALID_TAG, Lu(a, this.clonePosition())))
            }
            return this.error(Xc.UNCLOSED_TAG, Lu(n, this.clonePosition()))
          }
          return this.error(Xc.INVALID_TAG, Lu(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = Lu(n, this.clonePosition());
          return {
            val: {
              type: Yc.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && ($u(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return Fu.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Fu(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Xc.EXPECT_ARGUMENT_CLOSING_BRACE, Lu(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Xc.EMPTY_ARGUMENT, Lu(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Xc.MALFORMED_ARGUMENT, Lu(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Xc.EXPECT_ARGUMENT_CLOSING_BRACE, Lu(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Yc.argument,
                  value: r,
                  location: Lu(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Xc.EXPECT_ARGUMENT_CLOSING_BRACE, Lu(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Xc.MALFORMED_ARGUMENT, Lu(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = Hu(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: Lu(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Xc.EXPECT_ARGUMENT_TYPE, Lu(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = Gu(g.val)).length) return this.error(Xc.EXPECT_ARGUMENT_STYLE, Lu(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: Lu(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = Lu(r, this.clonePosition());
              if (l && Bu(null == l ? void 0 : l.style, "::", 0)) {
                var d = zu(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: Yc.number,
                    value: n,
                    location: u,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Xc.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Tu(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Zc.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? hu(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Yc.date : Yc.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Yc.number : "date" === a ? Yc.date : Yc.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Xc.EXPECT_SELECT_ARGUMENT_OPTIONS, Lu(p, (0, Jc.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Xc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Lu(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Xc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = Lu(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Yc.select,
                  value: n,
                  options: Uu(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Yc.plural,
                  value: n,
                  options: Uu(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Xc.INVALID_ARGUMENT_TYPE, Lu(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Xc.EXPECT_ARGUMENT_CLOSING_BRACE, Lu(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Xc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Lu(n, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], n = 0, r = e.split(pu).filter((function(e) {
                  return e.length > 0
                })); n < r.length; n++) {
                var o = r[n].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], a = o.slice(1), s = 0, l = a; s < l.length; s++)
                  if (0 === l[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Xc.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Zc.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Pu(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Xc.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xc.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = Lu(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Xc.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Xc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Xc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Xc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Lu(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: Lu(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Xc.EXPECT_SELECT_ARGUMENT_SELECTOR : Xc.EXPECT_PLURAL_ARGUMENT_SELECTOR, Lu(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Xc.MISSING_OTHER_CLAUSE, Lu(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = Lu(r, this.clonePosition());
          return o ? ju(i *= n) ? {
            val: i,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = Vu(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (Bu(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Xu(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function $u(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Xu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Yu(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Zu(e) {
        e.forEach((function(e) {
          if (delete e.location, iu(e) || au(e))
            for (var t in e.options) delete e.options[t].location, Zu(e.options[t].value);
          else nu(e) && cu(e.style) || (ru(e) || ou(e)) && uu(e.style) ? delete e.style.location : lu(e) && Zu(e.children)
        }))
      }

      function Qu(e, t) {
        void 0 === t && (t = {}), t = (0, Jc.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Wu(e, t).parse();
        if (n.err) {
          var r = SyntaxError(Xc[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Zu(n.val), n.val
      }

      function Ju(e, t) {
        var n = t && t.cache ? t.cache : sd,
          r = t && t.serializer ? t.serializer : od;
        return (t && t.strategy ? t.strategy : rd)(e, {
          cache: n,
          serializer: r
        })
      }

      function ed(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function td(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function nd(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function rd(e, t) {
        return nd(e, this, 1 === e.length ? ed : td, t.cache.create(), t.serializer)
      }
      var od = function() {
        return JSON.stringify(arguments)
      };

      function id() {
        this.cache = Object.create(null)
      }
      id.prototype.get = function(e) {
        return this.cache[e]
      }, id.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var ad, sd = {
          create: function() {
            return new id
          }
        },
        ld = {
          variadic: function(e, t) {
            return nd(e, this, td, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return nd(e, this, ed, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(ad || (ad = {}));
      var cd, ud = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, Jc.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        dd = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), ad.INVALID_VALUE, o) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(ud),
        fd = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), ad.INVALID_VALUE, r) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(ud),
        hd = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), ad.MISSING_VALUE, n) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(ud);

      function pd(e) {
        return "function" == typeof e
      }

      function md(e, t, n, r, o, i, a) {
        if (1 === e.length && eu(e[0])) return [{
          type: cd.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (eu(u)) s.push({
            type: cd.literal,
            value: u.value
          });
          else if (su(u)) "number" == typeof i && s.push({
            type: cd.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new hd(d, a);
            var f = o[d];
            if (tu(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? cd.literal : cd.object,
              value: f
            });
            else if (ru(u)) {
              var h = "string" == typeof u.style ? r.date[u.style] : uu(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: cd.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (ou(u)) h = "string" == typeof u.style ? r.time[u.style] : uu(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: cd.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (nu(u))(h = "string" == typeof u.style ? r.number[u.style] : cu(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: cd.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (lu(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!pd(v)) throw new fd(m, "function", a);
                var g = v(md(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(g) || (g = [g]), s.push.apply(s, g.map((function(e) {
                  return {
                    type: "string" == typeof e ? cd.literal : cd.object,
                    value: e
                  }
                })))
              }
              if (iu(u)) {
                if (!(y = u.options[f] || u.options.other)) throw new dd(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, md(y.value, t, n, r, o))
              } else if (au(u)) {
                var y;
                if (!(y = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new ud('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ad.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new dd(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, md(y.value, t, n, r, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (w = s).length < 2 ? w : w.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === cd.literal && t.type === cd.literal ? n.value += t.value : e.push(t), e
        }), []);
        var w
      }

      function vd(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(cd || (cd = {}));
      var gd = function() {
        function e(t, n, r, o) {
          var i, a, s, l = this;
          if (void 0 === n && (n = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = l.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var n = t.reduce((function(e, t) {
                return e.length && t.type === cd.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return md(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var c = o || {},
              u = (c.formatters, (0, Jc.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, Jc.__assign)((0, Jc.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, Jc.__assign)((0, Jc.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, Jc.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Ju((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
            }), {
              cache: vd(i.number),
              strategy: ld.variadic
            }),
            getDateTimeFormat: Ju((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
            }), {
              cache: vd(i.dateTime),
              strategy: ld.variadic
            }),
            getPluralRules: Ju((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
            }), {
              cache: vd(i.pluralRules),
              strategy: ld.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = Qu, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }();

      function yd(e, t) {
        var n = t && t.cache ? t.cache : Td,
          r = t && t.serializer ? t.serializer : Pd;
        return (t && t.strategy ? t.strategy : _d)(e, {
          cache: n,
          serializer: r
        })
      }

      function bd(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function wd(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function Ed(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function _d(e, t) {
        return Ed(e, this, 1 === e.length ? bd : wd, t.cache.create(), t.serializer)
      }
      var Pd = function() {
        return JSON.stringify(arguments)
      };

      function Cd() {
        this.cache = Object.create(null)
      }
      Cd.prototype.get = function(e) {
        return this.cache[e]
      }, Cd.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Sd, Td = {
          create: function() {
            return new Cd
          }
        },
        xd = {
          variadic: function(e, t) {
            return Ed(e, this, wd, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Ed(e, this, bd, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Sd || (Sd = {}));
      var Od = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Jc.__extends)(t, e), t
        }(Error),
        Ld = function(e) {
          function t(t, n) {
            return e.call(this, Sd.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(Od),
        kd = function(e) {
          function t(t, n) {
            return e.call(this, Sd.INVALID_CONFIG, t, n) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(Od),
        Nd = function(e) {
          function t(t, n) {
            return e.call(this, Sd.MISSING_DATA, t, n) || this
          }
          return (0, Jc.__extends)(t, e), t
        }(Od),
        Ad = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Sd.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, Jc.__extends)(t, e), t
        }(Od),
        Rd = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, Jc.__extends)(t, e), t
        }(Ad),
        Md = function(e) {
          function t(t, n) {
            var r = e.call(this, Sd.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, Jc.__extends)(t, e), t
        }(Od);

      function Dd(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var jd = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Id(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, n) {
                e[t] = n
              }
            }
          }
        }
      }

      function Hd(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Ld("No ".concat(t, " format named: ").concat(n)))
      }

      function Bd(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var Fd = (0, Jc.__assign)((0, Jc.__assign)({}, jd), {
        textComponent: s.Fragment
      });
      n(63305);
      var Ud, Vd, zd, Gd = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        Kd = (Gd.Consumer, Gd.Provider),
        qd = Gd;
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ud || (Ud = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Vd || (Vd = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(zd || (zd = {}));
      var Wd = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        $d = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Xd(e) {
        var t = {};
        return e.replace($d, (function(e) {
          var n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
      var Yd = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Zd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        Qd = /^(@+)?(\+|#+)?[rs]?$/g,
        Jd = /(\*)(0+)|(#+)(0+)|(0+)/g,
        ef = /^(0+)$/;

      function tf(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Qd, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function nf(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function rf(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !ef.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function of(e) {
        return nf(e) || {}
      }

      function af(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var o = r[n];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = o.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = o.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Jc.__assign)((0, Jc.__assign)({}, e), of(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Jc.__assign)((0, Jc.__assign)({}, e), of(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              o.options[0].replace(Jd, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (ef.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Zd.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Zd, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Jc.__assign)((0, Jc.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), tf(i)))
          } else if (Qd.test(o.stem)) t = (0, Jc.__assign)((0, Jc.__assign)({}, t), tf(o.stem));
          else {
            var a = nf(o.stem);
            a && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), a));
            var s = rf(o.stem);
            s && (t = (0, Jc.__assign)((0, Jc.__assign)({}, t), s))
          }
        }
        return t
      }
      var sf, lf = {
        "001": ["H", "h"],
        AC: ["H", "h", "hb", "hB"],
        AD: ["H", "hB"],
        AE: ["h", "hB", "hb", "H"],
        AF: ["H", "hb", "hB", "h"],
        AG: ["h", "hb", "H", "hB"],
        AI: ["H", "h", "hb", "hB"],
        AL: ["h", "H", "hB"],
        AM: ["H", "hB"],
        AO: ["H", "hB"],
        AR: ["H", "h", "hB", "hb"],
        AS: ["h", "H"],
        AT: ["H", "hB"],
        AU: ["h", "hb", "H", "hB"],
        AW: ["H", "hB"],
        AX: ["H"],
        AZ: ["H", "hB", "h"],
        BA: ["H", "hB", "h"],
        BB: ["h", "hb", "H", "hB"],
        BD: ["h", "hB", "H"],
        BE: ["H", "hB"],
        BF: ["H", "hB"],
        BG: ["H", "hB", "h"],
        BH: ["h", "hB", "hb", "H"],
        BI: ["H", "h"],
        BJ: ["H", "hB"],
        BL: ["H", "hB"],
        BM: ["h", "hb", "H", "hB"],
        BN: ["hb", "hB", "h", "H"],
        BO: ["H", "hB", "h", "hb"],
        BQ: ["H"],
        BR: ["H", "hB"],
        BS: ["h", "hb", "H", "hB"],
        BT: ["h", "H"],
        BW: ["H", "h", "hb", "hB"],
        BY: ["H", "h"],
        BZ: ["H", "h", "hb", "hB"],
        CA: ["h", "hb", "H", "hB"],
        CC: ["H", "h", "hb", "hB"],
        CD: ["hB", "H"],
        CF: ["H", "h", "hB"],
        CG: ["H", "hB"],
        CH: ["H", "hB", "h"],
        CI: ["H", "hB"],
        CK: ["H", "h", "hb", "hB"],
        CL: ["H", "h", "hB", "hb"],
        CM: ["H", "h", "hB"],
        CN: ["H", "hB", "hb", "h"],
        CO: ["h", "H", "hB", "hb"],
        CP: ["H"],
        CR: ["H", "h", "hB", "hb"],
        CU: ["H", "h", "hB", "hb"],
        CV: ["H", "hB"],
        CW: ["H", "hB"],
        CX: ["H", "h", "hb", "hB"],
        CY: ["h", "H", "hb", "hB"],
        CZ: ["H"],
        DE: ["H", "hB"],
        DG: ["H", "h", "hb", "hB"],
        DJ: ["h", "H"],
        DK: ["H"],
        DM: ["h", "hb", "H", "hB"],
        DO: ["h", "H", "hB", "hb"],
        DZ: ["h", "hB", "hb", "H"],
        EA: ["H", "h", "hB", "hb"],
        EC: ["H", "hB", "h", "hb"],
        EE: ["H", "hB"],
        EG: ["h", "hB", "hb", "H"],
        EH: ["h", "hB", "hb", "H"],
        ER: ["h", "H"],
        ES: ["H", "hB", "h", "hb"],
        ET: ["hB", "hb", "h", "H"],
        FI: ["H"],
        FJ: ["h", "hb", "H", "hB"],
        FK: ["H", "h", "hb", "hB"],
        FM: ["h", "hb", "H", "hB"],
        FO: ["H", "h"],
        FR: ["H", "hB"],
        GA: ["H", "hB"],
        GB: ["H", "h", "hb", "hB"],
        GD: ["h", "hb", "H", "hB"],
        GE: ["H", "hB", "h"],
        GF: ["H", "hB"],
        GG: ["H", "h", "hb", "hB"],
        GH: ["h", "H"],
        GI: ["H", "h", "hb", "hB"],
        GL: ["H", "h"],
        GM: ["h", "hb", "H", "hB"],
        GN: ["H", "hB"],
        GP: ["H", "hB"],
        GQ: ["H", "hB", "h", "hb"],
        GR: ["h", "H", "hb", "hB"],
        GT: ["H", "h", "hB", "hb"],
        GU: ["h", "hb", "H", "hB"],
        GW: ["H", "hB"],
        GY: ["h", "hb", "H", "hB"],
        HK: ["h", "hB", "hb", "H"],
        HN: ["H", "h", "hB", "hb"],
        HR: ["H", "hB"],
        HU: ["H", "h"],
        IC: ["H", "h", "hB", "hb"],
        ID: ["H"],
        IE: ["H", "h", "hb", "hB"],
        IL: ["H", "hB"],
        IM: ["H", "h", "hb", "hB"],
        IN: ["h", "H"],
        IO: ["H", "h", "hb", "hB"],
        IQ: ["h", "hB", "hb", "H"],
        IR: ["hB", "H"],
        IS: ["H"],
        IT: ["H", "hB"],
        JE: ["H", "h", "hb", "hB"],
        JM: ["h", "hb", "H", "hB"],
        JO: ["h", "hB", "hb", "H"],
        JP: ["H", "K", "h"],
        KE: ["hB", "hb", "H", "h"],
        KG: ["H", "h", "hB", "hb"],
        KH: ["hB", "h", "H", "hb"],
        KI: ["h", "hb", "H", "hB"],
        KM: ["H", "h", "hB", "hb"],
        KN: ["h", "hb", "H", "hB"],
        KP: ["h", "H", "hB", "hb"],
        KR: ["h", "H", "hB", "hb"],
        KW: ["h", "hB", "hb", "H"],
        KY: ["h", "hb", "H", "hB"],
        KZ: ["H", "hB"],
        LA: ["H", "hb", "hB", "h"],
        LB: ["h", "hB", "hb", "H"],
        LC: ["h", "hb", "H", "hB"],
        LI: ["H", "hB", "h"],
        LK: ["H", "h", "hB", "hb"],
        LR: ["h", "hb", "H", "hB"],
        LS: ["h", "H"],
        LT: ["H", "h", "hb", "hB"],
        LU: ["H", "h", "hB"],
        LV: ["H", "hB", "hb", "h"],
        LY: ["h", "hB", "hb", "H"],
        MA: ["H", "h", "hB", "hb"],
        MC: ["H", "hB"],
        MD: ["H", "hB"],
        ME: ["H", "hB", "h"],
        MF: ["H", "hB"],
        MG: ["H", "h"],
        MH: ["h", "hb", "H", "hB"],
        MK: ["H", "h", "hb", "hB"],
        ML: ["H"],
        MM: ["hB", "hb", "H", "h"],
        MN: ["H", "h", "hb", "hB"],
        MO: ["h", "hB", "hb", "H"],
        MP: ["h", "hb", "H", "hB"],
        MQ: ["H", "hB"],
        MR: ["h", "hB", "hb", "H"],
        MS: ["H", "h", "hb", "hB"],
        MT: ["H", "h"],
        MU: ["H", "h"],
        MV: ["H", "h"],
        MW: ["h", "hb", "H", "hB"],
        MX: ["H", "h", "hB", "hb"],
        MY: ["hb", "hB", "h", "H"],
        MZ: ["H", "hB"],
        NA: ["h", "H", "hB", "hb"],
        NC: ["H", "hB"],
        NE: ["H"],
        NF: ["H", "h", "hb", "hB"],
        NG: ["H", "h", "hb", "hB"],
        NI: ["H", "h", "hB", "hb"],
        NL: ["H", "hB"],
        NO: ["H", "h"],
        NP: ["H", "h", "hB"],
        NR: ["H", "h", "hb", "hB"],
        NU: ["H", "h", "hb", "hB"],
        NZ: ["h", "hb", "H", "hB"],
        OM: ["h", "hB", "hb", "H"],
        PA: ["h", "H", "hB", "hb"],
        PE: ["H", "hB", "h", "hb"],
        PF: ["H", "h", "hB"],
        PG: ["h", "H"],
        PH: ["h", "hB", "hb", "H"],
        PK: ["h", "hB", "H"],
        PL: ["H", "h"],
        PM: ["H", "hB"],
        PN: ["H", "h", "hb", "hB"],
        PR: ["h", "H", "hB", "hb"],
        PS: ["h", "hB", "hb", "H"],
        PT: ["H", "hB"],
        PW: ["h", "H"],
        PY: ["H", "h", "hB", "hb"],
        QA: ["h", "hB", "hb", "H"],
        RE: ["H", "hB"],
        RO: ["H", "hB"],
        RS: ["H", "hB", "h"],
        RU: ["H"],
        RW: ["H", "h"],
        SA: ["h", "hB", "hb", "H"],
        SB: ["h", "hb", "H", "hB"],
        SC: ["H", "h", "hB"],
        SD: ["h", "hB", "hb", "H"],
        SE: ["H"],
        SG: ["h", "hb", "H", "hB"],
        SH: ["H", "h", "hb", "hB"],
        SI: ["H", "hB"],
        SJ: ["H"],
        SK: ["H"],
        SL: ["h", "hb", "H", "hB"],
        SM: ["H", "h", "hB"],
        SN: ["H", "h", "hB"],
        SO: ["h", "H"],
        SR: ["H", "hB"],
        SS: ["h", "hb", "H", "hB"],
        ST: ["H", "hB"],
        SV: ["H", "h", "hB", "hb"],
        SX: ["H", "h", "hb", "hB"],
        SY: ["h", "hB", "hb", "H"],
        SZ: ["h", "hb", "H", "hB"],
        TA: ["H", "h", "hb", "hB"],
        TC: ["h", "hb", "H", "hB"],
        TD: ["h", "H", "hB"],
        TF: ["H", "h", "hB"],
        TG: ["H", "hB"],
        TH: ["H", "h"],
        TJ: ["H", "h"],
        TL: ["H", "hB", "hb", "h"],
        TM: ["H", "h"],
        TN: ["h", "hB", "hb", "H"],
        TO: ["h", "H"],
        TR: ["H", "hB"],
        TT: ["h", "hb", "H", "hB"],
        TW: ["hB", "hb", "h", "H"],
        TZ: ["hB", "hb", "H", "h"],
        UA: ["H", "hB", "h"],
        UG: ["hB", "hb", "H", "h"],
        UM: ["h", "hb", "H", "hB"],
        US: ["h", "hb", "H", "hB"],
        UY: ["H", "h", "hB", "hb"],
        UZ: ["H", "hB", "h"],
        VA: ["H", "h", "hB"],
        VC: ["h", "hb", "H", "hB"],
        VE: ["h", "H", "hB", "hb"],
        VG: ["h", "hb", "H", "hB"],
        VI: ["h", "hb", "H", "hB"],
        VN: ["H", "h"],
        VU: ["h", "H"],
        WF: ["H", "hB"],
        WS: ["h", "H"],
        XK: ["H", "hB", "h"],
        YE: ["h", "hB", "hb", "H"],
        YT: ["H", "hB"],
        ZA: ["H", "h", "hb", "hB"],
        ZM: ["h", "hb", "H", "hB"],
        ZW: ["H", "h"],
        "af-ZA": ["H", "h", "hB", "hb"],
        "ar-001": ["h", "hB", "hb", "H"],
        "ca-ES": ["H", "h", "hB"],
        "en-001": ["h", "hb", "H", "hB"],
        "es-BO": ["H", "h", "hB", "hb"],
        "es-BR": ["H", "h", "hB", "hb"],
        "es-EC": ["H", "h", "hB", "hb"],
        "es-ES": ["H", "h", "hB", "hb"],
        "es-GQ": ["H", "h", "hB", "hb"],
        "es-PE": ["H", "h", "hB", "hb"],
        "fr-CA": ["H", "h", "hB"],
        "gl-ES": ["H", "h", "hB"],
        "gu-IN": ["hB", "hb", "h", "H"],
        "hi-IN": ["hB", "h", "H"],
        "it-CH": ["H", "h", "hB"],
        "it-IT": ["H", "h", "hB"],
        "kn-IN": ["hB", "h", "H"],
        "ml-IN": ["hB", "h", "H"],
        "mr-IN": ["hB", "hb", "h", "H"],
        "pa-IN": ["hB", "hb", "h", "H"],
        "ta-IN": ["hB", "h", "hb", "H"],
        "te-IN": ["hB", "h", "H"],
        "zu-ZA": ["H", "hB", "hb", "h"]
      };

      function cf(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var n, r = e.language;
        return "root" !== r && (n = e.maximize().region), (lf[n || ""] || lf[r || ""] || lf["".concat(r, "-001")] || lf["001"])[0]
      }
      var uf = new RegExp("^".concat(Wd.source, "*")),
        df = new RegExp("".concat(Wd.source, "*$"));

      function ff(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var hf = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        pf = !!String.fromCodePoint,
        mf = !!Object.fromEntries,
        vf = !!String.prototype.codePointAt,
        gf = !!String.prototype.trimStart,
        yf = !!String.prototype.trimEnd,
        bf = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        wf = !0;
      try {
        wf = "a" === (null === (sf = Of("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === sf ? void 0 : sf[0])
      } catch (e) {
        wf = !1
      }
      var Ef, _f = hf ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Pf = pf ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Cf = mf ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Sf = vf ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Tf = gf ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(uf, "")
        },
        xf = yf ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(df, "")
        };

      function Of(e, t) {
        return new RegExp(e, t)
      }
      if (wf) {
        var Lf = Of("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Ef = function(e, t) {
          var n;
          return Lf.lastIndex = t, null !== (n = Lf.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else Ef = function(e, t) {
        for (var n = [];;) {
          var r = Sf(e, t);
          if (void 0 === r || Nf(r) || Af(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Pf.apply(void 0, n)
      };

      function kf(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Nf(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Af(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Rf(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, Jc.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function Mf(e, t) {
        return Object.keys((0, Jc.__assign)((0, Jc.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, Jc.__assign)((0, Jc.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function Df(e, t) {
        if (!t) return e;
        var n = gd.formats;
        return (0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, n), e), {
          date: Mf(Rf(n.date, t), Rf(e.date || {}, t)),
          time: Mf(Rf(n.time, t), Rf(e.time || {}, t))
        })
      }! function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, n) {
          for (var r = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, n)).err) return i;
              r.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(Ud.UNMATCHED_CLOSING_TAG, ff(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && kf(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  r.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  r.push(i.val)
                }
              } else {
                var a = this.clonePosition();
                this.bump(), r.push({
                  type: Vd.pound,
                  location: ff(a, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var n = this.clonePosition();
          this.bump();
          var r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: Vd.literal,
              value: "<".concat(r, "/>"),
              location: ff(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !kf(this.char())) return this.error(Ud.INVALID_TAG, ff(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ud.UNMATCHED_CLOSING_TAG, ff(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Vd.tag,
                  value: r,
                  children: i,
                  location: ff(n, this.clonePosition())
                },
                err: null
              } : this.error(Ud.INVALID_TAG, ff(a, this.clonePosition())))
            }
            return this.error(Ud.UNCLOSED_TAG, ff(n, this.clonePosition()))
          }
          return this.error(Ud.INVALID_TAG, ff(n, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var n = this.clonePosition(), r = "";;) {
            var o = this.tryParseQuote(t);
            if (o) r += o;
            else {
              var i = this.tryParseUnquoted(e, t);
              if (i) r += i;
              else {
                var a = this.tryParseLeftAngleBracket();
                if (!a) break;
                r += a
              }
            }
          }
          var s = ff(n, this.clonePosition());
          return {
            val: {
              type: Vd.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (kf(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var n = this.char();
            if (39 === n) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(n);
            this.bump()
          }
          return Pf.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Pf(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ud.EXPECT_ARGUMENT_CLOSING_BRACE, ff(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ud.EMPTY_ARGUMENT, ff(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ud.MALFORMED_ARGUMENT, ff(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ud.EXPECT_ARGUMENT_CLOSING_BRACE, ff(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Vd.argument,
                  value: r,
                  location: ff(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ud.EXPECT_ARGUMENT_CLOSING_BRACE, ff(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Ud.MALFORMED_ARGUMENT, ff(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = Ef(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: ff(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ud.EXPECT_ARGUMENT_TYPE, ff(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = xf(g.val)).length) return this.error(Ud.EXPECT_ARGUMENT_STYLE, ff(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: ff(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = ff(r, this.clonePosition());
              if (l && _f(null == l ? void 0 : l.style, "::", 0)) {
                var d = Tf(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: Vd.number,
                    value: n,
                    location: u,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ud.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = cf(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: zd.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Xd(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Vd.date : Vd.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Vd.number : "date" === a ? Vd.date : Vd.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ud.EXPECT_SELECT_ARGUMENT_OPTIONS, ff(p, (0, Jc.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ud.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ff(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Ud.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ud.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = ff(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Vd.select,
                  value: n,
                  options: Cf(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Vd.plural,
                  value: n,
                  options: Cf(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Ud.INVALID_ARGUMENT_TYPE, ff(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ud.EXPECT_ARGUMENT_CLOSING_BRACE, ff(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ud.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ff(n, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], n = 0, r = e.split(Yd).filter((function(e) {
                  return e.length > 0
                })); n < r.length; n++) {
                var o = r[n].split("/");
                if (0 === o.length) throw new Error("Invalid number skeleton");
                for (var i = o[0], a = o.slice(1), s = 0, l = a; s < l.length; s++)
                  if (0 === l[s].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: i,
                  options: a
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Ud.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: zd.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? af(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ud.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ud.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = ff(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ud.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ud.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ud.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ud.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ff(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: ff(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ud.EXPECT_SELECT_ARGUMENT_SELECTOR : Ud.EXPECT_PLURAL_ARGUMENT_SELECTOR, ff(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ud.MISSING_OTHER_CLAUSE, ff(this.clonePosition(), this.clonePosition())) : {
            val: a,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var n = 1,
            r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          for (var o = !1, i = 0; !this.isEOF();) {
            var a = this.char();
            if (!(a >= 48 && a <= 57)) break;
            o = !0, i = 10 * i + (a - 48), this.bump()
          }
          var s = ff(r, this.clonePosition());
          return o ? bf(i *= n) ? {
            val: i,
            err: null
          } : this.error(t, s) : this.error(e, s)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = Sf(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (_f(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Nf(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }();
      var jf = function(e, t, n, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            c = e.defaultFormats,
            u = e.fallbackOnEmptyString,
            d = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === n && (n = {
            id: ""
          });
          var p = n.id,
            m = n.defaultMessage;
          ! function(e, t, n) {
            if (void 0 === n && (n = Error), !e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!p);
          var v = String(p),
            g = s && Object.prototype.hasOwnProperty.call(s, v) && s[v];
          if (Array.isArray(g) && 1 === g.length && g[0].type === Vd.literal) return g[0].value;
          if (!r && g && "string" == typeof g && !h) return g.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Jc.__assign)((0, Jc.__assign)({}, h), r || {}), a = Df(a, f), c = Df(c, f), !g) {
            if (!1 === u && "" === g) return g;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Md(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
            } catch (e) {
              return d(new Rd('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(g, i, a, (0, Jc.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Rd('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new Rd('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof g ? g : "string" == typeof m ? m : v
        },
        If = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function Hf(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Hd(o, "number", a, i) || {};
        return t(r, Dd(n, If, s))
      }

      function Bf(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return Hf(e, t, r).format(n)
        } catch (t) {
          e.onError(new Ad("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function Ff(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return Hf(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Ad("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Uf = ["numeric", "style"];

      function Vf(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new ud('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', ad.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Hd(o, "relative", a, i) || {};
            return t(r, Dd(n, Uf, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Ad("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var zf = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Gf(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, Jc.__assign)((0, Jc.__assign)({}, s && {
            timeZone: s
          }), l && Hd(i, t, l, a)),
          u = Dd(r, zf, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, Jc.__assign)((0, Jc.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function Kf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Gf(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Ad("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function qf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Gf(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Ad("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Wf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Dd(s, zf, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Ad("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function $f(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Gf(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ad("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Xf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Gf(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Ad("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Yf = ["type"];

      function Zf(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new ud('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', ad.MISSING_INTL_API));
        var a = Dd(r, Yf);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Ad("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Qf = ["type", "style"],
        Jf = Date.now();

      function eh(e, t, n, r) {
        void 0 === r && (r = {});
        var o = th(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function th(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new ud('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', ad.MISSING_INTL_API));
        var a = Dd(r, Qf);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Jf, "_").concat(e, "_").concat(Jf)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, Jc.__assign)((0, Jc.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Ad("Error formatting list.", o, e))
        }
        return n
      }
      var nh = ["style", "type", "fallback", "languageDisplay"];

      function rh(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new ud('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', ad.MISSING_INTL_API));
        var a = Dd(r, nh);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Ad("Error formatting display name.", o, e))
        }
      }

      function oh(e, t) {
        var n = function(e) {
            void 0 === e && (e = {
              dateTime: {},
              number: {},
              message: {},
              relativeTime: {},
              pluralRules: {},
              list: {},
              displayNames: {}
            });
            var t = Intl.RelativeTimeFormat,
              n = Intl.ListFormat,
              r = Intl.DisplayNames,
              o = yd((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Id(e.dateTime),
                strategy: xd.variadic
              }),
              i = yd((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Id(e.number),
                strategy: xd.variadic
              }),
              a = yd((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Jc.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Id(e.pluralRules),
                strategy: xd.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: yd((function(e, t, n, r) {
                return new gd(e, t, n, (0, Jc.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Id(e.message),
                strategy: xd.variadic
              }),
              getRelativeTimeFormat: yd((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Jc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Id(e.relativeTime),
                strategy: xd.variadic
              }),
              getPluralRules: a,
              getListFormat: yd((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Jc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Id(e.list),
                strategy: xd.variadic
              }),
              getDisplayNames: yd((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Jc.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Id(e.displayNames),
                strategy: xd.variadic
              })
            }
          }(t),
          r = (0, Jc.__assign)((0, Jc.__assign)({}, jd), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Nd('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Nd('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new kd('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Jc.__assign)((0, Jc.__assign)({}, r), {
            formatters: n,
            formatNumber: Bf.bind(null, r, n.getNumberFormat),
            formatNumberToParts: Ff.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Vf.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Kf.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: $f.bind(null, r, n.getDateTimeFormat),
            formatTime: qf.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Wf.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Xf.bind(null, r, n.getDateTimeFormat),
            formatPlural: Zf.bind(null, r, n.getPluralRules),
            formatMessage: jf.bind(null, r, n),
            $t: jf.bind(null, r, n),
            formatList: eh.bind(null, r, n.getListFormat),
            formatListToParts: th.bind(null, r, n.getListFormat),
            formatDisplayName: rh.bind(null, r, n.getDisplayNames)
          })
      }

      function ih(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = pd(o) ? (r = o, function(e) {
            return r(s.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }
      var ah = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = ih(r),
            l = jf.apply(void 0, (0, Jc.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(l) ? s.Children.toArray(l) : l
        },
        sh = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, Jc.__rest)(e, ["defaultRichTextElements"]),
            o = ih(n),
            i = oh((0, Jc.__assign)((0, Jc.__assign)((0, Jc.__assign)({}, Fd), r), {
              defaultRichTextElements: o
            }), t),
            a = {
              locale: i.locale,
              timeZone: i.timeZone,
              fallbackOnEmptyString: i.fallbackOnEmptyString,
              formats: i.formats,
              defaultLocale: i.defaultLocale,
              defaultFormats: i.defaultFormats,
              messages: i.messages,
              onError: i.onError,
              defaultRichTextElements: o
            };
          return (0, Jc.__assign)((0, Jc.__assign)({}, i), {
            formatMessage: ah.bind(null, a, i.formatters),
            $t: ah.bind(null, a, i.formatters)
          })
        };

      function lh(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements
        }
      }
      var ch = function(e) {
        function t() {
          var t = null !== e && e.apply(this, arguments) || this;
          return t.cache = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }, t.state = {
            cache: t.cache,
            intl: sh(lh(t.props), t.cache),
            prevConfig: lh(t.props)
          }, t
        }
        return (0, Jc.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = lh(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var n = Object.keys(e),
              r = Object.keys(t),
              o = n.length;
            if (r.length !== o) return !1;
            for (var i = 0; i < o; i++) {
              var a = n[i];
              if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
            }
            return !0
          }(n, o) ? null : {
            intl: sh(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Bd(this.state.intl), s.createElement(Kd, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Fd, t
      }(s.PureComponent);
      const uh = ch;

      function dh() {
        var e = s.useContext(qd);
        return Bd(e), e
      }
      var fh, hh;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(fh || (fh = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(hh || (hh = {}));
      var ph = function(e) {
        var t = dh(),
          n = e.value,
          r = e.children,
          o = (0, Jc.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function mh(e) {
        var t = function(t) {
          var n = dh(),
            r = t.value,
            o = t.children,
            i = (0, Jc.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = hh[e], t
      }

      function vh(e) {
        var t = function(t) {
          var n = dh(),
            r = t.value,
            o = t.children,
            i = (0, Jc.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var l = n.textComponent || s.Fragment;
          return s.createElement(l, null, a)
        };
        return t.displayName = fh[e], t
      }
      ph.displayName = "FormattedNumberParts", ph.displayName = "FormattedNumberParts", vh("formatDate"), vh("formatTime"), vh("formatNumber"), vh("formatList"), vh("formatDisplayName"), mh("formatDate"), mh("formatTime");
      const gh = ({
          children: e,
          messages: t,
          locale: n,
          fallback: r
        }) => {
          const [o, a] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            (t?.[n] ?? t["en-US"]).then((e => {
              a(e.default)
            }))
          }), [n]), o ? (0, i.jsx)(uh, {
            locale: n,
            messages: o,
            children: e
          }) : r || null
        },
        yh = {
          id: "Lightbox_Open_Button_Label"
        },
        bh = {
          id: "Lightbox_Dialog_Title"
        },
        wh = {
          id: "Lightbox_Dialog_Description"
        },
        Eh = {
          "en-US": n.e(5309).then(n.bind(n, 35309)),
          "de-DE": n.e(3954).then(n.bind(n, 83954)),
          "es-ES": n.e(6864).then(n.bind(n, 16864)),
          "es-MX": n.e(6521).then(n.bind(n, 16521)),
          "fr-FR": n.e(9292).then(n.bind(n, 69292)),
          "it-IT": n.e(9130).then(n.bind(n, 69130)),
          "ja-JP": n.e(9157).then(n.bind(n, 19157)),
          "ko-KR": n.e(707).then(n.bind(n, 70707)),
          "pl-PL": n.e(6304).then(n.bind(n, 96304)),
          "pt-BR": n.e(3360).then(n.bind(n, 13360)),
          "ru-RU": n.e(7070).then(n.bind(n, 64689)),
          "zh-CN": n.e(3131).then(n.bind(n, 23131)),
          "zh-TW": n.e(3759).then(n.bind(n, 93759))
        },
        _h = (e, t) => {
          const n = "more" === t ? Io.lightHc : Io.light,
            r = "more" === t ? Io.darkHc : Io.dark;
          return "dark" === e ? r : n
        };

      function Ph(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Ch(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function Sh(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Th(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map((e => s.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = s.createContext(r),
            a = n.length;

          function l(t) {
            const {
              scope: n,
              children: r,
              ...l
            } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
            return (0, i.jsx)(c.Provider, {
              value: u,
              children: r
            })
          }
          return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
            const l = i?.[e][a] || o,
              c = s.useContext(l);
            if (c) return c;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, xh(r, ...t)]
      }

      function xh(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Oh(e) {
        const t = s.useRef(e);
        return s.useEffect((() => {
          t.current = e
        })), s.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function Lh({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = s.useState(e),
            [r] = n,
            o = s.useRef(r),
            i = Oh(t);
          return s.useEffect((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = Oh(n);
        return [a, s.useCallback((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l])]
      }
      var kh = s.createContext(void 0);

      function Nh(e) {
        const t = s.useContext(kh);
        return e || t || "ltr"
      }

      function Ah(e) {
        const t = s.useRef({
          value: e,
          previous: e
        });
        return s.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var Rh = Boolean(globalThis?.document) ? s.useLayoutEffect : () => {};

      function Mh(e) {
        const [t, n] = s.useState(void 0);
        return Rh((() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const r = t[0];
              let o, i;
              if ("borderBoxSize" in r) {
                const e = r.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                o = t.inlineSize, i = t.blockSize
              } else o = e.offsetWidth, i = e.offsetHeight;
              n({
                width: o,
                height: i
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }), [e]), t
      }
      var Dh = n(50786),
        jh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        Ih = ["PageUp", "PageDown"],
        Hh = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Bh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Fh = "Slider",
        [Uh, Vh, zh] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = Th(t),
            [o, a] = n(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            l = e => {
              const {
                scope: t,
                children: n
              } = e, r = s.useRef(null), a = s.useRef(new Map).current;
              return (0, i.jsx)(o, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
              })
            };
          l.displayName = t;
          const c = e + "CollectionSlot",
            u = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = Sh(t, a(c, n).collectionRef);
              return (0, i.jsx)(Dh.DX, {
                ref: o,
                children: r
              })
            }));
          u.displayName = c;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            h = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r,
                ...o
              } = e, l = s.useRef(null), c = Sh(t, l), u = a(d, n);
              return s.useEffect((() => (u.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                u.itemMap.delete(l)
              }))), (0, i.jsx)(Dh.DX, {
                [f]: "",
                ref: c,
                children: r
              })
            }));
          return h.displayName = d, [{
            Provider: l,
            Slot: u,
            ItemSlot: h
          }, function(t) {
            const n = a(e + "CollectionConsumer", t);
            return s.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
            }), [n.collectionRef, n.itemMap])
          }, r]
        }(Fh),
        [Gh, Kh] = Th(Fh, [zh]),
        [qh, Wh] = Gh(Fh),
        $h = s.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: a = 1,
            orientation: l = "horizontal",
            disabled: c = !1,
            minStepsBetweenThumbs: u = 0,
            defaultValue: d = [r],
            value: f,
            onValueChange: h = (() => {}),
            onValueCommit: p = (() => {}),
            inverted: m = !1,
            ...v
          } = e, g = s.useRef(new Set), y = s.useRef(0), b = "horizontal" === l ? Zh : Qh, [w = [], E] = Lh({
            prop: f,
            defaultProp: d,
            onChange: e => {
              const t = [...g.current];
              t[y.current]?.focus(), h(e)
            }
          }), _ = s.useRef(w);

          function P(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / a) * a + r, i),
              l = Ph(s, [r, o]);
            E(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, u * a)) {
                y.current = r.indexOf(l);
                const t = String(r) !== String(e);
                return t && n && p(r), t ? r : e
              }
              return e
            }))
          }
          return (0, i.jsx)(qh, {
            scope: e.__scopeSlider,
            name: n,
            disabled: c,
            min: r,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: g.current,
            values: w,
            orientation: l,
            children: (0, i.jsx)(Uh.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(Uh.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(b, {
                  "aria-disabled": c,
                  "data-disabled": c ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Ch(v.onPointerDown, (() => {
                    c || (_.current = w)
                  })),
                  min: r,
                  max: o,
                  inverted: m,
                  onSlideStart: c ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(w, e);
                    P(e, t)
                  },
                  onSlideMove: c ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: c ? void 0 : function() {
                    const e = _.current[y.current];
                    w[y.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !c && P(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !c && P(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!c) {
                      const n = Ih.includes(e.key) || e.shiftKey && Hh.includes(e.key) ? 10 : 1,
                        r = y.current;
                      P(w[r] + a * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      $h.displayName = Fh;
      var [Xh, Yh] = Gh(Fh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Zh = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: a,
          onSlideStart: l,
          onSlideMove: c,
          onSlideEnd: u,
          onStepKeyDown: d,
          ...f
        } = e, [h, p] = s.useState(null), m = Sh(t, (e => p(e))), v = s.useRef(), g = Nh(o), y = "ltr" === g, b = y && !a || !y && a;

        function w(e) {
          const t = v.current || h.getBoundingClientRect(),
            o = cp([0, t.width], b ? [n, r] : [r, n]);
          return v.current = t, o(e - t.left)
        }
        return (0, i.jsx)(Xh, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(Jh, {
            dir: g,
            "data-orientation": "horizontal",
            ...f,
            ref: m,
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
              c?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = Bh[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Qh = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: l,
          onSlideEnd: c,
          onStepKeyDown: u,
          ...d
        } = e, f = s.useRef(null), h = Sh(t, f), p = s.useRef(), m = !o;

        function v(e) {
          const t = p.current || f.current.getBoundingClientRect(),
            o = cp([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, i.jsx)(Xh, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, i.jsx)(Jh, {
            "data-orientation": "vertical",
            ...d,
            ref: h,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = v(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = v(e.clientY);
              l?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = Bh[m ? "from-bottom" : "from-top"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Jh = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: c,
          ...u
        } = e, d = Wh(Fh, n);
        return (0, i.jsx)(jh.span, {
          ...u,
          ref: t,
          onKeyDown: Ch(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : Ih.concat(Hh).includes(e.key) && (c(e), e.preventDefault())
          })),
          onPointerDown: Ch(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Ch(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Ch(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), ep = "SliderTrack", tp = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Wh(ep, n);
        return (0, i.jsx)(jh.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      tp.displayName = ep;
      var np = "SliderRange",
        rp = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Wh(np, n), a = Yh(np, n), l = Sh(t, s.useRef(null)), c = o.values.length, u = o.values.map((e => lp(e, o.min, o.max))), d = c > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
          return (0, i.jsx)(jh.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: l,
            style: {
              ...e.style,
              [a.startEdge]: d + "%",
              [a.endEdge]: f + "%"
            }
          })
        }));
      rp.displayName = np;
      var op = "SliderThumb",
        ip = s.forwardRef(((e, t) => {
          const n = Vh(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = Sh(t, (e => o(e))),
            l = s.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, i.jsx)(ap, {
            ...e,
            ref: a,
            index: l
          })
        })),
        ap = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...a
          } = e, l = Wh(op, n), c = Yh(op, n), [u, d] = s.useState(null), f = Sh(t, (e => d(e))), h = !u || Boolean(u.closest("form")), p = Mh(u), m = l.values[r], v = void 0 === m ? 0 : lp(m, l.min, l.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, l.values.length), y = p?.[c.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - cp([0, 50], [0, r])(t) * n) * n
          }(y, v, c.direction) : 0;
          return s.useEffect((() => {
            if (u) return l.thumbs.add(u), () => {
              l.thumbs.delete(u)
            }
          }), [u, l.thumbs]), (0, i.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [c.startEdge]: `calc(${v}% + ${b}px)`
            },
            children: [(0, i.jsx)(Uh.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(jh.span, {
                role: "slider",
                "aria-label": e["aria-label"] || g,
                "aria-valuemin": l.min,
                "aria-valuenow": m,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...a,
                ref: f,
                style: void 0 === m ? {
                  display: "none"
                } : e.style,
                onFocus: Ch(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = r
                }))
              })
            }), h && (0, i.jsx)(sp, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              value: m
            }, r)]
          })
        }));
      ip.displayName = op;
      var sp = e => {
        const {
          value: t,
          ...n
        } = e, r = s.useRef(null), o = Ah(t);
        return s.useEffect((() => {
          const e = r.current,
            n = window.HTMLInputElement.prototype,
            i = Object.getOwnPropertyDescriptor(n, "value").set;
          if (o !== t && i) {
            const n = new Event("input", {
              bubbles: !0
            });
            i.call(e, t), e.dispatchEvent(n)
          }
        }), [o, t]), (0, i.jsx)("input", {
          style: {
            display: "none"
          },
          ...n,
          ref: r,
          defaultValue: t
        })
      };

      function lp(e, t, n) {
        return Ph(100 / (n - t) * (e - t), [0, 100])
      }

      function cp(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      var up = $h,
        dp = tp,
        fp = rp,
        hp = ip;
      const pp = {
          id: "Lightbox_Close_Button_Label"
        },
        mp = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        vp = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        gp = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        yp = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        bp = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        wp = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Ep = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        _p = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Pp = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Cp = {
          id: "Lightbox_Download_Button_Label"
        },
        Sp = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function Tp() {
        return Tp = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Tp.apply(this, arguments)
      }
      var xp = ["shift", "alt", "meta", "mod", "ctrl"],
        Op = {
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

      function Lp(e) {
        return (Op[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function kp(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Np(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Lp(e)
        }));
        return Tp({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !xp.includes(e)
          })),
          description: n
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Mp([Lp(e.key), Lp(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Dp([Lp(e.key), Lp(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Ap.clear()
      }));
      var Ap = new Set;

      function Rp(e) {
        return Array.isArray(e)
      }

      function Mp(e) {
        var t = Array.isArray(e) ? e : [e];
        Ap.has("meta") && Ap.forEach((function(e) {
          return ! function(e) {
            return xp.includes(e)
          }(e) && Ap.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Ap.add(e.toLowerCase())
        }))
      }

      function Dp(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Ap.clear() : t.forEach((function(e) {
          return Ap.delete(e.toLowerCase())
        }))
      }

      function jp(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return Rp(t) ? Boolean(r && t && t.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && t && !0 === t)
      }
      var Ip = (0, s.createContext)(void 0);

      function Hp(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(Ip.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Bp(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Bp(e[r], t[r])
        }), !0) : e === t
      }
      var Fp = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Up = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, s.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = o[0],
            l = o[1],
            c = (0, s.useState)([]),
            u = c[0],
            d = c[1],
            f = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, s.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            m = (0, s.useCallback)((function(e) {
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            v = (0, s.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !Bp(t, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(Fp.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: u,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, i.jsx)(Hp, {
              addHotkey: m,
              removeHotkey: v,
              children: r
            })
          })
        },
        Vp = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        zp = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function Gp(e, t, n, r) {
        var o = (0, s.useRef)(null),
          i = (0, s.useRef)(!1),
          a = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          l = Rp(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          c = n instanceof Array ? n : r instanceof Array ? r : void 0,
          u = (0, s.useCallback)(t, null != c ? c : []),
          d = (0, s.useRef)(u);
        d.current = c ? u : t;
        var f = function(e) {
            var t = (0, s.useRef)(void 0);
            return Bp(t.current, e) || (t.current = e), t.current
          }(a),
          h = (0, s.useContext)(Fp).enabledScopes,
          p = (0, s.useContext)(Ip);
        return zp((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = h, t = null == f ? void 0 : f.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !jp(e, ["input", "textarea", "select"]) || jp(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void Vp(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != f && f.enableOnContentEditable) && kp(l, null == f ? void 0 : f.splitKey).forEach((function(n) {
                    var r, o = Np(n, null == f ? void 0 : f.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          g = Lp(f),
                          y = d.toLowerCase();
                        if (!(null != u && u.includes(g) || null != u && u.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(g))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (c === !h && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(g)) || (u ? (void 0 === o && (o = ","), (Rp(r = u) ? r : r.split(o)).every((function(e) {
                          return Ap.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == f ? void 0 : f.enabled)) return void Vp(e);
                      d.current(e, o), t || (i.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Mp(Lp(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && n(e))
              },
              s = function(e) {
                void 0 !== e.key && (Dp(Lp(e.code)), i.current = !1, null != f && f.keyup && n(e, !0))
              },
              c = o.current || (null == a ? void 0 : a.document) || document;
            return c.addEventListener("keyup", s), c.addEventListener("keydown", r), p && kp(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return p.addHotkey(Np(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                c.removeEventListener("keyup", s), c.removeEventListener("keydown", r), p && kp(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return p.removeHotkey(Np(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [l, f, h]), o
      }

      function Kp(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function qp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Wp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? qp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Kp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function $p(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Xp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Yp = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Wp(Wp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Xp(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $p(e.variantClassNames, (e => $p(e, (e => e.split(" ")[0]))))
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
      const Zp = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Qp = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: l,
          size: c = "MD",
          fullWidth: u = !1,
          onClick: d,
          children: h,
          ...m
        }, v) => {
          const g = (0, s.useRef)(null),
            y = St(g, v),
            {
              events: b,
              others: w
            } = (0, a.bZ)(m, {
              onPress: !1
            }),
            {
              buttonProps: E,
              isPressed: _
            } = nr({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? d?.(e)
            }, g),
            P = (0, a.v6)({
              ...E,
              className: n
            }, {
              ...b,
              role: "button",
              "data-pressed": _,
              "data-testid": e,
              className: Yp({
                appearance: l,
                size: c,
                fullWidth: u
              })
            }),
            C = fe[r],
            S = t ? f : "button",
            T = Zp[c];
          return (0, i.jsxs)(S, {
            ref: y,
            ...P,
            children: [C && (0, i.jsx)(C, {
              label: o || "",
              size: T
            }), (0, i.jsx)(p, {
              children: h
            })]
          })
        })),
        Jp = (0, s.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (Gp(e, (e => n?.(e)), [n]), (0, i.jsx)(Y, {
          className: (0, je.$)("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, i.jsx)("kbd", {
            ref: r,
            children: e
          })
        }))));
      var em = /^--/;

      function tm(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || em.test(e) || rm.hasOwnProperty(e) && rm[e] ? ("" + t).trim() : t + "px"
      }
      var nm = {},
        rm = {
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
        om = ["Webkit", "Ms", "Moz", "O"];
      rm = Object.keys(rm).reduce(((e, t) => (om.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), rm);
      var im = /^(matrix|translate|scale|rotate|skew)/,
        am = /^(translate)/,
        sm = /^(rotate|skew)/,
        lm = (e, t) => wa.num(e) && 0 !== e ? e + t : e,
        cm = (e, t) => wa.arr(e) ? e.every((e => cm(e, t))) : wa.num(e) ? e === t : parseFloat(e) === t,
        um = class extends nl {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>lm(e,"px"))).join(",")})`, cm(e, 0)]))), Pa(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (im.test(t)) {
                if (delete r[t], wa.und(e)) return;
                const n = am.test(t) ? "px" : sm.test(t) ? "deg" : "";
                o.push(Ca(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${lm(o,n)})`, cm(o, 0)] : e => [`${t}(${e.map((e=>lm(e,n))).join(",")})`, cm(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new dm(o, i)), super(r)
          }
        },
        dm = class extends _s {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return _a(this.inputs, ((n, r) => {
              const o = bs(n[0]),
                [i, a] = this.transforms[r](wa.arr(o) ? o : n.map(bs));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && _a(this.inputs, (e => _a(e, (e => ys(e) && Cs(e, this)))))
          }
          observerRemoved(e) {
            0 == e && _a(this.inputs, (e => _a(e, (e => ys(e) && Ss(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Es(this, e)
          }
        };
      ya.assign({
        batchedUpdates: g.unstable_batchedUpdates,
        createStringInterpolator: js,
        colors: za
      });
      var fm = cl(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: r,
              style: o,
              children: i,
              scrollTop: a,
              scrollLeft: s,
              viewBox: l,
              ...c
            } = t,
            u = Object.values(c),
            d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : nm[t] || (nm[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = tm(t, o[t]);
              em.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, u[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new um(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;

      function hm(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function pm(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function mm(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var vm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
        const n = s.forwardRef(((e, n) => {
          const {
            asChild: r,
            ...o
          } = e, a = r ? Dh.DX : t;
          return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
            ...o,
            ref: n
          })
        }));
        return n.displayName = `Primitive.${t}`, {
          ...e,
          [t]: n
        }
      }), {});

      function gm(e, t = globalThis?.document) {
        const n = Oh(e);
        s.useEffect((() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [n, t])
      }
      var ym, bm = "dismissableLayer.update",
        wm = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Em = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(wm), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = pm(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Pm("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...d.branches].some((e => e.contains(t)));
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && Pm("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p);
          return gm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (ym = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), _m(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = ym)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), _m())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(bm, e), () => document.removeEventListener(bm, e)
          }), []), (0, i.jsx)(vm.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: hm(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: hm(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: hm(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function _m() {
        const e = new CustomEvent(bm);
        document.dispatchEvent(e)
      }

      function Pm(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && g.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      Em.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(wm),
          r = s.useRef(null),
          o = pm(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(vm.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Cm = l["useId".toString()] || (() => {}),
        Sm = 0;

      function Tm(e) {
        const [t, n] = s.useState(Cm());
        return Rh((() => {
          e || n((e => e ?? String(Sm++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const xm = ["top", "right", "bottom", "left"],
        Om = Math.min,
        Lm = Math.max,
        km = Math.round,
        Nm = Math.floor,
        Am = e => ({
          x: e,
          y: e
        }),
        Rm = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Mm = {
          start: "end",
          end: "start"
        };

      function Dm(e, t, n) {
        return Lm(e, Om(t, n))
      }

      function jm(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Im(e) {
        return e.split("-")[0]
      }

      function Hm(e) {
        return e.split("-")[1]
      }

      function Bm(e) {
        return "x" === e ? "y" : "x"
      }

      function Fm(e) {
        return "y" === e ? "height" : "width"
      }

      function Um(e) {
        return ["top", "bottom"].includes(Im(e)) ? "y" : "x"
      }

      function Vm(e) {
        return Bm(Um(e))
      }

      function zm(e) {
        return e.replace(/start|end/g, (e => Mm[e]))
      }

      function Gm(e) {
        return e.replace(/left|right|bottom|top/g, (e => Rm[e]))
      }

      function Km(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function qm(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }

      function Wm(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = Um(t),
          a = Vm(t),
          s = Fm(a),
          l = Im(t),
          c = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          d = r.y + r.height / 2 - o.height / 2,
          f = r[s] / 2 - o[s] / 2;
        let h;
        switch (l) {
          case "top":
            h = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            h = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            h = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: r.x - o.width,
              y: d
            };
            break;
          default:
            h = {
              x: r.x,
              y: r.y
            }
        }
        switch (Hm(t)) {
          case "start":
            h[a] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            h[a] += f * (n && c ? -1 : 1)
        }
        return h
      }
      async function $m(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: s,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0
        } = jm(t, e), p = Km(h), m = s[f ? "floating" === d ? "reference" : "floating" : d], v = qm(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), g = "floating" === d ? {
          ...a.floating,
          x: r,
          y: o
        } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
          x: 1,
          y: 1
        }, w = qm(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: g,
          offsetParent: y,
          strategy: l
        }) : g);
        return {
          top: (v.top - w.top + p.top) / b.y,
          bottom: (w.bottom - v.bottom + p.bottom) / b.y,
          left: (v.left - w.left + p.left) / b.x,
          right: (w.right - v.right + p.right) / b.x
        }
      }
      const Xm = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: a,
              elements: s,
              middlewareData: l
            } = t, {
              element: c,
              padding: u = 0
            } = jm(e, t) || {};
            if (null == c) return {};
            const d = Km(u),
              f = {
                x: n,
                y: r
              },
              h = Vm(o),
              p = Fm(h),
              m = await a.getDimensions(c),
              v = "y" === h,
              g = v ? "top" : "left",
              y = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              w = i.reference[p] + i.reference[h] - f[h] - i.floating[p],
              E = f[h] - i.reference[h],
              _ = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c));
            let P = _ ? _[b] : 0;
            P && await (null == a.isElement ? void 0 : a.isElement(_)) || (P = s.floating[b] || i.floating[p]);
            const C = w / 2 - E / 2,
              S = P / 2 - m[p] / 2 - 1,
              T = Om(d[g], S),
              x = Om(d[y], S),
              O = T,
              L = P - m[p] - x,
              k = P / 2 - m[p] / 2 + C,
              N = Dm(O, k, L),
              A = !l.arrow && null != Hm(o) && k != N && i.reference[p] / 2 - (k < O ? T : x) - m[p] / 2 < 0,
              R = A ? k < O ? k - O : k - L : 0;
            return {
              [h]: f[h] + R,
              data: {
                [h]: N,
                centerOffset: k - N - R,
                ...A && {
                  alignmentOffset: R
                }
              },
              reset: A
            }
          }
        }),
        Ym = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: f,
                fallbackStrategy: h = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: m = !0,
                ...v
              } = jm(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const g = Im(o),
                y = Im(s) === s,
                b = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = f || (y || !m ? [Gm(s)] : function(e) {
                  const t = Gm(e);
                  return [zm(e), t, zm(t)]
                }(s));
              f || "none" === p || w.push(... function(e, t, n, r) {
                const o = Hm(e);
                let i = function(e, t, n) {
                  const r = ["left", "right"],
                    o = ["right", "left"],
                    i = ["top", "bottom"],
                    a = ["bottom", "top"];
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? o : r : t ? r : o;
                    case "left":
                    case "right":
                      return t ? i : a;
                    default:
                      return []
                  }
                }(Im(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(zm)))), i
              }(s, m, p, b));
              const E = [s, ...w],
                _ = await $m(t, v),
                P = [];
              let C = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && P.push(_[g]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Hm(e),
                    o = Vm(e),
                    i = Fm(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Gm(a)), [a, Gm(a)]
                }(o, a, b);
                P.push(_[e[0]], _[e[1]])
              }
              if (C = [...C, {
                  placement: o,
                  overflows: P
                }], !P.every((e => e <= 0))) {
                var S, T;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = E[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: C
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (T = C.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : T.placement;
                if (!n) switch (h) {
                  case "bestFit": {
                    var x;
                    const e = null == (x = C.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : x[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        };

      function Zm(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function Qm(e) {
        return xm.some((t => e[t] >= 0))
      }
      const Jm = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = jm(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = Zm(await $m(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: Qm(e)
                    }
                  }
                }
                case "escaped": {
                  const e = Zm(await $m(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: Qm(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        ev = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r
              } = t, o = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Im(n), s = Hm(n), l = "y" === Um(n), c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = jm(t, e);
                let {
                  mainAxis: f,
                  crossAxis: h,
                  alignmentAxis: p
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...d
                };
                return s && "number" == typeof p && (h = "end" === s ? -1 * p : p), l ? {
                  x: h * u,
                  y: f * c
                } : {
                  x: f * c,
                  y: h * u
                }
              }(t, e);
              return {
                x: n + o.x,
                y: r + o.y,
                data: o
              }
            }
          }
        },
        tv = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
                  fn: e => {
                    let {
                      x: t,
                      y: n
                    } = e;
                    return {
                      x: t,
                      y: n
                    }
                  }
                },
                ...l
              } = jm(e, t), c = {
                x: n,
                y: r
              }, u = await $m(t, l), d = Um(Im(o)), f = Bm(d);
              let h = c[f],
                p = c[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = Dm(h + u["y" === f ? "top" : "left"], h, h - u[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = Dm(p + u["y" === d ? "top" : "left"], p, p - u[e])
              }
              const m = s.fn({
                ...t,
                [f]: h,
                [d]: p
              });
              return {
                ...m,
                data: {
                  x: m.x - n,
                  y: m.y - r
                }
              }
            }
          }
        },
        nv = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = jm(e, t), u = {
                x: n,
                y: r
              }, d = Um(o), f = Bm(d);
              let h = u[f],
                p = u[d];
              const m = jm(s, t),
                v = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...m
                };
              if (l) {
                const e = "y" === f ? "height" : "width",
                  t = i.reference[f] - i.floating[e] + v.mainAxis,
                  n = i.reference[f] + i.reference[e] - v.mainAxis;
                h < t ? h = t : h > n && (h = n)
              }
              if (c) {
                var g, y;
                const e = "y" === f ? "width" : "height",
                  t = ["top", "left"].includes(Im(o)),
                  n = i.reference[d] - i.floating[e] + (t && (null == (g = a.offset) ? void 0 : g[d]) || 0) + (t ? 0 : v.crossAxis),
                  r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? v.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [f]: h,
                [d]: p
              }
            }
          }
        },
        rv = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              const {
                placement: n,
                rects: r,
                platform: o,
                elements: i
              } = t, {
                apply: a = (() => {}),
                ...s
              } = jm(e, t), l = await $m(t, s), c = Im(n), u = Hm(n), d = "y" === Um(n), {
                width: f,
                height: h
              } = r.floating;
              let p, m;
              "top" === c || "bottom" === c ? (p = c, m = u === (await (null == o.isRTL ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = c, p = "end" === u ? "top" : "bottom");
              const v = h - l[p],
                g = f - l[m],
                y = !t.middlewareData.shift;
              let b = v,
                w = g;
              if (d) {
                const e = f - l.left - l.right;
                w = u || y ? Om(g, e) : e
              } else {
                const e = h - l.top - l.bottom;
                b = u || y ? Om(v, e) : e
              }
              if (y && !u) {
                const e = Lm(l.left, 0),
                  t = Lm(l.right, 0),
                  n = Lm(l.top, 0),
                  r = Lm(l.bottom, 0);
                d ? w = f - 2 * (0 !== e || 0 !== t ? e + t : Lm(l.left, l.right)) : b = h - 2 * (0 !== n || 0 !== r ? n + r : Lm(l.top, l.bottom))
              }
              await a({
                ...t,
                availableWidth: w,
                availableHeight: b
              });
              const E = await o.getDimensions(i.floating);
              return f !== E.width || h !== E.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        };

      function ov(e) {
        return sv(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function iv(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function av(e) {
        var t;
        return null == (t = (sv(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function sv(e) {
        return e instanceof Node || e instanceof iv(e).Node
      }

      function lv(e) {
        return e instanceof Element || e instanceof iv(e).Element
      }

      function cv(e) {
        return e instanceof HTMLElement || e instanceof iv(e).HTMLElement
      }

      function uv(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof iv(e).ShadowRoot)
      }

      function dv(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = vv(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function fv(e) {
        return ["table", "td", "th"].includes(ov(e))
      }

      function hv(e) {
        const t = pv(),
          n = vv(e);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function pv() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function mv(e) {
        return ["html", "body", "#document"].includes(ov(e))
      }

      function vv(e) {
        return iv(e).getComputedStyle(e)
      }

      function gv(e) {
        return lv(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function yv(e) {
        if ("html" === ov(e)) return e;
        const t = e.assignedSlot || e.parentNode || uv(e) && e.host || av(e);
        return uv(t) ? t.host : t
      }

      function bv(e) {
        const t = yv(e);
        return mv(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : cv(t) && dv(t) ? t : bv(t)
      }

      function wv(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = bv(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = iv(o);
        return i ? t.concat(a, a.visualViewport || [], dv(o) ? o : [], a.frameElement && n ? wv(a.frameElement) : []) : t.concat(o, wv(o, [], n))
      }

      function Ev(e) {
        const t = vv(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = cv(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = km(n) !== i || km(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function _v(e) {
        return lv(e) ? e : e.contextElement
      }

      function Pv(e) {
        const t = _v(e);
        if (!cv(t)) return Am(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Ev(t);
        let a = (i ? km(n.width) : n.width) / r,
          s = (i ? km(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const Cv = Am(0);

      function Sv(e) {
        const t = iv(e);
        return pv() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Cv
      }

      function Tv(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = _v(e);
        let a = Am(1);
        t && (r ? lv(r) && (a = Pv(r)) : a = Pv(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== iv(e)) && t
        }(i, n, r) ? Sv(i) : Am(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = iv(i),
            t = r && lv(r) ? iv(r) : r;
          let n = e.frameElement;
          for (; n && r && t !== e;) {
            const e = Pv(n),
              t = n.getBoundingClientRect(),
              r = vv(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += o, c += i, n = iv(n).frameElement
          }
        }
        return qm({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function xv(e) {
        return Tv(av(e)).left + gv(e).scrollLeft
      }

      function Ov(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = iv(e),
            r = av(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = pv();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
          }
          return {
            width: i,
            height: a,
            x: s,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = av(e),
            n = gv(e),
            r = e.ownerDocument.body,
            o = Lm(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Lm(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + xv(e);
          const s = -n.scrollTop;
          return "rtl" === vv(r).direction && (a += Lm(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(av(e));
        else if (lv(t)) r = function(e, t) {
          const n = Tv(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = cv(e) ? Pv(e) : Am(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Sv(e);
          r = {
            ...t,
            x: t.x - n.x,
            y: t.y - n.y
          }
        }
        return qm(r)
      }

      function Lv(e, t) {
        const n = yv(e);
        return !(n === t || !lv(n) || mv(n)) && ("fixed" === vv(n).position || Lv(n, t))
      }

      function kv(e, t, n) {
        const r = cv(t),
          o = av(t),
          i = "fixed" === n,
          a = Tv(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Am(0);
        if (r || !r && !i)
          if (("body" !== ov(t) || dv(o)) && (s = gv(t)), r) {
            const e = Tv(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = xv(o));
        return {
          x: a.left + s.scrollLeft - l.x,
          y: a.top + s.scrollTop - l.y,
          width: a.width,
          height: a.height
        }
      }

      function Nv(e, t) {
        return cv(e) && "fixed" !== vv(e).position ? t ? t(e) : e.offsetParent : null
      }

      function Av(e, t) {
        const n = iv(e);
        if (!cv(e)) return n;
        let r = Nv(e, t);
        for (; r && fv(r) && "static" === vv(r).position;) r = Nv(r, t);
        return r && ("html" === ov(r) || "body" === ov(r) && "static" === vv(r).position && !hv(r)) ? n : r || function(e) {
          let t = yv(e);
          for (; cv(t) && !mv(t);) {
            if (hv(t)) return t;
            t = yv(t)
          }
          return null
        }(e) || n
      }
      const Rv = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: n,
            strategy: r
          } = e;
          const o = cv(n),
            i = av(n);
          if (n === i) return t;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            s = Am(1);
          const l = Am(0);
          if ((o || !o && "fixed" !== r) && (("body" !== ov(n) || dv(i)) && (a = gv(n)), cv(n))) {
            const e = Tv(n);
            s = Pv(n), l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop
          }
          return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - a.scrollLeft * s.x + l.x,
            y: t.y * s.y - a.scrollTop * s.y + l.y
          }
        },
        getDocumentElement: av,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = wv(e, [], !1).filter((e => lv(e) && "body" !== ov(e))),
                o = null;
              const i = "fixed" === vv(e).position;
              let a = i ? yv(e) : e;
              for (; lv(a) && !mv(a);) {
                const t = vv(a),
                  n = hv(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || dv(a) && !n && Lv(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = yv(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = Ov(t, n, o);
              return e.top = Lm(r.top, e.top), e.right = Om(r.right, e.right), e.bottom = Om(r.bottom, e.bottom), e.left = Lm(r.left, e.left), e
            }), Ov(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Av,
        getElementRects: async function(e) {
          let {
            reference: t,
            floating: n,
            strategy: r
          } = e;
          const o = this.getOffsetParent || Av,
            i = this.getDimensions;
          return {
            reference: kv(t, await o(n), r),
            floating: {
              x: 0,
              y: 0,
              ...await i(n)
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          return Ev(e)
        },
        getScale: Pv,
        isElement: lv,
        isRTL: function(e) {
          return "rtl" === vv(e).direction
        }
      };
      const Mv = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Rv,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: d
              } = Wm(c, r, l),
              f = r,
              h = {},
              p = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: m
              } = s[n], {
                x: v,
                y: g,
                data: y,
                reset: b
              } = await m({
                x: u,
                y: d,
                initialPlacement: r,
                placement: f,
                strategy: o,
                middlewareData: h,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != v ? v : u, d = null != g ? g : d, h = {
                ...h,
                [i]: {
                  ...h[i],
                  ...y
                }
              }, b && p <= 50 && (p++, "object" == typeof b && (b.placement && (f = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: u,
                y: d
              } = Wm(c, f, l))), n = -1)
            }
            return {
              x: u,
              y: d,
              placement: f,
              strategy: o,
              middlewareData: h
            }
          })(e, t, {
            ...o,
            platform: i
          })
        },
        Dv = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? Xm({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? Xm({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        });
      var jv = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

      function Iv(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Iv(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Iv(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Hv(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Bv(e, t) {
        const n = Hv(e);
        return Math.round(t * n) / n
      }

      function Fv(e) {
        const t = s.useRef(e);
        return jv((() => {
          t.current = e
        })), t
      }
      var Uv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        Vv = s.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, i.jsx)(Uv.svg, {
            ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, i.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        }));
      Vv.displayName = "Arrow";
      var zv = Vv;

      function Gv(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Kv(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var qv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        Wv = "Popper",
        [$v, Xv] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map((e => s.createContext(e)));
            return function(n) {
              const r = n?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              })), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = s.createContext(r),
              a = n.length;

            function l(t) {
              const {
                scope: n,
                children: r,
                ...l
              } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(c.Provider, {
                value: u,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                c = s.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Kv(r, ...t)]
        }(Wv),
        [Yv, Zv] = $v(Wv),
        Qv = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = s.useState(null);
          return (0, i.jsx)(Yv, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Qv.displayName = Wv;
      var Jv = "PopperAnchor",
        eg = s.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, a = Zv(Jv, n), l = s.useRef(null), c = Gv(t, l);
          return s.useEffect((() => {
            a.onAnchorChange(r?.current || l.current)
          })), r ? null : (0, i.jsx)(qv.div, {
            ...o,
            ref: c
          })
        }));
      eg.displayName = Jv;
      var tg = "PopperContent",
        [ng, rg] = $v(tg),
        og = s.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: l = 0,
            arrowPadding: c = 0,
            avoidCollisions: u = !0,
            collisionBoundary: d = [],
            collisionPadding: f = 0,
            sticky: h = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: v,
            ...y
          } = e, b = Zv(tg, n), [w, E] = s.useState(null), _ = Gv(t, (e => E(e))), [P, C] = s.useState(null), S = Mh(P), T = S?.width ?? 0, x = S?.height ?? 0, O = r + ("center" !== a ? "-" + a : ""), L = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, k = Array.isArray(d) ? d : [d], N = k.length > 0, A = {
            padding: L,
            boundary: k.filter(lg),
            altBoundary: N
          }, {
            refs: R,
            floatingStyles: M,
            placement: D,
            isPositioned: j,
            middlewareData: I
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: i,
                floating: a
              } = {},
              transform: l = !0,
              whileElementsMounted: c,
              open: u
            } = e, [d, f] = s.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [h, p] = s.useState(r);
            Iv(h, r) || p(r);
            const [m, v] = s.useState(null), [y, b] = s.useState(null), w = s.useCallback((e => {
              e != C.current && (C.current = e, v(e))
            }), [v]), E = s.useCallback((e => {
              e !== S.current && (S.current = e, b(e))
            }), [b]), _ = i || m, P = a || y, C = s.useRef(null), S = s.useRef(null), T = s.useRef(d), x = Fv(c), O = Fv(o), L = s.useCallback((() => {
              if (!C.current || !S.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: h
              };
              O.current && (e.platform = O.current), Mv(C.current, S.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                k.current && !Iv(T.current, t) && (T.current = t, g.flushSync((() => {
                  f(t)
                })))
              }))
            }), [h, t, n, O]);
            jv((() => {
              !1 === u && T.current.isPositioned && (T.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [u]);
            const k = s.useRef(!1);
            jv((() => (k.current = !0, () => {
              k.current = !1
            })), []), jv((() => {
              if (_ && (C.current = _), P && (S.current = P), _ && P) {
                if (x.current) return x.current(_, P, L);
                L()
              }
            }), [_, P, L, x]);
            const N = s.useMemo((() => ({
                reference: C,
                floating: S,
                setReference: w,
                setFloating: E
              })), [w, E]),
              A = s.useMemo((() => ({
                reference: _,
                floating: P
              })), [_, P]),
              R = s.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!A.floating) return e;
                const t = Bv(A.floating, d.x),
                  r = Bv(A.floating, d.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Hv(A.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, l, A.floating, d.x, d.y]);
            return s.useMemo((() => ({
              ...d,
              update: L,
              refs: N,
              elements: A,
              floatingStyles: R
            })), [d, L, N, A, R])
          }({
            strategy: "fixed",
            placement: O,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = _v(e), u = o || i ? [...c ? wv(c) : [], ...wv(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = c && s ? function(e, t) {
                let n, r = null;
                const o = av(e);

                function i() {
                  clearTimeout(n), r && r.disconnect(), r = null
                }
                return function a(s, l) {
                  void 0 === s && (s = !1), void 0 === l && (l = 1), i();
                  const {
                    left: c,
                    top: u,
                    width: d,
                    height: f
                  } = e.getBoundingClientRect();
                  if (s || t(), !d || !f) return;
                  const h = {
                    rootMargin: -Nm(u) + "px " + -Nm(o.clientWidth - (c + d)) + "px " + -Nm(o.clientHeight - (u + f)) + "px " + -Nm(c) + "px",
                    threshold: Lm(0, Om(1, l)) || 1
                  };
                  let p = !0;

                  function m(e) {
                    const t = e[0].intersectionRatio;
                    if (t !== l) {
                      if (!p) return a();
                      t ? a(!1, t) : n = setTimeout((() => {
                        a(!1, 1e-7)
                      }), 100)
                    }
                    p = !1
                  }
                  try {
                    r = new IntersectionObserver(m, {
                      ...h,
                      root: o.ownerDocument
                    })
                  } catch (e) {
                    r = new IntersectionObserver(m, h)
                  }
                  r.observe(e)
                }(!0), i
              }(c, n) : null;
              let f, h = -1,
                p = null;
              a && (p = new ResizeObserver((e => {
                let [r] = e;
                r && r.target === c && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                  p && p.observe(t)
                }))), n()
              })), c && !l && p.observe(c), p.observe(t));
              let m = l ? Tv(e) : null;
              return l && function t() {
                const r = Tv(e);
                !m || r.x === m.x && r.y === m.y && r.width === m.width && r.height === m.height || n(), m = r, f = requestAnimationFrame(t)
              }(), n(), () => {
                u.forEach((e => {
                  o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                })), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(f)
              }
            }(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: b.anchor
            },
            middleware: [ev({
              mainAxis: o + x,
              alignmentAxis: l
            }), u && tv({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? nv() : void 0,
              ...A
            }), u && Ym({
              ...A
            }), rv({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: r
              }) => {
                const {
                  width: o,
                  height: i
                } = t.reference, a = e.floating.style;
                a.setProperty("--radix-popper-available-width", `${n}px`), a.setProperty("--radix-popper-available-height", `${r}px`), a.setProperty("--radix-popper-anchor-width", `${o}px`), a.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), P && Dv({
              element: P,
              padding: c
            }), cg({
              arrowWidth: T,
              arrowHeight: x
            }), p && Jm({
              strategy: "referenceHidden",
              ...A
            })]
          }), [H, B] = ug(D), F = Oh(v);
          Rh((() => {
            j && F?.()
          }), [j, F]);
          const U = I.arrow?.x,
            V = I.arrow?.y,
            z = 0 !== I.arrow?.centerOffset,
            [G, K] = s.useState();
          return Rh((() => {
            w && K(window.getComputedStyle(w).zIndex)
          }), [w]), (0, i.jsx)("div", {
            ref: R.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...M,
              transform: j ? M.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: G,
              "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
              ...I.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(ng, {
              scope: n,
              placedSide: H,
              onArrowChange: C,
              arrowX: U,
              arrowY: V,
              shouldHideArrow: z,
              children: (0, i.jsx)(qv.div, {
                "data-side": H,
                "data-align": B,
                ...y,
                ref: _,
                style: {
                  ...y.style,
                  animation: j ? void 0 : "none"
                }
              })
            })
          })
        }));
      og.displayName = tg;
      var ig = "PopperArrow",
        ag = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        sg = s.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = rg(ig, n), a = ag[o.placedSide];
          return (0, i.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [a]: 0,
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
            children: (0, i.jsx)(zv, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function lg(e) {
        return null !== e
      }
      sg.displayName = ig;
      var cg = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = ug(n), u = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], d = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? u : `${d}px`, p = -s + "px") : "top" === l ? (h = i ? u : `${d}px`, p = `${r.floating.height+s}px`) : "right" === l ? (h = -s + "px", p = i ? u : `${f}px`) : "left" === l && (h = `${r.floating.width+s}px`, p = i ? u : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function ug(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var dg = Qv,
        fg = eg,
        hg = og,
        pg = sg,
        mg = s.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, a] = s.useState(!1);
          Rh((() => a(!0)), []);
          const l = n || o && globalThis?.document?.body;
          return l ? g.createPortal((0, i.jsx)(vm.div, {
            ...r,
            ref: t
          }), l) : null
        }));
      mg.displayName = "Portal";
      var vg = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, c] = function(e, t) {
            return s.useReducer(((e, n) => t[e][n] ?? e), e)
          }(a, {
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
            const e = gg(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Rh((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = gg(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Rh((() => {
            if (t) {
              const e = e => {
                  const n = gg(r.current).includes(e.animationName);
                  e.target === t && n && g.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = gg(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            c("ANIMATION_END")
          }), [t, c]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = pm(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function gg(e) {
        return e?.animationName || "none"
      }
      vg.displayName = "Presence";
      var yg = s.forwardRef(((e, t) => (0, i.jsx)(vm.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style
        }
      })));
      yg.displayName = "VisuallyHidden";
      var bg = yg,
        [wg, Eg] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map((e => s.createContext(e)));
            return function(n) {
              const r = n?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              })), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = s.createContext(r),
              a = n.length;

            function l(t) {
              const {
                scope: n,
                children: r,
                ...l
              } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(c.Provider, {
                value: u,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                c = s.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, mm(r, ...t)]
        }("Tooltip", [Xv]),
        _g = Xv(),
        Pg = "TooltipProvider",
        Cg = 700,
        Sg = "tooltip.open",
        [Tg, xg] = wg(Pg),
        Og = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Cg,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, [l, c] = s.useState(!0), u = s.useRef(!1), d = s.useRef(0);
          return s.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(Tg, {
            scope: t,
            isOpenDelayed: l,
            delayDuration: n,
            onOpen: s.useCallback((() => {
              window.clearTimeout(d.current), c(!1)
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(d.current), d.current = window.setTimeout((() => c(!0)), r)
            }), [r]),
            isPointerInTransitRef: u,
            onPointerInTransitChange: s.useCallback((e => {
              u.current = e
            }), []),
            disableHoverableContent: o,
            children: a
          })
        };
      Og.displayName = Pg;
      var Lg = "Tooltip",
        [kg, Ng] = wg(Lg),
        Ag = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: c
          } = e, u = xg(Lg, e.__scopeTooltip), d = _g(t), [f, h] = s.useState(null), p = Tm(), m = s.useRef(0), v = l ?? u.disableHoverableContent, g = c ?? u.delayDuration, y = s.useRef(!1), [b = !1, w] = Lh({
            prop: r,
            defaultProp: o,
            onChange: e => {
              e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(Sg))) : u.onClose(), a?.(e)
            }
          }), E = s.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), _ = s.useCallback((() => {
            window.clearTimeout(m.current), y.current = !1, w(!0)
          }), [w]), P = s.useCallback((() => {
            window.clearTimeout(m.current), w(!1)
          }), [w]), C = s.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, w(!0)
            }), g)
          }), [g, w]);
          return s.useEffect((() => () => window.clearTimeout(m.current)), []), (0, i.jsx)(dg, {
            ...d,
            children: (0, i.jsx)(kg, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: E,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: s.useCallback((() => {
                u.isOpenDelayed ? C() : _()
              }), [u.isOpenDelayed, C, _]),
              onTriggerLeave: s.useCallback((() => {
                v ? P() : window.clearTimeout(m.current)
              }), [P, v]),
              onOpen: _,
              onClose: P,
              disableHoverableContent: v,
              children: n
            })
          })
        };
      Ag.displayName = Lg;
      var Rg = "TooltipTrigger",
        Mg = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Ng(Rg, n), a = xg(Rg, n), l = _g(n), c = pm(t, s.useRef(null), o.onTriggerChange), u = s.useRef(!1), d = s.useRef(!1), f = s.useCallback((() => u.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, i.jsx)(fg, {
            asChild: !0,
            ...l,
            children: (0, i.jsx)(vm.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: c,
              onPointerMove: hm(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: hm(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: hm(e.onPointerDown, (() => {
                u.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: hm(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: hm(e.onBlur, o.onClose),
              onClick: hm(e.onClick, o.onClose)
            })
          })
        }));
      Mg.displayName = Rg;
      var Dg = "TooltipPortal",
        [jg, Ig] = wg(Dg, {
          forceMount: void 0
        }),
        Hg = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = Ng(Dg, t);
          return (0, i.jsx)(jg, {
            scope: t,
            forceMount: n,
            children: (0, i.jsx)(vg, {
              present: n || a.open,
              children: (0, i.jsx)(mg, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Hg.displayName = Dg;
      var Bg = "TooltipContent",
        Fg = s.forwardRef(((e, t) => {
          const n = Ig(Bg, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Ng(Bg, e.__scopeTooltip);
          return (0, i.jsx)(vg, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(Gg, {
              side: o,
              ...a,
              ref: t
            }) : (0, i.jsx)(Ug, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        Ug = s.forwardRef(((e, t) => {
          const n = Ng(Bg, e.__scopeTooltip),
            r = xg(Bg, e.__scopeTooltip),
            o = s.useRef(null),
            a = pm(t, o),
            [l, c] = s.useState(null),
            {
              trigger: u,
              onClose: d
            } = n,
            f = o.current,
            {
              onPointerInTransitChange: h
            } = r,
            p = s.useCallback((() => {
              c(null), h(!1)
            }), [h]),
            m = s.useCallback(((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              c(i), h(!0)
            }), [h]);
          return s.useEffect((() => () => p()), [p]), s.useEffect((() => {
            if (u && f) {
              const e = e => m(e, f),
                t = e => m(e, u);
              return u.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                u.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [u, f, m, p]), s.useEffect((() => {
            if (l) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = u?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e].x,
                        s = t[e].y,
                        l = t[i].x,
                        c = t[i].y;
                      s > r != c > r && n < (l - a) * (r - s) / (c - s) + a && (o = !o)
                    }
                    return o
                  }(n, l);
                r ? p() : o && (p(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [u, f, l, d, p]), (0, i.jsx)(Gg, {
            ...e,
            ref: a
          })
        })),
        [Vg, zg] = wg(Lg, {
          isInside: !1
        }),
        Gg = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...c
          } = e, u = Ng(Bg, n), d = _g(n), {
            onClose: f
          } = u;
          return s.useEffect((() => (document.addEventListener(Sg, f), () => document.removeEventListener(Sg, f))), [f]), s.useEffect((() => {
            if (u.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(u.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [u.trigger, f]), (0, i.jsx)(Em, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(hg, {
              "data-state": u.stateAttribute,
              ...d,
              ...c,
              ref: t,
              style: {
                ...c.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, i.jsx)(Dh.xV, {
                children: r
              }), (0, i.jsx)(Vg, {
                scope: n,
                isInside: !0,
                children: (0, i.jsx)(bg, {
                  id: u.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      Fg.displayName = Bg;
      var Kg = "TooltipArrow",
        qg = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = _g(n);
          return zg(Kg, n).isInside ? null : (0, i.jsx)(pg, {
            ...o,
            ...r,
            ref: t
          })
        }));
      qg.displayName = Kg;
      var Wg = Og,
        $g = Ag,
        Xg = Mg,
        Yg = Hg,
        Zg = Fg,
        Qg = qg;
      const Jg = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c,
        collisionPadding: u,
        sticky: d = "partial",
        onEscapeKeyDown: f,
        onPointerDownOutside: h,
        label: p,
        defaultOpen: m,
        open: v,
        onOpenChange: g,
        delayDuration: y = 400,
        portal: b = !0,
        arrow: w = !0,
        portalContainer: E,
        testId: _
      }) => {
        const [P = !1, C] = Lt({
          defaultProp: m,
          prop: v,
          onChange: g
        }), S = Ct(P), T = bc({
          opacity: P ? 1 : 0,
          immediate: P && !S
        }), x = "left" === n || "right" === n ? "center" : o, O = b ? {
          container: E
        } : {}, L = b ? Yg : s.Fragment, k = w ? {
          className: "foundry_h3lgaa2"
        } : {}, N = w ? Qg : s.Fragment;
        return (0, i.jsx)(Wg, {
          delayDuration: y,
          children: (0, i.jsxs)($g, {
            open: P,
            onOpenChange: C,
            children: [(0, i.jsx)(Xg, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, i.jsx)(L, {
              ...O,
              children: (0, i.jsx)(Zg, {
                side: n,
                align: x,
                sticky: d,
                forceMount: !0,
                "aria-label": p,
                "data-testid": _,
                sideOffset: r,
                alignOffset: a,
                onEscapeKeyDown: f,
                avoidCollisions: l,
                collisionPadding: u,
                collisionBoundary: c,
                onPointerDownOutside: h,
                children: (0, i.jsxs)(fm.div, {
                  className: "foundry_h3lgaa0",
                  style: T,
                  children: [(0, i.jsx)(z, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, i.jsx)(N, {
                    ...k
                  })]
                })
              })
            })]
          })
        })
      };
      var ey = "foundry_bwy1ds1",
        ty = "foundry_bwy1dsg",
        ny = "foundry_bwy1dsf";
      const ry = e => {
          e.preventDefault?.()
        },
        oy = (0, s.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: r,
          zoomOut: o,
          zoomTo: a,
          minZoomLevel: s,
          maxZoomLevel: l,
          canZoomIn: c,
          canZoomOut: u,
          resetZoom: d,
          caption: f,
          showDownloadButton: h,
          defaultZoomLevel: p,
          showZoomControls: m
        }, v) => {
          const g = dh(),
            y = Pt("screen and (max-width: 1024px)"),
            b = n !== p,
            w = y ? "SM" : "LG",
            E = bc({
              opacity: b ? 1 : 0,
              immediate: Tt()
            });
          Gp(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), Gp(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), Gp("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const _ = Nt() && y;
          return (0, i.jsx)(Up, {
            children: (0, i.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: v,
              children: [(0, i.jsx)(Jg, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: ry,
                content: (0, i.jsxs)("div", {
                  className: ny,
                  children: [g.formatMessage(pp), (0, i.jsx)(Y, {
                    className: ty,
                    children: g.formatMessage(mp, {
                      shortcut: (0, i.jsx)(Jp, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, i.jsx)(Qp, {
                  size: w,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: g.formatMessage(pp),
                  className: (0, je.$)(ey, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!_ && m && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, i.jsx)(Jg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ry,
                      content: (0, i.jsxs)("div", {
                        className: ny,
                        children: [g.formatMessage(vp), (0, i.jsx)(Y, {
                          className: ty,
                          children: g.formatMessage(gp, {
                            shortcut: (0, i.jsx)(Jp, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Qp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: g.formatMessage(vp),
                        className: (0, je.$)(ey, "foundry_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !c
                      })
                    }), (0, i.jsxs)(up, {
                      className: "foundry_bwy1dsa",
                      value: [n],
                      max: l,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, i.jsx)(dp, {
                        className: "foundry_bwy1dsb",
                        children: (0, i.jsx)(fp, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, i.jsx)(Jg, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: ry,
                        content: g.formatMessage(Pp, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, i.jsx)(hp, {
                          className: "foundry_bwy1dsd",
                          "aria-label": g.formatMessage(_p),
                          children: (0, i.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, i.jsx)(Jg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ry,
                      content: (0, i.jsxs)("div", {
                        className: ny,
                        children: [g.formatMessage(yp), (0, i.jsx)(Y, {
                          className: ty,
                          children: g.formatMessage(bp, {
                            shortcut: (0, i.jsx)(Jp, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Qp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: g.formatMessage(yp),
                        className: (0, je.$)(ey, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, i.jsx)(Bc.div, {
                    style: E,
                    children: (0, i.jsx)(Jg, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ry,
                      content: (0, i.jsxs)("div", {
                        className: ny,
                        children: [g.formatMessage(wp), (0, i.jsx)(Y, {
                          className: ty,
                          children: g.formatMessage(Ep, {
                            shortcut: (0, i.jsx)(Jp, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(Qp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: g.formatMessage(wp),
                        className: (0, je.$)(ey, "foundry_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), h && _ && (0, i.jsx)(Jg, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: ry,
                  content: g.formatMessage(Sp),
                  children: (0, i.jsx)(Qp, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: g.formatMessage(Cp),
                    className: ey,
                    onPress: e
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, i.jsx)(j, {
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), h && !_ && (0, i.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, i.jsx)(Jg, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: ry,
                    content: g.formatMessage(Sp),
                    children: (0, i.jsx)(Qp, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Download",
                      label: g.formatMessage(Cp),
                      className: ey,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var iy = "foundry_1a74xwb4";

      function ay(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function sy(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function ly(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }
      var cy, uy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        dy = "dismissableLayer.update",
        fy = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        hy = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(fy), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = sy(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      my("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...d.branches].some((e => e.contains(t)));
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && my("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p);
          return gm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (cy = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), py(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = cy)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), py())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(dy, e), () => document.removeEventListener(dy, e)
          }), []), (0, i.jsx)(uy.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: ay(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: ay(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: ay(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function py() {
        const e = new CustomEvent(dy);
        document.dispatchEvent(e)
      }

      function my(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && g.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      hy.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(fy),
          r = s.useRef(null),
          o = sy(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(uy.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var vy = "focusScope.autoFocusOnMount",
        gy = "focusScope.autoFocusOnUnmount",
        yy = {
          bubbles: !1,
          cancelable: !0
        },
        by = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [c, u] = s.useState(null), d = Oh(o), f = Oh(a), h = s.useRef(null), p = sy(t, (e => u(e))), m = s.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          s.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (m.paused || !c) return;
                  const t = e.target;
                  c.contains(t) ? h.current = t : Py(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || Py(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Py(c)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, c, m.paused]), s.useEffect((() => {
            if (c) {
              Cy.add(m);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(vy, yy);
                c.addEventListener(vy, d), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Py(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(wy(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Py(c))
              }
              return () => {
                c.removeEventListener(vy, d), setTimeout((() => {
                  const t = new CustomEvent(gy, yy);
                  c.addEventListener(gy, f), c.dispatchEvent(t), t.defaultPrevented || Py(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(gy, f), Cy.remove(m)
                }), 0)
              }
            }
          }), [c, d, f, m]);
          const v = s.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = wy(e);
                  return [Ey(t, e), Ey(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Py(i, {
                select: !0
              })) : (e.preventDefault(), n && Py(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)(uy.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function wy(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function Ey(e, t) {
        for (const n of e)
          if (!_y(n, {
              upTo: t
            })) return n
      }

      function _y(e, {
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

      function Py(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      by.displayName = "FocusScope";
      var Cy = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Sy(e, t), e.unshift(t)
          },
          remove(t) {
            e = Sy(e, t), e[0]?.resume()
          }
        }
      }();

      function Sy(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Ty = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Rh((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? g.createPortal((0, i.jsx)(uy.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      Ty.displayName = "Portal";
      var xy = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, c] = function(e, t) {
            return s.useReducer(((e, n) => t[e][n] ?? e), e)
          }(a, {
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
            const e = Oy(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Rh((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Oy(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Rh((() => {
            if (t) {
              const e = e => {
                  const n = Oy(r.current).includes(e.animationName);
                  e.target === t && n && g.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = Oy(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            c("ANIMATION_END")
          }), [t, c]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = sy(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Oy(e) {
        return e?.animationName || "none"
      }
      xy.displayName = "Presence";
      var Ly = 0;

      function ky() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Ny = "right-scroll-bar-position",
        Ay = "width-before-scroll-bar";
      var Ry = (0, n(81402).f)(),
        My = function() {},
        Dy = s.forwardRef((function(e, t) {
          var n = s.useRef(null),
            r = s.useState({
              onScrollCapture: My,
              onWheelCapture: My,
              onTouchMoveCapture: My
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            l = e.children,
            c = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            h = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            v = e.allowPinchZoom,
            g = e.as,
            y = void 0 === g ? "div" : g,
            b = e.gapMode,
            w = (0, Jc.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            E = h,
            _ = function(e, t) {
              return n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return function(e, t) {
                    return "function" == typeof e ? e(t) : e && (e.current = t), e
                  }(e, t)
                }))
              }, (o = (0, s.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value
                    },
                    set current(e) {
                      var t = o.value;
                      t !== e && (o.value = e, o.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, o.facade;
              var n, r, o
            }([n, t]),
            P = (0, Jc.__assign)((0, Jc.__assign)({}, w), o);
          return s.createElement(s.Fragment, null, d && s.createElement(E, {
            sideCar: Ry,
            removeScrollBar: u,
            shards: f,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: b
          }), a ? s.cloneElement(s.Children.only(l), (0, Jc.__assign)((0, Jc.__assign)({}, P), {
            ref: _
          })) : s.createElement(y, (0, Jc.__assign)({}, P, {
            className: c,
            ref: _
          }), l))
        }));
      Dy.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Dy.classNames = {
        fullWidth: Ay,
        zeroRight: Ny
      };
      var jy = n(79898),
        Iy = n(26068),
        Hy = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        By = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Fy = (0, Iy.T0)(),
        Uy = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Ny, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Ay, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Ny, " .").concat(Ny, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Ay, " .").concat(Ay, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Vy = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = s.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Hy;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [By(n), By(r), By(o)]
                  }(e),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, r - n + t[2] - t[0])
                }
              }(o)
            }), [o]);
          return s.createElement(Fy, {
            styles: Uy(i, !t, o, n ? "" : "!important")
          })
        },
        zy = !1;
      if ("undefined" != typeof window) try {
        var Gy = Object.defineProperty({}, "passive", {
          get: function() {
            return zy = !0, !0
          }
        });
        window.addEventListener("test", Gy, Gy), window.removeEventListener("test", Gy, Gy)
      } catch (e) {
        zy = !1
      }
      var Ky = !!zy && {
          passive: !1
        },
        qy = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        Wy = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), $y(e, r)) {
              var o = Xy(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        $y = function(e, t) {
          return "v" === e ? function(e) {
            return qy(e, "overflowY")
          }(t) : function(e) {
            return qy(e, "overflowX")
          }(t)
        },
        Xy = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        Yy = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Zy = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Qy = function(e) {
          return e && "current" in e ? e.current : e
        },
        Jy = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        eb = 0,
        tb = [];

      function nb(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const rb = (0, jy.m)(Ry, (function(e) {
        var t = s.useRef([]),
          n = s.useRef([0, 0]),
          r = s.useRef(),
          o = s.useState(eb++)[0],
          i = s.useState(Iy.T0)[0],
          a = s.useRef(e);
        s.useEffect((function() {
          a.current = e
        }), [e]), s.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, Jc.__spreadArray)([e.lockRef.current], (e.shards || []).map(Qy), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(o))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(o))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = s.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
            var o, i = Yy(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              c = "deltaY" in e ? e.deltaY : s[1] - i[1],
              u = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var f = Wy(d, u);
            if (!f) return !0;
            if (f ? o = d : (o = "v" === d ? "h" : "v", f = Wy(d, u)), !f) return !1;
            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
            var h = r.current || o;
            return function(e, t, n, r, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = i * r,
                s = n.target,
                l = t.contains(s),
                c = !1,
                u = a > 0,
                d = 0,
                f = 0;
              do {
                var h = Xy(e, s),
                  p = h[0],
                  m = h[1] - h[2] - i * p;
                (p || m) && $y(e, s) && (d += m, f += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (u && (Math.abs(d) < 1 || !1) || !u && (Math.abs(f) < 1 || !1)) && (c = !0), c
            }(h, t, e, "h" === h ? l : c)
          }), []),
          c = s.useCallback((function(e) {
            var n = e;
            if (tb.length && tb[tb.length - 1] === i) {
              var r = "deltaY" in n ? Zy(n) : Yy(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var s = (a.current.shards || []).map(Qy).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (s.length > 0 ? l(n, s[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          u = s.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: nb(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          d = s.useCallback((function(e) {
            n.current = Yy(e), r.current = void 0
          }), []),
          f = s.useCallback((function(t) {
            u(t.type, Zy(t), t.target, l(t, e.lockRef.current))
          }), []),
          h = s.useCallback((function(t) {
            u(t.type, Yy(t), t.target, l(t, e.lockRef.current))
          }), []);
        s.useEffect((function() {
          return tb.push(i), e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", c, Ky), document.addEventListener("touchmove", c, Ky), document.addEventListener("touchstart", d, Ky),
            function() {
              tb = tb.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", c, Ky), document.removeEventListener("touchmove", c, Ky), document.removeEventListener("touchstart", d, Ky)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return s.createElement(s.Fragment, null, m ? s.createElement(i, {
          styles: Jy(o)
        }) : null, p ? s.createElement(Vy, {
          gapMode: e.gapMode
        }) : null)
      }));
      var ob = s.forwardRef((function(e, t) {
        return s.createElement(Dy, (0, Jc.__assign)({}, e, {
          ref: t,
          sideCar: rb
        }))
      }));
      ob.classNames = Dy.classNames;
      const ib = ob;
      var ab = new WeakMap,
        sb = new WeakMap,
        lb = {},
        cb = 0,
        ub = function(e) {
          return e && (e.host || ub(e.parentNode))
        },
        db = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = ub(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            lb[n] || (lb[n] = new WeakMap);
            var i = lb[n],
              a = [],
              s = new Set,
              l = new Set(o),
              c = function(e) {
                e && !s.has(e) && (s.add(e), c(e.parentNode))
              };
            o.forEach(c);
            var u = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) u(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (ab.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  ab.set(e, l), i.set(e, c), a.push(e), 1 === l && o && sb.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return u(t), s.clear(), cb++,
              function() {
                a.forEach((function(e) {
                  var t = ab.get(e) - 1,
                    o = i.get(e) - 1;
                  ab.set(e, t), i.set(e, o), t || (sb.has(e) || e.removeAttribute(r), sb.delete(e)), o || e.removeAttribute(n)
                })), --cb || (ab = new WeakMap, ab = new WeakMap, sb = new WeakMap, lb = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        fb = "Dialog",
        [hb, pb] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map((e => s.createContext(e)));
            return function(n) {
              const r = n?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              })), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = s.createContext(r),
              a = n.length;

            function l(t) {
              const {
                scope: n,
                children: r,
                ...l
              } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(c.Provider, {
                value: u,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                c = s.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, ly(r, ...t)]
        }(fb),
        [mb, vb] = hb(fb),
        gb = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: l = !0
          } = e, c = s.useRef(null), u = s.useRef(null), [d = !1, f] = Lh({
            prop: r,
            defaultProp: o,
            onChange: a
          });
          return (0, i.jsx)(mb, {
            scope: t,
            triggerRef: c,
            contentRef: u,
            contentId: Tm(),
            titleId: Tm(),
            descriptionId: Tm(),
            open: d,
            onOpenChange: f,
            onOpenToggle: s.useCallback((() => f((e => !e))), [f]),
            modal: l,
            children: n
          })
        };
      gb.displayName = fb;
      var yb = "DialogTrigger",
        bb = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = vb(yb, n), a = sy(t, o.triggerRef);
          return (0, i.jsx)(uy.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Ib(o.open),
            ...r,
            ref: a,
            onClick: ay(e.onClick, o.onOpenToggle)
          })
        }));
      bb.displayName = yb;
      var wb = "DialogPortal",
        [Eb, _b] = hb(wb, {
          forceMount: void 0
        }),
        Pb = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = vb(wb, t);
          return (0, i.jsx)(Eb, {
            scope: t,
            forceMount: n,
            children: s.Children.map(r, (e => (0, i.jsx)(xy, {
              present: n || a.open,
              children: (0, i.jsx)(Ty, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      Pb.displayName = wb;
      var Cb = "DialogOverlay",
        Sb = s.forwardRef(((e, t) => {
          const n = _b(Cb, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = vb(Cb, e.__scopeDialog);
          return a.modal ? (0, i.jsx)(xy, {
            present: r || a.open,
            children: (0, i.jsx)(Tb, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Sb.displayName = Cb;
      var Tb = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = vb(Cb, n);
          return (0, i.jsx)(ib, {
            as: Dh.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, i.jsx)(uy.div, {
              "data-state": Ib(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        xb = "DialogContent",
        Ob = s.forwardRef(((e, t) => {
          const n = _b(xb, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = vb(xb, e.__scopeDialog);
          return (0, i.jsx)(xy, {
            present: r || a.open,
            children: a.modal ? (0, i.jsx)(Lb, {
              ...o,
              ref: t
            }) : (0, i.jsx)(kb, {
              ...o,
              ref: t
            })
          })
        }));
      Ob.displayName = xb;
      var Lb = s.forwardRef(((e, t) => {
          const n = vb(xb, e.__scopeDialog),
            r = s.useRef(null),
            o = sy(t, n.contentRef, r);
          return s.useEffect((() => {
            const e = r.current;
            if (e) return db(e)
          }), []), (0, i.jsx)(Nb, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ay(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: ay(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: ay(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        kb = s.forwardRef(((e, t) => {
          const n = vb(xb, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, i.jsx)(Nb, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const i = t.target,
                a = n.triggerRef.current?.contains(i);
              a && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        })),
        Nb = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...l
          } = e, c = vb(xb, n), u = s.useRef(null), d = sy(t, u);
          return s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? ky()), document.body.insertAdjacentElement("beforeend", e[1] ?? ky()), Ly++, () => {
              1 === Ly && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Ly--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(by, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, i.jsx)(hy, {
                role: "dialog",
                id: c.contentId,
                "aria-describedby": c.descriptionId,
                "aria-labelledby": c.titleId,
                "data-state": Ib(c.open),
                ...l,
                ref: d,
                onDismiss: () => c.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Ub, {
                titleId: c.titleId
              }), (0, i.jsx)(Vb, {
                contentRef: u,
                descriptionId: c.descriptionId
              })]
            })]
          })
        })),
        Ab = "DialogTitle",
        Rb = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = vb(Ab, n);
          return (0, i.jsx)(uy.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      Rb.displayName = Ab;
      var Mb = "DialogDescription",
        Db = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = vb(Mb, n);
          return (0, i.jsx)(uy.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      Db.displayName = Mb;
      var jb = "DialogClose";

      function Ib(e) {
        return e ? "open" : "closed"
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = vb(jb, n);
        return (0, i.jsx)(uy.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: ay(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = jb;
      var Hb = "DialogTitleWarning",
        [Bb, Fb] = function(e, t) {
          const n = s.createContext(t);

          function r(e) {
            const {
              children: t,
              ...r
            } = e, o = s.useMemo((() => r), Object.values(r));
            return (0, i.jsx)(n.Provider, {
              value: o,
              children: t
            })
          }
          return r.displayName = e + "Provider", [r, function(r) {
            const o = s.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(Hb, {
          contentName: xb,
          titleName: Ab,
          docsSlug: "dialog"
        }),
        Ub = ({
          titleId: e
        }) => {
          const t = Fb(Hb),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return s.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        Vb = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Fb("DialogDescriptionWarning").contentName}}.`;
          return s.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        zb = gb,
        Gb = bb,
        Kb = Pb,
        qb = Ob,
        Wb = Rb,
        $b = Db;
      const Xb = Bc(Sb),
        Yb = Bc(qb),
        Zb = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Qb = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Jb = (0, a.AK)(.77, 0, .175, 1),
        ew = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: a,
          referrerPolicy: l,
          thumbnail: c,
          thumbnailAspectRatio: u,
          thumbnailPosition: d,
          thumbnailFit: h,
          reduceMotion: p = !1,
          defaultOpen: m,
          open: v,
          onOpenChange: g,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: E,
          defaultZoomLevel: _ = 100,
          minZoomLevel: P = 100,
          maxZoomLevel: C = 300,
          zoomLevelStep: S = 100,
          onZoomLevelChange: T,
          gestureSettings: x,
          testId: O,
          showZoomControls: L = !0,
          disableGesturesOn: k,
          asChild: N,
          children: A,
          className: R,
          usePortal: M = !0,
          enabled: D = !0
        }) => {
          const j = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            H = (0, s.useRef)(null),
            B = (0, s.useRef)(null),
            F = Ec(),
            U = Ec(),
            V = Ec(),
            z = (0, s.useRef)(!1),
            G = dh(),
            K = Pt("screen and (max-width: 1024px)"),
            q = Nt() && K,
            W = Tt(),
            $ = "pointer-devices" !== k || q,
            [X, Y] = (0, s.useState)(!0),
            [Z, Q] = (0, s.useState)(!1),
            [J = !1, ee] = Lt({
              prop: v,
              defaultProp: m,
              onChange: g
            }),
            [te, ne] = (0, s.useState)(!1),
            [re, oe] = (0, s.useState)(null),
            ie = (0, s.useDeferredValue)(te),
            ae = p || W || m && !z.current;
          (0, s.useEffect)((() => {
            o?.()
          }), []), (0, s.useEffect)((() => {
            (m || v) && ne(J)
          }), []), At((() => {
            te !== ie && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = H.current.getBoundingClientRect(),
                o = H.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                c = o?.naturalWidth ?? r.width,
                u = o?.naturalHeight ?? r.height,
                f = c / window.innerWidth,
                p = c / f,
                m = u / f,
                v = window.innerHeight * p / m,
                g = window.innerWidth * m / p,
                y = m >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === y ? (window.innerWidth - window.innerHeight * p / m) / 2 : (window.innerHeight - window.innerWidth * m / p) / 2, 0);
              e ? V.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    aspectRatio: "unset",
                    scale: l,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    objectFit: h || a,
                    objectPosition: d || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), H.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${g}px`,
                    width: "horizontal" === y ? `${v}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: _ / 100,
                    immediate: ae,
                    config: {
                      duration: 550,
                      easing: Jb
                    }
                  }), await e({
                    immediate: !0,
                    height: "100%",
                    width: "100%",
                    inset: 0,
                    x: 0,
                    y: 0,
                    objectFit: "contain",
                    objectPosition: "center"
                  }), "vertical" === y ? j.current?.style.setProperty("width", "100%") : "horizontal" === y && j.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : V.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${g}px`,
                    width: "horizontal" === y ? `${v}px` : `${window.innerWidth}px`,
                    x: ve.position[0] + ("horizontal" === y ? b : 0),
                    y: ve.position[1] + ("horizontal" === y ? 0 : b),
                    scale: ve.zoomLevel / 100,
                    objectFit: h || a,
                    objectPosition: d || s
                  }), await e({
                    aspectRatio: "unset",
                    scale: l,
                    width: `${r.width}px`,
                    height: `${r.height}px`,
                    x: r.left,
                    y: r.top,
                    immediate: ae,
                    config: {
                      duration: 250,
                      easing: Jb
                    }
                  }), H.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(te, {
              onClose: () => ee(!1)
            }), z.current = !0)
          }), [te]), At((() => {
            J ? Promise.resolve().then((() => async function() {
              const e = H.current.querySelector("img");
              if (B.current) {
                let t = Zb;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await we(B.current)
              }
            }())).then((() => we(B.current))).then((() => ne(J))) : ne(!1)
          }), [J]);
          const se = () => {
              ne(!1)
            },
            {
              loaded: le,
              eventHandlers: ce
            } = (({
              enabled: e = !0
            }) => {
              const [t, n] = (0, s.useState)(!1), [r, o] = (0, s.useState)(!1);
              return (0, s.useEffect)((() => {
                e || (n(!1), o(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (o(!0), n(!1))
                  },
                  onAbort: () => {
                    e && (o(!0), n(!1))
                  },
                  onError: () => {
                    e && (o(!0), n(!1))
                  }
                },
                error: t,
                loaded: r
              }
            })({
              enabled: ie
            }),
            {
              isHovered: ue
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, s.useState)(!1);
              return (0, s.useEffect)((() => {
                r(!1)
              }), [t.current]), kt("mouseenter", (() => {
                r(!0)
              }), t), kt("mouseleave", (() => {
                r(!1)
              }), t), {
                isHovered: !!e && n
              }
            })({
              ref: I,
              enabled: ie
            }),
            {
              isFocused: de
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, s.useState)(!1);
              return (0, s.useEffect)((() => {
                r(!1)
              }), [t.current]), kt("focusin", (() => {
                r(!0)
              }), t), kt("focusout", (() => {
                r(!1)
              }), t), {
                isFocused: !!e && n
              }
            })({
              ref: I,
              enabled: ie
            }),
            {
              isIdle: he
            } = Ot({
              leave: 300,
              activity: 3e3,
              enabled: ie && !ue && !de && !q
            }),
            pe = function(e, t, n) {
              const r = wa.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: l = !0,
                  exitBeforeEnter: c = !1,
                  onDestroyed: u,
                  ref: d,
                  config: f
                } = r ? r() : t,
                h = (0, s.useMemo)((() => r || 3 == arguments.length ? yc() : void 0), []),
                p = Ca(e),
                m = [],
                v = (0, s.useRef)(null),
                g = o ? null : v.current;
              Vs((() => {
                v.current = m
              })), Ks((() => (_a(m, (e => {
                h?.add(e.ctrl), e.ctrl.ref = h
              })), () => {
                _a(v.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Pl(e.ctrl, h), e.ctrl.stop(!0)
                }))
              })));
              const y = function(e, {
                  key: t,
                  keys: n = t
                }, r) {
                  if (null === n) {
                    const t = new Set;
                    return e.map((e => {
                      const n = r && r.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                      return n ? (t.add(n), n.key) : _c++
                    }))
                  }
                  return wa.und(n) ? e : wa.fun(n) ? e.map(n) : Ca(n)
                }(p, r ? r() : t, g),
                b = o && v.current || [];
              Vs((() => _a(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Pl(e, h), dl(u, t, n)
              }))));
              const w = [];
              if (g && _a(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = y.indexOf(e.key)) && (m[t] = e)
                })), _a(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new ac
                  }, m[t].ctrl.item = e)
                })), w.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                _a(w, ((t, r) => {
                  const o = g[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              wa.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let E = -a;
              const _ = Gs(),
                P = vl(t),
                C = new Map,
                S = (0, s.useRef)(new Map),
                T = (0, s.useRef)(!1);
              _a(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  s = r ? r() : t;
                let u, h;
                const p = dl(s.delay || 0, o);
                if ("mount" == i) u = s.enter, h = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) u = s.leave, h = "leave";
                    else {
                      if (!(u = s.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    u = s.enter, h = "enter"
                  }
                }
                if (u = dl(u, e.item, n), u = wa.obj(u) ? bl(u) : {
                    to: u
                  }, !u.config) {
                  const t = f || P.config;
                  u.config = dl(t, e.item, n, h)
                }
                E += a;
                const m = {
                  ...P,
                  delay: p + E,
                  ref: d,
                  immediate: s.immediate,
                  reset: !1,
                  ...u
                };
                if ("enter" == h && wa.und(m.from)) {
                  const o = r ? r() : t,
                    i = wa.und(o.initial) || g ? o.from : o.initial;
                  m.from = dl(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  dl(b, e);
                  const t = v.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = dl(l, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), c && (T.current = !0), _())
                  }
                };
                const w = cc(e.ctrl, m);
                "leave" === h && c ? S.current.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                }) : C.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                })
              }));
              const x = (0, s.useContext)(vc),
                O = Ws(x),
                L = x !== O && El(x);
              Vs((() => {
                L && _a(m, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), _a(C, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), Vs((() => {
                _a(S.current.size ? S.current : C, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, h?.add(r), L && "enter" == e && r.start({
                    default: x
                  }), t && (Cl(r, t.ref), !r.ref && !h || T.current ? (r.start(t), T.current && (T.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const k = e => s.createElement(s.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = C.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? s.createElement(o.type, {
                  ...o.props,
                  key: wa.str(t.key) || wa.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return h ? [k, h] : k
            }(ie, {
              ref: F,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: ae
            }),
            [me] = bc((() => ({
              ref: U,
              opacity: ie && !he && le && X ? 1 : 0,
              immediate: ae
            })), [ie, he, le, X]),
            ve = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: l,
              onZoomLevelChange: c,
              onRequestedClose: u,
              onRequestingClose: d,
              onClick: f,
              onDoubleClick: h,
              gestureSettings: p = Wc,
              enabled: m
            }) => {
              const v = Tt(),
                [g = t, y] = Lt({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = l, w] = Lt({
                  prop: a,
                  defaultProp: l,
                  onChange: c
                }),
                E = (0, s.useRef)(null),
                _ = (0, s.useRef)(null),
                [P, C] = (0, s.useState)(!1),
                S = b > r,
                T = b < o,
                x = b > r,
                O = b === r,
                [L, k] = bc((() => ({
                  x: g[0],
                  y: g[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: v,
                  config: Kc
                }))),
                N = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (E.current && _.current) {
                    n || (n = [_.current.clientWidth / 2, _.current.clientHeight / 2]);
                    const s = Gc(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || Kc,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: v
                    };
                    if (s <= r) y(t);
                    else {
                      const e = zc(E.current, _.current, (({
                        currentTranslate: [e, t],
                        contentRef: n,
                        pinchDelta: r,
                        scale: o,
                        touchOrigin: [i, a]
                      }) => {
                        if (!n?.current) return [0, 0];
                        const {
                          height: s,
                          left: l,
                          top: c,
                          width: u
                        } = n.current?.getBoundingClientRect();
                        return [-(i - l - u / 2) / o * r + e, -(a - c - s / 2) / o * r + t]
                      })({
                        currentTranslate: g,
                        contentRef: E,
                        pinchDelta: i,
                        scale: b / 100,
                        touchOrigin: n
                      }), s);
                      l.x = e.xy[0], l.y = e.xy[1], y(e.xy)
                    }
                    l.scale = s / 100, k(l), w(s)
                  }
                },
                A = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: R
                } = (({
                  enabled: e = !0,
                  latency: t = 300,
                  onDoubleClick: n = (() => null),
                  onSingleClick: r = (() => null)
                }) => {
                  const o = (0, s.useRef)(0),
                    i = (0, s.useRef)();
                  return {
                    handleClick: a => {
                      e && (o.current += 1, i.current = setTimeout((() => {
                        1 === o.current ? r(a) : 2 === o.current && n(a), o.current = 0
                      }), t))
                    }
                  }
                })({
                  onDoubleClick: e => {
                    if (E.current) {
                      const t = Uc(E.current),
                        n = A(e, t) ? "overlay" : "content";
                      h?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (E.current && 0 === e.button) {
                      const t = Uc(E.current),
                        n = A(e, t) ? "overlay" : "content";
                      f?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  latency: 350
                });
              return {
                containerRef: _,
                contentRef: E,
                canPan: S,
                isPanning: P,
                position: g,
                zoomLevel: b,
                zoomIn: e => {
                  N(b + i, e)
                },
                zoomOut: e => {
                  N(b - i, e)
                },
                zoomTo: N,
                resetZoom: () => {
                  y(t), w(l);
                  const e = {
                    config: qc,
                    x: t[0],
                    y: t[1],
                    scale: l / 100,
                    immediate: v
                  };
                  k(e)
                },
                canZoomIn: T,
                canZoomOut: x,
                zoomLevelStep: i,
                maxZoomLevel: o,
                minZoomLevel: r,
                defaultZoomLevel: l,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: n = [0, 0],
                    movement: [o, i],
                    pinching: a,
                    tap: s,
                    touches: l,
                    event: c
                  }) => {
                    if (!_.current || !E.current) return;
                    if (s) return void R(c);
                    if (o && i && !P && C(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return g;
                    const {
                      horizontalOffset: u,
                      verticalOffset: f
                    } = zc(E.current, _.current, g, b), h = o * p.dragFactor, m = i * p.dragFactor, w = {
                      config: Kc,
                      x: t[0],
                      y: t[1],
                      immediate: v
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = Vc(e, E.current),
                        r = Gc(100 * Math.abs(t) / p.closePc, 0, 100);
                      w.config = qc, w.x = e[0], w.y = e[1], y(e), d?.(r)
                    } else {
                      const e = [Fc(n[0] + h, -u, u), Fc(n[1] + m, -f, f)];
                      w.x = e[0], w.y = e[1], y(e)
                    }
                    return k(w), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (_.current && E.current)
                      if (b === r) {
                        const {
                          y: e
                        } = Vc(g, E.current);
                        if (Gc(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: qc,
                            x: t[0],
                            y: t[1],
                            immediate: v
                          };
                          k(e), y(t), d?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = zc(E.current, _.current, g, b),
                        t = {
                          config: Kc,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: v
                        };
                      k(t), C(!1), y(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    offset: [n],
                    origin: [r, o],
                    first: i
                  }) => {
                    if (E.current && _.current) {
                      if (i && C(!0), t) return void e();
                      N(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    _.current && E.current && C(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (E.current && _.current) {
                      const r = -1 * n[1];
                      if (r && P && C(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + r / p.scrollFactor;
                      N(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    _.current && E.current && C(!1)
                  }
                },
                getCursor: () => O && !m ? "zoom-out" : O && T ? "zoom-in" : S ? P ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: L
              }
            })({
              enabled: $ && ie,
              onClick: function() {
                K ? Y(!X) : se()
              },
              onDoubleClick: function(e) {
                if (q && ve.containerRef.current && "content" === e.target)
                  if (ve.zoomLevel > ve.minZoomLevel) ve.resetZoom();
                  else {
                    const t = ((e, t, n) => {
                      const r = e.height / (n / 100);
                      return 100 * t.height / r
                    })(e.contentBounds, ve.containerRef.current.getBoundingClientRect(), ve.zoomLevel);
                    ve.zoomTo(t, {
                      animationConfig: qc
                    })
                  }
              },
              onRequestedClose: se,
              onRequestingClose: e => {
                if (te) {
                  const t = 1,
                    n = .25,
                    r = Gc(t - e * (t - n) / 100, n, t);
                  F.start({
                    opacity: r
                  });
                  const o = Gc(1 - e / 100, 0, 1);
                  U.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: E,
              defaultZoomLevel: _,
              minZoomLevel: P,
              maxZoomLevel: C,
              zoomLevelStep: S,
              onZoomLevelChange: T,
              defaultPosition: [0, 0],
              gestureSettings: x
            }),
            ge = bc({
              ref: V,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: u,
                position: "fixed",
                objectFit: h,
                objectPosition: d,
                opacity: 0
              },
              onStart: () => {
                ie || Q(!1)
              },
              onRest: async () => {
                ie ? Q(!0) : (ve.resetZoom(), Y(!0))
              }
            }),
            ye = bc({
              opacity: ie && le && Z ? 1 : 0,
              immediate: !0,
              onRest: () => {
                ie && te && le && V.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            be = [
              [V, F, U],
              [0, 0, .1]
            ];
          async function we(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            Vs((() => {
              if (t) {
                let r = 0;
                _a(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, _a(i, (e => {
                      _a(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + dl(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                _a(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (_a(n, ((e, t) => _a(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(ie ? be[0] : be[0].reverse(), be[1]);
          const Ee = N ? (0, i.jsx)(f, {
            className: iy,
            ref: null,
            children: A
          }) : (0, i.jsx)("img", {
            alt: "",
            src: c,
            "aria-hidden": !0,
            loading: a,
            className: iy,
            crossOrigin: r,
            referrerPolicy: l
          });
          (0, s.useEffect)((() => {
            Y(!q)
          }), [q]);
          const {
            contrastMode: _e
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            } = Uo();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: n,
              defaultContrastMode: r,
              platformScale: o,
              defaultPlatformScale: i,
              platformScaleRatios: a,
              platformScaleBreakpoints: s,
              locale: l
            }
          })(), Pe = ((e, t) => [Io.tokens, _h("dark", t)].join(" "))(0, _e);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(zb, {
              open: J,
              children: (0, i.jsxs)("div", {
                className: (0, je.A)("foundry_1a74xwb0", R),
                children: [(0, i.jsx)(Gb, {
                  asChild: !0,
                  children: (0, i.jsxs)(Bc.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      D && ee(!J)
                    },
                    ref: H,
                    "data-idle": !te,
                    style: {
                      aspectRatio: u,
                      objectPosition: d,
                      objectFit: h
                    },
                    children: [(0, i.jsx)(w, {
                      children: G.formatMessage(yh)
                    }), Ee, pe(((e, t) => y && !t && (0, i.jsx)(Bc.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, i.jsx)(fe.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, i.jsxs)(Kb, {
                  ...!M && {
                    container: re
                  },
                  children: [(0, i.jsx)(Bc.img, {
                    "aria-hidden": !0,
                    src: Zb,
                    ref: B,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: u,
                      backgroundPosition: d,
                      backgroundSize: h,
                      ...ge
                    }
                  }), pe(((o, s) => s && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(Xb, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, i.jsxs)(Yb, {
                      "data-testid": O,
                      onEscapeKeyDown: se,
                      onOpenAutoFocus: Qb,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, H),
                      className: Pe,
                      children: [(0, i.jsx)(w, {
                        children: (0, i.jsx)(Wb, {
                          children: G.formatMessage(bh)
                        })
                      }), (0, i.jsx)(w, {
                        children: (0, i.jsx)($b, {
                          children: n || G.formatMessage(wh, {
                            alt: t
                          })
                        })
                      }), (0, i.jsx)(Bc.div, {
                        className: "foundry_1a74xwb6",
                        style: ye,
                        children: (0, i.jsx)($c, {
                          ...ve,
                          children: (0, i.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: j,
                            loading: a,
                            className: "foundry_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: l,
                            style: {
                              cursor: ve.getCursor()
                            },
                            ...ce
                          })
                        })
                      }), (0, i.jsx)(Bc.div, {
                        className: "foundry_1a74xwb9",
                        style: me,
                        children: (0, i.jsx)(oy, {
                          ...ve,
                          ref: I,
                          onClose: se,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: L
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !M && (0, i.jsx)("div", {
              ref: oe
            })]
          })
        },
        tw = e => {
          const t = (() => {
            const {
              locale: e
            } = Uo();
            return e
          })();
          return (0, i.jsx)(gh, {
            messages: Eh,
            locale: t,
            children: (0, i.jsx)(ew, {
              ...e
            })
          })
        };

      function nw(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function rw(e, t = []) {
        let n = [];
        const r = () => {
          const t = n.map((e => s.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return s.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return r.scopeName = e, [function(t, r) {
          const o = s.createContext(r),
            a = n.length;

          function l(t) {
            const {
              scope: n,
              children: r,
              ...l
            } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
            return (0, i.jsx)(c.Provider, {
              value: u,
              children: r
            })
          }
          return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
            const l = i?.[e][a] || o,
              c = s.useContext(l);
            if (c) return c;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, ow(r, ...t)]
      }

      function ow(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function iw(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var aw, sw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {}),
        lw = "dismissableLayer.update",
        cw = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        uw = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(cw), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = iw(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      fw("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", o.current), o.current = r, t.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(i), t.removeEventListener("pointerdown", e), t.removeEventListener("click", o.current)
              }
            }), [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }((e => {
            const t = e.target,
              n = [...d.branches].some((e => e.contains(t)));
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = Oh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && fw("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }), [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }((e => {
            const t = e.target;
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || c?.())
          }), p);
          return gm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (aw = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), dw(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = aw)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), dw())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(lw, e), () => document.removeEventListener(lw, e)
          }), []), (0, i.jsx)(sw.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: nw(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: nw(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: nw(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function dw() {
        const e = new CustomEvent(lw);
        document.dispatchEvent(e)
      }

      function fw(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? function(e, t) {
          e && g.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      uw.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(cw),
          r = s.useRef(null),
          o = iw(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(sw.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var hw = 0;

      function pw() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var mw = "focusScope.autoFocusOnMount",
        vw = "focusScope.autoFocusOnUnmount",
        gw = {
          bubbles: !1,
          cancelable: !0
        },
        yw = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [c, u] = s.useState(null), d = Oh(o), f = Oh(a), h = s.useRef(null), p = iw(t, (e => u(e))), m = s.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          s.useEffect((() => {
            if (r) {
              let e = function(e) {
                  if (m.paused || !c) return;
                  const t = e.target;
                  c.contains(t) ? h.current = t : _w(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || _w(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && _w(c)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, c, m.paused]), s.useEffect((() => {
            if (c) {
              Pw.add(m);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(mw, gw);
                c.addEventListener(mw, d), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (_w(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(bw(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && _w(c))
              }
              return () => {
                c.removeEventListener(mw, d), setTimeout((() => {
                  const t = new CustomEvent(vw, gw);
                  c.addEventListener(vw, f), c.dispatchEvent(t), t.defaultPrevented || _w(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(vw, f), Pw.remove(m)
                }), 0)
              }
            }
          }), [c, d, f, m]);
          const v = s.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = bw(e);
                  return [ww(t, e), ww(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && _w(i, {
                select: !0
              })) : (e.preventDefault(), n && _w(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)(sw.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function bw(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function ww(e, t) {
        for (const n of e)
          if (!Ew(n, {
              upTo: t
            })) return n
      }

      function Ew(e, {
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

      function _w(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      yw.displayName = "FocusScope";
      var Pw = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Cw(e, t), e.unshift(t)
          },
          remove(t) {
            e = Cw(e, t), e[0]?.resume()
          }
        }
      }();

      function Cw(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Sw = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Rh((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? g.createPortal((0, i.jsx)(sw.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      Sw.displayName = "Portal";
      var Tw = s.forwardRef(((e, t) => (0, i.jsx)(sw.span, {
        ...e,
        ref: t,
        style: {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...e.style
        }
      })));
      Tw.displayName = "VisuallyHidden";
      var xw = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ow = [" ", "Enter"],
        Lw = "Select",
        [kw, Nw, Aw] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = rw(t),
            [o, a] = n(t, {
              collectionRef: {
                current: null
              },
              itemMap: new Map
            }),
            l = e => {
              const {
                scope: t,
                children: n
              } = e, r = s.useRef(null), a = s.useRef(new Map).current;
              return (0, i.jsx)(o, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
              })
            };
          l.displayName = t;
          const c = e + "CollectionSlot",
            u = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = iw(t, a(c, n).collectionRef);
              return (0, i.jsx)(Dh.DX, {
                ref: o,
                children: r
              })
            }));
          u.displayName = c;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            h = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r,
                ...o
              } = e, l = s.useRef(null), c = iw(t, l), u = a(d, n);
              return s.useEffect((() => (u.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                u.itemMap.delete(l)
              }))), (0, i.jsx)(Dh.DX, {
                [f]: "",
                ref: c,
                children: r
              })
            }));
          return h.displayName = d, [{
            Provider: l,
            Slot: u,
            ItemSlot: h
          }, function(t) {
            const n = a(e + "CollectionConsumer", t);
            return s.useCallback((() => {
              const e = n.collectionRef.current;
              if (!e) return [];
              const t = Array.from(e.querySelectorAll(`[${f}]`));
              return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
            }), [n.collectionRef, n.itemMap])
          }, r]
        }(Lw),
        [Rw, Mw] = rw(Lw, [Aw, Xv]),
        Dw = Xv(),
        [jw, Iw] = Rw(Lw),
        [Hw, Bw] = Rw(Lw),
        Fw = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            value: l,
            defaultValue: c,
            onValueChange: u,
            dir: d,
            name: f,
            autoComplete: h,
            disabled: p,
            required: m
          } = e, v = Dw(t), [g, y] = s.useState(null), [b, w] = s.useState(null), [E, _] = s.useState(!1), P = Nh(d), [C = !1, S] = Lh({
            prop: r,
            defaultProp: o,
            onChange: a
          }), [T, x] = Lh({
            prop: l,
            defaultProp: c,
            onChange: u
          }), O = s.useRef(null), L = !g || Boolean(g.closest("form")), [k, N] = s.useState(new Set), A = Array.from(k).map((e => e.props.value)).join(";");
          return (0, i.jsx)(dg, {
            ...v,
            children: (0, i.jsxs)(jw, {
              required: m,
              scope: t,
              trigger: g,
              onTriggerChange: y,
              valueNode: b,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: _,
              contentId: Tm(),
              value: T,
              onValueChange: x,
              open: C,
              onOpenChange: S,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: p,
              children: [(0, i.jsx)(kw.Provider, {
                scope: t,
                children: (0, i.jsx)(Hw, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    N((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    N((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), L ? (0, i.jsxs)(EE, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: f,
                autoComplete: h,
                value: T,
                onChange: e => x(e.target.value),
                disabled: p,
                children: [void 0 === T ? (0, i.jsx)("option", {
                  value: ""
                }) : null, Array.from(k)]
              }, A) : null]
            })
          })
        };
      Fw.displayName = Lw;
      var Uw = "SelectTrigger",
        Vw = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, a = Dw(n), s = Iw(Uw, n), l = s.disabled || r, c = iw(t, s.onTriggerChange), u = Nw(n), [d, f, h] = _E((e => {
            const t = u().filter((e => !e.disabled)),
              n = t.find((e => e.value === s.value)),
              r = PE(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          })), p = () => {
            l || (s.onOpenChange(!0), h())
          };
          return (0, i.jsx)(fg, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(sw.button, {
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
              "data-placeholder": wE(s.value) ? "" : void 0,
              ...o,
              ref: c,
              onClick: nw(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: nw(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (p(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: nw(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || xw.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      Vw.displayName = Uw;
      var zw = "SelectValue",
        Gw = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...l
          } = e, c = Iw(zw, n), {
            onValueNodeHasChildrenChange: u
          } = c, d = void 0 !== a, f = iw(t, c.onValueNodeChange);
          return Rh((() => {
            u(d)
          }), [u, d]), (0, i.jsx)(sw.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: wE(c.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Gw.displayName = zw;
      var Kw = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)(sw.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      Kw.displayName = "SelectIcon";
      var qw = e => (0, i.jsx)(Sw, {
        asChild: !0,
        ...e
      });
      qw.displayName = "SelectPortal";
      var Ww = "SelectContent",
        $w = s.forwardRef(((e, t) => {
          const n = Iw(Ww, e.__scopeSelect),
            [r, o] = s.useState();
          if (Rh((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? g.createPortal((0, i.jsx)(Yw, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(kw.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, i.jsx)(Qw, {
            ...e,
            ref: t
          })
        }));
      $w.displayName = Ww;
      var Xw = 10,
        [Yw, Zw] = Rw(Ww),
        Qw = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            side: c,
            sideOffset: u,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: y,
            ...b
          } = e, w = Iw(Ww, n), [E, _] = s.useState(null), [P, C] = s.useState(null), S = iw(t, (e => _(e))), [T, x] = s.useState(null), [O, L] = s.useState(null), k = Nw(n), [N, A] = s.useState(!1), R = s.useRef(!1);
          s.useEffect((() => {
            if (E) return db(E)
          }), [E]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? pw()), document.body.insertAdjacentElement("beforeend", e[1] ?? pw()), hw++, () => {
              1 === hw && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), hw--
            }
          }), []);
          const M = s.useCallback((e => {
              const [t, ...n] = k().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && P && (P.scrollTop = 0), n === r && P && (P.scrollTop = P.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [k, P]),
            D = s.useCallback((() => M([T, E])), [M, T, E]);
          s.useEffect((() => {
            N && D()
          }), [N, D]);
          const {
            onOpenChange: j,
            triggerPointerDownPosRef: I
          } = w;
          s.useEffect((() => {
            if (E) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (I.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (I.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : E.contains(n.target) || j(!1), document.removeEventListener("pointermove", t), I.current = null
                };
              return null !== I.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [E, j, I]), s.useEffect((() => {
            const e = () => j(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [j]);
          const [H, B] = _E((e => {
            const t = k().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = PE(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = s.useCallback(((e, t, n) => {
            const r = !R.current && !n;
            (void 0 !== w.value && w.value === t || r) && (x(e), r && (R.current = !0))
          }), [w.value]), U = s.useCallback((() => E?.focus()), [E]), V = s.useCallback(((e, t, n) => {
            const r = !R.current && !n;
            (void 0 !== w.value && w.value === t || r) && L(e)
          }), [w.value]), z = "popper" === r ? eE : Jw, G = z === eE ? {
            side: c,
            sideOffset: u,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: y
          } : {};
          return (0, i.jsx)(Yw, {
            scope: n,
            content: E,
            viewport: P,
            onViewportChange: C,
            itemRefCallback: F,
            selectedItem: T,
            onItemLeave: U,
            itemTextRefCallback: V,
            focusSelectedItem: D,
            selectedItemText: O,
            position: r,
            isPositioned: N,
            searchRef: H,
            children: (0, i.jsx)(ib, {
              as: Dh.DX,
              allowPinchZoom: !0,
              children: (0, i.jsx)(yw, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: nw(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(uw, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: l,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, i.jsx)(z, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...G,
                    onPlaced: () => A(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: nw(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = k().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => M(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Qw.displayName = "SelectContentImpl";
      var Jw = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, a = Iw(Ww, n), l = Zw(Ww, n), [c, u] = s.useState(null), [d, f] = s.useState(null), h = iw(t, (e => f(e))), p = Nw(n), m = s.useRef(!1), v = s.useRef(!0), {
          viewport: g,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, E = s.useCallback((() => {
          if (a.trigger && a.valueNode && c && d && g && y && b) {
            const e = a.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              n = a.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                a = e.left - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                u = window.innerWidth - Xw,
                d = Ph(i, [Xw, u - l]);
              c.style.minWidth = s + "px", c.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                u = window.innerWidth - Xw,
                d = Ph(i, [Xw, u - l]);
              c.style.minWidth = s + "px", c.style.right = d + "px"
            }
            const i = p(),
              s = window.innerHeight - 2 * Xw,
              l = g.scrollHeight,
              u = window.getComputedStyle(d),
              f = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              v = parseInt(u.borderBottomWidth, 10),
              w = f + h + l + parseInt(u.paddingBottom, 10) + v,
              E = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(g),
              P = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              S = e.top + e.height / 2 - Xw,
              T = s - S,
              x = y.offsetHeight / 2,
              O = f + h + (y.offsetTop + x),
              L = w - O;
            if (O <= S) {
              const e = y === i[i.length - 1].ref.current;
              c.style.bottom = "0px";
              const t = d.clientHeight - g.offsetTop - g.offsetHeight,
                n = O + Math.max(T, x + (e ? C : 0) + t + v);
              c.style.height = n + "px"
            } else {
              const e = y === i[0].ref.current;
              c.style.top = "0px";
              const t = Math.max(S, f + g.offsetTop + (e ? P : 0) + x) + L;
              c.style.height = t + "px", g.scrollTop = O - S + g.offsetTop
            }
            c.style.margin = `${Xw}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, a.trigger, a.valueNode, c, d, g, y, b, a.dir, r]);
        Rh((() => E()), [E]);
        const [_, P] = s.useState();
        Rh((() => {
          d && P(window.getComputedStyle(d).zIndex)
        }), [d]);
        const C = s.useCallback((e => {
          e && !0 === v.current && (E(), w?.(), v.current = !1)
        }), [E, w]);
        return (0, i.jsx)(tE, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: C,
          children: (0, i.jsx)("div", {
            ref: u,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, i.jsx)(sw.div, {
              ...o,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      Jw.displayName = "SelectItemAlignedPosition";
      var eE = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Xw,
          ...a
        } = e, s = Dw(n);
        return (0, i.jsx)(hg, {
          ...s,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      eE.displayName = "SelectPopperPosition";
      var [tE, nE] = Rw(Ww, {}), rE = "SelectViewport", oE = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, a = Zw(rE, n), l = nE(rE, n), c = iw(t, a.onViewportChange), u = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(kw.Slot, {
            scope: n,
            children: (0, i.jsx)(sw.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: c,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...o.style
              },
              onScroll: nw(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(u.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Xw,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      a = Math.max(o, i);
                    if (a < r) {
                      const o = a + e,
                        i = Math.min(r, o),
                        s = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                u.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      oE.displayName = rE;
      var iE = "SelectGroup",
        [aE, sE] = Rw(iE);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Tm();
        return (0, i.jsx)(aE, {
          scope: n,
          id: o,
          children: (0, i.jsx)(sw.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = iE;
      var lE = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = sE(lE, n);
        return (0, i.jsx)(sw.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = lE;
      var cE = "SelectItem",
        [uE, dE] = Rw(cE),
        fE = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...l
          } = e, c = Iw(cE, n), u = Zw(cE, n), d = c.value === r, [f, h] = s.useState(a ?? ""), [p, m] = s.useState(!1), v = iw(t, (e => u.itemRefCallback?.(e, r, o))), g = Tm(), y = () => {
            o || (c.onValueChange(r), c.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(uE, {
            scope: n,
            value: r,
            disabled: o,
            textId: g,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(kw.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(sw.div, {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...l,
                ref: v,
                onFocus: nw(l.onFocus, (() => m(!0))),
                onBlur: nw(l.onBlur, (() => m(!1))),
                onPointerUp: nw(l.onPointerUp, y),
                onPointerMove: nw(l.onPointerMove, (e => {
                  o ? u.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: nw(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && u.onItemLeave?.()
                })),
                onKeyDown: nw(l.onKeyDown, (e => {
                  "" !== u.searchRef?.current && " " === e.key || (Ow.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      fE.displayName = cE;
      var hE = "SelectItemText",
        pE = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...a
          } = e, l = Iw(hE, n), c = Zw(hE, n), u = dE(hE, n), d = Bw(hE, n), [f, h] = s.useState(null), p = iw(t, (e => h(e)), u.onItemTextChange, (e => c.itemTextRefCallback?.(e, u.value, u.disabled))), m = f?.textContent, v = s.useMemo((() => (0, i.jsx)("option", {
            value: u.value,
            disabled: u.disabled,
            children: m
          }, u.value)), [u.disabled, u.value, m]), {
            onNativeOptionAdd: y,
            onNativeOptionRemove: b
          } = d;
          return Rh((() => (y(v), () => b(v))), [y, b, v]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(sw.span, {
              id: u.textId,
              ...a,
              ref: p
            }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? g.createPortal(a.children, l.valueNode) : null]
          })
        }));
      pE.displayName = hE;
      var mE = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return dE(mE, n).isSelected ? (0, i.jsx)(sw.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = mE;
      var vE = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const n = Zw(vE, e.__scopeSelect),
          r = nE(vE, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = iw(t, r.onScrollButtonChange);
        return Rh((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(yE, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = vE;
      var gE = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const n = Zw(gE, e.__scopeSelect),
          r = nE(gE, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = iw(t, r.onScrollButtonChange);
        return Rh((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(yE, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = gE;
      var yE = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, a = Zw("SelectScrollButton", n), l = s.useRef(null), c = Nw(n), u = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => u()), [u]), Rh((() => {
          const e = c().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [c]), (0, i.jsx)(sw.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: nw(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerMove: nw(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerLeave: nw(o.onPointerLeave, (() => {
            u()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, i.jsx)(sw.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var bE = "SelectArrow";

      function wE(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Dw(n), a = Iw(bE, n), s = Zw(bE, n);
        return a.open && "popper" === s.position ? (0, i.jsx)(pg, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = bE;
      var EE = s.forwardRef(((e, t) => {
        const {
          value: n,
          ...r
        } = e, o = s.useRef(null), a = iw(t, o), l = Ah(n);
        return s.useEffect((() => {
          const e = o.current,
            t = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(t, "value").set;
          if (l !== n && r) {
            const t = new Event("change", {
              bubbles: !0
            });
            r.call(e, n), e.dispatchEvent(t)
          }
        }), [l, n]), (0, i.jsx)(Tw, {
          asChild: !0,
          children: (0, i.jsx)("select", {
            ...r,
            ref: a,
            defaultValue: n
          })
        })
      }));

      function _E(e) {
        const t = Oh(e),
          n = s.useRef(""),
          r = s.useRef(0),
          o = s.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = s.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, i]
      }

      function PE(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      EE.displayName = "BubbleSelect";
      var CE = Fw,
        SE = Vw,
        TE = Gw,
        xE = Kw,
        OE = qw,
        LE = $w,
        kE = oE,
        NE = fE,
        AE = pE,
        RE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Dh.DX : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
              ...o,
              ref: n
            })
          }));
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }), {});

      function ME(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var DE = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, c] = function(e, t) {
            return s.useReducer(((e, n) => t[e][n] ?? e), e)
          }(a, {
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
            const e = jE(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Rh((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = jE(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Rh((() => {
            if (t) {
              const e = e => {
                  const n = jE(r.current).includes(e.animationName);
                  e.target === t && n && g.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = jE(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            c("ANIMATION_END")
          }), [t, c]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = ME(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function jE(e) {
        return e?.animationName || "none"
      }

      function IE(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const r = n.reduce(((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            })), {});
            return s.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function HE(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      DE.displayName = "Presence";
      var BE = "ScrollArea",
        [FE, UE] = function(e, t = []) {
          let n = [];
          const r = () => {
            const t = n.map((e => s.createContext(e)));
            return function(n) {
              const r = n?.[e] || t;
              return s.useMemo((() => ({
                [`__scope${e}`]: {
                  ...n,
                  [e]: r
                }
              })), [n, r])
            }
          };
          return r.scopeName = e, [function(t, r) {
            const o = s.createContext(r),
              a = n.length;

            function l(t) {
              const {
                scope: n,
                children: r,
                ...l
              } = t, c = n?.[e][a] || o, u = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(c.Provider, {
                value: u,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                c = s.useContext(l);
              if (c) return c;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, IE(r, ...t)]
        }(BE),
        [VE, zE] = FE(BE),
        GE = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...l
          } = e, [c, u] = s.useState(null), [d, f] = s.useState(null), [h, p] = s.useState(null), [m, v] = s.useState(null), [g, y] = s.useState(null), [b, w] = s.useState(0), [E, _] = s.useState(0), [P, C] = s.useState(!1), [S, T] = s.useState(!1), x = ME(t, (e => u(e))), O = Nh(o);
          return (0, i.jsx)(VE, {
            scope: n,
            type: r,
            dir: O,
            scrollHideDelay: a,
            scrollArea: c,
            viewport: d,
            onViewportChange: f,
            content: h,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: v,
            scrollbarXEnabled: P,
            onScrollbarXEnabledChange: C,
            scrollbarY: g,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: T,
            onCornerWidthChange: w,
            onCornerHeightChange: _,
            children: (0, i.jsx)(RE.div, {
              dir: O,
              ...l,
              ref: x,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": E + "px",
                ...e.style
              }
            })
          })
        }));
      GE.displayName = BE;
      var KE = "ScrollAreaViewport",
        qE = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...a
          } = e, l = zE(KE, n), c = ME(t, s.useRef(null), l.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(RE.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: c,
              style: {
                overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, i.jsx)("div", {
                ref: l.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        }));
      qE.displayName = KE;
      var WE = "ScrollAreaScrollbar",
        $E = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zE(WE, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: l
          } = o, c = "horizontal" === e.orientation;
          return s.useEffect((() => (c ? a(!0) : l(!0), () => {
            c ? a(!1) : l(!1)
          })), [c, a, l]), "hover" === o.type ? (0, i.jsx)(XE, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, i.jsx)(YE, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, i.jsx)(ZE, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, i.jsx)(QE, {
            ...r,
            ref: t
          }) : null
        }));
      $E.displayName = WE;
      var XE = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zE(WE, e.__scopeScrollArea), [a, l] = s.useState(!1);
          return s.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), l(!0)
                },
                r = () => {
                  t = window.setTimeout((() => l(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(DE, {
            present: n || a,
            children: (0, i.jsx)(ZE, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        YE = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zE(WE, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = v_((() => u("SCROLL_END")), 100), [c, u] = ("hidden", d = {
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
            if ("idle" === c) {
              const e = window.setTimeout((() => u("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [c, o.scrollHideDelay, u]), s.useEffect((() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (u("SCROLL"), l()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, a, u, l]), (0, i.jsx)(DE, {
            present: n || "hidden" !== c,
            children: (0, i.jsx)(QE, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: HE(e.onPointerEnter, (() => u("POINTER_ENTER"))),
              onPointerLeave: HE(e.onPointerLeave, (() => u("POINTER_LEAVE")))
            })
          })
        })),
        ZE = s.forwardRef(((e, t) => {
          const n = zE(WE, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, l] = s.useState(!1),
            c = "horizontal" === e.orientation,
            u = v_((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(c ? e : t)
              }
            }), 10);
          return g_(n.viewport, u), g_(n.content, u), (0, i.jsx)(DE, {
            present: r || a,
            children: (0, i.jsx)(QE, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        QE = s.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = zE(WE, e.__scopeScrollArea), a = s.useRef(null), l = s.useRef(0), [c, u] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = u_(c.viewport, c.content), f = {
            ...r,
            sizes: c,
            onSizesChange: u,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function h(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = d_(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return h_([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, l.current, c, t)
          }
          return "horizontal" === n ? (0, i.jsx)(JE, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = f_(o.viewport.scrollLeft, c, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = h(e, o.dir))
            }
          }) : "vertical" === n ? (0, i.jsx)(e_, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = f_(o.viewport.scrollTop, c);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        JE = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = zE(WE, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = ME(t, u, a.onScrollbarXChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(r_, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": d_(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), p_(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: u.current.clientWidth,
                  paddingStart: c_(l.paddingLeft),
                  paddingEnd: c_(l.paddingRight)
                }
              })
            }
          })
        })),
        e_ = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = zE(WE, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = ME(t, u, a.onScrollbarYChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(r_, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": d_(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), p_(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: u.current.clientHeight,
                  paddingStart: c_(l.paddingTop),
                  paddingEnd: c_(l.paddingBottom)
                }
              })
            }
          })
        })),
        [t_, n_] = FE(WE),
        r_ = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: l,
            onThumbPointerDown: c,
            onThumbPositionChange: u,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: h,
            ...p
          } = e, m = zE(WE, n), [v, g] = s.useState(null), y = ME(t, (e => g(e))), b = s.useRef(null), w = s.useRef(""), E = m.viewport, _ = r.content - r.viewport, P = Oh(f), C = Oh(u), S = v_(h, 10);

          function T(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              d({
                x: t,
                y: n
              })
            }
          }
          return s.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = v?.contains(t);
              n && P(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [E, v, _, P]), s.useEffect(C, [r, C]), g_(v, S), g_(m.content, S), (0, i.jsx)(t_, {
            scope: n,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: Oh(a),
            onThumbPointerUp: Oh(l),
            onThumbPositionChange: C,
            onThumbPointerDown: Oh(c),
            children: (0, i.jsx)(RE.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: HE(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), T(e))
              })),
              onPointerMove: HE(e.onPointerMove, T),
              onPointerUp: HE(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        o_ = "ScrollAreaThumb",
        i_ = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = n_(o_, e.__scopeScrollArea);
          return (0, i.jsx)(DE, {
            present: n || o.hasThumb,
            children: (0, i.jsx)(a_, {
              ref: t,
              ...r
            })
          })
        })),
        a_ = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, a = zE(o_, n), l = n_(o_, n), {
            onThumbPositionChange: c
          } = l, u = ME(t, (e => l.onThumbChange(e))), d = s.useRef(), f = v_((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = m_(e, c);
                  d.current = t, c()
                }
              };
              return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, f, c]), (0, i.jsx)(RE.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: u,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: HE(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: HE(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      i_.displayName = o_;
      var s_ = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const n = zE(s_, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, i.jsx)(l_, {
          ...e,
          ref: t
        }) : null
      })).displayName = s_;
      var l_ = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = zE(s_, n), [a, l] = s.useState(0), [c, u] = s.useState(0), d = Boolean(a && c);
        return g_(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), u(e)
        })), g_(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, i.jsx)(RE.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: c,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function c_(e) {
        return e ? parseInt(e, 10) : 0
      }

      function u_(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function d_(e) {
        const t = u_(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function f_(e, t, n = "ltr") {
        const r = d_(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Ph(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return h_([0, a], [0, s])(l)
      }

      function h_(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function p_(e, t) {
        return e > 0 && e < t
      }
      var m_ = (e, t = (() => {})) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = n.left !== i.left,
            s = n.top !== i.top;
          (a || s) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function v_(e, t) {
        const n = Oh(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function g_(e, t) {
        const n = Oh(t);
        Rh((() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }), [e, n])
      }
      var y_ = GE,
        b_ = qE,
        w_ = $E,
        E_ = i_,
        __ = "foundry_uaq1gwn";
      const P_ = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: l,
          hideDescription: c = !1,
          hideRequiredAsterisk: u,
          hideDividers: d,
          errorMessage: f,
          value: h,
          defaultValue: p,
          onValueChange: m,
          open: v,
          defaultOpen: g,
          onOpenChange: y,
          isRequired: b,
          isDisabled: E,
          isReadOnly: _,
          className: P,
          ariaLabelledBy: C
        }, S) => {
          const T = St((0, s.useRef)(null), S),
            x = (0, s.useId)(),
            O = (0, s.useId)(),
            [L = !1, k] = Lt({
              prop: v,
              defaultProp: g,
              onChange: y
            });
          return (0, i.jsxs)("div", {
            className: (0, je.$)("foundry_uaq1gw0", P),
            children: [(t && !l || n) && (0, i.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, i.jsx)(w, {
                enabled: !!l,
                children: (0, i.jsx)(z, {
                  className: (0, je.$)("foundry_uaq1gw2", E && __),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: x,
                    children: [t, b && !u && (0, i.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, i.jsx)(Y, {
                className: (0, je.$)("foundry_uaq1gw3", E && __),
                children: n
              })]
            }), (0, i.jsxs)(CE, {
              required: b,
              disabled: E,
              open: L,
              onOpenChange: () => k(!_ && !L),
              value: h,
              defaultValue: p,
              onValueChange: m,
              children: [(0, i.jsxs)(SE, {
                className: (0, je.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!f && "foundry_uaq1gw7", _ && "foundry_uaq1gw6"),
                ref: T,
                "data-testid": a,
                "aria-activedescendant": h,
                "aria-labelledby": C || x,
                "aria-controls": O,
                children: [(0, i.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, i.jsx)(TE, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, i.jsx)(xE, {
                  asChild: !0,
                  className: (0, je.$)("foundry_uaq1gw9", (_ || E) && "foundry_uaq1gwa"),
                  children: L ? (0, i.jsx)(fe.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(fe.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(OE, {
                children: (0, i.jsx)(LE, {
                  id: O,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, i.jsxs)(y_, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, i.jsx)(kE, {
                      className: (0, je.$)("foundry_uaq1gwc", d && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(b_, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(w_, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, i.jsx)(E_, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(w, {
              enabled: !!f || c || 0 === o.length,
              children: (0, i.jsx)(z, {
                className: (0, je.$)("foundry_uaq1gwf", E && __),
                children: o
              })
            }), f && (0, i.jsxs)(z, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, i.jsx)(fe.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), f]
            })]
          })
        })),
        C_ = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: l
        }, c) => {
          const u = St((0, s.useRef)(null), c),
            d = n && fe[n];
          return (0, i.jsxs)(NE, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: u,
            disabled: a,
            "data-testid": l,
            children: [d && "left" === o && (0, i.jsx)(d, {
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(AE, {
              children: e
            }), d && "right" === o && (0, i.jsx)(d, {
              label: r || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var S_;
      S_ = {
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
      const T_ = new Set(["id"]),
        x_ = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        O_ = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        L_ = /^(data-.*)$/;

      function k_(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (T_.has(t) || n && x_.has(t) || r && O_.has(t) || (null == o ? void 0 : o.has(t)) || L_.test(t)) && (i[t] = e[t]);
        return i
      }
      const N_ = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        A_ = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function R_(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return N_.has(t.script)
        }
        let t = e.split("-")[0];
        return A_.has(t)
      }
      const M_ = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        D_ = s.createContext(M_),
        j_ = s.createContext(!1);
      let I_ = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        H_ = new WeakMap;
      const B_ = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)(z_());
        return e || `${n?"react-aria":`react-aria${M_.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(D_);
        t !== M_ || I_ || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(D_),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = H_.get(e);
                null == n ? H_.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, H_.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function F_() {
        return !1
      }

      function U_() {
        return !0
      }

      function V_(e) {
        return () => {}
      }

      function z_() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(V_, F_, U_) : (0, s.useContext)(j_)
      }
      const G_ = Symbol.for("react-aria.i18n.locale");

      function K_() {
        let e = "undefined" != typeof window && window[G_] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: R_(e) ? "rtl" : "ltr"
        }
      }
      let q_ = K_(),
        W_ = new Set;

      function $_() {
        q_ = K_();
        for (let e of W_) e(q_)
      }
      const X_ = s.createContext(null);

      function Y_() {
        let e = function() {
          let e = z_(),
            [t, n] = (0, s.useState)(q_);
          return (0, s.useEffect)((() => (0 === W_.size && window.addEventListener("languagechange", $_), W_.add(n), () => {
            W_.delete(n), 0 === W_.size && window.removeEventListener("languagechange", $_)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(X_) || e
      }
      const Z_ = Symbol.for("react-aria.i18n.locale"),
        Q_ = Symbol.for("react-aria.i18n.strings");
      let J_;
      class eP {
        getStringForLocale(e, t) {
          let n = this.getStringsForLocale(t)[e];
          if (!n) throw new Error(`Could not find intl message ${e} in ${t} locale`);
          return n
        }
        getStringsForLocale(e) {
          let t = this.strings[e];
          return t || (t = function(e, t, n = "en-US") {
            if (t[e]) return t[e];
            let r = function(e) {
              return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0]
            }(e);
            if (t[r]) return t[r];
            for (let e in t)
              if (e.startsWith(r + "-")) return t[e];
            return t[n]
          }(e, this.strings, this.defaultLocale), this.strings[e] = t), t
        }
        static getGlobalDictionaryForPackage(e) {
          if ("undefined" == typeof window) return null;
          let t = window[Z_];
          if (void 0 === J_) {
            let e = window[Q_];
            if (!e) return null;
            J_ = {};
            for (let n in e) J_[n] = new eP({
              [t]: e[n]
            }, t)
          }
          let n = null == J_ ? void 0 : J_[e];
          if (!n) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return n
        }
        constructor(e, t = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = t
        }
      }
      const tP = new Map,
        nP = new Map;
      class rP {
        format(e, t) {
          let n = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
          let r = t["=" + e];
          if (r) return "function" == typeof r ? r() : r;
          let o = this.locale + ":" + n,
            i = tP.get(o);
          return i || (i = new Intl.PluralRules(this.locale, {
            type: n
          }), tP.set(o, i)), r = t[i.select(e)] || t.other, "function" == typeof r ? r() : r
        }
        number(e) {
          let t = nP.get(this.locale);
          return t || (t = new Intl.NumberFormat(this.locale), nP.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
          let n = e[t] || e.other;
          return "function" == typeof n ? n() : n
        }
        constructor(e, t) {
          this.locale = e, this.strings = t
        }
      }
      const oP = new WeakMap;

      function iP(e, t) {
        let {
          locale: n
        } = Y_(), r = function(e, t) {
          return t && eP.getGlobalDictionaryForPackage(t) || function(e) {
            let t = oP.get(e);
            return t || (t = new eP(e), oP.set(e, t)), t
          }(e)
        }(e, t);
        return (0, s.useMemo)((() => new rP(n, r)), [n, r])
      }

      function aP(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const sP = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function lP(e) {
        const t = (0, s.useRef)(null);
        return sP((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      let cP = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        uP = new Map;

      function dP(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = B_(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return cP && (uP.has(o) && !uP.get(o).includes(i) ? uP.set(o, [...uP.get(o), i]) : uP.set(o, [i])), sP((() => {
          let e = o;
          return () => {
            uP.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function fP(e, t) {
        if (e === t) return e;
        let n = uP.get(e);
        if (n) return n.forEach((e => e(t))), t;
        let r = uP.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function hP(e = []) {
        let t = dP(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = lP((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            sP((() => {
              r.current && o()
            }));
            let i = lP((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return sP(o, [t, o, ...e]), n
      }

      function pP(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = aP(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = fP(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, je.A)(n, o)
          }
        }
        return t
      }

      function mP(e) {
        if (function() {
            if (null == vP) {
              vP = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return vP = !0, !0
                  }
                })
              } catch (e) {}
            }
            return vP
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let vP = null;

      function gP(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function yP(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function bP(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const wP = bP((function() {
          return yP(/^Mac/i)
        })),
        EP = bP((function() {
          return yP(/^iPhone/i)
        })),
        _P = bP((function() {
          return yP(/^iPad/i) || wP() && navigator.maxTouchPoints > 1
        })),
        PP = bP((function() {
          return EP() || _P()
        })),
        CP = (bP((function() {
          return wP() || PP()
        })), bP((function() {
          return gP(/AppleWebKit/i) && !SP()
        }))),
        SP = bP((function() {
          return gP(/Chrome/i)
        })),
        TP = bP((function() {
          return gP(/Android/i)
        })),
        xP = bP((function() {
          return gP(/Firefox/i)
        })),
        OP = (0, s.createContext)({
          isNative: !0,
          open: function(e, t) {
            ! function(e, t) {
              if (e instanceof HTMLAnchorElement) t(e);
              else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
              }
            }(e, (e => kP(e, t)))
          },
          useHref: e => e
        });

      function LP() {
        return (0, s.useContext)(OP)
      }

      function kP(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        xP() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (wP() ? i = !0 : a = !0);
        let c = CP() && wP() && !_P() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        kP.isOpening = n, mP(e), e.dispatchEvent(c), kP.isOpening = !1
      }

      function NP(e) {
        var t;
        const n = LP().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      kP.isOpening = !1;
      const AP = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        RP = e => e && "window" in e && e.window === e ? e : AP(e).defaultView || window;
      let MP = new Map,
        DP = new Set;

      function jP() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = MP.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), MP.delete(n.target)), 0 === MP.size)) {
            for (let e of DP) e();
            DP.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = MP.get(n.target);
          r || (r = new Set, MP.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function IP(e) {
        requestAnimationFrame((() => {
          0 === MP.size ? e() : DP.add(e)
        }))
      }

      function HP(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (TP() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? jP() : document.addEventListener("DOMContentLoaded", jP));
      let BP = null,
        FP = new Set,
        UP = new Map,
        VP = !1,
        zP = !1;

      function GP(e, t) {
        for (let n of FP) n(e, t)
      }

      function KP(e) {
        VP = !0,
          function(e) {
            return !(e.metaKey || !wP() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (BP = "keyboard", GP("keyboard", e))
      }

      function qP(e) {
        BP = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (VP = !0, GP("pointer", e))
      }

      function WP(e) {
        HP(e) && (VP = !0, BP = "virtual")
      }

      function $P(e) {
        e.target !== window && e.target !== document && (VP || zP || (BP = "virtual", GP("virtual", e)), VP = !1, zP = !1)
      }

      function XP() {
        VP = !1, zP = !0
      }

      function YP(e) {
        if ("undefined" == typeof window || UP.get(RP(e))) return;
        const t = RP(e),
          n = AP(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          VP = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", KP, !0), n.addEventListener("keyup", KP, !0), n.addEventListener("click", WP, !0), t.addEventListener("focus", $P, !0), t.addEventListener("blur", XP, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", qP, !0), n.addEventListener("pointermove", qP, !0), n.addEventListener("pointerup", qP, !0)) : (n.addEventListener("mousedown", qP, !0), n.addEventListener("mousemove", qP, !0), n.addEventListener("mouseup", qP, !0)), t.addEventListener("beforeunload", (() => {
          ZP(e)
        }), {
          once: !0
        }), UP.set(t, {
          focus: r
        })
      }
      const ZP = (e, t) => {
        const n = RP(e),
          r = AP(e);
        t && r.removeEventListener("DOMContentLoaded", t), UP.has(n) && (n.HTMLElement.prototype.focus = UP.get(n).focus, r.removeEventListener("keydown", KP, !0), r.removeEventListener("keyup", KP, !0), r.removeEventListener("click", WP, !0), n.removeEventListener("focus", $P, !0), n.removeEventListener("blur", XP, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", qP, !0), r.removeEventListener("pointermove", qP, !0), r.removeEventListener("pointerup", qP, !0)) : (r.removeEventListener("mousedown", qP, !0), r.removeEventListener("mousemove", qP, !0), r.removeEventListener("mouseup", qP, !0)), UP.delete(n))
      };

      function QP(e, t) {
        sP((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = AP(e);
        let n;
        "loading" !== t.readyState ? YP(e) : (n = () => {
          YP(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class JP {
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

      function eC(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        sP((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = lP((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                t.current.isFocused = !1, r.disabled && n(new JP("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            })), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [n])
      }

      function tC(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
            },
            continuePropagation() {
              t = !1
            }
          };
          e(r), t && n.stopPropagation()
        }
      }
      let nC = s.createContext(null);

      function rC(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, s.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            a = eC(i),
            l = (0, s.useCallback)((e => {
              const t = AP(e.target);
              e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
            }), [o, n, a]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? l : void 0,
              onBlur: t || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: tC(e.onKeyDown),
              onKeyUp: tC(e.onKeyUp)
            }
          }
        }(e), o = pP(n, r), i = function(e) {
          let t = (0, s.useContext)(nC) || {};
          QP(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = AP(e);
            if ("virtual" === BP) {
              let n = t.activeElement;
              IP((() => {
                t.activeElement === n && e.isConnected && mP(e)
              }))
            } else mP(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: pP({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let oC = "default",
        iC = "",
        aC = new WeakMap;

      function sC(e) {
        if (PP()) {
          if ("default" === oC) {
            const t = AP(e);
            iC = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          oC = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (aC.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function lC(e) {
        if (PP()) {
          if ("disabled" !== oC) return;
          oC = "restoring", setTimeout((() => {
            IP((() => {
              if ("restoring" === oC) {
                const t = AP(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = iC || ""), iC = "", oC = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && aC.has(e)) {
          let t = aC.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), aC.delete(e)
        }
      }
      const cC = s.createContext({
        register: () => {}
      });
      cC.displayName = "PressResponderContext";
      var uC = new WeakMap;
      class dC {
        continuePropagation() {
          Un(this, uC, !1)
        }
        get shouldStopPropagation() {
          return Bn(this, uC)
        }
        constructor(e, t, n, r) {
          var o;
          Fn(this, uC, {
            writable: !0,
            value: void 0
          }), Un(this, uC, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c
        }
      }
      const fC = Symbol("linkClicked");

      function hC(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: u,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, s.useContext)(cC);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = pP(r, e), n()
          }
          return QP(t, e.ref), e
        }(e), [p, m] = (0, s.useState)(!1), v = (0, s.useRef)({
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
          addGlobalListener: g,
          removeAllGlobalListeners: y
        } = function() {
          let e = (0, s.useRef)(new Map),
            t = (0, s.useCallback)(((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, r, o)
            }), []),
            n = (0, s.useCallback)(((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }), []),
            r = (0, s.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, s.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = lP(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new dC("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = lP(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new dC("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new dC("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = lP(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new dC("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = lP((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(yC(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || lC(t.target))
        })), P = lP((e => {
          u && _(e)
        })), C = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (mC(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  _C(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        mC(t, r) && !t.repeat && r.contains(t.target) && e.target && E(yC(e.target, t), "keyboard")
                      };
                    g(AP(t.currentTarget), "keyup", aP(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && wP() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !kP.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || HP(t.nativeEvent))) {
                    a || c || mP(t.currentTarget);
                    let e = b(t, "virtual"),
                      r = E(t, "virtual"),
                      o = w(t, "virtual");
                    n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && mC(t, e.target)) {
                var r;
                _C(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(yC(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && pC(e.target) && e.target.contains(n) && !t[fC] && (t[fC] = !0, kP(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (o = t.nativeEvent, !TP() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              wC(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || c || mP(t.currentTarget), d || sC(e.target), s = b(t, e.pointerType), g(AP(t.currentTarget), "pointermove", n, !1), g(AP(t.currentTarget), "pointerup", r, !1), g(AP(t.currentTarget), "pointercancel", i, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (wC(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && bC(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && bC(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(yC(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(yC(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (bC(t, e.target) && null != e.pointerType ? w(yC(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(yC(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || lC(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && g(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                EC(e.currentTarget) && e.preventDefault()
              },
              i = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (wC(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = HP(t.nativeEvent) ? "virtual" : "mouse", a || c || mP(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(AP(t.currentTarget), "mouseup", n, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = b(t, e.pointerType)), n && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = w(t, e.pointerType, !1), P(t)), n && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || E(t, e.pointerType || "mouse"))
            };
            let n = t => {
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && bC(t, e.target) && null != e.pointerType ? w(yC(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(yC(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || c || mP(t.currentTarget), d || sC(e.target), b(gC(e.target, t), e.pointerType) && t.stopPropagation(), g(RP(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = vC(t.nativeEvent, e.activePointerId),
                r = !0;
              n && bC(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(gC(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(gC(e.target, t), e.pointerType, !1), P(gC(e.target, t))), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = vC(t.nativeEvent, e.activePointerId),
                r = !0;
              n && bC(n, t.currentTarget) && null != e.pointerType ? (E(gC(e.target, t), e.pointerType), r = w(gC(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(gC(e.target, t), e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && lC(e.target), y()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && _(gC(e.target, t)))
            };
            let r = t => {
              e.isPressed && t.target.contains(e.target) && _({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          }
          return t
        }), [g, a, c, y, d, _, P, w, b, E]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || lC(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: pP(h, C)
        }
      }

      function pC(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function mC(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof RP(o).HTMLInputElement && !CC(o, n) || o instanceof RP(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && pC(o)) && "Enter" !== n)
      }

      function vC(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function gC(e, t) {
        let n = 0,
          r = 0;
        return t.targetTouches && 1 === t.targetTouches.length && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function yC(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function bC(e, t) {
        let n = t.getBoundingClientRect(),
          r = function(e) {
            let t = 0,
              n = 0;
            return void 0 !== e.width ? t = e.width / 2 : void 0 !== e.radiusX && (t = e.radiusX), void 0 !== e.height ? n = e.height / 2 : void 0 !== e.radiusY && (n = e.radiusY), {
              top: e.clientY - n,
              right: e.clientX + t,
              bottom: e.clientY + n,
              left: e.clientX - t
            }
          }(e);
        return i = r, !((o = n).left > i.right || i.left > o.right || o.top > i.bottom || i.top > o.bottom);
        var o, i
      }

      function wC(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function EC(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : pC(e)))
      }

      function _C(e, t) {
        return e instanceof HTMLInputElement ? !CC(e, t) : EC(e)
      }
      const PC = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function CC(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : PC.has(e.type)
      }

      function SC(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== n && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = rC(e, t), {
          pressProps: d,
          isPressed: f
        } = hC({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          isDisabled: s,
          ref: t
        }), h = k_(l, {
          labelable: !0
        }), p = pP(u, d), m = LP();
        return {
          isPressed: f,
          linkProps: pP(h, NP(e), {
            ...p,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), a && (a(t), console.warn("onClick is deprecated, please use onPress")), !m.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let n = e.getAttribute("target");
                return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), m.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
      var TC = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        xC = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        OC = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        LC = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        kC = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      const NC = (0, s.forwardRef)((({
          breadcrumbs: e,
          size: t = "MD",
          isLandmark: n = !0,
          hideRootPage: r,
          showCurrentPage: o,
          testId: a,
          ...l
        }, c) => {
          if (0 === e.length) return null;
          const u = St((0, s.useRef)(null), c),
            d = (0, s.useRef)(null),
            {
              countWrappedElements: f
            } = {
              countWrappedElements: e => {
                if (!e.current) return;
                const {
                  children: t
                } = e.current;
                let n = 0,
                  r = 0;
                return Array.from(t).map(((e, t) => {
                  const o = e.getBoundingClientRect().top,
                    i = e.getBoundingClientRect().height;
                  return 0 === t && (n = o, r = i), o
                })).filter((e => e >= n + r)).length
              }
            },
            h = e[0],
            p = e[e.length - 1],
            m = e.slice(1, e.length - 1),
            [v, g] = (0, s.useState)(m),
            [y, b] = (0, s.useState)([]),
            w = (0, s.useCallback)((() => {
              const e = f(d);
              g(m.slice(e, m.length)), b(m.slice(0, e))
            }), [d]);
          (0, s.useEffect)((() => {
            const e = new ResizeObserver(w);
            return d.current && e.observe(d.current), () => {
              d.current && e.unobserve(d.current)
            }
          }), [d.current]);
          const E = (0, s.useMemo)((() => {
              const e = m.slice().reverse();
              return (0, i.jsxs)("ol", {
                className: TC[t],
                ref: d,
                "aria-hidden": "true",
                children: [!r && h && (0, i.jsx)(AC, {
                  href: h.url,
                  size: t,
                  icon: h.icon,
                  iconLabel: h.iconLabel,
                  iconPosition: h.iconPosition,
                  children: h.label
                }, h.label), y.length > 0 && (0, i.jsx)("li", {
                  className: OC[t],
                  children: (0, i.jsx)("button", {
                    className: LC,
                    children: "..."
                  })
                }), o && p && (0, i.jsx)(AC, {
                  href: p.url,
                  size: t,
                  icon: p.icon,
                  iconLabel: p.iconLabel,
                  iconPosition: p.iconPosition,
                  isCurrent: !0,
                  children: p.label
                }, p.label), e.map((e => (0, i.jsx)(AC, {
                  href: e.url,
                  size: t,
                  icon: e.icon,
                  iconLabel: e.iconLabel,
                  iconPosition: e.iconPosition,
                  children: e.label
                }, e.label)))]
              })
            }), [e, y]),
            {
              navProps: _
            } = function(e) {
              let {
                "aria-label": t,
                ...n
              } = e, r = iP((o = S_) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
              var o;
              return {
                navProps: {
                  ...k_(n, {
                    labelable: !0
                  }),
                  "aria-label": t || r.format("breadcrumbs")
                }
              }
            }(l),
            P = n ? "nav" : "div";
          return (0, i.jsxs)(P, {
            ..._,
            role: n ? "navigation" : null,
            className: "foundry_m1icrx0",
            children: [(0, i.jsxs)("ol", {
              className: kC[t],
              "data-testid": a,
              ref: u,
              children: [!r && h && (0, i.jsx)(AC, {
                href: h.url,
                size: t,
                icon: h.icon,
                iconLabel: h.iconLabel,
                iconPosition: h.iconPosition,
                children: h.label
              }, h.label), y.length > 0 && (0, i.jsx)("li", {
                className: OC[t],
                children: (0, i.jsx)(RC, {
                  items: y
                })
              }), v.length > 0 && v.map(((e, n) => {
                const {
                  label: r,
                  url: o,
                  icon: a,
                  iconLabel: s,
                  iconPosition: l
                } = e;
                return (0, i.jsx)(AC, {
                  href: o,
                  size: t,
                  icon: a,
                  iconLabel: s,
                  iconPosition: l,
                  children: r
                }, `${r.replace(/\s/g,"")}-${n}`)
              })), o && p && (0, i.jsx)(AC, {
                href: p.url,
                size: t,
                icon: p.icon,
                iconLabel: p.iconLabel,
                iconPosition: p.iconPosition,
                isCurrent: !0,
                children: p.label
              }, p.label)]
            }), E]
          })
        })),
        AC = ({
          size: e,
          icon: t,
          iconLabel: n,
          iconPosition: r = "left",
          ...o
        }) => {
          const a = (0, s.useRef)(null),
            {
              itemProps: l
            } = function(e, t) {
              let {
                isCurrent: n,
                isDisabled: r,
                "aria-current": o,
                elementType: i = "a",
                ...a
              } = e, {
                linkProps: s
              } = SC({
                isDisabled: r || n,
                elementType: i,
                ...a
              }, t), l = {};
              return /^h[1-6]$/.test(i) || (l = s), n && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
                itemProps: {
                  "aria-disabled": r,
                  ...l
                }
              }
            }({
              ...o,
              elementType: "a"
            }, a),
            {
              isCurrent: c,
              children: u
            } = o,
            d = c ? "span" : "a",
            f = t && fe[t];
          return (0, i.jsx)("li", {
            className: OC[e],
            children: (0, i.jsxs)(d, {
              ...l,
              ref: a,
              className: (0, je.$)(xC[e], c && "foundry_m1icrxd"),
              children: [f && "left" === r && (0, i.jsx)(f, {
                label: n || "",
                size: "LG"
              }), u, f && "right" === r && (0, i.jsx)(f, {
                label: n || "",
                size: "LG"
              })]
            })
          })
        },
        RC = ({
          items: e
        }) => {
          const [t, n] = (0, s.useState)(!1);
          return (0, i.jsxs)(CE, {
            open: t,
            onOpenChange: () => n(!t),
            children: [(0, i.jsx)(SE, {
              className: LC,
              children: "..."
            }), (0, i.jsx)(OE, {
              children: (0, i.jsx)(LE, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, i.jsx)(kE, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, t) => (0, i.jsx)(NE, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, i.jsx)(AE, {
                      children: e.label
                    })
                  }, `${e.label}-${t}`)))
                })
              })
            })]
          })
        },
        MC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        DC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        jC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        IC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        HC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        BC = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function FC(e, t, n) {
        let [r, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
        (0, s.useEffect)((() => {
          let e = i.current;
          e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
        }), [a]);
        let l = a ? e : r,
          c = (0, s.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
            };
            "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((n, ...o) => {
              let i = e(a ? l : n, ...o);
              return r(i, ...t), a ? n : i
            }))) : (a || o(e), r(e, ...t))
          }), [a, l, n]);
        return [l, c]
      }

      function UC(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = FC(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function VC(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        sP((() => {
          if ("native" === r && (null == n ? void 0 : n.current)) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: zC(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = lP((() => {
            t.resetValidation()
          })),
          a = lP((e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var a;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), BP = "keyboard", GP("keyboard", null)), e.preventDefault()
          })),
          l = lP((() => {
            t.commitValidation()
          }));
        (0, s.useEffect)((() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i)
          }
        }), [n, a, l, i, r])
      }

      function zC(e) {
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
      const GC = {
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
        KC = {
          ...GC,
          customError: !0,
          valid: !1
        },
        qC = {
          isInvalid: !1,
          validationDetails: GC,
          validationErrors: []
        },
        WC = (0, s.createContext)({}),
        $C = "__formValidationState" + Date.now();

      function XC(e) {
        if (e[$C]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[$C];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: l = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let c = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: KC
            } : null,
            u = (0, s.useMemo)((() => ZC(function(e, t) {
              if ("function" == typeof e) {
                let n = e(t);
                if (n && "boolean" != typeof n) return YC(n)
              }
              return []
            }(a, o))), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = null);
          let d = (0, s.useContext)(WC),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => YC(d[e]))) : YC(d[r]) : []), [d, r]),
            [h, p] = (0, s.useState)(d),
            [m, v] = (0, s.useState)(!1);
          d !== h && (p(d), v(!1));
          let g = (0, s.useMemo)((() => ZC(m ? [] : f)), [m, f]),
            y = (0, s.useRef)(qC),
            [b, w] = (0, s.useState)(qC),
            E = (0, s.useRef)(qC),
            [_, P] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!_) return;
            P(!1);
            let e = u || i || y.current;
            QC(e, E.current) || (E.current = e, w(e))
          })), {
            realtimeValidation: c || g || u || i || qC,
            displayValidation: "native" === l ? c || g || b : c || g || u || i || b,
            updateValidation(e) {
              "aria" !== l || QC(b, e) ? y.current = e : w(e)
            },
            resetValidation() {
              let e = qC;
              QC(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
            },
            commitValidation() {
              "native" === l && P(!0), v(!0)
            }
          }
        }(e)
      }

      function YC(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function ZC(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: KC
        } : null
      }

      function QC(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function JC(e, t, n) {
        let r = (0, s.useRef)(t),
          o = lP((() => {
            n && n(r.current)
          }));
        (0, s.useEffect)((() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", o), () => {
            null == n || n.removeEventListener("reset", o)
          }
        }), [e, o])
      }

      function eS(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: d
        } = e;
        null != s || null != l || null != c || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
          pressProps: f,
          isPressed: h
        } = hC({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = hC({
          isDisabled: r || o,
          onPress() {
            t.toggle()
          }
        }), {
          focusableProps: v
        } = rC(e, n), g = pP(f, v), y = k_(e, {
          labelable: !0
        });
        return JC(n, t.isSelected, t.setSelected), {
          labelProps: pP(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: pP(y, {
            "aria-invalid": d || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...g
          }),
          isSelected: t.isSelected,
          isPressed: h || m,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: d || "invalid" === u
        }
      }

      function tS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function nS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function rS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nS(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = tS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function oS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var iS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        aS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = rS(rS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) iS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oS(e.variantClassNames, (e => oS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        sS = aS({
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
        lS = aS({
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
        cS = aS({
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
        uS = aS({
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
      const dS = (0, s.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: l,
          size: c = "MD",
          appearance: u = "primary",
          isIndeterminate: d,
          hideLabel: f,
          testId: h,
          errorMessage: p,
          className: m,
          ...v
        }, g) => {
          const y = (0, s.useRef)(null),
            b = St(y, g),
            E = (0, s.useId)(),
            {
              setSelected: _,
              ...P
            } = UC({
              isSelected: e,
              defaultSelected: t,
              onChange: n,
              value: v.value
            }),
            {
              inputProps: C,
              isDisabled: S,
              isReadOnly: T,
              isInvalid: x,
              isSelected: O
            } = function(e, t, n) {
              let r = XC({
                  ...e,
                  value: t.isSelected
                }),
                {
                  isInvalid: o,
                  validationErrors: i,
                  validationDetails: a
                } = r.displayValidation,
                {
                  labelProps: l,
                  inputProps: c,
                  isSelected: u,
                  isPressed: d,
                  isDisabled: f,
                  isReadOnly: h
                } = eS({
                  ...e,
                  isInvalid: o
                }, t, n);
              VC(e, r, n);
              let {
                isIndeterminate: p,
                isRequired: m,
                validationBehavior: v = "aria"
              } = e;
              return (0, s.useEffect)((() => {
                n.current && (n.current.indeterminate = !!p)
              })), {
                labelProps: l,
                inputProps: {
                  ...c,
                  checked: u,
                  "aria-required": m && "aria" === v || void 0,
                  required: m && "native" === v
                },
                isSelected: u,
                isPressed: d,
                isDisabled: f,
                isReadOnly: h,
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              }
            }({
              ...v,
              "aria-label": o,
              id: E
            }, {
              ...P,
              setSelected: v.isReadOnly ? () => !1 : _
            }, y),
            L = (0, a.v6)({
              ...C,
              "aria-checked": O,
              className: m
            }, {
              className: "foundry_11gbdty1"
            }),
            k = d ? r[`Dash${c}`] : r[`Check${c}`],
            N = x && !!p;
          return (0, i.jsxs)("label", {
            className: "foundry_11gbdty0",
            children: [(0, i.jsxs)("div", {
              className: lS({
                size: c
              }),
              children: [(0, i.jsx)(w, {
                children: (0, i.jsx)("input", {
                  ...L,
                  ref: b
                })
              }), (0, i.jsx)("div", {
                className: sS({
                  size: c,
                  appearance: u
                }),
                "aria-hidden": "true",
                "data-state": d ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": S || T,
                "data-testid": h,
                children: (0, i.jsx)("span", {
                  className: "foundry_11gbdtyc",
                  children: (O || d) && (0, i.jsx)(k, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, i.jsx)(w, {
              enabled: !!f,
              children: (0, i.jsxs)("div", {
                className: uS({
                  size: c,
                  isDisabled: S
                }),
                children: [(0, i.jsx)("p", {
                  className: cS({
                    size: c
                  }),
                  children: o
                }), l && !N && (0, i.jsx)("p", {
                  className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: l
                }), N && (0, i.jsx)("p", {
                  className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: p
                })]
              })
            })]
          })
        })),
        fS = new WeakMap;

      function hS(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = RP(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || hS(e.parentElement, e))
      }
      const pS = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        mS = pS.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      pS.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const vS = pS.join(':not([hidden]):not([tabindex="-1"]),');

      function gS(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function yS(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? vS : mS,
          o = AP(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !hS(e) || n && !gS(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class bS {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new wS({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && gS(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new bS;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new wS({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class wS {
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

      function ES(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = dP(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function _S(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = dP(t);
          let a = dP(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: ES({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = hP([Boolean(t), Boolean(n), r, o]), l = hP([Boolean(t), Boolean(n), r, o]);
        return a = pP(a, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }

      function PS(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = Y_(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = _S({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), g = k_(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, s.useRef)({
            isFocusWithin: !1
          }), a = (0, s.useCallback)((e => {
            i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, n && n(e), o && o(!1))
          }), [n, o, i]), l = eC(a), c = (0, s.useCallback)((e => {
            i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, l(e))
          }), [r, o, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: c,
              onBlur: a
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = dP(n);
        return fS.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: pP(g, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === c && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = yS(e.currentTarget, {
                from: e.target
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": r || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...p,
            ...y
          }),
          labelProps: h,
          descriptionProps: m,
          errorMessageProps: v,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }
      new bS;
      let CS = Math.round(1e10 * Math.random()),
        SS = 0;

      function TS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function xS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function OS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? xS(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = TS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function LS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var kS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        NS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = OS(OS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) kS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return LS(e.variantClassNames, (e => LS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        AS = NS({
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
      const RS = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        MS = (0, s.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: c,
          testId: u,
          className: d,
          errorMessage: f,
          orientation: h = "vertical",
          ...p
        }, m) => {
          const {
            children: v
          } = p, g = St((0, s.useRef)(null), m), y = p.id || (0, s.useId)(), b = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${CS}-${++SS}`), [e.name]);
            var n;
            let [r, o] = FC(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, s.useState)(null), l = XC({
              ...e,
              value: r
            }), c = l.displayValidation.isInvalid;
            return {
              ...l,
              name: t,
              selectedValue: r,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
              },
              lastFocusedValue: i,
              setLastFocusedValue: a,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (c ? "invalid" : null),
              isInvalid: c
            }
          }(p), E = {
            state: b,
            size: n,
            appearance: r
          }, {
            radioGroupProps: _,
            labelProps: P,
            descriptionProps: C,
            isInvalid: S,
            errorMessageProps: T
          } = PS({
            ...p,
            id: y,
            label: e,
            isRequired: l,
            description: t,
            orientation: h
          }, b), x = (0, a.v6)({
            ..._,
            className: d
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": T?.id
          }), O = S && !!f;
          return (0, i.jsxs)("div", {
            ref: g,
            "data-testid": u,
            ...x,
            children: [(0, i.jsx)(w, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, i.jsx)(z, {
                  ...P,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, l && !c && (0, i.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, i.jsx)(Y, {
                  ...C,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: t
                })]
              })
            }), (0, i.jsx)("div", {
              className: AS({
                size: n,
                orientation: h
              }),
              children: (0, i.jsx)(RS.Provider, {
                value: E,
                children: v
              })
            }), O && (0, i.jsxs)(z, {
              ...T,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, i.jsx)(fe.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), f]
            })]
          })
        })),
        DS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        }),
        jS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        IS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var HS = NS({
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
        BS = NS({
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
        FS = NS({
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
        US = NS({
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
      const VS = (0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: a,
        ...l
      }, c) => {
        const u = (0, s.useRef)(null),
          d = St(u, c),
          f = l.id || (0, s.useId)(),
          h = (0, s.useContext)(RS),
          {
            state: p,
            appearance: m,
            size: v
          } = h,
          {
            inputProps: g
          } = function(e, t, n) {
            let {
              value: r,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || t.isDisabled;
            null != o || null != i || null != a || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
            let l = t.selectedValue === r,
              {
                pressProps: c,
                isPressed: u
              } = hC({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = hC({
                isDisabled: s,
                onPress() {
                  t.setSelectedValue(r)
                }
              }),
              {
                focusableProps: h
              } = rC(pP(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = pP(c, h),
              m = k_(e, {
                labelable: !0
              }),
              v = -1;
            null != t.selectedValue ? t.selectedValue === r && (v = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
            let {
              name: g,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: w
            } = fS.get(t);
            return JC(n, t.selectedValue, t.setSelectedValue), VC({
              validationBehavior: w
            }, t, n), {
              labelProps: pP(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: pP(m, {
                ...p,
                type: "radio",
                name: g,
                tabIndex: v,
                disabled: s,
                required: t.isRequired && "native" === w,
                checked: l,
                value: r,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(r)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, y].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: u || f
            }
          }({
            ...l,
            "aria-label": e,
            id: f
          }, p, u),
          y = g.checked,
          b = g.disabled || p?.isReadOnly,
          E = o[`Dot${v}`];
        return (0, i.jsxs)("label", {
          className: (0, je.$)("foundry_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: FS({
              size: v
            }),
            children: [(0, i.jsx)(w, {
              children: (0, i.jsx)("input", {
                ...g,
                ref: d,
                className: "foundry_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: BS({
                appearance: m
              }),
              "aria-hidden": "true",
              "data-state": y ? "checked" : "unchecked",
              "data-disabled": b,
              "data-testid": r,
              children: (0, i.jsx)("span", {
                className: "foundry_1pfduet9",
                children: y && (0, i.jsx)(E, {})
              })
            })]
          }), (0, i.jsx)(w, {
            enabled: !!n,
            children: (0, i.jsxs)("div", {
              className: US({
                size: v
              }),
              children: [(0, i.jsx)("p", {
                className: HS({
                  size: v,
                  isDisabled: g.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_1pfduetj foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: t
              })]
            })
          })]
        })
      }));

      function zS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function GS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function KS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? GS(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = zS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : GS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function qS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var WS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        $S = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = KS(KS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) WS(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qS(e.variantClassNames, (e => qS(e, (e => e.split(" ")[0]))))
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
      const XS = (0, s.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: a,
          ...s
        }, l) => {
          const c = "horizontal" !== t || r ? "div" : "hr",
            u = r || "hr" === c ? void 0 : "separator",
            d = o ? f : c;
          return (0, i.jsx)(d, {
            ref: l,
            className: (0, je.$)($S({
              thickness: n,
              orientation: t
            }), e),
            role: u,
            "aria-orientation": t,
            "data-testid": a,
            ...s
          })
        })),
        YS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        ZS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        QS = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });

      function JS(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function eT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function tT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eT(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = JS(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eT(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function nT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var rT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        oT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = tT(tT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) rT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nT(e.variantClassNames, (e => nT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        iT = oT({
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
        aT = oT({
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
        sT = oT({
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
        lT = oT({
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
        cT = oT({
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
        uT = oT({
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
      const dT = (0, s.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: l,
        hideLabel: c,
        testId: u,
        ...d
      }, f) => {
        const h = (0, s.useRef)(null),
          p = St(h, f),
          m = (0, s.useId)(),
          v = UC(d),
          {
            inputProps: g,
            isDisabled: y,
            isReadOnly: b,
            isSelected: E
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = eS(e, t, n);
            return {
              labelProps: r,
              inputProps: {
                ...o,
                role: "switch",
                checked: i
              },
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            }
          }({
            ...d,
            "aria-label": e,
            id: m
          }, v, h),
          _ = a ? fe[a] : QS,
          P = l ? fe[l] : ZS;
        return (0, i.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, i.jsxs)("div", {
            className: cT({
              appearance: r
            }),
            "data-state": E ? "selected" : "unselected",
            "data-disabled": y || b,
            "data-testid": u,
            children: [(0, i.jsx)(w, {
              children: (0, i.jsx)("input", {
                ...g,
                ref: p
              })
            }), (0, i.jsxs)("div", {
              className: lT({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: iT({
                  size: n,
                  isSelected: E
                }),
                children: (0, i.jsx)(YS, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: aT({
                    size: n,
                    isSelected: E,
                    position: "left"
                  }),
                  children: (0, i.jsx)(_, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: aT({
                    size: n,
                    isSelected: E,
                    position: "right"
                  }),
                  children: (0, i.jsx)(P, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, i.jsx)(w, {
            enabled: !!c,
            children: (0, i.jsxs)("div", {
              className: uT({
                size: n,
                isDisabled: y
              }),
              children: [(0, i.jsx)("p", {
                className: sT({
                  size: n
                }),
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_okz6z2i foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                children: t
              })]
            })
          })]
        })
      }));

      function fT(e) {
        var t = function(e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function hT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function pT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hT(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = fT(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hT(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function mT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      dT.displayName = "Switch";
      var vT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        gT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = pT(pT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) vT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return mT(e.variantClassNames, (e => mT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        yT = gT({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bT = gT({
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
        wT = gT({
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
      const ET = (0, s.createContext)(null);

      function _T() {
        const e = (0, s.useContext)(ET);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const PT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, s) => {
          const l = e ? f : "div",
            c = (0, a.v6)(o, {
              className: wT({
                status: n,
                background: r
              })
            });
          return (0, i.jsx)(ET.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, i.jsx)(l, {
              ref: s,
              "data-testid": t,
              ...c,
              ...o
            })
          })
        })),
        CT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? f : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qha"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        ST = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? f : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhb"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        TT = {
          danger: "XCircleSolid",
          information: "InfoCircleSolid",
          success: "CheckCircleSolid",
          warning: "AlertTriangleSolid"
        },
        xT = (0, s.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = _T(), o = e || TT[r], s = fe[o], l = (0, a.v6)(t, {
            className: bT({
              status: r
            })
          });
          return (0, i.jsx)("div", {
            className: "foundry_1m368qhc",
            children: (0, i.jsx)(s, {
              title: "",
              ref: n,
              ...l
            })
          })
        })),
        OT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? f : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhi"
            });
          return (0, i.jsx)(L, {
            level: 5,
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...s
            })
          })
        })),
        LT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? f : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhj"
            });
          return (0, i.jsx)(z, {
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...s
            })
          })
        })),
        kT = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const l = (0, s.useRef)(null),
            c = St(l, o),
            u = e ? f : "a",
            {
              linkProps: d,
              isPressed: h
            } = SC(r, l),
            p = (0, a.v6)(d, {
              className: "foundry_1m368qhk foundry_1d5mo5m0"
            });
          return (0, i.jsx)(z, {
            asChild: !0,
            appearance: "hyperlink",
            children: (0, i.jsx)(u, {
              "data-pressed": h,
              "data-testid": n,
              ref: c,
              ...p,
              children: t
            })
          })
        })),
        NT = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const s = e ? f : "div",
            l = (0, a.v6)(r, {
              className: "foundry_1m368qhl"
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": n,
            ...l,
            children: t
          })
        })),
        AT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const a = e ? f : "div";
          return (0, i.jsx)(z, {
            asChild: !0,
            children: (0, i.jsx)(a, {
              ref: o,
              "data-testid": t,
              className: (0, je.$)(n, "foundry_1m368qho"),
              ...r
            })
          })
        })),
        RT = (0, s.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = _T(), s = (0, a.v6)(n, {
            className: yT({
              hasBackground: "none" !== o
            })
          });
          return (0, i.jsx)(Qp, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...s
          })
        }))
    }
  }
]);