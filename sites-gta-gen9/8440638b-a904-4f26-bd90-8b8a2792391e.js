! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8440638b-a904-4f26-bd90-8b8a2792391e", e._sentryDebugIdIdentifier = "sentry-dbid-8440638b-a904-4f26-bd90-8b8a2792391e")
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
  [2691], {
    60903: (e, t, n) => {
      function r(e, t) {
        var n = t && t.cache ? t.cache : c,
          r = t && t.serializer ? t.serializer : l;
        return (t && t.strategy ? t.strategy : s)(e, {
          cache: n,
          serializer: r
        })
      }

      function o(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function i(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function a(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function s(e, t) {
        return a(e, this, 1 === e.length ? o : i, t.cache.create(), t.serializer)
      }
      n.d(t, {
        B: () => r,
        W: () => d
      });
      var l = function() {
        return JSON.stringify(arguments)
      };

      function u() {
        this.cache = Object.create(null)
      }
      u.prototype.get = function(e) {
        return this.cache[e]
      }, u.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var c = {
          create: function() {
            return new u
          }
        },
        d = {
          variadic: function(e, t) {
            return a(e, this, i, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return a(e, this, o, t.cache.create(), t.serializer)
          }
        }
    },
    28859: (e, t, n) => {
      n.r(t), n.d(t, {
        Button: () => pn,
        Caption: () => I,
        Dropdown: () => $m,
        Heading: () => E,
        IconButton: () => Ed,
        Lightbox: () => ip,
        Metadata: () => V,
        Option: () => Zm,
        Paragraph: () => O,
        Subtitle: () => $,
        Text: () => re,
        TextArea: () => At,
        TextSemantics: () => ne,
        Tooltip: () => Wf
      });
      var r = n(46632),
        o = n(6311),
        i = n(71403),
        a = n.t(i, 2),
        s = n.n(i),
        l = n(45891),
        u = n(26677),
        c = n(27109);
      const d = (0, i.forwardRef)(((e, t) => (0, i.createElement)(c.sG.span, (0, u.A)({}, e, {
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
        f = ({
          enabled: e = !0,
          ...t
        }) => {
          const n = e ? d : i.Fragment;
          return (0, r.jsx)(n, {
            ...t
          })
        };

      function h(e) {
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

      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = h(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function v(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var g, y, b = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        w = (g = {
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
        }, (y = e => {
          var t = g.defaultClassName,
            n = m(m({}, g.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : g.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = g.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, u] of g.compoundVariants) b(l, n, g.defaultVariants) && (t += " " + u);
          return t
        }).variants = () => Object.keys(g.variantClassNames), y.classNames = {
          get base() {
            return g.defaultClassName.split(" ")[0]
          },
          get variants() {
            return v(g.variantClassNames, (e => v(e, (e => e.split(" ")[0]))))
          }
        }, y);
      const E = (0, i.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...i
      }, a) => {
        const s = e ? l.DX : `h${t}`,
          u = (0, o.v6)(i, {
            className: w({
              level: t
            })
          });
        return (0, r.jsx)(s, {
          ref: a,
          "data-testid": n,
          ...u
        })
      }));

      function _(e) {
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

      function S(e, t) {
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
          t % 2 ? S(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
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
      var x = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        T = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = P(P({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) x(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return C(e.variantClassNames, (e => C(e, (e => e.split(" ")[0]))))
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
      const O = (0, i.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...i
      }, a) => {
        const s = e ? l.DX : "p",
          u = (0, o.v6)(i, {
            className: T({
              appearance: n
            })
          });
        return (0, r.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...u
        })
      }));

      function L(e) {
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

      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? M(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = L(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function N(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var D = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        j = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = R(R({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) D(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return N(e.variantClassNames, (e => N(e, (e => e.split(" ")[0]))))
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
      const I = (0, i.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...i
      }, a) => {
        const s = e ? l.DX : "span",
          u = (0, o.v6)(i, {
            className: j({
              appearance: n
            })
          });
        return (0, r.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...u
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

      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? A(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = k(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function B(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var F = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        G = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = H(H({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) F(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return B(e.variantClassNames, (e => B(e, (e => e.split(" ")[0]))))
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
      const V = (0, i.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...i
      }, a) => {
        const s = e ? l.DX : "span",
          u = (0, o.v6)(i, {
            className: G({
              appearance: n
            })
          });
        return (0, r.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...u
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

      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = U(o)) in r ? Object.defineProperty(r, o, {
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

      function q(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var W = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        X = (e => {
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
            for (var [u, c] of e.compoundVariants) W(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return q(e.variantClassNames, (e => q(e, (e => e.split(" ")[0]))))
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
      const $ = (0, i.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...i
      }, a) => {
        const s = e ? l.DX : "p",
          u = (0, o.v6)(i, {
            className: X({
              appearance: n
            })
          });
        return (0, r.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...u
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

      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Y(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Z(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function J(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var ee = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        te = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Q(Q({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ee(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return J(e.variantClassNames, (e => J(e, (e => e.split(" ")[0]))))
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
      const ne = {
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
        re = (0, i.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: n = "default",
          ...i
        }, a) => {
          const s = e ? l.DX : ne[n] || "span",
            u = (0, o.v6)(i, {
              className: te({
                semantic: n
              })
            });
          return (0, r.jsx)(s, {
            ref: a,
            "data-testid": t,
            ...u
          })
        }));
      var oe = n(9182);
      const ie = new Set(["id"]),
        ae = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        se = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        le = /^(data-.*)$/;

      function ue(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (ie.has(t) || n && ae.has(t) || r && se.has(t) || (null == o ? void 0 : o.has(t)) || le.test(t)) && (i[t] = e[t]);
        return i
      }
      const ce = "undefined" != typeof document ? i.useLayoutEffect : () => {};

      function de(e) {
        const t = (0, i.useRef)(null);
        return ce((() => {
          t.current = e
        }), [e]), (0, i.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }
      const fe = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        he = e => e && "window" in e && e.window === e ? e : fe(e).defaultView || window;

      function pe(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const me = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ve = i.createContext(me),
        ge = i.createContext(!1);
      let ye = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        be = new WeakMap;
      const we = "function" == typeof i.useId ? function(e) {
        let t = i.useId(),
          [n] = (0, i.useState)("function" == typeof i.useSyncExternalStore ? i.useSyncExternalStore(Se, Ee, _e) : (0, i.useContext)(ge));
        return e || `${n?"react-aria":`react-aria${me.prefix}`}-${t}`
      } : function(e) {
        let t = (0, i.useContext)(ve);
        t !== me || ye || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let n = function(e = !1) {
            let t = (0, i.useContext)(ve),
              n = (0, i.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = be.get(e);
                null == n ? be.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, be.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function Ee() {
        return !1
      }

      function _e() {
        return !0
      }

      function Se(e) {
        return () => {}
      }
      let Pe = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Ce = new Map;

      function xe(e) {
        let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), o = we(t), a = (0, i.useCallback)((e => {
          r.current = e
        }), []);
        return Pe && Ce.set(o, a), ce((() => {
          let e = o;
          return () => {
            Ce.delete(e)
          }
        }), [o]), (0, i.useEffect)((() => {
          let e = r.current;
          e && (r.current = null, n(e))
        })), o
      }

      function Te(e, t) {
        if (e === t) return e;
        let n = Ce.get(e);
        if (n) return n(t), t;
        let r = Ce.get(t);
        return r ? (r(e), e) : t
      }

      function Oe(e = []) {
        let t = xe(),
          [n, r] = function(e) {
            let [t, n] = (0, i.useState)(e), r = (0, i.useRef)(null), o = de((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            ce((() => {
              r.current && o()
            }));
            let a = de((e => {
              r.current = e(t), o()
            }));
            return [t, a]
          }(t),
          o = (0, i.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return ce(o, [t, o, ...e]), n
      }
      var Le = n(11900);

      function Me(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = pe(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = Te(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, Le.A)(n, o)
          }
        }
        return t
      }

      function Re(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = xe(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function Ne(e) {
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
          t = xe(t);
          let a = xe(),
            s = {};
          return n ? (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }) : r || o || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: s,
            fieldProps: Re({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = Oe([Boolean(t), Boolean(n), r, o]), l = Oe([Boolean(t), Boolean(n), r, o]);
        return a = Me(a, {
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
      let De = new Map,
        je = new Set;

      function Ie() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = De.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), De.delete(n.target)), 0 === De.size)) {
            for (let e of je) e();
            je.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = De.get(n.target);
          r || (r = new Set, De.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function ke(e) {
        requestAnimationFrame((() => {
          0 === De.size ? e() : je.add(e)
        }))
      }

      function Ae(e) {
        if (function() {
            if (null == He) {
              He = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return He = !0, !0
                  }
                })
              } catch (e) {}
            }
            return He
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
      "undefined" != typeof document && ("loading" !== document.readyState ? Ie() : document.addEventListener("DOMContentLoaded", Ie));
      let He = null;

      function Be(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function Fe(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Ge() {
        return Fe(/^Mac/i)
      }

      function Ve() {
        return Fe(/^iPad/i) || Ge() && navigator.maxTouchPoints > 1
      }

      function Ue() {
        return Fe(/^iPhone/i) || Ve()
      }

      function Ke() {
        return Be(/Android/i)
      }

      function ze(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (Ke() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let qe = null,
        We = new Set,
        Xe = new Map,
        $e = !1,
        Ze = !1;

      function Ye(e, t) {
        for (let n of We) n(e, t)
      }

      function Qe(e) {
        $e = !0,
          function(e) {
            return !(e.metaKey || !Ge() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (qe = "keyboard", Ye("keyboard", e))
      }

      function Je(e) {
        qe = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || ($e = !0, Ye("pointer", e))
      }

      function et(e) {
        ze(e) && ($e = !0, qe = "virtual")
      }

      function tt(e) {
        e.target !== window && e.target !== document && ($e || Ze || (qe = "virtual", Ye("virtual", e)), $e = !1, Ze = !1)
      }

      function nt() {
        $e = !1, Ze = !0
      }

      function rt(e) {
        if ("undefined" == typeof window || Xe.get(he(e))) return;
        const t = he(e),
          n = fe(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          $e = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Qe, !0), n.addEventListener("keyup", Qe, !0), n.addEventListener("click", et, !0), t.addEventListener("focus", tt, !0), t.addEventListener("blur", nt, !1), "undefined" != typeof PointerEvent ? (n.addEventListener("pointerdown", Je, !0), n.addEventListener("pointermove", Je, !0), n.addEventListener("pointerup", Je, !0)) : (n.addEventListener("mousedown", Je, !0), n.addEventListener("mousemove", Je, !0), n.addEventListener("mouseup", Je, !0)), t.addEventListener("beforeunload", (() => {
          ot(e)
        }), {
          once: !0
        }), Xe.set(t, {
          focus: r
        })
      }
      const ot = (e, t) => {
        const n = he(e),
          r = fe(e);
        t && r.removeEventListener("DOMContentLoaded", t), Xe.has(n) && (n.HTMLElement.prototype.focus = Xe.get(n).focus, r.removeEventListener("keydown", Qe, !0), r.removeEventListener("keyup", Qe, !0), r.removeEventListener("click", et, !0), n.removeEventListener("focus", tt, !0), n.removeEventListener("blur", nt, !1), "undefined" != typeof PointerEvent ? (r.removeEventListener("pointerdown", Je, !0), r.removeEventListener("pointermove", Je, !0), r.removeEventListener("pointerup", Je, !0)) : (r.removeEventListener("mousedown", Je, !0), r.removeEventListener("mousemove", Je, !0), r.removeEventListener("mouseup", Je, !0)), Xe.delete(n))
      };

      function it(e, t) {
        ce((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = fe(e);
        let n;
        "loading" !== t.readyState ? rt(e) : (n = () => {
          rt(e)
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
        const a = (0, i.useCallback)((e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
          }), [r, o]),
          s = function(e) {
            let t = (0, i.useRef)({
              isFocused: !1,
              observer: null
            });
            ce((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let n = de((t => {
              null == e || e(t)
            }));
            return (0, i.useCallback)((e => {
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
          }(a),
          l = (0, i.useCallback)((e => {
            const t = fe(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (n && n(e), o && o(!0), s(e))
          }), [o, n, s]);
        return {
          focusProps: {
            onFocus: !t && (n || o || r) ? l : void 0,
            onBlur: t || !r && !o ? void 0 : a
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
      let ut = i.createContext(null);

      function ct(e, t) {
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
        }(e), o = Me(n, r), a = function(e) {
          let t = (0, i.useContext)(ut) || {};
          it(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), s = e.isDisabled ? {} : a, l = (0, i.useRef)(e.autoFocus);
        return (0, i.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = fe(e);
            if ("virtual" === qe) {
              let n = t.activeElement;
              ke((() => {
                t.activeElement === n && e.isConnected && Ae(e)
              }))
            } else Ae(e)
          }(t.current), l.current = !1
        }), [t]), {
          focusableProps: Me({
            ...o,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, s)
        }
      }

      function dt(e) {
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
      const ft = {
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
        ht = {
          ...ft,
          customError: !0,
          valid: !1
        },
        pt = {
          isInvalid: !1,
          validationDetails: ft,
          validationErrors: []
        },
        mt = (0, i.createContext)({}),
        vt = "__formValidationState" + Date.now();

      function gt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function yt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: ht
        } : null
      }

      function bt(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function wt(e, t) {
        let {
          inputElementType: n = "input",
          isDisabled: r = !1,
          isRequired: o = !1,
          isReadOnly: a = !1,
          type: s = "text",
          validationBehavior: l = "aria"
        } = e, [u, c] = function(e, t, n) {
          let [r, o] = (0, i.useState)(e || t), a = (0, i.useRef)(void 0 !== e), s = void 0 !== e;
          (0, i.useEffect)((() => {
            let e = a.current;
            e !== s && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`), a.current = s
          }), [s]);
          let l = s ? e : r,
            u = (0, i.useCallback)(((e, ...t) => {
              let r = (e, ...t) => {
                n && (Object.is(l, e) || n(e, ...t)), s || (l = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), o(((n, ...o) => {
                let i = e(s ? l : n, ...o);
                return r(i, ...t), s ? n : i
              }))) : (s || o(e), r(e, ...t))
            }), [s, l, n]);
          return [l, u]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: d
        } = ct(e, t), f = function(e) {
          if (e[vt]) {
            let {
              realtimeValidation: t,
              displayValidation: n,
              updateValidation: r,
              resetValidation: o,
              commitValidation: i
            } = e[vt];
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
              builtinValidation: a,
              validate: s,
              validationBehavior: l = "aria"
            } = e;
            n && (t || (t = "invalid" === n));
            let u = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: ht
              } : null,
              c = (0, i.useMemo)((() => yt(function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return gt(n)
                }
                return []
              }(s, o))), [s, o]);
            (null == a ? void 0 : a.validationDetails.valid) && (a = null);
            let d = (0, i.useContext)(mt),
              f = (0, i.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => gt(d[e]))) : gt(d[r]) : []), [d, r]),
              [h, p] = (0, i.useState)(d),
              [m, v] = (0, i.useState)(!1);
            d !== h && (p(d), v(!1));
            let g = (0, i.useMemo)((() => yt(m ? [] : f)), [m, f]),
              y = (0, i.useRef)(pt),
              [b, w] = (0, i.useState)(pt),
              E = (0, i.useRef)(pt),
              [_, S] = (0, i.useState)(!1);
            return (0, i.useEffect)((() => {
              if (!_) return;
              S(!1);
              let e = c || a || y.current;
              bt(e, E.current) || (E.current = e, w(e))
            })), {
              realtimeValidation: u || g || c || a || pt,
              displayValidation: "native" === l ? u || g || b : u || g || c || a || b,
              updateValidation(e) {
                "aria" !== l || bt(b, e) ? y.current = e : w(e)
              },
              resetValidation() {
                let e = pt;
                bt(e, E.current) || (E.current = e, w(e)), "native" === l && S(!1), v(!0)
              },
              commitValidation() {
                "native" === l && S(!0), v(!0)
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
        } = Ne({
          ...e,
          isInvalid: h,
          errorMessage: e.errorMessage || p
        }), w = ue(e, {
          labelable: !0
        });
        const E = {
          type: s,
          pattern: e.pattern
        };
        return function(e, t, n) {
            let r = (0, i.useRef)(t),
              o = de((() => {
                n && n(r.current)
              }));
            (0, i.useEffect)((() => {
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
            ce((() => {
              if ("native" === r && (null == n ? void 0 : n.current)) {
                let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = n.current).validity.valid,
                  validationDetails: dt(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let a = de((() => {
                t.resetValidation()
              })),
              s = de((e => {
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
                }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), qe = "keyboard", Ye("keyboard", null)), e.preventDefault()
              })),
              l = de((() => {
                t.commitValidation()
              }));
            (0, i.useEffect)((() => {
              let e = null == n ? void 0 : n.current;
              if (!e) return;
              let t = e.form;
              return e.addEventListener("invalid", s), e.addEventListener("change", l), null == t || t.addEventListener("reset", a), () => {
                e.removeEventListener("invalid", s), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", a)
              }
            }), [n, s, l, a, r])
          }(e, f, t), (0, i.useEffect)((() => {
            if (t.current instanceof he(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: v,
            inputProps: Me(w, "input" === n && E, {
              disabled: r,
              readOnly: a,
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
      var Et = n(20904);

      function _t(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => Et.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, a] = (0, i.useState)((() => n ? r(e) : t));

        function s() {
          a(r(e))
        }
        return (0, i.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }), [e]), o
      }

      function St(e) {
        const t = (0, i.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function Pt(...e) {
        const t = (0, i.useRef)(null);
        return (0, i.useEffect)((() => {
          e.forEach((e => {
            e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
          }))
        }), [e]), t
      }
      const Ct = () => _t("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function xt(e) {
        const t = (0, i.useRef)(e);
        return (0, i.useEffect)((() => {
          t.current = e
        })), (0, i.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const Tt = ({
        activity: e,
        leave: t,
        enabled: n = !0
      }) => {
        const r = (0, i.useRef)(),
          [o, a] = (0, i.useState)(!1),
          s = (0, i.useCallback)((() => a(!0)), []),
          l = (0, i.useCallback)(((t, n) => {
            let o = 0;
            return (...t) => {
              const n = Date.now();
              n - o >= 500 && (o = n, (() => {
                a(!1), window.clearTimeout(r.current), r.current = window.setTimeout(s, e)
              })(...t))
            }
          })(), []),
          u = (0, i.useCallback)((() => {
            window.clearTimeout(r.current), r.current = window.setTimeout(s, t)
          }), []),
          c = (0, i.useCallback)((() => {
            document.hidden || l()
          }), []);
        return (0, i.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", l), window.removeEventListener("mousedown", l), window.removeEventListener("resize", l), window.removeEventListener("keydown", l), window.removeEventListener("touchstart", l), window.removeEventListener("wheel", l), document.removeEventListener("mouseleave", u), document.removeEventListener("visibilitychange", c), window.clearTimeout(r.current), a(!1)
          };
          return n ? (window.addEventListener("mousemove", l), window.addEventListener("mousedown", l), window.addEventListener("resize", l), window.addEventListener("keydown", l), window.addEventListener("touchstart", l), window.addEventListener("wheel", l), document.addEventListener("mouseleave", u), document.addEventListener("visibilitychange", c), l()) : e(), () => e()
        }), [n]), {
          isIdle: o
        }
      };

      function Ot({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, i.useState)(e),
            [r] = n,
            o = (0, i.useRef)(r),
            a = xt(t);
          return (0, i.useEffect)((() => {
            o.current !== r && (a(r), o.current = r)
          }), [r, o, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, l = xt(n), u = (0, i.useCallback)((t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [a, e, o, l]);
        return [s, u]
      }

      function Lt(e, t, n, r) {
        const o = (0, i.useRef)(t);
        (0, i.useEffect)((() => {
          o.current = t
        }), [t]), (0, i.useEffect)((() => {
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

      function Mt(e = !0) {
        return !!e && _t("screen and (pointer: coarse) and (hover: none)")
      }

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

      function Nt(e, t) {
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
          t % 2 ? Nt(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Rt(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach((function(t) {
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
        kt = (e => {
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
            for (var [u, c] of e.compoundVariants) It(u, r, e.defaultVariants) && (n += " " + c);
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
          defaultClassName: "foundry_vq8c3j8",
          variantClassNames: {
            isInvalid: {
              false: "foundry_vq8c3j9",
              true: "foundry_vq8c3ja"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const At = (0, i.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: a,
        children: s,
        description: u,
        testId: c,
        className: d,
        rows: h = 5,
        hideLabel: p,
        hideDescription: m,
        hideRequiredAsterisk: v,
        validate: g,
        errorMessage: y,
        ...b
      }, w) => {
        const E = Pt((0, i.useRef)(null), w),
          {
            inputProps: _,
            labelProps: S,
            descriptionProps: P,
            isInvalid: C,
            errorMessageProps: x,
            validationErrors: T
          } = wt({
            ...b,
            label: t,
            description: u,
            isRequired: n,
            inputElementType: "textarea",
            validate: e => g?.(e) ?? (!y || [y])
          }, E),
          O = (0, o.v6)({
            ..._,
            className: d
          }, {
            className: kt({
              isInvalid: C
            }),
            "aria-errormessage": x?.id
          }),
          L = e ? l.DX : "textarea";
        return (0, r.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || a) && (0, r.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, r.jsx)(f, {
              enabled: !!p,
              children: (0, r.jsx)(I, {
                ...S,
                className: "foundry_vq8c3j2",
                asChild: !0,
                children: (0, r.jsxs)("label", {
                  children: [t, n && !v && (0, r.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), a && (0, r.jsx)(V, {
              className: "foundry_vq8c3j3",
              children: a
            })]
          }), (0, r.jsx)(L, {
            rows: h,
            ref: w,
            "data-testid": c,
            ...O,
            children: s
          }), u && (0, r.jsx)(f, {
            enabled: T.length > 0 || !!m,
            children: (0, r.jsx)(I, {
              ...P,
              className: "foundry_vq8c3j4",
              children: u
            })
          }), T.length > 0 && (0, r.jsxs)(I, {
            ...x,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, r.jsx)(oe.X, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), T.join(". ")]
          })]
        })
      }));
      let Ht = "default",
        Bt = "",
        Ft = new WeakMap;

      function Gt(e) {
        if (Ue()) {
          if ("default" === Ht) {
            const t = fe(e);
            Bt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          Ht = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (Ft.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function Vt(e) {
        if (Ue()) {
          if ("disabled" !== Ht) return;
          Ht = "restoring", setTimeout((() => {
            ke((() => {
              if ("restoring" === Ht) {
                const t = fe(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Bt || ""), Bt = "", Ht = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ft.has(e)) {
          let t = Ft.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Ft.delete(e)
        }
      }
      const Ut = i.createContext({
        register: () => {}
      });

      function Kt(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function zt(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, Kt(e, t, "set"), n), n
      }

      function qt(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Be(/Firefox/i) && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Ge() ? i = !0 : a = !0);
        let u = Be(/AppleWebKit/i) && !Be(/Chrome/i) && Ge() && !Ve() ? new KeyboardEvent("keydown", {
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
        qt.isOpening = n, Ae(e), e.dispatchEvent(u), qt.isOpening = !1
      }
      Ut.displayName = "PressResponderContext", qt.isOpening = !1;
      var Wt = new WeakMap;
      class Xt {
        continuePropagation() {
          zt(this, Wt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, Kt(this, Wt, "get"))
        }
        constructor(e, t, n) {
          var r, o, i;
          i = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(r = this, o = Wt), o.set(r, i), zt(this, Wt, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
      }
      const $t = Symbol("linkClicked");

      function Zt(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: a,
          isDisabled: s,
          isPressed: l,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: c,
          allowTextSelectionOnPress: d,
          ref: f,
          ...h
        } = function(e) {
          let t = (0, i.useContext)(Ut);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = Me(r, e), n()
          }
          return it(t, e.ref), e
        }(e), [p, m] = (0, i.useState)(!1), v = (0, i.useRef)({
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
          let e = (0, i.useRef)(new Map),
            t = (0, i.useCallback)(((t, n, r, o) => {
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
            n = (0, i.useCallback)(((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }), []),
            r = (0, i.useCallback)((() => {
              e.current.forEach(((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              }))
            }), [n]);
          return (0, i.useEffect)((() => r), [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), b = de(((e, t) => {
          let o = v.current;
          if (s || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Xt("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, m(!0), i
        })), w = de(((e, r, i = !0) => {
          let a = v.current;
          if (!a.didFirePressStart) return !1;
          a.ignoreClickAfterPress = !0, a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let l = !0;
          if (o) {
            let t = new Xt("pressend", r, e);
            o(t), l = t.shouldStopPropagation
          }
          if (n && n(!1), m(!1), t && i && !s) {
            let n = new Xt("press", r, e);
            t(n), l && (l = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, l
        })), E = de(((e, t) => {
          let n = v.current;
          if (s) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new Xt("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), _ = de((e => {
          let t = v.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && w(en(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, y(), d || Vt(t.target))
        })), S = de((e => {
          c && _(e)
        })), P = (0, i.useMemo)((() => {
          let e = v.current,
            t = {
              onKeyDown(t) {
                if (Qt(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var r;
                  rn(t.target, t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, o = b(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Qt(t, r) && !t.repeat && r.contains(t.target) && e.target && E(en(e.target, t), "keyboard")
                      };
                    g(fe(t.currentTarget), "keyup", pe(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Ge() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !qt.isOpening) {
                  let n = !0;
                  if (s && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || ze(t.nativeEvent))) {
                    s || u || Ae(t.currentTarget);
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
              if (e.isPressed && e.target && Qt(t, e.target)) {
                var r;
                rn(t.target, t.key) && t.preventDefault();
                let n = t.target;
                w(en(e.target, t), "keyboard", e.target.contains(n)), y(), "Enter" !== t.key && Yt(e.target) && e.target.contains(n) && !t[$t] && (t[$t] = !0, qt(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
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
              if (i = t.nativeEvent, !Ke() && 0 === i.width && 0 === i.height || 1 === i.width && 1 === i.height && 0 === i.pressure && 0 === i.detail && "mouse" === i.pointerType) return void(e.pointerType = "virtual");
              var i;
              nn(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let a = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, s || u || Ae(t.currentTarget), d || Gt(e.target), a = b(t, e.pointerType), g(fe(t.currentTarget), "pointermove", n, !1), g(fe(t.currentTarget), "pointerup", r, !1), g(fe(t.currentTarget), "pointercancel", o, !1)), a && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (nn(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && tn(t, t.currentTarget) && E(t, e.pointerType || t.pointerType)
            };
            let n = t => {
                t.pointerId === e.activePointerId && (e.target && tn(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, b(en(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, w(en(e.target, t), e.pointerType, !1), S(t)))
              },
              r = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (tn(t, e.target) && null != e.pointerType ? w(en(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && w(en(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, y(), d || Vt(e.target))
              },
              o = e => {
                _(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && _(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (nn(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = ze(t.nativeEvent) ? "virtual" : "mouse", s || u || Ae(t.currentTarget), b(t, e.pointerType) && t.stopPropagation(), g(fe(t.currentTarget), "mouseup", n, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = b(t, e.pointerType)), n && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = w(t, e.pointerType, !1), S(t)), n && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || E(t, e.pointerType || "mouse"))
            };
            let n = t => {
              0 === t.button && (e.isPressed = !1, y(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && tn(t, e.target) && null != e.pointerType ? w(en(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && w(en(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let n = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              n && (e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", s || u || Ae(t.currentTarget), d || Gt(e.target), b(t, e.pointerType) && t.stopPropagation(), g(he(t.currentTarget), "scroll", r, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Jt(t.nativeEvent, e.activePointerId),
                r = !0;
              n && tn(n, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, r = b(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = w(t, e.pointerType, !1), S(t)), r && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let n = Jt(t.nativeEvent, e.activePointerId),
                r = !0;
              n && tn(n, t.currentTarget) && null != e.pointerType ? (E(t, e.pointerType), r = w(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = w(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !d && Vt(e.target), y()
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
        }), [g, s, u, y, d, _, S, w, b, E]);
        return (0, i.useEffect)((() => () => {
          var e;
          d || Vt(null !== (e = v.current.target) && void 0 !== e ? e : void 0)
        }), [d]), {
          isPressed: l || p,
          pressProps: Me(h, P)
        }
      }

      function Yt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Qt(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof he(o).HTMLInputElement && !an(o, n) || o instanceof he(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Yt(o)) && "Enter" !== n)
      }

      function Jt(e, t) {
        const n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r.identifier === t) return r
        }
        return null
      }

      function en(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function tn(e, t) {
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

      function nn(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function rn(e, t) {
        return e instanceof HTMLInputElement ? !an(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !Yt(e)
      }
      const on = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function an(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : on.has(e.type)
      }

      function sn(e, t) {
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
        } = Zt({
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
        } = ct(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = Me(b, g, ue(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: Me(n, w, {
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

      function ln(e) {
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

      function un(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function cn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? un(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ln(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function dn(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var fn = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        hn = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = cn(cn({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fn(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dn(e.variantClassNames, (e => dn(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_8kowh41 foundry_1d5mo5m0 foundry_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_1qqcnua0 foundry_1qqcnua1",
              secondary: "foundry_1qqcnua0 foundry_1qqcnua2",
              tertiary: "foundry_1qqcnua0 foundry_1qqcnua3",
              ghost: "foundry_1qqcnua0 foundry_1qqcnua4",
              danger: "foundry_1qqcnua0 foundry_1qqcnua6",
              information: "foundry_1qqcnua0 foundry_1qqcnua5"
            },
            size: {
              MD: "foundry_17pcofy8",
              LG: "foundry_17pcofy9"
            },
            fullWidth: {
              true: "foundry_17pcofya",
              false: "foundry_17pcofyb"
            },
            allCaps: {
              true: "foundry_17pcofyc",
              false: "foundry_17pcofyd"
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
        });
      const pn = (0, i.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: a,
        onClick: s,
        iconLeft: u,
        iconLeftLabel: c,
        iconRight: d,
        iconRightLabel: f,
        appearance: h,
        size: p = "MD",
        allCaps: m = !1,
        fullWidth: v = !1,
        ...g
      }, y) => {
        const b = Pt((0, i.useRef)(null), y),
          {
            events: w,
            others: E
          } = (0, o.bZ)(g, {
            onPress: !1
          }),
          {
            buttonProps: _,
            isPressed: S
          } = sn({
            ...E,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => E.onPress?.(e) ?? s?.(e)
          }, b),
          P = (0, o.v6)({
            ..._,
            className: n
          }, {
            ...w,
            role: "button",
            "data-pressed": S,
            "data-testid": e,
            className: hn({
              appearance: h,
              size: p,
              fullWidth: v,
              allCaps: m
            })
          }),
          C = u && oe[u],
          x = d && oe[d],
          T = t ? l.DX : "button";
        return (0, r.jsxs)(T, {
          ref: b,
          ...P,
          children: [(0, r.jsxs)("span", {
            className: "foundry_17pcofyi",
            children: [C && (0, r.jsx)(C, {
              label: c || "",
              size: p
            }), (0, r.jsx)(l.xV, {
              children: a
            })]
          }), x && (0, r.jsx)(x, {
            label: f || "",
            size: p
          })]
        })
      }));
      var mn = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        vn = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        gn = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        yn = "--foundry_nu8bkp0",
        bn = "foundry_nu8bkp1";
      const wn = (0, i.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: vn,
          platformScaleBreakpoints: mn,
          locale: "en-US"
        }),
        En = () => (0, i.useContext)(wn),
        _n = (e, t) => {
          const n = "more" === t ? gn.lightHc : gn.light,
            r = "more" === t ? gn.darkHc : gn.dark;
          return "dark" === e ? r : n
        };
      const Sn = () => o.X3 ? null : document.body;
      (0, i.forwardRef)((({
        children: e,
        className: t,
        container: n = Sn(),
        asChild: a,
        colorScheme: s,
        defaultColorScheme: u,
        contrastMode: c,
        defaultContrastMode: d,
        platformScaleBreakpoints: f,
        platformScaleRatios: h,
        defaultPlatformScale: p,
        platformScale: m,
        locale: v = "en-US"
      }, g) => {
        const y = Pt((0, i.useRef)(null), g),
          b = (0, i.useRef)(n),
          {
            ratio: w,
            scale: E
          } = function(e) {
            const t = (0, i.useMemo)((() => ({
                ...vn,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, i.useMemo)((() => ({
                ...mn,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, a] = (0, i.useState)(e.platformScale || e.defaultPlatformScale),
              s = (0, i.useRef)([]),
              l = () => {
                if (!o.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of s.current) t.removeEventListener("change", e);
                  s.current = []
                }
              };
            return (0, i.useEffect)((() => (e.platformScale ? a(e.platformScale) : (() => {
              if (!o.X3) {
                l();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && a(e)
                    };
                  t.addEventListener("change", r), t.matches && a(e), s.current.push({
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
            appearanceClass: _,
            otherAppearanceClasses: S,
            providerColor: P,
            providerContrast: C
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = _t("(prefers-color-scheme: light)"),
              a = _t("(prefers-color-scheme: dark)"),
              s = _t("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || a && "dark" || t,
              u = n || s && "more" || r,
              c = (0, i.useMemo)((() => _n(l, u)), [l, u]),
              d = (0, i.useMemo)((() => ((e, t) => {
                const n = _n(e, t);
                return [gn.light, gn.dark, gn.lightHc, gn.darkHc].filter((e => e !== n))
              })(l, u)), [l, u]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: u
            }
          }({
            colorScheme: s,
            defaultColorScheme: u,
            contrastMode: c,
            defaultContrastMode: d
          });
        return ((e, t, n, r, o) => {
          const a = St(o),
            s = St(e.current);
          (0, i.useEffect)((() => {
            e.current?.classList.contains(bn) || e.current?.classList.add(bn), e.current?.classList.add(n), e.current?.classList.remove(...r), a && o && e.current?.classList.contains(a) ? e.current?.classList.replace(a, o) : a && !o && e.current?.classList.contains(a) ? e.current?.classList.remove(a) : o && e.current?.classList.add(o)
          }), [n, o]), (0, i.useEffect)((() => {
            e.current?.style.setProperty(yn, t.toString())
          }), [t]), (0, i.useEffect)((() => {
            s?.classList.remove(bn), s?.classList.remove(n), s?.style.removeProperty(yn), o && s?.classList.remove(o)
          }), [s])
        })(a ? y : b, w, _, S, t), (0, r.jsx)(wn.Provider, {
          value: {
            locale: v,
            defaultColorScheme: u,
            colorScheme: P,
            defaultContrastMode: d,
            contrastMode: C,
            defaultPlatformScale: p,
            platformScale: E,
            platformScaleRatios: h,
            platformScaleBreakpoints: f
          },
          children: a ? (0, r.jsx)(l.DX, {
            ref: y,
            children: e
          }) : e
        })
      }));
      var Pn = Fn(),
        Cn = e => kn(e, Pn),
        xn = Fn();
      Cn.write = e => kn(e, xn);
      var Tn = Fn();
      Cn.onStart = e => kn(e, Tn);
      var On = Fn();
      Cn.onFrame = e => kn(e, On);
      var Ln = Fn();
      Cn.onFinish = e => kn(e, Ln);
      var Mn = [];
      Cn.setTimeout = (e, t) => {
        const n = Cn.now() + t,
          r = () => {
            const e = Mn.findIndex((e => e.cancel == r));
            ~e && Mn.splice(e, 1), jn -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return Mn.splice(Rn(n), 0, o), jn += 1, An(), o
      };
      var Rn = e => ~(~Mn.findIndex((t => t.time > e)) || ~Mn.length);
      Cn.cancel = e => {
        Tn.delete(e), On.delete(e), Ln.delete(e), Pn.delete(e), xn.delete(e)
      }, Cn.sync = e => {
        In = !0, Cn.batchedUpdates(e), In = !1
      }, Cn.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, Cn.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          Tn.delete(n), t = null
        }, r
      };
      var Nn = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Cn.use = e => Nn = e, Cn.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Cn.batchedUpdates = e => e(), Cn.catch = console.error, Cn.frameLoop = "always", Cn.advance = () => {
        "demand" !== Cn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Bn()
      };
      var Dn = -1,
        jn = 0,
        In = !1;

      function kn(e, t) {
        In ? (t.delete(e), e(0)) : (t.add(e), An())
      }

      function An() {
        Dn < 0 && (Dn = 0, "demand" !== Cn.frameLoop && Nn(Hn))
      }

      function Hn() {
        ~Dn && (Nn(Hn), Cn.batchedUpdates(Bn))
      }

      function Bn() {
        const e = Dn;
        Dn = Cn.now();
        const t = Rn(Dn);
        t && (Gn(Mn.splice(0, t), (e => e.handler())), jn -= t), jn ? (Tn.flush(), Pn.flush(e ? Math.min(64, Dn - e) : 16.667), On.flush(), xn.flush(), Ln.flush()) : Dn = -1
      }

      function Fn() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            jn += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (jn -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, jn -= t.size, Gn(t, (t => t(n) && e.add(t))), jn += e.size, t = e)
          }
        }
      }

      function Gn(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Cn.catch(e)
          }
        }))
      }
      var Vn = Object.defineProperty,
        Un = {};

      function Kn() {}((e, t) => {
        for (var n in t) Vn(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(Un, {
        assign: () => or,
        colors: () => tr,
        createStringInterpolator: () => Yn,
        skipAnimation: () => nr,
        to: () => Qn,
        willAdvance: () => rr
      });
      var zn = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function qn(e, t) {
        if (zn.arr(e)) {
          if (!zn.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Wn = (e, t) => e.forEach(t);

      function Xn(e, t, n) {
        if (zn.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var $n = e => zn.und(e) ? [] : zn.arr(e) ? e : [e];

      function Zn(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Wn(n, t)
        }
      }
      var Yn, Qn, Jn = (e, ...t) => Zn(e, (e => e(...t))),
        er = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        tr = null,
        nr = !1,
        rr = Kn,
        or = e => {
          e.to && (Qn = e.to), e.now && (Cn.now = e.now), void 0 !== e.colors && (tr = e.colors), null != e.skipAnimation && (nr = e.skipAnimation), e.createStringInterpolator && (Yn = e.createStringInterpolator), e.requestAnimationFrame && Cn.use(e.requestAnimationFrame), e.batchedUpdates && (Cn.batchedUpdates = e.batchedUpdates), e.willAdvance && (rr = e.willAdvance), e.frameLoop && (Cn.frameLoop = e.frameLoop)
        },
        ir = new Set,
        ar = [],
        sr = [],
        lr = 0,
        ur = {
          get idle() {
            return !ir.size && !ar.length
          },
          start(e) {
            lr > e.priority ? (ir.add(e), Cn.onStart(cr)) : (dr(e), Cn(hr))
          },
          advance: hr,
          sort(e) {
            if (lr) Cn.onFrame((() => ur.sort(e)));
            else {
              const t = ar.indexOf(e);
              ~t && (ar.splice(t, 1), fr(e))
            }
          },
          clear() {
            ar = [], ir.clear()
          }
        };

      function cr() {
        ir.forEach(dr), ir.clear(), Cn(hr)
      }

      function dr(e) {
        ar.includes(e) || fr(e)
      }

      function fr(e) {
        ar.splice(function(t, n) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(ar), 0, e)
      }

      function hr(e) {
        const t = sr;
        for (let n = 0; n < ar.length; n++) {
          const r = ar[n];
          lr = r.priority, r.idle || (rr(r), r.advance(e), r.idle || t.push(r))
        }
        return lr = 0, (sr = ar).length = 0, (ar = t).length > 0
      }
      var pr = "[-+]?\\d*\\.?\\d+",
        mr = pr + "%";

      function vr(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var gr = new RegExp("rgb" + vr(pr, pr, pr)),
        yr = new RegExp("rgba" + vr(pr, pr, pr, pr)),
        br = new RegExp("hsl" + vr(pr, mr, mr)),
        wr = new RegExp("hsla" + vr(pr, mr, mr, pr)),
        Er = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        _r = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Sr = /^#([0-9a-fA-F]{6})$/,
        Pr = /^#([0-9a-fA-F]{8})$/;

      function Cr(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function xr(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = Cr(o, r, e + 1 / 3),
          a = Cr(o, r, e),
          s = Cr(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function Tr(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Or(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Lr(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Mr(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Rr(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Sr.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : tr && void 0 !== tr[e] ? tr[e] : (t = gr.exec(e)) ? (Tr(t[1]) << 24 | Tr(t[2]) << 16 | Tr(t[3]) << 8 | 255) >>> 0 : (t = yr.exec(e)) ? (Tr(t[1]) << 24 | Tr(t[2]) << 16 | Tr(t[3]) << 8 | Lr(t[4])) >>> 0 : (t = Er.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Pr.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = _r.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = br.exec(e)) ? (255 | xr(Or(t[1]), Mr(t[2]), Mr(t[3]))) >>> 0 : (t = wr.exec(e)) ? (xr(Or(t[1]), Mr(t[2]), Mr(t[3])) | Lr(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Nr = (e, t, n) => {
          if (zn.fun(e)) return e;
          if (zn.arr(e)) return Nr({
            range: e,
            output: t,
            extrapolate: n
          });
          if (zn.str(e.output[0])) return Yn(e);
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
        Dr = 1.70158,
        jr = 1.525 * Dr,
        Ir = Dr + 1,
        kr = 2 * Math.PI / 3,
        Ar = 2 * Math.PI / 4.5,
        Hr = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        Br = {
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
          easeInBack: e => Ir * e * e * e - Dr * e * e,
          easeOutBack: e => 1 + Ir * Math.pow(e - 1, 3) + Dr * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - jr) / 2 : (Math.pow(2 * e - 2, 2) * ((jr + 1) * (2 * e - 2) + jr) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * kr),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * kr) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ar) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ar) / 2 + 1,
          easeInBounce: e => 1 - Hr(1 - e),
          easeOutBounce: Hr,
          easeInOutBounce: e => e < .5 ? (1 - Hr(1 - 2 * e)) / 2 : (1 + Hr(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return 0, 1, o = ("end" === t ? Math.floor(r) : Math.ceil(r)) / e, Math.min(Math.max(o, 0), 1);
            var o
          }
        },
        Fr = Symbol.for("FluidValue.get"),
        Gr = Symbol.for("FluidValue.observers"),
        Vr = e => Boolean(e && e[Fr]),
        Ur = e => e && e[Fr] ? e[Fr]() : e,
        Kr = e => e[Gr] || null;

      function zr(e, t) {
        const n = e[Gr];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var qr = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Wr(this, e)
          }
        },
        Wr = (e, t) => Yr(e, Fr, t);

      function Xr(e, t) {
        if (e[Fr]) {
          let n = e[Gr];
          n || Yr(e, Gr, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function $r(e, t) {
        const n = e[Gr];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[Gr] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Zr, Yr = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Qr = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Jr = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        eo = new RegExp(`(${Qr.source})(%|[a-z]+)`, "i"),
        to = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        no = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ro = e => {
          const [t, n] = oo(e);
          if (!t || er()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && no.test(n) ? ro(n) : n || e
        },
        oo = e => {
          const t = no.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        io = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        ao = e => {
          Zr || (Zr = tr ? new RegExp(`(${Object.keys(tr).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ur(e).replace(no, ro).replace(Jr, Rr).replace(Zr, Rr))),
            n = t.map((e => e.match(Qr).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => Nr({
              ...e,
              output: t
            })));
          return e => {
            const n = !eo.test(t[0]) && t.find((e => eo.test(e)))?.replace(Qr, "");
            let o = 0;
            return t[0].replace(Qr, (() => `${r[o++](e)}${n||""}`)).replace(to, io)
          }
        },
        so = "react-spring: ",
        lo = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${so}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        uo = lo(console.warn),
        co = lo(console.warn);

      function fo(e) {
        return zn.str(e) && ("#" == e[0] || /\d/.test(e) || !er() && no.test(e) || e in (tr || {}))
      }
      var ho = er() ? i.useEffect : i.useLayoutEffect,
        po = () => {
          const e = (0, i.useRef)(!1);
          return ho((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function mo() {
        const e = (0, i.useState)()[1],
          t = po();
        return () => {
          t.current && e(Math.random())
        }
      }
      var vo = e => (0, i.useEffect)(e, go),
        go = [];

      function yo(e) {
        const t = (0, i.useRef)();
        return (0, i.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var bo = Symbol.for("Animated:node"),
        wo = e => e && e[bo],
        Eo = (e, t) => {
          return n = e, r = bo, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        _o = e => e && e[bo] && e[bo].getPayload(),
        So = class {
          constructor() {
            Eo(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Po = class extends So {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, zn.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Po(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return zn.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, zn.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Co = class extends Po {
          constructor(e) {
            super(0), this._string = null, this._toString = Nr({
              output: [e, e]
            })
          }
          static create(e) {
            return new Co(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (zn.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Nr({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        xo = {
          dependencies: null
        },
        To = class extends So {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Xn(this.source, ((n, r) => {
              var o;
              (o = n) && o[bo] === o ? t[r] = n.getValue(e) : Vr(n) ? t[r] = Ur(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Wn(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Xn(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            xo.dependencies && Vr(e) && xo.dependencies.add(e);
            const t = _o(e);
            t && Wn(t, (e => this.add(e)))
          }
        },
        Oo = class extends To {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Oo(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(Lo)), !0)
          }
        };

      function Lo(e) {
        return (fo(e) ? Co : Po).create(e)
      }

      function Mo(e) {
        const t = wo(e);
        return t ? t.constructor : zn.arr(e) ? Oo : fo(e) ? Co : Po
      }
      var Ro = (e, t) => {
          const n = !zn.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, i.forwardRef)(((r, o) => {
            const a = (0, i.useRef)(null),
              s = n && (0, i.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (zn.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, u] = function(e, t) {
                const n = new Set;
                return xo.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new To(e), xo.dependencies = null, [e, n]
              }(r, t),
              c = mo(),
              d = () => {
                const e = a.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
              },
              f = new No(d, u),
              h = (0, i.useRef)();
            ho((() => (h.current = f, Wn(u, (e => Xr(e, f))), () => {
              h.current && (Wn(h.current.deps, (e => $r(e, h.current))), Cn.cancel(h.current.update))
            }))), (0, i.useEffect)(d, []), vo((() => () => {
              const e = h.current;
              Wn(e.deps, (t => $r(t, e)))
            }));
            const p = t.getComponentProps(l.getValue());
            return i.createElement(e, {
              ...p,
              ref: s
            })
          }))
        },
        No = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Cn.write(this.update)
          }
        },
        Do = Symbol.for("AnimatedComponent"),
        jo = e => zn.str(e) ? e : e && zn.str(e.displayName) ? e.displayName : zn.fun(e) && e.name || null;

      function Io(e, ...t) {
        return zn.fun(e) ? e(...t) : e
      }
      var ko = (e, t) => !0 === e || !!(t && e && (zn.fun(e) ? e(t) : $n(e).includes(t))),
        Ao = (e, t) => zn.obj(e) ? t && e[t] : e,
        Ho = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Bo = e => e,
        Fo = (e, t = Bo) => {
          let n = Go;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            zn.und(n) || (r[o] = n)
          }
          return r
        },
        Go = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Vo = {
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

      function Uo(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Xn(e, ((e, r) => {
              Vo[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Xn(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function Ko(e) {
        return e = Ur(e), zn.arr(e) ? e.map(Ko) : fo(e) ? Un.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function zo(e) {
        for (const t in e) return !0;
        return !1
      }

      function qo(e) {
        return zn.fun(e) || zn.arr(e) && zn.obj(e[0])
      }

      function Wo(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Xo(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var $o = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Br.linear,
          clamp: !1
        },
        Zo = class {
          constructor() {
            this.velocity = 0, Object.assign(this, $o)
          }
        };

      function Yo(e, t) {
        if (zn.und(t.decay)) {
          const n = !zn.und(t.tension) || !zn.und(t.friction);
          !n && zn.und(t.frequency) && zn.und(t.damping) && zn.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Qo = [],
        Jo = class {
          constructor() {
            this.changed = !1, this.values = Qo, this.toValues = null, this.fromValues = Qo, this.config = new Zo, this.immediate = !1
          }
        };

      function ei(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = ko(n.cancel ?? r?.cancel, t);
          if (c) h();
          else {
            zn.und(n.pause) || (o.paused = ko(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || ko(e, t)), l = Io(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - Cn.now()
          }

          function f() {
            l > 0 && !Un.skipAnimation ? (o.delayed = !0, u = Cn.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(u)) : h()
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
      var ti = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? oi(e.get()) : t.every((e => e.noop)) ? ni(e.get()) : ri(e.get(), t.every((e => e.finished))),
        ni = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        ri = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        oi = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function ii(e, t, n, r) {
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
          const u = Fo(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            h = e => {
              const t = o <= (n.cancelId || 0) && oi(r) || o !== n.asyncId && ri(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new si,
                a = new li;
              return (async () => {
                if (Un.skipAnimation) throw ai(n), a.result = ri(r, !1), d(a), a;
                h(i);
                const s = zn.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Xn(u, ((e, t) => {
                  zn.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return h(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let m;
          if (Un.skipAnimation) return ai(n), ri(r, !1);
          try {
            let t;
            t = zn.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, r.stop.bind(r))), await Promise.all([t.then(c), f]), m = ri(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof si) m = e.result;
            else {
              if (!(e instanceof li)) throw e;
              m = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return zn.fun(a) && Cn.batchedUpdates((() => {
            a(m, r, r.item)
          })), m
        })() : l
      }

      function ai(e, t) {
        Zn(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var si = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        li = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        ui = e => e instanceof di,
        ci = 1,
        di = class extends qr {
          constructor() {
            super(...arguments), this.id = ci++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = wo(this);
            return e && e.getValue()
          }
          to(...e) {
            return Un.to(this, e)
          }
          interpolate(...e) {
            return uo(`${so}The "interpolate" function is deprecated in v9 (use "to" instead)`), Un.to(this, e)
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
            zr(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || ur.sort(this), zr(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        fi = Symbol.for("SpringPhase"),
        hi = e => (1 & e[fi]) > 0,
        pi = e => (2 & e[fi]) > 0,
        mi = e => (4 & e[fi]) > 0,
        vi = (e, t) => t ? e[fi] |= 3 : e[fi] &= -3,
        gi = (e, t) => t ? e[fi] |= 4 : e[fi] &= -5,
        yi = class extends di {
          constructor(e, t) {
            if (super(), this.animation = new Jo, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !zn.und(e) || !zn.und(t)) {
              const n = zn.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              zn.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(pi(this) || this._state.asyncTo) || mi(this)
          }
          get goal() {
            return Ur(this.animation.to)
          }
          get velocity() {
            const e = wo(this);
            return e instanceof Po ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return hi(this)
          }
          get isAnimating() {
            return pi(this)
          }
          get isPaused() {
            return mi(this)
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
            } = r, a = _o(r.to);
            !a && Vr(r.to) && (o = $n(Ur(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == Co ? 1 : a ? a[l].lastPosition : o[l];
              let c = r.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = zn.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                if (zn.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), c = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !zn.und(r),
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
            const s = wo(this),
              l = s.getValue();
            if (t) {
              const e = Ur(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return Cn.batchedUpdates((() => {
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
            if (pi(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Cn.batchedUpdates((() => {
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
            return zn.und(e) ? (n = this.queue || [], this.queue = []) : n = [zn.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => ti(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), ai(this._state, e && this._lastCallId), Cn.batchedUpdates((() => this._stop(t, e))), this
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
            n = zn.obj(n) ? n[t] : n, (null == n || qo(n)) && (n = void 0), r = zn.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return hi(this) || (e.reverse && ([n, r] = [r, n]), r = Ur(r), zn.und(r) ? wo(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, Fo(e, ((e, t) => /^on/.test(t) ? Ao(e, n) : e))), Ci(this, e, "onProps"), xi(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return ei(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  mi(this) || (gi(this, !0), Jn(i.pauseQueue), xi(this, "onPause", ri(this, bi(this, this.animation.to)), this))
                },
                resume: () => {
                  mi(this) && (gi(this, !1), pi(this) && this._resume(), Jn(i.resumeQueue), xi(this, "onResume", ri(this, bi(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = wi(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(oi(this));
            const r = !zn.und(e.to),
              o = !zn.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(oi(this));
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
            !o || r || t.default && !zn.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !qn(d, u);
            f && (s.from = d), d = Ur(d);
            const h = !qn(c, l);
            h && this._focus(c);
            const p = qo(t.to),
              {
                config: m
              } = s,
              {
                decay: v,
                velocity: g
              } = m;
            (r || o) && (m.velocity = 0), t.config && !p && function(e, t, n) {
              n && (Yo(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Yo(e, t), Object.assign(e, t);
              for (const t in $o) null == e[t] && (e[t] = $o[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              zn.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(m, Io(t.config, i), t.config !== a.config ? Io(a.config, i) : void 0);
            let y = wo(this);
            if (!y || zn.und(c)) return n(ri(this, !0));
            const b = zn.und(t.reset) ? o && !t.default : !zn.und(d) && ko(t.reset, i),
              w = b ? d : this.get(),
              E = Ko(c),
              _ = zn.num(E) || zn.arr(E) || fo(E),
              S = !p && (!_ || ko(a.immediate || t.immediate, i));
            if (h) {
              const e = Mo(c);
              if (e !== y.constructor) {
                if (!S) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(E)
              }
            }
            const P = y.constructor;
            let C = Vr(c),
              x = !1;
            if (!C) {
              const e = b || !hi(this) && f;
              (h || e) && (x = qn(Ko(w), E), C = !x), (qn(s.immediate, S) || S) && qn(m.decay, v) && qn(m.velocity, g) || (C = !0)
            }
            if (x && pi(this) && (s.changed && !b ? C = !0 : C || this._stop(l)), !p && ((C || Vr(l)) && (s.values = y.getPayload(), s.toValues = Vr(c) ? null : P == Co ? [1] : $n(E)), s.immediate != S && (s.immediate = S, S || b || this._set(l)), C)) {
              const {
                onRest: e
              } = s;
              Wn(Pi, (e => Ci(this, t, e)));
              const r = ri(this, bi(this, l));
              Jn(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && Cn.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? Io(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(w), p ? n(ii(t.to, t, this._state, this)) : C ? this._start() : pi(this) && !h ? this._pendingCalls.add(n) : n(ni(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Kr(this) && this._detach(), t.to = e, Kr(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Vr(t) && (Xr(t, this), ui(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Vr(e) && $r(e, this)
          }
          _set(e, t = !0) {
            const n = Ur(e);
            if (!zn.und(n)) {
              const e = wo(this);
              if (!e || !qn(n, e.getValue())) {
                const r = Mo(n);
                e && e.constructor == r ? e.setValue(n) : Eo(this, r.create(n)), e && Cn.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return wo(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, xi(this, "onStart", ri(this, bi(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Io(this.animation.onChange, e, this)), Io(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            wo(this).reset(Ur(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), pi(this) || (vi(this, !0), mi(this) || this._resume())
          }
          _resume() {
            Un.skipAnimation ? this.finish() : ur.start(this)
          }
          _stop(e, t) {
            if (pi(this)) {
              vi(this, !1);
              const n = this.animation;
              Wn(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), zr(this, {
                type: "idle",
                parent: this
              });
              const r = t ? oi(this.get()) : ri(this.get(), bi(this, e ?? n.to));
              Jn(this._pendingCalls, r), n.changed && (n.changed = !1, xi(this, "onRest", r, this))
            }
          }
        };

      function bi(e, t) {
        const n = Ko(t);
        return qn(Ko(e.get()), n)
      }

      function wi(e, t = e.loop, n = e.to) {
        const r = Io(t);
        if (r) {
          const o = !0 !== r && Uo(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Ei({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || qo(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Ei(e) {
        const {
          to: t,
          from: n
        } = e = Uo(e), r = new Set;
        return zn.obj(t) && Si(t, r), zn.obj(n) && Si(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function _i(e) {
        const t = Ei(e);
        return zn.und(t.default) && (t.default = Fo(t)), t
      }

      function Si(e, t) {
        Xn(e, ((e, n) => null != e && t.add(n)))
      }
      var Pi = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Ci(e, t, n) {
        e.animation[n] = t[n] !== Ho(t, n) ? Ao(t[n], e.key) : void 0
      }

      function xi(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Ti = ["onStart", "onChange", "onRest"],
        Oi = 1,
        Li = class {
          constructor(e, t) {
            this.id = Oi++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              zn.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Ei(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = $n(e).map(Ei) : this.queue = [], this._flush ? this._flush(this, t) : (ki(this, t), Mi(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Wn($n(t), (t => n[t].stop(!!e)))
            } else ai(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (zn.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Wn($n(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (zn.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Wn($n(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Xn(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, Zn(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && Zn(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, Zn(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Cn.onFrame(this._onFrame)
          }
        };

      function Mi(e, t) {
        return Promise.all(t.map((t => Ri(e, t)))).then((t => ti(e, t)))
      }
      async function Ri(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = zn.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = zn.arr(o) || zn.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Wn(Ti, (n => {
          const r = t[n];
          if (zn.fun(r)) {
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
        t.pause === !d.paused ? (d.paused = t.pause, Jn(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          h = !0 === t.cancel || !0 === Ho(t, "cancel");
        (c || h && d.asyncId) && f.push(ei(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: Kn,
            resume: Kn,
            start(t, n) {
              h ? (ai(d, e._lastAsyncId), n(oi(e))) : (t.onRest = s, n(ii(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = ti(e, await Promise.all(f));
        if (a && p.finished && (!n || !p.noop)) {
          const n = wi(t, a, o);
          if (n) return ki(e, [n]), Ri(e, n, !0)
        }
        return l && Cn.batchedUpdates((() => l(p, e, e.item))), p
      }

      function Ni(e, t) {
        const n = {
          ...e.springs
        };
        return t && Wn($n(t), (e => {
          zn.und(e.keys) && (e = Ei(e)), zn.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Ii(n, e, (e => ji(e)))
        })), Di(e, n), n
      }

      function Di(e, t) {
        Xn(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Xr(t, e))
        }))
      }

      function ji(e, t) {
        const n = new yi;
        return n.key = e, t && Xr(n, t), n
      }

      function Ii(e, t, n) {
        t.keys && Wn(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function ki(e, t) {
        Wn(t, (t => {
          Ii(e.springs, t, (t => ji(t, e)))
        }))
      }
      var Ai, Hi, Bi = ({
          children: e,
          ...t
        }) => {
          const n = (0, i.useContext)(Fi),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, i.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, i.useRef)(), o = r.current;
            let a = o;
            return a ? Boolean(t && a.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; n++)
                if (e[n] !== t[n]) return !1;
              return !0
            }(t, a.inputs)) || (a = {
              inputs: t,
              result: e()
            }) : a = n, (0, i.useEffect)((() => {
              r.current = a, o == n && (n.inputs = n.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: a
          } = Fi;
          return i.createElement(a, {
            value: t
          }, e)
        },
        Fi = (Ai = Bi, Hi = {}, Object.assign(Ai, i.createContext(Hi)), Ai.Provider._context = Ai, Ai.Consumer._context = Ai, Ai);
      Bi.Provider = Fi.Provider, Bi.Consumer = Fi.Consumer;
      var Gi = () => {
        const e = [],
          t = function(t) {
            co(`${so}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Wn(e, ((e, o) => {
              if (zn.und(t)) r.push(e.start());
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
          return Wn(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Wn(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Wn(e, ((e, n) => {
            const r = zn.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Wn(e, ((e, r) => {
            if (zn.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Wn(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Wn(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return zn.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Vi(e, t) {
        const n = zn.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = zn.fun(t) && t;
            r && !n && (n = []);
            const o = (0, i.useMemo)((() => r || 3 == arguments.length ? Gi() : void 0), []),
              a = (0, i.useRef)(0),
              s = mo(),
              l = (0, i.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = Ni(e, t);
                  return a.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Mi(e, t) : new Promise((r => {
                    Di(e, n), l.queue.push((() => {
                      r(Mi(e, t))
                    })), s()
                  }))
                }
              })), []),
              u = (0, i.useRef)([...l.ctrls]),
              c = [],
              d = yo(e) || 0;

            function f(e, n) {
              for (let o = e; o < n; o++) {
                const e = u.current[o] || (u.current[o] = new Li(null, l.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = _i(n))
              }
            }(0, i.useMemo)((() => {
              Wn(u.current.slice(e, d), (e => {
                Wo(e, o), e.stop(!0)
              })), u.current.length = e, f(d, e)
            }), [e]), (0, i.useMemo)((() => {
              f(0, Math.min(d, e))
            }), n);
            const h = u.current.map(((e, t) => Ni(e, c[t]))),
              p = (0, i.useContext)(Bi),
              m = yo(p),
              v = p !== m && zo(p);
            ho((() => {
              a.current++, l.ctrls = u.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], Wn(e, (e => e()))), Wn(u.current, ((e, t) => {
                o?.add(e), v && e.start({
                  default: p
                });
                const n = c[t];
                n && (Xo(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), vo((() => () => {
              Wn(l.ctrls, (e => e.stop(!0)))
            }));
            const g = h.map((e => ({
              ...e
            })));
            return o ? [g, o] : g
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var Ui = () => Gi(),
        Ki = () => (0, i.useState)(Ui)[0];
      var zi = 1,
        qi = class extends di {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = Nr(...t);
            const n = this._get(),
              r = Mo(n);
            Eo(this, r.create(n))
          }
          advance(e) {
            const t = this._get();
            qn(t, this.get()) || (wo(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Xi(this._active) && $i(this)
          }
          _get() {
            const e = zn.arr(this.source) ? this.source.map(Ur) : $n(Ur(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Xi(this._active) && (this.idle = !1, Wn(_o(this), (e => {
              e.done = !1
            })), Un.skipAnimation ? (Cn.batchedUpdates((() => this.advance())), $i(this)) : ur.start(this))
          }
          _attach() {
            let e = 1;
            Wn($n(this.source), (t => {
              Vr(t) && Xr(t, this), ui(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            Wn($n(this.source), (e => {
              Vr(e) && $r(e, this)
            })), this._active.clear(), $i(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = $n(this.source).reduce(((e, t) => Math.max(e, (ui(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Wi(e) {
        return !1 !== e.idle
      }

      function Xi(e) {
        return !e.size || Array.from(e).every(Wi)
      }

      function $i(e) {
        e.idle || (e.idle = !0, Wn(_o(e), (e => {
          e.done = !0
        })), zr(e, {
          type: "idle",
          parent: e
        }))
      }
      Un.assign({
        createStringInterpolator: ao,
        to: (e, t) => new qi(e, t)
      }), ur.advance;
      var Zi = n(79493),
        Yi = /^--/;

      function Qi(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Yi.test(e) || ea.hasOwnProperty(e) && ea[e] ? ("" + t).trim() : t + "px"
      }
      var Ji = {},
        ea = {
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
        ta = ["Webkit", "Ms", "Moz", "O"];
      ea = Object.keys(ea).reduce(((e, t) => (ta.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), ea);
      var na = /^(matrix|translate|scale|rotate|skew)/,
        ra = /^(translate)/,
        oa = /^(rotate|skew)/,
        ia = (e, t) => zn.num(e) && 0 !== e ? e + t : e,
        aa = (e, t) => zn.arr(e) ? e.every((e => aa(e, t))) : zn.num(e) ? e === t : parseFloat(e) === t,
        sa = class extends To {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>ia(e,"px"))).join(",")})`, aa(e, 0)]))), Xn(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (na.test(t)) {
                if (delete r[t], zn.und(e)) return;
                const n = ra.test(t) ? "px" : oa.test(t) ? "deg" : "";
                o.push($n(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${ia(o,n)})`, aa(o, 0)] : e => [`${t}(${e.map((e=>ia(e,n))).join(",")})`, aa(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new la(o, i)), super(r)
          }
        },
        la = class extends qr {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Wn(this.inputs, ((n, r) => {
              const o = Ur(n[0]),
                [i, a] = this.transforms[r](zn.arr(o) ? o : n.map(Ur));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Wn(this.inputs, (e => Wn(e, (e => Vr(e) && Xr(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Wn(this.inputs, (e => Wn(e, (e => Vr(e) && $r(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), zr(this, e)
          }
        };
      Un.assign({
        batchedUpdates: Zi.unstable_batchedUpdates,
        createStringInterpolator: ao,
        colors: {
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
        }
      });
      var ua = ((e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new To(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = jo(e) || "Anonymous";
              return (e = zn.str(e) ? i[e] || (i[e] = Ro(e, o)) : e[Do] || (e[Do] = Ro(e, o))).displayName = `Animated(${t})`, e
            };
          return Xn(e, ((t, n) => {
            zn.arr(e) && (n = jo(t)), i[n] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: r,
                children: o,
                scrollTop: i,
                scrollLeft: a,
                viewBox: s,
                ...l
              } = t,
              u = Object.values(l),
              c = Object.keys(l).map((t => n || e.hasAttribute(t) ? t : Ji[t] || (Ji[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== o && (e.textContent = o);
            for (const t in r)
              if (r.hasOwnProperty(t)) {
                const n = Qi(t, r[t]);
                Yi.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } c.forEach(((t, n) => {
              e.setAttribute(t, u[n])
            })), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), void 0 !== s && e.setAttribute("viewBox", s)
          },
          createAnimatedStyle: e => new sa(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        ca = ua.animated;
      const da = (e, t, n) => {
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
        fa = e => {
          const t = (e, t, n) => {
            n(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, n) => {
            const r = n.getBoundingClientRect();
            return e ? (t(e.top, r.top, ((e, t) => e < t)), t(e.bottom, r.bottom, ((e, t) => e > t)), t(e.left, r.left, ((e, t) => e < t)), t(e.right, r.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), r) : r
          }), null)
        },
        ha = (e, t, n, r) => {
          let o = n[0],
            i = n[1];
          const {
            a
          } = new DOMMatrix(e.style.transform), s = r / 100, l = fa(e), u = t.getBoundingClientRect(), c = l.width / a / 2 * s - u.width / 2, d = l.height / a / 2 * s - u.height / 2, f = -o > c, h = o > c, p = i > d, m = -i > d;
          return f && !h ? o = -c : h && !f && (o = c), p && !m ? i = d : m && !p && (i = -d), {
            xy: [o, i],
            horizontalOffset: c,
            verticalOffset: d
          }
        },
        pa = {
          scrollFactor: 2e3,
          pinchFactor: 300,
          dragFactor: 1.25
        };

      function ma(e, t) {
        return e.map((function(e, n) {
          return e + t[n]
        }))
      }

      function va(e, t) {
        return e.map((function(e, n) {
          return e - t[n]
        }))
      }

      function ga(e) {
        return Math.hypot.apply(Math, e)
      }

      function ya(e, t) {
        void 0 === t && (t = e);
        var n = ga(t),
          r = 0 === n ? 0 : 1 / n,
          o = t.map((function(e) {
            return r * e
          }));
        return {
          distance: ga(e),
          direction: o
        }
      }

      function ba(e, t, n) {
        var r = ga(t),
          o = 0 === r ? 0 : 1 / r,
          i = 0 === n ? 0 : 1 / n,
          a = i * r,
          s = t.map((function(e) {
            return i * e
          })),
          l = t.map((function(e) {
            return o * e
          }));
        return {
          velocities: s,
          velocity: a,
          distance: ga(e),
          direction: l
        }
      }

      function wa(e) {
        return Math.sign ? Math.sign(e) : Number(e > 0) - Number(e < 0) || +e
      }

      function Ea(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0 ? function(e, t) {
          return Math.pow(e, 5 * t)
        }(e, n) : e * t * n / (t + n * e)
      }

      function _a(e, t, n, r) {
        return void 0 === r && (r = .15), 0 === r ? function(e, t, n) {
          return Math.max(t, Math.min(e, n))
        }(e, t, n) : e < t ? -Ea(t - e, n - t, r) + t : e > n ? +Ea(e - n, n - t, r) + n : e
      }

      function Sa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function Pa() {
        return Pa = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, Pa.apply(this, arguments)
      }

      function Ca(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }

      function xa(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function Ta(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function Oa(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return Ta(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ta(e, t) : void 0
              }
            }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
              return r >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[r++]
              }
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        return (n = e[Symbol.iterator]()).next.bind(n)
      }

      function La() {}

      function Ma() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? La : 1 === t.length ? t[0] : function() {
          for (var e, n, r = Oa(t); !(n = r()).done;) e = n.value.apply(this, arguments) || e;
          return e
        }
      }

      function Ra(e, t) {
        if (void 0 === e) {
          if (void 0 === t) throw new Error("Must define fallback value if undefined is expected");
          e = t
        }
        return Array.isArray(e) ? e : [e, e]
      }

      function Na(e, t) {
        return Object.assign({}, t, e || {})
      }

      function Da(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return e.apply(void 0, n)
        }
        return e
      }

      function ja(e, t) {
        void 0 === e && (e = {});
        for (var n = {}, r = 0, o = Object.entries(t); r < o.length; r++) {
          var i = o[r],
            a = i[0],
            s = i[1];
          switch (typeof s) {
            case "function":
              n[a] = s.call(n, e[a], a, e);
              break;
            case "object":
              n[a] = ja(e[a], s);
              break;
            case "boolean":
              s && (n[a] = e[a])
          }
        }
        return n
      }

      function Ia() {
        return "undefined" != typeof window && "ontouchstart" in window
      }

      function ka(e) {
        return "pointerId" in e ? null : "touchend" === e.type ? e.changedTouches : e.targetTouches
      }

      function Aa(e) {
        return Array.from(ka(e)).map((function(e) {
          return e.identifier
        }))
      }

      function Ha(e) {
        return {
          buttons: "buttons" in e ? e.buttons : 0,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey,
          ctrlKey: e.ctrlKey
        }
      }
      var Ba = function(e) {
        return e
      };

      function Fa(e, t) {
        void 0 === t && (t = Ba);
        var n = ka(e),
          r = n ? n[0] : e;
        return t([r.clientX, r.clientY])
      }

      function Ga(e, t, n) {
        void 0 === n && (n = Ba);
        var r = Array.from(e.touches).filter((function(e) {
            return t.includes(e.identifier)
          })),
          o = r[0],
          i = r[1];
        if (!o || !i) throw Error("The event doesn't have two pointers matching the pointerIds");
        var a = i.clientX - o.clientX,
          s = i.clientY - o.clientY,
          l = (i.clientX + o.clientX) / 2,
          u = (i.clientY + o.clientY) / 2;
        return {
          values: n([Math.hypot(a, s), -180 * Math.atan2(a, s) / Math.PI]),
          origin: n([l, u])
        }
      }

      function Va(e, t) {
        void 0 === t && (t = Ba);
        var n = e.deltaX,
          r = e.deltaY,
          o = e.deltaMode;
        return 1 === o ? (n *= 40, r *= 40) : 2 === o && (n *= 800, r *= 800), t([n, r])
      }

      function Ua(e, t) {
        return void 0 === t && (t = Ba), t([e.scale, e.rotation])
      }
      var Ka = {
          threshold: function(e) {
            return void 0 === e && (e = 0), Ra(e)
          },
          rubberband: function(e) {
            switch (void 0 === e && (e = 0), e) {
              case !0:
                return Ra(.15);
              case !1:
                return Ra(0);
              default:
                return Ra(e)
            }
          },
          enabled: function(e) {
            return void 0 === e && (e = !0), e
          },
          triggerAllEvents: function(e) {
            return void 0 === e && (e = !1), e
          },
          initial: function(e) {
            return void 0 === e && (e = 0), "function" == typeof e ? e : Ra(e)
          },
          transform: !0
        },
        za = Pa({}, Ka, {
          axis: !0,
          lockDirection: function(e) {
            return void 0 === e && (e = !1), e
          },
          bounds: function(e) {
            if (void 0 === e && (e = {}), "function" == typeof e) return function(t) {
              return za.bounds(e(t))
            };
            var t = e,
              n = t.left,
              r = void 0 === n ? -1 / 0 : n,
              o = t.right,
              i = void 0 === o ? 1 / 0 : o,
              a = t.top,
              s = void 0 === a ? -1 / 0 : a,
              l = t.bottom;
            return [
              [r, i],
              [s, void 0 === l ? 1 / 0 : l]
            ]
          }
        }),
        qa = "undefined" != typeof window && window.document && window.document.createElement,
        Wa = {
          enabled: function(e) {
            return void 0 === e && (e = !0), e
          },
          domTarget: !0,
          window: function(e) {
            function t(t) {
              return e.apply(this, arguments)
            }
            return t.toString = function() {
              return e.toString()
            }, t
          }((function(e) {
            return void 0 === e && (e = qa ? window : void 0), e
          })),
          eventOptions: function(e) {
            var t = void 0 === e ? {} : e,
              n = t.passive,
              r = void 0 === n || n,
              o = t.capture;
            return {
              passive: r,
              capture: void 0 !== o && o
            }
          },
          transform: !0
        },
        Xa = Pa({}, Ka, {
          bounds: function(e, t, n) {
            var r = n.distanceBounds,
              o = void 0 === r ? {} : r,
              i = n.angleBounds,
              a = void 0 === i ? {} : i,
              s = function(e) {
                var t = Na(Da(o, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              l = function(e) {
                var t = Na(Da(a, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof o && "function" != typeof a ? [s(), l()] : function(e) {
              return [s(e), l(e)]
            }
          }
        }),
        $a = Pa({}, za, {
          useTouch: function(e) {
            void 0 === e && (e = !1);
            var t = Ia(),
              n = "undefined" != typeof window && "onpointerdown" in window;
            return !(!e || !t) || !(!t || n)
          },
          experimental_preventWindowScrollY: function(e) {
            return void 0 === e && (e = !1), e
          },
          threshold: function(e, t, n) {
            var r = n.filterTaps,
              o = void 0 !== r && r,
              i = n.lockDirection,
              a = void 0 !== i && i,
              s = n.axis,
              l = Ra(e, o ? 3 : a || (void 0 === s ? void 0 : s) ? 1 : 0);
            return this.filterTaps = o, l
          },
          swipeVelocity: function(e) {
            return void 0 === e && (e = .5), Ra(e)
          },
          swipeDistance: function(e) {
            return void 0 === e && (e = 50), Ra(e)
          },
          swipeDuration: function(e) {
            return void 0 === e && (e = 250), e
          },
          delay: function(e) {
            switch (void 0 === e && (e = 0), e) {
              case !0:
                return 180;
              case !1:
                return 0;
              default:
                return e
            }
          }
        });

      function Za(e) {
        return void 0 === e && (e = {}), ja(e, za)
      }

      function Ya(e) {
        return Pa({
          _active: !1,
          _blocked: !1,
          _intentional: [!1, !1],
          _movement: [0, 0],
          _initial: [0, 0],
          _bounds: [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
          ],
          _threshold: [0, 0],
          _lastEventType: void 0,
          _dragStarted: !1,
          _dragPreventScroll: !1,
          _dragIsTap: !0,
          _dragDelayed: !1,
          event: void 0,
          intentional: !1,
          values: [0, 0],
          velocities: [0, 0],
          delta: [0, 0],
          movement: [0, 0],
          offset: [0, 0],
          lastOffset: [0, 0],
          direction: [0, 0],
          initial: [0, 0],
          previous: [0, 0],
          first: !1,
          last: !1,
          active: !1,
          timeStamp: 0,
          startTime: 0,
          elapsedTime: 0,
          cancel: La,
          canceled: !1,
          memo: void 0,
          args: void 0
        }, e)
      }

      function Qa() {
        return {
          shared: {
            hovering: !1,
            scrolling: !1,
            wheeling: !1,
            dragging: !1,
            moving: !1,
            pinching: !1,
            touches: 0,
            buttons: 0,
            down: !1,
            shiftKey: !1,
            altKey: !1,
            metaKey: !1,
            ctrlKey: !1,
            locked: !1
          },
          drag: Ya({
            _pointerId: void 0,
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0,
            tap: !1,
            swipe: [0, 0]
          }),
          pinch: Ya({
            _pointerIds: [],
            da: [0, 0],
            vdva: [0, 0],
            origin: void 0,
            turns: 0
          }),
          wheel: Ya({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          move: Ya({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          scroll: Ya({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          })
        }
      }
      var Ja = new Map,
        es = function(e) {
          return e
        },
        ts = function() {
          function e(e, t) {
            var n = this;
            void 0 === t && (t = []), this.controller = e, this.args = t, this.debounced = !0, this.setTimeout = function(e, t) {
              var r;
              void 0 === t && (t = 140), clearTimeout(n.controller.timeouts[n.stateKey]);
              for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) i[a - 2] = arguments[a];
              n.controller.timeouts[n.stateKey] = (r = window).setTimeout.apply(r, [e, t].concat(i))
            }, this.clearTimeout = function() {
              clearTimeout(n.controller.timeouts[n.stateKey])
            }, this.fireGestureHandler = function(e) {
              if (void 0 === e && (e = !1), n.state._blocked) return n.debounced || (n.state._active = !1, n.clean()), null;
              if (!e && !n.state.intentional && !n.config.triggerAllEvents) return null;
              if (n.state.intentional) {
                var t = n.state.active,
                  r = n.state._active;
                n.state.active = r, n.state.first = r && !t, n.state.last = t && !r, n.controller.state.shared[n.ingKey] = r
              }
              var o = n.controller.pointerIds.size || n.controller.touchIds.size,
                i = n.controller.state.shared.buttons > 0 || o > 0,
                a = Pa({}, n.controller.state.shared, n.state, n.mapStateValues(n.state), {
                  locked: !!document.pointerLockElement,
                  touches: o,
                  down: i
                }),
                s = n.handler(a);
              return n.state.memo = void 0 !== s ? s : n.state.memo, a
            }, this.controller = e, this.args = t
          }
          var t, n, r = e.prototype;
          return r.updateSharedState = function(e) {
            Object.assign(this.controller.state.shared, e)
          }, r.updateGestureState = function(e) {
            Object.assign(this.state, e)
          }, r.checkIntentionality = function(e, t) {
            return {
              _intentional: e,
              _blocked: !1
            }
          }, r.getMovement = function(e) {
            var t = this.config.rubberband,
              n = this.state,
              r = n._bounds,
              o = n._initial,
              i = n._active,
              a = n._intentional,
              s = n.lastOffset,
              l = n.movement,
              u = n._threshold,
              c = this.getInternalMovement(e, this.state),
              d = !1 === a[0] ? ns(c[0], u[0]) : a[0],
              f = !1 === a[1] ? ns(c[1], u[1]) : a[1],
              h = this.checkIntentionality([d, f], c);
            if (h._blocked) return Pa({}, h, {
              _movement: c,
              delta: [0, 0]
            });
            var p = h._intentional,
              m = c,
              v = [!1 !== p[0] ? c[0] - p[0] : 0, !1 !== p[1] ? c[1] - p[1] : 0],
              g = ma(v, s),
              y = i ? t : [0, 0];
            return v = rs(r, ma(v, o), y), Pa({}, h, {
              intentional: !1 !== p[0] || !1 !== p[1],
              _initial: o,
              _movement: m,
              movement: v,
              values: e,
              offset: rs(r, g, y),
              delta: va(v, l)
            })
          }, r.clean = function() {
            this.clearTimeout()
          }, t = e, (n = [{
            key: "config",
            get: function() {
              return this.controller.config[this.stateKey]
            }
          }, {
            key: "enabled",
            get: function() {
              return this.controller.config.enabled && this.config.enabled
            }
          }, {
            key: "state",
            get: function() {
              return this.controller.state[this.stateKey]
            }
          }, {
            key: "handler",
            get: function() {
              return this.controller.handlers[this.stateKey]
            }
          }, {
            key: "transform",
            get: function() {
              return this.config.transform || this.controller.config.transform || es
            }
          }]) && Sa(t.prototype, n), e
        }();

      function ns(e, t) {
        return Math.abs(e) >= t && wa(e) * t
      }

      function rs(e, t, n) {
        var r = t[0],
          o = t[1],
          i = n[0],
          a = n[1],
          s = e[0],
          l = s[0],
          u = s[1],
          c = e[1],
          d = c[0],
          f = c[1];
        return [_a(r, l, u, i), _a(o, d, f, a)]
      }

      function os(e, t, n) {
        var r = e.state,
          o = t.timeStamp,
          i = t.type,
          a = r.values;
        return {
          _lastEventType: i,
          event: t,
          timeStamp: o,
          elapsedTime: n ? 0 : o - r.startTime,
          previous: a
        }
      }

      function is(e, t, n, r) {
        var o = e.state,
          i = e.config,
          a = e.stateKey,
          s = e.args,
          l = e.transform,
          u = o.offset,
          c = n.timeStamp,
          d = i.initial,
          f = i.bounds,
          h = va(l(i.threshold), l([0, 0])).map(Math.abs),
          p = Pa({}, Qa()[a], {
            _active: !0,
            args: s,
            values: t,
            initial: null != r ? r : t,
            _threshold: h,
            offset: u,
            lastOffset: u,
            startTime: c
          });
        return Pa({}, p, {
          _initial: Da(d, p),
          _bounds: Da(f, p)
        })
      }
      var as = function(e) {
        var t = this;
        this.classes = e, this.pointerIds = new Set, this.touchIds = new Set, this.supportsTouchEvents = Ia(), this.supportsGestureEvents = function() {
          try {
            return "constructor" in GestureEvent
          } catch (e) {
            return !1
          }
        }(), this.bind = function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          for (var o, i = {}, a = Oa(t.classes); !(o = a()).done;) new(0, o.value)(t, n).addBindings(i);
          var s = function(e) {
            ds(i, e, (function(r) {
              return t.nativeRefs[e](Pa({}, t.state.shared, {
                event: r,
                args: n
              }))
            }))
          };
          for (var l in t.nativeRefs) s(l);
          return t.config.domTarget ? function(e, t) {
            var n = e.config,
              r = e.domListeners,
              o = cs(n);
            if (!o) throw new Error("domTarget must be defined");
            var i = n.eventOptions;
            hs(o, us(r), i);
            for (var a = 0, s = Object.entries(t); a < s.length; a++) {
              var l = s[a],
                u = l[0],
                c = l[1],
                d = u.slice(2).toLowerCase();
              r.push([d, Ma.apply(void 0, c)])
            }
            fs(o, r, i)
          }(t, i) : function(e, t) {
            for (var n = {}, r = e.config.eventOptions.capture ? "Capture" : "", o = 0, i = Object.entries(t); o < i.length; o++) {
              var a = i[o],
                s = a[0],
                l = a[1],
                u = Array.isArray(l) ? l : [l];
              n[s + r] = Ma.apply(void 0, u)
            }
            return n
          }(t, i)
        }, this.effect = function() {
          return t.config.domTarget && t.bind(), t.clean
        }, this.clean = function() {
          var e = cs(t.config),
            n = t.config.eventOptions;
          e && hs(e, us(t.domListeners), n), Object.values(t.timeouts).forEach(clearTimeout),
            function(e) {
              var t = e.config,
                n = t.window,
                r = t.eventOptions,
                o = e.windowListeners;
              if (n) {
                for (var i in o) hs(n, o[i], r);
                e.windowListeners = {}
              }
            }(t)
        }, this.classes = e, this.state = Qa(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}
      };

      function ss(e, t) {
        "pointerId" in t ? e.pointerIds.add(t.pointerId) : e.touchIds = new Set(Aa(t))
      }

      function ls(e, t) {
        "pointerId" in t ? e.pointerIds.delete(t.pointerId) : Aa(t).forEach((function(t) {
          return e.touchIds.delete(t)
        }))
      }

      function us(e) {
        return void 0 === e && (e = []), e.splice(0, e.length)
      }

      function cs(e) {
        var t = e.domTarget;
        return t && "current" in t ? t.current : t
      }

      function ds(e, t, n) {
        e[t] || (e[t] = []), e[t].push(n)
      }

      function fs(e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        for (var r, o = Oa(t); !(r = o()).done;) {
          var i = r.value,
            a = i[0],
            s = i[1];
          e.addEventListener(a, s, n)
        }
      }

      function hs(e, t, n) {
        void 0 === t && (t = []), void 0 === n && (n = {});
        for (var r, o = Oa(t); !(r = o()).done;) {
          var i = r.value,
            a = i[0],
            s = i[1];
          e.removeEventListener(a, s, n)
        }
      }

      function ps() {}
      var ms = function(e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        Ca(t, e);
        var n = t.prototype;
        return n.getInternalMovement = function(e, t) {
          return va(e, t.initial)
        }, n.checkIntentionality = function(e, t) {
          if (!1 === e[0] && !1 === e[1]) return {
            _intentional: e,
            axis: this.state.axis
          };
          var n = t.map(Math.abs),
            r = n[0],
            o = n[1],
            i = this.state.axis || (r > o ? "x" : r < o ? "y" : void 0);
          return this.config.axis || this.config.lockDirection ? i ? this.config.axis && i !== this.config.axis ? {
            _intentional: e,
            _blocked: !0,
            axis: i
          } : (e["x" === i ? 1 : 0] = !1, {
            _intentional: e,
            _blocked: !1,
            axis: i
          }) : {
            _intentional: [!1, !1],
            _blocked: !1,
            axis: i
          } : {
            _intentional: e,
            _blocked: !1,
            axis: i
          }
        }, n.getKinematics = function(e, t) {
          var n = this.getMovement(e);
          if (!n._blocked) {
            var r = t.timeStamp - this.state.timeStamp;
            Object.assign(n, ba(n.movement, n.delta, r))
          }
          return n
        }, n.mapStateValues = function(e) {
          return {
            xy: e.values,
            vxvy: e.velocities
          }
        }, t
      }(ts);

      function vs(e) {
        "persist" in e && "function" == typeof e.persist && e.persist()
      }
      var gs = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "dragging", t.stateKey = "drag", t.setPointerCapture = function(e) {
              if (!t.config.useTouch && !document.pointerLockElement) {
                var n = e.target,
                  r = e.pointerId;
                n && "setPointerCapture" in n && n.setPointerCapture(r), t.updateGestureState({
                  _dragTarget: n,
                  _dragPointerId: r
                })
              }
            }, t.releasePointerCapture = function() {
              if (!t.config.useTouch && !document.pointerLockElement) {
                var e = t.state,
                  n = e._dragTarget,
                  r = e._dragPointerId;
                if (r && n && "releasePointerCapture" in n && (!("hasPointerCapture" in n) || n.hasPointerCapture(r))) try {
                  n.releasePointerCapture(r)
                } catch (e) {}
              }
            }, t.preventScroll = function(e) {
              t.state._dragPreventScroll && e.cancelable && e.preventDefault()
            }, t.getEventId = function(e) {
              return t.config.useTouch ? e.changedTouches[0].identifier : e.pointerId
            }, t.isValidEvent = function(e) {
              return t.state._pointerId === t.getEventId(e)
            }, t.shouldPreventWindowScrollY = t.config.experimental_preventWindowScrollY && t.controller.supportsTouchEvents, t.setUpWindowScrollDetection = function(e) {
              vs(e),
                function(e, t, n, r) {
                  var o = e.config,
                    i = e.windowListeners;
                  void 0 === n && (n = []), void 0 === r && (r = o.eventOptions), o.window && (hs(o.window, i[t], r), fs(o.window, i[t] = n, r))
                }(t.controller, t.stateKey, [
                  ["touchmove", t.preventScroll],
                  ["touchend", t.clean.bind(xa(t))],
                  ["touchcancel", t.clean.bind(xa(t))]
                ], {
                  passive: !1
                }), t.setTimeout(t.startDrag.bind(xa(t)), 250, e)
            }, t.setUpDelayedDragTrigger = function(e) {
              t.state._dragDelayed = !0, vs(e), t.setTimeout(t.startDrag.bind(xa(t)), t.config.delay, e)
            }, t.setStartState = function(e) {
              var n = Fa(e, t.transform);
              t.updateSharedState(Ha(e)), t.updateGestureState(Pa({}, is(xa(t), n, e), os(xa(t), e, !0), {
                _pointerId: t.getEventId(e)
              })), t.updateGestureState(t.getMovement(n))
            }, t.onDragStart = function(e) {
              ss(t.controller, e), t.enabled && !t.state._active && (t.setStartState(e), t.setPointerCapture(e), t.shouldPreventWindowScrollY ? t.setUpWindowScrollDetection(e) : t.config.delay > 0 ? t.setUpDelayedDragTrigger(e) : t.startDrag(e, !0))
            }, t.onDragChange = function(e) {
              if (!t.state.canceled && t.state._active && t.isValidEvent(e) && (t.state._lastEventType !== e.type || e.timeStamp !== t.state.timeStamp)) {
                var n;
                if (document.pointerLockElement) {
                  var r = e.movementX,
                    o = e.movementY;
                  n = ma(t.transform([r, o]), t.state.values)
                } else n = Fa(e, t.transform);
                var i = t.getKinematics(n, e);
                if (!t.state._dragStarted) {
                  if (t.state._dragDelayed) return void t.startDrag(e);
                  if (!t.shouldPreventWindowScrollY) return;
                  if (t.state._dragPreventScroll || !i.axis) return;
                  if ("x" !== i.axis) return void(t.state._active = !1);
                  t.startDrag(e)
                }
                var a = Ha(e);
                t.updateSharedState(a);
                var s = os(xa(t), e),
                  l = ga(i._movement),
                  u = t.state._dragIsTap;
                u && l >= 3 && (u = !1), t.updateGestureState(Pa({}, s, i, {
                  _dragIsTap: u
                })), t.fireGestureHandler()
              }
            }, t.onDragEnd = function(e) {
              if (ls(t.controller, e), t.isValidEvent(e) && (t.clean(), t.state._active)) {
                t.state._active = !1;
                var n = t.state._dragIsTap,
                  r = t.state.velocities,
                  o = r[0],
                  i = r[1],
                  a = t.state.movement,
                  s = a[0],
                  l = a[1],
                  u = t.state._intentional,
                  c = u[0],
                  d = u[1],
                  f = t.config.swipeVelocity,
                  h = f[0],
                  p = f[1],
                  m = t.config.swipeDistance,
                  v = m[0],
                  g = m[1],
                  y = t.config.swipeDuration,
                  b = Pa({}, os(xa(t), e), t.getMovement(t.state.values)),
                  w = [0, 0];
                b.elapsedTime < y && (!1 !== c && Math.abs(o) > h && Math.abs(s) > v && (w[0] = wa(o)), !1 !== d && Math.abs(i) > p && Math.abs(l) > g && (w[1] = wa(i))), t.updateSharedState({
                  buttons: 0
                }), t.updateGestureState(Pa({}, b, {
                  tap: n,
                  swipe: w
                })), t.fireGestureHandler(t.config.filterTaps && !0 === n)
              }
            }, t.clean = function() {
              e.prototype.clean.call(xa(t)), t.state._dragStarted = !1, t.releasePointerCapture(),
                function(e, t, n) {
                  var r = e.config,
                    o = e.windowListeners;
                  void 0 === n && (n = r.eventOptions), r.window && (hs(r.window, o[t], n), delete o[t])
                }(t.controller, t.stateKey)
            }, t.onCancel = function() {
              t.state.canceled || (t.updateGestureState({
                canceled: !0,
                _active: !1
              }), t.updateSharedState({
                buttons: 0
              }), setTimeout((function() {
                return t.fireGestureHandler()
              }), 0))
            }, t.onClick = function(e) {
              t.state._dragIsTap || e.stopPropagation()
            }, t
          }
          Ca(t, e);
          var n = t.prototype;
          return n.startDrag = function(e, t) {
            void 0 === t && (t = !1), this.state._active && !this.state._dragStarted && (t || this.setStartState(e), this.updateGestureState({
              _dragStarted: !0,
              _dragPreventScroll: !0,
              cancel: this.onCancel
            }), this.clearTimeout(), this.fireGestureHandler())
          }, n.addBindings = function(e) {
            this.config.useTouch ? (ds(e, "onTouchStart", this.onDragStart), ds(e, "onTouchMove", this.onDragChange), ds(e, "onTouchEnd", this.onDragEnd), ds(e, "onTouchCancel", this.onDragEnd)) : (ds(e, "onPointerDown", this.onDragStart), ds(e, "onPointerMove", this.onDragChange), ds(e, "onPointerUp", this.onDragEnd), ds(e, "onPointerCancel", this.onDragEnd)), this.config.filterTaps && ds(e, this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture", this.onClick)
          }, t
        }(ms),
        ys = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "pinching", t.stateKey = "pinch", t.onPinchStart = function(e) {
              ss(t.controller, e);
              var n = t.controller.touchIds;
              if (t.enabled && !(t.state._active && t.state._pointerIds.every((function(e) {
                  return n.has(e)
                })) || n.size < 2)) {
                var r = Array.from(n).slice(0, 2),
                  o = Ga(e, r, t.transform),
                  i = o.values,
                  a = o.origin;
                t.updateSharedState(Ha(e)), t.updateGestureState(Pa({}, is(xa(t), i, e), os(xa(t), e, !0), {
                  _pointerIds: r,
                  cancel: t.onCancel,
                  origin: a
                })), t.updateGestureState(t.getMovement(i)), t.fireGestureHandler()
              }
            }, t.onPinchChange = function(e) {
              var n = t.state,
                r = n.canceled,
                o = n._active;
              if (!r && o && e.timeStamp !== t.state.timeStamp) {
                var i = Ha(e);
                t.updateSharedState(i);
                try {
                  var a = Ga(e, t.state._pointerIds, t.transform),
                    s = a.values,
                    l = a.origin,
                    u = t.getKinematics(s, e);
                  t.updateGestureState(Pa({}, os(xa(t), e), u, {
                    origin: l
                  })), t.fireGestureHandler()
                } catch (n) {
                  t.onPinchEnd(e)
                }
              }
            }, t.onPinchEnd = function(e) {
              ls(t.controller, e);
              var n = Aa(e);
              t.state._pointerIds.every((function(e) {
                return !n.includes(e)
              })) || (t.clean(), t.state._active && (t.updateGestureState(Pa({}, os(xa(t), e), t.getMovement(t.state.values), {
                _active: !1
              })), t.fireGestureHandler()))
            }, t.onCancel = function() {
              t.state.canceled || (t.updateGestureState({
                _active: !1,
                canceled: !0
              }), setTimeout((function() {
                return t.fireGestureHandler()
              }), 0))
            }, t.onGestureStart = function(e) {
              if (t.enabled) {
                e.preventDefault();
                var n = Ua(e, t.transform);
                t.updateSharedState(Ha(e)), t.updateGestureState(Pa({}, is(xa(t), n, e), os(xa(t), e, !0), {
                  origin: [e.clientX, e.clientY],
                  cancel: t.onCancel
                })), t.updateGestureState(t.getMovement(n)), t.fireGestureHandler()
              }
            }, t.onGestureChange = function(e) {
              var n = t.state,
                r = n.canceled,
                o = n._active;
              if (!r && o) {
                e.preventDefault();
                var i = Ha(e);
                t.updateSharedState(i);
                var a = Ua(e, t.transform);
                a[0] = 260 * (a[0] - t.state.event.scale) + t.state.values[0];
                var s = t.getKinematics(a, e);
                t.updateGestureState(Pa({}, os(xa(t), e), s, {
                  origin: [e.clientX, e.clientY]
                })), t.fireGestureHandler()
              }
            }, t.onGestureEnd = function(e) {
              t.clean(), t.state._active && (t.updateGestureState(Pa({}, os(xa(t), e), t.getMovement(t.state.values), {
                _active: !1,
                origin: [e.clientX, e.clientY]
              })), t.fireGestureHandler())
            }, t.wheelShouldRun = function(e) {
              return t.enabled && e.ctrlKey
            }, t.getWheelValuesFromEvent = function(e) {
              var n = Va(e, t.transform)[1],
                r = t.state.values,
                o = r[0],
                i = r[1],
                a = 7 * -n,
                s = void 0 !== i ? i : 0;
              return {
                values: [o + a, s],
                origin: [e.clientX, e.clientY],
                delta: [a, s]
              }
            }, t.onWheel = function(e) {
              t.wheelShouldRun(e) && (t.setTimeout(t.onWheelEnd), t.state._active ? t.onWheelChange(e) : t.onWheelStart(e))
            }, t.onWheelStart = function(e) {
              var n = t.getWheelValuesFromEvent(e),
                r = n.values,
                o = n.delta,
                i = n.origin;
              e.cancelable && e.preventDefault(), t.updateSharedState(Ha(e)), t.updateGestureState(Pa({}, is(xa(t), r, e, t.state.values), os(xa(t), e, !0), {
                offset: r,
                delta: o,
                origin: i
              })), t.updateGestureState(t.getMovement(r)), t.fireGestureHandler()
            }, t.onWheelChange = function(e) {
              e.cancelable && e.preventDefault(), t.updateSharedState(Ha(e));
              var n = t.getWheelValuesFromEvent(e),
                r = n.values,
                o = n.origin,
                i = n.delta;
              t.updateGestureState(Pa({}, os(xa(t), e), t.getKinematics(r, e), {
                origin: o,
                delta: i
              })), t.fireGestureHandler()
            }, t.onWheelEnd = function() {
              t.clean(), t.state._active && (t.state._active = !1, t.updateGestureState(t.getMovement(t.state.values)), t.fireGestureHandler())
            }, t
          }
          return Ca(t, e), t.prototype.addBindings = function(e) {
            this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents ? (ds(e, "onGestureStart", this.onGestureStart), ds(e, "onGestureChange", this.onGestureChange), ds(e, "onGestureEnd", this.onGestureEnd)) : (ds(e, "onTouchStart", this.onPinchStart), ds(e, "onTouchMove", this.onPinchChange), ds(e, "onTouchEnd", this.onPinchEnd), ds(e, "onTouchCancel", this.onPinchEnd), ds(e, "onWheel", this.onWheel))
          }, t
        }(function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          Ca(t, e);
          var n = t.prototype;
          return n.getInternalMovement = function(e, t) {
            var n = t.values[1],
              r = e[0],
              o = e[1],
              i = void 0 === o ? n : o,
              a = i - n,
              s = t.turns;
            return Math.abs(a) > 270 && (s += wa(a)), va([r, i - 360 * s], t.initial)
          }, n.getKinematics = function(e, t) {
            var n = this.getMovement(e),
              r = (e[1] - n._movement[1] - this.state.initial[1]) / 360,
              o = t.timeStamp - this.state.timeStamp;
            return Pa({
              turns: r
            }, n, function(e, t) {
              if (null == e) return {};
              var n, r, o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o
            }(ba(n.movement, n.delta, o), ["distance", "velocity"]))
          }, n.mapStateValues = function(e) {
            return {
              da: e.values,
              vdva: e.velocities
            }
          }, t
        }(ts)),
        bs = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "wheeling", t.stateKey = "wheel", t.debounced = !0, t.handleEvent = function(e) {
              if ((!e.ctrlKey || !("pinch" in t.controller.handlers)) && t.enabled) {
                t.setTimeout(t.onEnd), t.updateSharedState(Ha(e));
                var n = ma(Va(e, t.transform), t.state.values);
                if (t.state._active) t.updateGestureState(Pa({}, os(xa(t), e), t.getKinematics(n, e)));
                else {
                  t.updateGestureState(Pa({}, is(xa(t), n, e, t.state.values), os(xa(t), e, !0)));
                  var r = t.getMovement(n),
                    o = ya(r.delta);
                  t.updateGestureState(r), t.updateGestureState(o)
                }
                t.fireGestureHandler()
              }
            }, t.onEnd = function() {
              if (t.clean(), t.state._active) {
                var e = t.getMovement(t.state.values);
                t.updateGestureState(e), t.updateGestureState({
                  _active: !1,
                  velocities: [0, 0],
                  velocity: 0
                }), t.fireGestureHandler()
              }
            }, t
          }
          return Ca(t, e), t.prototype.addBindings = function(e) {
            ds(e, "onWheel", this.handleEvent)
          }, t
        }(ms),
        ws = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "moving", t.stateKey = "move", t.debounced = !0, t.onMove = function(e) {
              t.enabled && (t.setTimeout(t.onMoveEnd), t.state._active ? t.onMoveChange(e) : t.onMoveStart(e))
            }, t.onMoveStart = function(e) {
              t.updateSharedState(Ha(e));
              var n = Fa(e, t.transform);
              t.updateGestureState(Pa({}, is(xa(t), n, e), os(xa(t), e, !0))), t.updateGestureState(t.getMovement(n)), t.fireGestureHandler()
            }, t.onMoveChange = function(e) {
              t.updateSharedState(Ha(e));
              var n = Fa(e, t.transform);
              t.updateGestureState(Pa({}, os(xa(t), e), t.getKinematics(n, e))), t.fireGestureHandler()
            }, t.onMoveEnd = function() {
              if (t.clean(), t.state._active) {
                var e = t.state.values;
                t.updateGestureState(t.getMovement(e)), t.updateGestureState({
                  velocities: [0, 0],
                  velocity: 0,
                  _active: !1
                }), t.fireGestureHandler()
              }
            }, t.hoverTransform = function() {
              return t.controller.config.hover.transform || t.controller.config.transform
            }, t.onPointerEnter = function(e) {
              if (t.controller.state.shared.hovering = !0, t.controller.config.enabled) {
                if (t.controller.config.hover.enabled) {
                  var n = Fa(e, t.hoverTransform()),
                    r = Pa({}, t.controller.state.shared, t.state, os(xa(t), e, !0), {
                      args: t.args,
                      values: n,
                      active: !0,
                      hovering: !0
                    });
                  t.controller.handlers.hover(Pa({}, r, t.mapStateValues(r)))
                }
                "move" in t.controller.handlers && t.onMoveStart(e)
              }
            }, t.onPointerLeave = function(e) {
              if (t.controller.state.shared.hovering = !1, "move" in t.controller.handlers && t.onMoveEnd(), t.controller.config.hover.enabled) {
                var n = Fa(e, t.hoverTransform()),
                  r = Pa({}, t.controller.state.shared, t.state, os(xa(t), e), {
                    args: t.args,
                    values: n,
                    active: !1
                  });
                t.controller.handlers.hover(Pa({}, r, t.mapStateValues(r)))
              }
            }, t
          }
          return Ca(t, e), t.prototype.addBindings = function(e) {
            "move" in this.controller.handlers && ds(e, "onPointerMove", this.onMove), "hover" in this.controller.handlers && (ds(e, "onPointerEnter", this.onPointerEnter), ds(e, "onPointerLeave", this.onPointerLeave))
          }, t
        }(ms),
        Es = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "scrolling", t.stateKey = "scroll", t.debounced = !0, t.handleEvent = function(e) {
              if (t.enabled) {
                t.clearTimeout(), t.setTimeout(t.onEnd);
                var n = function(e, t) {
                  void 0 === t && (t = Ba);
                  var n = e.currentTarget,
                    r = n.scrollX,
                    o = n.scrollY,
                    i = n.scrollLeft,
                    a = n.scrollTop;
                  return t([r || i || 0, o || a || 0])
                }(e, t.transform);
                if (t.updateSharedState(Ha(e)), t.state._active) t.updateGestureState(Pa({}, os(xa(t), e), t.getKinematics(n, e)));
                else {
                  t.updateGestureState(Pa({}, is(xa(t), n, e, t.state.values), os(xa(t), e, !0)));
                  var r = t.getMovement(n),
                    o = ya(r.delta);
                  t.updateGestureState(r), t.updateGestureState(o)
                }
                t.fireGestureHandler()
              }
            }, t.onEnd = function() {
              t.clean(), t.state._active && (t.updateGestureState(Pa({}, t.getMovement(t.state.values), {
                _active: !1,
                velocities: [0, 0],
                velocity: 0
              })), t.fireGestureHandler())
            }, t
          }
          return Ca(t, e), t.prototype.addBindings = function(e) {
            ds(e, "onScroll", this.handleEvent)
          }, t
        }(ms),
        _s = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Ss(e, t) {
        void 0 === t && (t = {});
        var n = function(e) {
            var t = {},
              n = {},
              r = new Set;
            for (var o in e) _s.test(o) ? (r.add(RegExp.lastMatch), n[o] = e[o]) : t[o] = e[o];
            return [n, t, r]
          }(e),
          r = n[0],
          o = n[1],
          i = n[2];
        Ja.set("drag", gs), Ja.set("hover", ws), Ja.set("move", ws), Ja.set("pinch", ys), Ja.set("scroll", Es), Ja.set("wheel", bs);
        var a = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = new Set);
            var n = e,
              r = n.drag,
              o = n.wheel,
              i = n.move,
              a = n.scroll,
              s = n.pinch,
              l = n.hover,
              u = n.eventOptions,
              c = n.window,
              d = n.transform,
              f = function(e) {
                return void 0 === e && (e = {}), ja(e, Wa)
              }({
                domTarget: n.domTarget,
                eventOptions: u,
                transform: d,
                window: c,
                enabled: n.enabled
              });
            return t.has("onDrag") && (f.drag = function(e) {
              return void 0 === e && (e = {}), ja(e, $a)
            }(r)), t.has("onWheel") && (f.wheel = Za(o)), t.has("onScroll") && (f.scroll = Za(a)), t.has("onMove") && (f.move = Za(i)), t.has("onPinch") && (f.pinch = function(e) {
              return void 0 === e && (e = {}), ja(e, Xa)
            }(s)), t.has("onHover") && (f.hover = Pa({
              enabled: !0
            }, l)), f
          }(t, i),
          l = {};
        return i.has("onDrag") && (l.drag = Ps(r, "onDrag")), i.has("onWheel") && (l.wheel = Ps(r, "onWheel")), i.has("onScroll") && (l.scroll = Ps(r, "onScroll")), i.has("onMove") && (l.move = Ps(r, "onMove")), i.has("onPinch") && (l.pinch = Ps(r, "onPinch")), i.has("onHover") && (l.hover = r.onHover),
          function(e, t, n) {
            void 0 === n && (n = {});
            var r = function(e) {
                var t = new Set;
                return e.drag && t.add(Ja.get("drag")), e.wheel && t.add(Ja.get("wheel")), e.scroll && t.add(Ja.get("scroll")), e.move && t.add(Ja.get("move")), e.pinch && t.add(Ja.get("pinch")), e.hover && t.add(Ja.get("hover")), t
              }(e),
              o = s().useMemo((function() {
                return new as(r)
              }), []);
            return o.config = t, o.handlers = e, o.nativeRefs = n, s().useEffect(o.effect, []), o.config.domTarget ? ps : o.bind
          }(l, a, o)
      }

      function Ps(e, t) {
        var n = t + "Start",
          r = t + "End";
        return function(o) {
          var i = void 0;
          return o.first && n in e && e[n](o), t in e && (i = e[t](o)), o.last && r in e && e[r](o), i
        }
      }
      const Cs = ({
        children: e,
        containerRef: t,
        contentRef: n,
        zoomLevel: o,
        position: a,
        eventHandlers: s
      }) => {
        (({
          containerRef: e,
          contentRef: t
        }) => {
          const n = e => {
            e.preventDefault(), e.nativeEvent?.preventDefault()
          };
          (0, i.useEffect)((() => (document.addEventListener("gesturestart", n), document.addEventListener("gesturechange", n), t.current?.addEventListener("dragstart", n), t.current?.addEventListener("click", n), e.current?.addEventListener("dragstart", n), e.current?.addEventListener("click", n), () => {
            document.removeEventListener("gesturestart", n), document.removeEventListener("gesturechange", n), t.current?.removeEventListener("dragstart", n), t.current?.removeEventListener("click", n), e.current?.removeEventListener("dragstart", n), e.current?.removeEventListener("click", n)
          })), [e.current, t.current])
        })({
          containerRef: t,
          contentRef: n
        }), Ss({
          onDrag: s.onDrag,
          onDragEnd: s.onDragEnd,
          onPinch: s.onPinch,
          onPinchEnd: s.onPinchEnd,
          onWheel: s.onWheel,
          onWheelEnd: s.onWheelEnd
        }, {
          enabled: !0,
          domTarget: t,
          drag: {
            filterTaps: !0
          },
          eventOptions: {
            passive: !1
          }
        });
        const l = Ct(),
          u = Vi({
            x: a[0],
            y: a[1],
            immediate: l
          }),
          c = Vi({
            scale: o / 100,
            immediate: l
          }),
          d = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
        return (0, r.jsx)("div", {
          ref: t,
          className: "foundry_148vt480",
          style: d,
          children: (0, r.jsx)(ca.div, {
            ref: n,
            className: "foundry_148vt481",
            style: {
              ...u,
              ...c,
              ...d,
              height: "100%"
            },
            children: e
          })
        })
      };
      var xs, Ts, Os, Ls = n(80226);

      function Ms(e) {
        return e.type === Ts.literal
      }

      function Rs(e) {
        return e.type === Ts.argument
      }

      function Ns(e) {
        return e.type === Ts.number
      }

      function Ds(e) {
        return e.type === Ts.date
      }

      function js(e) {
        return e.type === Ts.time
      }

      function Is(e) {
        return e.type === Ts.select
      }

      function ks(e) {
        return e.type === Ts.plural
      }

      function As(e) {
        return e.type === Ts.pound
      }

      function Hs(e) {
        return e.type === Ts.tag
      }

      function Bs(e) {
        return !(!e || "object" != typeof e || e.type !== Os.number)
      }

      function Fs(e) {
        return !(!e || "object" != typeof e || e.type !== Os.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(xs || (xs = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(Ts || (Ts = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Os || (Os = {}));
      var Gs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        Vs = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function Us(e) {
        var t = {};
        return e.replace(Vs, (function(e) {
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
      var Ks = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        zs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        qs = /^(@+)?(\+|#+)?[rs]?$/g,
        Ws = /(\*)(0+)|(#+)(0+)|(0+)/g,
        Xs = /^(0+)$/;

      function $s(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(qs, (function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        })), t
      }

      function Zs(e) {
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

      function Ys(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !Xs.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function Qs(e) {
        return Zs(e) || {}
      }

      function Js(e) {
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
              t = (0, Ls.Cl)((0, Ls.Cl)((0, Ls.Cl)({}, t), {
                notation: "scientific"
              }), o.options.reduce((function(e, t) {
                return (0, Ls.Cl)((0, Ls.Cl)({}, e), Qs(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Ls.Cl)((0, Ls.Cl)((0, Ls.Cl)({}, t), {
                notation: "engineering"
              }), o.options.reduce((function(e, t) {
                return (0, Ls.Cl)((0, Ls.Cl)({}, e), Qs(t))
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
              o.options[0].replace(Ws, (function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (Xs.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (zs.test(o.stem)) {
            if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            o.stem.replace(zs, (function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            }));
            var i = o.options[0];
            "w" === i ? t = (0, Ls.Cl)((0, Ls.Cl)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : i && (t = (0, Ls.Cl)((0, Ls.Cl)({}, t), $s(i)))
          } else if (qs.test(o.stem)) t = (0, Ls.Cl)((0, Ls.Cl)({}, t), $s(o.stem));
          else {
            var a = Zs(o.stem);
            a && (t = (0, Ls.Cl)((0, Ls.Cl)({}, t), a));
            var s = Ys(o.stem);
            s && (t = (0, Ls.Cl)((0, Ls.Cl)({}, t), s))
          }
        }
        return t
      }
      var el, tl = {
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

      function nl(e) {
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
        return "root" !== r && (n = e.maximize().region), (tl[n || ""] || tl[r || ""] || tl["".concat(r, "-001")] || tl["001"])[0]
      }
      var rl = new RegExp("^".concat(Gs.source, "*")),
        ol = new RegExp("".concat(Gs.source, "*$"));

      function il(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var al = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        sl = !!String.fromCodePoint,
        ll = !!Object.fromEntries,
        ul = !!String.prototype.codePointAt,
        cl = !!String.prototype.trimStart,
        dl = !!String.prototype.trimEnd,
        fl = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        hl = !0;
      try {
        hl = "a" === (null === (el = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === el ? void 0 : el[0])
      } catch (e) {
        hl = !1
      }
      var pl, ml = al ? function(e, t, n) {
          return e.startsWith(t, n)
        } : function(e, t, n) {
          return e.slice(n, n + t.length) === t
        },
        vl = sl ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var n, r = "", o = e.length, i = 0; o > i;) {
            if ((n = e[i++]) > 1114111) throw RangeError(n + " is not a valid code point");
            r += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
          }
          return r
        },
        gl = ll ? Object.fromEntries : function(e) {
          for (var t = {}, n = 0, r = e; n < r.length; n++) {
            var o = r[n],
              i = o[0],
              a = o[1];
            t[i] = a
          }
          return t
        },
        yl = ul ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var n = e.length;
          if (!(t < 0 || t >= n)) {
            var r, o = e.charCodeAt(t);
            return o < 55296 || o > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? o : r - 56320 + (o - 55296 << 10) + 65536
          }
        },
        bl = cl ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(rl, "")
        },
        wl = dl ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(ol, "")
        };

      function El(e, t) {
        return new RegExp(e, t)
      }
      if (hl) {
        var _l = El("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        pl = function(e, t) {
          var n;
          return _l.lastIndex = t, null !== (n = _l.exec(e)[1]) && void 0 !== n ? n : ""
        }
      } else pl = function(e, t) {
        for (var n = [];;) {
          var r = yl(e, t);
          if (void 0 === r || Cl(r) || xl(r)) break;
          n.push(r), t += r >= 65536 ? 2 : 1
        }
        return vl.apply(void 0, n)
      };
      var Sl = function() {
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
                  return this.error(xs.UNMATCHED_CLOSING_TAG, il(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Pl(this.peek() || 0)) {
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
                  type: Ts.pound,
                  location: il(a, this.clonePosition())
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
              type: Ts.literal,
              value: "<".concat(r, "/>"),
              location: il(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Pl(this.char())) return this.error(xs.INVALID_TAG, il(a, this.clonePosition()));
              var s = this.clonePosition();
              return r !== this.parseTagName() ? this.error(xs.UNMATCHED_CLOSING_TAG, il(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: Ts.tag,
                  value: r,
                  children: i,
                  location: il(n, this.clonePosition())
                },
                err: null
              } : this.error(xs.INVALID_TAG, il(a, this.clonePosition())))
            }
            return this.error(xs.UNCLOSED_TAG, il(n, this.clonePosition()))
          }
          return this.error(xs.INVALID_TAG, il(n, this.clonePosition()))
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
          var s = il(n, this.clonePosition());
          return {
            val: {
              type: Ts.literal,
              value: r,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Pl(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
          return vl.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), vl(n))
        }, e.prototype.parseArgument = function(e, t) {
          var n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(xs.EMPTY_ARGUMENT, il(n, this.clonePosition()));
          var r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(xs.MALFORMED_ARGUMENT, il(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: Ts.argument,
                  value: r,
                  location: il(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, il(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(xs.MALFORMED_ARGUMENT, il(n, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            n = pl(this.message, t),
            r = t + n.length;
          return this.bumpTo(r), {
            value: n,
            location: il(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, n, r) {
          var o, i = this.clonePosition(),
            a = this.parseIdentifierIfPossible().value,
            s = this.clonePosition();
          switch (a) {
            case "":
              return this.error(xs.EXPECT_ARGUMENT_TYPE, il(i, s));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var l = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var u = this.clonePosition();
                if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
                if (0 === (h = wl(g.val)).length) return this.error(xs.EXPECT_ARGUMENT_STYLE, il(this.clonePosition(), this.clonePosition()));
                l = {
                  style: h,
                  styleLocation: il(u, this.clonePosition())
                }
              }
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var c = il(r, this.clonePosition());
              if (l && ml(null == l ? void 0 : l.style, "::", 0)) {
                var d = bl(l.style.slice(2));
                if ("number" === a) return (g = this.parseNumberSkeletonFromString(d, l.styleLocation)).err ? g : {
                  val: {
                    type: Ts.number,
                    value: n,
                    location: c,
                    style: g.val
                  },
                  err: null
                };
                if (0 === d.length) return this.error(xs.EXPECT_DATE_TIME_SKELETON, c);
                var f = d;
                this.locale && (f = function(e, t) {
                  for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charAt(r);
                    if ("j" === o) {
                      for (var i = 0; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                      var a = 1 + (1 & i),
                        s = i < 2 ? 1 : 3 + (i >> 1),
                        l = nl(t);
                      for ("H" != l && "k" != l || (s = 0); s-- > 0;) n += "a";
                      for (; a-- > 0;) n = l + n
                    } else n += "J" === o ? "H" : o
                  }
                  return n
                }(d, this.locale));
                var h = {
                  type: Os.dateTime,
                  pattern: f,
                  location: l.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? Us(f) : {}
                };
                return {
                  val: {
                    type: "date" === a ? Ts.date : Ts.time,
                    value: n,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === a ? Ts.number : "date" === a ? Ts.date : Ts.time,
                  value: n,
                  location: c,
                  style: null !== (o = null == l ? void 0 : l.style) && void 0 !== o ? o : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var p = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(xs.EXPECT_SELECT_ARGUMENT_OPTIONS, il(p, (0, Ls.Cl)({}, p)));
              this.bumpSpace();
              var m = this.parseIdentifierIfPossible(),
                v = 0;
              if ("select" !== a && "offset" === m.value) {
                if (!this.bumpIf(":")) return this.error(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, il(this.clonePosition(), this.clonePosition()));
                var g;
                if (this.bumpSpace(), (g = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xs.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
                this.bumpSpace(), m = this.parseIdentifierIfPossible(), v = g.val
              }
              var y, b = this.tryParsePluralOrSelectOptions(e, a, t, m);
              if (b.err) return b;
              if ((y = this.tryParseArgumentClose(r)).err) return y;
              var w = il(r, this.clonePosition());
              return "select" === a ? {
                val: {
                  type: Ts.select,
                  value: n,
                  options: gl(b.val),
                  location: w
                },
                err: null
              } : {
                val: {
                  type: Ts.plural,
                  value: n,
                  options: gl(b.val),
                  offset: v,
                  pluralType: "plural" === a ? "cardinal" : "ordinal",
                  location: w
                },
                err: null
              };
            default:
              return this.error(xs.INVALID_ARGUMENT_TYPE, il(i, s))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(xs.EXPECT_ARGUMENT_CLOSING_BRACE, il(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var n = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(xs.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, il(n, this.clonePosition()));
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
              for (var t = [], n = 0, r = e.split(Ks).filter((function(e) {
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
            return this.error(xs.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Os.number,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? Js(n) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
          for (var o, i = !1, a = [], s = new Set, l = r.value, u = r.location;;) {
            if (0 === l.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var d = this.tryParseDecimalInteger(xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, xs.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (d.err) return d;
              u = il(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset())
            }
            if (s.has(l)) return this.error("select" === t ? xs.DUPLICATE_SELECT_ARGUMENT_SELECTOR : xs.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, u);
            "other" === l && (i = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, il(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, n);
            if (h.err) return h;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            a.push([l, {
              value: h.val,
              location: il(f, this.clonePosition())
            }]), s.add(l), this.bumpSpace(), l = (o = this.parseIdentifierIfPossible()).value, u = o.location
          }
          return 0 === a.length ? this.error("select" === t ? xs.EXPECT_SELECT_ARGUMENT_SELECTOR : xs.EXPECT_PLURAL_ARGUMENT_SELECTOR, il(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(xs.MISSING_OTHER_CLAUSE, il(this.clonePosition(), this.clonePosition())) : {
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
          var s = il(r, this.clonePosition());
          return o ? fl(i *= n) ? {
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
          var t = yl(this.message, e);
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
          if (ml(this.message, e, this.offset())) {
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
          for (; !this.isEOF() && Cl(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != n ? n : null
        }, e
      }();

      function Pl(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Cl(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function xl(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function Tl(e) {
        e.forEach((function(e) {
          if (delete e.location, Is(e) || ks(e))
            for (var t in e.options) delete e.options[t].location, Tl(e.options[t].value);
          else Ns(e) && Bs(e.style) || (Ds(e) || js(e)) && Fs(e.style) ? delete e.style.location : Hs(e) && Tl(e.children)
        }))
      }

      function Ol(e, t) {
        void 0 === t && (t = {}), t = (0, Ls.Cl)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var n = new Sl(e, t).parse();
        if (n.err) {
          var r = SyntaxError(xs[n.err.kind]);
          throw r.location = n.err.location, r.originalMessage = n.err.message, r
        }
        return (null == t ? void 0 : t.captureLocation) || Tl(n.val), n.val
      }
      var Ll, Ml = n(60903);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Ll || (Ll = {}));
      var Rl, Nl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return o.code = n, o.originalMessage = r, o
          }
          return (0, Ls.C6)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        Dl = function(e) {
          function t(t, n, r, o) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(n, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Ll.INVALID_VALUE, o) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Nl),
        jl = function(e) {
          function t(t, n, r) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(n), Ll.INVALID_VALUE, r) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Nl),
        Il = function(e) {
          function t(t, n) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(n, '"'), Ll.MISSING_VALUE, n) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Nl);

      function kl(e) {
        return "function" == typeof e
      }

      function Al(e, t, n, r, o, i, a) {
        if (1 === e.length && Ms(e[0])) return [{
          type: Rl.literal,
          value: e[0].value
        }];
        for (var s = [], l = 0, u = e; l < u.length; l++) {
          var c = u[l];
          if (Ms(c)) s.push({
            type: Rl.literal,
            value: c.value
          });
          else if (As(c)) "number" == typeof i && s.push({
            type: Rl.literal,
            value: n.getNumberFormat(t).format(i)
          });
          else {
            var d = c.value;
            if (!o || !(d in o)) throw new Il(d, a);
            var f = o[d];
            if (Rs(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), s.push({
              type: "string" == typeof f ? Rl.literal : Rl.object,
              value: f
            });
            else if (Ds(c)) {
              var h = "string" == typeof c.style ? r.date[c.style] : Fs(c.style) ? c.style.parsedOptions : void 0;
              s.push({
                type: Rl.literal,
                value: n.getDateTimeFormat(t, h).format(f)
              })
            } else if (js(c)) h = "string" == typeof c.style ? r.time[c.style] : Fs(c.style) ? c.style.parsedOptions : r.time.medium, s.push({
              type: Rl.literal,
              value: n.getDateTimeFormat(t, h).format(f)
            });
            else if (Ns(c))(h = "string" == typeof c.style ? r.number[c.style] : Bs(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), s.push({
              type: Rl.literal,
              value: n.getNumberFormat(t, h).format(f)
            });
            else {
              if (Hs(c)) {
                var p = c.children,
                  m = c.value,
                  v = o[m];
                if (!kl(v)) throw new jl(m, "function", a);
                var g = v(Al(p, t, n, r, o, i).map((function(e) {
                  return e.value
                })));
                Array.isArray(g) || (g = [g]), s.push.apply(s, g.map((function(e) {
                  return {
                    type: "string" == typeof e ? Rl.literal : Rl.object,
                    value: e
                  }
                })))
              }
              if (Is(c)) {
                if (!(y = c.options[f] || c.options.other)) throw new Dl(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Al(y.value, t, n, r, o))
              } else if (ks(c)) {
                var y;
                if (!(y = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Nl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ll.MISSING_INTL_API, a);
                  var b = n.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  y = c.options[b] || c.options.other
                }
                if (!y) throw new Dl(c.value, f, Object.keys(c.options), a);
                s.push.apply(s, Al(y.value, t, n, r, o, f - (c.offset || 0)))
              }
            }
          }
        }
        return (w = s).length < 2 ? w : w.reduce((function(e, t) {
          var n = e[e.length - 1];
          return n && n.type === Rl.literal && t.type === Rl.literal ? n.value += t.value : e.push(t), e
        }), []);
        var w
      }

      function Hl(e) {
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
      }(Rl || (Rl = {}));
      var Bl, Fl = function() {
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
                return e.length && t.type === Rl.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return n.length <= 1 ? n[0] || "" : n
            }, this.formatToParts = function(e) {
              return Al(l.ast, l.locales, l.formatters, l.formats, e, void 0, l.message)
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
              c = (u.formatters, (0, Ls.Tt)(u, ["formatters"]));
            this.ast = e.__parse(t, (0, Ls.Cl)((0, Ls.Cl)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Ls.Cl)((0, Ls.Cl)((0, Ls.Cl)({}, e || {}), t || {}), Object.keys(e).reduce((function(n, r) {
                return n[r] = (0, Ls.Cl)((0, Ls.Cl)({}, e[r]), t[r] || {}), n
              }), {})) : e
            }(a[t], s[t]), e
          }), (0, Ls.Cl)({}, a)) : a), this.formatters = o && o.formatters || (void 0 === (i = this.formatterCache) && (i = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, Ml.B)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
            }), {
              cache: Hl(i.number),
              strategy: Ml.W.variadic
            }),
            getDateTimeFormat: (0, Ml.B)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
            }), {
              cache: Hl(i.dateTime),
              strategy: Ml.W.variadic
            }),
            getPluralRules: (0, Ml.B)((function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
            }), {
              cache: Hl(i.pluralRules),
              strategy: Ml.W.variadic
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
        }, e.__parse = Ol, e.formats = {
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
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(Bl || (Bl = {}));
      var Gl = function(e) {
          function t(n, r, o) {
            var i = this,
              a = o ? o instanceof Error ? o : new Error(String(o)) : void 0;
            return (i = e.call(this, "[@formatjs/intl Error ".concat(n, "] ").concat(r, "\n").concat(a ? "\n".concat(a.message, "\n").concat(a.stack) : "")) || this).code = n, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, t), i
          }
          return (0, Ls.C6)(t, e), t
        }(Error),
        Vl = function(e) {
          function t(t, n) {
            return e.call(this, Bl.UNSUPPORTED_FORMATTER, t, n) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Gl),
        Ul = function(e) {
          function t(t, n) {
            return e.call(this, Bl.INVALID_CONFIG, t, n) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Gl),
        Kl = function(e) {
          function t(t, n) {
            return e.call(this, Bl.MISSING_DATA, t, n) || this
          }
          return (0, Ls.C6)(t, e), t
        }(Gl),
        zl = function(e) {
          function t(t, n, r) {
            var o = e.call(this, Bl.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(n, "\n"), r) || this;
            return o.locale = n, o
          }
          return (0, Ls.C6)(t, e), t
        }(Gl),
        ql = function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, "".concat(t, "\nMessageID: ").concat(null == r ? void 0 : r.id, "\nDefault Message: ").concat(null == r ? void 0 : r.defaultMessage, "\nDescription: ").concat(null == r ? void 0 : r.description, "\n"), n, o) || this;
            return i.descriptor = r, i.locale = n, i
          }
          return (0, Ls.C6)(t, e), t
        }(zl),
        Wl = function(e) {
          function t(t, n) {
            var r = e.call(this, Bl.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(n, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return r.descriptor = t, r
          }
          return (0, Ls.C6)(t, e), t
        }(Gl);

      function Xl(e, t, n) {
        return void 0 === n && (n = {}), t.reduce((function(t, r) {
          return r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t
        }), {})
      }
      var $l = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function Zl(e) {
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

      function Yl(e, t, n, r) {
        var o, i = e && e[t];
        if (i && (o = i[n]), o) return o;
        r(new Vl("No ".concat(t, " format named: ").concat(n)))
      }

      function Ql(e, t, n) {
        if (void 0 === n && (n = Error), !e) throw new n(t)
      }

      function Jl(e) {
        Ql(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var eu = (0, Ls.Cl)((0, Ls.Cl)({}, $l), {
        textComponent: i.Fragment
      });
      n(3536);
      var tu = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? i.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = i.createContext(null)),
        nu = (tu.Consumer, tu.Provider),
        ru = tu;

      function ou(e, t) {
        return Object.keys(e).reduce((function(n, r) {
          return n[r] = (0, Ls.Cl)({
            timeZone: t
          }, e[r]), n
        }), {})
      }

      function iu(e, t) {
        return Object.keys((0, Ls.Cl)((0, Ls.Cl)({}, e), t)).reduce((function(n, r) {
          return n[r] = (0, Ls.Cl)((0, Ls.Cl)({}, e[r] || {}), t[r] || {}), n
        }), {})
      }

      function au(e, t) {
        if (!t) return e;
        var n = Fl.formats;
        return (0, Ls.Cl)((0, Ls.Cl)((0, Ls.Cl)({}, n), e), {
          date: iu(ou(n.date, t), ou(e.date || {}, t)),
          time: iu(ou(n.time, t), ou(e.time || {}, t))
        })
      }
      var su = function(e, t, n, r, o) {
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
          Ql(!!p, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var v = String(p),
            g = s && Object.prototype.hasOwnProperty.call(s, v) && s[v];
          if (Array.isArray(g) && 1 === g.length && g[0].type === Ts.literal) return g[0].value;
          if (!r && g && "string" == typeof g && !h) return g.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (r = (0, Ls.Cl)((0, Ls.Cl)({}, h), r || {}), a = au(a, f), u = au(u, f), !g) {
            if (!1 === c && "" === g) return g;
            if ((!m || i && i.toLowerCase() !== l.toLowerCase()) && d(new Wl(n, i)), m) try {
              return t.getMessageFormat(m, l, u, o).format(r)
            } catch (e) {
              return d(new ql('Error formatting default message for: "'.concat(v, '", rendering default message verbatim'), i, n, e)), "string" == typeof m ? m : v
            }
            return v
          }
          try {
            return t.getMessageFormat(g, i, a, (0, Ls.Cl)({
              formatters: t
            }, o || {})).format(r)
          } catch (e) {
            d(new ql('Error formatting message: "'.concat(v, '", using ').concat(m ? "default message" : "id", " as fallback."), i, n, e))
          }
          if (m) try {
            return t.getMessageFormat(m, l, u, o).format(r)
          } catch (e) {
            d(new ql('Error formatting the default message for: "'.concat(v, '", rendering message verbatim'), i, n, e))
          }
          return "string" == typeof g ? g : "string" == typeof m ? m : v
        },
        lu = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function uu(e, t, n) {
        var r = e.locale,
          o = e.formats,
          i = e.onError;
        void 0 === n && (n = {});
        var a = n.format,
          s = a && Yl(o, "number", a, i) || {};
        return t(r, Xl(n, lu, s))
      }

      function cu(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return uu(e, t, r).format(n)
        } catch (t) {
          e.onError(new zl("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function du(e, t, n, r) {
        void 0 === r && (r = {});
        try {
          return uu(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new zl("Error formatting number.", e.locale, t))
        }
        return []
      }
      var fu = ["numeric", "style"];

      function hu(e, t, n, r, o) {
        void 0 === o && (o = {}), r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new Nl('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Ll.MISSING_INTL_API));
        try {
          return function(e, t, n) {
            var r = e.locale,
              o = e.formats,
              i = e.onError;
            void 0 === n && (n = {});
            var a = n.format,
              s = !!a && Yl(o, "relative", a, i) || {};
            return t(r, Xl(n, fu, s))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new zl("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      var pu = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function mu(e, t, n, r) {
        var o = e.locale,
          i = e.formats,
          a = e.onError,
          s = e.timeZone;
        void 0 === r && (r = {});
        var l = r.format,
          u = (0, Ls.Cl)((0, Ls.Cl)({}, s && {
            timeZone: s
          }), l && Yl(i, t, l, a)),
          c = Xl(r, pu, u);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, Ls.Cl)((0, Ls.Cl)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), n(o, c)
      }

      function vu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return mu(e, "date", t, a).format(s)
        } catch (t) {
          e.onError(new zl("Error formatting date.", e.locale, t))
        }
        return String(s)
      }

      function gu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return mu(e, "time", t, a).format(s)
        } catch (t) {
          e.onError(new zl("Error formatting time.", e.locale, t))
        }
        return String(s)
      }

      function yu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = n[2],
          s = void 0 === a ? {} : a,
          l = e.timeZone,
          u = e.locale,
          c = e.onError,
          d = Xl(s, pu, l ? {
            timeZone: l
          } : {});
        try {
          return t(u, d).formatRange(o, i)
        } catch (t) {
          c(new zl("Error formatting date time range.", e.locale, t))
        }
        return String(o)
      }

      function bu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return mu(e, "date", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new zl("Error formatting date.", e.locale, t))
        }
        return []
      }

      function wu(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        var o = n[0],
          i = n[1],
          a = void 0 === i ? {} : i,
          s = "string" == typeof o ? new Date(o || 0) : o;
        try {
          return mu(e, "time", t, a).formatToParts(s)
        } catch (t) {
          e.onError(new zl("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Eu = ["type"];

      function _u(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.PluralRules || i(new Nl('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Ll.MISSING_INTL_API));
        var a = Xl(r, Eu);
        try {
          return t(o, a).select(n)
        } catch (e) {
          i(new zl("Error formatting plural.", o, e))
        }
        return "other"
      }
      var Su = ["type", "style"],
        Pu = Date.now();

      function Cu(e, t, n, r) {
        void 0 === r && (r = {});
        var o = xu(e, t, n, r).reduce((function(e, t) {
          var n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }), []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function xu(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        void 0 === r && (r = {}), Intl.ListFormat || i(new Nl('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Ll.MISSING_INTL_API));
        var a = Xl(r, Su);
        try {
          var s = {},
            l = n.map((function(e, t) {
              if ("object" == typeof e) {
                var n = function(e) {
                  return "".concat(Pu, "_").concat(e, "_").concat(Pu)
                }(t);
                return s[n] = e, n
              }
              return String(e)
            }));
          return t(o, a).formatToParts(l).map((function(e) {
            return "literal" === e.type ? e : (0, Ls.Cl)((0, Ls.Cl)({}, e), {
              value: s[e.value] || e.value
            })
          }))
        } catch (e) {
          i(new zl("Error formatting list.", o, e))
        }
        return n
      }
      var Tu = ["style", "type", "fallback", "languageDisplay"];

      function Ou(e, t, n, r) {
        var o = e.locale,
          i = e.onError;
        Intl.DisplayNames || i(new Nl('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Ll.MISSING_INTL_API));
        var a = Xl(r, Tu);
        try {
          return t(o, a).of(n)
        } catch (e) {
          i(new zl("Error formatting display name.", o, e))
        }
      }

      function Lu(e, t) {
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
              o = (0, Ml.B)((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
              }), {
                cache: Zl(e.dateTime),
                strategy: Ml.W.variadic
              }),
              i = (0, Ml.B)((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
              }), {
                cache: Zl(e.number),
                strategy: Ml.W.variadic
              }),
              a = (0, Ml.B)((function() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Ls.fX)([void 0], t, !1)))
              }), {
                cache: Zl(e.pluralRules),
                strategy: Ml.W.variadic
              });
            return {
              getDateTimeFormat: o,
              getNumberFormat: i,
              getMessageFormat: (0, Ml.B)((function(e, t, n, r) {
                return new Fl(e, t, n, (0, Ls.Cl)({
                  formatters: {
                    getNumberFormat: i,
                    getDateTimeFormat: o,
                    getPluralRules: a
                  }
                }, r || {}))
              }), {
                cache: Zl(e.message),
                strategy: Ml.W.variadic
              }),
              getRelativeTimeFormat: (0, Ml.B)((function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new(t.bind.apply(t, (0, Ls.fX)([void 0], e, !1)))
              }), {
                cache: Zl(e.relativeTime),
                strategy: Ml.W.variadic
              }),
              getPluralRules: a,
              getListFormat: (0, Ml.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Ls.fX)([void 0], e, !1)))
              }), {
                cache: Zl(e.list),
                strategy: Ml.W.variadic
              }),
              getDisplayNames: (0, Ml.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Ls.fX)([void 0], e, !1)))
              }), {
                cache: Zl(e.displayNames),
                strategy: Ml.W.variadic
              })
            }
          }(t),
          r = (0, Ls.Cl)((0, Ls.Cl)({}, $l), e),
          o = r.locale,
          i = r.defaultLocale,
          a = r.onError;
        return o ? !Intl.NumberFormat.supportedLocalesOf(o).length && a ? a(new Kl('Missing locale data for locale: "'.concat(o, '" in Intl.NumberFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(o).length && a && a(new Kl('Missing locale data for locale: "'.concat(o, '" in Intl.DateTimeFormat. Using default locale: "').concat(i, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (a && a(new Ul('"locale" was not configured, using "'.concat(i, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), r.locale = r.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(r), (0, Ls.Cl)((0, Ls.Cl)({}, r), {
            formatters: n,
            formatNumber: cu.bind(null, r, n.getNumberFormat),
            formatNumberToParts: du.bind(null, r, n.getNumberFormat),
            formatRelativeTime: hu.bind(null, r, n.getRelativeTimeFormat),
            formatDate: vu.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: bu.bind(null, r, n.getDateTimeFormat),
            formatTime: gu.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: yu.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: wu.bind(null, r, n.getDateTimeFormat),
            formatPlural: _u.bind(null, r, n.getPluralRules),
            formatMessage: su.bind(null, r, n),
            $t: su.bind(null, r, n),
            formatList: Cu.bind(null, r, n.getListFormat),
            formatListToParts: xu.bind(null, r, n.getListFormat),
            formatDisplayName: Ou.bind(null, r, n.getDisplayNames)
          })
      }

      function Mu(e) {
        return e ? Object.keys(e).reduce((function(t, n) {
          var r, o = e[n];
          return t[n] = kl(o) ? (r = o, function(e) {
            return r(i.Children.toArray(e))
          }) : o, t
        }), {}) : e
      }
      var Ru = function(e, t, n, r) {
          for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
          var s = Mu(r),
            l = su.apply(void 0, (0, Ls.fX)([e, t, n, s], o, !1));
          return Array.isArray(l) ? i.Children.toArray(l) : l
        },
        Nu = function(e, t) {
          var n = e.defaultRichTextElements,
            r = (0, Ls.Tt)(e, ["defaultRichTextElements"]),
            o = Mu(n),
            i = Lu((0, Ls.Cl)((0, Ls.Cl)((0, Ls.Cl)({}, eu), r), {
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
          return (0, Ls.Cl)((0, Ls.Cl)({}, i), {
            formatMessage: Ru.bind(null, a, i.formatters),
            $t: Ru.bind(null, a, i.formatters)
          })
        };

      function Du(e) {
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
      var ju = function(e) {
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
            intl: Nu(Du(t.props), t.cache),
            prevConfig: Du(t.props)
          }, t
        }
        return (0, Ls.C6)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var n = t.prevConfig,
            r = t.cache,
            o = Du(e);
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
            intl: Nu(o, r),
            prevConfig: o
          }
        }, t.prototype.render = function() {
          return Jl(this.state.intl), i.createElement(nu, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = eu, t
      }(i.PureComponent);
      const Iu = ju;

      function ku() {
        var e = i.useContext(ru);
        return Jl(e), e
      }
      var Au, Hu;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Au || (Au = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Hu || (Hu = {}));
      var Bu = function(e) {
        var t = ku(),
          n = e.value,
          r = e.children,
          o = (0, Ls.Tt)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function Fu(e) {
        var t = function(t) {
          var n = ku(),
            r = t.value,
            o = t.children,
            i = (0, Ls.Tt)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = Hu[e], t
      }

      function Gu(e) {
        var t = function(t) {
          var n = ku(),
            r = t.value,
            o = t.children,
            a = (0, Ls.Tt)(t, ["value", "children"]),
            s = n[e](r, a);
          if ("function" == typeof o) return o(s);
          var l = n.textComponent || i.Fragment;
          return i.createElement(l, null, s)
        };
        return t.displayName = Au[e], t
      }
      Bu.displayName = "FormattedNumberParts", Bu.displayName = "FormattedNumberParts", Gu("formatDate"), Gu("formatTime"), Gu("formatNumber"), Gu("formatList"), Gu("formatDisplayName"), Fu("formatDate"), Fu("formatTime");
      const Vu = ({
          children: e,
          locale: t,
          messages: n,
          fallback: o
        }) => (0, r.jsx)(i.Suspense, {
          fallback: o || null,
          children: (0, r.jsx)(Uu, {
            locale: t,
            messages: n,
            children: e
          })
        }),
        Uu = ({
          children: e,
          locale: t,
          messages: n
        }) => {
          const o = function(e) {
            const t = e;
            if ("fulfilled" === t.status) return t.value;
            throw "rejected" === t.status ? t.reason : ("pending" === t.status || (t.status = "pending", t.then((e => {
              t.status = "fulfilled", t.value = e
            }), (e => {
              t.status = "rejected", t.reason = e
            }))), t)
          }(n?.[t] ?? n["en-US"]);
          return (0, r.jsx)(Iu, {
            locale: t,
            messages: o,
            children: e
          })
        },
        Ku = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Expand image"
        };

      function zu(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }

      function qu(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var Wu = n(98398);

      function Xu(e, t = []) {
        let n = [];
        const o = () => {
          const t = n.map((e => i.createContext(e)));
          return function(n) {
            const r = n?.[e] || t;
            return i.useMemo((() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: r
              }
            })), [n, r])
          }
        };
        return o.scopeName = e, [function(t, o) {
          const a = i.createContext(o),
            s = n.length;

          function l(t) {
            const {
              scope: n,
              children: o,
              ...l
            } = t, u = n?.[e][s] || a, c = i.useMemo((() => l), Object.values(l));
            return (0, r.jsx)(u.Provider, {
              value: c,
              children: o
            })
          }
          return n = [...n, o], l.displayName = t + "Provider", [l, function(n, r) {
            const l = r?.[e][s] || a,
              u = i.useContext(l);
            if (u) return u;
            if (void 0 !== o) return o;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, $u(o, ...t)]
      }

      function $u(...e) {
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
            return i.useMemo((() => ({
              [`__scope${t.scopeName}`]: r
            })), [r])
          }
        };
        return n.scopeName = t.scopeName, n
      }

      function Zu(e) {
        const t = i.useRef(e);
        return i.useEffect((() => {
          t.current = e
        })), i.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function Yu({
        prop: e,
        defaultProp: t,
        onChange: n = (() => {})
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = i.useState(e),
            [r] = n,
            o = i.useRef(r),
            a = Zu(t);
          return i.useEffect((() => {
            o.current !== r && (a(r), o.current = r)
          }), [r, o, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, l = Zu(n);
        return [s, i.useCallback((t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [a, e, o, l])]
      }
      var Qu = i.createContext(void 0);

      function Ju(e) {
        const t = i.useContext(Qu);
        return e || t || "ltr"
      }

      function ec(e) {
        const t = i.useRef({
          value: e,
          previous: e
        });
        return i.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var tc = Boolean(globalThis?.document) ? i.useLayoutEffect : () => {};

      function nc(e) {
        const [t, n] = i.useState(void 0);
        return tc((() => {
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
      var rc = n(22657),
        oc = n(72981);

      function ic(e) {
        const t = e + "CollectionProvider",
          [n, o] = Xu(t),
          [a, s] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          l = e => {
            const {
              scope: t,
              children: n
            } = e, o = i.useRef(null), s = i.useRef(new Map).current;
            return (0, r.jsx)(a, {
              scope: t,
              itemMap: s,
              collectionRef: o,
              children: n
            })
          };
        l.displayName = t;
        const u = e + "CollectionSlot",
          c = i.forwardRef(((e, t) => {
            const {
              scope: n,
              children: o
            } = e, i = s(u, n), a = (0, Wu.s)(t, i.collectionRef);
            return (0, r.jsx)(oc.DX, {
              ref: a,
              children: o
            })
          }));
        c.displayName = u;
        const d = e + "CollectionItemSlot",
          f = "data-radix-collection-item",
          h = i.forwardRef(((e, t) => {
            const {
              scope: n,
              children: o,
              ...a
            } = e, l = i.useRef(null), u = (0, Wu.s)(t, l), c = s(d, n);
            return i.useEffect((() => (c.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              c.itemMap.delete(l)
            }))), (0, r.jsx)(oc.DX, {
              [f]: "",
              ref: u,
              children: o
            })
          }));
        return h.displayName = d, [{
          Provider: l,
          Slot: c,
          ItemSlot: h
        }, function(t) {
          const n = s(e + "CollectionConsumer", t);
          return i.useCallback((() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${f}]`));
            return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
          }), [n.collectionRef, n.itemMap])
        }, o]
      }
      var ac = ["PageUp", "PageDown"],
        sc = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        lc = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        uc = "Slider",
        [cc, dc, fc] = ic(uc),
        [hc, pc] = Xu(uc, [fc]),
        [mc, vc] = hc(uc),
        gc = i.forwardRef(((e, t) => {
          const {
            name: n,
            min: o = 0,
            max: a = 100,
            step: s = 1,
            orientation: l = "horizontal",
            disabled: u = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: d = [o],
            value: f,
            onValueChange: h = (() => {}),
            onValueCommit: p = (() => {}),
            inverted: m = !1,
            ...v
          } = e, g = i.useRef(new Set), y = i.useRef(0), b = "horizontal" === l ? wc : Ec, [w = [], E] = Yu({
            prop: f,
            defaultProp: d,
            onChange: e => {
              const t = [...g.current];
              t[y.current]?.focus(), h(e)
            }
          }), _ = i.useRef(w);

          function S(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const r = function(e) {
                return (String(e).split(".")[1] || "").length
              }(s),
              i = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - o) / s) * s + o, r),
              l = zu(i, [o, a]);
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
                }(r, c * s)) {
                y.current = r.indexOf(l);
                const t = String(r) !== String(e);
                return t && n && p(r), t ? r : e
              }
              return e
            }))
          }
          return (0, r.jsx)(mc, {
            scope: e.__scopeSlider,
            name: n,
            disabled: u,
            min: o,
            max: a,
            valueIndexToChangeRef: y,
            thumbs: g.current,
            values: w,
            orientation: l,
            children: (0, r.jsx)(cc.Provider, {
              scope: e.__scopeSlider,
              children: (0, r.jsx)(cc.Slot, {
                scope: e.__scopeSlider,
                children: (0, r.jsx)(b, {
                  "aria-disabled": u,
                  "data-disabled": u ? "" : void 0,
                  ...v,
                  ref: t,
                  onPointerDown: qu(v.onPointerDown, (() => {
                    u || (_.current = w)
                  })),
                  min: o,
                  max: a,
                  inverted: m,
                  onSlideStart: u ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(w, e);
                    S(e, t)
                  },
                  onSlideMove: u ? void 0 : function(e) {
                    S(e, y.current)
                  },
                  onSlideEnd: u ? void 0 : function() {
                    const e = _.current[y.current];
                    w[y.current] !== e && p(w)
                  },
                  onHomeKeyDown: () => !u && S(o, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !u && S(a, w.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!u) {
                      const n = ac.includes(e.key) || e.shiftKey && sc.includes(e.key) ? 10 : 1,
                        r = y.current;
                      S(w[r] + s * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      gc.displayName = uc;
      var [yc, bc] = hc(uc, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), wc = i.forwardRef(((e, t) => {
        const {
          min: n,
          max: o,
          dir: a,
          inverted: s,
          onSlideStart: l,
          onSlideMove: u,
          onSlideEnd: c,
          onStepKeyDown: d,
          ...f
        } = e, [h, p] = i.useState(null), m = (0, Wu.s)(t, (e => p(e))), v = i.useRef(), g = Ju(a), y = "ltr" === g, b = y && !s || !y && s;

        function w(e) {
          const t = v.current || h.getBoundingClientRect(),
            r = Nc([0, t.width], b ? [n, o] : [o, n]);
          return v.current = t, r(e - t.left)
        }
        return (0, r.jsx)(yc, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, r.jsx)(_c, {
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
              const t = lc[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Ec = i.forwardRef(((e, t) => {
        const {
          min: n,
          max: o,
          inverted: a,
          onSlideStart: s,
          onSlideMove: l,
          onSlideEnd: u,
          onStepKeyDown: c,
          ...d
        } = e, f = i.useRef(null), h = (0, Wu.s)(t, f), p = i.useRef(), m = !a;

        function v(e) {
          const t = p.current || f.current.getBoundingClientRect(),
            r = Nc([0, t.height], m ? [o, n] : [n, o]);
          return p.current = t, r(e - t.top)
        }
        return (0, r.jsx)(yc, {
          scope: e.__scopeSlider,
          startEdge: m ? "bottom" : "top",
          endEdge: m ? "top" : "bottom",
          size: "height",
          direction: m ? 1 : -1,
          children: (0, r.jsx)(_c, {
            "data-orientation": "vertical",
            ...d,
            ref: h,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = v(e.clientY);
              s?.(t)
            },
            onSlideMove: e => {
              const t = v(e.clientY);
              l?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = lc[m ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), _c = i.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: o,
          onSlideMove: i,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: u,
          ...c
        } = e, d = vc(uc, n);
        return (0, r.jsx)(rc.sG.span, {
          ...c,
          ref: t,
          onKeyDown: qu(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : ac.concat(sc).includes(e.key) && (u(e), e.preventDefault())
          })),
          onPointerDown: qu(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : o(e)
          })),
          onPointerMove: qu(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && i(e)
          })),
          onPointerUp: qu(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), Sc = "SliderTrack", Pc = i.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...o
        } = e, i = vc(Sc, n);
        return (0, r.jsx)(rc.sG.span, {
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": i.orientation,
          ...o,
          ref: t
        })
      }));
      Pc.displayName = Sc;
      var Cc = "SliderRange",
        xc = i.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...o
          } = e, a = vc(Cc, n), s = bc(Cc, n), l = i.useRef(null), u = (0, Wu.s)(t, l), c = a.values.length, d = a.values.map((e => Rc(e, a.min, a.max))), f = c > 1 ? Math.min(...d) : 0, h = 100 - Math.max(...d);
          return (0, r.jsx)(rc.sG.span, {
            "data-orientation": a.orientation,
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: u,
            style: {
              ...e.style,
              [s.startEdge]: f + "%",
              [s.endEdge]: h + "%"
            }
          })
        }));
      xc.displayName = Cc;
      var Tc = "SliderThumb",
        Oc = i.forwardRef(((e, t) => {
          const n = dc(e.__scopeSlider),
            [o, a] = i.useState(null),
            s = (0, Wu.s)(t, (e => a(e))),
            l = i.useMemo((() => o ? n().findIndex((e => e.ref.current === o)) : -1), [n, o]);
          return (0, r.jsx)(Lc, {
            ...e,
            ref: s,
            index: l
          })
        })),
        Lc = i.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: o,
            name: a,
            ...s
          } = e, l = vc(Tc, n), u = bc(Tc, n), [c, d] = i.useState(null), f = (0, Wu.s)(t, (e => d(e))), h = !c || Boolean(c.closest("form")), p = nc(c), m = l.values[o], v = void 0 === m ? 0 : Rc(m, l.min, l.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(o, l.values.length), y = p?.[u.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - Nc([0, 50], [0, r])(t) * n) * n
          }(y, v, u.direction) : 0;
          return i.useEffect((() => {
            if (c) return l.thumbs.add(c), () => {
              l.thumbs.delete(c)
            }
          }), [c, l.thumbs]), (0, r.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [u.startEdge]: `calc(${v}% + ${b}px)`
            },
            children: [(0, r.jsx)(cc.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, r.jsx)(rc.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || g,
                "aria-valuemin": l.min,
                "aria-valuenow": m,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...s,
                ref: f,
                style: void 0 === m ? {
                  display: "none"
                } : e.style,
                onFocus: qu(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = o
                }))
              })
            }), h && (0, r.jsx)(Mc, {
              name: a ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              value: m
            }, o)]
          })
        }));
      Oc.displayName = Tc;
      var Mc = e => {
        const {
          value: t,
          ...n
        } = e, o = i.useRef(null), a = ec(t);
        return i.useEffect((() => {
          const e = o.current,
            n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (a !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [a, t]), (0, r.jsx)("input", {
          style: {
            display: "none"
          },
          ...n,
          ref: o,
          defaultValue: t
        })
      };

      function Rc(e, t, n) {
        return zu(100 / (n - t) * (e - t), [0, 100])
      }

      function Nc(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      var Dc = gc,
        jc = Pc,
        Ic = xc,
        kc = Oc;
      const Ac = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        Hc = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        Bc = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Fc = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Gc = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Vc = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Uc = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        Kc = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        zc = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        qc = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        Wc = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        Xc = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };

      function $c() {
        return $c = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, $c.apply(this, arguments)
      }
      var Zc = ["shift", "alt", "meta", "mod", "ctrl"],
        Yc = {
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

      function Qc(e) {
        return (Yc[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function Jc(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function ed(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return Qc(e)
        }));
        return $c({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !Zc.includes(e)
          })),
          description: n
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && rd([Qc(e.key), Qc(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && od([Qc(e.key), Qc(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        td.clear()
      }));
      var td = new Set;

      function nd(e) {
        return Array.isArray(e)
      }

      function rd(e) {
        var t = Array.isArray(e) ? e : [e];
        td.has("meta") && td.forEach((function(e) {
          return ! function(e) {
            return Zc.includes(e)
          }(e) && td.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return td.add(e.toLowerCase())
        }))
      }

      function od(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? td.clear() : t.forEach((function(e) {
          return td.delete(e.toLowerCase())
        }))
      }

      function id(e, t) {
        var n = e.target;
        void 0 === t && (t = !1);
        var r = n && n.tagName;
        return nd(t) ? Boolean(r && t && t.some((function(e) {
          return e.toLowerCase() === r.toLowerCase()
        }))) : Boolean(r && t && !0 === t)
      }
      var ad = (0, i.createContext)(void 0);

      function sd(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          o = e.children;
        return (0, r.jsx)(ad.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: o
        })
      }

      function ld(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && ld(e[r], t[r])
        }), !0) : e === t
      }
      var ud = (0, i.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        cd = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            o = e.children,
            a = (0, i.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            s = a[0],
            l = a[1],
            u = (0, i.useState)([]),
            c = u[0],
            d = u[1],
            f = (0, i.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, i.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, i.useCallback)((function(e) {
              l((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            m = (0, i.useCallback)((function(e) {
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            v = (0, i.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !ld(t, e)
                }))
              }))
            }), []);
          return (0, r.jsx)(ud.Provider, {
            value: {
              enabledScopes: s,
              hotkeys: c,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, r.jsx)(sd, {
              addHotkey: m,
              removeHotkey: v,
              children: o
            })
          })
        },
        dd = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        fd = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect;

      function hd(e, t, n, r) {
        var o = (0, i.useRef)(null),
          a = (0, i.useRef)(!1),
          s = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          l = nd(e) ? e.join(null == s ? void 0 : s.splitKey) : e,
          u = n instanceof Array ? n : r instanceof Array ? r : void 0,
          c = (0, i.useCallback)(t, null != u ? u : []),
          d = (0, i.useRef)(c);
        d.current = u ? c : t;
        var f = function(e) {
            var t = (0, i.useRef)(void 0);
            return ld(t.current, e) || (t.current = e), t.current
          }(s),
          h = (0, i.useContext)(ud).enabledScopes,
          p = (0, i.useContext)(ad);
        return fd((function() {
          if (!1 !== (null == f ? void 0 : f.enabled) && (e = h, t = null == f ? void 0 : f.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !id(e, ["input", "textarea", "select"]) || id(e, null == f ? void 0 : f.enableOnFormTags)) {
                  if (null !== o.current) {
                    var r = o.current.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== o.current && !o.current.contains(r.activeElement)) return void dd(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != f && f.enableOnContentEditable) && Jc(l, null == f ? void 0 : f.splitKey).forEach((function(n) {
                    var r, o = ed(n, null == f ? void 0 : f.combinationKey);
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
                          g = Qc(f),
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
                        return !(!c || 1 !== c.length || !c.includes(y) && !c.includes(g)) || (c ? (void 0 === o && (o = ","), (nd(r = c) ? r : r.split(o)).every((function(e) {
                          return td.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == f ? void 0 : f.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != f && null != f.ignoreEventWhen && f.ignoreEventWhen(e)) return;
                      if (t && a.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == f ? void 0 : f.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == f ? void 0 : f.enabled)) return void dd(e);
                      d.current(e, o), t || (a.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (rd(Qc(e.code)), (void 0 === (null == f ? void 0 : f.keydown) && !0 !== (null == f ? void 0 : f.keyup) || null != f && f.keydown) && n(e))
              },
              i = function(e) {
                void 0 !== e.key && (od(Qc(e.code)), a.current = !1, null != f && f.keyup && n(e, !0))
              },
              u = o.current || (null == s ? void 0 : s.document) || document;
            return u.addEventListener("keyup", i), u.addEventListener("keydown", r), p && Jc(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                return p.addHotkey(ed(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
              })),
              function() {
                u.removeEventListener("keyup", i), u.removeEventListener("keydown", r), p && Jc(l, null == f ? void 0 : f.splitKey).forEach((function(e) {
                  return p.removeHotkey(ed(e, null == f ? void 0 : f.combinationKey, null == f ? void 0 : f.description))
                }))
              }
          }
        }), [l, f, h]), o
      }

      function pd(e) {
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

      function md(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function vd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? md(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = pd(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : md(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function gd(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var yd = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        bd = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = vd(vd({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) yd(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return gd(e.variantClassNames, (e => gd(e, (e => e.split(" ")[0]))))
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
              information: "foundry_1qqcnua0 foundry_1qqcnua5"
            },
            size: {
              XS: "foundry_a5x3kh8",
              SM: "foundry_a5x3kh9",
              MD: "foundry_a5x3kha",
              LG: "foundry_a5x3khb"
            },
            fullWidth: {
              true: "foundry_a5x3khc",
              false: "foundry_a5x3khd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const wd = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Ed = (0, i.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: a,
          label: s,
          appearance: u,
          size: c = "MD",
          fullWidth: d = !1,
          onClick: f,
          ...h
        }, p) => {
          const m = Pt((0, i.useRef)(null), p),
            {
              events: v,
              others: g
            } = (0, o.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: y,
              isPressed: b
            } = sn({
              ...g,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => g.onPress?.(e) ?? f?.(e)
            }, m),
            w = (0, o.v6)({
              ...y,
              className: n
            }, {
              ...v,
              role: "button",
              "data-pressed": b,
              "data-testid": e,
              className: bd({
                appearance: u,
                size: c,
                fullWidth: d
              })
            }),
            E = oe[a],
            _ = t ? l.DX : "button",
            S = wd[c];
          return (0, r.jsx)(_, {
            ref: m,
            ...w,
            children: (0, r.jsx)(l.xV, {
              children: E && (0, r.jsx)(E, {
                label: s || "",
                size: S
              })
            })
          })
        })),
        _d = (0, i.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: n
        }, o) => (hd(e, (e => n?.(e)), [n]), (0, r.jsx)(V, {
          className: (0, Le.$)("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, r.jsx)("kbd", {
            ref: o,
            children: e
          })
        }))));
      var Sd, Pd = "dismissableLayer.update",
        Cd = i.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        xd = i.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: s,
            onInteractOutside: l,
            onDismiss: u,
            ...c
          } = e, d = i.useContext(Cd), [f, h] = i.useState(null), p = f?.ownerDocument ?? globalThis?.document, [, m] = i.useState({}), v = (0, Wu.s)(t, (e => h(e))), g = Array.from(d.layers), [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = g.indexOf(y), w = f ? g.indexOf(f) : -1, E = d.layersWithOutsidePointerEventsDisabled.size > 0, _ = w >= b, S = function(e, t = globalThis?.document) {
            const n = Zu(e),
              r = i.useRef(!1),
              o = i.useRef((() => {}));
            return i.useEffect((() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      Od("dismissableLayer.pointerDownOutside", n, i, {
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
            _ && !n && (a?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p), P = function(e, t = globalThis?.document) {
            const n = Zu(e),
              r = i.useRef(!1);
            return i.useEffect((() => {
              const e = e => {
                e.target && !r.current && Od("dismissableLayer.focusOutside", n, {
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
            [...d.branches].some((e => e.contains(t))) || (s?.(e), l?.(e), e.defaultPrevented || u?.())
          }), p);
          return function(e, t = globalThis?.document) {
            const n = Zu(e);
            i.useEffect((() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [n, t])
          }((e => {
            w === d.layers.size - 1 && (o?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
          }), p), i.useEffect((() => {
            if (f) return n && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Sd = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Td(), () => {
              n && 1 === d.layersWithOutsidePointerEventsDisabled.size && (p.body.style.pointerEvents = Sd)
            }
          }), [f, p, n, d]), i.useEffect((() => () => {
            f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Td())
          }), [f, d]), i.useEffect((() => {
            const e = () => m({});
            return document.addEventListener(Pd, e), () => document.removeEventListener(Pd, e)
          }), []), (0, r.jsx)(rc.sG.div, {
            ...c,
            ref: v,
            style: {
              pointerEvents: E ? _ ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: qu(e.onFocusCapture, P.onFocusCapture),
            onBlurCapture: qu(e.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: qu(e.onPointerDownCapture, S.onPointerDownCapture)
          })
        }));

      function Td() {
        const e = new CustomEvent(Pd);
        document.dispatchEvent(e)
      }

      function Od(e, t, n, {
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
        }), r ? (0, rc.hO)(o, i) : o.dispatchEvent(i)
      }
      xd.displayName = "DismissableLayer", i.forwardRef(((e, t) => {
        const n = i.useContext(Cd),
          o = i.useRef(null),
          a = (0, Wu.s)(t, o);
        return i.useEffect((() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }), [n.branches]), (0, r.jsx)(rc.sG.div, {
          ...e,
          ref: a
        })
      })).displayName = "DismissableLayerBranch";
      var Ld = a["useId".toString()] || (() => {}),
        Md = 0;

      function Rd(e) {
        const [t, n] = i.useState(Ld());
        return tc((() => {
          e || n((e => e ?? String(Md++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      var Nd = n(23340),
        Dd = n(31202),
        jd = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

      function Id(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; 0 != r--;)
              if (!Id(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 != r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Id(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function kd(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Ad(e, t) {
        const n = kd(e);
        return Math.round(t * n) / n
      }

      function Hd(e) {
        const t = i.useRef(e);
        return jd((() => {
          t.current = e
        })), t
      }
      var Bd = i.forwardRef(((e, t) => {
        const {
          children: n,
          width: o = 10,
          height: i = 5,
          ...a
        } = e;
        return (0, r.jsx)(rc.sG.svg, {
          ...a,
          ref: t,
          width: o,
          height: i,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild ? n : (0, r.jsx)("polygon", {
            points: "0,0 30,0 15,10"
          })
        })
      }));
      Bd.displayName = "Arrow";
      var Fd = Bd,
        Gd = "Popper",
        [Vd, Ud] = Xu(Gd),
        [Kd, zd] = Vd(Gd),
        qd = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [o, a] = i.useState(null);
          return (0, r.jsx)(Kd, {
            scope: t,
            anchor: o,
            onAnchorChange: a,
            children: n
          })
        };
      qd.displayName = Gd;
      var Wd = "PopperAnchor",
        Xd = i.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: o,
            ...a
          } = e, s = zd(Wd, n), l = i.useRef(null), u = (0, Wu.s)(t, l);
          return i.useEffect((() => {
            s.onAnchorChange(o?.current || l.current)
          })), o ? null : (0, r.jsx)(rc.sG.div, {
            ...a,
            ref: u
          })
        }));
      Xd.displayName = Wd;
      var $d = "PopperContent",
        [Zd, Yd] = Vd($d),
        Qd = i.forwardRef(((e, t) => {
          const {
            __scopePopper: n,
            side: o = "bottom",
            sideOffset: a = 0,
            align: s = "center",
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
          } = e, y = zd($d, n), [b, w] = i.useState(null), E = (0, Wu.s)(t, (e => w(e))), [_, S] = i.useState(null), P = nc(_), C = P?.width ?? 0, x = P?.height ?? 0, T = o + ("center" !== s ? "-" + s : ""), O = "number" == typeof f ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
          }, L = Array.isArray(d) ? d : [d], M = L.length > 0, R = {
            padding: O,
            boundary: L.filter(nf),
            altBoundary: M
          }, {
            refs: N,
            floatingStyles: D,
            placement: j,
            isPositioned: I,
            middlewareData: k
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: o,
              elements: {
                reference: a,
                floating: s
              } = {},
              transform: l = !0,
              whileElementsMounted: u,
              open: c
            } = e, [d, f] = i.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [h, p] = i.useState(r);
            Id(h, r) || p(r);
            const [m, v] = i.useState(null), [g, y] = i.useState(null), b = i.useCallback((e => {
              e != S.current && (S.current = e, v(e))
            }), [v]), w = i.useCallback((e => {
              e !== P.current && (P.current = e, y(e))
            }), [y]), E = a || m, _ = s || g, S = i.useRef(null), P = i.useRef(null), C = i.useRef(d), x = Hd(u), T = Hd(o), O = i.useCallback((() => {
              if (!S.current || !P.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: h
              };
              T.current && (e.platform = T.current), (0, Dd.rD)(S.current, P.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                L.current && !Id(C.current, t) && (C.current = t, Zi.flushSync((() => {
                  f(t)
                })))
              }))
            }), [h, t, n, T]);
            jd((() => {
              !1 === c && C.current.isPositioned && (C.current.isPositioned = !1, f((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [c]);
            const L = i.useRef(!1);
            jd((() => (L.current = !0, () => {
              L.current = !1
            })), []), jd((() => {
              if (E && (S.current = E), _ && (P.current = _), E && _) {
                if (x.current) return x.current(E, _, O);
                O()
              }
            }), [E, _, O, x]);
            const M = i.useMemo((() => ({
                reference: S,
                floating: P,
                setReference: b,
                setFloating: w
              })), [b, w]),
              R = i.useMemo((() => ({
                reference: E,
                floating: _
              })), [E, _]),
              N = i.useMemo((() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!R.floating) return e;
                const t = Ad(R.floating, d.x),
                  r = Ad(R.floating, d.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...kd(R.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }), [n, l, R.floating, d.x, d.y]);
            return i.useMemo((() => ({
              ...d,
              update: O,
              refs: M,
              elements: R,
              floatingStyles: N
            })), [d, O, M, R, N])
          }({
            strategy: "fixed",
            placement: T,
            whileElementsMounted: (...e) => (0, Dd.ll)(...e, {
              animationFrame: "always" === m
            }),
            elements: {
              reference: y.anchor
            },
            middleware: [(0, Nd.cY)({
              mainAxis: a + x,
              alignmentAxis: l
            }), c && (0, Nd.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === h ? (0, Nd.ER)() : void 0,
              ...R
            }), c && (0, Nd.UU)({
              ...R
            }), (0, Nd.Ej)({
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
            }), _ && (A = {
              element: _,
              padding: u
            }, {
              name: "arrow",
              options: A,
              fn(e) {
                const {
                  element: t,
                  padding: n
                } = "function" == typeof A ? A(e) : A;
                return t && (r = t, {}.hasOwnProperty.call(r, "current")) ? null != t.current ? (0, Nd.UE)({
                  element: t.current,
                  padding: n
                }).fn(e) : {} : t ? (0, Nd.UE)({
                  element: t,
                  padding: n
                }).fn(e) : {};
                var r
              }
            }), rf({
              arrowWidth: C,
              arrowHeight: x
            }), p && (0, Nd.jD)({
              strategy: "referenceHidden",
              ...R
            })]
          });
          var A;
          const [H, B] = of(j), F = Zu(v);
          tc((() => {
            I && F?.()
          }), [I, F]);
          const G = k.arrow?.x,
            V = k.arrow?.y,
            U = 0 !== k.arrow?.centerOffset,
            [K, z] = i.useState();
          return tc((() => {
            b && z(window.getComputedStyle(b).zIndex)
          }), [b]), (0, r.jsx)("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: I ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: K,
              "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
              ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, r.jsx)(Zd, {
              scope: n,
              placedSide: H,
              onArrowChange: S,
              arrowX: G,
              arrowY: V,
              shouldHideArrow: U,
              children: (0, r.jsx)(rc.sG.div, {
                "data-side": H,
                "data-align": B,
                ...g,
                ref: E,
                style: {
                  ...g.style,
                  animation: I ? void 0 : "none"
                }
              })
            })
          })
        }));
      Qd.displayName = $d;
      var Jd = "PopperArrow",
        ef = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        tf = i.forwardRef((function(e, t) {
          const {
            __scopePopper: n,
            ...o
          } = e, i = Yd(Jd, n), a = ef[i.placedSide];
          return (0, r.jsx)("span", {
            ref: i.onArrowChange,
            style: {
              position: "absolute",
              left: i.arrowX,
              top: i.arrowY,
              [a]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [i.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [i.placedSide],
              visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, r.jsx)(Fd, {
              ...o,
              ref: t,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        }));

      function nf(e) {
        return null !== e
      }
      tf.displayName = Jd;
      var rf = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: r,
            middlewareData: o
          } = t, i = 0 !== o.arrow?.centerOffset, a = i ? 0 : e.arrowWidth, s = i ? 0 : e.arrowHeight, [l, u] = of(n), c = {
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

      function of(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var af = qd,
        sf = Xd,
        lf = Qd,
        uf = tf,
        cf = i.forwardRef(((e, t) => {
          const {
            container: n,
            ...o
          } = e, [a, s] = i.useState(!1);
          tc((() => s(!0)), []);
          const l = n || a && globalThis?.document?.body;
          return l ? Zi.createPortal((0, r.jsx)(rc.sG.div, {
            ...o,
            ref: t
          }), l) : null
        }));
      cf.displayName = "Portal";
      var df = e => {
        const {
          present: t,
          children: n
        } = e, r = function(e) {
          const [t, n] = i.useState(), r = i.useRef({}), o = i.useRef(e), a = i.useRef("none"), s = e ? "mounted" : "unmounted", [l, u] = function(e, t) {
            return i.useReducer(((e, n) => t[e][n] ?? e), e)
          }(s, {
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
          return i.useEffect((() => {
            const e = ff(r.current);
            a.current = "mounted" === l ? e : "none"
          }), [l]), tc((() => {
            const t = r.current,
              n = o.current;
            if (n !== e) {
              const r = a.current,
                i = ff(t);
              u(e ? "MOUNT" : "none" === i || "none" === t?.display ? "UNMOUNT" : n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
            }
          }), [e, u]), tc((() => {
            if (t) {
              const e = e => {
                  const n = ff(r.current).includes(e.animationName);
                  e.target === t && n && Zi.flushSync((() => u("ANIMATION_END")))
                },
                n = e => {
                  e.target === t && (a.current = ff(r.current))
                };
              return t.addEventListener("animationstart", n), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", n), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            u("ANIMATION_END")
          }), [t, u]), {
            isPresent: ["mounted", "unmountSuspended"].includes(l),
            ref: i.useCallback((e => {
              e && (r.current = getComputedStyle(e)), n(e)
            }), [])
          }
        }(t), o = "function" == typeof n ? n({
          present: r.isPresent
        }) : i.Children.only(n), a = (0, Wu.s)(r.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
          return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
        }(o));
        return "function" == typeof n || r.isPresent ? i.cloneElement(o, {
          ref: a
        }) : null
      };

      function ff(e) {
        return e?.animationName || "none"
      }
      df.displayName = "Presence";
      var hf = n(2621),
        [pf, mf] = Xu("Tooltip", [Ud]),
        vf = Ud(),
        gf = "TooltipProvider",
        yf = 700,
        bf = "tooltip.open",
        [wf, Ef] = pf(gf),
        _f = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = yf,
            skipDelayDuration: o = 300,
            disableHoverableContent: a = !1,
            children: s
          } = e, [l, u] = i.useState(!0), c = i.useRef(!1), d = i.useRef(0);
          return i.useEffect((() => {
            const e = d.current;
            return () => window.clearTimeout(e)
          }), []), (0, r.jsx)(wf, {
            scope: t,
            isOpenDelayed: l,
            delayDuration: n,
            onOpen: i.useCallback((() => {
              window.clearTimeout(d.current), u(!1)
            }), []),
            onClose: i.useCallback((() => {
              window.clearTimeout(d.current), d.current = window.setTimeout((() => u(!0)), o)
            }), [o]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: i.useCallback((e => {
              c.current = e
            }), []),
            disableHoverableContent: a,
            children: s
          })
        };
      _f.displayName = gf;
      var Sf = "Tooltip",
        [Pf, Cf] = pf(Sf),
        xf = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: o,
            defaultOpen: a = !1,
            onOpenChange: s,
            disableHoverableContent: l,
            delayDuration: u
          } = e, c = Ef(Sf, e.__scopeTooltip), d = vf(t), [f, h] = i.useState(null), p = Rd(), m = i.useRef(0), v = l ?? c.disableHoverableContent, g = u ?? c.delayDuration, y = i.useRef(!1), [b = !1, w] = Yu({
            prop: o,
            defaultProp: a,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(bf))) : c.onClose(), s?.(e)
            }
          }), E = i.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), _ = i.useCallback((() => {
            window.clearTimeout(m.current), y.current = !1, w(!0)
          }), [w]), S = i.useCallback((() => {
            window.clearTimeout(m.current), w(!1)
          }), [w]), P = i.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              y.current = !0, w(!0)
            }), g)
          }), [g, w]);
          return i.useEffect((() => () => window.clearTimeout(m.current)), []), (0, r.jsx)(af, {
            ...d,
            children: (0, r.jsx)(Pf, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: E,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: i.useCallback((() => {
                c.isOpenDelayed ? P() : _()
              }), [c.isOpenDelayed, P, _]),
              onTriggerLeave: i.useCallback((() => {
                v ? S() : window.clearTimeout(m.current)
              }), [S, v]),
              onOpen: _,
              onClose: S,
              disableHoverableContent: v,
              children: n
            })
          })
        };
      xf.displayName = Sf;
      var Tf = "TooltipTrigger",
        Of = i.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...o
          } = e, a = Cf(Tf, n), s = Ef(Tf, n), l = vf(n), u = i.useRef(null), c = (0, Wu.s)(t, u, a.onTriggerChange), d = i.useRef(!1), f = i.useRef(!1), h = i.useCallback((() => d.current = !1), []);
          return i.useEffect((() => () => document.removeEventListener("pointerup", h)), [h]), (0, r.jsx)(sf, {
            asChild: !0,
            ...l,
            children: (0, r.jsx)(rc.sG.button, {
              "aria-describedby": a.open ? a.contentId : void 0,
              "data-state": a.stateAttribute,
              ...o,
              ref: c,
              onPointerMove: qu(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (f.current || s.isPointerInTransitRef.current || (a.onTriggerEnter(), f.current = !0))
              })),
              onPointerLeave: qu(e.onPointerLeave, (() => {
                a.onTriggerLeave(), f.current = !1
              })),
              onPointerDown: qu(e.onPointerDown, (() => {
                d.current = !0, document.addEventListener("pointerup", h, {
                  once: !0
                })
              })),
              onFocus: qu(e.onFocus, (() => {
                d.current || a.onOpen()
              })),
              onBlur: qu(e.onBlur, a.onClose),
              onClick: qu(e.onClick, a.onClose)
            })
          })
        }));
      Of.displayName = Tf;
      var Lf = "TooltipPortal",
        [Mf, Rf] = pf(Lf, {
          forceMount: void 0
        }),
        Nf = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: o,
            container: i
          } = e, a = Cf(Lf, t);
          return (0, r.jsx)(Mf, {
            scope: t,
            forceMount: n,
            children: (0, r.jsx)(df, {
              present: n || a.open,
              children: (0, r.jsx)(cf, {
                asChild: !0,
                container: i,
                children: o
              })
            })
          })
        };
      Nf.displayName = Lf;
      var Df = "TooltipContent",
        jf = i.forwardRef(((e, t) => {
          const n = Rf(Df, e.__scopeTooltip),
            {
              forceMount: o = n.forceMount,
              side: i = "top",
              ...a
            } = e,
            s = Cf(Df, e.__scopeTooltip);
          return (0, r.jsx)(df, {
            present: o || s.open,
            children: s.disableHoverableContent ? (0, r.jsx)(Hf, {
              side: i,
              ...a,
              ref: t
            }) : (0, r.jsx)(If, {
              side: i,
              ...a,
              ref: t
            })
          })
        })),
        If = i.forwardRef(((e, t) => {
          const n = Cf(Df, e.__scopeTooltip),
            o = Ef(Df, e.__scopeTooltip),
            a = i.useRef(null),
            s = (0, Wu.s)(t, a),
            [l, u] = i.useState(null),
            {
              trigger: c,
              onClose: d
            } = n,
            f = a.current,
            {
              onPointerInTransitChange: h
            } = o,
            p = i.useCallback((() => {
              u(null), h(!1)
            }), [h]),
            m = i.useCallback(((e, t) => {
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
          return i.useEffect((() => () => p()), [p]), i.useEffect((() => {
            if (c && f) {
              const e = e => m(e, f),
                t = e => m(e, c);
              return c.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [c, f, m, p]), i.useEffect((() => {
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
          }), [c, f, l, d, p]), (0, r.jsx)(Hf, {
            ...e,
            ref: s
          })
        })),
        [kf, Af] = pf(Sf, {
          isInside: !1
        }),
        Hf = i.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: o,
            "aria-label": a,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            ...u
          } = e, c = Cf(Df, n), d = vf(n), {
            onClose: f
          } = c;
          return i.useEffect((() => (document.addEventListener(bf, f), () => document.removeEventListener(bf, f))), [f]), i.useEffect((() => {
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
          }), [c.trigger, f]), (0, r.jsx)(xd, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, r.jsxs)(lf, {
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
              children: [(0, r.jsx)(oc.xV, {
                children: o
              }), (0, r.jsx)(kf, {
                scope: n,
                isInside: !0,
                children: (0, r.jsx)(hf.b, {
                  id: c.contentId,
                  role: "tooltip",
                  children: a || o
                })
              })]
            })
          })
        }));
      jf.displayName = Df;
      var Bf = "TooltipArrow",
        Ff = i.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...o
          } = e, i = vf(n);
          return Af(Bf, n).isInside ? null : (0, r.jsx)(uf, {
            ...i,
            ...o,
            ref: t
          })
        }));
      Ff.displayName = Bf;
      var Gf = _f,
        Vf = xf,
        Uf = Of,
        Kf = Nf,
        zf = jf,
        qf = Ff;
      const Wf = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: o = 8,
        align: a = "center",
        alignOffset: s = 0,
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
        const [S = !1, P] = Ot({
          defaultProp: m,
          prop: v,
          onChange: g
        }), C = St(S), x = Vi({
          opacity: S ? 1 : 0,
          immediate: S && !C
        }), T = "left" === n || "right" === n ? "center" : a, O = b ? {
          container: E
        } : {}, L = b ? Kf : i.Fragment, M = w ? {
          className: "foundry_h3lgaa2"
        } : {}, R = w ? qf : i.Fragment;
        return (0, r.jsx)(Gf, {
          delayDuration: y,
          children: (0, r.jsxs)(Vf, {
            open: S,
            onOpenChange: P,
            children: [(0, r.jsx)(Uf, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, r.jsx)(L, {
              ...O,
              children: (0, r.jsx)(zf, {
                asChild: !0,
                side: n,
                align: T,
                sticky: d,
                forceMount: !0,
                "aria-label": p,
                "data-testid": _,
                className: "foundry_h3lgaa0",
                sideOffset: o,
                alignOffset: s,
                onEscapeKeyDown: f,
                avoidCollisions: l,
                collisionPadding: c,
                collisionBoundary: u,
                onPointerDownOutside: h,
                children: (0, r.jsxs)(ca.div, {
                  style: x,
                  children: [(0, r.jsx)(I, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, r.jsx)(R, {
                    ...M
                  })]
                })
              })
            })]
          })
        })
      };
      var Xf = "foundry_bwy1ds1",
        $f = "foundry_bwy1dsg",
        Zf = "foundry_bwy1dsf";
      const Yf = e => {
          e.preventDefault?.()
        },
        Qf = (0, i.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: n,
          zoomIn: o,
          zoomOut: i,
          zoomTo: a,
          minZoomLevel: s,
          maxZoomLevel: l,
          canZoomIn: u,
          canZoomOut: c,
          resetZoom: d,
          caption: f,
          showDownloadButton: h,
          defaultZoomLevel: p
        }, m) => {
          const v = ku(),
            g = _t("screen and (max-width: 1024px)"),
            y = n !== p,
            b = g ? "SM" : "LG",
            w = Vi({
              opacity: y ? 1 : 0,
              immediate: Ct()
            });
          hd(["+", "=", "add", "plus"], (() => o?.()), {
            preventDefault: !0
          }), hd(["minus", "subtract"], (() => i?.()), {
            preventDefault: !0
          }), hd("r", (() => d?.()), {
            preventDefault: !0
          });
          const E = Mt() && g;
          return (0, r.jsx)(cd, {
            children: (0, r.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: m,
              children: [(0, r.jsx)(Wf, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Yf,
                content: (0, r.jsxs)("div", {
                  className: Zf,
                  children: [v.formatMessage(Ac), (0, r.jsx)(V, {
                    className: $f,
                    children: v.formatMessage(Hc, {
                      shortcut: (0, r.jsx)(_d, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, r.jsx)(Ed, {
                  size: b,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: v.formatMessage(Ac),
                  className: (0, Le.$)(Xf, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, r.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!E && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, r.jsx)(Wf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Yf,
                      content: (0, r.jsxs)("div", {
                        className: Zf,
                        children: [v.formatMessage(Bc), (0, r.jsx)(V, {
                          className: $f,
                          children: v.formatMessage(Fc, {
                            shortcut: (0, r.jsx)(_d, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, r.jsx)(Ed, {
                        size: b,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: v.formatMessage(Bc),
                        className: (0, Le.$)(Xf, "foundry_bwy1ds5"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    }), (0, r.jsxs)(Dc, {
                      className: "foundry_bwy1dsa",
                      value: [n],
                      max: l,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => a?.(e[0]),
                      children: [(0, r.jsx)(jc, {
                        className: "foundry_bwy1dsb",
                        children: (0, r.jsx)(Ic, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, r.jsx)(Wf, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: Yf,
                        content: v.formatMessage(qc, {
                          zoom: n.toFixed(0)
                        }),
                        children: (0, r.jsx)(kc, {
                          className: "foundry_bwy1dsd",
                          "aria-label": v.formatMessage(zc),
                          children: (0, r.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, r.jsx)(Wf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Yf,
                      content: (0, r.jsxs)("div", {
                        className: Zf,
                        children: [v.formatMessage(Gc), (0, r.jsx)(V, {
                          className: $f,
                          children: v.formatMessage(Vc, {
                            shortcut: (0, r.jsx)(_d, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, r.jsx)(Ed, {
                        size: b,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: v.formatMessage(Gc),
                        className: (0, Le.$)(Xf, "foundry_bwy1ds6"),
                        onPress: () => i(),
                        isDisabled: !c
                      })
                    })]
                  }), (0, r.jsx)(ca.div, {
                    style: w,
                    children: (0, r.jsx)(Wf, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Yf,
                      content: (0, r.jsxs)("div", {
                        className: Zf,
                        children: [v.formatMessage(Uc), (0, r.jsx)(V, {
                          className: $f,
                          children: v.formatMessage(Kc, {
                            shortcut: (0, r.jsx)(_d, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, r.jsx)(Ed, {
                        size: b,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: v.formatMessage(Uc),
                        className: (0, Le.$)(Xf, "foundry_bwy1ds7"),
                        onPress: d,
                        isDisabled: !y,
                        "aria-hidden": !y
                      })
                    })
                  })]
                }), h && E && (0, r.jsx)(Wf, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Yf,
                  content: v.formatMessage(Xc),
                  children: (0, r.jsx)(Ed, {
                    size: b,
                    appearance: "tertiary",
                    icon: "Download",
                    label: v.formatMessage(Wc),
                    className: Xf,
                    onPress: e
                  })
                })]
              }), (0, r.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [f && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, r.jsx)(O, {
                    asChild: "string" != typeof f,
                    children: f
                  })]
                }), h && !E && (0, r.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, r.jsx)(Wf, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Yf,
                    content: v.formatMessage(Xc),
                    children: (0, r.jsx)(Ed, {
                      size: b,
                      appearance: "tertiary",
                      icon: "Download",
                      label: v.formatMessage(Wc),
                      className: Xf,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        })),
        Jf = {
          "en-US": n.e(8425).then(n.bind(n, 8425)),
          "de-DE": n.e(6022).then(n.bind(n, 96022)),
          "es-ES": n.e(4196).then(n.bind(n, 94196)),
          "es-MX": n.e(5133).then(n.bind(n, 5133)),
          "fr-FR": n.e(1360).then(n.bind(n, 61360)),
          "it-IT": n.e(8158).then(n.bind(n, 88158)),
          "ja-JP": n.e(9113).then(n.bind(n, 89113)),
          "ko-KR": n.e(9663).then(n.bind(n, 49663)),
          "pl-PL": n.e(7764).then(n.bind(n, 27764)),
          "pt-BR": n.e(9100).then(n.bind(n, 39100)),
          "ru-RU": n.e(7426).then(n.bind(n, 67426)),
          "zh-CN": n.e(9191).then(n.bind(n, 29191)),
          "zh-TW": n.e(2723).then(n.bind(n, 22723))
        },
        eh = (e, t) => {
          const n = "more" === t ? gn.lightHc : gn.light,
            r = "more" === t ? gn.darkHc : gn.dark;
          return "dark" === e ? r : n
        };
      var th = "foundry_1a74xwb4",
        nh = "focusScope.autoFocusOnMount",
        rh = "focusScope.autoFocusOnUnmount",
        oh = {
          bubbles: !1,
          cancelable: !0
        },
        ih = i.forwardRef(((e, t) => {
          const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: a,
            onUnmountAutoFocus: s,
            ...l
          } = e, [u, c] = i.useState(null), d = Zu(a), f = Zu(s), h = i.useRef(null), p = (0, Wu.s)(t, (e => c(e))), m = i.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          i.useEffect((() => {
            if (o) {
              let e = function(e) {
                  if (m.paused || !u) return;
                  const t = e.target;
                  u.contains(t) ? h.current = t : uh(h.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (m.paused || !u) return;
                  const t = e.relatedTarget;
                  null !== t && (u.contains(t) || uh(h.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && uh(u)
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
          }), [o, u, m.paused]), i.useEffect((() => {
            if (u) {
              ch.add(m);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(nh, oh);
                u.addEventListener(nh, d), u.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (uh(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(ah(u).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && uh(u))
              }
              return () => {
                u.removeEventListener(nh, d), setTimeout((() => {
                  const t = new CustomEvent(rh, oh);
                  u.addEventListener(rh, f), u.dispatchEvent(t), t.defaultPrevented || uh(e ?? document.body, {
                    select: !0
                  }), u.removeEventListener(rh, f), ch.remove(m)
                }), 0)
              }
            }
          }), [u, d, f, m]);
          const v = i.useCallback((e => {
            if (!n && !o) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, i] = function(e) {
                  const t = ah(e);
                  return [sh(t, e), sh(t.reverse(), e)]
                }(t);
              o && i ? e.shiftKey || r !== i ? e.shiftKey && r === o && (e.preventDefault(), n && uh(i, {
                select: !0
              })) : (e.preventDefault(), n && uh(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }), [n, o, m.paused]);
          return (0, r.jsx)(rc.sG.div, {
            tabIndex: -1,
            ...l,
            ref: p,
            onKeyDown: v
          })
        }));

      function ah(e) {
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

      function sh(e, t) {
        for (const n of e)
          if (!lh(n, {
              upTo: t
            })) return n
      }

      function lh(e, {
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

      function uh(e, {
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
      ih.displayName = "FocusScope";
      var ch = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = dh(e, t), e.unshift(t)
          },
          remove(t) {
            e = dh(e, t), e[0]?.resume()
          }
        }
      }();

      function dh(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
      var fh = 0;

      function hh() {
        i.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? ph()), document.body.insertAdjacentElement("beforeend", e[1] ?? ph()), fh++, () => {
            1 === fh && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), fh--
          }
        }), [])
      }

      function ph() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var mh = n(90250),
        vh = new WeakMap,
        gh = new WeakMap,
        yh = {},
        bh = 0,
        wh = function(e) {
          return e && (e.host || wh(e.parentNode))
        },
        Eh = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), function(e, t, n, r) {
            var o = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var n = wh(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            yh[n] || (yh[n] = new WeakMap);
            var i = yh[n],
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
                    l = (vh.get(e) || 0) + 1,
                    u = (i.get(e) || 0) + 1;
                  vh.set(e, l), i.set(e, u), a.push(e), 1 === l && o && gh.set(e, !0), 1 === u && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                }
              }))
            };
            return c(t), s.clear(), bh++,
              function() {
                a.forEach((function(e) {
                  var t = vh.get(e) - 1,
                    o = i.get(e) - 1;
                  vh.set(e, t), i.set(e, o), t || (gh.has(e) || e.removeAttribute(r), gh.delete(e)), o || e.removeAttribute(n)
                })), --bh || (vh = new WeakMap, vh = new WeakMap, gh = new WeakMap, yh = {})
              }
          }(r, o, n, "aria-hidden")) : function() {
            return null
          }
        },
        _h = "Dialog",
        [Sh, Ph] = Xu(_h),
        [Ch, xh] = Sh(_h),
        Th = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: a,
            onOpenChange: s,
            modal: l = !0
          } = e, u = i.useRef(null), c = i.useRef(null), [d = !1, f] = Yu({
            prop: o,
            defaultProp: a,
            onChange: s
          });
          return (0, r.jsx)(Ch, {
            scope: t,
            triggerRef: u,
            contentRef: c,
            contentId: Rd(),
            titleId: Rd(),
            descriptionId: Rd(),
            open: d,
            onOpenChange: f,
            onOpenToggle: i.useCallback((() => f((e => !e))), [f]),
            modal: l,
            children: n
          })
        };
      Th.displayName = _h;
      var Oh = "DialogTrigger",
        Lh = i.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = xh(Oh, n), a = (0, Wu.s)(t, i.triggerRef);
          return (0, r.jsx)(rc.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": zh(i.open),
            ...o,
            ref: a,
            onClick: qu(e.onClick, i.onOpenToggle)
          })
        }));
      Lh.displayName = Oh;
      var Mh = "DialogPortal",
        [Rh, Nh] = Sh(Mh, {
          forceMount: void 0
        }),
        Dh = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: a
          } = e, s = xh(Mh, t);
          return (0, r.jsx)(Rh, {
            scope: t,
            forceMount: n,
            children: i.Children.map(o, (e => (0, r.jsx)(df, {
              present: n || s.open,
              children: (0, r.jsx)(cf, {
                asChild: !0,
                container: a,
                children: e
              })
            })))
          })
        };
      Dh.displayName = Mh;
      var jh = "DialogOverlay",
        Ih = i.forwardRef(((e, t) => {
          const n = Nh(jh, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...i
            } = e,
            a = xh(jh, e.__scopeDialog);
          return a.modal ? (0, r.jsx)(df, {
            present: o || a.open,
            children: (0, r.jsx)(kh, {
              ...i,
              ref: t
            })
          }) : null
        }));
      Ih.displayName = jh;
      var kh = i.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            ...o
          } = e, i = xh(jh, n);
          return (0, r.jsx)(mh.A, {
            as: oc.DX,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, r.jsx)(rc.sG.div, {
              "data-state": zh(i.open),
              ...o,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...o.style
              }
            })
          })
        })),
        Ah = "DialogContent",
        Hh = i.forwardRef(((e, t) => {
          const n = Nh(Ah, e.__scopeDialog),
            {
              forceMount: o = n.forceMount,
              ...i
            } = e,
            a = xh(Ah, e.__scopeDialog);
          return (0, r.jsx)(df, {
            present: o || a.open,
            children: a.modal ? (0, r.jsx)(Bh, {
              ...i,
              ref: t
            }) : (0, r.jsx)(Fh, {
              ...i,
              ref: t
            })
          })
        }));
      Hh.displayName = Ah;
      var Bh = i.forwardRef(((e, t) => {
          const n = xh(Ah, e.__scopeDialog),
            o = i.useRef(null),
            a = (0, Wu.s)(t, n.contentRef, o);
          return i.useEffect((() => {
            const e = o.current;
            if (e) return Eh(e)
          }), []), (0, r.jsx)(Gh, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: qu(e.onCloseAutoFocus, (e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            })),
            onPointerDownOutside: qu(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            })),
            onFocusOutside: qu(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Fh = i.forwardRef(((e, t) => {
          const n = xh(Ah, e.__scopeDialog),
            o = i.useRef(!1),
            a = i.useRef(!1);
          return (0, r.jsx)(Gh, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, a.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (a.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && a.current && t.preventDefault()
            }
          })
        })),
        Gh = i.forwardRef(((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: a,
            onCloseAutoFocus: s,
            ...l
          } = e, u = xh(Ah, n), c = i.useRef(null), d = (0, Wu.s)(t, c);
          return hh(), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(ih, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: a,
              onUnmountAutoFocus: s,
              children: (0, r.jsx)(xd, {
                role: "dialog",
                id: u.contentId,
                "aria-describedby": u.descriptionId,
                "aria-labelledby": u.titleId,
                "data-state": zh(u.open),
                ...l,
                ref: d,
                onDismiss: () => u.onOpenChange(!1)
              })
            }), (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)($h, {
                titleId: u.titleId
              }), (0, r.jsx)(Zh, {
                contentRef: c,
                descriptionId: u.descriptionId
              })]
            })]
          })
        })),
        Vh = "DialogTitle";
      i.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...o
        } = e, i = xh(Vh, n);
        return (0, r.jsx)(rc.sG.h2, {
          id: i.titleId,
          ...o,
          ref: t
        })
      })).displayName = Vh;
      var Uh = "DialogDescription";
      i.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...o
        } = e, i = xh(Uh, n);
        return (0, r.jsx)(rc.sG.p, {
          id: i.descriptionId,
          ...o,
          ref: t
        })
      })).displayName = Uh;
      var Kh = "DialogClose";

      function zh(e) {
        return e ? "open" : "closed"
      }
      i.forwardRef(((e, t) => {
        const {
          __scopeDialog: n,
          ...o
        } = e, i = xh(Kh, n);
        return (0, r.jsx)(rc.sG.button, {
          type: "button",
          ...o,
          ref: t,
          onClick: qu(e.onClick, (() => i.onOpenChange(!1)))
        })
      })).displayName = Kh;
      var qh = "DialogTitleWarning",
        [Wh, Xh] = function(e, t) {
          const n = i.createContext(t);

          function o(e) {
            const {
              children: t,
              ...o
            } = e, a = i.useMemo((() => o), Object.values(o));
            return (0, r.jsx)(n.Provider, {
              value: a,
              children: t
            })
          }
          return o.displayName = e + "Provider", [o, function(r) {
            const o = i.useContext(n);
            if (o) return o;
            if (void 0 !== t) return t;
            throw new Error(`\`${r}\` must be used within \`${e}\``)
          }]
        }(qh, {
          contentName: Ah,
          titleName: Vh,
          docsSlug: "dialog"
        }),
        $h = ({
          titleId: e
        }) => {
          const t = Xh(qh),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return i.useEffect((() => {
            e && (document.getElementById(e) || console.error(n))
          }), [n, e]), null
        },
        Zh = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Xh("DialogDescriptionWarning").contentName}}.`;
          return i.useEffect((() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }), [n, e, t]), null
        },
        Yh = Th,
        Qh = Lh,
        Jh = Dh,
        ep = Hh;
      const tp = ca(Ih),
        np = ca(ep),
        rp = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        op = ({
          src: e,
          alt: t,
          caption: n,
          crossOrigin: o,
          loading: a,
          referrerPolicy: s,
          thumbnail: l,
          thumbnailAspectRatio: u,
          thumbnailPosition: c = "center",
          thumbnailFit: d = "cover",
          reduceMotion: f = !1,
          defaultOpen: h,
          open: p,
          onOpenChange: m,
          showOpenButton: v,
          showDownloadButton: g,
          zoomLevel: y,
          defaultZoomLevel: b = 100,
          minZoomLevel: w = 100,
          maxZoomLevel: E = 300,
          zoomLevelStep: _ = 100,
          onZoomLevelChange: S,
          gestureSettings: P,
          testId: C
        }) => {
          const x = (0, i.useRef)(null),
            T = (0, i.useRef)(null),
            O = (0, i.useRef)(null),
            L = (0, i.useRef)(null),
            M = Ki(),
            R = Ki(),
            N = Ki(),
            D = (0, i.useRef)(!1),
            j = ku(),
            I = _t("screen and (max-width: 1024px)"),
            k = Mt() && I,
            A = Ct(),
            [H, B] = (0, i.useState)(!0),
            [F, G] = (0, i.useState)(!1),
            [V = !1, U] = Ot({
              prop: p,
              defaultProp: h,
              onChange: m
            }),
            K = (0, i.useDeferredValue)(V),
            z = f || A || h && !D.current;
          (0, i.useEffect)((() => {
            (h || p) && ie(!0)
          }), []), ((e, t = []) => {
            const n = (0, i.useRef)(!1);
            (0, i.useEffect)((() => (n.current = !0, () => {
              n.current = !1
            })), []), (0, i.useEffect)((() => {
              n.current && e()
            }), [...t])
          })((() => {
            V !== K && (ie(V), D.current = !0)
          }), [V]);
          const q = () => {
              U(!1)
            },
            W = (({
              position: e,
              defaultPosition: t,
              onPositionChange: n,
              minZoomLevel: r,
              maxZoomLevel: o,
              zoomLevelStep: a,
              zoomLevel: s,
              defaultZoomLevel: l,
              onZoomLevelChange: u,
              onRequestClose: c,
              onClick: d,
              gestureSettings: f = pa
            }) => {
              const [h = t, p] = Ot({
                prop: e,
                defaultProp: t,
                onChange: n
              }), [m = l, v] = Ot({
                prop: s,
                defaultProp: l,
                onChange: u
              }), g = (0, i.useRef)(null), y = (0, i.useRef)(null), [b, w] = (0, i.useState)(!1), E = m > r, _ = m < o, S = m > r, P = m === r, C = _t("screen and (max-width: 1024px)"), x = Mt() && C, T = (e, {
                origin: n,
                delta: i
              } = {}) => {
                if (g.current && y.current) {
                  n || (n = [y.current.clientWidth / 2, y.current.clientHeight / 2]);
                  const c = (s = e, l = r, u = o, Math.min(Math.max(s, l), u));
                  if (c === m) return;
                  if (i || (i = (c - m) / a), c <= r) p(t);
                  else {
                    const e = ha(g.current, y.current, (({
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
                      currentTranslate: h,
                      contentRef: g,
                      pinchDelta: i,
                      scale: m / a,
                      touchOrigin: n
                    }), c);
                    p(e.xy)
                  }
                  v(c)
                }
                var s, l, u
              }, O = () => {
                p(t), v(l)
              }, {
                handleClick: L
              } = (({
                enabled: e = !0,
                latency: t = 300,
                onDoubleClick: n = (() => null),
                onSingleClick: r = (() => null)
              }) => {
                const o = (0, i.useRef)(0),
                  a = (0, i.useRef)();
                return {
                  handleClick: i => {
                    e && (o.current += 1, a.current = setTimeout((() => {
                      1 === o.current ? r(i) : 2 === o.current && n(i), o.current = 0
                    }), t))
                  }
                }
              })({
                onDoubleClick: () => {
                  g.current && x && m > r && O()
                },
                onSingleClick: e => {
                  if (g.current && 0 === e.button) {
                    const t = fa(g.current),
                      n = e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right ? "overlay" : "content";
                    d?.({
                      target: n,
                      origin: [e.clientX, e.clientY]
                    })
                  }
                },
                latency: 150
              });
              return {
                containerRef: y,
                contentRef: g,
                canPan: E,
                isPanning: b,
                position: h,
                zoomLevel: m,
                zoomIn: e => {
                  T(m + a, e)
                },
                zoomOut: e => {
                  T(m - a, e)
                },
                zoomTo: T,
                resetZoom: O,
                canZoomIn: _,
                canZoomOut: S,
                zoomLevelStep: a,
                maxZoomLevel: o,
                minZoomLevel: r,
                defaultZoomLevel: l,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: t = [0, 0],
                    movement: [n, o],
                    pinching: i,
                    tap: a,
                    touches: s,
                    event: l
                  }) => {
                    if (!y.current || !g.current) return;
                    if (a) return void L(l);
                    if (n && o && !b && w(!0), s > 1) return;
                    if (i || m < r) return;
                    if (e) return h;
                    const {
                      horizontalOffset: u,
                      verticalOffset: c
                    } = ha(g.current, y.current, h, m), d = n * f.dragFactor, v = o * f.dragFactor;
                    return p(m === r ? [t[0], t[1] + v] : [da(t[0] + d, -u, u), da(t[1] + v, -c, c)]), t
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (y.current && g.current)
                      if (m === r) {
                        const e = y.current.getBoundingClientRect(),
                          n = g.current.getBoundingClientRect(),
                          {
                            verticalOffset: r
                          } = ha(g.current, y.current, h, m);
                        n.top + Math.abs(r) >= e.height / 2 ? c?.() : p(t)
                      } else if (void 0 !== e) {
                      const e = ha(g.current, y.current, h, m);
                      w(!1), p(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    movement: [n],
                    origin: [r, o]
                  }) => {
                    if (g.current && y.current) {
                      if (n && b && w(!0), t) return void e();
                      const i = [r, o],
                        a = m / 100,
                        s = a + n / f.pinchFactor;
                      T(100 * s, {
                        delta: s - a,
                        origin: i
                      })
                    }
                  },
                  onPinchEnd: () => {
                    y.current && g.current && w(!1)
                  },
                  onWheel: ({
                    last: e,
                    cancel: t,
                    event: n,
                    movement: r
                  }) => {
                    if (g.current && y.current) {
                      const o = -1 * r[1];
                      if (o && b && w(!0), e) return void t();
                      const i = [n.clientX, n.clientY],
                        a = m / 100,
                        s = a + o / f.scrollFactor;
                      T(100 * s, {
                        delta: s - a,
                        origin: i
                      })
                    }
                  },
                  onWheelEnd: () => {
                    y.current && g.current && w(!1)
                  }
                },
                getCursor: () => P && _ ? "zoom-in" : E ? b ? "grabbing" : "grab" : "pointer"
              }
            })({
              enabled: K,
              onClick: function(e) {
                I ? B(!H) : "overlay" === e.target ? q() : W.zoomLevel >= W.maxZoomLevel ? W.resetZoom() : W.zoomTo(W.maxZoomLevel, {
                  origin: e.origin
                })
              },
              onRequestClose: q,
              zoomLevel: y,
              defaultZoomLevel: b,
              minZoomLevel: w,
              maxZoomLevel: E,
              zoomLevelStep: _,
              onZoomLevelChange: S,
              defaultPosition: [0, 0],
              gestureSettings: P
            }),
            {
              loaded: X,
              eventHandlers: $
            } = (({
              enabled: e = !0
            }) => {
              const [t, n] = (0, i.useState)(!1), [r, o] = (0, i.useState)(!1);
              return (0, i.useEffect)((() => {
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
              enabled: K
            }),
            {
              isHovered: Z
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, i.useState)(!1);
              return (0, i.useEffect)((() => {
                r(!1)
              }), [t.current]), Lt("mouseenter", (() => {
                r(!0)
              }), t), Lt("mouseleave", (() => {
                r(!1)
              }), t), {
                isHovered: !!e && n
              }
            })({
              ref: x,
              enabled: K
            }),
            {
              isFocused: Y
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [n, r] = (0, i.useState)(!1);
              return (0, i.useEffect)((() => {
                r(!1)
              }), [t.current]), Lt("focusin", (() => {
                r(!0)
              }), t), Lt("focusout", (() => {
                r(!1)
              }), t), {
                isFocused: !!e && n
              }
            })({
              ref: x,
              enabled: K
            }),
            {
              isIdle: Q
            } = Tt({
              leave: 300,
              activity: 3e3,
              enabled: K && !Z && !Y && !k
            }),
            J = function(e, t, n) {
              const r = zn.fun(t) && t,
                {
                  reset: o,
                  sort: a,
                  trail: s = 0,
                  expires: l = !0,
                  exitBeforeEnter: u = !1,
                  onDestroyed: c,
                  ref: d,
                  config: f
                } = r ? r() : t,
                h = (0, i.useMemo)((() => r || 3 == arguments.length ? Gi() : void 0), []),
                p = $n(e),
                m = [],
                v = (0, i.useRef)(null),
                g = o ? null : v.current;
              ho((() => {
                v.current = m
              })), vo((() => (Wn(m, (e => {
                h?.add(e.ctrl), e.ctrl.ref = h
              })), () => {
                Wn(v.current, (e => {
                  e.expired && clearTimeout(e.expirationId), Wo(e.ctrl, h), e.ctrl.stop(!0)
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
                      return n ? (t.add(n), n.key) : zi++
                    }))
                  }
                  return zn.und(n) ? e : zn.fun(n) ? e.map(n) : $n(n)
                }(p, r ? r() : t, g),
                b = o && v.current || [];
              ho((() => Wn(b, (({
                ctrl: e,
                item: t,
                key: n
              }) => {
                Wo(e, h), Io(c, t, n)
              }))));
              const w = [];
              if (g && Wn(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), b.push(e)) : ~(t = w[t] = y.indexOf(e.key)) && (m[t] = e)
                })), Wn(p, ((e, t) => {
                  m[t] || (m[t] = {
                    key: y[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Li
                  }, m[t].ctrl.item = e)
                })), w.length) {
                let e = -1;
                const {
                  leave: n
                } = r ? r() : t;
                Wn(w, ((t, r) => {
                  const o = g[r];
                  ~t ? (e = m.indexOf(o), m[e] = {
                    ...o,
                    item: p[t]
                  }) : n && m.splice(++e, 0, o)
                }))
              }
              zn.fun(a) && m.sort(((e, t) => a(e.item, t.item)));
              let E = -s;
              const _ = mo(),
                S = Fo(t),
                P = new Map,
                C = (0, i.useRef)(new Map),
                x = (0, i.useRef)(!1);
              Wn(m, ((e, n) => {
                const o = e.key,
                  i = e.phase,
                  a = r ? r() : t;
                let c, h;
                const p = Io(a.delay || 0, o);
                if ("mount" == i) c = a.enter, h = "enter";
                else {
                  const e = y.indexOf(o) < 0;
                  if ("leave" != i)
                    if (e) c = a.leave, h = "leave";
                    else {
                      if (!(c = a.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    c = a.enter, h = "enter"
                  }
                }
                if (c = Io(c, e.item, n), c = zn.obj(c) ? Uo(c) : {
                    to: c
                  }, !c.config) {
                  const t = f || S.config;
                  c.config = Io(t, e.item, n, h)
                }
                E += s;
                const m = {
                  ...S,
                  delay: p + E,
                  ref: d,
                  immediate: a.immediate,
                  reset: !1,
                  ...c
                };
                if ("enter" == h && zn.und(m.from)) {
                  const o = r ? r() : t,
                    i = zn.und(o.initial) || g ? o.from : o.initial;
                  m.from = Io(i, e.item, n)
                }
                const {
                  onResolve: b
                } = m;
                m.onResolve = e => {
                  Io(b, e);
                  const t = v.current,
                    n = t.find((e => e.key === o));
                  if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == n.phase) {
                      const t = Io(l, n.item);
                      if (!1 !== t) {
                        const r = !0 === t ? 0 : t;
                        if (n.expired = !0, !e && r > 0) return void(r <= 2147483647 && (n.expirationId = setTimeout(_, r)))
                      }
                    }
                    e && t.some((e => e.expired)) && (C.current.delete(n), u && (x.current = !0), _())
                  }
                };
                const w = Ni(e.ctrl, m);
                "leave" === h && u ? C.current.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                }) : P.set(e, {
                  phase: h,
                  springs: w,
                  payload: m
                })
              }));
              const T = (0, i.useContext)(Bi),
                O = yo(T),
                L = T !== O && zo(T);
              ho((() => {
                L && Wn(m, (e => {
                  e.ctrl.start({
                    default: T
                  })
                }))
              }), [T]), Wn(P, ((e, t) => {
                if (C.current.size) {
                  const e = m.findIndex((e => e.key === t.key));
                  m.splice(e, 1)
                }
              })), ho((() => {
                Wn(C.current.size ? C.current : P, (({
                  phase: e,
                  payload: t
                }, n) => {
                  const {
                    ctrl: r
                  } = n;
                  n.phase = e, h?.add(r), L && "enter" == e && r.start({
                    default: T
                  }), t && (Xo(r, t.ref), !r.ref && !h || x.current ? (r.start(t), x.current && (x.current = !1)) : r.update(t))
                }))
              }), o ? void 0 : n);
              const M = e => i.createElement(i.Fragment, null, m.map(((t, n) => {
                const {
                  springs: r
                } = P.get(t) || t.ctrl, o = e({
                  ...r
                }, t.item, t, n);
                return o && o.type ? i.createElement(o.type, {
                  ...o.props,
                  key: zn.str(t.key) || zn.num(t.key) ? t.key : t.ctrl.id,
                  ref: o.ref
                }) : o
              })));
              return h ? [M, h] : M
            }(K, {
              ref: M,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: z
            }),
            ee = Vi({
              ref: R,
              opacity: K && !Q && X && H ? 1 : 0,
              immediate: z
            }),
            te = Vi({
              ref: N,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: u,
                position: "absolute",
                objectFit: d,
                objectPosition: c,
                opacity: 0
              },
              onStart: () => {
                K || G(!1)
              },
              onRest: async () => {
                K ? G(!0) : (W.resetZoom(), B(!0))
              }
            }),
            ne = Vi({
              opacity: K && X && F ? 1 : 0,
              immediate: !0,
              onRest: () => {
                K && X && N.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            re = [
              [N, M, R],
              [0, 0, .1]
            ];

          function ie(e) {
            const t = O.current.getBoundingClientRect(),
              n = T.current.naturalWidth,
              r = T.current.naturalHeight,
              o = n / window.innerWidth,
              i = n / o,
              a = r / o,
              s = window.innerHeight * i / a,
              l = window.innerWidth * a / i,
              f = a >= window.innerHeight ? "horizontal" : "vertical",
              h = "horizontal" === f ? (window.innerWidth - window.innerHeight * i / a) / 2 : (window.innerHeight - window.innerWidth * a / i) / 2;
            e ? N.start({
              to: async e => {
                await e({
                  immediate: !0,
                  width: `${t.width}px`,
                  height: `${t.height}px`,
                  top: `${t.y}px`,
                  left: `${t.x}px`,
                  position: "fixed",
                  aspectRatio: "unset",
                  opacity: 1
                }), O.current.style.opacity = "0", await e({
                  height: "horizontal" === f ? `${window.innerHeight}px` : `${l}px`,
                  width: "horizontal" === f ? `${s}px` : `${window.innerWidth}px`,
                  top: "horizontal" === f ? "0px" : `${h}px`,
                  left: "horizontal" === f ? `${h}px` : "0px",
                  scale: b / 100,
                  immediate: z
                }), await e({
                  immediate: !0,
                  height: "100%",
                  width: "100%",
                  left: "0px",
                  top: "0px",
                  objectFit: "contain",
                  objectPosition: "center"
                })
              }
            }) : N.start({
              to: async e => {
                await e({
                  immediate: !0,
                  opacity: 1,
                  objectFit: d,
                  objectPosition: c,
                  height: "horizontal" === f ? `${window.innerHeight}px` : `${l}px`,
                  width: "horizontal" === f ? `${s}px` : `${window.innerWidth}px`,
                  top: "horizontal" === f ? "0px" : `${h}px`,
                  left: "horizontal" === f ? `${h}px` : "0px",
                  scale: W.zoomLevel / 100,
                  x: W.position[0],
                  y: W.position[1]
                }), await e({
                  width: `${t.width}px`,
                  height: `${t.height}px`,
                  top: `${t.y}px`,
                  left: `${t.x}px`,
                  aspectRatio: "unset",
                  x: 0,
                  y: 0,
                  scale: 1,
                  immediate: z
                }), O.current.style.opacity = "1", await e({
                  immediate: !0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  aspectRatio: u,
                  objectFit: d,
                  opacity: 0
                })
              }
            })
          }! function(e, t, n = 1e3) {
            ho((() => {
              if (t) {
                let r = 0;
                Wn(e, ((e, o) => {
                  const i = e.current;
                  if (i.length) {
                    let a = n * t[o];
                    isNaN(a) ? a = r : r = a, Wn(i, (e => {
                      Wn(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => a + Io(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                Wn(e, (e => {
                  const n = e.current;
                  if (n.length) {
                    const r = n.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (Wn(n, ((e, t) => Wn(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(K ? re[0] : re[0].reverse(), re[1]), (0, i.useEffect)((() => {
            B(!k)
          }), [k]);
          const {
            contrastMode: ae
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
            } = En();
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
          })(), se = ((e, t) => [gn.tokens, eh("dark", t)].join(" "))(0, ae);
          return (0, r.jsx)(Yh, {
            children: (0, r.jsxs)("div", {
              className: "foundry_1a74xwb0",
              children: [(0, r.jsx)(ca.div, {
                className: "foundry_1a74xwb2 foundry_1a74xwb1",
                ref: L,
                "data-idle": !K,
                style: te,
                children: (0, r.jsx)("img", {
                  alt: t,
                  src: l,
                  ref: T,
                  loading: a,
                  className: th,
                  crossOrigin: o,
                  referrerPolicy: s
                })
              }), (0, r.jsx)(Qh, {
                asChild: !0,
                children: (0, r.jsxs)(ca.button, {
                  className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                  onClick: () => {
                    U(!V)
                  },
                  ref: O,
                  "data-idle": !K,
                  style: {
                    aspectRatio: u,
                    objectPosition: c,
                    objectFit: d
                  },
                  children: [(0, r.jsx)("img", {
                    alt: t,
                    src: l,
                    ref: T,
                    loading: a,
                    className: th,
                    crossOrigin: o,
                    referrerPolicy: s
                  }), J(((e, t) => v && !t && (0, r.jsx)(ca.span, {
                    className: "foundry_1a74xwb5",
                    style: e,
                    children: (0, r.jsx)(oe.Plus, {
                      label: j.formatMessage(Ku)
                    })
                  })))]
                })
              }), (0, r.jsx)(Jh, {
                forceMount: !0,
                children: J(((i, l) => l && (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(tp, {
                    className: "foundry_1a74xwb8",
                    style: i
                  }), (0, r.jsxs)(np, {
                    "data-testid": C,
                    onEscapeKeyDown: q,
                    onOpenAutoFocus: rp,
                    className: se,
                    children: [(0, r.jsx)(ca.div, {
                      className: "foundry_1a74xwb6",
                      style: ne,
                      children: (0, r.jsx)(Cs, {
                        ...W,
                        children: (0, r.jsx)("img", {
                          alt: t,
                          src: e,
                          loading: a,
                          className: "foundry_1a74xwba",
                          crossOrigin: o,
                          referrerPolicy: s,
                          style: {
                            cursor: W.getCursor()
                          },
                          ...$
                        })
                      })
                    }), (0, r.jsx)(ca.div, {
                      className: "foundry_1a74xwb9",
                      style: ee,
                      children: (0, r.jsx)(Qf, {
                        ...W,
                        ref: x,
                        onClose: q,
                        caption: n,
                        onDownload: () => (e => {
                          const t = document.createElement("a");
                          t.href = e, t.download = e.substring(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
                        })(e),
                        showDownloadButton: g
                      })
                    })]
                  })]
                })))
              })]
            })
          })
        },
        ip = e => {
          const t = (() => {
            const {
              locale: e
            } = En();
            return e
          })();
          return (0, r.jsx)(Vu, {
            messages: Jf,
            locale: t,
            children: (0, r.jsx)(op, {
              ...e
            })
          })
        };
      var ap = [" ", "Enter", "ArrowUp", "ArrowDown"],
        sp = [" ", "Enter"],
        lp = "Select",
        [up, cp, dp] = ic(lp),
        [fp, hp] = Xu(lp, [dp, Ud]),
        pp = Ud(),
        [mp, vp] = fp(lp),
        [gp, yp] = fp(lp),
        bp = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: o,
            defaultOpen: a,
            onOpenChange: s,
            value: l,
            defaultValue: u,
            onValueChange: c,
            dir: d,
            name: f,
            autoComplete: h,
            disabled: p,
            required: m
          } = e, v = pp(t), [g, y] = i.useState(null), [b, w] = i.useState(null), [E, _] = i.useState(!1), S = Ju(d), [P = !1, C] = Yu({
            prop: o,
            defaultProp: a,
            onChange: s
          }), [x, T] = Yu({
            prop: l,
            defaultProp: u,
            onChange: c
          }), O = i.useRef(null), L = !g || Boolean(g.closest("form")), [M, R] = i.useState(new Set), N = Array.from(M).map((e => e.props.value)).join(";");
          return (0, r.jsx)(af, {
            ...v,
            children: (0, r.jsxs)(mp, {
              required: m,
              scope: t,
              trigger: g,
              onTriggerChange: y,
              valueNode: b,
              onValueNodeChange: w,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: _,
              contentId: Rd(),
              value: x,
              onValueChange: T,
              open: P,
              onOpenChange: C,
              dir: S,
              triggerPointerDownPosRef: O,
              disabled: p,
              children: [(0, r.jsx)(up.Provider, {
                scope: t,
                children: (0, r.jsx)(gp, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: i.useCallback((e => {
                    R((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: i.useCallback((e => {
                    R((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), L ? (0, r.jsxs)(em, {
                "aria-hidden": !0,
                required: m,
                tabIndex: -1,
                name: f,
                autoComplete: h,
                value: x,
                onChange: e => T(e.target.value),
                disabled: p,
                children: [void 0 === x ? (0, r.jsx)("option", {
                  value: ""
                }) : null, Array.from(M)]
              }, N) : null]
            })
          })
        };
      bp.displayName = lp;
      var wp = "SelectTrigger",
        Ep = i.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: o = !1,
            ...i
          } = e, a = pp(n), s = vp(wp, n), l = s.disabled || o, u = (0, Wu.s)(t, s.onTriggerChange), c = cp(n), [d, f, h] = tm((e => {
            const t = c().filter((e => !e.disabled)),
              n = t.find((e => e.value === s.value)),
              r = nm(t, e, n);
            void 0 !== r && s.onValueChange(r.value)
          })), p = () => {
            l || (s.onOpenChange(!0), h())
          };
          return (0, r.jsx)(sf, {
            asChild: !0,
            ...a,
            children: (0, r.jsx)(rc.sG.button, {
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
              "data-placeholder": Jp(s.value) ? "" : void 0,
              ...i,
              ref: u,
              onClick: qu(i.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: qu(i.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (p(), s.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: qu(i.onKeyDown, (e => {
                const t = "" !== d.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || ap.includes(e.key) && (p(), e.preventDefault())
              }))
            })
          })
        }));
      Ep.displayName = wp;
      var _p = "SelectValue",
        Sp = i.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: o,
            style: i,
            children: a,
            placeholder: s = "",
            ...l
          } = e, u = vp(_p, n), {
            onValueNodeHasChildrenChange: c
          } = u, d = void 0 !== a, f = (0, Wu.s)(t, u.onValueNodeChange);
          return tc((() => {
            c(d)
          }), [c, d]), (0, r.jsx)(rc.sG.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: Jp(u.value) ? (0, r.jsx)(r.Fragment, {
              children: s
            }) : a
          })
        }));
      Sp.displayName = _p;
      var Pp = i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: o,
          ...i
        } = e;
        return (0, r.jsx)(rc.sG.span, {
          "aria-hidden": !0,
          ...i,
          ref: t,
          children: o || "▼"
        })
      }));
      Pp.displayName = "SelectIcon";
      var Cp = e => (0, r.jsx)(cf, {
        asChild: !0,
        ...e
      });
      Cp.displayName = "SelectPortal";
      var xp = "SelectContent",
        Tp = i.forwardRef(((e, t) => {
          const n = vp(xp, e.__scopeSelect),
            [o, a] = i.useState();
          if (tc((() => {
              a(new DocumentFragment)
            }), []), !n.open) {
            const t = o;
            return t ? Zi.createPortal((0, r.jsx)(Lp, {
              scope: e.__scopeSelect,
              children: (0, r.jsx)(up.Slot, {
                scope: e.__scopeSelect,
                children: (0, r.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, r.jsx)(Rp, {
            ...e,
            ref: t
          })
        }));
      Tp.displayName = xp;
      var Op = 10,
        [Lp, Mp] = fp(xp),
        Rp = i.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: o = "item-aligned",
            onCloseAutoFocus: a,
            onEscapeKeyDown: s,
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
          } = e, w = vp(xp, n), [E, _] = i.useState(null), [S, P] = i.useState(null), C = (0, Wu.s)(t, (e => _(e))), [x, T] = i.useState(null), [O, L] = i.useState(null), M = cp(n), [R, N] = i.useState(!1), D = i.useRef(!1);
          i.useEffect((() => {
            if (E) return Eh(E)
          }), [E]), hh();
          const j = i.useCallback((e => {
              const [t, ...n] = M().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [M, S]),
            I = i.useCallback((() => j([x, E])), [j, x, E]);
          i.useEffect((() => {
            R && I()
          }), [R, I]);
          const {
            onOpenChange: k,
            triggerPointerDownPosRef: A
          } = w;
          i.useEffect((() => {
            if (E) {
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
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : E.contains(n.target) || k(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [E, k, A]), i.useEffect((() => {
            const e = () => k(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [k]);
          const [H, B] = tm((e => {
            const t = M().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = nm(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = i.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && (T(e), r && (D.current = !0))
          }), [w.value]), G = i.useCallback((() => E?.focus()), [E]), V = i.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && L(e)
          }), [w.value]), U = "popper" === o ? Dp : Np, K = U === Dp ? {
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
          return (0, r.jsx)(Lp, {
            scope: n,
            content: E,
            viewport: S,
            onViewportChange: P,
            itemRefCallback: F,
            selectedItem: x,
            onItemLeave: G,
            itemTextRefCallback: V,
            focusSelectedItem: I,
            selectedItemText: O,
            position: o,
            isPositioned: R,
            searchRef: H,
            children: (0, r.jsx)(mh.A, {
              as: oc.DX,
              allowPinchZoom: !0,
              children: (0, r.jsx)(ih, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: qu(a, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, r.jsx)(xd, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: s,
                  onPointerDownOutside: l,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, r.jsx)(U, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...K,
                    onPlaced: () => N(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: qu(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = M().filter((e => !e.disabled)).map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1)
                        }
                        setTimeout((() => j(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Rp.displayName = "SelectContentImpl";
      var Np = i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: o,
          ...a
        } = e, s = vp(xp, n), l = Mp(xp, n), [u, c] = i.useState(null), [d, f] = i.useState(null), h = (0, Wu.s)(t, (e => f(e))), p = cp(n), m = i.useRef(!1), v = i.useRef(!0), {
          viewport: g,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, E = i.useCallback((() => {
          if (s.trigger && s.valueNode && u && d && g && y && b) {
            const e = s.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              n = s.valueNode.getBoundingClientRect(),
              r = b.getBoundingClientRect();
            if ("rtl" !== s.dir) {
              const o = r.left - t.left,
                i = n.left - o,
                a = e.left - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                c = window.innerWidth - Op,
                d = zu(i, [Op, c - l]);
              u.style.minWidth = s + "px", u.style.left = d + "px"
            } else {
              const o = t.right - r.right,
                i = window.innerWidth - n.right - o,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                c = window.innerWidth - Op,
                d = zu(i, [Op, c - l]);
              u.style.minWidth = s + "px", u.style.right = d + "px"
            }
            const i = p(),
              a = window.innerHeight - 2 * Op,
              l = g.scrollHeight,
              c = window.getComputedStyle(d),
              f = parseInt(c.borderTopWidth, 10),
              h = parseInt(c.paddingTop, 10),
              v = parseInt(c.borderBottomWidth, 10),
              w = f + h + l + parseInt(c.paddingBottom, 10) + v,
              E = Math.min(5 * y.offsetHeight, w),
              _ = window.getComputedStyle(g),
              S = parseInt(_.paddingTop, 10),
              P = parseInt(_.paddingBottom, 10),
              C = e.top + e.height / 2 - Op,
              x = a - C,
              T = y.offsetHeight / 2,
              O = f + h + (y.offsetTop + T),
              L = w - O;
            if (O <= C) {
              const e = y === i[i.length - 1].ref.current;
              u.style.bottom = "0px";
              const t = d.clientHeight - g.offsetTop - g.offsetHeight,
                n = O + Math.max(x, T + (e ? P : 0) + t + v);
              u.style.height = n + "px"
            } else {
              const e = y === i[0].ref.current;
              u.style.top = "0px";
              const t = Math.max(C, f + g.offsetTop + (e ? S : 0) + T) + L;
              u.style.height = t + "px", g.scrollTop = O - C + g.offsetTop
            }
            u.style.margin = `${Op}px 0`, u.style.minHeight = E + "px", u.style.maxHeight = a + "px", o?.(), requestAnimationFrame((() => m.current = !0))
          }
        }), [p, s.trigger, s.valueNode, u, d, g, y, b, s.dir, o]);
        tc((() => E()), [E]);
        const [_, S] = i.useState();
        tc((() => {
          d && S(window.getComputedStyle(d).zIndex)
        }), [d]);
        const P = i.useCallback((e => {
          e && !0 === v.current && (E(), w?.(), v.current = !1)
        }), [E, w]);
        return (0, r.jsx)(jp, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: m,
          onScrollButtonChange: P,
          children: (0, r.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: _
            },
            children: (0, r.jsx)(rc.sG.div, {
              ...a,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...a.style
              }
            })
          })
        })
      }));
      Np.displayName = "SelectItemAlignedPosition";
      var Dp = i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: o = "start",
          collisionPadding: i = Op,
          ...a
        } = e, s = pp(n);
        return (0, r.jsx)(lf, {
          ...s,
          ...a,
          ref: t,
          align: o,
          collisionPadding: i,
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
      Dp.displayName = "SelectPopperPosition";
      var [jp, Ip] = fp(xp, {}), kp = "SelectViewport", Ap = i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: o,
          ...a
        } = e, s = Mp(kp, n), l = Ip(kp, n), u = (0, Wu.s)(t, s.onViewportChange), c = i.useRef(0);
        return (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o
          }), (0, r.jsx)(up.Slot, {
            scope: n,
            children: (0, r.jsx)(rc.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...a,
              ref: u,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...a.style
              },
              onScroll: qu(a.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Op,
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
      Ap.displayName = kp;
      var Hp = "SelectGroup",
        [Bp, Fp] = fp(Hp);
      i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...o
        } = e, i = Rd();
        return (0, r.jsx)(Bp, {
          scope: n,
          id: i,
          children: (0, r.jsx)(rc.sG.div, {
            role: "group",
            "aria-labelledby": i,
            ...o,
            ref: t
          })
        })
      })).displayName = Hp;
      var Gp = "SelectLabel";
      i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...o
        } = e, i = Fp(Gp, n);
        return (0, r.jsx)(rc.sG.div, {
          id: i.id,
          ...o,
          ref: t
        })
      })).displayName = Gp;
      var Vp = "SelectItem",
        [Up, Kp] = fp(Vp),
        zp = i.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: o,
            disabled: a = !1,
            textValue: s,
            ...l
          } = e, u = vp(Vp, n), c = Mp(Vp, n), d = u.value === o, [f, h] = i.useState(s ?? ""), [p, m] = i.useState(!1), v = (0, Wu.s)(t, (e => c.itemRefCallback?.(e, o, a))), g = Rd(), y = () => {
            a || (u.onValueChange(o), u.onOpenChange(!1))
          };
          if ("" === o) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, r.jsx)(Up, {
            scope: n,
            value: o,
            disabled: a,
            textId: g,
            isSelected: d,
            onItemTextChange: i.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, r.jsx)(up.ItemSlot, {
              scope: n,
              value: o,
              disabled: a,
              textValue: f,
              children: (0, r.jsx)(rc.sG.div, {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...l,
                ref: v,
                onFocus: qu(l.onFocus, (() => m(!0))),
                onBlur: qu(l.onBlur, (() => m(!1))),
                onPointerUp: qu(l.onPointerUp, y),
                onPointerMove: qu(l.onPointerMove, (e => {
                  a ? c.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: qu(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: qu(l.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (sp.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      zp.displayName = Vp;
      var qp = "SelectItemText",
        Wp = i.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: o,
            style: a,
            ...s
          } = e, l = vp(qp, n), u = Mp(qp, n), c = Kp(qp, n), d = yp(qp, n), [f, h] = i.useState(null), p = (0, Wu.s)(t, (e => h(e)), c.onItemTextChange, (e => u.itemTextRefCallback?.(e, c.value, c.disabled))), m = f?.textContent, v = i.useMemo((() => (0, r.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: m
          }, c.value)), [c.disabled, c.value, m]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: y
          } = d;
          return tc((() => (g(v), () => y(v))), [g, y, v]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(rc.sG.span, {
              id: c.textId,
              ...s,
              ref: p
            }), c.isSelected && l.valueNode && !l.valueNodeHasChildren ? Zi.createPortal(s.children, l.valueNode) : null]
          })
        }));
      Wp.displayName = qp;
      var Xp = "SelectItemIndicator";
      i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...o
        } = e;
        return Kp(Xp, n).isSelected ? (0, r.jsx)(rc.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t
        }) : null
      })).displayName = Xp;
      var $p = "SelectScrollUpButton";
      i.forwardRef(((e, t) => {
        const n = Mp($p, e.__scopeSelect),
          o = Ip($p, e.__scopeSelect),
          [a, s] = i.useState(!1),
          l = (0, Wu.s)(t, o.onScrollButtonChange);
        return tc((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              s(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), a ? (0, r.jsx)(Yp, {
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
      })).displayName = $p;
      var Zp = "SelectScrollDownButton";
      i.forwardRef(((e, t) => {
        const n = Mp(Zp, e.__scopeSelect),
          o = Ip(Zp, e.__scopeSelect),
          [a, s] = i.useState(!1),
          l = (0, Wu.s)(t, o.onScrollButtonChange);
        return tc((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              s(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), a ? (0, r.jsx)(Yp, {
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
      })).displayName = Zp;
      var Yp = i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: o,
          ...a
        } = e, s = Mp("SelectScrollButton", n), l = i.useRef(null), u = cp(n), c = i.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return i.useEffect((() => () => c()), [c]), tc((() => {
          const e = u().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [u]), (0, r.jsx)(rc.sG.div, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          style: {
            flexShrink: 0,
            ...a.style
          },
          onPointerDown: qu(a.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(o, 50))
          })),
          onPointerMove: qu(a.onPointerMove, (() => {
            s.onItemLeave?.(), null === l.current && (l.current = window.setInterval(o, 50))
          })),
          onPointerLeave: qu(a.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...o
        } = e;
        return (0, r.jsx)(rc.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Qp = "SelectArrow";

      function Jp(e) {
        return "" === e || void 0 === e
      }
      i.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...o
        } = e, i = pp(n), a = vp(Qp, n), s = Mp(Qp, n);
        return a.open && "popper" === s.position ? (0, r.jsx)(uf, {
          ...i,
          ...o,
          ref: t
        }) : null
      })).displayName = Qp;
      var em = i.forwardRef(((e, t) => {
        const {
          value: n,
          ...o
        } = e, a = i.useRef(null), s = (0, Wu.s)(t, a), l = ec(n);
        return i.useEffect((() => {
          const e = a.current,
            t = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(t, "value").set;
          if (l !== n && r) {
            const t = new Event("change", {
              bubbles: !0
            });
            r.call(e, n), e.dispatchEvent(t)
          }
        }), [l, n]), (0, r.jsx)(hf.s, {
          asChild: !0,
          children: (0, r.jsx)("select", {
            ...o,
            ref: s,
            defaultValue: n
          })
        })
      }));

      function tm(e) {
        const t = Zu(e),
          n = i.useRef(""),
          r = i.useRef(0),
          o = i.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          a = i.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return i.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, a]
      }

      function nm(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      em.displayName = "BubbleSelect";
      var rm = bp,
        om = Ep,
        im = Sp,
        am = Pp,
        sm = Cp,
        lm = Tp,
        um = Ap,
        cm = zp,
        dm = Wp,
        fm = "ScrollArea",
        [hm, pm] = Xu(fm),
        [mm, vm] = hm(fm),
        gm = i.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: o = "hover",
            dir: a,
            scrollHideDelay: s = 600,
            ...l
          } = e, [u, c] = i.useState(null), [d, f] = i.useState(null), [h, p] = i.useState(null), [m, v] = i.useState(null), [g, y] = i.useState(null), [b, w] = i.useState(0), [E, _] = i.useState(0), [S, P] = i.useState(!1), [C, x] = i.useState(!1), T = (0, Wu.s)(t, (e => c(e))), O = Ju(a);
          return (0, r.jsx)(mm, {
            scope: n,
            type: o,
            dir: O,
            scrollHideDelay: s,
            scrollArea: u,
            viewport: d,
            onViewportChange: f,
            content: h,
            onContentChange: p,
            scrollbarX: m,
            onScrollbarXChange: v,
            scrollbarXEnabled: S,
            onScrollbarXEnabledChange: P,
            scrollbarY: g,
            onScrollbarYChange: y,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: x,
            onCornerWidthChange: w,
            onCornerHeightChange: _,
            children: (0, r.jsx)(rc.sG.div, {
              dir: O,
              ...l,
              ref: T,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": E + "px",
                ...e.style
              }
            })
          })
        }));
      gm.displayName = fm;
      var ym = "ScrollAreaViewport",
        bm = i.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: o,
            nonce: a,
            ...s
          } = e, l = vm(ym, n), u = i.useRef(null), c = (0, Wu.s)(t, u, l.onViewportChange);
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: a
            }), (0, r.jsx)(rc.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: c,
              style: {
                overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, r.jsx)("div", {
                ref: l.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: o
              })
            })]
          })
        }));
      bm.displayName = ym;
      var wm = "ScrollAreaScrollbar",
        Em = i.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, a = vm(wm, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: s,
            onScrollbarYEnabledChange: l
          } = a, u = "horizontal" === e.orientation;
          return i.useEffect((() => (u ? s(!0) : l(!0), () => {
            u ? s(!1) : l(!1)
          })), [u, s, l]), "hover" === a.type ? (0, r.jsx)(_m, {
            ...o,
            ref: t,
            forceMount: n
          }) : "scroll" === a.type ? (0, r.jsx)(Sm, {
            ...o,
            ref: t,
            forceMount: n
          }) : "auto" === a.type ? (0, r.jsx)(Pm, {
            ...o,
            ref: t,
            forceMount: n
          }) : "always" === a.type ? (0, r.jsx)(Cm, {
            ...o,
            ref: t
          }) : null
        }));
      Em.displayName = wm;
      var _m = i.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, a = vm(wm, e.__scopeScrollArea), [s, l] = i.useState(!1);
          return i.useEffect((() => {
            const e = a.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), l(!0)
                },
                r = () => {
                  t = window.setTimeout((() => l(!1)), a.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [a.scrollArea, a.scrollHideDelay]), (0, r.jsx)(df, {
            present: n || s,
            children: (0, r.jsx)(Pm, {
              "data-state": s ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Sm = i.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, a = vm(wm, e.__scopeScrollArea), s = "horizontal" === e.orientation, l = Um((() => c("SCROLL_END")), 100), [u, c] = ("hidden", d = {
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
          }, i.useReducer(((e, t) => d[e][t] ?? e), "hidden"));
          var d;
          return i.useEffect((() => {
            if ("idle" === u) {
              const e = window.setTimeout((() => c("HIDE")), a.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [u, a.scrollHideDelay, c]), i.useEffect((() => {
            const e = a.viewport,
              t = s ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (c("SCROLL"), l()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [a.viewport, s, c, l]), (0, r.jsx)(df, {
            present: n || "hidden" !== u,
            children: (0, r.jsx)(Cm, {
              "data-state": "hidden" === u ? "hidden" : "visible",
              ...o,
              ref: t,
              onPointerEnter: qu(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: qu(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        Pm = i.forwardRef(((e, t) => {
          const n = vm(wm, e.__scopeScrollArea),
            {
              forceMount: o,
              ...a
            } = e,
            [s, l] = i.useState(!1),
            u = "horizontal" === e.orientation,
            c = Um((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(u ? e : t)
              }
            }), 10);
          return Km(n.viewport, c), Km(n.content, c), (0, r.jsx)(df, {
            present: o || s,
            children: (0, r.jsx)(Cm, {
              "data-state": s ? "visible" : "hidden",
              ...a,
              ref: t
            })
          })
        })),
        Cm = i.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...o
          } = e, a = vm(wm, e.__scopeScrollArea), s = i.useRef(null), l = i.useRef(0), [u, c] = i.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = Am(u.viewport, u.content), f = {
            ...o,
            sizes: u,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => s.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function h(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = Hm(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                u = n.content - n.viewport;
              return Fm([s, l], "ltr" === r ? [0, u] : [-1 * u, 0])(e)
            }(e, l.current, u, t)
          }
          return "horizontal" === n ? (0, r.jsx)(xm, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && s.current) {
                const e = Bm(a.viewport.scrollLeft, u, a.dir);
                s.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollLeft = h(e, a.dir))
            }
          }) : "vertical" === n ? (0, r.jsx)(Tm, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && s.current) {
                const e = Bm(a.viewport.scrollTop, u);
                s.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        xm = i.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...a
          } = e, s = vm(wm, e.__scopeScrollArea), [l, u] = i.useState(), c = i.useRef(null), d = (0, Wu.s)(t, c, s.onScrollbarXChange);
          return i.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, r.jsx)(Mm, {
            "data-orientation": "horizontal",
            ...a,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === s.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": Hm(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (s.viewport) {
                const r = s.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), Gm(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && s.viewport && l && o({
                content: s.viewport.scrollWidth,
                viewport: s.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: km(l.paddingLeft),
                  paddingEnd: km(l.paddingRight)
                }
              })
            }
          })
        })),
        Tm = i.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: o,
            ...a
          } = e, s = vm(wm, e.__scopeScrollArea), [l, u] = i.useState(), c = i.useRef(null), d = (0, Wu.s)(t, c, s.onScrollbarYChange);
          return i.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, r.jsx)(Mm, {
            "data-orientation": "vertical",
            ...a,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === s.dir ? 0 : void 0,
              left: "rtl" === s.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": Hm(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (s.viewport) {
                const r = s.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), Gm(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && s.viewport && l && o({
                content: s.viewport.scrollHeight,
                viewport: s.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: km(l.paddingTop),
                  paddingEnd: km(l.paddingBottom)
                }
              })
            }
          })
        })),
        [Om, Lm] = hm(wm),
        Mm = i.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: o,
            hasThumb: a,
            onThumbChange: s,
            onThumbPointerUp: l,
            onThumbPointerDown: u,
            onThumbPositionChange: c,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: h,
            ...p
          } = e, m = vm(wm, n), [v, g] = i.useState(null), y = (0, Wu.s)(t, (e => g(e))), b = i.useRef(null), w = i.useRef(""), E = m.viewport, _ = o.content - o.viewport, S = Zu(f), P = Zu(c), C = Um(h, 10);

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
          return i.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = v?.contains(t);
              n && S(e, _)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [E, v, _, S]), i.useEffect(P, [o, P]), Km(v, C), Km(m.content, C), (0, r.jsx)(Om, {
            scope: n,
            scrollbar: v,
            hasThumb: a,
            onThumbChange: Zu(s),
            onThumbPointerUp: Zu(l),
            onThumbPositionChange: P,
            onThumbPointerDown: Zu(u),
            children: (0, r.jsx)(rc.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: qu(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = v.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), x(e))
              })),
              onPointerMove: qu(e.onPointerMove, x),
              onPointerUp: qu(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        Rm = "ScrollAreaThumb",
        Nm = i.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = Lm(Rm, e.__scopeScrollArea);
          return (0, r.jsx)(df, {
            present: n || i.hasThumb,
            children: (0, r.jsx)(Dm, {
              ref: t,
              ...o
            })
          })
        })),
        Dm = i.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: o,
            ...a
          } = e, s = vm(Rm, n), l = Lm(Rm, n), {
            onThumbPositionChange: u
          } = l, c = (0, Wu.s)(t, (e => l.onThumbChange(e))), d = i.useRef(), f = Um((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return i.useEffect((() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = Vm(e, u);
                  d.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [s.viewport, f, u]), (0, r.jsx)(rc.sG.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...a,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...o
            },
            onPointerDownCapture: qu(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: qu(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      Nm.displayName = Rm;
      var jm = "ScrollAreaCorner";
      i.forwardRef(((e, t) => {
        const n = vm(jm, e.__scopeScrollArea),
          o = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && o ? (0, r.jsx)(Im, {
          ...e,
          ref: t
        }) : null
      })).displayName = jm;
      var Im = i.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...o
        } = e, a = vm(jm, n), [s, l] = i.useState(0), [u, c] = i.useState(0), d = Boolean(s && u);
        return Km(a.scrollbarX, (() => {
          const e = a.scrollbarX?.offsetHeight || 0;
          a.onCornerHeightChange(e), c(e)
        })), Km(a.scrollbarY, (() => {
          const e = a.scrollbarY?.offsetWidth || 0;
          a.onCornerWidthChange(e), l(e)
        })), d ? (0, r.jsx)(rc.sG.div, {
          ...o,
          ref: t,
          style: {
            width: s,
            height: u,
            position: "absolute",
            right: "ltr" === a.dir ? 0 : void 0,
            left: "rtl" === a.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function km(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Am(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function Hm(e) {
        const t = Am(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function Bm(e, t, n = "ltr") {
        const r = Hm(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = zu(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return Fm([0, a], [0, s])(l)
      }

      function Fm(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function Gm(e, t) {
        return e > 0 && e < t
      }
      var Vm = (e, t = (() => {})) => {
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

      function Um(e, t) {
        const n = Zu(e),
          r = i.useRef(0);
        return i.useEffect((() => () => window.clearTimeout(r.current)), []), i.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function Km(e, t) {
        const n = Zu(t);
        tc((() => {
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
      var zm = gm,
        qm = bm,
        Wm = Em,
        Xm = Nm;
      const $m = (0, i.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: o,
          description: a,
          testId: s,
          hideLabel: l,
          hideDescription: u,
          hideRequiredAsterisk: c,
          hideDividers: d,
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
          className: S,
          ariaLabelledBy: P
        }, C) => {
          const x = Pt((0, i.useRef)(null), C),
            T = (0, i.useId)(),
            O = (0, i.useId)(),
            [L = !1, M] = Ot({
              prop: g,
              defaultProp: y,
              onChange: b
            });
          return (0, r.jsxs)("div", {
            className: (0, Le.$)("foundry_uaq1gw0", S),
            children: [(t && !l || n) && (0, r.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, r.jsx)(f, {
                enabled: !!l,
                children: (0, r.jsx)(I, {
                  className: "foundry_uaq1gw2",
                  asChild: !0,
                  children: (0, r.jsxs)("label", {
                    id: T,
                    children: [t, w && !c && (0, r.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, r.jsx)(V, {
                className: "foundry_uaq1gw3",
                children: n
              })]
            }), (0, r.jsxs)(rm, {
              required: w,
              disabled: E,
              open: L,
              onOpenChange: () => M(!_ && !L),
              value: p,
              defaultValue: m,
              onValueChange: v,
              children: [(0, r.jsxs)(om, {
                className: (0, Le.$)("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!h && "foundry_uaq1gw7", _ && "foundry_uaq1gw6"),
                ref: x,
                "data-testid": s,
                "aria-activedescendant": p,
                "aria-labelledby": P || T,
                "aria-controls": O,
                children: [(0, r.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, r.jsx)(im, {
                    placeholder: o,
                    "aria-label": p
                  })
                }), (0, r.jsx)(am, {
                  asChild: !0,
                  className: (0, Le.$)("foundry_uaq1gw9", (_ || E) && "foundry_uaq1gwa"),
                  children: L ? (0, r.jsx)(oe.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, r.jsx)(oe.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, r.jsx)(sm, {
                children: (0, r.jsx)(lm, {
                  id: O,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, r.jsxs)(zm, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, r.jsx)(um, {
                      className: (0, Le.$)("foundry_uaq1gwc", d && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, r.jsx)(qm, {
                        className: "foundry_uaq1gwk",
                        children: e
                      })
                    }), (0, r.jsx)(Wm, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, r.jsx)(Xm, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), a && (0, r.jsx)(f, {
              enabled: !!h || u,
              children: (0, r.jsx)(I, {
                className: "foundry_uaq1gwf",
                children: a
              })
            }), h && (0, r.jsxs)(I, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, r.jsx)(oe.X, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), h]
            })]
          })
        })),
        Zm = (0, i.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: o,
          iconPosition: a,
          isDisabled: s,
          testId: l
        }, u) => {
          const c = Pt((0, i.useRef)(null), u),
            d = n && oe[n];
          return (0, r.jsxs)(cm, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: s,
            "data-testid": l,
            children: [d && "left" === a && (0, r.jsx)(d, {
              label: o || "",
              size: "LG"
            }), (0, r.jsx)(dm, {
              children: e
            }), d && "right" === a && (0, r.jsx)(d, {
              label: o || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }))
    },
    10593: (e, t, n) => {
      n.d(t, {
        s: () => i,
        t: () => o
      });
      var r = n(71403);

      function o(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }

      function i(...e) {
        return (0, r.useCallback)(o(...e), e)
      }
    },
    27109: (e, t, n) => {
      n.d(t, {
        sG: () => a
      });
      var r = n(26677),
        o = n(71403),
        i = (n(79493), n(45891));
      const a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
        const n = (0, o.forwardRef)(((e, n) => {
          const {
            asChild: a,
            ...s
          } = e, l = a ? i.DX : t;
          return (0, o.useEffect)((() => {
            window[Symbol.for("radix-ui")] = !0
          }), []), (0, o.createElement)(l, (0, r.A)({}, s, {
            ref: n
          }))
        }));
        return n.displayName = `Primitive.${t}`, {
          ...e,
          [t]: n
        }
      }), {})
    },
    45891: (e, t, n) => {
      n.d(t, {
        DX: () => a,
        xV: () => l
      });
      var r = n(26677),
        o = n(71403),
        i = n(10593);
      const a = (0, o.forwardRef)(((e, t) => {
        const {
          children: n,
          ...i
        } = e, a = o.Children.toArray(n), l = a.find(u);
        if (l) {
          const e = l.props.children,
            n = a.map((t => t === l ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : t));
          return (0, o.createElement)(s, (0, r.A)({}, i, {
            ref: t
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, n) : null)
        }
        return (0, o.createElement)(s, (0, r.A)({}, i, {
          ref: t
        }), n)
      }));
      a.displayName = "Slot";
      const s = (0, o.forwardRef)(((e, t) => {
        const {
          children: n,
          ...r
        } = e;
        return (0, o.isValidElement)(n) ? (0, o.cloneElement)(n, {
          ...c(r, n.props),
          ref: t ? (0, i.t)(t, n.ref) : n.ref
        }) : o.Children.count(n) > 1 ? o.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      const l = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function u(e) {
        return (0, o.isValidElement)(e) && e.type === l
      }

      function c(e, t) {
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