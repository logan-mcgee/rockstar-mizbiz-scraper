! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d7ed168-6b71-4dae-b481-0e334b5beda3", e._sentryDebugIdIdentifier = "sentry-dbid-6d7ed168-6b71-4dae-b481-0e334b5beda3")
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
  [227], {
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
    37964: (e, t, n) => {
      n.d(t, {
        S: () => o
      });
      var r = n(62229);

      function o(e, t) {
        return n = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (i = (0, r.useState)((function() {
          return {
            value: n,
            callback: o,
            facade: {
              get current() {
                return i.value
              },
              set current(e) {
                var t = i.value;
                t !== e && (i.value = e, i.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, i.facade;
        var n, o, i
      }
    },
    81402: (e, t, n) => {
      n.d(t, {
        C: () => a,
        f: () => s
      });
      var r = n(63461);

      function o(e) {
        return e
      }

      function i(e, t) {
        void 0 === t && (t = o);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, r);
            return n.push(o),
              function() {
                n = n.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (r = !0; n.length;) {
              var t = n;
              n = [], t.forEach(e)
            }
            n = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              n = [], o.forEach(e), t = n
            }
            var i = function() {
                var n = t;
                t = [], n.forEach(e)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), n = {
              push: function(e) {
                t.push(e), a()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function a(e, t) {
        return void 0 === t && (t = o), i(e, t)
      }

      function s(e) {
        void 0 === e && (e = {});
        var t = i(null);
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    50227: (e, t, n) => {
      n.r(t), n.d(t, {
        Body: () => AT,
        BreadcrumbItem: () => U_,
        Breadcrumbs: () => F_,
        Button: () => qn,
        Caption: () => D,
        Checkbox: () => wP,
        CloseButton: () => VT,
        Description: () => HT,
        Divider: () => oT,
        Dropdown: () => Mw,
        ErrorText: () => UT,
        Footer: () => FT,
        Header: () => DT,
        Heading: () => b,
        Icon: () => IT,
        IconButton: () => ih,
        Lightbox: () => uy,
        Link: () => BT,
        Metadata: () => F,
        Option: () => Dw,
        Paragraph: () => x,
        RadioButton: () => ZP,
        RadioContext: () => VP,
        RadioGroup: () => zP,
        Root: () => MT,
        RootContext: () => LT,
        Subtitle: () => W,
        Switch: () => wT,
        Text: () => te,
        TextArea: () => Et,
        TextSemantics: () => ee,
        Title: () => jT,
        Tooltip: () => av,
        iconStatusMap: () => kT,
        useAlertContext: () => RT
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => G_,
        CheckMD: () => z_,
        CheckXL: () => K_,
        DashLG: () => W_,
        DashMD: () => q_,
        DashXL: () => $_
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => KP,
        DotMD: () => GP,
        DotXL: () => qP
      });
      var i = n(91029),
        a = n(57120),
        s = n(62229),
        l = n.t(s, 2),
        c = n.n(s),
        u = n(83919);

      function d(e) {
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

      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = d(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function p(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var m, v, g = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        y = (m = {
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
        }, v = e => {
          var t = m.defaultClassName,
            n = h(h({}, m.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : m.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = m.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of m.compoundVariants) g(l, n, m.defaultVariants) && (t += " " + c);
          return t
        }, v.variants = () => Object.keys(m.variantClassNames), v.classNames = {
          get base() {
            return m.defaultClassName.split(" ")[0]
          },
          get variants() {
            return p(m.variantClassNames, (e => p(e, (e => e.split(" ")[0]))))
          }
        }, v);
      const b = (0, s.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const s = e ? u.DX : `h${t}`,
          l = (0, a.v6)(r, {
            className: y({
              level: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...l
        })
      }));

      function w(e) {
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

      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? E(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = w(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function P(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var T = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        S = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = _(_({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) T(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return P(e.variantClassNames, (e => P(e, (e => e.split(" ")[0]))))
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
      const x = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? u.DX : "p",
          l = (0, a.v6)(r, {
            className: S({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function C(e) {
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

      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = C(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function L(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var R = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        M = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = N(N({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) R(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return L(e.variantClassNames, (e => L(e, (e => e.split(" ")[0]))))
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
      const D = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? u.DX : "span",
          l = (0, a.v6)(r, {
            className: M({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function A(e) {
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

      function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? k(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = A(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function j(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var H = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        B = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = I(I({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) H(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return j(e.variantClassNames, (e => j(e, (e => e.split(" ")[0]))))
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
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? u.DX : "span",
          l = (0, a.v6)(r, {
            className: B({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function U(e) {
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

      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = U(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function G(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var K = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        q = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = z(z({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) K(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return G(e.variantClassNames, (e => G(e, (e => e.split(" ")[0]))))
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
      const W = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? u.DX : "p",
          l = (0, a.v6)(r, {
            className: q({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function $(e) {
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

      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? X(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = $(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Z(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Q = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        J = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Y(Y({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Q(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Z(e.variantClassNames, (e => Z(e, (e => e.split(" ")[0]))))
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
      const ee = {
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
        te = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...r
        }, o) => {
          const s = e ? u.DX : ee[n] || "span",
            l = (0, a.v6)(r, {
              className: J({
                semantic: n
              })
            });
          return (0, i.jsx)(s, {
            ref: o,
            "data-testid": t,
            ...l
          })
        }));
      var ne = n(81409),
        re = n.t(ne, 2);
      const oe = new Set(["id"]),
        ie = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ae = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        se = /^(data-.*)$/;
      const le = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function ce(e) {
        const t = (0, s.useRef)(null);
        return le((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      const ue = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        de = e => e && "window" in e && e.window === e ? e : ue(e).defaultView || window;

      function fe(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const he = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        pe = s.createContext(he),
        me = s.createContext(!1);
      let ve = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        ge = new WeakMap;
      const ye = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(Ee, be, we) : (0, s.useContext)(me));
        return e || `${n?"react-aria":`react-aria${he.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(pe);
        t !== he || ve || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(pe),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = ge.get(e);
                null == n ? ge.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, ge.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function be() {
        return !1
      }

      function we() {
        return !0
      }

      function Ee(e) {
        return () => {}
      }
      let _e = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Pe = new Map;

      function Te(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = ye(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return _e && Pe.set(o, i), le((() => {
          let e = o;
          return () => {
            Pe.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function Se(e, t) {
        if (e === t) return e;
        let n = Pe.get(e);
        if (n) return n(t), t;
        let r = Pe.get(t);
        return r ? (r(e), e) : t
      }

      function xe(e = []) {
        let t = Te(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = ce((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            le((() => {
              r.current && o()
            }));
            let i = ce((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return le(o, [t, o, ...e]), n
      }
      var Ce = n(15302);

      function Oe(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = fe(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Se(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Ce.A)(n, o)
          }
        }
        return t
      }

      function Ne(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = Te(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Le(e) {
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
          t = Te(t);
          let a = Te(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: Ne({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = xe([Boolean(t), Boolean(n), r, o]), l = xe([Boolean(t), Boolean(n), r, o]);
        return a = Oe(a, {
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
      let Re = new Map,
        Me = new Set;

      function De() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Re.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Re.delete(n.target)), 0 === Re.size)) {
            for (let e of Me) e();
            Me.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Re.get(n.target);
          r || (r = new Set, Re.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Ae(e) {
        if (function() {
            if (null == ke) {
              ke = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return ke = !0, !0
                  }
                })
              } catch (e) {}
            }
            return ke
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
      "undefined" != typeof document && ("loading" !== document.readyState ? De() : document.addEventListener("DOMContentLoaded", De));
      let ke = null;

      function Ie() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
        var e, t
      }

      function je(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (t = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((e => t.test(e.brand)))) || t.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var t, n
      }
      let He = null,
        Be = new Set,
        Fe = new Map,
        Ue = !1,
        Ve = !1;

      function ze(e, t) {
        for (let n of Be) n(e, t)
      }

      function Ge(e) {
        Ue = !0,
          function(e) {
            return !(e.metaKey || !Ie() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (He = "keyboard", ze("keyboard", e))
      }

      function Ke(e) {
        He = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ue = !0, ze("pointer", e))
      }

      function qe(e) {
        je(e) && (Ue = !0, He = "virtual")
      }

      function We(e) {
        e.target !== window && e.target !== document && (Ue || Ve || (He = "virtual", ze("virtual", e)), Ue = !1, Ve = !1)
      }

      function $e() {
        Ue = !1, Ve = !0
      }

      function Xe(e) {
        if ("undefined" == typeof window || Fe.get(de(e))) return;
        const t = de(e),
          n = ue(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ue = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Ge, !0), n.addEventListener("keyup", Ge, !0), n.addEventListener("click", qe, !0), t.addEventListener("focus", We, !0), t.addEventListener("blur", $e, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", Ke, !0), n.addEventListener("pointermove", Ke, !0), n.addEventListener("pointerup", Ke, !0)) : (n.addEventListener("mousedown", Ke, !0), n.addEventListener("mousemove", Ke, !0), n.addEventListener("mouseup", Ke, !0)), t.addEventListener("beforeunload", (() => {
          Ye(e)
        }), {
          once: !0
        }), Fe.set(t, {
          focus: r
        })
      }
      const Ye = (e, t) => {
        const n = de(e),
          r = ue(e);
        t && r.removeEventListener("DOMContentLoaded", t), Fe.has(n) && (n.HTMLElement.prototype.focus = Fe.get(n).focus, r.removeEventListener("keydown", Ge, !0), r.removeEventListener("keyup", Ge, !0), r.removeEventListener("click", qe, !0), n.removeEventListener("focus", We, !0), n.removeEventListener("blur", $e, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", Ke, !0), r.removeEventListener("pointermove", Ke, !0), r.removeEventListener("pointerup", Ke, !0)) : (r.removeEventListener("mousedown", Ke, !0), r.removeEventListener("mousemove", Ke, !0), r.removeEventListener("mouseup", Ke, !0)), Fe.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = ue(e);
        let n;
        "loading" !== t.readyState ? Xe(e) : (n = () => {
          Xe(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Ze {
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

      function Qe(e) {
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
            le((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = ce((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new Ze("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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
            const t = ue(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
          }), [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function Je(e) {
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
      let et = s.createContext(null);

      function tt(e) {
        let t = (0, s.useContext)(et) || {};
        ! function(e, t) {
          le((() => {
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

      function nt(e, t) {
        let {
          focusProps: n
        } = Qe(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Je(e.onKeyDown),
              onKeyUp: Je(e.onKeyUp)
            }
          }
        }(e), o = Oe(n, r), i = tt(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = ue(e);
            if ("virtual" === He) {
              let r = t.activeElement;
              n = () => {
                t.activeElement === r && e.isConnected && Ae(e)
              }, requestAnimationFrame((() => {
                0 === Re.size ? n() : Me.add(n)
              }))
            } else Ae(e);
            var n
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: Oe({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }

      function rt(e) {
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
      const ot = {
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
        it = {
          ...ot,
          customError: !0,
          valid: !1
        },
        at = {
          isInvalid: !1,
          validationDetails: ot,
          validationErrors: []
        },
        st = (0, s.createContext)({}),
        lt = "__formValidationState" + Date.now();

      function ct(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function ut(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: it
        } : null
      }

      function dt(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function ft(e, t) {
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
        } = nt(e, t), f = function(e) {
          if (e[lt]) {
            let {
              realtimeValidation: t,
              displayValidation: n,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[lt];
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
                validationDetails: it
              } : null,
              u = (0, s.useMemo)((() => ut(function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return ct(n)
                }
                return []
              }(a, o))), [a, o]);
            (null == i ? void 0 : i.validationDetails.valid) && (i = null);
            let d = (0, s.useContext)(st),
              f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => ct(d[e]))) : ct(d[r]) : []), [d, r]),
              [h, p] = (0, s.useState)(d),
              [m, v] = (0, s.useState)(!1);
            d !== h && (p(d), v(!1));
            let g = (0, s.useMemo)((() => ut(m ? [] : f)), [m, f]),
              y = (0, s.useRef)(at),
              [b, w] = (0, s.useState)(at),
              E = (0, s.useRef)(at),
              [_, P] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!_) return;
              P(!1);
              let e = u || i || y.current;
              dt(e, E.current) || (E.current = e, w(e))
            })), {
              realtimeValidation: c || g || u || i || at,
              displayValidation: "native" === l ? c || g || b : c || g || u || i || b,
              updateValidation(e) {
                "aria" !== l || dt(b, e) ? y.current = e : w(e)
              },
              resetValidation() {
                let e = at;
                dt(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
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
        } = Le({
          ...e,
          isInvalid: h,
          errorMessage: e.errorMessage || p
        }), w = function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (oe.has(t) || n && ie.has(t) || r && ae.has(t) || (null == o ? void 0 : o.has(t)) || se.test(t)) && (i[t] = e[t]);
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
              o = ce((() => {
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
            le((() => {
              if ("native" === r && (null == n ? void 0 : n.current)) {
                let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: rt(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let i = ce((() => {
                t.resetValidation()
              })),
              a = ce((e => {
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
                }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), He = "keyboard", ze("keyboard", null)), e.preventDefault()
              })),
              l = ce((() => {
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
            if (t.current instanceof de(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: v,
            inputProps: Oe(w, "input" === n && E, {
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
      var ht = n(87882);

      function pt(e) {
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

      function mt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? mt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = pt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function gt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yt = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        bt = "foundry_vq8c3j8",
        wt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = vt(vt({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) yt(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gt(e.variantClassNames, (e => gt(e, (e => e.split(" ")[0]))))
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
      const Et = (0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: l,
        testId: c,
        className: d,
        rows: f = 5,
        hideLabel: h,
        hideDescription: p,
        hideRequiredAsterisk: m,
        validate: v,
        errorMessage: g,
        ...y
      }, b) => {
        const w = (0, s.useRef)(null),
          E = (0, ht.UP)(w, b),
          {
            inputProps: _,
            labelProps: P,
            descriptionProps: T,
            isInvalid: S,
            errorMessageProps: x,
            validationErrors: C
          } = ft({
            ...y,
            label: t,
            description: l,
            isRequired: n,
            inputElementType: "textarea",
            validate: e => v?.(e) ?? (!g || [g])
          }, w),
          O = (0, a.v6)({
            ..._,
            className: d
          }, {
            className: wt({
              isInvalid: S
            }),
            "aria-errormessage": x?.id
          }),
          N = e ? u.DX : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || r) && (0, i.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, i.jsx)(u.s6, {
              enabled: !!h,
              children: (0, i.jsx)(D, {
                ...P,
                className: (0, Ce.$)("foundry_vq8c3j2", _.disabled && bt),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  children: [t, n && !m && (0, i.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, i.jsx)(F, {
              className: "foundry_vq8c3j3",
              children: r
            })]
          }), (0, i.jsx)(N, {
            rows: f,
            ref: E,
            "data-testid": c,
            ...O,
            children: o
          }), l && (0, i.jsx)(u.s6, {
            enabled: C.length > 0 || !!p,
            children: (0, i.jsx)(D, {
              ...T,
              className: (0, Ce.$)("foundry_vq8c3j4", _.disabled && bt),
              children: l
            })
          }), C.length > 0 && (0, i.jsxs)(D, {
            ...x,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, i.jsx)(ne.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), C.join(". ")]
          })]
        })
      }));

      function _t(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let Pt = new Map;

      function Tt(e, t) {
        if (e === t) return e;
        let n = Pt.get(e);
        if (n) return n(t), t;
        let r = Pt.get(t);
        return r ? (r(e), e) : t
      }

      function St(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = _t(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Tt(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Ce.A)(n, o)
          }
        }
        return t
      }
      const xt = new Set(["id"]),
        Ct = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Ot = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Nt = /^(data-.*)$/;
      const Lt = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Rt = e => e && "window" in e && e.window === e ? e : Lt(e).defaultView || window;
      let Mt = new Map,
        Dt = new Set;

      function At() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Mt.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Mt.delete(n.target)), 0 === Mt.size)) {
            for (let e of Dt) e();
            Dt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Mt.get(n.target);
          r || (r = new Set, Mt.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function kt(e) {
        requestAnimationFrame((() => {
          0 === Mt.size ? e() : Dt.add(e)
        }))
      }

      function It(e) {
        if (function() {
            if (null == jt) {
              jt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return jt = !0, !0
                  }
                })
              } catch (e) {}
            }
            return jt
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
      "undefined" != typeof document && ("loading" !== document.readyState ? At() : document.addEventListener("DOMContentLoaded", At));
      let jt = null;

      function Ht(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Bt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ft() {
        return Bt(/^Mac/i)
      }

      function Ut() {
        return Bt(/^iPad/i) || Ft() && navigator.maxTouchPoints > 1
      }

      function Vt() {
        return Bt(/^iPhone/i) || Ut()
      }

      function zt() {
        return Ht(/Android/i)
      }

      function Gt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (zt() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let Kt = null,
        qt = new Set,
        Wt = new Map,
        $t = !1,
        Xt = !1;

      function Yt(e, t) {
        for (let n of qt) n(e, t)
      }

      function Zt(e) {
        $t = !0,
          function(e) {
            return !(e.metaKey || !Ft() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Kt = "keyboard", Yt("keyboard", e))
      }

      function Qt(e) {
        Kt = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || ($t = !0, Yt("pointer", e))
      }

      function Jt(e) {
        Gt(e) && ($t = !0, Kt = "virtual")
      }

      function en(e) {
        e.target !== window && e.target !== document && ($t || Xt || (Kt = "virtual", Yt("virtual", e)), $t = !1, Xt = !1)
      }

      function tn() {
        $t = !1, Xt = !0
      }

      function nn(e) {
        if ("undefined" == typeof window || Wt.get(Rt(e))) return;
        const t = Rt(e),
          n = Lt(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          $t = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Zt, !0), n.addEventListener("keyup", Zt, !0), n.addEventListener("click", Jt, !0), t.addEventListener("focus", en, !0), t.addEventListener("blur", tn, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", Qt, !0), n.addEventListener("pointermove", Qt, !0), n.addEventListener("pointerup", Qt, !0)) : (n.addEventListener("mousedown", Qt, !0), n.addEventListener("mousemove", Qt, !0), n.addEventListener("mouseup", Qt, !0)), t.addEventListener("beforeunload", (() => {
          rn(e)
        }), {
          once: !0
        }), Wt.set(t, {
          focus: r
        })
      }
      const rn = (e, t) => {
        const n = Rt(e),
          r = Lt(e);
        t && r.removeEventListener("DOMContentLoaded", t), Wt.has(n) && (n.HTMLElement.prototype.focus = Wt.get(n).focus, r.removeEventListener("keydown", Zt, !0), r.removeEventListener("keyup", Zt, !0), r.removeEventListener("click", Jt, !0), n.removeEventListener("focus", en, !0), n.removeEventListener("blur", tn, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", Qt, !0), r.removeEventListener("pointermove", Qt, !0), r.removeEventListener("pointerup", Qt, !0)) : (r.removeEventListener("mousedown", Qt, !0), r.removeEventListener("mousemove", Qt, !0), r.removeEventListener("mouseup", Qt, !0)), Wt.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = Lt(e);
        let n;
        "loading" !== t.readyState ? nn(e) : (n = () => {
          nn(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const on = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function an(e, t) {
        on((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function sn(e) {
        const t = (0, s.useRef)(null);
        return on((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      class ln {
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

      function cn(e) {
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
            on((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = sn((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new ln("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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
            const t = Lt(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
          }), [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function un(e) {
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
      let dn = s.createContext(null);

      function fn(e, t) {
        let {
          focusProps: n
        } = cn(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: un(e.onKeyDown),
              onKeyUp: un(e.onKeyUp)
            }
          }
        }(e), o = St(n, r), i = function(e) {
          let t = (0, s.useContext)(dn) || {};
          an(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = Lt(e);
            if ("virtual" === Kt) {
              let n = t.activeElement;
              kt((() => {
                t.activeElement === n && e.isConnected && It(e)
              }))
            } else It(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: St({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let hn = "default",
        pn = "",
        mn = new WeakMap;

      function vn(e) {
        if (Vt()) {
          if ("default" === hn) {
            const t = Lt(e);
            pn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          hn = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (mn.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function gn(e) {
        if (Vt()) {
          if ("disabled" !== hn) return;
          hn = "restoring", setTimeout((() => {
            kt((() => {
              if ("restoring" === hn) {
                const t = Lt(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = pn || ""), pn = "", hn = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && mn.has(e)) {
          let t = mn.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), mn.delete(e)
        }
      }
      const yn = s.createContext({
        register: () => {}
      });

      function bn(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function wn(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, bn(e, t, "get"))
      }

      function En(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function _n(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, bn(e, t, "set"), n), n
      }

      function Pn(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Ht(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ft() ? i = !0 : a = !0);
        let c = Ht(/AppleWebKit/i) && !Ht(/Chrome/i) && Ft() && !Ut() ? new KeyboardEvent("keydown", {
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
        Pn.isOpening = n, It(e), e.dispatchEvent(c), Pn.isOpening = !1
      }
      yn.displayName = "PressResponderContext", Pn.isOpening = !1;
      var Tn = new WeakMap;
      class Sn {
        continuePropagation() {
          _n(this, Tn, !1)
        }
        get shouldStopPropagation() {
          return wn(this, Tn)
        }
        constructor(e, t, n) {
          En(this, Tn, {
            writable: !0,
            value: void 0
          }), _n(this, Tn, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
      }
      const xn = Symbol("linkClicked");

      function Cn(e) {
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
          let t = (0, s.useContext)(yn);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = St(r, e), n()
          }
          return an(t, e.ref), e
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
        }(), b = sn(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Sn("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = sn(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Sn("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Sn("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = sn(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Sn("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = sn((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(Rn(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || gn(t.target))
        })), P = sn((e => {
          u && _(e)
        })), T = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Nn(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  An(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Nn(t, r) && !t.repeat && r.contains(t.target) && e.target && E(Rn(e.target, t), "keyboard")
                      };
                    g(Lt(t.currentTarget), "keyup", _t(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ft() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !Pn.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || Gt(t.nativeEvent))) {
                    a || c || It(t.currentTarget);
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
              if (e.isPressed && e.target && Nn(t, e.target)) {
                var r;
                An(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(Rn(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && On(e.target) && e.target.contains(n) && !t[xn] && (t[xn] = !0, Pn(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
              if (i = t.nativeEvent, !zt() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              Dn(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || c || It(t.currentTarget), d || vn(e.target), s = b(t, e.pointerType), g(Lt(t.currentTarget), "pointermove", n, !1), g(Lt(t.currentTarget), "pointerup", r, !1), g(Lt(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (Dn(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && Mn(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && Mn(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(Rn(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Rn(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (Mn(t, e.target) && null != e.pointerType ? w(Rn(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(Rn(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || gn(e.target))
              },
              o = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (Dn(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = Gt(t.nativeEvent) ? "virtual" : "mouse", a || c || It(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(Lt(t.currentTarget), "mouseup", n, !1)))
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
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && Mn(t, e.target) && null != e.pointerType ? w(Rn(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(Rn(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || c || It(t.currentTarget), d || vn(e.target), b(t, e.pointerType) && t.stopPropagation(), g(Rt(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Ln(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Mn(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), P(t)), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Ln(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Mn(n, t.currentTarget) && null != e.pointerType ? (E(t, e.pointerType), r = w(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && gn(e.target), y()
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
          d || gn(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: St(h, T)
        }
      }

      function On(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Nn(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Rt(o).HTMLInputElement && !In(o, n) || o instanceof Rt(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && On(o)) && "Enter" !== n)
      }

      function Ln(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function Rn(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function Mn(e, t) {
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

      function Dn(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function An(e, t) {
        return e instanceof HTMLInputElement ? !In(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !On(e)
      }
      const kn = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function In(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : kn.has(e.type)
      }

      function jn(e, t) {
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
        } = Cn({
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
        } = fn(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = St(b, g, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (xt.has(t) || n && Ct.has(t) || r && Ot.has(t) || (null == o ? void 0 : o.has(t)) || Nt.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: St(n, w, {
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

      function Hn(e) {
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

      function Bn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Fn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bn(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Hn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Un(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Vn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        zn = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Fn(Fn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Vn(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Un(e.variantClassNames, (e => Un(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Gn = zn({
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
        Kn = zn({
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
      const qn = (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: r,
        onClick: o,
        iconLeft: l,
        iconLeftLabel: c,
        iconRight: d,
        iconRightLabel: f,
        appearance: h,
        size: p = "MD",
        allCaps: m = !1,
        fullWidth: v = !1,
        ...g
      }, y) => {
        const b = (0, s.useRef)(null),
          w = (0, ht.UP)(b, y),
          {
            events: E,
            others: _
          } = (0, a.bZ)(g, {
            onPress: !1
          }),
          {
            buttonProps: P,
            isPressed: T
          } = jn({
            ..._,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => _.onPress?.(e) ?? o?.(e)
          }, b),
          S = (0, a.v6)({
            ...P,
            className: n
          }, {
            ...E,
            role: "button",
            "data-pressed": T,
            "data-testid": e,
            className: Gn({
              appearance: h,
              size: p,
              fullWidth: v,
              allCaps: m
            })
          }),
          x = l && re[l],
          C = d && re[d],
          O = t ? u.DX : "button",
          N = v && (C || C && x);
        return (0, i.jsxs)(O, {
          ref: w,
          ...S,
          children: [N && (0, i.jsx)("div", {
            className: "foundry_17pcofyo"
          }), x && (0, i.jsx)(x, {
            label: c || "",
            size: p,
            className: "foundry_17pcofyk"
          }), (0, i.jsx)(u.xV, {
            children: r
          }), C && (0, i.jsx)(C, {
            label: f || "",
            size: p,
            className: Kn({
              fullWidth: v
            })
          })]
        })
      }));
      var Wn = n(20147);
      const $n = {
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

      function Xn(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function Yn(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Xn(t - e, n - t, r) + t : e > n ? +Xn(e - n, n - t, r) + n : e
      }

      function Zn(e, t, n) {
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

      function Qn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Jn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Qn(Object(n), !0).forEach((function(t) {
            Zn(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const er = {
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

      function tr(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const nr = ["enter", "leave"];
      const rr = ["gotpointercapture", "lostpointercapture"];

      function or(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = rr.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function ir(e) {
        return "touches" in e
      }

      function ar(e) {
        return ir(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function sr(e) {
        return ir(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function lr(e, t) {
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

      function cr(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return lr(n, r)
      }

      function ur(e) {
        const t = sr(e);
        return ir(e) ? t.identifier : t.pointerId
      }

      function dr(e) {
        const t = sr(e);
        return [t.clientX, t.clientY]
      }

      function fr(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function hr(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function pr() {}

      function mr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? pr : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function vr(e, t) {
        return Object.assign({}, t, e || {})
      }
      class gr {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? hr(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            $n.addTo(t._distance, e)
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
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = hr(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
              return [Yn(r, s, l, i), Yn(o, c, u, a)]
            }(t._bounds, t.offset, w), t.delta = $n.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = $n.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            $n.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(Jn(Jn(Jn({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class yr extends gr {
        constructor() {
          super(...arguments), Zn(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = $n.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = $n.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[ar(e)] : n.axisThreshold;
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
      const br = e => e,
        wr = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => Jn(Jn({}, n.shared.eventOptions), e),
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
                return $n.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? $n.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || br
          },
          threshold: e => $n.toVector(e, 0)
        },
        Er = Jn(Jn({}, wr), {}, {
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
            if ("function" == typeof e) return t => Er.bounds(e(t));
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
        _r = {
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
        Pr = "undefined" != typeof window && window.document && window.document.createElement;

      function Tr() {
        return Pr && "ontouchstart" in window
      }
      const Sr = {
          isBrowser: Pr,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: Tr(),
          touchscreen: Tr() || Pr && window.navigator.maxTouchPoints > 1,
          pointer: Pr && "onpointerdown" in window,
          pointerLock: Pr && "exitPointerLock" in window.document
        },
        xr = .5,
        Cr = 50,
        Or = 250,
        Nr = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        Lr = Jn(Jn({}, Er), {}, {
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && Sr.pointerLock, Sr.touch && r ? "touch" : this.pointerLock ? "mouse" : Sr.pointer && !i ? "pointer" : Sr.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, Sr.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = $n.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = xr,
              distance: t = Cr,
              duration: n = Or
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform($n.toVector(e)),
              distance: this.transform($n.toVector(t)),
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
          axisThreshold: e => e ? Jn(Jn({}, Nr), e) : Nr,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function Rr(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const Mr = Jn(Jn({}, wr), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !Sr.touch && Sr.gesture) return "gesture";
            if (Sr.touch && o) return "touch";
            if (Sr.touchscreen) {
              if (Sr.pointer) return "pointer";
              if (Sr.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = vr(hr(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = vr(hr(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, $n.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Dr = Jn(Jn({}, Er), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Ar = Er,
        kr = Er,
        Ir = Jn(Jn({}, Er), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        jr = new Map,
        Hr = new Map;

      function Br(e) {
        jr.set(e.key, e.engine), Hr.set(e.key, e.resolver)
      }
      const Fr = {
          key: "drag",
          engine: class extends yr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "dragging")
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
                e._bounds = Er.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = ur(e), n._pointerActive = !0, this.computeValues(dr(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== ar(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = ur(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = dr(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = $n.sub(o, t._values), this.computeValues(o)), $n.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = ur(e);
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
              const t = _r[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, $n.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in _r && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: Lr
        },
        Ur = {
          key: "hover",
          engine: class extends yr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(dr(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = dr(e);
              t._movement = t._delta = $n.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: Ir
        },
        Vr = {
          key: "move",
          engine: class extends yr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(dr(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = dr(e),
                n = this.state;
              n._delta = $n.sub(t, n._values), $n.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: Dr
        },
        zr = {
          key: "pinch",
          engine: class extends gr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "pinching"), Zn(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? $n.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const r = cr(e, t._touchIds);
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
              const o = lr(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = cr(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = lr(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = $n.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-fr(e)[1] / 100 * t.offset[0], 0], $n.addTo(t._movement, t._delta), Rr(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: Mr
        },
        Gr = {
          key: "scroll",
          engine: class extends yr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "scrolling")
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
              t._delta = $n.sub(n, t._values), $n.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: Ar
        },
        Kr = {
          key: "wheel",
          engine: class extends yr {
            constructor() {
              super(...arguments), Zn(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = fr(e), $n.addTo(t._movement, t._delta), Rr(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: kr
        };
      const qr = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sr.isBrowser ? window : void 0
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
        Wr = ["target", "eventOptions", "window", "enabled", "transform"];

      function $r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = $r(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Xr {
        constructor(e, t) {
          Zn(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const n = er[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = Jn(Jn({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class Yr {
        constructor() {
          Zn(this, "_timeouts", new Map)
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
      class Zr {
        constructor(e) {
          var t, n;
          Zn(this, "gestures", new Set), Zn(this, "_targetEventStore", new Xr(this)), Zn(this, "gestureEventStores", {}), Zn(this, "gestureTimeoutStores", {}), Zn(this, "handlers", {}), Zn(this, "config", {}), Zn(this, "pointerIds", new Set), Zn(this, "touchIds", new Set), Zn(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && Qr(t, "drag"), n.wheel && Qr(t, "wheel"), n.scroll && Qr(t, "scroll"), n.move && Qr(t, "move"), n.pinch && Qr(t, "pinch"), n.hover && Qr(t, "hover")
        }
        setEventIds(e) {
          return ir(e) ? (this.touchIds = new Set(function(e) {
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
              }(r, Wr);
            if (n.shared = $r({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, qr), t) {
              const e = Hr.get(t);
              n[t] = $r(Jn({
                shared: n.shared
              }, c), e)
            } else
              for (const e in c) {
                const t = Hr.get(e);
                t && (n[e] = $r(Jn({
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
                  r = Jr(o, n.eventOptions, !!i);
                n.enabled && new(jr.get(e))(this, t, e).bind(r)
              }
              const e = Jr(o, r.eventOptions, !!i);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n](Jn(Jn({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = mr(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = or(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: n,
                passive: r
              })
            }
          }
        }
      }

      function Qr(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Xr(e, t), e.gestureTimeoutStores[t] = new Yr
      }
      const Jr = (e, t, n) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, c;
          const u = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (c = a.passive) && void 0 !== c ? c : t.passive;
          let f = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = er[e],
              o = r && r[t] || t;
            return "on" + tr(e) + tr(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !nr.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, u);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        eo = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function to(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!jr.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function no(e, t) {
        const n = ([Fr, zr, Gr, Kr, Vr, Ur].forEach(Br), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) eo.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return to(o, n, "onDrag", "drag", i, t), to(o, n, "onWheel", "wheel", i, t), to(o, n, "onScroll", "scroll", i, t), to(o, n, "onPinch", "pinch", i, t), to(o, n, "onMove", "move", i, t), to(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = c().useMemo((() => new Zr(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), c().useEffect(o.effect.bind(o)), c().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var ro = wo(),
        oo = e => vo(e, ro),
        io = wo();
      oo.write = e => vo(e, io);
      var ao = wo();
      oo.onStart = e => vo(e, ao);
      var so = wo();
      oo.onFrame = e => vo(e, so);
      var lo = wo();
      oo.onFinish = e => vo(e, lo);
      var co = [];
      oo.setTimeout = (e, t) => {
        const n = oo.now() + t,
          r = () => {
            const e = co.findIndex((e => e.cancel == r));
            ~e && co.splice(e, 1), po -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return co.splice(uo(n), 0, o), po += 1, go(), o
      };
      var uo = e => ~(~co.findIndex((t => t.time > e)) || ~co.length);
      oo.cancel = e => {
        ao.delete(e), so.delete(e), lo.delete(e), ro.delete(e), io.delete(e)
      }, oo.sync = e => {
        mo = !0, oo.batchedUpdates(e), mo = !1
      }, oo.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, oo.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          ao.delete(n), t = null
        }, r
      };
      var fo = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      oo.use = e => fo = e, oo.now = "undefined" != typeof performance ? () => performance.now() : Date.now, oo.batchedUpdates = e => e(), oo.catch = console.error, oo.frameLoop = "always", oo.advance = () => {
        "demand" !== oo.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : bo()
      };
      var ho = -1,
        po = 0,
        mo = !1;

      function vo(e, t) {
        mo ? (t.delete(e), e(0)) : (t.add(e), go())
      }

      function go() {
        ho < 0 && (ho = 0, "demand" !== oo.frameLoop && fo(yo))
      }

      function yo() {
        ~ho && (fo(yo), oo.batchedUpdates(bo))
      }

      function bo() {
        const e = ho;
        ho = oo.now();
        const t = uo(ho);
        t && (Eo(co.splice(0, t), (e => e.handler())), po -= t), po ? (ao.flush(), ro.flush(e ? Math.min(64, ho - e) : 16.667), so.flush(), io.flush(), lo.flush()) : ho = -1
      }

      function wo() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            po += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (po -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, po -= t.size, Eo(t, (t => t(n) && e.add(t))), po += e.size, t = e)
          }
        }
      }

      function Eo(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            oo.catch(e)
          }
        }))
      }
      var _o = Object.defineProperty,
        Po = {};

      function To() {}((e, t) => {
        for (var n in t) _o(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Po, {
        assign: () => Ho,
        colors: () => ko,
        createStringInterpolator: () => Ro,
        skipAnimation: () => Io,
        to: () => Mo,
        willAdvance: () => jo
      });
      var So = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function xo(e, t) {
        if (So.arr(e)) {
          if (!So.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Co = (e, t) => e.forEach(t);

      function Oo(e, t, n) {
        if (So.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var No = e => So.und(e) ? [] : So.arr(e) ? e : [e];

      function Lo(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Co(n, t)
        }
      }
      var Ro, Mo, Do = (e, ...t) => Lo(e, (e => e(...t))),
        Ao = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        ko = null,
        Io = !1,
        jo = To,
        Ho = e => {
          e.to && (Mo = e.to), e.now && (oo.now = e.now), void 0 !== e.colors && (ko = e.colors), null != e.skipAnimation && (Io = e.skipAnimation), e.createStringInterpolator && (Ro = e.createStringInterpolator), e.requestAnimationFrame && oo.use(e.requestAnimationFrame), e.batchedUpdates && (oo.batchedUpdates = e.batchedUpdates), e.willAdvance && (jo = e.willAdvance), e.frameLoop && (oo.frameLoop = e.frameLoop)
        },
        Bo = new Set,
        Fo = [],
        Uo = [],
        Vo = 0,
        zo = {
          get idle() {
            return !Bo.size && !Fo.length
          },
          start(e) {
            Vo > e.priority ? (Bo.add(e), oo.onStart(Go)) : (Ko(e), oo(Wo))
          },
          advance: Wo,
          sort(e) {
            if (Vo) oo.onFrame((() => zo.sort(e)));
            else {
              const t = Fo.indexOf(e);
              ~t && (Fo.splice(t, 1), qo(e))
            }
          },
          clear() {
            Fo = [], Bo.clear()
          }
        };

      function Go() {
        Bo.forEach(Ko), Bo.clear(), oo(Wo)
      }

      function Ko(e) {
        Fo.includes(e) || qo(e)
      }

      function qo(e) {
        Fo.splice(function(t, n) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(Fo), 0, e)
      }

      function Wo(e) {
        const t = Uo;
        for (let n = 0; n < Fo.length; n++) {
          const r = Fo[n];
          Vo = r.priority, r.idle || (jo(r), r.advance(e), r.idle || t.push(r))
        }
        return Vo = 0, (Uo = Fo).length = 0, (Fo = t).length > 0
      }
      var $o = {
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
        Xo = "[-+]?\\d*\\.?\\d+",
        Yo = Xo + "%";

      function Zo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Qo = new RegExp("rgb" + Zo(Xo, Xo, Xo)),
        Jo = new RegExp("rgba" + Zo(Xo, Xo, Xo, Xo)),
        ei = new RegExp("hsl" + Zo(Xo, Yo, Yo)),
        ti = new RegExp("hsla" + Zo(Xo, Yo, Yo, Xo)),
        ni = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ri = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        oi = /^#([0-9a-fA-F]{6})$/,
        ii = /^#([0-9a-fA-F]{8})$/;

      function ai(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function si(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ai(o, r, e + 1 / 3),
          a = ai(o, r, e),
          s = ai(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function li(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ci(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ui(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function di(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function fi(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = oi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : ko && void 0 !== ko[e] ? ko[e] : (t = Qo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | 255) >>> 0 : (t = Jo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | ui(t[4])) >>> 0 : (t = ni.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ii.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ri.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ei.exec(e)) ? (255 | si(ci(t[1]), di(t[2]), di(t[3]))) >>> 0 : (t = ti.exec(e)) ? (si(ci(t[1]), di(t[2]), di(t[3])) | ui(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var hi = (e, t, n) => {
          if (So.fun(e)) return e;
          if (So.arr(e)) return hi({
            range: e,
            output: t,
            extrapolate: n
          });
          if (So.str(e.output[0])) return Ro(e);
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
        pi = 1.70158,
        mi = 1.525 * pi,
        vi = pi + 1,
        gi = 2 * Math.PI / 3,
        yi = 2 * Math.PI / 4.5,
        bi = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        wi = {
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
          easeInBack: e => vi * e * e * e - pi * e * e,
          easeOutBack: e => 1 + vi * Math.pow(e - 1, 3) + pi * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - mi) / 2 : (Math.pow(2 * e - 2, 2) * ((mi + 1) * (2 * e - 2) + mi) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * gi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * gi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * yi) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * yi) / 2 + 1,
          easeInBounce: e => 1 - bi(1 - e),
          easeOutBounce: bi,
          easeInOutBounce: e => e < .5 ? (1 - bi(1 - 2 * e)) / 2 : (1 + bi(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        Ei = Symbol.for("FluidValue.get"),
        _i = Symbol.for("FluidValue.observers"),
        Pi = e => Boolean(e && e[Ei]),
        Ti = e => e && e[Ei] ? e[Ei]() : e,
        Si = e => e[_i] || null;

      function xi(e, t) {
        const n = e[_i];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ci = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Oi(this, e)
          }
        },
        Oi = (e, t) => Mi(e, Ei, t);

      function Ni(e, t) {
        if (e[Ei]) {
          let n = e[_i];
          n || Mi(e, _i, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Li(e, t) {
        const n = e[_i];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[_i] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Ri, Mi = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Di = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ai = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ki = new RegExp(`(${Di.source})(%|[a-z]+)`, "i"),
        Ii = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ji = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Hi = e => {
          const [t, n] = Bi(e);
          if (!t || Ao()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && ji.test(n) ? Hi(n) : n || e
        },
        Bi = e => {
          const t = ji.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Fi = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Ui = e => {
          Ri || (Ri = ko ? new RegExp(`(${Object.keys(ko).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ti(e).replace(ji, Hi).replace(Ai, fi).replace(Ri, fi))),
            n = t.map((e => e.match(Di).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => hi({
              ...e,
              output: t
            })));
          return e => {
            const n = !ki.test(t[0]) && t.find((e => ki.test(e)))?.replace(Di, "");
            let o = 0;
            return t[0].replace(Di, (() => `${r[o++](e)}${n||""}`)).replace(Ii, Fi)
          }
        },
        Vi = "react-spring: ",
        zi = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Vi}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Gi = zi(console.warn),
        Ki = zi(console.warn);

      function qi(e) {
        return So.str(e) && ("#" == e[0] || /\d/.test(e) || !Ao() && ji.test(e) || e in (ko || {}))
      }
      var Wi = Ao() ? s.useEffect : s.useLayoutEffect,
        $i = () => {
          const e = (0, s.useRef)(!1);
          return Wi((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Xi() {
        const e = (0, s.useState)()[1],
          t = $i();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Yi = e => (0, s.useEffect)(e, Zi),
        Zi = [];

      function Qi(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Ji = Symbol.for("Animated:node"),
        ea = e => e && e[Ji],
        ta = (e, t) => {
          return n = e, r = Ji, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        na = e => e && e[Ji] && e[Ji].getPayload(),
        ra = class {
          constructor() {
            ta(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        oa = class extends ra {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, So.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new oa(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return So.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, So.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        ia = class extends oa {
          constructor(e) {
            super(0), this._string = null, this._toString = hi({
              output: [e, e]
            })
          }
          static create(e) {
            return new ia(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (So.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = hi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        aa = {
          dependencies: null
        },
        sa = class extends ra {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Oo(this.source, ((n, r) => {
              var o;
              (o = n) && o[Ji] === o ? t[r] = n.getValue(e) : Pi(n) ? t[r] = Ti(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Co(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Oo(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            aa.dependencies && Pi(e) && aa.dependencies.add(e);
            const t = na(e);
            t && Co(t, (e => this.add(e)))
          }
        },
        la = class extends sa {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new la(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(ca)), !0)
          }
        };

      function ca(e) {
        return (qi(e) ? ia : oa).create(e)
      }

      function ua(e) {
        const t = ea(e);
        return t ? t.constructor : So.arr(e) ? la : qi(e) ? ia : oa
      }
      var da = (e, t) => {
          const n = !So.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = n && (0, s.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (So.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, c] = function(e, t) {
                const n = new Set;
                return aa.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new sa(e), aa.dependencies = null, [e, n]
              }(r, t),
              u = Xi(),
              d = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u()
              },
              f = new fa(d, c),
              h = (0, s.useRef)();
            Wi((() => (h.current = f, Co(c, (e => Ni(e, f))), () => {
              h.current && (Co(h.current.deps, (e => Li(e, h.current))), oo.cancel(h.current.update))
            }))), (0, s.useEffect)(d, []), Yi((() => () => {
              const e = h.current;
              Co(e.deps, (t => Li(t, e)))
            }));
            const p = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        fa = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && oo.write(this.update)
          }
        },
        ha = Symbol.for("AnimatedComponent"),
        pa = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new sa(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = ma(e) || "Anonymous";
              return (e = So.str(e) ? i[e] || (i[e] = da(e, o)) : e[ha] || (e[ha] = da(e, o))).displayName = `Animated(${t})`, e
            };
          return Oo(e, ((t, n) => {
            So.arr(e) && (n = ma(t)), i[n] = i(t)
          })), {
            animated: i
          }
        },
        ma = e => So.str(e) ? e : e && So.str(e.displayName) ? e.displayName : So.fun(e) && e.name || null;

      function va(e, ...t) {
        return So.fun(e) ? e(...t) : e
      }
      var ga = (e, t) => !0 === e || !!(t && e && (So.fun(e) ? e(t) : No(e).includes(t))),
        ya = (e, t) => So.obj(e) ? t && e[t] : e,
        ba = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        wa = e => e,
        Ea = (e, t = wa) => {
          let n = _a;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            So.und(n) || (r[o] = n)
          }
          return r
        },
        _a = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Pa = {
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

      function Ta(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Oo(e, ((e, r) => {
              Pa[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Oo(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Sa(e) {
        return e = Ti(e), So.arr(e) ? e.map(Sa) : qi(e) ? Po.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function xa(e) {
        for (const t in e) return !0;
        return !1
      }

      function Ca(e) {
        return So.fun(e) || So.arr(e) && So.obj(e[0])
      }

      function Oa(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Na(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var La = {
          tension: 170,
          friction: 26
        },
        Ra = {
          ...La,
          mass: 1,
          damping: 1,
          easing: wi.linear,
          clamp: !1
        },
        Ma = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Ra)
          }
        };

      function Da(e, t) {
        if (So.und(t.decay)) {
          const n = !So.und(t.tension) || !So.und(t.friction);
          !n && So.und(t.frequency) && So.und(t.damping) && So.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Aa = [],
        ka = class {
          constructor() {
            this.changed = !1, this.values = Aa, this.toValues = null, this.fromValues = Aa, this.config = new Ma, this.immediate = !1
          }
        };

      function Ia(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = ga(n.cancel ?? r?.cancel, t);
          if (u) h();
          else {
            So.und(n.pause) || (o.paused = ga(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || ga(e, t)), l = va(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - oo.now()
          }

          function f() {
            l > 0 && !Po.skipAnimation ? (o.delayed = !0, c = oo.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
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
      var ja = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Fa(e.get()) : t.every((e => e.noop)) ? Ha(e.get()) : Ba(e.get(), t.every((e => e.finished))),
        Ha = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Ba = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Fa = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ua(e, t, n, r) {
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
          const c = Ea(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && Fa(r) || o !== n.asyncId && Ba(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new za,
                a = new Ga;
              return (async () => {
                if (Po.skipAnimation) throw Va(n), a.result = Ba(r, !1), d(a), a;
                h(i);
                const s = So.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Oo(c, ((e, t) => {
                  So.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return h(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Po.skipAnimation) return Va(n), Ba(r, !1);
          try {
            let t;
            t = So.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(u), f]), m = Ba(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof za) m = e.result;
            else {
              if (!(e instanceof Ga)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return So.fun(a) && oo.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function Va(e, t) {
        Lo(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var za = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ga = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Ka = e => e instanceof Wa,
        qa = 1,
        Wa = class extends Ci {
          constructor() {
            super(...arguments), this.id = qa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = ea(this);
            return e && e.getValue()
          }
          to(...e) {
            return Po.to(this, e)
          }
          interpolate(...e) {
            return Gi(`${Vi}The "interpolate" function is deprecated in v9 (use "to" instead)`), Po.to(this, e)
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
            xi(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || zo.sort(this), xi(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        $a = Symbol.for("SpringPhase"),
        Xa = e => (1 & e[$a]) > 0,
        Ya = e => (2 & e[$a]) > 0,
        Za = e => (4 & e[$a]) > 0,
        Qa = (e, t) => t ? e[$a] |= 3 : e[$a] &= -3,
        Ja = (e, t) => t ? e[$a] |= 4 : e[$a] &= -5,
        es = class extends Wa {
          constructor(e, t) {
            if (super(), this.animation = new ka, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !So.und(e) || !So.und(t)) {
              const n = So.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              So.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Ya(this) || this._state.asyncTo) || Za(this)
          }
          get goal() {
            return Ti(this.animation.to)
          }
          get velocity() {
            const e = ea(this);
            return e instanceof oa ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Xa(this)
          }
          get isAnimating() {
            return Ya(this)
          }
          get isPaused() {
            return Za(this)
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
            } = r, a = na(r.to);
            !a && Pi(r.to) && (o = No(Ti(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == ia ? 1 : a ? a[l].lastPosition : o[l];
              let u = r.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = So.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (So.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), u = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !So.und(r),
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
            const s = ea(this),
              l = s.getValue();
            if (t) {
              const e = Ti(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return oo.batchedUpdates((() => {
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
            if (Ya(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              oo.batchedUpdates((() => {
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
            return So.und(e) ? (n = this.queue || [], this.queue = []) : n = [So.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => ja(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Va(this._state, e && this._lastCallId), oo.batchedUpdates((() => this._stop(t, e))), this
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
            n = So.obj(n) ? n[t] : n, (null == n || Ca(n)) && (n = void 0), r = So.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return Xa(this) || (e.reverse && ([n, r] = [r, n]), r = Ti(r), So.und(r) ? ea(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Ea(e, ((e, t) => /^on/.test(t) ? ya(e, n) : e))), ss(this, e, "onProps"), ls(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Ia(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  Za(this) || (Ja(this, !0), Do(i.pauseQueue), ls(this, "onPause", Ba(this, ts(this, this.animation.to)), this))
                },
                resume: () => {
                  Za(this) && (Ja(this, !1), Ya(this) && this._resume(), Do(i.resumeQueue), ls(this, "onResume", Ba(this, ts(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = ns(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Fa(this));
            const r = !So.und(e.to),
              o = !So.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Fa(this));
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
            !o || r || t.default && !So.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !xo(d, c);
            f && (s.from = d), d = Ti(d);
            const h = !xo(u, l);
            h && this._focus(u);
            const p = Ca(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: g
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Da(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Da(e, t), Object.assign(e, t);
              for (const t in Ra) null == e[t] && (e[t] = Ra[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              So.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, va(t.config, i), t.config !== a.config ? va(a.config, i) : void 0);
            let y = ea(this);
            if (!y || So.und(u)) return n(Ba(this, !0));
            const b = So.und(t.reset) ? o && !t.default : !So.und(d) && ga(t.reset, i),
              w = b ? d : this.get(),
              E = Sa(u),
              _ = So.num(E) || So.arr(E) || qi(E),
              P = !p && (!_ || ga(a.immediate || t.immediate, i));
            if (h) {
              const e = ua(u);
              if (e !== y.constructor) {
                if (!P) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(E)
              }
            }
            const T = y.constructor;
            let S = Pi(u),
              x = !1;
            if (!S) {
              const e = b || !Xa(this) && f;
              (h || e) && (x = xo(Sa(w), E), S = !x), (xo(s.immediate, P) || P) && xo(m.decay, v) && xo(m.velocity, g) || (S = !0)
            }
            if (x && Ya(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || Pi(l)) && (s.values = y.getPayload(), s.toValues = Pi(u) ? null : T == ia ? [1] : No(E)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Co(as, (e => ss(this, t, e)));
              const r = Ba(this, ts(this, l));
              Do(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && oo.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? va(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(w), p ? n(Ua(t.to, t, this._state, this)) : S ? this._start() : Ya(this) && !h ? this._pendingCalls.add(n) : n(Ha(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Si(this) && this._detach(), t.to = e, Si(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Pi(t) && (Ni(t, this), Ka(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Pi(e) && Li(e, this)
          }
          _set(e, t = !0) {
            const n = Ti(e);
            if (!So.und(n)) {
              const e = ea(this);
              if (!e || !xo(n, e.getValue())) {
                const r = ua(n);
                e && e.constructor == r ? e.setValue(n) : ta(this, r.create(n)), e && oo.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return ea(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ls(this, "onStart", Ba(this, ts(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), va(this.animation.onChange, e, this)), va(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            ea(this).reset(Ti(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Ya(this) || (Qa(this, !0), Za(this) || this._resume())
          }
          _resume() {
            Po.skipAnimation ? this.finish() : zo.start(this)
          }
          _stop(e, t) {
            if (Ya(this)) {
              Qa(this, !1);
              const n = this.animation;
              Co(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), xi(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Fa(this.get()) : Ba(this.get(), ts(this, e ?? n.to));
              Do(this._pendingCalls, r), n.changed && (n.changed = !1, ls(this, "onRest", r, this))
            }
          }
        };

      function ts(e, t) {
        const n = Sa(t);
        return xo(Sa(e.get()), n)
      }

      function ns(e, t = e.loop, n = e.to) {
        const r = va(t);
        if (r) {
          const o = !0 !== r && Ta(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return rs({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ca(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function rs(e) {
        const {
          to: t,
          from: n
        } = e = Ta(e), r = new Set;
        return So.obj(t) && is(t, r), So.obj(n) && is(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function os(e) {
        const t = rs(e);
        return So.und(t.default) && (t.default = Ea(t)), t
      }

      function is(e, t) {
        Oo(e, ((e, n) => null != e && t.add(n)))
      }
      var as = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ss(e, t, n) {
        e.animation[n] = t[n] !== ba(t, n) ? ya(t[n], e.key) : void 0
      }

      function ls(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var cs = ["onStart", "onChange", "onRest"],
        us = 1,
        ds = class {
          constructor(e, t) {
            this.id = us++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              So.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(rs(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = No(e).map(rs) : this.queue = [], this._flush ? this._flush(this, t) : (ys(this, t), fs(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Co(No(t), (t => n[t].stop(!!e)))
            } else Va(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (So.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Co(No(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (So.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Co(No(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Oo(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Lo(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Lo(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Lo(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            oo.onFrame(this._onFrame)
          }
        };

      function fs(e, t) {
        return Promise.all(t.map((t => hs(e, t)))).then((t => ja(e, t)))
      }
      async function hs(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = So.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = So.arr(o) || So.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Co(cs, (n => {
          const r = t[n];
          if (So.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Do(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === ba(t, "cancel");
        (u || h && d.asyncId) && f.push(Ia(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: To,
            resume: To,
            start(t, n) {
              h ? (Va(d, e._lastAsyncId), n(Fa(e))) : (t.onRest = s, n(Ua(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = ja(e, await Promise.all(f));
        if (a && p.finished && (!n || !p.noop)) {
          const n = ns(t, a, o);
          if (n) return ys(e, [n]), hs(e, n, !0)
        }
        return l && oo.batchedUpdates((() => l(p, e, e.item))), p
      }

      function ps(e, t) {
        const n = {
          ...e.springs
        };
        return t && Co(No(t), (e => {
          So.und(e.keys) && (e = rs(e)), So.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), gs(n, e, (e => vs(e)))
        })), ms(e, n), n
      }

      function ms(e, t) {
        Oo(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ni(t, e))
        }))
      }

      function vs(e, t) {
        const n = new es;
        return n.key = e, t && Ni(n, t), n
      }

      function gs(e, t, n) {
        t.keys && Co(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function ys(e, t) {
        Co(t, (t => {
          gs(e.springs, t, (t => vs(t, e)))
        }))
      }
      var bs, ws, Es = ({
          children: e,
          ...t
        }) => {
          const n = (0, s.useContext)(_s),
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
          } = _s;
          return s.createElement(i, {
            value: t
          }, e)
        },
        _s = (bs = Es, ws = {}, Object.assign(bs, s.createContext(ws)), bs.Provider._context = bs, bs.Consumer._context = bs, bs);
      Es.Provider = _s.Provider, Es.Consumer = _s.Consumer;
      var Ps = () => {
        const e = [],
          t = function(t) {
            Ki(`${Vi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Co(e, ((e, o) => {
              if (So.und(t)) r.push(e.start());
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
          return Co(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Co(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Co(e, ((e, n) => {
            const r = So.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Co(e, ((e, r) => {
            if (So.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Co(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Co(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return So.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Ts(e, t) {
        const n = So.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = So.fun(t) && t;
            r && !n && (n = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? Ps() : void 0), []),
              i = (0, s.useRef)(0),
              a = Xi(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = ps(e, t);
                  return i.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? fs(e, t) : new Promise((r => {
                    ms(e, n), l.queue.push((() => {
                      r(fs(e, t))
                    })), a()
                  }))
                }
              })), []),
              c = (0, s.useRef)([...l.ctrls]),
              u = [],
              d = Qi(e) || 0;

            function f(e, n) {
              for (let o = e; o < n; o++) {
                const e = c.current[o] || (c.current[o] = new ds(null, l.flush)),
                  n = r ? r(o, e) : t[o];
                n && (u[o] = os(n))
              }
            }(0, s.useMemo)((() => {
              Co(c.current.slice(e, d), (e => {
                Oa(e, o), e.stop(!0)
              })), c.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), n);
            const h = c.current.map(((e, t) => ps(e, u[t]))),
              p = (0, s.useContext)(Es),
              m = Qi(p),
              v = p !== m && xa(p);
            Wi((() => {
              i.current++, l.ctrls = c.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], Co(e, (e => e()))), Co(c.current, ((e, t) => {
                o?.add(e), v && e.start({
                  default: p
                });
                const n = u[t];
                n && (Na(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), Yi((() => () => {
              Co(l.ctrls, (e => e.stop(!0)))
            }));
            const g = h.map((e => ({
              ...e
            })));
            return o ? [g, o] : g
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Ss = () => Ps(),
        xs = () => (0, s.useState)(Ss)[0];
      var Cs = 1,
        Os = class extends Wa {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = hi(...t);
            const n = this._get(),
              r = ua(n);
            ta(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            xo(t, this.get()) || (ea(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ls(this._active) && Rs(this)
          }
          _get() {
            const e = So.arr(this.source) ? this.source.map(Ti) : No(Ti(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Ls(this._active) && (this.idle = !1, Co(na(this), (e => {
              e.done = !1
            })), Po.skipAnimation ? (oo.batchedUpdates((() => this.advance())), Rs(this)) : zo.start(this))
          }
          _attach() {
            let e = 1;
            Co(No(this.source), (t => {
              Pi(t) && Ni(t, this), Ka(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Co(No(this.source), (e => {
              Pi(e) && Li(e, this)
            })), this._active.clear(), Rs(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = No(this.source).reduce(((e, t) => Math.max(e, (Ka(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Ns(e) {
        return !1 !== e.idle
      }

      function Ls(e) {
        return !e.size || Array.from(e).every(Ns)
      }

      function Rs(e) {
        e.idle || (e.idle = !0, Co(na(e), (e => {
          e.done = !0
        })), xi(e, {
          type: "idle",
          parent: e
        }))
      }
      Po.assign({
        createStringInterpolator: Ui,
        to: (e, t) => new Os(e, t)
      }), zo.advance;
      var Ms = n(44853),
        Ds = /^--/;

      function As(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ds.test(e) || Is.hasOwnProperty(e) && Is[e] ? ("" + t).trim() : t + "px"
      }
      var ks = {},
        Is = {
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
        js = ["Webkit", "Ms", "Moz", "O"];
      Is = Object.keys(Is).reduce(((e, t) => (js.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Is);
      var Hs = /^(matrix|translate|scale|rotate|skew)/,
        Bs = /^(translate)/,
        Fs = /^(rotate|skew)/,
        Us = (e, t) => So.num(e) && 0 !== e ? e + t : e,
        Vs = (e, t) => So.arr(e) ? e.every((e => Vs(e, t))) : So.num(e) ? e === t : parseFloat(e) === t,
        zs = class extends sa {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Us(e,"px"))).join(",")})`, Vs(e, 0)]))), Oo(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Hs.test(t)) {
                if (delete r[t], So.und(e)) return;
                const n = Bs.test(t) ? "px" : Fs.test(t) ? "deg" : "";
                o.push(No(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Us(o,n)})`, Vs(o, 0)] : e => [`${t}(${e.map((e=>Us(e,n))).join(",")})`, Vs(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Gs(o, i)), super(r)
          }
        },
        Gs = class extends Ci {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Co(this.inputs, ((n, r) => {
              const o = Ti(n[0]),
                [i, a] = this.transforms[r](So.arr(o) ? o : n.map(Ti));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Co(this.inputs, (e => Co(e, (e => Pi(e) && Ni(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Co(this.inputs, (e => Co(e, (e => Pi(e) && Li(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), xi(this, e)
          }
        };
      Po.assign({
        batchedUpdates: Ms.unstable_batchedUpdates,
        createStringInterpolator: Ui,
        colors: $o
      });
      var Ks = pa(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
            d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : ks[t] || (ks[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = As(t, o[t]);
              Ds.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, u[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new zs(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;
      const qs = (e, t, n) => {
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
        Ws = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        $s = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = Ws(n), i = o.width / r, a = 100 * Ys(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * Ys(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        Xs = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = Ws(e), c = t.getBoundingClientRect(), u = l.width / a / 2, d = c.width / 2, f = u * s > d ? u * s - d : 0, h = l.height / a / 2, p = c.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, g = o > f, y = i > m, b = -i > m;
          return v && !g ? o = -f : g && !v && (o = f), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        Ys = (e, t, n) => Math.min(Math.max(e, t), n),
        Zs = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        Qs = La,
        Js = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        el = ({
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
          }), no({
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
            children: (0, i.jsx)(Ks.div, {
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
      var tl, nl, rl, ol, il = n(63461);

      function al(e) {
        return e.type === nl.literal
      }

      function sl(e) {
        return e.type === nl.argument
      }

      function ll(e) {
        return e.type === nl.number
      }

      function cl(e) {
        return e.type === nl.date
      }

      function ul(e) {
        return e.type === nl.time
      }

      function dl(e) {
        return e.type === nl.select
      }

      function fl(e) {
        return e.type === nl.plural
      }

      function hl(e) {
        return e.type === nl.pound
      }

      function pl(e) {
        return e.type === nl.tag
      }

      function ml(e) {
        return !(!e || "object" != typeof e || e.type !== rl.number)
      }

      function vl(e) {
        return !(!e || "object" != typeof e || e.type !== rl.dateTime)
      }(ol = tl || (tl = {}))[ol.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", ol[ol.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", ol[ol.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", ol[ol.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", ol[ol.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", ol[ol.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", ol[ol.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", ol[ol.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", ol[ol.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", ol[ol.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", ol[ol.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", ol[ol.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", ol[ol.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", ol[ol.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", ol[ol.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", ol[ol.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", ol[ol.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", ol[ol.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", ol[ol.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", ol[ol.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", ol[ol.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", ol[ol.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", ol[ol.INVALID_TAG = 23] = "INVALID_TAG", ol[ol.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", ol[ol.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", ol[ol.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(nl || (nl = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(rl || (rl = {}));
      var gl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        yl = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function bl(e) {
        var t = {};
        return e.replace(yl, (function(e) {
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
      var wl = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        El = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        _l = /^(@+)?(\+|#+)?[rs]?$/g,
        Pl = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Tl = /^(0+)$/;

      function Sl(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(_l, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function xl(e) {
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

      function Cl(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Tl.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Ol(e) {
        return xl(e) || {}
      }

      function Nl(e) {
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
              t = (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, il.__assign)((0, il.__assign)({}, e), Ol(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, il.__assign)((0, il.__assign)({}, e), Ol(t))
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
              o.options[0].replace(Pl, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Tl.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (El.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(El, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, il.__assign)((0, il.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, il.__assign)((0, il.__assign)({}, t), Sl(i)))
          } else if (_l.test(o.stem)) t = (0, il.__assign)((0, il.__assign)({}, t), Sl(o.stem));
          else {
            var a = xl(o.stem);
            a && (t = (0, il.__assign)((0, il.__assign)({}, t), a));
            var s = Cl(o.stem);
            s && (t = (0, il.__assign)((0, il.__assign)({}, t), s))
          }
        }
        return t
      }
      var Ll, Rl = {
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

      function Ml(e) {
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
        return "root" !== r && (n = e.maximize().region), (Rl[n || ""] || Rl[r || ""] || Rl["".concat(r, "-001")] || Rl["001"])[0]
      }
      var Dl = new RegExp("^".concat(gl.source, "*")),
        Al = new RegExp("".concat(gl.source, "*$"));

      function kl(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Il = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        jl = !!String.fromCodePoint,
        Hl = !!Object.fromEntries,
        Bl = !!String.prototype.codePointAt,
        Fl = !!String.prototype.trimStart,
        Ul = !!String.prototype.trimEnd,
        Vl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        zl = !0;
      try {
        zl = "a" === (null === (Ll = Zl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Ll ? void 0 : Ll[0])
      } catch (e) {
        zl = !1
      }
      var Gl, Kl = Il ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        ql = jl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Wl = Hl ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        $l = Bl ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Xl = Fl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(Dl, "")
        },
        Yl = Ul ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(Al, "")
        };

      function Zl(e, t) {
        return new RegExp(e, t)
      }
      if (zl) {
        var Ql = Zl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Gl = function(e, t) {
          var n;
          return Ql.lastIndex = t, null !== (n = Ql.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else Gl = function(e, t) {
        for (var n = [];;) {
          var r = $l(e, t);
          if (void 0 === r || tc(r) || nc(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return ql.apply(void 0, n)
      };
      var Jl = function() {
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
                  return this.error(tl.UNMATCHED_CLOSING_TAG, kl(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ec(this.peek() || 0)) {
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
                  type: nl.pound,
                  location: kl(a, this.clonePosition())
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
              type: nl.literal,
              value: "<".concat(r, "/>"),
              location: kl(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ec(this.char())) return this.error(tl.INVALID_TAG, kl(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(tl.UNMATCHED_CLOSING_TAG, kl(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: nl.tag,
                  value: r,
                  children: i,
                  location: kl(n, this.clonePosition())
                },
                err: null
              } : this.error(tl.INVALID_TAG, kl(a, this.clonePosition())))
            }
            return this.error(tl.UNCLOSED_TAG, kl(n, this.clonePosition()))
          }
          return this.error(tl.INVALID_TAG, kl(n, this.clonePosition()))
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
          var s = kl(n, this.clonePosition());
          return {
            val: {
              type: nl.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ec(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return ql.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), ql(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(tl.EXPECT_ARGUMENT_CLOSING_BRACE, kl(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(tl.EMPTY_ARGUMENT, kl(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(tl.MALFORMED_ARGUMENT, kl(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(tl.EXPECT_ARGUMENT_CLOSING_BRACE, kl(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: nl.argument,
                  value: r,
                  location: kl(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(tl.EXPECT_ARGUMENT_CLOSING_BRACE, kl(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(tl.MALFORMED_ARGUMENT, kl(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = Gl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: kl(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(tl.EXPECT_ARGUMENT_TYPE, kl(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = Yl(g.val)).length) return this.error(tl.EXPECT_ARGUMENT_STYLE, kl(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: kl(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = kl(r, this.clonePosition());
              if (l && Kl(null == l ? void 0 : l.style, "::", 0)) {
                var d = Xl(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: nl.number,
                    value: n,
                    location: u,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(tl.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Ml(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: rl.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? bl(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? nl.date : nl.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? nl.number : "date" === a ? nl.date : nl.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(tl.EXPECT_SELECT_ARGUMENT_OPTIONS, kl(p, (0, il.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(tl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, kl(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(tl.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tl.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = kl(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: nl.select,
                  value: n,
                  options: Wl(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: nl.plural,
                  value: n,
                  options: Wl(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(tl.INVALID_ARGUMENT_TYPE, kl(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(tl.EXPECT_ARGUMENT_CLOSING_BRACE, kl(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(tl.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, kl(n, this.clonePosition()));
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
              for (var t = [], n = 0, r = e.split(wl).filter((function(e) {
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
            return this.error(tl.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: rl.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Nl(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(tl.EXPECT_PLURAL_ARGUMENT_SELECTOR, tl.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = kl(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? tl.DUPLICATE_SELECT_ARGUMENT_SELECTOR : tl.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? tl.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : tl.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, kl(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: kl(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? tl.EXPECT_SELECT_ARGUMENT_SELECTOR : tl.EXPECT_PLURAL_ARGUMENT_SELECTOR, kl(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(tl.MISSING_OTHER_CLAUSE, kl(this.clonePosition(), this.clonePosition())) : {
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
          var s = kl(r, this.clonePosition());
          return o ? Vl(i *= n) ? {
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
          var t = $l(this.message, e);
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
          if (Kl(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && tc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function ec(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function tc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function nc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function rc(e) {
        e.forEach((function(e) {
          if (delete e.location, dl(e) || fl(e))
            for (var t in e.options) delete e.options[t].location, rc(e.options[t].value);
          else ll(e) && ml(e.style) || (cl(e) || ul(e)) && vl(e.style) ? delete e.style.location : pl(e) && rc(e.children)
        }))
      }

      function oc(e, t) {
        void 0 === t && (t = {}), t = (0, il.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Jl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(tl[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || rc(n.val), n.val
      }

      function ic(e, t) {
        var n = t && t.cache ? t.cache : hc,
          r = t && t.serializer ? t.serializer : uc;
        return (t && t.strategy ? t.strategy : cc)(e, {
          cache: n,
          serializer: r
        })
      }

      function ac(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function sc(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function lc(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function cc(e, t) {
        return lc(e, this, 1 === e.length ? ac : sc, t.cache.create(), t.serializer)
      }
      var uc = function() {
        return JSON.stringify(arguments)
      };

      function dc() {
        this.cache = Object.create(null)
      }
      dc.prototype.get = function(e) {
        return this.cache[e]
      }, dc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var fc, hc = {
          create: function() {
            return new dc
          }
        },
        pc = {
          variadic: function(e, t) {
            return lc(e, this, sc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return lc(e, this, ac, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(fc || (fc = {}));
      var mc, vc = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, il.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        gc = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), fc.INVALID_VALUE, o) || this
          }
          return (0, il.__extends)(t, e), t
        }(vc),
        yc = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), fc.INVALID_VALUE, r) || this
          }
          return (0, il.__extends)(t, e), t
        }(vc),
        bc = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), fc.MISSING_VALUE, n) || this
          }
          return (0, il.__extends)(t, e), t
        }(vc);

      function wc(e) {
        return "function" == typeof e
      }

      function Ec(e, t, n, r, o, i, a) {
        if (1 === e.length && al(e[0])) return [{
          type: mc.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, c = e; l < c.length; l++) {
          var u = c[l];
          if (al(u)) s.push({
            type: mc.literal,
            value: u.value
          });
          else if (hl(u)) "number" == typeof i && s.push({
            type: mc.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = u.value;
            if (!o || !(d in o)) throw new bc(d, a);
            var f = o[d];
            if (sl(u)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? mc.literal : mc.object,
              value: f
            });
            else if (cl(u)) {
              var h = "string" == typeof u.style ? r.date[u.style] : vl(u.style) ? u.style.parsedOptions : void 0;
              s.push({
                type: mc.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (ul(u)) h = "string" == typeof u.style ? r.time[u.style] : vl(u.style) ? u.style.parsedOptions : r.time.medium, s.push({
              type: mc.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (ll(u))(h = "string" == typeof u.style ? r.number[u.style] : ml(u.style) ? u.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: mc.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (pl(u)) {
                var p = u.children,
                  m = u.value,
                  v = o[m];
                if (!wc(v)) throw new yc(m, "function", a);
                var g = v(Ec(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(g) || (g = [g]), s.push.apply(s, g.map((function(e) {
                  return {
                    type: "string" == typeof e ? mc.literal : mc.object,
                    value: e
                  }
                })))
              }
              if (dl(u)) {
                if (!(y = u.options[f] || u.options.other)) throw new gc(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, Ec(y.value, t, n, r, o))
              } else if (fl(u)) {
                var y;
                if (!(y = u.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new vc('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', fc.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: u.pluralType
                  }).select(f - (u.offset || 0));
                  y = u.options[b] || u.options.other
                }
                if (!y) throw new gc(u.value, f, Object.keys(u.options), a);
                s.push.apply(s, Ec(y.value, t, n, r, o, f - (u.offset || 0)))
              }
            }
          }
        }
        return (w = s).length < 2 ? w : w.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === mc.literal && t.type === mc.literal ? n.value += t.value : e.push(t), e
        }), []);
        var w
      }

      function _c(e) {
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
      }(mc || (mc = {}));
      var Pc = function() {
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
                return e.length && t.type === mc.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Ec(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              u = (c.formatters, (0, il.__rest)(c, ["formatters"]));
            this.ast = e.__parse(t, (0, il.__assign)((0, il.__assign)({}, u), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, il.__assign)((0, il.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, il.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: ic((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
            }), {
              cache: _c(i.number),
              strategy: pc.variadic
            }),
            getDateTimeFormat: ic((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
            }), {
              cache: _c(i.dateTime),
              strategy: pc.variadic
            }),
            getPluralRules: ic((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
            }), {
              cache: _c(i.pluralRules),
              strategy: pc.variadic
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
        }, e.__parse = oc, e.formats = {
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

      function Tc(e, t) {
        var n = t && t.cache ? t.cache : Mc,
          r = t && t.serializer ? t.serializer : Nc;
        return (t && t.strategy ? t.strategy : Oc)(e, {
          cache: n,
          serializer: r
        })
      }

      function Sc(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function xc(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function Cc(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function Oc(e, t) {
        return Cc(e, this, 1 === e.length ? Sc : xc, t.cache.create(), t.serializer)
      }
      var Nc = function() {
        return JSON.stringify(arguments)
      };

      function Lc() {
        this.cache = Object.create(null)
      }
      Lc.prototype.get = function(e) {
        return this.cache[e]
      }, Lc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Rc, Mc = {
          create: function() {
            return new Lc
          }
        },
        Dc = {
          variadic: function(e, t) {
            return Cc(e, this, xc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Cc(e, this, Sc, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Rc || (Rc = {}));
      var Ac = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, il.__extends)(t, e), t
        }(Error),
        kc = function(e) {
          function t(t, n) {
            return e.call(this, Rc.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, il.__extends)(t, e), t
        }(Ac),
        Ic = function(e) {
          function t(t, n) {
            return e.call(this, Rc.INVALID_CONFIG, t, n) || this
          }
          return (0, il.__extends)(t, e), t
        }(Ac),
        jc = function(e) {
          function t(t, n) {
            return e.call(this, Rc.MISSING_DATA, t, n) || this
          }
          return (0, il.__extends)(t, e), t
        }(Ac),
        Hc = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Rc.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, il.__extends)(t, e), t
        }(Ac),
        Bc = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, il.__extends)(t, e), t
        }(Hc),
        Fc = function(e) {
          function t(t, n) {
            var r = e.call(this, Rc.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, il.__extends)(t, e), t
        }(Ac);

      function Uc(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var Vc = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function zc(e) {
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

      function Gc(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new kc("No ".concat(t, " format named: ").concat(n)))
      }

      function Kc(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var qc = (0, il.__assign)((0, il.__assign)({}, Vc), {
        textComponent: s.Fragment
      });
      n(63305);
      var Wc, $c, Xc, Yc = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        Zc = (Yc.Consumer, Yc.Provider),
        Qc = Yc;
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Wc || (Wc = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }($c || ($c = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Xc || (Xc = {}));
      var Jc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        eu = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function tu(e) {
        var t = {};
        return e.replace(eu, (function(e) {
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
      var nu = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        ru = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        ou = /^(@+)?(\+|#+)?[rs]?$/g,
        iu = /(\*)(0+)|(#+)(0+)|(0+)/g,
        au = /^(0+)$/;

      function su(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(ou, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function lu(e) {
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

      function cu(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !au.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function uu(e) {
        return lu(e) || {}
      }

      function du(e) {
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
              t = (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, il.__assign)((0, il.__assign)({}, e), uu(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, il.__assign)((0, il.__assign)({}, e), uu(t))
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
              o.options[0].replace(iu, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (au.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (ru.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(ru, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, il.__assign)((0, il.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, il.__assign)((0, il.__assign)({}, t), su(i)))
          } else if (ou.test(o.stem)) t = (0, il.__assign)((0, il.__assign)({}, t), su(o.stem));
          else {
            var a = lu(o.stem);
            a && (t = (0, il.__assign)((0, il.__assign)({}, t), a));
            var s = cu(o.stem);
            s && (t = (0, il.__assign)((0, il.__assign)({}, t), s))
          }
        }
        return t
      }
      var fu, hu = {
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

      function pu(e) {
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
        return "root" !== r && (n = e.maximize().region), (hu[n || ""] || hu[r || ""] || hu["".concat(r, "-001")] || hu["001"])[0]
      }
      var mu = new RegExp("^".concat(Jc.source, "*")),
        vu = new RegExp("".concat(Jc.source, "*$"));

      function gu(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var yu = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        bu = !!String.fromCodePoint,
        wu = !!Object.fromEntries,
        Eu = !!String.prototype.codePointAt,
        _u = !!String.prototype.trimStart,
        Pu = !!String.prototype.trimEnd,
        Tu = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Su = !0;
      try {
        Su = "a" === (null === (fu = Du("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === fu ? void 0 : fu[0])
      } catch (e) {
        Su = !1
      }
      var xu, Cu = yu ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Ou = bu ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Nu = wu ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Lu = Eu ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Ru = _u ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(mu, "")
        },
        Mu = Pu ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(vu, "")
        };

      function Du(e, t) {
        return new RegExp(e, t)
      }
      if (Su) {
        var Au = Du("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        xu = function(e, t) {
          var n;
          return Au.lastIndex = t, null !== (n = Au.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else xu = function(e, t) {
        for (var n = [];;) {
          var r = Lu(e, t);
          if (void 0 === r || Iu(r) || ju(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Ou.apply(void 0, n)
      };

      function ku(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Iu(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ju(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Hu(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, il.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function Bu(e, t) {
        return Object.keys((0, il.__assign)((0, il.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, il.__assign)((0, il.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function Fu(e, t) {
        if (!t) return e;
        var n = Pc.formats;
        return (0, il.__assign)((0, il.__assign)((0, il.__assign)({}, n), e), {
          date: Bu(Hu(n.date, t), Hu(e.date || {}, t)),
          time: Bu(Hu(n.time, t), Hu(e.time || {}, t))
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
                  return this.error(Wc.UNMATCHED_CLOSING_TAG, gu(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && ku(this.peek() || 0)) {
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
                  type: $c.pound,
                  location: gu(a, this.clonePosition())
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
              type: $c.literal,
              value: "<".concat(r, "/>"),
              location: gu(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !ku(this.char())) return this.error(Wc.INVALID_TAG, gu(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Wc.UNMATCHED_CLOSING_TAG, gu(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: $c.tag,
                  value: r,
                  children: i,
                  location: gu(n, this.clonePosition())
                },
                err: null
              } : this.error(Wc.INVALID_TAG, gu(a, this.clonePosition())))
            }
            return this.error(Wc.UNCLOSED_TAG, gu(n, this.clonePosition()))
          }
          return this.error(Wc.INVALID_TAG, gu(n, this.clonePosition()))
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
          var s = gu(n, this.clonePosition());
          return {
            val: {
              type: $c.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ku(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Ou.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Ou(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Wc.EXPECT_ARGUMENT_CLOSING_BRACE, gu(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Wc.EMPTY_ARGUMENT, gu(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Wc.MALFORMED_ARGUMENT, gu(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Wc.EXPECT_ARGUMENT_CLOSING_BRACE, gu(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: $c.argument,
                  value: r,
                  location: gu(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Wc.EXPECT_ARGUMENT_CLOSING_BRACE, gu(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Wc.MALFORMED_ARGUMENT, gu(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = xu(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: gu(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Wc.EXPECT_ARGUMENT_TYPE, gu(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var c = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = Mu(g.val)).length) return this.error(Wc.EXPECT_ARGUMENT_STYLE, gu(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: gu(c, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var u = gu(r, this.clonePosition());
              if (l && Cu(null == l ? void 0 : l.style, "::", 0)) {
                var d = Ru(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: $c.number,
                    value: n,
                    location: u,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Wc.EXPECT_DATE_TIME_SKELETON, u);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = pu(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Xc.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? tu(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? $c.date : $c.time,
                    value: n,
                    location: u,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? $c.number : "date" === a ? $c.date : $c.time,
                  value: n,
                  location: u,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Wc.EXPECT_SELECT_ARGUMENT_OPTIONS, gu(p, (0, il.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Wc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, gu(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Wc.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Wc.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = gu(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: $c.select,
                  value: n,
                  options: Nu(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: $c.plural,
                  value: n,
                  options: Nu(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Wc.INVALID_ARGUMENT_TYPE, gu(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Wc.EXPECT_ARGUMENT_CLOSING_BRACE, gu(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Wc.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, gu(n, this.clonePosition()));
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
              for (var t = [], n = 0, r = e.split(nu).filter((function(e) {
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
            return this.error(Wc.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Xc.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? du(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, c = r.location;;) {
            if (0 === l.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Wc.EXPECT_PLURAL_ARGUMENT_SELECTOR, Wc.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              c = gu(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Wc.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Wc.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Wc.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Wc.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, gu(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: gu(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, c = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Wc.EXPECT_SELECT_ARGUMENT_SELECTOR : Wc.EXPECT_PLURAL_ARGUMENT_SELECTOR, gu(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Wc.MISSING_OTHER_CLAUSE, gu(this.clonePosition(), this.clonePosition())) : {
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
          var s = gu(r, this.clonePosition());
          return o ? Tu(i *= n) ? {
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
          var t = Lu(this.message, e);
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
          if (Cu(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Iu(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }();
      var Uu = function(e, t, n, r, o) {
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
          if (Array.isArray(g) && 1 === g.length && g[0].type === $c.literal) return g[0].value;
          if (!r && g && "string" == typeof g && !h) return g.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, il.__assign)((0, il.__assign)({}, h), r || {}), a = Fu(a, f), c = Fu(c, f), !g) {
            if (!1 === u && "" === g) return g;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Fc(n, i)), m) try {
              return t.getMessageFormat(m, l, c, o).format(r)
            } catch (e) {
              return d(new Bc('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(g, i, a, (0, il.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Bc('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, c, o).format(r)
          } catch (e) {
            d(new Bc('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof g ? g : "string" == typeof m ? m : v
        },
        Vu = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function zu(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Gc(o, "number", a, i) || {};
        return t(r, Uc(n, Vu, s))
      }

      function Gu(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return zu(e, t, r).format(n)
        } catch (t) {
          e.onError(new Hc("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function Ku(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return zu(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Hc("Error formatting number.", e.locale, t))
        }
        return []
      }
      var qu = ["numeric", "style"];

      function Wu(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new vc('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', fc.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Gc(o, "relative", a, i) || {};
            return t(r, Uc(n, qu, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Hc("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var $u = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Xu(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          c = (0, il.__assign)((0, il.__assign)({}, s && {
            timeZone: s
          }), l && Gc(i, t, l, a)),
          u = Uc(r, $u, c);
        return "time" !== t || u.hour || u.minute || u.second || u.timeStyle || u.dateStyle || (u = (0, il.__assign)((0, il.__assign)({}, u), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, u)
      }

      function Yu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Xu(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Hc("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function Zu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Xu(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Hc("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Qu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          c = e.locale,
          u = e.onError,
          d = Uc(s, $u, l ? {
            timeZone: l
          } : {});
        try {
          return t(c, d).formatRange(o, i)
        } catch (t) {
          u(new Hc("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Ju(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Xu(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Hc("Error formatting date.", e.locale, t))
        }
        return []
      }

      function ed(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Xu(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Hc("Error formatting time.", e.locale, t))
        }
        return []
      }
      var td = ["type"];

      function nd(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new vc('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', fc.MISSING_INTL_API));
        var a = Uc(r, td);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Hc("Error formatting plural.", o, e))
        }
        return "other"
      }
      var rd = ["type", "style"],
        od = Date.now();

      function id(e, t, n, r) {
        void 0 === r && (r = {});
        var o = ad(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function ad(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new vc('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', fc.MISSING_INTL_API));
        var a = Uc(r, rd);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(od, "_").concat(e, "_").concat(od)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, il.__assign)((0, il.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Hc("Error formatting list.", o, e))
        }
        return n
      }
      var sd = ["style", "type", "fallback", "languageDisplay"];

      function ld(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new vc('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', fc.MISSING_INTL_API));
        var a = Uc(r, sd);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Hc("Error formatting display name.", o, e))
        }
      }

      function cd(e, t) {
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
              o = Tc((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
              }), {
                cache: zc(e.dateTime),
                strategy: Dc.variadic
              }),
              i = Tc((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
              }), {
                cache: zc(e.number),
                strategy: Dc.variadic
              }),
              a = Tc((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, il.__spreadArray)([void 0], t, !1)))
              }), {
                cache: zc(e.pluralRules),
                strategy: Dc.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: Tc((function(e, t, n, r) {
                return new Pc(e, t, n, (0, il.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: zc(e.message),
                strategy: Dc.variadic
              }),
              getRelativeTimeFormat: Tc((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, il.__spreadArray)([void 0], e, !1)))
              }), {
                cache: zc(e.relativeTime),
                strategy: Dc.variadic
              }),
              getPluralRules: a,
              getListFormat: Tc((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, il.__spreadArray)([void 0], e, !1)))
              }), {
                cache: zc(e.list),
                strategy: Dc.variadic
              }),
              getDisplayNames: Tc((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, il.__spreadArray)([void 0], e, !1)))
              }), {
                cache: zc(e.displayNames),
                strategy: Dc.variadic
              })
            }
          }(t),
          r = (0, il.__assign)((0, il.__assign)({}, Vc), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new jc('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new jc('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Ic('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, il.__assign)((0, il.__assign)({}, r), {
            formatters: n,
            formatNumber: Gu.bind(null, r, n.getNumberFormat),
            formatNumberToParts: Ku.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Wu.bind(null, r, n.getRelativeTimeFormat),
            formatDate: Yu.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Ju.bind(null, r, n.getDateTimeFormat),
            formatTime: Zu.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Qu.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: ed.bind(null, r, n.getDateTimeFormat),
            formatPlural: nd.bind(null, r, n.getPluralRules),
            formatMessage: Uu.bind(null, r, n),
            $t: Uu.bind(null, r, n),
            formatList: id.bind(null, r, n.getListFormat),
            formatListToParts: ad.bind(null, r, n.getListFormat),
            formatDisplayName: ld.bind(null, r, n.getDisplayNames)
          })
      }

      function ud(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = wc(o) ? (r = o, function(e) {
            return r(s.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }
      var dd = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = ud(r),
            l = Uu.apply(void 0, (0, il.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(l) ? s.Children.toArray(l) : l
        },
        fd = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, il.__rest)(e, ["defaultRichTextElements"]),
            o = ud(n),
            i = cd((0, il.__assign)((0, il.__assign)((0, il.__assign)({}, qc), r), {
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
          return (0, il.__assign)((0, il.__assign)({}, i), {
            formatMessage: dd.bind(null, a, i.formatters),
            $t: dd.bind(null, a, i.formatters)
          })
        };

      function hd(e) {
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
      var pd = function(e) {
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
            intl: fd(hd(t.props), t.cache),
            prevConfig: hd(t.props)
          }, t
        }
        return (0, il.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = hd(e);
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
            intl: fd(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Kc(this.state.intl), s.createElement(Zc, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = qc, t
      }(s.PureComponent);
      const md = pd;

      function vd() {
        var e = s.useContext(Qc);
        return Kc(e), e
      }
      var gd, yd;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(gd || (gd = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(yd || (yd = {}));
      var bd = function(e) {
        var t = vd(),
          n = e.value,
          r = e.children,
          o = (0, il.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function wd(e) {
        var t = function(t) {
          var n = vd(),
            r = t.value,
            o = t.children,
            i = (0, il.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = yd[e], t
      }

      function Ed(e) {
        var t = function(t) {
          var n = vd(),
            r = t.value,
            o = t.children,
            i = (0, il.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var l = n.textComponent || s.Fragment;
          return s.createElement(l, null, a)
        };
        return t.displayName = gd[e], t
      }
      bd.displayName = "FormattedNumberParts", bd.displayName = "FormattedNumberParts", Ed("formatDate"), Ed("formatTime"), Ed("formatNumber"), Ed("formatList"), Ed("formatDisplayName"), wd("formatDate"), wd("formatTime");
      const _d = ({
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
          }), [n]), o ? (0, i.jsx)(md, {
            locale: n,
            messages: o,
            children: e
          }) : r || null
        },
        Pd = {
          id: "Lightbox_Open_Button_Label"
        },
        Td = {
          id: "Lightbox_Dialog_Title"
        },
        Sd = {
          id: "Lightbox_Dialog_Description"
        },
        xd = {
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
        };
      var Cd = n(82536);
      const Od = (e, t) => {
        const n = "more" === t ? Cd.xW.lightHc : Cd.xW.light,
          r = "more" === t ? Cd.xW.darkHc : Cd.xW.dark;
        return "dark" === e ? r : n
      };

      function Nd(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function Ld(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function Rd(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Md(e, t = []) {
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
        }, Dd(r, ...t)]
      }

      function Dd(...e) {
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

      function Ad(e) {
        const t = s.useRef(e);
        return s.useEffect((() => {
          t.current = e
        })), s.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function kd({
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
            i = Ad(t);
          return s.useEffect((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = Ad(n);
        return [a, s.useCallback((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l])]
      }
      var Id = s.createContext(void 0);

      function jd(e) {
        const t = s.useContext(Id);
        return e || t || "ltr"
      }

      function Hd(e) {
        const t = s.useRef({
          value: e,
          previous: e
        });
        return s.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var Bd = Boolean(globalThis?.document) ? s.useLayoutEffect : () => {};

      function Fd(e) {
        const [t, n] = s.useState(void 0);
        return Bd((() => {
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
      var Ud = n(50786),
        Vd = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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
        zd = ["PageUp", "PageDown"],
        Gd = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Kd = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        qd = "Slider",
        [Wd, $d, Xd] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = Md(t),
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
              } = e, o = Rd(t, a(c, n).collectionRef);
              return (0, i.jsx)(Ud.DX, {
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
              } = e, l = s.useRef(null), c = Rd(t, l), u = a(d, n);
              return s.useEffect((() => (u.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                u.itemMap.delete(l)
              }))), (0, i.jsx)(Ud.DX, {
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
        }(qd),
        [Yd, Zd] = Md(qd, [Xd]),
        [Qd, Jd] = Yd(qd),
        ef = s.forwardRef(((e, t) => {
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
          } = e, g = s.useRef(new Set), y = s.useRef(0), b = "horizontal" === l ? rf : of, [w = [], E] = kd({
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
              l = Nd(s, [r, o]);
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
          return (0, i.jsx)(Qd, {
            scope: e.__scopeSlider,
            name: n,
            disabled: c,
            min: r,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: g.current,
            values: w,
            orientation: l,
            children: (0, i.jsx)(Wd.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(Wd.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(b, {
                  "aria-disabled": c,
                  "data-disabled": c ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: Ld(v.onPointerDown, (() => {
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
                      const n = zd.includes(e.key) || e.shiftKey && Gd.includes(e.key) ? 10 : 1,
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
      ef.displayName = qd;
      var [tf, nf] = Yd(qd, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), rf = s.forwardRef(((e, t) => {
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
        } = e, [h, p] = s.useState(null), m = Rd(t, (e => p(e))), v = s.useRef(), g = jd(o), y = "ltr" === g, b = y && !a || !y && a;

        function w(e) {
          const t = v.current || h.getBoundingClientRect(),
            o = vf([0, t.width], b ? [n, r] : [r, n]);
          return v.current = t, o(e - t.left)
        }
        return (0, i.jsx)(tf, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(af, {
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
              const t = Kd[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), of = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: l,
          onSlideEnd: c,
          onStepKeyDown: u,
          ...d
        } = e, f = s.useRef(null), h = Rd(t, f), p = s.useRef(), m = !o;

        function v(e) {
          const t = p.current || f.current.getBoundingClientRect(),
            o = vf([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, i.jsx)(tf, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, i.jsx)(af, {
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
              const t = Kd[m ? "from-bottom" : "from-top"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), af = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: c,
          ...u
        } = e, d = Jd(qd, n);
        return (0, i.jsx)(Vd.span, {
          ...u,
          ref: t,
          onKeyDown: Ld(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : zd.concat(Gd).includes(e.key) && (c(e), e.preventDefault())
          })),
          onPointerDown: Ld(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: Ld(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: Ld(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), sf = "SliderTrack", lf = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Jd(sf, n);
        return (0, i.jsx)(Vd.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      lf.displayName = sf;
      var cf = "SliderRange",
        uf = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Jd(cf, n), a = nf(cf, n), l = Rd(t, s.useRef(null)), c = o.values.length, u = o.values.map((e => mf(e, o.min, o.max))), d = c > 1 ? Math.min(...u) : 0, f = 100 - Math.max(...u);
          return (0, i.jsx)(Vd.span, {
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
      uf.displayName = cf;
      var df = "SliderThumb",
        ff = s.forwardRef(((e, t) => {
          const n = $d(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = Rd(t, (e => o(e))),
            l = s.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, i.jsx)(hf, {
            ...e,
            ref: a,
            index: l
          })
        })),
        hf = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...a
          } = e, l = Jd(df, n), c = nf(df, n), [u, d] = s.useState(null), f = Rd(t, (e => d(e))), h = !u || Boolean(u.closest("form")), p = Fd(u), m = l.values[r], v = void 0 === m ? 0 : mf(m, l.min, l.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, l.values.length), y = p?.[c.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - vf([0, 50], [0, r])(t) * n) * n
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
            children: [(0, i.jsx)(Wd.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(Vd.span, {
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
                onFocus: Ld(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = r
                }))
              })
            }), h && (0, i.jsx)(pf, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              value: m
            }, r)]
          })
        }));
      ff.displayName = df;
      var pf = e => {
        const {
          value: t,
          ...n
        } = e, r = s.useRef(null), o = Hd(t);
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

      function mf(e, t, n) {
        return Nd(100 / (n - t) * (e - t), [0, 100])
      }

      function vf(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      var gf = ef,
        yf = lf,
        bf = uf,
        wf = ff;
      const Ef = {
          id: "Lightbox_Close_Button_Label"
        },
        _f = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Pf = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Tf = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Sf = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        xf = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Cf = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Of = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Nf = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Lf = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Rf = {
          id: "Lightbox_Download_Button_Label"
        },
        Mf = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function Df() {
        return Df = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Df.apply(this, arguments)
      }
      var Af = ["shift", "alt", "meta", "mod", "ctrl"],
        kf = {
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

      function If(e) {
        return (kf[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function jf(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function Hf(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return If(e)
        }));
        return Df({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Af.includes(e)
          })),
          description: n
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Uf([If(e.key), If(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Vf([If(e.key), If(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Bf.clear()
      }));
      var Bf = new Set;

      function Ff(e) {
        return Array.isArray(e)
      }

      function Uf(e) {
        var t = Array.isArray(e) ? e : [e];
        Bf.has("meta") && Bf.forEach((function(e) {
          return ! function(e) {
            return Af.includes(e)
          }(e) && Bf.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Bf.add(e.toLowerCase())
        }))
      }

      function Vf(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Bf.clear() : t.forEach((function(e) {
          return Bf.delete(e.toLowerCase())
        }))
      }

      function zf(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return Ff(t) ? Boolean(r && t && t.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && t && !0 === t)
      }
      var Gf = (0, s.createContext)(void 0);

      function Kf(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(Gf.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function qf(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && qf(e[r], t[r])
        }), !0) : e === t
      }
      var Wf = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        $f = function(e) {
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
                  return !qf(t, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(Wf.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: u,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, i.jsx)(Kf, {
              addHotkey: m,
              removeHotkey: v,
              children: r
            })
          })
        },
        Xf = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Yf = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function Zf(e, t, n, r) {
        var o = (0, s.useRef)(null),
          i = (0, s.useRef)(!1),
          a = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          l = Ff(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          c = n instanceof Array ? n : r instanceof Array ? r : void 0,
          u = (0, s.useCallback)(t, null != c ? c : []),
          d = (0, s.useRef)(u);
        d.current = c ? u : t;
        var f = function(e) {
            var t = (0, s.useRef)(void 0);
            return qf(t.current, e) || (t.current = e), t.current
          }(a),
          h = (0, s.useContext)(Wf).enabledScopes,
          p = (0, s.useContext)(Gf);
        return Yf((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = h, t = null == f ? void 0 : f.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !zf(e, ["input", "textarea", "select"]) || zf(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void Xf(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != f && f.enableOnContentEditable) && jf(l, null == f ? void 0 : f.splitKey).forEach((function(n) {
                    var r, o = Hf(n, null == f ? void 0 : f.combinationKey);
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
                          g = If(f),
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
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(g)) || (u ? (void 0 === o && (o = ","), (Ff(r = u) ? r : r.split(o)).every((function(e) {
                          return Bf.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == f ? void 0 : f.enabled)) return void Xf(e);
                      d.current(e, o), t || (i.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Uf(If(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && n(e))
              },
              s = function(e) {
                void 0 !== e.key && (Vf(If(e.code)), i.current = !1, null != f && f.keyup && n(e, !0))
              },
              c = o.current || (null == a ? void 0 : a.document) || document;
            return c.addEventListener("keyup", s), c.addEventListener("keydown", r), p && jf(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return p.addHotkey(Hf(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                c.removeEventListener("keyup", s), c.removeEventListener("keydown", r), p && jf(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return p.removeHotkey(Hf(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [l, f, h]), o
      }

      function Qf(e) {
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

      function Jf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function eh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Jf(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Qf(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jf(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function th(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var nh = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        rh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = eh(eh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nh(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return th(e.variantClassNames, (e => th(e, (e => e.split(" ")[0]))))
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
      const oh = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        ih = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: l,
          size: c = "MD",
          fullWidth: d = !1,
          onClick: f,
          children: h,
          ...p
        }, m) => {
          const v = (0, s.useRef)(null),
            g = (0, ht.UP)(v, m),
            {
              events: y,
              others: b
            } = (0, a.bZ)(p, {
              onPress: !1
            }),
            {
              buttonProps: w,
              isPressed: E
            } = jn({
              ...b,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => b.onPress?.(e) ?? f?.(e)
            }, v),
            _ = (0, a.v6)({
              ...w,
              className: n
            }, {
              ...y,
              role: "button",
              "data-pressed": E,
              "data-testid": e,
              className: rh({
                appearance: l,
                size: c,
                fullWidth: d
              })
            }),
            P = re[r],
            T = t ? u.DX : "button",
            S = oh[c];
          return (0, i.jsxs)(T, {
            ref: g,
            ..._,
            children: [P && (0, i.jsx)(P, {
              label: o || "",
              size: S
            }), (0, i.jsx)(u.xV, {
              children: h
            })]
          })
        })),
        ah = (0, s.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (Zf(e, (e => n?.(e)), [n]), (0, i.jsx)(F, {
          className: (0, Ce.$)("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, i.jsx)("kbd", {
            ref: r,
            children: e
          })
        }))));
      var sh = /^--/;

      function lh(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || sh.test(e) || uh.hasOwnProperty(e) && uh[e] ? ("" + t).trim() : t + "px"
      }
      var ch = {},
        uh = {
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
        dh = ["Webkit", "Ms", "Moz", "O"];
      uh = Object.keys(uh).reduce(((e, t) => (dh.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), uh);
      var fh = /^(matrix|translate|scale|rotate|skew)/,
        hh = /^(translate)/,
        ph = /^(rotate|skew)/,
        mh = (e, t) => So.num(e) && 0 !== e ? e + t : e,
        vh = (e, t) => So.arr(e) ? e.every((e => vh(e, t))) : So.num(e) ? e === t : parseFloat(e) === t,
        gh = class extends sa {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>mh(e,"px"))).join(",")})`, vh(e, 0)]))), Oo(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (fh.test(t)) {
                if (delete r[t], So.und(e)) return;
                const n = hh.test(t) ? "px" : ph.test(t) ? "deg" : "";
                o.push(No(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${mh(o,n)})`, vh(o, 0)] : e => [`${t}(${e.map((e=>mh(e,n))).join(",")})`, vh(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new yh(o, i)), super(r)
          }
        },
        yh = class extends Ci {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Co(this.inputs, ((n, r) => {
              const o = Ti(n[0]),
                [i, a] = this.transforms[r](So.arr(o) ? o : n.map(Ti));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Co(this.inputs, (e => Co(e, (e => Pi(e) && Ni(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Co(this.inputs, (e => Co(e, (e => Pi(e) && Li(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), xi(this, e)
          }
        };
      Po.assign({
        batchedUpdates: Ms.unstable_batchedUpdates,
        createStringInterpolator: Ui,
        colors: $o
      });
      var bh = pa(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
            d = Object.keys(c).map((t => n || e.hasAttribute(t) ? t : ch[t] || (ch[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = lh(t, o[t]);
              sh.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, u[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new gh(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;

      function wh(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function Eh(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function _h(...e) {
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
      var Ph = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
        const n = s.forwardRef(((e, n) => {
          const {
            asChild: r,
            ...o
          } = e, a = r ? Ud.DX : t;
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

      function Th(e, t = globalThis?.document) {
        const n = Ad(e);
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
      var Sh, xh = "dismissableLayer.update",
        Ch = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Oh = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(Ch), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = Eh(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Lh("dismissableLayer.pointerDownOutside", n, i, {
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
          }), p), T = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && Lh("dismissableLayer.focusOutside", n, {
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
          return Th((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Sh = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Nh(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Sh)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Nh())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(xh, e), () => document.removeEventListener(xh, e)
          }), []), (0, i.jsx)(Ph.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: wh(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: wh(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: wh(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function Nh() {
        const e = new CustomEvent(xh);
        document.dispatchEvent(e)
      }

      function Lh(e, t, n, {
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
          e && Ms.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      Oh.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(Ch),
          r = s.useRef(null),
          o = Eh(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(Ph.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Rh = l["useId".toString()] || (() => {}),
        Mh = 0;

      function Dh(e) {
        const [t, n] = s.useState(Rh());
        return Bd((() => {
          e || n((e => e ?? String(Mh++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      const Ah = ["top", "right", "bottom", "left"],
        kh = Math.min,
        Ih = Math.max,
        jh = Math.round,
        Hh = Math.floor,
        Bh = e => ({
          x: e,
          y: e
        }),
        Fh = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        Uh = {
          start: "end",
          end: "start"
        };

      function Vh(e, t, n) {
        return Ih(e, kh(t, n))
      }

      function zh(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Gh(e) {
        return e.split("-")[0]
      }

      function Kh(e) {
        return e.split("-")[1]
      }

      function qh(e) {
        return "x" === e ? "y" : "x"
      }

      function Wh(e) {
        return "y" === e ? "height" : "width"
      }

      function $h(e) {
        return ["top", "bottom"].includes(Gh(e)) ? "y" : "x"
      }

      function Xh(e) {
        return qh($h(e))
      }

      function Yh(e) {
        return e.replace(/start|end/g, (e => Uh[e]))
      }

      function Zh(e) {
        return e.replace(/left|right|bottom|top/g, (e => Fh[e]))
      }

      function Qh(e) {
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

      function Jh(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height
        }
      }

      function ep(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = $h(t),
          a = Xh(t),
          s = Wh(a),
          l = Gh(t),
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
        switch (Kh(t)) {
          case "start":
            h[a] -= f * (n && c ? -1 : 1);
            break;
          case "end":
            h[a] += f * (n && c ? -1 : 1)
        }
        return h
      }
      async function tp(e, t) {
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
        } = zh(t, e), p = Qh(h), m = s[f ? "floating" === d ? "reference" : "floating" : d], v = Jh(await i.getClippingRect({
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
        }, w = Jh(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
      const np = e => ({
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
            } = zh(e, t) || {};
            if (null == c) return {};
            const d = Qh(u),
              f = {
                x: n,
                y: r
              },
              h = Xh(o),
              p = Wh(h),
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
            const T = w / 2 - E / 2,
              S = P / 2 - m[p] / 2 - 1,
              x = kh(d[g], S),
              C = kh(d[y], S),
              O = x,
              N = P - m[p] - C,
              L = P / 2 - m[p] / 2 + T,
              R = Vh(O, L, N),
              M = !l.arrow && null != Kh(o) && L != R && i.reference[p] / 2 - (L < O ? x : C) - m[p] / 2 < 0,
              D = M ? L < O ? L - O : L - N : 0;
            return {
              [h]: f[h] + D,
              data: {
                [h]: R,
                centerOffset: L - R - D,
                ...M && {
                  alignmentOffset: D
                }
              },
              reset: M
            }
          }
        }),
        rp = function(e) {
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
              } = zh(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const g = Gh(o),
                y = Gh(s) === s,
                b = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                w = f || (y || !m ? [Zh(s)] : function(e) {
                  const t = Zh(e);
                  return [Yh(e), t, Yh(t)]
                }(s));
              f || "none" === p || w.push(... function(e, t, n, r) {
                const o = Kh(e);
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
                }(Gh(e), "start" === n, r);
                return o && (i = i.map((e => e + "-" + o)), t && (i = i.concat(i.map(Yh)))), i
              }(s, m, p, b));
              const E = [s, ...w],
                _ = await tp(t, v),
                P = [];
              let T = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && P.push(_[g]), d) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = Kh(e),
                    o = Xh(e),
                    i = Wh(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = Zh(a)), [a, Zh(a)]
                }(o, a, b);
                P.push(_[e[0]], _[e[1]])
              }
              if (T = [...T, {
                  placement: o,
                  overflows: P
                }], !P.every((e => e <= 0))) {
                var S, x;
                const e = ((null == (S = i.flip) ? void 0 : S.index) || 0) + 1,
                  t = E[e];
                if (t) return {
                  data: {
                    index: e,
                    overflows: T
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (x = T.filter((e => e.overflows[0] <= 0)).sort(((e, t) => e.overflows[1] - t.overflows[1]))[0]) ? void 0 : x.placement;
                if (!n) switch (h) {
                  case "bestFit": {
                    var C;
                    const e = null == (C = T.map((e => [e.placement, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : C[0];
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

      function op(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function ip(e) {
        return Ah.some((t => e[t] >= 0))
      }
      const ap = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = zh(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = op(await tp(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: ip(e)
                    }
                  }
                }
                case "escaped": {
                  const e = op(await tp(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: ip(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        sp = function(e) {
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
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = Gh(n), s = Kh(n), l = "y" === $h(n), c = ["left", "top"].includes(a) ? -1 : 1, u = i && l ? -1 : 1, d = zh(t, e);
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
        lp = function(e) {
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
              } = zh(e, t), c = {
                x: n,
                y: r
              }, u = await tp(t, l), d = $h(Gh(o)), f = qh(d);
              let h = c[f],
                p = c[d];
              if (i) {
                const e = "y" === f ? "bottom" : "right";
                h = Vh(h + u["y" === f ? "top" : "left"], h, h - u[e])
              }
              if (a) {
                const e = "y" === d ? "bottom" : "right";
                p = Vh(p + u["y" === d ? "top" : "left"], p, p - u[e])
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
        cp = function(e) {
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
              } = zh(e, t), u = {
                x: n,
                y: r
              }, d = $h(o), f = qh(d);
              let h = u[f],
                p = u[d];
              const m = zh(s, t),
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
                  t = ["top", "left"].includes(Gh(o)),
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
        up = function(e) {
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
              } = zh(e, t), l = await tp(t, s), c = Gh(n), u = Kh(n), d = "y" === $h(n), {
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
                w = u || y ? kh(g, e) : e
              } else {
                const e = h - l.top - l.bottom;
                b = u || y ? kh(v, e) : e
              }
              if (y && !u) {
                const e = Ih(l.left, 0),
                  t = Ih(l.right, 0),
                  n = Ih(l.top, 0),
                  r = Ih(l.bottom, 0);
                d ? w = f - 2 * (0 !== e || 0 !== t ? e + t : Ih(l.left, l.right)) : b = h - 2 * (0 !== n || 0 !== r ? n + r : Ih(l.top, l.bottom))
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

      function dp(e) {
        return pp(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function fp(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function hp(e) {
        var t;
        return null == (t = (pp(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function pp(e) {
        return e instanceof Node || e instanceof fp(e).Node
      }

      function mp(e) {
        return e instanceof Element || e instanceof fp(e).Element
      }

      function vp(e) {
        return e instanceof HTMLElement || e instanceof fp(e).HTMLElement
      }

      function gp(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof fp(e).ShadowRoot)
      }

      function yp(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = Pp(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
      }

      function bp(e) {
        return ["table", "td", "th"].includes(dp(e))
      }

      function wp(e) {
        const t = Ep(),
          n = Pp(e);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((e => (n.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (n.contain || "").includes(e)))
      }

      function Ep() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function _p(e) {
        return ["html", "body", "#document"].includes(dp(e))
      }

      function Pp(e) {
        return fp(e).getComputedStyle(e)
      }

      function Tp(e) {
        return mp(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.pageXOffset,
          scrollTop: e.pageYOffset
        }
      }

      function Sp(e) {
        if ("html" === dp(e)) return e;
        const t = e.assignedSlot || e.parentNode || gp(e) && e.host || hp(e);
        return gp(t) ? t.host : t
      }

      function xp(e) {
        const t = Sp(e);
        return _p(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vp(t) && yp(t) ? t : xp(t)
      }

      function Cp(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = xp(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = fp(o);
        return i ? t.concat(a, a.visualViewport || [], yp(o) ? o : [], a.frameElement && n ? Cp(a.frameElement) : []) : t.concat(o, Cp(o, [], n))
      }

      function Op(e) {
        const t = Pp(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = vp(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          s = jh(n) !== i || jh(r) !== a;
        return s && (n = i, r = a), {
          width: n,
          height: r,
          $: s
        }
      }

      function Np(e) {
        return mp(e) ? e : e.contextElement
      }

      function Lp(e) {
        const t = Np(e);
        if (!vp(t)) return Bh(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Op(t);
        let a = (i ? jh(n.width) : n.width) / r,
          s = (i ? jh(n.height) : n.height) / o;
        return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), {
          x: a,
          y: s
        }
      }
      const Rp = Bh(0);

      function Mp(e) {
        const t = fp(e);
        return Ep() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : Rp
      }

      function Dp(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = Np(e);
        let a = Bh(1);
        t && (r ? mp(r) && (a = Lp(r)) : a = Lp(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== fp(e)) && t
        }(i, n, r) ? Mp(i) : Bh(0);
        let l = (o.left + s.x) / a.x,
          c = (o.top + s.y) / a.y,
          u = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = fp(i),
            t = r && mp(r) ? fp(r) : r;
          let n = e.frameElement;
          for (; n && r && t !== e;) {
            const e = Lp(n),
              t = n.getBoundingClientRect(),
              r = Pp(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += o, c += i, n = fp(n).frameElement
          }
        }
        return Jh({
          width: u,
          height: d,
          x: l,
          y: c
        })
      }

      function Ap(e) {
        return Dp(hp(e)).left + Tp(e).scrollLeft
      }

      function kp(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = fp(e),
            r = hp(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = Ep();
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
          const t = hp(e),
            n = Tp(e),
            r = e.ownerDocument.body,
            o = Ih(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = Ih(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let a = -n.scrollLeft + Ap(e);
          const s = -n.scrollTop;
          return "rtl" === Pp(r).direction && (a += Ih(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: a,
            y: s
          }
        }(hp(e));
        else if (mp(t)) r = function(e, t) {
          const n = Dp(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = vp(e) ? Lp(e) : Bh(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = Mp(e);
          r = {
            ...t,
            x: t.x - n.x,
            y: t.y - n.y
          }
        }
        return Jh(r)
      }

      function Ip(e, t) {
        const n = Sp(e);
        return !(n === t || !mp(n) || _p(n)) && ("fixed" === Pp(n).position || Ip(n, t))
      }

      function jp(e, t, n) {
        const r = vp(t),
          o = hp(t),
          i = "fixed" === n,
          a = Dp(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = Bh(0);
        if (r || !r && !i)
          if (("body" !== dp(t) || yp(o)) && (s = Tp(t)), r) {
            const e = Dp(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else o && (l.x = Ap(o));
        return {
          x: a.left + s.scrollLeft - l.x,
          y: a.top + s.scrollTop - l.y,
          width: a.width,
          height: a.height
        }
      }

      function Hp(e, t) {
        return vp(e) && "fixed" !== Pp(e).position ? t ? t(e) : e.offsetParent : null
      }

      function Bp(e, t) {
        const n = fp(e);
        if (!vp(e)) return n;
        let r = Hp(e, t);
        for (; r && bp(r) && "static" === Pp(r).position;) r = Hp(r, t);
        return r && ("html" === dp(r) || "body" === dp(r) && "static" === Pp(r).position && !wp(r)) ? n : r || function(e) {
          let t = Sp(e);
          for (; vp(t) && !_p(t);) {
            if (wp(t)) return t;
            t = Sp(t)
          }
          return null
        }(e) || n
      }
      const Fp = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            rect: t,
            offsetParent: n,
            strategy: r
          } = e;
          const o = vp(n),
            i = hp(n);
          if (n === i) return t;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            s = Bh(1);
          const l = Bh(0);
          if ((o || !o && "fixed" !== r) && (("body" !== dp(n) || yp(i)) && (a = Tp(n)), vp(n))) {
            const e = Dp(n);
            s = Lp(n), l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop
          }
          return {
            width: t.width * s.x,
            height: t.height * s.y,
            x: t.x * s.x - a.scrollLeft * s.x + l.x,
            y: t.y * s.y - a.scrollTop * s.y + l.y
          }
        },
        getDocumentElement: hp,
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
              let r = Cp(e, [], !1).filter((e => mp(e) && "body" !== dp(e))),
                o = null;
              const i = "fixed" === Pp(e).position;
              let a = i ? Sp(e) : e;
              for (; mp(a) && !_p(a);) {
                const t = Pp(a),
                  n = wp(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ["absolute", "fixed"].includes(o.position) || yp(a) && !n && Ip(e, a)) ? r = r.filter((e => e !== a)) : o = t, a = Sp(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            a = i[0],
            s = i.reduce(((e, n) => {
              const r = kp(t, n, o);
              return e.top = Ih(r.top, e.top), e.right = kh(r.right, e.right), e.bottom = kh(r.bottom, e.bottom), e.left = Ih(r.left, e.left), e
            }), kp(t, a, o));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
          }
        },
        getOffsetParent: Bp,
        getElementRects: async function(e) {
          let {
            reference: t,
            floating: n,
            strategy: r
          } = e;
          const o = this.getOffsetParent || Bp,
            i = this.getDimensions;
          return {
            reference: jp(t, await o(n), r),
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
          return Op(e)
        },
        getScale: Lp,
        isElement: mp,
        isRTL: function(e) {
          return "rtl" === Pp(e).direction
        }
      };
      const Up = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Fp,
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
              } = ep(c, r, l),
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
              } = ep(c, f, l))), n = -1)
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
        Vp = e => ({
          name: "arrow",
          options: e,
          fn(t) {
            const {
              element: n,
              padding: r
            } = "function" == typeof e ? e(t) : e;
            return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? np({
              element: n.current,
              padding: r
            }).fn(t) : {} : n ? np({
              element: n,
              padding: r
            }).fn(t) : {};
            var o
          }
        });
      var zp = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

      function Gp(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Gp(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Gp(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Kp(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function qp(e, t) {
        const n = Kp(e);
        return Math.round(t * n) / n
      }

      function Wp(e) {
        const t = s.useRef(e);
        return zp((() => {
          t.current = e
        })), t
      }
      var $p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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
        Xp = s.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, i.jsx)($p.svg, {
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
      Xp.displayName = "Arrow";
      var Yp = Xp;

      function Zp(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Qp(...e) {
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
      var Jp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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
        em = "Popper",
        [tm, nm] = function(e, t = []) {
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
          }, Qp(r, ...t)]
        }(em),
        [rm, om] = tm(em),
        im = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = s.useState(null);
          return (0, i.jsx)(rm, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      im.displayName = em;
      var am = "PopperAnchor",
        sm = s.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, a = om(am, n), l = s.useRef(null), c = Zp(t, l);
          return s.useEffect((() => {
            a.onAnchorChange(r?.current || l.current)
          })), r ? null : (0, i.jsx)(Jp.div, {
            ...o,
            ref: c
          })
        }));
      sm.displayName = am;
      var lm = "PopperContent",
        [cm, um] = tm(lm),
        dm = s.forwardRef(((e, t) => {
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
            ...g
          } = e, y = om(lm, n), [b, w] = s.useState(null), E = Zp(t, (e => w(e))), [_, P] = s.useState(null), T = Fd(_), S = T?.width ?? 0, x = T?.height ?? 0, C = r + ("center" !== a ? "-" + a : ""), O = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, N = Array.isArray(d) ? d : [d], L = N.length > 0, R = {
            padding: O,
            boundary: N.filter(mm),
            altBoundary: L
          }, {
            refs: M,
            floatingStyles: D,
            placement: A,
            isPositioned: k,
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
            Gp(h, r) || p(r);
            const [m, v] = s.useState(null), [g, y] = s.useState(null), b = s.useCallback((e => {
              e != P.current && (P.current = e, v(e))
            }), [v]), w = s.useCallback((e => {
              e !== T.current && (T.current = e, y(e))
            }), [y]), E = i || m, _ = a || g, P = s.useRef(null), T = s.useRef(null), S = s.useRef(d), x = Wp(c), C = Wp(o), O = s.useCallback((() => {
              if (!P.current || !T.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: h
              };
              C.current && (e.platform = C.current), Up(P.current, T.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                N.current && !Gp(S.current, t) && (S.current = t, Ms.flushSync((() => {
                  f(t)
                })))
              }))
            }), [h, t, n, C]);
            zp((() => {
              !1 === u && S.current.isPositioned && (S.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [u]);
            const N = s.useRef(!1);
            zp((() => (N.current = !0, () => {
              N.current = !1
            })), []), zp((() => {
              if (E && (P.current = E), _ && (T.current = _), E && _) {
                if (x.current) return x.current(E, _, O);
                O()
              }
            }), [E, _, O, x]);
            const L = s.useMemo((() => ({
                reference: P,
                floating: T,
                setReference: b,
                setFloating: w
              })), [b, w]),
              R = s.useMemo((() => ({
                reference: E,
                floating: _
              })), [E, _]),
              M = s.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!R.floating) return e;
                const t = qp(R.floating, d.x),
                  r = qp(R.floating, d.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Kp(R.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, l, R.floating, d.x, d.y]);
            return s.useMemo((() => ({
              ...d,
              update: O,
              refs: L,
              elements: R,
              floatingStyles: M
            })), [d, O, L, R, M])
          }({
            strategy: "fixed",
            placement: C,
            whileElementsMounted: (...e) => function(e, t, n, r) {
              void 0 === r && (r = {});
              const {
                ancestorScroll: o = !0,
                ancestorResize: i = !0,
                elementResize: a = "function" == typeof ResizeObserver,
                layoutShift: s = "function" == typeof IntersectionObserver,
                animationFrame: l = !1
              } = r, c = Np(e), u = o || i ? [...c ? Cp(c) : [], ...Cp(t)] : [];
              u.forEach((e => {
                o && e.addEventListener("scroll", n, {
                  passive: !0
                }), i && e.addEventListener("resize", n)
              }));
              const d = c && s ? function(e, t) {
                let n, r = null;
                const o = hp(e);

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
                    rootMargin: -Hh(u) + "px " + -Hh(o.clientWidth - (c + d)) + "px " + -Hh(o.clientHeight - (u + f)) + "px " + -Hh(c) + "px",
                    threshold: Ih(0, kh(1, l)) || 1
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
              let m = l ? Dp(e) : null;
              return l && function t() {
                const r = Dp(e);
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
              reference: y.anchor
            },
            middleware: [sp({
              mainAxis: o + x,
              alignmentAxis: l
            }), u && lp({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? cp() : void 0,
              ...R
            }), u && rp({
              ...R
            }), up({
              ...R,
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
            }), _ && Vp({
              element: _,
              padding: c
            }), vm({
              arrowWidth: S,
              arrowHeight: x
            }), p && ap({
              strategy: "referenceHidden",
              ...R
            })]
          }), [j, H] = gm(A), B = Ad(v);
          Bd((() => {
            k && B?.()
          }), [k, B]);
          const F = I.arrow?.x,
            U = I.arrow?.y,
            V = 0 !== I.arrow?.centerOffset,
            [z, G] = s.useState();
          return Bd((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, i.jsx)("div", {
            ref: M.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: k ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: z,
              "--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
              ...I.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(cm, {
              scope: n,
              placedSide: j,
              onArrowChange: P,
              arrowX: F,
              arrowY: U,
              shouldHideArrow: V,
              children: (0, i.jsx)(Jp.div, {
                "data-side": j,
                "data-align": H,
                ...g,
                ref: E,
                style: {
                  ...g.style,
                  animation: k ? void 0 : "none"
                }
              })
            })
          })
        }));
      dm.displayName = lm;
      var fm = "PopperArrow",
        hm = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        pm = s.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = um(fm, n), a = hm[o.placedSide];
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
            children: (0, i.jsx)(Yp, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function mm(e) {
        return null !== e
      }
      pm.displayName = fm;
      var vm = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, c] = gm(n), u = {
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

      function gm(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var ym = im,
        bm = sm,
        wm = dm,
        Em = pm,
        _m = s.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, a] = s.useState(!1);
          Bd((() => a(!0)), []);
          const l = n || o && globalThis?.document?.body;
          return l ? Ms.createPortal((0, i.jsx)(Ph.div, {
            ...r,
            ref: t
          }), l) : null
        }));
      _m.displayName = "Portal";
      var Pm = e => {
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
            const e = Tm(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Bd((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Tm(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Bd((() => {
            if (t) {
              const e = e => {
                  const n = Tm(r.current).includes(e.animationName);
                  e.target === t && n && Ms.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = Tm(r.current))
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
        }) : s.Children.only(n), i = Eh(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Tm(e) {
        return e?.animationName || "none"
      }
      Pm.displayName = "Presence";
      var Sm = s.forwardRef(((e, t) => (0, i.jsx)(Ph.span, {
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
      Sm.displayName = "VisuallyHidden";
      var xm = Sm,
        [Cm, Om] = function(e, t = []) {
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
          }, _h(r, ...t)]
        }("Tooltip", [nm]),
        Nm = nm(),
        Lm = "TooltipProvider",
        Rm = 700,
        Mm = "tooltip.open",
        [Dm, Am] = Cm(Lm),
        km = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Rm,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, [l, c] = s.useState(!0), u = s.useRef(!1), d = s.useRef(0);
          return s.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(Dm, {
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
      km.displayName = Lm;
      var Im = "Tooltip",
        [jm, Hm] = Cm(Im),
        Bm = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: c
          } = e, u = Am(Im, e.__scopeTooltip), d = Nm(t), [f, h] = s.useState(null), p = Dh(), m = s.useRef(0), v = l ?? u.disableHoverableContent, g = c ?? u.delayDuration, y = s.useRef(!1), [b = !1, w] = kd({
            prop: r,
            defaultProp: o,
            onChange: e => {
              e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(Mm))) : u.onClose(), a?.(e)
            }
          }), E = s.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), _ = s.useCallback((() => {
            window.clearTimeout(m.current), y.current = !1, w(!0)
          }), [w]), P = s.useCallback((() => {
            window.clearTimeout(m.current), w(!1)
          }), [w]), T = s.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, w(!0)
            }), g)
          }), [g, w]);
          return s.useEffect((() => () => window.clearTimeout(m.current)), []), (0, i.jsx)(ym, {
            ...d,
            children: (0, i.jsx)(jm, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: E,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: s.useCallback((() => {
                u.isOpenDelayed ? T() : _()
              }), [u.isOpenDelayed, T, _]),
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
      Bm.displayName = Im;
      var Fm = "TooltipTrigger",
        Um = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Hm(Fm, n), a = Am(Fm, n), l = Nm(n), c = Eh(t, s.useRef(null), o.onTriggerChange), u = s.useRef(!1), d = s.useRef(!1), f = s.useCallback((() => u.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, i.jsx)(bm, {
            asChild: !0,
            ...l,
            children: (0, i.jsx)(Ph.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: c,
              onPointerMove: wh(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: wh(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: wh(e.onPointerDown, (() => {
                u.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: wh(e.onFocus, (() => {
                u.current || o.onOpen()
              })),
              onBlur: wh(e.onBlur, o.onClose),
              onClick: wh(e.onClick, o.onClose)
            })
          })
        }));
      Um.displayName = Fm;
      var Vm = "TooltipPortal",
        [zm, Gm] = Cm(Vm, {
          forceMount: void 0
        }),
        Km = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = Hm(Vm, t);
          return (0, i.jsx)(zm, {
            scope: t,
            forceMount: n,
            children: (0, i.jsx)(Pm, {
              present: n || a.open,
              children: (0, i.jsx)(_m, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Km.displayName = Vm;
      var qm = "TooltipContent",
        Wm = s.forwardRef(((e, t) => {
          const n = Gm(qm, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Hm(qm, e.__scopeTooltip);
          return (0, i.jsx)(Pm, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(Zm, {
              side: o,
              ...a,
              ref: t
            }) : (0, i.jsx)($m, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        $m = s.forwardRef(((e, t) => {
          const n = Hm(qm, e.__scopeTooltip),
            r = Am(qm, e.__scopeTooltip),
            o = s.useRef(null),
            a = Eh(t, o),
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
          }), [u, f, l, d, p]), (0, i.jsx)(Zm, {
            ...e,
            ref: a
          })
        })),
        [Xm, Ym] = Cm(Im, {
          isInside: !1
        }),
        Zm = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...c
          } = e, u = Hm(qm, n), d = Nm(n), {
            onClose: f
          } = u;
          return s.useEffect((() => (document.addEventListener(Mm, f), () => document.removeEventListener(Mm, f))), [f]), s.useEffect((() => {
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
          }), [u.trigger, f]), (0, i.jsx)(Oh, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(wm, {
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
              children: [(0, i.jsx)(Ud.xV, {
                children: r
              }), (0, i.jsx)(Xm, {
                scope: n,
                isInside: !0,
                children: (0, i.jsx)(xm, {
                  id: u.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      Wm.displayName = qm;
      var Qm = "TooltipArrow",
        Jm = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Nm(n);
          return Ym(Qm, n).isInside ? null : (0, i.jsx)(Em, {
            ...o,
            ...r,
            ref: t
          })
        }));
      Jm.displayName = Qm;
      var ev = km,
        tv = Bm,
        nv = Um,
        rv = Km,
        ov = Wm,
        iv = Jm;
      const av = ({
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
        const [P = !1, T] = (0, ht.ic)({
          defaultProp: m,
          prop: v,
          onChange: g
        }), S = (0, ht.ZC)(P), x = Ts({
          opacity: P ? 1 : 0,
          immediate: P && !S
        }), C = "left" === n || "right" === n ? "center" : o, O = b ? {
          container: E
        } : {}, N = b ? rv : s.Fragment, L = w ? {
          className: "foundry_h3lgaa2"
        } : {}, R = w ? iv : s.Fragment;
        return (0, i.jsx)(ev, {
          delayDuration: y,
          children: (0, i.jsxs)(tv, {
            open: P,
            onOpenChange: T,
            children: [(0, i.jsx)(nv, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, i.jsx)(N, {
              ...O,
              children: (0, i.jsx)(ov, {
                side: n,
                align: C,
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
                children: (0, i.jsxs)(bh.div, {
                  className: "foundry_h3lgaa0",
                  style: x,
                  children: [(0, i.jsx)(D, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, i.jsx)(R, {
                    ...L
                  })]
                })
              })
            })]
          })
        })
      };
      var sv = "foundry_bwy1ds1",
        lv = "foundry_bwy1dsg",
        cv = "foundry_bwy1dsf";
      const uv = e => {
          e.preventDefault?.()
        },
        dv = (0, s.forwardRef)((({
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
          const g = vd(),
            y = (0, ht.Ub)("screen and (max-width: 1024px)"),
            b = n !== p,
            w = y ? "SM" : "LG",
            E = Ts({
              opacity: b ? 1 : 0,
              immediate: (0, ht.jt)()
            });
          Zf(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), Zf(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), Zf("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const _ = (0, ht.rl)() && y;
          return (0, i.jsx)($f, {
            children: (0, i.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: v,
              children: [(0, i.jsx)(av, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: uv,
                content: (0, i.jsxs)("div", {
                  className: cv,
                  children: [g.formatMessage(Ef), (0, i.jsx)(F, {
                    className: lv,
                    children: g.formatMessage(_f, {
                      shortcut: (0, i.jsx)(ah, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, i.jsx)(ih, {
                  size: w,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: g.formatMessage(Ef),
                  className: (0, Ce.$)(sv, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!_ && m && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, i.jsx)(av, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: uv,
                      content: (0, i.jsxs)("div", {
                        className: cv,
                        children: [g.formatMessage(Pf), (0, i.jsx)(F, {
                          className: lv,
                          children: g.formatMessage(Tf, {
                            shortcut: (0, i.jsx)(ah, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(ih, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: g.formatMessage(Pf),
                        className: (0, Ce.$)(sv, "foundry_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !c
                      })
                    }), (0, i.jsxs)(gf, {
                      className: "foundry_bwy1dsa",
                      value: [n],
                      max: l,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, i.jsx)(yf, {
                        className: "foundry_bwy1dsb",
                        children: (0, i.jsx)(bf, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, i.jsx)(av, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: uv,
                        content: g.formatMessage(Lf, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, i.jsx)(wf, {
                          className: "foundry_bwy1dsd",
                          "aria-label": g.formatMessage(Nf),
                          children: (0, i.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, i.jsx)(av, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: uv,
                      content: (0, i.jsxs)("div", {
                        className: cv,
                        children: [g.formatMessage(Sf), (0, i.jsx)(F, {
                          className: lv,
                          children: g.formatMessage(xf, {
                            shortcut: (0, i.jsx)(ah, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(ih, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: g.formatMessage(Sf),
                        className: (0, Ce.$)(sv, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, i.jsx)(Ks.div, {
                    style: E,
                    children: (0, i.jsx)(av, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: uv,
                      content: (0, i.jsxs)("div", {
                        className: cv,
                        children: [g.formatMessage(Cf), (0, i.jsx)(F, {
                          className: lv,
                          children: g.formatMessage(Of, {
                            shortcut: (0, i.jsx)(ah, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(ih, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: g.formatMessage(Cf),
                        className: (0, Ce.$)(sv, "foundry_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), h && _ && (0, i.jsx)(av, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: uv,
                  content: g.formatMessage(Mf),
                  children: (0, i.jsx)(ih, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: g.formatMessage(Rf),
                    className: sv,
                    onPress: e
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, i.jsx)(x, {
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), h && !_ && (0, i.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, i.jsx)(av, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: uv,
                    content: g.formatMessage(Mf),
                    children: (0, i.jsx)(ih, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Download",
                      label: g.formatMessage(Rf),
                      className: sv,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var fv = "foundry_1a74xwb4";

      function hv(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function pv(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function mv(...e) {
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
      var vv, gv = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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
        yv = "dismissableLayer.update",
        bv = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        wv = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(bv), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = pv(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      _v("dismissableLayer.pointerDownOutside", n, i, {
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
          }), p), T = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && _v("dismissableLayer.focusOutside", n, {
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
          return Th((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (vv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Ev(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = vv)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Ev())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(yv, e), () => document.removeEventListener(yv, e)
          }), []), (0, i.jsx)(gv.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: hv(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: hv(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: hv(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function Ev() {
        const e = new CustomEvent(yv);
        document.dispatchEvent(e)
      }

      function _v(e, t, n, {
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
          e && Ms.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      wv.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(bv),
          r = s.useRef(null),
          o = pv(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(gv.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Pv = "focusScope.autoFocusOnMount",
        Tv = "focusScope.autoFocusOnUnmount",
        Sv = {
          bubbles: !1,
          cancelable: !0
        },
        xv = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [c, u] = s.useState(null), d = Ad(o), f = Ad(a), h = s.useRef(null), p = pv(t, (e => u(e))), m = s.useRef({
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
                  c.contains(t) ? h.current = t : Lv(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || Lv(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Lv(c)
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
              Rv.add(m);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(Pv, Sv);
                c.addEventListener(Pv, d), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Lv(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Cv(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Lv(c))
              }
              return () => {
                c.removeEventListener(Pv, d), setTimeout((() => {
                  const t = new CustomEvent(Tv, Sv);
                  c.addEventListener(Tv, f), c.dispatchEvent(t), t.defaultPrevented || Lv(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(Tv, f), Rv.remove(m)
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
                  const t = Cv(e);
                  return [Ov(t, e), Ov(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Lv(i, {
                select: !0
              })) : (e.preventDefault(), n && Lv(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)(gv.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function Cv(e) {
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

      function Ov(e, t) {
        for (const n of e)
          if (!Nv(n, {
              upTo: t
            })) return n
      }

      function Nv(e, {
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

      function Lv(e, {
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
      xv.displayName = "FocusScope";
      var Rv = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Mv(e, t), e.unshift(t)
          },
          remove(t) {
            e = Mv(e, t), e[0]?.resume()
          }
        }
      }();

      function Mv(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Dv = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Bd((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? Ms.createPortal((0, i.jsx)(gv.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      Dv.displayName = "Portal";
      var Av = e => {
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
            const e = kv(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Bd((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = kv(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Bd((() => {
            if (t) {
              const e = e => {
                  const n = kv(r.current).includes(e.animationName);
                  e.target === t && n && Ms.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = kv(r.current))
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
        }) : s.Children.only(n), i = pv(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function kv(e) {
        return e?.animationName || "none"
      }
      Av.displayName = "Presence";
      var Iv = 0;

      function jv() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Hv = "right-scroll-bar-position",
        Bv = "width-before-scroll-bar",
        Fv = n(37964),
        Uv = (0, n(81402).f)(),
        Vv = function() {},
        zv = s.forwardRef((function(e, t) {
          var n = s.useRef(null),
            r = s.useState({
              onScrollCapture: Vv,
              onWheelCapture: Vv,
              onTouchMoveCapture: Vv
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
            w = (0, il.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            E = h,
            _ = (0, Fv.S)([n, t]),
            P = (0, il.__assign)((0, il.__assign)({}, w), o);
          return s.createElement(s.Fragment, null, d && s.createElement(E, {
            sideCar: Uv,
            removeScrollBar: u,
            shards: f,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: b
          }), a ? s.cloneElement(s.Children.only(l), (0, il.__assign)((0, il.__assign)({}, P), {
            ref: _
          })) : s.createElement(y, (0, il.__assign)({}, P, {
            className: c,
            ref: _
          }), l))
        }));
      zv.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, zv.classNames = {
        fullWidth: Bv,
        zeroRight: Hv
      };
      var Gv = function(e) {
        var t = e.sideCar,
          n = (0, il.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return s.createElement(r, (0, il.__assign)({}, n))
      };
      Gv.isSideCarExport = !0;
      var Kv = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var o, i;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (i = r, (o = t).styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        qv = function() {
          var e, t = (e = Kv(), function(t, n) {
            s.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        Wv = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        $v = function(e) {
          return parseInt(e || "", 10) || 0
        },
        Xv = qv(),
        Yv = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Hv, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Bv, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(Hv, " .").concat(Hv, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Bv, " .").concat(Bv, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        Zv = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = s.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Wv;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [$v(n), $v(r), $v(o)]
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
          return s.createElement(Xv, {
            styles: Yv(i, !t, o, n ? "" : "!important")
          })
        },
        Qv = !1;
      if ("undefined" != typeof window) try {
        var Jv = Object.defineProperty({}, "passive", {
          get: function() {
            return Qv = !0, !0
          }
        });
        window.addEventListener("test", Jv, Jv), window.removeEventListener("test", Jv, Jv)
      } catch (e) {
        Qv = !1
      }
      var eg = !!Qv && {
          passive: !1
        },
        tg = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        ng = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), rg(e, r)) {
              var o = og(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        rg = function(e, t) {
          return "v" === e ? function(e) {
            return tg(e, "overflowY")
          }(t) : function(e) {
            return tg(e, "overflowX")
          }(t)
        },
        og = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        ig = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        ag = function(e) {
          return [e.deltaX, e.deltaY]
        },
        sg = function(e) {
          return e && "current" in e ? e.current : e
        },
        lg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        cg = 0,
        ug = [];

      function dg(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const fg = (Uv.useMedium((function(e) {
        var t = s.useRef([]),
          n = s.useRef([0, 0]),
          r = s.useRef(),
          o = s.useState(cg++)[0],
          i = s.useState(qv)[0],
          a = s.useRef(e);
        s.useEffect((function() {
          a.current = e
        }), [e]), s.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, il.__spreadArray)([e.lockRef.current], (e.shards || []).map(sg), !0).filter(Boolean);
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
            var o, i = ig(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              c = "deltaY" in e ? e.deltaY : s[1] - i[1],
              u = e.target,
              d = Math.abs(l) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var f = ng(d, u);
            if (!f) return !0;
            if (f ? o = d : (o = "v" === d ? "h" : "v", f = ng(d, u)), !f) return !1;
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
                var h = og(e, s),
                  p = h[0],
                  m = h[1] - h[2] - i * p;
                (p || m) && rg(e, s) && (d += m, f += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (u && (o && Math.abs(d) < 1 || !o && a > d) || !u && (o && Math.abs(f) < 1 || !o && -a > f)) && (c = !0), c
            }(h, t, e, "h" === h ? l : c, !0)
          }), []),
          c = s.useCallback((function(e) {
            var n = e;
            if (ug.length && ug[ug.length - 1] === i) {
              var r = "deltaY" in n ? ag(n) : ig(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var s = (a.current.shards || []).map(sg).filter(Boolean).filter((function(e) {
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
              shadowParent: dg(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          d = s.useCallback((function(e) {
            n.current = ig(e), r.current = void 0
          }), []),
          f = s.useCallback((function(t) {
            u(t.type, ag(t), t.target, l(t, e.lockRef.current))
          }), []),
          h = s.useCallback((function(t) {
            u(t.type, ig(t), t.target, l(t, e.lockRef.current))
          }), []);
        s.useEffect((function() {
          return ug.push(i), e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", c, eg), document.addEventListener("touchmove", c, eg), document.addEventListener("touchstart", d, eg),
            function() {
              ug = ug.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", c, eg), document.removeEventListener("touchmove", c, eg), document.removeEventListener("touchstart", d, eg)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return s.createElement(s.Fragment, null, m ? s.createElement(i, {
          styles: lg(o)
        }) : null, p ? s.createElement(Zv, {
          gapMode: e.gapMode
        }) : null)
      })), Gv);
      var hg = s.forwardRef((function(e, t) {
        return s.createElement(zv, (0, il.__assign)({}, e, {
          ref: t,
          sideCar: fg
        }))
      }));
      hg.classNames = zv.classNames;
      const pg = hg;
      var mg = new WeakMap,
        vg = new WeakMap,
        gg = {},
        yg = 0,
        bg = function(e) {
          return e && (e.host || bg(e.parentNode))
        },
        wg = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = bg(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            gg[n] || (gg[n] = new WeakMap);
            var i = gg[n],
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
                    l = (mg.get(e) || 0) + 1,
                    c = (i.get(e) || 0) + 1;
                  mg.set(e, l), i.set(e, c), a.push(e), 1 === l && o && vg.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return u(t), s.clear(), yg++,
              function() {
                a.forEach((function(e) {
                  var t = mg.get(e) - 1,
                    o = i.get(e) - 1;
                  mg.set(e, t), i.set(e, o), t || (vg.has(e) || e.removeAttribute(r), vg.delete(e)), o || e.removeAttribute(n)
                })), --yg || (mg = new WeakMap, mg = new WeakMap, vg = new WeakMap, gg = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Eg = "Dialog",
        [_g, Pg] = function(e, t = []) {
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
          }, mv(r, ...t)]
        }(Eg),
        [Tg, Sg] = _g(Eg),
        xg = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: l = !0
          } = e, c = s.useRef(null), u = s.useRef(null), [d = !1, f] = kd({
            prop: r,
            defaultProp: o,
            onChange: a
          });
          return (0, i.jsx)(Tg, {
            scope: t,
            triggerRef: c,
            contentRef: u,
            contentId: Dh(),
            titleId: Dh(),
            descriptionId: Dh(),
            open: d,
            onOpenChange: f,
            onOpenToggle: s.useCallback((() => f((e => !e))), [f]),
            modal: l,
            children: n
          })
        };
      xg.displayName = Eg;
      var Cg = "DialogTrigger",
        Og = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Sg(Cg, n), a = pv(t, o.triggerRef);
          return (0, i.jsx)(gv.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": qg(o.open),
            ...r,
            ref: a,
            onClick: hv(e.onClick, o.onOpenToggle)
          })
        }));
      Og.displayName = Cg;
      var Ng = "DialogPortal",
        [Lg, Rg] = _g(Ng, {
          forceMount: void 0
        }),
        Mg = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = Sg(Ng, t);
          return (0, i.jsx)(Lg, {
            scope: t,
            forceMount: n,
            children: s.Children.map(r, (e => (0, i.jsx)(Av, {
              present: n || a.open,
              children: (0, i.jsx)(Dv, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      Mg.displayName = Ng;
      var Dg = "DialogOverlay",
        Ag = s.forwardRef(((e, t) => {
          const n = Rg(Dg, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = Sg(Dg, e.__scopeDialog);
          return a.modal ? (0, i.jsx)(Av, {
            present: r || a.open,
            children: (0, i.jsx)(kg, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Ag.displayName = Dg;
      var kg = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Sg(Dg, n);
          return (0, i.jsx)(pg, {
            as: Ud.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, i.jsx)(gv.div, {
              "data-state": qg(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        Ig = "DialogContent",
        jg = s.forwardRef(((e, t) => {
          const n = Rg(Ig, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = Sg(Ig, e.__scopeDialog);
          return (0, i.jsx)(Av, {
            present: r || a.open,
            children: a.modal ? (0, i.jsx)(Hg, {
              ...o,
              ref: t
            }) : (0, i.jsx)(Bg, {
              ...o,
              ref: t
            })
          })
        }));
      jg.displayName = Ig;
      var Hg = s.forwardRef(((e, t) => {
          const n = Sg(Ig, e.__scopeDialog),
            r = s.useRef(null),
            o = pv(t, n.contentRef, r);
          return s.useEffect((() => {
            const e = r.current;
            if (e) return wg(e)
          }), []), (0, i.jsx)(Fg, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: hv(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: hv(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: hv(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Bg = s.forwardRef(((e, t) => {
          const n = Sg(Ig, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, i.jsx)(Fg, {
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
        Fg = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...l
          } = e, c = Sg(Ig, n), u = s.useRef(null), d = pv(t, u);
          return s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? jv()), document.body.insertAdjacentElement("beforeend", e[1] ?? jv()), Iv++, () => {
              1 === Iv && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), Iv--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(xv, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, i.jsx)(wv, {
                role: "dialog",
                id: c.contentId,
                "aria-describedby": c.descriptionId,
                "aria-labelledby": c.titleId,
                "data-state": qg(c.open),
                ...l,
                ref: d,
                onDismiss: () => c.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Yg, {
                titleId: c.titleId
              }), (0, i.jsx)(Zg, {
                contentRef: u,
                descriptionId: c.descriptionId
              })]
            })]
          })
        })),
        Ug = "DialogTitle",
        Vg = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Sg(Ug, n);
          return (0, i.jsx)(gv.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      Vg.displayName = Ug;
      var zg = "DialogDescription",
        Gg = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = Sg(zg, n);
          return (0, i.jsx)(gv.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      Gg.displayName = zg;
      var Kg = "DialogClose";

      function qg(e) {
        return e ? "open" : "closed"
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = Sg(Kg, n);
        return (0, i.jsx)(gv.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: hv(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Kg;
      var Wg = "DialogTitleWarning",
        [$g, Xg] = function(e, t) {
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
        }(Wg, {
          contentName: Ig,
          titleName: Ug,
          docsSlug: "dialog"
        }),
        Yg = ({
          titleId: e
        }) => {
          const t = Xg(Wg),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return s.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        Zg = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Xg("DialogDescriptionWarning").contentName}}.`;
          return s.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Qg = xg,
        Jg = Og,
        ey = Mg,
        ty = jg,
        ny = Vg,
        ry = Gg;
      const oy = Ks(Ag),
        iy = Ks(ty),
        ay = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        sy = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        ly = (0, a.AK)(.77, 0, .175, 1),
        cy = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: a,
          referrerPolicy: l,
          thumbnail: c,
          thumbnailAspectRatio: d,
          thumbnailPosition: f,
          thumbnailFit: h,
          reduceMotion: p = !1,
          defaultOpen: m,
          open: v,
          onOpenChange: g,
          showOpenButton: y,
          showDownloadButton: b,
          zoomLevel: w,
          defaultZoomLevel: E = 100,
          minZoomLevel: _ = 100,
          maxZoomLevel: P = 300,
          zoomLevelStep: T = 100,
          onZoomLevelChange: S,
          gestureSettings: x,
          testId: C,
          showZoomControls: O = !0,
          disableGesturesOn: N,
          asChild: L,
          children: R,
          className: M,
          usePortal: D = !0,
          enabled: A = !0
        }) => {
          const k = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            H = (0, s.useRef)(null),
            B = xs(),
            F = xs(),
            U = xs(),
            V = (0, s.useRef)(!1),
            z = vd(),
            G = (0, ht.Ub)("screen and (max-width: 1024px)"),
            K = (0, ht.rl)() && G,
            q = (0, ht.jt)(),
            W = "pointer-devices" !== N || K,
            [$, X] = (0, s.useState)(!0),
            [Y, Z] = (0, s.useState)(!1),
            [Q = !1, J] = (0, ht.ic)({
              prop: v,
              defaultProp: m,
              onChange: g
            }),
            [ee, te] = (0, s.useState)(!1),
            [re, oe] = (0, s.useState)(null),
            ie = (0, s.useDeferredValue)(ee),
            ae = p || q || m && !V.current;
          (0, s.useEffect)((() => {
            o?.()
          }), []), (0, s.useEffect)((() => {
            (m || v) && te(Q)
          }), []), (0, ht.qn)((() => {
            ee !== ie && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = j.current.getBoundingClientRect(),
                o = j.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                c = o?.naturalWidth ?? r.width,
                u = o?.naturalHeight ?? r.height,
                d = c / window.innerWidth,
                p = c / d,
                m = u / d,
                v = window.innerHeight * p / m,
                g = window.innerWidth * m / p,
                y = m >= window.innerHeight ? "horizontal" : "vertical",
                b = ((e, t = 0) => Number.isNaN(e) ? t : e)("horizontal" === y ? (window.innerWidth - window.innerHeight * p / m) / 2 : (window.innerHeight - window.innerWidth * m / p) / 2, 0);
              e ? U.start({
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
                    objectPosition: f || s
                  }), await e({
                    immediate: !0,
                    opacity: 1
                  }), j.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${g}px`,
                    width: "horizontal" === y ? `${v}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: E / 100,
                    immediate: ae,
                    config: {
                      duration: 550,
                      easing: ly
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
                  }), "vertical" === y ? k.current?.style.setProperty("width", "100%") : "horizontal" === y && k.current?.style.setProperty("height", "100%"), t?.()
                }
              }) : U.start({
                to: async e => {
                  await e({
                    immediate: !0,
                    opacity: 1,
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${g}px`,
                    width: "horizontal" === y ? `${v}px` : `${window.innerWidth}px`,
                    x: me.position[0] + ("horizontal" === y ? b : 0),
                    y: me.position[1] + ("horizontal" === y ? 0 : b),
                    scale: me.zoomLevel / 100,
                    objectFit: h || a,
                    objectPosition: f || s
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
                      easing: ly
                    }
                  }), j.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), V.current = !0)
          }), [ee]), (0, ht.qn)((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = j.current.querySelector("img");
              if (H.current) {
                let t = ay;
                e?.currentSrc && (t = e?.currentSrc), H.current.src = t, await be(H.current)
              }
            }())).then((() => be(H.current))).then((() => te(Q))) : te(!1)
          }), [Q]);
          const se = () => {
              te(!1)
            },
            {
              loaded: le,
              eventHandlers: ce
            } = (0, ht.gr)({
              enabled: ie
            }),
            {
              isHovered: ue
            } = (0, ht.Mk)({
              ref: I,
              enabled: ie
            }),
            {
              isFocused: de
            } = (0, ht.iQ)({
              ref: I,
              enabled: ie
            }),
            {
              isIdle: fe
            } = (0, ht.UQ)({
              leave: 300,
              activity: 3e3,
              enabled: ie && !ue && !de && !K
            }),
            he = function(e, t, n) {
              const r = So.fun(t) && t,
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
                h = (0, s.useMemo)((() => r || 3 == arguments.length ? Ps() : void 0), []),
                p = No(e),
                m = [],
                v = (0, s.useRef)(null),
                g = o ? null : v.current;
              Wi((() => {
                v.current = m
              })), Yi((() => (Co(m, (e => {
                h?.add(e.ctrl), e.ctrl.ref = h
              })), () => {
                Co(v.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Oa(e.ctrl, h), e.ctrl.stop(!0)
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
                      return n ? (t.add(n), n.key) : Cs++
                    }))
                  }
                  return So.und(n) ? e : So.fun(n) ? e.map(n) : No(n)
                }(p, r ? r() : t, g),
                b = o && v.current || [];
              Wi((() => Co(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Oa(e, h), va(u, t, n)
              }))));
              const w = [];
              if (g && Co(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = y.indexOf(e.key)) && (m[t] = e)
                })), Co(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new ds
                  }, m[t].ctrl.item = e)
                })), w.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                Co(w, ((t, r) => {
                  const o = g[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              So.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let E = -a;
              const _ = Xi(),
                P = Ea(t),
                T = new Map,
                S = (0, s.useRef)(new Map),
                x = (0, s.useRef)(!1);
              Co(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  s = r ? r() : t;
                let u, h;
                const p = va(s.delay || 0, o);
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
                if (u = va(u, e.item, n), u = So.obj(u) ? Ta(u) : {
                    to: u
                  }, !u.config) {
                  const t = f || P.config;
                  u.config = va(t, e.item, n, h)
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
                if ("enter" == h && So.und(m.from)) {
                  const o = r ? r() : t,
                    i = So.und(o.initial) || g ? o.from : o.initial;
                  m.from = va(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  va(b, e);
                  const t = v.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = va(l, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), c && (x.current = !0), _())
                  }
                };
                const w = ps(e.ctrl, m);
                "leave" === h && c ? S.current.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                }) : T.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                })
              }));
              const C = (0, s.useContext)(Es),
                O = Qi(C),
                N = C !== O && xa(C);
              Wi((() => {
                N && Co(m, (e => {
                  e.ctrl.start({
                    default: C
                  })
                }))
              }), [C]), Co(T, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), Wi((() => {
                Co(S.current.size ? S.current : T, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, h?.add(r), N && "enter" == e && r.start({
                    default: C
                  }), t && (Na(r, t.ref), !r.ref && !h || x.current ? (r.start(t), x.current && (x.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const L = e => s.createElement(s.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = T.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? s.createElement(o.type, {
                  ...o.props,
                  key: So.str(t.key) || So.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return h ? [L, h] : L
            }(ie, {
              ref: B,
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
            [pe] = Ts((() => ({
              ref: F,
              opacity: ie && !fe && le && $ ? 1 : 0,
              immediate: ae
            })), [ie, fe, le, $]),
            me = (({
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
              gestureSettings: p = Js,
              enabled: m
            }) => {
              const v = (0, ht.jt)(),
                [g = t, y] = (0, ht.ic)({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = l, w] = (0, ht.ic)({
                  prop: a,
                  defaultProp: l,
                  onChange: c
                }),
                E = (0, s.useRef)(null),
                _ = (0, s.useRef)(null),
                [P, T] = (0, s.useState)(!1),
                S = b > r,
                x = b < o,
                C = b > r,
                O = b === r,
                [N, L] = Ts((() => ({
                  x: g[0],
                  y: g[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: v,
                  config: Zs
                }))),
                R = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (E.current && _.current) {
                    n || (n = [_.current.clientWidth / 2, _.current.clientHeight / 2]);
                    const s = Ys(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || Zs,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: v
                    };
                    if (s <= r) y(t);
                    else {
                      const e = Xs(E.current, _.current, (({
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
                    l.scale = s / 100, L(l), w(s)
                  }
                },
                M = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: D
                } = (0, ht.Rv)({
                  onDoubleClick: e => {
                    if (E.current) {
                      const t = Ws(E.current),
                        n = M(e, t) ? "overlay" : "content";
                      h?.({
                        target: n,
                        origin: [e.clientX, e.clientY],
                        contentBounds: t
                      })
                    }
                  },
                  onSingleClick: e => {
                    if (E.current && 0 === e.button) {
                      const t = Ws(E.current),
                        n = M(e, t) ? "overlay" : "content";
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
                  R(b + i, e)
                },
                zoomOut: e => {
                  R(b - i, e)
                },
                zoomTo: R,
                resetZoom: () => {
                  y(t), w(l);
                  const e = {
                    config: Qs,
                    x: t[0],
                    y: t[1],
                    scale: l / 100,
                    immediate: v
                  };
                  L(e)
                },
                canZoomIn: x,
                canZoomOut: C,
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
                    if (s) return void D(c);
                    if (o && i && !P && T(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return g;
                    const {
                      horizontalOffset: u,
                      verticalOffset: f
                    } = Xs(E.current, _.current, g, b), h = o * p.dragFactor, m = i * p.dragFactor, w = {
                      config: Zs,
                      x: t[0],
                      y: t[1],
                      immediate: v
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = $s(e, E.current),
                        r = Ys(100 * Math.abs(t) / p.closePc, 0, 100);
                      w.config = Qs, w.x = e[0], w.y = e[1], y(e), d?.(r)
                    } else {
                      const e = [qs(n[0] + h, -u, u), qs(n[1] + m, -f, f)];
                      w.x = e[0], w.y = e[1], y(e)
                    }
                    return L(w), n
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (_.current && E.current)
                      if (b === r) {
                        const {
                          y: e
                        } = $s(g, E.current);
                        if (Ys(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) u?.();
                        else {
                          const e = {
                            config: Qs,
                            x: t[0],
                            y: t[1],
                            immediate: v
                          };
                          L(e), y(t), d?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = Xs(E.current, _.current, g, b),
                        t = {
                          config: Zs,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: v
                        };
                      L(t), T(!1), y(e.xy)
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
                      if (i && T(!0), t) return void e();
                      R(100 * n, {
                        origin: [r, o],
                        delta: n - b / 100
                      })
                    }
                  },
                  onPinchEnd: () => {
                    _.current && E.current && T(!1)
                  },
                  onWheel: ({
                    last: e,
                    event: t,
                    movement: n
                  }) => {
                    if (E.current && _.current) {
                      const r = -1 * n[1];
                      if (r && P && T(!0), e) return;
                      const o = [t.clientX, t.clientY],
                        i = b / 100,
                        a = i + r / p.scrollFactor;
                      R(100 * a, {
                        delta: a - i,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    _.current && E.current && T(!1)
                  }
                },
                getCursor: () => O && !m ? "zoom-out" : O && x ? "zoom-in" : S ? P ? "grabbing" : "grab" : "pointer",
                enabled: m,
                animation: N
              }
            })({
              enabled: W && ie,
              onClick: function() {
                G ? X(!$) : se()
              },
              onDoubleClick: function(e) {
                if (K && me.containerRef.current && "content" === e.target)
                  if (me.zoomLevel > me.minZoomLevel) me.resetZoom();
                  else {
                    const t = ((e, t, n) => {
                      const r = e.height / (n / 100);
                      return 100 * t.height / r
                    })(e.contentBounds, me.containerRef.current.getBoundingClientRect(), me.zoomLevel);
                    me.zoomTo(t, {
                      animationConfig: Qs
                    })
                  }
              },
              onRequestedClose: se,
              onRequestingClose: e => {
                if (ee) {
                  const t = 1,
                    n = .25,
                    r = Ys(t - e * (t - n) / 100, n, t);
                  B.start({
                    opacity: r
                  });
                  const o = Ys(1 - e / 100, 0, 1);
                  F.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: w,
              defaultZoomLevel: E,
              minZoomLevel: _,
              maxZoomLevel: P,
              zoomLevelStep: T,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: x
            }),
            ve = Ts({
              ref: U,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: d,
                position: "fixed",
                objectFit: h,
                objectPosition: f,
                opacity: 0
              },
              onStart: () => {
                ie || Z(!1)
              },
              onRest: async () => {
                ie ? Z(!0) : (me.resetZoom(), X(!0))
              }
            }),
            ge = Ts({
              opacity: ie && le && Y ? 1 : 0,
              immediate: !0,
              onRest: () => {
                ie && ee && le && U.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ye = [
              [U, B, F],
              [0, 0, .1]
            ];
          async function be(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            Wi((() => {
              if (t) {
                let r = 0;
                Co(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, Co(i, (e => {
                      Co(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + va(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Co(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Co(n, ((e, t) => Co(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(ie ? ye[0] : ye[0].reverse(), ye[1]);
          const we = L ? (0, i.jsx)(u.DX, {
            className: fv,
            ref: null,
            children: R
          }) : (0, i.jsx)("img", {
            alt: "",
            src: c,
            "aria-hidden": !0,
            loading: a,
            className: fv,
            crossOrigin: r,
            referrerPolicy: l
          });
          (0, s.useEffect)((() => {
            X(!K)
          }), [K]);
          const {
            contrastMode: Ee
          } = (0, Wn.DP)(), _e = ((e, t) => [Cd.xW.tokens, Od("dark", t)].join(" "))(0, Ee);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(Qg, {
              open: Q,
              children: (0, i.jsxs)("div", {
                className: (0, Ce.A)("foundry_1a74xwb0", M),
                children: [(0, i.jsx)(Jg, {
                  asChild: !0,
                  children: (0, i.jsxs)(Ks.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      A && J(!Q)
                    },
                    ref: j,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: d,
                      objectPosition: f,
                      objectFit: h
                    },
                    children: [(0, i.jsx)(u.s6, {
                      children: z.formatMessage(Pd)
                    }), we, he(((e, t) => y && !t && (0, i.jsx)(Ks.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, i.jsx)(ne.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, i.jsxs)(ey, {
                  ...!D && {
                    container: re
                  },
                  children: [(0, i.jsx)(Ks.img, {
                    "aria-hidden": !0,
                    src: ay,
                    ref: H,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: d,
                      backgroundPosition: f,
                      backgroundSize: h,
                      ...ve
                    }
                  }), he(((o, s) => s && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(oy, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, i.jsxs)(iy, {
                      "data-testid": C,
                      onEscapeKeyDown: se,
                      onOpenAutoFocus: sy,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, j),
                      className: _e,
                      children: [(0, i.jsx)(u.s6, {
                        children: (0, i.jsx)(ny, {
                          children: z.formatMessage(Td)
                        })
                      }), (0, i.jsx)(u.s6, {
                        children: (0, i.jsx)(ry, {
                          children: n || z.formatMessage(Sd, {
                            alt: t
                          })
                        })
                      }), (0, i.jsx)(Ks.div, {
                        className: "foundry_1a74xwb6",
                        style: ge,
                        children: (0, i.jsx)(el, {
                          ...me,
                          children: (0, i.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: k,
                            loading: a,
                            className: "foundry_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: l,
                            style: {
                              cursor: me.getCursor()
                            },
                            ...ce
                          })
                        })
                      }), (0, i.jsx)(Ks.div, {
                        className: "foundry_1a74xwb9",
                        style: pe,
                        children: (0, i.jsx)(dv, {
                          ...me,
                          ref: I,
                          onClose: se,
                          caption: n,
                          onDownload: () => (e => {
                            const t = document.createElement("a");
                            t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                          })(e),
                          showDownloadButton: b,
                          showZoomControls: O
                        })
                      })]
                    })]
                  })))]
                })]
              })
            }), !D && (0, i.jsx)("div", {
              ref: oe
            })]
          })
        },
        uy = e => {
          const t = (0, Wn.Ym)();
          return (0, i.jsx)(_d, {
            messages: xd,
            locale: t,
            children: (0, i.jsx)(cy, {
              ...e
            })
          })
        };

      function dy(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function fy(e, t = []) {
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
        }, hy(r, ...t)]
      }

      function hy(...e) {
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

      function py(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var my, vy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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
        gy = "dismissableLayer.update",
        yy = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        by = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: c,
            ...u
          } = e, d = s.useContext(yy), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = py(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Ey("dismissableLayer.pointerDownOutside", n, i, {
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
          }), p), T = function(e, t = globalThis?.document) {
            const n = Ad(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && Ey("dismissableLayer.focusOutside", n, {
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
          return Th((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (my = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), wy(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = my)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), wy())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(gy, e), () => document.removeEventListener(gy, e)
          }), []), (0, i.jsx)(vy.div, {
            ...u,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: dy(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: dy(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: dy(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function wy() {
        const e = new CustomEvent(gy);
        document.dispatchEvent(e)
      }

      function Ey(e, t, n, {
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
          e && Ms.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      by.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(yy),
          r = s.useRef(null),
          o = py(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(vy.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var _y = 0;

      function Py() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Ty = "focusScope.autoFocusOnMount",
        Sy = "focusScope.autoFocusOnUnmount",
        xy = {
          bubbles: !1,
          cancelable: !0
        },
        Cy = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [c, u] = s.useState(null), d = Ad(o), f = Ad(a), h = s.useRef(null), p = py(t, (e => u(e))), m = s.useRef({
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
                  c.contains(t) ? h.current = t : Ry(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !c) return;
                  const t = e.relatedTarget;
                  null !== t && (c.contains(t) || Ry(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && Ry(c)
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
              My.add(m);
              const e = document.activeElement;
              if (!c.contains(e)) {
                const t = new CustomEvent(Ty, xy);
                c.addEventListener(Ty, d), c.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (Ry(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(Oy(c).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && Ry(c))
              }
              return () => {
                c.removeEventListener(Ty, d), setTimeout((() => {
                  const t = new CustomEvent(Sy, xy);
                  c.addEventListener(Sy, f), c.dispatchEvent(t), t.defaultPrevented || Ry(e ?? document.body, {
                    select: !0
                  }), c.removeEventListener(Sy, f), My.remove(m)
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
                  const t = Oy(e);
                  return [Ny(t, e), Ny(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && Ry(i, {
                select: !0
              })) : (e.preventDefault(), n && Ry(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)(vy.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function Oy(e) {
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

      function Ny(e, t) {
        for (const n of e)
          if (!Ly(n, {
              upTo: t
            })) return n
      }

      function Ly(e, {
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

      function Ry(e, {
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
      Cy.displayName = "FocusScope";
      var My = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = Dy(e, t), e.unshift(t)
          },
          remove(t) {
            e = Dy(e, t), e[0]?.resume()
          }
        }
      }();

      function Dy(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var Ay = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Bd((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? Ms.createPortal((0, i.jsx)(vy.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      Ay.displayName = "Portal";
      var ky = s.forwardRef(((e, t) => (0, i.jsx)(vy.span, {
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
      ky.displayName = "VisuallyHidden";
      var Iy = [" ", "Enter", "ArrowUp", "ArrowDown"],
        jy = [" ", "Enter"],
        Hy = "Select",
        [By, Fy, Uy] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = fy(t),
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
              } = e, o = py(t, a(c, n).collectionRef);
              return (0, i.jsx)(Ud.DX, {
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
              } = e, l = s.useRef(null), c = py(t, l), u = a(d, n);
              return s.useEffect((() => (u.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                u.itemMap.delete(l)
              }))), (0, i.jsx)(Ud.DX, {
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
        }(Hy),
        [Vy, zy] = fy(Hy, [Uy, nm]),
        Gy = nm(),
        [Ky, qy] = Vy(Hy),
        [Wy, $y] = Vy(Hy),
        Xy = e => {
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
          } = e, v = Gy(t), [g, y] = s.useState(null), [b, w] = s.useState(null), [E, _] = s.useState(!1), P = jd(d), [T = !1, S] = kd({
            prop: r,
            defaultProp: o,
            onChange: a
          }), [x, C] = kd({
            prop: l,
            defaultProp: c,
            onChange: u
          }), O = s.useRef(null), N = !g || Boolean(g.closest("form")), [L, R] = s.useState(new Set), M = Array.from(L).map((e => e.props.value)).join(";");
          return (0, i.jsx)(ym, {
            ...v,
            children: (0, i.jsxs)(Ky, {
              required: m,
              scope: t,
              trigger: g,
              onTriggerChange: y,
              valueNode: b,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: _,
              contentId: Dh(),
              value: x,
              onValueChange: C,
              open: T,
              onOpenChange: S,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: p,
              children: [(0, i.jsx)(By.Provider, {
                scope: t,
                children: (0, i.jsx)(Wy, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    R((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    R((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), N ? (0, i.jsxs)(Lb, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: f,
                autoComplete: h,
                value: x,
                onChange: e => C(e.target.value),
                disabled: p,
                children: [void 0 === x ? (0, i.jsx)("option", {
                  value: ""
                }) : null, Array.from(L)]
              }, M) : null]
            })
          })
        };
      Xy.displayName = Hy;
      var Yy = "SelectTrigger",
        Zy = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, a = Gy(n), s = qy(Yy, n), l = s.disabled || r, c = py(t, s.onTriggerChange), u = Fy(n), [d, f, h] = Rb((e => {
            const t = u().filter((e => !e.disabled)),
              n = t.find((e => e.value === s.value)),
              r = Mb(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          })), p = () => {
            l || (s.onOpenChange(!0), h())
          };
          return (0, i.jsx)(bm, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(vy.button, {
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
              "data-placeholder": Nb(s.value) ? "" : void 0,
              ...o,
              ref: c,
              onClick: dy(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: dy(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (p(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: dy(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || Iy.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      Zy.displayName = Yy;
      var Qy = "SelectValue",
        Jy = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...l
          } = e, c = qy(Qy, n), {
            onValueNodeHasChildrenChange: u
          } = c, d = void 0 !== a, f = py(t, c.onValueNodeChange);
          return Bd((() => {
            u(d)
          }), [u, d]), (0, i.jsx)(vy.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: Nb(c.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Jy.displayName = Qy;
      var eb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)(vy.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      eb.displayName = "SelectIcon";
      var tb = e => (0, i.jsx)(Ay, {
        asChild: !0,
        ...e
      });
      tb.displayName = "SelectPortal";
      var nb = "SelectContent",
        rb = s.forwardRef(((e, t) => {
          const n = qy(nb, e.__scopeSelect),
            [r, o] = s.useState();
          if (Bd((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Ms.createPortal((0, i.jsx)(ib, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(By.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, i.jsx)(sb, {
            ...e,
            ref: t
          })
        }));
      rb.displayName = nb;
      var ob = 10,
        [ib, ab] = Vy(nb),
        sb = s.forwardRef(((e, t) => {
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
          } = e, w = qy(nb, n), [E, _] = s.useState(null), [P, T] = s.useState(null), S = py(t, (e => _(e))), [x, C] = s.useState(null), [O, N] = s.useState(null), L = Fy(n), [R, M] = s.useState(!1), D = s.useRef(!1);
          s.useEffect((() => {
            if (E) return wg(E)
          }), [E]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? Py()), document.body.insertAdjacentElement("beforeend", e[1] ?? Py()), _y++, () => {
              1 === _y && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), _y--
            }
          }), []);
          const A = s.useCallback((e => {
              const [t, ...n] = L().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && P && (P.scrollTop = 0), n === r && P && (P.scrollTop = P.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [L, P]),
            k = s.useCallback((() => A([x, E])), [A, x, E]);
          s.useEffect((() => {
            R && k()
          }), [R, k]);
          const {
            onOpenChange: I,
            triggerPointerDownPosRef: j
          } = w;
          s.useEffect((() => {
            if (E) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (j.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (j.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : E.contains(n.target) || I(!1), document.removeEventListener("pointermove", t), j.current = null
                };
              return null !== j.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [E, I, j]), s.useEffect((() => {
            const e = () => I(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [I]);
          const [H, B] = Rb((e => {
            const t = L().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = Mb(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = s.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && (C(e), r && (D.current = !0))
          }), [w.value]), U = s.useCallback((() => E?.focus()), [E]), V = s.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && N(e)
          }), [w.value]), z = "popper" === r ? cb : lb, G = z === cb ? {
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
          return (0, i.jsx)(ib, {
            scope: n,
            content: E,
            viewport: P,
            onViewportChange: T,
            itemRefCallback: F,
            selectedItem: x,
            onItemLeave: U,
            itemTextRefCallback: V,
            focusSelectedItem: k,
            selectedItemText: O,
            position: r,
            isPositioned: R,
            searchRef: H,
            children: (0, i.jsx)(pg, {
              as: Ud.DX,
              allowPinchZoom: !0,
              children: (0, i.jsx)(Cy, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: dy(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(by, {
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
                    onPlaced: () => M(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: dy(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = L().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => A(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      sb.displayName = "SelectContentImpl";
      var lb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, a = qy(nb, n), l = ab(nb, n), [c, u] = s.useState(null), [d, f] = s.useState(null), h = py(t, (e => f(e))), p = Fy(n), m = s.useRef(!1), v = s.useRef(!0), {
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
                u = window.innerWidth - ob,
                d = Nd(i, [ob, u - l]);
              c.style.minWidth = s + "px", c.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                u = window.innerWidth - ob,
                d = Nd(i, [ob, u - l]);
              c.style.minWidth = s + "px", c.style.right = d + "px"
            }
            const i = p(),
              s = window.innerHeight - 2 * ob,
              l = g.scrollHeight,
              u = window.getComputedStyle(d),
              f = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              v = parseInt(u.borderBottomWidth, 10),
              w = f + h + l + parseInt(u.paddingBottom, 10) + v,
              E = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(g),
              P = parseInt(_.paddingTop, 10),
              T = parseInt(_.paddingBottom, 10),
              S = e.top + e.height / 2 - ob,
              x = s - S,
              C = y.offsetHeight / 2,
              O = f + h + (y.offsetTop + C),
              N = w - O;
            if (O <= S) {
              const e = y === i[i.length - 1].ref.current;
              c.style.bottom = "0px";
              const t = d.clientHeight - g.offsetTop - g.offsetHeight,
                n = O + Math.max(x, C + (e ? T : 0) + t + v);
              c.style.height = n + "px"
            } else {
              const e = y === i[0].ref.current;
              c.style.top = "0px";
              const t = Math.max(S, f + g.offsetTop + (e ? P : 0) + C) + N;
              c.style.height = t + "px", g.scrollTop = O - S + g.offsetTop
            }
            c.style.margin = `${ob}px 0`, c.style.minHeight = E + "px", c.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, a.trigger, a.valueNode, c, d, g, y, b, a.dir, r]);
        Bd((() => E()), [E]);
        const [_, P] = s.useState();
        Bd((() => {
          d && P(window.getComputedStyle(d).zIndex)
        }), [d]);
        const T = s.useCallback((e => {
          e && !0 === v.current && (E(), w?.(), v.current = !1)
        }), [E, w]);
        return (0, i.jsx)(ub, {
          scope: n,
          contentWrapper: c,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: T,
          children: (0, i.jsx)("div", {
            ref: u,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, i.jsx)(vy.div, {
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
      lb.displayName = "SelectItemAlignedPosition";
      var cb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = ob,
          ...a
        } = e, s = Gy(n);
        return (0, i.jsx)(wm, {
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
      cb.displayName = "SelectPopperPosition";
      var [ub, db] = Vy(nb, {}), fb = "SelectViewport", hb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, a = ab(fb, n), l = db(fb, n), c = py(t, a.onViewportChange), u = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(By.Slot, {
            scope: n,
            children: (0, i.jsx)(vy.div, {
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
              onScroll: dy(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(u.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * ob,
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
      hb.displayName = fb;
      var pb = "SelectGroup",
        [mb, vb] = Vy(pb);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Dh();
        return (0, i.jsx)(mb, {
          scope: n,
          id: o,
          children: (0, i.jsx)(vy.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = pb;
      var gb = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = vb(gb, n);
        return (0, i.jsx)(vy.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = gb;
      var yb = "SelectItem",
        [bb, wb] = Vy(yb),
        Eb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...l
          } = e, c = qy(yb, n), u = ab(yb, n), d = c.value === r, [f, h] = s.useState(a ?? ""), [p, m] = s.useState(!1), v = py(t, (e => u.itemRefCallback?.(e, r, o))), g = Dh(), y = () => {
            o || (c.onValueChange(r), c.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(bb, {
            scope: n,
            value: r,
            disabled: o,
            textId: g,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(By.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(vy.div, {
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
                onFocus: dy(l.onFocus, (() => m(!0))),
                onBlur: dy(l.onBlur, (() => m(!1))),
                onPointerUp: dy(l.onPointerUp, y),
                onPointerMove: dy(l.onPointerMove, (e => {
                  o ? u.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: dy(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && u.onItemLeave?.()
                })),
                onKeyDown: dy(l.onKeyDown, (e => {
                  "" !== u.searchRef?.current && " " === e.key || (jy.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Eb.displayName = yb;
      var _b = "SelectItemText",
        Pb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...a
          } = e, l = qy(_b, n), c = ab(_b, n), u = wb(_b, n), d = $y(_b, n), [f, h] = s.useState(null), p = py(t, (e => h(e)), u.onItemTextChange, (e => c.itemTextRefCallback?.(e, u.value, u.disabled))), m = f?.textContent, v = s.useMemo((() => (0, i.jsx)("option", {
            value: u.value,
            disabled: u.disabled,
            children: m
          }, u.value)), [u.disabled, u.value, m]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: y
          } = d;
          return Bd((() => (g(v), () => y(v))), [g, y, v]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(vy.span, {
              id: u.textId,
              ...a,
              ref: p
            }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? Ms.createPortal(a.children, l.valueNode) : null]
          })
        }));
      Pb.displayName = _b;
      var Tb = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return wb(Tb, n).isSelected ? (0, i.jsx)(vy.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = Tb;
      var Sb = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const n = ab(Sb, e.__scopeSelect),
          r = db(Sb, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = py(t, r.onScrollButtonChange);
        return Bd((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(Cb, {
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
      })).displayName = Sb;
      var xb = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const n = ab(xb, e.__scopeSelect),
          r = db(xb, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = py(t, r.onScrollButtonChange);
        return Bd((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(Cb, {
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
      })).displayName = xb;
      var Cb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, a = ab("SelectScrollButton", n), l = s.useRef(null), c = Fy(n), u = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => u()), [u]), Bd((() => {
          const e = c().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [c]), (0, i.jsx)(vy.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: dy(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerMove: dy(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerLeave: dy(o.onPointerLeave, (() => {
            u()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, i.jsx)(vy.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Ob = "SelectArrow";

      function Nb(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Gy(n), a = qy(Ob, n), s = ab(Ob, n);
        return a.open && "popper" === s.position ? (0, i.jsx)(Em, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = Ob;
      var Lb = s.forwardRef(((e, t) => {
        const {
          value: n,
          ...r
        } = e, o = s.useRef(null), a = py(t, o), l = Hd(n);
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
        }), [l, n]), (0, i.jsx)(ky, {
          asChild: !0,
          children: (0, i.jsx)("select", {
            ...r,
            ref: a,
            defaultValue: n
          })
        })
      }));

      function Rb(e) {
        const t = Ad(e),
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

      function Mb(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      Lb.displayName = "BubbleSelect";
      var Db = Xy,
        Ab = Zy,
        kb = Jy,
        Ib = eb,
        jb = tb,
        Hb = rb,
        Bb = hb,
        Fb = Eb,
        Ub = Pb,
        Vb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Ud.DX : t;
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

      function zb(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var Gb = e => {
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
            const e = Kb(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Bd((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Kb(t);
              c(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, c]), Bd((() => {
            if (t) {
              const e = e => {
                  const n = Kb(r.current).includes(e.animationName);
                  e.target === t && n && Ms.flushSync((() => c("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = Kb(r.current))
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
        }) : s.Children.only(n), i = zb(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Kb(e) {
        return e?.animationName || "none"
      }

      function qb(...e) {
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

      function Wb(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      Gb.displayName = "Presence";
      var $b = "ScrollArea",
        [Xb, Yb] = function(e, t = []) {
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
          }, qb(r, ...t)]
        }($b),
        [Zb, Qb] = Xb($b),
        Jb = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...l
          } = e, [c, u] = s.useState(null), [d, f] = s.useState(null), [h, p] = s.useState(null), [m, v] = s.useState(null), [g, y] = s.useState(null), [b, w] = s.useState(0), [E, _] = s.useState(0), [P, T] = s.useState(!1), [S, x] = s.useState(!1), C = zb(t, (e => u(e))), O = jd(o);
          return (0, i.jsx)(Zb, {
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
            onScrollbarXEnabledChange: T,
            scrollbarY: g,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: x,
            onCornerWidthChange: w,
            onCornerHeightChange: _,
            children: (0, i.jsx)(Vb.div, {
              dir: O,
              ...l,
              ref: C,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": E + "px",
                ...e.style
              }
            })
          })
        }));
      Jb.displayName = $b;
      var ew = "ScrollAreaViewport",
        tw = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...a
          } = e, l = Qb(ew, n), c = zb(t, s.useRef(null), l.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(Vb.div, {
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
      tw.displayName = ew;
      var nw = "ScrollAreaScrollbar",
        rw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Qb(nw, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: l
          } = o, c = "horizontal" === e.orientation;
          return s.useEffect((() => (c ? a(!0) : l(!0), () => {
            c ? a(!1) : l(!1)
          })), [c, a, l]), "hover" === o.type ? (0, i.jsx)(ow, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, i.jsx)(iw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, i.jsx)(aw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, i.jsx)(sw, {
            ...r,
            ref: t
          }) : null
        }));
      rw.displayName = nw;
      var ow = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Qb(nw, e.__scopeScrollArea), [a, l] = s.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(Gb, {
            present: n || a,
            children: (0, i.jsx)(aw, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        iw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Qb(nw, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = Sw((() => u("SCROLL_END")), 100), [c, u] = ("hidden", d = {
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
          }), [o.viewport, a, u, l]), (0, i.jsx)(Gb, {
            present: n || "hidden" !== c,
            children: (0, i.jsx)(sw, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Wb(e.onPointerEnter, (() => u("POINTER_ENTER"))),
              onPointerLeave: Wb(e.onPointerLeave, (() => u("POINTER_LEAVE")))
            })
          })
        })),
        aw = s.forwardRef(((e, t) => {
          const n = Qb(nw, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, l] = s.useState(!1),
            c = "horizontal" === e.orientation,
            u = Sw((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(c ? e : t)
              }
            }), 10);
          return xw(n.viewport, u), xw(n.content, u), (0, i.jsx)(Gb, {
            present: r || a,
            children: (0, i.jsx)(sw, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        sw = s.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Qb(nw, e.__scopeScrollArea), a = s.useRef(null), l = s.useRef(0), [c, u] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = bw(c.viewport, c.content), f = {
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
              const o = ww(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                c = n.content - n.viewport;
              return _w([s, l], "ltr" === r ? [0, c] : [-1 * c, 0])(e)
            }(e, l.current, c, t)
          }
          return "horizontal" === n ? (0, i.jsx)(lw, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ew(o.viewport.scrollLeft, c, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = h(e, o.dir))
            }
          }) : "vertical" === n ? (0, i.jsx)(cw, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Ew(o.viewport.scrollTop, c);
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
        lw = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Qb(nw, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = zb(t, u, a.onScrollbarXChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(fw, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": ww(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Pw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: u.current.clientWidth,
                  paddingStart: yw(l.paddingLeft),
                  paddingEnd: yw(l.paddingRight)
                }
              })
            }
          })
        })),
        cw = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Qb(nw, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = zb(t, u, a.onScrollbarYChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(fw, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": ww(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Pw(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: u.current.clientHeight,
                  paddingStart: yw(l.paddingTop),
                  paddingEnd: yw(l.paddingBottom)
                }
              })
            }
          })
        })),
        [uw, dw] = Xb(nw),
        fw = s.forwardRef(((e, t) => {
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
          } = e, m = Qb(nw, n), [v, g] = s.useState(null), y = zb(t, (e => g(e))), b = s.useRef(null), w = s.useRef(""), E = m.viewport, _ = r.content - r.viewport, P = Ad(f), T = Ad(u), S = Sw(h, 10);

          function x(e) {
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
          }), [E, v, _, P]), s.useEffect(T, [r, T]), xw(v, S), xw(m.content, S), (0, i.jsx)(uw, {
            scope: n,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: Ad(a),
            onThumbPointerUp: Ad(l),
            onThumbPositionChange: T,
            onThumbPointerDown: Ad(c),
            children: (0, i.jsx)(Vb.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Wb(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), x(e))
              })),
              onPointerMove: Wb(e.onPointerMove, x),
              onPointerUp: Wb(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        hw = "ScrollAreaThumb",
        pw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = dw(hw, e.__scopeScrollArea);
          return (0, i.jsx)(Gb, {
            present: n || o.hasThumb,
            children: (0, i.jsx)(mw, {
              ref: t,
              ...r
            })
          })
        })),
        mw = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, a = Qb(hw, n), l = dw(hw, n), {
            onThumbPositionChange: c
          } = l, u = zb(t, (e => l.onThumbChange(e))), d = s.useRef(), f = Sw((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = Tw(e, c);
                  d.current = t, c()
                }
              };
              return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, f, c]), (0, i.jsx)(Vb.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: u,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Wb(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Wb(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      pw.displayName = hw;
      var vw = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const n = Qb(vw, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, i.jsx)(gw, {
          ...e,
          ref: t
        }) : null
      })).displayName = vw;
      var gw = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Qb(vw, n), [a, l] = s.useState(0), [c, u] = s.useState(0), d = Boolean(a && c);
        return xw(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), u(e)
        })), xw(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, i.jsx)(Vb.div, {
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

      function yw(e) {
        return e ? parseInt(e, 10) : 0
      }

      function bw(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function ww(e) {
        const t = bw(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Ew(e, t, n = "ltr") {
        const r = ww(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = Nd(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return _w([0, a], [0, s])(l)
      }

      function _w(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Pw(e, t) {
        return e > 0 && e < t
      }
      var Tw = (e, t = (() => {})) => {
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

      function Sw(e, t) {
        const n = Ad(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function xw(e, t) {
        const n = Ad(t);
        Bd((() => {
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
      var Cw = Jb,
        Ow = tw,
        Nw = rw,
        Lw = pw,
        Rw = "foundry_uaq1gwn";
      const Mw = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: l,
          hideDescription: c = !1,
          hideRequiredAsterisk: d,
          hideDividers: f,
          errorMessage: h,
          value: p,
          defaultValue: m,
          onValueChange: v,
          open: g,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: w,
          isDisabled: E,
          isReadOnly: _,
          className: P,
          ariaLabelledBy: T
        }, S) => {
          const x = (0, s.useRef)(null),
            C = (0, ht.UP)(x, S),
            O = (0, s.useId)(),
            N = (0, s.useId)(),
            [L = !1, R] = (0, ht.ic)({
              prop: g,
              defaultProp: y,
              onChange: b
            });
          return (0, i.jsxs)("div", {
            className: (0, Ce.$)("foundry_uaq1gw0", P),
            children: [(t && !l || n) && (0, i.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, i.jsx)(u.s6, {
                enabled: !!l,
                children: (0, i.jsx)(D, {
                  className: (0, Ce.$)("foundry_uaq1gw2", E && Rw),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: O,
                    children: [t, w && !d && (0, i.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, i.jsx)(F, {
                className: (0, Ce.$)("foundry_uaq1gw3", E && Rw),
                children: n
              })]
            }), (0, i.jsxs)(Db, {
              required: w,
              disabled: E,
              open: L,
              onOpenChange: () => R(!_ && !L),
              value: p,
              defaultValue: m,
              onValueChange: v,
              children: [(0, i.jsxs)(Ab, {
                className: (0, Ce.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!h && "foundry_uaq1gw7", _ && "foundry_uaq1gw6"),
                ref: C,
                "data-testid": a,
                "aria-activedescendant": p,
                "aria-labelledby": T || O,
                "aria-controls": N,
                children: [(0, i.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, i.jsx)(kb, {
                    placeholder: r,
                    "aria-label": p
                  })
                }), (0, i.jsx)(Ib, {
                  asChild: !0,
                  className: (0, Ce.$)("foundry_uaq1gw9", (_ || E) && "foundry_uaq1gwa"),
                  children: L ? (0, i.jsx)(ne.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(ne.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(jb, {
                children: (0, i.jsx)(Hb, {
                  id: N,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, i.jsxs)(Cw, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, i.jsx)(Bb, {
                      className: (0, Ce.$)("foundry_uaq1gwc", f && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(Ow, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(Nw, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, i.jsx)(Lw, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(u.s6, {
              enabled: !!h || c || 0 === o.length,
              children: (0, i.jsx)(D, {
                className: (0, Ce.$)("foundry_uaq1gwf", E && Rw),
                children: o
              })
            }), h && (0, i.jsxs)(D, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, i.jsx)(ne.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), h]
            })]
          })
        })),
        Dw = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: l
        }, c) => {
          const u = (0, s.useRef)(null),
            d = (0, ht.UP)(u, c),
            f = n && re[n];
          return (0, i.jsxs)(Fb, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: d,
            disabled: a,
            "data-testid": l,
            children: [f && "left" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(Ub, {
              children: e
            }), f && "right" === o && (0, i.jsx)(f, {
              label: r || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var Aw;
      Aw = {
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
      const kw = new Set(["id"]),
        Iw = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        jw = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Hw = /^(data-.*)$/;

      function Bw(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (kw.has(t) || n && Iw.has(t) || r && jw.has(t) || (null == o ? void 0 : o.has(t)) || Hw.test(t)) && (i[t] = e[t]);
        return i
      }
      const Fw = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Uw = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Vw(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Fw.has(t.script)
        }
        let t = e.split("-")[0];
        return Uw.has(t)
      }
      const zw = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Gw = s.createContext(zw),
        Kw = s.createContext(!1);
      let qw = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ww = new WeakMap;
      const $w = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)(Qw());
        return e || `${n?"react-aria":`react-aria${zw.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(Gw);
        t !== zw || qw || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(Gw),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = Ww.get(e);
                null == n ? Ww.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, Ww.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function Xw() {
        return !1
      }

      function Yw() {
        return !0
      }

      function Zw(e) {
        return () => {}
      }

      function Qw() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(Zw, Xw, Yw) : (0, s.useContext)(Kw)
      }
      const Jw = Symbol.for("react-aria.i18n.locale");

      function eE() {
        let e = "undefined" != typeof window && window[Jw] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Vw(e) ? "rtl" : "ltr"
        }
      }
      let tE = eE(),
        nE = new Set;

      function rE() {
        tE = eE();
        for (let e of nE) e(tE)
      }
      const oE = s.createContext(null);

      function iE() {
        let e = function() {
          let e = Qw(),
            [t, n] = (0, s.useState)(tE);
          return (0, s.useEffect)((() => (0 === nE.size && window.addEventListener("languagechange", rE), nE.add(n), () => {
            nE.delete(n), 0 === nE.size && window.removeEventListener("languagechange", rE)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(oE) || e
      }
      const aE = Symbol.for("react-aria.i18n.locale"),
        sE = Symbol.for("react-aria.i18n.strings");
      let lE;
      class cE {
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
          let t = window[aE];
          if (void 0 === lE) {
            let e = window[sE];
            if (!e) return null;
            lE = {};
            for (let n in e) lE[n] = new cE({
              [t]: e[n]
            }, t)
          }
          let n = null == lE ? void 0 : lE[e];
          if (!n) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return n
        }
        constructor(e, t = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = t
        }
      }
      const uE = new Map,
        dE = new Map;
      class fE {
        format(e, t) {
          let n = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
          let r = t["=" + e];
          if (r) return "function" == typeof r ? r() : r;
          let o = this.locale + ":" + n,
            i = uE.get(o);
          return i || (i = new Intl.PluralRules(this.locale, {
            type: n
          }), uE.set(o, i)), r = t[i.select(e)] || t.other, "function" == typeof r ? r() : r
        }
        number(e) {
          let t = dE.get(this.locale);
          return t || (t = new Intl.NumberFormat(this.locale), dE.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
          let n = e[t] || e.other;
          return "function" == typeof n ? n() : n
        }
        constructor(e, t) {
          this.locale = e, this.strings = t
        }
      }
      const hE = new WeakMap;

      function pE(e, t) {
        let {
          locale: n
        } = iE(), r = function(e, t) {
          return t && cE.getGlobalDictionaryForPackage(t) || function(e) {
            let t = hE.get(e);
            return t || (t = new cE(e), hE.set(e, t)), t
          }(e)
        }(e, t);
        return (0, s.useMemo)((() => new fE(n, r)), [n, r])
      }

      function mE(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const vE = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function gE(e) {
        const t = (0, s.useRef)(null);
        return vE((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      let yE = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        bE = new Map;

      function wE(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = $w(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return yE && (bE.has(o) && !bE.get(o).includes(i) ? bE.set(o, [...bE.get(o), i]) : bE.set(o, [i])), vE((() => {
          let e = o;
          return () => {
            bE.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function EE(e, t) {
        if (e === t) return e;
        let n = bE.get(e);
        if (n) return n.forEach((e => e(t))), t;
        let r = bE.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function _E(e = []) {
        let t = wE(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = gE((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            vE((() => {
              r.current && o()
            }));
            let i = gE((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return vE(o, [t, o, ...e]), n
      }

      function PE(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = mE(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = EE(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Ce.A)(n, o)
          }
        }
        return t
      }

      function TE(e) {
        if (function() {
            if (null == SE) {
              SE = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return SE = !0, !0
                  }
                })
              } catch (e) {}
            }
            return SE
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
      let SE = null;

      function xE(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function CE(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function OE(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const NE = OE((function() {
          return CE(/^Mac/i)
        })),
        LE = OE((function() {
          return CE(/^iPhone/i)
        })),
        RE = OE((function() {
          return CE(/^iPad/i) || NE() && navigator.maxTouchPoints > 1
        })),
        ME = OE((function() {
          return LE() || RE()
        })),
        DE = (OE((function() {
          return NE() || ME()
        })), OE((function() {
          return xE(/AppleWebKit/i) && !AE()
        }))),
        AE = OE((function() {
          return xE(/Chrome/i)
        })),
        kE = OE((function() {
          return xE(/Android/i)
        })),
        IE = OE((function() {
          return xE(/Firefox/i)
        })),
        jE = (0, s.createContext)({
          isNative: !0,
          open: function(e, t) {
            ! function(e, t) {
              if (e instanceof HTMLAnchorElement) t(e);
              else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
              }
            }(e, (e => BE(e, t)))
          },
          useHref: e => e
        });

      function HE() {
        return (0, s.useContext)(jE)
      }

      function BE(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        IE() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (NE() ? i = !0 : a = !0);
        let c = DE() && NE() && !RE() ? new KeyboardEvent("keydown", {
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
        BE.isOpening = n, TE(e), e.dispatchEvent(c), BE.isOpening = !1
      }

      function FE(e) {
        var t;
        const n = HE().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      BE.isOpening = !1;
      const UE = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        VE = e => e && "window" in e && e.window === e ? e : UE(e).defaultView || window;
      let zE = new Map,
        GE = new Set;

      function KE() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = zE.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), zE.delete(n.target)), 0 === zE.size)) {
            for (let e of GE) e();
            GE.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = zE.get(n.target);
          r || (r = new Set, zE.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function qE(e) {
        requestAnimationFrame((() => {
          0 === zE.size ? e() : GE.add(e)
        }))
      }

      function WE(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (kE() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? KE() : document.addEventListener("DOMContentLoaded", KE));
      let $E = null,
        XE = new Set,
        YE = new Map,
        ZE = !1,
        QE = !1;

      function JE(e, t) {
        for (let n of XE) n(e, t)
      }

      function e_(e) {
        ZE = !0,
          function(e) {
            return !(e.metaKey || !NE() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && ($E = "keyboard", JE("keyboard", e))
      }

      function t_(e) {
        $E = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (ZE = !0, JE("pointer", e))
      }

      function n_(e) {
        WE(e) && (ZE = !0, $E = "virtual")
      }

      function r_(e) {
        e.target !== window && e.target !== document && (ZE || QE || ($E = "virtual", JE("virtual", e)), ZE = !1, QE = !1)
      }

      function o_() {
        ZE = !1, QE = !0
      }

      function i_(e) {
        if ("undefined" == typeof window || YE.get(VE(e))) return;
        const t = VE(e),
          n = UE(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          ZE = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", e_, !0), n.addEventListener("keyup", e_, !0), n.addEventListener("click", n_, !0), t.addEventListener("focus", r_, !0), t.addEventListener("blur", o_, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", t_, !0), n.addEventListener("pointermove", t_, !0), n.addEventListener("pointerup", t_, !0)) : (n.addEventListener("mousedown", t_, !0), n.addEventListener("mousemove", t_, !0), n.addEventListener("mouseup", t_, !0)), t.addEventListener("beforeunload", (() => {
          a_(e)
        }), {
          once: !0
        }), YE.set(t, {
          focus: r
        })
      }
      const a_ = (e, t) => {
        const n = VE(e),
          r = UE(e);
        t && r.removeEventListener("DOMContentLoaded", t), YE.has(n) && (n.HTMLElement.prototype.focus = YE.get(n).focus, r.removeEventListener("keydown", e_, !0), r.removeEventListener("keyup", e_, !0), r.removeEventListener("click", n_, !0), n.removeEventListener("focus", r_, !0), n.removeEventListener("blur", o_, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", t_, !0), r.removeEventListener("pointermove", t_, !0), r.removeEventListener("pointerup", t_, !0)) : (r.removeEventListener("mousedown", t_, !0), r.removeEventListener("mousemove", t_, !0), r.removeEventListener("mouseup", t_, !0)), YE.delete(n))
      };

      function s_(e, t) {
        vE((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = UE(e);
        let n;
        "loading" !== t.readyState ? i_(e) : (n = () => {
          i_(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class l_ {
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

      function c_(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        vE((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = gE((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                t.current.isFocused = !1, r.disabled && n(new l_("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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

      function u_(e) {
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
      let d_ = s.createContext(null);

      function f_(e, t) {
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
            a = c_(i),
            l = (0, s.useCallback)((e => {
              const t = UE(e.target);
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
              onKeyDown: u_(e.onKeyDown),
              onKeyUp: u_(e.onKeyUp)
            }
          }
        }(e), o = PE(n, r), i = function(e) {
          let t = (0, s.useContext)(d_) || {};
          s_(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = UE(e);
            if ("virtual" === $E) {
              let n = t.activeElement;
              qE((() => {
                t.activeElement === n && e.isConnected && TE(e)
              }))
            } else TE(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: PE({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let h_ = "default",
        p_ = "",
        m_ = new WeakMap;

      function v_(e) {
        if (ME()) {
          if ("default" === h_) {
            const t = UE(e);
            p_ = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          h_ = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (m_.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function g_(e) {
        if (ME()) {
          if ("disabled" !== h_) return;
          h_ = "restoring", setTimeout((() => {
            qE((() => {
              if ("restoring" === h_) {
                const t = UE(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = p_ || ""), p_ = "", h_ = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && m_.has(e)) {
          let t = m_.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), m_.delete(e)
        }
      }
      const y_ = s.createContext({
        register: () => {}
      });
      y_.displayName = "PressResponderContext";
      var b_ = new WeakMap;
      class w_ {
        continuePropagation() {
          _n(this, b_, !1)
        }
        get shouldStopPropagation() {
          return wn(this, b_)
        }
        constructor(e, t, n, r) {
          var o;
          En(this, b_, {
            writable: !0,
            value: void 0
          }), _n(this, b_, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c
        }
      }
      const E_ = Symbol("linkClicked");

      function __(e) {
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
          let t = (0, s.useContext)(y_);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = PE(r, e), n()
          }
          return s_(t, e.ref), e
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
        }(), b = gE(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new w_("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = gE(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new w_("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new w_("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = gE(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new w_("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = gE((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(C_(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || g_(t.target))
        })), P = gE((e => {
          u && _(e)
        })), T = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (T_(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  R_(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        T_(t, r) && !t.repeat && r.contains(t.target) && e.target && E(C_(e.target, t), "keyboard")
                      };
                    g(UE(t.currentTarget), "keyup", mE(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && NE() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !BE.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || WE(t.nativeEvent))) {
                    a || c || TE(t.currentTarget);
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
              if (e.isPressed && e.target && T_(t, e.target)) {
                var r;
                R_(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(C_(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && P_(e.target) && e.target.contains(n) && !t[E_] && (t[E_] = !0, BE(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
              if (o = t.nativeEvent, !kE() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              N_(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || c || TE(t.currentTarget), d || v_(e.target), s = b(t, e.pointerType), g(UE(t.currentTarget), "pointermove", n, !1), g(UE(t.currentTarget), "pointerup", r, !1), g(UE(t.currentTarget), "pointercancel", i, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (N_(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && O_(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && O_(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(C_(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(C_(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (O_(t, e.target) && null != e.pointerType ? w(C_(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(C_(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || g_(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && g(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                L_(e.currentTarget) && e.preventDefault()
              },
              i = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (N_(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = WE(t.nativeEvent) ? "virtual" : "mouse", a || c || TE(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(UE(t.currentTarget), "mouseup", n, !1)))
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
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && O_(t, e.target) && null != e.pointerType ? w(C_(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(C_(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || c || TE(t.currentTarget), d || v_(e.target), b(x_(e.target, t), e.pointerType) && t.stopPropagation(), g(VE(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = S_(t.nativeEvent, e.activePointerId),
                r = !0;
              n && O_(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(x_(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(x_(e.target, t), e.pointerType, !1), P(x_(e.target, t))), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = S_(t.nativeEvent, e.activePointerId),
                r = !0;
              n && O_(n, t.currentTarget) && null != e.pointerType ? (E(x_(e.target, t), e.pointerType), r = w(x_(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(x_(e.target, t), e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && g_(e.target), y()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && _(x_(e.target, t)))
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
          d || g_(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: PE(h, T)
        }
      }

      function P_(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function T_(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof VE(o).HTMLInputElement && !D_(o, n) || o instanceof VE(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && P_(o)) && "Enter" !== n)
      }

      function S_(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function x_(e, t) {
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

      function C_(e, t) {
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

      function O_(e, t) {
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

      function N_(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function L_(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : P_(e)))
      }

      function R_(e, t) {
        return e instanceof HTMLInputElement ? !D_(e, t) : L_(e)
      }
      const M_ = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function D_(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : M_.has(e.type)
      }

      function A_(e, t) {
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
        } = f_(e, t), {
          pressProps: d,
          isPressed: f
        } = __({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          isDisabled: s,
          ref: t
        }), h = Bw(l, {
          labelable: !0
        }), p = PE(u, d), m = HE();
        return {
          isPressed: f,
          linkProps: PE(h, FE(e), {
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
      var k_ = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        I_ = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        j_ = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        H_ = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        B_ = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      const F_ = (0, s.forwardRef)((({
          breadcrumbs: e,
          size: t = "MD",
          isLandmark: n = !0,
          hideRootPage: r,
          showCurrentPage: o,
          testId: a,
          ...l
        }, c) => {
          if (0 === e.length) return null;
          const u = (0, s.useRef)(null),
            d = (0, ht.UP)(u, c),
            f = (0, s.useRef)(null),
            {
              countWrappedElements: h
            } = (0, ht.Pt)(),
            p = e[0],
            m = e[e.length - 1],
            v = e.slice(1, e.length - 1),
            [g, y] = (0, s.useState)(v),
            [b, w] = (0, s.useState)([]),
            E = (0, s.useCallback)((() => {
              const e = h(f);
              y(v.slice(e, v.length)), w(v.slice(0, e))
            }), [f]);
          (0, s.useEffect)((() => {
            const e = new ResizeObserver(E);
            return f.current && e.observe(f.current), () => {
              f.current && e.unobserve(f.current)
            }
          }), [f.current]);
          const _ = (0, s.useMemo)((() => {
              const e = v.slice().reverse();
              return (0, i.jsxs)("ol", {
                className: k_[t],
                ref: f,
                "aria-hidden": "true",
                children: [!r && p && (0, i.jsx)(U_, {
                  href: p.url,
                  size: t,
                  icon: p.icon,
                  iconLabel: p.iconLabel,
                  iconPosition: p.iconPosition,
                  children: p.label
                }, p.label), b.length > 0 && (0, i.jsx)("li", {
                  className: j_[t],
                  children: (0, i.jsx)("button", {
                    className: H_,
                    children: "..."
                  })
                }), o && m && (0, i.jsx)(U_, {
                  href: m.url,
                  size: t,
                  icon: m.icon,
                  iconLabel: m.iconLabel,
                  iconPosition: m.iconPosition,
                  isCurrent: !0,
                  children: m.label
                }, m.label), e.map((e => (0, i.jsx)(U_, {
                  href: e.url,
                  size: t,
                  icon: e.icon,
                  iconLabel: e.iconLabel,
                  iconPosition: e.iconPosition,
                  children: e.label
                }, e.label)))]
              })
            }), [e, b]),
            {
              navProps: P
            } = function(e) {
              let {
                "aria-label": t,
                ...n
              } = e, r = pE((o = Aw) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
              var o;
              return {
                navProps: {
                  ...Bw(n, {
                    labelable: !0
                  }),
                  "aria-label": t || r.format("breadcrumbs")
                }
              }
            }(l),
            T = n ? "nav" : "div";
          return (0, i.jsxs)(T, {
            ...P,
            role: n ? "navigation" : null,
            className: "foundry_m1icrx0",
            children: [(0, i.jsxs)("ol", {
              className: B_[t],
              "data-testid": a,
              ref: d,
              children: [!r && p && (0, i.jsx)(U_, {
                href: p.url,
                size: t,
                icon: p.icon,
                iconLabel: p.iconLabel,
                iconPosition: p.iconPosition,
                children: p.label
              }, p.label), b.length > 0 && (0, i.jsx)("li", {
                className: j_[t],
                children: (0, i.jsx)(V_, {
                  items: b
                })
              }), g.length > 0 && g.map(((e, n) => {
                const {
                  label: r,
                  url: o,
                  icon: a,
                  iconLabel: s,
                  iconPosition: l
                } = e;
                return (0, i.jsx)(U_, {
                  href: o,
                  size: t,
                  icon: a,
                  iconLabel: s,
                  iconPosition: l,
                  children: r
                }, `${r.replace(/\s/g,"")}-${n}`)
              })), o && m && (0, i.jsx)(U_, {
                href: m.url,
                size: t,
                icon: m.icon,
                iconLabel: m.iconLabel,
                iconPosition: m.iconPosition,
                isCurrent: !0,
                children: m.label
              }, m.label)]
            }), _]
          })
        })),
        U_ = ({
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
              } = A_({
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
            f = t && re[t];
          return (0, i.jsx)("li", {
            className: j_[e],
            children: (0, i.jsxs)(d, {
              ...l,
              ref: a,
              className: (0, Ce.$)(I_[e], c && "foundry_m1icrxd"),
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
        V_ = ({
          items: e
        }) => {
          const [t, n] = (0, s.useState)(!1);
          return (0, i.jsxs)(Db, {
            open: t,
            onOpenChange: () => n(!t),
            children: [(0, i.jsx)(Ab, {
              className: H_,
              children: "..."
            }), (0, i.jsx)(jb, {
              children: (0, i.jsx)(Hb, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, i.jsx)(Bb, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, t) => (0, i.jsx)(Fb, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, i.jsx)(Ub, {
                      children: e.label
                    })
                  }, `${e.label}-${t}`)))
                })
              })
            })]
          })
        },
        z_ = ({
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
        G_ = ({
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
        K_ = ({
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
        q_ = ({
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
        W_ = ({
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
        $_ = ({
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

      function X_(e, t, n) {
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

      function Y_(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = X_(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function Z_(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        vE((() => {
          if ("native" === r && (null == n ? void 0 : n.current)) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: Q_(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = gE((() => {
            t.resetValidation()
          })),
          a = gE((e => {
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
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), $E = "keyboard", JE("keyboard", null)), e.preventDefault()
          })),
          l = gE((() => {
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

      function Q_(e) {
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
      const J_ = {
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
        eP = {
          ...J_,
          customError: !0,
          valid: !1
        },
        tP = {
          isInvalid: !1,
          validationDetails: J_,
          validationErrors: []
        },
        nP = (0, s.createContext)({}),
        rP = "__formValidationState" + Date.now();

      function oP(e) {
        if (e[rP]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[rP];
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
              validationDetails: eP
            } : null,
            u = (0, s.useMemo)((() => aP(function(e, t) {
              if ("function" == typeof e) {
                let n = e(t);
                if (n && "boolean" != typeof n) return iP(n)
              }
              return []
            }(a, o))), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = null);
          let d = (0, s.useContext)(nP),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => iP(d[e]))) : iP(d[r]) : []), [d, r]),
            [h, p] = (0, s.useState)(d),
            [m, v] = (0, s.useState)(!1);
          d !== h && (p(d), v(!1));
          let g = (0, s.useMemo)((() => aP(m ? [] : f)), [m, f]),
            y = (0, s.useRef)(tP),
            [b, w] = (0, s.useState)(tP),
            E = (0, s.useRef)(tP),
            [_, P] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!_) return;
            P(!1);
            let e = u || i || y.current;
            sP(e, E.current) || (E.current = e, w(e))
          })), {
            realtimeValidation: c || g || u || i || tP,
            displayValidation: "native" === l ? c || g || b : c || g || u || i || b,
            updateValidation(e) {
              "aria" !== l || sP(b, e) ? y.current = e : w(e)
            },
            resetValidation() {
              let e = tP;
              sP(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
            },
            commitValidation() {
              "native" === l && P(!0), v(!0)
            }
          }
        }(e)
      }

      function iP(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function aP(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: eP
        } : null
      }

      function sP(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function lP(e, t, n) {
        let r = (0, s.useRef)(t),
          o = gE((() => {
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

      function cP(e, t, n) {
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
        } = __({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = __({
          isDisabled: r || o,
          onPress() {
            t.toggle()
          }
        }), {
          focusableProps: v
        } = f_(e, n), g = PE(f, v), y = Bw(e, {
          labelable: !0
        });
        return lP(n, t.isSelected, t.setSelected), {
          labelProps: PE(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: PE(y, {
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

      function uP(e) {
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

      function dP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function fP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? dP(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = uP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function hP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var pP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        mP = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = fP(fP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) pP(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return hP(e.variantClassNames, (e => hP(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        vP = mP({
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
        gP = mP({
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
        yP = mP({
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
        bP = mP({
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
      const wP = (0, s.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: l,
          size: c = "MD",
          appearance: d = "primary",
          isIndeterminate: f,
          hideLabel: h,
          testId: p,
          errorMessage: m,
          className: v,
          ...g
        }, y) => {
          const b = (0, s.useRef)(null),
            w = (0, ht.UP)(b, y),
            E = (0, s.useId)(),
            {
              setSelected: _,
              ...P
            } = Y_({
              isSelected: e,
              defaultSelected: t,
              onChange: n,
              value: g.value
            }),
            {
              inputProps: T,
              isDisabled: S,
              isReadOnly: x,
              isInvalid: C,
              isSelected: O
            } = function(e, t, n) {
              let r = oP({
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
                } = cP({
                  ...e,
                  isInvalid: o
                }, t, n);
              Z_(e, r, n);
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
              ...g,
              "aria-label": o,
              id: E
            }, {
              ...P,
              setSelected: g.isReadOnly ? () => !1 : _
            }, b),
            N = (0, a.v6)({
              ...T,
              "aria-checked": O,
              className: v
            }, {
              className: "foundry_11gbdty1"
            }),
            L = f ? r[`Dash${c}`] : r[`Check${c}`],
            R = C && !!m;
          return (0, i.jsxs)("label", {
            className: "foundry_11gbdty0",
            children: [(0, i.jsxs)("div", {
              className: gP({
                size: c
              }),
              children: [(0, i.jsx)(u.s6, {
                children: (0, i.jsx)("input", {
                  ...N,
                  ref: w
                })
              }), (0, i.jsx)("div", {
                className: vP({
                  size: c,
                  appearance: d
                }),
                "aria-hidden": "true",
                "data-state": f ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": S || x,
                "data-testid": p,
                children: (0, i.jsx)("span", {
                  className: "foundry_11gbdtyc",
                  children: (O || f) && (0, i.jsx)(L, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, i.jsx)(u.s6, {
              enabled: !!h,
              children: (0, i.jsxs)("div", {
                className: bP({
                  size: c,
                  isDisabled: S
                }),
                children: [(0, i.jsx)("p", {
                  className: yP({
                    size: c
                  }),
                  children: o
                }), l && !R && (0, i.jsx)("p", {
                  className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: l
                }), R && (0, i.jsx)("p", {
                  className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: m
                })]
              })
            })]
          })
        })),
        EP = new WeakMap;

      function _P(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = VE(e);
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
        }(e, t) && (!e.parentElement || _P(e.parentElement, e))
      }
      const PP = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        TP = PP.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      PP.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const SP = PP.join(':not([hidden]):not([tabindex="-1"]),');

      function xP(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function CP(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? SP : TP,
          o = UE(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !_P(e) || n && !xP(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class OP {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new NP({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && xP(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new OP;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new NP({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class NP {
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

      function LP(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = wE(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function RP(e) {
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
          t = wE(t);
          let a = wE(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: LP({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = _E([Boolean(t), Boolean(n), r, o]), l = _E([Boolean(t), Boolean(n), r, o]);
        return a = PE(a, {
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

      function MP(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = iE(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = RP({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), g = Bw(e, {
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
          }), [n, o, i]), l = c_(a), c = (0, s.useCallback)((e => {
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
        }), b = wE(n);
        return EP.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: PE(g, {
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
              let r, o = CP(e.currentTarget, {
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
      new OP;
      let DP = Math.round(1e10 * Math.random()),
        AP = 0;

      function kP(e) {
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

      function IP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function jP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? IP(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = kP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : IP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function HP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var BP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        FP = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = jP(jP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) BP(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return HP(e.variantClassNames, (e => HP(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        UP = FP({
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
      const VP = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        zP = (0, s.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: c,
          testId: d,
          className: f,
          errorMessage: h,
          orientation: p = "vertical",
          ...m
        }, v) => {
          const {
            children: g
          } = m, y = (0, s.useRef)(null), b = (0, ht.UP)(y, v), w = m.id || (0, s.useId)(), E = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${DP}-${++AP}`), [e.name]);
            var n;
            let [r, o] = X_(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, s.useState)(null), l = oP({
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
          }(m), _ = {
            state: E,
            size: n,
            appearance: r
          }, {
            radioGroupProps: P,
            labelProps: T,
            descriptionProps: S,
            isInvalid: x,
            errorMessageProps: C
          } = MP({
            ...m,
            id: w,
            label: e,
            isRequired: l,
            description: t,
            orientation: p
          }, E), O = (0, a.v6)({
            ...P,
            className: f
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": C?.id
          }), N = x && !!h;
          return (0, i.jsxs)("div", {
            ref: b,
            "data-testid": d,
            ...O,
            children: [(0, i.jsx)(u.s6, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, i.jsx)(D, {
                  ...T,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, l && !c && (0, i.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, i.jsx)(F, {
                  ...S,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: t
                })]
              })
            }), (0, i.jsx)("div", {
              className: UP({
                size: n,
                orientation: p
              }),
              children: (0, i.jsx)(VP.Provider, {
                value: _,
                children: g
              })
            }), N && (0, i.jsxs)(D, {
              ...C,
              appearance: "bold",
              className: "foundry_njguqnb",
              children: [(0, i.jsx)(ne.X, {
                size: "MD",
                label: "",
                className: "foundry_njguqnc"
              }), h]
            })]
          })
        })),
        GP = ({
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
        KP = ({
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
        qP = ({
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
      var WP = FP({
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
        $P = FP({
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
        XP = FP({
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
        YP = FP({
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
      const ZP = (0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: a,
        ...l
      }, c) => {
        const d = (0, s.useRef)(null),
          f = (0, ht.UP)(d, c),
          h = l.id || (0, s.useId)(),
          p = (0, s.useContext)(VP),
          {
            state: m,
            appearance: v,
            size: g
          } = p,
          {
            inputProps: y
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
              } = __({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = __({
                isDisabled: s,
                onPress() {
                  t.setSelectedValue(r)
                }
              }),
              {
                focusableProps: h
              } = f_(PE(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = PE(c, h),
              m = Bw(e, {
                labelable: !0
              }),
              v = -1;
            null != t.selectedValue ? t.selectedValue === r && (v = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
            let {
              name: g,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: w
            } = EP.get(t);
            return lP(n, t.selectedValue, t.setSelectedValue), Z_({
              validationBehavior: w
            }, t, n), {
              labelProps: PE(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: PE(m, {
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
            id: h
          }, m, d),
          b = y.checked,
          w = y.disabled || m?.isReadOnly,
          E = o[`Dot${g}`];
        return (0, i.jsxs)("label", {
          className: (0, Ce.$)("foundry_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: XP({
              size: g
            }),
            children: [(0, i.jsx)(u.s6, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: f,
                className: "foundry_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: $P({
                appearance: v
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": w,
              "data-testid": r,
              children: (0, i.jsx)("span", {
                className: "foundry_1pfduet9",
                children: b && (0, i.jsx)(E, {})
              })
            })]
          }), (0, i.jsx)(u.s6, {
            enabled: !!n,
            children: (0, i.jsxs)("div", {
              className: YP({
                size: g
              }),
              children: [(0, i.jsx)("p", {
                className: WP({
                  size: g,
                  isDisabled: y.disabled
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

      function QP(e) {
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

      function JP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? JP(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = QP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : JP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function tT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var nT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        rT = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = eT(eT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) nT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return tT(e.variantClassNames, (e => tT(e, (e => e.split(" ")[0]))))
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
      const oT = (0, s.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: a,
          ...s
        }, l) => {
          const c = "horizontal" !== t || r ? "div" : "hr",
            d = r || "hr" === c ? void 0 : "separator",
            f = o ? u.DX : c;
          return (0, i.jsx)(f, {
            ref: l,
            className: (0, Ce.$)(rT({
              thickness: n,
              orientation: t
            }), e),
            role: d,
            "aria-orientation": t,
            "data-testid": a,
            ...s
          })
        })),
        iT = ({
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
        aT = ({
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
        sT = ({
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

      function lT(e) {
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

      function cT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function uT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? cT(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = lT(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cT(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function dT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var fT = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        hT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = uT(uT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) fT(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dT(e.variantClassNames, (e => dT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        pT = hT({
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
        mT = hT({
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
        vT = hT({
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
        gT = hT({
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
        yT = hT({
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
        bT = hT({
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
      const wT = (0, s.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: l,
        hideLabel: c,
        testId: d,
        ...f
      }, h) => {
        const p = (0, s.useRef)(null),
          m = (0, ht.UP)(p, h),
          v = (0, s.useId)(),
          g = Y_(f),
          {
            inputProps: y,
            isDisabled: b,
            isReadOnly: w,
            isSelected: E
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = cP(e, t, n);
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
            ...f,
            "aria-label": e,
            id: v
          }, g, p),
          _ = a ? re[a] : sT,
          P = l ? re[l] : aT;
        return (0, i.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, i.jsxs)("div", {
            className: yT({
              appearance: r
            }),
            "data-state": E ? "selected" : "unselected",
            "data-disabled": b || w,
            "data-testid": d,
            children: [(0, i.jsx)(u.s6, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: m
              })
            }), (0, i.jsxs)("div", {
              className: gT({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: pT({
                  size: n,
                  isSelected: E
                }),
                children: (0, i.jsx)(iT, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: mT({
                    size: n,
                    isSelected: E,
                    position: "left"
                  }),
                  children: (0, i.jsx)(_, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: mT({
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
          }), (0, i.jsx)(u.s6, {
            enabled: !!c,
            children: (0, i.jsxs)("div", {
              className: bT({
                size: n,
                isDisabled: b
              }),
              children: [(0, i.jsx)("p", {
                className: vT({
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

      function ET(e) {
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

      function _T(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function PT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _T(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ET(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _T(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function TT(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      wT.displayName = "Switch";
      var ST = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        xT = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = PT(PT({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) ST(c, r, e.defaultVariants) && (n += " " + u);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return TT(e.variantClassNames, (e => TT(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        CT = xT({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        OT = xT({
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
        NT = xT({
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
      const LT = (0, s.createContext)(null);

      function RT() {
        const e = (0, s.useContext)(LT);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const MT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, s) => {
          const l = e ? u.DX : "div",
            c = (0, a.v6)(o, {
              className: NT({
                status: n,
                background: r
              })
            });
          return (0, i.jsx)(LT.Provider, {
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
        DT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? u.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qha"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        AT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? u.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhb"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        kT = {
          danger: "XCircleSolid",
          information: "InfoCircleSolid",
          success: "CheckCircleSolid",
          warning: "AlertTriangleSolid"
        },
        IT = (0, s.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = RT(), o = e || kT[r], s = re[o], l = (0, a.v6)(t, {
            className: OT({
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
        jT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? u.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhi"
            });
          return (0, i.jsx)(b, {
            level: 5,
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...s
            })
          })
        })),
        HT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? u.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhj"
            });
          return (0, i.jsx)(D, {
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...s
            })
          })
        })),
        BT = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const l = (0, s.useRef)(null),
            c = (0, ht.UP)(l, o),
            d = e ? u.DX : "a",
            {
              linkProps: f,
              isPressed: h
            } = A_(r, l),
            p = (0, a.v6)(f, {
              className: "foundry_1m368qhk foundry_1d5mo5m0"
            });
          return (0, i.jsx)(D, {
            asChild: !0,
            appearance: "hyperlink",
            children: (0, i.jsx)(d, {
              "data-pressed": h,
              "data-testid": n,
              ref: c,
              ...p,
              children: t
            })
          })
        })),
        FT = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const s = e ? u.DX : "div",
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
        UT = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const a = e ? u.DX : "div";
          return (0, i.jsx)(D, {
            asChild: !0,
            children: (0, i.jsx)(a, {
              ref: o,
              "data-testid": t,
              className: (0, Ce.$)(n, "foundry_1m368qho"),
              ...r
            })
          })
        })),
        VT = (0, s.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = RT(), s = (0, a.v6)(n, {
            className: CT({
              hasBackground: "none" !== o
            })
          });
          return (0, i.jsx)(ih, {
            ref: r,
            label: t,
            "data-testid": e,
            appearance: "ghost",
            icon: "X",
            size: "XS",
            ...s
          })
        }))
    },
    50786: (e, t, n) => {
      n.d(t, {
        DX: () => a,
        xV: () => l
      });
      var r = n(62229);

      function o(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      var i = n(91029),
        a = r.forwardRef(((e, t) => {
          const {
            children: n,
            ...o
          } = e, a = r.Children.toArray(n), l = a.find(c);
          if (l) {
            const e = l.props.children,
              n = a.map((t => t === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t));
            return (0, i.jsx)(s, {
              ...o,
              ref: t,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null
            })
          }
          return (0, i.jsx)(s, {
            ...o,
            ref: t,
            children: n
          })
        }));
      a.displayName = "Slot";
      var s = r.forwardRef(((e, t) => {
        const {
          children: n,
          ...i
        } = e;
        if (r.isValidElement(n)) {
          const e = function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n);
          return r.cloneElement(n, {
            ...u(i, n.props),
            ref: t ? o(t, e) : e
          })
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var l = ({
        children: e
      }) => (0, i.jsx)(i.Fragment, {
        children: e
      });

      function c(e) {
        return r.isValidElement(e) && e.type === l
      }

      function u(e, t) {
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
    }
  }
]);