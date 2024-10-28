! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "202bca84-9519-4f0f-9baf-d9abf1f37127", e._sentryDebugIdIdentifier = "sentry-dbid-202bca84-9519-4f0f-9baf-d9abf1f37127")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7322], {
    60903: (e, t, r) => {
      function n(e, t) {
        var r = t && t.cache ? t.cache : c,
          n = t && t.serializer ? t.serializer : s;
        return (t && t.strategy ? t.strategy : i)(e, {
          cache: r,
          serializer: n
        })
      }

      function a(e, t, r, n) {
        var a, o = null == (a = n) || "number" == typeof a || "boolean" == typeof a ? n : r(n),
          l = t.get(o);
        return void 0 === l && (l = e.call(this, n), t.set(o, l)), l
      }

      function o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          a = r(n),
          o = t.get(a);
        return void 0 === o && (o = e.apply(this, n), t.set(a, o)), o
      }

      function l(e, t, r, n, a) {
        return r.bind(t, e, n, a)
      }

      function i(e, t) {
        return l(e, this, 1 === e.length ? a : o, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => n,
        W: () => u
      });
      var s = function() {
        return JSON.stringify(arguments)
      };

      function d() {
        this.cache = Object.create(null)
      }
      d.prototype.get = function(e) {
        return this.cache[e]
      }, d.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var c = {
          create: function() {
            return new d
          }
        },
        u = {
          variadic: function(e, t) {
            return l(e, this, o, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return l(e, this, a, t.cache.create(), t.serializer)
          }
        }
    },
    97322: (e, t, r) => {
      r.r(t), r.d(t, {
        Button: () => Ec,
        Caption: () => J,
        Dropdown: () => nR,
        Heading: () => B,
        IconButton: () => Dx,
        Lightbox: () => hj,
        Metadata: () => le,
        Option: () => aR,
        Paragraph: () => q,
        Subtitle: () => he,
        Text: () => be,
        TextArea: () => Qd,
        TextSemantics: () => ye,
        Tooltip: () => tb
      });
      var n = {};
      r.r(n), r.d(n, {
        AlertTriangle: () => kt,
        ArrowDown: () => Ke,
        ArrowDownSolid: () => pi,
        ArrowLeft: () => Ye,
        ArrowLeftSolid: () => xi,
        ArrowRight: () => tt,
        ArrowRightSolid: () => Mi,
        ArrowUp: () => Fe,
        ArrowUpSolid: () => ui,
        Arrows: () => bt,
        AuxMenuSolid: () => kl,
        Bell: () => ml,
        BlockCircle: () => $t,
        Car: () => _l,
        ChatBubbleSolid: () => Ni,
        Check: () => Fo,
        CheckCircle: () => It,
        CheckCircleSolid: () => Vl,
        CheckShieldSolid: () => Yi,
        CheckSquare: () => tl,
        CheckSquareSolid: () => Fi,
        ChevronDown: () => ht,
        ChevronLeft: () => dt,
        ChevronRight: () => ot,
        ChevronUp: () => mt,
        Circle: () => Mo,
        CircleDot: () => So,
        Clock: () => Xt,
        Code: () => ea,
        CurrencySolid: () => Si,
        Download: () => nr,
        Envelope: () => Dr,
        EnvelopeSolid: () => ni,
        ExternalLink: () => Sr,
        Facebook: () => uo,
        Files: () => Jt,
        Gear: () => aa,
        GearSolid: () => Xl,
        Globe: () => qn,
        Grid: () => fa,
        HelpCircle: () => Hn,
        House: () => Wa,
        IdentificationSolid: () => hs,
        InfoCircle: () => Vt,
        Instagram: () => lo,
        Link: () => pr,
        List: () => ga,
        Maximize: () => vn,
        Menu: () => sa,
        Minimize: () => wn,
        Minus: () => No,
        MinusCircle: () => Ko,
        MinusCircleSolid: () => Il,
        MinusSquare: () => ol,
        MinusSquareSolid: () => Ki,
        Moon: () => jn,
        Padlock: () => za,
        PadlockPassword: () => Ua,
        PadlockPasswordSolid: () => bs,
        PadlockSolid: () => ms,
        PaperPlaneSolid: () => Jl,
        Paperclip: () => Nr,
        PartialCircle: () => Gn,
        Pause: () => cn,
        Pencil: () => xr,
        Person: () => Zn,
        PersonBlock: () => Qa,
        PersonBlockSolid: () => ds,
        PersonMinus: () => Oa,
        PersonMinusSolid: () => os,
        PersonPlus: () => Aa,
        PersonPlusSolid: () => ts,
        PersonSolid: () => $l,
        PhoneSolid: () => Di,
        Play: () => Yr,
        Plus: () => Do,
        Property: () => bl,
        Refresh: () => Mr,
        Revert: () => Ct,
        Search: () => ya,
        SkipBack: () => tn,
        SkipForward: () => on,
        Square: () => Yo,
        SquareSolid: () => Bi,
        Sun: () => Ln,
        ThumbsDown: () => dl,
        ThumbsUp: () => hl,
        Trash: () => ur,
        Twitch: () => ro,
        Twitter: () => po,
        TwoPeopleSolid: () => ii,
        Upload: () => ir,
        VolumeDown: () => Br,
        VolumeOff: () => Kr,
        VolumeUp: () => Fr,
        Weapon: () => Cl,
        WifiOff: () => Ea,
        WifiOn: () => Ra,
        X: () => Bo,
        XCircle: () => _t,
        Youtube: () => xo,
        ZoomIn: () => Pn,
        ZoomOut: () => Tn
      });
      var a = r(46632);
      const o = "undefined" == typeof window;

      function l(e) {
        var t, r, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (r = l(e[t])) && (n && (n += " "), n += r)
          } else
            for (r in e) e[r] && (n && (n += " "), n += r);
        return n
      }

      function i() {
        for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = l(e)) && (n && (n += " "), n += t);
        return n
      }
      const s = i;
      var d = r(94066),
        c = r(94048),
        u = r(27335),
        f = r(11377);
      const h = (e, t) => Array().concat(t).reduce(((e, t) => d(e, t, ((e, t) => c(e) && c(t) ? function(...e) {
          return (...t) => {
            for (const r of e) "function" == typeof r && r(...t)
          }
        }(e, t) : u(e) && u(t) ? h(e, t) : f(e) && f(t) ? i(e, t) : t || e))), e),
        v = /^(on.*)$/,
        p = /^(onPress.*)$/;

      function g(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && (p.test(a) ? t ? r[a] = e[a] : n[a] = e[a] : v.test(a) ? r[a] = e[a] : n[a] = e[a]);
        return {
          events: r,
          others: n
        }
      }
      r(51315), r(31949), r(31062), r(14653), r(4642), r(14963);
      var m = r(71403),
        w = r.t(m, 2),
        x = r.n(m),
        y = r(26677);

      function b(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }
      const j = (0, m.forwardRef)(((e, t) => {
        const {
          children: r,
          ...n
        } = e, a = m.Children.toArray(r), o = a.find(C);
        if (o) {
          const e = o.props.children,
            r = a.map((t => t === o ? m.Children.count(e) > 1 ? m.Children.only(null) : (0, m.isValidElement)(e) ? e.props.children : null : t));
          return (0, m.createElement)(M, (0, y.A)({}, n, {
            ref: t
          }), (0, m.isValidElement)(e) ? (0, m.cloneElement)(e, void 0, r) : null)
        }
        return (0, m.createElement)(M, (0, y.A)({}, n, {
          ref: t
        }), r)
      }));
      j.displayName = "Slot";
      const M = (0, m.forwardRef)(((e, t) => {
        const {
          children: r,
          ...n
        } = e;
        return (0, m.isValidElement)(r) ? (0, m.cloneElement)(r, {
          ...L(n, r.props),
          ref: t ? b(t, r.ref) : r.ref
        }) : m.Children.count(r) > 1 ? m.Children.only(null) : null
      }));
      M.displayName = "SlotClone";
      const R = ({
        children: e
      }) => (0, m.createElement)(m.Fragment, null, e);

      function C(e) {
        return (0, m.isValidElement)(e) && e.type === R
      }

      function L(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const a = e[n],
            o = t[n];
          /^on[A-Z]/.test(n) ? a && o ? r[n] = (...e) => {
            o(...e), a(...e)
          } : a && (r[n] = a) : "style" === n ? r[n] = {
            ...a,
            ...o
          } : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var S = r(79493);
      const E = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = (0, m.forwardRef)(((e, r) => {
            const {
              asChild: n,
              ...a
            } = e, o = n ? j : t;
            return (0, m.useEffect)((() => {
              window[Symbol.for("radix-ui")] = !0
            }), []), (0, m.createElement)(o, (0, y.A)({}, a, {
              ref: r
            }))
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        _ = (0, m.forwardRef)(((e, t) => (0, m.createElement)(E.span, (0, y.A)({}, e, {
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
        P = ({
          enabled: e = !0,
          ...t
        }) => {
          const r = e ? _ : m.Fragment;
          return (0, a.jsx)(r, {
            ...t
          })
        };

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

      function A(e, t) {
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
          t % 2 ? A(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = D(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(t) {
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
      var N, O, k = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        H = (N = {
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
        }, (O = e => {
          var t = N.defaultClassName,
            r = I(I({}, N.defaultVariants), e);
          for (var n in r) {
            var a, o = null !== (a = r[n]) && void 0 !== a ? a : N.defaultVariants[n];
            if (null != o) {
              var l = o;
              "boolean" == typeof l && (l = !0 === l ? "true" : "false");
              var i = N.variantClassNames[n][l];
              i && (t += " " + i)
            }
          }
          for (var [s, d] of N.compoundVariants) k(s, r, N.defaultVariants) && (t += " " + d);
          return t
        }).variants = () => Object.keys(N.variantClassNames), O.classNames = {
          get base() {
            return N.defaultClassName.split(" ")[0]
          },
          get variants() {
            return T(N.variantClassNames, (e => T(e, (e => e.split(" ")[0]))))
          }
        }, O);
      const B = (0, m.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const l = e ? j : `h${t}`,
          i = h(n, {
            className: H({
              level: t
            })
          });
        return (0, a.jsx)(l, {
          ref: o,
          "data-testid": r,
          ...i
        })
      }));

      function z(e) {
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

      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? V(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = z(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function F(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var U = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        X = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = G(G({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) U(d, n, e.defaultVariants) && (r += " " + c);
            return r
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
      const q = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const l = e ? j : "p",
          i = h(n, {
            className: X({
              appearance: r
            })
          });
        return (0, a.jsx)(l, {
          ref: o,
          "data-testid": t,
          ...i
        })
      }));

      function K(e) {
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

      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? W(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = K(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : W(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Z(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Y = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        Q = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $($({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) Y(d, n, e.defaultVariants) && (r += " " + c);
            return r
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
      const J = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const l = e ? j : "span",
          i = h(n, {
            className: Q({
              appearance: r
            })
          });
        return (0, a.jsx)(l, {
          ref: o,
          "data-testid": t,
          ...i
        })
      }));

      function ee(e) {
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

      function te(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? te(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = ee(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : te(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ne(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ae = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        oe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = re(re({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) ae(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ne(e.variantClassNames, (e => ne(e, (e => e.split(" ")[0]))))
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
      const le = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const l = e ? j : "span",
          i = h(n, {
            className: oe({
              appearance: r
            })
          });
        return (0, a.jsx)(l, {
          ref: o,
          "data-testid": t,
          ...i
        })
      }));

      function ie(e) {
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

      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? se(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = ie(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ce(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var ue = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        fe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = de(de({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) ue(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ce(e.variantClassNames, (e => ce(e, (e => e.split(" ")[0]))))
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
      const he = (0, m.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const l = e ? j : "p",
          i = h(n, {
            className: fe({
              appearance: r
            })
          });
        return (0, a.jsx)(l, {
          ref: o,
          "data-testid": t,
          ...i
        })
      }));

      function ve(e) {
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

      function pe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? pe(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = ve(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pe(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function me(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var we = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        xe = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ge(ge({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) we(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return me(e.variantClassNames, (e => me(e, (e => e.split(" ")[0]))))
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
      const ye = {
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
        be = (0, m.forwardRef)((({
          asChild: e,
          testId: t,
          semantic: r = "default",
          ...n
        }, o) => {
          const l = e ? j : ye[r] || "span",
            i = h(n, {
              className: xe({
                semantic: r
              })
            });
          return (0, a.jsx)(l, {
            ref: o,
            "data-testid": t,
            ...i
          })
        }));

      function je(...e) {
        return t => e.forEach((e => function(e, t) {
          "function" == typeof e ? e(t) : null != e && (e.current = t)
        }(e, t)))
      }

      function Me(...e) {
        return m.useCallback(je(...e), e)
      }
      var Re = m.forwardRef(((e, t) => {
        const {
          children: r,
          ...n
        } = e, o = m.Children.toArray(r), l = o.find(Se);
        if (l) {
          const e = l.props.children,
            r = o.map((t => t === l ? m.Children.count(e) > 1 ? m.Children.only(null) : m.isValidElement(e) ? e.props.children : null : t));
          return (0, a.jsx)(Ce, {
            ...n,
            ref: t,
            children: m.isValidElement(e) ? m.cloneElement(e, void 0, r) : null
          })
        }
        return (0, a.jsx)(Ce, {
          ...n,
          ref: t,
          children: r
        })
      }));
      Re.displayName = "Slot";
      var Ce = m.forwardRef(((e, t) => {
        const {
          children: r,
          ...n
        } = e;
        if (m.isValidElement(r)) {
          const e = function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return m.cloneElement(r, {
            ...Ee(n, r.props),
            ref: t ? je(t, e) : e
          })
        }
        return m.Children.count(r) > 1 ? m.Children.only(null) : null
      }));
      Ce.displayName = "SlotClone";
      var Le = ({
        children: e
      }) => (0, a.jsx)(a.Fragment, {
        children: e
      });

      function Se(e) {
        return m.isValidElement(e) && e.type === Le
      }

      function Ee(e, t) {
        const r = {
          ...t
        };
        for (const n in t) {
          const a = e[n],
            o = t[n];
          /^on[A-Z]/.test(n) ? a && o ? r[n] = (...e) => {
            o(...e), a(...e)
          } : a && (r[n] = a) : "style" === n ? r[n] = {
            ...a,
            ...o
          } : "className" === n && (r[n] = [a, o].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var _e = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
          const r = m.forwardRef(((e, r) => {
            const {
              asChild: n,
              ...o
            } = e, l = n ? Re : t;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
              ...o,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }), {}),
        Pe = m.forwardRef(((e, t) => (0, a.jsx)(_e.span, {
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
      Pe.displayName = "VisuallyHidden";
      var De = Pe,
        Ae = ({
          children: e,
          label: t
        }) => {
          const r = m.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [m.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(De, {
              children: t
            })]
          })
        };
      Ae.displayName = "AccessibleIcon";
      var Ie = Ae;

      function Te(e) {
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

      function Ne(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ne(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = Te(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ne(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function ke(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var He = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        Be = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Oe(Oe({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) He(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ke(e.variantClassNames, (e => ke(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_v1yii70",
          variantClassNames: {
            size: {
              MD: "foundry_v1yii71",
              LG: "foundry_v1yii72",
              XL: "foundry_v1yii73"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ze = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06L8.75 4.81V13a.75.75 0 0 1-1.5 0V4.81L3.53 8.53a.75.75 0 0 1-1.06-1.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ve = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 6.414V20a1 1 0 1 1-2 0V6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ge = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 3.75c.352 0 .688.149.925.41l10 11a1.25 1.25 0 1 1-1.85 1.68L17.25 8.234V26a1.25 1.25 0 1 1-2.5 0V8.233l-7.825 8.608a1.25 1.25 0 1 1-1.85-1.682l10-11c.237-.26.573-.409.925-.409",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fe = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ze, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ve, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ge, {
              ...n,
              ref: r
            })]
          })
        }));
      Fe.displayName = "ArrowUp", Fe.category = "Arrows", Fe.variant = "Outline", Fe.keywords = "Up, Navigation, Increase", Fe.MD = ze, Fe.LG = Ve, Fe.XL = Ge;
      const Ue = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v8.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 1.06-1.06l3.72 3.72V3A.75.75 0 0 1 8 2.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xe = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 1 1 1v13.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 17.586V4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qe = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 3.75c.69 0 1.25.56 1.25 1.25v18.767l7.825-8.608a1.25 1.25 0 1 1 1.85 1.682l-10 11a1.25 1.25 0 0 1-1.85 0l-10-11a1.25 1.25 0 1 1 1.85-1.682l7.825 8.608V5c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ke = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ue, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Xe, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(qe, {
              ...n,
              ref: r
            })]
          })
        }));
      Ke.displayName = "ArrowDown", Ke.category = "Arrows", Ke.variant = "Outline", Ke.keywords = "Down, Navigation, Decrease", Ke.MD = Ue, Ke.LG = Xe, Ke.XL = qe;
      const We = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.53 2.47a.75.75 0 0 1 0 1.06L3.81 7.25H14a.75.75 0 0 1 0 1.5H3.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $e = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.707 4.293a1 1 0 0 1 0 1.414L6.414 11H20a1 1 0 1 1 0 2H6.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ze = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16.925 5.16a1.25 1.25 0 0 1-.084 1.765L8.233 14.75H27a1.25 1.25 0 0 1 0 2.5H8.233l8.608 7.825a1.25 1.25 0 1 1-1.682 1.85l-11-10a1.25 1.25 0 0 1 0-1.85l11-10a1.25 1.25 0 0 1 1.766.084",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ye = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(We, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)($e, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ze, {
              ...n,
              ref: r
            })]
          })
        }));
      Ye.displayName = "ArrowLeft", Ye.category = "Arrows", Ye.variant = "Outline", Ye.keywords = "Left, Navigation, Back", Ye.MD = We, Ye.LG = $e, Ye.XL = Ze;
      const Qe = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.72-3.72H2a.75.75 0 0 1 0-1.5h10.19L8.47 3.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Je = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        et = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.075 5.16a1.25 1.25 0 0 1 1.766-.085l11 10a1.25 1.25 0 0 1 0 1.85l-11 10a1.25 1.25 0 1 1-1.682-1.85l8.608-7.825H5a1.25 1.25 0 1 1 0-2.5h18.767l-8.608-7.825a1.25 1.25 0 0 1-.084-1.766",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Qe, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Je, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(et, {
              ...n,
              ref: r
            })]
          })
        }));
      tt.displayName = "ArrowRight", tt.category = "Arrows", tt.variant = "Outline", tt.keywords = "Right, Navigation, Forward", tt.MD = Qe, tt.LG = Je, tt.XL = et;
      const rt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        at = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.116 7.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1 0 1.768l-8 8a1.25 1.25 0 0 1-1.768-1.768L18.232 16l-7.116-7.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ot = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(rt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(nt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(at, {
              ...n,
              ref: r
            })]
          })
        }));
      ot.displayName = "ChevronRight", ot.category = "Arrows", ot.variant = "Outline", ot.keywords = "Right, Direction, Side, Navigation", ot.MD = rt, ot.LG = nt, ot.XL = at;
      const lt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.529a.667.667 0 0 1-.942.942l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        it = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        st = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M20.884 7.116a1.25 1.25 0 0 1 0 1.768L13.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768l-8-8a1.25 1.25 0 0 1 0-1.768l8-8a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(lt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(it, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(st, {
              ...n,
              ref: r
            })]
          })
        }));
      dt.displayName = "ChevronLeft", dt.category = "Arrows", dt.variant = "Outline", dt.keywords = "Left, Direction, Side, Navigation", dt.MD = lt, dt.LG = it, dt.XL = st;
      const ct = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 1 1 .942.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ut = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ft = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.116 11.116a1.25 1.25 0 0 1 1.768 0L16 18.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768l-8 8a1.25 1.25 0 0 1-1.768 0l-8-8a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ht = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ct, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ut, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ft, {
              ...n,
              ref: r
            })]
          })
        }));
      ht.displayName = "ChevronDown", ht.category = "Arrows", ht.variant = "Outline", ht.keywords = "Down, Direction, Bottom, Navigation", ht.MD = ct, ht.LG = ut, ht.XL = ft;
      const vt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 0 1-.942.942L8 6.943 4.471 10.47a.667.667 0 1 1-.942-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.116 11.116a1.25 1.25 0 0 1 1.768 0l8 8a1.25 1.25 0 0 1-1.768 1.768L16 13.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(vt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(pt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(gt, {
              ...n,
              ref: r
            })]
          })
        }));
      mt.displayName = "ChevronUp", mt.category = "Arrows", mt.variant = "Outline", mt.keywords = "Up, Direction, Top, Navigation", mt.MD = vt, mt.LG = pt, mt.XL = gt;
      const wt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.47 3.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72V12a.75.75 0 0 1-1.5 0V5.81l-.72.72a.75.75 0 0 1-1.06-1.06zM11 3.25a.75.75 0 0 1 .75.75v6.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 5a1 1 0 0 1 .8.4l3 4a1 1 0 0 1-1.6 1.2L9 9v9a1 1 0 1 1-2 0V9l-1.2 1.6a1 1 0 1 1-1.6-1.2l3-4A1 1 0 0 1 8 5m8 0a1 1 0 0 1 1 1v9l1.2-1.6a1 1 0 0 1 1.6 1.2l-3 4a1 1 0 0 1-1.6 0l-3-4a1 1 0 0 1 1.6-1.2L15 15V6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11 6.75c.418 0 .808.209 1.04.557l4 6a1.25 1.25 0 0 1-2.08 1.386l-1.71-2.564V24a1.25 1.25 0 1 1-2.5 0V12.129l-1.71 2.564a1.25 1.25 0 0 1-2.08-1.386l4-6A1.25 1.25 0 0 1 11 6.75m10 0c.69 0 1.25.56 1.25 1.25v11.872l1.71-2.565a1.25 1.25 0 0 1 2.08 1.386l-4 6a1.25 1.25 0 0 1-2.08 0l-4-6a1.25 1.25 0 0 1 2.08-1.386l1.71 2.565V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(wt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(xt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(yt, {
              ...n,
              ref: r
            })]
          })
        }));
      bt.displayName = "Arrows", bt.category = "Arrows", bt.variant = "Outline", bt.keywords = "Sorting, Sortable, Control, Filter, Sort", bt.MD = wt, bt.LG = xt, bt.XL = yt;
      const jt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.47 3.47a.75.75 0 0 1 1.06 1.06L6 4zm-.66 2.78 1.72-1.719L6 4l-.53-.53-3 3a.75.75 0 0 0 0 1.06l2.997 2.998.002.002L6 10l-.53.53a.75.75 0 0 0 1.06-1.06v-.001L4.81 7.75H10a2.25 2.25 0 0 1 0 4.5H7.643a.75.75 0 0 0 0 1.5H10a3.75 3.75 0 1 0 0-7.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.707 5.293a1 1 0 0 1 0 1.414L7.414 9H14.5a5.5 5.5 0 1 1 0 11h-2.464a1 1 0 1 1 0-2H14.5a3.5 3.5 0 1 0 0-7H7.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.884 6.116a1.25 1.25 0 0 1 0 1.768l-2.866 2.866h8.444c3.841 0 6.788 3.342 6.788 7.25s-2.947 7.25-6.788 7.25h-3.033a1.25 1.25 0 1 1 0-2.5h3.033c2.276 0 4.288-2.03 4.288-4.75s-2.012-4.75-4.288-4.75h-8.444l2.866 2.866a1.25 1.25 0 0 1-1.768 1.768l-5-5a1.25 1.25 0 0 1 0-1.768l5-5a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ct = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(jt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Mt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Rt, {
              ...n,
              ref: r
            })]
          })
        }));
      Ct.displayName = "Revert", Ct.category = "Arrows", Ct.variant = "Outline", Ct.keywords = "Back, Undo, Return, Arrow, Navigation", Ct.MD = jt, Ct.LG = Mt, Ct.XL = Rt;
      const Lt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4.22-2.53a.75.75 0 0 1 1.06 0L8 6.94l1.47-1.47a.75.75 0 1 1 1.06 1.06L9.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06L8 9.06l-1.47 1.47a.75.75 0 1 1-1.06-1.06L6.94 8 5.47 6.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        St = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Et = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m8.366-4.884a1.25 1.25 0 0 1 1.768 0L16 14.232l3.116-3.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l3.116 3.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-3.116 3.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16l-3.116-3.116a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _t = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Lt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(St, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Et, {
              ...n,
              ref: r
            })]
          })
        }));
      _t.displayName = "XCircle", _t.category = "Feedback", _t.variant = "Outline", _t.keywords = "Close, Error, Remove, Clean, Erase, Deprecate, Delete, Navigation", _t.MD = Lt, _t.LG = St, _t.XL = Et;
      const Pt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m10.28-2.53a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.664-3.747a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        At = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m19.05-4.96c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        It = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Pt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Dt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(At, {
              ...n,
              ref: r
            })]
          })
        }));
      It.displayName = "CheckCircle", It.category = "Feedback", It.variant = "Outline", It.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", It.MD = Pt, It.LG = Dt, It.XL = At;
      const Tt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.053 1.512a1.85 1.85 0 0 1 1.894 0c.286.17.521.413.686.7l.002.004 4.87 8.602a2.02 2.02 0 0 1 .005 1.924c-.16.296-.393.548-.68.727a1.85 1.85 0 0 1-.957.28l-.009.001H3.127a1.85 1.85 0 0 1-.957-.281 1.94 1.94 0 0 1-.68-.727 2.02 2.02 0 0 1 .006-1.924l.005-.01 4.866-8.596c.165-.287.4-.53.686-.7M8 2.75a.35.35 0 0 0-.18.05.43.43 0 0 0-.15.157l-.001.001L2.81 11.54a.52.52 0 0 0 .001.49q.062.111.151.165a.35.35 0 0 0 .18.055h9.717a.35.35 0 0 0 .178-.055.44.44 0 0 0 .152-.164.52.52 0 0 0 0-.49L8.332 2.957v-.001A.43.43 0 0 0 8.18 2.8.35.35 0 0 0 8 2.75m0 2.5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 8 5.25m-.75 5.25A.75.75 0 0 1 8 9.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.655 3.361a2.69 2.69 0 0 1 2.69 0c.41.237.749.575.989.981l.003.005 7.296 12.497.008.014a2.8 2.8 0 0 1 .007 2.735c-.232.419-.57.771-.98 1.019s-.88.383-1.36.388H4.692a2.7 2.7 0 0 1-1.36-.388c-.411-.248-.749-.6-.981-1.019a2.8 2.8 0 0 1 .007-2.735l.008-.014 7.3-12.502c.24-.406.579-.744.988-.98M12 5a.7.7 0 0 0-.345.093.74.74 0 0 0-.266.265l-7.29 12.486a.8.8 0 0 0 .001.778.75.75 0 0 0 .266.278.7.7 0 0 0 .345.1h14.578a.7.7 0 0 0 .345-.1c.108-.065.2-.16.266-.278a.8.8 0 0 0 0-.778L12.613 5.36v-.002a.74.74 0 0 0-.267-.265A.7.7 0 0 0 12 5m0 3.004a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M11 16.5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ot = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.233 4.239A3.45 3.45 0 0 1 16 3.75c.623 0 1.232.17 1.767.489s.973.771 1.282 1.31l.003.005 9.728 17.184.01.017a3.8 3.8 0 0 1 .46 1.805 3.8 3.8 0 0 1-.45 1.806 3.6 3.6 0 0 1-1.271 1.36 3.45 3.45 0 0 1-1.786.524H6.257a3.45 3.45 0 0 1-1.786-.524 3.6 3.6 0 0 1-1.27-1.36 3.8 3.8 0 0 1-.451-1.806 3.8 3.8 0 0 1 .46-1.805l.01-.017 9.731-17.19a3.6 3.6 0 0 1 1.282-1.31M16 6.25a.95.95 0 0 0-.487.136c-.153.092-.29.228-.391.403l-.002.003L5.401 23.96c-.097.18-.15.39-.151.606 0 .22.053.431.152.614.098.183.235.326.39.423.154.095.322.144.489.147h19.438a.95.95 0 0 0 .488-.147c.155-.097.293-.24.391-.423a1.3 1.3 0 0 0 .152-.614 1.3 1.3 0 0 0-.151-.606l-9.72-17.168v-.003a1.1 1.1 0 0 0-.392-.403A.95.95 0 0 0 16 6.25m0 4.5c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25M14.75 23c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Tt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Nt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ot, {
              ...n,
              ref: r
            })]
          })
        }));
      kt.displayName = "AlertTriangle", kt.category = "Feedback", kt.variant = "Outline", kt.keywords = "Warning, Alert, Caution, Attention, Danger, Error, Triangle", kt.MD = Tt, kt.LG = Nt, kt.XL = Ot;
      const Ht = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6-3A.75.75 0 0 1 8 4.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 5M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m9-4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m12-6c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25M16 13.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ht, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Bt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(zt, {
              ...n,
              ref: r
            })]
          })
        }));
      Vt.displayName = "InfoCircle", Vt.category = "Feedback", Vt.variant = "Outline", Vt.keywords = "Info, Information, Help, Support", Vt.MD = Ht, Vt.LG = Bt, Vt.XL = zt;
      const Gt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M8 4.25a.75.75 0 0 1 .75.75v2.536l1.585.793a.75.75 0 1 1-.67 1.342l-2-1A.75.75 0 0 1 7.25 8V5A.75.75 0 0 1 8 4.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ft = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-6a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 13V7a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ut = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16M16 6.75c.69 0 1.25.56 1.25 1.25v8.228l5.309 2.654a1.25 1.25 0 1 1-1.118 2.236l-6-3A1.25 1.25 0 0 1 14.75 17V8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Gt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ft, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ut, {
              ...n,
              ref: r
            })]
          })
        }));
      Xt.displayName = "Clock", Xt.category = "Feedback", Xt.variant = "Outline", Xt.keywords = "Time, Hour, Minute, Second, Planned, Watch", Xt.MD = Gt, Xt.LG = Ft, Xt.XL = Ut;
      const qt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.795 4.856a5.25 5.25 0 0 0 7.349 7.349zm1.06-1.06 7.35 7.348a5.25 5.25 0 0 0-7.349-7.349M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.68 7.094A8 8 0 0 0 16.905 18.32zM7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.566 9.334A10.7 10.7 0 0 0 5.25 16c0 5.937 4.813 10.75 10.75 10.75 2.518 0 4.834-.866 6.666-2.316zm1.768-1.768 15.1 15.1A10.7 10.7 0 0 0 26.75 16c0-5.937-4.813-10.75-10.75-10.75-2.518 0-4.834.866-6.666 2.316M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $t = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(qt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Kt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Wt, {
              ...n,
              ref: r
            })]
          })
        }));
      $t.displayName = "BlockCircle", $t.category = "Feedback", $t.variant = "Outline", $t.keywords = "Blocked, Restricted, Denied, Forbidden, Unavailable, Stop, No, Cancel, Error, Alert", $t.MD = qt, $t.LG = Kt, $t.XL = Wt;
      const Zt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.874 1.725A2.08 2.08 0 0 1 7.23 1.25h5.538a1.98 1.98 0 0 1 1.981 1.98v5.54c0 .444-.103.925-.393 1.316-.31.42-.787.664-1.357.664h-.75v-1.5H13a.25.25 0 0 0 .11-.019.1.1 0 0 0 .042-.038c.04-.055.098-.189.098-.424V3.231a.48.48 0 0 0-.48-.481H7.23a.6.6 0 0 0-.383.116c-.055.047-.097.114-.097.234v.75h-1.5V3.1c0-.56.234-1.043.624-1.375M2.25 6.23A1.98 1.98 0 0 1 4.23 4.25h5.54a1.98 1.98 0 0 1 1.98 1.98v5.54a1.98 1.98 0 0 1-1.98 1.98H4.23a1.98 1.98 0 0 1-1.98-1.98zm1.98-.481a.48.48 0 0 0-.48.48v5.54c0 .265.215.48.48.48h5.54a.48.48 0 0 0 .48-.48V6.23a.48.48 0 0 0-.48-.48z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.945 3.564C8.503 3.151 9.197 3 9.846 3h8.308A2.846 2.846 0 0 1 21 5.846v8.308c0 .65-.15 1.343-.564 1.9-.442.597-1.119.946-1.936.946h-1v-2h1a.5.5 0 0 0 .22-.041.3.3 0 0 0 .109-.095c.081-.11.171-.34.171-.71V5.846A.846.846 0 0 0 18.154 5H9.846c-.37 0-.6.09-.71.171a.3.3 0 0 0-.095.109A.5.5 0 0 0 9 5.5v1H7v-1c0-.817.35-1.494.945-1.936M3 9.846A2.846 2.846 0 0 1 5.846 7h8.308A2.846 2.846 0 0 1 17 9.846v8.308A2.846 2.846 0 0 1 14.154 21H5.846A2.846 2.846 0 0 1 3 18.154zM5.846 9A.846.846 0 0 0 5 9.846v8.308c0 .467.379.846.846.846h8.308a.846.846 0 0 0 .846-.846V9.846A.846.846 0 0 0 14.154 9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qt = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.764 5.086c.618-.736 1.559-1.336 2.698-1.336h11.077a3.71 3.71 0 0 1 3.711 3.712v11.077c0 1.106-.545 2.044-1.263 2.677A4.1 4.1 0 0 1 24.3 22.25h-1.25v-2.5h1.25c.352 0 .738-.149 1.033-.408.291-.258.417-.55.417-.803V7.461c0-.67-.542-1.212-1.212-1.212H13.462c-.22 0-.51.12-.783.444-.274.326-.428.747-.428 1.106v1.25h-2.5V7.8c0-1 .397-1.98 1.014-2.714M3.75 13.461A3.71 3.71 0 0 1 7.462 9.75h11.077a3.71 3.71 0 0 1 3.711 3.711v11.077a3.71 3.71 0 0 1-3.712 3.712H7.462a3.71 3.71 0 0 1-3.712-3.712zm3.712-1.211c-.67 0-1.212.542-1.212 1.211v11.077c0 .67.542 1.212 1.212 1.212h11.077c.669 0 1.211-.542 1.211-1.212V13.462c0-.669-.542-1.211-1.212-1.211z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jt = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Zt, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Yt, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Qt, {
              ...n,
              ref: r
            })]
          })
        }));
      Jt.displayName = "Files", Jt.category = "Files", Jt.variant = "Outline", Jt.keywords = "Copy, Data, Document, File, Folder, Restore", Jt.MD = Zt, Jt.LG = Yt, Jt.XL = Qt;
      const er = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V2A.75.75 0 0 1 8 1.25m-5 7a.75.75 0 0 1 .75.75v3.12l.02.014a.93.93 0 0 0 .48.116h7.5a.93.93 0 0 0 .5-.13V9a.75.75 0 0 1 1.5 0v3.2c0 .546-.337.958-.712 1.197-.376.241-.84.353-1.288.353h-7.5c-.447 0-.912-.112-1.288-.353-.375-.24-.712-.65-.712-1.197V9A.75.75 0 0 1 3 8.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 11.586V3a1 1 0 0 1 1-1M4 13a1 1 0 0 1 1 1v4.718c.02.018.05.043.1.073.19.114.512.209.9.209h12c.388 0 .71-.095.9-.209a.6.6 0 0 0 .1-.073V14a1 1 0 1 1 2 0v4.8c0 .795-.521 1.376-1.071 1.706-.56.336-1.256.494-1.929.494H6c-.673 0-1.368-.158-1.929-.494C3.521 20.176 3 19.595 3 18.8V14a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v11.982l4.866-4.866a1.25 1.25 0 0 1 1.768 1.768l-7 7a1.25 1.25 0 0 1-1.768 0l-7-7a1.25 1.25 0 0 1 1.768-1.768l4.866 4.866V4c0-.69.56-1.25 1.25-1.25m-11 15c.69 0 1.25.56 1.25 1.25v6.314a.8.8 0 0 0 .184.137c.287.167.759.299 1.316.299h16.5c.557 0 1.03-.132 1.316-.3a.8.8 0 0 0 .184-.136V19a1.25 1.25 0 1 1 2.5 0v6.4c0 1.04-.7 1.79-1.427 2.212-.745.433-1.672.638-2.573.638H7.75c-.901 0-1.828-.205-2.573-.638C4.45 27.189 3.75 26.44 3.75 25.4V19c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(er, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(tr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(rr, {
              ...n,
              ref: r
            })]
          })
        }));
      nr.displayName = "Download", nr.category = "Files", nr.variant = "Outline", nr.keywords = "Down, File", nr.MD = er, nr.LG = tr, nr.XL = rr;
      const ar = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.47 1.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.75 3.81V9a.75.75 0 0 1-1.5 0V3.81L5.53 5.53a.75.75 0 0 1-1.06-1.06zM3 6.25a.75.75 0 0 1 .75.75v4.8c0 .11.045.22.136.307a.53.53 0 0 0 .364.143h7.5a.53.53 0 0 0 .364-.143.43.43 0 0 0 .136-.307V7a.75.75 0 0 1 1.5 0v4.8c0 .527-.219 1.026-.597 1.39-.377.362-.882.56-1.403.56h-7.5c-.52 0-1.026-.198-1.403-.56a1.93 1.93 0 0 1-.597-1.39V7A.75.75 0 0 1 3 6.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        or = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM4 10a1 1 0 0 1 1 1v7.2c0 .176.077.37.255.53.181.163.448.27.745.27h12c.297 0 .564-.107.745-.27A.72.72 0 0 0 19 18.2V11a1 1 0 1 1 2 0v7.2c0 .779-.345 1.501-.917 2.016A3.12 3.12 0 0 1 18 21H6a3.12 3.12 0 0 1-2.083-.784A2.71 2.71 0 0 1 3 18.2V11a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.116 3.116a1.25 1.25 0 0 1 1.768 0l7 7a1.25 1.25 0 0 1-1.768 1.768L17.25 7.018V20a1.25 1.25 0 1 1-2.5 0V7.018l-4.866 4.866a1.25 1.25 0 0 1-1.768-1.768zM5 13.75c.69 0 1.25.56 1.25 1.25v9.6c0 .246.11.522.377.755.273.238.674.395 1.123.395h16.5c.449 0 .85-.157 1.123-.395.267-.233.377-.51.377-.755V15a1.25 1.25 0 1 1 2.5 0v9.6c0 1.027-.469 1.972-1.233 2.639-.76.662-1.757 1.011-2.767 1.011H7.75c-1.01 0-2.007-.349-2.766-1.011-.765-.667-1.234-1.612-1.234-2.639V15c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ir = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ar, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(or, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(lr, {
              ...n,
              ref: r
            })]
          })
        }));
      ir.displayName = "Upload", ir.category = "Files", ir.variant = "Outline", ir.keywords = "Up, File, Share", ir.MD = ar, ir.LG = or, ir.XL = lr;
      const sr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7 2.75a.25.25 0 0 0-.25.25v.25h2.5V3A.25.25 0 0 0 9 2.75zm3.75.5V3A1.75 1.75 0 0 0 9 1.25H7A1.75 1.75 0 0 0 5.25 3v.25H3a.75.75 0 0 0 0 1.5h.25v5.534c0 .576.03 1.088.125 1.527.096.446.272.862.597 1.194.636.65 1.617.745 2.684.745h2.688c1.067 0 2.048-.094 2.685-.745.324-.332.5-.748.597-1.194.095-.438.124-.951.124-1.527V4.75H13a.75.75 0 0 0 0-1.5zm.5 1.5h-6.5v5.534c0 .542.03.928.09 1.208.06.273.138.397.204.464.145.149.492.294 1.612.294h2.688c1.12 0 1.467-.145 1.612-.294.066-.067.144-.19.204-.463.06-.281.09-.667.09-1.21zM6.5 6.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.066 4.273c-.037.125-.066.34-.066.719V5h4v-.008c0-.378-.03-.594-.066-.72a.3.3 0 0 0-.034-.083l-.008-.008c-.016-.013-.104-.069-.375-.114-.269-.045-.643-.067-1.173-.067h-.688c-.53 0-.904.022-1.173.067-.27.045-.359.101-.375.114-.005.003-.005.004-.008.007a.3.3 0 0 0-.034.085M16 5v-.008c0-.829-.094-1.8-.908-2.411-.374-.28-.813-.415-1.246-.487S12.908 2 12.344 2h-.688c-.564 0-1.068.022-1.502.094s-.872.206-1.246.487C8.094 3.19 8 4.163 8 4.992V5H4a1 1 0 0 0 0 2h1v8.933c0 .86.044 1.617.184 2.26.142.655.397 1.253.863 1.729C6.961 20.854 8.38 21 9.984 21h4.032c1.605 0 3.023-.146 3.937-1.078.466-.476.72-1.074.863-1.728.14-.644.184-1.402.184-2.261V7h1a1 1 0 1 0 0-2zm1 2H7v8.933c0 .815.044 1.402.138 1.835.092.423.218.632.338.754.259.264.832.478 2.508.478h4.032c1.675 0 2.25-.214 2.508-.478.12-.122.246-.331.338-.754.094-.433.138-1.02.138-1.835zm-7 2a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.342 5.673c-.053.179-.092.476-.092.983v.094h5.5v-.094c0-.507-.039-.804-.092-.983-.04-.134-.073-.157-.083-.164l-.002-.001c-.037-.028-.169-.106-.536-.168-.366-.06-.87-.09-1.578-.09h-.918c-.708 0-1.212.03-1.578.09-.367.062-.499.14-.536.168l-.002.001c-.01.007-.043.03-.083.164M21.25 6.75v-.094c0-1.104-.127-2.36-1.177-3.148-.484-.363-1.055-.539-1.625-.634-.572-.095-1.24-.124-1.99-.124h-.917c-.75 0-1.417.03-1.989.124-.57.095-1.141.27-1.625.634-1.05.787-1.177 2.044-1.177 3.148v.094H5a1.25 1.25 0 1 0 0 2.5h1.75v12.23c0 1.164.058 2.182.242 3.042.187.872.519 1.662 1.123 2.29 1.19 1.237 3.051 1.438 5.197 1.438h5.376c2.146 0 4.006-.201 5.197-1.438.604-.628.936-1.418 1.122-2.29.184-.86.243-1.878.243-3.041V9.25H27a1.25 1.25 0 1 0 0-2.5zm1.5 2.5H9.25v12.23c0 1.11.059 1.918.187 2.52.126.588.302.894.48 1.078.37.386 1.166.672 3.395.672h5.376c2.229 0 3.024-.286 3.396-.672.177-.184.353-.49.479-1.079.128-.6.187-1.41.187-2.518zM13 11.75c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25m6 0c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0v-8c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ur = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(sr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(dr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(cr, {
              ...n,
              ref: r
            })]
          })
        }));
      ur.displayName = "Trash", ur.category = "Files", ur.variant = "Outline", ur.keywords = "Trashcan, Bin, Waste bin, Erase, Delete, Remove", ur.MD = sr, ur.LG = dr, ur.XL = cr;
      const fr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.215 3.25a2.48 2.48 0 0 0-1.767.723l-.918.918a.75.75 0 0 1-1.06-1.06l.917-.918a3.98 3.98 0 0 1 2.837-1.163 4.05 4.05 0 0 1 2.838 1.188 4.05 4.05 0 0 1 1.188 2.838 3.98 3.98 0 0 1-1.163 2.837l-.917.917a.75.75 0 0 1-1.06-1.06l.917-.918a2.48 2.48 0 0 0 .723-1.767 2.55 2.55 0 0 0-.749-1.786 2.55 2.55 0 0 0-1.786-.749m-.185 2.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m-5.14.5a.75.75 0 0 1 0 1.06l-.917.918a2.48 2.48 0 0 0-.723 1.767 2.55 2.55 0 0 0 .749 1.786 2.55 2.55 0 0 0 1.786.749 2.48 2.48 0 0 0 1.767-.723l.918-.918a.75.75 0 1 1 1.06 1.06l-.917.918a3.98 3.98 0 0 1-2.837 1.163 4.05 4.05 0 0 1-2.838-1.188 4.05 4.05 0 0 1-1.188-2.838 3.98 3.98 0 0 1 1.163-2.837l.917-.917a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.425 5a3.4 3.4 0 0 0-2.456.992l-1.262 1.262a1 1 0 1 1-1.414-1.414l1.261-1.262A5.4 5.4 0 0 1 15.448 3a5.62 5.62 0 0 1 3.901 1.651 5.62 5.62 0 0 1 1.65 3.901 5.4 5.4 0 0 1-1.577 3.894l-1.262 1.261a1 1 0 0 1-1.414-1.414l1.262-1.262A3.4 3.4 0 0 0 19 8.575a3.62 3.62 0 0 0-1.065-2.51A3.62 3.62 0 0 0 15.425 5m-.218 3.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0m-7.953 1.5a1 1 0 0 1 0 1.414L5.992 12.97A3.4 3.4 0 0 0 5 15.425c.01.932.392 1.836 1.065 2.51A3.62 3.62 0 0 0 8.575 19a3.4 3.4 0 0 0 2.456-.992l1.262-1.262a1 1 0 1 1 1.414 1.414l-1.261 1.262A5.4 5.4 0 0 1 8.552 21a5.62 5.62 0 0 1-3.901-1.651 5.62 5.62 0 0 1-1.65-3.901 5.4 5.4 0 0 1 1.577-3.894l1.262-1.261a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M20.901 6.25a4.63 4.63 0 0 0-3.335 1.348L15.884 9.28a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682a7.13 7.13 0 0 1 5.132-2.08 7.4 7.4 0 0 1 5.143 2.177 7.4 7.4 0 0 1 2.177 5.143 7.13 7.13 0 0 1-2.08 5.132l-1.682 1.682a1.25 1.25 0 0 1-1.768-1.768l1.682-1.682A4.63 4.63 0 0 0 25.75 11.1a4.9 4.9 0 0 0-1.445-3.404 4.9 4.9 0 0 0-3.404-1.445m-1.017 5.866a1.25 1.25 0 0 1 0 1.768l-6 6a1.25 1.25 0 0 1-1.768-1.768l6-6a1.25 1.25 0 0 1 1.768 0m-10.604 2a1.25 1.25 0 0 1 0 1.768l-1.682 1.682A4.63 4.63 0 0 0 6.25 20.9a4.9 4.9 0 0 0 1.445 3.404 4.9 4.9 0 0 0 3.404 1.445 4.63 4.63 0 0 0 3.335-1.348l1.682-1.682a1.25 1.25 0 0 1 1.768 1.768l-1.682 1.682a7.13 7.13 0 0 1-5.132 2.08 7.4 7.4 0 0 1-5.143-2.177A7.4 7.4 0 0 1 3.75 20.93a7.13 7.13 0 0 1 2.08-5.132l1.682-1.682a1.25 1.25 0 0 1 1.768 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(fr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(hr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(vr, {
              ...n,
              ref: r
            })]
          })
        }));
      pr.displayName = "Link", pr.category = "Files", pr.variant = "Outline", pr.keywords = "Chain, URL, Links, Hyperlink", pr.MD = fr, pr.LG = hr, pr.XL = vr;
      const gr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.37 3.174a1.75 1.75 0 0 1 2.492.043l1.001 1.052a1.75 1.75 0 0 1-.042 2.457l-6.439 6.31a.75.75 0 0 1-.396.203l-2.857.5a.75.75 0 0 1-.87-.857l.476-3a.75.75 0 0 1 .216-.418zm1.406 1.078a.25.25 0 0 0-.357-.006l-6.24 6.116-.274 1.718 1.594-.279 6.272-6.147a.25.25 0 0 0 .006-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.766 3.996a2 2 0 0 1 2.848.049l2.43 2.551a2 2 0 0 1-.048 2.808L9.27 19.914a1 1 0 0 1-.527.271l-4.572.8a1 1 0 0 1-1.16-1.142l.762-4.8a1 1 0 0 1 .288-.557zM5.698 15.683l-.49 3.09 2.885-.505L18.596 7.977l-2.43-2.552.724-.69-.724.69z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M20.163 4.817a2.25 2.25 0 0 1 3.204.055l3.858 4.052a2.25 2.25 0 0 1-.054 3.159l-15.01 14.71a1.25 1.25 0 0 1-.66.338l-6.286 1.1a1.25 1.25 0 0 1-1.45-1.427l1.048-6.6a1.25 1.25 0 0 1 .36-.697zM21.73 6.78 7.217 21.004l-.708 4.463 4.179-.731L25.245 10.47z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(gr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(mr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(wr, {
              ...n,
              ref: r
            })]
          })
        }));
      xr.displayName = "Pencil", xr.category = "Files", xr.variant = "Outline", xr.keywords = "Edit, Update, Correct, Modify, Note, Draft", xr.MD = gr, xr.LG = mr, xr.XL = wr;
      const yr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M6.944 3.802c-1.577.252-2.884 1.364-3.23 2.43a.75.75 0 0 1-1.427-.464c.553-1.7 2.396-3.124 4.42-3.448a5.24 5.24 0 0 1 3.212.482c.87.439 1.666 1.145 2.331 2.151V4a.75.75 0 1 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h1.282c-.602-1.09-1.319-1.746-2.038-2.109a3.74 3.74 0 0 0-2.3-.34M2.25 9A.75.75 0 0 1 3 8.25h3a.75.75 0 0 1 0 1.5H4.707l.006.018c.347 1.066 1.654 2.178 3.23 2.43a3.74 3.74 0 0 0 2.3-.34c.742-.373 1.481-1.058 2.095-2.21a.75.75 0 0 1 1.324.704c-.737 1.384-1.685 2.312-2.743 2.846a5.24 5.24 0 0 1-3.213.482c-1.628-.261-3.14-1.234-3.956-2.49V12a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        br = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.119 5.087c-2.47.424-4.584 2.3-5.162 4.204a1 1 0 1 1-1.914-.582c.822-2.707 3.608-5.056 6.738-5.593 1.598-.274 3.315-.083 4.932.79 1.213.656 2.33 1.674 3.287 3.099V5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.873c-.93-1.7-2.018-2.744-3.11-3.334-1.184-.64-2.441-.785-3.644-.579M6.584 16H9a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.773c1.277 1.83 3.432 3.254 5.781 3.657 1.598.274 3.315.083 4.932-.79 1.615-.873 3.06-2.388 4.182-4.649a1 1 0 0 0-1.79-.89c-.977 1.965-2.158 3.139-3.343 3.78-1.183.639-2.44.784-3.643.578-1.902-.327-3.594-1.515-4.535-2.913",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.722 6.393c-3.816.69-7.152 3.75-8.016 6.934a1.25 1.25 0 0 1-2.412-.654c1.136-4.193 5.3-7.893 9.984-8.74 2.385-.431 4.94-.13 7.316 1.242 1.52.879 2.926 2.172 4.156 3.926V6a1.25 1.25 0 1 1 2.5 0v7c0 .69-.56 1.25-1.25 1.25h-7a1.25 1.25 0 1 1 0-2.5h4.472c-1.241-2.168-2.673-3.569-4.129-4.41-1.811-1.047-3.756-1.284-5.62-.947M7.338 20.25H12a1.25 1.25 0 1 0 0-2.5H5c-.69 0-1.25.56-1.25 1.25v7a1.25 1.25 0 1 0 2.5 0v-2.854c1.916 2.462 4.852 4.347 8.028 4.921 2.385.431 4.94.13 7.316-1.242 2.371-1.37 4.467-3.752 6.049-7.318a1.25 1.25 0 1 0-2.286-1.014c-1.418 3.196-3.197 5.117-5.014 6.167-1.811 1.047-3.756 1.284-5.62.947-3.178-.574-6.023-2.793-7.385-5.357",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(yr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(br, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(jr, {
              ...n,
              ref: r
            })]
          })
        }));
      Mr.displayName = "Refresh", Mr.category = "Files", Mr.variant = "Outline", Mr.keywords = "Loop, Reload, Repeat, Sync, Update, Arrows, Reset, Restore", Mr.MD = yr, Mr.LG = br, Mr.XL = jr;
      const Rr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.81L8.53 8.53a.75.75 0 0 1-1.06-1.06l4.72-4.72zm-5.667 1a.583.583 0 0 0-.583.583v7.334a.583.583 0 0 0 .583.583h7.334a.583.583 0 0 0 .583-.583v-3a.75.75 0 0 1 1.5 0v3a2.083 2.083 0 0 1-2.083 2.083H4.333a2.083 2.083 0 0 1-2.083-2.083V4.333A2.083 2.083 0 0 1 4.333 2.25h3a.75.75 0 1 1 0 1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-7.793 7.793a1 1 0 0 1-1.414-1.414L18.586 4zM6.133 5A1.133 1.133 0 0 0 5 6.133v11.734A1.134 1.134 0 0 0 6.133 19h11.734A1.134 1.134 0 0 0 19 17.867V13a1 1 0 1 1 2 0v4.867A3.133 3.133 0 0 1 17.867 21H6.133A3.133 3.133 0 0 1 3 17.867V6.133A3.133 3.133 0 0 1 6.133 3H11a1 1 0 1 1 0 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M18.75 4c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v8a1.25 1.25 0 1 1-2.5 0V7.018L15.384 18.384a1.25 1.25 0 0 1-1.768-1.768L24.982 5.25H20c-.69 0-1.25-.56-1.25-1.25M7.933 6.25A1.683 1.683 0 0 0 6.25 7.933v16.134a1.683 1.683 0 0 0 1.683 1.683h16.134a1.684 1.684 0 0 0 1.683-1.683v-6.692a1.25 1.25 0 1 1 2.5 0v6.692a4.183 4.183 0 0 1-4.183 4.183H7.933a4.183 4.183 0 0 1-4.183-4.183V7.933A4.183 4.183 0 0 1 7.933 3.75h6.692a1.25 1.25 0 1 1 0 2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Rr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Cr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Lr, {
              ...n,
              ref: r
            })]
          })
        }));
      Sr.displayName = "ExternalLink", Sr.category = "Files", Sr.variant = "Outline", Sr.keywords = "Link, New tab, New Window, Open, URL, Hyperlink, External", Sr.MD = Rr, Sr.LG = Cr, Sr.XL = Lr;
      const Er = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1.5.662V5.5h9v.162L8 7.912zm0 1.677V10.5h9V7.339L8.343 9.417a.75.75 0 0 1-.686 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _r = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 8.651V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm2-.52V8h14v.132l-7 4.667zm14 2.405V16H5v-5.464l6.445 4.296a1 1 0 0 0 1.11 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4 10.5A2.5 2.5 0 0 1 6.5 8h19a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 21.5zm2.5 0h19v.063L16 17.688l-9.5-7.125zm0 3.188V21.5h19v-7.812l-8.734 6.55a1.25 1.25 0 0 1-1.543-.008z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Er, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(_r, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Pr, {
              ...n,
              ref: r
            })]
          })
        }));
      Dr.displayName = "Envelope", Dr.category = "Files", Dr.variant = "Outline", Dr.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", Dr.MD = Er, Dr.LG = _r, Dr.XL = Pr;
      const Ar = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.228 3.144c-.335-.324-.636-.45-1.064-.444a1.45 1.45 0 0 0-.706.222c-.166.099-.272.196-.29.213L4.398 8.078c-.027.03-.699.772-.699 1.8 0 .431.06.72.165.956.105.239.279.474.581.767s.559.468.814.57c.25.101.54.148.932.122a2.73 2.73 0 0 0 1.638-.678l.004-.004 2.248-2.27a.7.7 0 0 1 .995.986L8.83 12.594c-.085.087-1.001.991-2.545 1.096-.56.038-1.068-.026-1.548-.22-.476-.19-.882-.49-1.267-.864-.376-.365-.682-.745-.886-1.205-.205-.463-.285-.958-.285-1.523 0-1.633 1.056-2.735 1.088-2.768l.002-.002 4.78-4.955.008-.008c.035-.036.827-.827 1.964-.845.836-.012 1.486.282 2.06.838.277.268.489.55.624.894.132.337.17.681.177 1.035.022 1.15-.745 1.964-.777 1.998l-.007.007-4.783 4.958-.056.053c-.037.031-.17.14-.358.246-.178.1-.47.236-.815.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27l4.435-4.566a.7.7 0 1 1 1.005.975L5.894 9.555a.42.42 0 0 0-.095.263.4.4 0 0 0 .022.15.4.4 0 0 0 .088.11c.07.066.099.085.106.089.01.002.05.01.154.008q.001.002.054-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.922c.013-.016.107-.124.2-.294.112-.203.203-.454.198-.72-.005-.278-.034-.434-.08-.55-.042-.108-.118-.23-.295-.4m-5.215 7.022h.002zm.002 0 .002.002zm-.127-.605h.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ir = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16.773 4.708C16.24 4.194 15.755 3.99 15.07 4c-.423.007-.82.167-1.136.356a3 3 0 0 0-.461.34l-7.37 7.64-.002.002C6.064 12.38 5 13.55 5 15.175c0 .674.094 1.133.262 1.51.169.383.444.755.916 1.212.471.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.471-3.503a1 1 0 0 1 1.42 1.407l-3.47 3.503.005-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.341-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836C3.122 16.793 3 16.04 3 15.175 3 12.683 4.613 11 4.658 10.953l.003-.002.001-.002h.001l7.38-7.65.002-.003.002-.002.005-.005.007-.007c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.125 1.27.422.41.742.837.946 1.354.199.508.257 1.029.267 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.074.071c-.05.042-.248.208-.534.37-.27.153-.713.36-1.231.374-.363.01-.723-.02-1.08-.165-.352-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.609-.848 2.7 2.7 0 0 1-.205-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.079.118a.7.7 0 0 0-.09.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155.001.001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.089-.03.19-.088c.088-.05.159-.102.194-.13l7.346-7.614c.021-.024.17-.196.321-.467.178-.321.326-.725.318-1.157-.009-.434-.055-.686-.13-.877-.071-.181-.196-.378-.475-.649",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M22.1 6.567c-.696-.662-1.325-.919-2.215-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L7.874 16.651l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.581.969 1.211 1.568.629.598 1.165.957 1.695 1.166.521.205 1.125.301 1.942.247 2.145-.143 3.414-1.386 3.414-1.386l.008-.008 4.684-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.838-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015L14.2 22.685a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.033.277.047.307.012.027.046.095.183.223.145.136.206.175.22.184.02.005.105.021.322.016 0 0 .04-.003.111-.027q.107-.037.234-.106c.112-.062.202-.126.25-.162l9.895-10.061c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.247-.47-.615-.82M11.236 20.92l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ar, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ir, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Tr, {
              ...n,
              ref: r
            })]
          })
        }));
      Nr.displayName = "Paperclip", Nr.category = "Files", Nr.variant = "Outline", Nr.keywords = "Attach, Clip, Document, Attachment, Paper", Nr.MD = Ar, Nr.LG = Ir, Nr.XL = Tr;
      const Or = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm3.172.89a.75.75 0 0 1 1.056-.099C13.27 6.078 13.75 7.001 13.75 8c0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.15 1.391a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm5.156 1.853a1.25 1.25 0 0 1 1.698-.49C26.72 12.074 28.25 13.85 28.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Br = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Or, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(kr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Hr, {
              ...n,
              ref: r
            })]
          })
        }));
      Br.displayName = "VolumeDown", Br.category = "Media playback", Br.variant = "Outline", Br.keywords = "Control, Volume, Low, Sound, Speaker", Br.MD = Or, Br.LG = kr, Br.XL = Hr;
      const zr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm4.28-.215a.75.75 0 0 1 1.054.114c.759.943 1.166 2.192 1.166 3.47s-.407 2.528-1.166 3.47a.75.75 0 1 1-1.168-.94c.522-.649.834-1.557.834-2.53s-.312-1.881-.834-2.53a.75.75 0 0 1 .114-1.054m-2.107 1.106a.75.75 0 0 1 1.056-.1c.79.656 1.271 1.579 1.271 2.578 0 1-.48 1.922-1.271 2.578a.75.75 0 1 1-.957-1.156c.489-.405.728-.921.728-1.422s-.24-1.017-.729-1.422a.75.75 0 0 1-.099-1.056",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm6.23.281a1 1 0 0 1 1.408-.132C22.12 8.458 23 10.167 23 12s-.88 3.542-2.362 4.77a1 1 0 0 1-1.276-1.54C20.442 14.336 21 13.168 21 12s-.558-2.336-1.638-3.23a1 1 0 0 1-.132-1.408m-3.08 1.11a1 1 0 0 1 1.378-.321C18.99 9.059 20 10.415 20 12s-1.01 2.94-2.472 3.85a1 1 0 0 1-1.056-1.7C17.572 13.469 18 12.666 18 12s-.429-1.468-1.528-2.15a1 1 0 0 1-.321-1.378",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm7.221.747a1.25 1.25 0 0 1 1.74-.319c2.165 1.495 3.539 3.641 3.539 6.029s-1.374 4.534-3.54 6.029a1.25 1.25 0 0 1-1.42-2.058c1.676-1.157 2.46-2.608 2.46-3.971s-.784-2.814-2.46-3.971a1.25 1.25 0 0 1-.319-1.74m-4.065 1.106a1.25 1.25 0 0 1 1.698-.49C24.72 12.074 26.25 13.85 26.25 16s-1.53 3.926-3.646 5.094a1.25 1.25 0 0 1-1.208-2.188c1.726-.954 2.354-2.054 2.354-2.906s-.628-1.952-2.354-2.906a1.25 1.25 0 0 1-.49-1.698",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(zr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Vr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Gr, {
              ...n,
              ref: r
            })]
          })
        }));
      Fr.displayName = "VolumeUp", Fr.category = "Media playback", Fr.variant = "Outline", Fr.keywords = "Control, Volume, High, Sound, Speaker", Fr.MD = zr, Fr.LG = Vr, Fr.XL = Gr;
      const Ur = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.313 2.319A.75.75 0 0 1 9.75 3v10a.75.75 0 0 1-1.238.57l-3.123-2.677H3a.75.75 0 0 1-.75-.75V5.857a.75.75 0 0 1 .75-.75h2.39l3.122-2.676a.75.75 0 0 1 .801-.112M8.25 4.63 6.155 6.427a.75.75 0 0 1-.488.18H3.75v2.786h1.917a.75.75 0 0 1 .488.18L8.25 11.37zm2.22 1.339a.75.75 0 0 1 1.06 0l.97.97.97-.97a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 1 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.433 4.099A1 1 0 0 1 15 5v14a1 1 0 0 1-1.625.78L8.65 16H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.65l4.725-3.78a1 1 0 0 1 1.058-.121M13 7.08l-3.375 2.7A1 1 0 0 1 9 10H6v4h3a1 1 0 0 1 .625.22L13 16.92zm3.293 2.212a1 1 0 0 1 1.414 0L19 10.586l1.293-1.293a1 1 0 0 1 1.414 1.414L20.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L19 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L17.586 12l-1.293-1.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.551 5.878c.428.21.699.645.699 1.122v18a1.25 1.25 0 0 1-2.014.99l-6.329-4.883H7c-.69 0-1.25-.56-1.25-1.25v-7.714c0-.69.56-1.25 1.25-1.25h4.907l6.33-4.883a1.25 1.25 0 0 1 1.314-.132M17.75 9.543l-4.653 3.59a1.25 1.25 0 0 1-.764.26H8.25v5.214h4.083c.277 0 .545.092.764.26l4.653 3.59zm4.366 3.573a1.25 1.25 0 0 1 1.768 0l1.616 1.616 1.616-1.616a1.25 1.25 0 0 1 1.768 1.768L27.268 16.5l1.616 1.616a1.25 1.25 0 0 1-1.768 1.768L25.5 18.268l-1.616 1.616a1.25 1.25 0 0 1-1.768-1.768l1.616-1.616-1.616-1.616a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ur, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Xr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(qr, {
              ...n,
              ref: r
            })]
          })
        }));
      Kr.displayName = "VolumeOff", Kr.category = "Media playback", Kr.variant = "Outline", Kr.keywords = "Control, Volume, Mute, Sound, Speaker", Kr.MD = Ur, Kr.LG = Xr, Kr.XL = qr;
      const Wr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.636 2.344a.75.75 0 0 1 .761.02l8 5a.75.75 0 0 1 0 1.272l-8 5A.75.75 0 0 1 3.25 13V3a.75.75 0 0 1 .386-.656m1.114 2.01v7.293L10.585 8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $r = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.498 3.135a1 1 0 0 1 .998-.003l14 8a1 1 0 0 1 0 1.736l-14 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .498-.865M6 5.723v12.554L16.984 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M6.389 3.91A1.25 1.25 0 0 0 5.75 5v22a1.25 1.25 0 0 0 1.902 1.067l18-11a1.25 1.25 0 0 0 0-2.134l-18-11a1.25 1.25 0 0 0-1.263-.023M22.603 16 8.25 24.771V7.23z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yr = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Wr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)($r, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Zr, {
              ...n,
              ref: r
            })]
          })
        }));
      Yr.displayName = "Play", Yr.category = "Media playback", Yr.variant = "Outline", Yr.keywords = "Play, Control, Player", Yr.MD = Wr, Yr.LG = $r, Yr.XL = Zr;
      const Qr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.343 2.333A.75.75 0 0 1 13.75 3v10a.75.75 0 0 1-1.186.61l-7-5a.75.75 0 0 1 0-1.22l7-5a.75.75 0 0 1 .78-.057M7.29 8l4.96 3.543V4.457zM3 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 3 3.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jr = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.433 3.099A1 1 0 0 1 20 4v16a1 1 0 0 1-1.625.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.058-.121M10.601 12 18 17.92V6.08zM5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        en = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M25.546 3.876c.43.209.704.645.704 1.124v22a1.25 1.25 0 0 1-2.022.983l-14-11a1.25 1.25 0 0 1 0-1.966l14-11a1.25 1.25 0 0 1 1.318-.141M13.023 16l10.727 8.428V7.572zM6 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Qr, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Jr, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(en, {
              ...n,
              ref: r
            })]
          })
        }));
      tn.displayName = "SkipBack", tn.category = "Media playback", tn.variant = "Outline", tn.keywords = "Back, Rewind, Reverse, Control, Player", tn.MD = Qr, tn.LG = Jr, tn.XL = en;
      const rn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.657 2.333a.75.75 0 0 1 .779.057l7 5a.75.75 0 0 1 0 1.22l-7 5A.75.75 0 0 1 2.25 13V3a.75.75 0 0 1 .407-.667M3.75 4.457v7.086L8.71 8zM13 3.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.567 3.099a1 1 0 0 1 1.058.12l10 8a1 1 0 0 1 0 1.562l-10 8A1 1 0 0 1 4 20V4a1 1 0 0 1 .567-.901M6 6.08v11.838L13.4 12zM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        an = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M6.454 3.876a1.25 1.25 0 0 1 1.318.141l14 11a1.25 1.25 0 0 1 0 1.966l-14 11A1.25 1.25 0 0 1 5.75 27V5c0-.479.273-.915.704-1.124M8.25 7.572v16.856L18.977 16zM26 4.75c.69 0 1.25.56 1.25 1.25v20a1.25 1.25 0 1 1-2.5 0V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        on = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(rn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(nn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(an, {
              ...n,
              ref: r
            })]
          })
        }));
      on.displayName = "SkipForward", on.category = "Media playback", on.variant = "Outline", on.keywords = "Next, Forward, Front, Control, Player", on.MD = rn, on.LG = nn, on.XL = an;
      const ln = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 6 13.65H4A1.65 1.65 0 0 1 2.35 12zM4 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4A.35.35 0 0 0 6 3.65zM8.35 4c0-.911.739-1.65 1.65-1.65h2c.911 0 1.65.739 1.65 1.65v8A1.65 1.65 0 0 1 12 13.65h-2A1.65 1.65 0 0 1 8.35 12zM10 3.65a.35.35 0 0 0-.35.35v8c0 .193.157.35.35.35h2a.35.35 0 0 0 .35-.35V4a.35.35 0 0 0-.35-.35z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm7 1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.75 7A3.25 3.25 0 0 1 7 3.75h4A3.25 3.25 0 0 1 14.25 7v18A3.25 3.25 0 0 1 11 28.25H7A3.25 3.25 0 0 1 3.75 25zM7 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75zM17.75 7A3.25 3.25 0 0 1 21 3.75h4A3.25 3.25 0 0 1 28.25 7v18A3.25 3.25 0 0 1 25 28.25h-4A3.25 3.25 0 0 1 17.75 25zM21 6.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ln, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(sn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(dn, {
              ...n,
              ref: r
            })]
          })
        }));
      cn.displayName = "Pause", cn.category = "Media playback", cn.variant = "Outline", cn.keywords = "Pause, Control, Player", cn.MD = ln, cn.LG = sn, cn.XL = dn;
      const un = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.25 3a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0V4a.25.25 0 0 0-.25-.25h-2A.75.75 0 0 1 9.25 3m-7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5H4a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0zM3 9.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5H4A1.75 1.75 0 0 1 2.25 12v-2A.75.75 0 0 1 3 9.25m10 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 12 13.75h-2a.75.75 0 0 1 0-1.5h2a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 0 1 1-1h2a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1M3 6a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0zm1 9a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.75 5c0-.69.56-1.25 1.25-1.25h4A3.25 3.25 0 0 1 28.25 7v4a1.25 1.25 0 1 1-2.5 0V7a.75.75 0 0 0-.75-.75h-4c-.69 0-1.25-.56-1.25-1.25m-16 2A3.25 3.25 0 0 1 7 3.75h4a1.25 1.25 0 1 1 0 2.5H7a.75.75 0 0 0-.75.75v4a1.25 1.25 0 1 1-2.5 0zM5 19.75c.69 0 1.25.56 1.25 1.25v4c0 .414.336.75.75.75h4a1.25 1.25 0 1 1 0 2.5H7A3.25 3.25 0 0 1 3.75 25v-4c0-.69.56-1.25 1.25-1.25m22 0c.69 0 1.25.56 1.25 1.25v4A3.25 3.25 0 0 1 25 28.25h-4a1.25 1.25 0 1 1 0-2.5h4a.75.75 0 0 0 .75-.75v-4c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(un, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(fn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(hn, {
              ...n,
              ref: r
            })]
          })
        }));
      vn.displayName = "Maximize", vn.category = "Media playback", vn.variant = "Outline", vn.keywords = "Maximum, Full screen, Big, Large, Expand", vn.MD = un, vn.LG = fn, vn.XL = hn;
      const pn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10 2.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5h-2A1.75 1.75 0 0 1 9.25 5V3a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 5 6.75H3a.75.75 0 0 1 0-1.5h2A.25.25 0 0 0 5.25 5V3A.75.75 0 0 1 6 2.25M2.25 10A.75.75 0 0 1 3 9.25h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0v-2a.25.25 0 0 0-.25-.25H3a.75.75 0 0 1-.75-.75m7 1c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5h-2a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H4a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V4a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1M3 15a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m11 2a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M20 3.75c.69 0 1.25.56 1.25 1.25v5c0 .414.336.75.75.75h5a1.25 1.25 0 1 1 0 2.5h-5A3.25 3.25 0 0 1 18.75 10V5c0-.69.56-1.25 1.25-1.25m-8 0c.69 0 1.25.56 1.25 1.25v5A3.25 3.25 0 0 1 10 13.25H5a1.25 1.25 0 1 1 0-2.5h5a.75.75 0 0 0 .75-.75V5c0-.69.56-1.25 1.25-1.25M3.75 20c0-.69.56-1.25 1.25-1.25h5A3.25 3.25 0 0 1 13.25 22v5a1.25 1.25 0 1 1-2.5 0v-5a.75.75 0 0 0-.75-.75H5c-.69 0-1.25-.56-1.25-1.25m15 2A3.25 3.25 0 0 1 22 18.75h5a1.25 1.25 0 1 1 0 2.5h-5a.75.75 0 0 0-.75.75v5a1.25 1.25 0 1 1-2.5 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(pn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(gn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(mn, {
              ...n,
              ref: r
            })]
          })
        }));
      wn.displayName = "Minimize", wn.category = "Media playback", wn.variant = "Outline", wn.keywords = "Full screen, Exit, Window, Shrink, Reduce, Video Playback", wn.MD = pn, wn.LG = gn, wn.XL = mn;
      const xn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.113 1.632a.75.75 0 0 1-.05.814 3.927 3.927 0 0 0 5.491 5.491.75.75 0 0 1 1.193.673A6.763 6.763 0 1 1 7.39 1.253a.75.75 0 0 1 .723.379M6.06 3.1a5.263 5.263 0 1 0 6.84 6.84A5.427 5.427 0 0 1 6.06 3.1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.15 3.509a1 1 0 0 1-.067 1.085 5.236 5.236 0 0 0 7.323 7.323 1 1 0 0 1 1.59.896 9.017 9.017 0 1 1-9.809-9.809 1 1 0 0 1 .963.505M9.414 5.467a7.017 7.017 0 1 0 9.12 9.12 7.233 7.233 0 0 1-9.455-6.343c-.07-.946.046-1.889.335-2.777",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16.188 5.386c.242.43.21.96-.084 1.357a6.544 6.544 0 0 0 9.153 9.153 1.25 1.25 0 0 1 1.988 1.12 11.272 11.272 0 1 1-12.26-12.26 1.25 1.25 0 0 1 1.203.63m-3.421 2.448a8.772 8.772 0 1 0 11.4 11.4 9.044 9.044 0 0 1-11.4-11.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(xn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(yn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(bn, {
              ...n,
              ref: r
            })]
          })
        }));
      jn.displayName = "Moon", jn.category = "Accessibility", jn.variant = "Outline", jn.keywords = "Night, Dark, Lightness, Theme, Brightness", jn.MD = xn, jn.LG = yn, jn.XL = bn;
      const Mn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0V2A.75.75 0 0 1 8 1.25m4.955 1.863c.301.285.314.76.03 1.06l-.77.813a.75.75 0 1 1-1.089-1.032l.77-.812a.75.75 0 0 1 1.06-.029m-10.007.18a.75.75 0 0 1 1.06-.045l.823.756a.75.75 0 1 1-1.015 1.105l-.823-.757a.75.75 0 0 1-.045-1.06M8 5.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M4.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-3 0A.75.75 0 0 1 2 7.25h1a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m11 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-1.266 2.955a.75.75 0 0 1 1.06.03l.77.811a.75.75 0 0 1-1.09 1.032l-.769-.812a.75.75 0 0 1 .03-1.06m-5.97.062a.75.75 0 0 1-.045 1.06l-.824.756a.75.75 0 0 1-1.014-1.105l.823-.756a.75.75 0 0 1 1.06.045M8 12.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M5.077 5.187a1 1 0 0 1 1.414-.033L7.794 6.4a1 1 0 0 1-1.381 1.446L5.109 6.6a1 1 0 0 1-.032-1.414m13.923 0a1 1 0 0 1-.032 1.414l-1.304 1.245A1 1 0 1 1 16.283 6.4l1.303-1.246A1 1 0 0 1 19 5.188M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M8 16.049a1 1 0 0 1-.032 1.414l-1.304 1.245a1 1 0 0 1-1.381-1.446l1.303-1.246A1 1 0 0 1 8 16.05m8.077.26a1 1 0 0 1 1.414-.032l1.303 1.245a1 1 0 1 1-1.381 1.446l-1.304-1.245a1 1 0 0 1-.032-1.414M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 2.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0V4c0-.69.56-1.25 1.25-1.25m8.824 4.49a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m-17.679.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 16a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0m-7 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5H4c-.69 0-1.25-.56-1.25-1.25m21 0c0-.69.56-1.25 1.25-1.25h3a1.25 1.25 0 1 1 0 2.5h-3c-.69 0-1.25-.56-1.25-1.25m-12.926 5.24a1.25 1.25 0 0 1 .058 1.767l-1.71 1.825a1.25 1.25 0 0 1-1.824-1.71l1.71-1.824a1.25 1.25 0 0 1 1.766-.058m10.321.048a1.25 1.25 0 0 1 1.767.057l1.71 1.825a1.25 1.25 0 0 1-1.825 1.71l-1.71-1.825a1.25 1.25 0 0 1 .058-1.767M16 23.75c.69 0 1.25.56 1.25 1.25v3a1.25 1.25 0 1 1-2.5 0v-3c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ln = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Mn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Rn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Cn, {
              ...n,
              ref: r
            })]
          })
        }));
      Ln.displayName = "Sun", Ln.category = "Accessibility", Ln.variant = "Outline", Ln.keywords = "Day, Light, Lightness, Theme, Brightness", Ln.MD = Mn, Ln.LG = Rn, Ln.XL = Cn;
      const Sn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7.75 5a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h1.25V9a.75.75 0 0 0 1.5 0V7.75H9a.75.75 0 0 0 0-1.5H7.75z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M7 1.25a5.75 5.75 0 1 0 3.239 10.502l2.292 1.834a.75.75 0 0 0 .938-1.172l-2.098-1.678A5.75 5.75 0 0 0 7 1.25M2.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        En = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M12 7a1 1 0 1 0-2 0v3H7a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2h-3z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M11 2a9 9 0 1 0 5.618 16.032l2.675 2.675a1 1 0 0 0 1.414-1.414l-2.675-2.675A9 9 0 0 0 11 2m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        _n = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15M15 7.75c.69 0 1.25.56 1.25 1.25v4.75H21a1.25 1.25 0 1 1 0 2.5h-4.75V21a1.25 1.25 0 1 1-2.5 0v-4.75H9a1.25 1.25 0 1 1 0-2.5h4.75V9c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Sn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(En, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(_n, {
              ...n,
              ref: r
            })]
          })
        }));
      Pn.displayName = "ZoomIn", Pn.category = "Accessibility", Pn.variant = "Outline", Pn.keywords = "Magnifying glass, Zoom, View, See, More, Closer", Pn.MD = Sn, Pn.LG = En, Pn.XL = _n;
      const Dn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7m3 0A.75.75 0 0 1 5 6.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        An = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11m4 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        In = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15m5 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Dn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(An, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(In, {
              ...n,
              ref: r
            })]
          })
        }));
      Tn.displayName = "ZoomOut", Tn.category = "Accessibility", Tn.variant = "Outline", Tn.keywords = "Magnifying glass, Zoom, View, See, Less, Further", Tn.MD = Dn, Tn.LG = An, Tn.XL = In;
      const Nn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.75 2.274a5.476 5.476 0 1 0 0 10.952 5.476 5.476 0 0 0 0-10.952M1 7.75a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m6.94-2.91a1.5 1.5 0 0 0-.996.175c-.299.17-.521.435-.633.744a.637.637 0 1 1-1.197-.434A2.7 2.7 0 0 1 6.312 3.91a2.8 2.8 0 0 1 1.838-.326 2.75 2.75 0 0 1 1.626.906c.418.483.65 1.096.649 1.732 0 1.026-.782 1.7-1.34 2.062a5.6 5.6 0 0 1-1.163.568l-.024.008-.007.003h-.003s-.001.001-.197-.605l.196.606a.637.637 0 0 1-.394-1.211l.013-.005.054-.019a4.338 4.338 0 0 0 .833-.415c.491-.317.758-.66.758-.992 0-.325-.117-.644-.337-.897a1.48 1.48 0 0 0-.873-.485m-.827 5.967c0-.352.285-.637.637-.637h.153a.637.637 0 0 1 0 1.273H7.75a.637.637 0 0 1-.637-.636",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        On = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 3.887a8.113 8.113 0 1 0 0 16.226 8.113 8.113 0 0 0 0-16.226M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.282-4.312a2.24 2.24 0 0 0-1.477.26 2.1 2.1 0 0 0-.937 1.103.943.943 0 0 1-1.774-.643A3.98 3.98 0 0 1 9.87 6.31a4.13 4.13 0 0 1 2.722-.484c.936.156 1.79.63 2.41 1.344.619.714.961 1.622.96 2.565 0 1.52-1.158 2.52-1.984 3.054a8.3 8.3 0 0 1-1.723.842l-.035.012-.011.004-.004.001h-.001s-.002 0-.292-.897l.29.898a.943.943 0 0 1-.582-1.795l.019-.006a5 5 0 0 0 .385-.151c.259-.112.597-.277.929-.492.727-.47 1.123-.979 1.123-1.47v-.002c0-.482-.175-.952-.5-1.328a2.2 2.2 0 0 0-1.294-.717m3.68 2.047v.001l-.943-.001zm-4.905 6.793c0-.52.422-.943.943-.943h.226a.943.943 0 0 1 0 1.887H12a.943.943 0 0 1-.943-.944",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m13.624-5.714a2.97 2.97 0 0 0-1.957.346 2.78 2.78 0 0 0-1.242 1.46 1.25 1.25 0 1 1-2.35-.852 5.28 5.28 0 0 1 2.353-2.78 5.47 5.47 0 0 1 3.607-.64 5.4 5.4 0 0 1 3.192 1.78 5.18 5.18 0 0 1 1.273 3.399c0 2.013-1.534 3.338-2.63 4.047a11 11 0 0 1-2.283 1.115l-.046.016-.014.005-.005.002h-.002s-.002 0-.387-1.189l.385 1.19a1.25 1.25 0 0 1-.772-2.378h.001l.025-.009.105-.037a8.52 8.52 0 0 0 1.636-.814c.963-.624 1.487-1.297 1.487-1.949v-.002a2.68 2.68 0 0 0-.662-1.759 2.9 2.9 0 0 0-1.714-.951m4.876 2.713V13L20 12.998zM14.75 22c0-.69.56-1.25 1.25-1.25h.3a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Nn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(On, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(kn, {
              ...n,
              ref: r
            })]
          })
        }));
      Hn.displayName = "HelpCircle", Hn.category = "Accessibility", Hn.variant = "Outline", Hn.keywords = "Help, Question mark, Support, Assistance, Doubt, FAQ, Tooltip", Hn.MD = Nn, Hn.LG = On, Hn.XL = kn;
      const Bn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.001 2a6.001 6.001 0 1 0 0 12.003A6.001 6.001 0 0 0 8.001 2M8 3.5a4.501 4.501 0 0 0 0 9.003z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.001 3a9.001 9.001 0 1 0 0 18.002 9.001 9.001 0 0 0 0-18.002M5 12.001A7 7 0 0 1 12.001 5v14.002a7 7 0 0 1-7.001-7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16.001 4C9.373 4 4 9.373 4 16.001s5.373 12.002 12.001 12.002S28.003 22.629 28.003 16 22.629 4 16 4M6.5 16.001A9.5 9.5 0 0 1 16.001 6.5v19.003A9.5 9.5 0 0 1 6.5 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Bn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(zn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Vn, {
              ...n,
              ref: r
            })]
          })
        }));
      Gn.displayName = "PartialCircle", Gn.category = "Accessibility", Gn.variant = "Outline", Gn.keywords = "Partial, Half, Middle, Split", Gn.MD = Bn, Gn.LG = zn, Gn.XL = Vn;
      const Fn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.803 7.25h2.483a11.2 11.2 0 0 1 1.217-4.283 5.26 5.26 0 0 0-3.7 4.283M8 3.355A9.6 9.6 0 0 0 6.792 7.25h2.416A9.6 9.6 0 0 0 8 3.355M9.208 8.75A9.6 9.6 0 0 1 8 12.645 9.6 9.6 0 0 1 6.792 8.75zm-3.922 0H2.803a5.26 5.26 0 0 0 3.7 4.283A11.2 11.2 0 0 1 5.286 8.75m4.211 4.283a11.2 11.2 0 0 0 1.217-4.283h2.483a5.26 5.26 0 0 1-3.7 4.283m3.7-5.783h-2.483a11.2 11.2 0 0 0-1.217-4.283 5.26 5.26 0 0 1 3.7 4.283M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Un = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.062 11h3.983c.177-2.404.849-4.722 1.957-6.748A8.01 8.01 0 0 0 4.062 11M12 4.785c-1.084 1.817-1.761 3.96-1.95 6.215h3.9c-.189-2.256-.866-4.398-1.95-6.215M13.95 13c-.189 2.255-.866 4.398-1.95 6.215-1.084-1.817-1.761-3.96-1.95-6.215zm-5.905 0H4.062a8.01 8.01 0 0 0 5.94 6.748C8.894 17.722 8.222 15.404 8.045 13m5.953 6.748c1.108-2.026 1.78-4.344 1.957-6.748h3.983a8.01 8.01 0 0 1-5.94 6.748M19.938 11h-3.983c-.177-2.404-.849-4.722-1.957-6.748A8.01 8.01 0 0 1 19.938 11M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.322 14.75h5.482c.231-3.289 1.159-6.457 2.697-9.208a10.76 10.76 0 0 0-8.18 9.208M16 6.218c-1.508 2.484-2.444 5.43-2.69 8.532h5.38c-.245-3.102-1.182-6.048-2.69-8.532m2.69 11.032c-.245 3.102-1.182 6.048-2.69 8.532-1.508-2.484-2.444-5.43-2.69-8.532zm-7.886 0H5.322a10.76 10.76 0 0 0 8.179 9.208c-1.538-2.75-2.466-5.92-2.697-9.208m7.695 9.208c1.539-2.75 2.466-5.92 2.697-9.208h5.482a10.76 10.76 0 0 1-8.179 9.208m8.18-11.708h-5.483c-.231-3.289-1.158-6.457-2.697-9.208a10.76 10.76 0 0 1 8.18 9.208M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Fn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Un, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Xn, {
              ...n,
              ref: r
            })]
          })
        }));
      qn.displayName = "Globe", qn.category = "Accessibility", qn.variant = "Outline", qn.keywords = "Global, Network, Earth, World", qn.MD = Fn, qn.LG = Un, qn.XL = Xn;
      const Kn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M4.75 4.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M3.185 9.268A3.17 3.17 0 0 1 5.5 8.25h5c.878 0 1.71.373 2.315 1.018a3.5 3.5 0 0 1 .935 2.399V13a.75.75 0 0 1-1.5 0v-1.333a2 2 0 0 0-.53-1.373 1.67 1.67 0 0 0-1.22-.544h-5c-.448 0-.888.19-1.22.544a2 2 0 0 0-.53 1.373V13a.75.75 0 0 1-1.5 0v-1.333c0-.891.331-1.755.935-2.399",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7m-2.536 7.464A5 5 0 0 1 8 13h8a5 5 0 0 1 5 5v2a1 1 0 1 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 1 1-2 0v-2a5 5 0 0 1 1.464-3.536",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $n = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M9.75 9a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0M5.74 19.665a6.84 6.84 0 0 1 4.76-1.915h11c1.778 0 3.49.684 4.76 1.915a6.5 6.5 0 0 1 1.99 4.668V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.07-.438-2.105-1.231-2.873a4.34 4.34 0 0 0-3.019-1.21h-11c-1.14 0-2.225.44-3.019 1.21a4 4 0 0 0-1.231 2.873V27a1.25 1.25 0 1 1-2.5 0v-2.667c0-1.758.72-3.437 1.99-4.668",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zn = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Kn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Wn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)($n, {
              ...n,
              ref: r
            })]
          })
        }));
      Zn.displayName = "Person", Zn.category = "User Interface", Zn.variant = "Outline", Zn.keywords = "Profile, Avatar, Account, User, People, Human", Zn.MD = Kn, Zn.LG = Wn, Zn.XL = $n;
      const Yn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.335 5.33a.75.75 0 0 1 .336 1.005l-2 4a.75.75 0 0 1-1.342-.67l2-4a.75.75 0 0 1 1.006-.336m-4.805.14a.75.75 0 0 1 0 1.06L3.06 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m6.94 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L12.94 8l-1.47-1.47a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.243 7.03a1 1 0 0 1 .727 1.213l-2 8a1 1 0 1 1-1.94-.485l2-8a1 1 0 0 1 1.213-.728m-5.536.263a1 1 0 0 1 0 1.414L4.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L19.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jn = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M17.245 9.774a1.25 1.25 0 0 1 .98 1.471l-2 10a1.25 1.25 0 1 1-2.45-.49l2-10a1.25 1.25 0 0 1 1.47-.98m-6.285.426a1.25 1.25 0 0 1-.16 1.76L5.953 16l4.847 4.04a1.25 1.25 0 1 1-1.6 1.92l-6-5a1.25 1.25 0 0 1 0-1.92l6-5a1.25 1.25 0 0 1 1.76.16m10.08 0a1.25 1.25 0 0 1 1.76-.16l6 5a1.25 1.25 0 0 1 0 1.92l-6 5a1.25 1.25 0 0 1-1.6-1.92L26.047 16 21.2 11.96a1.25 1.25 0 0 1-.16-1.76",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ea = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Yn, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Qn, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Jn, {
              ...n,
              ref: r
            })]
          })
        }));
      ea.displayName = "Code", ea.category = "User Interface", ea.variant = "Outline", ea.keywords = "Code, Computer, Dev, Engineering, Web, Develop, HTML, Tag", ea.MD = Yn, ea.LG = Qn, ea.XL = Jn;
      const ta = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m11.341 4.027-.293 1.296-.607.144a6.7 6.7 0 0 0-1.958.812l-.53.327-1.125-.71a8 8 0 0 0-.932.932l.71 1.124-.327.531a6.7 6.7 0 0 0-.812 1.958l-.144.607-1.296.293a8 8 0 0 0 0 1.318l1.296.293.144.607a6.7 6.7 0 0 0 .812 1.958l.327.53-.71 1.125q.429.504.932.932l1.124-.71.531.327a6.7 6.7 0 0 0 1.958.812l.607.144.293 1.296a8 8 0 0 0 1.318 0l.293-1.296.607-.144a6.7 6.7 0 0 0 1.958-.812l.53-.327 1.125.71a8 8 0 0 0 .932-.932l-.71-1.124.327-.531a6.7 6.7 0 0 0 .812-1.958l.144-.607 1.296-.293a8 8 0 0 0 0-1.318l-1.296-.293-.144-.607a6.7 6.7 0 0 0-.812-1.958l-.327-.53.71-1.125a8 8 0 0 0-.932-.932l-1.124.71-.531-.327a6.7 6.7 0 0 0-1.958-.812l-.607-.144-.293-1.296a8 8 0 0 0-1.318 0m-.984-1.893a10 10 0 0 1 3.286 0l.664.11.326 1.447q.72.229 1.38.572l1.253-.792.548.392a10 10 0 0 1 2.323 2.323l.392.548-.792 1.253q.343.66.572 1.38l1.447.326.11.664a10 10 0 0 1 0 3.286l-.11.664-1.447.326q-.229.72-.572 1.38l.792 1.253-.392.548a10 10 0 0 1-2.323 2.323l-.547.392-1.254-.792q-.66.343-1.38.572l-.326 1.447-.664.11a10 10 0 0 1-3.286 0l-.664-.11-.326-1.447a8.7 8.7 0 0 1-1.38-.572l-1.253.792-.548-.392a10 10 0 0 1-2.323-2.323l-.392-.547.792-1.254q-.343-.66-.572-1.38l-1.447-.326-.11-.664a10 10 0 0 1 0-3.286l.11-.664 1.447-.326q.229-.72.572-1.38L3.47 6.734l.392-.548a10 10 0 0 1 2.323-2.323l.548-.392 1.253.792q.66-.343 1.38-.572l.326-1.447zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ra = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m7.628 2.763-.193.855-.455.108c-.459.109-.89.29-1.28.53l-.399.246-.741-.468a5 5 0 0 0-.526.526l.468.741-.245.398c-.24.391-.422.822-.531 1.281l-.108.455-.855.193a5 5 0 0 0 0 .744l.855.193.108.455c.109.459.29.89.53 1.28l.246.399-.468.741q.244.282.526.526l.741-.468.398.245c.391.24.822.422 1.281.531l.455.108.193.855a5 5 0 0 0 .744 0l.193-.855.455-.108c.459-.109.89-.29 1.28-.53l.399-.246.741.468q.282-.244.526-.526l-.468-.741.245-.398c.24-.391.422-.822.531-1.281l.108-.455.855-.193a5 5 0 0 0 0-.744l-.855-.193-.108-.455a4.4 4.4 0 0 0-.53-1.28l-.246-.399.468-.741a5 5 0 0 0-.526-.526l-.741.468-.398-.245a4.4 4.4 0 0 0-1.281-.531l-.455-.108-.193-.855a5 5 0 0 0-.744 0M6.891 1.34a6.8 6.8 0 0 1 2.218 0l.498.082.22.973q.439.143.844.35l.843-.532.41.293a6.8 6.8 0 0 1 1.569 1.569l.293.41-.532.843q.207.405.35.845l.973.22.082.497a6.8 6.8 0 0 1 0 2.218l-.082.498-.973.22a6 6 0 0 1-.35.844l.532.843-.293.41a6.8 6.8 0 0 1-1.569 1.569l-.41.293-.843-.532q-.405.207-.845.35l-.22.973-.497.082a6.8 6.8 0 0 1-2.218 0l-.498-.082-.22-.973a6 6 0 0 1-.844-.35l-.843.532-.41-.293a6.8 6.8 0 0 1-1.569-1.569l-.293-.41.532-.843a6 6 0 0 1-.35-.845l-.973-.22-.082-.497a6.8 6.8 0 0 1 0-2.218l.082-.498.973-.22q.143-.438.35-.844l-.532-.843.293-.41a6.8 6.8 0 0 1 1.569-1.569l.41-.293.843.532q.405-.207.845-.35l.22-.973zM8 6.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M5.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        na = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m15.054 5.291-.393 1.737-.758.18a9 9 0 0 0-2.636 1.093l-.663.41-1.507-.952q-.727.61-1.338 1.338l.951 1.507-.409.664a9 9 0 0 0-1.092 2.635l-.18.758-1.738.393a11 11 0 0 0 0 1.892l1.737.393.18.758a9 9 0 0 0 1.093 2.636l.41.663-.952 1.507q.61.727 1.338 1.338l1.507-.951.664.409a9 9 0 0 0 2.635 1.092l.758.18.393 1.738a11 11 0 0 0 1.892 0l.393-1.738.758-.18a9 9 0 0 0 2.636-1.092l.663-.41 1.507.952a11 11 0 0 0 1.338-1.338l-.951-1.507.409-.663a9 9 0 0 0 1.092-2.636l.18-.758 1.738-.393a11 11 0 0 0 0-1.892l-1.738-.393-.18-.758a9 9 0 0 0-1.092-2.636l-.41-.663.952-1.507a11 11 0 0 0-1.338-1.338l-1.507.951-.663-.409a9 9 0 0 0-2.636-1.092l-.758-.18-.393-1.738a11 11 0 0 0-1.892 0m-1.23-2.363a13.3 13.3 0 0 1 4.353 0l.83.137.433 1.921q1 .314 1.914.794l1.665-1.051.684.489a13.3 13.3 0 0 1 3.079 3.08l.49.683-1.052 1.665q.481.912.794 1.913l1.92.434.138.83a13.3 13.3 0 0 1 0 4.354l-.137.83-1.921.433a11.5 11.5 0 0 1-.794 1.914l1.051 1.665-.489.684a13.3 13.3 0 0 1-3.08 3.079l-.683.49-1.665-1.052a11.5 11.5 0 0 1-1.913.794l-.434 1.92-.83.138a13.3 13.3 0 0 1-4.354 0l-.83-.137-.434-1.921a11.5 11.5 0 0 1-1.913-.794L8.98 27.271l-.684-.489a13.3 13.3 0 0 1-3.079-3.08l-.49-.683 1.052-1.665a11.5 11.5 0 0 1-.794-1.913l-1.92-.434-.138-.83a13.3 13.3 0 0 1 0-4.354l.137-.83 1.921-.434q.314-1 .794-1.913L4.729 8.98l.489-.684a13.3 13.3 0 0 1 3.08-3.079l.683-.49 1.665 1.052a11.5 11.5 0 0 1 1.913-.794l.434-1.92zM16 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M10.75 16a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        aa = (0, m.forwardRef)((({
          size: e = "LG",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["LG" === e && (0, a.jsx)(ta, {
              ...n,
              ref: r
            }), "MD" === e && (0, a.jsx)(ra, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(na, {
              ...n,
              ref: r
            })]
          })
        }));
      aa.displayName = "Gear", aa.category = "User Interface", aa.variant = "Outline", aa.keywords = "Settings, Preferences, Options, Custom, Customize", aa.LG = ta, aa.MD = ra, aa.XL = na;
      const oa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 4A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        la = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ia = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m0 8c0-.69.56-1.25 1.25-1.25h22a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(oa, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(la, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ia, {
              ...n,
              ref: r
            })]
          })
        }));
      sa.displayName = "Menu", sa.category = "User Interface", sa.variant = "Outline", sa.keywords = "Hamburger, Navigation, Side nav, Triple bar, Item", sa.MD = oa, sa.LG = la, sa.XL = ia;
      const da = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM8.3 3a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V3.7zM2.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H3a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7zM8.3 9a.7.7 0 0 1 .7-.7h4a.7.7 0 0 1 .7.7v4a.7.7 0 0 1-.7.7H9a.7.7 0 0 1-.7-.7zm1.4.7v2.6h2.6V9.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ca = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4V5zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4V5zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 1v4h4v-4zm8-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1zm2 1v4h4v-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ua = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.75 5.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zM3.75 19.5c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5zm11.5-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-7a1.75 1.75 0 0 1-1.75-1.75zm2.5.75v5.5h5.5v-5.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(da, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ca, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ua, {
              ...n,
              ref: r
            })]
          })
        }));
      fa.displayName = "Grid", fa.category = "User Interface", fa.variant = "Outline", fa.keywords = "Squares, Hub, Menu, Blocks, Options, Items, Gallery", fa.MD = da, fa.LG = ca, fa.XL = ua;
      const ha = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.25 4A.75.75 0 0 1 3 3.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m3 0A.75.75 0 0 1 6 3.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 4m-3 4A.75.75 0 0 1 3 7.25h.1a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8m3 0A.75.75 0 0 1 6 7.25h7a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m-3 4a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m3 0a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        va = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h.2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-4 6a1 1 0 0 1 1-1h.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.75 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25m-5 8c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H5c-.69 0-1.25-.56-1.25-1.25m5 0c0-.69.56-1.25 1.25-1.25h17a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ga = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ha, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(va, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(pa, {
              ...n,
              ref: r
            })]
          })
        }));
      ga.displayName = "List", ga.category = "User Interface", ga.variant = "Outline", ga.keywords = "Index, Table of Contents, Menu, Side nav, Navigation, Bullet, To do", ga.MD = ha, ga.LG = va, ga.XL = pa;
      const ma = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7 2.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5M1.25 7a5.75 5.75 0 1 1 10.12 3.736l2.099 1.678a.75.75 0 0 1-.937 1.172l-2.293-1.834A5.75 5.75 0 0 1 1.25 7",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l2.675 2.675a1 1 0 0 1-1.414 1.414l-2.675-2.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 5.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S20.385 5.25 15 5.25M2.75 15C2.75 8.235 8.235 2.75 15 2.75S27.25 8.235 27.25 15c0 2.933-1.03 5.624-2.749 7.733l3.383 3.383a1.25 1.25 0 0 1-1.768 1.768L22.733 24.5A12.2 12.2 0 0 1 15 27.25C8.235 27.25 2.75 21.765 2.75 15",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ya = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ma, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(wa, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(xa, {
              ...n,
              ref: r
            })]
          })
        }));
      ya.displayName = "Search", ya.category = "User Interface", ya.variant = "Outline", ya.keywords = "Magnifying Glass, Look, Find, View", ya.MD = ma, ya.LG = wa, ya.XL = xa;
      const ba = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 3.75c-2.28 0-4.095.906-5.47 2.28a.75.75 0 0 1-1.06-1.06C3.095 3.344 5.28 2.25 8 2.25s4.905 1.094 6.53 2.72a.75.75 0 0 1-1.06 1.06C12.095 4.656 10.28 3.75 8 3.75m0 3.5a6.47 6.47 0 0 0-4.48 1.791.75.75 0 0 1-1.04-1.082A7.97 7.97 0 0 1 8 5.75a7.97 7.97 0 0 1 5.52 2.209.75.75 0 1 1-1.04 1.082A6.47 6.47 0 0 0 8 7.25m0 3.5c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04A4.9 4.9 0 0 1 8 9.25c1.333 0 2.603.555 3.54 1.53a.75.75 0 0 1-1.08 1.04A3.41 3.41 0 0 0 8 10.75m-.75 2.75a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ja = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 6C8.93 6 5.966 7.152 3.673 9.24A1 1 0 0 1 2.327 7.76 14.36 14.36 0 0 1 12 4.001c3.572 0 7.016 1.34 9.673 3.76a1 1 0 0 1-1.346 1.479A12.36 12.36 0 0 0 12 6m0 5c-2.395 0-4.673.822-6.35 2.26a1 1 0 1 1-1.3-1.52C6.411 9.974 9.16 9 12 9s5.588.973 7.65 2.74a1 1 0 1 1-1.3 1.52C16.672 11.822 14.394 11 12 11m0 5c-1.26 0-2.455.454-3.331 1.243a1 1 0 0 1-1.338-1.486C8.591 14.623 10.268 14 12 14s3.41.623 4.669 1.757a1 1 0 0 1-1.338 1.486C14.455 16.454 13.26 16 12 16m-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ma = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 7.75c-3.771 0-8.414 1.432-11.116 4.134a1.25 1.25 0 0 1-1.768-1.768C6.414 6.818 11.771 5.25 16 5.25s9.586 1.568 12.884 4.866a1.25 1.25 0 0 1-1.768 1.768C24.414 9.182 19.771 7.75 16 7.75m-4.83 7.296c-1.24.486-2.26 1.16-3.463 1.985a1.25 1.25 0 0 1-1.414-2.062c1.2-.823 2.43-1.65 3.964-2.25 1.552-.61 3.36-.969 5.743-.969s4.19.36 5.743.968c1.534.602 2.764 1.428 3.964 2.251a1.25 1.25 0 0 1-1.414 2.062c-1.203-.825-2.223-1.5-3.463-1.985-1.222-.48-2.714-.796-4.83-.796s-3.608.316-4.83.796M16 20.25c-1.669 0-3.026.587-4.134 1.652a1.25 1.25 0 0 1-1.732-1.804c1.562-1.5 3.535-2.348 5.866-2.348 1.104 0 2.14.138 3.136.52 1.001.386 1.895.993 2.748 1.846a1.25 1.25 0 0 1-1.768 1.768c-.647-.647-1.253-1.04-1.877-1.28-.63-.242-1.343-.354-2.239-.354M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ra = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ba, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ja, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ma, {
              ...n,
              ref: r
            })]
          })
        }));
      Ra.displayName = "WifiOn", Ra.category = "User Interface", Ra.variant = "Outline", Ra.keywords = "Connection, Internet, Wireless, Technology, Network, Signal", Ra.MD = ba, Ra.LG = ja, Ra.XL = Ma;
      const Ca = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m2.1 3.2 10.607 10.607 1.06-1.061-5.49-5.49a6.47 6.47 0 0 1 4.204 1.785.75.75 0 1 0 1.038-1.082 7.97 7.97 0 0 0-6.665-2.127L5.26 4.238A7.7 7.7 0 0 1 8 3.75c2.28 0 4.095.906 5.47 2.28a.75.75 0 1 0 1.06-1.06C12.905 3.344 10.72 2.25 8 2.25c-1.447 0-2.743.31-3.884.845l-.955-.956zM3.327 5.327 2.26 4.26a10 10 0 0 0-.79.71A.75.75 0 0 0 2.53 6.03q.377-.376.797-.703M5.677 7.677 4.536 6.536A7.9 7.9 0 0 0 2.48 7.959a.75.75 0 0 0 1.038 1.082 6.4 6.4 0 0 1 2.158-1.364M4.46 10.78A4.95 4.95 0 0 1 7.3 9.301l1.565 1.565A3.3 3.3 0 0 0 8 10.75c-.91 0-1.795.379-2.46 1.07a.75.75 0 0 1-1.08-1.04M7.25 13.5a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            })
          })
        }))),
        La = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m3 4.8 16.264 16.263 1.414-1.414L12.028 11c2.385.007 4.652.828 6.321 2.26a1 1 0 1 0 1.302-1.52C17.588 9.974 14.84 9 12 9q-.929 0-1.835.136L7.778 6.75A12.3 12.3 0 0 1 12 6c3.07 0 6.034 1.152 8.327 3.24a1 1 0 0 0 1.346-1.479A14.36 14.36 0 0 0 12 4.001c-1.998 0-3.956.419-5.759 1.212L4.414 3.386zM13.122 16.122l-2.06-2.06c-1.391.182-2.7.767-3.731 1.695a1 1 0 0 0 1.338 1.486C9.545 16.454 10.74 16 12 16c.382 0 .759.042 1.122.122M7.044 10.044l1.538 1.538a9.2 9.2 0 0 0-2.931 1.677 1 1 0 1 1-1.302-1.518c.806-.69 1.716-1.26 2.695-1.697M3.674 6.674 5.11 8.11A12.5 12.5 0 0 0 3.673 9.24 1 1 0 1 1 2.327 7.76q.645-.587 1.347-1.087M11 20a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
            })
          })
        }))),
        Sa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m4 6 21.92 21.92 1.768-1.768-11.901-11.9q.105-.003.213-.002c2.116 0 3.608.316 4.83.796 1.24.486 2.26 1.16 3.463 1.985a1.25 1.25 0 0 0 1.414-2.062c-1.2-.823-2.43-1.65-3.964-2.25-1.552-.61-3.36-.969-5.743-.969-.934 0-1.78.055-2.556.159l-3.181-3.182c1.905-.645 3.922-.977 5.737-.977 3.771 0 8.414 1.432 11.116 4.134a1.25 1.25 0 0 0 1.768-1.768C25.586 6.818 20.229 5.25 16 5.25c-2.392 0-5.144.502-7.68 1.534L5.767 4.232zM8.861 13.361l1.869 1.869c-1.049.467-1.965 1.075-3.023 1.8a1.25 1.25 0 0 1-1.414-2.06c.814-.56 1.642-1.119 2.568-1.609M6.24 10.74 4.454 8.954q-.713.54-1.337 1.163a1.25 1.25 0 0 0 1.768 1.768c.41-.41.866-.792 1.356-1.143M13.583 18.083l2.171 2.171c-1.557.055-2.835.636-3.888 1.648a1.25 1.25 0 0 1-1.732-1.804c.99-.95 2.143-1.638 3.449-2.015M14.75 26c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 0 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25"
            })
          })
        }))),
        Ea = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ca, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(La, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Sa, {
              ...n,
              ref: r
            })]
          })
        }));
      Ea.displayName = "WifiOff", Ea.category = "User Interface", Ea.variant = "Outline", Ea.keywords = "Connection, Internet, Wireless, Technology, Network, Signal, No, Off", Ea.MD = Ca, Ea.LG = La, Ea.XL = Sa;
      const _a = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Pa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Da = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Aa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(_a, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Pa, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Da, {
              ...n,
              ref: r
            })]
          })
        }));
      Aa.displayName = "PersonPlus", Aa.category = "User Interface", Aa.variant = "Outline", Aa.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", Aa.MD = _a, Aa.LG = Pa, Aa.XL = Da;
      const Ia = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ta = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Na = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Oa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ia, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ta, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Na, {
              ...n,
              ref: r
            })]
          })
        }));
      Oa.displayName = "PersonMinus", Oa.category = "User Interface", Oa.variant = "Outline", Oa.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", Oa.MD = Ia, Oa.LG = Ta, Oa.XL = Na;
      const ka = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.75 8a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ha = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M13 12.5a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ba = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M17.25 17a1.25 1.25 0 1 0-2.5 0v4a1.25 1.25 0 1 0 2.5 0z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        za = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ka, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ha, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ba, {
              ...n,
              ref: r
            })]
          })
        }));
      za.displayName = "Padlock", za.category = "User Interface", za.variant = "Outline", za.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", za.MD = ka, za.LG = Ha, za.XL = Ba;
      const Va = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M5.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM8 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM10.5 8.25a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M4.3 3.757a5 5 0 0 0-.031.256A2 2 0 0 0 2.5 6v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-1.757-1.985 4 4 0 0 0-.023-.253c-.055-.453-.208-1.077-.63-1.64C10.377 1.172 9.222.75 7.993.75c-1.16 0-2.402.28-3.126 1.419a4.1 4.1 0 0 0-.569 1.588M7.993 2.25c-.977 0-1.551.237-1.86.723a2.6 2.6 0 0 0-.35 1.002L5.78 4h4.458l-.007-.057c-.036-.3-.131-.64-.342-.922-.349-.465-.987-.771-1.895-.771M11.5 5.5h-7A.5.5 0 0 0 4 6v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ga = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM12 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM15.5 13a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M6.08 6.798a8 8 0 0 0-.045.36A3 3 0 0 0 4 10v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-2.013-2.834 7 7 0 0 0-.034-.366c-.089-.73-.336-1.722-1.004-2.614C15.823 2.684 13.985 2 11.99 2c-1.902 0-3.862.459-5 2.249-.567.893-.807 1.846-.91 2.549M11.99 4c-1.658 0-2.727.402-3.31 1.321-.347.545-.523 1.16-.608 1.679h7.89c-.067-.516-.237-1.113-.614-1.615C14.707 4.53 13.556 4 11.99 4M17 9H7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Fa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M11.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM16 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM20.5 17.75a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M7.86 9.339c-.06.412-.089.775-.101 1.059A4 4 0 0 0 5.5 14v10a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4V14a4 4 0 0 0-2.25-3.598c0-.29-.016-.654-.065-1.064-.122-1.006-.462-2.367-1.376-3.587-1.54-2.055-4.063-3.001-6.823-3.001-2.644 0-5.322.638-6.872 3.079-.78 1.227-1.11 2.539-1.254 3.51m8.126-4.089c-2.34 0-3.903.567-4.762 1.92-.527.83-.778 1.768-.89 2.533a8 8 0 0 0-.039.297h11.442a7 7 0 0 0-.034-.36c-.091-.751-.334-1.64-.895-2.39-.934-1.248-2.597-2-4.822-2M22.5 12.5h-13A1.5 1.5 0 0 0 8 14v10a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 24 24V14a1.5 1.5 0 0 0-1.5-1.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ua = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Va, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ga, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Fa, {
              ...n,
              ref: r
            })]
          })
        }));
      Ua.displayName = "PadlockPassword", Ua.category = "User Interface", Ua.variant = "Outline", Ua.keywords = "", Ua.MD = Va, Ua.LG = Ga, Ua.XL = Fa;
      const Xa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14 8a1 1 0 0 1-1 1h-.5v3.5A1.5 1.5 0 0 1 11 14H5a1.5 1.5 0 0 1-1.5-1.5V9H3a1 1 0 0 1-1-1V6.362a1.5 1.5 0 0 1 .744-1.296l4.5-2.625a1.5 1.5 0 0 1 1.512 0l4.5 2.625A1.5 1.5 0 0 1 14 6.362zm-1.5-.5H11v5H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H5v-5H3.5V6.362L8 3.737l4.5 2.625zm-4.95 5h.9v-1.95h-.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qa = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M21 11.8a1.7 1.7 0 0 1-1.7 1.7h-.55V19a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-5.5H4.7A1.7 1.7 0 0 1 3 11.8V9.399a2 2 0 0 1 .992-1.728l7-4.083a2 2 0 0 1 2.016 0l7 4.083A2 2 0 0 1 21 9.4zm-4.25-.3V19h-2.1v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19h-2.1v-7.5H5V9.399l7-4.084L19 9.4V11.5zm-5.7 7.5h1.9v-3.75h-1.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ka = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M28 16a2 2 0 0 1-2 2h-1v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5V18H6a2 2 0 0 1-2-2v-3.564a2.5 2.5 0 0 1 1.24-2.16l9.5-5.541a2.5 2.5 0 0 1 2.52 0l9.5 5.542A2.5 2.5 0 0 1 28 12.436zm-5.5-.5v10h-2.802v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5v-10h-3v-3.064L16 6.894l9.5 5.542V15.5zm-8.002 10h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Xa, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(qa, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ka, {
              ...n,
              ref: r
            })]
          })
        }));
      Wa.displayName = "House", Wa.category = "User Interface", Wa.variant = "Outline", Wa.keywords = "Home, Building, Property, Homepage, City", Wa.MD = Xa, Wa.LG = qa, Wa.XL = Ka;
      const $a = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M4.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M7 4.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M8.819 9.25H5A2.75 2.75 0 0 0 2.25 12v1a.75.75 0 0 0 1.5 0v-1A1.25 1.25 0 0 1 5 10.75h3.08c.123-.562.381-1.074.739-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Za = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M6.5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M12.691 14H7.25a4.2 4.2 0 0 0-3.014 1.278A4.38 4.38 0 0 0 3 18.333V20a1 1 0 1 0 2 0v-1.667c0-.627.243-1.223.668-1.659A2.2 2.2 0 0 1 7.25 16h4.595c.141-.732.435-1.41.846-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M17 13.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M14.75 17c0-.347.079-.676.22-.97l3 3A2.25 2.25 0 0 1 14.75 17m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ya = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.75 12a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M14 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M18.082 18.75H9.5a5.67 5.67 0 0 0-4.082 1.75 6 6 0 0 0-1.668 4.167V27a1.25 1.25 0 1 0 2.5 0v-2.333c0-.92.353-1.795.968-2.433A3.17 3.17 0 0 1 9.5 21.25h7.238a6.5 6.5 0 0 1 1.344-2.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M23 18a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5c0-.463.105-.902.292-1.293l4.001 4A3 3 0 0 1 20 23m5.708 1.293-4.001-4a3 3 0 0 1 4.001 4.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Qa = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)($a, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Za, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ya, {
              ...n,
              ref: r
            })]
          })
        }));
      Qa.displayName = "PersonBlock", Qa.category = "User Interface", Qa.variant = "Outline", Qa.keywords = "", Qa.MD = $a, Qa.LG = Za, Qa.XL = Ya;
      const Ja = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M5.143 2 3 4.143v7.714h2.571V14l2.143-2.143H9.43L13.286 8V2zm7.286 5.571-1.715 1.715H9l-1.5 1.5v-1.5H5.571V2.857h6.858z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M11.143 4.357h-.857V6.93h.857zM8.786 4.357h-.857V6.93h.857z"
            })]
          })
        }))),
        eo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7.514 3 4.3 6.214v11.572h3.857V21l3.214-3.214h2.572L19.728 12V3zm10.929 8.357L15.87 13.93H13.3l-2.25 2.25v-2.25H8.157V4.286h10.286z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M16.514 6.536h-1.286v3.857h1.286zM12.978 6.536h-1.285v3.857h1.285z"
            })]
          })
        }))),
        to = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M9.986 4 5.7 8.286v15.428h5.143V28l4.286-4.286h3.428L26.272 16V4zm14.571 11.143L21.13 18.57H17.7l-3 3v-3h-3.857V5.714h13.714z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M21.986 8.714h-1.714v5.143h1.714zM17.272 8.714h-1.715v5.143h1.715z"
            })]
          })
        }))),
        ro = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ja, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(eo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(to, {
              ...n,
              ref: r
            })]
          })
        }));
      ro.displayName = "Twitch", ro.category = "Social Media", ro.variant = "Outline", ro.keywords = "Social media, Streaming, Game, App, Share", ro.MD = Ja, ro.LG = eo, ro.XL = to;
      const no = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.515 2.042c-.638.03-1.074.132-1.455.282-.395.153-.73.36-1.062.694a2.9 2.9 0 0 0-.69 1.063c-.148.382-.248.818-.276 1.457s-.034.844-.031 2.474c.003 1.629.01 1.833.041 2.473.03.639.132 1.074.282 1.456.154.394.36.728.694 1.061s.668.537 1.064.69c.382.147.818.248 1.457.276.638.028.844.034 2.473.031s1.834-.01 2.474-.04 1.073-.133 1.455-.282c.394-.154.729-.36 1.061-.694a2.9 2.9 0 0 0 .69-1.064c.148-.382.248-.818.276-1.456.028-.64.034-.845.031-2.474s-.01-1.834-.04-2.474-.133-1.074-.282-1.456a2.95 2.95 0 0 0-.694-1.061 2.9 2.9 0 0 0-1.064-.69c-.382-.147-.818-.248-1.457-.276-.638-.027-.844-.034-2.473-.031s-1.834.01-2.474.041m.07 10.847c-.585-.026-.902-.123-1.114-.204a1.9 1.9 0 0 1-.691-.448 1.85 1.85 0 0 1-.45-.689c-.082-.212-.181-.529-.209-1.114-.03-.632-.036-.822-.04-2.424-.003-1.602.003-1.791.031-2.424.025-.584.123-.902.204-1.114.108-.28.238-.48.448-.69.21-.212.409-.342.689-.451.211-.083.529-.18 1.113-.209.633-.03.823-.036 2.424-.039 1.602-.004 1.792.002 2.425.03.585.026.903.123 1.114.204.28.108.48.238.69.448.212.21.342.409.451.69.083.21.181.527.209 1.112.03.633.037.823.04 2.424.002 1.602-.003 1.792-.031 2.424-.026.585-.123.903-.204 1.115-.108.28-.238.48-.448.69-.21.211-.409.341-.689.45-.211.083-.529.182-1.113.21-.633.03-.822.035-2.425.039s-1.791-.003-2.424-.03m4.892-8.096a.72.72 0 1 0 1.44-.002.72.72 0 0 0-1.44.002M4.919 8.006a3.08 3.08 0 1 0 6.162-.012 3.08 3.08 0 0 0-6.162.012M6 8.004a2 2 0 1 1 4-.008 2 2 0 0 1-4 .008"
            })
          })
        }))),
        ao = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.273 3.063c-.958.045-1.612.198-2.184.423-.591.23-1.093.54-1.592 1.04a4.4 4.4 0 0 0-1.035 1.596c-.222.572-.372 1.227-.414 2.185s-.052 1.266-.047 3.71.016 2.75.062 3.71c.046.958.198 1.612.423 2.184.23.591.54 1.093 1.04 1.592.502.5 1.003.806 1.597 1.035.572.221 1.227.372 2.185.414s1.266.052 3.71.047 2.75-.016 3.71-.061c.96-.046 1.61-.199 2.183-.423a4.4 4.4 0 0 0 1.592-1.04 4.4 4.4 0 0 0 1.035-1.597c.221-.572.372-1.227.414-2.184.042-.96.051-1.268.047-3.711-.005-2.444-.016-2.75-.061-3.71-.046-.96-.198-1.612-.423-2.184a4.4 4.4 0 0 0-1.04-1.592c-.501-.5-1.004-.806-1.597-1.035-.572-.221-1.227-.372-2.185-.414s-1.266-.052-3.71-.047-2.75.015-3.71.062m.105 16.27c-.878-.038-1.354-.184-1.672-.306a2.8 2.8 0 0 1-1.036-.671 2.8 2.8 0 0 1-.675-1.034c-.124-.317-.272-.793-.313-1.67-.045-.95-.054-1.234-.06-3.637s.005-2.687.046-3.636c.038-.877.184-1.354.306-1.671.162-.421.357-.72.671-1.036a2.8 2.8 0 0 1 1.034-.675c.317-.124.793-.272 1.67-.313.95-.045 1.234-.054 3.637-.06s2.687.004 3.637.046c.876.038 1.354.183 1.67.306.421.162.72.357 1.037.671s.511.613.675 1.034c.124.317.271.792.313 1.67.045.95.055 1.234.06 3.636s-.005 2.688-.046 3.636c-.038.877-.184 1.354-.306 1.672-.162.42-.357.72-.672 1.036-.314.316-.613.511-1.033.675-.317.124-.794.271-1.67.313-.95.045-1.234.054-3.637.06s-2.687-.005-3.636-.046M15.715 7.19a1.08 1.08 0 1 0 2.16-.004 1.08 1.08 0 0 0-2.16.004m-8.336 4.819a4.621 4.621 0 1 0 9.242-.018 4.621 4.621 0 0 0-9.242.018M9 12.006a3 3 0 1 1 6-.012 3 3 0 0 1-6 .012"
            })
          })
        }))),
        oo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M11.03 4.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388 5.9 5.9 0 0 0-1.38 2.127c-.295.764-.495 1.637-.552 2.914-.056 1.278-.069 1.688-.063 4.947s.021 3.667.083 4.948c.061 1.276.264 2.148.564 2.91a5.9 5.9 0 0 0 1.387 2.123 5.9 5.9 0 0 0 2.13 1.38c.762.295 1.635.496 2.913.552s1.688.069 4.946.063 3.668-.02 4.948-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.122-1.388 5.9 5.9 0 0 0 1.38-2.128c.295-.764.496-1.637.552-2.913.056-1.28.069-1.69.063-4.948s-.021-3.667-.082-4.946c-.06-1.28-.264-2.15-.563-2.912a5.9 5.9 0 0 0-1.388-2.123 5.86 5.86 0 0 0-2.128-1.38c-.764-.295-1.636-.496-2.914-.552-1.277-.055-1.688-.069-4.947-.063s-3.667.02-4.947.083m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895 3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.805.244 2.227.408.561.216.96.475 1.382.895s.681.817.9 1.378c.166.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848s-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23a3.7 3.7 0 0 1-.895 1.38c-.42.422-.819.682-1.379.9-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079s-3.582-.006-4.847-.06m9.782-16.192a1.44 1.44 0 1 0 2.88-.004 1.44 1.44 0 0 0-2.88.004M9.84 16.012a6.162 6.162 0 1 0 12.323-.026 6.162 6.162 0 0 0-12.323.026M12 16.008a4 4 0 1 1 8-.016 4 4 0 0 1-8 .016"
            })
          })
        }))),
        lo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(no, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ao, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(oo, {
              ...n,
              ref: r
            })]
          })
        }));
      lo.displayName = "Instagram", lo.category = "Social Media", lo.variant = "Outline", lo.keywords = "Social media, Photo, Camera, App, Share", lo.MD = no, lo.LG = ao, lo.XL = oo;
      const io = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14 8.022C14 4.696 11.313 2 8 2S2 4.696 2 8.022a6.02 6.02 0 0 0 4.55 5.845V9.862H5.314v-1.84h1.238v-.793c0-2.05.924-3 2.929-3 .38 0 1.036.075 1.304.15v1.668a8 8 0 0 0-.693-.022c-.984 0-1.364.374-1.364 1.346v.65h1.96l-.337 1.841H8.727V14A6.015 6.015 0 0 0 14 8.022"
            })
          })
        }))),
        so = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M21 12.033C21 7.044 16.97 3 12 3s-9 4.044-9 9.033A9.03 9.03 0 0 0 9.826 20.8v-6.007H7.97v-2.76h1.856v-1.19c0-3.074 1.386-4.499 4.393-4.499.57 0 1.555.112 1.957.224V9.07a12 12 0 0 0-1.04-.033c-1.475 0-2.045.561-2.045 2.02v.976h2.94l-.506 2.76h-2.434V21C17.547 20.46 21 16.65 21 12.033"
            })
          })
        }))),
        co = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M28 16.044C28 9.392 22.627 4 16 4S4 9.392 4 16.044a12.04 12.04 0 0 0 9.101 11.69v-8.01h-2.474v-3.68H13.1v-1.586c0-4.1 1.848-6 5.858-6 .76 0 2.073.15 2.61.3v3.336c-.284-.03-.776-.045-1.387-.045-1.968 0-2.728.748-2.728 2.693v1.302h3.92l-.674 3.68h-3.246V28C23.396 27.28 28 22.202 28 16.044"
            })
          })
        }))),
        uo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(io, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(so, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(co, {
              ...n,
              ref: r
            })]
          })
        }));
      uo.displayName = "Facebook", uo.category = "Social Media", uo.variant = "Outline", uo.keywords = "Social media, Profile, Feed, App, Share", uo.MD = io, uo.LG = so, uo.XL = co;
      const fo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.142 7.081 13.609 2H12.55L8.671 6.412 5.573 2H2l4.685 6.672L2 14h1.059l4.096-4.66L10.427 14H14zm-1.45 1.65-.475-.665L3.44 2.78h1.626l3.048 4.266.475.664 3.962 5.546h-1.626z"
            })
          })
        }))),
        ho = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.712 10.622 20.413 3h-1.588l-5.818 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21zm-2.174 2.474-.713-.997L5.16 4.17H7.6l4.571 6.4.712.996 5.943 8.319h-2.439z"
            })
          })
        }))),
        vo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M18.283 14.162 27.218 4H25.1l-7.758 8.824L11.147 4H4l9.37 13.343L4 28h2.117l8.193-9.318L20.853 28H28zm-2.9 3.299-.95-1.329L6.88 5.56h3.252l6.096 8.532.95 1.329 7.924 11.09h-3.253z"
            })
          })
        }))),
        po = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(fo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ho, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(vo, {
              ...n,
              ref: r
            })]
          })
        }));
      po.displayName = "Twitter", po.category = "Social Media", po.variant = "Outline", po.keywords = "Social media, Twitter, Tweet, App, Share, X", po.MD = fo, po.LG = ho, po.XL = vo;
      const go = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.708 4.63a1.75 1.75 0 0 0-1.237-1.237C12.378 3.1 8 3.1 8 3.1s-4.378 0-5.47.293A1.75 1.75 0 0 0 1.293 4.63C1 5.722 1 8 1 8s0 2.278.293 3.37a1.75 1.75 0 0 0 1.237 1.237C3.622 12.9 8 12.9 8 12.9s4.378 0 5.47-.293a1.75 1.75 0 0 0 1.237-1.237C15 10.278 15 8 15 8s0-2.278-.293-3.37zM6.6 10.1V5.9L10.237 8z"
            })
          })
        }))),
        mo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        wo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M28.459 9.742a3.26 3.26 0 0 0-2.3-2.298C24.132 6.9 16 6.9 16 6.9s-8.13 0-10.158.544a3.26 3.26 0 0 0-2.298 2.298C3 11.77 3 16 3 16s0 4.231.544 6.258a3.26 3.26 0 0 0 2.298 2.298C7.87 25.1 16 25.1 16 25.1s8.13 0 10.158-.544a3.26 3.26 0 0 0 2.298-2.298C29 20.23 29 16 29 16s0-4.231-.544-6.258zM13.399 19.9V12.1l6.755 3.9z"
            })
          })
        }))),
        xo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(go, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(mo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(wo, {
              ...n,
              ref: r
            })]
          })
        }));
      xo.displayName = "Youtube", xo.category = "Social Media", xo.variant = "Outline", xo.keywords = "Social media, Video, Player, App, Share", xo.MD = go, xo.LG = mo, xo.XL = wo;
      const yo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(yo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(bo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(jo, {
              ...n,
              ref: r
            })]
          })
        }));
      Mo.displayName = "Circle", Mo.category = "Selection", Mo.variant = "Outline", Mo.keywords = "Radio, Radio Button, Round, Empty, Selection, Unchecked", Mo.MD = yo, Mo.LG = bo, Mo.XL = jo;
      const Ro = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Co = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Lo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M16 24a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M16 2.75C8.682 2.75 2.75 8.682 2.75 16S8.682 29.25 16 29.25 29.25 23.318 29.25 16 23.318 2.75 16 2.75M5.25 16c0-5.937 4.813-10.75 10.75-10.75S26.75 10.063 26.75 16 21.937 26.75 16 26.75 5.25 21.937 5.25 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        So = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ro, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Co, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Lo, {
              ...n,
              ref: r
            })]
          })
        }));
      So.displayName = "CircleDot", So.category = "Selection", So.variant = "Outline", So.keywords = "Radio, Radio Button, Round, Filled, Selection, Aim, Checked", So.MD = Ro, So.LG = Co, So.XL = Lo;
      const Eo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.25a.75.75 0 0 1 .75.75v4.25H13a.75.75 0 0 1 0 1.5H8.75V13a.75.75 0 0 1-1.5 0V8.75H3a.75.75 0 0 1 0-1.5h4.25V3A.75.75 0 0 1 8 2.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _o = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Po = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 4.75c.69 0 1.25.56 1.25 1.25v8.75H26a1.25 1.25 0 1 1 0 2.5h-8.75V26a1.25 1.25 0 1 1-2.5 0v-8.75H6a1.25 1.25 0 1 1 0-2.5h8.75V6c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Do = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Eo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(_o, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Po, {
              ...n,
              ref: r
            })]
          })
        }));
      Do.displayName = "Plus", Do.category = "Selection", Do.variant = "Outline", Do.keywords = "Add, More, Create, New, Navigation", Do.MD = Eo, Do.LG = _o, Do.XL = Po;
      const Ao = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.25 8A.75.75 0 0 1 3 7.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Io = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        To = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.75 16c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        No = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ao, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Io, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(To, {
              ...n,
              ref: r
            })]
          })
        }));
      No.displayName = "Minus", No.category = "Selection", No.variant = "Outline", No.keywords = "Remove, Less, Delete, Navigation, Minimize", No.MD = Ao, No.LG = Io, No.XL = To;
      const Oo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.47 3.47a.75.75 0 0 1 1.06 0L8 6.94l3.47-3.47a.75.75 0 1 1 1.06 1.06L9.06 8l3.47 3.47a.75.75 0 1 1-1.06 1.06L8 9.06l-3.47 3.47a.75.75 0 0 1-1.06-1.06L6.94 8 3.47 4.53a.75.75 0 0 1 0-1.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ko = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ho = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.116 7.116a1.25 1.25 0 0 1 1.768 0L16 14.232l7.116-7.116a1.25 1.25 0 0 1 1.768 1.768L17.768 16l7.116 7.116a1.25 1.25 0 0 1-1.768 1.768L16 17.768l-7.116 7.116a1.25 1.25 0 0 1-1.768-1.768L14.232 16 7.116 8.884a1.25 1.25 0 0 1 0-1.768",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Oo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ko, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ho, {
              ...n,
              ref: r
            })]
          })
        }));
      Bo.displayName = "X", Bo.category = "Selection", Bo.variant = "Outline", Bo.keywords = "Close, Error, Remove, Clean, Erase, Delete, Navigation, Cross, Times, Cancel", Bo.MD = Oo, Bo.LG = ko, Bo.XL = Ho;
      const zo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.245 4.041a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.061 0L1.755 9.674a.75.75 0 1 1 1.061-1.06l2.898 2.898 7.47-7.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.684 6.27a1 1 0 0 1 .046 1.414l-10.313 11a1 1 0 0 1-1.459 0l-4.688-5a1 1 0 1 1 1.46-1.368l3.957 4.222L18.27 6.316a1 1 0 0 1 1.414-.046",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Go = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M26.876 10.108c.492.484.5 1.275.016 1.768l-13.75 14a1.25 1.25 0 0 1-1.784 0l-6.25-6.364a1.25 1.25 0 1 1 1.784-1.751l5.358 5.455 12.858-13.092a1.25 1.25 0 0 1 1.768-.016",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(zo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Vo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Go, {
              ...n,
              ref: r
            })]
          })
        }));
      Fo.displayName = "Check", Fo.category = "Selection", Fo.variant = "Outline", Fo.keywords = "Done, Ready, Yes, Available, Completed, Success, Accept, Tick", Fo.MD = zo, Fo.LG = Vo, Fo.XL = Go;
      const Uo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0m4 0A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m5 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 5.25C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75 26.75 21.937 26.75 16 21.937 5.25 16 5.25M2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25 2.75 23.318 2.75 16m6 0c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ko = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Uo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Xo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(qo, {
              ...n,
              ref: r
            })]
          })
        }));
      Ko.displayName = "MinusCircle", Ko.category = "Selection", Ko.variant = "Outline", Ko.keywords = "Minus, No, Less, n/a, Remove, Delete", Ko.MD = Uo, Ko.LG = Xo, Ko.XL = qo;
      const Wo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.5 3.5h-9v9h9zM3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $o = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19 5H5v14h14zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M24 6.5H8A1.5 1.5 0 0 0 6.5 8v16A1.5 1.5 0 0 0 8 25.5h16a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 24 6.5M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yo = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Wo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)($o, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Zo, {
              ...n,
              ref: r
            })]
          })
        }));
      Yo.displayName = "Square", Yo.category = "Selection", Yo.variant = "Outline", Yo.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", Yo.MD = Wo, Yo.LG = $o, Yo.XL = Zo;
      const Qo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm8.03 2.72a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06L7 8.94l3.47-3.47a.75.75 0 0 1 1.06 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jo = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11.664 4.253a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        el = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zm13.8 5.79c.53.442.602 1.23.16 1.76l-6.666 8a1.25 1.25 0 0 1-1.921 0l-3.333-4a1.25 1.25 0 0 1 1.92-1.6l2.373 2.847L20.04 11.2a1.25 1.25 0 0 1 1.76-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Qo, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Jo, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(el, {
              ...n,
              ref: r
            })]
          })
        }));
      tl.displayName = "CheckSquare", tl.category = "Selection", tl.variant = "Outline", tl.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", tl.MD = Qo, tl.LG = Jo, tl.XL = el;
      const rl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M1.25 3.5A2.25 2.25 0 0 1 3.5 1.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zM5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm2 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        al = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2.75 8C2.75 5.1 5.1 2.75 8 2.75h16c2.9 0 5.25 2.35 5.25 5.25v16c0 2.9-2.35 5.25-5.25 5.25H8A5.25 5.25 0 0 1 2.75 24zM8 5.25A2.75 2.75 0 0 0 5.25 8v16A2.75 2.75 0 0 0 8 26.75h16A2.75 2.75 0 0 0 26.75 24V8A2.75 2.75 0 0 0 24 5.25zM8.75 16c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H10c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ol = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(rl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(nl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(al, {
              ...n,
              ref: r
            })]
          })
        }));
      ol.displayName = "MinusSquare", ol.category = "Selection", ol.variant = "Outline", ol.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", ol.MD = rl, ol.LG = nl, ol.XL = al;
      const ll = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M10.162 13.153a.75.75 0 0 1-.735.597 8 8 0 0 1-1.223-.139 5 5 0 0 1-.707-.178c-.183-.062-.487-.179-.698-.407a2.47 2.47 0 0 1-.646-1.676V9.9H4.032a1.7 1.7 0 0 1-.76-.172 1.8 1.8 0 0 1-.607-.486 1.9 1.9 0 0 1-.35-.69 1.9 1.9 0 0 1-.046-.771l.7-4.95c.06-.426.262-.826.582-1.121a1.72 1.72 0 0 1 1.182-.46h7.25c.49 0 .944.21 1.27.563.324.351.497.815.497 1.287v3.85c0 .472-.173.936-.497 1.287a1.73 1.73 0 0 1-1.27.563h-.914zM11.21 7.3h.774a.23.23 0 0 0 .168-.081.4.4 0 0 0 .098-.269V3.1a.4.4 0 0 0-.098-.269.23.23 0 0 0-.168-.08h-.774zm-1.5-4.55H4.72a.22.22 0 0 0-.153.064.38.38 0 0 0-.112.225l-.7 4.95a.4.4 0 0 0 .01.174.4.4 0 0 0 .07.14q.045.053.093.076a.2.2 0 0 0 .09.021h2.885a.75.75 0 0 1 .75.75v2.2c0 .237.081.457.214.619q.026.013.112.043c.13.045.306.088.505.125q.178.035.345.057l.88-4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        il = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14.459 20.285A1 1 0 0 1 13.5 21c-.36 0-.75-.128-1.034-.237a10 10 0 0 1-.999-.457c-.616-.321-1.324-.754-1.668-1.093-.446-.44-.622-1.023-.704-1.46a7 7 0 0 1-.092-1.332l.16-2.021H5.649a2.65 2.65 0 0 1-2-.888 2.6 2.6 0 0 1-.619-2.104l1.122-7.2c.096-.624.418-1.19.901-1.594A2.64 2.64 0 0 1 6.771 2h11.603c.692 0 1.358.27 1.851.756.494.486.775 1.15.775 1.844v5.6c0 .695-.28 1.358-.775 1.844a2.64 2.64 0 0 1-1.85.756h-1.693zm2.477-9.485h1.438a.64.64 0 0 0 .448-.181A.59.59 0 0 0 19 10.2V4.6a.59.59 0 0 0-.178-.419.64.64 0 0 0-.448-.18h-1.438zm-2-6.8H6.755a.64.64 0 0 0-.419.148.6.6 0 0 0-.207.364l-1.122 7.2a.58.58 0 0 0 .141.476q.09.1.216.157a.65.65 0 0 0 .27.055h4.611a1 1 0 0 1 .997 1.079L11 16.539c.001.292.013.59.062.848q.038.198.086.305c.03.072.054.095.053.095.113.111.582.428 1.19.745q.226.117.438.215l2.106-7.092z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19.26 28.361a1.25 1.25 0 0 1-1.198.889c-.467 0-.98-.165-1.37-.311-.437-.165-.911-.383-1.36-.613-.846-.434-1.804-1.012-2.264-1.457-.59-.571-.827-1.338-.938-1.924-.116-.613-.13-1.233-.13-1.68q0-.05.004-.1l.229-2.844H7.267a3.55 3.55 0 0 1-1.445-.294c-.458-.199-.87-.493-1.203-.865a3.4 3.4 0 0 1-.728-1.293 3.35 3.35 0 0 1-.1-1.481v-.002l1.542-9.74c.13-.825.56-1.567 1.203-2.096a3.53 3.53 0 0 1 2.273-.8h15.956c.911 0 1.793.35 2.45.986a3.38 3.38 0 0 1 1.035 2.429v7.576a3.38 3.38 0 0 1-1.035 2.429 3.52 3.52 0 0 1-2.45.986H22.34zm3.401-12.705h2.104c.274 0 .529-.106.71-.282a.88.88 0 0 0 .275-.633V7.165a.88.88 0 0 0-.274-.633 1.02 1.02 0 0 0-.711-.282H22.66zm-2.5-9.406H8.79a1.03 1.03 0 0 0-.665.23.9.9 0 0 0-.322.554l-1.543 9.74a.85.85 0 0 0 .026.377c.037.122.102.239.193.34a1 1 0 0 0 .34.244c.133.058.28.087.428.086h6.34a1.25 1.25 0 0 1 1.246 1.35l-.333 4.143c.001.398.018.808.086 1.166.076.398.182.555.221.593.169.163.829.6 1.665 1.028.26.133.514.254.75.356l2.94-9.736z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ll, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(il, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(sl, {
              ...n,
              ref: r
            })]
          })
        }));
      dl.displayName = "ThumbsDown", dl.category = "Social", dl.variant = "Outline", dl.keywords = "Dislike, Rate, Social, Review, Feedback, Negative", dl.MD = ll, dl.LG = il, dl.XL = sl;
      const cl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.838 1.847a.75.75 0 0 1 .735-.597c.263 0 .76.051 1.223.139.234.044.484.103.706.178.184.062.488.179.7.407.418.454.645 1.058.645 1.676V5.1h2.121a1.7 1.7 0 0 1 .76.172c.237.115.444.283.607.486.164.204.282.44.35.69.066.252.082.514.046.771l-.7 4.95c-.06.426-.262.826-.582 1.121a1.72 1.72 0 0 1-1.182.46h-7.25c-.49 0-.945-.21-1.27-.563A1.9 1.9 0 0 1 2.25 11.9V8.05c0-.472.173-.936.497-1.287a1.73 1.73 0 0 1 1.27-.563h.914zM4.79 7.7h-.774a.23.23 0 0 0-.167.081.4.4 0 0 0-.099.269v3.85c0 .111.041.207.099.269a.23.23 0 0 0 .167.08h.774zm1.5 4.55h4.99a.22.22 0 0 0 .153-.064.38.38 0 0 0 .112-.225l.7-4.95a.4.4 0 0 0-.01-.174.4.4 0 0 0-.07-.14.3.3 0 0 0-.093-.076.2.2 0 0 0-.09-.021H9.097a.75.75 0 0 1-.75-.75v-2.2a.98.98 0 0 0-.214-.619 1 1 0 0 0-.112-.043 4 4 0 0 0-.505-.126 7 7 0 0 0-.345-.056l-.88 4.221z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ul = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.541 2.715A1 1 0 0 1 10.5 2c.36 0 .75.128 1.034.237.322.123.67.286.999.457.616.321 1.324.754 1.668 1.093.446.44.622 1.023.704 1.46a7 7 0 0 1 .092 1.332l-.16 2.021h3.514a2.65 2.65 0 0 1 2 .888 2.6 2.6 0 0 1 .619 2.104l-1.122 7.2a2.6 2.6 0 0 1-.901 1.594 2.64 2.64 0 0 1-1.718.614H5.626a2.64 2.64 0 0 1-1.851-.756A2.59 2.59 0 0 1 3 18.4v-5.6c0-.695.28-1.358.775-1.844a2.64 2.64 0 0 1 1.85-.756h1.693zM7.064 12.2H5.626a.64.64 0 0 0-.448.181A.59.59 0 0 0 5 12.8v5.6c0 .154.062.305.178.419a.64.64 0 0 0 .448.18h1.438zm2 6.8h8.181a.64.64 0 0 0 .419-.148.6.6 0 0 0 .207-.364l1.122-7.2a.58.58 0 0 0-.141-.476.649.649 0 0 0-.485-.212h-4.612a1 1 0 0 1-.997-1.079L13 6.461c-.001-.293-.013-.59-.062-.848a1.5 1.5 0 0 0-.086-.305c-.03-.072-.054-.095-.053-.095-.113-.111-.582-.428-1.19-.745a10 10 0 0 0-.438-.215l-2.107 7.092z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.74 3.639a1.25 1.25 0 0 1 1.197-.889c.468 0 .982.165 1.372.312.436.164.91.382 1.359.612.846.434 1.804 1.012 2.264 1.457.59.571.827 1.338.938 1.924.116.613.13 1.233.13 1.68q0 .05-.004.1l-.229 2.844h4.966c.497-.004.99.096 1.445.294.458.199.87.493 1.203.865.335.373.584.813.728 1.293s.178.986.1 1.481v.002l-1.542 9.74a3.4 3.4 0 0 1-1.203 2.096 3.53 3.53 0 0 1-2.273.8H7.235c-.911 0-1.793-.35-2.45-.986a3.38 3.38 0 0 1-1.035-2.429V17.26a3.38 3.38 0 0 1 1.035-2.429 3.52 3.52 0 0 1 2.45-.986H9.66zM9.34 16.344H7.235c-.274 0-.529.106-.71.282a.88.88 0 0 0-.275.633v7.576c0 .23.094.458.274.633.182.176.437.282.711.282H9.34zm2.5 9.406H23.21a1.03 1.03 0 0 0 .665-.23.9.9 0 0 0 .322-.553l1.543-9.742a.85.85 0 0 0-.026-.376.9.9 0 0 0-.193-.34 1 1 0 0 0-.34-.244 1.05 1.05 0 0 0-.428-.086h-6.34a1.25 1.25 0 0 1-1.246-1.35l.333-4.143a6.6 6.6 0 0 0-.086-1.166c-.076-.398-.182-.555-.221-.593-.169-.163-.829-.6-1.665-1.028a13 13 0 0 0-.75-.356l-2.94 9.736z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(cl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ul, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(fl, {
              ...n,
              ref: r
            })]
          })
        }));
      hl.displayName = "ThumbsUp", hl.category = "Social", hl.variant = "Outline", hl.keywords = "Like, Rate, Social, Review, Feedback, Positive", hl.MD = cl, hl.LG = ul, hl.XL = fl;
      const vl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5.124 2.396A4.16 4.16 0 0 1 8 1.25c1.073 0 2.109.409 2.877 1.146A3.89 3.89 0 0 1 12.083 5.2c0 1.75.39 2.82.736 3.43.174.306.342.504.454.618a1.4 1.4 0 0 0 .143.128A.75.75 0 0 1 13 10.75H3a.75.75 0 0 1-.397-1.389 2 2 0 0 0 .124-.113c.112-.114.28-.312.454-.619.346-.608.736-1.678.736-3.429 0-1.058.438-2.066 1.207-2.804M4.552 9.25h6.896c-.46-.86-.865-2.158-.865-4.05 0-.64-.264-1.26-.745-1.722A2.66 2.66 0 0 0 8 2.75c-.695 0-1.355.265-1.838.728A2.39 2.39 0 0 0 5.417 5.2c0 1.892-.404 3.19-.865 4.05m1.031 2.126a.75.75 0 0 1 1.04.207c.126.188.315.357.558.478.244.122.527.189.82.189s.574-.067.818-.189c.243-.121.432-.29.557-.478a.75.75 0 0 1 1.248.834c-.281.42-.676.757-1.135.986-.458.23-.971.347-1.489.347s-1.03-.118-1.49-.347a2.94 2.94 0 0 1-1.134-.986.75.75 0 0 1 .207-1.04",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.69 3.755C8.91 2.625 10.55 2 12.245 2c1.696 0 3.336.624 4.555 1.755 1.222 1.133 1.923 2.685 1.923 4.32 0 2.843.655 4.6 1.254 5.617.3.511.594.847.798 1.047a3 3 0 0 0 .277.237l.002.002a.943.943 0 0 1-.507 1.739H3.943a.943.943 0 0 1-.498-1.744h-.002l-.003.003-.004.003q-.002 0 0 0l.003-.002.047-.035a3 3 0 0 0 .23-.203c.204-.2.497-.536.798-1.048.598-1.017 1.253-2.773 1.253-5.616 0-1.635.702-3.187 1.923-4.32M6.03 14.83h12.43l-.11-.182c-.785-1.335-1.513-3.427-1.513-6.573 0-1.086-.465-2.145-1.32-2.937-.856-.794-2.032-1.251-3.272-1.251s-2.415.457-3.272 1.251c-.854.792-1.319 1.85-1.319 2.937 0 3.146-.728 5.238-1.514 6.573zm2.813 3.1a.943.943 0 0 1 1.245.479c.25.562.597.998.982 1.286.38.286.785.418 1.175.418s.795-.132 1.176-.418c.385-.288.73-.724.982-1.287a.943.943 0 1 1 1.723.768c-.363.815-.897 1.522-1.573 2.029-.678.509-1.475.795-2.308.795s-1.629-.286-2.308-.795c-.675-.507-1.21-1.214-1.572-2.029a.943.943 0 0 1 .478-1.245",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.965 5.075C11.58 3.577 13.753 2.75 16 2.75s4.42.827 6.035 2.325c1.62 1.501 2.548 3.558 2.548 5.725 0 3.766.868 6.093 1.661 7.441a6.7 6.7 0 0 0 1.058 1.388 4 4 0 0 0 .367.315l.003.002A1.25 1.25 0 0 1 27 22.25H5a1.25 1.25 0 0 1-.66-2.311l-.003.001-.005.003-.005.004.001-.001.003-.002q.014-.009.062-.046c.064-.05.17-.137.306-.27.27-.264.658-.709 1.057-1.387.793-1.348 1.66-3.675 1.66-7.441 0-2.167.93-4.224 2.549-5.725m-2.2 14.675h16.47l-.146-.241c-1.04-1.769-2.006-4.542-2.006-8.709 0-1.44-.616-2.842-1.747-3.892C19.2 5.856 17.643 5.25 16 5.25c-1.642 0-3.2.606-4.335 1.658-1.132 1.05-1.748 2.452-1.748 3.892 0 4.167-.966 6.94-2.006 8.709zm3.726 4.108a1.25 1.25 0 0 1 1.65.633c.333.746.792 1.323 1.301 1.705.505.379 1.041.554 1.558.554s1.053-.175 1.558-.554c.51-.382.968-.96 1.3-1.705a1.25 1.25 0 1 1 2.284 1.018c-.481 1.08-1.19 2.016-2.084 2.687-.9.675-1.954 1.054-3.058 1.054s-2.159-.38-3.058-1.054c-.895-.67-1.603-1.608-2.084-2.687a1.25 1.25 0 0 1 .633-1.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ml = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(vl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(pl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(gl, {
              ...n,
              ref: r
            })]
          })
        }));
      ml.displayName = "Bell", ml.category = "Social", ml.variant = "Outline", ml.keywords = "Notification, Message, Ring, Ding, Attention, Reminder, Alarm", ml.MD = vl, ml.LG = pl, ml.XL = gl;
      const wl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M5.5 6V4.5H7V6zM5.5 8.5V7H7v1.5zM9 4.5V6h1.5V4.5zM9 8.5V7h1.5v1.5z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M4.5 14A1.5 1.5 0 0 1 3 12.5v-9A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v9a1.5 1.5 0 0 1-1.5 1.5zm0-10.5h7v9H9.55v-2.4a.65.65 0 0 0-.65-.65H7.1a.65.65 0 0 0-.65.65v2.4H4.5zm3.95 9h-.9v-1.95h.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        xl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M8.5 6v2h2V6zM8.5 10v2h2v-2zM13.5 6v2h2V6zM13.5 10v2h2v-2z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 0h10v14h-2.35v-4.5a.95.95 0 0 0-.95-.95h-3.4a.95.95 0 0 0-.95.95V19H7zm4.05 14h1.9v-3.75h-1.9z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        yl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M11.5 8v2.667H14V8zM11.5 13.667v2.666H14v-2.666zM18 8v2.667h2.5V8zM18 13.667v2.666h2.5v-2.666z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M7 6.5A2.5 2.5 0 0 1 9.5 4h13A2.5 2.5 0 0 1 25 6.5v19a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 7 25.5zm2.5 0h13v19h-2.8v-6.4a1.2 1.2 0 0 0-1.2-1.2h-5a1.2 1.2 0 0 0-1.2 1.2v6.4H9.5zm5 19h3v-5.4h-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        bl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(wl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(xl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(yl, {
              ...n,
              ref: r
            })]
          })
        }));
      bl.displayName = "Property", bl.category = "GTA Online", bl.variant = "Outline", bl.keywords = "Building, House, City, GTAO, Structure", bl.MD = wl, bl.LG = xl, bl.XL = yl;
      const jl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.205 4.3a.35.35 0 0 0-.32.205l-.554 1.22a.35.35 0 0 0 .095.414l.263.218a1.65 1.65 0 0 1 .517 1.765l-.751 2.377a.35.35 0 0 0 .334.455h1.096a.35.35 0 0 0 .332-.239L6.352 7.31a1.65 1.65 0 0 1 1.566-1.128h3.506a.35.35 0 0 0 .35-.35V4.65a.35.35 0 0 0-.35-.35zm-1.503-.333A1.65 1.65 0 0 1 4.205 3h7.22c.91 0 1.65.739 1.65 1.65v1.182a1.65 1.65 0 0 1-1.65 1.65h-1.239a3.06 3.06 0 0 1-.705 1.514c-.566.639-1.434 1.013-2.63.931l-.4 1.2a1.65 1.65 0 0 1-1.566 1.127H3.79a1.65 1.65 0 0 1-1.574-2.146l.751-2.378a.35.35 0 0 0-.11-.374l-.262-.219a1.65 1.65 0 0 1-.446-1.95zm4.578 4.67c.647-.023 1.013-.26 1.23-.504.167-.189.278-.42.345-.651h-.937a.35.35 0 0 0-.332.24z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.416 6.172A2 2 0 0 1 6.236 5h12.538a2 2 0 0 1 2 2v3.09a2 2 0 0 1-2 2H16.16c-.133.799-.463 1.692-1.124 2.437-.902 1.016-2.288 1.614-4.208 1.474l-.786 2.359a2 2 0 0 1-1.898 1.367H5.14a2 2 0 0 1-1.907-2.602L4.8 12.157l-1.08-.9a2 2 0 0 1-.54-2.365zm7.072 7.85c1.08-.026 1.692-.416 2.052-.822.286-.322.47-.717.576-1.11H12.13zM18.774 7H6.236L5 9.72l1.08.9a2 2 0 0 1 .628 2.14l-1.57 4.967h3.006l2.09-6.268a2 2 0 0 1 1.897-1.368h6.643z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m8.33 8.5-1.773 3.9 1.752 1.46a2.25 2.25 0 0 1 .705 2.406L6.73 23.5h4.393l2.988-8.961A2.25 2.25 0 0 1 16.244 13h9.53V8.5zM6.12 7.319A2.25 2.25 0 0 1 8.168 6h17.856a2.25 2.25 0 0 1 2.25 2.25v5a2.25 2.25 0 0 1-2.25 2.25h-4.077c-.166 1.104-.611 2.355-1.531 3.392-1.225 1.38-3.122 2.194-5.78 1.977l-1.198 3.593A2.25 2.25 0 0 1 11.303 26H6.39a2.25 2.25 0 0 1-2.146-2.927l2.337-7.4-1.77-1.475a2.25 2.25 0 0 1-.608-2.66zm9.337 11.087c1.625.004 2.546-.562 3.089-1.173.446-.503.717-1.127.858-1.733h-2.979z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(jl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ml, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Rl, {
              ...n,
              ref: r
            })]
          })
        }));
      Cl.displayName = "Weapon", Cl.category = "GTA Online", Cl.variant = "Outline", Cl.keywords = "Gun, Pistol, GTAO, Fire, Shoot", Cl.MD = jl, Cl.LG = Ml, Cl.XL = Rl;
      const Ll = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m4.483 5.317-.136.488h7.307l-.136-.488-.007-.014a2.227 2.227 0 0 0-.373-.56 1.78 1.78 0 0 0-1.366-.593H6.229a1.78 1.78 0 0 0-1.367.593 2.2 2.2 0 0 0-.38.574m7.042.016v.003zm1.219-.45.016.05.377 1.352.207.767.017.046.066.184c.05.143.115.336.16.497.027.098.034.216.038.27v.005q.008.125.013.295c.006.226.01.517.011.828.003.624-.002 1.346-.009 1.833a91 91 0 0 0-.002 1.683.95.95 0 0 1-.95.957H11.3a.95.95 0 0 1-.95-.95v-1.05h-4.7v1.05a.95.95 0 0 1-.95.95H3.313a.95.95 0 0 1-.95-.957c.002-.411.005-1.15-.003-1.683-.007-.487-.012-1.209-.009-1.833.002-.311.005-.602.012-.828q.005-.17.012-.295v-.005c.004-.054.011-.173.038-.27a9 9 0 0 1 .226-.681l.017-.046.208-.772.376-1.348.016-.05.001-.002.001-.003.004-.008.009-.024.03-.072a3.527 3.527 0 0 1 .603-.91A3.08 3.08 0 0 1 6.23 2.85h3.543c1.108 0 1.862.511 2.324 1.014a3.5 3.5 0 0 1 .633.981l.01.024.003.008.001.003v.002zm-8.86 2.595v.003l-.006.013-.018.05-.06.168a8 8 0 0 0-.124.38l-.004.044q-.005.09-.01.25c-.006.211-.01.49-.011.798-.002.377 0 .791.002 1.166h8.694c.003-.375.004-.79.002-1.166a36 36 0 0 0-.01-.798 8 8 0 0 0-.014-.293 8 8 0 0 0-.185-.55l-.018-.049-.005-.012-.001-.003L12 7.478m.335 4.172h-.685v.7h.686zm-8.67 0v.7h.685v-.7zM4.35 8.8A.65.65 0 0 1 5 8.15h.1a.65.65 0 0 1 0 1.3H5a.65.65 0 0 1-.65-.65m6 0a.65.65 0 0 1 .65-.65h.1a.65.65 0 1 1 0 1.3H11a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8zM16.8 12.1a.9.9 0 1 0 0 1.8h.2a.9.9 0 0 0 0-1.8z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "m19.481 7.33-.022-.069v-.002l-.001-.002-.002-.004-.005-.013a2 2 0 0 0-.061-.146 5.503 5.503 0 0 0-.94-1.417A4.79 4.79 0 0 0 14.835 4.1h-5.67A4.79 4.79 0 0 0 5.55 5.677a5.5 5.5 0 0 0-.94 1.417l-.06.146-.006.013-.001.004-.001.002v.002l-.023.069-.601 2.155-.335 1.24-.029.08c-.027.073-.064.175-.105.292-.08.23-.182.534-.253.787a2 2 0 0 0-.055.35c-.009.105-.016.229-.02.363-.011.27-.017.612-.02.986-.004.75.004 1.655.015 2.43.013.875.008 2.242.003 2.978A1.4 1.4 0 0 0 4.52 20.4H6.6A1.4 1.4 0 0 0 8 19v-2.1h8V19a1.4 1.4 0 0 0 1.4 1.4h2.08a1.4 1.4 0 0 0 1.4-1.409c-.004-.736-.009-2.103.004-2.978.012-.775.02-1.68.015-2.43a33 33 0 0 0-.019-.986 8 8 0 0 0-.02-.363 2 2 0 0 0-.056-.35c-.07-.253-.173-.558-.253-.787l-.105-.292-.029-.08-.333-1.232zM5.971 8.827l.269-.966.014-.033a3.703 3.703 0 0 1 .622-.933c.462-.504 1.18-.995 2.29-.995h5.669c1.108 0 1.827.49 2.29.995a3.7 3.7 0 0 1 .636.966l.269.966zm-.69 2.495-.007.02-.029.08-.097.27c-.073.21-.154.452-.208.641l-.005.052a7 7 0 0 0-.016.282c-.01.242-.015.561-.017.928-.003.461-.002.987.003 1.505h14.19c.005-.518.007-1.044.004-1.505a31 31 0 0 0-.018-.928 7 7 0 0 0-.02-.334c-.054-.189-.135-.43-.209-.64l-.097-.272-.029-.079-.008-.02-.125-.452-.04-.144-.027-.099H5.474l-.164.607zm12.52 5.578h1.276c-.002.584 0 1.209.002 1.7H17.8zM4.92 18.6c.003-.491.004-1.116.002-1.7H6.2v1.7z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        El = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m8.091 9.937-.366 1.313h16.55l-.366-1.313-.02-.044a5.08 5.08 0 0 0-.852-1.28c-.634-.69-1.62-1.363-3.14-1.363h-7.794c-1.52 0-2.506.673-3.14 1.363a5 5 0 0 0-.852 1.28zM26.266 9.1l.002.006q.016.047.03.095l.83 2.974.457 1.695.04.108c.037.1.088.242.144.403.11.314.252.734.349 1.082.048.173.066.363.076.475.012.142.021.308.028.488.015.36.022.815.026 1.314.007 1-.004 2.214-.02 3.28-.016 1.05-.012 2.501-.007 3.466a2.253 2.253 0 0 1-2.252 2.265h-2.024a2.25 2.25 0 0 1-2.25-2.25v-2.25h-11.39v2.25a2.25 2.25 0 0 1-2.25 2.25H6.031a2.253 2.253 0 0 1-2.252-2.265c.005-.965.009-2.416-.007-3.466-.016-1.066-.027-2.28-.02-3.28.003-.5.011-.954.026-1.314.007-.18.016-.346.029-.488.01-.112.028-.302.076-.475.096-.349.238-.767.348-1.082a34 34 0 0 1 .184-.511l.46-1.705.827-2.964q.014-.048.03-.095v-.002h.001l.001-.004.003-.006.006-.017a3 3 0 0 1 .085-.202 7.579 7.579 0 0 1 1.294-1.952c.99-1.077 2.603-2.172 4.98-2.172h7.796c2.377 0 3.99 1.095 4.98 2.172a7.6 7.6 0 0 1 1.294 1.952 5 5 0 0 1 .085.202l.006.017zM7.04 13.75l-.266.947-.01.028a23 23 0 0 0-.174.481c-.1.289-.212.622-.286.881l-.007.066a9 9 0 0 0-.021.372c-.013.32-.02.743-.024 1.23-.004.608-.002 1.302.005 1.995h19.486c.007-.693.01-1.387.005-1.994-.003-.488-.01-.912-.024-1.231a9 9 0 0 0-.028-.438c-.074-.26-.185-.592-.286-.88-.052-.15-.1-.28-.134-.373l-.027-.075-.012-.034-.01-.028-.004-.009-.278-.938m.773 8.5h-1.523v2h1.525c-.003-.584-.005-1.303-.002-2m-19.436 0c.003.697 0 1.416-.002 2h1.525v-2zM7.75 17c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25m13.8 0c0-.69.56-1.25 1.25-1.25h.2a1.25 1.25 0 1 1 0 2.5h-.2c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _l = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ll, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Sl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(El, {
              ...n,
              ref: r
            })]
          })
        }));
      _l.displayName = "Car", _l.category = "GTA Online", _l.variant = "Outline", _l.keywords = "Vehicle, Automobile, GTAO, Transport", _l.MD = Ll, _l.LG = Sl, _l.XL = El;
      const Pl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Al = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13m-6-14.25a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Pl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Dl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Al, {
              ...n,
              ref: r
            })]
          })
        }));
      Il.displayName = "MinusCircleSolid", Il.category = "Uncategorized", Il.variant = "Solid", Il.keywords = "Minus, No, Less, n/a, Remove, Delete", Il.MD = Pl, Il.LG = Dl, Il.XL = Al;
      const Tl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            })
          })
        }))),
        Nl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
            })
          })
        }))),
        Ol = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M19 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            })
          })
        }))),
        kl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Tl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Nl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ol, {
              ...n,
              ref: r
            })]
          })
        }));
      kl.displayName = "AuxMenuSolid", kl.category = "Uncategorized", kl.variant = "Solid", kl.keywords = "Navigation, Side nav, Dots, Item, More", kl.MD = Tl, kl.LG = Nl, kl.XL = Ol;
      const Hl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.47-1.47a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.253-2.336a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-7.04-3.2a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Hl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Bl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(zl, {
              ...n,
              ref: r
            })]
          })
        }));
      Vl.displayName = "CheckCircleSolid", Vl.category = "Uncategorized", Vl.variant = "Solid", Vl.keywords = "Done, Ready, Yes, Available, Completed, Circle, Approve, Success", Vl.MD = Hl, Vl.LG = Bl, Vl.XL = zl;
      const Gl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m3.931 2.303.926.585a6 6 0 0 1 1.751-.726l.241-1.068a7 7 0 0 1 2.302 0l.241 1.068c.628.15 1.217.397 1.751.726l.926-.585c.628.45 1.178 1 1.627 1.628l-.584.926c.329.534.577 1.123.726 1.751l1.068.241a7 7 0 0 1 0 2.302l-1.068.241a6 6 0 0 1-.726 1.751l.585.926c-.45.628-1 1.178-1.628 1.627l-.926-.584a6 6 0 0 1-1.751.726l-.241 1.068a7 7 0 0 1-2.302 0l-.241-1.068a6 6 0 0 1-1.751-.726l-.926.585a7 7 0 0 1-1.628-1.628l.585-.926a6 6 0 0 1-.726-1.751l-1.068-.241a7 7 0 0 1 0-2.302l1.068-.241c.15-.628.397-1.217.726-1.751l-.585-.926a7 7 0 0 1 1.628-1.628M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m6.187 3.862 1.323.835a8.5 8.5 0 0 1 2.502-1.037l.344-1.526a10 10 0 0 1 3.288 0l.345 1.526a8.5 8.5 0 0 1 2.501 1.037l1.323-.835a10 10 0 0 1 2.325 2.325l-.835 1.323a8.5 8.5 0 0 1 1.037 2.502l1.526.344a10 10 0 0 1 0 3.288l-1.526.345a8.5 8.5 0 0 1-1.037 2.501l.835 1.323a10 10 0 0 1-2.325 2.325l-1.323-.835a8.5 8.5 0 0 1-2.501 1.037l-.345 1.526a10 10 0 0 1-3.288 0l-.344-1.526a8.5 8.5 0 0 1-2.502-1.037l-1.323.835a10 10 0 0 1-2.325-2.325l.835-1.323A8.5 8.5 0 0 1 3.66 13.99l-1.526-.345a10 10 0 0 1 0-3.288l1.526-.344A8.5 8.5 0 0 1 4.697 7.51l-.835-1.323a10 10 0 0 1 2.325-2.325M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ul = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m8.443 5.42 1.72 1.087a11 11 0 0 1 3.252-1.348l.448-1.984a13.1 13.1 0 0 1 4.274 0l.448 1.984c1.166.276 2.26.736 3.252 1.348l1.72-1.086a13.1 13.1 0 0 1 3.022 3.022l-1.086 1.72a11.1 11.1 0 0 1 1.349 3.252l1.983.448a13.1 13.1 0 0 1 0 4.274l-1.983.448a11.1 11.1 0 0 1-1.349 3.252l1.086 1.72a13.1 13.1 0 0 1-3.022 3.022l-1.72-1.086a11.1 11.1 0 0 1-3.252 1.349l-.448 1.983a13.1 13.1 0 0 1-4.274 0l-.448-1.983a11.1 11.1 0 0 1-3.252-1.349l-1.72 1.086a13.1 13.1 0 0 1-3.022-3.022l1.086-1.72a11 11 0 0 1-1.348-3.252l-1.984-.448a13.1 13.1 0 0 1 0-4.274l1.984-.448c.276-1.166.736-2.26 1.348-3.252L5.42 8.443a13.1 13.1 0 0 1 3.022-3.022M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Gl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Fl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ul, {
              ...n,
              ref: r
            })]
          })
        }));
      Xl.displayName = "GearSolid", Xl.category = "Uncategorized", Xl.variant = "Solid", Xl.keywords = "Settings, Preferences, Options, Custom, Customize", Xl.MD = Gl, Xl.LG = Fl, Xl.XL = Ul;
      const ql = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 9h6c.75 0 1.5.25 2.25 1s.75 1.75.75 2.5V14H2v-1.5c0-.687.05-1.8.75-2.5S4 9 5 9"
            })
          })
        }))),
        Kl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M7.5 14h9c1.125 0 2.25.35 3.375 1.4S21 17.85 21 18.9V21H3v-2.1c0-.962.076-2.521 1.125-3.5S6 14 7.5 14"
            })
          })
        }))),
        Wl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12M10 19h12c1.5 0 3 .45 4.5 1.8s1.5 3.15 1.5 4.5V28H4v-2.7c0-1.238.102-3.241 1.5-4.5S8 19 10 19"
            })
          })
        }))),
        $l = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ql, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Kl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Wl, {
              ...n,
              ref: r
            })]
          })
        }));
      $l.displayName = "PersonSolid", $l.category = "Uncategorized", $l.variant = "Solid", $l.keywords = "Profile, Avatar, Account, User, People, Human", $l.MD = ql, $l.LG = Kl, $l.XL = Wl;
      const Zl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.98 2.642a.504.504 0 0 0-.652-.613l-9.99 3.48a.502.502 0 0 0-.038.934l3.404 1.506 4.913-3.762c.094-.071.214.048.142.141l-3.71 4.8 2.123 3.623c.224.382.798.31.921-.115z"
            })
          })
        }))),
        Yl = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M20.467 4.247c.197-.757-.521-1.435-1.273-1.2L3.702 7.892c-.918.287-.942 1.568-.035 1.889l5.844 2.068 7.513-5.682c.14-.106.317.07.21.21l-5.621 7.325 2.932 6.224c.399.846 1.645.731 1.88-.173z"
            })
          })
        }))),
        Ql = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M27.465 5.25c.203-.76-.52-1.442-1.272-1.2L4.692 10.96c-.9.29-.93 1.546-.044 1.877l8.407 3.136 9.576-7.486c.186-.145.427.095.28.28l-7.401 9.372 4.356 8.806c.408.824 1.625.704 1.861-.184z"
            })
          })
        }))),
        Jl = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Zl, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Yl, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ql, {
              ...n,
              ref: r
            })]
          })
        }));
      Jl.displayName = "PaperPlaneSolid", Jl.category = "Uncategorized", Jl.variant = "Solid", Jl.keywords = "Send, Sent, Message, Delivery, Mail", Jl.MD = Zl, Jl.LG = Yl, Jl.XL = Ql;
      const ei = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M3 4a1 1 0 0 0-1 1c.113 0 .228.025.336.08L8 7.911l5.665-2.833A.75.75 0 0 1 14 5a1 1 0 0 0-1-1z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M14 6.589 8.343 9.417a.75.75 0 0 1-.686 0L2 6.59V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
            })]
          })
        }))),
        ti = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M3.25 7.031a1 1 0 0 1 .305.137L12 12.798l8.445-5.63q.146-.096.305-.137A2 2 0 0 0 19 6H5a2 2 0 0 0-1.75 1.031"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "m21 9.202-8.426 5.617a1 1 0 0 1-1.148 0L3 9.202V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
            })]
          })
        }))),
        ri = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M4.442 9.08q.162.062.308.17L16 17.688 27.25 9.25q.146-.108.308-.17A2.5 2.5 0 0 0 25.5 8h-19c-.853 0-1.607.428-2.058 1.08"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "m28 11.813-11.228 8.42a1.25 1.25 0 0 1-1.303.149 1.2 1.2 0 0 1-.241-.149L4 11.813V21.5A2.5 2.5 0 0 0 6.5 24h19a2.5 2.5 0 0 0 2.5-2.5z"
            })]
          })
        }))),
        ni = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ei, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ti, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ri, {
              ...n,
              ref: r
            })]
          })
        }));
      ni.displayName = "EnvelopeSolid", ni.category = "Uncategorized", ni.variant = "Solid", ni.keywords = "Mail, Email, Message, Inbox, Chat, Letter, Invitation", ni.MD = ei, ni.LG = ti, ni.XL = ri;
      const ai = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 10h4c.5 0 1 .2 1.5.8s.5 1.4.5 2V14H6v-1.2c0-.55.034-1.44.5-2S7.333 10 8 10M12.25 6.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M4 10h2v.059c-.38.101-.665.339-1 .741-.466.56-.5 1.45-.5 2V14H2v-1.2c0-.55.034-1.44.5-2S3.333 10 4 10M7.25 4.629a2.248 2.248 0 0 0 0 3.742 2.25 2.25 0 1 1 0-3.742"
            })
          })
        }))),
        oi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12 15h6c.75 0 1.5.3 2.25 1.2s.75 2.1.75 3V21H9v-1.8c0-.825.05-2.16.75-3S11 15 12 15M18.5 9.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M6 15h3v.041c-.436.073-.797.273-1.25.816C7 16.757 7 17.84 7 19.2V21H3v-1.8c0-.825.05-2.16.75-3S5 15 6 15M10.688 6.835a3.25 3.25 0 1 0 .228 5.706A5.48 5.48 0 0 1 10 9.5c0-.967.25-1.876.688-2.665"
            })
          })
        }))),
        li = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 20h8c1 0 2 .4 3 1.6s1 2.8 1 4V28H12v-2.4c0-1.1.068-2.881 1-4s1.667-1.6 3-1.6M25 12.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M14.5 8.169A5 5 0 0 0 12 12.5a5 5 0 0 0 2.5 4.331 5 5 0 1 1 0-8.662M8 20h4v.117c-.762.204-1.33.679-2 1.483-.932 1.119-1 2.9-1 4V28H4v-2.4c0-1.1.068-2.881 1-4S6.667 20 8 20"
            })
          })
        }))),
        ii = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ai, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(oi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(li, {
              ...n,
              ref: r
            })]
          })
        }));
      ii.displayName = "TwoPeopleSolid", ii.category = "Uncategorized", ii.variant = "Solid", ii.keywords = "People, Humans, Persons, Users, Friends, Multiple, Group", ii.MD = ai, ii.LG = oi, ii.XL = li;
      const si = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.227 2.148a1.146 1.146 0 0 1 1.546 0l4.996 4.497a1.15 1.15 0 1 1-1.538 1.71L9.15 5.582V13a1.15 1.15 0 0 1-2.3 0V5.582L3.77 8.355a1.15 1.15 0 0 1-1.54-1.71z"
            })
          })
        }))),
        di = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.02 2.9a1.5 1.5 0 0 0-2.04 0l-7 6.5a1.5 1.5 0 0 0 2.04 2.2l4.48-4.16V19a1.5 1.5 0 0 0 3 0V7.44l4.48 4.16a1.5 1.5 0 0 0 2.04-2.2z"
            })
          })
        }))),
        ci = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16 3.25c.5 0 .95.21 1.27.546l9.997 10.497a1.75 1.75 0 1 1-2.534 2.414L17.75 9.375V25a1.75 1.75 0 1 1-3.5 0V9.375l-6.983 7.332a1.75 1.75 0 1 1-2.534-2.414L14.73 3.796c.32-.336.77-.546 1.27-.546"
            })
          })
        }))),
        ui = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(si, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(di, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ci, {
              ...n,
              ref: r
            })]
          })
        }));
      ui.displayName = "ArrowUpSolid", ui.category = "Uncategorized", ui.variant = "Solid", ui.keywords = "Up, Navigation, Increase", ui.MD = si, ui.LG = di, ui.XL = ci;
      const fi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 1.85c.635 0 1.15.515 1.15 1.15v7.418l3.08-2.773a1.15 1.15 0 1 1 1.54 1.71l-5 4.5a1.15 1.15 0 0 1-1.54 0l-5-4.5a1.15 1.15 0 0 1 1.54-1.71l3.08 2.773V3c0-.635.515-1.15 1.15-1.15"
            })
          })
        }))),
        hi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.5 5a1.5 1.5 0 0 0-3 0v10.56L6.02 11.4a1.5 1.5 0 0 0-2.04 2.2l6.996 6.496a1.5 1.5 0 0 0 .297.217c.213.118.457.185.718.187h.019a1.5 1.5 0 0 0 1.014-.404L20.02 13.6a1.5 1.5 0 0 0-2.042-2.198L13.5 15.56z"
            })
          })
        }))),
        vi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M17.75 7a1.75 1.75 0 1 0-3.5 0v15.625l-6.983-7.332a1.75 1.75 0 1 0-2.534 2.414l9.997 10.497c.319.336.77.546 1.27.546a1.74 1.74 0 0 0 1.27-.546l9.997-10.497a1.75 1.75 0 1 0-2.534-2.414l-6.983 7.332z"
            })
          })
        }))),
        pi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(fi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(hi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(vi, {
              ...n,
              ref: r
            })]
          })
        }));
      pi.displayName = "ArrowDownSolid", pi.category = "Uncategorized", pi.variant = "Solid", pi.keywords = "Down, Navigation, Decrease", pi.MD = fi, pi.LG = hi, pi.XL = vi;
      const gi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8.355 3.77a1.15 1.15 0 0 0-1.71-1.54L2.148 7.229a1.146 1.146 0 0 0 0 1.545l4.497 4.996a1.15 1.15 0 1 0 1.71-1.538L5.582 9.15H13a1.15 1.15 0 0 0 0-2.3H5.582z"
            })
          })
        }))),
        mi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.6 6.02a1.5 1.5 0 0 0-2.2-2.04l-6.496 6.996A1.5 1.5 0 0 0 3.5 12a1.5 1.5 0 0 0 .404 1.024L10.4 20.02a1.5 1.5 0 0 0 2.198-2.042L8.44 13.5H19a1.5 1.5 0 0 0 0-3H8.44z"
            })
          })
        }))),
        wi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M16.707 7.267a1.75 1.75 0 1 0-2.414-2.534L3.796 14.73c-.336.32-.546.77-.546 1.27s.21.95.546 1.27l10.497 9.997a1.75 1.75 0 1 0 2.414-2.534L9.375 17.75H25a1.75 1.75 0 1 0 0-3.5H9.375z"
            })
          })
        }))),
        xi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(gi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(mi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(wi, {
              ...n,
              ref: r
            })]
          })
        }));
      xi.displayName = "ArrowLeftSolid", xi.category = "Uncategorized", xi.variant = "Solid", xi.keywords = "Left, Navigation, Back", xi.MD = gi, xi.LG = mi, xi.XL = wi;
      const yi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M9.355 2.23a1.15 1.15 0 1 0-1.71 1.54l2.773 3.08H3a1.15 1.15 0 1 0 0 2.3h7.418l-2.773 3.08a1.15 1.15 0 1 0 1.71 1.54l4.497-4.997a1.145 1.145 0 0 0 0-1.545z"
            })
          })
        }))),
        bi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.6 3.98a1.5 1.5 0 0 0-2.2 2.04l4.16 4.48H5a1.5 1.5 0 0 0 0 3h10.56l-4.16 4.48a1.5 1.5 0 0 0 2.2 2.04l6.496-6.996A1.5 1.5 0 0 0 20.5 12a1.5 1.5 0 0 0-.4-1.02M13.6 3.98l6.496 6.996z"
            })
          })
        }))),
        ji = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15.293 24.733a1.75 1.75 0 1 0 2.414 2.534l10.497-9.997c.336-.32.546-.77.546-1.27s-.21-.951-.546-1.27L17.707 4.733a1.75 1.75 0 1 0-2.414 2.534l7.332 6.983H7a1.75 1.75 0 1 0 0 3.5h15.625z"
            })
          })
        }))),
        Mi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(yi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(bi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ji, {
              ...n,
              ref: r
            })]
          })
        }));
      Mi.displayName = "ArrowRightSolid", Mi.category = "Uncategorized", Mi.variant = "Solid", Mi.keywords = "Right, Navigation, Forward", Mi.MD = yi, Mi.LG = bi, Mi.XL = ji;
      const Ri = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6.267 4.22c1.777-.182 2.767-1.126 2.767-2.543 0-1.356-.918-2.034-2.158-2.313l-2.17-.484c-.561-.121-.836-.4-.836-.872 0-.617.49-.92 1.598-.92 1.116 0 1.635.298 1.803.97.037.149.161.265.314.265h1.035c.173 0 .311-.146.284-.317-.196-1.227-1.097-2.1-2.637-2.323V2.3a.3.3 0 0 0-.3-.3h-.711a.3.3 0 0 0-.3.3v1.359c-1.968.17-2.767 1.32-2.767 2.519 0 1.162.727 1.985 1.98 2.264l2.301.509c.632.145.883.4.883.871 0 .666-.525.981-1.73.981-1.223 0-1.791-.327-1.925-1.069-.029-.158-.158-.287-.32-.287H4.81c-.17 0-.306.14-.286.308.166 1.408 1.184 2.295 2.899 2.465v1.48a.3.3 0 0 0 .3.3h.711a.3.3 0 0 0 .3-.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ci = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9.057 5.627c2.284-.242 3.557-1.502 3.557-3.39 0-1.81-1.18-2.713-2.775-3.085l-2.79-.645c-.721-.162-1.074-.533-1.074-1.163 0-.823.629-1.227 2.055-1.227 1.386 0 2.056.37 2.294 1.205.07.246.276.442.531.442h1.107c.287 0 .519-.243.468-.526-.284-1.582-1.435-2.702-3.373-2.994V4.5a.5.5 0 0 0-.5-.5h-.687a.5.5 0 0 0-.5.5v1.712C8.726 6.438 7.7 7.972 7.7 9.57c0 1.55.936 2.648 2.546 3.02l2.959.677c.812.194 1.134.533 1.134 1.163 0 .888-.674 1.308-2.223 1.308-1.521 0-2.255-.41-2.457-1.33-.058-.263-.27-.479-.54-.479H8.015c-.282 0-.511.234-.473.514.25 1.817 1.55 2.962 3.714 3.184V19.5a.5.5 0 0 0 .5.5h.687a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Li = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M29 16c0 7.18-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3s13 5.82 13 13m-11.847 7.033c2.792-.302 4.347-1.877 4.347-4.238 0-2.26-1.443-3.39-3.392-3.855l-3.41-.807c-.881-.202-1.312-.666-1.312-1.453 0-1.03.768-1.534 2.51-1.534 1.752 0 2.568.496 2.832 1.614.059.25.268.445.524.445h1.569c.287 0 .518-.243.475-.527-.307-2.046-1.723-3.5-4.143-3.873V6.5a.5.5 0 0 0-.5-.5H15.59a.5.5 0 0 0-.5.5v2.265c-3.092.282-4.347 2.2-4.347 4.198 0 1.937 1.143 3.31 3.11 3.774l3.617.847c.993.242 1.387.666 1.387 1.453 0 1.11-.825 1.635-2.718 1.635-1.921 0-2.815-.546-3.026-1.78-.045-.265-.26-.48-.53-.48h-1.57a.47.47 0 0 0-.479.513c.262 2.347 1.862 3.826 4.556 4.108V25.5a.5.5 0 0 0 .5.5h1.062a.5.5 0 0 0 .5-.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Si = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ri, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ci, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Li, {
              ...n,
              ref: r
            })]
          })
        }));
      Si.displayName = "CurrencySolid", Si.category = "Uncategorized", Si.variant = "Solid", Si.keywords = "Money, Cash, Finance, Refund, Donation, Coin, Gold, Dollar, Bank, Payment, Purchase, Value", Si.MD = Ri, Si.LG = Ci, Si.XL = Li;
      const Ei = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "m9.204 10.812.148-.19.72-.92c.176-.228.407-.352.696-.333.123.008.251.044.36.1.63.316 1.254.642 1.88.965.18.093.363.182.541.278.444.24.582.728.315 1.156q-.502.812-1.03 1.605c-.226.337-.556.53-.964.527a6.4 6.4 0 0 1-1.595-.206c-.996-.269-1.916-.707-2.783-1.26A13.2 13.2 0 0 1 5.041 10.5a12.7 12.7 0 0 1-1.899-2.545c-.42-.745-.764-1.524-.957-2.36-.086-.372-.115-.757-.166-1.137a1.4 1.4 0 0 1 .022-.58c.075-.28.221-.516.462-.679.54-.365 1.083-.727 1.633-1.078a.783.783 0 0 1 1.101.276c.196.346.37.703.55 1.056q.37.716.734 1.435a.79.79 0 0 1-.22 1.004q-.526.415-1.06.822c-.06.046-.068.08-.03.147.29.526.604 1.037.985 1.504a9.4 9.4 0 0 0 2.984 2.442c.005.002.01.001.024.004"
            })
          })
        }))),
        _i = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M13.805 16.217q.11-.137.223-.284l1.079-1.38c.266-.342.612-.528 1.046-.499.183.012.376.065.54.149.944.475 1.88.964 2.82 1.448.27.14.544.272.81.418.666.36.874 1.09.474 1.733a89 89 0 0 1-1.546 2.408c-.338.505-.834.796-1.446.79a9.6 9.6 0 0 1-2.393-.308c-1.494-.404-2.874-1.062-4.174-1.891a19.8 19.8 0 0 1-3.677-3.049 19 19 0 0 1-2.847-3.817c-.63-1.119-1.147-2.288-1.436-3.54-.13-.559-.173-1.136-.25-1.706-.039-.29-.046-.582.033-.87.113-.42.332-.774.693-1.018.81-.549 1.625-1.092 2.45-1.617a1.174 1.174 0 0 1 1.652.412c.293.52.554 1.056.825 1.585q.554 1.074 1.1 2.152a1.184 1.184 0 0 1-.33 1.506q-.787.624-1.589 1.233c-.09.07-.102.12-.046.22.437.79.907 1.556 1.479 2.257 1.244 1.523 2.725 2.756 4.475 3.662.007.004.014.003.035.006"
            })
          })
        }))),
        Pi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M18.407 21.623q.146-.183.297-.379l1.439-1.84c.354-.456.816-.703 1.394-.665.244.015.501.087.72.198 1.26.633 2.508 1.285 3.76 1.93.36.187.726.364 1.082.558.887.48 1.163 1.455.63 2.312a119 119 0 0 1-2.061 3.21c-.451.674-1.111 1.06-1.928 1.053-1.076-.013-2.148-.129-3.19-.411-1.992-.538-3.832-1.415-5.566-2.521a26.3 26.3 0 0 1-4.903-4.065 25.5 25.5 0 0 1-3.796-5.09c-.84-1.492-1.53-3.05-1.915-4.72-.171-.745-.23-1.514-.332-2.274-.052-.387-.062-.776.043-1.16.15-.56.443-1.033.924-1.358a143 143 0 0 1 3.268-2.156c.754-.481 1.76-.23 2.202.55.39.692.738 1.408 1.1 2.114.49.955.983 1.91 1.467 2.868.362.716.19 1.51-.44 2.009q-1.051.831-2.12 1.644c-.118.092-.136.16-.061.293.583 1.052 1.21 2.074 1.972 3.008 1.66 2.031 3.634 3.675 5.967 4.884.01.005.019.003.047.008"
            })
          })
        }))),
        Di = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ei, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(_i, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Pi, {
              ...n,
              ref: r
            })]
          })
        }));
      Di.displayName = "PhoneSolid", Di.category = "Uncategorized", Di.variant = "Solid", Di.keywords = "", Di.MD = Ei, Di.LG = _i, Di.XL = Pi;
      const Ai = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 3.5V14l2.5-2.5h8A1.5 1.5 0 0 0 14 10V3.5A1.5 1.5 0 0 0 12.5 2h-9A1.5 1.5 0 0 0 2 3.5"
            })
          })
        }))),
        Ii = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 5v16l3.75-3.75H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
            })
          })
        }))),
        Ti = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4 6.5V28l5-5h16.5a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 25.5 4h-19A2.5 2.5 0 0 0 4 6.5"
            })
          })
        }))),
        Ni = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ai, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ii, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Ti, {
              ...n,
              ref: r
            })]
          })
        }));
      Ni.displayName = "ChatBubbleSolid", Ni.category = "Uncategorized", Ni.variant = "Solid", Ni.keywords = "Message, Support, DM, Communication, Conversation", Ni.MD = Ai, Ni.LG = Ii, Ni.XL = Ti;
      const Oi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5z"
            })
          })
        }))),
        ki = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            })
          })
        }))),
        Hi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
            })
          })
        }))),
        Bi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Oi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ki, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Hi, {
              ...n,
              ref: r
            })]
          })
        }));
      Bi.displayName = "SquareSolid", Bi.category = "Uncategorized", Bi.variant = "Solid", Bi.keywords = "Checkbox, Shape, Empty, Selection, Unchecked, Unselected, Maximize", Bi.MD = Oi, Bi.LG = ki, Bi.XL = Hi;
      const zi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zm8.03 4.53a.75.75 0 0 0-1.06-1.06L7 8.94 5.53 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11.747 6.664a1 1 0 0 0-1.494-1.328l-4.586 5.159-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm13.96 8.8a1.25 1.25 0 0 0-1.92-1.6l-5.707 6.847L11.96 15.2a1.25 1.25 0 0 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fi = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(zi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Vi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(Gi, {
              ...n,
              ref: r
            })]
          })
        }));
      Fi.displayName = "CheckSquareSolid", Fi.category = "Uncategorized", Fi.variant = "Solid", Fi.keywords = "Checkbox, Selection, Checked, Completed, Check Mark, To do, Done, Approved, Selected", Fi.MD = zi, Fi.LG = Vi, Fi.XL = Gi;
      const Ui = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2zM6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M8 4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm2 10.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 1 0 0-2.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ki = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Ui, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Xi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(qi, {
              ...n,
              ref: r
            })]
          })
        }));
      Ki.displayName = "MinusSquareSolid", Ki.category = "Uncategorized", Ki.variant = "Solid", Ki.keywords = "Checkbox, Partial, Selection, Intermediate, Remove, Minus, Delete, Indeterminate", Ki.MD = Ui, Ki.LG = Xi, Ki.XL = qi;
      const Wi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M18.71 4.056c-.802.342-2.216.82-3.182.455-1.042-.394-2.421-1.697-3.076-2.356a.53.53 0 0 0-.751 0c-.655.66-2.035 1.962-3.077 2.356-.977.37-2.415-.125-3.212-.468-.3-.13-.657.033-.723.354-.419 2.059-1.54 8.661.483 12.271 2.203 3.933 6.127 4.932 6.804 5.078a.4.4 0 0 0 .198-.006c.697-.191 4.91-1.48 6.807-5.072 1.73-3.276.81-10.083.46-12.234-.054-.333-.42-.51-.73-.378M16.748 9.43a1 1 0 0 0-1.494-1.329l-4.586 5.16-1.92-2.16a1 1 0 0 0-1.494 1.33l2.666 3a1 1 0 0 0 1.495 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $i = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M24.904 5.94c-1.11.309-2.815.639-4.03.203-1.326-.474-3.048-1.958-4.011-2.856a1.086 1.086 0 0 0-1.472 0c-.963.898-2.685 2.382-4.01 2.856-1.253.449-3.085.085-4.233-.231-.574-.159-1.186.165-1.307.748-.598 2.871-1.89 10.76.792 15.287 2.826 4.77 7.711 6.22 9.11 6.547.254.06.511.052.762-.02 1.447-.41 6.675-2.158 9.116-6.527 2.294-4.105 1.154-12.218.623-15.22-.107-.607-.746-.953-1.34-.788m-2.921 6.435a1.25 1.25 0 1 0-1.92-1.6l-5.707 6.847-2.373-2.847a1.25 1.25 0 1 0-1.92 1.6l3.333 4a1.25 1.25 0 0 0 1.92 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M12.677 2.46c-.537.212-1.561.535-2.251.269-.694-.268-1.603-1.129-2.07-1.603a.43.43 0 0 0-.608 0c-.466.474-1.376 1.335-2.07 1.603-.697.268-1.735-.064-2.268-.275-.178-.07-.383.027-.421.215-.276 1.33-1.099 5.998.316 8.57 1.524 2.77 4.247 3.46 4.686 3.556q.061.013.12-.004c.454-.126 3.376-1.024 4.688-3.553 1.21-2.334.534-7.156.304-8.548-.032-.194-.242-.301-.426-.23M11.53 6.339a.75.75 0 0 0-1.06-1.061L7 8.747l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yi = (0, m.forwardRef)((({
          size: e = "LG",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["LG" === e && (0, a.jsx)(Wi, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)($i, {
              ...n,
              ref: r
            }), "MD" === e && (0, a.jsx)(Zi, {
              ...n,
              ref: r
            })]
          })
        }));
      Yi.displayName = "CheckShieldSolid", Yi.category = "Uncategorized", Yi.variant = "Solid", Yi.keywords = "Protection, Security, Verification, Safety, Defense, Secure", Yi.LG = Wi, Yi.XL = $i, Yi.MD = Zi;
      const Qi = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-2.5-1.6a.35.35 0 0 1 .35.35v.9h.9a.35.35 0 1 1 0 .7h-.9v.9a.35.35 0 1 1-.7 0v-.9h-.9a.35.35 0 1 1 0-.7h.9v-.9a.35.35 0 0 1 .35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ji = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-2.65a.65.65 0 0 1 .65.65v1.35H19a.65.65 0 1 1 0 1.3h-1.35V19a.65.65 0 1 1-1.3 0v-1.35H15a.65.65 0 1 1 0-1.3h1.35V15a.65.65 0 0 1 .65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        es = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5-3.25a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H20.5a.75.75 0 0 1 0-1.5h1.75V20.5a.75.75 0 0 1 .75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ts = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(Qi, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(Ji, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(es, {
              ...n,
              ref: r
            })]
          })
        }));
      ts.displayName = "PersonPlusSolid", ts.category = "Uncategorized", ts.variant = "Solid", ts.keywords = "User, Add, Contact, Friend, Follow, People, Person, Profile", ts.MD = Qi, ts.LG = Ji, ts.XL = es;
      const rs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M14 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-4.1 0a.35.35 0 0 1 .35-.35h2.5a.35.35 0 1 1 0 .7h-2.5a.35.35 0 0 1-.35-.35",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ns = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M21 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-6.65 0a.65.65 0 0 1 .65-.65h4a.65.65 0 1 1 0 1.3h-4a.65.65 0 0 1-.65-.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        as = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M28 23a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-8.25 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        os = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(rs, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ns, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(as, {
              ...n,
              ref: r
            })]
          })
        }));
      os.displayName = "PersonMinusSolid", os.category = "Uncategorized", os.variant = "Solid", os.keywords = "Person, Profile, Remove, User, Delete, People, Unfriend, Friend, Unfollow", os.MD = rs, os.LG = ns, os.XL = as;
      const ls = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M7 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M8.337 10H4.5c-.833 0-1.292.24-1.875.8S2 12.25 2 12.8V14h7.05A3.5 3.5 0 0 1 8 11.5c0-.537.12-1.045.337-1.5"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M11.75 8.45a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6m-1.7 2.8c0-.269.062-.523.173-.749l2.276 2.276a1.7 1.7 0 0 1-2.449-1.527m3.227.749L11 9.723a1.7 1.7 0 0 1 2.275 2.275",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        is = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14.5 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.144 15H6.75c-1.25 0-1.938.36-2.812 1.2-.875.84-.938 2.175-.938 3V21h10.6a5.24 5.24 0 0 1-1.85-4c0-.708.14-1.384.394-2"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M17 13.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2.25 3.75c0-.347.079-.676.22-.97l3 3a2.25 2.25 0 0 1-3.22-2.03m4.28.97-3-3a2.25 2.25 0 0 1 3 3",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ss = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, a.jsx)("path", {
              fill: e,
              d: "M14 7.5a5 5 0 1 0 0 10 5 5 0 0 0 0-10M18.846 28a6.49 6.49 0 0 1-2.346-5c0-1.082.264-2.102.732-3H9c-1.667 0-2.585.481-3.75 1.6S4 24.5 4 25.6V28z"
            }), (0, a.jsx)("path", {
              fill: e,
              d: "M23 18.05a4.95 4.95 0 1 0 0 9.9 4.95 4.95 0 0 0 0-9.9M19.95 23c0-.496.118-.964.328-1.378l4.1 4.1A3.05 3.05 0 0 1 19.95 23m5.772 1.378-4.1-4.1a3.05 3.05 0 0 1 4.1 4.1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ds = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ls, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(is, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ss, {
              ...n,
              ref: r
            })]
          })
        }));
      ds.displayName = "PersonBlockSolid", ds.category = "Uncategorized", ds.variant = "Solid", ds.keywords = "User, Blocked, Contact, Unfriend, Restricted", ds.MD = ls, ds.LG = is, ds.XL = ss;
      const cs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M2 10.5v-5A1.5 1.5 0 0 1 3.5 4h9A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5m7.1-3.9c0-.22.18-.4.4-.4H12a.4.4 0 0 1 0 .8H9.5a.4.4 0 0 1-.4-.4m.4 1.1a.4.4 0 0 0 0 .8H12a.4.4 0 0 0 0-.8zm-.4 1.9c0-.22.18-.4.4-.4h1a.4.4 0 0 1 0 .8h-1a.4.4 0 0 1-.4-.4M7 6.96c0 .53-.448.96-1 .96s-1-.43-1-.96S5.448 6 6 6s1 .43 1 .96M7 8.4H5c-.333 0-.517.096-.75.32S4 9.3 4 9.52V10h4v-.48c0-.24 0-.56-.25-.8S7.25 8.4 7 8.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        us = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M3 16V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m5-4.12c.828 0 1.5-.645 1.5-1.44S8.828 9 8 9s-1.5.645-1.5 1.44.672 1.44 1.5 1.44m-1.5.72h3c.375 0 .75.12 1.125.48s.375.84.375 1.2V15H5v-.72c0-.33.025-.864.375-1.2S6 12.6 6.5 12.6m6.3-3.95a.65.65 0 0 0 0 1.3h5.5a.65.65 0 1 0 0-1.3zm-.65 3.15a.65.65 0 0 1 .65-.65h5.5a.65.65 0 1 1 0 1.3h-5.5a.65.65 0 0 1-.65-.65m.65 1.85a.65.65 0 0 0 0 1.3h3.3a.65.65 0 1 0 0-1.3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4 22.5v-13A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5v13a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5m7-6.66c1.105 0 2-.86 2-1.92S12.105 12 11 12s-2 .86-2 1.92.895 1.92 2 1.92m-2 .96h4c.5 0 1 .16 1.5.64s.5 1.12.5 1.6V20H7v-.96c0-.44.034-1.152.5-1.6s.833-.64 1.5-.64m8.5-4.7a.9.9 0 1 0 0 1.8h7a.9.9 0 1 0 0-1.8zm-.9 3.9a.9.9 0 0 1 .9-.9h7a.9.9 0 1 1 0 1.8h-7a.9.9 0 0 1-.9-.9m.9 2.1a.9.9 0 1 0 0 1.8h4a.9.9 0 1 0 0-1.8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hs = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(cs, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(us, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(fs, {
              ...n,
              ref: r
            })]
          })
        }));
      hs.displayName = "IdentificationSolid", hs.category = "Uncategorized", hs.variant = "Solid", hs.keywords = "ID, Card, Access, Information, Security, Privacy, Proof, Personal, Verification", hs.MD = cs, hs.LG = us, hs.XL = fs;
      const vs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M8 7.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 8 7.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ps = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M12 11.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M16 15.75c.69 0 1.25.56 1.25 1.25v4a1.25 1.25 0 1 1-2.5 0v-4c0-.69.56-1.25 1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ms = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(vs, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(ps, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(gs, {
              ...n,
              ref: r
            })]
          })
        }));
      ms.displayName = "PadlockSolid", ms.category = "Uncategorized", ms.variant = "Solid", ms.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch", ms.MD = vs, ms.LG = ps, ms.XL = gs;
      const ws = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M4.269 4.013q.01-.119.03-.256a4.1 4.1 0 0 1 .569-1.588C5.592 1.029 6.835.75 7.994.75c1.229 0 2.384.422 3.095 1.372.423.563.576 1.187.631 1.64q.017.135.023.253A2 2 0 0 1 13.5 6v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V6a2 2 0 0 1 1.769-1.987m1.865-1.04c.309-.486.883-.723 1.86-.723.908 0 1.546.306 1.895.771.21.281.306.622.342.922l.007.057H5.78l.003-.025c.046-.31.147-.68.351-1.002M7.25 9A.75.75 0 0 1 8 8.25h.1a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m3.25-.75a.75.75 0 0 0 0 1.5h.1a.75.75 0 0 0 0-1.5zM4.75 9a.75.75 0 0 1 .75-.75h.1a.75.75 0 0 1 0 1.5h-.1A.75.75 0 0 1 4.75 9",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xs = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M6.035 7.158q.017-.169.045-.36c.103-.703.343-1.656.91-2.55C8.129 2.459 10.089 2 11.99 2c1.995 0 3.833.684 4.959 2.186.668.892.915 1.884 1.004 2.614q.022.194.034.366A3 3 0 0 1 20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8c0-1.32.852-2.44 2.035-2.842M8.68 5.321C9.263 4.402 10.331 4 11.99 4c1.566 0 2.717.53 3.358 1.385.377.502.547 1.099.614 1.615h-7.89c.085-.52.261-1.134.607-1.679M11 14a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4.5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ys = (0, m.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, o) => (0, a.jsx)(Ie, {
          label: r,
          children: (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: o,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, a.jsx)("path", {
              fill: e,
              d: "M7.759 10.398c.012-.284.04-.647.101-1.06.143-.97.475-2.282 1.254-3.51 1.55-2.44 4.228-3.078 6.872-3.078 2.76 0 5.283.946 6.822 3 .915 1.221 1.255 2.582 1.377 3.588.05.41.065.773.065 1.064A4 4 0 0 1 26.5 14v10a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4V14a4 4 0 0 1 2.259-3.602m3.465-3.229c.859-1.352 2.422-1.919 4.762-1.919 2.225 0 3.887.752 4.822 2 .561.75.804 1.639.895 2.39q.022.19.034.36H10.295q.015-.142.039-.297c.112-.765.363-1.704.89-2.534M14.75 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5H16c-.69 0-1.25-.56-1.25-1.25m-3.25-1.25a1.25 1.25 0 1 0 0 2.5h.1a1.25 1.25 0 1 0 0-2.5zM19.25 19c0-.69.56-1.25 1.25-1.25h.1a1.25 1.25 0 1 1 0 2.5h-.1c-.69 0-1.25-.56-1.25-1.25",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bs = (0, m.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = h(t, {
            className: Be({
              size: e
            })
          });
          return (0, a.jsxs)(a.Fragment, {
            children: ["MD" === e && (0, a.jsx)(ws, {
              ...n,
              ref: r
            }), "LG" === e && (0, a.jsx)(xs, {
              ...n,
              ref: r
            }), "XL" === e && (0, a.jsx)(ys, {
              ...n,
              ref: r
            })]
          })
        }));
      bs.displayName = "PadlockPasswordSolid", bs.category = "Uncategorized", bs.variant = "Solid", bs.keywords = "Lock, Password, Safe, Protection, Secure, Security, Latch, Access, Code", bs.MD = ws, bs.LG = xs, bs.XL = ys;
      const js = new Set(["id"]),
        Ms = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        Rs = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        Cs = /^(data-.*)$/;

      function Ls(e, t = {}) {
        let {
          labelable: r,
          isLink: n,
          propNames: a
        } = t, o = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (js.has(t) || r && Ms.has(t) || n && Rs.has(t) || (null == a ? void 0 : a.has(t)) || Cs.test(t)) && (o[t] = e[t]);
        return o
      }
      const Ss = "undefined" != typeof document ? m.useLayoutEffect : () => {};

      function Es(e) {
        const t = (0, m.useRef)(null);
        return Ss((() => {
          t.current = e
        }), [e]), (0, m.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      const _s = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        Ps = e => e && "window" in e && e.window === e ? e : _s(e).defaultView || window;

      function Ds(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const As = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        Is = m.createContext(As),
        Ts = m.createContext(!1);
      let Ns = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Os = new WeakMap;
      const ks = "function" == typeof m.useId ? function(e) {
        let t = m.useId(),
          [r] = (0, m.useState)("function" == typeof m.useSyncExternalStore ? m.useSyncExternalStore(zs, Hs, Bs) : (0, m.useContext)(Ts));
        return e || `${r?"react-aria":`react-aria${As.prefix}`}-${t}`
      } : function(e) {
        let t = (0, m.useContext)(Is);
        t !== As || Ns || console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
        let r = function(e = !1) {
            let t = (0, m.useContext)(Is),
              r = (0, m.useRef)(null);
            if (null === r.current && !e) {
              var n, a;
              let e = null === (a = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a || null === (n = a.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = Os.get(e);
                null == r ? Os.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, Os.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function Hs() {
        return !1
      }

      function Bs() {
        return !0
      }

      function zs(e) {
        return () => {}
      }
      let Vs = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        Gs = new Map;

      function Fs(e) {
        let [t, r] = (0, m.useState)(e), n = (0, m.useRef)(null), a = ks(t), o = (0, m.useCallback)((e => {
          n.current = e
        }), []);
        return Vs && Gs.set(a, o), Ss((() => {
          let e = a;
          return () => {
            Gs.delete(e)
          }
        }), [a]), (0, m.useEffect)((() => {
          let e = n.current;
          e && (n.current = null, r(e))
        })), a
      }

      function Us(e, t) {
        if (e === t) return e;
        let r = Gs.get(e);
        if (r) return r(t), t;
        let n = Gs.get(t);
        return n ? (n(e), e) : t
      }

      function Xs(e = []) {
        let t = Fs(),
          [r, n] = function(e) {
            let [t, r] = (0, m.useState)(e), n = (0, m.useRef)(null), a = Es((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? a() : r(e.value)
            }));
            Ss((() => {
              n.current && a()
            }));
            let o = Es((e => {
              n.current = e(t), a()
            }));
            return [t, o]
          }(t),
          a = (0, m.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return Ss(a, [t, a, ...e]), r
      }

      function qs(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              a = n[e];
            "function" == typeof r && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Ds(r, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof a ? "id" === e && r && a ? t.id = Us(r, a) : t[e] = void 0 !== a ? a : r : t[e] = s(r, a)
          }
        }
        return t
      }

      function Ks(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": a
        } = e;
        if (r = Fs(r), a && n) {
          let e = new Set([r, ...a.trim().split(/\s+/)]);
          a = [...e].join(" ")
        } else a && (a = a.trim().split(/\s+/).join(" "));
        return n || a || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": a
        }
      }

      function Ws(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: a
        } = e, {
          labelProps: o,
          fieldProps: l
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": a,
            labelElementType: o = "label"
          } = e;
          t = Fs(t);
          let l = Fs(),
            i = {};
          return r ? (n = n ? `${l} ${n}` : l, i = {
            id: l,
            htmlFor: "label" === o ? t : void 0
          }) : n || a || console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"), {
            labelProps: i,
            fieldProps: Ks({
              id: t,
              "aria-label": a,
              "aria-labelledby": n
            })
          }
        }(e), i = Xs([Boolean(t), Boolean(r), n, a]), s = Xs([Boolean(t), Boolean(r), n, a]);
        return l = qs(l, {
          "aria-describedby": [i, s, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: o,
          fieldProps: l,
          descriptionProps: {
            id: i
          },
          errorMessageProps: {
            id: s
          }
        }
      }
      let $s = new Map,
        Zs = new Set;

      function Ys() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = $s.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), $s.delete(r.target)), 0 === $s.size)) {
            for (let e of Zs) e();
            Zs.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = $s.get(r.target);
          n || (n = new Set, $s.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function Qs(e) {
        requestAnimationFrame((() => {
          0 === $s.size ? e() : Zs.add(e)
        }))
      }

      function Js(e) {
        if (function() {
            if (null == ed) {
              ed = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return ed = !0, !0
                  }
                })
              } catch (e) {}
            }
            return ed
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
      "undefined" != typeof document && ("loading" !== document.readyState ? Ys() : document.addEventListener("DOMContentLoaded", Ys));
      let ed = null;

      function td(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function rd(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function nd() {
        return rd(/^Mac/i)
      }

      function ad() {
        return rd(/^iPad/i) || nd() && navigator.maxTouchPoints > 1
      }

      function od() {
        return rd(/^iPhone/i) || ad()
      }

      function ld() {
        return td(/Android/i)
      }

      function id(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (ld() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let sd = null,
        dd = new Set,
        cd = new Map,
        ud = !1,
        fd = !1;

      function hd(e, t) {
        for (let r of dd) r(e, t)
      }

      function vd(e) {
        ud = !0,
          function(e) {
            return !(e.metaKey || !nd() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (sd = "keyboard", hd("keyboard", e))
      }

      function pd(e) {
        sd = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (ud = !0, hd("pointer", e))
      }

      function gd(e) {
        id(e) && (ud = !0, sd = "virtual")
      }

      function md(e) {
        e.target !== window && e.target !== document && (ud || fd || (sd = "virtual", hd("virtual", e)), ud = !1, fd = !1)
      }

      function wd() {
        ud = !1, fd = !0
      }

      function xd(e) {
        if ("undefined" == typeof window || cd.get(Ps(e))) return;
        const t = Ps(e),
          r = _s(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          ud = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", vd, !0), r.addEventListener("keyup", vd, !0), r.addEventListener("click", gd, !0), t.addEventListener("focus", md, !0), t.addEventListener("blur", wd, !1), "undefined" != typeof PointerEvent ? (r.addEventListener("pointerdown", pd, !0), r.addEventListener("pointermove", pd, !0), r.addEventListener("pointerup", pd, !0)) : (r.addEventListener("mousedown", pd, !0), r.addEventListener("mousemove", pd, !0), r.addEventListener("mouseup", pd, !0)), t.addEventListener("beforeunload", (() => {
          yd(e)
        }), {
          once: !0
        }), cd.set(t, {
          focus: n
        })
      }
      const yd = (e, t) => {
        const r = Ps(e),
          n = _s(e);
        t && n.removeEventListener("DOMContentLoaded", t), cd.has(r) && (r.HTMLElement.prototype.focus = cd.get(r).focus, n.removeEventListener("keydown", vd, !0), n.removeEventListener("keyup", vd, !0), n.removeEventListener("click", gd, !0), r.removeEventListener("focus", md, !0), r.removeEventListener("blur", wd, !1), "undefined" != typeof PointerEvent ? (n.removeEventListener("pointerdown", pd, !0), n.removeEventListener("pointermove", pd, !0), n.removeEventListener("pointerup", pd, !0)) : (n.removeEventListener("mousedown", pd, !0), n.removeEventListener("mousemove", pd, !0), n.removeEventListener("mouseup", pd, !0)), cd.delete(r))
      };

      function bd(e, t) {
        Ss((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && function(e) {
        const t = _s(e);
        let r;
        "loading" !== t.readyState ? xd(e) : (r = () => {
          xd(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      class jd {
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

      function Md(e) {
        let {
          isDisabled: t,
          onFocus: r,
          onBlur: n,
          onFocusChange: a
        } = e;
        const o = (0, m.useCallback)((e => {
            if (e.target === e.currentTarget) return n && n(e), a && a(!1), !0
          }), [n, a]),
          l = function(e) {
            let t = (0, m.useRef)({
              isFocused: !1,
              observer: null
            });
            Ss((() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }), []);
            let r = Es((t => {
              null == e || e(t)
            }));
            return (0, m.useCallback)((e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let n = e.target,
                  a = e => {
                    t.current.isFocused = !1, n.disabled && r(new jd("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                n.addEventListener("focusout", a, {
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
          }(o),
          i = (0, m.useCallback)((e => {
            const t = _s(e.target);
            e.target === e.currentTarget && t.activeElement === e.target && (r && r(e), a && a(!0), l(e))
          }), [a, r, l]);
        return {
          focusProps: {
            onFocus: !t && (r || a || n) ? i : void 0,
            onBlur: t || !n && !a ? void 0 : o
          }
        }
      }

      function Rd(e) {
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
      let Cd = m.createContext(null);

      function Ld(e, t) {
        let {
          focusProps: r
        } = Md(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: Rd(e.onKeyDown),
              onKeyUp: Rd(e.onKeyUp)
            }
          }
        }(e), a = qs(r, n), o = function(e) {
          let t = (0, m.useContext)(Cd) || {};
          bd(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), l = e.isDisabled ? {} : o, i = (0, m.useRef)(e.autoFocus);
        return (0, m.useEffect)((() => {
          i.current && t.current && function(e) {
            const t = _s(e);
            if ("virtual" === sd) {
              let r = t.activeElement;
              Qs((() => {
                t.activeElement === r && e.isConnected && Js(e)
              }))
            } else Js(e)
          }(t.current), i.current = !1
        }), [t]), {
          focusableProps: qs({
            ...a,
            tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
          }, l)
        }
      }

      function Sd(e) {
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
      const Ed = {
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
        _d = {
          ...Ed,
          customError: !0,
          valid: !1
        },
        Pd = {
          isInvalid: !1,
          validationDetails: Ed,
          validationErrors: []
        },
        Dd = (0, m.createContext)({}),
        Ad = "__formValidationState" + Date.now();

      function Id(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function Td(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: _d
        } : null
      }

      function Nd(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function Od(e, t) {
        let {
          inputElementType: r = "input",
          isDisabled: n = !1,
          isRequired: a = !1,
          isReadOnly: o = !1,
          type: l = "text",
          validationBehavior: i = "aria"
        } = e, [s, d] = function(e, t, r) {
          let [n, a] = (0, m.useState)(e || t), o = (0, m.useRef)(void 0 !== e), l = void 0 !== e;
          (0, m.useEffect)((() => {
            let e = o.current;
            e !== l && console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}.`), o.current = l
          }), [l]);
          let i = l ? e : n,
            s = (0, m.useCallback)(((e, ...t) => {
              let n = (e, ...t) => {
                r && (Object.is(i, e) || r(e, ...t)), l || (i = e)
              };
              "function" == typeof e ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), a(((r, ...a) => {
                let o = e(l ? i : r, ...a);
                return n(o, ...t), l ? r : o
              }))) : (l || a(e), n(e, ...t))
            }), [l, i, r]);
          return [i, s]
        }(e.value, e.defaultValue || "", e.onChange), {
          focusableProps: c
        } = Ld(e, t), u = function(e) {
          if (e[Ad]) {
            let {
              realtimeValidation: t,
              displayValidation: r,
              updateValidation: n,
              resetValidation: a,
              commitValidation: o
            } = e[Ad];
            return {
              realtimeValidation: t,
              displayValidation: r,
              updateValidation: n,
              resetValidation: a,
              commitValidation: o
            }
          }
          return function(e) {
            let {
              isInvalid: t,
              validationState: r,
              name: n,
              value: a,
              builtinValidation: o,
              validate: l,
              validationBehavior: i = "aria"
            } = e;
            r && (t || (t = "invalid" === r));
            let s = void 0 !== t ? {
                isInvalid: t,
                validationErrors: [],
                validationDetails: _d
              } : null,
              d = (0, m.useMemo)((() => Td(function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return Id(r)
                }
                return []
              }(l, a))), [l, a]);
            (null == o ? void 0 : o.validationDetails.valid) && (o = null);
            let c = (0, m.useContext)(Dd),
              u = (0, m.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => Id(c[e]))) : Id(c[n]) : []), [c, n]),
              [f, h] = (0, m.useState)(c),
              [v, p] = (0, m.useState)(!1);
            c !== f && (h(c), p(!1));
            let g = (0, m.useMemo)((() => Td(v ? [] : u)), [v, u]),
              w = (0, m.useRef)(Pd),
              [x, y] = (0, m.useState)(Pd),
              b = (0, m.useRef)(Pd),
              [j, M] = (0, m.useState)(!1);
            return (0, m.useEffect)((() => {
              if (!j) return;
              M(!1);
              let e = d || o || w.current;
              Nd(e, b.current) || (b.current = e, y(e))
            })), {
              realtimeValidation: s || g || d || o || Pd,
              displayValidation: "native" === i ? s || g || x : s || g || d || o || x,
              updateValidation(e) {
                "aria" !== i || Nd(x, e) ? w.current = e : y(e)
              },
              resetValidation() {
                let e = Pd;
                Nd(e, b.current) || (b.current = e, y(e)), "native" === i && M(!1), p(!0)
              },
              commitValidation() {
                "native" === i && M(!0), p(!0)
              }
            }
          }(e)
        }({
          ...e,
          value: s
        }), {
          isInvalid: f,
          validationErrors: h,
          validationDetails: v
        } = u.displayValidation, {
          labelProps: p,
          fieldProps: g,
          descriptionProps: w,
          errorMessageProps: x
        } = Ws({
          ...e,
          isInvalid: f,
          errorMessage: e.errorMessage || h
        }), y = Ls(e, {
          labelable: !0
        });
        const b = {
          type: l,
          pattern: e.pattern
        };
        return function(e, t, r) {
            let n = (0, m.useRef)(t),
              a = Es((() => {
                r && r(n.current)
              }));
            (0, m.useEffect)((() => {
              var t;
              let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
              return null == r || r.addEventListener("reset", a), () => {
                null == r || r.removeEventListener("reset", a)
              }
            }), [e, a])
          }(t, s, d),
          function(e, t, r) {
            let {
              validationBehavior: n,
              focus: a
            } = e;
            Ss((() => {
              if ("native" === n && (null == r ? void 0 : r.current)) {
                let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
                  isInvalid: !(e = r.current).validity.valid,
                  validationDetails: Sd(e),
                  validationErrors: e.validationMessage ? [e.validationMessage] : []
                })
              }
              var e
            }));
            let o = Es((() => {
                t.resetValidation()
              })),
              l = Es((e => {
                var n;
                t.displayValidation.isInvalid || t.commitValidation();
                let o = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
                var l;
                !e.defaultPrevented && r && o && function(e) {
                  for (let t = 0; t < e.elements.length; t++) {
                    let r = e.elements[t];
                    if (!r.validity.valid) return r
                  }
                  return null
                }(o) === r.current && (a ? a() : null === (l = r.current) || void 0 === l || l.focus(), sd = "keyboard", hd("keyboard", null)), e.preventDefault()
              })),
              i = Es((() => {
                t.commitValidation()
              }));
            (0, m.useEffect)((() => {
              let e = null == r ? void 0 : r.current;
              if (!e) return;
              let t = e.form;
              return e.addEventListener("invalid", l), e.addEventListener("change", i), null == t || t.addEventListener("reset", o), () => {
                e.removeEventListener("invalid", l), e.removeEventListener("change", i), null == t || t.removeEventListener("reset", o)
              }
            }), [r, l, i, o, n])
          }(e, u, t), (0, m.useEffect)((() => {
            if (t.current instanceof Ps(t.current).HTMLTextAreaElement) {
              let e = t.current;
              Object.defineProperty(e, "defaultValue", {
                get: () => e.value,
                set: () => {},
                configurable: !0
              })
            }
          }), [t]), {
            labelProps: p,
            inputProps: qs(y, "input" === r && b, {
              disabled: n,
              readOnly: o,
              required: a && "native" === i,
              "aria-required": a && "aria" === i || void 0,
              "aria-invalid": f || void 0,
              "aria-errormessage": e["aria-errormessage"],
              "aria-activedescendant": e["aria-activedescendant"],
              "aria-autocomplete": e["aria-autocomplete"],
              "aria-haspopup": e["aria-haspopup"],
              value: s,
              onChange: e => d(e.target.value),
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
              ...c,
              ...g
            }),
            descriptionProps: w,
            errorMessageProps: x,
            isInvalid: f,
            validationErrors: h,
            validationDetails: v
          }
      }

      function kd(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => o || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, l] = (0, m.useState)((() => r ? n(e) : t));

        function i() {
          l(n(e))
        }
        return (0, m.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return i(), t?.addListener ? t?.addListener(i) : t?.addEventListener("change", i), () => {
            t?.removeListener ? t?.removeListener(i) : t?.removeEventListener("change", i)
          }
        }), [e]), a
      }

      function Hd(e) {
        const t = (0, m.useRef)({
            value: e,
            prev: void 0
          }),
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
        }), t.current.prev
      }

      function Bd(...e) {
        const t = (0, m.useRef)(null);
        return (0, m.useEffect)((() => {
          e.forEach((e => {
            e && ("function" == typeof e ? e(t.current || null) : e.current = t.current)
          }))
        }), [e]), t
      }
      const zd = () => kd("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function Vd(e) {
        const t = (0, m.useRef)(e);
        return (0, m.useEffect)((() => {
          t.current = e
        })), (0, m.useMemo)((() => (...e) => t.current?.(...e)), [])
      }
      const Gd = ({
        activity: e,
        leave: t,
        enabled: r = !0
      }) => {
        const n = (0, m.useRef)(),
          [a, o] = (0, m.useState)(!1),
          l = (0, m.useCallback)((() => o(!0)), []),
          i = (0, m.useCallback)(((t, r) => {
            let a = 0;
            return (...t) => {
              const r = Date.now();
              r - a >= 500 && (a = r, (() => {
                o(!1), window.clearTimeout(n.current), n.current = window.setTimeout(l, e)
              })(...t))
            }
          })(), []),
          s = (0, m.useCallback)((() => {
            window.clearTimeout(n.current), n.current = window.setTimeout(l, t)
          }), []),
          d = (0, m.useCallback)((() => {
            document.hidden || i()
          }), []);
        return (0, m.useEffect)((() => {
          const e = () => {
            window.removeEventListener("mousemove", i), window.removeEventListener("mousedown", i), window.removeEventListener("resize", i), window.removeEventListener("keydown", i), window.removeEventListener("touchstart", i), window.removeEventListener("wheel", i), document.removeEventListener("mouseleave", s), document.removeEventListener("visibilitychange", d), window.clearTimeout(n.current), o(!1)
          };
          return r ? (window.addEventListener("mousemove", i), window.addEventListener("mousedown", i), window.addEventListener("resize", i), window.addEventListener("keydown", i), window.addEventListener("touchstart", i), window.addEventListener("wheel", i), document.addEventListener("mouseleave", s), document.addEventListener("visibilitychange", d), i()) : e(), () => e()
        }), [r]), {
          isIdle: a
        }
      };

      function Fd({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, m.useState)(e),
            [n] = r,
            a = (0, m.useRef)(n),
            o = Vd(t);
          return (0, m.useEffect)((() => {
            a.current !== n && (o(n), a.current = n)
          }), [n, a, o]), r
        }({
          defaultProp: t,
          onChange: r
        }), o = void 0 !== e, l = o ? e : n, i = Vd(r), s = (0, m.useCallback)((t => {
          if (o) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && i(r)
          } else a(t)
        }), [o, e, a, i]);
        return [l, s]
      }

      function Ud(e, t, r, n) {
        const a = (0, m.useRef)(t);
        (0, m.useEffect)((() => {
          a.current = t
        }), [t]), (0, m.useEffect)((() => {
          const t = r?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
          };
          return t.addEventListener(e, o, n), () => {
            t.removeEventListener(e, o, n)
          }
        }), [e, r?.current, n])
      }

      function Xd(e = !0) {
        return !!e && kd("screen and (pointer: coarse) and (hover: none)")
      }

      function qd(e) {
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

      function Kd(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Wd(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Kd(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = qd(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function $d(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Zd = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        Yd = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Wd(Wd({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) Zd(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return $d(e.variantClassNames, (e => $d(e, (e => e.split(" ")[0]))))
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
      const Qd = (0, m.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: r,
        hint: n,
        children: o,
        description: l,
        testId: i,
        className: s,
        rows: d = 5,
        hideLabel: c,
        hideDescription: u,
        hideRequiredAsterisk: f,
        validate: v,
        errorMessage: p,
        ...g
      }, w) => {
        const x = Bd((0, m.useRef)(null), w),
          {
            inputProps: y,
            labelProps: b,
            descriptionProps: M,
            isInvalid: R,
            errorMessageProps: C,
            validationErrors: L
          } = Od({
            ...g,
            label: t,
            description: l,
            isRequired: r,
            inputElementType: "textarea",
            validate: e => v?.(e) ?? (!p || [p])
          }, x),
          S = h({
            ...y,
            className: s
          }, {
            className: Yd({
              isInvalid: R
            }),
            "aria-errormessage": C?.id
          }),
          E = e ? j : "textarea";
        return (0, a.jsxs)("div", {
          className: "foundry_vq8c3j0",
          children: [(t || n) && (0, a.jsxs)("div", {
            className: "foundry_vq8c3j1",
            children: [(0, a.jsx)(P, {
              enabled: !!c,
              children: (0, a.jsx)(J, {
                ...b,
                className: "foundry_vq8c3j2",
                asChild: !0,
                children: (0, a.jsxs)("label", {
                  children: [t, r && !f && (0, a.jsx)("span", {
                    className: "foundry_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, a.jsx)(le, {
              className: "foundry_vq8c3j3",
              children: n
            })]
          }), (0, a.jsx)(E, {
            rows: d,
            ref: w,
            "data-testid": i,
            ...S,
            children: o
          }), l && (0, a.jsx)(P, {
            enabled: L.length > 0 || !!u,
            children: (0, a.jsx)(J, {
              ...M,
              className: "foundry_vq8c3j4",
              children: l
            })
          }), L.length > 0 && (0, a.jsxs)(J, {
            ...C,
            appearance: "bold",
            className: "foundry_vq8c3j5",
            children: [(0, a.jsx)(Bo, {
              size: "MD",
              label: "",
              className: "foundry_vq8c3j6"
            }), L.join(". ")]
          })]
        })
      }));
      let Jd = "default",
        ec = "",
        tc = new WeakMap;

      function rc(e) {
        if (od()) {
          if ("default" === Jd) {
            const t = _s(e);
            ec = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
          }
          Jd = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (tc.set(e, e.style.userSelect), e.style.userSelect = "none")
      }

      function nc(e) {
        if (od()) {
          if ("disabled" !== Jd) return;
          Jd = "restoring", setTimeout((() => {
            Qs((() => {
              if ("restoring" === Jd) {
                const t = _s(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = ec || ""), ec = "", Jd = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && tc.has(e)) {
          let t = tc.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), tc.delete(e)
        }
      }
      const ac = m.createContext({
        register: () => {}
      });

      function oc(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function lc(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, oc(e, t, "set"), r), r
      }

      function ic(e, t, r = !0) {
        var n, a;
        let {
          metaKey: o,
          ctrlKey: l,
          altKey: i,
          shiftKey: s
        } = t;
        td(/Firefox/i) && (null === (a = window.event) || void 0 === a || null === (n = a.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (nd() ? o = !0 : l = !0);
        let d = td(/AppleWebKit/i) && !td(/Chrome/i) && nd() && !ad() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: o,
          ctrlKey: l,
          altKey: i,
          shiftKey: s
        }) : new MouseEvent("click", {
          metaKey: o,
          ctrlKey: l,
          altKey: i,
          shiftKey: s,
          bubbles: !0,
          cancelable: !0
        });
        ic.isOpening = r, Js(e), e.dispatchEvent(d), ic.isOpening = !1
      }
      ac.displayName = "PressResponderContext", ic.isOpening = !1;
      var sc = new WeakMap;
      class dc {
        continuePropagation() {
          lc(this, sc, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, oc(this, sc, "get"))
        }
        constructor(e, t, r) {
          var n, a, o;
          o = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(n = this, a = sc), a.set(n, o), lc(this, sc, !0), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey
        }
      }
      const cc = Symbol("linkClicked");

      function uc(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: a,
          onPressUp: o,
          isDisabled: l,
          isPressed: i,
          preventFocusOnPress: s,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: c,
          ref: u,
          ...f
        } = function(e) {
          let t = (0, m.useContext)(ac);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = qs(n, e), r()
          }
          return bd(t, e.ref), e
        }(e), [h, v] = (0, m.useState)(!1), p = (0, m.useRef)({
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
          removeAllGlobalListeners: w
        } = function() {
          let e = (0, m.useRef)(new Map),
            t = (0, m.useCallback)(((t, r, n, a) => {
              let o = (null == a ? void 0 : a.once) ? (...t) => {
                e.current.delete(n), n(...t)
              } : n;
              e.current.set(n, {
                type: r,
                eventTarget: t,
                fn: o,
                options: a
              }), t.addEventListener(r, n, a)
            }), []),
            r = (0, m.useCallback)(((t, r, n, a) => {
              var o;
              let l = (null === (o = e.current.get(n)) || void 0 === o ? void 0 : o.fn) || n;
              t.removeEventListener(r, l, a), e.current.delete(n)
            }), []),
            n = (0, m.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, m.useEffect)((() => n), [n]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n
          }
        }(), x = Es(((e, t) => {
          let a = p.current;
          if (l || a.didFirePressStart) return !1;
          let o = !0;
          if (a.isTriggeringEvent = !0, n) {
            let r = new dc("pressstart", t, e);
            n(r), o = r.shouldStopPropagation
          }
          return r && r(!0), a.isTriggeringEvent = !1, a.didFirePressStart = !0, v(!0), o
        })), y = Es(((e, n, o = !0) => {
          let i = p.current;
          if (!i.didFirePressStart) return !1;
          i.ignoreClickAfterPress = !0, i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let s = !0;
          if (a) {
            let t = new dc("pressend", n, e);
            a(t), s = t.shouldStopPropagation
          }
          if (r && r(!1), v(!1), t && o && !l) {
            let r = new dc("press", n, e);
            t(r), s && (s = r.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, s
        })), b = Es(((e, t) => {
          let r = p.current;
          if (l) return !1;
          if (o) {
            r.isTriggeringEvent = !0;
            let n = new dc("pressup", t, e);
            return o(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), j = Es((e => {
          let t = p.current;
          t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && y(pc(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, w(), c || nc(t.target))
        })), M = Es((e => {
          d && j(e)
        })), R = (0, m.useMemo)((() => {
          let e = p.current,
            t = {
              onKeyDown(t) {
                if (hc(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                  var n;
                  wc(t.target, t.key) && t.preventDefault();
                  let a = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, a = x(t, "keyboard");
                    let n = t.currentTarget,
                      o = t => {
                        hc(t, n) && !t.repeat && n.contains(t.target) && e.target && b(pc(e.target, t), "keyboard")
                      };
                    g(_s(t.currentTarget), "keyup", Ds(o, r), !0)
                  }
                  a && t.stopPropagation(), t.metaKey && nd() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !ic.isOpening) {
                  let r = !0;
                  if (l && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || id(t.nativeEvent))) {
                    l || s || Js(t.currentTarget);
                    let e = x(t, "virtual"),
                      n = b(t, "virtual"),
                      a = y(t, "virtual");
                    r = e && n && a
                  }
                  e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && hc(t, e.target)) {
                var n;
                wc(t.target, t.key) && t.preventDefault();
                let r = t.target;
                y(pc(e.target, t), "keyboard", e.target.contains(r)), w(), "Enter" !== t.key && fc(e.target) && e.target.contains(r) && !t[cc] && (t[cc] = !0, ic(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var a;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (a = e.target) || void 0 === a || a.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
              if (o = t.nativeEvent, !ld() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              mc(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
              let i = !0;
              e.isPressed || (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, l || s || Js(t.currentTarget), c || rc(e.target), i = x(t, e.pointerType), g(_s(t.currentTarget), "pointermove", r, !1), g(_s(t.currentTarget), "pointerup", n, !1), g(_s(t.currentTarget), "pointercancel", a, !1)), i && t.stopPropagation()
            }, t.onMouseDown = e => {
              e.currentTarget.contains(e.target) && 0 === e.button && (mc(e.currentTarget) && e.preventDefault(), e.stopPropagation())
            }, t.onPointerUp = t => {
              t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && gc(t, t.currentTarget) && b(t, e.pointerType || t.pointerType)
            };
            let r = t => {
                t.pointerId === e.activePointerId && (e.target && gc(t, e.target) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, x(pc(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, y(pc(e.target, t), e.pointerType, !1), M(t)))
              },
              n = t => {
                t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (gc(t, e.target) && null != e.pointerType ? y(pc(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && y(pc(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, w(), c || nc(e.target))
              },
              a = e => {
                j(e)
              };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && j(e)
            }
          } else {
            t.onMouseDown = t => {
              0 === t.button && t.currentTarget.contains(t.target) && (mc(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents ? t.stopPropagation() : (e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = id(t.nativeEvent) ? "virtual" : "mouse", l || s || Js(t.currentTarget), x(t, e.pointerType) && t.stopPropagation(), g(_s(t.currentTarget), "mouseup", r, !1)))
            }, t.onMouseEnter = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, r = x(t, e.pointerType)), r && t.stopPropagation()
            }, t.onMouseLeave = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = !0;
              e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, r = y(t, e.pointerType, !1), M(t)), r && t.stopPropagation()
            }, t.onMouseUp = t => {
              t.currentTarget.contains(t.target) && (e.ignoreEmulatedMouseEvents || 0 !== t.button || b(t, e.pointerType || "mouse"))
            };
            let r = t => {
              0 === t.button && (e.isPressed = !1, w(), e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : (e.target && gc(t, e.target) && null != e.pointerType ? y(pc(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && y(pc(e.target, t), e.pointerType, !1), e.isOverTarget = !1))
            };
            t.onTouchStart = t => {
              if (!t.currentTarget.contains(t.target)) return;
              let r = function(e) {
                const {
                  targetTouches: t
                } = e;
                return t.length > 0 ? t[0] : null
              }(t.nativeEvent);
              r && (e.activePointerId = r.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", l || s || Js(t.currentTarget), c || rc(e.target), x(t, e.pointerType) && t.stopPropagation(), g(Ps(t.currentTarget), "scroll", n, !0))
            }, t.onTouchMove = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = vc(t.nativeEvent, e.activePointerId),
                n = !0;
              r && gc(r, t.currentTarget) ? e.isOverTarget || null == e.pointerType || (e.isOverTarget = !0, n = x(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, n = y(t, e.pointerType, !1), M(t)), n && t.stopPropagation()
            }, t.onTouchEnd = t => {
              if (!t.currentTarget.contains(t.target)) return;
              if (!e.isPressed) return void t.stopPropagation();
              let r = vc(t.nativeEvent, e.activePointerId),
                n = !0;
              r && gc(r, t.currentTarget) && null != e.pointerType ? (b(t, e.pointerType), n = y(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (n = y(t, e.pointerType, !1)), n && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !c && nc(e.target), w()
            }, t.onTouchCancel = t => {
              t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && j(t))
            };
            let n = t => {
              e.isPressed && t.target.contains(e.target) && j({
                currentTarget: e.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
              })
            };
            t.onDragStart = e => {
              e.currentTarget.contains(e.target) && j(e)
            }
          }
          return t
        }), [g, l, s, w, c, j, M, y, x, b]);
        return (0, m.useEffect)((() => () => {
          var e;
          c || nc(null !== (e = p.current.target) && void 0 !== e ? e : void 0)
        }), [c]), {
          isPressed: i || h,
          pressProps: qs(f, R)
        }
      }

      function fc(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function hc(e, t) {
        const {
          key: r,
          code: n
        } = e, a = t, o = a.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || a instanceof Ps(a).HTMLInputElement && !yc(a, r) || a instanceof Ps(a).HTMLTextAreaElement || a.isContentEditable || ("link" === o || !o && fc(a)) && "Enter" !== r)
      }

      function vc(e, t) {
        const r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          const n = r[e];
          if (n.identifier === t) return n
        }
        return null
      }

      function pc(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey
        }
      }

      function gc(e, t) {
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
        return o = n, !((a = r).left > o.right || o.left > a.right || a.top > o.bottom || o.top > a.bottom);
        var a, o
      }

      function mc(e) {
        return !(e instanceof HTMLElement && e.hasAttribute("draggable"))
      }

      function wc(e, t) {
        return e instanceof HTMLInputElement ? !yc(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !fc(e)
      }
      const xc = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function yc(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : xc.has(e.type)
      }

      function bc(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: a,
          onPress: o,
          onPressStart: l,
          onPressEnd: i,
          onPressUp: s,
          onPressChange: d,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: u,
          onClick: f,
          href: h,
          target: v,
          rel: p,
          type: g = "button"
        } = e;
        r = "button" === n ? {
          type: g,
          disabled: a
        } : {
          role: "button",
          tabIndex: a ? void 0 : 0,
          href: "a" === n && a ? void 0 : h,
          target: "a" === n ? v : void 0,
          type: "input" === n ? g : void 0,
          disabled: "input" === n ? a : void 0,
          "aria-disabled": a && "input" !== n ? a : void 0,
          rel: "a" === n ? p : void 0
        };
        let {
          pressProps: m,
          isPressed: w
        } = uc({
          onPressStart: l,
          onPressEnd: i,
          onPressChange: d,
          onPress: o,
          onPressUp: s,
          isDisabled: a,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: x
        } = Ld(e, t);
        u && (x.tabIndex = a ? -1 : x.tabIndex);
        let y = qs(x, m, Ls(e, {
          labelable: !0
        }));
        return {
          isPressed: w,
          buttonProps: qs(r, y, {
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

      function jc(e) {
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

      function Mc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Rc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Mc(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = jc(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mc(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Cc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Lc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        Sc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Rc(Rc({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) Lc(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Cc(e.variantClassNames, (e => Cc(e, (e => e.split(" ")[0]))))
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
      const Ec = (0, m.forwardRef)((({
        testId: e,
        asChild: t,
        className: r,
        children: o,
        onClick: l,
        iconLeft: i,
        iconLeftLabel: s,
        iconRight: d,
        iconRightLabel: c,
        appearance: u,
        size: f = "MD",
        allCaps: v = !1,
        fullWidth: p = !1,
        ...w
      }, x) => {
        const y = Bd((0, m.useRef)(null), x),
          {
            events: b,
            others: M
          } = g(w, {
            onPress: !1
          }),
          {
            buttonProps: C,
            isPressed: L
          } = bc({
            ...M,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => M.onPress?.(e) ?? l?.(e)
          }, y),
          S = h({
            ...C,
            className: r
          }, {
            ...b,
            role: "button",
            "data-pressed": L,
            "data-testid": e,
            className: Sc({
              appearance: u,
              size: f,
              fullWidth: p,
              allCaps: v
            })
          }),
          E = i && n[i],
          _ = d && n[d],
          P = t ? j : "button";
        return (0, a.jsxs)(P, {
          ref: y,
          ...S,
          children: [(0, a.jsxs)("span", {
            className: "foundry_17pcofyi",
            children: [E && (0, a.jsx)(E, {
              label: s || "",
              size: f
            }), (0, a.jsx)(R, {
              children: o
            })]
          }), _ && (0, a.jsx)(_, {
            label: c || "",
            size: f
          })]
        })
      }));
      var _c = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Pc = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Dc = {
          dark: "foundry_nu8bkpar",
          darkHc: "foundry_nu8bkpat",
          light: "foundry_nu8bkpaq",
          lightHc: "foundry_nu8bkpas",
          tokens: "foundry_nu8bkp1"
        },
        Ac = "--foundry_nu8bkp0",
        Ic = "foundry_nu8bkp1";
      const Tc = (0, m.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Pc,
          platformScaleBreakpoints: _c,
          locale: "en-US"
        }),
        Nc = () => (0, m.useContext)(Tc),
        Oc = (e, t) => {
          const r = "more" === t ? Dc.lightHc : Dc.light,
            n = "more" === t ? Dc.darkHc : Dc.dark;
          return "dark" === e ? n : r
        };
      const kc = () => o ? null : document.body;
      (0, m.forwardRef)((({
        children: e,
        className: t,
        container: r = kc(),
        asChild: n,
        colorScheme: l,
        defaultColorScheme: i,
        contrastMode: s,
        defaultContrastMode: d,
        platformScaleBreakpoints: c,
        platformScaleRatios: u,
        defaultPlatformScale: f,
        platformScale: h,
        locale: v = "en-US"
      }, p) => {
        const g = Bd((0, m.useRef)(null), p),
          w = (0, m.useRef)(r),
          {
            ratio: x,
            scale: y
          } = function(e) {
            const t = (0, m.useMemo)((() => ({
                ...Pc,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              r = (0, m.useMemo)((() => ({
                ..._c,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [n, a] = (0, m.useState)(e.platformScale || e.defaultPlatformScale),
              l = (0, m.useRef)([]),
              i = () => {
                if (!o) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of l.current) t.removeEventListener("change", e);
                  l.current = []
                }
              };
            return (0, m.useEffect)((() => (e.platformScale ? a(e.platformScale) : (() => {
              if (!o) {
                i();
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && a(e)
                    };
                  t.addEventListener("change", n), t.matches && a(e), l.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), i)), [r, e.platformScale]), {
              scale: n,
              ratio: t[n]
            }
          }({
            platformScaleBreakpoints: c,
            platformScaleRatios: u,
            defaultPlatformScale: f,
            platformScale: h
          }),
          {
            appearanceClass: b,
            otherAppearanceClasses: M,
            providerColor: R,
            providerContrast: C
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const a = kd("(prefers-color-scheme: light)"),
              o = kd("(prefers-color-scheme: dark)"),
              l = kd("(prefers-contrast: more)"),
              i = "system" !== e && e || a && "light" || o && "dark" || t,
              s = r || l && "more" || n,
              d = (0, m.useMemo)((() => Oc(i, s)), [i, s]),
              c = (0, m.useMemo)((() => ((e, t) => {
                const r = Oc(e, t);
                return [Dc.light, Dc.dark, Dc.lightHc, Dc.darkHc].filter((e => e !== r))
              })(i, s)), [i, s]);
            return {
              appearanceClass: d,
              otherAppearanceClasses: c,
              providerColor: i,
              providerContrast: s
            }
          }({
            colorScheme: l,
            defaultColorScheme: i,
            contrastMode: s,
            defaultContrastMode: d
          });
        return ((e, t, r, n, a) => {
          const o = Hd(a),
            l = Hd(e.current);
          (0, m.useEffect)((() => {
            e.current?.classList.contains(Ic) || e.current?.classList.add(Ic), e.current?.classList.add(r), e.current?.classList.remove(...n), o && a && e.current?.classList.contains(o) ? e.current?.classList.replace(o, a) : o && !a && e.current?.classList.contains(o) ? e.current?.classList.remove(o) : a && e.current?.classList.add(a)
          }), [r, a]), (0, m.useEffect)((() => {
            e.current?.style.setProperty(Ac, t.toString())
          }), [t]), (0, m.useEffect)((() => {
            l?.classList.remove(Ic), l?.classList.remove(r), l?.style.removeProperty(Ac), a && l?.classList.remove(a)
          }), [l])
        })(n ? g : w, x, b, M, t), (0, a.jsx)(Tc.Provider, {
          value: {
            locale: v,
            defaultColorScheme: i,
            colorScheme: R,
            defaultContrastMode: d,
            contrastMode: C,
            defaultPlatformScale: f,
            platformScale: y,
            platformScaleRatios: u,
            platformScaleBreakpoints: c
          },
          children: n ? (0, a.jsx)(j, {
            ref: g,
            children: e
          }) : e
        })
      }));
      var Hc = eu(),
        Bc = e => Zc(e, Hc),
        zc = eu();
      Bc.write = e => Zc(e, zc);
      var Vc = eu();
      Bc.onStart = e => Zc(e, Vc);
      var Gc = eu();
      Bc.onFrame = e => Zc(e, Gc);
      var Fc = eu();
      Bc.onFinish = e => Zc(e, Fc);
      var Uc = [];
      Bc.setTimeout = (e, t) => {
        const r = Bc.now() + t,
          n = () => {
            const e = Uc.findIndex((e => e.cancel == n));
            ~e && Uc.splice(e, 1), Wc -= ~e ? 1 : 0
          },
          a = {
            time: r,
            handler: e,
            cancel: n
          };
        return Uc.splice(Xc(r), 0, a), Wc += 1, Yc(), a
      };
      var Xc = e => ~(~Uc.findIndex((t => t.time > e)) || ~Uc.length);
      Bc.cancel = e => {
        Vc.delete(e), Gc.delete(e), Fc.delete(e), Hc.delete(e), zc.delete(e)
      }, Bc.sync = e => {
        $c = !0, Bc.batchedUpdates(e), $c = !1
      }, Bc.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, Bc.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Vc.delete(r), t = null
        }, n
      };
      var qc = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      Bc.use = e => qc = e, Bc.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Bc.batchedUpdates = e => e(), Bc.catch = console.error, Bc.frameLoop = "always", Bc.advance = () => {
        "demand" !== Bc.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Jc()
      };
      var Kc = -1,
        Wc = 0,
        $c = !1;

      function Zc(e, t) {
        $c ? (t.delete(e), e(0)) : (t.add(e), Yc())
      }

      function Yc() {
        Kc < 0 && (Kc = 0, "demand" !== Bc.frameLoop && qc(Qc))
      }

      function Qc() {
        ~Kc && (qc(Qc), Bc.batchedUpdates(Jc))
      }

      function Jc() {
        const e = Kc;
        Kc = Bc.now();
        const t = Xc(Kc);
        t && (tu(Uc.splice(0, t), (e => e.handler())), Wc -= t), Wc ? (Vc.flush(), Hc.flush(e ? Math.min(64, Kc - e) : 16.667), Gc.flush(), zc.flush(), Fc.flush()) : Kc = -1
      }

      function eu() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Wc += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Wc -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Wc -= t.size, tu(t, (t => t(r) && e.add(t))), Wc += e.size, t = e)
          }
        }
      }

      function tu(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Bc.catch(e)
          }
        }))
      }
      var ru = Object.defineProperty,
        nu = {};

      function au() {}((e, t) => {
        for (var r in t) ru(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(nu, {
        assign: () => wu,
        colors: () => pu,
        createStringInterpolator: () => uu,
        skipAnimation: () => gu,
        to: () => fu,
        willAdvance: () => mu
      });
      var ou = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function lu(e, t) {
        if (ou.arr(e)) {
          if (!ou.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var iu = (e, t) => e.forEach(t);

      function su(e, t, r) {
        if (ou.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var du = e => ou.und(e) ? [] : ou.arr(e) ? e : [e];

      function cu(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), iu(r, t)
        }
      }
      var uu, fu, hu = (e, ...t) => cu(e, (e => e(...t))),
        vu = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        pu = null,
        gu = !1,
        mu = au,
        wu = e => {
          e.to && (fu = e.to), e.now && (Bc.now = e.now), void 0 !== e.colors && (pu = e.colors), null != e.skipAnimation && (gu = e.skipAnimation), e.createStringInterpolator && (uu = e.createStringInterpolator), e.requestAnimationFrame && Bc.use(e.requestAnimationFrame), e.batchedUpdates && (Bc.batchedUpdates = e.batchedUpdates), e.willAdvance && (mu = e.willAdvance), e.frameLoop && (Bc.frameLoop = e.frameLoop)
        },
        xu = new Set,
        yu = [],
        bu = [],
        ju = 0,
        Mu = {
          get idle() {
            return !xu.size && !yu.length
          },
          start(e) {
            ju > e.priority ? (xu.add(e), Bc.onStart(Ru)) : (Cu(e), Bc(Su))
          },
          advance: Su,
          sort(e) {
            if (ju) Bc.onFrame((() => Mu.sort(e)));
            else {
              const t = yu.indexOf(e);
              ~t && (yu.splice(t, 1), Lu(e))
            }
          },
          clear() {
            yu = [], xu.clear()
          }
        };

      function Ru() {
        xu.forEach(Cu), xu.clear(), Bc(Su)
      }

      function Cu(e) {
        yu.includes(e) || Lu(e)
      }

      function Lu(e) {
        yu.splice(function(t, r) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(yu), 0, e)
      }

      function Su(e) {
        const t = bu;
        for (let r = 0; r < yu.length; r++) {
          const n = yu[r];
          ju = n.priority, n.idle || (mu(n), n.advance(e), n.idle || t.push(n))
        }
        return ju = 0, (bu = yu).length = 0, (yu = t).length > 0
      }
      var Eu = "[-+]?\\d*\\.?\\d+",
        _u = Eu + "%";

      function Pu(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Du = new RegExp("rgb" + Pu(Eu, Eu, Eu)),
        Au = new RegExp("rgba" + Pu(Eu, Eu, Eu, Eu)),
        Iu = new RegExp("hsl" + Pu(Eu, _u, _u)),
        Tu = new RegExp("hsla" + Pu(Eu, _u, _u, Eu)),
        Nu = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Ou = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ku = /^#([0-9a-fA-F]{6})$/,
        Hu = /^#([0-9a-fA-F]{8})$/;

      function Bu(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function zu(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          a = 2 * r - n,
          o = Bu(a, n, e + 1 / 3),
          l = Bu(a, n, e),
          i = Bu(a, n, e - 1 / 3);
        return Math.round(255 * o) << 24 | Math.round(255 * l) << 16 | Math.round(255 * i) << 8
      }

      function Vu(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Gu(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Fu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Uu(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Xu(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ku.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : pu && void 0 !== pu[e] ? pu[e] : (t = Du.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | 255) >>> 0 : (t = Au.exec(e)) ? (Vu(t[1]) << 24 | Vu(t[2]) << 16 | Vu(t[3]) << 8 | Fu(t[4])) >>> 0 : (t = Nu.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Hu.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Ou.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Iu.exec(e)) ? (255 | zu(Gu(t[1]), Uu(t[2]), Uu(t[3]))) >>> 0 : (t = Tu.exec(e)) ? (zu(Gu(t[1]), Uu(t[2]), Uu(t[3])) | Fu(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var qu = (e, t, r) => {
          if (ou.fun(e)) return e;
          if (ou.arr(e)) return qu({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ou.str(e.output[0])) return uu(e);
          const n = e,
            a = n.output,
            o = n.range || [0, 1],
            l = n.extrapolateLeft || n.extrapolate || "extend",
            i = n.extrapolateRight || n.extrapolate || "extend",
            s = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, o);
            return function(e, t, r, n, a, o, l, i, s) {
              let d = s ? s(e) : e;
              if (d < t) {
                if ("identity" === l) return d;
                "clamp" === l && (d = t)
              }
              if (d > r) {
                if ("identity" === i) return d;
                "clamp" === i && (d = r)
              }
              return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d -= t : d = (d - t) / (r - t), d = o(d), n === -1 / 0 ? d = -d : a === 1 / 0 ? d += n : d = d * (a - n) + n, d)
            }(e, o[t], o[t + 1], a[t], a[t + 1], s, l, i, n.map)
          }
        },
        Ku = 1.70158,
        Wu = 1.525 * Ku,
        $u = Ku + 1,
        Zu = 2 * Math.PI / 3,
        Yu = 2 * Math.PI / 4.5,
        Qu = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        Ju = {
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
          easeInBack: e => $u * e * e * e - Ku * e * e,
          easeOutBack: e => 1 + $u * Math.pow(e - 1, 3) + Ku * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - Wu) / 2 : (Math.pow(2 * e - 2, 2) * ((Wu + 1) * (2 * e - 2) + Wu) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * Zu),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * Zu) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Yu) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Yu) / 2 + 1,
          easeInBounce: e => 1 - Qu(1 - e),
          easeOutBounce: Qu,
          easeInOutBounce: e => e < .5 ? (1 - Qu(1 - 2 * e)) / 2 : (1 + Qu(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return 0, 1, a = ("end" === t ? Math.floor(n) : Math.ceil(n)) / e, Math.min(Math.max(a, 0), 1);
            var a
          }
        },
        ef = Symbol.for("FluidValue.get"),
        tf = Symbol.for("FluidValue.observers"),
        rf = e => Boolean(e && e[ef]),
        nf = e => e && e[ef] ? e[ef]() : e,
        af = e => e[tf] || null;

      function of(e, t) {
        const r = e[tf];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var lf = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            sf(this, e)
          }
        },
        sf = (e, t) => ff(e, ef, t);

      function df(e, t) {
        if (e[ef]) {
          let r = e[tf];
          r || ff(e, tf, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function cf(e, t) {
        const r = e[tf];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[tf] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var uf, ff = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        hf = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        vf = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        pf = new RegExp(`(${hf.source})(%|[a-z]+)`, "i"),
        gf = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        mf = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        wf = e => {
          const [t, r] = xf(e);
          if (!t || vu()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && mf.test(r) ? wf(r) : r || e
        },
        xf = e => {
          const t = mf.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        yf = (e, t, r, n, a) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,
        bf = e => {
          uf || (uf = pu ? new RegExp(`(${Object.keys(pu).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => nf(e).replace(mf, wf).replace(vf, Xu).replace(uf, Xu))),
            r = t.map((e => e.match(hf).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => qu({
              ...e,
              output: t
            })));
          return e => {
            const r = !pf.test(t[0]) && t.find((e => pf.test(e)))?.replace(hf, "");
            let a = 0;
            return t[0].replace(hf, (() => `${n[a++](e)}${r||""}`)).replace(gf, yf)
          }
        },
        jf = "react-spring: ",
        Mf = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${jf}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Rf = Mf(console.warn),
        Cf = Mf(console.warn);

      function Lf(e) {
        return ou.str(e) && ("#" == e[0] || /\d/.test(e) || !vu() && mf.test(e) || e in (pu || {}))
      }
      var Sf = vu() ? m.useEffect : m.useLayoutEffect,
        Ef = () => {
          const e = (0, m.useRef)(!1);
          return Sf((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function _f() {
        const e = (0, m.useState)()[1],
          t = Ef();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Pf = e => (0, m.useEffect)(e, Df),
        Df = [];

      function Af(e) {
        const t = (0, m.useRef)();
        return (0, m.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var If = Symbol.for("Animated:node"),
        Tf = e => e && e[If],
        Nf = (e, t) => {
          return r = e, n = If, a = t, Object.defineProperty(r, n, {
            value: a,
            writable: !0,
            configurable: !0
          });
          var r, n, a
        },
        Of = e => e && e[If] && e[If].getPayload(),
        kf = class {
          constructor() {
            Nf(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Hf = class extends kf {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ou.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new Hf(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return ou.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ou.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        Bf = class extends Hf {
          constructor(e) {
            super(0), this._string = null, this._toString = qu({
              output: [e, e]
            })
          }
          static create(e) {
            return new Bf(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (ou.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = qu({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        zf = {
          dependencies: null
        },
        Vf = class extends kf {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return su(this.source, ((r, n) => {
              var a;
              (a = r) && a[If] === a ? t[n] = r.getValue(e) : rf(r) ? t[n] = nf(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && iu(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return su(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            zf.dependencies && rf(e) && zf.dependencies.add(e);
            const t = Of(e);
            t && iu(t, (e => this.add(e)))
          }
        },
        Gf = class extends Vf {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new Gf(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Ff)), !0)
          }
        };

      function Ff(e) {
        return (Lf(e) ? Bf : Hf).create(e)
      }

      function Uf(e) {
        const t = Tf(e);
        return t ? t.constructor : ou.arr(e) ? Gf : Lf(e) ? Bf : Hf
      }
      var Xf = (e, t) => {
          const r = !ou.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, m.forwardRef)(((n, a) => {
            const o = (0, m.useRef)(null),
              l = r && (0, m.useCallback)((e => {
                o.current = function(e, t) {
                  return e && (ou.fun(e) ? e(t) : e.current = t), t
                }(a, e)
              }), [a]),
              [i, s] = function(e, t) {
                const r = new Set;
                return zf.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Vf(e), zf.dependencies = null, [e, r]
              }(n, t),
              d = _f(),
              c = () => {
                const e = o.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, i.getValue(!0))) && d()
              },
              u = new qf(c, s),
              f = (0, m.useRef)();
            Sf((() => (f.current = u, iu(s, (e => df(e, u))), () => {
              f.current && (iu(f.current.deps, (e => cf(e, f.current))), Bc.cancel(f.current.update))
            }))), (0, m.useEffect)(c, []), Pf((() => () => {
              const e = f.current;
              iu(e.deps, (t => cf(t, e)))
            }));
            const h = t.getComponentProps(i.getValue());
            return m.createElement(e, {
              ...h,
              ref: l
            })
          }))
        },
        qf = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Bc.write(this.update)
          }
        },
        Kf = Symbol.for("AnimatedComponent"),
        Wf = e => ou.str(e) ? e : e && ou.str(e.displayName) ? e.displayName : ou.fun(e) && e.name || null;

      function $f(e, ...t) {
        return ou.fun(e) ? e(...t) : e
      }
      var Zf = (e, t) => !0 === e || !!(t && e && (ou.fun(e) ? e(t) : du(e).includes(t))),
        Yf = (e, t) => ou.obj(e) ? t && e[t] : e,
        Qf = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Jf = e => e,
        eh = (e, t = Jf) => {
          let r = th;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const a of r) {
            const r = t(e[a], a);
            ou.und(r) || (n[a] = r)
          }
          return n
        },
        th = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        rh = {
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

      function nh(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (su(e, ((e, n) => {
              rh[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return su(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function ah(e) {
        return e = nf(e), ou.arr(e) ? e.map(ah) : Lf(e) ? nu.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function oh(e) {
        for (const t in e) return !0;
        return !1
      }

      function lh(e) {
        return ou.fun(e) || ou.arr(e) && ou.obj(e[0])
      }

      function ih(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function sh(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }
      var dh = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: Ju.linear,
          clamp: !1
        },
        ch = class {
          constructor() {
            this.velocity = 0, Object.assign(this, dh)
          }
        };

      function uh(e, t) {
        if (ou.und(t.decay)) {
          const r = !ou.und(t.tension) || !ou.und(t.friction);
          !r && ou.und(t.frequency) && ou.und(t.damping) && ou.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var fh = [],
        hh = class {
          constructor() {
            this.changed = !1, this.values = fh, this.toValues = null, this.fromValues = fh, this.config = new ch, this.immediate = !1
          }
        };

      function vh(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: a,
        actions: o
      }) {
        return new Promise(((l, i) => {
          let s, d, c = Zf(r.cancel ?? n?.cancel, t);
          if (c) h();
          else {
            ou.und(r.pause) || (a.paused = Zf(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = a.paused || Zf(e, t)), s = $f(r.delay || 0, t), e ? (a.resumeQueue.add(f), o.pause()) : (o.resume(), f())
          }

          function u() {
            a.resumeQueue.add(f), a.timeouts.delete(d), d.cancel(), s = d.time - Bc.now()
          }

          function f() {
            s > 0 && !nu.skipAnimation ? (a.delayed = !0, d = Bc.setTimeout(h, s), a.pauseQueue.add(u), a.timeouts.add(d)) : h()
          }

          function h() {
            a.delayed && (a.delayed = !1), a.pauseQueue.delete(u), a.timeouts.delete(d), e <= (a.cancelId || 0) && (c = !0);
            try {
              o.start({
                ...r,
                callId: e,
                cancel: c
              }, l)
            } catch (e) {
              i(e)
            }
          }
        }))
      }
      var ph = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? wh(e.get()) : t.every((e => e.noop)) ? gh(e.get()) : mh(e.get(), t.every((e => e.finished))),
        gh = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        mh = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        wh = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function xh(e, t, r, n) {
        const {
          callId: a,
          parentId: o,
          onRest: l
        } = t, {
          asyncTo: i,
          promise: s
        } = r;
        return o || e !== i || t.reset ? r.promise = (async () => {
          r.asyncId = a, r.asyncTo = e;
          const d = eh(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, u;
          const f = new Promise(((e, t) => (c = e, u = t))),
            h = e => {
              const t = a <= (r.cancelId || 0) && wh(n) || a !== r.asyncId && mh(n, !1);
              if (t) throw e.result = t, u(e), e
            },
            v = (e, t) => {
              const o = new bh,
                l = new jh;
              return (async () => {
                if (nu.skipAnimation) throw yh(r), l.result = mh(n, !1), u(l), l;
                h(o);
                const i = ou.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = a, su(d, ((e, t) => {
                  ou.und(i[t]) && (i[t] = e)
                }));
                const s = await n.start(i);
                return h(o), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), s
              })()
            };
          let p;
          if (nu.skipAnimation) return yh(r), mh(n, !1);
          try {
            let t;
            t = ou.arr(e) ? (async e => {
              for (const t of e) await v(t)
            })(e) : Promise.resolve(e(v, n.stop.bind(n))), await Promise.all([t.then(c), f]), p = mh(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof bh) p = e.result;
            else {
              if (!(e instanceof jh)) throw e;
              p = e.result
            }
          } finally {
            a == r.asyncId && (r.asyncId = o, r.asyncTo = o ? i : void 0, r.promise = o ? s : void 0)
          }
          return ou.fun(l) && Bc.batchedUpdates((() => {
            l(p, n, n.item)
          })), p
        })() : s
      }

      function yh(e, t) {
        cu(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var bh = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        jh = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Mh = e => e instanceof Ch,
        Rh = 1,
        Ch = class extends lf {
          constructor() {
            super(...arguments), this.id = Rh++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Tf(this);
            return e && e.getValue()
          }
          to(...e) {
            return nu.to(this, e)
          }
          interpolate(...e) {
            return Rf(`${jf}The "interpolate" function is deprecated in v9 (use "to" instead)`), nu.to(this, e)
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
            of(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Mu.sort(this), of(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Lh = Symbol.for("SpringPhase"),
        Sh = e => (1 & e[Lh]) > 0,
        Eh = e => (2 & e[Lh]) > 0,
        _h = e => (4 & e[Lh]) > 0,
        Ph = (e, t) => t ? e[Lh] |= 3 : e[Lh] &= -3,
        Dh = (e, t) => t ? e[Lh] |= 4 : e[Lh] &= -5,
        Ah = class extends Ch {
          constructor(e, t) {
            if (super(), this.animation = new hh, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ou.und(e) || !ou.und(t)) {
              const r = ou.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ou.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Eh(this) || this._state.asyncTo) || _h(this)
          }
          get goal() {
            return nf(this.animation.to)
          }
          get velocity() {
            const e = Tf(this);
            return e instanceof Hf ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Sh(this)
          }
          get isAnimating() {
            return Eh(this)
          }
          get isPaused() {
            return _h(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const n = this.animation;
            let {
              toValues: a
            } = n;
            const {
              config: o
            } = n, l = Of(n.to);
            !l && rf(n.to) && (a = du(nf(n.to))), n.values.forEach(((i, s) => {
              if (i.done) return;
              const d = i.constructor == Bf ? 1 : l ? l[s].lastPosition : a[s];
              let c = n.immediate,
                u = d;
              if (!c) {
                if (u = i.lastPosition, o.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = n.fromValues[s],
                  a = null != i.v0 ? i.v0 : i.v0 = ou.arr(o.velocity) ? o.velocity[s] : o.velocity;
                let l;
                const f = o.precision || (r == d ? .005 : Math.min(1, .001 * Math.abs(d - r)));
                if (ou.und(o.duration))
                  if (o.decay) {
                    const e = !0 === o.decay ? .998 : o.decay,
                      n = Math.exp(-(1 - e) * t);
                    u = r + a / (1 - e) * (1 - n), c = Math.abs(i.lastPosition - u) <= f, l = a * n
                  } else {
                    l = null == i.lastVelocity ? a : i.lastVelocity;
                    const t = o.restVelocity || f / 10,
                      n = o.clamp ? 0 : o.bounce,
                      s = !ou.und(n),
                      h = r == d ? i.v0 > 0 : r < d;
                    let v, p = !1;
                    const g = 1,
                      m = Math.ceil(e / g);
                    for (let e = 0; e < m && (v = Math.abs(l) > t, v || (c = Math.abs(d - u) <= f, !c)); ++e) s && (p = u == d || u > d == h, p && (l = -l * n, u = d)), l += (1e-6 * -o.tension * (u - d) + .001 * -o.friction * l) / o.mass * g, u += l * g
                  }
                else {
                  let n = 1;
                  o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, i.durationProgress > 0 && (i.elapsedTime = o.duration * i.durationProgress, t = i.elapsedTime += e)), n = (o.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, i.durationProgress = n), u = r + o.easing(n) * (d - r), l = (u - i.lastPosition) / e, c = 1 == n
                }
                i.lastVelocity = l, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              l && !l[s].done && (c = !1), c ? i.done = !0 : t = !1, i.setValue(u, o.round) && (r = !0)
            }));
            const i = Tf(this),
              s = i.getValue();
            if (t) {
              const e = nf(n.to);
              s === e && !r || o.decay ? r && o.decay && this._onChange(s) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(s)
          }
          set(e) {
            return Bc.batchedUpdates((() => {
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
            if (Eh(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              Bc.batchedUpdates((() => {
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
            return ou.und(e) ? (r = this.queue || [], this.queue = []) : r = [ou.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => ph(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), yh(this._state, e && this._lastCallId), Bc.batchedUpdates((() => this._stop(t, e))), this
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
            r = ou.obj(r) ? r[t] : r, (null == r || lh(r)) && (r = void 0), n = ou.obj(n) ? n[t] : n, null == n && (n = void 0);
            const a = {
              to: r,
              from: n
            };
            return Sh(this) || (e.reverse && ([r, n] = [n, r]), n = nf(n), ou.und(n) ? Tf(this) || this._set(r) : this._set(n)), a
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, eh(e, ((e, t) => /^on/.test(t) ? Yf(e, r) : e))), Bh(this, e, "onProps"), zh(this, "onProps", e, this);
            const a = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const o = this._state;
            return vh(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: o,
              actions: {
                pause: () => {
                  _h(this) || (Dh(this, !0), hu(o.pauseQueue), zh(this, "onPause", mh(this, Ih(this, this.animation.to)), this))
                },
                resume: () => {
                  _h(this) && (Dh(this, !1), Eh(this) && this._resume(), hu(o.resumeQueue), zh(this, "onResume", mh(this, Ih(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, a)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Th(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(wh(this));
            const n = !ou.und(e.to),
              a = !ou.und(e.from);
            if (n || a) {
              if (!(t.callId > this._lastToId)) return r(wh(this));
              this._lastToId = t.callId
            }
            const {
              key: o,
              defaultProps: l,
              animation: i
            } = this, {
              to: s,
              from: d
            } = i;
            let {
              to: c = s,
              from: u = d
            } = e;
            !a || n || t.default && !ou.und(c) || (c = u), t.reverse && ([c, u] = [u, c]);
            const f = !lu(u, d);
            f && (i.from = u), u = nf(u);
            const h = !lu(c, s);
            h && this._focus(c);
            const v = lh(t.to),
              {
                config: p
              } = i,
              {
                decay: g,
                velocity: m
              } = p;
            (n || a) && (p.velocity = 0), t.config && !v && function(e, t, r) {
              r && (uh(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), uh(e, t), Object.assign(e, t);
              for (const t in dh) null == e[t] && (e[t] = dh[t]);
              let {
                frequency: n,
                damping: a
              } = e;
              const {
                mass: o
              } = e;
              ou.und(n) || (n < .01 && (n = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * o, e.friction = 4 * Math.PI * a * o / n)
            }(p, $f(t.config, o), t.config !== l.config ? $f(l.config, o) : void 0);
            let w = Tf(this);
            if (!w || ou.und(c)) return r(mh(this, !0));
            const x = ou.und(t.reset) ? a && !t.default : !ou.und(u) && Zf(t.reset, o),
              y = x ? u : this.get(),
              b = ah(c),
              j = ou.num(b) || ou.arr(b) || Lf(b),
              M = !v && (!j || Zf(l.immediate || t.immediate, o));
            if (h) {
              const e = Uf(c);
              if (e !== w.constructor) {
                if (!M) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
                w = this._set(b)
              }
            }
            const R = w.constructor;
            let C = rf(c),
              L = !1;
            if (!C) {
              const e = x || !Sh(this) && f;
              (h || e) && (L = lu(ah(y), b), C = !L), (lu(i.immediate, M) || M) && lu(p.decay, g) && lu(p.velocity, m) || (C = !0)
            }
            if (L && Eh(this) && (i.changed && !x ? C = !0 : C || this._stop(s)), !v && ((C || rf(s)) && (i.values = w.getPayload(), i.toValues = rf(c) ? null : R == Bf ? [1] : du(b)), i.immediate != M && (i.immediate = M, M || x || this._set(s)), C)) {
              const {
                onRest: e
              } = i;
              iu(Hh, (e => Bh(this, t, e)));
              const n = mh(this, Ih(this, s));
              hu(this._pendingCalls, n), this._pendingCalls.add(r), i.changed && Bc.batchedUpdates((() => {
                i.changed = !x, e?.(n, this), x ? $f(l.onRest, n) : i.onStart?.(n, this)
              }))
            }
            x && this._set(y), v ? r(xh(t.to, t, this._state, this)) : C ? this._start() : Eh(this) && !h ? this._pendingCalls.add(r) : r(gh(y))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (af(this) && this._detach(), t.to = e, af(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            rf(t) && (df(t, this), Mh(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            rf(e) && cf(e, this)
          }
          _set(e, t = !0) {
            const r = nf(e);
            if (!ou.und(r)) {
              const e = Tf(this);
              if (!e || !lu(r, e.getValue())) {
                const n = Uf(r);
                e && e.constructor == n ? e.setValue(r) : Nf(this, n.create(r)), e && Bc.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Tf(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, zh(this, "onStart", mh(this, Ih(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), $f(this.animation.onChange, e, this)), $f(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Tf(this).reset(nf(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Eh(this) || (Ph(this, !0), _h(this) || this._resume())
          }
          _resume() {
            nu.skipAnimation ? this.finish() : Mu.start(this)
          }
          _stop(e, t) {
            if (Eh(this)) {
              Ph(this, !1);
              const r = this.animation;
              iu(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), of(this, {
                type: "idle",
                parent: this
              });
              const n = t ? wh(this.get()) : mh(this.get(), Ih(this, e ?? r.to));
              hu(this._pendingCalls, n), r.changed && (r.changed = !1, zh(this, "onRest", n, this))
            }
          }
        };

      function Ih(e, t) {
        const r = ah(t);
        return lu(ah(e.get()), r)
      }

      function Th(e, t = e.loop, r = e.to) {
        const n = $f(t);
        if (n) {
          const a = !0 !== n && nh(n),
            o = (a || e).reverse,
            l = !a || a.reset;
          return Nh({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || lh(r) ? r : void 0,
            from: l ? e.from : void 0,
            reset: l,
            ...a
          })
        }
      }

      function Nh(e) {
        const {
          to: t,
          from: r
        } = e = nh(e), n = new Set;
        return ou.obj(t) && kh(t, n), ou.obj(r) && kh(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Oh(e) {
        const t = Nh(e);
        return ou.und(t.default) && (t.default = eh(t)), t
      }

      function kh(e, t) {
        su(e, ((e, r) => null != e && t.add(r)))
      }
      var Hh = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Bh(e, t, r) {
        e.animation[r] = t[r] !== Qf(t, r) ? Yf(t[r], e.key) : void 0
      }

      function zh(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var Vh = ["onStart", "onChange", "onRest"],
        Gh = 1,
        Fh = class {
          constructor(e, t) {
            this.id = Gh++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              ou.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Nh(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = du(e).map(Nh) : this.queue = [], this._flush ? this._flush(this, t) : (Zh(this, t), Uh(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              iu(du(t), (t => r[t].stop(!!e)))
            } else yh(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (ou.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              iu(du(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (ou.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              iu(du(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            su(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, a = this._changed.size > 0;
            (n && !this._started || a && !this._started) && (this._started = !0, cu(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const o = !n && this._started,
              l = a || o && r.size ? this.get() : null;
            a && t.size && cu(t, (([e, t]) => {
              t.value = l, e(t, this, this._item)
            })), o && (this._started = !1, cu(r, (([e, t]) => {
              t.value = l, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            Bc.onFrame(this._onFrame)
          }
        };

      function Uh(e, t) {
        return Promise.all(t.map((t => Xh(e, t)))).then((t => ph(e, t)))
      }
      async function Xh(e, t, r) {
        const {
          keys: n,
          to: a,
          from: o,
          loop: l,
          onRest: i,
          onResolve: s
        } = t, d = ou.obj(t.default) && t.default;
        l && (t.loop = !1), !1 === a && (t.to = null), !1 === o && (t.from = null);
        const c = ou.arr(a) || ou.fun(a) ? a : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : iu(Vh, (r => {
          const n = t[r];
          if (ou.fun(n)) {
            const a = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = a.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : a.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, d && (d[r] = t[r])
          }
        }));
        const u = e._state;
        t.pause === !u.paused ? (u.paused = t.pause, hu(t.pause ? u.pauseQueue : u.resumeQueue)) : u.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === Qf(t, "cancel");
        (c || h && u.asyncId) && f.push(vh(++e._lastAsyncId, {
          props: t,
          state: u,
          actions: {
            pause: au,
            resume: au,
            start(t, r) {
              h ? (yh(u, e._lastAsyncId), r(wh(e))) : (t.onRest = i, r(xh(c, t, u, e)))
            }
          }
        })), u.paused && await new Promise((e => {
          u.resumeQueue.add(e)
        }));
        const v = ph(e, await Promise.all(f));
        if (l && v.finished && (!r || !v.noop)) {
          const r = Th(t, l, a);
          if (r) return Zh(e, [r]), Xh(e, r, !0)
        }
        return s && Bc.batchedUpdates((() => s(v, e, e.item))), v
      }

      function qh(e, t) {
        const r = {
          ...e.springs
        };
        return t && iu(du(t), (e => {
          ou.und(e.keys) && (e = Nh(e)), ou.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), $h(r, e, (e => Wh(e)))
        })), Kh(e, r), r
      }

      function Kh(e, t) {
        su(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, df(t, e))
        }))
      }

      function Wh(e, t) {
        const r = new Ah;
        return r.key = e, t && df(r, t), r
      }

      function $h(e, t, r) {
        t.keys && iu(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Zh(e, t) {
        iu(t, (t => {
          $h(e.springs, t, (t => Wh(t, e)))
        }))
      }
      var Yh, Qh, Jh = ({
          children: e,
          ...t
        }) => {
          const r = (0, m.useContext)(ev),
            n = t.pause || !!r.pause,
            a = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, m.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, m.useRef)(), a = n.current;
            let o = a;
            return o ? Boolean(t && o.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, o.inputs)) || (o = {
              inputs: t,
              result: e()
            }) : o = r, (0, m.useEffect)((() => {
              n.current = o, a == r && (r.inputs = r.result = void 0)
            }), [o]), o.result
          }((() => ({
            pause: n,
            immediate: a
          })), [n, a]);
          const {
            Provider: o
          } = ev;
          return m.createElement(o, {
            value: t
          }, e)
        },
        ev = (Yh = Jh, Qh = {}, Object.assign(Yh, m.createContext(Qh)), Yh.Provider._context = Yh, Yh.Consumer._context = Yh, Yh);
      Jh.Provider = ev.Provider, Jh.Consumer = ev.Consumer;
      var tv = () => {
        const e = [],
          t = function(t) {
            Cf(`${jf}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return iu(e, ((e, a) => {
              if (ou.und(t)) n.push(e.start());
              else {
                const o = r(t, e, a);
                o && n.push(e.start(o))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return iu(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return iu(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          iu(e, ((e, r) => {
            const n = ou.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return iu(e, ((e, n) => {
            if (ou.und(t)) r.push(e.start());
            else {
              const a = this._getProps(t, e, n);
              a && r.push(e.start(a))
            }
          })), r
        }, t.stop = function() {
          return iu(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return iu(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return ou.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function rv(e, t) {
        const r = ou.fun(e),
          [
            [n], a
          ] = function(e, t, r) {
            const n = ou.fun(t) && t;
            n && !r && (r = []);
            const a = (0, m.useMemo)((() => n || 3 == arguments.length ? tv() : void 0), []),
              o = (0, m.useRef)(0),
              l = _f(),
              i = (0, m.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = qh(e, t);
                  return o.current > 0 && !i.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Uh(e, t) : new Promise((n => {
                    Kh(e, r), i.queue.push((() => {
                      n(Uh(e, t))
                    })), l()
                  }))
                }
              })), []),
              s = (0, m.useRef)([...i.ctrls]),
              d = [],
              c = Af(e) || 0;

            function u(e, r) {
              for (let a = e; a < r; a++) {
                const e = s.current[a] || (s.current[a] = new Fh(null, i.flush)),
                  r = n ? n(a, e) : t[a];
                r && (d[a] = Oh(r))
              }
            }(0, m.useMemo)((() => {
              iu(s.current.slice(e, c), (e => {
                ih(e, a), e.stop(!0)
              })), s.current.length = e, u(c, e)
            }), [e]), (0, m.useMemo)((() => {
              u(0, Math.min(c, e))
            }), r);
            const f = s.current.map(((e, t) => qh(e, d[t]))),
              h = (0, m.useContext)(Jh),
              v = Af(h),
              p = h !== v && oh(h);
            Sf((() => {
              o.current++, i.ctrls = s.current;
              const {
                queue: e
              } = i;
              e.length && (i.queue = [], iu(e, (e => e()))), iu(s.current, ((e, t) => {
                a?.add(e), p && e.start({
                  default: h
                });
                const r = d[t];
                r && (sh(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), Pf((() => () => {
              iu(i.ctrls, (e => e.stop(!0)))
            }));
            const g = f.map((e => ({
              ...e
            })));
            return a ? [g, a] : g
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, a] : n
      }
      var nv = () => tv(),
        av = () => (0, m.useState)(nv)[0];
      var ov = 1,
        lv = class extends Ch {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = qu(...t);
            const r = this._get(),
              n = Uf(r);
            Nf(this, n.create(r))
          }
          advance(e) {
            const t = this._get();
            lu(t, this.get()) || (Tf(this).setValue(t), this._onChange(t, this.idle)), !this.idle && sv(this._active) && dv(this)
          }
          _get() {
            const e = ou.arr(this.source) ? this.source.map(nf) : du(nf(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !sv(this._active) && (this.idle = !1, iu(Of(this), (e => {
              e.done = !1
            })), nu.skipAnimation ? (Bc.batchedUpdates((() => this.advance())), dv(this)) : Mu.start(this))
          }
          _attach() {
            let e = 1;
            iu(du(this.source), (t => {
              rf(t) && df(t, this), Mh(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            iu(du(this.source), (e => {
              rf(e) && cf(e, this)
            })), this._active.clear(), dv(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = du(this.source).reduce(((e, t) => Math.max(e, (Mh(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function iv(e) {
        return !1 !== e.idle
      }

      function sv(e) {
        return !e.size || Array.from(e).every(iv)
      }

      function dv(e) {
        e.idle || (e.idle = !0, iu(Of(e), (e => {
          e.done = !0
        })), of(e, {
          type: "idle",
          parent: e
        }))
      }
      nu.assign({
        createStringInterpolator: bf,
        to: (e, t) => new lv(e, t)
      }), Mu.advance;
      var cv = /^--/;

      function uv(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || cv.test(e) || hv.hasOwnProperty(e) && hv[e] ? ("" + t).trim() : t + "px"
      }
      var fv = {},
        hv = {
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
        vv = ["Webkit", "Ms", "Moz", "O"];
      hv = Object.keys(hv).reduce(((e, t) => (vv.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), hv);
      var pv = /^(matrix|translate|scale|rotate|skew)/,
        gv = /^(translate)/,
        mv = /^(rotate|skew)/,
        wv = (e, t) => ou.num(e) && 0 !== e ? e + t : e,
        xv = (e, t) => ou.arr(e) ? e.every((e => xv(e, t))) : ou.num(e) ? e === t : parseFloat(e) === t,
        yv = class extends Vf {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const a = [],
              o = [];
            (e || t || r) && (a.push([e || 0, t || 0, r || 0]), o.push((e => [`translate3d(${e.map((e=>wv(e,"px"))).join(",")})`, xv(e, 0)]))), su(n, ((e, t) => {
              if ("transform" === t) a.push([e || ""]), o.push((e => [e, "" === e]));
              else if (pv.test(t)) {
                if (delete n[t], ou.und(e)) return;
                const r = gv.test(t) ? "px" : mv.test(t) ? "deg" : "";
                a.push(du(e)), o.push("rotate3d" === t ? ([e, t, n, a]) => [`rotate3d(${e},${t},${n},${wv(a,r)})`, xv(a, 0)] : e => [`${t}(${e.map((e=>wv(e,r))).join(",")})`, xv(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), a.length && (n.transform = new bv(a, o)), super(n)
          }
        },
        bv = class extends lf {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return iu(this.inputs, ((r, n) => {
              const a = nf(r[0]),
                [o, l] = this.transforms[n](ou.arr(a) ? a : r.map(nf));
              e += " " + o, t = t && l
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && iu(this.inputs, (e => iu(e, (e => rf(e) && df(e, this)))))
          }
          observerRemoved(e) {
            0 == e && iu(this.inputs, (e => iu(e, (e => rf(e) && cf(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), of(this, e)
          }
        };
      nu.assign({
        batchedUpdates: S.unstable_batchedUpdates,
        createStringInterpolator: bf,
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
      var jv = ((e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: r = (e => new Vf(e)),
          getComponentProps: n = (e => e)
        } = {}) => {
          const a = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            o = e => {
              const t = Wf(e) || "Anonymous";
              return (e = ou.str(e) ? o[e] || (o[e] = Xf(e, a)) : e[Kf] || (e[Kf] = Xf(e, a))).displayName = `Animated(${t})`, e
            };
          return su(e, ((t, r) => {
            ou.arr(e) && (r = Wf(t)), o[r] = o(t)
          })), {
            animated: o
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: n,
                children: a,
                scrollTop: o,
                scrollLeft: l,
                viewBox: i,
                ...s
              } = t,
              d = Object.values(s),
              c = Object.keys(s).map((t => r || e.hasAttribute(t) ? t : fv[t] || (fv[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== a && (e.textContent = a);
            for (const t in n)
              if (n.hasOwnProperty(t)) {
                const r = uv(t, n[t]);
                cv.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } c.forEach(((t, r) => {
              e.setAttribute(t, d[r])
            })), void 0 !== o && (e.scrollTop = o), void 0 !== l && (e.scrollLeft = l), void 0 !== i && e.setAttribute("viewBox", i)
          },
          createAnimatedStyle: e => new yv(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        Mv = jv.animated;
      const Rv = (e, t, r) => {
          if (e > r) {
            const t = e - r;
            return r + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
          }
          if (e < t) {
            const r = e - t;
            return t + 2 * (r > 0 ? Math.sqrt(r) : -Math.sqrt(-r))
          }
          return e
        },
        Cv = e => {
          const t = (e, t, r) => {
            r(e, t) && (e = t)
          };
          return [...e.children].reduce(((e, r) => {
            const n = r.getBoundingClientRect();
            return e ? (t(e.top, n.top, ((e, t) => e < t)), t(e.bottom, n.bottom, ((e, t) => e > t)), t(e.left, n.left, ((e, t) => e < t)), t(e.right, n.right, ((e, t) => e > t)), t(e.height, e.bottom - e.top, (() => !0)), t(e.width, e.right - e.left, (() => !0)), t(e.x, e.left, (() => !0)), t(e.y, e.top, (() => !0)), n) : n
          }), null)
        },
        Lv = (e, t, r, n) => {
          let a = r[0],
            o = r[1];
          const {
            a: l
          } = new DOMMatrix(e.style.transform), i = n / 100, s = Cv(e), d = t.getBoundingClientRect(), c = s.width / l / 2 * i - d.width / 2, u = s.height / l / 2 * i - d.height / 2, f = -a > c, h = a > c, v = o > u, p = -o > u;
          return f && !h ? a = -c : h && !f && (a = c), v && !p ? o = u : p && !v && (o = -u), {
            xy: [a, o],
            horizontalOffset: c,
            verticalOffset: u
          }
        },
        Sv = {
          scrollFactor: 2e3,
          pinchFactor: 300,
          dragFactor: 1.25
        };

      function Ev(e, t) {
        return e.map((function(e, r) {
          return e + t[r]
        }))
      }

      function _v(e, t) {
        return e.map((function(e, r) {
          return e - t[r]
        }))
      }

      function Pv(e) {
        return Math.hypot.apply(Math, e)
      }

      function Dv(e, t) {
        void 0 === t && (t = e);
        var r = Pv(t),
          n = 0 === r ? 0 : 1 / r,
          a = t.map((function(e) {
            return n * e
          }));
        return {
          distance: Pv(e),
          direction: a
        }
      }

      function Av(e, t, r) {
        var n = Pv(t),
          a = 0 === n ? 0 : 1 / n,
          o = 0 === r ? 0 : 1 / r,
          l = o * n,
          i = t.map((function(e) {
            return o * e
          })),
          s = t.map((function(e) {
            return a * e
          }));
        return {
          velocities: i,
          velocity: l,
          distance: Pv(e),
          direction: s
        }
      }

      function Iv(e) {
        return Math.sign ? Math.sign(e) : Number(e > 0) - Number(e < 0) || +e
      }

      function Tv(e, t, r) {
        return 0 === t || Math.abs(t) === 1 / 0 ? function(e, t) {
          return Math.pow(e, 5 * t)
        }(e, r) : e * t * r / (t + r * e)
      }

      function Nv(e, t, r, n) {
        return void 0 === n && (n = .15), 0 === n ? function(e, t, r) {
          return Math.max(t, Math.min(e, r))
        }(e, t, r) : e < t ? -Tv(t - e, r - t, n) + t : e > r ? +Tv(e - r, r - t, n) + r : e
      }

      function Ov(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function kv() {
        return kv = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, kv.apply(this, arguments)
      }

      function Hv(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }

      function Bv(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function zv(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Vv(e, t) {
        var r;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return zv(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zv(e, t) : void 0
              }
            }(e)) || t && e && "number" == typeof e.length) {
            r && (e = r);
            var n = 0;
            return function() {
              return n >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[n++]
              }
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        return (r = e[Symbol.iterator]()).next.bind(r)
      }

      function Gv() {}

      function Fv() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return 0 === t.length ? Gv : 1 === t.length ? t[0] : function() {
          for (var e, r, n = Vv(t); !(r = n()).done;) e = r.value.apply(this, arguments) || e;
          return e
        }
      }

      function Uv(e, t) {
        if (void 0 === e) {
          if (void 0 === t) throw new Error("Must define fallback value if undefined is expected");
          e = t
        }
        return Array.isArray(e) ? e : [e, e]
      }

      function Xv(e, t) {
        return Object.assign({}, t, e || {})
      }

      function qv(e) {
        if ("function" == typeof e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return e.apply(void 0, r)
        }
        return e
      }

      function Kv(e, t) {
        void 0 === e && (e = {});
        for (var r = {}, n = 0, a = Object.entries(t); n < a.length; n++) {
          var o = a[n],
            l = o[0],
            i = o[1];
          switch (typeof i) {
            case "function":
              r[l] = i.call(r, e[l], l, e);
              break;
            case "object":
              r[l] = Kv(e[l], i);
              break;
            case "boolean":
              i && (r[l] = e[l])
          }
        }
        return r
      }

      function Wv() {
        return "undefined" != typeof window && "ontouchstart" in window
      }

      function $v(e) {
        return "pointerId" in e ? null : "touchend" === e.type ? e.changedTouches : e.targetTouches
      }

      function Zv(e) {
        return Array.from($v(e)).map((function(e) {
          return e.identifier
        }))
      }

      function Yv(e) {
        return {
          buttons: "buttons" in e ? e.buttons : 0,
          shiftKey: e.shiftKey,
          altKey: e.altKey,
          metaKey: e.metaKey,
          ctrlKey: e.ctrlKey
        }
      }
      var Qv = function(e) {
        return e
      };

      function Jv(e, t) {
        void 0 === t && (t = Qv);
        var r = $v(e),
          n = r ? r[0] : e;
        return t([n.clientX, n.clientY])
      }

      function ep(e, t, r) {
        void 0 === r && (r = Qv);
        var n = Array.from(e.touches).filter((function(e) {
            return t.includes(e.identifier)
          })),
          a = n[0],
          o = n[1];
        if (!a || !o) throw Error("The event doesn't have two pointers matching the pointerIds");
        var l = o.clientX - a.clientX,
          i = o.clientY - a.clientY,
          s = (o.clientX + a.clientX) / 2,
          d = (o.clientY + a.clientY) / 2;
        return {
          values: r([Math.hypot(l, i), -180 * Math.atan2(l, i) / Math.PI]),
          origin: r([s, d])
        }
      }

      function tp(e, t) {
        void 0 === t && (t = Qv);
        var r = e.deltaX,
          n = e.deltaY,
          a = e.deltaMode;
        return 1 === a ? (r *= 40, n *= 40) : 2 === a && (r *= 800, n *= 800), t([r, n])
      }

      function rp(e, t) {
        return void 0 === t && (t = Qv), t([e.scale, e.rotation])
      }
      var np = {
          threshold: function(e) {
            return void 0 === e && (e = 0), Uv(e)
          },
          rubberband: function(e) {
            switch (void 0 === e && (e = 0), e) {
              case !0:
                return Uv(.15);
              case !1:
                return Uv(0);
              default:
                return Uv(e)
            }
          },
          enabled: function(e) {
            return void 0 === e && (e = !0), e
          },
          triggerAllEvents: function(e) {
            return void 0 === e && (e = !1), e
          },
          initial: function(e) {
            return void 0 === e && (e = 0), "function" == typeof e ? e : Uv(e)
          },
          transform: !0
        },
        ap = kv({}, np, {
          axis: !0,
          lockDirection: function(e) {
            return void 0 === e && (e = !1), e
          },
          bounds: function(e) {
            if (void 0 === e && (e = {}), "function" == typeof e) return function(t) {
              return ap.bounds(e(t))
            };
            var t = e,
              r = t.left,
              n = void 0 === r ? -1 / 0 : r,
              a = t.right,
              o = void 0 === a ? 1 / 0 : a,
              l = t.top,
              i = void 0 === l ? -1 / 0 : l,
              s = t.bottom;
            return [
              [n, o],
              [i, void 0 === s ? 1 / 0 : s]
            ]
          }
        }),
        op = "undefined" != typeof window && window.document && window.document.createElement,
        lp = {
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
            return void 0 === e && (e = op ? window : void 0), e
          })),
          eventOptions: function(e) {
            var t = void 0 === e ? {} : e,
              r = t.passive,
              n = void 0 === r || r,
              a = t.capture;
            return {
              passive: n,
              capture: void 0 !== a && a
            }
          },
          transform: !0
        },
        ip = kv({}, np, {
          bounds: function(e, t, r) {
            var n = r.distanceBounds,
              a = void 0 === n ? {} : n,
              o = r.angleBounds,
              l = void 0 === o ? {} : o,
              i = function(e) {
                var t = Xv(qv(a, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              },
              s = function(e) {
                var t = Xv(qv(l, e), {
                  min: -1 / 0,
                  max: 1 / 0
                });
                return [t.min, t.max]
              };
            return "function" != typeof a && "function" != typeof l ? [i(), s()] : function(e) {
              return [i(e), s(e)]
            }
          }
        }),
        sp = kv({}, ap, {
          useTouch: function(e) {
            void 0 === e && (e = !1);
            var t = Wv(),
              r = "undefined" != typeof window && "onpointerdown" in window;
            return !(!e || !t) || !(!t || r)
          },
          experimental_preventWindowScrollY: function(e) {
            return void 0 === e && (e = !1), e
          },
          threshold: function(e, t, r) {
            var n = r.filterTaps,
              a = void 0 !== n && n,
              o = r.lockDirection,
              l = void 0 !== o && o,
              i = r.axis,
              s = Uv(e, a ? 3 : l || (void 0 === i ? void 0 : i) ? 1 : 0);
            return this.filterTaps = a, s
          },
          swipeVelocity: function(e) {
            return void 0 === e && (e = .5), Uv(e)
          },
          swipeDistance: function(e) {
            return void 0 === e && (e = 50), Uv(e)
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

      function dp(e) {
        return void 0 === e && (e = {}), Kv(e, ap)
      }

      function cp(e) {
        return kv({
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
          cancel: Gv,
          canceled: !1,
          memo: void 0,
          args: void 0
        }, e)
      }

      function up() {
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
          drag: cp({
            _pointerId: void 0,
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0,
            tap: !1,
            swipe: [0, 0]
          }),
          pinch: cp({
            _pointerIds: [],
            da: [0, 0],
            vdva: [0, 0],
            origin: void 0,
            turns: 0
          }),
          wheel: cp({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          move: cp({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          }),
          scroll: cp({
            axis: void 0,
            xy: [0, 0],
            vxvy: [0, 0],
            velocity: 0,
            distance: 0
          })
        }
      }
      var fp = new Map,
        hp = function(e) {
          return e
        },
        vp = function() {
          function e(e, t) {
            var r = this;
            void 0 === t && (t = []), this.controller = e, this.args = t, this.debounced = !0, this.setTimeout = function(e, t) {
              var n;
              void 0 === t && (t = 140), clearTimeout(r.controller.timeouts[r.stateKey]);
              for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) o[l - 2] = arguments[l];
              r.controller.timeouts[r.stateKey] = (n = window).setTimeout.apply(n, [e, t].concat(o))
            }, this.clearTimeout = function() {
              clearTimeout(r.controller.timeouts[r.stateKey])
            }, this.fireGestureHandler = function(e) {
              if (void 0 === e && (e = !1), r.state._blocked) return r.debounced || (r.state._active = !1, r.clean()), null;
              if (!e && !r.state.intentional && !r.config.triggerAllEvents) return null;
              if (r.state.intentional) {
                var t = r.state.active,
                  n = r.state._active;
                r.state.active = n, r.state.first = n && !t, r.state.last = t && !n, r.controller.state.shared[r.ingKey] = n
              }
              var a = r.controller.pointerIds.size || r.controller.touchIds.size,
                o = r.controller.state.shared.buttons > 0 || a > 0,
                l = kv({}, r.controller.state.shared, r.state, r.mapStateValues(r.state), {
                  locked: !!document.pointerLockElement,
                  touches: a,
                  down: o
                }),
                i = r.handler(l);
              return r.state.memo = void 0 !== i ? i : r.state.memo, l
            }, this.controller = e, this.args = t
          }
          var t, r, n = e.prototype;
          return n.updateSharedState = function(e) {
            Object.assign(this.controller.state.shared, e)
          }, n.updateGestureState = function(e) {
            Object.assign(this.state, e)
          }, n.checkIntentionality = function(e, t) {
            return {
              _intentional: e,
              _blocked: !1
            }
          }, n.getMovement = function(e) {
            var t = this.config.rubberband,
              r = this.state,
              n = r._bounds,
              a = r._initial,
              o = r._active,
              l = r._intentional,
              i = r.lastOffset,
              s = r.movement,
              d = r._threshold,
              c = this.getInternalMovement(e, this.state),
              u = !1 === l[0] ? pp(c[0], d[0]) : l[0],
              f = !1 === l[1] ? pp(c[1], d[1]) : l[1],
              h = this.checkIntentionality([u, f], c);
            if (h._blocked) return kv({}, h, {
              _movement: c,
              delta: [0, 0]
            });
            var v = h._intentional,
              p = c,
              g = [!1 !== v[0] ? c[0] - v[0] : 0, !1 !== v[1] ? c[1] - v[1] : 0],
              m = Ev(g, i),
              w = o ? t : [0, 0];
            return g = gp(n, Ev(g, a), w), kv({}, h, {
              intentional: !1 !== v[0] || !1 !== v[1],
              _initial: a,
              _movement: p,
              movement: g,
              values: e,
              offset: gp(n, m, w),
              delta: _v(g, s)
            })
          }, n.clean = function() {
            this.clearTimeout()
          }, t = e, (r = [{
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
              return this.config.transform || this.controller.config.transform || hp
            }
          }]) && Ov(t.prototype, r), e
        }();

      function pp(e, t) {
        return Math.abs(e) >= t && Iv(e) * t
      }

      function gp(e, t, r) {
        var n = t[0],
          a = t[1],
          o = r[0],
          l = r[1],
          i = e[0],
          s = i[0],
          d = i[1],
          c = e[1],
          u = c[0],
          f = c[1];
        return [Nv(n, s, d, o), Nv(a, u, f, l)]
      }

      function mp(e, t, r) {
        var n = e.state,
          a = t.timeStamp,
          o = t.type,
          l = n.values;
        return {
          _lastEventType: o,
          event: t,
          timeStamp: a,
          elapsedTime: r ? 0 : a - n.startTime,
          previous: l
        }
      }

      function wp(e, t, r, n) {
        var a = e.state,
          o = e.config,
          l = e.stateKey,
          i = e.args,
          s = e.transform,
          d = a.offset,
          c = r.timeStamp,
          u = o.initial,
          f = o.bounds,
          h = _v(s(o.threshold), s([0, 0])).map(Math.abs),
          v = kv({}, up()[l], {
            _active: !0,
            args: i,
            values: t,
            initial: null != n ? n : t,
            _threshold: h,
            offset: d,
            lastOffset: d,
            startTime: c
          });
        return kv({}, v, {
          _initial: qv(u, v),
          _bounds: qv(f, v)
        })
      }
      var xp = function(e) {
        var t = this;
        this.classes = e, this.pointerIds = new Set, this.touchIds = new Set, this.supportsTouchEvents = Wv(), this.supportsGestureEvents = function() {
          try {
            return "constructor" in GestureEvent
          } catch (e) {
            return !1
          }
        }(), this.bind = function() {
          for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
          for (var a, o = {}, l = Vv(t.classes); !(a = l()).done;) new(0, a.value)(t, r).addBindings(o);
          var i = function(e) {
            Rp(o, e, (function(n) {
              return t.nativeRefs[e](kv({}, t.state.shared, {
                event: n,
                args: r
              }))
            }))
          };
          for (var s in t.nativeRefs) i(s);
          return t.config.domTarget ? function(e, t) {
            var r = e.config,
              n = e.domListeners,
              a = Mp(r);
            if (!a) throw new Error("domTarget must be defined");
            var o = r.eventOptions;
            Lp(a, jp(n), o);
            for (var l = 0, i = Object.entries(t); l < i.length; l++) {
              var s = i[l],
                d = s[0],
                c = s[1],
                u = d.slice(2).toLowerCase();
              n.push([u, Fv.apply(void 0, c)])
            }
            Cp(a, n, o)
          }(t, o) : function(e, t) {
            for (var r = {}, n = e.config.eventOptions.capture ? "Capture" : "", a = 0, o = Object.entries(t); a < o.length; a++) {
              var l = o[a],
                i = l[0],
                s = l[1],
                d = Array.isArray(s) ? s : [s];
              r[i + n] = Fv.apply(void 0, d)
            }
            return r
          }(t, o)
        }, this.effect = function() {
          return t.config.domTarget && t.bind(), t.clean
        }, this.clean = function() {
          var e = Mp(t.config),
            r = t.config.eventOptions;
          e && Lp(e, jp(t.domListeners), r), Object.values(t.timeouts).forEach(clearTimeout),
            function(e) {
              var t = e.config,
                r = t.window,
                n = t.eventOptions,
                a = e.windowListeners;
              if (r) {
                for (var o in a) Lp(r, a[o], n);
                e.windowListeners = {}
              }
            }(t)
        }, this.classes = e, this.state = up(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}
      };

      function yp(e, t) {
        "pointerId" in t ? e.pointerIds.add(t.pointerId) : e.touchIds = new Set(Zv(t))
      }

      function bp(e, t) {
        "pointerId" in t ? e.pointerIds.delete(t.pointerId) : Zv(t).forEach((function(t) {
          return e.touchIds.delete(t)
        }))
      }

      function jp(e) {
        return void 0 === e && (e = []), e.splice(0, e.length)
      }

      function Mp(e) {
        var t = e.domTarget;
        return t && "current" in t ? t.current : t
      }

      function Rp(e, t, r) {
        e[t] || (e[t] = []), e[t].push(r)
      }

      function Cp(e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        for (var n, a = Vv(t); !(n = a()).done;) {
          var o = n.value,
            l = o[0],
            i = o[1];
          e.addEventListener(l, i, r)
        }
      }

      function Lp(e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = {});
        for (var n, a = Vv(t); !(n = a()).done;) {
          var o = n.value,
            l = o[0],
            i = o[1];
          e.removeEventListener(l, i, r)
        }
      }

      function Sp() {}
      var Ep = function(e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        Hv(t, e);
        var r = t.prototype;
        return r.getInternalMovement = function(e, t) {
          return _v(e, t.initial)
        }, r.checkIntentionality = function(e, t) {
          if (!1 === e[0] && !1 === e[1]) return {
            _intentional: e,
            axis: this.state.axis
          };
          var r = t.map(Math.abs),
            n = r[0],
            a = r[1],
            o = this.state.axis || (n > a ? "x" : n < a ? "y" : void 0);
          return this.config.axis || this.config.lockDirection ? o ? this.config.axis && o !== this.config.axis ? {
            _intentional: e,
            _blocked: !0,
            axis: o
          } : (e["x" === o ? 1 : 0] = !1, {
            _intentional: e,
            _blocked: !1,
            axis: o
          }) : {
            _intentional: [!1, !1],
            _blocked: !1,
            axis: o
          } : {
            _intentional: e,
            _blocked: !1,
            axis: o
          }
        }, r.getKinematics = function(e, t) {
          var r = this.getMovement(e);
          if (!r._blocked) {
            var n = t.timeStamp - this.state.timeStamp;
            Object.assign(r, Av(r.movement, r.delta, n))
          }
          return r
        }, r.mapStateValues = function(e) {
          return {
            xy: e.values,
            vxvy: e.velocities
          }
        }, t
      }(vp);

      function _p(e) {
        "persist" in e && "function" == typeof e.persist && e.persist()
      }
      var Pp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "dragging", t.stateKey = "drag", t.setPointerCapture = function(e) {
              if (!t.config.useTouch && !document.pointerLockElement) {
                var r = e.target,
                  n = e.pointerId;
                r && "setPointerCapture" in r && r.setPointerCapture(n), t.updateGestureState({
                  _dragTarget: r,
                  _dragPointerId: n
                })
              }
            }, t.releasePointerCapture = function() {
              if (!t.config.useTouch && !document.pointerLockElement) {
                var e = t.state,
                  r = e._dragTarget,
                  n = e._dragPointerId;
                if (n && r && "releasePointerCapture" in r && (!("hasPointerCapture" in r) || r.hasPointerCapture(n))) try {
                  r.releasePointerCapture(n)
                } catch (e) {}
              }
            }, t.preventScroll = function(e) {
              t.state._dragPreventScroll && e.cancelable && e.preventDefault()
            }, t.getEventId = function(e) {
              return t.config.useTouch ? e.changedTouches[0].identifier : e.pointerId
            }, t.isValidEvent = function(e) {
              return t.state._pointerId === t.getEventId(e)
            }, t.shouldPreventWindowScrollY = t.config.experimental_preventWindowScrollY && t.controller.supportsTouchEvents, t.setUpWindowScrollDetection = function(e) {
              _p(e),
                function(e, t, r, n) {
                  var a = e.config,
                    o = e.windowListeners;
                  void 0 === r && (r = []), void 0 === n && (n = a.eventOptions), a.window && (Lp(a.window, o[t], n), Cp(a.window, o[t] = r, n))
                }(t.controller, t.stateKey, [
                  ["touchmove", t.preventScroll],
                  ["touchend", t.clean.bind(Bv(t))],
                  ["touchcancel", t.clean.bind(Bv(t))]
                ], {
                  passive: !1
                }), t.setTimeout(t.startDrag.bind(Bv(t)), 250, e)
            }, t.setUpDelayedDragTrigger = function(e) {
              t.state._dragDelayed = !0, _p(e), t.setTimeout(t.startDrag.bind(Bv(t)), t.config.delay, e)
            }, t.setStartState = function(e) {
              var r = Jv(e, t.transform);
              t.updateSharedState(Yv(e)), t.updateGestureState(kv({}, wp(Bv(t), r, e), mp(Bv(t), e, !0), {
                _pointerId: t.getEventId(e)
              })), t.updateGestureState(t.getMovement(r))
            }, t.onDragStart = function(e) {
              yp(t.controller, e), t.enabled && !t.state._active && (t.setStartState(e), t.setPointerCapture(e), t.shouldPreventWindowScrollY ? t.setUpWindowScrollDetection(e) : t.config.delay > 0 ? t.setUpDelayedDragTrigger(e) : t.startDrag(e, !0))
            }, t.onDragChange = function(e) {
              if (!t.state.canceled && t.state._active && t.isValidEvent(e) && (t.state._lastEventType !== e.type || e.timeStamp !== t.state.timeStamp)) {
                var r;
                if (document.pointerLockElement) {
                  var n = e.movementX,
                    a = e.movementY;
                  r = Ev(t.transform([n, a]), t.state.values)
                } else r = Jv(e, t.transform);
                var o = t.getKinematics(r, e);
                if (!t.state._dragStarted) {
                  if (t.state._dragDelayed) return void t.startDrag(e);
                  if (!t.shouldPreventWindowScrollY) return;
                  if (t.state._dragPreventScroll || !o.axis) return;
                  if ("x" !== o.axis) return void(t.state._active = !1);
                  t.startDrag(e)
                }
                var l = Yv(e);
                t.updateSharedState(l);
                var i = mp(Bv(t), e),
                  s = Pv(o._movement),
                  d = t.state._dragIsTap;
                d && s >= 3 && (d = !1), t.updateGestureState(kv({}, i, o, {
                  _dragIsTap: d
                })), t.fireGestureHandler()
              }
            }, t.onDragEnd = function(e) {
              if (bp(t.controller, e), t.isValidEvent(e) && (t.clean(), t.state._active)) {
                t.state._active = !1;
                var r = t.state._dragIsTap,
                  n = t.state.velocities,
                  a = n[0],
                  o = n[1],
                  l = t.state.movement,
                  i = l[0],
                  s = l[1],
                  d = t.state._intentional,
                  c = d[0],
                  u = d[1],
                  f = t.config.swipeVelocity,
                  h = f[0],
                  v = f[1],
                  p = t.config.swipeDistance,
                  g = p[0],
                  m = p[1],
                  w = t.config.swipeDuration,
                  x = kv({}, mp(Bv(t), e), t.getMovement(t.state.values)),
                  y = [0, 0];
                x.elapsedTime < w && (!1 !== c && Math.abs(a) > h && Math.abs(i) > g && (y[0] = Iv(a)), !1 !== u && Math.abs(o) > v && Math.abs(s) > m && (y[1] = Iv(o))), t.updateSharedState({
                  buttons: 0
                }), t.updateGestureState(kv({}, x, {
                  tap: r,
                  swipe: y
                })), t.fireGestureHandler(t.config.filterTaps && !0 === r)
              }
            }, t.clean = function() {
              e.prototype.clean.call(Bv(t)), t.state._dragStarted = !1, t.releasePointerCapture(),
                function(e, t, r) {
                  var n = e.config,
                    a = e.windowListeners;
                  void 0 === r && (r = n.eventOptions), n.window && (Lp(n.window, a[t], r), delete a[t])
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
          Hv(t, e);
          var r = t.prototype;
          return r.startDrag = function(e, t) {
            void 0 === t && (t = !1), this.state._active && !this.state._dragStarted && (t || this.setStartState(e), this.updateGestureState({
              _dragStarted: !0,
              _dragPreventScroll: !0,
              cancel: this.onCancel
            }), this.clearTimeout(), this.fireGestureHandler())
          }, r.addBindings = function(e) {
            this.config.useTouch ? (Rp(e, "onTouchStart", this.onDragStart), Rp(e, "onTouchMove", this.onDragChange), Rp(e, "onTouchEnd", this.onDragEnd), Rp(e, "onTouchCancel", this.onDragEnd)) : (Rp(e, "onPointerDown", this.onDragStart), Rp(e, "onPointerMove", this.onDragChange), Rp(e, "onPointerUp", this.onDragEnd), Rp(e, "onPointerCancel", this.onDragEnd)), this.config.filterTaps && Rp(e, this.controller.config.eventOptions.capture ? "onClick" : "onClickCapture", this.onClick)
          }, t
        }(Ep),
        Dp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "pinching", t.stateKey = "pinch", t.onPinchStart = function(e) {
              yp(t.controller, e);
              var r = t.controller.touchIds;
              if (t.enabled && !(t.state._active && t.state._pointerIds.every((function(e) {
                  return r.has(e)
                })) || r.size < 2)) {
                var n = Array.from(r).slice(0, 2),
                  a = ep(e, n, t.transform),
                  o = a.values,
                  l = a.origin;
                t.updateSharedState(Yv(e)), t.updateGestureState(kv({}, wp(Bv(t), o, e), mp(Bv(t), e, !0), {
                  _pointerIds: n,
                  cancel: t.onCancel,
                  origin: l
                })), t.updateGestureState(t.getMovement(o)), t.fireGestureHandler()
              }
            }, t.onPinchChange = function(e) {
              var r = t.state,
                n = r.canceled,
                a = r._active;
              if (!n && a && e.timeStamp !== t.state.timeStamp) {
                var o = Yv(e);
                t.updateSharedState(o);
                try {
                  var l = ep(e, t.state._pointerIds, t.transform),
                    i = l.values,
                    s = l.origin,
                    d = t.getKinematics(i, e);
                  t.updateGestureState(kv({}, mp(Bv(t), e), d, {
                    origin: s
                  })), t.fireGestureHandler()
                } catch (r) {
                  t.onPinchEnd(e)
                }
              }
            }, t.onPinchEnd = function(e) {
              bp(t.controller, e);
              var r = Zv(e);
              t.state._pointerIds.every((function(e) {
                return !r.includes(e)
              })) || (t.clean(), t.state._active && (t.updateGestureState(kv({}, mp(Bv(t), e), t.getMovement(t.state.values), {
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
                var r = rp(e, t.transform);
                t.updateSharedState(Yv(e)), t.updateGestureState(kv({}, wp(Bv(t), r, e), mp(Bv(t), e, !0), {
                  origin: [e.clientX, e.clientY],
                  cancel: t.onCancel
                })), t.updateGestureState(t.getMovement(r)), t.fireGestureHandler()
              }
            }, t.onGestureChange = function(e) {
              var r = t.state,
                n = r.canceled,
                a = r._active;
              if (!n && a) {
                e.preventDefault();
                var o = Yv(e);
                t.updateSharedState(o);
                var l = rp(e, t.transform);
                l[0] = 260 * (l[0] - t.state.event.scale) + t.state.values[0];
                var i = t.getKinematics(l, e);
                t.updateGestureState(kv({}, mp(Bv(t), e), i, {
                  origin: [e.clientX, e.clientY]
                })), t.fireGestureHandler()
              }
            }, t.onGestureEnd = function(e) {
              t.clean(), t.state._active && (t.updateGestureState(kv({}, mp(Bv(t), e), t.getMovement(t.state.values), {
                _active: !1,
                origin: [e.clientX, e.clientY]
              })), t.fireGestureHandler())
            }, t.wheelShouldRun = function(e) {
              return t.enabled && e.ctrlKey
            }, t.getWheelValuesFromEvent = function(e) {
              var r = tp(e, t.transform)[1],
                n = t.state.values,
                a = n[0],
                o = n[1],
                l = 7 * -r,
                i = void 0 !== o ? o : 0;
              return {
                values: [a + l, i],
                origin: [e.clientX, e.clientY],
                delta: [l, i]
              }
            }, t.onWheel = function(e) {
              t.wheelShouldRun(e) && (t.setTimeout(t.onWheelEnd), t.state._active ? t.onWheelChange(e) : t.onWheelStart(e))
            }, t.onWheelStart = function(e) {
              var r = t.getWheelValuesFromEvent(e),
                n = r.values,
                a = r.delta,
                o = r.origin;
              e.cancelable && e.preventDefault(), t.updateSharedState(Yv(e)), t.updateGestureState(kv({}, wp(Bv(t), n, e, t.state.values), mp(Bv(t), e, !0), {
                offset: n,
                delta: a,
                origin: o
              })), t.updateGestureState(t.getMovement(n)), t.fireGestureHandler()
            }, t.onWheelChange = function(e) {
              e.cancelable && e.preventDefault(), t.updateSharedState(Yv(e));
              var r = t.getWheelValuesFromEvent(e),
                n = r.values,
                a = r.origin,
                o = r.delta;
              t.updateGestureState(kv({}, mp(Bv(t), e), t.getKinematics(n, e), {
                origin: a,
                delta: o
              })), t.fireGestureHandler()
            }, t.onWheelEnd = function() {
              t.clean(), t.state._active && (t.state._active = !1, t.updateGestureState(t.getMovement(t.state.values)), t.fireGestureHandler())
            }, t
          }
          return Hv(t, e), t.prototype.addBindings = function(e) {
            this.controller.config.domTarget && !this.controller.supportsTouchEvents && this.controller.supportsGestureEvents ? (Rp(e, "onGestureStart", this.onGestureStart), Rp(e, "onGestureChange", this.onGestureChange), Rp(e, "onGestureEnd", this.onGestureEnd)) : (Rp(e, "onTouchStart", this.onPinchStart), Rp(e, "onTouchMove", this.onPinchChange), Rp(e, "onTouchEnd", this.onPinchEnd), Rp(e, "onTouchCancel", this.onPinchEnd), Rp(e, "onWheel", this.onWheel))
          }, t
        }(function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          Hv(t, e);
          var r = t.prototype;
          return r.getInternalMovement = function(e, t) {
            var r = t.values[1],
              n = e[0],
              a = e[1],
              o = void 0 === a ? r : a,
              l = o - r,
              i = t.turns;
            return Math.abs(l) > 270 && (i += Iv(l)), _v([n, o - 360 * i], t.initial)
          }, r.getKinematics = function(e, t) {
            var r = this.getMovement(e),
              n = (e[1] - r._movement[1] - this.state.initial[1]) / 360,
              a = t.timeStamp - this.state.timeStamp;
            return kv({
              turns: n
            }, r, function(e, t) {
              if (null == e) return {};
              var r, n, a = {},
                o = Object.keys(e);
              for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
              return a
            }(Av(r.movement, r.delta, a), ["distance", "velocity"]))
          }, r.mapStateValues = function(e) {
            return {
              da: e.values,
              vdva: e.velocities
            }
          }, t
        }(vp)),
        Ap = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "wheeling", t.stateKey = "wheel", t.debounced = !0, t.handleEvent = function(e) {
              if ((!e.ctrlKey || !("pinch" in t.controller.handlers)) && t.enabled) {
                t.setTimeout(t.onEnd), t.updateSharedState(Yv(e));
                var r = Ev(tp(e, t.transform), t.state.values);
                if (t.state._active) t.updateGestureState(kv({}, mp(Bv(t), e), t.getKinematics(r, e)));
                else {
                  t.updateGestureState(kv({}, wp(Bv(t), r, e, t.state.values), mp(Bv(t), e, !0)));
                  var n = t.getMovement(r),
                    a = Dv(n.delta);
                  t.updateGestureState(n), t.updateGestureState(a)
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
          return Hv(t, e), t.prototype.addBindings = function(e) {
            Rp(e, "onWheel", this.handleEvent)
          }, t
        }(Ep),
        Ip = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "moving", t.stateKey = "move", t.debounced = !0, t.onMove = function(e) {
              t.enabled && (t.setTimeout(t.onMoveEnd), t.state._active ? t.onMoveChange(e) : t.onMoveStart(e))
            }, t.onMoveStart = function(e) {
              t.updateSharedState(Yv(e));
              var r = Jv(e, t.transform);
              t.updateGestureState(kv({}, wp(Bv(t), r, e), mp(Bv(t), e, !0))), t.updateGestureState(t.getMovement(r)), t.fireGestureHandler()
            }, t.onMoveChange = function(e) {
              t.updateSharedState(Yv(e));
              var r = Jv(e, t.transform);
              t.updateGestureState(kv({}, mp(Bv(t), e), t.getKinematics(r, e))), t.fireGestureHandler()
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
                  var r = Jv(e, t.hoverTransform()),
                    n = kv({}, t.controller.state.shared, t.state, mp(Bv(t), e, !0), {
                      args: t.args,
                      values: r,
                      active: !0,
                      hovering: !0
                    });
                  t.controller.handlers.hover(kv({}, n, t.mapStateValues(n)))
                }
                "move" in t.controller.handlers && t.onMoveStart(e)
              }
            }, t.onPointerLeave = function(e) {
              if (t.controller.state.shared.hovering = !1, "move" in t.controller.handlers && t.onMoveEnd(), t.controller.config.hover.enabled) {
                var r = Jv(e, t.hoverTransform()),
                  n = kv({}, t.controller.state.shared, t.state, mp(Bv(t), e), {
                    args: t.args,
                    values: r,
                    active: !1
                  });
                t.controller.handlers.hover(kv({}, n, t.mapStateValues(n)))
              }
            }, t
          }
          return Hv(t, e), t.prototype.addBindings = function(e) {
            "move" in this.controller.handlers && Rp(e, "onPointerMove", this.onMove), "hover" in this.controller.handlers && (Rp(e, "onPointerEnter", this.onPointerEnter), Rp(e, "onPointerLeave", this.onPointerLeave))
          }, t
        }(Ep),
        Tp = function(e) {
          function t() {
            var t;
            return (t = e.apply(this, arguments) || this).ingKey = "scrolling", t.stateKey = "scroll", t.debounced = !0, t.handleEvent = function(e) {
              if (t.enabled) {
                t.clearTimeout(), t.setTimeout(t.onEnd);
                var r = function(e, t) {
                  void 0 === t && (t = Qv);
                  var r = e.currentTarget,
                    n = r.scrollX,
                    a = r.scrollY,
                    o = r.scrollLeft,
                    l = r.scrollTop;
                  return t([n || o || 0, a || l || 0])
                }(e, t.transform);
                if (t.updateSharedState(Yv(e)), t.state._active) t.updateGestureState(kv({}, mp(Bv(t), e), t.getKinematics(r, e)));
                else {
                  t.updateGestureState(kv({}, wp(Bv(t), r, e, t.state.values), mp(Bv(t), e, !0)));
                  var n = t.getMovement(r),
                    a = Dv(n.delta);
                  t.updateGestureState(n), t.updateGestureState(a)
                }
                t.fireGestureHandler()
              }
            }, t.onEnd = function() {
              t.clean(), t.state._active && (t.updateGestureState(kv({}, t.getMovement(t.state.values), {
                _active: !1,
                velocities: [0, 0],
                velocity: 0
              })), t.fireGestureHandler())
            }, t
          }
          return Hv(t, e), t.prototype.addBindings = function(e) {
            Rp(e, "onScroll", this.handleEvent)
          }, t
        }(Ep),
        Np = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;

      function Op(e, t) {
        void 0 === t && (t = {});
        var r = function(e) {
            var t = {},
              r = {},
              n = new Set;
            for (var a in e) Np.test(a) ? (n.add(RegExp.lastMatch), r[a] = e[a]) : t[a] = e[a];
            return [r, t, n]
          }(e),
          n = r[0],
          a = r[1],
          o = r[2];
        fp.set("drag", Pp), fp.set("hover", Ip), fp.set("move", Ip), fp.set("pinch", Dp), fp.set("scroll", Tp), fp.set("wheel", Ap);
        var l = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = new Set);
            var r = e,
              n = r.drag,
              a = r.wheel,
              o = r.move,
              l = r.scroll,
              i = r.pinch,
              s = r.hover,
              d = r.eventOptions,
              c = r.window,
              u = r.transform,
              f = function(e) {
                return void 0 === e && (e = {}), Kv(e, lp)
              }({
                domTarget: r.domTarget,
                eventOptions: d,
                transform: u,
                window: c,
                enabled: r.enabled
              });
            return t.has("onDrag") && (f.drag = function(e) {
              return void 0 === e && (e = {}), Kv(e, sp)
            }(n)), t.has("onWheel") && (f.wheel = dp(a)), t.has("onScroll") && (f.scroll = dp(l)), t.has("onMove") && (f.move = dp(o)), t.has("onPinch") && (f.pinch = function(e) {
              return void 0 === e && (e = {}), Kv(e, ip)
            }(i)), t.has("onHover") && (f.hover = kv({
              enabled: !0
            }, s)), f
          }(t, o),
          i = {};
        return o.has("onDrag") && (i.drag = kp(n, "onDrag")), o.has("onWheel") && (i.wheel = kp(n, "onWheel")), o.has("onScroll") && (i.scroll = kp(n, "onScroll")), o.has("onMove") && (i.move = kp(n, "onMove")), o.has("onPinch") && (i.pinch = kp(n, "onPinch")), o.has("onHover") && (i.hover = n.onHover),
          function(e, t, r) {
            void 0 === r && (r = {});
            var n = function(e) {
                var t = new Set;
                return e.drag && t.add(fp.get("drag")), e.wheel && t.add(fp.get("wheel")), e.scroll && t.add(fp.get("scroll")), e.move && t.add(fp.get("move")), e.pinch && t.add(fp.get("pinch")), e.hover && t.add(fp.get("hover")), t
              }(e),
              a = x().useMemo((function() {
                return new xp(n)
              }), []);
            return a.config = t, a.handlers = e, a.nativeRefs = r, x().useEffect(a.effect, []), a.config.domTarget ? Sp : a.bind
          }(i, l, a)
      }

      function kp(e, t) {
        var r = t + "Start",
          n = t + "End";
        return function(a) {
          var o = void 0;
          return a.first && r in e && e[r](a), t in e && (o = e[t](a)), a.last && n in e && e[n](a), o
        }
      }
      const Hp = ({
        children: e,
        containerRef: t,
        contentRef: r,
        zoomLevel: n,
        position: o,
        eventHandlers: l
      }) => {
        (({
          containerRef: e,
          contentRef: t
        }) => {
          const r = e => {
            e.preventDefault(), e.nativeEvent?.preventDefault()
          };
          (0, m.useEffect)((() => (document.addEventListener("gesturestart", r), document.addEventListener("gesturechange", r), t.current?.addEventListener("dragstart", r), t.current?.addEventListener("click", r), e.current?.addEventListener("dragstart", r), e.current?.addEventListener("click", r), () => {
            document.removeEventListener("gesturestart", r), document.removeEventListener("gesturechange", r), t.current?.removeEventListener("dragstart", r), t.current?.removeEventListener("click", r), e.current?.removeEventListener("dragstart", r), e.current?.removeEventListener("click", r)
          })), [e.current, t.current])
        })({
          containerRef: t,
          contentRef: r
        }), Op({
          onDrag: l.onDrag,
          onDragEnd: l.onDragEnd,
          onPinch: l.onPinch,
          onPinchEnd: l.onPinchEnd,
          onWheel: l.onWheel,
          onWheelEnd: l.onWheelEnd
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
        const i = zd(),
          s = rv({
            x: o[0],
            y: o[1],
            immediate: i
          }),
          d = rv({
            scale: n / 100,
            immediate: i
          }),
          c = {
            touchAction: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none"
          };
        return (0, a.jsx)("div", {
          ref: t,
          className: "foundry_148vt480",
          style: c,
          children: (0, a.jsx)(Mv.div, {
            ref: r,
            className: "foundry_148vt481",
            style: {
              ...s,
              ...d,
              ...c,
              height: "100%"
            },
            children: e
          })
        })
      };
      var Bp, zp, Vp, Gp = r(80226);

      function Fp(e) {
        return e.type === zp.literal
      }

      function Up(e) {
        return e.type === zp.argument
      }

      function Xp(e) {
        return e.type === zp.number
      }

      function qp(e) {
        return e.type === zp.date
      }

      function Kp(e) {
        return e.type === zp.time
      }

      function Wp(e) {
        return e.type === zp.select
      }

      function $p(e) {
        return e.type === zp.plural
      }

      function Zp(e) {
        return e.type === zp.pound
      }

      function Yp(e) {
        return e.type === zp.tag
      }

      function Qp(e) {
        return !(!e || "object" != typeof e || e.type !== Vp.number)
      }

      function Jp(e) {
        return !(!e || "object" != typeof e || e.type !== Vp.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(Bp || (Bp = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(zp || (zp = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(Vp || (Vp = {}));
      var eg = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        tg = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function rg(e) {
        var t = {};
        return e.replace(tg, (function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
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
      var ng = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        ag = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        og = /^(@+)?(\+|#+)?[rs]?$/g,
        lg = /(\*)(0+)|(#+)(0+)|(0+)/g,
        ig = /^(0+)$/;

      function sg(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(og, (function(e, r, n) {
          return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
        })), t
      }

      function dg(e) {
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

      function cg(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !ig.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function ug(e) {
        return dg(e) || {}
      }

      function fg(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var a = n[r];
          switch (a.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = a.options[0];
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
              t.style = "unit", t.unit = a.options[0].replace(/^(.*?)-/, "");
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
              t = (0, Gp.Cl)((0, Gp.Cl)((0, Gp.Cl)({}, t), {
                notation: "scientific"
              }), a.options.reduce((function(e, t) {
                return (0, Gp.Cl)((0, Gp.Cl)({}, e), ug(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, Gp.Cl)((0, Gp.Cl)((0, Gp.Cl)({}, t), {
                notation: "engineering"
              }), a.options.reduce((function(e, t) {
                return (0, Gp.Cl)((0, Gp.Cl)({}, e), ug(t))
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
              t.scale = parseFloat(a.options[0]);
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
              if (a.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              a.options[0].replace(lg, (function(e, r, n, a, o, l) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (a && o) throw new Error("We currently do not support maximum integer digits");
                  if (l) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (ig.test(a.stem)) t.minimumIntegerDigits = a.stem.length;
          else if (ag.test(a.stem)) {
            if (a.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            a.stem.replace(ag, (function(e, r, n, a, o, l) {
              return "*" === n ? t.minimumFractionDigits = r.length : a && "#" === a[0] ? t.maximumFractionDigits = a.length : o && l ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + l.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var o = a.options[0];
            "w" === o ? t = (0, Gp.Cl)((0, Gp.Cl)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : o && (t = (0, Gp.Cl)((0, Gp.Cl)({}, t), sg(o)))
          } else if (og.test(a.stem)) t = (0, Gp.Cl)((0, Gp.Cl)({}, t), sg(a.stem));
          else {
            var l = dg(a.stem);
            l && (t = (0, Gp.Cl)((0, Gp.Cl)({}, t), l));
            var i = cg(a.stem);
            i && (t = (0, Gp.Cl)((0, Gp.Cl)({}, t), i))
          }
        }
        return t
      }
      var hg, vg = {
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

      function pg(e) {
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
        var r, n = e.language;
        return "root" !== n && (r = e.maximize().region), (vg[r || ""] || vg[n || ""] || vg["".concat(n, "-001")] || vg["001"])[0]
      }
      var gg = new RegExp("^".concat(eg.source, "*")),
        mg = new RegExp("".concat(eg.source, "*$"));

      function wg(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var xg = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        yg = !!String.fromCodePoint,
        bg = !!Object.fromEntries,
        jg = !!String.prototype.codePointAt,
        Mg = !!String.prototype.trimStart,
        Rg = !!String.prototype.trimEnd,
        Cg = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        Lg = !0;
      try {
        Lg = "a" === (null === (hg = Tg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === hg ? void 0 : hg[0])
      } catch (e) {
        Lg = !1
      }
      var Sg, Eg = xg ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        _g = yg ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, n = "", a = e.length, o = 0; a > o;) {
            if ((r = e[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
            n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return n
        },
        Pg = bg ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, n = e; r < n.length; r++) {
            var a = n[r],
              o = a[0],
              l = a[1];
            t[o] = l
          }
          return t
        },
        Dg = jg ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var n, a = e.charCodeAt(t);
            return a < 55296 || a > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? a : n - 56320 + (a - 55296 << 10) + 65536
          }
        },
        Ag = Mg ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(gg, "")
        },
        Ig = Rg ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(mg, "")
        };

      function Tg(e, t) {
        return new RegExp(e, t)
      }
      if (Lg) {
        var Ng = Tg("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Sg = function(e, t) {
          var r;
          return Ng.lastIndex = t, null !== (r = Ng.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else Sg = function(e, t) {
        for (var r = [];;) {
          var n = Dg(e, t);
          if (void 0 === n || Hg(n) || Bg(n)) break;
          r.push(n), t += n >= 65536 ? 2 : 1
        }
        return _g.apply(void 0, r)
      };
      var Og = function() {
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
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var n = []; !this.isEOF();) {
            var a = this.char();
            if (123 === a) {
              if ((o = this.parseArgument(e, r)).err) return o;
              n.push(o.val)
            } else {
              if (125 === a && e > 0) break;
              if (35 !== a || "plural" !== t && "selectordinal" !== t) {
                if (60 === a && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(Bp.UNMATCHED_CLOSING_TAG, wg(this.clonePosition(), this.clonePosition()))
                }
                if (60 === a && !this.ignoreTag && kg(this.peek() || 0)) {
                  if ((o = this.parseTag(e, t)).err) return o;
                  n.push(o.val)
                } else {
                  var o;
                  if ((o = this.parseLiteral(e, t)).err) return o;
                  n.push(o.val)
                }
              } else {
                var l = this.clonePosition();
                this.bump(), n.push({
                  type: zp.pound,
                  location: wg(l, this.clonePosition())
                })
              }
            }
          }
          return {
            val: n,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var n = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: zp.literal,
              value: "<".concat(n, "/>"),
              location: wg(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var o = a.val,
              l = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !kg(this.char())) return this.error(Bp.INVALID_TAG, wg(l, this.clonePosition()));
              var i = this.clonePosition();
              return n !== this.parseTagName() ? this.error(Bp.UNMATCHED_CLOSING_TAG, wg(i, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: zp.tag,
                  value: n,
                  children: o,
                  location: wg(r, this.clonePosition())
                },
                err: null
              } : this.error(Bp.INVALID_TAG, wg(l, this.clonePosition())))
            }
            return this.error(Bp.UNCLOSED_TAG, wg(r, this.clonePosition()))
          }
          return this.error(Bp.INVALID_TAG, wg(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), n = "";;) {
            var a = this.tryParseQuote(t);
            if (a) n += a;
            else {
              var o = this.tryParseUnquoted(e, t);
              if (o) n += o;
              else {
                var l = this.tryParseLeftAngleBracket();
                if (!l) break;
                n += l
              }
            }
          }
          var i = wg(r, this.clonePosition());
          return {
            val: {
              type: zp.literal,
              value: n,
              location: i
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (kg(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
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
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return _g.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), _g(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Bp.EXPECT_ARGUMENT_CLOSING_BRACE, wg(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(Bp.EMPTY_ARGUMENT, wg(r, this.clonePosition()));
          var n = this.parseIdentifierIfPossible().value;
          if (!n) return this.error(Bp.MALFORMED_ARGUMENT, wg(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(Bp.EXPECT_ARGUMENT_CLOSING_BRACE, wg(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: zp.argument,
                  value: n,
                  location: wg(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Bp.EXPECT_ARGUMENT_CLOSING_BRACE, wg(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
            default:
              return this.error(Bp.MALFORMED_ARGUMENT, wg(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = Sg(this.message, t),
            n = t + r.length;
          return this.bumpTo(n), {
            value: r,
            location: wg(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, n) {
          var a, o = this.clonePosition(),
            l = this.parseIdentifierIfPossible().value,
            i = this.clonePosition();
          switch (l) {
            case "":
              return this.error(Bp.EXPECT_ARGUMENT_TYPE, wg(o, i));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var s = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var d = this.clonePosition();
                if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
                if (0 === (h = Ig(m.val)).length) return this.error(Bp.EXPECT_ARGUMENT_STYLE, wg(this.clonePosition(), this.clonePosition()));
                s = {
                  style: h,
                  styleLocation: wg(d, this.clonePosition())
                }
              }
              if ((w = this.tryParseArgumentClose(n)).err) return w;
              var c = wg(n, this.clonePosition());
              if (s && Eg(null == s ? void 0 : s.style, "::", 0)) {
                var u = Ag(s.style.slice(2));
                if ("number" === l) return (m = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? m : {
                  val: {
                    type: zp.number,
                    value: r,
                    location: c,
                    style: m.val
                  },
                  err: null
                };
                if (0 === u.length) return this.error(Bp.EXPECT_DATE_TIME_SKELETON, c);
                var f = u;
                this.locale && (f = function(e, t) {
                  for (var r = "", n = 0; n < e.length; n++) {
                    var a = e.charAt(n);
                    if ("j" === a) {
                      for (var o = 0; n + 1 < e.length && e.charAt(n + 1) === a;) o++, n++;
                      var l = 1 + (1 & o),
                        i = o < 2 ? 1 : 3 + (o >> 1),
                        s = pg(t);
                      for ("H" != s && "k" != s || (i = 0); i-- > 0;) r += "a";
                      for (; l-- > 0;) r = s + r
                    } else r += "J" === a ? "H" : a
                  }
                  return r
                }(u, this.locale));
                var h = {
                  type: Vp.dateTime,
                  pattern: f,
                  location: s.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? rg(f) : {}
                };
                return {
                  val: {
                    type: "date" === l ? zp.date : zp.time,
                    value: r,
                    location: c,
                    style: h
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === l ? zp.number : "date" === l ? zp.date : zp.time,
                  value: r,
                  location: c,
                  style: null !== (a = null == s ? void 0 : s.style) && void 0 !== a ? a : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var v = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Bp.EXPECT_SELECT_ARGUMENT_OPTIONS, wg(v, (0, Gp.Cl)({}, v)));
              this.bumpSpace();
              var p = this.parseIdentifierIfPossible(),
                g = 0;
              if ("select" !== l && "offset" === p.value) {
                if (!this.bumpIf(":")) return this.error(Bp.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, wg(this.clonePosition(), this.clonePosition()));
                var m;
                if (this.bumpSpace(), (m = this.tryParseDecimalInteger(Bp.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Bp.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
                this.bumpSpace(), p = this.parseIdentifierIfPossible(), g = m.val
              }
              var w, x = this.tryParsePluralOrSelectOptions(e, l, t, p);
              if (x.err) return x;
              if ((w = this.tryParseArgumentClose(n)).err) return w;
              var y = wg(n, this.clonePosition());
              return "select" === l ? {
                val: {
                  type: zp.select,
                  value: r,
                  options: Pg(x.val),
                  location: y
                },
                err: null
              } : {
                val: {
                  type: zp.plural,
                  value: r,
                  options: Pg(x.val),
                  offset: g,
                  pluralType: "plural" === l ? "cardinal" : "ordinal",
                  location: y
                },
                err: null
              };
            default:
              return this.error(Bp.INVALID_ARGUMENT_TYPE, wg(o, i))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(Bp.EXPECT_ARGUMENT_CLOSING_BRACE, wg(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(Bp.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, wg(r, this.clonePosition()));
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
          var r = [];
          try {
            r = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              for (var t = [], r = 0, n = e.split(ng).filter((function(e) {
                  return e.length > 0
                })); r < n.length; r++) {
                var a = n[r].split("/");
                if (0 === a.length) throw new Error("Invalid number skeleton");
                for (var o = a[0], l = a.slice(1), i = 0, s = l; i < s.length; i++)
                  if (0 === s[i].length) throw new Error("Invalid number skeleton");
                t.push({
                  stem: o,
                  options: l
                })
              }
              return t
            }(e)
          } catch (e) {
            return this.error(Bp.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: Vp.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? fg(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var a, o = !1, l = [], i = new Set, s = n.value, d = n.location;;) {
            if (0 === s.length) {
              var c = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var u = this.tryParseDecimalInteger(Bp.EXPECT_PLURAL_ARGUMENT_SELECTOR, Bp.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (u.err) return u;
              d = wg(c, this.clonePosition()), s = this.message.slice(c.offset, this.offset())
            }
            if (i.has(s)) return this.error("select" === t ? Bp.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Bp.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
            "other" === s && (o = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? Bp.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Bp.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, wg(this.clonePosition(), this.clonePosition()));
            var h = this.parseMessage(e + 1, t, r);
            if (h.err) return h;
            var v = this.tryParseArgumentClose(f);
            if (v.err) return v;
            l.push([s, {
              value: h.val,
              location: wg(f, this.clonePosition())
            }]), i.add(s), this.bumpSpace(), s = (a = this.parseIdentifierIfPossible()).value, d = a.location
          }
          return 0 === l.length ? this.error("select" === t ? Bp.EXPECT_SELECT_ARGUMENT_SELECTOR : Bp.EXPECT_PLURAL_ARGUMENT_SELECTOR, wg(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Bp.MISSING_OTHER_CLAUSE, wg(this.clonePosition(), this.clonePosition())) : {
            val: l,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            n = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var a = !1, o = 0; !this.isEOF();) {
            var l = this.char();
            if (!(l >= 48 && l <= 57)) break;
            a = !0, o = 10 * o + (l - 48), this.bump()
          }
          var i = wg(n, this.clonePosition());
          return a ? Cg(o *= r) ? {
            val: o,
            err: null
          } : this.error(t, i) : this.error(e, i)
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
          var t = Dg(this.message, e);
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
          if (Eg(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && Hg(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function kg(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function Hg(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function Bg(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function zg(e) {
        e.forEach((function(e) {
          if (delete e.location, Wp(e) || $p(e))
            for (var t in e.options) delete e.options[t].location, zg(e.options[t].value);
          else Xp(e) && Qp(e.style) || (qp(e) || Kp(e)) && Jp(e.style) ? delete e.style.location : Yp(e) && zg(e.children)
        }))
      }

      function Vg(e, t) {
        void 0 === t && (t = {}), t = (0, Gp.Cl)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new Og(e, t).parse();
        if (r.err) {
          var n = SyntaxError(Bp[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || zg(r.val), r.val
      }
      var Gg, Fg = r(60903);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(Gg || (Gg = {}));
      var Ug, Xg = function(e) {
          function t(t, r, n) {
            var a = e.call(this, t) || this;
            return a.code = r, a.originalMessage = n, a
          }
          return (0, Gp.C6)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        qg = function(e) {
          function t(t, r, n, a) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), Gg.INVALID_VALUE, a) || this
          }
          return (0, Gp.C6)(t, e), t
        }(Xg),
        Kg = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), Gg.INVALID_VALUE, n) || this
          }
          return (0, Gp.C6)(t, e), t
        }(Xg),
        Wg = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), Gg.MISSING_VALUE, r) || this
          }
          return (0, Gp.C6)(t, e), t
        }(Xg);

      function $g(e) {
        return "function" == typeof e
      }

      function Zg(e, t, r, n, a, o, l) {
        if (1 === e.length && Fp(e[0])) return [{
          type: Ug.literal,
          value: e[0].value
        }];
        for (var i = [], s = 0, d = e; s < d.length; s++) {
          var c = d[s];
          if (Fp(c)) i.push({
            type: Ug.literal,
            value: c.value
          });
          else if (Zp(c)) "number" == typeof o && i.push({
            type: Ug.literal,
            value: r.getNumberFormat(t).format(o)
          });
          else {
            var u = c.value;
            if (!a || !(u in a)) throw new Wg(u, l);
            var f = a[u];
            if (Up(c)) f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? String(f) : ""), i.push({
              type: "string" == typeof f ? Ug.literal : Ug.object,
              value: f
            });
            else if (qp(c)) {
              var h = "string" == typeof c.style ? n.date[c.style] : Jp(c.style) ? c.style.parsedOptions : void 0;
              i.push({
                type: Ug.literal,
                value: r.getDateTimeFormat(t, h).format(f)
              })
            } else if (Kp(c)) h = "string" == typeof c.style ? n.time[c.style] : Jp(c.style) ? c.style.parsedOptions : n.time.medium, i.push({
              type: Ug.literal,
              value: r.getDateTimeFormat(t, h).format(f)
            });
            else if (Xp(c))(h = "string" == typeof c.style ? n.number[c.style] : Qp(c.style) ? c.style.parsedOptions : void 0) && h.scale && (f *= h.scale || 1), i.push({
              type: Ug.literal,
              value: r.getNumberFormat(t, h).format(f)
            });
            else {
              if (Yp(c)) {
                var v = c.children,
                  p = c.value,
                  g = a[p];
                if (!$g(g)) throw new Kg(p, "function", l);
                var m = g(Zg(v, t, r, n, a, o).map((function(e) {
                  return e.value
                })));
                Array.isArray(m) || (m = [m]), i.push.apply(i, m.map((function(e) {
                  return {
                    type: "string" == typeof e ? Ug.literal : Ug.object,
                    value: e
                  }
                })))
              }
              if (Wp(c)) {
                if (!(w = c.options[f] || c.options.other)) throw new qg(c.value, f, Object.keys(c.options), l);
                i.push.apply(i, Zg(w.value, t, r, n, a))
              } else if ($p(c)) {
                var w;
                if (!(w = c.options["=".concat(f)])) {
                  if (!Intl.PluralRules) throw new Xg('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Gg.MISSING_INTL_API, l);
                  var x = r.getPluralRules(t, {
                    type: c.pluralType
                  }).select(f - (c.offset || 0));
                  w = c.options[x] || c.options.other
                }
                if (!w) throw new qg(c.value, f, Object.keys(c.options), l);
                i.push.apply(i, Zg(w.value, t, r, n, a, f - (c.offset || 0)))
              }
            }
          }
        }
        return (y = i).length < 2 ? y : y.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === Ug.literal && t.type === Ug.literal ? r.value += t.value : e.push(t), e
        }), []);
        var y
      }

      function Yg(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(Ug || (Ug = {}));
      var Qg, Jg = function() {
        function e(t, r, n, a) {
          var o, l, i, s = this;
          if (void 0 === r && (r = e.defaultLocale), this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === Ug.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return Zg(s.ast, s.locales, s.formatters, s.formats, e, void 0, s.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = s.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(s.locales)[0]
              }
            }, this.getAst = function() {
              return s.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var d = a || {},
              c = (d.formatters, (0, Gp.Tt)(d, ["formatters"]));
            this.ast = e.__parse(t, (0, Gp.Cl)((0, Gp.Cl)({}, c), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (l = e.formats, (i = n) ? Object.keys(l).reduce((function(e, t) {
            return e[t] = function(e, t) {
              return t ? (0, Gp.Cl)((0, Gp.Cl)((0, Gp.Cl)({}, e || {}), t || {}), Object.keys(e).reduce((function(r, n) {
                return r[n] = (0, Gp.Cl)((0, Gp.Cl)({}, e[n]), t[n] || {}), r
              }), {})) : e
            }(l[t], i[t]), e
          }), (0, Gp.Cl)({}, l)) : l), this.formatters = a && a.formatters || (void 0 === (o = this.formatterCache) && (o = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, Fg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
            }), {
              cache: Yg(o.number),
              strategy: Fg.W.variadic
            }),
            getDateTimeFormat: (0, Fg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
            }), {
              cache: Yg(o.dateTime),
              strategy: Fg.W.variadic
            }),
            getPluralRules: (0, Fg.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
            }), {
              cache: Yg(o.pluralRules),
              strategy: Fg.W.variadic
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
        }, e.__parse = Vg, e.formats = {
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
      }(Qg || (Qg = {}));
      var em = function(e) {
          function t(r, n, a) {
            var o = this,
              l = a ? a instanceof Error ? a : new Error(String(a)) : void 0;
            return (o = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(n, "\n").concat(l ? "\n".concat(l.message, "\n").concat(l.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(o, t), o
          }
          return (0, Gp.C6)(t, e), t
        }(Error),
        tm = function(e) {
          function t(t, r) {
            return e.call(this, Qg.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, Gp.C6)(t, e), t
        }(em),
        rm = function(e) {
          function t(t, r) {
            return e.call(this, Qg.INVALID_CONFIG, t, r) || this
          }
          return (0, Gp.C6)(t, e), t
        }(em),
        nm = function(e) {
          function t(t, r) {
            return e.call(this, Qg.MISSING_DATA, t, r) || this
          }
          return (0, Gp.C6)(t, e), t
        }(em),
        am = function(e) {
          function t(t, r, n) {
            var a = e.call(this, Qg.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return a.locale = r, a
          }
          return (0, Gp.C6)(t, e), t
        }(em),
        om = function(e) {
          function t(t, r, n, a) {
            var o = e.call(this, "".concat(t, "\nMessageID: ").concat(null == n ? void 0 : n.id, "\nDefault Message: ").concat(null == n ? void 0 : n.defaultMessage, "\nDescription: ").concat(null == n ? void 0 : n.description, "\n"), r, a) || this;
            return o.descriptor = n, o.locale = r, o
          }
          return (0, Gp.C6)(t, e), t
        }(am),
        lm = function(e) {
          function t(t, r) {
            var n = e.call(this, Qg.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, Gp.C6)(t, e), t
        }(em);

      function im(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, n) {
          return n in e ? t[n] = e[n] : n in r && (t[n] = r[n]), t
        }), {})
      }
      var sm = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function dm(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function cm(e, t, r, n) {
        var a, o = e && e[t];
        if (o && (a = o[r]), a) return a;
        n(new tm("No ".concat(t, " format named: ").concat(r)))
      }

      function um(e, t, r) {
        if (void 0 === r && (r = Error), !e) throw new r(t)
      }

      function fm(e) {
        um(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      var hm = (0, Gp.Cl)((0, Gp.Cl)({}, sm), {
        textComponent: m.Fragment
      });
      r(3536);
      var vm = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? m.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = m.createContext(null)),
        pm = (vm.Consumer, vm.Provider),
        gm = vm;

      function mm(e, t) {
        return Object.keys(e).reduce((function(r, n) {
          return r[n] = (0, Gp.Cl)({
            timeZone: t
          }, e[n]), r
        }), {})
      }

      function wm(e, t) {
        return Object.keys((0, Gp.Cl)((0, Gp.Cl)({}, e), t)).reduce((function(r, n) {
          return r[n] = (0, Gp.Cl)((0, Gp.Cl)({}, e[n] || {}), t[n] || {}), r
        }), {})
      }

      function xm(e, t) {
        if (!t) return e;
        var r = Jg.formats;
        return (0, Gp.Cl)((0, Gp.Cl)((0, Gp.Cl)({}, r), e), {
          date: wm(mm(r.date, t), mm(e.date || {}, t)),
          time: wm(mm(r.time, t), mm(e.time || {}, t))
        })
      }
      var ym = function(e, t, r, n, a) {
          var o = e.locale,
            l = e.formats,
            i = e.messages,
            s = e.defaultLocale,
            d = e.defaultFormats,
            c = e.fallbackOnEmptyString,
            u = e.onError,
            f = e.timeZone,
            h = e.defaultRichTextElements;
          void 0 === r && (r = {
            id: ""
          });
          var v = r.id,
            p = r.defaultMessage;
          um(!!v, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
          var g = String(v),
            m = i && Object.prototype.hasOwnProperty.call(i, g) && i[g];
          if (Array.isArray(m) && 1 === m.length && m[0].type === zp.literal) return m[0].value;
          if (!n && m && "string" == typeof m && !h) return m.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (n = (0, Gp.Cl)((0, Gp.Cl)({}, h), n || {}), l = xm(l, f), d = xm(d, f), !m) {
            if (!1 === c && "" === m) return m;
            if ((!p || o && o.toLowerCase() !== s.toLowerCase()) && u(new lm(r, o)), p) try {
              return t.getMessageFormat(p, s, d, a).format(n)
            } catch (e) {
              return u(new om('Error formatting default message for: "'.concat(g, '", rendering default message verbatim'), o, r, e)), "string" == typeof p ? p : g
            }
            return g
          }
          try {
            return t.getMessageFormat(m, o, l, (0, Gp.Cl)({
              formatters: t
            }, a || {})).format(n)
          } catch (e) {
            u(new om('Error formatting message: "'.concat(g, '", using ').concat(p ? "default message" : "id", " as fallback."), o, r, e))
          }
          if (p) try {
            return t.getMessageFormat(p, s, d, a).format(n)
          } catch (e) {
            u(new om('Error formatting the default message for: "'.concat(g, '", rendering message verbatim'), o, r, e))
          }
          return "string" == typeof m ? m : "string" == typeof p ? p : g
        },
        bm = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function jm(e, t, r) {
        var n = e.locale,
          a = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var l = r.format,
          i = l && cm(a, "number", l, o) || {};
        return t(n, im(r, bm, i))
      }

      function Mm(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return jm(e, t, n).format(r)
        } catch (t) {
          e.onError(new am("Error formatting number.", e.locale, t))
        }
        return String(r)
      }

      function Rm(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return jm(e, t, n).formatToParts(r)
        } catch (t) {
          e.onError(new am("Error formatting number.", e.locale, t))
        }
        return []
      }
      var Cm = ["numeric", "style"];

      function Lm(e, t, r, n, a) {
        void 0 === a && (a = {}), n || (n = "second"), Intl.RelativeTimeFormat || e.onError(new Xg('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', Gg.MISSING_INTL_API));
        try {
          return function(e, t, r) {
            var n = e.locale,
              a = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var l = r.format,
              i = !!l && cm(a, "relative", l, o) || {};
            return t(n, im(r, Cm, i))
          }(e, t, a).format(r, n)
        } catch (t) {
          e.onError(new am("Error formatting relative time.", e.locale, t))
        }
        return String(r)
      }
      var Sm = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Em(e, t, r, n) {
        var a = e.locale,
          o = e.formats,
          l = e.onError,
          i = e.timeZone;
        void 0 === n && (n = {});
        var s = n.format,
          d = (0, Gp.Cl)((0, Gp.Cl)({}, i && {
            timeZone: i
          }), s && cm(o, t, s, l)),
          c = im(n, Sm, d);
        return "time" !== t || c.hour || c.minute || c.second || c.timeStyle || c.dateStyle || (c = (0, Gp.Cl)((0, Gp.Cl)({}, c), {
          hour: "numeric",
          minute: "numeric"
        })), r(a, c)
      }

      function _m(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          i = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return Em(e, "date", t, l).format(i)
        } catch (t) {
          e.onError(new am("Error formatting date.", e.locale, t))
        }
        return String(i)
      }

      function Pm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          i = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return Em(e, "time", t, l).format(i)
        } catch (t) {
          e.onError(new am("Error formatting time.", e.locale, t))
        }
        return String(i)
      }

      function Dm(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = r[2],
          i = void 0 === l ? {} : l,
          s = e.timeZone,
          d = e.locale,
          c = e.onError,
          u = im(i, Sm, s ? {
            timeZone: s
          } : {});
        try {
          return t(d, u).formatRange(a, o)
        } catch (t) {
          c(new am("Error formatting date time range.", e.locale, t))
        }
        return String(a)
      }

      function Am(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          i = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return Em(e, "date", t, l).formatToParts(i)
        } catch (t) {
          e.onError(new am("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Im(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var a = r[0],
          o = r[1],
          l = void 0 === o ? {} : o,
          i = "string" == typeof a ? new Date(a || 0) : a;
        try {
          return Em(e, "time", t, l).formatToParts(i)
        } catch (t) {
          e.onError(new am("Error formatting time.", e.locale, t))
        }
        return []
      }
      var Tm = ["type"];

      function Nm(e, t, r, n) {
        var a = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.PluralRules || o(new Xg('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', Gg.MISSING_INTL_API));
        var l = im(n, Tm);
        try {
          return t(a, l).select(r)
        } catch (e) {
          o(new am("Error formatting plural.", a, e))
        }
        return "other"
      }
      var Om = ["type", "style"],
        km = Date.now();

      function Hm(e, t, r, n) {
        void 0 === n && (n = {});
        var a = Bm(e, t, r, n).reduce((function(e, t) {
          var r = t.value;
          return "string" != typeof r ? e.push(r) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += r : e.push(r), e
        }), []);
        return 1 === a.length ? a[0] : 0 === a.length ? "" : a
      }

      function Bm(e, t, r, n) {
        var a = e.locale,
          o = e.onError;
        void 0 === n && (n = {}), Intl.ListFormat || o(new Xg('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', Gg.MISSING_INTL_API));
        var l = im(n, Om);
        try {
          var i = {},
            s = r.map((function(e, t) {
              if ("object" == typeof e) {
                var r = function(e) {
                  return "".concat(km, "_").concat(e, "_").concat(km)
                }(t);
                return i[r] = e, r
              }
              return String(e)
            }));
          return t(a, l).formatToParts(s).map((function(e) {
            return "literal" === e.type ? e : (0, Gp.Cl)((0, Gp.Cl)({}, e), {
              value: i[e.value] || e.value
            })
          }))
        } catch (e) {
          o(new am("Error formatting list.", a, e))
        }
        return r
      }
      var zm = ["style", "type", "fallback", "languageDisplay"];

      function Vm(e, t, r, n) {
        var a = e.locale,
          o = e.onError;
        Intl.DisplayNames || o(new Xg('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', Gg.MISSING_INTL_API));
        var l = im(n, zm);
        try {
          return t(a, l).of(r)
        } catch (e) {
          o(new am("Error formatting display name.", a, e))
        }
      }

      function Gm(e, t) {
        var r = function(e) {
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
              r = Intl.ListFormat,
              n = Intl.DisplayNames,
              a = (0, Fg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.DateTimeFormat).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
              }), {
                cache: dm(e.dateTime),
                strategy: Fg.W.variadic
              }),
              o = (0, Fg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.NumberFormat).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
              }), {
                cache: dm(e.number),
                strategy: Fg.W.variadic
              }),
              l = (0, Fg.B)((function() {
                for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return new((e = Intl.PluralRules).bind.apply(e, (0, Gp.fX)([void 0], t, !1)))
              }), {
                cache: dm(e.pluralRules),
                strategy: Fg.W.variadic
              });
            return {
              getDateTimeFormat: a,
              getNumberFormat: o,
              getMessageFormat: (0, Fg.B)((function(e, t, r, n) {
                return new Jg(e, t, r, (0, Gp.Cl)({
                  formatters: {
                    getNumberFormat: o,
                    getDateTimeFormat: a,
                    getPluralRules: l
                  }
                }, n || {}))
              }), {
                cache: dm(e.message),
                strategy: Fg.W.variadic
              }),
              getRelativeTimeFormat: (0, Fg.B)((function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return new(t.bind.apply(t, (0, Gp.fX)([void 0], e, !1)))
              }), {
                cache: dm(e.relativeTime),
                strategy: Fg.W.variadic
              }),
              getPluralRules: l,
              getListFormat: (0, Fg.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(r.bind.apply(r, (0, Gp.fX)([void 0], e, !1)))
              }), {
                cache: dm(e.list),
                strategy: Fg.W.variadic
              }),
              getDisplayNames: (0, Fg.B)((function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new(n.bind.apply(n, (0, Gp.fX)([void 0], e, !1)))
              }), {
                cache: dm(e.displayNames),
                strategy: Fg.W.variadic
              })
            }
          }(t),
          n = (0, Gp.Cl)((0, Gp.Cl)({}, sm), e),
          a = n.locale,
          o = n.defaultLocale,
          l = n.onError;
        return a ? !Intl.NumberFormat.supportedLocalesOf(a).length && l ? l(new nm('Missing locale data for locale: "'.concat(a, '" in Intl.NumberFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(a).length && l && l(new nm('Missing locale data for locale: "'.concat(a, '" in Intl.DateTimeFormat. Using default locale: "').concat(o, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (l && l(new rm('"locale" was not configured, using "'.concat(o, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), n.locale = n.defaultLocale || "en"),
          function(e) {
            e.onWarn && e.defaultRichTextElements && function(e) {
              return "string" == typeof(e ? e[Object.keys(e)[0]] : void 0)
            }(e.messages || {}) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')
          }(n), (0, Gp.Cl)((0, Gp.Cl)({}, n), {
            formatters: r,
            formatNumber: Mm.bind(null, n, r.getNumberFormat),
            formatNumberToParts: Rm.bind(null, n, r.getNumberFormat),
            formatRelativeTime: Lm.bind(null, n, r.getRelativeTimeFormat),
            formatDate: _m.bind(null, n, r.getDateTimeFormat),
            formatDateToParts: Am.bind(null, n, r.getDateTimeFormat),
            formatTime: Pm.bind(null, n, r.getDateTimeFormat),
            formatDateTimeRange: Dm.bind(null, n, r.getDateTimeFormat),
            formatTimeToParts: Im.bind(null, n, r.getDateTimeFormat),
            formatPlural: Nm.bind(null, n, r.getPluralRules),
            formatMessage: ym.bind(null, n, r),
            $t: ym.bind(null, n, r),
            formatList: Hm.bind(null, n, r.getListFormat),
            formatListToParts: Bm.bind(null, n, r.getListFormat),
            formatDisplayName: Vm.bind(null, n, r.getDisplayNames)
          })
      }

      function Fm(e) {
        return e ? Object.keys(e).reduce((function(t, r) {
          var n, a = e[r];
          return t[r] = $g(a) ? (n = a, function(e) {
            return n(m.Children.toArray(e))
          }) : a, t
        }), {}) : e
      }
      var Um = function(e, t, r, n) {
          for (var a = [], o = 4; o < arguments.length; o++) a[o - 4] = arguments[o];
          var l = Fm(n),
            i = ym.apply(void 0, (0, Gp.fX)([e, t, r, l], a, !1));
          return Array.isArray(i) ? m.Children.toArray(i) : i
        },
        Xm = function(e, t) {
          var r = e.defaultRichTextElements,
            n = (0, Gp.Tt)(e, ["defaultRichTextElements"]),
            a = Fm(r),
            o = Gm((0, Gp.Cl)((0, Gp.Cl)((0, Gp.Cl)({}, hm), n), {
              defaultRichTextElements: a
            }), t),
            l = {
              locale: o.locale,
              timeZone: o.timeZone,
              fallbackOnEmptyString: o.fallbackOnEmptyString,
              formats: o.formats,
              defaultLocale: o.defaultLocale,
              defaultFormats: o.defaultFormats,
              messages: o.messages,
              onError: o.onError,
              defaultRichTextElements: a
            };
          return (0, Gp.Cl)((0, Gp.Cl)({}, o), {
            formatMessage: Um.bind(null, l, o.formatters),
            $t: Um.bind(null, l, o.formatters)
          })
        };

      function qm(e) {
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
      var Km = function(e) {
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
            intl: Xm(qm(t.props), t.cache),
            prevConfig: qm(t.props)
          }, t
        }
        return (0, Gp.C6)(t, e), t.getDerivedStateFromProps = function(e, t) {
          var r = t.prevConfig,
            n = t.cache,
            a = qm(e);
          return function(e, t) {
            if (e === t) return !0;
            if (!e || !t) return !1;
            var r = Object.keys(e),
              n = Object.keys(t),
              a = r.length;
            if (n.length !== a) return !1;
            for (var o = 0; o < a; o++) {
              var l = r[o];
              if (e[l] !== t[l] || !Object.prototype.hasOwnProperty.call(t, l)) return !1
            }
            return !0
          }(r, a) ? null : {
            intl: Xm(a, n),
            prevConfig: a
          }
        }, t.prototype.render = function() {
          return fm(this.state.intl), m.createElement(pm, {
            value: this.state.intl
          }, this.props.children)
        }, t.displayName = "IntlProvider", t.defaultProps = hm, t
      }(m.PureComponent);
      const Wm = Km;

      function $m() {
        var e = m.useContext(gm);
        return fm(e), e
      }
      var Zm, Ym;
      ! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Zm || (Zm = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Ym || (Ym = {}));
      var Qm = function(e) {
        var t = $m(),
          r = e.value,
          n = e.children,
          a = (0, Gp.Tt)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, a))
      };

      function Jm(e) {
        var t = function(t) {
          var r = $m(),
            n = t.value,
            a = t.children,
            o = (0, Gp.Tt)(t, ["value", "children"]),
            l = "string" == typeof n ? new Date(n || 0) : n;
          return a("formatDate" === e ? r.formatDateToParts(l, o) : r.formatTimeToParts(l, o))
        };
        return t.displayName = Ym[e], t
      }

      function ew(e) {
        var t = function(t) {
          var r = $m(),
            n = t.value,
            a = t.children,
            o = (0, Gp.Tt)(t, ["value", "children"]),
            l = r[e](n, o);
          if ("function" == typeof a) return a(l);
          var i = r.textComponent || m.Fragment;
          return m.createElement(i, null, l)
        };
        return t.displayName = Zm[e], t
      }
      Qm.displayName = "FormattedNumberParts", Qm.displayName = "FormattedNumberParts", ew("formatDate"), ew("formatTime"), ew("formatNumber"), ew("formatList"), ew("formatDisplayName"), Jm("formatDate"), Jm("formatTime");
      const tw = ({
          children: e,
          locale: t,
          messages: r,
          fallback: n
        }) => (0, a.jsx)(m.Suspense, {
          fallback: n || null,
          children: (0, a.jsx)(rw, {
            locale: t,
            messages: r,
            children: e
          })
        }),
        rw = ({
          children: e,
          locale: t,
          messages: r
        }) => {
          const n = function(e) {
            const t = e;
            if ("fulfilled" === t.status) return t.value;
            throw "rejected" === t.status ? t.reason : ("pending" === t.status || (t.status = "pending", t.then((e => {
              t.status = "fulfilled", t.value = e
            }), (e => {
              t.status = "rejected", t.reason = e
            }))), t)
          }(r?.[t] ?? r["en-US"]);
          return (0, a.jsx)(Wm, {
            locale: t,
            messages: n,
            children: e
          })
        },
        nw = {
          id: "Lightbox_Open_Button_Label",
          description: "Aria-label for the lightbox open button",
          defaultMessage: "Expand image"
        };

      function aw(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }

      function ow(e, t, {
        checkForDefaultPrevented: r = !0
      } = {}) {
        return function(n) {
          if (e?.(n), !1 === r || !n.defaultPrevented) return t?.(n)
        }
      }

      function lw(e, t = []) {
        let r = [];
        const n = () => {
          const t = r.map((e => m.createContext(e)));
          return function(r) {
            const n = r?.[e] || t;
            return m.useMemo((() => ({
              [`__scope${e}`]: {
                ...r,
                [e]: n
              }
            })), [r, n])
          }
        };
        return n.scopeName = e, [function(t, n) {
          const o = m.createContext(n),
            l = r.length;

          function i(t) {
            const {
              scope: r,
              children: n,
              ...i
            } = t, s = r?.[e][l] || o, d = m.useMemo((() => i), Object.values(i));
            return (0, a.jsx)(s.Provider, {
              value: d,
              children: n
            })
          }
          return r = [...r, n], i.displayName = t + "Provider", [i, function(r, a) {
            const i = a?.[e][l] || o,
              s = m.useContext(i);
            if (s) return s;
            if (void 0 !== n) return n;
            throw new Error(`\`${r}\` must be used within \`${t}\``)
          }]
        }, iw(n, ...t)]
      }

      function iw(...e) {
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
            return m.useMemo((() => ({
              [`__scope${t.scopeName}`]: n
            })), [n])
          }
        };
        return r.scopeName = t.scopeName, r
      }

      function sw(e) {
        const t = m.useRef(e);
        return m.useEffect((() => {
          t.current = e
        })), m.useMemo((() => (...e) => t.current?.(...e)), [])
      }

      function dw({
        prop: e,
        defaultProp: t,
        onChange: r = (() => {})
      }) {
        const [n, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = m.useState(e),
            [n] = r,
            a = m.useRef(n),
            o = sw(t);
          return m.useEffect((() => {
            a.current !== n && (o(n), a.current = n)
          }), [n, a, o]), r
        }({
          defaultProp: t,
          onChange: r
        }), o = void 0 !== e, l = o ? e : n, i = sw(r);
        return [l, m.useCallback((t => {
          if (o) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && i(r)
          } else a(t)
        }), [o, e, a, i])]
      }
      var cw = m.createContext(void 0);

      function uw(e) {
        const t = m.useContext(cw);
        return e || t || "ltr"
      }

      function fw(e) {
        const t = m.useRef({
          value: e,
          previous: e
        });
        return m.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
      var hw = Boolean(globalThis?.document) ? m.useLayoutEffect : () => {};

      function vw(e) {
        const [t, r] = m.useState(void 0);
        return hw((() => {
          if (e) {
            r({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver((t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const n = t[0];
              let a, o;
              if ("borderBoxSize" in n) {
                const e = n.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                a = t.inlineSize, o = t.blockSize
              } else a = e.offsetWidth, o = e.offsetHeight;
              r({
                width: a,
                height: o
              })
            }));
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          r(void 0)
        }), [e]), t
      }

      function pw(e) {
        const t = e + "CollectionProvider",
          [r, n] = lw(t),
          [o, l] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          i = e => {
            const {
              scope: t,
              children: r
            } = e, n = m.useRef(null), l = m.useRef(new Map).current;
            return (0, a.jsx)(o, {
              scope: t,
              itemMap: l,
              collectionRef: n,
              children: r
            })
          };
        i.displayName = t;
        const s = e + "CollectionSlot",
          d = m.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = Me(t, l(s, r).collectionRef);
            return (0, a.jsx)(Re, {
              ref: o,
              children: n
            })
          }));
        d.displayName = s;
        const c = e + "CollectionItemSlot",
          u = "data-radix-collection-item",
          f = m.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, i = m.useRef(null), s = Me(t, i), d = l(c, r);
            return m.useEffect((() => (d.itemMap.set(i, {
              ref: i,
              ...o
            }), () => {
              d.itemMap.delete(i)
            }))), (0, a.jsx)(Re, {
              [u]: "",
              ref: s,
              children: n
            })
          }));
        return f.displayName = c, [{
          Provider: i,
          Slot: d,
          ItemSlot: f
        }, function(t) {
          const r = l(e + "CollectionConsumer", t);
          return m.useCallback((() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${u}]`));
            return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
          }), [r.collectionRef, r.itemMap])
        }, n]
      }
      var gw = ["PageUp", "PageDown"],
        mw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        ww = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        xw = "Slider",
        [yw, bw, jw] = pw(xw),
        [Mw, Rw] = lw(xw, [jw]),
        [Cw, Lw] = Mw(xw),
        Sw = m.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: l = 1,
            orientation: i = "horizontal",
            disabled: s = !1,
            minStepsBetweenThumbs: d = 0,
            defaultValue: c = [n],
            value: u,
            onValueChange: f = (() => {}),
            onValueCommit: h = (() => {}),
            inverted: v = !1,
            ...p
          } = e, g = m.useRef(new Set), w = m.useRef(0), x = "horizontal" === i ? Pw : Dw, [y = [], b] = dw({
            prop: u,
            defaultProp: c,
            onChange: e => {
              const t = [...g.current];
              t[w.current]?.focus(), f(e)
            }
          }), j = m.useRef(y);

          function M(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const a = function(e) {
                return (String(e).split(".")[1] || "").length
              }(l),
              i = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / l) * l + n, a),
              s = aw(i, [n, o]);
            b(((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort(((e, t) => e - t))
              }(e, s, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map(((t, r) => e[r + 1] - t))
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, d * l)) {
                w.current = n.indexOf(s);
                const t = String(n) !== String(e);
                return t && r && h(n), t ? n : e
              }
              return e
            }))
          }
          return (0, a.jsx)(Cw, {
            scope: e.__scopeSlider,
            name: r,
            disabled: s,
            min: n,
            max: o,
            valueIndexToChangeRef: w,
            thumbs: g.current,
            values: y,
            orientation: i,
            children: (0, a.jsx)(yw.Provider, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(yw.Slot, {
                scope: e.__scopeSlider,
                children: (0, a.jsx)(x, {
                  "aria-disabled": s,
                  "data-disabled": s ? "" : void 0,
                  ...p,
                  ref: t,
                  onPointerDown: ow(p.onPointerDown, (() => {
                    s || (j.current = y)
                  })),
                  min: n,
                  max: o,
                  inverted: v,
                  onSlideStart: s ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(y, e);
                    M(e, t)
                  },
                  onSlideMove: s ? void 0 : function(e) {
                    M(e, w.current)
                  },
                  onSlideEnd: s ? void 0 : function() {
                    const e = j.current[w.current];
                    y[w.current] !== e && h(y)
                  },
                  onHomeKeyDown: () => !s && M(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !s && M(o, y.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!s) {
                      const r = gw.includes(e.key) || e.shiftKey && mw.includes(e.key) ? 10 : 1,
                        n = w.current;
                      M(y[n] + l * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Sw.displayName = xw;
      var [Ew, _w] = Mw(xw, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Pw = m.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: l,
          onSlideStart: i,
          onSlideMove: s,
          onSlideEnd: d,
          onStepKeyDown: c,
          ...u
        } = e, [f, h] = m.useState(null), v = Me(t, (e => h(e))), p = m.useRef(), g = uw(o), w = "ltr" === g, x = w && !l || !w && l;

        function y(e) {
          const t = p.current || f.getBoundingClientRect(),
            a = Gw([0, t.width], x ? [r, n] : [n, r]);
          return p.current = t, a(e - t.left)
        }
        return (0, a.jsx)(Ew, {
          scope: e.__scopeSlider,
          startEdge: x ? "left" : "right",
          endEdge: x ? "right" : "left",
          direction: x ? 1 : -1,
          size: "width",
          children: (0, a.jsx)(Aw, {
            dir: g,
            "data-orientation": "horizontal",
            ...u,
            ref: v,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = y(e.clientX);
              i?.(t)
            },
            onSlideMove: e => {
              const t = y(e.clientX);
              s?.(t)
            },
            onSlideEnd: () => {
              p.current = void 0, d?.()
            },
            onStepKeyDown: e => {
              const t = ww[x ? "from-left" : "from-right"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Dw = m.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: l,
          onSlideMove: i,
          onSlideEnd: s,
          onStepKeyDown: d,
          ...c
        } = e, u = m.useRef(null), f = Me(t, u), h = m.useRef(), v = !o;

        function p(e) {
          const t = h.current || u.current.getBoundingClientRect(),
            a = Gw([0, t.height], v ? [n, r] : [r, n]);
          return h.current = t, a(e - t.top)
        }
        return (0, a.jsx)(Ew, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, a.jsx)(Aw, {
            "data-orientation": "vertical",
            ...c,
            ref: f,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = p(e.clientY);
              l?.(t)
            },
            onSlideMove: e => {
              const t = p(e.clientY);
              i?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, s?.()
            },
            onStepKeyDown: e => {
              const t = ww[v ? "from-bottom" : "from-top"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Aw = m.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: l,
          onHomeKeyDown: i,
          onEndKeyDown: s,
          onStepKeyDown: d,
          ...c
        } = e, u = Lw(xw, r);
        return (0, a.jsx)(_e.span, {
          ...c,
          ref: t,
          onKeyDown: ow(e.onKeyDown, (e => {
            "Home" === e.key ? (i(e), e.preventDefault()) : "End" === e.key ? (s(e), e.preventDefault()) : gw.concat(mw).includes(e.key) && (d(e), e.preventDefault())
          })),
          onPointerDown: ow(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), u.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: ow(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: ow(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), l(e))
          }))
        })
      })), Iw = "SliderTrack", Tw = m.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = Lw(Iw, r);
        return (0, a.jsx)(_e.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      Tw.displayName = Iw;
      var Nw = "SliderRange",
        Ow = m.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = Lw(Nw, r), l = _w(Nw, r), i = Me(t, m.useRef(null)), s = o.values.length, d = o.values.map((e => Vw(e, o.min, o.max))), c = s > 1 ? Math.min(...d) : 0, u = 100 - Math.max(...d);
          return (0, a.jsx)(_e.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: i,
            style: {
              ...e.style,
              [l.startEdge]: c + "%",
              [l.endEdge]: u + "%"
            }
          })
        }));
      Ow.displayName = Nw;
      var kw = "SliderThumb",
        Hw = m.forwardRef(((e, t) => {
          const r = bw(e.__scopeSlider),
            [n, o] = m.useState(null),
            l = Me(t, (e => o(e))),
            i = m.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, a.jsx)(Bw, {
            ...e,
            ref: l,
            index: i
          })
        })),
        Bw = m.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...l
          } = e, i = Lw(kw, r), s = _w(kw, r), [d, c] = m.useState(null), u = Me(t, (e => c(e))), f = !d || Boolean(d.closest("form")), h = vw(d), v = i.values[n], p = void 0 === v ? 0 : Vw(v, i.min, i.max), g = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, i.values.length), w = h?.[s.size], x = w ? function(e, t, r) {
            const n = e / 2;
            return (n - Gw([0, 50], [0, n])(t) * r) * r
          }(w, p, s.direction) : 0;
          return m.useEffect((() => {
            if (d) return i.thumbs.add(d), () => {
              i.thumbs.delete(d)
            }
          }), [d, i.thumbs]), (0, a.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [s.startEdge]: `calc(${p}% + ${x}px)`
            },
            children: [(0, a.jsx)(yw.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, a.jsx)(_e.span, {
                role: "slider",
                "aria-label": e["aria-label"] || g,
                "aria-valuemin": i.min,
                "aria-valuenow": v,
                "aria-valuemax": i.max,
                "aria-orientation": i.orientation,
                "data-orientation": i.orientation,
                "data-disabled": i.disabled ? "" : void 0,
                tabIndex: i.disabled ? void 0 : 0,
                ...l,
                ref: u,
                style: void 0 === v ? {
                  display: "none"
                } : e.style,
                onFocus: ow(e.onFocus, (() => {
                  i.valueIndexToChangeRef.current = n
                }))
              })
            }), f && (0, a.jsx)(zw, {
              name: o ?? (i.name ? i.name + (i.values.length > 1 ? "[]" : "") : void 0),
              value: v
            }, n)]
          })
        }));
      Hw.displayName = kw;
      var zw = e => {
        const {
          value: t,
          ...r
        } = e, n = m.useRef(null), o = fw(t);
        return m.useEffect((() => {
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

      function Vw(e, t, r) {
        return aw(100 / (r - t) * (e - t), [0, 100])
      }

      function Gw(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      var Fw = Sw,
        Uw = Tw,
        Xw = Ow,
        qw = Hw;
      const Kw = {
          id: "Lightbox_Close_Button_Label",
          description: "Aria-label for the lightbox close button",
          defaultMessage: "Close lightbox"
        },
        Ww = {
          id: "Lightbox_Close_Button_Tooltip",
          description: "Visible tooltip for the lightbox close button",
          defaultMessage: "Press {shortcut}"
        },
        $w = {
          id: "Lightbox_Zoom_In_Button_Label",
          description: "Aria-label for the lightbox zoom in button",
          defaultMessage: "Zoom in"
        },
        Zw = {
          id: "Lightbox_Zoom_In_Button_Tooltip",
          description: "Visible tooltip for the lightbox zoom in button",
          defaultMessage: "Press {shortcut}"
        },
        Yw = {
          id: "Lightbox_Zoom_Out_Button_Label",
          description: "Aria-label for the lightbox zoom out button",
          defaultMessage: "Zoom out"
        },
        Qw = {
          id: "Lightbox_Zoom_Out_Button__Tooltip",
          description: "Visible tooltip for the lightbox zoom out button",
          defaultMessage: "Press {shortcut}"
        },
        Jw = {
          id: "Lightbox_Reset_Zoom_Button_Label",
          description: "Aria-label for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Reset"
        },
        ex = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip",
          description: "Visible tooltip for the lightbox reset button (resets zoom and position)",
          defaultMessage: "Press {shortcut}"
        },
        tx = {
          id: "Lightbox_Zoom_Slider_Label",
          description: "Aria-label for the lightbox zoom slider",
          defaultMessage: "Zoom level"
        },
        rx = {
          id: "Lightbox_Zoom_Slider_Tooltip",
          description: "Visible tooltip for the lightbox zoom slider",
          defaultMessage: "{zoom}%"
        },
        nx = {
          id: "Lightbox_Download_Button_Label",
          description: "Aria-label for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        },
        ax = {
          id: "Lightbox_Download_Button_Tooltip",
          description: "Visible tooltip for the lightbox download button (downloads the image)",
          defaultMessage: "Download"
        };

      function ox() {
        return ox = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, ox.apply(this, arguments)
      }
      var lx = ["shift", "alt", "meta", "mod", "ctrl"],
        ix = {
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

      function sx(e) {
        return (ix[e] || e).trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function dx(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function cx(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return sx(e)
        }));
        return ox({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !lx.includes(e)
          })),
          description: r
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && hx([sx(e.key), sx(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && vx([sx(e.key), sx(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        ux.clear()
      }));
      var ux = new Set;

      function fx(e) {
        return Array.isArray(e)
      }

      function hx(e) {
        var t = Array.isArray(e) ? e : [e];
        ux.has("meta") && ux.forEach((function(e) {
          return ! function(e) {
            return lx.includes(e)
          }(e) && ux.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return ux.add(e.toLowerCase())
        }))
      }

      function vx(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? ux.clear() : t.forEach((function(e) {
          return ux.delete(e.toLowerCase())
        }))
      }

      function px(e, t) {
        var r = e.target;
        void 0 === t && (t = !1);
        var n = r && r.tagName;
        return fx(t) ? Boolean(n && t && t.some((function(e) {
          return e.toLowerCase() === n.toLowerCase()
        }))) : Boolean(n && t && !0 === t)
      }
      var gx = (0, m.createContext)(void 0);

      function mx(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, a.jsx)(gx.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function wx(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && wx(e[n], t[n])
        }), !0) : e === t
      }
      var xx = (0, m.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        yx = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, m.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            l = o[0],
            i = o[1],
            s = (0, m.useState)([]),
            d = s[0],
            c = s[1],
            u = (0, m.useCallback)((function(e) {
              i((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            f = (0, m.useCallback)((function(e) {
              i((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            h = (0, m.useCallback)((function(e) {
              i((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            v = (0, m.useCallback)((function(e) {
              c((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            p = (0, m.useCallback)((function(e) {
              c((function(t) {
                return t.filter((function(t) {
                  return !wx(t, e)
                }))
              }))
            }), []);
          return (0, a.jsx)(xx.Provider, {
            value: {
              enabledScopes: l,
              hotkeys: d,
              enableScope: u,
              disableScope: f,
              toggleScope: h
            },
            children: (0, a.jsx)(mx, {
              addHotkey: v,
              removeHotkey: p,
              children: n
            })
          })
        },
        bx = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        jx = "undefined" != typeof window ? m.useLayoutEffect : m.useEffect;

      function Mx(e, t, r, n) {
        var a = (0, m.useRef)(null),
          o = (0, m.useRef)(!1),
          l = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          i = fx(e) ? e.join(null == l ? void 0 : l.splitKey) : e,
          s = r instanceof Array ? r : n instanceof Array ? n : void 0,
          d = (0, m.useCallback)(t, null != s ? s : []),
          c = (0, m.useRef)(d);
        c.current = s ? d : t;
        var u = function(e) {
            var t = (0, m.useRef)(void 0);
            return wx(t.current, e) || (t.current = e), t.current
          }(l),
          f = (0, m.useContext)(xx).enabledScopes,
          h = (0, m.useContext)(gx);
        return jx((function() {
          if (!1 !== (null == u ? void 0 : u.enabled) && (e = f, t = null == u ? void 0 : u.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !px(e, ["input", "textarea", "select"]) || px(e, null == u ? void 0 : u.enableOnFormTags)) {
                  if (null !== a.current) {
                    var n = a.current.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== a.current && !a.current.contains(n.activeElement)) return void bx(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != u && u.enableOnContentEditable) && dx(i, null == u ? void 0 : u.splitKey).forEach((function(r) {
                    var n, a = cx(r, null == u ? void 0 : u.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, a, o = t.alt,
                          l = t.meta,
                          i = t.mod,
                          s = t.shift,
                          d = t.ctrl,
                          c = t.keys,
                          u = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          v = e.metaKey,
                          p = e.shiftKey,
                          g = e.altKey,
                          m = sx(f),
                          w = u.toLowerCase();
                        if (!(null != c && c.includes(m) || null != c && c.includes(w) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!r) {
                          if (o === !g && "alt" !== w) return !1;
                          if (s === !p && "shift" !== w) return !1;
                          if (i) {
                            if (!v && !h) return !1
                          } else {
                            if (l === !v && "meta" !== w && "os" !== w) return !1;
                            if (d === !h && "ctrl" !== w && "control" !== w) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(w) && !c.includes(m)) || (c ? (void 0 === a && (a = ","), (fx(n = c) ? n : n.split(a)).every((function(e) {
                          return ux.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, a, null == u ? void 0 : u.ignoreModifiers) || null != (n = a.keys) && n.includes("*")) {
                      if (null != u && null != u.ignoreEventWhen && u.ignoreEventWhen(e)) return;
                      if (t && o.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, a, null == u ? void 0 : u.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, a, null == u ? void 0 : u.enabled)) return void bx(e);
                      c.current(e, a), t || (o.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (hx(sx(e.code)), (void 0 === (null == u ? void 0 : u.keydown) && !0 !== (null == u ? void 0 : u.keyup) || null != u && u.keydown) && r(e))
              },
              s = function(e) {
                void 0 !== e.key && (vx(sx(e.code)), o.current = !1, null != u && u.keyup && r(e, !0))
              },
              d = a.current || (null == l ? void 0 : l.document) || document;
            return d.addEventListener("keyup", s), d.addEventListener("keydown", n), h && dx(i, null == u ? void 0 : u.splitKey).forEach((function(e) {
                return h.addHotkey(cx(e, null == u ? void 0 : u.combinationKey, null == u ? void 0 : u.description))
              })),
              function() {
                d.removeEventListener("keyup", s), d.removeEventListener("keydown", n), h && dx(i, null == u ? void 0 : u.splitKey).forEach((function(e) {
                  return h.removeHotkey(cx(e, null == u ? void 0 : u.combinationKey, null == u ? void 0 : u.description))
                }))
              }
          }
        }), [i, u, f]), a
      }

      function Rx(e) {
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

      function Cx(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Lx(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cx(Object(r), !0).forEach((function(t) {
            var n, a, o;
            n = e, a = t, o = r[t], (a = Rx(a)) in n ? Object.defineProperty(n, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[a] = o
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cx(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Sx(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Ex = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var a;
            if (e[n] !== (null !== (a = t[n]) && void 0 !== a ? a : r[n])) return !1
          }
          return !0
        },
        _x = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Lx(Lx({}, e.defaultVariants), t);
            for (var a in n) {
              var o, l = null !== (o = n[a]) && void 0 !== o ? o : e.defaultVariants[a];
              if (null != l) {
                var i = l;
                "boolean" == typeof i && (i = !0 === i ? "true" : "false");
                var s = e.variantClassNames[a][i];
                s && (r += " " + s)
              }
            }
            for (var [d, c] of e.compoundVariants) Ex(d, n, e.defaultVariants) && (r += " " + c);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sx(e.variantClassNames, (e => Sx(e, (e => e.split(" ")[0]))))
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
      const Px = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Dx = (0, m.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          icon: o,
          label: l,
          appearance: i,
          size: s = "MD",
          fullWidth: d = !1,
          onClick: c,
          ...u
        }, f) => {
          const v = Bd((0, m.useRef)(null), f),
            {
              events: p,
              others: w
            } = g(u, {
              onPress: !1
            }),
            {
              buttonProps: x,
              isPressed: y
            } = bc({
              ...w,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => w.onPress?.(e) ?? c?.(e)
            }, v),
            b = h({
              ...x,
              className: r
            }, {
              ...p,
              role: "button",
              "data-pressed": y,
              "data-testid": e,
              className: _x({
                appearance: i,
                size: s,
                fullWidth: d
              })
            }),
            M = n[o],
            C = t ? j : "button",
            L = Px[s];
          return (0, a.jsx)(C, {
            ref: v,
            ...b,
            children: (0, a.jsx)(R, {
              children: M && (0, a.jsx)(M, {
                label: l || "",
                size: L
              })
            })
          })
        })),
        Ax = (0, m.forwardRef)((({
          shortcut: e,
          isInline: t,
          onShortcut: r
        }, n) => (Mx(e, (e => r?.(e)), [r]), (0, a.jsx)(le, {
          className: i("foundry_bc732x0", {
            foundry_bc732x1: t
          }),
          asChild: !0,
          children: (0, a.jsx)("kbd", {
            ref: n,
            children: e
          })
        }))));
      var Ix, Tx = "dismissableLayer.update",
        Nx = m.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        Ox = m.forwardRef(((e, t) => {
          const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: n,
            onPointerDownOutside: o,
            onFocusOutside: l,
            onInteractOutside: i,
            onDismiss: s,
            ...d
          } = e, c = m.useContext(Nx), [u, f] = m.useState(null), h = u?.ownerDocument ?? globalThis?.document, [, v] = m.useState({}), p = Me(t, (e => f(e))), g = Array.from(c.layers), [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(w), y = u ? g.indexOf(u) : -1, b = c.layersWithOutsidePointerEventsDisabled.size > 0, j = y >= x, M = function(e, t = globalThis?.document) {
            const r = sw(e),
              n = m.useRef(!1),
              a = m.useRef((() => {}));
            return m.useEffect((() => {
              const e = e => {
                  if (e.target && !n.current) {
                    let n = function() {
                      Hx("dismissableLayer.pointerDownOutside", r, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", a.current), a.current = n, t.addEventListener("click", a.current, {
                      once: !0
                    })) : n()
                  } else t.removeEventListener("click", a.current);
                  n.current = !1
                },
                o = window.setTimeout((() => {
                  t.addEventListener("pointerdown", e)
                }), 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", a.current)
              }
            }), [t, r]), {
              onPointerDownCapture: () => n.current = !0
            }
          }((e => {
            const t = e.target,
              r = [...c.branches].some((e => e.contains(t)));
            j && !r && (o?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h), R = function(e, t = globalThis?.document) {
            const r = sw(e),
              n = m.useRef(!1);
            return m.useEffect((() => {
              const e = e => {
                e.target && !n.current && Hx("dismissableLayer.focusOutside", r, {
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
            [...c.branches].some((e => e.contains(t))) || (l?.(e), i?.(e), e.defaultPrevented || s?.())
          }), h);
          return function(e, t = globalThis?.document) {
            const r = sw(e);
            m.useEffect((() => {
              const e = e => {
                "Escape" === e.key && r(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }), [r, t])
          }((e => {
            y === c.layers.size - 1 && (n?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()))
          }), h), m.useEffect((() => {
            if (u) return r && (0 === c.layersWithOutsidePointerEventsDisabled.size && (Ix = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), kx(), () => {
              r && 1 === c.layersWithOutsidePointerEventsDisabled.size && (h.body.style.pointerEvents = Ix)
            }
          }), [u, h, r, c]), m.useEffect((() => () => {
            u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), kx())
          }), [u, c]), m.useEffect((() => {
            const e = () => v({});
            return document.addEventListener(Tx, e), () => document.removeEventListener(Tx, e)
          }), []), (0, a.jsx)(_e.div, {
            ...d,
            ref: p,
            style: {
              pointerEvents: b ? j ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: ow(e.onFocusCapture, R.onFocusCapture),
            onBlurCapture: ow(e.onBlurCapture, R.onBlurCapture),
            onPointerDownCapture: ow(e.onPointerDownCapture, M.onPointerDownCapture)
          })
        }));

      function kx() {
        const e = new CustomEvent(Tx);
        document.dispatchEvent(e)
      }

      function Hx(e, t, r, {
        discrete: n
      }) {
        const a = r.originalEvent.target,
          o = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: r
          });
        t && a.addEventListener(e, t, {
          once: !0
        }), n ? function(e, t) {
          e && S.flushSync((() => e.dispatchEvent(t)))
        }(a, o) : a.dispatchEvent(o)
      }
      Ox.displayName = "DismissableLayer", m.forwardRef(((e, t) => {
        const r = m.useContext(Nx),
          n = m.useRef(null),
          o = Me(t, n);
        return m.useEffect((() => {
          const e = n.current;
          if (e) return r.branches.add(e), () => {
            r.branches.delete(e)
          }
        }), [r.branches]), (0, a.jsx)(_e.div, {
          ...e,
          ref: o
        })
      })).displayName = "DismissableLayerBranch";
      var Bx = w["useId".toString()] || (() => {}),
        zx = 0;

      function Vx(e) {
        const [t, r] = m.useState(Bx());
        return hw((() => {
          e || r((e => e ?? String(zx++)))
        }), [e]), e || (t ? `radix-${t}` : "")
      }
      var Gx = r(23340),
        Fx = r(31202),
        Ux = "undefined" != typeof document ? m.useLayoutEffect : m.useEffect;

      function Xx(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let r, n, a;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (r = e.length, r != t.length) return !1;
            for (n = r; 0 != n--;)
              if (!Xx(e[n], t[n])) return !1;
            return !0
          }
          if (a = Object.keys(e), r = a.length, r !== Object.keys(t).length) return !1;
          for (n = r; 0 != n--;)
            if (!{}.hasOwnProperty.call(t, a[n])) return !1;
          for (n = r; 0 != n--;) {
            const r = a[n];
            if (!("_owner" === r && e.$$typeof || Xx(e[r], t[r]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function qx(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Kx(e, t) {
        const r = qx(e);
        return Math.round(t * r) / r
      }

      function Wx(e) {
        const t = m.useRef(e);
        return Ux((() => {
          t.current = e
        })), t
      }
      var $x = m.forwardRef(((e, t) => {
        const {
          children: r,
          width: n = 10,
          height: o = 5,
          ...l
        } = e;
        return (0, a.jsx)(_e.svg, {
          ...l,
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
      $x.displayName = "Arrow";
      var Zx = $x,
        Yx = "Popper",
        [Qx, Jx] = lw(Yx),
        [ey, ty] = Qx(Yx),
        ry = e => {
          const {
            __scopePopper: t,
            children: r
          } = e, [n, o] = m.useState(null);
          return (0, a.jsx)(ey, {
            scope: t,
            anchor: n,
            onAnchorChange: o,
            children: r
          })
        };
      ry.displayName = Yx;
      var ny = "PopperAnchor",
        ay = m.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            virtualRef: n,
            ...o
          } = e, l = ty(ny, r), i = m.useRef(null), s = Me(t, i);
          return m.useEffect((() => {
            l.onAnchorChange(n?.current || i.current)
          })), n ? null : (0, a.jsx)(_e.div, {
            ...o,
            ref: s
          })
        }));
      ay.displayName = ny;
      var oy = "PopperContent",
        [ly, iy] = Qx(oy),
        sy = m.forwardRef(((e, t) => {
          const {
            __scopePopper: r,
            side: n = "bottom",
            sideOffset: o = 0,
            align: l = "center",
            alignOffset: i = 0,
            arrowPadding: s = 0,
            avoidCollisions: d = !0,
            collisionBoundary: c = [],
            collisionPadding: u = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: v = "optimized",
            onPlaced: p,
            ...g
          } = e, w = ty(oy, r), [x, y] = m.useState(null), b = Me(t, (e => y(e))), [j, M] = m.useState(null), R = vw(j), C = R?.width ?? 0, L = R?.height ?? 0, E = n + ("center" !== l ? "-" + l : ""), _ = "number" == typeof u ? u : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...u
          }, P = Array.isArray(c) ? c : [c], D = P.length > 0, A = {
            padding: _,
            boundary: P.filter(fy),
            altBoundary: D
          }, {
            refs: I,
            floatingStyles: T,
            placement: N,
            isPositioned: O,
            middlewareData: k
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: r = "absolute",
              middleware: n = [],
              platform: a,
              elements: {
                reference: o,
                floating: l
              } = {},
              transform: i = !0,
              whileElementsMounted: s,
              open: d
            } = e, [c, u] = m.useState({
              x: 0,
              y: 0,
              strategy: r,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [f, h] = m.useState(n);
            Xx(f, n) || h(n);
            const [v, p] = m.useState(null), [g, w] = m.useState(null), x = m.useCallback((e => {
              e != M.current && (M.current = e, p(e))
            }), [p]), y = m.useCallback((e => {
              e !== R.current && (R.current = e, w(e))
            }), [w]), b = o || v, j = l || g, M = m.useRef(null), R = m.useRef(null), C = m.useRef(c), L = Wx(s), E = Wx(a), _ = m.useCallback((() => {
              if (!M.current || !R.current) return;
              const e = {
                placement: t,
                strategy: r,
                middleware: f
              };
              E.current && (e.platform = E.current), (0, Fx.rD)(M.current, R.current, e).then((e => {
                const t = {
                  ...e,
                  isPositioned: !0
                };
                P.current && !Xx(C.current, t) && (C.current = t, S.flushSync((() => {
                  u(t)
                })))
              }))
            }), [f, t, r, E]);
            Ux((() => {
              !1 === d && C.current.isPositioned && (C.current.isPositioned = !1, u((e => ({
                ...e,
                isPositioned: !1
              }))))
            }), [d]);
            const P = m.useRef(!1);
            Ux((() => (P.current = !0, () => {
              P.current = !1
            })), []), Ux((() => {
              if (b && (M.current = b), j && (R.current = j), b && j) {
                if (L.current) return L.current(b, j, _);
                _()
              }
            }), [b, j, _, L]);
            const D = m.useMemo((() => ({
                reference: M,
                floating: R,
                setReference: x,
                setFloating: y
              })), [x, y]),
              A = m.useMemo((() => ({
                reference: b,
                floating: j
              })), [b, j]),
              I = m.useMemo((() => {
                const e = {
                  position: r,
                  left: 0,
                  top: 0
                };
                if (!A.floating) return e;
                const t = Kx(A.floating, c.x),
                  n = Kx(A.floating, c.y);
                return i ? {
                  ...e,
                  transform: "translate(" + t + "px, " + n + "px)",
                  ...qx(A.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: r,
                  left: t,
                  top: n
                }
              }), [r, i, A.floating, c.x, c.y]);
            return m.useMemo((() => ({
              ...c,
              update: _,
              refs: D,
              elements: A,
              floatingStyles: I
            })), [c, _, D, A, I])
          }({
            strategy: "fixed",
            placement: E,
            whileElementsMounted: (...e) => (0, Fx.ll)(...e, {
              animationFrame: "always" === v
            }),
            elements: {
              reference: w.anchor
            },
            middleware: [(0, Gx.cY)({
              mainAxis: o + L,
              alignmentAxis: i
            }), d && (0, Gx.BN)({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === f ? (0, Gx.ER)() : void 0,
              ...A
            }), d && (0, Gx.UU)({
              ...A
            }), (0, Gx.Ej)({
              ...A,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: r,
                availableHeight: n
              }) => {
                const {
                  width: a,
                  height: o
                } = t.reference, l = e.floating.style;
                l.setProperty("--radix-popper-available-width", `${r}px`), l.setProperty("--radix-popper-available-height", `${n}px`), l.setProperty("--radix-popper-anchor-width", `${a}px`), l.setProperty("--radix-popper-anchor-height", `${o}px`)
              }
            }), j && (H = {
              element: j,
              padding: s
            }, {
              name: "arrow",
              options: H,
              fn(e) {
                const {
                  element: t,
                  padding: r
                } = "function" == typeof H ? H(e) : H;
                return t && (n = t, {}.hasOwnProperty.call(n, "current")) ? null != t.current ? (0, Gx.UE)({
                  element: t.current,
                  padding: r
                }).fn(e) : {} : t ? (0, Gx.UE)({
                  element: t,
                  padding: r
                }).fn(e) : {};
                var n
              }
            }), hy({
              arrowWidth: C,
              arrowHeight: L
            }), h && (0, Gx.jD)({
              strategy: "referenceHidden",
              ...A
            })]
          });
          var H;
          const [B, z] = vy(N), V = sw(p);
          hw((() => {
            O && V?.()
          }), [O, V]);
          const G = k.arrow?.x,
            F = k.arrow?.y,
            U = 0 !== k.arrow?.centerOffset,
            [X, q] = m.useState();
          return hw((() => {
            x && q(window.getComputedStyle(x).zIndex)
          }), [x]), (0, a.jsx)("div", {
            ref: I.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...T,
              transform: O ? T.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: X,
              "--radix-popper-transform-origin": [k.transformOrigin?.x, k.transformOrigin?.y].join(" "),
              ...k.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, a.jsx)(ly, {
              scope: r,
              placedSide: B,
              onArrowChange: M,
              arrowX: G,
              arrowY: F,
              shouldHideArrow: U,
              children: (0, a.jsx)(_e.div, {
                "data-side": B,
                "data-align": z,
                ...g,
                ref: b,
                style: {
                  ...g.style,
                  animation: O ? void 0 : "none"
                }
              })
            })
          })
        }));
      sy.displayName = oy;
      var dy = "PopperArrow",
        cy = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        uy = m.forwardRef((function(e, t) {
          const {
            __scopePopper: r,
            ...n
          } = e, o = iy(dy, r), l = cy[o.placedSide];
          return (0, a.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [l]: 0,
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
            children: (0, a.jsx)(Zx, {
              ...n,
              ref: t,
              style: {
                ...n.style,
                display: "block"
              }
            })
          })
        }));

      function fy(e) {
        return null !== e
      }
      uy.displayName = dy;
      var hy = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: r,
            rects: n,
            middlewareData: a
          } = t, o = 0 !== a.arrow?.centerOffset, l = o ? 0 : e.arrowWidth, i = o ? 0 : e.arrowHeight, [s, d] = vy(r), c = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [d], u = (a.arrow?.x ?? 0) + l / 2, f = (a.arrow?.y ?? 0) + i / 2;
          let h = "",
            v = "";
          return "bottom" === s ? (h = o ? c : `${u}px`, v = -i + "px") : "top" === s ? (h = o ? c : `${u}px`, v = `${n.floating.height+i}px`) : "right" === s ? (h = -i + "px", v = o ? c : `${f}px`) : "left" === s && (h = `${n.floating.width+i}px`, v = o ? c : `${f}px`), {
            data: {
              x: h,
              y: v
            }
          }
        }
      });

      function vy(e) {
        const [t, r = "center"] = e.split("-");
        return [t, r]
      }
      var py = ry,
        gy = ay,
        my = sy,
        wy = uy,
        xy = m.forwardRef(((e, t) => {
          const {
            container: r,
            ...n
          } = e, [o, l] = m.useState(!1);
          hw((() => l(!0)), []);
          const i = r || o && globalThis?.document?.body;
          return i ? S.createPortal((0, a.jsx)(_e.div, {
            ...n,
            ref: t
          }), i) : null
        }));
      xy.displayName = "Portal";
      var yy = e => {
        const {
          present: t,
          children: r
        } = e, n = function(e) {
          const [t, r] = m.useState(), n = m.useRef({}), a = m.useRef(e), o = m.useRef("none"), l = e ? "mounted" : "unmounted", [i, s] = function(e, t) {
            return m.useReducer(((e, r) => t[e][r] ?? e), e)
          }(l, {
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
          return m.useEffect((() => {
            const e = by(n.current);
            o.current = "mounted" === i ? e : "none"
          }), [i]), hw((() => {
            const t = n.current,
              r = a.current;
            if (r !== e) {
              const n = o.current,
                l = by(t);
              s(e ? "MOUNT" : "none" === l || "none" === t?.display ? "UNMOUNT" : r && n !== l ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e
            }
          }), [e, s]), hw((() => {
            if (t) {
              const e = e => {
                  const r = by(n.current).includes(e.animationName);
                  e.target === t && r && S.flushSync((() => s("ANIMATION_END")))
                },
                r = e => {
                  e.target === t && (o.current = by(n.current))
                };
              return t.addEventListener("animationstart", r), t.addEventListener("animationcancel", e), t.addEventListener("animationend", e), () => {
                t.removeEventListener("animationstart", r), t.removeEventListener("animationcancel", e), t.removeEventListener("animationend", e)
              }
            }
            s("ANIMATION_END")
          }), [t, s]), {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: m.useCallback((e => {
              e && (n.current = getComputedStyle(e)), r(e)
            }), [])
          }
        }(t), a = "function" == typeof r ? r({
          present: n.isPresent
        }) : m.Children.only(r), o = Me(n.ref, function(e) {
          let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
            r = t && "isReactWarning" in t && t.isReactWarning;
          return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
        }(a));
        return "function" == typeof r || n.isPresent ? m.cloneElement(a, {
          ref: o
        }) : null
      };

      function by(e) {
        return e?.animationName || "none"
      }
      yy.displayName = "Presence";
      var [jy, My] = lw("Tooltip", [Jx]), Ry = Jx(), Cy = "TooltipProvider", Ly = 700, Sy = "tooltip.open", [Ey, _y] = jy(Cy), Py = e => {
        const {
          __scopeTooltip: t,
          delayDuration: r = Ly,
          skipDelayDuration: n = 300,
          disableHoverableContent: o = !1,
          children: l
        } = e, [i, s] = m.useState(!0), d = m.useRef(!1), c = m.useRef(0);
        return m.useEffect((() => {
          const e = c.current;
          return () => window.clearTimeout(e)
        }), []), (0, a.jsx)(Ey, {
          scope: t,
          isOpenDelayed: i,
          delayDuration: r,
          onOpen: m.useCallback((() => {
            window.clearTimeout(c.current), s(!1)
          }), []),
          onClose: m.useCallback((() => {
            window.clearTimeout(c.current), c.current = window.setTimeout((() => s(!0)), n)
          }), [n]),
          isPointerInTransitRef: d,
          onPointerInTransitChange: m.useCallback((e => {
            d.current = e
          }), []),
          disableHoverableContent: o,
          children: l
        })
      };
      Py.displayName = Cy;
      var Dy = "Tooltip",
        [Ay, Iy] = jy(Dy),
        Ty = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o = !1,
            onOpenChange: l,
            disableHoverableContent: i,
            delayDuration: s
          } = e, d = _y(Dy, e.__scopeTooltip), c = Ry(t), [u, f] = m.useState(null), h = Vx(), v = m.useRef(0), p = i ?? d.disableHoverableContent, g = s ?? d.delayDuration, w = m.useRef(!1), [x = !1, y] = dw({
            prop: n,
            defaultProp: o,
            onChange: e => {
              e ? (d.onOpen(), document.dispatchEvent(new CustomEvent(Sy))) : d.onClose(), l?.(e)
            }
          }), b = m.useMemo((() => x ? w.current ? "delayed-open" : "instant-open" : "closed"), [x]), j = m.useCallback((() => {
            window.clearTimeout(v.current), w.current = !1, y(!0)
          }), [y]), M = m.useCallback((() => {
            window.clearTimeout(v.current), y(!1)
          }), [y]), R = m.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              w.current = !0, y(!0)
            }), g)
          }), [g, y]);
          return m.useEffect((() => () => window.clearTimeout(v.current)), []), (0, a.jsx)(py, {
            ...c,
            children: (0, a.jsx)(Ay, {
              scope: t,
              contentId: h,
              open: x,
              stateAttribute: b,
              trigger: u,
              onTriggerChange: f,
              onTriggerEnter: m.useCallback((() => {
                d.isOpenDelayed ? R() : j()
              }), [d.isOpenDelayed, R, j]),
              onTriggerLeave: m.useCallback((() => {
                p ? M() : window.clearTimeout(v.current)
              }), [M, p]),
              onOpen: j,
              onClose: M,
              disableHoverableContent: p,
              children: r
            })
          })
        };
      Ty.displayName = Dy;
      var Ny = "TooltipTrigger",
        Oy = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Iy(Ny, r), l = _y(Ny, r), i = Ry(r), s = Me(t, m.useRef(null), o.onTriggerChange), d = m.useRef(!1), c = m.useRef(!1), u = m.useCallback((() => d.current = !1), []);
          return m.useEffect((() => () => document.removeEventListener("pointerup", u)), [u]), (0, a.jsx)(gy, {
            asChild: !0,
            ...i,
            children: (0, a.jsx)(_e.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: s,
              onPointerMove: ow(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (c.current || l.isPointerInTransitRef.current || (o.onTriggerEnter(), c.current = !0))
              })),
              onPointerLeave: ow(e.onPointerLeave, (() => {
                o.onTriggerLeave(), c.current = !1
              })),
              onPointerDown: ow(e.onPointerDown, (() => {
                d.current = !0, document.addEventListener("pointerup", u, {
                  once: !0
                })
              })),
              onFocus: ow(e.onFocus, (() => {
                d.current || o.onOpen()
              })),
              onBlur: ow(e.onBlur, o.onClose),
              onClick: ow(e.onClick, o.onClose)
            })
          })
        }));
      Oy.displayName = Ny;
      var ky = "TooltipPortal",
        [Hy, By] = jy(ky, {
          forceMount: void 0
        }),
        zy = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, l = Iy(ky, t);
          return (0, a.jsx)(Hy, {
            scope: t,
            forceMount: r,
            children: (0, a.jsx)(yy, {
              present: r || l.open,
              children: (0, a.jsx)(xy, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      zy.displayName = ky;
      var Vy = "TooltipContent",
        Gy = m.forwardRef(((e, t) => {
          const r = By(Vy, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...l
            } = e,
            i = Iy(Vy, e.__scopeTooltip);
          return (0, a.jsx)(yy, {
            present: n || i.open,
            children: i.disableHoverableContent ? (0, a.jsx)(qy, {
              side: o,
              ...l,
              ref: t
            }) : (0, a.jsx)(Fy, {
              side: o,
              ...l,
              ref: t
            })
          })
        })),
        Fy = m.forwardRef(((e, t) => {
          const r = Iy(Vy, e.__scopeTooltip),
            n = _y(Vy, e.__scopeTooltip),
            o = m.useRef(null),
            l = Me(t, o),
            [i, s] = m.useState(null),
            {
              trigger: d,
              onClose: c
            } = r,
            u = o.current,
            {
              onPointerInTransitChange: f
            } = n,
            h = m.useCallback((() => {
              s(null), f(!1)
            }), [f]),
            v = m.useCallback(((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                a = function(e, t, r = 5) {
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
                    a = Math.abs(t.right - e.x),
                    o = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, a, o)) {
                    case o:
                      return "left";
                    case a:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                o = function(e) {
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
                }([...a, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: a
                  } = e;
                  return [{
                    x: a,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: a,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              s(o), f(!0)
            }), [f]);
          return m.useEffect((() => () => h()), [h]), m.useEffect((() => {
            if (d && u) {
              const e = e => v(e, u),
                t = e => v(e, d);
              return d.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t)
              }
            }
          }), [d, u, v, h]), m.useEffect((() => {
            if (i) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = d?.contains(t) || u?.contains(t),
                  a = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let a = !1;
                    for (let e = 0, o = t.length - 1; e < t.length; o = e++) {
                      const l = t[e].x,
                        i = t[e].y,
                        s = t[o].x,
                        d = t[o].y;
                      i > n != d > n && r < (s - l) * (n - i) / (d - i) + l && (a = !a)
                    }
                    return a
                  }(r, i);
                n ? h() : a && (h(), c())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [d, u, i, c, h]), (0, a.jsx)(qy, {
            ...e,
            ref: l
          })
        })),
        [Uy, Xy] = jy(Dy, {
          isInside: !1
        }),
        qy = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            ...s
          } = e, d = Iy(Vy, r), c = Ry(r), {
            onClose: u
          } = d;
          return m.useEffect((() => (document.addEventListener(Sy, u), () => document.removeEventListener(Sy, u))), [u]), m.useEffect((() => {
            if (d.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(d.trigger) && u()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [d.trigger, u]), (0, a.jsx)(Ox, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: u,
            children: (0, a.jsxs)(my, {
              "data-state": d.stateAttribute,
              ...c,
              ...s,
              ref: t,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, a.jsx)(Le, {
                children: n
              }), (0, a.jsx)(Uy, {
                scope: r,
                isInside: !0,
                children: (0, a.jsx)(De, {
                  id: d.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      Gy.displayName = Vy;
      var Ky = "TooltipArrow",
        Wy = m.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Ry(r);
          return Xy(Ky, r).isInside ? null : (0, a.jsx)(wy, {
            ...o,
            ...n,
            ref: t
          })
        }));
      Wy.displayName = Ky;
      var $y = Py,
        Zy = Ty,
        Yy = Oy,
        Qy = zy,
        Jy = Gy,
        eb = Wy;
      const tb = ({
        content: e,
        children: t,
        side: r = "top",
        sideOffset: n = 8,
        align: o = "center",
        alignOffset: l = 0,
        avoidCollisions: i = !0,
        collisionBoundary: s,
        collisionPadding: d,
        sticky: c = "partial",
        onEscapeKeyDown: u,
        onPointerDownOutside: f,
        label: h,
        defaultOpen: v,
        open: p,
        onOpenChange: g,
        delayDuration: w = 400,
        portal: x = !0,
        arrow: y = !0,
        portalContainer: b,
        testId: j
      }) => {
        const [M = !1, R] = Fd({
          defaultProp: v,
          prop: p,
          onChange: g
        }), C = Hd(M), L = rv({
          opacity: M ? 1 : 0,
          immediate: M && !C
        }), S = "left" === r || "right" === r ? "center" : o, E = x ? {
          container: b
        } : {}, _ = x ? Qy : m.Fragment, P = y ? {
          className: "foundry_h3lgaa2"
        } : {}, D = y ? eb : m.Fragment;
        return (0, a.jsx)($y, {
          delayDuration: w,
          children: (0, a.jsxs)(Zy, {
            open: M,
            onOpenChange: R,
            children: [(0, a.jsx)(Yy, {
              asChild: !0,
              className: "foundry_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, a.jsx)(_, {
              ...E,
              children: (0, a.jsx)(Jy, {
                asChild: !0,
                side: r,
                align: S,
                sticky: c,
                forceMount: !0,
                "aria-label": h,
                "data-testid": j,
                className: "foundry_h3lgaa0",
                sideOffset: n,
                alignOffset: l,
                onEscapeKeyDown: u,
                avoidCollisions: i,
                collisionPadding: d,
                collisionBoundary: s,
                onPointerDownOutside: f,
                children: (0, a.jsxs)(Mv.div, {
                  style: L,
                  children: [(0, a.jsx)(J, {
                    className: "foundry_h3lgaa1",
                    children: e
                  }), (0, a.jsx)(D, {
                    ...P
                  })]
                })
              })
            })]
          })
        })
      };
      var rb = "foundry_bwy1ds1",
        nb = "foundry_bwy1dsg",
        ab = "foundry_bwy1dsf";
      const ob = e => {
          e.preventDefault?.()
        },
        lb = (0, m.forwardRef)((({
          onClose: e,
          onDownload: t,
          zoomLevel: r,
          zoomIn: n,
          zoomOut: o,
          zoomTo: l,
          minZoomLevel: s,
          maxZoomLevel: d,
          canZoomIn: c,
          canZoomOut: u,
          resetZoom: f,
          caption: h,
          showDownloadButton: v,
          defaultZoomLevel: p
        }, g) => {
          const m = $m(),
            w = kd("screen and (max-width: 1024px)"),
            x = r !== p,
            y = w ? "SM" : "LG",
            b = rv({
              opacity: x ? 1 : 0,
              immediate: zd()
            });
          Mx(["+", "=", "add", "plus"], (() => n?.()), {
            preventDefault: !0
          }), Mx(["minus", "subtract"], (() => o?.()), {
            preventDefault: !0
          }), Mx("r", (() => f?.()), {
            preventDefault: !0
          });
          const j = Xd() && w;
          return (0, a.jsx)(yx, {
            children: (0, a.jsxs)("div", {
              className: "foundry_bwy1ds0",
              ref: g,
              children: [(0, a.jsx)(tb, {
                side: "right",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: ob,
                content: (0, a.jsxs)("div", {
                  className: ab,
                  children: [m.formatMessage(Kw), (0, a.jsx)(le, {
                    className: nb,
                    children: m.formatMessage(Ww, {
                      shortcut: (0, a.jsx)(Ax, {
                        shortcut: "Esc",
                        isInline: !0
                      })
                    })
                  })]
                }),
                children: (0, a.jsx)(Dx, {
                  size: y,
                  appearance: "tertiary",
                  icon: "ArrowLeft",
                  label: m.formatMessage(Kw),
                  className: i(rb, "foundry_bwy1ds2"),
                  onPress: e
                })
              }), (0, a.jsxs)("div", {
                className: "foundry_bwy1ds3",
                children: [!j && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsxs)("div", {
                    className: "foundry_bwy1ds4",
                    children: [(0, a.jsx)(tb, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ob,
                      content: (0, a.jsxs)("div", {
                        className: ab,
                        children: [m.formatMessage($w), (0, a.jsx)(le, {
                          className: nb,
                          children: m.formatMessage(Zw, {
                            shortcut: (0, a.jsx)(Ax, {
                              shortcut: "+",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, a.jsx)(Dx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Plus",
                        label: m.formatMessage($w),
                        className: i(rb, "foundry_bwy1ds5"),
                        onPress: () => n(),
                        isDisabled: !c
                      })
                    }), (0, a.jsxs)(Fw, {
                      className: "foundry_bwy1dsa",
                      value: [r],
                      max: d,
                      min: s,
                      step: 1,
                      orientation: "vertical",
                      onValueChange: e => l?.(e[0]),
                      children: [(0, a.jsx)(Uw, {
                        className: "foundry_bwy1dsb",
                        children: (0, a.jsx)(Xw, {
                          className: "foundry_bwy1dsc"
                        })
                      }), (0, a.jsx)(tb, {
                        side: "left",
                        portal: !1,
                        delayDuration: 0,
                        onPointerDownOutside: ob,
                        content: m.formatMessage(rx, {
                          zoom: r.toFixed(0)
                        }),
                        children: (0, a.jsx)(qw, {
                          className: "foundry_bwy1dsd",
                          "aria-label": m.formatMessage(tx),
                          children: (0, a.jsx)("span", {
                            className: "foundry_bwy1dse"
                          })
                        })
                      })]
                    }), (0, a.jsx)(tb, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ob,
                      content: (0, a.jsxs)("div", {
                        className: ab,
                        children: [m.formatMessage(Yw), (0, a.jsx)(le, {
                          className: nb,
                          children: m.formatMessage(Qw, {
                            shortcut: (0, a.jsx)(Ax, {
                              shortcut: "-",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, a.jsx)(Dx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Minus",
                        label: m.formatMessage(Yw),
                        className: i(rb, "foundry_bwy1ds6"),
                        onPress: () => o(),
                        isDisabled: !u
                      })
                    })]
                  }), (0, a.jsx)(Mv.div, {
                    style: b,
                    children: (0, a.jsx)(tb, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: ob,
                      content: (0, a.jsxs)("div", {
                        className: ab,
                        children: [m.formatMessage(Jw), (0, a.jsx)(le, {
                          className: nb,
                          children: m.formatMessage(ex, {
                            shortcut: (0, a.jsx)(Ax, {
                              shortcut: "R",
                              isInline: !0
                            })
                          })
                        })]
                      }),
                      children: (0, a.jsx)(Dx, {
                        size: y,
                        appearance: "tertiary",
                        icon: "Revert",
                        label: m.formatMessage(Jw),
                        className: i(rb, "foundry_bwy1ds7"),
                        onPress: f,
                        isDisabled: !x,
                        "aria-hidden": !x
                      })
                    })
                  })]
                }), v && j && (0, a.jsx)(tb, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: ob,
                  content: m.formatMessage(ax),
                  children: (0, a.jsx)(Dx, {
                    size: y,
                    appearance: "tertiary",
                    icon: "Download",
                    label: m.formatMessage(nx),
                    className: rb,
                    onPress: e
                  })
                })]
              }), (0, a.jsxs)("div", {
                className: "foundry_bwy1ds8",
                children: [h && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)("div", {
                    className: "foundry_bwy1dsh"
                  }), (0, a.jsx)(q, {
                    asChild: "string" != typeof h,
                    children: h
                  })]
                }), v && !j && (0, a.jsx)("div", {
                  className: "foundry_bwy1ds9",
                  children: (0, a.jsx)(tb, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: ob,
                    content: m.formatMessage(ax),
                    children: (0, a.jsx)(Dx, {
                      size: y,
                      appearance: "tertiary",
                      icon: "Download",
                      label: m.formatMessage(nx),
                      className: rb,
                      onPress: t
                    })
                  })
                })]
              })]
            })
          })
        })),
        ib = {
          "en-US": r.e(8425).then(r.bind(r, 8425)),
          "de-DE": r.e(6022).then(r.bind(r, 96022)),
          "es-ES": r.e(4196).then(r.bind(r, 94196)),
          "es-MX": r.e(5133).then(r.bind(r, 5133)),
          "fr-FR": r.e(1360).then(r.bind(r, 61360)),
          "it-IT": r.e(8158).then(r.bind(r, 88158)),
          "ja-JP": r.e(9113).then(r.bind(r, 89113)),
          "ko-KR": r.e(9663).then(r.bind(r, 49663)),
          "pl-PL": r.e(7764).then(r.bind(r, 27764)),
          "pt-BR": r.e(9100).then(r.bind(r, 39100)),
          "ru-RU": r.e(7426).then(r.bind(r, 67426)),
          "zh-CN": r.e(9191).then(r.bind(r, 29191)),
          "zh-TW": r.e(2723).then(r.bind(r, 22723))
        },
        sb = (e, t) => {
          const r = "more" === t ? Dc.lightHc : Dc.light,
            n = "more" === t ? Dc.darkHc : Dc.dark;
          return "dark" === e ? n : r
        };
      var db = "foundry_1a74xwb4",
        cb = "focusScope.autoFocusOnMount",
        ub = "focusScope.autoFocusOnUnmount",
        fb = {
          bubbles: !1,
          cancelable: !0
        },
        hb = m.forwardRef(((e, t) => {
          const {
            loop: r = !1,
            trapped: n = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
            ...i
          } = e, [s, d] = m.useState(null), c = sw(o), u = sw(l), f = m.useRef(null), h = Me(t, (e => d(e))), v = m.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          m.useEffect((() => {
            if (n) {
              let e = function(e) {
                  if (v.paused || !s) return;
                  const t = e.target;
                  s.contains(t) ? f.current = t : mb(f.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (v.paused || !s) return;
                  const t = e.relatedTarget;
                  null !== t && (s.contains(t) || mb(f.current, {
                    select: !0
                  }))
                },
                r = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && mb(s)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const n = new MutationObserver(r);
              return s && n.observe(s, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
              }
            }
          }), [n, s, v.paused]), m.useEffect((() => {
            if (s) {
              wb.add(v);
              const e = document.activeElement;
              if (!s.contains(e)) {
                const t = new CustomEvent(cb, fb);
                s.addEventListener(cb, c), s.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const r = document.activeElement;
                  for (const n of e)
                    if (mb(n, {
                        select: t
                      }), document.activeElement !== r) return
                }(vb(s).filter((e => "A" !== e.tagName)), {
                  select: !0
                }), document.activeElement === e && mb(s))
              }
              return () => {
                s.removeEventListener(cb, c), setTimeout((() => {
                  const t = new CustomEvent(ub, fb);
                  s.addEventListener(ub, u), s.dispatchEvent(t), t.defaultPrevented || mb(e ?? document.body, {
                    select: !0
                  }), s.removeEventListener(ub, u), wb.remove(v)
                }), 0)
              }
            }
          }), [s, c, u, v]);
          const p = m.useCallback((e => {
            if (!r && !n) return;
            if (v.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              a = document.activeElement;
            if (t && a) {
              const t = e.currentTarget,
                [n, o] = function(e) {
                  const t = vb(e);
                  return [pb(t, e), pb(t.reverse(), e)]
                }(t);
              n && o ? e.shiftKey || a !== o ? e.shiftKey && a === n && (e.preventDefault(), r && mb(o, {
                select: !0
              })) : (e.preventDefault(), r && mb(n, {
                select: !0
              })) : a === t && e.preventDefault()
            }
          }), [r, n, v.paused]);
          return (0, a.jsx)(_e.div, {
            tabIndex: -1,
            ...i,
            ref: h,
            onKeyDown: p
          })
        }));

      function vb(e) {
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

      function pb(e, t) {
        for (const r of e)
          if (!gb(r, {
              upTo: t
            })) return r
      }

      function gb(e, {
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

      function mb(e, {
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
      hb.displayName = "FocusScope";
      var wb = function() {
        let e = [];
        return {
          add(t) {
            const r = e[0];
            t !== r && r?.pause(), e = xb(e, t), e.unshift(t)
          },
          remove(t) {
            e = xb(e, t), e[0]?.resume()
          }
        }
      }();

      function xb(e, t) {
        const r = [...e],
          n = r.indexOf(t);
        return -1 !== n && r.splice(n, 1), r
      }
      var yb = 0;

      function bb() {
        m.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? jb()), document.body.insertAdjacentElement("beforeend", e[1] ?? jb()), yb++, () => {
            1 === yb && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), yb--
          }
        }), [])
      }

      function jb() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
      }
      var Mb = r(90250),
        Rb = new WeakMap,
        Cb = new WeakMap,
        Lb = {},
        Sb = 0,
        Eb = function(e) {
          return e && (e.host || Eb(e.parentNode))
        },
        _b = function(e, t, r) {
          void 0 === r && (r = "data-aria-hidden");
          var n = Array.from(Array.isArray(e) ? e : [e]),
            a = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), function(e, t, r, n) {
            var a = function(e, t) {
              return t.map((function(t) {
                if (e.contains(t)) return t;
                var r = Eb(t);
                return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(t, Array.isArray(e) ? e : [e]);
            Lb[r] || (Lb[r] = new WeakMap);
            var o = Lb[r],
              l = [],
              i = new Set,
              s = new Set(a),
              d = function(e) {
                e && !i.has(e) && (i.add(e), d(e.parentNode))
              };
            a.forEach(d);
            var c = function(e) {
              e && !s.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (i.has(e)) c(e);
                else {
                  var t = e.getAttribute(n),
                    a = null !== t && "false" !== t,
                    s = (Rb.get(e) || 0) + 1,
                    d = (o.get(e) || 0) + 1;
                  Rb.set(e, s), o.set(e, d), l.push(e), 1 === s && a && Cb.set(e, !0), 1 === d && e.setAttribute(r, "true"), a || e.setAttribute(n, "true")
                }
              }))
            };
            return c(t), i.clear(), Sb++,
              function() {
                l.forEach((function(e) {
                  var t = Rb.get(e) - 1,
                    a = o.get(e) - 1;
                  Rb.set(e, t), o.set(e, a), t || (Cb.has(e) || e.removeAttribute(n), Cb.delete(e)), a || e.removeAttribute(r)
                })), --Sb || (Rb = new WeakMap, Rb = new WeakMap, Cb = new WeakMap, Lb = {})
              }
          }(n, a, r, "aria-hidden")) : function() {
            return null
          }
        },
        Pb = "Dialog",
        [Db, Ab] = lw(Pb),
        [Ib, Tb] = Db(Pb),
        Nb = e => {
          const {
            __scopeDialog: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: l,
            modal: i = !0
          } = e, s = m.useRef(null), d = m.useRef(null), [c = !1, u] = dw({
            prop: n,
            defaultProp: o,
            onChange: l
          });
          return (0, a.jsx)(Ib, {
            scope: t,
            triggerRef: s,
            contentRef: d,
            contentId: Vx(),
            titleId: Vx(),
            descriptionId: Vx(),
            open: c,
            onOpenChange: u,
            onOpenToggle: m.useCallback((() => u((e => !e))), [u]),
            modal: i,
            children: r
          })
        };
      Nb.displayName = Pb;
      var Ob = "DialogTrigger",
        kb = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Tb(Ob, r), l = Me(t, o.triggerRef);
          return (0, a.jsx)(_e.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Jb(o.open),
            ...n,
            ref: l,
            onClick: ow(e.onClick, o.onOpenToggle)
          })
        }));
      kb.displayName = Ob;
      var Hb = "DialogPortal",
        [Bb, zb] = Db(Hb, {
          forceMount: void 0
        }),
        Vb = e => {
          const {
            __scopeDialog: t,
            forceMount: r,
            children: n,
            container: o
          } = e, l = Tb(Hb, t);
          return (0, a.jsx)(Bb, {
            scope: t,
            forceMount: r,
            children: m.Children.map(n, (e => (0, a.jsx)(yy, {
              present: r || l.open,
              children: (0, a.jsx)(xy, {
                asChild: !0,
                container: o,
                children: e
              })
            })))
          })
        };
      Vb.displayName = Hb;
      var Gb = "DialogOverlay",
        Fb = m.forwardRef(((e, t) => {
          const r = zb(Gb, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            l = Tb(Gb, e.__scopeDialog);
          return l.modal ? (0, a.jsx)(yy, {
            present: n || l.open,
            children: (0, a.jsx)(Ub, {
              ...o,
              ref: t
            })
          }) : null
        }));
      Fb.displayName = Gb;
      var Ub = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            ...n
          } = e, o = Tb(Gb, r);
          return (0, a.jsx)(Mb.A, {
            as: Re,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, a.jsx)(_e.div, {
              "data-state": Jb(o.open),
              ...n,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...n.style
              }
            })
          })
        })),
        Xb = "DialogContent",
        qb = m.forwardRef(((e, t) => {
          const r = zb(Xb, e.__scopeDialog),
            {
              forceMount: n = r.forceMount,
              ...o
            } = e,
            l = Tb(Xb, e.__scopeDialog);
          return (0, a.jsx)(yy, {
            present: n || l.open,
            children: l.modal ? (0, a.jsx)(Kb, {
              ...o,
              ref: t
            }) : (0, a.jsx)(Wb, {
              ...o,
              ref: t
            })
          })
        }));
      qb.displayName = Xb;
      var Kb = m.forwardRef(((e, t) => {
          const r = Tb(Xb, e.__scopeDialog),
            n = m.useRef(null),
            o = Me(t, r.contentRef, n);
          return m.useEffect((() => {
            const e = n.current;
            if (e) return _b(e)
          }), []), (0, a.jsx)($b, {
            ...e,
            ref: o,
            trapFocus: r.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ow(e.onCloseAutoFocus, (e => {
              e.preventDefault(), r.triggerRef.current?.focus()
            })),
            onPointerDownOutside: ow(e.onPointerDownOutside, (e => {
              const t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || r) && e.preventDefault()
            })),
            onFocusOutside: ow(e.onFocusOutside, (e => e.preventDefault()))
          })
        })),
        Wb = m.forwardRef(((e, t) => {
          const r = Tb(Xb, e.__scopeDialog),
            n = m.useRef(!1),
            o = m.useRef(!1);
          return (0, a.jsx)($b, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (n.current || r.triggerRef.current?.focus(), t.preventDefault()), n.current = !1, o.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (n.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
              const a = t.target,
                l = r.triggerRef.current?.contains(a);
              l && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
            }
          })
        })),
        $b = m.forwardRef(((e, t) => {
          const {
            __scopeDialog: r,
            trapFocus: n,
            onOpenAutoFocus: o,
            onCloseAutoFocus: l,
            ...i
          } = e, s = Tb(Xb, r), d = m.useRef(null), c = Me(t, d);
          return bb(), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(hb, {
              asChild: !0,
              loop: !0,
              trapped: n,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              children: (0, a.jsx)(Ox, {
                role: "dialog",
                id: s.contentId,
                "aria-describedby": s.descriptionId,
                "aria-labelledby": s.titleId,
                "data-state": Jb(s.open),
                ...i,
                ref: c,
                onDismiss: () => s.onOpenChange(!1)
              })
            }), (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(nj, {
                titleId: s.titleId
              }), (0, a.jsx)(aj, {
                contentRef: d,
                descriptionId: s.descriptionId
              })]
            })]
          })
        })),
        Zb = "DialogTitle";
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = Tb(Zb, r);
        return (0, a.jsx)(_e.h2, {
          id: o.titleId,
          ...n,
          ref: t
        })
      })).displayName = Zb;
      var Yb = "DialogDescription";
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = Tb(Yb, r);
        return (0, a.jsx)(_e.p, {
          id: o.descriptionId,
          ...n,
          ref: t
        })
      })).displayName = Yb;
      var Qb = "DialogClose";

      function Jb(e) {
        return e ? "open" : "closed"
      }
      m.forwardRef(((e, t) => {
        const {
          __scopeDialog: r,
          ...n
        } = e, o = Tb(Qb, r);
        return (0, a.jsx)(_e.button, {
          type: "button",
          ...n,
          ref: t,
          onClick: ow(e.onClick, (() => o.onOpenChange(!1)))
        })
      })).displayName = Qb;
      var ej = "DialogTitleWarning",
        [tj, rj] = function(e, t) {
          const r = m.createContext(t);

          function n(e) {
            const {
              children: t,
              ...n
            } = e, o = m.useMemo((() => n), Object.values(n));
            return (0, a.jsx)(r.Provider, {
              value: o,
              children: t
            })
          }
          return n.displayName = e + "Provider", [n, function(n) {
            const a = m.useContext(r);
            if (a) return a;
            if (void 0 !== t) return t;
            throw new Error(`\`${n}\` must be used within \`${e}\``)
          }]
        }(ej, {
          contentName: Xb,
          titleName: Zb,
          docsSlug: "dialog"
        }),
        nj = ({
          titleId: e
        }) => {
          const t = rj(ej),
            r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return m.useEffect((() => {
            e && (document.getElementById(e) || console.error(r))
          }), [r, e]), null
        },
        aj = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${rj("DialogDescriptionWarning").contentName}}.`;
          return m.useEffect((() => {
            const n = e.current?.getAttribute("aria-describedby");
            t && n && (document.getElementById(t) || console.warn(r))
          }), [r, e, t]), null
        },
        oj = Nb,
        lj = kb,
        ij = Vb,
        sj = qb;
      const dj = Mv(Fb),
        cj = Mv(sj),
        uj = e => {
          e?.preventDefault(), e?.target?.focus({
            preventScroll: !0
          })
        },
        fj = ({
          src: e,
          alt: t,
          caption: r,
          crossOrigin: n,
          loading: o,
          referrerPolicy: l,
          thumbnail: i,
          thumbnailAspectRatio: s,
          thumbnailPosition: d = "center",
          thumbnailFit: c = "cover",
          reduceMotion: u = !1,
          defaultOpen: f,
          open: h,
          onOpenChange: v,
          showOpenButton: p,
          showDownloadButton: g,
          zoomLevel: w,
          defaultZoomLevel: x = 100,
          minZoomLevel: y = 100,
          maxZoomLevel: b = 300,
          zoomLevelStep: j = 100,
          onZoomLevelChange: M,
          gestureSettings: R,
          testId: C
        }) => {
          const L = (0, m.useRef)(null),
            S = (0, m.useRef)(null),
            E = (0, m.useRef)(null),
            _ = (0, m.useRef)(null),
            P = av(),
            D = av(),
            A = av(),
            I = (0, m.useRef)(!1),
            T = $m(),
            N = kd("screen and (max-width: 1024px)"),
            O = Xd() && N,
            k = zd(),
            [H, B] = (0, m.useState)(!0),
            [z, V] = (0, m.useState)(!1),
            [G = !1, F] = Fd({
              prop: h,
              defaultProp: f,
              onChange: v
            }),
            U = (0, m.useDeferredValue)(G),
            X = u || k || f && !I.current;
          (0, m.useEffect)((() => {
            (f || h) && ae(!0)
          }), []), ((e, t = []) => {
            const r = (0, m.useRef)(!1);
            (0, m.useEffect)((() => (r.current = !0, () => {
              r.current = !1
            })), []), (0, m.useEffect)((() => {
              r.current && e()
            }), [...t])
          })((() => {
            G !== U && (ae(G), I.current = !0)
          }), [G]);
          const q = () => {
              F(!1)
            },
            K = (({
              position: e,
              defaultPosition: t,
              onPositionChange: r,
              minZoomLevel: n,
              maxZoomLevel: a,
              zoomLevelStep: o,
              zoomLevel: l,
              defaultZoomLevel: i,
              onZoomLevelChange: s,
              onRequestClose: d,
              onClick: c,
              gestureSettings: u = Sv
            }) => {
              const [f = t, h] = Fd({
                prop: e,
                defaultProp: t,
                onChange: r
              }), [v = i, p] = Fd({
                prop: l,
                defaultProp: i,
                onChange: s
              }), g = (0, m.useRef)(null), w = (0, m.useRef)(null), [x, y] = (0, m.useState)(!1), b = v > n, j = v < a, M = v > n, R = v === n, C = kd("screen and (max-width: 1024px)"), L = Xd() && C, S = (e, {
                origin: r,
                delta: l
              } = {}) => {
                if (g.current && w.current) {
                  r || (r = [w.current.clientWidth / 2, w.current.clientHeight / 2]);
                  const c = (i = e, s = n, d = a, Math.min(Math.max(i, s), d));
                  if (c === v) return;
                  if (l || (l = (c - v) / o), c <= n) h(t);
                  else {
                    const e = Lv(g.current, w.current, (({
                      currentTranslate: [e, t],
                      contentRef: r,
                      pinchDelta: n,
                      scale: a,
                      touchOrigin: [o, l]
                    }) => {
                      if (!r?.current) return [0, 0];
                      const {
                        height: i,
                        left: s,
                        top: d,
                        width: c
                      } = r.current?.getBoundingClientRect();
                      return [-(o - s - c / 2) / a * n + e, -(l - d - i / 2) / a * n + t]
                    })({
                      currentTranslate: f,
                      contentRef: g,
                      pinchDelta: l,
                      scale: v / o,
                      touchOrigin: r
                    }), c);
                    h(e.xy)
                  }
                  p(c)
                }
                var i, s, d
              }, E = () => {
                h(t), p(i)
              }, {
                handleClick: _
              } = (({
                enabled: e = !0,
                latency: t = 300,
                onDoubleClick: r = (() => null),
                onSingleClick: n = (() => null)
              }) => {
                const a = (0, m.useRef)(0),
                  o = (0, m.useRef)();
                return {
                  handleClick: l => {
                    e && (a.current += 1, o.current = setTimeout((() => {
                      1 === a.current ? n(l) : 2 === a.current && r(l), a.current = 0
                    }), t))
                  }
                }
              })({
                onDoubleClick: () => {
                  g.current && L && v > n && E()
                },
                onSingleClick: e => {
                  if (g.current && 0 === e.button) {
                    const t = Cv(g.current),
                      r = e.y < t.top || e.y > t.bottom || e.x < t.left || e.x > t.right ? "overlay" : "content";
                    c?.({
                      target: r,
                      origin: [e.clientX, e.clientY]
                    })
                  }
                },
                latency: 150
              });
              return {
                containerRef: w,
                contentRef: g,
                canPan: b,
                isPanning: x,
                position: f,
                zoomLevel: v,
                zoomIn: e => {
                  S(v + o, e)
                },
                zoomOut: e => {
                  S(v - o, e)
                },
                zoomTo: S,
                resetZoom: E,
                canZoomIn: j,
                canZoomOut: M,
                zoomLevelStep: o,
                maxZoomLevel: a,
                minZoomLevel: n,
                defaultZoomLevel: i,
                eventHandlers: {
                  onDrag: ({
                    first: e,
                    memo: t = [0, 0],
                    movement: [r, a],
                    pinching: o,
                    tap: l,
                    touches: i,
                    event: s
                  }) => {
                    if (!w.current || !g.current) return;
                    if (l) return void _(s);
                    if (r && a && !x && y(!0), i > 1) return;
                    if (o || v < n) return;
                    if (e) return f;
                    const {
                      horizontalOffset: d,
                      verticalOffset: c
                    } = Lv(g.current, w.current, f, v), p = r * u.dragFactor, m = a * u.dragFactor;
                    return h(v === n ? [t[0], t[1] + m] : [Rv(t[0] + p, -d, d), Rv(t[1] + m, -c, c)]), t
                  },
                  onDragEnd: ({
                    memo: e
                  }) => {
                    if (w.current && g.current)
                      if (v === n) {
                        const e = w.current.getBoundingClientRect(),
                          r = g.current.getBoundingClientRect(),
                          {
                            verticalOffset: n
                          } = Lv(g.current, w.current, f, v);
                        r.top + Math.abs(n) >= e.height / 2 ? d?.() : h(t)
                      } else if (void 0 !== e) {
                      const e = Lv(g.current, w.current, f, v);
                      y(!1), h(e.xy)
                    }
                  },
                  onPinch: ({
                    cancel: e,
                    last: t,
                    movement: [r],
                    origin: [n, a]
                  }) => {
                    if (g.current && w.current) {
                      if (r && x && y(!0), t) return void e();
                      const o = [n, a],
                        l = v / 100,
                        i = l + r / u.pinchFactor;
                      S(100 * i, {
                        delta: i - l,
                        origin: o
                      })
                    }
                  },
                  onPinchEnd: () => {
                    w.current && g.current && y(!1)
                  },
                  onWheel: ({
                    last: e,
                    cancel: t,
                    event: r,
                    movement: n
                  }) => {
                    if (g.current && w.current) {
                      const a = -1 * n[1];
                      if (a && x && y(!0), e) return void t();
                      const o = [r.clientX, r.clientY],
                        l = v / 100,
                        i = l + a / u.scrollFactor;
                      S(100 * i, {
                        delta: i - l,
                        origin: o
                      })
                    }
                  },
                  onWheelEnd: () => {
                    w.current && g.current && y(!1)
                  }
                },
                getCursor: () => R && j ? "zoom-in" : b ? x ? "grabbing" : "grab" : "pointer"
              }
            })({
              enabled: U,
              onClick: function(e) {
                N ? B(!H) : "overlay" === e.target ? q() : K.zoomLevel >= K.maxZoomLevel ? K.resetZoom() : K.zoomTo(K.maxZoomLevel, {
                  origin: e.origin
                })
              },
              onRequestClose: q,
              zoomLevel: w,
              defaultZoomLevel: x,
              minZoomLevel: y,
              maxZoomLevel: b,
              zoomLevelStep: j,
              onZoomLevelChange: M,
              defaultPosition: [0, 0],
              gestureSettings: R
            }),
            {
              loaded: W,
              eventHandlers: $
            } = (({
              enabled: e = !0
            }) => {
              const [t, r] = (0, m.useState)(!1), [n, a] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                e || (r(!1), a(!1))
              }), [e]), {
                eventHandlers: {
                  onLoad: () => {
                    e && (a(!0), r(!1))
                  },
                  onAbort: () => {
                    e && (a(!0), r(!1))
                  },
                  onError: () => {
                    e && (a(!0), r(!1))
                  }
                },
                error: t,
                loaded: n
              }
            })({
              enabled: U
            }),
            {
              isHovered: Z
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                n(!1)
              }), [t.current]), Ud("mouseenter", (() => {
                n(!0)
              }), t), Ud("mouseleave", (() => {
                n(!1)
              }), t), {
                isHovered: !!e && r
              }
            })({
              ref: L,
              enabled: U
            }),
            {
              isFocused: Y
            } = (({
              enabled: e,
              ref: t
            }) => {
              const [r, n] = (0, m.useState)(!1);
              return (0, m.useEffect)((() => {
                n(!1)
              }), [t.current]), Ud("focusin", (() => {
                n(!0)
              }), t), Ud("focusout", (() => {
                n(!1)
              }), t), {
                isFocused: !!e && r
              }
            })({
              ref: L,
              enabled: U
            }),
            {
              isIdle: Q
            } = Gd({
              leave: 300,
              activity: 3e3,
              enabled: U && !Z && !Y && !O
            }),
            J = function(e, t, r) {
              const n = ou.fun(t) && t,
                {
                  reset: a,
                  sort: o,
                  trail: l = 0,
                  expires: i = !0,
                  exitBeforeEnter: s = !1,
                  onDestroyed: d,
                  ref: c,
                  config: u
                } = n ? n() : t,
                f = (0, m.useMemo)((() => n || 3 == arguments.length ? tv() : void 0), []),
                h = du(e),
                v = [],
                p = (0, m.useRef)(null),
                g = a ? null : p.current;
              Sf((() => {
                p.current = v
              })), Pf((() => (iu(v, (e => {
                f?.add(e.ctrl), e.ctrl.ref = f
              })), () => {
                iu(p.current, (e => {
                  e.expired && clearTimeout(e.expirationId), ih(e.ctrl, f), e.ctrl.stop(!0)
                }))
              })));
              const w = function(e, {
                  key: t,
                  keys: r = t
                }, n) {
                  if (null === r) {
                    const t = new Set;
                    return e.map((e => {
                      const r = n && n.find((r => r.item === e && "leave" !== r.phase && !t.has(r)));
                      return r ? (t.add(r), r.key) : ov++
                    }))
                  }
                  return ou.und(r) ? e : ou.fun(r) ? e.map(r) : du(r)
                }(h, n ? n() : t, g),
                x = a && p.current || [];
              Sf((() => iu(x, (({
                ctrl: e,
                item: t,
                key: r
              }) => {
                ih(e, f), $f(d, t, r)
              }))));
              const y = [];
              if (g && iu(g, ((e, t) => {
                  e.expired ? (clearTimeout(e.expirationId), x.push(e)) : ~(t = y[t] = w.indexOf(e.key)) && (v[t] = e)
                })), iu(h, ((e, t) => {
                  v[t] || (v[t] = {
                    key: w[t],
                    item: e,
                    phase: "mount",
                    ctrl: new Fh
                  }, v[t].ctrl.item = e)
                })), y.length) {
                let e = -1;
                const {
                  leave: r
                } = n ? n() : t;
                iu(y, ((t, n) => {
                  const a = g[n];
                  ~t ? (e = v.indexOf(a), v[e] = {
                    ...a,
                    item: h[t]
                  }) : r && v.splice(++e, 0, a)
                }))
              }
              ou.fun(o) && v.sort(((e, t) => o(e.item, t.item)));
              let b = -l;
              const j = _f(),
                M = eh(t),
                R = new Map,
                C = (0, m.useRef)(new Map),
                L = (0, m.useRef)(!1);
              iu(v, ((e, r) => {
                const a = e.key,
                  o = e.phase,
                  d = n ? n() : t;
                let f, h;
                const v = $f(d.delay || 0, a);
                if ("mount" == o) f = d.enter, h = "enter";
                else {
                  const e = w.indexOf(a) < 0;
                  if ("leave" != o)
                    if (e) f = d.leave, h = "leave";
                    else {
                      if (!(f = d.update)) return;
                      h = "update"
                    }
                  else {
                    if (e) return;
                    f = d.enter, h = "enter"
                  }
                }
                if (f = $f(f, e.item, r), f = ou.obj(f) ? nh(f) : {
                    to: f
                  }, !f.config) {
                  const t = u || M.config;
                  f.config = $f(t, e.item, r, h)
                }
                b += l;
                const m = {
                  ...M,
                  delay: v + b,
                  ref: c,
                  immediate: d.immediate,
                  reset: !1,
                  ...f
                };
                if ("enter" == h && ou.und(m.from)) {
                  const a = n ? n() : t,
                    o = ou.und(a.initial) || g ? a.from : a.initial;
                  m.from = $f(o, e.item, r)
                }
                const {
                  onResolve: x
                } = m;
                m.onResolve = e => {
                  $f(x, e);
                  const t = p.current,
                    r = t.find((e => e.key === a));
                  if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
                    const e = t.every((e => e.ctrl.idle));
                    if ("leave" == r.phase) {
                      const t = $f(i, r.item);
                      if (!1 !== t) {
                        const n = !0 === t ? 0 : t;
                        if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(j, n)))
                      }
                    }
                    e && t.some((e => e.expired)) && (C.current.delete(r), s && (L.current = !0), j())
                  }
                };
                const y = qh(e.ctrl, m);
                "leave" === h && s ? C.current.set(e, {
                  phase: h,
                  springs: y,
                  payload: m
                }) : R.set(e, {
                  phase: h,
                  springs: y,
                  payload: m
                })
              }));
              const S = (0, m.useContext)(Jh),
                E = Af(S),
                _ = S !== E && oh(S);
              Sf((() => {
                _ && iu(v, (e => {
                  e.ctrl.start({
                    default: S
                  })
                }))
              }), [S]), iu(R, ((e, t) => {
                if (C.current.size) {
                  const e = v.findIndex((e => e.key === t.key));
                  v.splice(e, 1)
                }
              })), Sf((() => {
                iu(C.current.size ? C.current : R, (({
                  phase: e,
                  payload: t
                }, r) => {
                  const {
                    ctrl: n
                  } = r;
                  r.phase = e, f?.add(n), _ && "enter" == e && n.start({
                    default: S
                  }), t && (sh(n, t.ref), !n.ref && !f || L.current ? (n.start(t), L.current && (L.current = !1)) : n.update(t))
                }))
              }), a ? void 0 : r);
              const P = e => m.createElement(m.Fragment, null, v.map(((t, r) => {
                const {
                  springs: n
                } = R.get(t) || t.ctrl, a = e({
                  ...n
                }, t.item, t, r);
                return a && a.type ? m.createElement(a.type, {
                  ...a.props,
                  key: ou.str(t.key) || ou.num(t.key) ? t.key : t.ctrl.id,
                  ref: a.ref
                }) : a
              })));
              return f ? [P, f] : P
            }(U, {
              ref: P,
              from: {
                opacity: 0
              },
              enter: {
                opacity: 1
              },
              leave: {
                opacity: 0
              },
              immediate: X
            }),
            ee = rv({
              ref: D,
              opacity: U && !Q && W && H ? 1 : 0,
              immediate: X
            }),
            te = rv({
              ref: A,
              from: {
                x: 0,
                y: 0,
                scale: 1,
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                aspectRatio: s,
                position: "absolute",
                objectFit: c,
                objectPosition: d,
                opacity: 0
              },
              onStart: () => {
                U || V(!1)
              },
              onRest: async () => {
                U ? V(!0) : (K.resetZoom(), B(!0))
              }
            }),
            re = rv({
              opacity: U && W && z ? 1 : 0,
              immediate: !0,
              onRest: () => {
                U && W && A.start({
                  opacity: 0,
                  immediate: !0
                })
              }
            }),
            ne = [
              [A, P, D],
              [0, 0, .1]
            ];

          function ae(e) {
            const t = E.current.getBoundingClientRect(),
              r = S.current.naturalWidth,
              n = S.current.naturalHeight,
              a = r / window.innerWidth,
              o = r / a,
              l = n / a,
              i = window.innerHeight * o / l,
              u = window.innerWidth * l / o,
              f = l >= window.innerHeight ? "horizontal" : "vertical",
              h = "horizontal" === f ? (window.innerWidth - window.innerHeight * o / l) / 2 : (window.innerHeight - window.innerWidth * l / o) / 2;
            e ? A.start({
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
                }), E.current.style.opacity = "0", await e({
                  height: "horizontal" === f ? `${window.innerHeight}px` : `${u}px`,
                  width: "horizontal" === f ? `${i}px` : `${window.innerWidth}px`,
                  top: "horizontal" === f ? "0px" : `${h}px`,
                  left: "horizontal" === f ? `${h}px` : "0px",
                  scale: x / 100,
                  immediate: X
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
            }) : A.start({
              to: async e => {
                await e({
                  immediate: !0,
                  opacity: 1,
                  objectFit: c,
                  objectPosition: d,
                  height: "horizontal" === f ? `${window.innerHeight}px` : `${u}px`,
                  width: "horizontal" === f ? `${i}px` : `${window.innerWidth}px`,
                  top: "horizontal" === f ? "0px" : `${h}px`,
                  left: "horizontal" === f ? `${h}px` : "0px",
                  scale: K.zoomLevel / 100,
                  x: K.position[0],
                  y: K.position[1]
                }), await e({
                  width: `${t.width}px`,
                  height: `${t.height}px`,
                  top: `${t.y}px`,
                  left: `${t.x}px`,
                  aspectRatio: "unset",
                  x: 0,
                  y: 0,
                  scale: 1,
                  immediate: X
                }), E.current.style.opacity = "1", await e({
                  immediate: !0,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  aspectRatio: s,
                  objectFit: c,
                  opacity: 0
                })
              }
            })
          }! function(e, t, r = 1e3) {
            Sf((() => {
              if (t) {
                let n = 0;
                iu(e, ((e, a) => {
                  const o = e.current;
                  if (o.length) {
                    let l = r * t[a];
                    isNaN(l) ? l = n : n = l, iu(o, (e => {
                      iu(e.queue, (e => {
                        const t = e.delay;
                        e.delay = e => l + $f(t || 0, e)
                      }))
                    })), e.start()
                  }
                }))
              } else {
                let t = Promise.resolve();
                iu(e, (e => {
                  const r = e.current;
                  if (r.length) {
                    const n = r.map((e => {
                      const t = e.queue;
                      return e.queue = [], t
                    }));
                    t = t.then((() => (iu(r, ((e, t) => iu(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
                  }
                }))
              }
            }))
          }(U ? ne[0] : ne[0].reverse(), ne[1]), (0, m.useEffect)((() => {
            B(!O)
          }), [O]);
          const {
            contrastMode: oe
          } = (() => {
            const {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: a,
              defaultPlatformScale: o,
              platformScaleRatios: l,
              platformScaleBreakpoints: i,
              locale: s
            } = Nc();
            return {
              colorScheme: e,
              defaultColorScheme: t,
              contrastMode: r,
              defaultContrastMode: n,
              platformScale: a,
              defaultPlatformScale: o,
              platformScaleRatios: l,
              platformScaleBreakpoints: i,
              locale: s
            }
          })(), le = ((e, t) => [Dc.tokens, sb("dark", t)].join(" "))(0, oe);
          return (0, a.jsx)(oj, {
            children: (0, a.jsxs)("div", {
              className: "foundry_1a74xwb0",
              children: [(0, a.jsx)(Mv.div, {
                className: "foundry_1a74xwb2 foundry_1a74xwb1",
                ref: _,
                "data-idle": !U,
                style: te,
                children: (0, a.jsx)("img", {
                  alt: t,
                  src: i,
                  ref: S,
                  loading: o,
                  className: db,
                  crossOrigin: n,
                  referrerPolicy: l
                })
              }), (0, a.jsx)(lj, {
                asChild: !0,
                children: (0, a.jsxs)(Mv.button, {
                  className: "foundry_1a74xwb3 foundry_1d5mo5m0 foundry_1a74xwb1",
                  onClick: () => {
                    F(!G)
                  },
                  ref: E,
                  "data-idle": !U,
                  style: {
                    aspectRatio: s,
                    objectPosition: d,
                    objectFit: c
                  },
                  children: [(0, a.jsx)("img", {
                    alt: t,
                    src: i,
                    ref: S,
                    loading: o,
                    className: db,
                    crossOrigin: n,
                    referrerPolicy: l
                  }), J(((e, t) => p && !t && (0, a.jsx)(Mv.span, {
                    className: "foundry_1a74xwb5",
                    style: e,
                    children: (0, a.jsx)(Do, {
                      label: T.formatMessage(nw)
                    })
                  })))]
                })
              }), (0, a.jsx)(ij, {
                forceMount: !0,
                children: J(((i, s) => s && (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(dj, {
                    className: "foundry_1a74xwb8",
                    style: i
                  }), (0, a.jsxs)(cj, {
                    "data-testid": C,
                    onEscapeKeyDown: q,
                    onOpenAutoFocus: uj,
                    className: le,
                    children: [(0, a.jsx)(Mv.div, {
                      className: "foundry_1a74xwb6",
                      style: re,
                      children: (0, a.jsx)(Hp, {
                        ...K,
                        children: (0, a.jsx)("img", {
                          alt: t,
                          src: e,
                          loading: o,
                          className: "foundry_1a74xwba",
                          crossOrigin: n,
                          referrerPolicy: l,
                          style: {
                            cursor: K.getCursor()
                          },
                          ...$
                        })
                      })
                    }), (0, a.jsx)(Mv.div, {
                      className: "foundry_1a74xwb9",
                      style: ee,
                      children: (0, a.jsx)(lb, {
                        ...K,
                        ref: L,
                        onClose: q,
                        caption: r,
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
        hj = e => {
          const t = (() => {
            const {
              locale: e
            } = Nc();
            return e
          })();
          return (0, a.jsx)(tw, {
            messages: ib,
            locale: t,
            children: (0, a.jsx)(fj, {
              ...e
            })
          })
        };
      var vj = [" ", "Enter", "ArrowUp", "ArrowDown"],
        pj = [" ", "Enter"],
        gj = "Select",
        [mj, wj, xj] = pw(gj),
        [yj, bj] = lw(gj, [xj, Jx]),
        jj = Jx(),
        [Mj, Rj] = yj(gj),
        [Cj, Lj] = yj(gj),
        Sj = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: l,
            value: i,
            defaultValue: s,
            onValueChange: d,
            dir: c,
            name: u,
            autoComplete: f,
            disabled: h,
            required: v
          } = e, p = jj(t), [g, w] = m.useState(null), [x, y] = m.useState(null), [b, j] = m.useState(!1), M = uw(c), [R = !1, C] = dw({
            prop: n,
            defaultProp: o,
            onChange: l
          }), [L, S] = dw({
            prop: i,
            defaultProp: s,
            onChange: d
          }), E = m.useRef(null), _ = !g || Boolean(g.closest("form")), [P, D] = m.useState(new Set), A = Array.from(P).map((e => e.props.value)).join(";");
          return (0, a.jsx)(py, {
            ...p,
            children: (0, a.jsxs)(Mj, {
              required: v,
              scope: t,
              trigger: g,
              onTriggerChange: w,
              valueNode: x,
              onValueNodeChange: y,
              valueNodeHasChildren: b,
              onValueNodeHasChildrenChange: j,
              contentId: Vx(),
              value: L,
              onValueChange: S,
              open: R,
              onOpenChange: C,
              dir: M,
              triggerPointerDownPosRef: E,
              disabled: h,
              children: [(0, a.jsx)(mj.Provider, {
                scope: t,
                children: (0, a.jsx)(Cj, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: m.useCallback((e => {
                    D((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: m.useCallback((e => {
                    D((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), _ ? (0, a.jsxs)(sM, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: u,
                autoComplete: f,
                value: L,
                onChange: e => S(e.target.value),
                disabled: h,
                children: [void 0 === L ? (0, a.jsx)("option", {
                  value: ""
                }) : null, Array.from(P)]
              }, A) : null]
            })
          })
        };
      Sj.displayName = gj;
      var Ej = "SelectTrigger",
        _j = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, l = jj(r), i = Rj(Ej, r), s = i.disabled || n, d = Me(t, i.onTriggerChange), c = wj(r), [u, f, h] = dM((e => {
            const t = c().filter((e => !e.disabled)),
              r = t.find((e => e.value === i.value)),
              n = cM(t, e, r);
            void 0 !== n && i.onValueChange(n.value)
          })), v = () => {
            s || (i.onOpenChange(!0), h())
          };
          return (0, a.jsx)(gy, {
            asChild: !0,
            ...l,
            children: (0, a.jsx)(_e.button, {
              type: "button",
              role: "combobox",
              "aria-controls": i.contentId,
              "aria-expanded": i.open,
              "aria-required": i.required,
              "aria-autocomplete": "none",
              dir: i.dir,
              "data-state": i.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": iM(i.value) ? "" : void 0,
              ...o,
              ref: d,
              onClick: ow(o.onClick, (e => {
                e.currentTarget.focus()
              })),
              onPointerDown: ow(o.onPointerDown, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (v(), i.triggerPointerDownPosRef.current = {
                  x: Math.round(e.pageX),
                  y: Math.round(e.pageY)
                }, e.preventDefault())
              })),
              onKeyDown: ow(o.onKeyDown, (e => {
                const t = "" !== u.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || f(e.key), t && " " === e.key || vj.includes(e.key) && (v(), e.preventDefault())
              }))
            })
          })
        }));
      _j.displayName = Ej;
      var Pj = "SelectValue",
        Dj = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: l,
            placeholder: i = "",
            ...s
          } = e, d = Rj(Pj, r), {
            onValueNodeHasChildrenChange: c
          } = d, u = void 0 !== l, f = Me(t, d.onValueNodeChange);
          return hw((() => {
            c(u)
          }), [c, u]), (0, a.jsx)(_e.span, {
            ...s,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: iM(d.value) ? (0, a.jsx)(a.Fragment, {
              children: i
            }) : l
          })
        }));
      Dj.displayName = Pj;
      var Aj = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, a.jsx)(_e.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      Aj.displayName = "SelectIcon";
      var Ij = e => (0, a.jsx)(xy, {
        asChild: !0,
        ...e
      });
      Ij.displayName = "SelectPortal";
      var Tj = "SelectContent",
        Nj = m.forwardRef(((e, t) => {
          const r = Rj(Tj, e.__scopeSelect),
            [n, o] = m.useState();
          if (hw((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? S.createPortal((0, a.jsx)(kj, {
              scope: e.__scopeSelect,
              children: (0, a.jsx)(mj.Slot, {
                scope: e.__scopeSelect,
                children: (0, a.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, a.jsx)(Bj, {
            ...e,
            ref: t
          })
        }));
      Nj.displayName = Tj;
      var Oj = 10,
        [kj, Hj] = yj(Tj),
        Bj = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: l,
            onPointerDownOutside: i,
            side: s,
            sideOffset: d,
            align: c,
            alignOffset: u,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: p,
            hideWhenDetached: g,
            avoidCollisions: w,
            ...x
          } = e, y = Rj(Tj, r), [b, j] = m.useState(null), [M, R] = m.useState(null), C = Me(t, (e => j(e))), [L, S] = m.useState(null), [E, _] = m.useState(null), P = wj(r), [D, A] = m.useState(!1), I = m.useRef(!1);
          m.useEffect((() => {
            if (b) return _b(b)
          }), [b]), bb();
          const T = m.useCallback((e => {
              const [t, ...r] = P().map((e => e.ref.current)), [n] = r.slice(-1), a = document.activeElement;
              for (const r of e) {
                if (r === a) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && M && (M.scrollTop = 0), r === n && M && (M.scrollTop = M.scrollHeight), r?.focus(), document.activeElement !== a) return
              }
            }), [P, M]),
            N = m.useCallback((() => T([L, b])), [T, L, b]);
          m.useEffect((() => {
            D && N()
          }), [D, N]);
          const {
            onOpenChange: O,
            triggerPointerDownPosRef: k
          } = y;
          m.useEffect((() => {
            if (b) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (k.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (k.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : b.contains(r.target) || O(!1), document.removeEventListener("pointermove", t), k.current = null
                };
              return null !== k.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [b, O, k]), m.useEffect((() => {
            const e = () => O(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [O]);
          const [H, B] = dM((e => {
            const t = P().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = cM(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), z = m.useCallback(((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== y.value && y.value === t || n) && (S(e), n && (I.current = !0))
          }), [y.value]), V = m.useCallback((() => b?.focus()), [b]), G = m.useCallback(((e, t, r) => {
            const n = !I.current && !r;
            (void 0 !== y.value && y.value === t || n) && _(e)
          }), [y.value]), F = "popper" === n ? Vj : zj, U = F === Vj ? {
            side: s,
            sideOffset: d,
            align: c,
            alignOffset: u,
            arrowPadding: f,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: p,
            hideWhenDetached: g,
            avoidCollisions: w
          } : {};
          return (0, a.jsx)(kj, {
            scope: r,
            content: b,
            viewport: M,
            onViewportChange: R,
            itemRefCallback: z,
            selectedItem: L,
            onItemLeave: V,
            itemTextRefCallback: G,
            focusSelectedItem: N,
            selectedItemText: E,
            position: n,
            isPositioned: D,
            searchRef: H,
            children: (0, a.jsx)(Mb.A, {
              as: Re,
              allowPinchZoom: !0,
              children: (0, a.jsx)(hb, {
                asChild: !0,
                trapped: y.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: ow(o, (e => {
                  y.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, a.jsx)(Ox, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: l,
                  onPointerDownOutside: i,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => y.onOpenChange(!1),
                  children: (0, a.jsx)(F, {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...x,
                    ...U,
                    onPlaced: () => A(!0),
                    ref: C,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: ow(x.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || B(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = P().filter((e => !e.disabled)).map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1)
                        }
                        setTimeout((() => T(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      Bj.displayName = "SelectContentImpl";
      var zj = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, l = Rj(Tj, r), i = Hj(Tj, r), [s, d] = m.useState(null), [c, u] = m.useState(null), f = Me(t, (e => u(e))), h = wj(r), v = m.useRef(!1), p = m.useRef(!0), {
          viewport: g,
          selectedItem: w,
          selectedItemText: x,
          focusSelectedItem: y
        } = i, b = m.useCallback((() => {
          if (l.trigger && l.valueNode && s && c && g && w && x) {
            const e = l.trigger.getBoundingClientRect(),
              t = c.getBoundingClientRect(),
              r = l.valueNode.getBoundingClientRect(),
              a = x.getBoundingClientRect();
            if ("rtl" !== l.dir) {
              const n = a.left - t.left,
                o = r.left - n,
                l = e.left - o,
                i = e.width + l,
                d = Math.max(i, t.width),
                c = window.innerWidth - Oj,
                u = aw(o, [Oj, c - d]);
              s.style.minWidth = i + "px", s.style.left = u + "px"
            } else {
              const n = t.right - a.right,
                o = window.innerWidth - r.right - n,
                l = window.innerWidth - e.right - o,
                i = e.width + l,
                d = Math.max(i, t.width),
                c = window.innerWidth - Oj,
                u = aw(o, [Oj, c - d]);
              s.style.minWidth = i + "px", s.style.right = u + "px"
            }
            const o = h(),
              i = window.innerHeight - 2 * Oj,
              d = g.scrollHeight,
              u = window.getComputedStyle(c),
              f = parseInt(u.borderTopWidth, 10),
              p = parseInt(u.paddingTop, 10),
              m = parseInt(u.borderBottomWidth, 10),
              y = f + p + d + parseInt(u.paddingBottom, 10) + m,
              b = Math.min(5 * w.offsetHeight, y),
              j = window.getComputedStyle(g),
              M = parseInt(j.paddingTop, 10),
              R = parseInt(j.paddingBottom, 10),
              C = e.top + e.height / 2 - Oj,
              L = i - C,
              S = w.offsetHeight / 2,
              E = f + p + (w.offsetTop + S),
              _ = y - E;
            if (E <= C) {
              const e = w === o[o.length - 1].ref.current;
              s.style.bottom = "0px";
              const t = c.clientHeight - g.offsetTop - g.offsetHeight,
                r = E + Math.max(L, S + (e ? R : 0) + t + m);
              s.style.height = r + "px"
            } else {
              const e = w === o[0].ref.current;
              s.style.top = "0px";
              const t = Math.max(C, f + g.offsetTop + (e ? M : 0) + S) + _;
              s.style.height = t + "px", g.scrollTop = E - C + g.offsetTop
            }
            s.style.margin = `${Oj}px 0`, s.style.minHeight = b + "px", s.style.maxHeight = i + "px", n?.(), requestAnimationFrame((() => v.current = !0))
          }
        }), [h, l.trigger, l.valueNode, s, c, g, w, x, l.dir, n]);
        hw((() => b()), [b]);
        const [j, M] = m.useState();
        hw((() => {
          c && M(window.getComputedStyle(c).zIndex)
        }), [c]);
        const R = m.useCallback((e => {
          e && !0 === p.current && (b(), y?.(), p.current = !1)
        }), [b, y]);
        return (0, a.jsx)(Gj, {
          scope: r,
          contentWrapper: s,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: R,
          children: (0, a.jsx)("div", {
            ref: d,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: j
            },
            children: (0, a.jsx)(_e.div, {
              ...o,
              ref: f,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      zj.displayName = "SelectItemAlignedPosition";
      var Vj = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = Oj,
          ...l
        } = e, i = jj(r);
        return (0, a.jsx)(my, {
          ...i,
          ...l,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...l.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      Vj.displayName = "SelectPopperPosition";
      var [Gj, Fj] = yj(Tj, {}), Uj = "SelectViewport", Xj = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, l = Hj(Uj, r), i = Fj(Uj, r), s = Me(t, l.onViewportChange), d = m.useRef(0);
        return (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, a.jsx)(mj.Slot, {
            scope: r,
            children: (0, a.jsx)(_e.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: s,
              style: {
                position: "relative",
                flex: 1,
                overflow: "auto",
                ...o.style
              },
              onScroll: ow(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = i;
                if (n?.current && r) {
                  const e = Math.abs(d.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * Oj,
                      a = parseFloat(r.style.minHeight),
                      o = parseFloat(r.style.height),
                      l = Math.max(a, o);
                    if (l < n) {
                      const a = l + e,
                        o = Math.min(n, a),
                        i = a - o;
                      r.style.height = o + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                d.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      Xj.displayName = Uj;
      var qj = "SelectGroup",
        [Kj, Wj] = yj(qj);
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Vx();
        return (0, a.jsx)(Kj, {
          scope: r,
          id: o,
          children: (0, a.jsx)(_e.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = qj;
      var $j = "SelectLabel";
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Wj($j, r);
        return (0, a.jsx)(_e.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = $j;
      var Zj = "SelectItem",
        [Yj, Qj] = yj(Zj),
        Jj = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: l,
            ...i
          } = e, s = Rj(Zj, r), d = Hj(Zj, r), c = s.value === n, [u, f] = m.useState(l ?? ""), [h, v] = m.useState(!1), p = Me(t, (e => d.itemRefCallback?.(e, n, o))), g = Vx(), w = () => {
            o || (s.onValueChange(n), s.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, a.jsx)(Yj, {
            scope: r,
            value: n,
            disabled: o,
            textId: g,
            isSelected: c,
            onItemTextChange: m.useCallback((e => {
              f((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, a.jsx)(mj.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: u,
              children: (0, a.jsx)(_e.div, {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": c && h,
                "data-state": c ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: p,
                onFocus: ow(i.onFocus, (() => v(!0))),
                onBlur: ow(i.onBlur, (() => v(!1))),
                onPointerUp: ow(i.onPointerUp, w),
                onPointerMove: ow(i.onPointerMove, (e => {
                  o ? d.onItemLeave?.() : e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: ow(i.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && d.onItemLeave?.()
                })),
                onKeyDown: ow(i.onKeyDown, (e => {
                  "" !== d.searchRef?.current && " " === e.key || (pj.includes(e.key) && w(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      Jj.displayName = Zj;
      var eM = "SelectItemText",
        tM = m.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...l
          } = e, i = Rj(eM, r), s = Hj(eM, r), d = Qj(eM, r), c = Lj(eM, r), [u, f] = m.useState(null), h = Me(t, (e => f(e)), d.onItemTextChange, (e => s.itemTextRefCallback?.(e, d.value, d.disabled))), v = u?.textContent, p = m.useMemo((() => (0, a.jsx)("option", {
            value: d.value,
            disabled: d.disabled,
            children: v
          }, d.value)), [d.disabled, d.value, v]), {
            onNativeOptionAdd: g,
            onNativeOptionRemove: w
          } = c;
          return hw((() => (g(p), () => w(p))), [g, w, p]), (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(_e.span, {
              id: d.textId,
              ...l,
              ref: h
            }), d.isSelected && i.valueNode && !i.valueNodeHasChildren ? S.createPortal(l.children, i.valueNode) : null]
          })
        }));
      tM.displayName = eM;
      var rM = "SelectItemIndicator";
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Qj(rM, r).isSelected ? (0, a.jsx)(_e.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = rM;
      var nM = "SelectScrollUpButton";
      m.forwardRef(((e, t) => {
        const r = Hj(nM, e.__scopeSelect),
          n = Fj(nM, e.__scopeSelect),
          [o, l] = m.useState(!1),
          i = Me(t, n.onScrollButtonChange);
        return hw((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              l(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, a.jsx)(oM, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = nM;
      var aM = "SelectScrollDownButton";
      m.forwardRef(((e, t) => {
        const r = Hj(aM, e.__scopeSelect),
          n = Fj(aM, e.__scopeSelect),
          [o, l] = m.useState(!1),
          i = Me(t, n.onScrollButtonChange);
        return hw((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              l(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, a.jsx)(oM, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = aM;
      var oM = m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, l = Hj("SelectScrollButton", r), i = m.useRef(null), s = wj(r), d = m.useCallback((() => {
          null !== i.current && (window.clearInterval(i.current), i.current = null)
        }), []);
        return m.useEffect((() => () => d()), [d]), hw((() => {
          const e = s().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [s]), (0, a.jsx)(_e.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: ow(o.onPointerDown, (() => {
            null === i.current && (i.current = window.setInterval(n, 50))
          })),
          onPointerMove: ow(o.onPointerMove, (() => {
            l.onItemLeave?.(), null === i.current && (i.current = window.setInterval(n, 50))
          })),
          onPointerLeave: ow(o.onPointerLeave, (() => {
            d()
          }))
        })
      }));
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, a.jsx)(_e.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var lM = "SelectArrow";

      function iM(e) {
        return "" === e || void 0 === e
      }
      m.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = jj(r), l = Rj(lM, r), i = Hj(lM, r);
        return l.open && "popper" === i.position ? (0, a.jsx)(wy, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = lM;
      var sM = m.forwardRef(((e, t) => {
        const {
          value: r,
          ...n
        } = e, o = m.useRef(null), l = Me(t, o), i = fw(r);
        return m.useEffect((() => {
          const e = o.current,
            t = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(t, "value").set;
          if (i !== r && n) {
            const t = new Event("change", {
              bubbles: !0
            });
            n.call(e, r), e.dispatchEvent(t)
          }
        }), [i, r]), (0, a.jsx)(Pe, {
          asChild: !0,
          children: (0, a.jsx)("select", {
            ...n,
            ref: l,
            defaultValue: r
          })
        })
      }));

      function dM(e) {
        const t = sw(e),
          r = m.useRef(""),
          n = m.useRef(0),
          a = m.useCallback((e => {
            const a = r.current + e;
            t(a),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(a)
          }), [t]),
          o = m.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return m.useEffect((() => () => window.clearTimeout(n.current)), []), [r, a, o]
      }

      function cM(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          a = r ? e.indexOf(r) : -1;
        let o = (l = e, i = Math.max(a, 0), l.map(((e, t) => l[(i + t) % l.length])));
        var l, i;
        1 === n.length && (o = o.filter((e => e !== r)));
        const s = o.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return s !== r ? s : void 0
      }
      sM.displayName = "BubbleSelect";
      var uM = Sj,
        fM = _j,
        hM = Dj,
        vM = Aj,
        pM = Ij,
        gM = Nj,
        mM = Xj,
        wM = Jj,
        xM = tM,
        yM = "ScrollArea",
        [bM, jM] = lw(yM),
        [MM, RM] = bM(yM),
        CM = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: l = 600,
            ...i
          } = e, [s, d] = m.useState(null), [c, u] = m.useState(null), [f, h] = m.useState(null), [v, p] = m.useState(null), [g, w] = m.useState(null), [x, y] = m.useState(0), [b, j] = m.useState(0), [M, R] = m.useState(!1), [C, L] = m.useState(!1), S = Me(t, (e => d(e))), E = uw(o);
          return (0, a.jsx)(MM, {
            scope: r,
            type: n,
            dir: E,
            scrollHideDelay: l,
            scrollArea: s,
            viewport: c,
            onViewportChange: u,
            content: f,
            onContentChange: h,
            scrollbarX: v,
            onScrollbarXChange: p,
            scrollbarXEnabled: M,
            onScrollbarXEnabledChange: R,
            scrollbarY: g,
            onScrollbarYChange: w,
            scrollbarYEnabled: C,
            onScrollbarYEnabledChange: L,
            onCornerWidthChange: y,
            onCornerHeightChange: j,
            children: (0, a.jsx)(_e.div, {
              dir: E,
              ...i,
              ref: S,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": x + "px",
                "--radix-scroll-area-corner-height": b + "px",
                ...e.style
              }
            })
          })
        }));
      CM.displayName = yM;
      var LM = "ScrollAreaViewport",
        SM = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...l
          } = e, i = RM(LM, r), s = Me(t, m.useRef(null), i.onViewportChange);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, a.jsx)(_e.div, {
              "data-radix-scroll-area-viewport": "",
              ...l,
              ref: s,
              style: {
                overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, a.jsx)("div", {
                ref: i.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: n
              })
            })]
          })
        }));
      SM.displayName = LM;
      var EM = "ScrollAreaScrollbar",
        _M = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = RM(EM, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: l,
            onScrollbarYEnabledChange: i
          } = o, s = "horizontal" === e.orientation;
          return m.useEffect((() => (s ? l(!0) : i(!0), () => {
            s ? l(!1) : i(!1)
          })), [s, l, i]), "hover" === o.type ? (0, a.jsx)(PM, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, a.jsx)(DM, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, a.jsx)(AM, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, a.jsx)(IM, {
            ...n,
            ref: t
          }) : null
        }));
      _M.displayName = EM;
      var PM = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = RM(EM, e.__scopeScrollArea), [l, i] = m.useState(!1);
          return m.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), i(!0)
                },
                n = () => {
                  t = window.setTimeout((() => i(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, a.jsx)(yy, {
            present: r || l,
            children: (0, a.jsx)(AM, {
              "data-state": l ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        DM = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = RM(EM, e.__scopeScrollArea), l = "horizontal" === e.orientation, i = YM((() => d("SCROLL_END")), 100), [s, d] = ("hidden", c = {
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
          }, m.useReducer(((e, t) => c[e][t] ?? e), "hidden"));
          var c;
          return m.useEffect((() => {
            if ("idle" === s) {
              const e = window.setTimeout((() => d("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [s, o.scrollHideDelay, d]), m.useEffect((() => {
            const e = o.viewport,
              t = l ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (d("SCROLL"), i()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [o.viewport, l, d, i]), (0, a.jsx)(yy, {
            present: r || "hidden" !== s,
            children: (0, a.jsx)(IM, {
              "data-state": "hidden" === s ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: ow(e.onPointerEnter, (() => d("POINTER_ENTER"))),
              onPointerLeave: ow(e.onPointerLeave, (() => d("POINTER_LEAVE")))
            })
          })
        })),
        AM = m.forwardRef(((e, t) => {
          const r = RM(EM, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [l, i] = m.useState(!1),
            s = "horizontal" === e.orientation,
            d = YM((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                i(s ? e : t)
              }
            }), 10);
          return QM(r.viewport, d), QM(r.content, d), (0, a.jsx)(yy, {
            present: n || l,
            children: (0, a.jsx)(IM, {
              "data-state": l ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        IM = m.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = RM(EM, e.__scopeScrollArea), l = m.useRef(null), i = m.useRef(0), [s, d] = m.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), c = XM(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: d,
            hasThumb: Boolean(c > 0 && c < 1),
            onThumbChange: e => l.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function f(e, t) {
            return function(e, t, r, n = "ltr") {
              const a = qM(r),
                o = t || a / 2,
                l = a - o,
                i = r.scrollbar.paddingStart + o,
                s = r.scrollbar.size - r.scrollbar.paddingEnd - l,
                d = r.content - r.viewport;
              return WM([i, s], "ltr" === n ? [0, d] : [-1 * d, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, a.jsx)(TM, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                const e = KM(o.viewport.scrollLeft, s, o.dir);
                l.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = f(e, o.dir))
            }
          }) : "vertical" === r ? (0, a.jsx)(NM, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && l.current) {
                const e = KM(o.viewport.scrollTop, s);
                l.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = f(e))
            }
          }) : null
        })),
        TM = m.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, l = RM(EM, e.__scopeScrollArea), [i, s] = m.useState(), d = m.useRef(null), c = Me(t, d, l.onScrollbarXChange);
          return m.useEffect((() => {
            d.current && s(getComputedStyle(d.current))
          }), [d]), (0, a.jsx)(HM, {
            "data-orientation": "horizontal",
            ...o,
            ref: c,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": qM(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (l.viewport) {
                const n = l.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), $M(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && l.viewport && i && n({
                content: l.viewport.scrollWidth,
                viewport: l.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: UM(i.paddingLeft),
                  paddingEnd: UM(i.paddingRight)
                }
              })
            }
          })
        })),
        NM = m.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, l = RM(EM, e.__scopeScrollArea), [i, s] = m.useState(), d = m.useRef(null), c = Me(t, d, l.onScrollbarYChange);
          return m.useEffect((() => {
            d.current && s(getComputedStyle(d.current))
          }), [d]), (0, a.jsx)(HM, {
            "data-orientation": "vertical",
            ...o,
            ref: c,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === l.dir ? 0 : void 0,
              left: "rtl" === l.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": qM(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (l.viewport) {
                const n = l.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), $M(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && l.viewport && i && n({
                content: l.viewport.scrollHeight,
                viewport: l.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: UM(i.paddingTop),
                  paddingEnd: UM(i.paddingBottom)
                }
              })
            }
          })
        })),
        [OM, kM] = bM(EM),
        HM = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: l,
            onThumbPointerUp: i,
            onThumbPointerDown: s,
            onThumbPositionChange: d,
            onDragScroll: c,
            onWheelScroll: u,
            onResize: f,
            ...h
          } = e, v = RM(EM, r), [p, g] = m.useState(null), w = Me(t, (e => g(e))), x = m.useRef(null), y = m.useRef(""), b = v.viewport, j = n.content - n.viewport, M = sw(u), R = sw(d), C = YM(f, 10);

          function L(e) {
            if (x.current) {
              const t = e.clientX - x.current.left,
                r = e.clientY - x.current.top;
              c({
                x: t,
                y: r
              })
            }
          }
          return m.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = p?.contains(t);
              r && M(e, j)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [b, p, j, M]), m.useEffect(R, [n, R]), QM(p, C), QM(v.content, C), (0, a.jsx)(OM, {
            scope: r,
            scrollbar: p,
            hasThumb: o,
            onThumbChange: sw(l),
            onThumbPointerUp: sw(i),
            onThumbPositionChange: R,
            onThumbPointerDown: sw(s),
            children: (0, a.jsx)(_e.div, {
              ...h,
              ref: w,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: ow(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), x.current = p.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), L(e))
              })),
              onPointerMove: ow(e.onPointerMove, L),
              onPointerUp: ow(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), x.current = null
              }))
            })
          })
        })),
        BM = "ScrollAreaThumb",
        zM = m.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = kM(BM, e.__scopeScrollArea);
          return (0, a.jsx)(yy, {
            present: r || o.hasThumb,
            children: (0, a.jsx)(VM, {
              ref: t,
              ...n
            })
          })
        })),
        VM = m.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, l = RM(BM, r), i = kM(BM, r), {
            onThumbPositionChange: s
          } = i, d = Me(t, (e => i.onThumbChange(e))), c = m.useRef(), u = YM((() => {
            c.current && (c.current(), c.current = void 0)
          }), 100);
          return m.useEffect((() => {
            const e = l.viewport;
            if (e) {
              const t = () => {
                if (u(), !c.current) {
                  const t = ZM(e, s);
                  c.current = t, s()
                }
              };
              return s(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [l.viewport, u, s]), (0, a.jsx)(_e.div, {
            "data-state": i.hasThumb ? "visible" : "hidden",
            ...o,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: ow(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              i.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: ow(e.onPointerUp, i.onThumbPointerUp)
          })
        }));
      zM.displayName = BM;
      var GM = "ScrollAreaCorner";
      m.forwardRef(((e, t) => {
        const r = RM(GM, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, a.jsx)(FM, {
          ...e,
          ref: t
        }) : null
      })).displayName = GM;
      var FM = m.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = RM(GM, r), [l, i] = m.useState(0), [s, d] = m.useState(0), c = Boolean(l && s);
        return QM(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        })), QM(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), i(e)
        })), c ? (0, a.jsx)(_e.div, {
          ...n,
          ref: t,
          style: {
            width: l,
            height: s,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function UM(e) {
        return e ? parseInt(e, 10) : 0
      }

      function XM(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function qM(e) {
        const t = XM(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function KM(e, t, r = "ltr") {
        const n = qM(t),
          a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          o = t.scrollbar.size - a,
          l = t.content - t.viewport,
          i = o - n,
          s = aw(e, "ltr" === r ? [0, l] : [-1 * l, 0]);
        return WM([0, l], [0, i])(s)
      }

      function WM(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function $M(e, t) {
        return e > 0 && e < t
      }
      var ZM = (e, t = (() => {})) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function a() {
          const o = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            l = r.left !== o.left,
            i = r.top !== o.top;
          (l || i) && t(), r = o, n = window.requestAnimationFrame(a)
        }(), () => window.cancelAnimationFrame(n)
      };

      function YM(e, t) {
        const r = sw(e),
          n = m.useRef(0);
        return m.useEffect((() => () => window.clearTimeout(n.current)), []), m.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function QM(e, t) {
        const r = sw(t);
        hw((() => {
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
      var JM = CM,
        eR = SM,
        tR = _M,
        rR = zM;
      const nR = (0, m.forwardRef)((({
          children: e,
          label: t,
          hint: r,
          placeholder: n,
          description: o,
          testId: l,
          hideLabel: s,
          hideDescription: d,
          hideRequiredAsterisk: c,
          hideDividers: u,
          errorMessage: f,
          value: h,
          defaultValue: v,
          onValueChange: p,
          open: g,
          defaultOpen: w,
          onOpenChange: x,
          isRequired: y,
          isDisabled: b,
          isReadOnly: j,
          className: M,
          ariaLabelledBy: R
        }, C) => {
          const L = Bd((0, m.useRef)(null), C),
            S = (0, m.useId)(),
            E = (0, m.useId)(),
            [_ = !1, D] = Fd({
              prop: g,
              defaultProp: w,
              onChange: x
            });
          return (0, a.jsxs)("div", {
            className: i("foundry_uaq1gw0", M),
            children: [(t && !s || r) && (0, a.jsxs)("div", {
              className: "foundry_uaq1gw1",
              children: [(0, a.jsx)(P, {
                enabled: !!s,
                children: (0, a.jsx)(J, {
                  className: "foundry_uaq1gw2",
                  asChild: !0,
                  children: (0, a.jsxs)("label", {
                    id: S,
                    children: [t, y && !c && (0, a.jsx)("span", {
                      className: "foundry_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, a.jsx)(le, {
                className: "foundry_uaq1gw3",
                children: r
              })]
            }), (0, a.jsxs)(uM, {
              required: y,
              disabled: b,
              open: _,
              onOpenChange: () => D(!j && !_),
              value: h,
              defaultValue: v,
              onValueChange: p,
              children: [(0, a.jsxs)(fM, {
                className: i("foundry_uaq1gw5 foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf", !!f && "foundry_uaq1gw7", j && "foundry_uaq1gw6"),
                ref: L,
                "data-testid": l,
                "aria-activedescendant": h,
                "aria-labelledby": R || S,
                "aria-controls": E,
                children: [(0, a.jsx)("span", {
                  className: "foundry_uaq1gw8",
                  children: (0, a.jsx)(hM, {
                    placeholder: n,
                    "aria-label": h
                  })
                }), (0, a.jsx)(vM, {
                  asChild: !0,
                  className: i("foundry_uaq1gw9", (j || b) && "foundry_uaq1gwa"),
                  children: _ ? (0, a.jsx)(mt, {
                    size: "LG",
                    label: ""
                  }) : (0, a.jsx)(ht, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, a.jsx)(pM, {
                children: (0, a.jsx)(gM, {
                  id: E,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_uaq1gwb",
                  children: (0, a.jsxs)(JM, {
                    className: "foundry_uaq1gwj",
                    type: "auto",
                    children: [(0, a.jsx)(mM, {
                      className: i("foundry_uaq1gwc", u && "foundry_uaq1gwd"),
                      asChild: !0,
                      children: (0, a.jsx)(eR, {
                        className: "foundry_uaq1gwk",
                        children: e
                      })
                    }), (0, a.jsx)(tR, {
                      className: "foundry_uaq1gwl",
                      orientation: "vertical",
                      children: (0, a.jsx)(rR, {
                        className: "foundry_uaq1gwm"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, a.jsx)(P, {
              enabled: !!f || d,
              children: (0, a.jsx)(J, {
                className: "foundry_uaq1gwf",
                children: o
              })
            }), f && (0, a.jsxs)(J, {
              appearance: "bold",
              className: "foundry_uaq1gwg",
              children: [(0, a.jsx)(Bo, {
                size: "MD",
                label: "",
                className: "foundry_uaq1gwh"
              }), f]
            })]
          })
        })),
        aR = (0, m.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: o,
          iconPosition: l,
          isDisabled: i,
          testId: s
        }, d) => {
          const c = Bd((0, m.useRef)(null), d),
            u = r && n[r];
          return (0, a.jsxs)(wM, {
            value: t,
            className: "foundry_uaq1gwe foundry_tdsdcdd foundry_tdsdcd0 foundry_tdsdcdf",
            ref: c,
            disabled: i,
            "data-testid": s,
            children: [u && "left" === l && (0, a.jsx)(u, {
              label: o || "",
              size: "LG"
            }), (0, a.jsx)(xM, {
              children: e
            }), u && "right" === l && (0, a.jsx)(u, {
              label: o || "",
              size: "LG",
              className: "foundry_uaq1gwi"
            })]
          })
        }))
    }
  }
]);