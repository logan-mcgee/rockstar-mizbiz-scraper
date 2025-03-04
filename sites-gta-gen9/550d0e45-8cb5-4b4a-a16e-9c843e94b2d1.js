! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "550d0e45-8cb5-4b4a-a16e-9c843e94b2d1", e._sentryDebugIdIdentifier = "sentry-dbid-550d0e45-8cb5-4b4a-a16e-9c843e94b2d1")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [6624], {
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
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, u = i.charAt(0), c = "", d = 0, f = i.length; d < f;) {
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
            c += m
          }
          return l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(o, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !l && a.wrap ? s + c + s : c
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    },
    49353: (e, t, n) => {
      n.r(t), n.d(t, {
        Body: () => fS,
        BreadcrumbItem: () => bP,
        Breadcrumbs: () => yP,
        Button: () => tr,
        Caption: () => M,
        Checkbox: () => QP,
        CloseButton: () => wS,
        Description: () => vS,
        Divider: () => jC,
        Dropdown: () => cE,
        ErrorText: () => bS,
        Footer: () => yS,
        Header: () => dS,
        Heading: () => b,
        Icon: () => pS,
        IconButton: () => zp,
        Lightbox: () => Vy,
        Link: () => gS,
        Metadata: () => F,
        Option: () => dE,
        Paragraph: () => T,
        RadioButton: () => kC,
        RadioContext: () => wC,
        RadioGroup: () => EC,
        Root: () => cS,
        RootContext: () => lS,
        Subtitle: () => W,
        Switch: () => QC,
        Text: () => te,
        TextArea: () => Lt,
        TextSemantics: () => ee,
        Title: () => mS,
        Tooltip: () => Bv,
        iconStatusMap: () => hS,
        useAlertContext: () => uS
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => _P,
        CheckMD: () => EP,
        CheckXL: () => PP,
        DashLG: () => SP,
        DashMD: () => CP,
        DashXL: () => TP
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => PC,
        DotMD: () => _C,
        DotXL: () => CC
      });
      var i = n(91029),
        a = n(57120),
        s = n(62229),
        l = n.t(s, 2),
        u = n.n(s),
        c = n(83919);

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
          for (var [l, u] of m.compoundVariants) g(l, n, m.defaultVariants) && (t += " " + u);
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
        const s = e ? c.DX : `h${t}`,
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
      var C = (e, t, n) => {
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
            for (var [u, c] of e.compoundVariants) C(u, r, e.defaultVariants) && (n += " " + c);
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
      const T = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? c.DX : "p",
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

      function x(e) {
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

      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = x(o)) in r ? Object.defineProperty(r, o, {
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
      var N = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        A = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = k(k({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) N(u, r, e.defaultVariants) && (n += " " + c);
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
      const M = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? c.DX : "span",
          l = (0, a.v6)(r, {
            className: A({
              appearance: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...l
        })
      }));

      function R(e) {
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

      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? D(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = R(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function I(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var B = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        H = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = j(j({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) B(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return I(e.variantClassNames, (e => I(e, (e => e.split(" ")[0]))))
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
        const s = e ? c.DX : "span",
          l = (0, a.v6)(r, {
            className: H({
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
            for (var [u, c] of e.compoundVariants) K(u, r, e.defaultVariants) && (n += " " + c);
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
        const s = e ? c.DX : "p",
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

      function X(e) {
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

      function $(e, t) {
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
          t % 2 ? $(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = X(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
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
            for (var [u, c] of e.compoundVariants) Q(u, r, e.defaultVariants) && (n += " " + c);
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
          const s = e ? c.DX : ee[n] || "span",
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
      var ne = n(3082);
      const re = new Set(["id"]),
        oe = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        ie = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        ae = /^(data-.*)$/;
      const se = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function le(e) {
        const t = (0, s.useRef)(null);
        return se((() => {
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
        ce = e => e && "window" in e && e.window === e ? e : ue(e).defaultView || window;

      function de(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const fe = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        he = s.createContext(fe),
        pe = s.createContext(!1);
      let me = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        ve = new WeakMap;
      const ge = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)("function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(we, ye, be) : (0, s.useContext)(pe));
        return e || `${n?"react-aria":`react-aria${fe.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(he);
        t !== fe || me || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(he),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = ve.get(e);
                null == n ? ve.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, ve.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function ye() {
        return !1
      }

      function be() {
        return !0
      }

      function we(e) {
        return () => {}
      }
      let Ee = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        _e = new Map;

      function Pe(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = ge(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return Ee && _e.set(o, i), se((() => {
          let e = o;
          return () => {
            _e.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function Ce(e, t) {
        if (e === t) return e;
        let n = _e.get(e);
        if (n) return n(t), t;
        let r = _e.get(t);
        return r ? (r(e), e) : t
      }

      function Se(e = []) {
        let t = Pe(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = le((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            se((() => {
              r.current && o()
            }));
            let i = le((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return se(o, [t, o, ...e]), n
      }
      var Te = n(15302);

      function xe(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = de(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Ce(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Te.A)(n, o)
          }
        }
        return t
      }

      function Oe(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = Pe(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function ke(e) {
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
          t = Pe(t);
          let a = Pe(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: Oe({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Se([Boolean(t), Boolean(n), r, o]), l = Se([Boolean(t), Boolean(n), r, o]);
        return a = xe(a, {
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
      let Le = new Map,
        Ne = new Set;

      function Ae() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Le.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Le.delete(n.target)), 0 === Le.size)) {
            for (let e of Ne) e();
            Ne.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Le.get(n.target);
          r || (r = new Set, Le.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Me(e) {
        if (function() {
            if (null == Re) {
              Re = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Re = !0, !0
                  }
                })
              } catch (e) {}
            }
            return Re
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
      "undefined" != typeof document && ("loading" !== document.readyState ? Ae() : document.addEventListener("DOMContentLoaded", Ae));
      let Re = null;

      function De() {
        return e = /^Mac/i, "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
        var e, t
      }

      function je(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (t = /Android/i, "undefined" != typeof window && null != window.navigator && ((null === (n = window.navigator.userAgentData) || void 0 === n ? void 0 : n.brands.some((e => t.test(e.brand)))) || t.test(window.navigator.userAgent)) && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
        var t, n
      }
      let Ie = null,
        Be = new Set,
        He = new Map,
        Fe = !1,
        Ue = !1;

      function Ve(e, t) {
        for (let n of Be) n(e, t)
      }

      function ze(e) {
        Fe = !0,
          function(e) {
            return !(e.metaKey || !De() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ie = "keyboard", Ve("keyboard", e))
      }

      function Ge(e) {
        Ie = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Fe = !0, Ve("pointer", e))
      }

      function Ke(e) {
        je(e) && (Fe = !0, Ie = "virtual")
      }

      function qe(e) {
        e.target !== window && e.target !== document && (Fe || Ue || (Ie = "virtual", Ve("virtual", e)), Fe = !1, Ue = !1)
      }

      function We() {
        Fe = !1, Ue = !0
      }

      function Xe(e) {
        if ("undefined" == typeof window || He.get(ce(e))) return;
        const t = ce(e),
          n = ue(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Fe = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", ze, !0), n.addEventListener("keyup", ze, !0), n.addEventListener("click", Ke, !0), t.addEventListener("focus", qe, !0), t.addEventListener("blur", We, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", Ge, !0), n.addEventListener("pointermove", Ge, !0), n.addEventListener("pointerup", Ge, !0)) : (n.addEventListener("mousedown", Ge, !0), n.addEventListener("mousemove", Ge, !0), n.addEventListener("mouseup", Ge, !0)), t.addEventListener("beforeunload", (() => {
          $e(e)
        }), {
          once: !0
        }), He.set(t, {
          focus: r
        })
      }
      const $e = (e, t) => {
        const n = ce(e),
          r = ue(e);
        t && r.removeEventListener("DOMContentLoaded", t), He.has(n) && (n.HTMLElement.prototype.focus = He.get(n).focus, r.removeEventListener("keydown", ze, !0), r.removeEventListener("keyup", ze, !0), r.removeEventListener("click", Ke, !0), n.removeEventListener("focus", qe, !0), n.removeEventListener("blur", We, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", Ge, !0), r.removeEventListener("pointermove", Ge, !0), r.removeEventListener("pointerup", Ge, !0)) : (r.removeEventListener("mousedown", Ge, !0), r.removeEventListener("mousemove", Ge, !0), r.removeEventListener("mouseup", Ge, !0)), He.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = ue(e);
        let n;
        "loading" !== t.readyState ? Xe(e) : (n = () => {
          Xe(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class Ye {
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

      function Ze(e) {
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
            se((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = le((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new Ye("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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

      function Qe(e) {
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
      let Je = s.createContext(null);

      function et(e) {
        let t = (0, s.useContext)(Je) || {};
        ! function(e, t) {
          se((() => {
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

      function tt(e, t) {
        let {
          focusProps: n
        } = Ze(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Qe(e.onKeyDown),
              onKeyUp: Qe(e.onKeyUp)
            }
          }
        }(e), o = xe(n, r), i = et(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = ue(e);
            if ("virtual" === Ie) {
              let r = t.activeElement;
              n = () => {
                t.activeElement === r && e.isConnected && Me(e)
              }, requestAnimationFrame((() => {
                0 === Le.size ? n() : Ne.add(n)
              }))
            } else Me(e);
            var n
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: xe({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }

      function nt(e) {
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
        ot = {
          ...rt,
          customError: !0,
          valid: !1
        },
        it = {
          isInvalid: !1,
          validationDetails: rt,
          validationErrors: []
        },
        at = (0, s.createContext)({}),
        st = "__formValidationState" + Date.now();

      function lt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function ut(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: ot
        } : null
      }

      function ct(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function dt(e, t) {
        let {
          inputElementType: n = "input",
          isDisabled: r = !1,
          isRequired: o = !1,
          isReadOnly: i = !1,
          type: a = "text",
          validationBehavior: l = "aria"
        } = e, [u, c] = function(e, t, n) {
          let [r, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
          (0, s.useEffect)((() => {
            let e = i.current;
            e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
          }), [a]);
          let l = a ? e : r,
            u = (0, s.useCallback)(((e, ...t) => {
              let r = (e, ...t) => {
                n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((n, ...o) => {
                let i = e(a ? l : n, ...o);
                return r(i, ...t), a ? n : i
              }))) : (a || o(e), r(e, ...t))
            }), [a, l, n]);
          return [l, u]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: d
        } = tt(e, t), f = function(e) {
          if (e[st]) {
            let {
              realtimeValidation: t,
              displayValidation: n,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[st];
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
            let u = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: ot
              } : null,
              c = (0, s.useMemo)((() => ut(function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return lt(n)
                }
                return []
              }(a, o))), [a, o]);
            (null == i ? void 0 : i.validationDetails.valid) && (i = null);
            let d = (0, s.useContext)(at),
              f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => lt(d[e]))) : lt(d[r]) : []), [d, r]),
              [h, p] = (0, s.useState)(d),
              [m, v] = (0, s.useState)(!1);
            d !== h && (p(d), v(!1));
            let g = (0, s.useMemo)((() => ut(m ? [] : f)), [m, f]),
              y = (0, s.useRef)(it),
              [b, w] = (0, s.useState)(it),
              E = (0, s.useRef)(it),
              [_, P] = (0, s.useState)(!1);
            return (0, s.useEffect)((() => {
              if (!_) return;
              P(!1);
              let e = c || i || y.current;
              ct(e, E.current) || (E.current = e, w(e))
            })), {
              realtimeValidation: u || g || c || i || it,
              displayValidation: "native" === l ? u || g || b : u || g || c || i || b,
              updateValidation(e) {
                "aria" !== l || ct(b, e) ? y.current = e : w(e)
              },
              resetValidation() {
                let e = it;
                ct(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
              },
              commitValidation() {
                "native" === l && P(!0), v(!0)
              }
            }
          }(e)
        }({
          ...e,
          value: u
        }), {
          isInvalid: h,
          validationErrors: p,
          validationDetails: m
        } = f.displayValidation, {
          labelProps: v,
          fieldProps: g,
          descriptionProps: y,
          errorMessageProps: b
        } = ke({
          ...e,
          isInvalid: h,
          errorMessage: e.errorMessage || p
        }), w = function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (re.has(t) || n && oe.has(t) || r && ie.has(t) || (null == o ? void 0 : o.has(t)) || ae.test(t)) && (i[t] = e[t]);
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
              o = le((() => {
                n && n(r.current)
              }));
            (0, s.useEffect)((() => {
              var t;
              let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
              return null == n || n.addEventListener("reset", o), () => {
                null == n || n.removeEventListener("reset", o)
              }
            }), [e, o])
          }(t, u, c),
          function(e, t, n) {
            let {
              validationBehavior: r,
              focus: o
            } = e;
            se((() => {
              if ("native" === r && (null == n ? void 0 : n.current)) {
                let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: nt(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let i = le((() => {
                t.resetValidation()
              })),
              a = le((e => {
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
                }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), Ie = "keyboard", Ve("keyboard", null)), e.preventDefault()
              })),
              l = le((() => {
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
            if (t.current instanceof ce(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: v,
            inputProps: xe(w, "input" === n && E, {
              disabled: r,
              readOnly: i,
              required: o && "native" === l,
              "aria-required": o && "aria" === l || void 0,
              "aria-invalid": h || void 0,
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
              ...g
            }),
            descriptionProps: y,
            errorMessageProps: b,
            isInvalid: h,
            validationErrors: p,
            validationDetails: m
          }
      }
      var ft = n(83540);

      function ht(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => ft.X || !window.matchMedia ? t : window.matchMedia(e).matches,
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

      function pt(e) {
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

      function mt(...e) {
        const t = (0, s.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const vt = () => ht("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function gt(e) {
        const t = (0, s.useRef)(e);
        return (0, s.useEffect)((() => {
          t.current = e
        })), (0, s.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const yt = ({
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
          u = (0, s.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(a, t)
          }), []),
          c = (0, s.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, s.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", u), document.removeEventListener("visibilitychange", c), window.clearTimeout(r.current), i(!1)
          };
          return n ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", u), document.addEventListener("visibilitychange", c), l()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function bt({
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
            i = gt(t);
          return (0, s.useEffect)((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = gt(n), u = (0, s.useCallback)((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l]);
        return [a, u]
      }

      function wt(e, t, n, r) {
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

      function Et(e = !0) {
        return !!e && ht("screen and (pointer: coarse) and (hover: none)")
      }
      const _t = (e, t = []) => {
        const n = (0, s.useRef)(!1);
        (0, s.useEffect)((() => (n.current = !0, () => {
          n.current = !1
        })), []), (0, s.useEffect)((() => {
          n.current && e()
        }), [...t])
      };

      function Pt(e) {
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

      function Ct(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ct(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Pt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Tt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var xt = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Ot = "foundry_vq8c3j8",
        kt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = St(St({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) xt(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tt(e.variantClassNames, (e => Tt(e, (e => e.split(" ")[0]))))
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
      const Lt = (0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: l,
        testId: u,
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
          E = mt(w, b),
          {
            inputProps: _,
            labelProps: P,
            descriptionProps: C,
            isInvalid: S,
            errorMessageProps: T,
            validationErrors: x
          } = dt({
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
            className: kt({
              isInvalid: S
            }),
            "aria-errormessage": T?.id
          }),
          k = e ? c.DX : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || r) && (0, i.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, i.jsx)(c.s6, {
              enabled: !!h,
              children: (0, i.jsx)(M, {
                ...P,
                className: (0, Te.$)("foundry_vq8c3j2", _.disabled && Ot),
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
          }), (0, i.jsx)(k, {
            rows: f,
            ref: E,
            "data-testid": u,
            ...O,
            children: o
          }), l && (0, i.jsx)(c.s6, {
            enabled: x.length > 0 || !!p,
            children: (0, i.jsx)(M, {
              ...C,
              className: (0, Te.$)("foundry_vq8c3j4", _.disabled && Ot),
              children: l
            })
          }), x.length > 0 && (0, i.jsxs)(M, {
            ...T,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, i.jsx)(ne.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), x.join(". ")]
          })]
        })
      }));

      function Nt(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let At = new Map;

      function Mt(e, t) {
        if (e === t) return e;
        let n = At.get(e);
        if (n) return n(t), t;
        let r = At.get(t);
        return r ? (r(e), e) : t
      }

      function Rt(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Nt(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Mt(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Te.A)(n, o)
          }
        }
        return t
      }
      const Dt = new Set(["id"]),
        jt = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        It = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Bt = /^(data-.*)$/;
      const Ht = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Ft = e => e && "window" in e && e.window === e ? e : Ht(e).defaultView || window;
      let Ut = new Map,
        Vt = new Set;

      function zt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = Ut.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), Ut.delete(n.target)), 0 === Ut.size)) {
            for (let e of Vt) e();
            Vt.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = Ut.get(n.target);
          r || (r = new Set, Ut.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Gt(e) {
        requestAnimationFrame((() => {
          0 === Ut.size ? e() : Vt.add(e)
        }))
      }

      function Kt(e) {
        if (function() {
            if (null == qt) {
              qt = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return qt = !0, !0
                  }
                })
              } catch (e) {}
            }
            return qt
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
      "undefined" != typeof document && ("loading" !== document.readyState ? zt() : document.addEventListener("DOMContentLoaded", zt));
      let qt = null;

      function Wt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Xt(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function $t() {
        return Xt(/^Mac/i)
      }

      function Yt() {
        return Xt(/^iPad/i) || $t() && navigator.maxTouchPoints > 1
      }

      function Zt() {
        return Xt(/^iPhone/i) || Yt()
      }

      function Qt() {
        return Wt(/Android/i)
      }

      function Jt(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Qt() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let en = null,
        tn = new Set,
        nn = new Map,
        rn = !1,
        on = !1;

      function an(e, t) {
        for (let n of tn) n(e, t)
      }

      function sn(e) {
        rn = !0,
          function(e) {
            return !(e.metaKey || !$t() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (en = "keyboard", an("keyboard", e))
      }

      function ln(e) {
        en = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (rn = !0, an("pointer", e))
      }

      function un(e) {
        Jt(e) && (rn = !0, en = "virtual")
      }

      function cn(e) {
        e.target !== window && e.target !== document && (rn || on || (en = "virtual", an("virtual", e)), rn = !1, on = !1)
      }

      function dn() {
        rn = !1, on = !0
      }

      function fn(e) {
        if ("undefined" == typeof window || nn.get(Ft(e))) return;
        const t = Ft(e),
          n = Ht(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          rn = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", sn, !0), n.addEventListener("keyup", sn, !0), n.addEventListener("click", un, !0), t.addEventListener("focus", cn, !0), t.addEventListener("blur", dn, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", ln, !0), n.addEventListener("pointermove", ln, !0), n.addEventListener("pointerup", ln, !0)) : (n.addEventListener("mousedown", ln, !0), n.addEventListener("mousemove", ln, !0), n.addEventListener("mouseup", ln, !0)), t.addEventListener("beforeunload", (() => {
          hn(e)
        }), {
          once: !0
        }), nn.set(t, {
          focus: r
        })
      }
      const hn = (e, t) => {
        const n = Ft(e),
          r = Ht(e);
        t && r.removeEventListener("DOMContentLoaded", t), nn.has(n) && (n.HTMLElement.prototype.focus = nn.get(n).focus, r.removeEventListener("keydown", sn, !0), r.removeEventListener("keyup", sn, !0), r.removeEventListener("click", un, !0), n.removeEventListener("focus", cn, !0), n.removeEventListener("blur", dn, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", ln, !0), r.removeEventListener("pointermove", ln, !0), r.removeEventListener("pointerup", ln, !0)) : (r.removeEventListener("mousedown", ln, !0), r.removeEventListener("mousemove", ln, !0), r.removeEventListener("mouseup", ln, !0)), nn.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = Ht(e);
        let n;
        "loading" !== t.readyState ? fn(e) : (n = () => {
          fn(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      const pn = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function mn(e, t) {
        pn((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }

      function vn(e) {
        const t = (0, s.useRef)(null);
        return pn((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      class gn {
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

      function yn(e) {
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
            pn((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = vn((t => {
              null == e || e(t)
            }));
            return (0, s.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    t.current.isFocused = !1, r.disabled && n(new gn("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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
            const t = Ht(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), a(e))
          }), [o, n, a]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : i
          }
        }
      }

      function bn(e) {
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
      let wn = s.createContext(null);

      function En(e, t) {
        let {
          focusProps: n
        } = yn(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: bn(e.onKeyDown),
              onKeyUp: bn(e.onKeyUp)
            }
          }
        }(e), o = Rt(n, r), i = function(e) {
          let t = (0, s.useContext)(wn) || {};
          mn(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = Ht(e);
            if ("virtual" === en) {
              let n = t.activeElement;
              Gt((() => {
                t.activeElement === n && e.isConnected && Kt(e)
              }))
            } else Kt(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: Rt({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let _n = "default",
        Pn = "",
        Cn = new WeakMap;

      function Sn(e) {
        if (Zt()) {
          if ("default" === _n) {
            const t = Ht(e);
            Pn = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          _n = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Cn.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Tn(e) {
        if (Zt()) {
          if ("disabled" !== _n) return;
          _n = "restoring", setTimeout((() => {
            Gt((() => {
              if ("restoring" === _n) {
                const t = Ht(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Pn || ""), Pn = "", _n = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Cn.has(e)) {
          let t = Cn.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Cn.delete(e)
        }
      }
      const xn = s.createContext({
        register: () => {}
      });

      function On(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function kn(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, On(e, t, "get"))
      }

      function Ln(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }

      function Nn(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, On(e, t, "set"), n), n
      }

      function An(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Wt(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && ($t() ? i = !0 : a = !0);
        let u = Wt(/AppleWebKit/i) && !Wt(/Chrome/i) && $t() && !Yt() ? new KeyboardEvent("keydown", {
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
        An.isOpening = n, Kt(e), e.dispatchEvent(u), An.isOpening = !1
      }
      xn.displayName = "PressResponderContext", An.isOpening = !1;
      var Mn = new WeakMap;
      class Rn {
        continuePropagation() {
          Nn(this, Mn, !1)
        }
        get shouldStopPropagation() {
          return kn(this, Mn)
        }
        constructor(e, t, n) {
          Ln(this, Mn, {
            writable: !0,
            value: void 0
          }), Nn(this, Mn, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
      }
      const Dn = Symbol("linkClicked");

      function jn(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, s.useContext)(xn);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = Rt(r, e), n()
          }
          return mn(t, e.ref), e
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
        }(), b = vn(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Rn("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = vn(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Rn("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Rn("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = vn(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Rn("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = vn((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(Fn(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || Tn(t.target))
        })), P = vn((e => {
          c && _(e)
        })), C = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Bn(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  zn(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Bn(t, r) && !t.repeat && r.contains(t.target) && e.target && E(Fn(e.target, t), "keyboard")
                      };
                    g(Ht(t.currentTarget), "keyup", Nt(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && $t() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !An.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || Jt(t.nativeEvent))) {
                    a || u || Kt(t.currentTarget);
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
              if (e.isPressed && e.target && Bn(t, e.target)) {
                var r;
                zn(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(Fn(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && In(e.target) && e.target.contains(n) && !t[Dn] && (t[Dn] = !0, An(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
              if (i = t.nativeEvent, !Qt() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              Vn(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || u || Kt(t.currentTarget), d || Sn(e.target), s = b(t, e.pointerType), g(Ht(t.currentTarget), "pointermove", n, !1), g(Ht(t.currentTarget), "pointerup", r, !1), g(Ht(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (Vn(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && Un(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && Un(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(Fn(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(Fn(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (Un(t, e.target) && null != e.pointerType ? w(Fn(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(Fn(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || Tn(e.target))
              },
              o = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (Vn(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = Jt(t.nativeEvent) ? "virtual" : "mouse", a || u || Kt(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(Ht(t.currentTarget), "mouseup", n, !1)))
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
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && Un(t, e.target) && null != e.pointerType ? w(Fn(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(Fn(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || u || Kt(t.currentTarget), d || Sn(e.target), b(t, e.pointerType) && t.stopPropagation(), g(Ft(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Hn(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Un(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), P(t)), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Hn(t.nativeEvent, e.activePointerId),
                r = !0;
              n && Un(n, t.currentTarget) && null != e.pointerType ? (E(t, e.pointerType), r = w(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && Tn(e.target), y()
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
        }), [g, a, u, y, d, _, P, w, b, E]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || Tn(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: Rt(h, C)
        }
      }

      function In(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Bn(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof Ft(o).HTMLInputElement && !Kn(o, n) || o instanceof Ft(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && In(o)) && "Enter" !== n)
      }

      function Hn(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function Fn(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function Un(e, t) {
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

      function Vn(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function zn(e, t) {
        return e instanceof HTMLInputElement ? !Kn(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !In(e)
      }
      const Gn = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function Kn(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Gn.has(e.type)
      }

      function qn(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: u,
          preventFocusOnPress: c,
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
        } = jn({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: u,
          onPress: i,
          onPressUp: l,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = En(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Rt(b, g, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            propNames: o
          } = t, i = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (Dt.has(t) || n && jt.has(t) || r && It.has(t) || (null == o ? void 0 : o.has(t)) || Bt.test(t)) && (i[t] = e[t]);
          return i
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: Rt(n, w, {
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

      function Wn(e) {
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

      function Xn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function $n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xn(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Wn(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Yn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Zn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Qn = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = $n($n({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Zn(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Yn(e.variantClassNames, (e => Yn(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Jn = Qn({
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
        er = Qn({
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
      const tr = (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: r,
        onClick: o,
        iconLeft: l,
        iconLeftLabel: u,
        iconRight: d,
        iconRightLabel: f,
        appearance: h,
        size: p = "MD",
        allCaps: m = !1,
        fullWidth: v = !1,
        ...g
      }, y) => {
        const b = (0, s.useRef)(null),
          w = mt(b, y),
          {
            events: E,
            others: _
          } = (0, a.bZ)(g, {
            onPress: !1
          }),
          {
            buttonProps: P,
            isPressed: C
          } = qn({
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
            "data-pressed": C,
            "data-testid": e,
            className: Jn({
              appearance: h,
              size: p,
              fullWidth: v,
              allCaps: m
            })
          }),
          T = l && ne[l],
          x = d && ne[d],
          O = t ? c.DX : "button",
          k = v && (x || x && T);
        return (0, i.jsxs)(O, {
          ref: w,
          ...S,
          children: [k && (0, i.jsx)("div", {
            className: "foundry_17pcofyo"
          }), T && (0, i.jsx)(T, {
            label: u || "",
            size: p,
            className: "foundry_17pcofyk"
          }), (0, i.jsx)(c.xV, {
            children: r
          }), x && (0, i.jsx)(x, {
            label: f || "",
            size: p,
            className: er({
              fullWidth: v
            })
          })]
        })
      }));
      var nr = {},
        rr = n(26324),
        or = n.n(rr);
      class ir {
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
      var ar, sr, lr = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        ur = !1;

      function cr(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(ar || (ar = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(sr || (sr = {}));
      const dr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        fr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        hr = new Map([
          [126, sr.Element],
          [94, sr.Start],
          [36, sr.End],
          [42, sr.Any],
          [33, sr.Not],
          [124, sr.Hyphen]
        ]),
        pr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        mr = new Set(["contains", "icontains"]);

      function vr(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function gr(e) {
        return e.replace(fr, vr)
      }

      function yr(e) {
        return 39 === e || 34 === e
      }

      function br(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function wr(e) {
        const t = [],
          n = Er(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function Er(e, t, n) {
        let r = [];

        function o(e) {
          const r = t.slice(n + e).match(dr);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [o] = r;
          return n += e + o.length, gr(o)
        }

        function i(e) {
          for (n += e; n < t.length && br(t.charCodeAt(n));) n++
        }

        function a() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || s(n) ? 41 !== t.charCodeAt(n) || s(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return gr(t.slice(e, n - 1))
        }

        function s(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return 1 == (1 & n)
        }

        function l() {
          if (r.length > 0 && function(e) {
              switch (e.type) {
                case ar.Adjacent:
                case ar.Child:
                case ar.Descendant:
                case ar.Parent:
                case ar.Sibling:
                case ar.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(r[r.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          r.length > 0 && r[r.length - 1].type === ar.Descendant ? r[r.length - 1].type = e : (l(), r.push({
            type: e
          }))
        }

        function c(e, t) {
          r.push({
            type: ar.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (r.length && r[r.length - 1].type === ar.Descendant && r.pop(), 0 === r.length) throw new Error("Empty sub-selector");
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
              0 !== r.length && r[0].type === ar.Descendant || (l(), r.push({
                type: ar.Descendant
              })), i(1);
              break;
            case 62:
              u(ar.Child), i(1);
              break;
            case 60:
              u(ar.Parent), i(1);
              break;
            case 126:
              u(ar.Sibling), i(1);
              break;
            case 43:
              u(ar.Adjacent), i(1);
              break;
            case 46:
              c("class", sr.Element);
              break;
            case 35:
              c("id", sr.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(n) ? e = o(1) : t.startsWith("*|", n) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (a = e, e = o(1))), i(0);
              let l = sr.Exists;
              const u = hr.get(t.charCodeAt(n));
              if (u) {
                if (l = u, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(n) && (l = sr.Equals, i(1));
              let c = "",
                d = null;
              if ("exists" !== l) {
                if (yr(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || s(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  c = gr(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!br(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || s(n));) n += 1;
                  c = gr(t.slice(e, n))
                }
                i(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const f = {
                type: ar.Attribute,
                name: e,
                action: l,
                value: c,
                namespace: a,
                ignoreCase: d
              };
              r.push(f);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(n + 1)) {
                r.push({
                  type: ar.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (pr.has(e)) {
                  if (yr(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = Er(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = a(), mr.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && yr(e) && (i = i.slice(1, -1))
                  }
                  i = gr(i)
                } r.push({
                type: ar.Pseudo,
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
                  u(ar.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!dr.test(t.slice(n))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (s = a, 42 === t.charCodeAt(n + 1) ? (a = "*", n += 2) : a = o(1)), r.push("*" === a ? {
                type: ar.Universal,
                namespace: s
              } : {
                type: ar.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), n
      }

      function _r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Pr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _r(Object(n), !0).forEach((function(t) {
            Cr(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _r(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Cr(e, t, n) {
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
      const Sr = function e(t) {
          return n.withOptions = n => e(Pr(Pr({}, t), n)), n;

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
        Tr = Sr;
      var xr = function() {
        return xr = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, xr.apply(this, arguments)
      };

      function Or(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function kr(e, t) {
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
      var Lr, Nr = /(\u000D|\u000C|\u000D\u000A)/g,
        Ar = /[\u0000\uD800-\uDFFF]/g,
        Mr = /(\/\*)[\s\S]*?(\*\/)/g,
        Rr = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === n) return [o, String.fromCharCode.apply(null, r)];
            if (92 === i) {
              var a = jr(e, o);
              if (null === a) return null;
              var s = kr(a, 2),
                l = s[0],
                u = s[1];
              r.push(u), o = l
            } else {
              if (10 === i) return null;
              r.push(i)
            }
          }
          return null
        },
        Dr = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        jr = function(e, t) {
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
        Ir = function(e, t) {
          var n = Br(e, t);
          if (null === n) return null;
          var r = kr(n, 3),
            o = r[0],
            i = r[1],
            a = r[2],
            s = Fr(e, o + 1);
          if (null !== s) {
            var l = kr(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        Br = function(e, t) {
          if (e.length <= t) return null;
          var n = "integer",
            r = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && r.push(45)); t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (r.push(i, a), n = "number", t += 2; t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (n = "number", l ? (r.push(69, a), t += 2) : 45 === a ? (r.push(69, 45, s), t += 3) : (r.push(69, s), t += 3); t < e.length;) {
                  var u;
                  if (!((u = e.charCodeAt(t)) >= 48 && u <= 57)) break;
                  r.push(u), t += 1
                }
            }
          }
          var c = String.fromCharCode.apply(null, r),
            d = "number" === n ? parseFloat(c) : parseInt(c);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, n]
        },
        Hr = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = jr(e, t);
              if (null === o) break;
              var i = kr(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        Fr = function(e, t) {
          if (e.length <= t || !Dr(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = jr(e, t);
              if (null === o) break;
              var i = kr(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        Ur = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], o = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) o || 0 === r.length || (o = !0);
            else if (92 === n) {
              var i = jr(e, t);
              if (null === i || o) return null;
              var a = kr(i, 2),
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
        Vr = function(e, t) {
          var n = Fr(e, t);
          if (null === n) return null;
          var r = kr(n, 2),
            o = r[0],
            i = r[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Ur(e, o + a);
                  if (null === l) return null;
                  var u = kr(l, 2);
                  return [u[0], u[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        zr = function(e) {
          if (null === e.mediaCondition) return e;
          var t = Gr(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        Gr = function e(t) {
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
        Kr = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        qr = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Nr, "\n").replace(Ar, "�")).replace(Mr, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (S = Rr(e, t))) return null;
                var i = kr(S, 2),
                  a = i[0],
                  s = i[1];
                n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = Dr(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (S = Hr(e, t + 1))) {
                    var u = kr(S, 2);
                    a = u[0], s = u[1], n.push({
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
                if (null === (S = Rr(e, t))) return null;
                var c = kr(S, 2);
                a = c[0], s = c[1], n.push({
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
                var d = Ir(e, t);
                if (null === d) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var f = kr(d, 2);
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
                if (null !== (y = Ir(e, t))) {
                  var h = kr(y, 2);
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
                if (null !== (S = Vr(e, t))) {
                  var v = kr(S, 3),
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
                if (null !== (y = Ir(e, t))) {
                  var b = kr(y, 2);
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
                if (null !== (S = Fr(e, t + 1))) {
                  var E = kr(S, 2);
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
                if (null === (S = jr(e, t))) return null;
                var _ = kr(S, 2);
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
                var P, C = kr(S = Ir(e, t), 2);
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
                if (null === (S = Vr(e, t))) return null;
                var T = kr(S, 3);
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
          if (null === t) throw Kr("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw Kr("Expected whitespace after media");
            n = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                r = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw Kr("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), Xr(t)
        },
        Wr = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(xr(xr({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        Xr = function(e) {
          for (var t, n, r = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? r.push([]) : r[r.length - 1].push(i)
          }
          var a = r.map(Wr);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : $r(e)
            })),
            l = [];
          try {
            for (var u = function(e) {
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
              c && !c.done && (n = u.return) && n.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw Kr("No valid media queries");
          return l
        },
        $r = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Yr(e, !0)
            }
          } catch (e) {
            throw Kr("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw Kr("Expected media condition or media prefix");
            var n = null,
              r = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (n = o);
            var i = null === n ? 0 : 1;
            if (e.length <= i) throw Kr("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) r = "all";
              else if ("print" === s || "screen" === s) r = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw Kr("Unknown ident '".concat(s, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== a.type) throw Kr("Invalid media query");
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
                  mediaCondition: Yr(l, !0)
                }
              } catch (e) {
                throw Kr("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw Kr("Expected media condition after media prefix");
            var u = e[i + 1];
            if ("<ident-token>" !== u.type || "and" !== u.value) throw Kr("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: Yr(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw Kr("Expected media condition after 'and'", e)
            }
          }
        },
        Yr = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var u = t[l];
            if ("<(-token>" === u.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === u.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, i + 1);
          if (o = 1 === a ? Zr(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), i === t.length - 1) return {
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
        Zr = function(e) {
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
                u = null,
                c = l.slice(0, 4);
              return "min-" === c ? (u = "min", l = l.slice(4)) : "max-" === c && (u = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: u,
                feature: l,
                value: Or(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = Qr(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw Kr("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        Qr = function(e) {
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
                var u = e[s + 1],
                  c = e[s + 2];
                if ("<delim-token>" !== u.type) throw new Error("Invalid range");
                var d = u.value;
                if (60 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
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
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = Or(p, ["wsBefore", "wsAfter"]));
            var E = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var _;
                w = y.type, "infinite" === (_ = y.value) && (E = {
                  type: w,
                  value: _
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, E = Or(y, ["wsBefore", "wsAfter"]));
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

      function Jr(e) {
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

      function eo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function to(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eo(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Jr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eo(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function no(e, t) {
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

      function ro(e, t) {
        for (var n in e) t(e[n], n)
      }

      function oo(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
      }
      class io {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new io
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
      var ao, so = {
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
        lo = Object.keys(so),
        uo = so,
        co = (e, t) => new Error(Tr(ao || (ao = cr(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        fo = e => {
          if ("@media " === e) throw co(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = zr(e[t])
            })(qr(e))
          } catch (t) {
            throw co(e, t.message)
          }
        },
        ho = ["vars"],
        po = ["content"],
        mo = "__DECLARATION",
        vo = {
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

      function go(e, t, n, r) {
        var o = e.slice(0, t),
          i = e.slice(n);
        return "".concat(o).concat(r).concat(i)
      }
      var yo = [...lo, "@layer", "@media", "@supports", "@container", "selectors"];
      class bo {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new io], this.fontFaceRules = [], this.keyframesRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new ir(e), this.layers = new Map, this.composedClassLists = t.map((e => {
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
            if (this.currConditionalRuleset = new io, "layer" === e.type) {
              var t = "@layer ".concat(e.name);
              this.addLayer([t])
            } else {
              var n = oo(e.rule, yo);
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
          return ro(e, ((t, n) => {
            "number" != typeof t || 0 === t || vo[n] || (e[n] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = no(e, ho);
          return t ? to(to({}, function(e, t) {
            var n, r, o, i = {};
            for (var a in e) i[(e[a], n = a, r = void 0, o = void 0, (o = (r = n).match(/^var\((.*)\)$/)) ? o[1] : r)] = e[a];
            return i
          }(t)), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = no(e, po);
          return void 0 === t ? n : to({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(or()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (lr.length < 1) throw new Error("No adapter configured");
                  return lr[lr.length - 1]
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
            var [l, [u]] = i[s], c = l - u.length + 1;
            c >= a || (a = c, "." !== t[c - 1] && (t = go(t, c, l + 1, this.transformClassname(u))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          ro(t.selectors, ((t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var n, r = () => {
                var n = new RegExp(".".concat(or()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(n, "&")
              };
              try {
                n = wr(e)
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
                  throw new Error(Tr(Lr || (Lr = cr(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: oo(t, yo)
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
              fo(a);
              var s = [...r, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: oo(i, yo)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@container ".concat(e)))), ro(t, ((t, n) => {
            var o = "@container ".concat(n),
              i = [...r, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: oo(t, yo)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@layer ".concat(e)))), ro(t, ((t, n) => {
            var o = [...r, "@layer ".concat(n)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: oo(t, yo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@supports ".concat(e)))), ro(t, ((t, n) => {
            var o = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: oo(t, yo)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (uo[r]) {
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
          for (var t of this.fontFaceRules) e.push(wo({
            "@font-face": t
          }));
          for (var n of this.keyframesRules) e.push(wo({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var r of this.layers.values()) {
            var [o, ...i] = r.reverse(), a = {
              [o]: mo
            };
            for (var s of i) a = {
              [s]: a
            };
            e.push(wo(a))
          }
          for (var l of this.rules) e.push(wo({
            [l.selector]: l.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var c of u.renderToArray()) e.push(wo(c));
          return e.filter(Boolean)
        }
      }

      function wo(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = [],
          r = function(r) {
            var o, i = e[r];
            i && Array.isArray(i) ? n.push(...i.map((e => wo({
              [r]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || n.push("".concat(t).concat(r, " {\n").concat(wo(i, t + "  "), "\n").concat(t, "}")) : i === mo ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (o = r, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) r(o);
        return n.join("\n")
      }
      n(94751);
      var Eo = new Set,
        _o = [],
        Po = [],
        Co = {
          appendCss: e => {
            Po.push(e)
          },
          registerClassName: e => {
            Eo.add(e)
          },
          registerComposition: e => {
            _o.push(e)
          },
          markCompositionUsed: () => {},
          onEndFileScope: e => {
            var t = function(e) {
              var {
                localClassNames: t,
                cssObjs: n,
                composedClassLists: r
              } = e, o = new bo(t, r);
              for (var i of n) o.processCssObj(i);
              return o.toCss()
            }({
              localClassNames: Array.from(Eo),
              composedClassLists: _o,
              cssObjs: Po
            }).join("\n");
            (e => {
              var {
                fileScope: t,
                css: n
              } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = nr[r];
              if (!o) {
                var i = document.createElement("style");
                t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = nr[r] = i, document.head.appendChild(i)
              }
              o.innerHTML = n
            })({
              fileScope: e,
              css: t
            }), Po = []
          },
          getIdentOption: () => "short"
        };
      ur || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        ur = !0, lr.push(e)
      })(Co);
      var So = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        To = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        xo = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        Oo = "--foundry_nu8bkp0",
        ko = "foundry_nu8bkp1";
      const Lo = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: To,
          platformScaleBreakpoints: So,
          locale: "en-US"
        }),
        No = () => (0, s.useContext)(Lo),
        Ao = (e, t) => {
          const n = "more" === t ? xo.lightHc : xo.light,
            r = "more" === t ? xo.darkHc : xo.dark;
          return "dark" === e ? r : n
        };
      const Mo = () => a.X3 ? null : document.body;
      (0, s.forwardRef)((({
        children: e,
        className: t,
        container: n = Mo(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: l,
        contrastMode: u,
        defaultContrastMode: d,
        platformScaleBreakpoints: f,
        platformScaleRatios: h,
        defaultPlatformScale: p,
        platformScale: m,
        locale: v = "en-US"
      }, g) => {
        const y = (0, s.useRef)(null),
          b = mt(y, g),
          w = (0, s.useRef)(n),
          {
            ratio: E,
            scale: _
          } = function(e) {
            const t = (0, s.useMemo)((() => ({
                ...To,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, s.useMemo)((() => ({
                ...So,
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
            platformScaleBreakpoints: f,
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
            const o = ht("(prefers-color-scheme: light)"),
              i = ht("(prefers-color-scheme: dark)"),
              a = ht("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || i && "dark" || t,
              u = n || a && "more" || r,
              c = (0, s.useMemo)((() => Ao(l, u)), [l, u]),
              d = (0, s.useMemo)((() => ((e, t) => {
                const n = Ao(e, t);
                return [xo.light, xo.dark, xo.lightHc, xo.darkHc].filter((e => e !== n))
              })(l, u)), [l, u]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: u
            }
          }({
            colorScheme: o,
            defaultColorScheme: l,
            contrastMode: u,
            defaultContrastMode: d
          });
        return ((e, t, n, r, o) => {
          const i = pt(o),
            a = pt(e.current);
          (0, s.useEffect)((() => {
            e.current?.classList.contains(ko) || e.current?.classList.add(ko), e.current?.classList.add(n), e.current?.classList.remove(...r), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [n, o]), (0, s.useEffect)((() => {
            e.current?.style.setProperty(Oo, t.toString())
          }), [t]), (0, s.useEffect)((() => {
            a?.classList.remove(ko), a?.classList.remove(n), a?.style.removeProperty(Oo), o && a?.classList.remove(o)
          }), [a])
        })(r ? y : w, E, P, C, t), (0, i.jsx)(Lo.Provider, {
          value: {
            locale: v,
            defaultColorScheme: l,
            colorScheme: S,
            defaultContrastMode: d,
            contrastMode: T,
            defaultPlatformScale: p,
            platformScale: _,
            platformScaleRatios: h,
            platformScaleBreakpoints: f
          },
          children: r ? (0, i.jsx)(c.DX, {
            ref: b,
            children: e
          }) : e
        })
      }));
      const Ro = {
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

      function Do(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
      }

      function jo(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .15;
        return 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Do(t - e, n - t, r) + t : e > n ? +Do(e - n, n - t, r) + n : e
      }

      function Io(e, t, n) {
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

      function Bo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bo(Object(n), !0).forEach((function(t) {
            Io(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bo(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      const Fo = {
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

      function Uo(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : ""
      }
      const Vo = ["enter", "leave"];
      const zo = ["gotpointercapture", "lostpointercapture"];

      function Go(e) {
        let t = e.substring(2).toLowerCase();
        const n = !!~t.indexOf("passive");
        n && (t = t.replace("passive", ""));
        const r = zo.includes(t) ? "capturecapture" : "capture",
          o = !!~t.indexOf(r);
        return o && (t = t.replace("capture", "")), {
          device: t,
          capture: o,
          passive: n
        }
      }

      function Ko(e) {
        return "touches" in e
      }

      function qo(e) {
        return Ko(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
      }

      function Wo(e) {
        return Ko(e) ? function(e) {
          return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
        }(e)[0] : e
      }

      function Xo(e, t) {
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

      function $o(e, t) {
        const [n, r] = Array.from(e.touches).filter((e => t.includes(e.identifier)));
        return Xo(n, r)
      }

      function Yo(e) {
        const t = Wo(e);
        return Ko(e) ? t.identifier : t.pointerId
      }

      function Zo(e) {
        const t = Wo(e);
        return [t.clientX, t.clientY]
      }

      function Qo(e) {
        let {
          deltaX: t,
          deltaY: n,
          deltaMode: r
        } = e;
        return 1 === r ? (t *= 40, n *= 40) : 2 === r && (t *= 800, n *= 800), [t, n]
      }

      function Jo(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e(...n)
        }
        return e
      }

      function ei() {}

      function ti() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? ei : 1 === t.length ? t[0] : function() {
          let e;
          for (const n of t) e = n.apply(this, arguments) || e;
          return e
        }
      }

      function ni(e, t) {
        return Object.assign({}, t, e || {})
      }
      class ri {
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
          t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Jo(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
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
            Ro.addTo(t._distance, e)
          }
          this.axisIntent && this.axisIntent(e);
          const [i, a] = t._movement, [s, l] = n.threshold, {
            _step: u,
            values: c
          } = t;
          if (n.hasCustomTransform ? (!1 === u[0] && (u[0] = Math.abs(i) >= s && c[0]), !1 === u[1] && (u[1] = Math.abs(a) >= l && c[1])) : (!1 === u[0] && (u[0] = Math.abs(i) >= s && Math.sign(i) * s), !1 === u[1] && (u[1] = Math.abs(a) >= l && Math.sign(a) * l)), t.intentional = !1 !== u[0] || !1 !== u[1], !t.intentional) return;
          const d = [0, 0];
          if (n.hasCustomTransform) {
            const [e, t] = c;
            d[0] = !1 !== u[0] ? e - u[0] : 0, d[1] = !1 !== u[1] ? t - u[1] : 0
          } else d[0] = !1 !== u[0] ? i - u[0] : 0, d[1] = !1 !== u[1] ? a - u[1] : 0;
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          const f = t.offset,
            h = t._active && !t._blocked || t.active;
          h && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = r[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Jo(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
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
                [u, c]
              ] = e;
              return [jo(r, s, l, i), jo(o, u, c, a)]
            }(t._bounds, t.offset, w), t.delta = Ro.sub(t.offset, f), this.computeMovement(), h && (!t.last || o > 32)) {
            t.delta = Ro.sub(t.offset, f);
            const e = t.delta.map(Math.abs);
            Ro.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && o > 0 && (t.velocity = [e[0] / o, e[1] / o], t.timeDelta = o)
          }
        }
        emit() {
          const e = this.state,
            t = this.shared,
            n = this.config;
          if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
          const r = this.handler(Ho(Ho(Ho({}, t), e), {}, {
            [this.aliasKey]: e.values
          }));
          void 0 !== r && (e.memo = r)
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean()
        }
      }
      class oi extends ri {
        constructor() {
          super(...arguments), Io(this, "aliasKey", "xy")
        }
        reset() {
          super.reset(), this.state.axis = void 0
        }
        init() {
          this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
        }
        computeOffset() {
          this.state.offset = Ro.add(this.state.lastOffset, this.state.movement)
        }
        computeMovement() {
          this.state.movement = Ro.sub(this.state.offset, this.state.lastOffset)
        }
        axisIntent(e) {
          const t = this.state,
            n = this.config;
          if (!t.axis && e) {
            const r = "object" == typeof n.axisThreshold ? n.axisThreshold[qo(e)] : n.axisThreshold;
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
      const ii = e => e,
        ai = {
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          eventOptions: (e, t, n) => Ho(Ho({}, n.shared.eventOptions), e),
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
                return Ro.toVector(e)
            }
          },
          from: e => "function" == typeof e ? e : null != e ? Ro.toVector(e) : void 0,
          transform(e, t, n) {
            const r = e || n.shared.transform;
            return this.hasCustomTransform = !!r, r || ii
          },
          threshold: e => Ro.toVector(e, 0)
        },
        si = Ho(Ho({}, ai), {}, {
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
            if ("function" == typeof e) return t => si.bounds(e(t));
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
        li = {
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
        ui = "undefined" != typeof window && window.document && window.document.createElement;

      function ci() {
        return ui && "ontouchstart" in window
      }
      const di = {
          isBrowser: ui,
          gesture: function() {
            try {
              return "constructor" in GestureEvent
            } catch (e) {
              return !1
            }
          }(),
          touch: ci(),
          touchscreen: ci() || ui && window.navigator.maxTouchPoints > 1,
          pointer: ui && "onpointerdown" in window,
          pointerLock: ui && "exitPointerLock" in window.document
        },
        fi = .5,
        hi = 50,
        pi = 250,
        mi = {
          mouse: 0,
          touch: 0,
          pen: 8
        },
        vi = Ho(Ho({}, si), {}, {
          device(e, t, n) {
            let {
              pointer: {
                touch: r = !1,
                lock: o = !1,
                mouse: i = !1
              } = {}
            } = n;
            return this.pointerLock = o && di.pointerLock, di.touch && r ? "touch" : this.pointerLock ? "mouse" : di.pointer && !i ? "pointer" : di.touch ? "touch" : "mouse"
          },
          preventScrollAxis(e, t, n) {
            let {
              preventScroll: r
            } = n;
            if (this.preventScrollDelay = "number" == typeof r ? r : r || void 0 === r && e ? 250 : void 0, di.touchscreen && !1 !== r) return e || (void 0 !== r ? "y" : void 0)
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
            const a = Ro.toVector(e, r ? o : i ? 1 : 0);
            return this.filterTaps = r, this.tapsThreshold = o, a
          },
          swipe() {
            let {
              velocity: e = fi,
              distance: t = hi,
              duration: n = pi
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
              velocity: this.transform(Ro.toVector(e)),
              distance: this.transform(Ro.toVector(t)),
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
          axisThreshold: e => e ? Ho(Ho({}, mi), e) : mi,
          keyboardDisplacement() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
          }
        });

      function gi(e) {
        const [t, n] = e.overflow, [r, o] = e._delta, [i, a] = e._direction;
        (t < 0 && r > 0 && i < 0 || t > 0 && r < 0 && i > 0) && (e._movement[0] = e._movementBound[0]), (n < 0 && o > 0 && a < 0 || n > 0 && o < 0 && a > 0) && (e._movement[1] = e._movementBound[1])
      }
      const yi = Ho(Ho({}, ai), {}, {
          device(e, t, n) {
            let {
              shared: r,
              pointer: {
                touch: o = !1
              } = {}
            } = n;
            if (r.target && !di.touch && di.gesture) return "gesture";
            if (di.touch && o) return "touch";
            if (di.touchscreen) {
              if (di.pointer) return "pointer";
              if (di.touch) return "touch"
            }
          },
          bounds(e, t, n) {
            let {
              scaleBounds: r = {},
              angleBounds: o = {}
            } = n;
            const i = e => {
                const t = ni(Jo(r, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              a = e => {
                const t = ni(Jo(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof r && "function" != typeof o ? [i(), a()] : e => [i(e), a(e)]
          },
          threshold(e, t, n) {
            return this.lockDirection = "lock" === n.axis, Ro.toVector(e, this.lockDirection ? [.1, 3] : 0)
          },
          modifierKey: e => void 0 === e ? "ctrlKey" : e,
          pinchOnWheel() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        bi = Ho(Ho({}, si), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        wi = si,
        Ei = si,
        _i = Ho(Ho({}, si), {}, {
          mouseOnly: function() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          }
        }),
        Pi = new Map,
        Ci = new Map;

      function Si(e) {
        Pi.set(e.key, e.engine), Ci.set(e.key, e.resolver)
      }
      const Ti = {
          key: "drag",
          engine: class extends oi {
            constructor() {
              super(...arguments), Io(this, "ingKey", "dragging")
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
                e._bounds = si.bounds(r)
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
              t.pointerCapture && e.target.setPointerCapture(e.pointerId), r && r.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = Yo(e), n._pointerActive = !0, this.computeValues(Zo(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== qo(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
            }
            startPointerDrag(e) {
              const t = this.state;
              t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
            }
            pointerMove(e) {
              const t = this.state,
                n = this.config;
              if (!t._pointerActive) return;
              const r = Yo(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              const o = Zo(e);
              return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = Ro.sub(o, t._values), this.computeValues(o)), Ro.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
            }
            pointerUp(e) {
              this.ctrl.setEventIds(e);
              try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
              } catch (e) {}
              const t = this.state,
                n = this.config;
              if (!t._active || !t._pointerActive) return;
              const r = Yo(e);
              if (void 0 !== t._pointerId && r !== t._pointerId) return;
              this.state._pointerActive = !1, this.setActive(), this.compute(e);
              const [o, i] = t._distance;
              if (t.tap = o <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
              else {
                const [e, r] = t._delta, [o, i] = t._movement, [a, s] = n.swipe.velocity, [l, u] = n.swipe.distance, c = n.swipe.duration;
                if (t.elapsedTime < c) {
                  const n = Math.abs(e / t.timeDelta),
                    c = Math.abs(r / t.timeDelta);
                  n > a && Math.abs(o) > l && (t.swipe[0] = Math.sign(e)), c > s && Math.abs(i) > u && (t.swipe[1] = Math.sign(r))
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
              const t = li[e.key];
              if (t) {
                const n = this.state,
                  r = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, r), n._keyboardActive = !0, Ro.addTo(n._movement, n._delta), this.compute(e), this.emit()
              }
            }
            keyUp(e) {
              e.key in li && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
            }
            bind(e) {
              const t = this.config.device;
              e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
              })
            }
          },
          resolver: vi
        },
        xi = {
          key: "hover",
          engine: class extends oi {
            constructor() {
              super(...arguments), Io(this, "ingKey", "hovering")
            }
            enter(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.start(e), this.computeValues(Zo(e)), this.compute(e), this.emit())
            }
            leave(e) {
              if (this.config.mouseOnly && "mouse" !== e.pointerType) return;
              const t = this.state;
              if (!t._active) return;
              t._active = !1;
              const n = Zo(e);
              t._movement = t._delta = Ro.sub(n, t._values), this.computeValues(n), this.compute(e), t.delta = t.movement, this.emit()
            }
            bind(e) {
              e("pointer", "enter", this.enter.bind(this)), e("pointer", "leave", this.leave.bind(this))
            }
          },
          resolver: _i
        },
        Oi = {
          key: "move",
          engine: class extends oi {
            constructor() {
              super(...arguments), Io(this, "ingKey", "moving")
            }
            move(e) {
              this.config.mouseOnly && "mouse" !== e.pointerType || (this.state._active ? this.moveChange(e) : this.moveStart(e), this.timeoutStore.add("moveEnd", this.moveEnd.bind(this)))
            }
            moveStart(e) {
              this.start(e), this.computeValues(Zo(e)), this.compute(e), this.computeInitial(), this.emit()
            }
            moveChange(e) {
              if (!this.state._active) return;
              const t = Zo(e),
                n = this.state;
              n._delta = Ro.sub(t, n._values), Ro.addTo(n._movement, n._delta), this.computeValues(t), this.compute(e), this.emit()
            }
            moveEnd(e) {
              this.state._active && (this.state._active = !1, this.compute(e), this.emit())
            }
            bind(e) {
              e("pointer", "change", this.move.bind(this)), e("pointer", "leave", this.moveEnd.bind(this))
            }
          },
          resolver: bi
        },
        ki = {
          key: "pinch",
          engine: class extends ri {
            constructor() {
              super(...arguments), Io(this, "ingKey", "pinching"), Io(this, "aliasKey", "da")
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
              this.state.offset = "wheel" === e ? Ro.add(t, n) : [(1 + t[0]) * n[0], t[1] + n[1]]
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
              const r = $o(e, t._touchIds);
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
              const o = Xo(...Array.from(n.values()));
              o && this.pinchStart(e, o)
            }
            pinchStart(e, t) {
              this.state.origin = t.origin, this.computeValues([t.distance, t.angle]), this.computeInitial(), this.compute(e), this.emit()
            }
            touchMove(e) {
              if (!this.state._active) return;
              const t = $o(e, this.state._touchIds);
              t && this.pinchMove(e, t)
            }
            pointerMove(e) {
              const t = this.state._pointerEvents;
              if (t.has(e.pointerId) && t.set(e.pointerId, e), !this.state._active) return;
              const n = Xo(...Array.from(t.values()));
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
              t._movement = [e.scale - 1, e.rotation], t._delta = Ro.sub(t._movement, n), this.compute(e), this.emit()
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
              t._delta = [-Qo(e)[1] / 100 * t.offset[0], 0], Ro.addTo(t._movement, t._delta), gi(t), this.state.origin = [e.clientX, e.clientY], this.compute(e), this.emit()
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
          resolver: yi
        },
        Li = {
          key: "scroll",
          engine: class extends oi {
            constructor() {
              super(...arguments), Io(this, "ingKey", "scrolling")
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
              t._delta = Ro.sub(n, t._values), Ro.addTo(t._movement, t._delta), this.computeValues(n), this.compute(e), this.emit()
            }
            scrollEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("scroll", "", this.scroll.bind(this))
            }
          },
          resolver: wi
        },
        Ni = {
          key: "wheel",
          engine: class extends oi {
            constructor() {
              super(...arguments), Io(this, "ingKey", "wheeling")
            }
            wheel(e) {
              this.state._active || this.start(e), this.wheelChange(e), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this))
            }
            wheelChange(e) {
              const t = this.state;
              t._delta = Qo(e), Ro.addTo(t._movement, t._delta), gi(t), this.compute(e), this.emit()
            }
            wheelEnd() {
              this.state._active && (this.state._active = !1, this.compute(), this.emit())
            }
            bind(e) {
              e("wheel", "", this.wheel.bind(this))
            }
          },
          resolver: Ei
        };
      const Ai = {
          target(e) {
            if (e) return () => "current" in e ? e.current : e
          },
          enabled() {
            return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
          },
          window() {
            return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : di.isBrowser ? window : void 0
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
        Mi = ["target", "eventOptions", "window", "enabled", "transform"];

      function Ri() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = {};
        for (const [r, o] of Object.entries(t)) switch (typeof o) {
          case "function":
            n[r] = o.call(n, e[r], r, e);
            break;
          case "object":
            n[r] = Ri(e[r], o);
            break;
          case "boolean":
            o && (n[r] = e[r])
        }
        return n
      }
      class Di {
        constructor(e, t) {
          Io(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
        }
        add(e, t, n, r, o) {
          const i = this._listeners,
            a = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
              const n = Fo[e];
              return e + (n && n[t] || t)
            }(t, n),
            s = Ho(Ho({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), o);
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
      class ji {
        constructor() {
          Io(this, "_timeouts", new Map)
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
      class Ii {
        constructor(e) {
          var t, n;
          Io(this, "gestures", new Set), Io(this, "_targetEventStore", new Di(this)), Io(this, "gestureEventStores", {}), Io(this, "gestureTimeoutStores", {}), Io(this, "handlers", {}), Io(this, "config", {}), Io(this, "pointerIds", new Set), Io(this, "touchIds", new Set), Io(this, "state", {
            shared: {
              shiftKey: !1,
              metaKey: !1,
              ctrlKey: !1,
              altKey: !1
            }
          }), t = this, (n = e).drag && Bi(t, "drag"), n.wheel && Bi(t, "wheel"), n.scroll && Bi(t, "scroll"), n.move && Bi(t, "move"), n.pinch && Bi(t, "pinch"), n.hover && Bi(t, "hover")
        }
        setEventIds(e) {
          return Ko(e) ? (this.touchIds = new Set(function(e) {
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
              u = function(e, t) {
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
              }(r, Mi);
            if (n.shared = Ri({
                target: o,
                eventOptions: i,
                window: a,
                enabled: s,
                transform: l
              }, Ai), t) {
              const e = Ci.get(t);
              n[t] = Ri(Ho({
                shared: n.shared
              }, u), e)
            } else
              for (const e in u) {
                const t = Ci.get(e);
                t && (n[e] = Ri(Ho({
                  shared: n.shared
                }, u[e]), t))
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
                  r = Hi(o, n.eventOptions, !!i);
                n.enabled && new(Pi.get(e))(this, t, e).bind(r)
              }
              const e = Hi(o, r.eventOptions, !!i);
              for (const n in this.nativeHandlers) e(n, "", (e => this.nativeHandlers[n](Ho(Ho({}, this.state.shared), {}, {
                event: e,
                args: t
              }))), void 0, !0)
            }
            for (const e in o) o[e] = ti(...o[e]);
            if (!i) return o;
            for (const e in o) {
              const {
                device: t,
                capture: n,
                passive: r
              } = Go(e);
              this._targetEventStore.add(i, t, "", o[e], {
                capture: n,
                passive: r
              })
            }
          }
        }
      }

      function Bi(e, t) {
        e.gestures.add(t), e.gestureEventStores[t] = new Di(e, t), e.gestureTimeoutStores[t] = new ji
      }
      const Hi = (e, t, n) => function(r, o, i) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          var l, u;
          const c = null !== (l = a.capture) && void 0 !== l ? l : t.capture,
            d = null !== (u = a.passive) && void 0 !== u ? u : t.passive;
          let f = s ? r : function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = Fo[e],
              o = r && r[t] || t;
            return "on" + Uo(e) + Uo(o) + (function() {
              let e = arguments.length > 1 ? arguments[1] : void 0;
              return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && !Vo.includes(e)
            }(n, o) ? "Capture" : "")
          }(r, o, c);
          n && d && (f += "Passive"), e[f] = e[f] || [], e[f].push(i)
        },
        Fi = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Ui(e, t, n, r, o, i) {
        if (!e.has(n)) return;
        if (!Pi.has(r)) return;
        const a = n + "Start",
          s = n + "End";
        o[r] = e => {
          let r;
          return e.first && a in t && t[a](e), n in t && (r = t[n](e)), e.last && s in t && t[s](e), r
        }, i[r] = i[r] || {}
      }

      function Vi(e, t) {
        const n = ([Ti, ki, Li, Ni, Oi, xi].forEach(Si), function(e, t) {
          const {
            handlers: n,
            nativeHandlers: r,
            config: o
          } = function(e, t) {
            const [n, r, o] = function(e) {
              const t = {},
                n = {},
                r = new Set;
              for (let o in e) Fi.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
              return [n, t, r]
            }(e), i = {};
            return Ui(o, n, "onDrag", "drag", i, t), Ui(o, n, "onWheel", "wheel", i, t), Ui(o, n, "onScroll", "scroll", i, t), Ui(o, n, "onPinch", "pinch", i, t), Ui(o, n, "onMove", "move", i, t), Ui(o, n, "onHover", "hover", i, t), {
              handlers: i,
              config: t,
              nativeHandlers: r
            }
          }(e, t || {});
          return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = arguments.length > 3 ? arguments[3] : void 0;
            const o = u().useMemo((() => new Ii(e)), []);
            if (o.applyHandlers(e, r), o.applyConfig(t, n), u().useEffect(o.effect.bind(o)), u().useEffect((() => o.clean.bind(o)), []), void 0 === t.target) return o.bind.bind(o)
          }(n, o, void 0, r)
        });
        return n(e, t || {})
      }
      var zi = ia(),
        Gi = e => ta(e, zi),
        Ki = ia();
      Gi.write = e => ta(e, Ki);
      var qi = ia();
      Gi.onStart = e => ta(e, qi);
      var Wi = ia();
      Gi.onFrame = e => ta(e, Wi);
      var Xi = ia();
      Gi.onFinish = e => ta(e, Xi);
      var $i = [];
      Gi.setTimeout = (e, t) => {
        const n = Gi.now() + t,
          r = () => {
            const e = $i.findIndex((e => e.cancel == r));
            ~e && $i.splice(e, 1), Ji -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return $i.splice(Yi(n), 0, o), Ji += 1, na(), o
      };
      var Yi = e => ~(~$i.findIndex((t => t.time > e)) || ~$i.length);
      Gi.cancel = e => {
        qi.delete(e), Wi.delete(e), Xi.delete(e), zi.delete(e), Ki.delete(e)
      }, Gi.sync = e => {
        ea = !0, Gi.batchedUpdates(e), ea = !1
      }, Gi.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, Gi.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          qi.delete(n), t = null
        }, r
      };
      var Zi = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Gi.use = e => Zi = e, Gi.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Gi.batchedUpdates = e => e(), Gi.catch = console.error, Gi.frameLoop = "always", Gi.advance = () => {
        "demand" !== Gi.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : oa()
      };
      var Qi = -1,
        Ji = 0,
        ea = !1;

      function ta(e, t) {
        ea ? (t.delete(e), e(0)) : (t.add(e), na())
      }

      function na() {
        Qi < 0 && (Qi = 0, "demand" !== Gi.frameLoop && Zi(ra))
      }

      function ra() {
        ~Qi && (Zi(ra), Gi.batchedUpdates(oa))
      }

      function oa() {
        const e = Qi;
        Qi = Gi.now();
        const t = Yi(Qi);
        t && (aa($i.splice(0, t), (e => e.handler())), Ji -= t), Ji ? (qi.flush(), zi.flush(e ? Math.min(64, Qi - e) : 16.667), Wi.flush(), Ki.flush(), Xi.flush()) : Qi = -1
      }

      function ia() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            Ji += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (Ji -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, Ji -= t.size, aa(t, (t => t(n) && e.add(t))), Ji += e.size, t = e)
          }
        }
      }

      function aa(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Gi.catch(e)
          }
        }))
      }
      var sa = Object.defineProperty,
        la = {};

      function ua() {}((e, t) => {
        for (var n in t) sa(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(la, {
        assign: () => Pa,
        colors: () => wa,
        createStringInterpolator: () => va,
        skipAnimation: () => Ea,
        to: () => ga,
        willAdvance: () => _a
      });
      var ca = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function da(e, t) {
        if (ca.arr(e)) {
          if (!ca.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var fa = (e, t) => e.forEach(t);

      function ha(e, t, n) {
        if (ca.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var pa = e => ca.und(e) ? [] : ca.arr(e) ? e : [e];

      function ma(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), fa(n, t)
        }
      }
      var va, ga, ya = (e, ...t) => ma(e, (e => e(...t))),
        ba = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        wa = null,
        Ea = !1,
        _a = ua,
        Pa = e => {
          e.to && (ga = e.to), e.now && (Gi.now = e.now), void 0 !== e.colors && (wa = e.colors), null != e.skipAnimation && (Ea = e.skipAnimation), e.createStringInterpolator && (va = e.createStringInterpolator), e.requestAnimationFrame && Gi.use(e.requestAnimationFrame), e.batchedUpdates && (Gi.batchedUpdates = e.batchedUpdates), e.willAdvance && (_a = e.willAdvance), e.frameLoop && (Gi.frameLoop = e.frameLoop)
        },
        Ca = new Set,
        Sa = [],
        Ta = [],
        xa = 0,
        Oa = {
          get idle() {
            return !Ca.size && !Sa.length
          },
          start(e) {
            xa > e.priority ? (Ca.add(e), Gi.onStart(ka)) : (La(e), Gi(Aa))
          },
          advance: Aa,
          sort(e) {
            if (xa) Gi.onFrame((() => Oa.sort(e)));
            else {
              const t = Sa.indexOf(e);
              ~t && (Sa.splice(t, 1), Na(e))
            }
          },
          clear() {
            Sa = [], Ca.clear()
          }
        };

      function ka() {
        Ca.forEach(La), Ca.clear(), Gi(Aa)
      }

      function La(e) {
        Sa.includes(e) || Na(e)
      }

      function Na(e) {
        Sa.splice(function(t, n) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(Sa), 0, e)
      }

      function Aa(e) {
        const t = Ta;
        for (let n = 0; n < Sa.length; n++) {
          const r = Sa[n];
          xa = r.priority, r.idle || (_a(r), r.advance(e), r.idle || t.push(r))
        }
        return xa = 0, (Ta = Sa).length = 0, (Sa = t).length > 0
      }
      var Ma = {
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
        Ra = "[-+]?\\d*\\.?\\d+",
        Da = Ra + "%";

      function ja(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Ia = new RegExp("rgb" + ja(Ra, Ra, Ra)),
        Ba = new RegExp("rgba" + ja(Ra, Ra, Ra, Ra)),
        Ha = new RegExp("hsl" + ja(Ra, Da, Da)),
        Fa = new RegExp("hsla" + ja(Ra, Da, Da, Ra)),
        Ua = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Va = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        za = /^#([0-9a-fA-F]{6})$/,
        Ga = /^#([0-9a-fA-F]{8})$/;

      function Ka(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function qa(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = Ka(o, r, e + 1 / 3),
          a = Ka(o, r, e),
          s = Ka(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Wa(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Xa(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function $a(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Ya(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Za(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = za.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : wa && void 0 !== wa[e] ? wa[e] : (t = Ia.exec(e)) ? (Wa(t[1]) << 24 | Wa(t[2]) << 16 | Wa(t[3]) << 8 | 255) >>> 0 : (t = Ba.exec(e)) ? (Wa(t[1]) << 24 | Wa(t[2]) << 16 | Wa(t[3]) << 8 | $a(t[4])) >>> 0 : (t = Ua.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Ga.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Va.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Ha.exec(e)) ? (255 | qa(Xa(t[1]), Ya(t[2]), Ya(t[3]))) >>> 0 : (t = Fa.exec(e)) ? (qa(Xa(t[1]), Ya(t[2]), Ya(t[3])) | $a(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Qa = (e, t, n) => {
          if (ca.fun(e)) return e;
          if (ca.arr(e)) return Qa({
            range: e,
            output: t,
            extrapolate: n
          });
          if (ca.str(e.output[0])) return va(e);
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
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === a) return u;
                "clamp" === a && (u = t)
              }
              if (u > n) {
                if ("identity" === s) return u;
                "clamp" === s && (u = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u += r : u = u * (o - r) + r, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        Ja = 1.70158,
        es = 1.525 * Ja,
        ts = Ja + 1,
        ns = 2 * Math.PI / 3,
        rs = 2 * Math.PI / 4.5,
        os = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        is = {
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
          easeInBack: e => ts * e * e * e - Ja * e * e,
          easeOutBack: e => 1 + ts * Math.pow(e - 1, 3) + Ja * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - es) / 2 : (Math.pow(2 * e - 2, 2) * ((es + 1) * (2 * e - 2) + es) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ns),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ns) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * rs) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * rs) / 2 + 1,
          easeInBounce: e => 1 - os(1 - e),
          easeOutBounce: os,
          easeInOutBounce: e => e < .5 ? (1 - os(1 - 2 * e)) / 2 : (1 + os(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return 0, 1, o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        as = Symbol.for("FluidValue.get"),
        ss = Symbol.for("FluidValue.observers"),
        ls = e => Boolean(e && e[as]),
        us = e => e && e[as] ? e[as]() : e,
        cs = e => e[ss] || null;

      function ds(e, t) {
        const n = e[ss];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var fs = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            hs(this, e)
          }
        },
        hs = (e, t) => gs(e, as, t);

      function ps(e, t) {
        if (e[as]) {
          let n = e[ss];
          n || gs(e, ss, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function ms(e, t) {
        const n = e[ss];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[ss] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var vs, gs = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        ys = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        bs = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ws = new RegExp(`(${ys.source})(%|[a-z]+)`, "i"),
        Es = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        _s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ps = e => {
          const [t, n] = Cs(e);
          if (!t || ba()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && _s.test(n) ? Ps(n) : n || e
        },
        Cs = e => {
          const t = _s.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Ss = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        Ts = e => {
          vs || (vs = wa ? new RegExp(`(${Object.keys(wa).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => us(e).replace(_s, Ps).replace(bs, Za).replace(vs, Za))),
            n = t.map((e => e.match(ys).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => Qa({
              ...e,
              output: t
            })));
          return e => {
            const n = !ws.test(t[0]) && t.find((e => ws.test(e)))?.replace(ys, "");
            let o = 0;
            return t[0].replace(ys, (() => `${r[o++](e)}${n||""}`)).replace(Es, Ss)
          }
        },
        xs = "react-spring: ",
        Os = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${xs}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        ks = Os(console.warn),
        Ls = Os(console.warn);

      function Ns(e) {
        return ca.str(e) && ("#" == e[0] || /\d/.test(e) || !ba() && _s.test(e) || e in (wa || {}))
      }
      var As = ba() ? s.useEffect : s.useLayoutEffect,
        Ms = () => {
          const e = (0, s.useRef)(!1);
          return As((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function Rs() {
        const e = (0, s.useState)()[1],
          t = Ms();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Ds = e => (0, s.useEffect)(e, js),
        js = [];

      function Is(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Bs = Symbol.for("Animated:node"),
        Hs = e => e && e[Bs],
        Fs = (e, t) => {
          return n = e, r = Bs, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        Us = e => e && e[Bs] && e[Bs].getPayload(),
        Vs = class {
          constructor() {
            Fs(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        zs = class extends Vs {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ca.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new zs(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return ca.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ca.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Gs = class extends zs {
          constructor(e) {
            super(0), this._string = null, this._toString = Qa({
              output: [e, e]
            })
          }
          static create(e) {
            return new Gs(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (ca.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Qa({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        Ks = {
          dependencies: null
        },
        qs = class extends Vs {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return ha(this.source, ((n, r) => {
              var o;
              (o = n) && o[Bs] === o ? t[r] = n.getValue(e) : ls(n) ? t[r] = us(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && fa(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return ha(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Ks.dependencies && ls(e) && Ks.dependencies.add(e);
            const t = Us(e);
            t && fa(t, (e => this.add(e)))
          }
        },
        Ws = class extends qs {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Ws(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(Xs)), !0)
          }
        };

      function Xs(e) {
        return (Ns(e) ? Gs : zs).create(e)
      }

      function $s(e) {
        const t = Hs(e);
        return t ? t.constructor : ca.arr(e) ? Ws : Ns(e) ? Gs : zs
      }
      var Ys = (e, t) => {
          const n = !ca.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = n && (0, s.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (ca.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, u] = function(e, t) {
                const n = new Set;
                return Ks.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new qs(e), Ks.dependencies = null, [e, n]
              }(r, t),
              c = Rs(),
              d = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
              },
              f = new Zs(d, u),
              h = (0, s.useRef)();
            As((() => (h.current = f, fa(u, (e => ps(e, f))), () => {
              h.current && (fa(h.current.deps, (e => ms(e, h.current))), Gi.cancel(h.current.update))
            }))), (0, s.useEffect)(d, []), Ds((() => () => {
              const e = h.current;
              fa(e.deps, (t => ms(t, e)))
            }));
            const p = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...p,
              ref: a
            })
          }))
        },
        Zs = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Gi.write(this.update)
          }
        },
        Qs = Symbol.for("AnimatedComponent"),
        Js = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new qs(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = el(e) || "Anonymous";
              return (e = ca.str(e) ? i[e] || (i[e] = Ys(e, o)) : e[Qs] || (e[Qs] = Ys(e, o))).displayName = `Animated(${t})`, e
            };
          return ha(e, ((t, n) => {
            ca.arr(e) && (n = el(t)), i[n] = i(t)
          })), {
            animated: i
          }
        },
        el = e => ca.str(e) ? e : e && ca.str(e.displayName) ? e.displayName : ca.fun(e) && e.name || null;

      function tl(e, ...t) {
        return ca.fun(e) ? e(...t) : e
      }
      var nl = (e, t) => !0 === e || !!(t && e && (ca.fun(e) ? e(t) : pa(e).includes(t))),
        rl = (e, t) => ca.obj(e) ? t && e[t] : e,
        ol = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        il = e => e,
        al = (e, t = il) => {
          let n = sl;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            ca.und(n) || (r[o] = n)
          }
          return r
        },
        sl = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        ll = {
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

      function ul(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (ha(e, ((e, r) => {
              ll[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return ha(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function cl(e) {
        return e = us(e), ca.arr(e) ? e.map(cl) : Ns(e) ? la.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function dl(e) {
        for (const t in e) return !0;
        return !1
      }

      function fl(e) {
        return ca.fun(e) || ca.arr(e) && ca.obj(e[0])
      }

      function hl(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function pl(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var ml = {
          tension: 170,
          friction: 26
        },
        vl = {
          ...ml,
          mass: 1,
          damping: 1,
          easing: is.linear,
          clamp: !1
        },
        gl = class {
          constructor() {
            this.velocity = 0, Object.assign(this, vl)
          }
        };

      function yl(e, t) {
        if (ca.und(t.decay)) {
          const n = !ca.und(t.tension) || !ca.und(t.friction);
          !n && ca.und(t.frequency) && ca.und(t.damping) && ca.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var bl = [],
        wl = class {
          constructor() {
            this.changed = !1, this.values = bl, this.toValues = null, this.fromValues = bl, this.config = new gl, this.immediate = !1
          }
        };

      function El(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = nl(n.cancel ?? r?.cancel, t);
          if (c) h();
          else {
            ca.und(n.pause) || (o.paused = nl(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || nl(e, t)), l = tl(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - Gi.now()
          }

          function f() {
            l > 0 && !la.skipAnimation ? (o.delayed = !0, u = Gi.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: c
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var _l = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Sl(e.get()) : t.every((e => e.noop)) ? Pl(e.get()) : Cl(e.get(), t.every((e => e.finished))),
        Pl = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Cl = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Sl = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Tl(e, t, n, r) {
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
          const u = al(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && Sl(r) || o !== n.asyncId && Cl(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Ol,
                a = new kl;
              return (async () => {
                if (la.skipAnimation) throw xl(n), a.result = Cl(r, !1), d(a), a;
                h(i);
                const s = ca.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, ha(u, ((e, t) => {
                  ca.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return h(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (la.skipAnimation) return xl(n), Cl(r, !1);
          try {
            let t;
            t = ca.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(c), f]), m = Cl(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Ol) m = e.result;
            else {
              if (!(e instanceof kl)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return ca.fun(a) && Gi.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function xl(e, t) {
        ma(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Ol = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        kl = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Ll = e => e instanceof Al,
        Nl = 1,
        Al = class extends fs {
          constructor() {
            super(...arguments), this.id = Nl++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Hs(this);
            return e && e.getValue()
          }
          to(...e) {
            return la.to(this, e)
          }
          interpolate(...e) {
            return ks(`${xs}The "interpolate" function is deprecated in v9 (use "to" instead)`), la.to(this, e)
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
            ds(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Oa.sort(this), ds(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Ml = Symbol.for("SpringPhase"),
        Rl = e => (1 & e[Ml]) > 0,
        Dl = e => (2 & e[Ml]) > 0,
        jl = e => (4 & e[Ml]) > 0,
        Il = (e, t) => t ? e[Ml] |= 3 : e[Ml] &= -3,
        Bl = (e, t) => t ? e[Ml] |= 4 : e[Ml] &= -5,
        Hl = class extends Al {
          constructor(e, t) {
            if (super(), this.animation = new wl, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ca.und(e) || !ca.und(t)) {
              const n = ca.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ca.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Dl(this) || this._state.asyncTo) || jl(this)
          }
          get goal() {
            return us(this.animation.to)
          }
          get velocity() {
            const e = Hs(this);
            return e instanceof zs ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Rl(this)
          }
          get isAnimating() {
            return Dl(this)
          }
          get isPaused() {
            return jl(this)
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
            } = r, a = Us(r.to);
            !a && ls(r.to) && (o = pa(us(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == Gs ? 1 : a ? a[l].lastPosition : o[l];
              let c = r.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = ca.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                if (ca.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), c = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !ca.und(r),
                      h = n == u ? s.v0 > 0 : n < u;
                    let p, m = !1;
                    const v = 1,
                      g = Math.ceil(e / v);
                    for (let e = 0; e < g && (p = Math.abs(a) > t, p || (c = Math.abs(u - d) <= f, !c)); ++e) l && (m = d == u || d > u == h, m && (a = -a * r, d = u)), a += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * a) / i.mass * v, d += a * v
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (u - n), a = (d - s.lastPosition) / e, c = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              a && !a[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = Hs(this),
              l = s.getValue();
            if (t) {
              const e = us(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return Gi.batchedUpdates((() => {
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
            if (Dl(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Gi.batchedUpdates((() => {
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
            return ca.und(e) ? (n = this.queue || [], this.queue = []) : n = [ca.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => _l(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), xl(this._state, e && this._lastCallId), Gi.batchedUpdates((() => this._stop(t, e))), this
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
            n = ca.obj(n) ? n[t] : n, (null == n || fl(n)) && (n = void 0), r = ca.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return Rl(this) || (e.reverse && ([n, r] = [r, n]), r = us(r), ca.und(r) ? Hs(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, al(e, ((e, t) => /^on/.test(t) ? rl(e, n) : e))), ql(this, e, "onProps"), Wl(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return El(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  jl(this) || (Bl(this, !0), ya(i.pauseQueue), Wl(this, "onPause", Cl(this, Fl(this, this.animation.to)), this))
                },
                resume: () => {
                  jl(this) && (Bl(this, !1), Dl(this) && this._resume(), ya(i.resumeQueue), Wl(this, "onResume", Cl(this, Fl(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Ul(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Sl(this));
            const r = !ca.und(e.to),
              o = !ca.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Sl(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: u
            } = s;
            let {
              to: c = l,
              from: d = u
            } = e;
            !o || r || t.default && !ca.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !da(d, u);
            f && (s.from = d), d = us(d);
            const h = !da(c, l);
            h && this._focus(c);
            const p = fl(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: g
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (yl(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), yl(e, t), Object.assign(e, t);
              for (const t in vl) null == e[t] && (e[t] = vl[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              ca.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, tl(t.config, i), t.config !== a.config ? tl(a.config, i) : void 0);
            let y = Hs(this);
            if (!y || ca.und(c)) return n(Cl(this, !0));
            const b = ca.und(t.reset) ? o && !t.default : !ca.und(d) && nl(t.reset, i),
              w = b ? d : this.get(),
              E = cl(c),
              _ = ca.num(E) || ca.arr(E) || Ns(E),
              P = !p && (!_ || nl(a.immediate || t.immediate, i));
            if (h) {
              const e = $s(c);
              if (e !== y.constructor) {
                if (!P) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(E)
              }
            }
            const C = y.constructor;
            let S = ls(c),
              T = !1;
            if (!S) {
              const e = b || !Rl(this) && f;
              (h || e) && (T = da(cl(w), E), S = !T), (da(s.immediate, P) || P) && da(m.decay, v) && da(m.velocity, g) || (S = !0)
            }
            if (T && Dl(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !p && ((S || ls(l)) && (s.values = y.getPayload(), s.toValues = ls(c) ? null : C == Gs ? [1] : pa(E)), s.immediate != P && (s.immediate = P, P || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              fa(Kl, (e => ql(this, t, e)));
              const r = Cl(this, Fl(this, l));
              ya(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && Gi.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? tl(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(w), p ? n(Tl(t.to, t, this._state, this)) : S ? this._start() : Dl(this) && !h ? this._pendingCalls.add(n) : n(Pl(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (cs(this) && this._detach(), t.to = e, cs(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ls(t) && (ps(t, this), Ll(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ls(e) && ms(e, this)
          }
          _set(e, t = !0) {
            const n = us(e);
            if (!ca.und(n)) {
              const e = Hs(this);
              if (!e || !da(n, e.getValue())) {
                const r = $s(n);
                e && e.constructor == r ? e.setValue(n) : Fs(this, r.create(n)), e && Gi.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return Hs(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Wl(this, "onStart", Cl(this, Fl(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), tl(this.animation.onChange, e, this)), tl(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Hs(this).reset(us(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Dl(this) || (Il(this, !0), jl(this) || this._resume())
          }
          _resume() {
            la.skipAnimation ? this.finish() : Oa.start(this)
          }
          _stop(e, t) {
            if (Dl(this)) {
              Il(this, !1);
              const n = this.animation;
              fa(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), ds(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Sl(this.get()) : Cl(this.get(), Fl(this, e ?? n.to));
              ya(this._pendingCalls, r), n.changed && (n.changed = !1, Wl(this, "onRest", r, this))
            }
          }
        };

      function Fl(e, t) {
        const n = cl(t);
        return da(cl(e.get()), n)
      }

      function Ul(e, t = e.loop, n = e.to) {
        const r = tl(t);
        if (r) {
          const o = !0 !== r && ul(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Vl({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || fl(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Vl(e) {
        const {
          to: t,
          from: n
        } = e = ul(e), r = new Set;
        return ca.obj(t) && Gl(t, r), ca.obj(n) && Gl(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function zl(e) {
        const t = Vl(e);
        return ca.und(t.default) && (t.default = al(t)), t
      }

      function Gl(e, t) {
        ha(e, ((e, n) => null != e && t.add(n)))
      }
      var Kl = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ql(e, t, n) {
        e.animation[n] = t[n] !== ol(t, n) ? rl(t[n], e.key) : void 0
      }

      function Wl(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Xl = ["onStart", "onChange", "onRest"],
        $l = 1,
        Yl = class {
          constructor(e, t) {
            this.id = $l++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ca.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Vl(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = pa(e).map(Vl) : this.queue = [], this._flush ? this._flush(this, t) : (ru(this, t), Zl(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              fa(pa(t), (t => n[t].stop(!!e)))
            } else xl(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (ca.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              fa(pa(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (ca.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              fa(pa(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            ha(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, ma(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && ma(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, ma(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Gi.onFrame(this._onFrame)
          }
        };

      function Zl(e, t) {
        return Promise.all(t.map((t => Ql(e, t)))).then((t => _l(e, t)))
      }
      async function Ql(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = ca.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = ca.arr(o) || ca.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : fa(Xl, (n => {
          const r = t[n];
          if (ca.fun(r)) {
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
            }, u && (u[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, ya(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === ol(t, "cancel");
        (c || h && d.asyncId) && f.push(El(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: ua,
            resume: ua,
            start(t, n) {
              h ? (xl(d, e._lastAsyncId), n(Sl(e))) : (t.onRest = s, n(Tl(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = _l(e, await Promise.all(f));
        if (a && p.finished && (!n || !p.noop)) {
          const n = Ul(t, a, o);
          if (n) return ru(e, [n]), Ql(e, n, !0)
        }
        return l && Gi.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Jl(e, t) {
        const n = {
          ...e.springs
        };
        return t && fa(pa(t), (e => {
          ca.und(e.keys) && (e = Vl(e)), ca.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), nu(n, e, (e => tu(e)))
        })), eu(e, n), n
      }

      function eu(e, t) {
        ha(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, ps(t, e))
        }))
      }

      function tu(e, t) {
        const n = new Hl;
        return n.key = e, t && ps(n, t), n
      }

      function nu(e, t, n) {
        t.keys && fa(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function ru(e, t) {
        fa(t, (t => {
          nu(e.springs, t, (t => tu(t, e)))
        }))
      }
      var ou, iu, au = ({
          children: e,
          ...t
        }) => {
          const n = (0, s.useContext)(su),
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
          } = su;
          return s.createElement(i, {
            value: t
          }, e)
        },
        su = (ou = au, iu = {}, Object.assign(ou, s.createContext(iu)), ou.Provider._context = ou, ou.Consumer._context = ou, ou);
      au.Provider = su.Provider, au.Consumer = su.Consumer;
      var lu = () => {
        const e = [],
          t = function(t) {
            Ls(`${xs}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return fa(e, ((e, o) => {
              if (ca.und(t)) r.push(e.start());
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
          return fa(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return fa(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          fa(e, ((e, n) => {
            const r = ca.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return fa(e, ((e, r) => {
            if (ca.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return fa(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return fa(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return ca.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function uu(e, t) {
        const n = ca.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = ca.fun(t) && t;
            r && !n && (n = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? lu() : void 0), []),
              i = (0, s.useRef)(0),
              a = Rs(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Jl(e, t);
                  return i.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Zl(e, t) : new Promise((r => {
                    eu(e, n), l.queue.push((() => {
                      r(Zl(e, t))
                    })), a()
                  }))
                }
              })), []),
              u = (0, s.useRef)([...l.ctrls]),
              c = [],
              d = Is(e) || 0;

            function f(e, n) {
              for (let o = e; o < n; o++) {
                const e = u.current[o] || (u.current[o] = new Yl(null, l.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = zl(n))
              }
            }(0, s.useMemo)((() => {
              fa(u.current.slice(e, d), (e => {
                hl(e, o), e.stop(!0)
              })), u.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), n);
            const h = u.current.map(((e, t) => Jl(e, c[t]))),
              p = (0, s.useContext)(au),
              m = Is(p),
              v = p !== m && dl(p);
            As((() => {
              i.current++, l.ctrls = u.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], fa(e, (e => e()))), fa(u.current, ((e, t) => {
                o?.add(e), v && e.start({
                  default: p
                });
                const n = c[t];
                n && (pl(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), Ds((() => () => {
              fa(l.ctrls, (e => e.stop(!0)))
            }));
            const g = h.map((e => ({
              ...e
            })));
            return o ? [g, o] : g
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var cu = () => lu(),
        du = () => (0, s.useState)(cu)[0];
      var fu = 1,
        hu = class extends Al {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Qa(...t);
            const n = this._get(),
              r = $s(n);
            Fs(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            da(t, this.get()) || (Hs(this).setValue(t), this._onChange(t, this.idle)), !this.idle && mu(this._active) && vu(this)
          }
          _get() {
            const e = ca.arr(this.source) ? this.source.map(us) : pa(us(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !mu(this._active) && (this.idle = !1, fa(Us(this), (e => {
              e.done = !1
            })), la.skipAnimation ? (Gi.batchedUpdates((() => this.advance())), vu(this)) : Oa.start(this))
          }
          _attach() {
            let e = 1;
            fa(pa(this.source), (t => {
              ls(t) && ps(t, this), Ll(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            fa(pa(this.source), (e => {
              ls(e) && ms(e, this)
            })), this._active.clear(), vu(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = pa(this.source).reduce(((e, t) => Math.max(e, (Ll(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function pu(e) {
        return !1 !== e.idle
      }

      function mu(e) {
        return !e.size || Array.from(e).every(pu)
      }

      function vu(e) {
        e.idle || (e.idle = !0, fa(Us(e), (e => {
          e.done = !0
        })), ds(e, {
          type: "idle",
          parent: e
        }))
      }
      la.assign({
        createStringInterpolator: Ts,
        to: (e, t) => new hu(e, t)
      }), Oa.advance;
      var gu = n(44853),
        yu = /^--/;

      function bu(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || yu.test(e) || Eu.hasOwnProperty(e) && Eu[e] ? ("" + t).trim() : t + "px"
      }
      var wu = {},
        Eu = {
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
        _u = ["Webkit", "Ms", "Moz", "O"];
      Eu = Object.keys(Eu).reduce(((e, t) => (_u.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Eu);
      var Pu = /^(matrix|translate|scale|rotate|skew)/,
        Cu = /^(translate)/,
        Su = /^(rotate|skew)/,
        Tu = (e, t) => ca.num(e) && 0 !== e ? e + t : e,
        xu = (e, t) => ca.arr(e) ? e.every((e => xu(e, t))) : ca.num(e) ? e === t : parseFloat(e) === t,
        Ou = class extends qs {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Tu(e,"px"))).join(",")})`, xu(e, 0)]))), ha(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Pu.test(t)) {
                if (delete r[t], ca.und(e)) return;
                const n = Cu.test(t) ? "px" : Su.test(t) ? "deg" : "";
                o.push(pa(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Tu(o,n)})`, xu(o, 0)] : e => [`${t}(${e.map((e=>Tu(e,n))).join(",")})`, xu(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new ku(o, i)), super(r)
          }
        },
        ku = class extends fs {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return fa(this.inputs, ((n, r) => {
              const o = us(n[0]),
                [i, a] = this.transforms[r](ca.arr(o) ? o : n.map(us));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && fa(this.inputs, (e => fa(e, (e => ls(e) && ps(e, this)))))
          }
          observerRemoved(e) {
            0 == e && fa(this.inputs, (e => fa(e, (e => ls(e) && ms(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ds(this, e)
          }
        };
      la.assign({
        batchedUpdates: gu.unstable_batchedUpdates,
        createStringInterpolator: Ts,
        colors: Ma
      });
      var Lu = Js(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
              ...u
            } = t,
            c = Object.values(u),
            d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : wu[t] || (wu[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = bu(t, o[t]);
              yu.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, c[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new Ou(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;
      const Nu = (e, t, n) => {
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
        Au = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        Mu = ([e, t], n) => {
          const {
            a: r
          } = new DOMMatrix(n.style.transform), o = Au(n), i = o.width / r, a = 100 * Du(e, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / i, s = o.height / r;
          return {
            x: a,
            y: 100 * Du(t, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) / s
          }
        },
        Ru = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = Au(e), u = t.getBoundingClientRect(), c = l.width / a / 2, d = u.width / 2, f = c * s > d ? c * s - d : 0, h = l.height / a / 2, p = u.height / 2, m = h * s > p ? h * s - p : 0, v = -o > f, g = o > f, y = i > m, b = -i > m;
          return v && !g ? o = -f : g && !v && (o = f), y && !b ? i = m : b && !y && (i = -m), {
            xy: [o, i],
            horizontalOffset: f,
            verticalOffset: m
          }
        },
        Du = (e, t, n) => Math.min(Math.max(e, t), n),
        ju = {
          mass: .1,
          tension: 800,
          friction: 20,
          clamp: !1,
          precision: .001,
          velocity: 0
        },
        Iu = ml,
        Bu = {
          scrollFactor: 2e3,
          dragFactor: 1.3,
          closePc: 33
        },
        Hu = ({
          children: e,
          containerRef: t,
          contentRef: n,
          minZoomLevel: r,
          maxZoomLevel: o,
          eventHandlers: a,
          enabled: l,
          animation: u
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
          }), Vi({
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
          const c = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
          return (0, i.jsx)("div", {
            ref: t,
            className: "foundry_148vt480",
            style: c,
            children: (0, i.jsx)(Lu.div, {
              ref: n,
              className: "foundry_148vt481",
              style: {
                ...u,
                ...c,
                width: "100%",
                height: "100%"
              },
              children: e
            })
          })
        };
      var Fu, Uu, Vu, zu, Gu = n(63461);

      function Ku(e) {
        return e.type === Uu.literal
      }

      function qu(e) {
        return e.type === Uu.argument
      }

      function Wu(e) {
        return e.type === Uu.number
      }

      function Xu(e) {
        return e.type === Uu.date
      }

      function $u(e) {
        return e.type === Uu.time
      }

      function Yu(e) {
        return e.type === Uu.select
      }

      function Zu(e) {
        return e.type === Uu.plural
      }

      function Qu(e) {
        return e.type === Uu.pound
      }

      function Ju(e) {
        return e.type === Uu.tag
      }

      function ec(e) {
        return !(!e || "object" != typeof e || e.type !== Vu.number)
      }

      function tc(e) {
        return !(!e || "object" != typeof e || e.type !== Vu.dateTime)
      }(zu = Fu || (Fu = {}))[zu.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", zu[zu.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", zu[zu.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", zu[zu.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", zu[zu.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", zu[zu.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", zu[zu.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", zu[zu.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", zu[zu.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", zu[zu.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", zu[zu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", zu[zu.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", zu[zu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", zu[zu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", zu[zu.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", zu[zu.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", zu[zu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", zu[zu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", zu[zu.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", zu[zu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", zu[zu.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", zu[zu.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", zu[zu.INVALID_TAG = 23] = "INVALID_TAG", zu[zu.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", zu[zu.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", zu[zu.UNCLOSED_TAG = 27] = "UNCLOSED_TAG",
        function(e) {
          e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
        }(Uu || (Uu = {})),
        function(e) {
          e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
        }(Vu || (Vu = {}));
      var nc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        rc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function oc(e) {
        var t = {};
        return e.replace(rc, (function(e) {
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
      var ic = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        ac = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        sc = /^(@+)?(\+|#+)?[rs]?$/g,
        lc = /(\*)(0+)|(#+)(0+)|(0+)/g,
        uc = /^(0+)$/;

      function cc(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(sc, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function dc(e) {
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

      function fc(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !uc.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function hc(e) {
        return dc(e) || {}
      }

      function pc(e) {
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
              t = (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Gu.__assign)((0, Gu.__assign)({}, e), hc(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Gu.__assign)((0, Gu.__assign)({}, e), hc(t))
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
              o.options[0].replace(lc, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (uc.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (ac.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(ac, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Gu.__assign)((0, Gu.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), cc(i)))
          } else if (sc.test(o.stem)) t = (0, Gu.__assign)((0, Gu.__assign)({}, t), cc(o.stem));
          else {
            var a = dc(o.stem);
            a && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), a));
            var s = fc(o.stem);
            s && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), s))
          }
        }
        return t
      }
      var mc, vc = {
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

      function gc(e) {
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
        return "root" !== r && (n = e.maximize().region), (vc[n || ""] || vc[r || ""] || vc["".concat(r, "-001")] || vc["001"])[0]
      }
      var yc = new RegExp("^".concat(nc.source, "*")),
        bc = new RegExp("".concat(nc.source, "*$"));

      function wc(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var Ec = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        _c = !!String.fromCodePoint,
        Pc = !!Object.fromEntries,
        Cc = !!String.prototype.codePointAt,
        Sc = !!String.prototype.trimStart,
        Tc = !!String.prototype.trimEnd,
        xc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Oc = !0;
      try {
        Oc = "a" === (null === (mc = jc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === mc ? void 0 : mc[0])
      } catch (e) {
        Oc = !1
      }
      var kc, Lc = Ec ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        Nc = _c ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        Ac = Pc ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        Mc = Cc ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        Rc = Sc ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(yc, "")
        },
        Dc = Tc ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(bc, "")
        };

      function jc(e, t) {
        return new RegExp(e, t)
      }
      if (Oc) {
        var Ic = jc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        kc = function(e, t) {
          var n;
          return Ic.lastIndex = t, null !== (n = Ic.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else kc = function(e, t) {
        for (var n = [];;) {
          var r = Mc(e, t);
          if (void 0 === r || Fc(r) || Uc(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return Nc.apply(void 0, n)
      };
      var Bc = function() {
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
                  return this.error(Fu.UNMATCHED_CLOSING_TAG, wc(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Hc(this.peek() || 0)) {
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
                  type: Uu.pound,
                  location: wc(a, this.clonePosition())
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
              type: Uu.literal,
              value: "<".concat(r, "/>"),
              location: wc(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Hc(this.char())) return this.error(Fu.INVALID_TAG, wc(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Fu.UNMATCHED_CLOSING_TAG, wc(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Uu.tag,
                  value: r,
                  children: i,
                  location: wc(n, this.clonePosition())
                },
                err: null
              } : this.error(Fu.INVALID_TAG, wc(a, this.clonePosition())))
            }
            return this.error(Fu.UNCLOSED_TAG, wc(n, this.clonePosition()))
          }
          return this.error(Fu.INVALID_TAG, wc(n, this.clonePosition()))
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
          var s = wc(n, this.clonePosition());
          return {
            val: {
              type: Uu.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Hc(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return Nc.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), Nc(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Fu.EXPECT_ARGUMENT_CLOSING_BRACE, wc(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Fu.EMPTY_ARGUMENT, wc(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Fu.MALFORMED_ARGUMENT, wc(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Fu.EXPECT_ARGUMENT_CLOSING_BRACE, wc(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Uu.argument,
                  value: r,
                  location: wc(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Fu.EXPECT_ARGUMENT_CLOSING_BRACE, wc(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Fu.MALFORMED_ARGUMENT, wc(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = kc(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: wc(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Fu.EXPECT_ARGUMENT_TYPE, wc(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = Dc(g.val)).length) return this.error(Fu.EXPECT_ARGUMENT_STYLE, wc(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: wc(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = wc(r, this.clonePosition());
              if (l && Lc(null == l ? void 0 : l.style, "::", 0)) {
                var d = Rc(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: Uu.number,
                    value: n,
                    location: c,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Fu.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = gc(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Vu.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? oc(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Uu.date : Uu.time,
                    value: n,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Uu.number : "date" === a ? Uu.date : Uu.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Fu.EXPECT_SELECT_ARGUMENT_OPTIONS, wc(p, (0, Gu.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Fu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, wc(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Fu.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Fu.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = wc(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Uu.select,
                  value: n,
                  options: Ac(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Uu.plural,
                  value: n,
                  options: Ac(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Fu.INVALID_ARGUMENT_TYPE, wc(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Fu.EXPECT_ARGUMENT_CLOSING_BRACE, wc(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Fu.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, wc(n, this.clonePosition()));
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
              for (var t = [], n = 0, r = e.split(ic).filter((function(e) {
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
            return this.error(Fu.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Vu.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? pc(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Fu.EXPECT_PLURAL_ARGUMENT_SELECTOR, Fu.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = wc(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Fu.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Fu.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Fu.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Fu.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, wc(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: wc(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Fu.EXPECT_SELECT_ARGUMENT_SELECTOR : Fu.EXPECT_PLURAL_ARGUMENT_SELECTOR, wc(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Fu.MISSING_OTHER_CLAUSE, wc(this.clonePosition(), this.clonePosition())) : {
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
          var s = wc(r, this.clonePosition());
          return o ? xc(i *= n) ? {
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
          var t = Mc(this.message, e);
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
          if (Lc(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Fc(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Hc(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Fc(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Uc(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Vc(e) {
        e.forEach((function(e) {
          if (delete e.location, Yu(e) || Zu(e))
            for (var t in e.options) delete e.options[t].location, Vc(e.options[t].value);
          else Wu(e) && ec(e.style) || (Xu(e) || $u(e)) && tc(e.style) ? delete e.style.location : Ju(e) && Vc(e.children)
        }))
      }

      function zc(e, t) {
        void 0 === t && (t = {}), t = (0, Gu.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Bc(e, t).parse();
        if (n.err) {
          var r = SyntaxError(Fu[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Vc(n.val), n.val
      }

      function Gc(e, t) {
        var n = t && t.cache ? t.cache : Qc,
          r = t && t.serializer ? t.serializer : $c;
        return (t && t.strategy ? t.strategy : Xc)(e, {
          cache: n,
          serializer: r
        })
      }

      function Kc(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function qc(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function Wc(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function Xc(e, t) {
        return Wc(e, this, 1 === e.length ? Kc : qc, t.cache.create(), t.serializer)
      }
      var $c = function() {
        return JSON.stringify(arguments)
      };

      function Yc() {
        this.cache = Object.create(null)
      }
      Yc.prototype.get = function(e) {
        return this.cache[e]
      }, Yc.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Zc, Qc = {
          create: function() {
            return new Yc
          }
        },
        Jc = {
          variadic: function(e, t) {
            return Wc(e, this, qc, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return Wc(e, this, Kc, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Zc || (Zc = {}));
      var ed, td = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, Gu.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        nd = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Zc.INVALID_VALUE, o) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(td),
        rd = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), Zc.INVALID_VALUE, r) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(td),
        od = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), Zc.MISSING_VALUE, n) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(td);

      function id(e) {
        return "function" == typeof e
      }

      function ad(e, t, n, r, o, i, a) {
        if (1 === e.length && Ku(e[0])) return [{
          type: ed.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Ku(c)) s.push({
            type: ed.literal,
            value: c.value
          });
          else if (Qu(c)) "number" == typeof i && s.push({
            type: ed.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new od(d, a);
            var f = o[d];
            if (qu(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? ed.literal : ed.object,
              value: f
            });
            else if (Xu(c)) {
              var h = "string" == typeof c.style ? r.date[c.style] : tc(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: ed.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if ($u(c)) h = "string" == typeof c.style ? r.time[c.style] : tc(c.style) ? c.style.parsedOptions : r.time.medium, s.push({
              type: ed.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (Wu(c))(h = "string" == typeof c.style ? r.number[c.style] : ec(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: ed.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (Ju(c)) {
                var p = c.children,
                  m = c.value,
                  v = o[m];
                if (!id(v)) throw new rd(m, "function", a);
                var g = v(ad(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(g) || (g = [g]), s.push.apply(s, g.map((function(e) {
                  return {
                    type: "string" == typeof e ? ed.literal : ed.object,
                    value: e
                  }
                })))
              }
              if (Yu(c)) {
                if (!(y = c.options[f] || c.options.other)) throw new nd(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, ad(y.value, t, n, r, o))
              } else if (Zu(c)) {
                var y;
                if (!(y = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new td('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Zc.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  y = c.options[b] || c.options.other
                }
                if (!y) throw new nd(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, ad(y.value, t, n, r, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (w = s).length < 2 ? w : w.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === ed.literal && t.type === ed.literal ? n.value += t.value : e.push(t), e
        }), []);
        var w
      }

      function sd(e) {
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
      }(ed || (ed = {}));
      var ld = function() {
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
                return e.length && t.type === ed.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return ad(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = l.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(l.locales)[0]
              }
            }, this.getAst = function() {
              return l.ast
            }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var u = o || {},
              c = (u.formatters, (0, Gu.__rest)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, Gu.__assign)((0, Gu.__assign)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, Gu.__assign)((0, Gu.__assign)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, Gu.__assign)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: Gc((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
            }), {
              cache: sd(i.number),
              strategy: Jc.variadic
            }),
            getDateTimeFormat: Gc((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
            }), {
              cache: sd(i.dateTime),
              strategy: Jc.variadic
            }),
            getPluralRules: Gc((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
            }), {
              cache: sd(i.pluralRules),
              strategy: Jc.variadic
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
        }, e.__parse = zc, e.formats = {
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

      function ud(e, t) {
        var n = t && t.cache ? t.cache : gd,
          r = t && t.serializer ? t.serializer : pd;
        return (t && t.strategy ? t.strategy : hd)(e, {
          cache: n,
          serializer: r
        })
      }

      function cd(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function dd(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function fd(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function hd(e, t) {
        return fd(e, this, 1 === e.length ? cd : dd, t.cache.create(), t.serializer)
      }
      var pd = function() {
        return JSON.stringify(arguments)
      };

      function md() {
        this.cache = Object.create(null)
      }
      md.prototype.get = function(e) {
        return this.cache[e]
      }, md.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var vd, gd = {
          create: function() {
            return new md
          }
        },
        yd = {
          variadic: function(e, t) {
            return fd(e, this, dd, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return fd(e, this, cd, t.cache.create(), t.serializer)
          }
        };
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(vd || (vd = {}));
      var bd = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Gu.__extends)(t, e), t
        }(Error),
        wd = function(e) {
          function t(t, n) {
            return e.call(this, vd.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(bd),
        Ed = function(e) {
          function t(t, n) {
            return e.call(this, vd.INVALID_CONFIG, t, n) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(bd),
        _d = function(e) {
          function t(t, n) {
            return e.call(this, vd.MISSING_DATA, t, n) || this
          }
          return (0, Gu.__extends)(t, e), t
        }(bd),
        Pd = function(e) {
          function t(t, n, r) {
            var o = e.call(this, vd.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, Gu.__extends)(t, e), t
        }(bd),
        Cd = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, Gu.__extends)(t, e), t
        }(Pd),
        Sd = function(e) {
          function t(t, n) {
            var r = e.call(this, vd.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, Gu.__extends)(t, e), t
        }(bd);

      function Td(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var xd = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Od(e) {
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

      function kd(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new wd("No ".concat(t, " format named: ").concat(n)))
      }

      function Ld(e) {
        ! function(e, t, n) {
          if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
        }(e)
      }
      var Nd = (0, Gu.__assign)((0, Gu.__assign)({}, xd), {
        textComponent: s.Fragment
      });
      n(63305);
      var Ad, Md, Rd, Dd = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        jd = (Dd.Consumer, Dd.Provider),
        Id = Dd;
      ! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Ad || (Ad = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Md || (Md = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Rd || (Rd = {}));
      var Bd = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Hd = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Fd(e) {
        var t = {};
        return e.replace(Hd, (function(e) {
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
      var Ud = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        Vd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        zd = /^(@+)?(\+|#+)?[rs]?$/g,
        Gd = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Kd = /^(0+)$/;

      function qd(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(zd, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Wd(e) {
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

      function Xd(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Kd.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function $d(e) {
        return Wd(e) || {}
      }

      function Yd(e) {
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
              t = (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Gu.__assign)((0, Gu.__assign)({}, e), $d(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Gu.__assign)((0, Gu.__assign)({}, e), $d(t))
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
              o.options[0].replace(Gd, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Kd.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (Vd.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(Vd, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Gu.__assign)((0, Gu.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), qd(i)))
          } else if (zd.test(o.stem)) t = (0, Gu.__assign)((0, Gu.__assign)({}, t), qd(o.stem));
          else {
            var a = Wd(o.stem);
            a && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), a));
            var s = Xd(o.stem);
            s && (t = (0, Gu.__assign)((0, Gu.__assign)({}, t), s))
          }
        }
        return t
      }
      var Zd, Qd = {
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

      function Jd(e) {
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
        return "root" !== r && (n = e.maximize().region), (Qd[n || ""] || Qd[r || ""] || Qd["".concat(r, "-001")] || Qd["001"])[0]
      }
      var ef = new RegExp("^".concat(Bd.source, "*")),
        tf = new RegExp("".concat(Bd.source, "*$"));

      function nf(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var rf = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        of = !!String.fromCodePoint,
        af = !!Object.fromEntries,
        sf = !!String.prototype.codePointAt,
        lf = !!String.prototype.trimStart,
        uf = !!String.prototype.trimEnd,
        cf = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        df = !0;
      try {
        df = "a" === (null === (Zd = bf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Zd ? void 0 : Zd[0])
      } catch (e) {
        df = !1
      }
      var ff, hf = rf ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        pf = of ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        mf = af ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        vf = sf ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        gf = lf ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(ef, "")
        },
        yf = uf ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(tf, "")
        };

      function bf(e, t) {
        return new RegExp(e, t)
      }
      if (df) {
        var wf = bf("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        ff = function(e, t) {
          var n;
          return wf.lastIndex = t, null !== (n = wf.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else ff = function(e, t) {
        for (var n = [];;) {
          var r = vf(e, t);
          if (void 0 === r || _f(r) || Pf(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return pf.apply(void 0, n)
      };

      function Ef(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function _f(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Pf(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Cf(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, Gu.__assign)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function Sf(e, t) {
        return Object.keys((0, Gu.__assign)((0, Gu.__assign)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, Gu.__assign)((0, Gu.__assign)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function Tf(e, t) {
        if (!t) return e;
        var n = ld.formats;
        return (0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, n), e), {
          date: Sf(Cf(n.date, t), Cf(e.date || {}, t)),
          time: Sf(Cf(n.time, t), Cf(e.time || {}, t))
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
                  return this.error(Ad.UNMATCHED_CLOSING_TAG, nf(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Ef(this.peek() || 0)) {
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
                  type: Md.pound,
                  location: nf(a, this.clonePosition())
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
              type: Md.literal,
              value: "<".concat(r, "/>"),
              location: nf(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Ef(this.char())) return this.error(Ad.INVALID_TAG, nf(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(Ad.UNMATCHED_CLOSING_TAG, nf(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Md.tag,
                  value: r,
                  children: i,
                  location: nf(n, this.clonePosition())
                },
                err: null
              } : this.error(Ad.INVALID_TAG, nf(a, this.clonePosition())))
            }
            return this.error(Ad.UNCLOSED_TAG, nf(n, this.clonePosition()))
          }
          return this.error(Ad.INVALID_TAG, nf(n, this.clonePosition()))
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
          var s = nf(n, this.clonePosition());
          return {
            val: {
              type: Md.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Ef(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return pf.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), pf(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ad.EXPECT_ARGUMENT_CLOSING_BRACE, nf(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Ad.EMPTY_ARGUMENT, nf(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(Ad.MALFORMED_ARGUMENT, nf(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Ad.EXPECT_ARGUMENT_CLOSING_BRACE, nf(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Md.argument,
                  value: r,
                  location: nf(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ad.EXPECT_ARGUMENT_CLOSING_BRACE, nf(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(Ad.MALFORMED_ARGUMENT, nf(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = ff(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: nf(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(Ad.EXPECT_ARGUMENT_TYPE, nf(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = yf(g.val)).length) return this.error(Ad.EXPECT_ARGUMENT_STYLE, nf(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: nf(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = nf(r, this.clonePosition());
              if (l && hf(null == l ? void 0 : l.style, "::", 0)) {
                var d = gf(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: Md.number,
                    value: n,
                    location: c,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(Ad.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = Jd(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Rd.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Fd(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Md.date : Md.time,
                    value: n,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Md.number : "date" === a ? Md.date : Md.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ad.EXPECT_SELECT_ARGUMENT_OPTIONS, nf(p, (0, Gu.__assign)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(Ad.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, nf(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Ad.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ad.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = nf(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Md.select,
                  value: n,
                  options: mf(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Md.plural,
                  value: n,
                  options: mf(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(Ad.INVALID_ARGUMENT_TYPE, nf(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Ad.EXPECT_ARGUMENT_CLOSING_BRACE, nf(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Ad.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, nf(n, this.clonePosition()));
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
              for (var t = [], n = 0, r = e.split(Ud).filter((function(e) {
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
            return this.error(Ad.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Rd.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Yd(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(Ad.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ad.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = nf(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? Ad.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ad.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Ad.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ad.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, nf(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: nf(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? Ad.EXPECT_SELECT_ARGUMENT_SELECTOR : Ad.EXPECT_PLURAL_ARGUMENT_SELECTOR, nf(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Ad.MISSING_OTHER_CLAUSE, nf(this.clonePosition(), this.clonePosition())) : {
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
          var s = nf(r, this.clonePosition());
          return o ? cf(i *= n) ? {
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
          var t = vf(this.message, e);
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
          if (hf(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && _f(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }
      }();
      var xf = function(e, t, n, r, o) {
          var i = e.locale,
            a = e.formats,
            s = e.messages,
            l = e.defaultLocale,
            u = e.defaultFormats,
            c = e.fallbackOnEmptyString,
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
          if (Array.isArray(g) && 1 === g.length && g[0].type === Md.literal) return g[0].value;
          if (!r && g && "string" == typeof g && !h) return g.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Gu.__assign)((0, Gu.__assign)({}, h), r || {}), a = Tf(a, f), u = Tf(u, f), !g) {
            if (!1 === c && "" === g) return g;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Sd(n, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(r)
            } catch (e) {
              return d(new Cd('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(g, i, a, (0, Gu.__assign)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new Cd('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(r)
          } catch (e) {
            d(new Cd('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof g ? g : "string" == typeof m ? m : v
        },
        Of = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function kf(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && kd(o, "number", a, i) || {};
        return t(r, Td(n, Of, s))
      }

      function Lf(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return kf(e, t, r).format(n)
        } catch (t) {
          e.onError(new Pd("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function Nf(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return kf(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new Pd("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Af = ["numeric", "style"];

      function Mf(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new td('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Zc.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && kd(o, "relative", a, i) || {};
            return t(r, Td(n, Af, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new Pd("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var Rf = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Df(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          u = (0, Gu.__assign)((0, Gu.__assign)({}, s && {
            timeZone: s
          }), l && kd(i, t, l, a)),
          c = Td(r, Rf, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, Gu.__assign)((0, Gu.__assign)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, c)
      }

      function jf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Df(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new Pd("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function If(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Df(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new Pd("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function Bf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = Td(s, Rf, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new Pd("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function Hf(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Df(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Pd("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Ff(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return Df(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new Pd("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Uf = ["type"];

      function Vf(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new td('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Zc.MISSING_INTL_API));
        var a = Td(r, Uf);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new Pd("Error formatting plural.", o, e))
        }
        return "other"
      }
      var zf = ["type", "style"],
        Gf = Date.now();

      function Kf(e, t, n, r) {
        void 0 === r && (r = {});
        var o = qf(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function qf(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new td('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Zc.MISSING_INTL_API));
        var a = Td(r, zf);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Gf, "_").concat(e, "_").concat(Gf)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, Gu.__assign)((0, Gu.__assign)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new Pd("Error formatting list.", o, e))
        }
        return n
      }
      var Wf = ["style", "type", "fallback", "languageDisplay"];

      function Xf(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new td('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Zc.MISSING_INTL_API));
        var a = Td(r, Wf);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new Pd("Error formatting display name.", o, e))
        }
      }

      function $f(e, t) {
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
              o = ud((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Od(e.dateTime),
                strategy: yd.variadic
              }),
              i = ud((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Od(e.number),
                strategy: yd.variadic
              }),
              a = ud((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Gu.__spreadArray)([void 0], t, !1)))
              }), {
                cache: Od(e.pluralRules),
                strategy: yd.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: ud((function(e, t, n, r) {
                return new ld(e, t, n, (0, Gu.__assign)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Od(e.message),
                strategy: yd.variadic
              }),
              getRelativeTimeFormat: ud((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Gu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Od(e.relativeTime),
                strategy: yd.variadic
              }),
              getPluralRules: a,
              getListFormat: ud((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Gu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Od(e.list),
                strategy: yd.variadic
              }),
              getDisplayNames: ud((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Gu.__spreadArray)([void 0], e, !1)))
              }), {
                cache: Od(e.displayNames),
                strategy: yd.variadic
              })
            }
          }(t),
          r = (0, Gu.__assign)((0, Gu.__assign)({}, xd), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new _d('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new _d('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Ed('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Gu.__assign)((0, Gu.__assign)({}, r), {
            formatters: n,
            formatNumber: Lf.bind(null, r, n.getNumberFormat),
            formatNumberToParts: Nf.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Mf.bind(null, r, n.getRelativeTimeFormat),
            formatDate: jf.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Hf.bind(null, r, n.getDateTimeFormat),
            formatTime: If.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Bf.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Ff.bind(null, r, n.getDateTimeFormat),
            formatPlural: Vf.bind(null, r, n.getPluralRules),
            formatMessage: xf.bind(null, r, n),
            $t: xf.bind(null, r, n),
            formatList: Kf.bind(null, r, n.getListFormat),
            formatListToParts: qf.bind(null, r, n.getListFormat),
            formatDisplayName: Xf.bind(null, r, n.getDisplayNames)
          })
      }

      function Yf(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = id(o) ? (r = o, function(e) {
            return r(s.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }
      var Zf = function(e, t, n, r) {
          for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
          var a = Yf(r),
            l = xf.apply(void 0, (0, Gu.__spreadArray)([e, t, n, a], o, !1));
          return Array.isArray(l) ? s.Children.toArray(l) : l
        },
        Qf = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, Gu.__rest)(e, ["defaultRichTextElements"]),
            o = Yf(n),
            i = $f((0, Gu.__assign)((0, Gu.__assign)((0, Gu.__assign)({}, Nd), r), {
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
          return (0, Gu.__assign)((0, Gu.__assign)({}, i), {
            formatMessage: Zf.bind(null, a, i.formatters),
            $t: Zf.bind(null, a, i.formatters)
          })
        };

      function Jf(e) {
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
      var eh = function(e) {
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
            intl: Qf(Jf(t.props), t.cache),
            prevConfig: Jf(t.props)
          }, t
        }
        return (0, Gu.__extends)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = Jf(e);
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
            intl: Qf(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Ld(this.state.intl), s.createElement(jd, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = Nd, t
      }(s.PureComponent);
      const th = eh;

      function nh() {
        var e = s.useContext(Id);
        return Ld(e), e
      }
      var rh, oh;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(rh || (rh = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(oh || (oh = {}));
      var ih = function(e) {
        var t = nh(),
          n = e.value,
          r = e.children,
          o = (0, Gu.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function ah(e) {
        var t = function(t) {
          var n = nh(),
            r = t.value,
            o = t.children,
            i = (0, Gu.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = oh[e], t
      }

      function sh(e) {
        var t = function(t) {
          var n = nh(),
            r = t.value,
            o = t.children,
            i = (0, Gu.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var l = n.textComponent || s.Fragment;
          return s.createElement(l, null, a)
        };
        return t.displayName = rh[e], t
      }
      ih.displayName = "FormattedNumberParts", ih.displayName = "FormattedNumberParts", sh("formatDate"), sh("formatTime"), sh("formatNumber"), sh("formatList"), sh("formatDisplayName"), ah("formatDate"), ah("formatTime");
      const lh = ({
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
          }), [n]), o ? (0, i.jsx)(th, {
            locale: n,
            messages: o,
            children: e
          }) : r || null
        },
        uh = {
          id: "Lightbox_Open_Button_Label"
        },
        ch = {
          id: "Lightbox_Dialog_Title"
        },
        dh = {
          id: "Lightbox_Dialog_Description"
        },
        fh = {
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
        hh = (e, t) => {
          const n = "more" === t ? xo.lightHc : xo.light,
            r = "more" === t ? xo.darkHc : xo.dark;
          return "dark" === e ? r : n
        };

      function ph(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function mh(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function vh(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function gh(e, t = []) {
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
            } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
            return (0, i.jsx)(u.Provider, {
              value: c,
              children: r
            })
          }
          return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
            const l = i?.[e][a] || o,
              u = s.useContext(l);
            if (u) return u;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, yh(r, ...t)]
      }

      function yh(...e) {
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

      function bh(e) {
        const t = s.useRef(e);
        return s.useEffect((() => {
          t.current = e
        })), s.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function wh({
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
            i = bh(t);
          return s.useEffect((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = bh(n);
        return [a, s.useCallback((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l])]
      }
      var Eh = s.createContext(void 0);

      function _h(e) {
        const t = s.useContext(Eh);
        return e || t || "ltr"
      }

      function Ph(e) {
        const t = s.useRef({
          value: e,
          previous: e
        });
        return s.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var Ch = Boolean(globalThis?.document) ? s.useLayoutEffect : () => {};

      function Sh(e) {
        const [t, n] = s.useState(void 0);
        return Ch((() => {
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
      var Th = n(50786),
        xh = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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
        Oh = ["PageUp", "PageDown"],
        kh = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Lh = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        Nh = "Slider",
        [Ah, Mh, Rh] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = gh(t),
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
          const u = e + "CollectionSlot",
            c = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = vh(t, a(u, n).collectionRef);
              return (0, i.jsx)(Th.DX, {
                ref: o,
                children: r
              })
            }));
          c.displayName = u;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            h = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r,
                ...o
              } = e, l = s.useRef(null), u = vh(t, l), c = a(d, n);
              return s.useEffect((() => (c.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                c.itemMap.delete(l)
              }))), (0, i.jsx)(Th.DX, {
                [f]: "",
                ref: u,
                children: r
              })
            }));
          return h.displayName = d, [{
            Provider: l,
            Slot: c,
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
        }(Nh),
        [Dh, jh] = gh(Nh, [Rh]),
        [Ih, Bh] = Dh(Nh),
        Hh = s.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: a = 1,
            orientation: l = "horizontal",
            disabled: u = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: d = [r],
            value: f,
            onValueChange: h = (() => {}),
            onValueCommit: p = (() => {}),
            inverted: m = !1,
            ...v
          } = e, g = s.useRef(new Set), y = s.useRef(0), b = "horizontal" === l ? Vh : zh, [w = [], E] = wh({
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
              l = ph(s, [r, o]);
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
                }(r, c * a)) {
                y.current = r.indexOf(l);
                const t = String(r) !== String(e);
                return t && n && p(r), t ? r : e
              }
              return e
            }))
          }
          return (0, i.jsx)(Ih, {
            scope: e.__scopeSlider,
            name: n,
            disabled: u,
            min: r,
            max: o,
            valueIndexToChangeRef: y,
            thumbs: g.current,
            values: w,
            orientation: l,
            children: (0, i.jsx)(Ah.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(Ah.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(b, {
                  "aria-disabled": u,
                  "data-disabled": u ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: mh(v.onPointerDown, (() => {
                    u || (_.current = w)
                  })),
                  min: r,
                  max: o,
                  inverted: m,
                  onSlideStart: u ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(w, e);
                    P(e, t)
                  },
                  onSlideMove: u ? void 0 : function(e) {
                    P(e, y.current)
                  },
                  onSlideEnd: u ? void 0 : function() {
                    const e = _.current[y.current];
                    w[y.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !u && P(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !u && P(o, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!u) {
                      const n = Oh.includes(e.key) || e.shiftKey && kh.includes(e.key) ? 10 : 1,
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
      Hh.displayName = Nh;
      var [Fh, Uh] = Dh(Nh, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Vh = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: a,
          onSlideStart: l,
          onSlideMove: u,
          onSlideEnd: c,
          onStepKeyDown: d,
          ...f
        } = e, [h, p] = s.useState(null), m = vh(t, (e => p(e))), v = s.useRef(), g = _h(o), y = "ltr" === g, b = y && !a || !y && a;

        function w(e) {
          const t = v.current || h.getBoundingClientRect(),
            o = ep([0, t.width], b ? [n, r] : [r, n]);
          return v.current = t, o(e - t.left)
        }
        return (0, i.jsx)(Fh, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(Gh, {
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
              u?.(t)
            },
            onSlideEnd: () => {
              v.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = Lh[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), zh = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: l,
          onSlideEnd: u,
          onStepKeyDown: c,
          ...d
        } = e, f = s.useRef(null), h = vh(t, f), p = s.useRef(), m = !o;

        function v(e) {
          const t = p.current || f.current.getBoundingClientRect(),
            o = ep([0, t.height], m ? [r, n] : [n, r]);
          return p.current = t, o(e - t.top)
        }
        return (0, i.jsx)(Fh, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, i.jsx)(Gh, {
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
              p.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = Lh[m ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Gh = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: u,
          ...c
        } = e, d = Bh(Nh, n);
        return (0, i.jsx)(xh.span, {
          ...c,
          ref: t,
          onKeyDown: mh(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : Oh.concat(kh).includes(e.key) && (u(e), e.preventDefault())
          })),
          onPointerDown: mh(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: mh(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: mh(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), Kh = "SliderTrack", qh = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = Bh(Kh, n);
        return (0, i.jsx)(xh.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      qh.displayName = Kh;
      var Wh = "SliderRange",
        Xh = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = Bh(Wh, n), a = Uh(Wh, n), l = vh(t, s.useRef(null)), u = o.values.length, c = o.values.map((e => Jh(e, o.min, o.max))), d = u > 1 ? Math.min(...c) : 0, f = 100 - Math.max(...c);
          return (0, i.jsx)(xh.span, {
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
      Xh.displayName = Wh;
      var $h = "SliderThumb",
        Yh = s.forwardRef(((e, t) => {
          const n = Mh(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = vh(t, (e => o(e))),
            l = s.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, i.jsx)(Zh, {
            ...e,
            ref: a,
            index: l
          })
        })),
        Zh = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...a
          } = e, l = Bh($h, n), u = Uh($h, n), [c, d] = s.useState(null), f = vh(t, (e => d(e))), h = !c || Boolean(c.closest("form")), p = Sh(c), m = l.values[r], v = void 0 === m ? 0 : Jh(m, l.min, l.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, l.values.length), y = p?.[u.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - ep([0, 50], [0, r])(t) * n) * n
          }(y, v, u.direction) : 0;
          return s.useEffect((() => {
            if (c) return l.thumbs.add(c), () => {
              l.thumbs.delete(c)
            }
          }), [c, l.thumbs]), (0, i.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [u.startEdge]: `calc(${v}% + ${b}px)`
            },
            children: [(0, i.jsx)(Ah.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(xh.span, {
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
                onFocus: mh(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = r
                }))
              })
            }), h && (0, i.jsx)(Qh, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              value: m
            }, r)]
          })
        }));
      Yh.displayName = $h;
      var Qh = e => {
        const {
          value: t,
          ...n
        } = e, r = s.useRef(null), o = Ph(t);
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

      function Jh(e, t, n) {
        return ph(100 / (n - t) * (e - t), [0, 100])
      }

      function ep(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      var tp = Hh,
        np = qh,
        rp = Xh,
        op = Yh;
      const ip = {
          id: "Lightbox_Close_Button_Label"
        },
        ap = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        sp = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        lp = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        up = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        cp = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        dp = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        fp = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        hp = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        pp = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        mp = {
          id: "Lightbox_Download_Button_Label"
        },
        vp = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function gp() {
        return gp = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, gp.apply(this, arguments)
      }
      var yp = ["shift", "alt", "meta", "mod", "ctrl"],
        bp = {
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

      function wp(e) {
        return (bp[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Ep(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function _p(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return wp(e)
        }));
        return gp({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !yp.includes(e)
          })),
          description: n
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && Sp([wp(e.key), wp(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && Tp([wp(e.key), wp(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        Pp.clear()
      }));
      var Pp = new Set;

      function Cp(e) {
        return Array.isArray(e)
      }

      function Sp(e) {
        var t = Array.isArray(e) ? e : [e];
        Pp.has("meta") && Pp.forEach((function(e) {
          return ! function(e) {
            return yp.includes(e)
          }(e) && Pp.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return Pp.add(e.toLowerCase())
        }))
      }

      function Tp(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? Pp.clear() : t.forEach((function(e) {
          return Pp.delete(e.toLowerCase())
        }))
      }

      function xp(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return Cp(t) ? Boolean(r && t && t.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && t && !0 === t)
      }
      var Op = (0, s.createContext)(void 0);

      function kp(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(Op.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function Lp(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && Lp(e[r], t[r])
        }), !0) : e === t
      }
      var Np = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        Ap = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, s.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = o[0],
            l = o[1],
            u = (0, s.useState)([]),
            c = u[0],
            d = u[1],
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
                  return !Lp(t, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(Np.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: c,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, i.jsx)(kp, {
              addHotkey: m,
              removeHotkey: v,
              children: r
            })
          })
        },
        Mp = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        Rp = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function Dp(e, t, n, r) {
        var o = (0, s.useRef)(null),
          i = (0, s.useRef)(!1),
          a = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          l = Cp(e) ? e.join(null == a ? void 0 : a.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          c = (0, s.useCallback)(t, null != u ? u : []),
          d = (0, s.useRef)(c);
        d.current = u ? c : t;
        var f = function(e) {
            var t = (0, s.useRef)(void 0);
            return Lp(t.current, e) || (t.current = e), t.current
          }(a),
          h = (0, s.useContext)(Np).enabledScopes,
          p = (0, s.useContext)(Op);
        return Rp((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = h, t = null == f ? void 0 : f.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !xp(e, ["input", "textarea", "select"]) || xp(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void Mp(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != f && f.enableOnContentEditable) && Ep(l, null == f ? void 0 : f.splitKey).forEach((function(n) {
                    var r, o = _p(n, null == f ? void 0 : f.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          m = e.shiftKey,
                          v = e.altKey,
                          g = wp(f),
                          y = d.toLowerCase();
                        if (!(null != c && c.includes(g) || null != c && c.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(g))) return !1;
                        if (!n) {
                          if (i === !v && "alt" !== y) return !1;
                          if (l === !m && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (u === !h && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(y) && !c.includes(g)) || (c ? (void 0 === o && (o = ","), (Cp(r = c) ? r : r.split(o)).every((function(e) {
                          return Pp.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (t && i.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == f ? void 0 : f.enabled)) return void Mp(e);
                      d.current(e, o), t || (i.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (Sp(wp(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && n(e))
              },
              s = function(e) {
                void 0 !== e.key && (Tp(wp(e.code)), i.current = !1, null != f && f.keyup && n(e, !0))
              },
              u = o.current || (null == a ? void 0 : a.document) || document;
            return u.addEventListener("keyup", s), u.addEventListener("keydown", r), p && Ep(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return p.addHotkey(_p(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                u.removeEventListener("keyup", s), u.removeEventListener("keydown", r), p && Ep(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return p.removeHotkey(_p(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [l, f, h]), o
      }

      function jp(e) {
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

      function Ip(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Bp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ip(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = jp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ip(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Hp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Fp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Up = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Bp(Bp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Fp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hp(e.variantClassNames, (e => Hp(e, (e => e.split(" ")[0]))))
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
      const Vp = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        zp = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: l,
          size: u = "MD",
          fullWidth: d = !1,
          onClick: f,
          children: h,
          ...p
        }, m) => {
          const v = (0, s.useRef)(null),
            g = mt(v, m),
            {
              events: y,
              others: b
            } = (0, a.bZ)(p, {
              onPress: !1
            }),
            {
              buttonProps: w,
              isPressed: E
            } = qn({
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
              className: Up({
                appearance: l,
                size: u,
                fullWidth: d
              })
            }),
            P = ne[r],
            C = t ? c.DX : "button",
            S = Vp[u];
          return (0, i.jsxs)(C, {
            ref: g,
            ..._,
            children: [P && (0, i.jsx)(P, {
              label: o || "",
              size: S
            }), (0, i.jsx)(c.xV, {
              children: h
            })]
          })
        })),
        Gp = (0, s.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, r) => (Dp(e, (e => n?.(e)), [n]), (0, i.jsx)(F, {
          className: (0, Te.$)("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, i.jsx)("kbd", {
            ref: r,
            children: e
          })
        }))));
      var Kp = /^--/;

      function qp(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Kp.test(e) || Xp.hasOwnProperty(e) && Xp[e] ? ("" + t).trim() : t + "px"
      }
      var Wp = {},
        Xp = {
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
        $p = ["Webkit", "Ms", "Moz", "O"];
      Xp = Object.keys(Xp).reduce(((e, t) => ($p.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Xp);
      var Yp = /^(matrix|translate|scale|rotate|skew)/,
        Zp = /^(translate)/,
        Qp = /^(rotate|skew)/,
        Jp = (e, t) => ca.num(e) && 0 !== e ? e + t : e,
        em = (e, t) => ca.arr(e) ? e.every((e => em(e, t))) : ca.num(e) ? e === t : parseFloat(e) === t,
        tm = class extends qs {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Jp(e,"px"))).join(",")})`, em(e, 0)]))), ha(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Yp.test(t)) {
                if (delete r[t], ca.und(e)) return;
                const n = Zp.test(t) ? "px" : Qp.test(t) ? "deg" : "";
                o.push(pa(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Jp(o,n)})`, em(o, 0)] : e => [`${t}(${e.map((e=>Jp(e,n))).join(",")})`, em(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new nm(o, i)), super(r)
          }
        },
        nm = class extends fs {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return fa(this.inputs, ((n, r) => {
              const o = us(n[0]),
                [i, a] = this.transforms[r](ca.arr(o) ? o : n.map(us));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && fa(this.inputs, (e => fa(e, (e => ls(e) && ps(e, this)))))
          }
          observerRemoved(e) {
            0 == e && fa(this.inputs, (e => fa(e, (e => ls(e) && ms(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ds(this, e)
          }
        };
      la.assign({
        batchedUpdates: gu.unstable_batchedUpdates,
        createStringInterpolator: Ts,
        colors: Ma
      });
      var rm = Js(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
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
              ...u
            } = t,
            c = Object.values(u),
            d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : Wp[t] || (Wp[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== i && (e.textContent = i);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const n = qp(t, o[t]);
              Kp.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
            } d.forEach(((t, n) => {
            e.setAttribute(t, c[n])
          })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
        },
        createAnimatedStyle: e => new tm(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...n
        }) => n
      }).animated;

      function om(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function im(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function am(...e) {
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
      var sm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
        const n = s.forwardRef(((e, n) => {
          const {
            asChild: r,
            ...o
          } = e, a = r ? Th.DX : t;
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

      function lm(e, t = globalThis?.document) {
        const n = bh(e);
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
      var um, cm = "dismissableLayer.update",
        dm = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        fm = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = s.useContext(dm), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = im(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      pm("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && pm("dismissableLayer.focusOutside", n, {
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
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p);
          return lm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (um = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), hm(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = um)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), hm())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(cm, e), () => document.removeEventListener(cm, e)
          }), []), (0, i.jsx)(sm.div, {
            ...c,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: om(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: om(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: om(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function hm() {
        const e = new CustomEvent(cm);
        document.dispatchEvent(e)
      }

      function pm(e, t, n, {
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
          e && gu.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      fm.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(dm),
          r = s.useRef(null),
          o = im(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(sm.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var mm = l["useId".toString()] || (() => {}),
        vm = 0;

      function gm(e) {
        const [t, n] = s.useState(mm());
        return Ch((() => {
          e || n((e => e ?? String(vm++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      var ym = n(15191),
        bm = n(50123);
      const wm = e => ({
        name: "arrow",
        options: e,
        fn(t) {
          const {
            element: n,
            padding: r
          } = "function" == typeof e ? e(t) : e;
          return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? (0, ym.UE)({
            element: n.current,
            padding: r
          }).fn(t) : {} : n ? (0, ym.UE)({
            element: n,
            padding: r
          }).fn(t) : {};
          var o
        }
      });
      var Em = "undefined" != typeof document ? s.useLayoutEffect : s.useEffect;

      function _m(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; 0 != r--;)
              if (!_m(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || _m(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Pm(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Cm(e, t) {
        const n = Pm(e);
        return Math.round(t * n) / n
      }

      function Sm(e) {
        const t = s.useRef(e);
        return Em((() => {
          t.current = e
        })), t
      }
      var Tm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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
        xm = s.forwardRef(((e, t) => {
          const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...a
          } = e;
          return (0, i.jsx)(Tm.svg, {
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
      xm.displayName = "Arrow";
      var Om = xm;

      function km(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Lm(...e) {
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
      var Nm = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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
        Am = "Popper",
        [Mm, Rm] = function(e, t = []) {
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
              } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(u.Provider, {
                value: c,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Lm(r, ...t)]
        }(Am),
        [Dm, jm] = Mm(Am),
        Im = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, o] = s.useState(null);
          return (0, i.jsx)(Dm, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
          })
        };
      Im.displayName = Am;
      var Bm = "PopperAnchor",
        Hm = s.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...o
          } = e, a = jm(Bm, n), l = s.useRef(null), u = km(t, l);
          return s.useEffect((() => {
            a.onAnchorChange(r?.current || l.current)
          })), r ? null : (0, i.jsx)(Nm.div, {
            ...o,
            ref: u
          })
        }));
      Hm.displayName = Bm;
      var Fm = "PopperContent",
        [Um, Vm] = Mm(Fm),
        zm = s.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: a = "center",
            alignOffset: l = 0,
            arrowPadding: u = 0,
            avoidCollisions: c = !0,
            collisionBoundary: d = [],
            collisionPadding: f = 0,
            sticky: h = "partial",
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = "optimized",
            onPlaced: v,
            ...g
          } = e, y = jm(Fm, n), [b, w] = s.useState(null), E = km(t, (e => w(e))), [_, P] = s.useState(null), C = Sh(_), S = C?.width ?? 0, T = C?.height ?? 0, x = r + ("center" !== a ? "-" + a : ""), O = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, k = Array.isArray(d) ? d : [d], L = k.length > 0, N = {
            padding: O,
            boundary: k.filter(Wm),
            altBoundary: L
          }, {
            refs: A,
            floatingStyles: M,
            placement: R,
            isPositioned: D,
            middlewareData: j
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
              whileElementsMounted: u,
              open: c
            } = e, [d, f] = s.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [h, p] = s.useState(r);
            _m(h, r) || p(r);
            const [m, v] = s.useState(null), [g, y] = s.useState(null), b = s.useCallback((e => {
              e != P.current && (P.current = e, v(e))
            }), [v]), w = s.useCallback((e => {
              e !== C.current && (C.current = e, y(e))
            }), [y]), E = i || m, _ = a || g, P = s.useRef(null), C = s.useRef(null), S = s.useRef(d), T = Sm(u), x = Sm(o), O = s.useCallback((() => {
              if (!P.current || !C.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: h
              };
              x.current && (e.platform = x.current), (0, bm.rD)(P.current, C.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                k.current && !_m(S.current, t) && (S.current = t, gu.flushSync((() => {
                  f(t)
                })))
              }))
            }), [h, t, n, x]);
            Em((() => {
              !1 === c && S.current.isPositioned && (S.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const k = s.useRef(!1);
            Em((() => (k.current = !0, () => {
              k.current = !1
            })), []), Em((() => {
              if (E && (P.current = E), _ && (C.current = _), E && _) {
                if (T.current) return T.current(E, _, O);
                O()
              }
            }), [E, _, O, T]);
            const L = s.useMemo((() => ({
                reference: P,
                floating: C,
                setReference: b,
                setFloating: w
              })), [b, w]),
              N = s.useMemo((() => ({
                reference: E,
                floating: _
              })), [E, _]),
              A = s.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!N.floating) return e;
                const t = Cm(N.floating, d.x),
                  r = Cm(N.floating, d.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Pm(N.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, l, N.floating, d.x, d.y]);
            return s.useMemo((() => ({
              ...d,
              update: O,
              refs: L,
              elements: N,
              floatingStyles: A
            })), [d, O, L, N, A])
          }({
            strategy: "fixed",
            placement: x,
            whileElementsMounted: (...e) => (0, bm.ll)(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, ym.cY)({
              mainAxis: o + T,
              alignmentAxis: l
            }), c && (0, ym.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? (0, ym.ER)() : void 0,
              ...N
            }), c && (0, ym.UU)({
              ...N
            }), (0, ym.Ej)({
              ...N,
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
            }), _ && wm({
              element: _,
              padding: u
            }), Xm({
              arrowWidth: S,
              arrowHeight: T
            }), p && (0, ym.jD)({
              strategy: "referenceHidden",
              ...N
            })]
          }), [I, B] = $m(R), H = bh(v);
          Ch((() => {
            D && H?.()
          }), [D, H]);
          const F = j.arrow?.x,
            U = j.arrow?.y,
            V = 0 !== j.arrow?.centerOffset,
            [z, G] = s.useState();
          return Ch((() => {
            b && G(window.getComputedStyle(b).zIndex)
          }), [b]), (0, i.jsx)("div", {
            ref: A.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...M,
              transform: D ? M.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: z,
              "--radix-popper-transform-origin": [j.transformOrigin?.x, j.transformOrigin?.y].join(" "),
              ...j.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, i.jsx)(Um, {
              scope: n,
              placedSide: I,
              onArrowChange: P,
              arrowX: F,
              arrowY: U,
              shouldHideArrow: V,
              children: (0, i.jsx)(Nm.div, {
                "data-side": I,
                "data-align": B,
                ...g,
                ref: E,
                style: {
                  ...g.style,
                  animation: D ? void 0 : "none"
                }
              })
            })
          })
        }));
      zm.displayName = Fm;
      var Gm = "PopperArrow",
        Km = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        qm = s.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...r
          } = e, o = Vm(Gm, n), a = Km[o.placedSide];
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
            children: (0, i.jsx)(Om, {
              ...r,
              ref: t,
              style: {
                ...r.style,
                display: "block"
              }
            })
          })
        }));

      function Wm(e) {
        return null !== e
      }
      qm.displayName = Gm;
      var Xm = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, u] = $m(n), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [u], d = (o.arrow?.x ?? 0) + a / 2, f = (o.arrow?.y ?? 0) + s / 2;
          let h = "",
            p = "";
          return "bottom" === l ? (h = i ? c : `${d}px`, p = -s + "px") : "top" === l ? (h = i ? c : `${d}px`, p = `${r.floating.height+s}px`) : "right" === l ? (h = -s + "px", p = i ? c : `${f}px`) : "left" === l && (h = `${r.floating.width+s}px`, p = i ? c : `${f}px`), {
            data: {
              x: h,
              y: p
            }
          }
        }
      });

      function $m(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var Ym = Im,
        Zm = Hm,
        Qm = zm,
        Jm = qm,
        ev = s.forwardRef(((e, t) => {
          const {
            container: n,
            ...r
          } = e, [o, a] = s.useState(!1);
          Ch((() => a(!0)), []);
          const l = n || o && globalThis?.document?.body;
          return l ? gu.createPortal((0, i.jsx)(sm.div, {
            ...r,
            ref: t
          }), l) : null
        }));
      ev.displayName = "Portal";
      var tv = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
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
            const e = nv(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Ch((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = nv(t);
              u(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, u]), Ch((() => {
            if (t) {
              const e = e => {
                  const n = nv(r.current).includes(e.animationName);
                  e.target === t && n && gu.flushSync((() => u("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = nv(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = im(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function nv(e) {
        return e?.animationName || "none"
      }
      tv.displayName = "Presence";
      var rv = s.forwardRef(((e, t) => (0, i.jsx)(sm.span, {
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
      rv.displayName = "VisuallyHidden";
      var ov = rv,
        [iv, av] = function(e, t = []) {
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
              } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(u.Provider, {
                value: c,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, am(r, ...t)]
        }("Tooltip", [Rm]),
        sv = Rm(),
        lv = "TooltipProvider",
        uv = 700,
        cv = "tooltip.open",
        [dv, fv] = iv(lv),
        hv = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = uv,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, [l, u] = s.useState(!0), c = s.useRef(!1), d = s.useRef(0);
          return s.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(dv, {
            scope: t,
            isOpenDelayed: l,
            delayDuration: n,
            onOpen: s.useCallback((() => {
              window.clearTimeout(d.current), u(!1)
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(d.current), d.current = window.setTimeout((() => u(!0)), r)
            }), [r]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: s.useCallback((e => {
              c.current = e
            }), []),
            disableHoverableContent: o,
            children: a
          })
        };
      hv.displayName = lv;
      var pv = "Tooltip",
        [mv, vv] = iv(pv),
        gv = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: u
          } = e, c = fv(pv, e.__scopeTooltip), d = sv(t), [f, h] = s.useState(null), p = gm(), m = s.useRef(0), v = l ?? c.disableHoverableContent, g = u ?? c.delayDuration, y = s.useRef(!1), [b = !1, w] = wh({
            prop: r,
            defaultProp: o,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(cv))) : c.onClose(), a?.(e)
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
          return s.useEffect((() => () => window.clearTimeout(m.current)), []), (0, i.jsx)(Ym, {
            ...d,
            children: (0, i.jsx)(mv, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: E,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: s.useCallback((() => {
                c.isOpenDelayed ? C() : _()
              }), [c.isOpenDelayed, C, _]),
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
      gv.displayName = pv;
      var yv = "TooltipTrigger",
        bv = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = vv(yv, n), a = fv(yv, n), l = sv(n), u = im(t, s.useRef(null), o.onTriggerChange), c = s.useRef(!1), d = s.useRef(!1), f = s.useCallback((() => c.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", f)), [f]), (0, i.jsx)(Zm, {
            asChild: !0,
            ...l,
            children: (0, i.jsx)(sm.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: u,
              onPointerMove: om(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (d.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), d.current = !0))
              })),
              onPointerLeave: om(e.onPointerLeave, (() => {
                o.onTriggerLeave(), d.current = !1
              })),
              onPointerDown: om(e.onPointerDown, (() => {
                c.current = !0, document.addEventListener("pointerup", f, {
                  once: !0
                })
              })),
              onFocus: om(e.onFocus, (() => {
                c.current || o.onOpen()
              })),
              onBlur: om(e.onBlur, o.onClose),
              onClick: om(e.onClick, o.onClose)
            })
          })
        }));
      bv.displayName = yv;
      var wv = "TooltipPortal",
        [Ev, _v] = iv(wv, {
          forceMount: void 0
        }),
        Pv = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = vv(wv, t);
          return (0, i.jsx)(Ev, {
            scope: t,
            forceMount: n,
            children: (0, i.jsx)(tv, {
              present: n || a.open,
              children: (0, i.jsx)(ev, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      Pv.displayName = wv;
      var Cv = "TooltipContent",
        Sv = s.forwardRef(((e, t) => {
          const n = _v(Cv, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = vv(Cv, e.__scopeTooltip);
          return (0, i.jsx)(tv, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(kv, {
              side: o,
              ...a,
              ref: t
            }) : (0, i.jsx)(Tv, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        Tv = s.forwardRef(((e, t) => {
          const n = vv(Cv, e.__scopeTooltip),
            r = fv(Cv, e.__scopeTooltip),
            o = s.useRef(null),
            a = im(t, o),
            [l, u] = s.useState(null),
            {
              trigger: c,
              onClose: d
            } = n,
            f = o.current,
            {
              onPointerInTransitChange: h
            } = r,
            p = s.useCallback((() => {
              u(null), h(!1)
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
              u(i), h(!0)
            }), [h]);
          return s.useEffect((() => () => p()), [p]), s.useEffect((() => {
            if (c && f) {
              const e = e => m(e, f),
                t = e => m(e, c);
              return c.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [c, f, m, p]), s.useEffect((() => {
            if (l) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = c?.contains(t) || f?.contains(t),
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
                        u = t[i].y;
                      s > r != u > r && n < (l - a) * (r - s) / (u - s) + a && (o = !o)
                    }
                    return o
                  }(n, l);
                r ? p() : o && (p(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [c, f, l, d, p]), (0, i.jsx)(kv, {
            ...e,
            ref: a
          })
        })),
        [xv, Ov] = iv(pv, {
          isInside: !1
        }),
        kv = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...u
          } = e, c = vv(Cv, n), d = sv(n), {
            onClose: f
          } = c;
          return s.useEffect((() => (document.addEventListener(cv, f), () => document.removeEventListener(cv, f))), [f]), s.useEffect((() => {
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
          }), [c.trigger, f]), (0, i.jsx)(fm, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(Qm, {
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
              children: [(0, i.jsx)(Th.xV, {
                children: r
              }), (0, i.jsx)(xv, {
                scope: n,
                isInside: !0,
                children: (0, i.jsx)(ov, {
                  id: c.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      Sv.displayName = Cv;
      var Lv = "TooltipArrow",
        Nv = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = sv(n);
          return Ov(Lv, n).isInside ? null : (0, i.jsx)(Jm, {
            ...o,
            ...r,
            ref: t
          })
        }));
      Nv.displayName = Lv;
      var Av = hv,
        Mv = gv,
        Rv = bv,
        Dv = Pv,
        jv = Sv,
        Iv = Nv;
      const Bv = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u,
        collisionPadding: c,
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
        const [P = !1, C] = bt({
          defaultProp: m,
          prop: v,
          onChange: g
        }), S = pt(P), T = uu({
          opacity: P ? 1 : 0,
          immediate: P && !S
        }), x = "left" === n || "right" === n ? "center" : o, O = b ? {
          container: E
        } : {}, k = b ? Dv : s.Fragment, L = w ? {
          className: "foundry_h3lgaa2"
        } : {}, N = w ? Iv : s.Fragment;
        return (0, i.jsx)(Av, {
          delayDuration: y,
          children: (0, i.jsxs)(Mv, {
            open: P,
            onOpenChange: C,
            children: [(0, i.jsx)(Rv, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, i.jsx)(k, {
              ...O,
              children: (0, i.jsx)(jv, {
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
                collisionPadding: c,
                collisionBoundary: u,
                onPointerDownOutside: h,
                children: (0, i.jsxs)(rm.div, {
                  className: "foundry_h3lgaa0",
                  style: T,
                  children: [(0, i.jsx)(M, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, i.jsx)(N, {
                    ...L
                  })]
                })
              })
            })]
          })
        })
      };
      var Hv = "foundry_bwy1ds1",
        Fv = "foundry_bwy1dsg",
        Uv = "foundry_bwy1dsf";
      const Vv = e => {
          e.preventDefault?.()
        },
        zv = (0, s.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: r,
          zoomOut: o,
          zoomTo: a,
          minZoomLevel: s,
          maxZoomLevel: l,
          canZoomIn: u,
          canZoomOut: c,
          resetZoom: d,
          caption: f,
          showDownloadButton: h,
          defaultZoomLevel: p,
          showZoomControls: m
        }, v) => {
          const g = nh(),
            y = ht("screen and (max-width: 1024px)"),
            b = n !== p,
            w = y ? "SM" : "LG",
            E = uu({
              opacity: b ? 1 : 0,
              immediate: vt()
            });
          Dp(["+", "=", "add", "plus"], (() => r?.()), {
            preventDefault: !0,
            enabled: m
          }), Dp(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0,
            enabled: m
          }), Dp("r", (() => d?.()), {
            preventDefault: !0,
            enabled: m
          });
          const _ = Et() && y;
          return (0, i.jsx)(Ap, {
            children: (0, i.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: v,
              children: [(0, i.jsx)(Bv, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Vv,
                content: (0, i.jsxs)("div", {
                  className: Uv,
                  children: [g.formatMessage(ip), (0, i.jsx)(F, {
                    className: Fv,
                    children: g.formatMessage(ap, {
                      shortcut: (0, i.jsx)(Gp, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, i.jsx)(zp, {
                  size: w,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: g.formatMessage(ip),
                  className: (0, Te.$)(Hv, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!_ && m && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, i.jsx)(Bv, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Vv,
                      content: (0, i.jsxs)("div", {
                        className: Uv,
                        children: [g.formatMessage(sp), (0, i.jsx)(F, {
                          className: Fv,
                          children: g.formatMessage(lp, {
                            shortcut: (0, i.jsx)(Gp, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(zp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: g.formatMessage(sp),
                        className: (0, Te.$)(Hv, "foundry_bwy1ds5"),
                        onPress: () => r(),
                        isDisabled: !u
                      })
                    }), (0, i.jsxs)(tp, {
                      className: "foundry_bwy1dsa",
                      value: [n],
                      max: l,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, i.jsx)(np, {
                        className: "foundry_bwy1dsb",
                        children: (0, i.jsx)(rp, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, i.jsx)(Bv, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: Vv,
                        content: g.formatMessage(pp, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, i.jsx)(op, {
                          className: "foundry_bwy1dsd",
                          "aria-label": g.formatMessage(hp),
                          children: (0, i.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, i.jsx)(Bv, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Vv,
                      content: (0, i.jsxs)("div", {
                        className: Uv,
                        children: [g.formatMessage(up), (0, i.jsx)(F, {
                          className: Fv,
                          children: g.formatMessage(cp, {
                            shortcut: (0, i.jsx)(Gp, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(zp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: g.formatMessage(up),
                        className: (0, Te.$)(Hv, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, i.jsx)(Lu.div, {
                    style: E,
                    children: (0, i.jsx)(Bv, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Vv,
                      content: (0, i.jsxs)("div", {
                        className: Uv,
                        children: [g.formatMessage(dp), (0, i.jsx)(F, {
                          className: Fv,
                          children: g.formatMessage(fp, {
                            shortcut: (0, i.jsx)(Gp, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, i.jsx)(zp, {
                        size: w,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: g.formatMessage(dp),
                        className: (0, Te.$)(Hv, "foundry_bwy1ds7"),
                        onPress: d,
                        isDisabled: !b,
                        "aria-hidden": !b
                      })
                    })
                  })]
                }), h && _ && (0, i.jsx)(Bv, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Vv,
                  content: g.formatMessage(vp),
                  children: (0, i.jsx)(zp, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: g.formatMessage(mp),
                    className: Hv,
                    onPress: e
                  })
                })]
              }), (0, i.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, i.jsx)(T, {
                    "aria-hidden": !0,
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), h && !_ && (0, i.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, i.jsx)(Bv, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Vv,
                    content: g.formatMessage(vp),
                    children: (0, i.jsx)(zp, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Download",
                      label: g.formatMessage(mp),
                      className: Hv,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        }));
      var Gv = "foundry_1a74xwb4";

      function Kv(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function qv(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }

      function Wv(...e) {
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
      var Xv, $v = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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
        Yv = "dismissableLayer.update",
        Zv = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Qv = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = s.useContext(Zv), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = qv(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      eg("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && eg("dismissableLayer.focusOutside", n, {
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
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p);
          return lm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Xv = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Jv(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Xv)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Jv())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Yv, e), () => document.removeEventListener(Yv, e)
          }), []), (0, i.jsx)($v.div, {
            ...c,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: Kv(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: Kv(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: Kv(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function Jv() {
        const e = new CustomEvent(Yv);
        document.dispatchEvent(e)
      }

      function eg(e, t, n, {
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
          e && gu.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      Qv.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(Zv),
          r = s.useRef(null),
          o = qv(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)($v.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var tg = "focusScope.autoFocusOnMount",
        ng = "focusScope.autoFocusOnUnmount",
        rg = {
          bubbles: !1,
          cancelable: !0
        },
        og = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [u, c] = s.useState(null), d = bh(o), f = bh(a), h = s.useRef(null), p = qv(t, (e => c(e))), m = s.useRef({
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
                  if (m.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? h.current = t : lg(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || lg(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && lg(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return u && r.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, u, m.paused]), s.useEffect((() => {
            if (u) {
              ug.add(m);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(tg, rg);
                u.addEventListener(tg, d), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (lg(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(ig(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && lg(u))
              }
              return () => {
                u.removeEventListener(tg, d), setTimeout((() => {
                  const t = new CustomEvent(ng, rg);
                  u.addEventListener(ng, f), u.dispatchEvent(t), t.defaultPrevented || lg(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(ng, f), ug.remove(m)
                }), 0)
              }
            }
          }), [u, d, f, m]);
          const v = s.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = ig(e);
                  return [ag(t, e), ag(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && lg(i, {
                select: !0
              })) : (e.preventDefault(), n && lg(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)($v.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function ig(e) {
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

      function ag(e, t) {
        for (const n of e)
          if (!sg(n, {
              upTo: t
            })) return n
      }

      function sg(e, {
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

      function lg(e, {
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
      og.displayName = "FocusScope";
      var ug = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = cg(e, t), e.unshift(t)
          },
          remove(t) {
            e = cg(e, t), e[0]?.resume()
          }
        }
      }();

      function cg(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var dg = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Ch((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? gu.createPortal((0, i.jsx)($v.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      dg.displayName = "Portal";
      var fg = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
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
            const e = hg(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Ch((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = hg(t);
              u(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, u]), Ch((() => {
            if (t) {
              const e = e => {
                  const n = hg(r.current).includes(e.animationName);
                  e.target === t && n && gu.flushSync((() => u("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = hg(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = qv(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function hg(e) {
        return e?.animationName || "none"
      }
      fg.displayName = "Presence";
      var pg = 0;

      function mg() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var vg = "right-scroll-bar-position",
        gg = "width-before-scroll-bar",
        yg = n(37964),
        bg = (0, n(81402).f)(),
        wg = function() {},
        Eg = s.forwardRef((function(e, t) {
          var n = s.useRef(null),
            r = s.useState({
              onScrollCapture: wg,
              onWheelCapture: wg,
              onTouchMoveCapture: wg
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            l = e.children,
            u = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            h = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            v = e.allowPinchZoom,
            g = e.as,
            y = void 0 === g ? "div" : g,
            b = e.gapMode,
            w = (0, Gu.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            E = h,
            _ = (0, yg.S)([n, t]),
            P = (0, Gu.__assign)((0, Gu.__assign)({}, w), o);
          return s.createElement(s.Fragment, null, d && s.createElement(E, {
            sideCar: bg,
            removeScrollBar: c,
            shards: f,
            noIsolation: p,
            inert: m,
            setCallbacks: i,
            allowPinchZoom: !!v,
            lockRef: n,
            gapMode: b
          }), a ? s.cloneElement(s.Children.only(l), (0, Gu.__assign)((0, Gu.__assign)({}, P), {
            ref: _
          })) : s.createElement(y, (0, Gu.__assign)({}, P, {
            className: u,
            ref: _
          }), l))
        }));
      Eg.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, Eg.classNames = {
        fullWidth: gg,
        zeroRight: vg
      };
      var _g = function(e) {
        var t = e.sideCar,
          n = (0, Gu.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw new Error("Sidecar medium not found");
        return s.createElement(r, (0, Gu.__assign)({}, n))
      };
      _g.isSideCarExport = !0;
      var Pg = function() {
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
        Cg = function() {
          var e, t = (e = Pg(), function(t, n) {
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
        Sg = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        Tg = function(e) {
          return parseInt(e || "", 10) || 0
        },
        xg = Cg(),
        Og = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(vg, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(gg, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(vg, " .").concat(vg, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(gg, " .").concat(gg, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        kg = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            i = s.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Sg;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [Tg(n), Tg(r), Tg(o)]
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
          return s.createElement(xg, {
            styles: Og(i, !t, o, n ? "" : "!important")
          })
        },
        Lg = !1;
      if ("undefined" != typeof window) try {
        var Ng = Object.defineProperty({}, "passive", {
          get: function() {
            return Lg = !0, !0
          }
        });
        window.addEventListener("test", Ng, Ng), window.removeEventListener("test", Ng, Ng)
      } catch (e) {
        Lg = !1
      }
      var Ag = !!Lg && {
          passive: !1
        },
        Mg = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        Rg = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), Dg(e, r)) {
              var o = jg(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        Dg = function(e, t) {
          return "v" === e ? function(e) {
            return Mg(e, "overflowY")
          }(t) : function(e) {
            return Mg(e, "overflowX")
          }(t)
        },
        jg = function(e, t) {
          return "v" === e ? function(e) {
            return [e.scrollTop, e.scrollHeight, e.clientHeight]
          }(t) : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t)
        },
        Ig = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        Bg = function(e) {
          return [e.deltaX, e.deltaY]
        },
        Hg = function(e) {
          return e && "current" in e ? e.current : e
        },
        Fg = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        Ug = 0,
        Vg = [];

      function zg(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const Gg = (bg.useMedium((function(e) {
        var t = s.useRef([]),
          n = s.useRef([0, 0]),
          r = s.useRef(),
          o = s.useState(Ug++)[0],
          i = s.useState(Cg)[0],
          a = s.useRef(e);
        s.useEffect((function() {
          a.current = e
        }), [e]), s.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var t = (0, Gu.__spreadArray)([e.lockRef.current], (e.shards || []).map(Hg), !0).filter(Boolean);
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
            var o, i = Ig(e),
              s = n.current,
              l = "deltaX" in e ? e.deltaX : s[0] - i[0],
              u = "deltaY" in e ? e.deltaY : s[1] - i[1],
              c = e.target,
              d = Math.abs(l) > Math.abs(u) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = Rg(d, c);
            if (!f) return !0;
            if (f ? o = d : (o = "v" === d ? "h" : "v", f = Rg(d, c)), !f) return !1;
            if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o) return !0;
            var h = r.current || o;
            return function(e, t, n, r, o) {
              var i = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                a = i * r,
                s = n.target,
                l = t.contains(s),
                u = !1,
                c = a > 0,
                d = 0,
                f = 0;
              do {
                var h = jg(e, s),
                  p = h[0],
                  m = h[1] - h[2] - i * p;
                (p || m) && Dg(e, s) && (d += m, f += p), s = s instanceof ShadowRoot ? s.host : s.parentNode
              } while (!l && s !== document.body || l && (t.contains(s) || t === s));
              return (c && (o && Math.abs(d) < 1 || !o && a > d) || !c && (o && Math.abs(f) < 1 || !o && -a > f)) && (u = !0), u
            }(h, t, e, "h" === h ? l : u, !0)
          }), []),
          u = s.useCallback((function(e) {
            var n = e;
            if (Vg.length && Vg[Vg.length - 1] === i) {
              var r = "deltaY" in n ? Bg(n) : Ig(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var s = (a.current.shards || []).map(Hg).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (s.length > 0 ? l(n, s[0]) : !a.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          c = s.useCallback((function(e, n, r, o) {
            var i = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: zg(r)
            };
            t.current.push(i), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== i
              }))
            }), 1)
          }), []),
          d = s.useCallback((function(e) {
            n.current = Ig(e), r.current = void 0
          }), []),
          f = s.useCallback((function(t) {
            c(t.type, Bg(t), t.target, l(t, e.lockRef.current))
          }), []),
          h = s.useCallback((function(t) {
            c(t.type, Ig(t), t.target, l(t, e.lockRef.current))
          }), []);
        s.useEffect((function() {
          return Vg.push(i), e.setCallbacks({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", u, Ag), document.addEventListener("touchmove", u, Ag), document.addEventListener("touchstart", d, Ag),
            function() {
              Vg = Vg.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", u, Ag), document.removeEventListener("touchmove", u, Ag), document.removeEventListener("touchstart", d, Ag)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return s.createElement(s.Fragment, null, m ? s.createElement(i, {
          styles: Fg(o)
        }) : null, p ? s.createElement(kg, {
          gapMode: e.gapMode
        }) : null)
      })), _g);
      var Kg = s.forwardRef((function(e, t) {
        return s.createElement(Eg, (0, Gu.__assign)({}, e, {
          ref: t,
          sideCar: Gg
        }))
      }));
      Kg.classNames = Eg.classNames;
      const qg = Kg;
      var Wg = new WeakMap,
        Xg = new WeakMap,
        $g = {},
        Yg = 0,
        Zg = function(e) {
          return e && (e.host || Zg(e.parentNode))
        },
        Qg = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = Zg(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            $g[n] || ($g[n] = new WeakMap);
            var i = $g[n],
              a = [],
              s = new Set,
              l = new Set(o),
              u = function(e) {
                e && !s.has(e) && (s.add(e), u(e.parentNode))
              };
            o.forEach(u);
            var c = function(e) {
              e && !l.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (s.has(e)) c(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    l = (Wg.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  Wg.set(e, l), i.set(e, u), a.push(e), 1 === l && o && Xg.set(e, !0), 1 === u && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return c(t), s.clear(), Yg++,
              function() {
                a.forEach((function(e) {
                  var t = Wg.get(e) - 1,
                    o = i.get(e) - 1;
                  Wg.set(e, t), i.set(e, o), t || (Xg.has(e) || e.removeAttribute(r), Xg.delete(e)), o || e.removeAttribute(n)
                })), --Yg || (Wg = new WeakMap, Wg = new WeakMap, Xg = new WeakMap, $g = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        Jg = "Dialog",
        [ey, ty] = function(e, t = []) {
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
              } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(u.Provider, {
                value: c,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Wv(r, ...t)]
        }(Jg),
        [ny, ry] = ey(Jg),
        oy = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: l = !0
          } = e, u = s.useRef(null), c = s.useRef(null), [d = !1, f] = wh({
            prop: r,
            defaultProp: o,
            onChange: a
          });
          return (0, i.jsx)(ny, {
            scope: t,
            triggerRef: u,
            contentRef: c,
            contentId: gm(),
            titleId: gm(),
            descriptionId: gm(),
            open: d,
            onOpenChange: f,
            onOpenToggle: s.useCallback((() => f((e => !e))), [f]),
            modal: l,
            children: n
          })
        };
      oy.displayName = Jg;
      var iy = "DialogTrigger",
        ay = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ry(iy, n), a = qv(t, o.triggerRef);
          return (0, i.jsx)($v.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Cy(o.open),
            ...r,
            ref: a,
            onClick: Kv(e.onClick, o.onOpenToggle)
          })
        }));
      ay.displayName = iy;
      var sy = "DialogPortal",
        [ly, uy] = ey(sy, {
          forceMount: void 0
        }),
        cy = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = ry(sy, t);
          return (0, i.jsx)(ly, {
            scope: t,
            forceMount: n,
            children: s.Children.map(r, (e => (0, i.jsx)(fg, {
              present: n || a.open,
              children: (0, i.jsx)(dg, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      cy.displayName = sy;
      var dy = "DialogOverlay",
        fy = s.forwardRef(((e, t) => {
          const n = uy(dy, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = ry(dy, e.__scopeDialog);
          return a.modal ? (0, i.jsx)(fg, {
            present: r || a.open,
            children: (0, i.jsx)(hy, {
              ...o,
              ref: t
            })
          }) : null
        }));
      fy.displayName = dy;
      var hy = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ry(dy, n);
          return (0, i.jsx)(qg, {
            as: Th.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, i.jsx)($v.div, {
              "data-state": Cy(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        })),
        py = "DialogContent",
        my = s.forwardRef(((e, t) => {
          const n = uy(py, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            a = ry(py, e.__scopeDialog);
          return (0, i.jsx)(fg, {
            present: r || a.open,
            children: a.modal ? (0, i.jsx)(vy, {
              ...o,
              ref: t
            }) : (0, i.jsx)(gy, {
              ...o,
              ref: t
            })
          })
        }));
      my.displayName = py;
      var vy = s.forwardRef(((e, t) => {
          const n = ry(py, e.__scopeDialog),
            r = s.useRef(null),
            o = qv(t, n.contentRef, r);
          return s.useEffect((() => {
            const e = r.current;
            if (e) return Qg(e)
          }), []), (0, i.jsx)(yy, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Kv(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: Kv(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: Kv(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        gy = s.forwardRef(((e, t) => {
          const n = ry(py, e.__scopeDialog),
            r = s.useRef(!1),
            o = s.useRef(!1);
          return (0, i.jsx)(yy, {
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
        yy = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...l
          } = e, u = ry(py, n), c = s.useRef(null), d = qv(t, c);
          return s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? mg()), document.body.insertAdjacentElement("beforeend", e[1] ?? mg()), pg++, () => {
              1 === pg && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), pg--
            }
          }), []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(og, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: a,
              children: (0, i.jsx)(Qv, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": Cy(u.open),
                ...l,
                ref: d,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(Oy, {
                titleId: u.titleId
              }), (0, i.jsx)(ky, {
                contentRef: c,
                descriptionId: u.descriptionId
              })]
            })]
          })
        })),
        by = "DialogTitle",
        wy = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ry(by, n);
          return (0, i.jsx)($v.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        }));
      wy.displayName = by;
      var Ey = "DialogDescription",
        _y = s.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = ry(Ey, n);
          return (0, i.jsx)($v.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        }));
      _y.displayName = Ey;
      var Py = "DialogClose";

      function Cy(e) {
        return e ? "open" : "closed"
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...r
        } = e, o = ry(Py, n);
        return (0, i.jsx)($v.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: Kv(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Py;
      var Sy = "DialogTitleWarning",
        [Ty, xy] = function(e, t) {
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
        }(Sy, {
          contentName: py,
          titleName: by,
          docsSlug: "dialog"
        }),
        Oy = ({
          titleId: e
        }) => {
          const t = xy(Sy),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return s.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        ky = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xy("DialogDescriptionWarning").contentName}}.`;
          return s.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Ly = oy,
        Ny = ay,
        Ay = cy,
        My = my,
        Ry = wy,
        Dy = _y;
      const jy = Lu(fy),
        Iy = Lu(My),
        By = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        Hy = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        Fy = (0, a.AK)(.77, 0, .175, 1),
        Uy = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: r,
          onReady: o,
          loading: a,
          referrerPolicy: l,
          thumbnail: u,
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
          zoomLevelStep: C = 100,
          onZoomLevelChange: S,
          gestureSettings: T,
          testId: x,
          showZoomControls: O = !0,
          disableGesturesOn: k,
          asChild: L,
          children: N,
          className: A,
          usePortal: M = !0,
          enabled: R = !0
        }) => {
          const D = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            B = (0, s.useRef)(null),
            H = du(),
            F = du(),
            U = du(),
            V = (0, s.useRef)(!1),
            z = nh(),
            G = ht("screen and (max-width: 1024px)"),
            K = Et() && G,
            q = vt(),
            W = "pointer-devices" !== k || K,
            [X, $] = (0, s.useState)(!0),
            [Y, Z] = (0, s.useState)(!1),
            [Q = !1, J] = bt({
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
          }), []), _t((() => {
            ee !== ie && (async function(e, {
              onOpen: t,
              onClose: n
            }) {
              const r = I.current.getBoundingClientRect(),
                o = I.current.querySelector("img"),
                i = o && getComputedStyle(o),
                a = i?.objectFit ?? "",
                s = i?.objectPosition ?? "",
                {
                  a: l
                } = new DOMMatrix(i?.transform),
                u = o?.naturalWidth ?? r.width,
                c = o?.naturalHeight ?? r.height,
                d = u / window.innerWidth,
                p = u / d,
                m = c / d,
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
                  }), I.current?.style.setProperty("opacity", "0"), await e({
                    height: "horizontal" === y ? `${window.innerHeight}px` : `${g}px`,
                    width: "horizontal" === y ? `${v}px` : `${window.innerWidth}px`,
                    x: "horizontal" === y ? b : 0,
                    y: "horizontal" === y ? 0 : b,
                    scale: E / 100,
                    immediate: ae,
                    config: {
                      duration: 550,
                      easing: Fy
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
                  }), "vertical" === y ? D.current?.style.setProperty("width", "100%") : "horizontal" === y && D.current?.style.setProperty("height", "100%"), t?.()
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
                      easing: Fy
                    }
                  }), I.current?.style.setProperty("opacity", "1"), await e({
                    opacity: 0,
                    immediate: !0
                  }), n?.()
                }
              })
            }(ee, {
              onClose: () => J(!1)
            }), V.current = !0)
          }), [ee]), _t((() => {
            Q ? Promise.resolve().then((() => async function() {
              const e = I.current.querySelector("img");
              if (B.current) {
                let t = By;
                e?.currentSrc && (t = e?.currentSrc), B.current.src = t, await be(B.current)
              }
            }())).then((() => be(B.current))).then((() => te(Q))) : te(!1)
          }), [Q]);
          const se = () => {
              te(!1)
            },
            {
              loaded: le,
              eventHandlers: ue
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
              isHovered: ce
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, s.useState)(!1);
              return (0, s.useEffect)((() => {
                r(!1)
              }), [t.current]), wt("mouseenter", (() => {
                r(!0)
              }), t), wt("mouseleave", (() => {
                r(!1)
              }), t), {
                isHovered: !!e && n
              }
            })({
              ref: j,
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
              }), [t.current]), wt("focusin", (() => {
                r(!0)
              }), t), wt("focusout", (() => {
                r(!1)
              }), t), {
                isFocused: !!e && n
              }
            })({
              ref: j,
              enabled: ie
            }),
            {
              isIdle: fe
            } = yt({
              leave: 300,
              activity: 3e3,
              enabled: ie && !ce && !de && !K
            }),
            he = function(e, t, n) {
              const r = ca.fun(t) && t,
                {
                  reset: o,
                  sort: i,
                  trail: a = 0,
                  expires: l = !0,
                  exitBeforeEnter: u = !1,
                  onDestroyed: c,
                  ref: d,
                  config: f
                } = r ? r() : t,
                h = (0, s.useMemo)((() => r || 3 == arguments.length ? lu() : void 0), []),
                p = pa(e),
                m = [],
                v = (0, s.useRef)(null),
                g = o ? null : v.current;
              As((() => {
                v.current = m
              })), Ds((() => (fa(m, (e => {
                h?.add(e.ctrl), e.ctrl.ref = h
              })), () => {
                fa(v.current, (e => {
                  e.expired && clearTimeout(e.expirationId), hl(e.ctrl, h), e.ctrl.stop(!0)
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
                      return n ? (t.add(n), n.key) : fu++
                    }))
                  }
                  return ca.und(n) ? e : ca.fun(n) ? e.map(n) : pa(n)
                }(p, r ? r() : t, g),
                b = o && v.current || [];
              As((() => fa(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                hl(e, h), tl(c, t, n)
              }))));
              const w = [];
              if (g && fa(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = y.indexOf(e.key)) && (m[t] = e)
                })), fa(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Yl
                  }, m[t].ctrl.item = e)
                })), w.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                fa(w, ((t, r) => {
                  const o = g[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              ca.fun(i) && m.sort(((e, t) => i(e.item, t.item)));
              let E = -a;
              const _ = Rs(),
                P = al(t),
                C = new Map,
                S = (0, s.useRef)(new Map),
                T = (0, s.useRef)(!1);
              fa(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  s = r ? r() : t;
                let c, h;
                const p = tl(s.delay || 0, o);
                if ("mount" == i) c = s.enter, h = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) c = s.leave, h = "leave";
                    else {
                      if (!(c = s.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    c = s.enter, h = "enter"
                  }
                }
                if (c = tl(c, e.item, n), c = ca.obj(c) ? ul(c) : {
                    to: c
                  }, !c.config) {
                  const t = f || P.config;
                  c.config = tl(t, e.item, n, h)
                }
                E += a;
                const m = {
                  ...P,
                  delay: p + E,
                  ref: d,
                  immediate: s.immediate,
                  reset: !1,
                  ...c
                };
                if ("enter" == h && ca.und(m.from)) {
                  const o = r ? r() : t,
                    i = ca.und(o.initial) || g ? o.from : o.initial;
                  m.from = tl(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  tl(b, e);
                  const t = v.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = tl(l, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (S.current.delete(n), u && (T.current = !0), _())
                  }
                };
                const w = Jl(e.ctrl, m);
                "leave" === h && u ? S.current.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                }) : C.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                })
              }));
              const x = (0, s.useContext)(au),
                O = Is(x),
                k = x !== O && dl(x);
              As((() => {
                k && fa(m, (e => {
                  e.ctrl.start({
                    default: x
                  })
                }))
              }), [x]), fa(C, ((e, t) => {
                if (S.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), As((() => {
                fa(S.current.size ? S.current : C, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, h?.add(r), k && "enter" == e && r.start({
                    default: x
                  }), t && (pl(r, t.ref), !r.ref && !h || T.current ? (r.start(t), T.current && (T.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const L = e => s.createElement(s.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = C.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? s.createElement(o.type, {
                  ...o.props,
                  key: ca.str(t.key) || ca.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return h ? [L, h] : L
            }(ie, {
              ref: H,
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
            [pe] = uu((() => ({
              ref: F,
              opacity: ie && !fe && le && X ? 1 : 0,
              immediate: ae
            })), [ie, fe, le, X]),
            me = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: i,
              zoomLevel: a,
              defaultZoomLevel: l,
              onZoomLevelChange: u,
              onRequestedClose: c,
              onRequestingClose: d,
              onClick: f,
              onDoubleClick: h,
              gestureSettings: p = Bu,
              enabled: m
            }) => {
              const v = vt(),
                [g = t, y] = bt({
                  prop: e,
                  defaultProp: t,
                  onChange: n
                }),
                [b = l, w] = bt({
                  prop: a,
                  defaultProp: l,
                  onChange: u
                }),
                E = (0, s.useRef)(null),
                _ = (0, s.useRef)(null),
                [P, C] = (0, s.useState)(!1),
                S = b > r,
                T = b < o,
                x = b > r,
                O = b === r,
                [k, L] = uu((() => ({
                  x: g[0],
                  y: g[1],
                  scale: b / 100,
                  from: {
                    scale: r / 100,
                    x: t[0],
                    y: t[1]
                  },
                  immediate: v,
                  config: ju
                }))),
                N = (e, {
                  origin: n,
                  delta: i,
                  animationConfig: a
                } = {}) => {
                  if (E.current && _.current) {
                    n || (n = [_.current.clientWidth / 2, _.current.clientHeight / 2]);
                    const s = Du(e, r, o);
                    if (s === b) return;
                    i || (i = (s - b) / 100);
                    const l = {
                      config: a || ju,
                      x: t[0],
                      y: t[1],
                      scale: b,
                      immediate: v
                    };
                    if (s <= r) y(t);
                    else {
                      const e = Ru(E.current, _.current, (({
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
                          top: u,
                          width: c
                        } = n.current?.getBoundingClientRect();
                        return [-(i - l - c / 2) / o * r + e, -(a - u - s / 2) / o * r + t]
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
                A = (e, t) => e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right,
                {
                  handleClick: M
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
                      const t = Au(E.current),
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
                      const t = Au(E.current),
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
                    config: Iu,
                    x: t[0],
                    y: t[1],
                    scale: l / 100,
                    immediate: v
                  };
                  L(e)
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
                    event: u
                  }) => {
                    if (!_.current || !E.current) return;
                    if (s) return void M(u);
                    if (o && i && !P && C(!0), l > 1) return;
                    if (a || b < r) return;
                    if (e) return g;
                    const {
                      horizontalOffset: c,
                      verticalOffset: f
                    } = Ru(E.current, _.current, g, b), h = o * p.dragFactor, m = i * p.dragFactor, w = {
                      config: ju,
                      x: t[0],
                      y: t[1],
                      immediate: v
                    };
                    if (b === r) {
                      const e = [n[0], n[1] + m],
                        {
                          y: t
                        } = Mu(e, E.current),
                        r = Du(100 * Math.abs(t) / p.closePc, 0, 100);
                      w.config = Iu, w.x = e[0], w.y = e[1], y(e), d?.(r)
                    } else {
                      const e = [Nu(n[0] + h, -c, c), Nu(n[1] + m, -f, f)];
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
                        } = Mu(g, E.current);
                        if (Du(100 * Math.abs(e) / p.closePc, 0, 100) >= 100) c?.();
                        else {
                          const e = {
                            config: Iu,
                            x: t[0],
                            y: t[1],
                            immediate: v
                          };
                          L(e), y(t), d?.(0)
                        }
                      } else if (void 0 !== e) {
                      const e = Ru(E.current, _.current, g, b),
                        t = {
                          config: ju,
                          x: e.xy[0],
                          y: e.xy[1],
                          immediate: v
                        };
                      L(t), C(!1), y(e.xy)
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
                animation: k
              }
            })({
              enabled: W && ie,
              onClick: function() {
                G ? $(!X) : se()
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
                      animationConfig: Iu
                    })
                  }
              },
              onRequestedClose: se,
              onRequestingClose: e => {
                if (ee) {
                  const t = 1,
                    n = .25,
                    r = Du(t - e * (t - n) / 100, n, t);
                  H.start({
                    opacity: r
                  });
                  const o = Du(1 - e / 100, 0, 1);
                  F.start({
                    opacity: o
                  })
                }
              },
              zoomLevel: w,
              defaultZoomLevel: E,
              minZoomLevel: _,
              maxZoomLevel: P,
              zoomLevelStep: C,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: T
            }),
            ve = uu({
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
                ie ? Z(!0) : (me.resetZoom(), $(!0))
              }
            }),
            ge = uu({
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
              [U, H, F],
              [0, 0, .1]
            ];
          async function be(e) {
            return e.complete ? Promise.resolve(e) : new Promise(((t, n) => {
              e.onload = () => t(e), e.onerror = n
            }))
          }! function(e, t, n = 1e3) {
            As((() => {
              if (t) {
                let r = 0;
                fa(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, fa(i, (e => {
                      fa(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + tl(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                fa(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (fa(n, ((e, t) => fa(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(ie ? ye[0] : ye[0].reverse(), ye[1]);
          const we = L ? (0, i.jsx)(c.DX, {
            className: Gv,
            ref: null,
            children: N
          }) : (0, i.jsx)("img", {
            alt: "",
            src: u,
            "aria-hidden": !0,
            loading: a,
            className: Gv,
            crossOrigin: r,
            referrerPolicy: l
          });
          (0, s.useEffect)((() => {
            $(!K)
          }), [K]);
          const {
            contrastMode: Ee
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
            } = No();
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
          })(), _e = ((e, t) => [xo.tokens, hh("dark", t)].join(" "))(0, Ee);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(Ly, {
              open: Q,
              children: (0, i.jsxs)("div", {
                className: (0, Te.A)("foundry_1a74xwb0", A),
                children: [(0, i.jsx)(Ny, {
                  asChild: !0,
                  children: (0, i.jsxs)(Lu.button, {
                    className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                    onClick: async () => {
                      R && J(!Q)
                    },
                    ref: I,
                    "data-idle": !ee,
                    style: {
                      aspectRatio: d,
                      objectPosition: f,
                      objectFit: h
                    },
                    children: [(0, i.jsx)(c.s6, {
                      children: z.formatMessage(uh)
                    }), we, he(((e, t) => y && !t && (0, i.jsx)(Lu.span, {
                      className: "foundry_1a74xwb5",
                      style: e,
                      children: (0, i.jsx)(ne.Plus, {
                        label: ""
                      })
                    })))]
                  })
                }), (0, i.jsxs)(Ay, {
                  ...!M && {
                    container: re
                  },
                  children: [(0, i.jsx)(Lu.img, {
                    "aria-hidden": !0,
                    src: By,
                    ref: B,
                    className: "foundry_1a74xwb2 foundry_1a74xwb1",
                    style: {
                      aspectRatio: d,
                      backgroundPosition: f,
                      backgroundSize: h,
                      ...ve
                    }
                  }), he(((o, s) => s && (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(jy, {
                      className: "foundry_1a74xwb8",
                      style: o
                    }), (0, i.jsxs)(Iy, {
                      "data-testid": x,
                      onEscapeKeyDown: se,
                      onOpenAutoFocus: Hy,
                      onCloseAutoFocus: e => ((e, t) => {
                        e?.preventDefault(), t.current?.focus({
                          preventScroll: !0
                        })
                      })(e, I),
                      className: _e,
                      children: [(0, i.jsx)(c.s6, {
                        children: (0, i.jsx)(Ry, {
                          children: z.formatMessage(ch)
                        })
                      }), (0, i.jsx)(c.s6, {
                        children: (0, i.jsx)(Dy, {
                          children: n || z.formatMessage(dh, {
                            alt: t
                          })
                        })
                      }), (0, i.jsx)(Lu.div, {
                        className: "foundry_1a74xwb6",
                        style: ge,
                        children: (0, i.jsx)(Hu, {
                          ...me,
                          children: (0, i.jsx)("img", {
                            alt: "",
                            src: e,
                            ref: D,
                            loading: a,
                            className: "foundry_1a74xwba",
                            crossOrigin: r,
                            "aria-hidden": !0,
                            referrerPolicy: l,
                            style: {
                              cursor: me.getCursor()
                            },
                            ...ue
                          })
                        })
                      }), (0, i.jsx)(Lu.div, {
                        className: "foundry_1a74xwb9",
                        style: pe,
                        children: (0, i.jsx)(zv, {
                          ...me,
                          ref: j,
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
            }), !M && (0, i.jsx)("div", {
              ref: oe
            })]
          })
        },
        Vy = e => {
          const t = (() => {
            const {
              locale: e
            } = No();
            return e
          })();
          return (0, i.jsx)(lh, {
            messages: fh,
            locale: t,
            children: (0, i.jsx)(Uy, {
              ...e
            })
          })
        };

      function zy(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }

      function Gy(e, t = []) {
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
            } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
            return (0, i.jsx)(u.Provider, {
              value: c,
              children: r
            })
          }
          return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
            const l = i?.[e][a] || o,
              u = s.useContext(l);
            if (u) return u;
            if (void 0 !== r) return r;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, Ky(r, ...t)]
      }

      function Ky(...e) {
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

      function qy(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var Wy, Xy = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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
        $y = "dismissableLayer.update",
        Yy = s.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Zy = s.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: a,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = s.useContext(Yy), [f, h] = s.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = s.useState({}), v = qy(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, P = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1),
              o = s.useRef((() => {}));
            return s.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Jy("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (o?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p), C = function(e, t = globalThis?.document) {
            const n = bh(e),
              r = s.useRef(!1);
            return s.useEffect((() => {
              const e = e => {
                e.target && !r.current && Jy("dismissableLayer.focusOutside", n, {
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
            [...d.branches].some((e => e.contains(t))) || (a?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p);
          return lm((e => {
            w === d.layers.size - 1 && (r?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), p), s.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Wy = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Qy(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Wy)
            }
          }), [f, p, n, d]), s.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Qy())
          }), [f, d]), s.useEffect((() => {
            const e = () => m({});
            return document.addEventListener($y, e), () => document.removeEventListener($y, e)
          }), []), (0, i.jsx)(Xy.div, {
            ...c,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: zy(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: zy(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: zy(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        }));

      function Qy() {
        const e = new CustomEvent($y);
        document.dispatchEvent(e)
      }

      function Jy(e, t, n, {
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
          e && gu.flushSync((() => e.dispatchEvent(t)))
        }(o, i) : o.dispatchEvent(i)
      }
      Zy.displayName = "DismissableLayer", s.forwardRef(((e, t) => {
        const n = s.useContext(Yy),
          r = s.useRef(null),
          o = qy(t, r);
        return s.useEffect((() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, i.jsx)(Xy.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var eb = 0;

      function tb() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var nb = "focusScope.autoFocusOnMount",
        rb = "focusScope.autoFocusOnUnmount",
        ob = {
          bubbles: !1,
          cancelable: !0
        },
        ib = s.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...l
          } = e, [u, c] = s.useState(null), d = bh(o), f = bh(a), h = s.useRef(null), p = qy(t, (e => c(e))), m = s.useRef({
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
                  if (m.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? h.current = t : ub(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || ub(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && ub(u)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return u && r.observe(u, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }), [r, u, m.paused]), s.useEffect((() => {
            if (u) {
              cb.add(m);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(nb, ob);
                u.addEventListener(nb, d), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (ub(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(ab(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && ub(u))
              }
              return () => {
                u.removeEventListener(nb, d), setTimeout((() => {
                  const t = new CustomEvent(rb, ob);
                  u.addEventListener(rb, f), u.dispatchEvent(t), t.defaultPrevented || ub(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(rb, f), cb.remove(m)
                }), 0)
              }
            }
          }), [u, d, f, m]);
          const v = s.useCallback((e => {
            if (!n && !r) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [r, i] = function(e) {
                  const t = ab(e);
                  return [sb(t, e), sb(t.reverse(), e)]
                }(t);
              r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && ub(i, {
                select: !0
              })) : (e.preventDefault(), n && ub(r, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }), [n, r, m.paused]);
          return (0, i.jsx)(Xy.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function ab(e) {
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

      function sb(e, t) {
        for (const n of e)
          if (!lb(n, {
              upTo: t
            })) return n
      }

      function lb(e, {
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

      function ub(e, {
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
      ib.displayName = "FocusScope";
      var cb = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = db(e, t), e.unshift(t)
          },
          remove(t) {
            e = db(e, t), e[0]?.resume()
          }
        }
      }();

      function db(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var fb = s.forwardRef(((e, t) => {
        const {
          container: n,
          ...r
        } = e, [o, a] = s.useState(!1);
        Ch((() => a(!0)), []);
        const l = n || o && globalThis?.document?.body;
        return l ? gu.createPortal((0, i.jsx)(Xy.div, {
          ...r,
          ref: t
        }), l) : null
      }));
      fb.displayName = "Portal";
      var hb = s.forwardRef(((e, t) => (0, i.jsx)(Xy.span, {
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
      hb.displayName = "VisuallyHidden";
      var pb = [" ", "Enter", "ArrowUp", "ArrowDown"],
        mb = [" ", "Enter"],
        vb = "Select",
        [gb, yb, bb] = function(e) {
          const t = e + "CollectionProvider",
            [n, r] = Gy(t),
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
          const u = e + "CollectionSlot",
            c = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r
              } = e, o = qy(t, a(u, n).collectionRef);
              return (0, i.jsx)(Th.DX, {
                ref: o,
                children: r
              })
            }));
          c.displayName = u;
          const d = e + "CollectionItemSlot",
            f = "data-radix-collection-item",
            h = s.forwardRef(((e, t) => {
              const {
                scope: n,
                children: r,
                ...o
              } = e, l = s.useRef(null), u = qy(t, l), c = a(d, n);
              return s.useEffect((() => (c.itemMap.set(l, {
                ref: l,
                ...o
              }), () => {
                c.itemMap.delete(l)
              }))), (0, i.jsx)(Th.DX, {
                [f]: "",
                ref: u,
                children: r
              })
            }));
          return h.displayName = d, [{
            Provider: l,
            Slot: c,
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
        }(vb),
        [wb, Eb] = Gy(vb, [bb, Rm]),
        _b = Rm(),
        [Pb, Cb] = wb(vb),
        [Sb, Tb] = wb(vb),
        xb = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            value: l,
            defaultValue: u,
            onValueChange: c,
            dir: d,
            name: f,
            autoComplete: h,
            disabled: p,
            required: m
          } = e, v = _b(t), [g, y] = s.useState(null), [b, w] = s.useState(null), [E, _] = s.useState(!1), P = _h(d), [C = !1, S] = wh({
            prop: r,
            defaultProp: o,
            onChange: a
          }), [T, x] = wh({
            prop: l,
            defaultProp: u,
            onChange: c
          }), O = s.useRef(null), k = !g || Boolean(g.closest("form")), [L, N] = s.useState(new Set), A = Array.from(L).map((e => e.props.value)).join(";");
          return (0, i.jsx)(Ym, {
            ...v,
            children: (0, i.jsxs)(Pb, {
              required: m,
              scope: t,
              trigger: g,
              onTriggerChange: y,
              valueNode: b,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: _,
              contentId: gm(),
              value: T,
              onValueChange: x,
              open: C,
              onOpenChange: S,
              dir: P,
              triggerPointerDownPosRef: O,
              disabled: p,
              children: [(0, i.jsx)(gb.Provider, {
                scope: t,
                children: (0, i.jsx)(Sb, {
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
              }), k ? (0, i.jsxs)(lw, {
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
                }) : null, Array.from(L)]
              }, A) : null]
            })
          })
        };
      xb.displayName = vb;
      var Ob = "SelectTrigger",
        kb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, a = _b(n), s = Cb(Ob, n), l = s.disabled || r, u = qy(t, s.onTriggerChange), c = yb(n), [d, f, h] = uw((e => {
            const t = c().filter((e => !e.disabled)),
              n = t.find((e => e.value === s.value)),
              r = cw(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          })), p = () => {
            l || (s.onOpenChange(!0), h())
          };
          return (0, i.jsx)(Zm, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(Xy.button, {
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
              "data-placeholder": sw(s.value) ? "" : void 0,
              ...o,
              ref: u,
              onClick: zy(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: zy(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (p(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: zy(o.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || pb.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      kb.displayName = Ob;
      var Lb = "SelectValue",
        Nb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...l
          } = e, u = Cb(Lb, n), {
            onValueNodeHasChildrenChange: c
          } = u, d = void 0 !== a, f = qy(t, u.onValueNodeChange);
          return Ch((() => {
            c(d)
          }), [c, d]), (0, i.jsx)(Xy.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: sw(u.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Nb.displayName = Lb;
      var Ab = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)(Xy.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      Ab.displayName = "SelectIcon";
      var Mb = e => (0, i.jsx)(fb, {
        asChild: !0,
        ...e
      });
      Mb.displayName = "SelectPortal";
      var Rb = "SelectContent",
        Db = s.forwardRef(((e, t) => {
          const n = Cb(Rb, e.__scopeSelect),
            [r, o] = s.useState();
          if (Ch((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? gu.createPortal((0, i.jsx)(Ib, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(gb.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, i.jsx)(Hb, {
            ...e,
            ref: t
          })
        }));
      Db.displayName = Rb;
      var jb = 10,
        [Ib, Bb] = wb(Rb),
        Hb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: y,
            ...b
          } = e, w = Cb(Rb, n), [E, _] = s.useState(null), [P, C] = s.useState(null), S = qy(t, (e => _(e))), [T, x] = s.useState(null), [O, k] = s.useState(null), L = yb(n), [N, A] = s.useState(!1), M = s.useRef(!1);
          s.useEffect((() => {
            if (E) return Qg(E)
          }), [E]), s.useEffect((() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? tb()), document.body.insertAdjacentElement("beforeend", e[1] ?? tb()), eb++, () => {
              1 === eb && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), eb--
            }
          }), []);
          const R = s.useCallback((e => {
              const [t, ...n] = L().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && P && (P.scrollTop = 0), n === r && P && (P.scrollTop = P.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [L, P]),
            D = s.useCallback((() => R([T, E])), [R, T, E]);
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
          const [B, H] = uw((e => {
            const t = L().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = cw(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = s.useCallback(((e, t, n) => {
            const r = !M.current && !n;
            (void 0 !== w.value && w.value === t || r) && (x(e), r && (M.current = !0))
          }), [w.value]), U = s.useCallback((() => E?.focus()), [E]), V = s.useCallback(((e, t, n) => {
            const r = !M.current && !n;
            (void 0 !== w.value && w.value === t || r) && k(e)
          }), [w.value]), z = "popper" === r ? Ub : Fb, G = z === Ub ? {
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: m,
            sticky: v,
            hideWhenDetached: g,
            avoidCollisions: y
          } : {};
          return (0, i.jsx)(Ib, {
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
            searchRef: B,
            children: (0, i.jsx)(qg, {
              as: Th.DX,
              allowPinchZoom: !0,
              children: (0, i.jsx)(ib, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: zy(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(Zy, {
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
                    onKeyDown: zy(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || H(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = L().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => R(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Hb.displayName = "SelectContentImpl";
      var Fb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, a = Cb(Rb, n), l = Bb(Rb, n), [u, c] = s.useState(null), [d, f] = s.useState(null), h = qy(t, (e => f(e))), p = yb(n), m = s.useRef(!1), v = s.useRef(!0), {
          viewport: g,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, E = s.useCallback((() => {
          if (a.trigger && a.valueNode && u && d && g && y && b) {
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
                c = window.innerWidth - jb,
                d = ph(i, [jb, c - l]);
              u.style.minWidth = s + "px", u.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                c = window.innerWidth - jb,
                d = ph(i, [jb, c - l]);
              u.style.minWidth = s + "px", u.style.right = d + "px"
            }
            const i = p(),
              s = window.innerHeight - 2 * jb,
              l = g.scrollHeight,
              c = window.getComputedStyle(d),
              f = parseInt(c.borderTopWidth, 10),
              h = parseInt(c.paddingTop, 10),
              v = parseInt(c.borderBottomWidth, 10),
              w = f + h + l + parseInt(c.paddingBottom, 10) + v,
              E = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(g),
              P = parseInt(_.paddingTop, 10),
              C = parseInt(_.paddingBottom, 10),
              S = e.top + e.height / 2 - jb,
              T = s - S,
              x = y.offsetHeight / 2,
              O = f + h + (y.offsetTop + x),
              k = w - O;
            if (O <= S) {
              const e = y === i[i.length - 1].ref.current;
              u.style.bottom = "0px";
              const t = d.clientHeight - g.offsetTop - g.offsetHeight,
                n = O + Math.max(T, x + (e ? C : 0) + t + v);
              u.style.height = n + "px"
            } else {
              const e = y === i[0].ref.current;
              u.style.top = "0px";
              const t = Math.max(S, f + g.offsetTop + (e ? P : 0) + x) + k;
              u.style.height = t + "px", g.scrollTop = O - S + g.offsetTop
            }
            u.style.margin = `${jb}px 0`, u.style.minHeight = E + "px", u.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, a.trigger, a.valueNode, u, d, g, y, b, a.dir, r]);
        Ch((() => E()), [E]);
        const [_, P] = s.useState();
        Ch((() => {
          d && P(window.getComputedStyle(d).zIndex)
        }), [d]);
        const C = s.useCallback((e => {
          e && !0 === v.current && (E(), w?.(), v.current = !1)
        }), [E, w]);
        return (0, i.jsx)(Vb, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: C,
          children: (0, i.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, i.jsx)(Xy.div, {
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
      Fb.displayName = "SelectItemAlignedPosition";
      var Ub = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = jb,
          ...a
        } = e, s = _b(n);
        return (0, i.jsx)(Qm, {
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
      Ub.displayName = "SelectPopperPosition";
      var [Vb, zb] = wb(Rb, {}), Gb = "SelectViewport", Kb = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, a = Bb(Gb, n), l = zb(Gb, n), u = qy(t, a.onViewportChange), c = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(gb.Slot, {
            scope: n,
            children: (0, i.jsx)(Xy.div, {
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
              onScroll: zy(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * jb,
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
                c.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      Kb.displayName = Gb;
      var qb = "SelectGroup",
        [Wb, Xb] = wb(qb);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = gm();
        return (0, i.jsx)(Wb, {
          scope: n,
          id: o,
          children: (0, i.jsx)(Xy.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = qb;
      var $b = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = Xb($b, n);
        return (0, i.jsx)(Xy.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = $b;
      var Yb = "SelectItem",
        [Zb, Qb] = wb(Yb),
        Jb = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...l
          } = e, u = Cb(Yb, n), c = Bb(Yb, n), d = u.value === r, [f, h] = s.useState(a ?? ""), [p, m] = s.useState(!1), v = qy(t, (e => c.itemRefCallback?.(e, r, o))), g = gm(), y = () => {
            o || (u.onValueChange(r), u.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(Zb, {
            scope: n,
            value: r,
            disabled: o,
            textId: g,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(gb.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(Xy.div, {
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
                onFocus: zy(l.onFocus, (() => m(!0))),
                onBlur: zy(l.onBlur, (() => m(!1))),
                onPointerUp: zy(l.onPointerUp, y),
                onPointerMove: zy(l.onPointerMove, (e => {
                  o ? c.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: zy(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: zy(l.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (mb.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Jb.displayName = Yb;
      var ew = "SelectItemText",
        tw = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...a
          } = e, l = Cb(ew, n), u = Bb(ew, n), c = Qb(ew, n), d = Tb(ew, n), [f, h] = s.useState(null), p = qy(t, (e => h(e)), c.onItemTextChange, (e => u.itemTextRefCallback?.(e, c.value, c.disabled))), m = f?.textContent, v = s.useMemo((() => (0, i.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: m
          }, c.value)), [c.disabled, c.value, m]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: y
          } = d;
          return Ch((() => (g(v), () => y(v))), [g, y, v]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(Xy.span, {
              id: c.textId,
              ...a,
              ref: p
            }), c.isSelected && l.valueNode && !l.valueNodeHasChildren ? gu.createPortal(a.children, l.valueNode) : null]
          })
        }));
      tw.displayName = ew;
      var nw = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return Qb(nw, n).isSelected ? (0, i.jsx)(Xy.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = nw;
      var rw = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const n = Bb(rw, e.__scopeSelect),
          r = zb(rw, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = qy(t, r.onScrollButtonChange);
        return Ch((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(iw, {
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
      })).displayName = rw;
      var ow = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const n = Bb(ow, e.__scopeSelect),
          r = zb(ow, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = qy(t, r.onScrollButtonChange);
        return Ch((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(iw, {
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
      })).displayName = ow;
      var iw = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, a = Bb("SelectScrollButton", n), l = s.useRef(null), u = yb(n), c = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => c()), [c]), Ch((() => {
          const e = u().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [u]), (0, i.jsx)(Xy.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: zy(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerMove: zy(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerLeave: zy(o.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, i.jsx)(Xy.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var aw = "SelectArrow";

      function sw(e) {
        return "" === e || void 0 === e
      }
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = _b(n), a = Cb(aw, n), s = Bb(aw, n);
        return a.open && "popper" === s.position ? (0, i.jsx)(Jm, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = aw;
      var lw = s.forwardRef(((e, t) => {
        const {
          value: n,
          ...r
        } = e, o = s.useRef(null), a = qy(t, o), l = Ph(n);
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
        }), [l, n]), (0, i.jsx)(hb, {
          asChild: !0,
          children: (0, i.jsx)("select", {
            ...r,
            ref: a,
            defaultValue: n
          })
        })
      }));

      function uw(e) {
        const t = bh(e),
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

      function cw(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      lw.displayName = "BubbleSelect";
      var dw = xb,
        fw = kb,
        hw = Nb,
        pw = Ab,
        mw = Mb,
        vw = Db,
        gw = Kb,
        yw = Jb,
        bw = tw,
        ww = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const n = s.forwardRef(((e, n) => {
            const {
              asChild: r,
              ...o
            } = e, a = r ? Th.DX : t;
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

      function Ew(...e) {
        return s.useCallback(function(...e) {
          return t => e.forEach((e => function(e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }(e, t)))
        }(...e), e)
      }
      var _w = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = s.useState(), r = s.useRef({}), o = s.useRef(e), i = s.useRef("none"), a = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
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
            const e = Pw(r.current);
            i.current = "mounted" === l ? e : "none"
          }), [l]), Ch((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = i.current,
                a = Pw(t);
              u(e ? "MOUNT" : "none" === a || "none" === t?.display ? "UNMOUNT" : n && r !== a ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, u]), Ch((() => {
            if (t) {
              const e = e => {
                  const n = Pw(r.current).includes(e.animationName);
                  e.target === t && n && gu.flushSync((() => u("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (i.current = Pw(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: s.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : s.Children.only(n), i = Ew(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? s.cloneElement(o, {
          ref: i
        }) : null
      };

      function Pw(e) {
        return e?.animationName || "none"
      }

      function Cw(...e) {
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

      function Sw(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      _w.displayName = "Presence";
      var Tw = "ScrollArea",
        [xw, Ow] = function(e, t = []) {
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
              } = t, u = n?.[e][a] || o, c = s.useMemo((() => l), Object.values(l));
              return (0, i.jsx)(u.Provider, {
                value: c,
                children: r
              })
            }
            return n = [...n, r], l.displayName = t + "Provider", [l, function(n, i) {
              const l = i?.[e][a] || o,
                u = s.useContext(l);
              if (u) return u;
              if (void 0 !== r) return r;
              throw new Error(`\`${n}\` must be used within \`${t}\``)
            }]
          }, Cw(r, ...t)]
        }(Tw),
        [kw, Lw] = xw(Tw),
        Nw = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...l
          } = e, [u, c] = s.useState(null), [d, f] = s.useState(null), [h, p] = s.useState(null), [m, v] = s.useState(null), [g, y] = s.useState(null), [b, w] = s.useState(0), [E, _] = s.useState(0), [P, C] = s.useState(!1), [S, T] = s.useState(!1), x = Ew(t, (e => c(e))), O = _h(o);
          return (0, i.jsx)(kw, {
            scope: n,
            type: r,
            dir: O,
            scrollHideDelay: a,
            scrollArea: u,
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
            children: (0, i.jsx)(ww.div, {
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
      Nw.displayName = Tw;
      var Aw = "ScrollAreaViewport",
        Mw = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...a
          } = e, l = Lw(Aw, n), u = Ew(t, s.useRef(null), l.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(ww.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: u,
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
      Mw.displayName = Aw;
      var Rw = "ScrollAreaScrollbar",
        Dw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Lw(Rw, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: l
          } = o, u = "horizontal" === e.orientation;
          return s.useEffect((() => (u ? a(!0) : l(!0), () => {
            u ? a(!1) : l(!1)
          })), [u, a, l]), "hover" === o.type ? (0, i.jsx)(jw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, i.jsx)(Iw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, i.jsx)(Bw, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, i.jsx)(Hw, {
            ...r,
            ref: t
          }) : null
        }));
      Dw.displayName = Rw;
      var jw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Lw(Rw, e.__scopeScrollArea), [a, l] = s.useState(!1);
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
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(_w, {
            present: n || a,
            children: (0, i.jsx)(Bw, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        Iw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Lw(Rw, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = rE((() => c("SCROLL_END")), 100), [u, c] = ("hidden", d = {
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
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (c("SCROLL"), l()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, a, c, l]), (0, i.jsx)(_w, {
            present: n || "hidden" !== u,
            children: (0, i.jsx)(Hw, {
              "data-state": "hidden" === u ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: Sw(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: Sw(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        Bw = s.forwardRef(((e, t) => {
          const n = Lw(Rw, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, l] = s.useState(!1),
            u = "horizontal" === e.orientation,
            c = rE((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(u ? e : t)
              }
            }), 10);
          return oE(n.viewport, c), oE(n.content, c), (0, i.jsx)(_w, {
            present: r || a,
            children: (0, i.jsx)(Hw, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Hw = s.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Lw(Rw, e.__scopeScrollArea), a = s.useRef(null), l = s.useRef(0), [u, c] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Zw(u.viewport, u.content), f = {
            ...r,
            sizes: u,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function h(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = Qw(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                u = n.content - n.viewport;
              return eE([s, l], "ltr" === r ? [0, u] : [-1 * u, 0])(e)
            }(e, l.current, u, t)
          }
          return "horizontal" === n ? (0, i.jsx)(Fw, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Jw(o.viewport.scrollLeft, u, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = h(e, o.dir))
            }
          }) : "vertical" === n ? (0, i.jsx)(Uw, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = Jw(o.viewport.scrollTop, u);
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
        Fw = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Lw(Rw, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = Ew(t, c, a.onScrollbarXChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, i.jsx)(Gw, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Qw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), tE(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && l && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: Yw(l.paddingLeft),
                  paddingEnd: Yw(l.paddingRight)
                }
              })
            }
          })
        })),
        Uw = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Lw(Rw, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = Ew(t, c, a.onScrollbarYChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, i.jsx)(Gw, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Qw(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), tE(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && l && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: Yw(l.paddingTop),
                  paddingEnd: Yw(l.paddingBottom)
                }
              })
            }
          })
        })),
        [Vw, zw] = xw(Rw),
        Gw = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: l,
            onThumbPointerDown: u,
            onThumbPositionChange: c,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: h,
            ...p
          } = e, m = Lw(Rw, n), [v, g] = s.useState(null), y = Ew(t, (e => g(e))), b = s.useRef(null), w = s.useRef(""), E = m.viewport, _ = r.content - r.viewport, P = bh(f), C = bh(c), S = rE(h, 10);

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
          }), [E, v, _, P]), s.useEffect(C, [r, C]), oE(v, S), oE(m.content, S), (0, i.jsx)(Vw, {
            scope: n,
            scrollbar: v,
            hasThumb: o,
            onThumbChange: bh(a),
            onThumbPointerUp: bh(l),
            onThumbPositionChange: C,
            onThumbPointerDown: bh(u),
            children: (0, i.jsx)(ww.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: Sw(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), T(e))
              })),
              onPointerMove: Sw(e.onPointerMove, T),
              onPointerUp: Sw(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Kw = "ScrollAreaThumb",
        qw = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = zw(Kw, e.__scopeScrollArea);
          return (0, i.jsx)(_w, {
            present: n || o.hasThumb,
            children: (0, i.jsx)(Ww, {
              ref: t,
              ...r
            })
          })
        })),
        Ww = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, a = Lw(Kw, n), l = zw(Kw, n), {
            onThumbPositionChange: u
          } = l, c = Ew(t, (e => l.onThumbChange(e))), d = s.useRef(), f = rE((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = nE(e, u);
                  d.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, f, u]), (0, i.jsx)(ww.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: Sw(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: Sw(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      qw.displayName = Kw;
      var Xw = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const n = Lw(Xw, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, i.jsx)($w, {
          ...e,
          ref: t
        }) : null
      })).displayName = Xw;
      var $w = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Lw(Xw, n), [a, l] = s.useState(0), [u, c] = s.useState(0), d = Boolean(a && u);
        return oE(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), c(e)
        })), oE(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, i.jsx)(ww.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: u,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function Yw(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Zw(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Qw(e) {
        const t = Zw(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Jw(e, t, n = "ltr") {
        const r = Qw(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = ph(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return eE([0, a], [0, s])(l)
      }

      function eE(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function tE(e, t) {
        return e > 0 && e < t
      }
      var nE = (e, t = (() => {})) => {
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

      function rE(e, t) {
        const n = bh(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function oE(e, t) {
        const n = bh(t);
        Ch((() => {
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
      var iE = Nw,
        aE = Mw,
        sE = Dw,
        lE = qw,
        uE = "foundry_uaq1gwn";
      const cE = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: l,
          hideDescription: u = !1,
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
          ariaLabelledBy: C
        }, S) => {
          const T = mt((0, s.useRef)(null), S),
            x = (0, s.useId)(),
            O = (0, s.useId)(),
            [k = !1, L] = bt({
              prop: g,
              defaultProp: y,
              onChange: b
            });
          return (0, i.jsxs)("div", {
            className: (0, Te.$)("foundry_uaq1gw0", P),
            children: [(t && !l || n) && (0, i.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, i.jsx)(c.s6, {
                enabled: !!l,
                children: (0, i.jsx)(M, {
                  className: (0, Te.$)("foundry_uaq1gw2", E && uE),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: x,
                    children: [t, w && !d && (0, i.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, i.jsx)(F, {
                className: (0, Te.$)("foundry_uaq1gw3", E && uE),
                children: n
              })]
            }), (0, i.jsxs)(dw, {
              required: w,
              disabled: E,
              open: k,
              onOpenChange: () => L(!_ && !k),
              value: p,
              defaultValue: m,
              onValueChange: v,
              children: [(0, i.jsxs)(fw, {
                className: (0, Te.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!h && "foundry_uaq1gw7", _ && "foundry_uaq1gw6"),
                ref: T,
                "data-testid": a,
                "aria-activedescendant": p,
                "aria-labelledby": C || x,
                "aria-controls": O,
                children: [(0, i.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, i.jsx)(hw, {
                    placeholder: r,
                    "aria-label": p
                  })
                }), (0, i.jsx)(pw, {
                  asChild: !0,
                  className: (0, Te.$)("foundry_uaq1gw9", (_ || E) && "foundry_uaq1gwa"),
                  children: k ? (0, i.jsx)(ne.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(ne.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(mw, {
                children: (0, i.jsx)(vw, {
                  id: O,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, i.jsxs)(iE, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, i.jsx)(gw, {
                      className: (0, Te.$)("foundry_uaq1gwc", f && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(aE, {
                        className: "foundry_uaq1gwk",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(sE, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, i.jsx)(lE, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(c.s6, {
              enabled: !!h || u || 0 === o.length,
              children: (0, i.jsx)(M, {
                className: (0, Te.$)("foundry_uaq1gwf", E && uE),
                children: o
              })
            }), h && (0, i.jsxs)(M, {
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
        dE = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: l
        }, u) => {
          const c = mt((0, s.useRef)(null), u),
            d = n && ne[n];
          return (0, i.jsxs)(yw, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: a,
            "data-testid": l,
            children: [d && "left" === o && (0, i.jsx)(d, {
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(bw, {
              children: e
            }), d && "right" === o && (0, i.jsx)(d, {
              label: r || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }));
      var fE;
      fE = {
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
      const hE = new Set(["id"]),
        pE = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        mE = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        vE = /^(data-.*)$/;

      function gE(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (hE.has(t) || n && pE.has(t) || r && mE.has(t) || (null == o ? void 0 : o.has(t)) || vE.test(t)) && (i[t] = e[t]);
        return i
      }
      const yE = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        bE = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function wE(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return yE.has(t.script)
        }
        let t = e.split("-")[0];
        return bE.has(t)
      }
      const EE = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        _E = s.createContext(EE),
        PE = s.createContext(!1);
      let CE = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        SE = new WeakMap;
      const TE = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)(LE());
        return e || `${n?"react-aria":`react-aria${EE.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(_E);
        t !== EE || CE || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, s.useContext)(_E),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = SE.get(e);
                null == n ? SE.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, SE.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function xE() {
        return !1
      }

      function OE() {
        return !0
      }

      function kE(e) {
        return () => {}
      }

      function LE() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(kE, xE, OE) : (0, s.useContext)(PE)
      }
      const NE = Symbol.for("react-aria.i18n.locale");

      function AE() {
        let e = "undefined" != typeof window && window[NE] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
          e = "en-US"
        }
        return {
          locale: e,
          direction: wE(e) ? "rtl" : "ltr"
        }
      }
      let ME = AE(),
        RE = new Set;

      function DE() {
        ME = AE();
        for (let e of RE) e(ME)
      }
      const jE = s.createContext(null);

      function IE() {
        let e = function() {
          let e = LE(),
            [t, n] = (0, s.useState)(ME);
          return (0, s.useEffect)((() => (0 === RE.size && window.addEventListener("languagechange", DE), RE.add(n), () => {
            RE.delete(n), 0 === RE.size && window.removeEventListener("languagechange", DE)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(jE) || e
      }
      const BE = Symbol.for("react-aria.i18n.locale"),
        HE = Symbol.for("react-aria.i18n.strings");
      let FE;
      class UE {
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
          let t = window[BE];
          if (void 0 === FE) {
            let e = window[HE];
            if (!e) return null;
            FE = {};
            for (let n in e) FE[n] = new UE({
              [t]: e[n]
            }, t)
          }
          let n = null == FE ? void 0 : FE[e];
          if (!n) throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
          return n
        }
        constructor(e, t = "en-US") {
          this.strings = Object.fromEntries(Object.entries(e).filter((([, e]) => e))), this.defaultLocale = t
        }
      }
      const VE = new Map,
        zE = new Map;
      class GE {
        format(e, t) {
          let n = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof n ? n(t, this) : n
        }
        plural(e, t, n = "cardinal") {
          let r = t["=" + e];
          if (r) return "function" == typeof r ? r() : r;
          let o = this.locale + ":" + n,
            i = VE.get(o);
          return i || (i = new Intl.PluralRules(this.locale, {
            type: n
          }), VE.set(o, i)), r = t[i.select(e)] || t.other, "function" == typeof r ? r() : r
        }
        number(e) {
          let t = zE.get(this.locale);
          return t || (t = new Intl.NumberFormat(this.locale), zE.set(this.locale, t)), t.format(e)
        }
        select(e, t) {
          let n = e[t] || e.other;
          return "function" == typeof n ? n() : n
        }
        constructor(e, t) {
          this.locale = e, this.strings = t
        }
      }
      const KE = new WeakMap;

      function qE(e, t) {
        let {
          locale: n
        } = IE(), r = function(e, t) {
          return t && UE.getGlobalDictionaryForPackage(t) || function(e) {
            let t = KE.get(e);
            return t || (t = new UE(e), KE.set(e, t)), t
          }(e)
        }(e, t);
        return (0, s.useMemo)((() => new GE(n, r)), [n, r])
      }

      function WE(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const XE = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function $E(e) {
        const t = (0, s.useRef)(null);
        return XE((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      let YE = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        ZE = new Map;

      function QE(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = TE(t), i = (0, s.useCallback)((e => {
          r.current = e
        }), []);
        return YE && (ZE.has(o) && !ZE.get(o).includes(i) ? ZE.set(o, [...ZE.get(o), i]) : ZE.set(o, [i])), XE((() => {
          let e = o;
          return () => {
            ZE.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function JE(e, t) {
        if (e === t) return e;
        let n = ZE.get(e);
        if (n) return n.forEach((e => e(t))), t;
        let r = ZE.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function e_(e = []) {
        let t = QE(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = $E((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            XE((() => {
              r.current && o()
            }));
            let i = $E((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return XE(o, [t, o, ...e]), n
      }

      function t_(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = WE(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = JE(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Te.A)(n, o)
          }
        }
        return t
      }

      function n_(e) {
        if (function() {
            if (null == r_) {
              r_ = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return r_ = !0, !0
                  }
                })
              } catch (e) {}
            }
            return r_
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
      let r_ = null;

      function o_(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function i_(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function a_(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const s_ = a_((function() {
          return i_(/^Mac/i)
        })),
        l_ = a_((function() {
          return i_(/^iPhone/i)
        })),
        u_ = a_((function() {
          return i_(/^iPad/i) || s_() && navigator.maxTouchPoints > 1
        })),
        c_ = a_((function() {
          return l_() || u_()
        })),
        d_ = (a_((function() {
          return s_() || c_()
        })), a_((function() {
          return o_(/AppleWebKit/i) && !f_()
        }))),
        f_ = a_((function() {
          return o_(/Chrome/i)
        })),
        h_ = a_((function() {
          return o_(/Android/i)
        })),
        p_ = a_((function() {
          return o_(/Firefox/i)
        })),
        m_ = (0, s.createContext)({
          isNative: !0,
          open: function(e, t) {
            ! function(e, t) {
              if (e instanceof HTMLAnchorElement) t(e);
              else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
              }
            }(e, (e => g_(e, t)))
          },
          useHref: e => e
        });

      function v_() {
        return (0, s.useContext)(m_)
      }

      function g_(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        p_() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (s_() ? i = !0 : a = !0);
        let u = d_() && s_() && !u_() ? new KeyboardEvent("keydown", {
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
        g_.isOpening = n, n_(e), e.dispatchEvent(u), g_.isOpening = !1
      }

      function y_(e) {
        var t;
        const n = v_().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      g_.isOpening = !1;
      const b_ = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        w_ = e => e && "window" in e && e.window === e ? e : b_(e).defaultView || window;
      let E_ = new Map,
        __ = new Set;

      function P_() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = E_.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), E_.delete(n.target)), 0 === E_.size)) {
            for (let e of __) e();
            __.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = E_.get(n.target);
          r || (r = new Set, E_.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function C_(e) {
        requestAnimationFrame((() => {
          0 === E_.size ? e() : __.add(e)
        }))
      }

      function S_(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (h_() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? P_() : document.addEventListener("DOMContentLoaded", P_));
      let T_ = null,
        x_ = new Set,
        O_ = new Map,
        k_ = !1,
        L_ = !1;

      function N_(e, t) {
        for (let n of x_) n(e, t)
      }

      function A_(e) {
        k_ = !0,
          function(e) {
            return !(e.metaKey || !s_() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (T_ = "keyboard", N_("keyboard", e))
      }

      function M_(e) {
        T_ = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (k_ = !0, N_("pointer", e))
      }

      function R_(e) {
        S_(e) && (k_ = !0, T_ = "virtual")
      }

      function D_(e) {
        e.target !== window && e.target !== document && (k_ || L_ || (T_ = "virtual", N_("virtual", e)), k_ = !1, L_ = !1)
      }

      function j_() {
        k_ = !1, L_ = !0
      }

      function I_(e) {
        if ("undefined" == typeof window || O_.get(w_(e))) return;
        const t = w_(e),
          n = b_(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          k_ = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", A_, !0), n.addEventListener("keyup", A_, !0), n.addEventListener("click", R_, !0), t.addEventListener("focus", D_, !0), t.addEventListener("blur", j_, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", M_, !0), n.addEventListener("pointermove", M_, !0), n.addEventListener("pointerup", M_, !0)) : (n.addEventListener("mousedown", M_, !0), n.addEventListener("mousemove", M_, !0), n.addEventListener("mouseup", M_, !0)), t.addEventListener("beforeunload", (() => {
          B_(e)
        }), {
          once: !0
        }), O_.set(t, {
          focus: r
        })
      }
      const B_ = (e, t) => {
        const n = w_(e),
          r = b_(e);
        t && r.removeEventListener("DOMContentLoaded", t), O_.has(n) && (n.HTMLElement.prototype.focus = O_.get(n).focus, r.removeEventListener("keydown", A_, !0), r.removeEventListener("keyup", A_, !0), r.removeEventListener("click", R_, !0), n.removeEventListener("focus", D_, !0), n.removeEventListener("blur", j_, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", M_, !0), r.removeEventListener("pointermove", M_, !0), r.removeEventListener("pointerup", M_, !0)) : (r.removeEventListener("mousedown", M_, !0), r.removeEventListener("mousemove", M_, !0), r.removeEventListener("mouseup", M_, !0)), O_.delete(n))
      };

      function H_(e, t) {
        XE((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = b_(e);
        let n;
        "loading" !== t.readyState ? I_(e) : (n = () => {
          I_(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class F_ {
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

      function U_(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        XE((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = $E((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                t.current.isFocused = !1, r.disabled && n(new F_("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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

      function V_(e) {
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
      let z_ = s.createContext(null);

      function G_(e, t) {
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
            a = U_(i),
            l = (0, s.useCallback)((e => {
              const t = b_(e.target);
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
              onKeyDown: V_(e.onKeyDown),
              onKeyUp: V_(e.onKeyUp)
            }
          }
        }(e), o = t_(n, r), i = function(e) {
          let t = (0, s.useContext)(z_) || {};
          H_(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        return (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = b_(e);
            if ("virtual" === T_) {
              let n = t.activeElement;
              C_((() => {
                t.activeElement === n && e.isConnected && n_(e)
              }))
            } else n_(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: t_({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, a)
        }
      }
      let K_ = "default",
        q_ = "",
        W_ = new WeakMap;

      function X_(e) {
        if (c_()) {
          if ("default" === K_) {
            const t = b_(e);
            q_ = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          K_ = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (W_.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function $_(e) {
        if (c_()) {
          if ("disabled" !== K_) return;
          K_ = "restoring", setTimeout((() => {
            C_((() => {
              if ("restoring" === K_) {
                const t = b_(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = q_ || ""), q_ = "", K_ = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && W_.has(e)) {
          let t = W_.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), W_.delete(e)
        }
      }
      const Y_ = s.createContext({
        register: () => {}
      });
      Y_.displayName = "PressResponderContext";
      var Z_ = new WeakMap;
      class Q_ {
        continuePropagation() {
          Nn(this, Z_, !1)
        }
        get shouldStopPropagation() {
          return kn(this, Z_)
        }
        constructor(e, t, n, r) {
          var o;
          Ln(this, Z_, {
            writable: !0,
            value: void 0
          }), Nn(this, Z_, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, c = n.clientY), a && (null != l && null != c ? (s = l - a.left, u = c - a.top) : (s = a.width / 2, u = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u
        }
      }
      const J_ = Symbol("linkClicked");

      function eP(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          isDisabled: a,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, s.useContext)(Y_);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = t_(r, e), n()
          }
          return H_(t, e.ref), e
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
        }(), b = $E(((e, t) => {
          let o = v.current;
          if (a || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Q_("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = $E(((e, r, i = !0) => {
          let s = v.current;
          if (!s.didFirePressStart) return !1;
          s.ignoreClickAfterPress = !0, s.didFirePressStart = !1, s.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Q_("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !a) {
            let n = new Q_("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return s.isTriggeringEvent = !1, l
        })), E = $E(((e, t) => {
          let n = v.current;
          if (a) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Q_("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = $E((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(iP(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || $_(t.target))
        })), P = $E((e => {
          c && _(e)
        })), C = (0, s.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (nP(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  uP(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        nP(t, r) && !t.repeat && r.contains(t.target) && e.target && E(iP(e.target, t), "keyboard")
                      };
                    g(b_(t.currentTarget), "keyup", WE(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && s_() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !g_.isOpening) {
                  let n = !0;
                  if (a && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || S_(t.nativeEvent))) {
                    a || u || n_(t.currentTarget);
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
              if (e.isPressed && e.target && nP(t, e.target)) {
                var r;
                uP(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(iP(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && tP(e.target) && e.target.contains(n) && !t[J_] && (t[J_] = !0, g_(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
              if (o = t.nativeEvent, !h_() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              sP(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let s = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, a || u || n_(t.currentTarget), d || X_(e.target), s = b(t, e.pointerType), g(b_(t.currentTarget), "pointermove", n, !1), g(b_(t.currentTarget), "pointerup", r, !1), g(b_(t.currentTarget), "pointercancel", i, !1)), s && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (sP(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && aP(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && aP(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(iP(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(iP(e.target, t), e.pointerType, !1), P(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (aP(t, e.target) && null != e.pointerType ? w(iP(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(iP(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || $_(e.target), "ontouchend" in e.target && "mouse" !== t.pointerType && g(e.target, "touchend", o, {
                  once: !0
                }))
              },
              o = e => {
                lP(e.currentTarget) && e.preventDefault()
              },
              i = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (sP(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = S_(t.nativeEvent) ? "virtual" : "mouse", a || u || n_(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(b_(t.currentTarget), "mouseup", n, !1)))
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
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && aP(t, e.target) && null != e.pointerType ? w(iP(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(iP(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", a || u || n_(t.currentTarget), d || X_(e.target), b(oP(e.target, t), e.pointerType) && t.stopPropagation(), g(w_(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = rP(t.nativeEvent, e.activePointerId),
                r = !0;
              n && aP(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(oP(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(oP(e.target, t), e.pointerType, !1), P(oP(e.target, t))), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = rP(t.nativeEvent, e.activePointerId),
                r = !0;
              n && aP(n, t.currentTarget) && null != e.pointerType ? (E(oP(e.target, t), e.pointerType), r = w(oP(e.target, t), e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(oP(e.target, t), e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && $_(e.target), y()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && _(oP(e.target, t)))
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
        }), [g, a, u, y, d, _, P, w, b, E]);
        return (0, s.useEffect)((() => () => {
          var e;
          d || $_(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: t_(h, C)
        }
      }

      function tP(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function nP(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof w_(o).HTMLInputElement && !dP(o, n) || o instanceof w_(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && tP(o)) && "Enter" !== n)
      }

      function rP(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function oP(e, t) {
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

      function iP(e, t) {
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

      function aP(e, t) {
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

      function sP(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function lP(e) {
        return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : tP(e)))
      }

      function uP(e, t) {
        return e instanceof HTMLInputElement ? !dP(e, t) : lP(e)
      }
      const cP = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function dP(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : cP.has(e.type)
      }

      function fP(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, u = {};
        "a" !== n && (u = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = G_(e, t), {
          pressProps: d,
          isPressed: f
        } = eP({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          isDisabled: s,
          ref: t
        }), h = gE(l, {
          labelable: !0
        }), p = t_(c, d), m = v_();
        return {
          isPressed: f,
          linkProps: t_(h, y_(e), {
            ...p,
            ...u,
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
      var hP = {
          MD: "foundry_m1icrx2 foundry_m1icrx1 foundry_m1icrx4",
          LG: "foundry_m1icrx3 foundry_m1icrx1 foundry_m1icrx4"
        },
        pP = {
          MD: "foundry_m1icrxb foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrxa foundry_1d5mo5m0",
          LG: "foundry_m1icrxc foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrxa foundry_1d5mo5m0"
        },
        mP = {
          MD: "foundry_m1icrx8 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg foundry_m1icrx7",
          LG: "foundry_m1icrx9 foundry_tdsdcd1 foundry_tdsdcd0 foundry_tdsdcd7 foundry_m1icrx7"
        },
        vP = "foundry_m1icrxe foundry_1d5mo5m0 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdg",
        gP = {
          MD: "foundry_m1icrx2 foundry_m1icrx1",
          LG: "foundry_m1icrx3 foundry_m1icrx1"
        };
      const yP = (0, s.forwardRef)((({
          breadcrumbs: e,
          size: t = "MD",
          isLandmark: n = !0,
          hideRootPage: r,
          showCurrentPage: o,
          testId: a,
          ...l
        }, u) => {
          if (0 === e.length) return null;
          const c = mt((0, s.useRef)(null), u),
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
                className: hP[t],
                ref: d,
                "aria-hidden": "true",
                children: [!r && h && (0, i.jsx)(bP, {
                  href: h.url,
                  size: t,
                  icon: h.icon,
                  iconLabel: h.iconLabel,
                  iconPosition: h.iconPosition,
                  children: h.label
                }, h.label), y.length > 0 && (0, i.jsx)("li", {
                  className: mP[t],
                  children: (0, i.jsx)("button", {
                    className: vP,
                    children: "..."
                  })
                }), o && p && (0, i.jsx)(bP, {
                  href: p.url,
                  size: t,
                  icon: p.icon,
                  iconLabel: p.iconLabel,
                  iconPosition: p.iconPosition,
                  isCurrent: !0,
                  children: p.label
                }, p.label), e.map((e => (0, i.jsx)(bP, {
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
              } = e, r = qE((o = fE) && o.__esModule ? o.default : o, "@react-aria/breadcrumbs");
              var o;
              return {
                navProps: {
                  ...gE(n, {
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
              className: gP[t],
              "data-testid": a,
              ref: c,
              children: [!r && h && (0, i.jsx)(bP, {
                href: h.url,
                size: t,
                icon: h.icon,
                iconLabel: h.iconLabel,
                iconPosition: h.iconPosition,
                children: h.label
              }, h.label), y.length > 0 && (0, i.jsx)("li", {
                className: mP[t],
                children: (0, i.jsx)(wP, {
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
                return (0, i.jsx)(bP, {
                  href: o,
                  size: t,
                  icon: a,
                  iconLabel: s,
                  iconPosition: l,
                  children: r
                }, `${r.replace(/\s/g,"")}-${n}`)
              })), o && p && (0, i.jsx)(bP, {
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
        bP = ({
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
              } = fP({
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
              isCurrent: u,
              children: c
            } = o,
            d = u ? "span" : "a",
            f = t && ne[t];
          return (0, i.jsx)("li", {
            className: mP[e],
            children: (0, i.jsxs)(d, {
              ...l,
              ref: a,
              className: (0, Te.$)(pP[e], u && "foundry_m1icrxd"),
              children: [f && "left" === r && (0, i.jsx)(f, {
                label: n || "",
                size: "LG"
              }), c, f && "right" === r && (0, i.jsx)(f, {
                label: n || "",
                size: "LG"
              })]
            })
          })
        },
        wP = ({
          items: e
        }) => {
          const [t, n] = (0, s.useState)(!1);
          return (0, i.jsxs)(dw, {
            open: t,
            onOpenChange: () => n(!t),
            children: [(0, i.jsx)(fw, {
              className: vP,
              children: "..."
            }), (0, i.jsx)(mw, {
              children: (0, i.jsx)(vw, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_m1icrxf",
                children: (0, i.jsx)(gw, {
                  className: "foundry_m1icrxg",
                  children: e.map(((e, t) => (0, i.jsx)(yw, {
                    value: e.label,
                    className: "foundry_m1icrxh foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
                    children: (0, i.jsx)(bw, {
                      children: e.label
                    })
                  }, `${e.label}-${t}`)))
                })
              })
            })]
          })
        },
        EP = ({
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
        _P = ({
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
        PP = ({
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
        CP = ({
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
        SP = ({
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
        TP = ({
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

      function xP(e, t, n) {
        let [r, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
        (0, s.useEffect)((() => {
          let e = i.current;
          e !== a && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`), i.current = a
        }), [a]);
        let l = a ? e : r,
          u = (0, s.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
            };
            "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((n, ...o) => {
              let i = e(a ? l : n, ...o);
              return r(i, ...t), a ? n : i
            }))) : (a || o(e), r(e, ...t))
          }), [a, l, n]);
        return [l, u]
      }

      function OP(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = xP(e.isSelected, e.defaultSelected || !1, e.onChange);
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

      function kP(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        XE((() => {
          if ("native" === r && (null == n ? void 0 : n.current)) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: LP(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = $E((() => {
            t.resetValidation()
          })),
          a = $E((e => {
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
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), T_ = "keyboard", N_("keyboard", null)), e.preventDefault()
          })),
          l = $E((() => {
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

      function LP(e) {
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
      const NP = {
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
        AP = {
          ...NP,
          customError: !0,
          valid: !1
        },
        MP = {
          isInvalid: !1,
          validationDetails: NP,
          validationErrors: []
        },
        RP = (0, s.createContext)({}),
        DP = "__formValidationState" + Date.now();

      function jP(e) {
        if (e[DP]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[DP];
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
          let u = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: AP
            } : null,
            c = (0, s.useMemo)((() => BP(function(e, t) {
              if ("function" == typeof e) {
                let n = e(t);
                if (n && "boolean" != typeof n) return IP(n)
              }
              return []
            }(a, o))), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = null);
          let d = (0, s.useContext)(RP),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => IP(d[e]))) : IP(d[r]) : []), [d, r]),
            [h, p] = (0, s.useState)(d),
            [m, v] = (0, s.useState)(!1);
          d !== h && (p(d), v(!1));
          let g = (0, s.useMemo)((() => BP(m ? [] : f)), [m, f]),
            y = (0, s.useRef)(MP),
            [b, w] = (0, s.useState)(MP),
            E = (0, s.useRef)(MP),
            [_, P] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!_) return;
            P(!1);
            let e = c || i || y.current;
            HP(e, E.current) || (E.current = e, w(e))
          })), {
            realtimeValidation: u || g || c || i || MP,
            displayValidation: "native" === l ? u || g || b : u || g || c || i || b,
            updateValidation(e) {
              "aria" !== l || HP(b, e) ? y.current = e : w(e)
            },
            resetValidation() {
              let e = MP;
              HP(e, E.current) || (E.current = e, w(e)), "native" === l && P(!1), v(!0)
            },
            commitValidation() {
              "native" === l && P(!0), v(!0)
            }
          }
        }(e)
      }

      function IP(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function BP(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: AP
        } : null
      }

      function HP(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function FP(e, t, n) {
        let r = (0, s.useRef)(t),
          o = $E((() => {
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

      function UP(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": u,
          validationState: c = "valid",
          isInvalid: d
        } = e;
        null != s || null != l || null != u || console.warn("If you do not provide children, you must specify an aria-label for accessibility");
        let {
          pressProps: f,
          isPressed: h
        } = eP({
          isDisabled: r
        }), {
          pressProps: p,
          isPressed: m
        } = eP({
          isDisabled: r || o,
          onPress() {
            t.toggle()
          }
        }), {
          focusableProps: v
        } = G_(e, n), g = t_(f, v), y = gE(e, {
          labelable: !0
        });
        return FP(n, t.isSelected, t.setSelected), {
          labelProps: t_(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: t_(y, {
            "aria-invalid": d || "invalid" === c || void 0,
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
          isInvalid: d || "invalid" === c
        }
      }

      function VP(e) {
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

      function zP(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function GP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? zP(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = VP(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zP(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function KP(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var qP = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        WP = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = GP(GP({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) qP(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return KP(e.variantClassNames, (e => KP(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        XP = WP({
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
        $P = WP({
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
        YP = WP({
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
        ZP = WP({
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
      const QP = (0, s.forwardRef)((({
          isChecked: e,
          defaultChecked: t,
          onCheckedChange: n,
          label: o,
          description: l,
          size: u = "MD",
          appearance: d = "primary",
          isIndeterminate: f,
          hideLabel: h,
          testId: p,
          errorMessage: m,
          className: v,
          ...g
        }, y) => {
          const b = (0, s.useRef)(null),
            w = mt(b, y),
            E = (0, s.useId)(),
            {
              setSelected: _,
              ...P
            } = OP({
              isSelected: e,
              defaultSelected: t,
              onChange: n,
              value: g.value
            }),
            {
              inputProps: C,
              isDisabled: S,
              isReadOnly: T,
              isInvalid: x,
              isSelected: O
            } = function(e, t, n) {
              let r = jP({
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
                  inputProps: u,
                  isSelected: c,
                  isPressed: d,
                  isDisabled: f,
                  isReadOnly: h
                } = UP({
                  ...e,
                  isInvalid: o
                }, t, n);
              kP(e, r, n);
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
                  ...u,
                  checked: c,
                  "aria-required": m && "aria" === v || void 0,
                  required: m && "native" === v
                },
                isSelected: c,
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
            k = (0, a.v6)({
              ...C,
              "aria-checked": O,
              className: v
            }, {
              className: "foundry_11gbdty1"
            }),
            L = f ? r[`Dash${u}`] : r[`Check${u}`],
            N = x && !!m;
          return (0, i.jsxs)("label", {
            className: "foundry_11gbdty0",
            children: [(0, i.jsxs)("div", {
              className: $P({
                size: u
              }),
              children: [(0, i.jsx)(c.s6, {
                children: (0, i.jsx)("input", {
                  ...k,
                  ref: w
                })
              }), (0, i.jsx)("div", {
                className: XP({
                  size: u,
                  appearance: d
                }),
                "aria-hidden": "true",
                "data-state": f ? "mixed" : O ? "checked" : "unchecked",
                "data-disabled": S || T,
                "data-testid": p,
                children: (0, i.jsx)("span", {
                  className: "foundry_11gbdtyc",
                  children: (O || f) && (0, i.jsx)(L, {
                    "aria-hidden": "true"
                  })
                })
              })]
            }), (0, i.jsx)(c.s6, {
              enabled: !!h,
              children: (0, i.jsxs)("div", {
                className: ZP({
                  size: u,
                  isDisabled: S
                }),
                children: [(0, i.jsx)("p", {
                  className: YP({
                    size: u
                  }),
                  children: o
                }), l && !N && (0, i.jsx)("p", {
                  className: "foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: l
                }), N && (0, i.jsx)("p", {
                  className: "foundry_11gbdtyn foundry_11gbdtym foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: m
                })]
              })
            })]
          })
        })),
        JP = new WeakMap;

      function eC(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = w_(e);
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
        }(e, t) && (!e.parentElement || eC(e.parentElement, e))
      }
      const tC = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        nC = tC.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      tC.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const rC = tC.join(':not([hidden]):not([tabindex="-1"]),');

      function oC(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function iC(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? rC : nC,
          o = b_(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !eC(e) || n && !oC(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class aC {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new sC({
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
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && oC(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new aC;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new sC({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class sC {
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

      function lC(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = QE(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function uC(e) {
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
          t = QE(t);
          let a = QE(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: lC({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = e_([Boolean(t), Boolean(n), r, o]), l = e_([Boolean(t), Boolean(n), r, o]);
        return a = t_(a, {
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

      function cC(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: u
        } = IE(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
          descriptionProps: m,
          errorMessageProps: v
        } = uC({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), g = gE(e, {
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
          }), [n, o, i]), l = U_(a), u = (0, s.useCallback)((e => {
            i.current.isFocusWithin || document.activeElement !== e.target || (r && r(e), o && o(!0), i.current.isFocusWithin = !0, l(e))
          }), [r, o, l]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: u,
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
        }), b = QE(n);
        return JP.set(t, {
          name: b,
          descriptionId: m.id,
          errorMessageId: v.id,
          validationBehavior: l
        }), {
          radioGroupProps: t_(g, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === u && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === u && "vertical" !== a ? "next" : "prev";
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
              let r, o = iC(e.currentTarget, {
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
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }
      new aC;
      let dC = Math.round(1e10 * Math.random()),
        fC = 0;

      function hC(e) {
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

      function pC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function mC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pC(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = hC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function vC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var gC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        yC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = mC(mC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) gC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vC(e.variantClassNames, (e => vC(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        bC = yC({
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
      const wC = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        EC = (0, s.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: u,
          testId: d,
          className: f,
          errorMessage: h,
          orientation: p = "vertical",
          ...m
        }, v) => {
          const {
            children: g
          } = m, y = mt((0, s.useRef)(null), v), b = m.id || (0, s.useId)(), w = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${dC}-${++fC}`), [e.name]);
            var n;
            let [r, o] = xP(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, s.useState)(null), l = jP({
              ...e,
              value: r
            }), u = l.displayValidation.isInvalid;
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
              validationState: e.validationState || (u ? "invalid" : null),
              isInvalid: u
            }
          }(m), E = {
            state: w,
            size: n,
            appearance: r
          }, {
            radioGroupProps: _,
            labelProps: P,
            descriptionProps: C,
            isInvalid: S,
            errorMessageProps: T
          } = cC({
            ...m,
            id: b,
            label: e,
            isRequired: l,
            description: t,
            orientation: p
          }, w), x = (0, a.v6)({
            ..._,
            className: f
          }, {
            className: "foundry_njguqn0",
            "aria-errormessage": T?.id
          }), O = S && !!h;
          return (0, i.jsxs)("div", {
            ref: y,
            "data-testid": d,
            ...x,
            children: [(0, i.jsx)(c.s6, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_njguqn7",
                children: [(0, i.jsx)(M, {
                  ...P,
                  className: "foundry_njguqn8 foundry_tdsdcdj foundry_tdsdcd0 foundry_tdsdcdl",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, l && !u && (0, i.jsx)("span", {
                      className: "foundry_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, i.jsx)(F, {
                  ...C,
                  className: "foundry_njguqna foundry_8kowh41 foundry_tdsdcdp foundry_tdsdcd0 foundry_tdsdcdr",
                  children: t
                })]
              })
            }), (0, i.jsx)("div", {
              className: bC({
                size: n,
                orientation: p
              }),
              children: (0, i.jsx)(wC.Provider, {
                value: E,
                children: g
              })
            }), O && (0, i.jsxs)(M, {
              ...T,
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
        _C = ({
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
        PC = ({
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
        CC = ({
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
      var SC = yC({
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
        TC = yC({
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
        xC = yC({
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
        OC = yC({
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
      const kC = (0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: a,
        ...l
      }, u) => {
        const d = (0, s.useRef)(null),
          f = mt(d, u),
          h = l.id || (0, s.useId)(),
          p = (0, s.useContext)(wC),
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
                pressProps: u,
                isPressed: c
              } = eP({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = eP({
                isDisabled: s,
                onPress() {
                  t.setSelectedValue(r)
                }
              }),
              {
                focusableProps: h
              } = G_(t_(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              p = t_(u, h),
              m = gE(e, {
                labelable: !0
              }),
              v = -1;
            null != t.selectedValue ? t.selectedValue === r && (v = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (v = 0), s && (v = void 0);
            let {
              name: g,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: w
            } = JP.get(t);
            return FP(n, t.selectedValue, t.setSelectedValue), kP({
              validationBehavior: w
            }, t, n), {
              labelProps: t_(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: t_(m, {
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
              isPressed: c || f
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
          className: (0, Te.$)("foundry_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: xC({
              size: g
            }),
            children: [(0, i.jsx)(c.s6, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: f,
                className: "foundry_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: TC({
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
          }), (0, i.jsx)(c.s6, {
            enabled: !!n,
            children: (0, i.jsxs)("div", {
              className: OC({
                size: g
              }),
              children: [(0, i.jsx)("p", {
                className: SC({
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

      function LC(e) {
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

      function NC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function AC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? NC(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = LC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : NC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function MC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var RC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        DC = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = AC(AC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) RC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return MC(e.variantClassNames, (e => MC(e, (e => e.split(" ")[0]))))
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
      const jC = (0, s.forwardRef)((({
          className: e,
          orientation: t = "horizontal",
          thickness: n = "thin",
          isDecorative: r = !1,
          asChild: o,
          testId: a,
          ...s
        }, l) => {
          const u = "horizontal" !== t || r ? "div" : "hr",
            d = r || "hr" === u ? void 0 : "separator",
            f = o ? c.DX : u;
          return (0, i.jsx)(f, {
            ref: l,
            className: (0, Te.$)(DC({
              thickness: n,
              orientation: t
            }), e),
            role: d,
            "aria-orientation": t,
            "data-testid": a,
            ...s
          })
        })),
        IC = ({
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
        BC = ({
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
        HC = ({
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

      function FC(e) {
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

      function UC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function VC(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? UC(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = FC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : UC(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function zC(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var GC = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        KC = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = VC(VC({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) GC(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return zC(e.variantClassNames, (e => zC(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        qC = KC({
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
        WC = KC({
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
        XC = KC({
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
        $C = KC({
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
        YC = KC({
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
        ZC = KC({
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
      const QC = (0, s.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: l,
        hideLabel: u,
        testId: d,
        ...f
      }, h) => {
        const p = (0, s.useRef)(null),
          m = mt(p, h),
          v = (0, s.useId)(),
          g = OP(f),
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
            } = UP(e, t, n);
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
          _ = a ? ne[a] : HC,
          P = l ? ne[l] : BC;
        return (0, i.jsxs)("label", {
          className: "foundry_okz6z20",
          children: [(0, i.jsxs)("div", {
            className: YC({
              appearance: r
            }),
            "data-state": E ? "selected" : "unselected",
            "data-disabled": b || w,
            "data-testid": d,
            children: [(0, i.jsx)(c.s6, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: m
              })
            }), (0, i.jsxs)("div", {
              className: $C({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: qC({
                  size: n,
                  isSelected: E
                }),
                children: (0, i.jsx)(IC, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: WC({
                    size: n,
                    isSelected: E,
                    position: "left"
                  }),
                  children: (0, i.jsx)(_, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: WC({
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
          }), (0, i.jsx)(c.s6, {
            enabled: !!u,
            children: (0, i.jsxs)("div", {
              className: ZC({
                size: n,
                isDisabled: b
              }),
              children: [(0, i.jsx)("p", {
                className: XC({
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

      function JC(e) {
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

      function eS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function tS(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? eS(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = JC(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eS(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function nS(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      QC.displayName = "Switch";
      var rS = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        oS = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = tS(tS({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) rS(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return nS(e.variantClassNames, (e => nS(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        iS = oS({
          defaultClassName: "foundry_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        aS = oS({
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
        sS = oS({
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
      const lS = (0, s.createContext)(null);

      function uS() {
        const e = (0, s.useContext)(lS);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }
      const cS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          status: n,
          background: r,
          ...o
        }, s) => {
          const l = e ? c.DX : "div",
            u = (0, a.v6)(o, {
              className: sS({
                status: n,
                background: r
              })
            });
          return (0, i.jsx)(lS.Provider, {
            value: {
              status: n,
              background: r
            },
            children: (0, i.jsx)(l, {
              ref: s,
              "data-testid": t,
              ...u,
              ...o
            })
          })
        })),
        dS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? c.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qha"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        fS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? c.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhb"
            });
          return (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })),
        hS = {
          danger: "XCircleSolid",
          information: "InfoCircleSolid",
          success: "CheckCircleSolid",
          warning: "AlertTriangleSolid"
        },
        pS = (0, s.forwardRef)((({
          icon: e,
          ...t
        }, n) => {
          const {
            status: r
          } = uS(), o = e || hS[r], s = ne[o], l = (0, a.v6)(t, {
            className: aS({
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
        mS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? c.DX : "div",
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
        vS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          ...n
        }, r) => {
          const o = e ? c.DX : "div",
            s = (0, a.v6)(n, {
              className: "foundry_1m368qhj"
            });
          return (0, i.jsx)(M, {
            asChild: !0,
            children: (0, i.jsx)(o, {
              ref: r,
              "data-testid": t,
              ...s
            })
          })
        })),
        gS = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const l = (0, s.useRef)(null),
            u = mt(l, o),
            d = e ? c.DX : "a",
            {
              linkProps: f,
              isPressed: h
            } = fP(r, l),
            p = (0, a.v6)(f, {
              className: "foundry_1m368qhk foundry_1d5mo5m0"
            });
          return (0, i.jsx)(M, {
            asChild: !0,
            appearance: "hyperlink",
            children: (0, i.jsx)(d, {
              "data-pressed": h,
              "data-testid": n,
              ref: u,
              ...p,
              children: t
            })
          })
        })),
        yS = (0, s.forwardRef)((({
          asChild: e,
          children: t,
          testId: n,
          ...r
        }, o) => {
          const s = e ? c.DX : "div",
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
        bS = (0, s.forwardRef)((({
          asChild: e,
          testId: t,
          className: n,
          ...r
        }, o) => {
          const a = e ? c.DX : "div";
          return (0, i.jsx)(M, {
            asChild: !0,
            children: (0, i.jsx)(a, {
              ref: o,
              "data-testid": t,
              className: (0, Te.$)(n, "foundry_1m368qho"),
              ...r
            })
          })
        })),
        wS = (0, s.forwardRef)((({
          testId: e,
          label: t = "close alert",
          ...n
        }, r) => {
          const {
            background: o
          } = uS(), s = (0, a.v6)(n, {
            className: iS({
              hasBackground: "none" !== o
            })
          });
          return (0, i.jsx)(zp, {
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